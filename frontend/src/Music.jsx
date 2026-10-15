import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { music } from './data/music'
import curriculum from './data/curriculum'
import { useProgress } from './ProgressContext'

function Music({ route, navigate }) {
  const { markComplete, isComplete } = useProgress()
  const selected = route.instrumentId ? music.find((m) => m.id === route.instrumentId) : null
  const instCurriculum = selected ? curriculum.music?.[selected.id] : null
  const activeLevel = route.levelId || 'beginner'
  const level = instCurriculum?.levels?.[activeLevel] || instCurriculum?.levels?.beginner
  const activeLesson = route.lessonId ? lessons[route.lessonId] : null

  if (activeLesson) {
    return (
      <Lesson
        lesson={activeLesson}
        onBack={() => {
          if (window.history.length > 1) window.history.back()
          else navigate('/music')
        }}
        onComplete={(id) => markComplete(id)}
      />
    )
  }

  if (selected) {
    if (!instCurriculum || Object.keys(instCurriculum.levels || {}).length === 0) {
      return (
        <main className="learning-page">
          <button className="back-button" onClick={() => navigate('/music')}>← Back to music</button>
          <section className="style-hero">
            <div className="style-icon">{selected.icon}</div>
            <span className="eyebrow">INSTRUMENT</span>
            <h1>{selected.name}</h1>
            <p>{selected.description}</p>
          </section>
          <section className="topic-section">
            <div className="section-heading">
              <span>COMING NEXT</span>
              <h2>{selected.name} lessons are being built.</h2>
              <p>Same structured approach as Theory. Check back soon.</p>
            </div>
          </section>
        </main>
      )
    }

    return (
      <main className="learning-page">
        <button className="back-button" onClick={() => navigate('/music')}>← Back to music</button>
        <section className="style-hero">
          <div className="style-icon">{selected.icon}</div>
          <span className="eyebrow">INSTRUMENT</span>
          <h1>{selected.name}</h1>
          <p>{selected.description}</p>
          <div className="level-badge">{level?.name}</div>
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
                          onClick={() => data && navigate('/music/' + selected.id + '/' + activeLevel + '/' + entry.id)}
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
        <span className="eyebrow">MUSIC</span>
        <h1>Choose your instrument.</h1>
        <p>Start with theory, then pick the instrument you want to play.</p>
      </section>
      <section className="style-grid">
        {music.map((inst) => (
          <button className="style-card" key={inst.id} onClick={() => navigate('/music/' + inst.id)}>
            <div className="style-card-icon">{inst.icon}</div>
            <div>
              <h2>{inst.name}</h2>
              <p>{inst.description}</p>
            </div>
            <div className="style-card-bottom">
              <span>{inst.level}</span>
              <strong>Explore →</strong>
            </div>
          </button>
        ))}
      </section>
    </main>
  )
}

export default Music
