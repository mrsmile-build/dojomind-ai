function LessonImage({ src, alt, caption }) {
  return (
    <figure className="lesson-image">
      <img src={src} alt={alt} loading="lazy" />

      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default LessonImage
