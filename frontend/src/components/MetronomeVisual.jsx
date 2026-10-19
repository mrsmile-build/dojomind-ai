import { useState, useEffect, useRef } from 'react'

function MetronomeVisual({ visual }) {
  const [bpm, setBpm] = useState(visual.initialBpm || 80)
  const [playing, setPlaying] = useState(false)
  const [tapTimes, setTapTimes] = useState([])
  const [accuracy, setAccuracy] = useState(null)
  const [beat, setBeat] = useState(0)
  const audioCtxRef = useRef(null)
  const nextNoteRef = useRef(0)
  const timerRef = useRef(null)
  const beatRef = useRef(0)

  const startAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }

  const playClick = (time, accent) => {
    const ctx = audioCtxRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = accent ? 1000 : 800
    gain.gain.setValueAtTime(0.35, time)
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06)
    osc.start(time)
    osc.stop(time + 0.06)
  }

  const scheduler = () => {
    const ctx = audioCtxRef.current
    const secondsPerBeat = 60 / bpm
    while (nextNoteRef.current < ctx.currentTime + 0.1) {
      playClick(nextNoteRef.current, beatRef.current === 0)
      beatRef.current = (beatRef.current + 1) % 4
      nextNoteRef.current += secondsPerBeat
    }
    setBeat(beatRef.current)
    timerRef.current = setTimeout(scheduler, 25)
  }

  useEffect(() => {
    if (playing) {
      startAudio()
      beatRef.current = 0
      nextNoteRef.current = audioCtxRef.current.currentTime
      scheduler()
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, bpm])

  const handleTap = () => {
    const now = performance.now()
    const newTaps = [...tapTimes, now].slice(-8)
    setTapTimes(newTaps)
    if (newTaps.length >= 3) {
      const intervals = []
      for (let i = 1; i < newTaps.length; i++) {
        intervals.push(newTaps[i] - newTaps[i - 1])
      }
      const avgInterval = intervals.reduce((a, b) => a + b) / intervals.length
      const targetInterval = 60000 / bpm
      const error = Math.abs(avgInterval - targetInterval)
      const accuracyPct = Math.max(0, Math.round(100 - (error / targetInterval) * 100))
      setAccuracy(accuracyPct)
    }
  }

  const reset = () => {
    setPlaying(false)
    setTapTimes([])
    setAccuracy(null)
    beatRef.current = 0
    setBeat(0)
  }

  const feedback = accuracy === null ? ''
    : accuracy >= 90 ? 'Right on the beat!'
    : accuracy >= 75 ? 'Close — keep going'
    : accuracy >= 55 ? 'Feel the space between beats'
    : 'Keep tapping — your ear is learning'

  return (
    <div className="metronome-visual">
      <div className="met-header">
        <span className="eyebrow">PRACTICE TOOL</span>
        <h3>{visual.title || 'Metronome — Your Steady Heartbeat'}</h3>
      </div>

      <div className="met-display">
        <div className="met-beat-dots">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={playing && beat === i ? 'met-dot active' + (i === 0 ? ' strong' : '') : 'met-dot'}
            />
          ))}
        </div>
        <div className="met-bpm">{bpm}<span className="met-unit"> BPM</span></div>
        <div className="met-label">beats per minute</div>
      </div>

      <div className="met-slider">
        <input
          type="range"
          min="40"
          max="240"
          step="1"
          value={bpm}
          onChange={(e) => setBpm(parseInt(e.target.value))}
        />
        <div className="met-scale">
          <span>40 slow</span>
          <span>120 walking</span>
          <span>240 fast</span>
        </div>
      </div>

      <div className="met-controls">
        <button className="primary-button" onClick={() => setPlaying((v) => !v)}>
          {playing ? 'Stop' : 'Play'}
        </button>
        <button className="timer-button" onClick={reset}>Reset</button>
      </div>

      {visual.tapMode && (
        <div className="met-tap-section">
          <div className="met-tap-label">Tap along to the beat:</div>
          <button className="met-tap-button" onClick={handleTap}>TAP</button>
          {accuracy !== null && (
            <div className="met-accuracy">
              <div className="met-accuracy-bar">
                <div className="met-accuracy-fill" style={{ width: accuracy + '%' }} />
              </div>
              <div className="met-accuracy-label">{feedback}</div>
            </div>
          )}
        </div>
      )}

      {visual.caption && <p className="met-caption">{visual.caption}</p>}
    </div>
  )
}

export default MetronomeVisual
