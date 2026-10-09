import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { martialArts } from './data/martialArts'
import curriculum from './data/curriculum'
import { useProgress } from './ProgressContext'

function MartialArts({ route, navigate }) {
  const { markComplete, isComplete } = useProgress()

  const selected = route.artId ? martialArts.find((s) => s.id === route.artId) : null
  const artCurriculum = selected ? curriculum.martialArts?.[selected.id] : null
  const activeLevel = route.levelId || 'beginner'
  const level = artCurriculum?.levels?.[activeLevel] || artCurriculum?.levels?.beginner
  const activeLesson = route.lessonId ? lessons[route.lessonId] : null

  if (activeLesson) {
    return (
      <Lesson
        lesson={activeLesson}
        onBack={() => {
          if (window.history.length > 1) window.history.back()
          else navigate('/martial-arts')
        }}
        onComplete={(id) => markComplete(id)}
      />
    )
  }

  if (selected) {
    if (!artCurriculum) {
      return (
        <main className="learning-page">
          <button className="back-button" onClick={() => navigate('/martial-arts')}>← Back to martial arts</button>
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
              <p>{selected.name} lessons are being built using the same structured approach as Karate. Check back soon.</p>
            </div>
          </section>
        </main>
      )
    }

    return (
      <main className="learning-page">
        <button className="back-button" onClick={() => navigate('/martial-arts')}>← Back to martial arts</button>
        <section className="style-hero">
          <div className="style-icon">{selected.icon}</div>
          <span className="eyebrow">MARTIAL ART</span>
          <h1>{selected.name}</h1>
          <p>{selected.description}</p>
          <div className="level-badge">{level?.name}</div>
        </section>

        <section className="level-selector">
          <span className="eyebrow">TRAINING LEVEL</span>
          <div className="level-tabs">
            {Object.entries(artCurriculum?.levels || {}).map(([levelId, levelData]) => (
              <button
                key={levelId}
                className={activeLevel === levelId ? 'level-tab active' : 'level-tab'}
                onClick={() => navigate('/martial-arts/' + selected.id + '/' + levelId)}
              >
                {levelData.name}
              </button>
            ))}
          </div>
        </section>

        <section className="topic-section">
          <div className="section-heading">
            <span>LEARNING PATH</span>
            <h2>{level?.name} foundation.</h2>
            <p>{level?.description}</p>
          </div>
          <div className="curriculum-modules">
            {(level?.modules || []).map((module, moduleIndex) => (
              <article className="curriculum-module" key={module.id}>
                <div className="module-number">{String(moduleIndex + 1).padStart(2, '0')}</div>
                <div className="module-content">
                  <h3>{module.title}</h3>
                  <div className="lesson-list">
                    {module.lessons.map((entry, lessonIndex) => {
                      const data = lessons[entry.id]
                      const done = isComplete(entry.id)
                      return (
                        <button
                          className={`curriculum-lesson ${done ? 'completed' : ''}`}
                          key={entry.id}
                          onClick={() => data && navigate('/martial-arts/' + selected.id + '/' + activeLevel + '/' + entry.id)}
                          disabled={!data}
                        >
                          <span>{String(lessonIndex + 1).padStart(2, '0')}</span>
                          <strong>{entry.title}</strong>
                          <small>{done ? '✓ Completed' : (data ? 'Begin lesson →' : 'Coming next')}</small>
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
      <button className="back-button" onClick={() => navigate('/')}>← Back home</button>
      <section className="page-heading">
        <span className="eyebrow">MARTIAL ARTS</span>
        <h1>Choose your path.</h1>
        <p>Explore different martial arts and build your understanding from fundamentals upward.</p>
      </section>
      <section className="style-grid">
        {martialArts.map((style) => (
          <button className="style-card" key={style.id} onClick={() => navigate('/martial-arts/' + style.id)}>
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
