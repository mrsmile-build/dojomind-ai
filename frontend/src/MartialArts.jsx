import { useState } from 'react'
import Lesson from './Lesson'
import { lessons } from './data/lessons'
import { martialArts } from './data/martialArts'

function MartialArts({ onBack }) {
  const [selected, setSelected] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)

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
    return (
      <main className="learning-page">
        <button className="back-button" onClick={() => setSelected(null)}>
          ← Back to martial arts
        </button>

        <section className="style-hero">
          <div className="style-icon">{selected.icon}</div>

          <span className="eyebrow">MARTIAL ART</span>

          <h1>{selected.name}</h1>

          <p>{selected.description}</p>

          <div className="level-badge">{selected.level}</div>
        </section>

        <section className="topic-section">
          <div className="section-heading">
            <span>LEARNING PATH</span>
            <h2>Start with the fundamentals.</h2>
            <p>
              Learn each concept progressively. DojoMind will eventually
              provide lessons, demonstrations, practice guidance and quizzes.
            </p>
          </div>

          <div className="topic-grid">
            {selected.topics.map((topic, index) => (
              <button
                className="topic-card"
                key={topic}
                onClick={() => {
                  if (selected.id === 'karate' && topic === 'Stances') {
                    setActiveLesson(lessons['karate-stances'])
                  }
                }}
              >
                <span>0{index + 1}</span>
                <strong>{topic}</strong>
                <small>Begin lesson →</small>
              </button>
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
          Explore different martial arts and build your understanding from
          fundamentals upward.
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
