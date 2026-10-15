import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { domains } from './data/domains'
import curriculum from './data/curriculum'
import { useProgress } from './ProgressContext'

function Domains({ route, navigate, domainKey }) {
  const { markComplete, isComplete } = useProgress()
  const domain = domains[domainKey]
  const bucket = curriculum[domainKey] || {}
  const selected = route.subId ? (domain.subs || []).find((s) => s.id === route.subId) : null
  const subCur = selected ? bucket[selected.id] : null
  const activeLevel = route.levelId || 'beginner'
  const level = subCur?.levels?.[activeLevel] || subCur?.levels?.beginner
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
          else navigate('/' + domainKey)
        }}
        onComplete={(id) => markComplete(id)}
      />
    )
  }

  if (selected) {
    if (!subCur || Object.keys(subCur.levels || {}).length === 0) {
      return (
        <main className="learning-page">
          <button className="back-button" onClick={() => navigate('/' + domainKey)}>← Back to {domain.name}</button>
          <section className="style-hero">
            <div className="style-icon">{selected.icon}</div>
            <span className="eyebrow">{domain.subLabel}</span>
            <h1>{selected.name}</h1>
            <p>{selected.description}</p>
          </section>
          <section className="topic-section">
            <div className="section-heading">
              <span>COMING NEXT</span>
              <h2>{selected.name} lessons are being built.</h2>
              <p>Same structured approach as the rest of {domain.name}. Check back soon.</p>
            </div>
          </section>
        </main>
      )
    }

    return (
      <main className="learning-page">
        <button className="back-button" onClick={() => navigate('/' + domainKey)}>← Back to {domain.name}</button>
        <section className="style-hero">
          <div className="style-icon">{selected.icon}</div>
          <span className="eyebrow">{domain.subLabel}</span>
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
                          onClick={() => data && navigate('/' + domainKey + '/' + selected.id + '/' + activeLevel + '/' + entry.id)}
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
        <span className="eyebrow">{domain.name.toUpperCase()}</span>
        <h1>{domain.tagline}</h1>
        <p>Start with Foundations, then pick the {domain.subLabel.toLowerCase()} you want to go deep on.</p>
      </section>
      <section className="style-grid">
        {domain.subs.map((sub) => (
          <button className="style-card" key={sub.id} onClick={() => navigate('/' + domainKey + '/' + sub.id)}>
            <div className="style-card-icon">{sub.icon}</div>
            <div>
              <h2>{sub.name}</h2>
              <p>{sub.description}</p>
            </div>
            <div className="style-card-bottom">
              <span>{sub.level}</span>
              <strong>Explore →</strong>
            </div>
          </button>
        ))}
      </section>
    </main>
  )
}

export default Domains
