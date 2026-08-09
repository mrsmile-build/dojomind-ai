import LessonImage from './LessonImage'

function LessonVisualBlock({ visual }) {
  if (!visual) return null

  if (visual.type === 'image') {
    return (
      <section className="lesson-media-block">
        <LessonImage
          src={visual.src}
          alt={visual.alt}
          caption={visual.caption}
        />
      </section>
    )
  }

  if (visual.type === 'sequence') {
    return (
      <section className="lesson-media-block">
        <div className="visual-header">
          <span className="eyebrow">MOVEMENT SEQUENCE</span>
          <h2>{visual.title}</h2>

          {visual.description && (
            <p>{visual.description}</p>
          )}
        </div>

        <div className="sequence-grid">
          {visual.steps.map((step, index) => (
            <article className="sequence-step" key={step.title}>
              <div className="sequence-number">
                0{index + 1}
              </div>

              {step.src && (
                <img
                  src={step.src}
                  alt={step.alt || step.title}
                  loading="lazy"
                />
              )}

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return null
}

export default LessonVisualBlock
