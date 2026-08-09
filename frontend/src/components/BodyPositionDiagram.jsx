function BodyPositionDiagram({ position }) {
  if (!position) return null

  const annotations = position.annotations || []
  const metrics = position.metrics || []

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
          {/* Ground / foot placement */}
          <line
            x1="205"
            y1="525"
            x2="555"
            y2="525"
            stroke="rgba(201,161,90,.25)"
            strokeWidth="2"
          />

          {/* Balance axis */}
          <line
            x1="380"
            y1="65"
            x2="380"
            y2="545"
            stroke="rgba(201,161,90,.35)"
            strokeWidth="2"
            strokeDasharray="8 9"
          />

          {/* Head */}
          <circle
            cx="380"
            cy="105"
            r="28"
            fill="#9b9b9b"
          />

          {/* Neck */}
          <line
            x1="380"
            y1="133"
            x2="380"
            y2="160"
            stroke="#c9a15a"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* Torso */}
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

          {/* Rear arm */}
          <line
            x1="410"
            y1="175"
            x2="455"
            y2="310"
            stroke="#202124"
            strokeWidth="25"
            strokeLinecap="round"
          />

          {/* Front arm */}
          <line
            x1="350"
            y1="175"
            x2="305"
            y2="310"
            stroke="#202124"
            strokeWidth="25"
            strokeLinecap="round"
          />

          {/* Front leg */}
          <line
            x1="360"
            y1="330"
            x2="315"
            y2="485"
            stroke="#202124"
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* Rear leg */}
          <line
            x1="400"
            y1="330"
            x2="485"
            y2="475"
            stroke="#202124"
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* Front foot */}
          <line
            x1="315"
            y1="485"
            x2="225"
            y2="500"
            stroke="#7b2800"
            strokeWidth="27"
            strokeLinecap="round"
          />

          {/* Rear foot */}
          <line
            x1="485"
            y1="475"
            x2="555"
            y2="515"
            stroke="#7b2800"
            strokeWidth="27"
            strokeLinecap="round"
          />

          {/* Center of balance */}
          <circle
            cx="380"
            cy="330"
            r="10"
            fill="#c9a15a"
          />

          {/* Balance ring */}
          <circle
            cx="380"
            cy="330"
            r="22"
            fill="none"
            stroke="#c9a15a"
            strokeWidth="2"
            opacity=".65"
          />

          {/* Posture guide */}
          <line
            x1="380"
            y1="140"
            x2="380"
            y2="320"
            stroke="#c9a15a"
            strokeWidth="2"
            strokeDasharray="5 7"
            opacity=".55"
          />

          {/* Front-leg angle guide */}
          <path
            d="M360 390 A70 70 0 0 1 340 420"
            fill="none"
            stroke="#c9a15a"
            strokeWidth="3"
          />

          {/* Movement direction */}
          <line
            x1="235"
            y1="555"
            x2="315"
            y2="555"
            stroke="#c9a15a"
            strokeWidth="3"
          />
          <polygon
            points="315,555 300,547 300,563"
            fill="#c9a15a"
          />

          {/* SVG labels */}
          <text x="380" y="45" textAnchor="middle" className="svg-label">
            POSTURE AXIS
          </text>

          <text x="410" y="325" className="svg-label">
            CENTER
          </text>

          <text x="410" y="345" className="svg-label">
            OF BALANCE
          </text>

          <text x="190" y="580" className="svg-label">
            CONTROLLED MOVEMENT
          </text>

          {/* Foot direction markers */}
          <text x="205" y="470" className="svg-small-label">
            FRONT FOOT
          </text>

          <text x="505" y="450" className="svg-small-label">
            REAR FOOT
          </text>
        </svg>

        {/* External instructional annotations */}
        {annotations.map((annotation, index) => (
          <div
            className={`body-annotation annotation-${index + 1}`}
            key={annotation.label}
          >
            <span>{annotation.number || `0${index + 1}`}</span>
            <strong>{annotation.label}</strong>

            {annotation.detail && (
              <small>{annotation.detail}</small>
            )}
          </div>
        ))}

      </div>

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
