import { useState } from 'react'

function LessonImage({ src, alt, caption }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <figure className="lesson-image">
        <div
          role="img"
          aria-label={alt}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '32px 20px',
            border: '1px dashed rgba(201,161,90,.4)',
            borderRadius: '14px',
            background: 'rgba(201,161,90,.06)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '26px' }}>📷</span>
          <strong style={{ color: '#c9a15a', fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Reference photography coming soon
          </strong>
          <small style={{ color: 'rgba(255,255,255,.62)', lineHeight: 1.55, maxWidth: '420px' }}>
            This technique's photo reference is still being sourced. Until it
            lands, the diagrams above carry the precise positioning guidance.
          </small>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    )
  }

  return (
    <figure className="lesson-image">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default LessonImage
