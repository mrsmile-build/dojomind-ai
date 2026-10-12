import { useState, useEffect } from 'react'

const PHASES = [
  { label: 'Anchor', note: 'rest on the breath', x: 100, y: 100, glow: false, cloud: false },
  { label: 'Wander', note: 'attention drifts into thought', x: 152, y: 62, glow: false, cloud: true },
  { label: 'Notice', note: 'awareness sees the drift', x: 152, y: 62, glow: true, cloud: false },
  { label: 'Return', note: 'escort gently back', x: 116, y: 88, glow: false, cloud: false },
]

function AttentionLoopVisual({ visual }) {
  const phases = visual.phases || PHASES
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setIndex((i) => (i + 1) % phases.length), 1100)
    return () => clearInterval(t)
  }, [playing, phases.length])

  const p = phases[index] || phases[0]

  return (
    <div className="attention-loop-visual">
      <div className="al-header">
        <span className="eyebrow">THE PRACTICE LOOP</span>
        <h3>{visual.title || 'Wander, notice, return'}</h3>
      </div>

      <svg viewBox="0 0 200 200" className="al-svg" role="img" aria-label={visual.title || 'Attention loop'}>
        <circle cx="100" cy="100" r="48" fill="none" stroke="rgba(201,161,90,.25)" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="48" fill="none" stroke="#c9a15a" strokeWidth={p.glow ? 4 : 0} opacity={p.glow ? .9 : 0} style={{ transition: 'all .5s' }} />
        <circle cx="100" cy="100" r="9" fill="#c9a15a" />
        <text x="100" y="104" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontWeight="700">breath</text>
        {p.cloud && (
          <g opacity=".55">
            <circle cx="168" cy="50" r="6" fill="#9aa0a6" />
            <circle cx="150" cy="44" r="4" fill="#9aa0a6" />
            <circle cx="176" cy="66" r="4" fill="#9aa0a6" />
          </g>
        )}
        <circle cx={p.x} cy={p.y} r="7" fill={p.glow ? '#fff' : '#b9bec6'} style={{ transition: 'all .6s' }} />
      </svg>

      <div className="al-phase">
        <strong>{p.label}</strong>
        <span>{p.note}</span>
      </div>

      <div className="al-controls">
        <button className="primary-button" onClick={() => setPlaying((v) => !v)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="timer-button" onClick={() => { setPlaying(false); setIndex(0) }}>
          Reset
        </button>
      </div>

      <div className="al-steps">
        {phases.map((ph, i) => (
          <button key={ph.label} className={i === index ? 'al-step active' : 'al-step'} onClick={() => setIndex(i)}>
            {ph.label}
          </button>
        ))}
      </div>

      {visual.caption && <p className="al-caption">{visual.caption}</p>}
    </div>
  )
}

export default AttentionLoopVisual
