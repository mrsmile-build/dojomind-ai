import { useState } from 'react'

const DEFAULT_ZONES = [
  { id: 'eyes', x: 100, y: 38, label: 'Eyes', reliability: 'gross', note: 'Sensory disruption. A brief, reliable opening to turn and leave — it still works when adrenaline blurs everything else.' },
  { id: 'jaw', x: 100, y: 58, label: 'Jaw', reliability: 'conditional', note: 'Balance disruption. Needs precision you may not have under stress; treat it as a bonus, never the plan.' },
  { id: 'solar', x: 100, y: 104, label: 'Solar plexus', reliability: 'gross', note: 'Structural shock to the breath. Buys a moment to step back — follow with escape, not more strikes.' },
  { id: 'ribs', x: 84, y: 100, label: 'Ribs', reliability: 'conditional', note: 'Structural. Can fold an attacker, but angle-dependent; always pair with an exit, never a finish.' },
  { id: 'groin', x: 100, y: 152, label: 'Groin', reliability: 'gross', note: 'Mobility + sensory. One of the few targets that still lands when you are scared and shaking.' },
  { id: 'thigh', x: 86, y: 190, label: 'Thigh / hip', reliability: 'gross', note: 'Mobility kill. Attacks the leg that chases you; its purpose is to stop pursuit so you can leave.' },
  { id: 'knee', x: 84, y: 232, label: 'Knee', reliability: 'gross', note: 'Structural + mobility. A strike to the knee removes their ability to follow you.' },
]

function TargetOverlay({ visual }) {
  const zones = visual.zones || DEFAULT_ZONES
  const [sel, setSel] = useState(0)
  const z = zones[sel] || zones[0]

  return (
    <div className="target-overlay">
      <div className="to-header">
        <span className="eyebrow">WHERE FORCE LANDS</span>
        <h3>{visual.title || 'Targets and escape'}</h3>
      </div>

      <svg viewBox="0 0 200 320" className="to-svg" role="img" aria-label={visual.title || 'Target zones'}>
        <line x1="30" y1="300" x2="170" y2="300" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        {/* front silhouette */}
        <circle cx="100" cy="42" r="24" fill="rgba(185,190,198,.18)" stroke="rgba(185,190,198,.45)" strokeWidth="2" />
        <line x1="100" y1="66" x2="100" y2="76" stroke="rgba(185,190,198,.45)" strokeWidth="6" />
        <polygon points="72,82 128,82 120,150 80,150" fill="rgba(160,106,53,.22)" stroke="rgba(160,106,53,.5)" strokeWidth="2" />
        <polyline points="72,86 56,126 52,168" fill="none" stroke="rgba(185,190,198,.4)" strokeWidth="6" strokeLinecap="round" />
        <polyline points="128,86 144,126 148,168" fill="none" stroke="rgba(185,190,198,.4)" strokeWidth="6" strokeLinecap="round" />
        <polyline points="88,150 84,224 82,292" fill="none" stroke="rgba(185,190,198,.4)" strokeWidth="7" strokeLinecap="round" />
        <polyline points="112,150 116,224 118,292" fill="none" stroke="rgba(185,190,198,.4)" strokeWidth="7" strokeLinecap="round" />

        {zones.map((zn, i) => {
          const active = i === sel
          const color = zn.reliability === 'gross' ? '#c9a15a' : '#d98a3d'
          return (
            <g key={zn.id} onClick={() => setSel(i)} style={{ cursor: 'pointer' }}>
              {active && <circle cx={zn.x} cy={zn.y} r="13" fill="none" stroke="#fff" strokeWidth="2" opacity=".85" />}
              <circle cx={zn.x} cy={zn.y} r={active ? 7 : 5.5} fill={color} stroke="rgba(0,0,0,.4)" strokeWidth="1" />
            </g>
          )
        })}
      </svg>

      <div className="to-info">
        <div className="to-info-top">
          <strong>{z.label}</strong>
          <span className={`to-badge ${z.reliability}`}>{z.reliability === 'gross' ? 'reliable under stress' : 'needs precision'}</span>
        </div>
        <p>{z.note}</p>
      </div>

      <div className="to-chips">
        {zones.map((zn, i) => (
          <button key={zn.id} className={i === sel ? 'to-chip active' : 'to-chip'} onClick={() => setSel(i)}>
            {zn.label}
          </button>
        ))}
      </div>

      <div className="to-ethics">
        <span className="eyebrow">THE CEILING</span>
        <p>
          Every zone above exists for one purpose: to create an opening to <strong>disengage and leave</strong>.
          The goal of self-defense is escape, not injury. Finer and more dangerous points are intentionally
          omitted here — they require supervised instruction from a qualified teacher. Use only what is
          reasonable and necessary to end the threat and get away, and know your local laws.
        </p>
      </div>

      {visual.caption && <p className="to-caption">{visual.caption}</p>}
    </div>
  )
}

export default TargetOverlay
