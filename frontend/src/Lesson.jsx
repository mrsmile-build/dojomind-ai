import { useState } from 'react'
import LessonVisual from './components/LessonVisual'
import LessonVisualBlock from './components/LessonVisualBlock'
import BodyPositionDiagram from './components/BodyPositionDiagram'

function Lesson({ lesson, onBack, onComplete }) {
  const [quizIndex, setQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)

  const quiz = lesson.quiz[quizIndex]

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
  }

  const nextQuestion = () => {
    if (quizIndex < lesson.quiz.length - 1) {
      setQuizIndex((current) => current + 1)
      setSelectedAnswer(null)
    } else {
      setCompleted(true)
      onComplete(lesson.id)
    }
  }

  if (completed) {
    return (
      <main className="lesson-page">
        <section className="completion-card">
          <div className="completion-icon">✓</div>

          <span className="eyebrow">LESSON COMPLETE</span>

          <h1>Good work.</h1>

          <p>
            You completed <strong>{lesson.title}</strong>. Understanding comes
            from repeated practice, reflection and gradual improvement.
          </p>

          <div className="mastery-preview">
            <span className="eyebrow">MASTERY CHECKLIST</span>

            {lesson.mastery.map((item) => (
              <div className="mastery-item" key={item}>
                <span>○</span>
                {item}
              </div>
            ))}
          </div>

          <div className="completion-actions">
            <button className="primary-button" onClick={onBack}>
              Back to learning
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="lesson-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <header className="lesson-header">
        <div className="lesson-meta">
          <span>{lesson.subject}</span>
          <span>{lesson.level}</span>
          <span>{lesson.duration}</span>
        </div>

        <h1>{lesson.title}</h1>

        <p>{lesson.description}</p>
      </header>

      <section className="lesson-content">
        <div className="lesson-block">
          <span className="eyebrow">LEARNING OBJECTIVES</span>

          <h2>What you'll learn</h2>

          <ul className="objective-list">
            {lesson.objectives.map((objective) => (
              <li key={objective}>
                <span>✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {lesson.positionDiagram && (
          <BodyPositionDiagram
            position={lesson.positionDiagram}
          />
        )}

        {lesson.visuals?.map((visual, index) => (
          visual.type === 'diagram' ? (
            <LessonVisual
              key={index}
              visual={visual}
            />
          ) : (
            <LessonVisualBlock
              key={index}
              visual={visual}
            />
          )
        ))}

        {lesson.sections.map((section, index) => (
          <article className="lesson-block" key={section.title}>
            <span className="lesson-number">
              0{index + 1}
            </span>

            <h2>{section.title}</h2>

            <p>{section.content}</p>
          </article>
        ))}

        <section className="principles-block">
          <span className="eyebrow">KEY PRINCIPLES</span>

          <h2>Remember these.</h2>

          <div className="principles-grid">
            {lesson.principles.map((principle, index) => (
              <div className="principle-card" key={principle}>
                <span>0{index + 1}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mistakes-block">
          <span className="eyebrow">COMMON MISTAKES</span>

          <h2>What beginners often get wrong.</h2>

          <div className="mistakes-list">
            {lesson.mistakes.map((mistake) => (
              <article className="mistake-card" key={mistake.title}>
                <h3>{mistake.title}</h3>
                <p>{mistake.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="practice-block">
          <span className="eyebrow">GUIDED PRACTICE</span>

          <h2>Put the idea into practice.</h2>

          <ol>
            {lesson.practice.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <p className="safety-note">
            {lesson.safety}
          </p>
        </div>

        <section className="reflection-block">
          <span className="eyebrow">REFLECTION</span>

          <h2>Think about your practice.</h2>

          <p>{lesson.reflection}</p>
        </section>

        <section className="quiz-block">
          <span className="eyebrow">
            KNOWLEDGE CHECK {quizIndex + 1}/{lesson.quiz.length}
          </span>

          <h2>{quiz.question}</h2>

          <div className="quiz-options">
            {quiz.options.map((option, index) => {
              let className = 'quiz-option'

              if (selectedAnswer !== null) {
                if (index === quiz.answer) className += ' correct'
                else if (index === selectedAnswer) className += ' wrong'
              }

              return (
                <button
                  className={className}
                  key={option}
                  onClick={() => chooseAnswer(index)}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="quiz-feedback">
              <strong>
                {selectedAnswer === quiz.answer
                  ? 'Correct.'
                  : 'Not quite.'}
              </strong>

              <p>{quiz.explanation}</p>

              <button className="primary-button" onClick={nextQuestion}>
                {quizIndex < lesson.quiz.length - 1
                  ? 'Next question →'
                  : 'Complete lesson →'}
              </button>
            </div>
          )}
        </section>
      </section>
    </main>
  )
}

export default Lesson
