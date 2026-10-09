import { useState, useEffect } from 'react'

function BreathCycleVisual({ visual }) {
  const phases = visual.phases || [
    { label: 'Inhale', duration: 4, chest: 100 },
    { label: 'Hold', duration: 2, chest: 100 },
    { label: 'Exhale', duration: 6, chest: 0 },
    { label: 'Pause', duration: 2, chest: 0 },
  ]
  
  const [index, setIndex] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    const phase = phases[index]
    if (elapsed >= phase.duration) {
      setIndex((i) => (i + 1) % phases.length)
      setElapsed(0)
      return
    }
    const t = setTimeout(() => setElapsed((e) => e + 1), 1000)
    return () => clearTimeout(t)
  }, [playing, elapsed, index, phases])

  const phase = phases[index]
  const progress = elapsed / phase.duration
  const chestSize = phase.chest * progress + (phase.chest === 0 ? 0 : 100 * (1 - progress))
  const bellySize = chestSize * 0.8

  return (
    <div className="breath-cycle-visual">
      <div className="bcv-header">
        <span className="eyebrow">BREATH CYCLE</span>
        <h3>{visual.title || 'Rhythmic Breathing'}</h3>
      </div>

      <svg viewBox="0 0 200 240" className="bcv-svg" role="img" aria-label="Breath cycle">
        {/* Body outline */}
        <ellipse cx="100" cy="80" rx="35" ry={30 + chestSize * 0.3} fill="rgba(180,200,220,.15)" stroke="rgba(180,200,220,.4)" strokeWidth="2" style={{ transition: 'all .8s' }} />
        <ellipse cx="100" cy="150" rx="30" ry={25 + bellySize * 0.3} fill="rgba(201,161,90,.2)" stroke="rgba(201,161,90,.5)" strokeWidth="2" style={{ transition: 'all .8s' }} />
        
        {/* Diaphragm line */}
        <line x1="70" y1="115" x2="130" y2="115" stroke="rgba(255,255,255,.3)" strokeWidth="1" strokeDasharray="3,2" />
        <text x="140" y="118" fontSize="9" fill="rgba(255,255,255,.5)">Diaphragm</text>
        
        {/* Labels */}
        <text x="100" y="75" textAnchor="middle" fontSize="10" fill="rgba(180,200,220,.8)">Chest</text>
        <text x="100" y="155" textAnchor="middle" fontSize="10" fill="rgba(201,161,90,.8)">Belly</text>
        
        {/* Head */}
        <circle cx="100" cy="40" r="15" fill="rgba(185,190,198,.3)" stroke="rgba(185,190,198,.5)" strokeWidth="1" />
      </svg>

      <div className="bcv-phase">
        <strong>{phase.label}</strong>
        <span>{phase.duration - elapsed}s</span>
      </div>

      <div className="bcv-progress">
        <div className="bcv-bar">
          <div className="bcv-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <div className="bcv-controls">
        <button className="primary-button" onClick={() => setPlaying((v) => !v)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="timer-button" onClick={() => { setPlaying(false); setIndex(0); setElapsed(0) }}>
          Reset
        </button>
      </div>

      <div className="bcv-phases">
        {phases.map((ph, i) => (
          <div key={ph.label} className={i === index ? 'bcv-phase-chip active' : 'bcv-phase-chip'}>
            {ph.label} ({ph.duration}s)
          </div>
        ))}
      </div>

      {visual.caption && <p className="bcv-caption">{visual.caption}</p>}
    </div>
  )
}

export default BreathCycleVisual
