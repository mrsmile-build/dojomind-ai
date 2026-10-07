function BodyPositionDiagram({ position }) {
  if (!position) return null

  const annotations = position.annotations || []
  const metrics = position.metrics || []
  const weight = position.weightDistribution || null
  const feet = position.feet || null

  const toRad = (deg) => (deg * Math.PI) / 180

  // Side-profile geometry. Angles are degrees from vertical.
  // Missing values fall back to a neutral reference posture so
  // lessons without explicit angles still render correctly.
  const torsoAngle = position.torsoAngle ?? 0
  const frontArmAngle = position.frontArmAngle ?? -8
  const rearArmAngle = position.rearArmAngle ?? 8
  const frontLegAngle = position.frontLegAngle ?? -12
  const rearLegAngle = position.rearLegAngle ?? 18

  const hip = { x: 380, y: 330 }
  const shoulder = { x: 380, y: 172 }

  const limb = (origin, angle, length, spread) => ({
    x: origin.x + Math.sin(toRad(angle)) * length + spread,
    y: origin.y + Math.cos(toRad(angle)) * length,
  })

  const frontFoot = limb(hip, frontLegAngle, 160, -18)
  const rearFoot = limb(hip, rearLegAngle, 160, 18)
  const frontHand = limb(shoulder, frontArmAngle, 140, -28)
  const rearHand = limb(shoulder, rearArmAngle, 140, 28)

  return (
    <section className="body-diagram">
      <div className="visual-header">
        <span className="eyebrow">TECHNIQUE ANALYSIS</span>
        <h2>{position.title}</h2>
        <p>{position.description}</p>
      </div>

      <div className="body-diagram-stage improved-diagram">
        <svg
          className="instruction-svg"
          viewBox="0 0 760 620"
          role="img"
          aria-label={`${position.title} body position instructional diagram`}
        >
          <line x1="205" y1="525" x2="555" y2="525" stroke="rgba(201,161,90,.25)" strokeWidth="2" />
          <line x1="380" y1="65" x2="380" y2="545" stroke="rgba(201,161,90,.35)" strokeWidth="2" strokeDasharray="8 9" />

          <g transform={`rotate(${torsoAngle} ${hip.x} ${hip.y})`}>
            <circle cx="380" cy="105" r="28" fill="#9b9b9b" />
            <line x1="380" y1="133" x2="380" y2="160" stroke="#c9a15a" strokeWidth="13" strokeLinecap="round" />
            <path
              d="M350 160
                 C337 190 334 245 344 315
                 L380 360
                 L416 315
                 C426 245 423 190 410 160
                 Z"
              fill="#451600"
              stroke="#70401f"
              strokeWidth="3"
            />
          </g>

          <line x1={shoulder.x + 30} y1={shoulder.y + 3} x2={rearHand.x} y2={rearHand.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" />
          <line x1={shoulder.x - 30} y1={shoulder.y + 3} x2={frontHand.x} y2={frontHand.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" />

          <line x1={hip.x - 20} y1={hip.y} x2={frontFoot.x} y2={frontFoot.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" />
          <line x1={hip.x + 20} y1={hip.y} x2={rearFoot.x} y2={rearFoot.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" />

          <line x1={frontFoot.x} y1={frontFoot.y} x2={frontFoot.x - 88} y2={frontFoot.y + 15} stroke="#7b2800" strokeWidth="27" strokeLinecap="round" />
          <line x1={rearFoot.x} y1={rearFoot.y} x2={rearFoot.x + 70} y2={rearFoot.y + 33} stroke="#7b2800" strokeWidth="27" strokeLinecap="round" />

          <circle cx={hip.x} cy={hip.y} r="10" fill="#c9a15a" />
          <circle cx={hip.x} cy={hip.y} r="22" fill="none" stroke="#c9a15a" strokeWidth="2" opacity=".65" />
          <line x1="380" y1="140" x2="380" y2="320" stroke="#c9a15a" strokeWidth="2" strokeDasharray="5 7" opacity=".55" />
          <path d="M360 390 A70 70 0 0 1 340 420" fill="none" stroke="#c9a15a" strokeWidth="3" />
          <line x1="235" y1="555" x2="315" y2="555" stroke="#c9a15a" strokeWidth="3" />
          <polygon points="315,555 300,547 300,563" fill="#c9a15a" />

          <text x="380" y="45" textAnchor="middle" className="svg-label">POSTURE AXIS</text>
          <text x="410" y="325" className="svg-label">CENTER</text>
          <text x="410" y="345" className="svg-label">OF BALANCE</text>
          <text x="190" y="580" className="svg-label">CONTROLLED MOVEMENT</text>
          <text x="205" y="470" className="svg-small-label">FRONT FOOT</text>
          <text x="505" y="450" className="svg-small-label">REAR FOOT</text>
        </svg>

        {annotations.map((annotation, index) => (
          <div className={`body-annotation annotation-${index + 1}`} key={annotation.label}>
            <span>{annotation.number || `0${index + 1}`}</span>
            <strong>{annotation.label}</strong>
            {annotation.detail && <small>{annotation.detail}</small>}
          </div>
        ))}
      </div>

      {feet && (
        <div className="body-diagram-stage improved-diagram">
          <svg
            className="instruction-svg"
            viewBox="0 0 760 430"
            role="img"
            aria-label={`${position.title} foot placement diagram, top-down view`}
          >
            <line x1="380" y1="52" x2="380" y2="400" stroke="rgba(201,161,90,.35)" strokeWidth="2" strokeDasharray="8 9" />
            <polygon points="380,36 371,54 389,54" fill="#c9a15a" />
            <text x="380" y="24" textAnchor="middle" className="svg-label">FORWARD</text>

            <line x1="180" y1="230" x2="580" y2="230" stroke="rgba(201,161,90,.2)" strokeWidth="2" strokeDasharray="4 8" />

            <g transform={`translate(${380 + feet.front.x} ${230 + feet.front.y}) rotate(${feet.front.angle})`}>
              <rect x="-24" y="-48" width="48" height="96" rx="16" fill="#451600" stroke="#70401f" strokeWidth="3" />
            </g>
            <text x={380 + feet.front.x - 70} y={230 + feet.front.y - 60} className="svg-small-label">FRONT FOOT</text>

            <g transform={`translate(${380 + feet.rear.x} ${230 + feet.rear.y}) rotate(${feet.rear.angle})`}>
              <rect x="-24" y="-48" width="48" height="96" rx="16" fill="#202124" stroke="#70401f" strokeWidth="3" />
            </g>
            <text x={380 + feet.rear.x + 30} y={230 + feet.rear.y + 70} className="svg-small-label">REAR FOOT</text>
          </svg>

          {feet.note && (
            <div className="body-annotation annotation-1" style={{ position: 'static', margin: '12px auto 0', maxWidth: '420px' }}>
              <span>◎</span>
              <strong>Foot placement</strong>
              <small>{feet.note}</small>
            </div>
          )}
        </div>
      )}

      {weight && (
        <div style={{ margin: '18px auto 0', maxWidth: '520px', padding: '14px 16px', border: '1px solid rgba(201,161,90,.25)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', letterSpacing: '.12em', color: '#c9a15a', marginBottom: '8px' }}>
            <span>FRONT {weight.front}%</span>
            <span>REAR {weight.rear}%</span>
          </div>
          <div style={{ display: 'flex', height: '10px', borderRadius: '999px', overflow: 'hidden', background: 'rgba(255,255,255,.08)' }}>
            <div style={{ width: `${weight.front}%`, background: '#c9a15a' }} />
            <div style={{ width: `${weight.rear}%`, background: '#70401f' }} />
          </div>
        </div>
      )}

      <div className="position-data">
        {metrics.map((metric) => (
          <div className="position-metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BodyPositionDiagram
