import { useState, useEffect } from 'react'

const rad = (d) => (d * Math.PI) / 180
const seg = (from, ang, len) => ({ x: from.x + Math.sin(rad(ang)) * len, y: from.y + Math.cos(rad(ang)) * len })

function MovementPostureVisual({ visual }) {
  const pose = visual.pose || {}
  const overlays = visual.overlays || {}
  const labels = visual.labels || []
  const [sway, setSway] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) { setSway(0); return }
    let dir = 1
    const t = setInterval(() => setSway((s) => {
      let n = s + dir * 2
      if (n > 6) { n = 6; dir = -1 }
      if (n < -6) { n = -6; dir = 1 }
      return n
    }), 220)
    return () => clearInterval(t)
  }, [playing])

  const P = { x: 110, y: 120 }
  const ta = (pose.torso ?? 2)
  const S = { x: P.x + Math.sin(rad(ta)) * 50 + sway * 0.4, y: P.y - Math.cos(rad(ta)) * 50 }
  const head = { x: S.x + Math.sin(rad(ta)) * 14, y: S.y - Math.cos(rad(ta)) * 14 }
  const supKnee = seg({ x: P.x + 6, y: P.y }, pose.supportThigh ?? 4, 34)
  const supFoot = seg(supKnee, pose.supportShin ?? -2, 34)
  const liftKnee = seg({ x: P.x - 6, y: P.y }, pose.liftThigh ?? -72, 30)
  const liftFoot = seg(liftKnee, pose.liftShin ?? -18, 28)
  const fElb = seg(S, pose.frontArmShoulder ?? -12, 24)
  const fHand = seg(fElb, pose.frontArmElbow ?? -135, 24)
  const rElb = seg(S, pose.rearArmShoulder ?? 12, 24)
  const rHand = seg(rElb, pose.rearArmElbow ?? 135, 24)
  const comX = supFoot.x + sway

  const limb = { stroke: '#b9bec6', strokeWidth: 7, strokeLinecap: 'round', fill: 'none' }
  const gold = { ...limb, stroke: '#c9a15a' }

  return (
    <div className="movement-posture-visual">
      <div className="mp-header">
        <span className="eyebrow">ALIGNMENT</span>
        <h3>{visual.title || 'Posture and balance'}</h3>
      </div>

      <svg viewBox="0 0 220 240" className="mp-svg" role="img" aria-label={visual.title || 'Posture alignment'}>
        <line x1="20" y1="200" x2="200" y2="200" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        {overlays.plumb && (
          <line x1={comX} y1={head.y} x2={comX} y2="200" stroke="rgba(201,161,90,.5)" strokeWidth="1.5" strokeDasharray="4 5" style={{ transition: 'all .2s' }} />
        )}
        {overlays.base && (
          <ellipse cx={supFoot.x} cy="196" rx="16" ry="5" fill="rgba(201,161,90,.18)" stroke="rgba(201,161,90,.5)" strokeWidth="1.5" />
        )}
        <polyline points={`${P.x - 6},${P.y} ${liftKnee.x},${liftKnee.y} ${liftFoot.x},${liftFoot.y}`} {...limb} />
        <polyline points={`${P.x + 6},${P.y} ${supKnee.x},${supKnee.y} ${supFoot.x},${supFoot.y}`} {...limb} />
        <line x1={supFoot.x} y1={supFoot.y} x2={supFoot.x + 14} y2={supFoot.y + 1} stroke="#b0622b" strokeWidth="6" strokeLinecap="round" />
        <line x1={P.x} y1={P.y} x2={S.x} y2={S.y} stroke="#a06a35" strokeWidth="16" strokeLinecap="round" />
        <line x1={S.x} y1={S.y} x2={head.x} y2={head.y + 6} stroke="#b9bec6" strokeWidth="6" strokeLinecap="round" />
        <circle cx={head.x} cy={head.y} r="11" fill="#b9bec6" />
        <polyline points={`${S.x},${S.y} ${rElb.x},${rElb.y} ${rHand.x},${rHand.y}`} {...limb} />
        <circle cx={rHand.x} cy={rHand.y} r="5" fill="#b9bec6" />
        <polyline points={`${S.x},${S.y} ${fElb.x},${fElb.y} ${fHand.x},${fHand.y}`} {...gold} />
        <circle cx={fHand.x} cy={fHand.y} r="5.5" fill="#c9a15a" />
        {overlays.com && (
          <g style={{ transition: 'all .2s' }}>
            <circle cx={comX} cy={P.y + 6} r="7" fill="#c9a15a" />
            <circle cx={comX} cy={P.y + 6} r="12" fill="none" stroke="#c9a15a" strokeWidth="1.5" opacity=".5" />
          </g>
        )}
        {labels.map((lb, i) => (
          <text key={i} x={lb.x} y={lb.y} fontSize="10" fill="rgba(255,255,255,.7)">{lb.text}</text>
        ))}
      </svg>

      <div className="mp-controls">
        <button className="primary-button" onClick={() => setPlaying((v) => !v)}>
          {playing ? 'Show still' : 'Show sway'}
        </button>
      </div>

      {visual.caption && <p className="mp-caption">{visual.caption}</p>}
    </div>
  )
}

export default MovementPostureVisual
