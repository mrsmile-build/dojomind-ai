import { useState, useEffect } from 'react'

const PHASES = [
  { label: 'Try it', secs: 60, note: 'play the whole thing once, all the way through, no stopping' },
  { label: 'Notice', secs: 20, note: 'name ONE thing that went wrong - just one' },
  { label: 'Fix it', secs: 40, note: 'play only that one thing, slowly, until it is right' },
  { label: 'Rest', secs: 20, note: 'stop completely. breathe. let it settle in' },
]

function PracticeLoopVisual({ visual }) {
  const phases = visual.phases || PHASES
  const [idx, setIdx] = useState(0)
  const [left, setLeft] = useState(phases[0].secs)
  const [running, setRunning] = useState(false)
  const [cycles, setCycles] = useState(0)

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setLeft(l => (l > 1 ? l - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [running])

  useEffect(() => {
    if (left === 0 && running) {
      const ni = (idx + 1) % phases.length
      if (ni === 0) setCycles(c => c + 1)
      setIdx(ni)
      setLeft(phases[ni].secs)
    }
  }, [left, running, idx, phases])

  const reset = () => {
    setRunning(false)
    setIdx(0)
    setLeft(phases[0].secs)
    setCycles(0)
  }

  const p = phases[idx]
  const pct = Math.round(((p.secs - left) / p.secs) * 100)

  return (
    <div className="practice-loop-visual">
      <div className="pl-header">
        <span className="eyebrow">THE PRACTICE LOOP</span>
        <h3>{visual.title || 'Try, notice, fix, rest'}</h3>
      </div>

      <div className="pl-phase">
        <div className="pl-label">{p.label}</div>
        <div className="pl-note">{p.note}</div>
        <div className="pl-time">{left}s</div>
        <div className="pl-bar"><div className="pl-fill" style={{ width: pct + '%' }} /></div>
      </div>

      <div className="pl-steps">
        {phases.map((ph, i) => (
          <button key={ph.label} className={i === idx ? 'pl-step active' : 'pl-step'} onClick={() => { setIdx(i); setLeft(ph.secs) }}>
            {ph.label}
          </button>
        ))}
      </div>

      <div className="pl-controls">
        <button className="primary-button" onClick={() => setRunning(v => !v)}>{running ? 'Pause' : 'Start the loop'}</button>
        <button className="timer-button" onClick={reset}>Reset</button>
        <span className="pl-cycles">{cycles} full loop{cycles === 1 ? '' : 's'} done</span>
      </div>

      {visual.caption && <p className="pl-caption">{visual.caption}</p>}
    </div>
  )
}

export default PracticeLoopVisual
