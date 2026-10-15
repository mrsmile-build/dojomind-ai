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

  // Optional two-segment arms (shoulder -> elbow -> fist).
  // Lessons that supply frontArm/rearArm get bent-elbow poses
  // (e.g. fist chambered at hip); others keep the straight arm.
  const frontArmSpec = position.frontArm || null
  const rearArmSpec = position.rearArm || null
  const armPoints = (spec, spread) => {
    const s = { x: shoulder.x + spread, y: shoulder.y + 3 }
    const e = limb(s, spec.shoulderAngle, 70, 0)
    const h = limb(e, spec.elbowAngle, 70, 0)
    return { s, e, h }
  }

  const legPoints = (spec, spread) => {
    const s = { x: hip.x + spread, y: hip.y }
    const k = limb(s, spec.hipAngle, 95, 0)
    const a = limb(k, spec.kneeAngle, 95, 0)
    return { s, k, a }
  }

  const hip = { x: 380, y: 330 }
  const shoulder = { x: 380, y: 172 }

  const limb = (origin, angle, length, spread) => ({
    x: origin.x + Math.sin(toRad(angle)) * length + spread,
    y: origin.y + Math.cos(toRad(angle)) * length,
  })

  const fl = position.frontLeg ? legPoints(position.frontLeg, -20) : null
  const frontFoot = fl ? fl.a : limb(hip, frontLegAngle, 160, -18)
  const rl = position.rearLeg ? legPoints(position.rearLeg, 20) : null
  const rearFoot = rl ? rl.a : limb(hip, rearLegAngle, 160, 18)
  const frontHand = limb(shoulder, frontArmAngle, 140, -28)
  const rearHand = limb(shoulder, rearArmAngle, 140, 28)
  const fa = frontArmSpec ? armPoints(frontArmSpec, -30) : null
  const ra = rearArmSpec ? armPoints(rearArmSpec, 30) : null

  const joints = []
  const push = (name, p, core) => { if (p) joints.push({ name: name, x: p.x, y: p.y, core: !!core }) }
  push("frontShoulder", fa && fa.s, false)
  push("rearShoulder", ra && ra.s, false)
  push("frontElbow", fa && fa.e, false)
  push("rearElbow", ra && ra.e, false)
  push("frontHand", fa && fa.h, false)
  push("rearHand", ra && ra.h, false)
  push("frontHip", fl && fl.s, false)
  push("rearHip", rl && rl.s, false)
  push("frontKnee", fl && fl.k, false)
  push("rearKnee", rl && rl.k, false)
  push("frontAnkle", fl && fl.a, false)
  push("rearAnkle", rl && rl.a, false)
  push("head", { x: 380, y: 105 }, true)
  const wantLabel = (n) => Array.isArray(position.jointLabels) && position.jointLabels.indexOf(n) >= 0
  const pretty = (n) => n.replace(/([A-Z])/g, " $1").toUpperCase()
  const gaze = position.gaze ? limb({ x: 380, y: 105 }, position.gaze.angle, 54, 0) : null
  const fv = position.frontView || null
  let fj = []
  let fparts = null
  if (fv) {
    var SW = 58, HW = 30, SY = 172, HY = 330, CX = 380, HH = 105
    var uA = fv.upperArm || 70, fA = fv.forearm || 70, uL = fv.upperLeg || 95, fL = fv.forearmLeg || 95
    var fLimb = function (o, a, len) { return { x: o.x + Math.sin(toRad(a)) * len, y: o.y + Math.cos(toRad(a)) * len } }
    var ls = { x: CX + SW, y: SY }
    var rs = { x: CX - SW, y: SY }
    var lh = { x: CX + HW, y: HY }
    var rh = { x: CX - HW, y: HY }
    var la = fv.leftArm || {}
    var rb = fv.rightArm || {}
    var ll = fv.leftLeg || {}
    var rc = fv.rightLeg || {}
    var lArm = { s: ls, e: fLimb(ls, la.shoulder || 0, uA) }
    lArm.h = fLimb(lArm.e, la.elbow || 0, fA)
    var rArm = { s: rs, e: fLimb(rs, rb.shoulder || 0, uA) }
    rArm.h = fLimb(rArm.e, rb.elbow || 0, fA)
    var lLeg = { s: lh, k: fLimb(lh, ll.hip || 0, uL) }
    lLeg.a = fLimb(lLeg.k, ll.knee || 0, fL)
    var rLeg = { s: rh, k: fLimb(rh, rc.hip || 0, uL) }
    rLeg.a = fLimb(rLeg.k, rc.knee || 0, fL)
    var hd = { x: CX, y: HH }
    var fp = function (n, p, core) { if (p) fj.push({ name: n, x: p.x, y: p.y, core: !!core }) }
    fp("head", hd, true)
    fp("leftShoulder", ls, true)
    fp("rightShoulder", rs, true)
    fp("leftElbow", lArm.e, false)
    fp("rightElbow", rArm.e, false)
    fp("leftHand", lArm.h, false)
    fp("rightHand", rArm.h, false)
    fp("leftHip", lh, false)
    fp("rightHip", rh, false)
    fp("leftKnee", lLeg.k, false)
    fp("rightKnee", rLeg.k, false)
    fp("leftAnkle", lLeg.a, false)
    fp("rightAnkle", rLeg.a, false)
    var gz = null
    if (fv.guardZone) {
      gz = CX + ",138 " + lArm.h.x + "," + lArm.h.y + " " + CX + ",250 " + rArm.h.x + "," + rArm.h.y
    }
    fparts = { lArm: lArm, rArm: rArm, lLeg: lLeg, rLeg: rLeg, head: hd, guard: gz }
  }
  var fwant = function (n) { return !!fv && Array.isArray(fv.labels) && fv.labels.indexOf(n) >= 0 }


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
          {joints.filter(function (j) { return j.core }).map(function (j) {
            return (
              <g key={j.name}>
                <circle cx={j.x} cy={j.y} r="9" fill="#c9a15a" />
                {wantLabel(j.name) ? <text x={j.x + 14} y={j.y - 10} className="svg-small-label">{pretty(j.name)}</text> : null}
              </g>
            )
          })}
          {gaze ? (
            <g>
              <line x1="380" y1="105" x2={gaze.x} y2={gaze.y} stroke="#c9a15a" strokeWidth="3" />
              <circle cx={gaze.x} cy={gaze.y} r="6" fill="#c9a15a" />
              {wantLabel("gaze") ? <text x={gaze.x + 10} y={gaze.y} className="svg-small-label">GAZE</text> : null}
            </g>
          ) : null}
          </g>

          {rearArmSpec ? (
            <g>
              <polyline points={`${ra.s.x},${ra.s.y} ${ra.e.x},${ra.e.y} ${ra.h.x},${ra.h.y}`} stroke="#202124" strokeWidth="25" strokeLinecap="round" fill="none" />
              <circle cx={ra.h.x} cy={ra.h.y} r="15" fill="#202124" />
            </g>
          ) : (
            <line x1={shoulder.x + 30} y1={shoulder.y + 3} x2={rearHand.x} y2={rearHand.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" />
          )}
          {frontArmSpec ? (
            <g>
              <polyline points={`${fa.s.x},${fa.s.y} ${fa.e.x},${fa.e.y} ${fa.h.x},${fa.h.y}`} stroke="#202124" strokeWidth="25" strokeLinecap="round" fill="none" />
              <circle cx={fa.h.x} cy={fa.h.y} r="15" fill="#202124" />
            </g>
          ) : (
            <line x1={shoulder.x - 30} y1={shoulder.y + 3} x2={frontHand.x} y2={frontHand.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" />
          )}

          {fl ? (<g><polyline points={fl.s.x+","+fl.s.y+" "+fl.k.x+","+fl.k.y+" "+fl.a.x+","+fl.a.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" fill="none" /></g>) : (<line x1={hip.x - 20} y1={hip.y} x2={frontFoot.x} y2={frontFoot.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" />)}
          {rl ? (<g><polyline points={rl.s.x+","+rl.s.y+" "+rl.k.x+","+rl.k.y+" "+rl.a.x+","+rl.a.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" fill="none" /></g>) : (<line x1={hip.x + 20} y1={hip.y} x2={rearFoot.x} y2={rearFoot.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" />)}

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
        {joints.filter(function (j) { return !j.core }).map(function (j) {
          return (
            <g key={j.name}>
              {j.name === "frontKnee" && wantLabel("frontKnee") ? <line x1={j.x} y1={j.y} x2={j.x} y2="525" stroke="#c9a15a" strokeWidth="2" strokeDasharray="5 7" opacity=".75" /> : null}
              <circle cx={j.x} cy={j.y} r="9" fill="#c9a15a" />
              {wantLabel(j.name) ? <text x={j.x + 14} y={j.y - 10} className="svg-small-label">{pretty(j.name)}</text> : null}
            </g>
          )
        })}
        </svg>

        {annotations.map((annotation, index) => (
          <div className={`body-annotation annotation-${index + 1}`} key={annotation.label}>
            <span>{annotation.number || `0${index + 1}`}</span>
            <strong>{annotation.label}</strong>
            {annotation.detail && <small>{annotation.detail}</small>}
          </div>
        ))}
      </div>

      {fv && (
        <div className="body-diagram-stage improved-diagram">
          <svg className="instruction-svg" viewBox="0 0 760 620" role="img" aria-label={position.title + " front view"}>
            <line x1="205" y1="525" x2="555" y2="525" stroke="rgba(201,161,90,.25)" strokeWidth="2" />
            <line x1="380" y1="65" x2="380" y2="545" stroke="rgba(201,161,90,.35)" strokeWidth="2" strokeDasharray="8 9" />
            <g transform={"rotate(" + (fv.torsoLean || 0) + " 380 330)"}>
              <circle cx="380" cy="105" r="28" fill="#9b9b9b" />
              <line x1="380" y1="133" x2="380" y2="160" stroke="#c9a15a" strokeWidth="13" strokeLinecap="round" />
              <path d="M352 160 C340 190 338 245 346 315 L380 360 L414 315 C422 245 420 190 408 160 Z" fill="#451600" stroke="#70401f" strokeWidth="3" />
            </g>
            {fparts.guard ? <polygon points={fparts.guard} fill="rgba(201,161,90,.14)" stroke="#c9a15a" strokeWidth="2" strokeDasharray="6 6" /> : null}
            <polyline points={fparts.lArm.s.x + "," + fparts.lArm.s.y + " " + fparts.lArm.e.x + "," + fparts.lArm.e.y + " " + fparts.lArm.h.x + "," + fparts.lArm.h.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" fill="none" />
            <polyline points={fparts.rArm.s.x + "," + fparts.rArm.s.y + " " + fparts.rArm.e.x + "," + fparts.rArm.e.y + " " + fparts.rArm.h.x + "," + fparts.rArm.h.y} stroke="#202124" strokeWidth="25" strokeLinecap="round" fill="none" />
            <polyline points={fparts.lLeg.s.x + "," + fparts.lLeg.s.y + " " + fparts.lLeg.k.x + "," + fparts.lLeg.k.y + " " + fparts.lLeg.a.x + "," + fparts.lLeg.a.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" fill="none" />
            <polyline points={fparts.rLeg.s.x + "," + fparts.rLeg.s.y + " " + fparts.rLeg.k.x + "," + fparts.rLeg.k.y + " " + fparts.rLeg.a.x + "," + fparts.rLeg.a.y} stroke="#202124" strokeWidth="30" strokeLinecap="round" fill="none" />
            {fj.map(function (j) { return ( <g key={j.name}><circle cx={j.x} cy={j.y} r="9" fill="#c9a15a" />{fwant(j.name) ? <text x={j.x + 14} y={j.y - 10} className="svg-small-label">{pretty(j.name)}</text> : null}</g> ) })}
            <text x="380" y="45" textAnchor="middle" className="svg-label">FRONT VIEW</text>
          </svg>
        </div>
      )}

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
