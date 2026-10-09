import { useState, useEffect } from 'react'

const rad = (d) => (d * Math.PI) / 180
// angle convention: 0 = straight down, 90 = forward (+x), negative = back
const seg = (from, angDeg, len) => ({
  x: from.x + Math.sin(rad(angDeg)) * len,
  y: from.y + Math.cos(rad(angDeg)) * len,
})

const DEFAULT_POSE = {
  torso: 6, fThigh: 35, fShin: -5, rThigh: -30, rShin: -32,
  pUpper: -10, pFore: 80, rUpper: 90, rFore: 90,
}

function TechniqueAnimation({ visual }) {
  const phases = visual.phases || []
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing || phases.length === 0) return
    const t = setInterval(() => setIndex((i) => (i + 1) % phases.length), 800)
    return () => clearInterval(t)
  }, [playing, phases.length])

  const pose = { ...DEFAULT_POSE, ...((phases[index] || {}).pose || {}) }

  // Skeleton (side view, facing right), rooted front stance
  const P = { x: 110, y: 116 }
  const S = { x: P.x + Math.sin(rad(pose.torso)) * 50, y: P.y - Math.cos(rad(pose.torso)) * 50 }
  const head = { x: S.x + Math.sin(rad(pose.torso)) * 15, y: S.y - Math.cos(rad(pose.torso)) * 15 }

  const fHip = { x: P.x + 5, y: P.y }
  const fKnee = seg(fHip, pose.fThigh, 34)
  const fAnk = seg(fKnee, pose.fShin, 34)
  const rHip = { x: P.x - 5, y: P.y }
  const rKnee = seg(rHip, pose.rThigh, 34)
  const rAnk = seg(rKnee, pose.rShin, 34)

  const pElb = seg(S, pose.pUpper, 26)
  const pFist = seg(pElb, pose.pFore, 26)
  const rElb = seg(S, pose.rUpper, 26)
  const rFist = seg(rElb, pose.rFore, 26)

  const limb = { stroke: '#b9bec6', strokeWidth: 7, strokeLinecap: 'round', fill: 'none', style: { transition: 'all .5s' } }
  const gold = { ...limb, stroke: '#c9a15a' }
  const foot = { stroke: '#b0622b', strokeWidth: 6, strokeLinecap: 'round', style: { transition: 'all .5s' } }

  return (
    <div className="technique-animation">
      <div className="ta-header">
        <span className="eyebrow">TECHNIQUE IN MOTION</span>
        <h3>{visual.title}</h3>
      </div>

      <svg viewBox="0 0 220 200" className="ta-svg" role="img" aria-label={visual.title}>
        <line x1="20" y1="182" x2="200" y2="182" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        {/* rear leg (extended, heel rooted) */}
        <polyline points={`${rHip.x},${rHip.y} ${rKnee.x},${rKnee.y} ${rAnk.x},${rAnk.y}`} {...limb} />
        <line x1={rAnk.x} y1={rAnk.y} x2={rAnk.x + 15} y2={rAnk.y + 1} {...foot} />
        {/* front leg (bent, knee over foot) */}
        <polyline points={`${fHip.x},${fHip.y} ${fKnee.x},${fKnee.y} ${fAnk.x},${fAnk.y}`} {...limb} />
        <line x1={fAnk.x} y1={fAnk.y} x2={fAnk.x + 16} y2={fAnk.y + 1} {...foot} />
        {/* torso + head */}
        <line x1={P.x} y1={P.y} x2={S.x} y2={S.y} stroke="#a06a35" strokeWidth="17" strokeLinecap="round" style={{ transition: 'all .5s' }} />
        <line x1={S.x} y1={S.y} x2={head.x} y2={head.y + 6} stroke="#b9bec6" strokeWidth="6" strokeLinecap="round" style={{ transition: 'all .5s' }} />
        <circle cx={head.x} cy={head.y} r="11" fill="#b9bec6" style={{ transition: 'all .5s' }} />
        {/* rear arm */}
        <polyline points={`${S.x},${S.y} ${rElb.x},${rElb.y} ${rFist.x},${rFist.y}`} {...limb} />
        <circle cx={rFist.x} cy={rFist.y} r="5" fill="#b9bec6" style={{ transition: 'all .5s' }} />
        {/* punching arm */}
        <polyline points={`${S.x},${S.y} ${pElb.x},${pElb.y} ${pFist.x},${pFist.y}`} {...gold} />
        <circle cx={pFist.x} cy={pFist.y} r="5.5" fill="#c9a15a" style={{ transition: 'all .5s' }} />
      </svg>

      <div className="ta-phase">{(phases[index] || {}).label}</div>

      <div className="ta-controls">
        <button className="primary-button" onClick={() => setPlaying((v) => !v)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="timer-button" onClick={() => { setPlaying(false); setIndex(0) }}>
          Reset
        </button>
      </div>

      <div className="ta-steps">
        {phases.map((ph, i) => (
          <button key={ph.label} className={i === index ? 'ta-step active' : 'ta-step'} onClick={() => setIndex(i)}>
            {ph.label}
          </button>
        ))}
      </div>

      {visual.caption && <p className="ta-caption">{visual.caption}</p>}
    </div>
  )
}

export default TechniqueAnimation
