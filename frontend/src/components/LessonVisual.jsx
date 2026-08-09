function LessonVisual({ visual }) {
  if (!visual) return null

  if (visual.type === 'stance-diagram') {
    return (
      <section className="lesson-visual">
        <div className="visual-header">
          <span className="eyebrow">VISUAL GUIDE</span>
          <h2>{visual.title}</h2>
          <p>{visual.caption}</p>
        </div>

        <div className="stance-diagram">
          <div className="diagram-person">
            <div className="diagram-head">●</div>
            <div className="diagram-body">│</div>
            <div className="diagram-arms">╱│╲</div>
            <div className="diagram-legs">╱   ╲</div>
            <div className="diagram-feet">
              <span>●</span>
              <span>●</span>
            </div>
          </div>

          <div className="diagram-label label-posture">
            <span>01</span>
            {visual.labels[0]}
          </div>

          <div className="diagram-label label-base">
            <span>02</span>
            {visual.labels[1]}
          </div>

          <div className="diagram-label label-weight">
            <span>03</span>
            {visual.labels[2]}
          </div>

          <div className="diagram-label label-movement">
            <span>04</span>
            {visual.labels[3]}
          </div>

          <div className="base-line" />
        </div>
      </section>
    )
  }

  return null
}

export default LessonVisual
