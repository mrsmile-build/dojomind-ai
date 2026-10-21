import { useState, useRef, useEffect } from 'react'

const LANES = [
  { name: 'Bell', voice: 'bell' },
  { name: 'Kick', voice: 'kick' },
  { name: 'Snare', voice: 'snare' },
  { name: 'Hat', voice: 'hat' },
]

function GrooveRecorder({ visual }) {
  const steps = visual.steps || 16
  const division = visual.division || 4
  const [bpm, setBpm] = useState(visual.initialBpm || 90)
  const [rec, setRec] = useState(false)
  const [grid, setGrid] = useState(LANES.map(() => Array(steps).fill(0)))
  const [step, setStep] = useState(-1)
  const ctxRef = useRef(null)
  const nextRef = useRef(0)
  const stepRef = useRef(0)
  const timerRef = useRef(null)
  const startRef = useRef(0)
  const tapsRef = useRef([])

  const secPerStep = 60 / bpm / division

  const startAudio = () => {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
  }

  const noise = (ctx, t, dur, vol) => {
    const b = ctx.createBufferSource()
    const buf = ctx.createBuffer(1, Math.max(1, ctx.sampleRate * dur), ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length)
    b.buffer = buf
    const g = ctx.createGain(); g.gain.value = vol
    b.connect(g); g.connect(ctx.destination); b.start(t)
  }

  const voice = (laneIdx, t) => {
    const ctx = ctxRef.current
    const v = LANES[laneIdx].voice
    if (v === 'bell') {
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.type = 'square'; o.frequency.value = 1250
      g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.14)
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.14)
    } else if (v === 'kick') {
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(50, t + 0.12)
      g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.16)
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.16)
    } else if (v === 'snare') { noise(ctx, t, 0.12, 0.35) }
    else { noise(ctx, t, 0.045, 0.14) }
  }

  const click = (t, accent) => {
    const ctx = ctxRef.current
    const o = ctx.createOscillator(); const g = ctx.createGain()
    o.type = 'sine'; o.frequency.value = accent ? 1000 : 750
    g.gain.setValueAtTime(accent ? 0.3 : 0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
    o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.05)
  }

  const scheduler = () => {
    const ctx = ctxRef.current
    while (nextRef.current < ctx.currentTime + 0.1) {
      const s = stepRef.current % steps
      click(nextRef.current, s === 0)
      setStep(s)
      stepRef.current++
      nextRef.current += secPerStep
    }
    timerRef.current = setTimeout(scheduler, 25)
  }

  useEffect(() => {
    if (rec) {
      startAudio()
      tapsRef.current = []
      stepRef.current = 0
      startRef.current = ctxRef.current.currentTime + 0.15
      nextRef.current = startRef.current
      scheduler()
    } else if (timerRef.current) {
      clearTimeout(timerRef.current); timerRef.current = null; setStep(-1)
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [rec, bpm])

  const tap = (laneIdx) => {
    if (!rec) return
    const t = ctxRef.current.currentTime
    tapsRef.current.push({ lane: laneIdx, t })
    voice(laneIdx, t)
  }

  const stop = () => {
    setRec(false)
    const sps = secPerStep
    const loopDur = steps * sps
    const g = LANES.map(() => Array(steps).fill(0))
    tapsRef.current.forEach(({ lane, t }) => {
      let rel = t - startRef.current
      rel = ((rel % loopDur) + loopDur) % loopDur
      const idx = Math.round(rel / sps) % steps
      g[lane][idx] = 1
    })
    setGrid(g)
  }

  const code = grid.map((row, i) => LANES[i].name + ':' + row.join('')).join('  ')

  return (
    <div className="groove-recorder">
      <div className="gr-header">
        <span className="eyebrow">GROOVE RECORDER</span>
        <h3>{visual.title || 'Play it — the app writes it down'}</h3>
      </div>

      <div className="gr-controls">
        <button className={rec ? 'primary-button' : 'timer-button'} onClick={() => (rec ? stop() : setRec(true))}>
          {rec ? 'Stop & write it' : 'Record'}
        </button>
        <input type="range" min="50" max="180" value={bpm} onChange={e => setBpm(parseInt(e.target.value))} />
        <span>{bpm} BPM</span>
      </div>

      <div className="gr-pads">
        {LANES.map((l, i) => (
          <button key={l.name} className="gr-pad" onPointerDown={() => tap(i)}>{l.name}</button>
        ))}
      </div>

      <div className="gr-grid">
        {grid.map((row, i) => (
          <div className="gr-row" key={LANES[i].name}>
            <span className="gr-lane">{LANES[i].name}</span>
            <div className="gr-cells">
              {row.map((on, s) => (
                <span key={s} className={(on ? 'gr-cell on ' : 'gr-cell ') + (s === step ? 'now' : '')} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="gr-code">{code}</div>
      <p className="gr-hint">{visual.caption || 'Press Record, play the groove on the pads while the click runs, then Stop. Copy the code line above and send it to me — I will save your playing as the official pattern.'}</p>
    </div>
  )
}

export default GrooveRecorder
