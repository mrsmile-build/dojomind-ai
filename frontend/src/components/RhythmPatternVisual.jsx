import { useState, useEffect, useRef } from 'react'

function RhythmPatternVisual({ visual }) {
  const [pats, setPats] = useState(visual.patterns || [])
  const [pIdx, setPIdx] = useState(0)
  const [bpm, setBpm] = useState(visual.initialBpm || 90)
  const [playing, setPlaying] = useState(false)
  const [step, setStep] = useState(-1)
  const ctxRef = useRef(null)
  const nextRef = useRef(0)
  const stepRef = useRef(0)
  const timerRef = useRef(null)

  const pat = pats[pIdx] || { lanes: [], steps: 16, division: 4 }
  const steps = pat.steps || 16
  const division = pat.division || 4

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

  const voice = (lane, t) => {
    const ctx = ctxRef.current
    if (lane.voice === 'bell') {
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.type = 'square'; o.frequency.value = 1250
      g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.14)
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.14)
    } else if (lane.voice === 'kick') {
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.type = 'sine'
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(50, t + 0.12)
      g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.16)
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.16)
    } else if (lane.voice === 'snare') {
      noise(ctx, t, 0.12, 0.35)
    } else {
      noise(ctx, t, 0.045, 0.14)
    }
  }

  const scheduler = () => {
    const ctx = ctxRef.current
    const secPerStep = 60 / bpm / division
    while (nextRef.current < ctx.currentTime + 0.1) {
      const s = stepRef.current % steps
      ;(pat.lanes || []).forEach(lane => { if (lane.grid && lane.grid[s]) voice(lane, nextRef.current) })
      setStep(s)
      stepRef.current++
      nextRef.current += secPerStep
    }
    timerRef.current = setTimeout(scheduler, 25)
  }

  useEffect(() => {
    if (playing) { startAudio(); stepRef.current = 0; nextRef.current = ctxRef.current.currentTime; scheduler() }
    else if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; setStep(-1) }
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [playing, bpm, pIdx])

  const toggleCell = (laneIdx, s) => {
    setPats(prev => prev.map((p, pi) => {
      if (pi !== pIdx) return p
      const lanes = p.lanes.map((ln, li) => {
        if (li !== laneIdx) return ln
        const grid = ln.grid.slice(); grid[s] = grid[s] ? 0 : 1
        return Object.assign({}, ln, { grid })
      })
      return Object.assign({}, p, { lanes })
    }))
  }

  return (
    <div className="rhythm-pattern-visual">
      <div className="rp-header">
        <span className="eyebrow">GROOVE LIBRARY</span>
        <h3>{visual.title || 'Play the groove'}</h3>
      </div>

      <div className="rp-patterns">
        {pats.map((p, i) => (
          <button key={p.name} className={i === pIdx ? 'rp-chip active' : 'rp-chip'} onClick={() => { setPIdx(i); setPlaying(false) }}>
            {p.name}
          </button>
        ))}
      </div>

      <div className="rp-meta">
        <span>{pat.timeSig || '4/4'}</span>
        <span>{bpm} BPM</span>
        {pat.syllables && <span className="rp-syl">{pat.syllables}</span>}
      </div>

      <div className="rp-grid">
        {(pat.lanes || []).map((lane, li) => (
          <div className="rp-row" key={lane.name}>
            <span className="rp-lane">{lane.name}</span>
            <div className="rp-cells">
              {(lane.grid || []).map((on, s) => (
                <button
                  key={s}
                  className={
                    (on ? 'rp-cell on ' : 'rp-cell ') +
                    (s === step ? 'now ' : '') +
                    (s % 4 === 0 ? 'beat ' : '')
                  }
                  onClick={() => toggleCell(li, s)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rp-controls">
        <button className="primary-button" onClick={() => setPlaying(v => !v)}>{playing ? 'Stop' : 'Play'}</button>
        <input type="range" min="50" max="200" value={bpm} onChange={e => setBpm(parseInt(e.target.value))} />
      </div>

      <p className="rp-hint">Tap any square to turn that hit on or off — fix the groove until it sounds right to your ear, then tell me the syllables and I will save it.</p>
      {visual.caption && <p className="rp-caption">{visual.caption}</p>}
    </div>
  )
}

export default RhythmPatternVisual
