import { useState } from 'react'
import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { martialArts } from './data/martialArts'
import curriculum from './data/curriculum'

function MartialArts({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)
  const [activeLevel, setActiveLevel] = useState('beginner')

  if (activeLesson) {
    return (
      <Lesson
        lesson={activeLesson}
        onBack={() => setActiveLesson(null)}
        onComplete={() => {}}
      />
    )
  }

  if (selected) {
    const artCurriculum = curriculum.martialArts[selected.id]

    // Not every style in martialArts.js has a curriculum entry yet
    // (only karate does today). Without this guard, selecting one of
    // the others throws, since `level` below would be undefined.
    if (!artCurriculum) {
      return (
        <main className="learning-page">
          <button
            className="back-button"
            onClick={() => {
              setSelected(null)
              setActiveLevel('beginner')
            }}
          >
            ← Back to martial arts
          </button>

          <section className="style-hero">
            <div className="style-icon">{selected.icon}</div>

            <span className="eyebrow">MARTIAL ART</span>

            <h1>{selected.name}</h1>

            <p>{selected.description}</p>
          </section>

          <section className="topic-section">
            <div className="section-heading">
              <span>COMING SOON</span>

              <h2>Curriculum in development.</h2>

              <p>
                {selected.name} lessons are being built using the same
                structured approach as Karate. Check back soon.
              </p>
            </div>
          </section>
        </main>
      )
    }

    const level =
      artCurriculum.levels?.[activeLevel] ||
      artCurriculum.levels?.beginner

    return (
      <main className="learning-page">
        <button
          className="back-button"
          onClick={() => {
            setSelected(null)
            setActiveLevel('beginner')
          }}
        >
          ← Back to martial arts
        </button>

        <section className="style-hero">
          <div className="style-icon">{selected.icon}</div>

          <span className="eyebrow">MARTIAL ART</span>

          <h1>{selected.name}</h1>

          <p>{selected.description}</p>

          <div className="level-badge">
            {level.name}
          </div>
        </section>

        <section className="level-selector">
          <span className="eyebrow">TRAINING LEVEL</span>

          <div className="level-tabs">
            {Object.entries(artCurriculum?.levels || {}).map(
              ([levelId, levelData]) => (
                <button
                  key={levelId}
                  className={
                    activeLevel === levelId
                      ? 'level-tab active'
                      : 'level-tab'
                  }
                  onClick={() => setActiveLevel(levelId)}
                >
                  {levelData.name}
                </button>
              )
            )}
          </div>
        </section>

        <section className="topic-section">
          <div className="section-heading">
            <span>LEARNING PATH</span>

            <h2>{level.name} foundation.</h2>

            <p>{level.description}</p>
          </div>

          <div className="curriculum-modules">
            {level.modules.map((module, moduleIndex) => (
              <article className="curriculum-module" key={module.id}>
                <div className="module-number">
                  {String(moduleIndex + 1).padStart(2, '0')}
                </div>

                <div className="module-content">
                  <h3>{module.title}</h3>

                  <div className="lesson-list">
                    {module.lessons.map((lessonEntry, lessonIndex) => {
                      // The curriculum only decides what exists and in
                      // what order. Whether a lesson is open is purely
                      // "does this id exist in the lessons database" —
                      // no per-lesson code, ever, no matter how many
                      // lessons get added later.
                      const lessonData = lessons[lessonEntry.id]

                      return (
                        <button
                          className="curriculum-lesson"
                          key={lessonEntry.id}
                          onClick={() => {
                            if (lessonData) {
                              setActiveLesson(lessonData)
                            }
                          }}
                          disabled={!lessonData}
                        >
                          <span>
                            {String(lessonIndex + 1).padStart(2, '0')}
                          </span>

                          <strong>{lessonEntry.title}</strong>

                          <small>
                            {lessonData ? 'Begin lesson →' : 'Coming next'}
                          </small>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="learning-page">
      <button className="back-button" onClick={onBack}>
        ← Back home
      </button>

      <section className="page-heading">
        <span className="eyebrow">MARTIAL ARTS</span>

        <h1>Choose your path.</h1>

        <p>
          Explore different martial arts and build your understanding
          from fundamentals upward.
        </p>
      </section>

      <section className="style-grid">
        {martialArts.map((style) => (
          <button
            className="style-card"
            key={style.id}
            onClick={() => setSelected(style)}
          >
            <div className="style-card-icon">{style.icon}</div>

            <div>
              <h2>{style.name}</h2>
              <p>{style.description}</p>
            </div>

            <div className="style-card-bottom">
              <span>{style.level}</span>
              <strong>Explore →</strong>
            </div>
          </button>
        ))}
      </section>
    </main>
  )
}

export default MartialArts
