import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { mindBody } from './data/curriculum/mindBody'
import { useProgress } from './ProgressContext'

function MindBody({ route, navigate }) {
  const { markComplete, isComplete } = useProgress()
  const domain = mindBody[route.page]

  const activeLevel = route.levelId || 'beginner'
  const level = domain?.levels?.[activeLevel] || domain?.levels?.beginner
  const activeLesson = route.lessonId ? lessons[route.lessonId] : null

  if (!domain) {
    return (
      <main className="learning-page">
        <button className="back-button" onClick={() => navigate('/')}>← Back home</button>
        <section className="topic-section">
          <div className="section-heading">
            <span>COMING SOON</span>
            <h2>This area is in development.</h2>
            <p>Lessons are being built using the same structured approach. Check back soon.</p>
          </div>
        </section>
      </main>
    )
  }

  if (activeLesson) {
    return (
      <Lesson
        lesson={activeLesson}
        onBack={() => {
          if (window.history.length > 1) window.history.back()
          else navigate('/' + route.page)
        }}
        onComplete={(id) => markComplete(id)}
      />
    )
  }

  return (
    <main className="learning-page">
      <button className="back-button" onClick={() => navigate('/')}>← Back home</button>

      <section className="style-hero">
        <div className="style-icon">{domain.icon}</div>
        <span className="eyebrow">{domain.name.toUpperCase()}</span>
        <h1>{domain.name}</h1>
        <p>{domain.description}</p>
        <div className="level-badge">{level?.name}</div>
      </section>

      <section className="level-selector">
        <span className="eyebrow">TRAINING LEVEL</span>
        <div className="level-tabs">
          {Object.entries(domain.levels || {}).map(([levelId, levelData]) => (
            <button
              key={levelId}
              className={activeLevel === levelId ? 'level-tab active' : 'level-tab'}
              onClick={() => navigate('/' + route.page + '/' + levelId)}
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
          {(level?.modules || []).map((module, mi) => (
            <article className="curriculum-module" key={module.id}>
              <div className="module-number">{String(mi + 1).padStart(2, '0')}</div>
              <div className="module-content">
                <h3>{module.title}</h3>
                <div className="lesson-list">
                  {module.lessons.map((entry, li) => {
                    const data = lessons[entry.id]
                    const done = isComplete(entry.id)
                    return (
                      <button
                        key={entry.id}
                        className={`curriculum-lesson ${done ? 'completed' : ''}`}
                        onClick={() => data && navigate('/' + route.page + '/' + activeLevel + '/' + entry.id)}
                        disabled={!data}
                      >
                        <span>{String(li + 1).padStart(2, '0')}</span>
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

export default MindBody
