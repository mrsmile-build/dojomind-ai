import { useState } from 'react'
import LessonVisual from './components/LessonVisual'
import LessonVisualBlock from './components/LessonVisualBlock'
import PracticeTimer from './components/PracticeTimer'
import BodyPositionDiagram from './components/BodyPositionDiagram'
import TechniqueAnimation from './components/TechniqueAnimation'
import BreathCycleVisual from './components/BreathCycleVisual'
import AttentionLoopVisual from './components/AttentionLoopVisual'
import MovementPostureVisual from './components/MovementPostureVisual'
import TargetOverlay from './components/TargetOverlay'
import MetronomeVisual from './components/MetronomeVisual'
import RhythmPatternVisual from './components/RhythmPatternVisual'
import { liveApplications } from './data/liveApplications'

const MIND_SUBJECTS = ['Meditation', 'Breathing', 'Training', 'Mind']

const SUBJECT_DISCLAIMERS = {
  'Company Roles': { eyebrow: 'CAREER REALITY', body: 'This lesson teaches career education and the judgment behind each role. It is not a job guarantee, professional licensing, or company-specific procedure. Real competence is built by doing the work. Use DojoMind alongside on-the-job experience and, where a role requires it, the proper certification.' },
  'Law & Rights': { eyebrow: 'LEGAL DISCLAIMER', body: 'This lesson teaches legal structures, rights and recognition. It is legal information, not legal advice, and not a substitute for a qualified lawyer in your jurisdiction. Laws vary by country and change over time. Use DojoMind to recognize when you need professional help and to speak with a lawyer intelligently; for any real situation, consult a licensed attorney.' },
  'Karate': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real fighting ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Boxing': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real fighting ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Taekwondo': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real fighting ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Muay Thai': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real fighting ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Judo': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real grappling ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Brazilian Jiu-Jitsu': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real grappling ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Wrestling': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real grappling ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Kung Fu': { eyebrow: 'TRAINING REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real fighting ability is built through physical practice with partners over years, not through reading. Use DojoMind alongside live training with a qualified instructor.' },
  'Music': { eyebrow: 'PRACTICE REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real playing ability is built at your instrument, daily, not through reading. Use DojoMind alongside regular practice with your instrument and, where possible, a qualified teacher.' },
  'Programming': { eyebrow: 'PRACTICE REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real coding ability is built by writing code and debugging it, not through reading. Use DojoMind alongside real projects and, where possible, a mentor.' },
  'Medicine': { eyebrow: 'MEDICAL DISCLAIMER', body: 'This lesson teaches principles only. It is not medical advice and is not a substitute for professional diagnosis or treatment. Always consult a qualified healthcare professional for personal health concerns, and never delay seeking professional care because of something you read here.' },
  'Business': { eyebrow: 'PRACTICE REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real business skill is built through real transactions, decisions and feedback, not through reading. Use DojoMind alongside real-world practice and, where possible, experienced mentors.' },
  'Skills': { eyebrow: 'PRACTICE REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real skill is built through daily practice and honest feedback, not through reading. Use DojoMind alongside real attempts and real reflection.' },
}
const DEFAULT_DISCLAIMER = { eyebrow: 'PRACTICE REALITY', body: 'This lesson teaches principles, concepts and mental frameworks. Real skill is built through practice, not through reading. Use DojoMind alongside real-world practice.' }

function Lesson({ lesson, onBack, onComplete }) {
  const [quizIndex, setQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [completed, setCompleted] = useState(false)

  const quiz = lesson.quiz[quizIndex]
  const liveApplication = lesson.liveApplication || liveApplications[lesson.id]

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
        {!MIND_SUBJECTS.includes(lesson.subject) && (() => {
          const d = SUBJECT_DISCLAIMERS[lesson.subject] || DEFAULT_DISCLAIMER
          return (
            <div className="physical-disclaimer">
              <span className="eyebrow">{d.eyebrow}</span>
              <p>{d.body}</p>
            </div>
          )
        })()}

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

        {lesson.visuals?.map((visual, index) => {
          if (visual.type === 'diagram') {
            return <LessonVisual key={index} visual={visual} />
          }
          if (visual.type === 'position-diagram') {
            return <BodyPositionDiagram key={index} position={visual} />
          }
          if (visual.type === 'animation') {
            return <TechniqueAnimation key={index} visual={visual} />
          }
          if (visual.type === 'breath-cycle') {
            return <BreathCycleVisual key={index} visual={visual} />
          }
          if (visual.type === 'attention-loop') {
            return <AttentionLoopVisual key={index} visual={visual} />
          }
          if (visual.type === 'posture') {
            return <MovementPostureVisual key={index} visual={visual} />
          }
          if (visual.type === 'target-overlay') {
            return <TargetOverlay key={index} visual={visual} />
          }
          if (visual.type === 'metronome') {
            return <MetronomeVisual key={index} visual={visual} />
          }
          if (visual.type === 'rhythm-pattern') {
            return <RhythmPatternVisual key={index} visual={visual} />
          }
          return <LessonVisualBlock key={index} visual={visual} />
        })}

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

          
          {lesson.practiceEngine && (
            <PracticeTimer config={lesson.practiceEngine} />
          )}

<p className="safety-note">
            {lesson.safety}
          </p>
        </div>

        {liveApplication && (
          <section className="live-application-block">
            <span className="eyebrow">LIVE APPLICATION</span>
            <h2>See it happen, from both sides.</h2>

            {liveApplication.scenarios && (
              <div className="scenarios-list">
                <h3>Worked scenarios</h3>
                {liveApplication.scenarios.map((scenario, i) => (
                  <article className="scenario-card" key={i}>
                    <div className="scenario-part">
                      <span className="scenario-label">SETUP</span>
                      <p>{scenario.setup}</p>
                    </div>
                    <div className="scenario-part">
                      <span className="scenario-label">ACTION</span>
                      <p>{scenario.action}</p>
                    </div>
                    <div className="scenario-part">
                      <span className="scenario-label">WHY IT WORKS</span>
                      <p>{scenario.why}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {liveApplication.perspectives && (
              <div className="perspectives-grid">
                <h3>Both sides of the technique</h3>
                {liveApplication.perspectives.map((perspective) => (
                  <article className="perspective-card" key={perspective.role}>
                    <h4>{perspective.role}</h4>
                    <p>{perspective.detail}</p>
                  </article>
                ))}
              </div>
            )}

            {liveApplication.adaptation && (
              <div className="adaptation-block">
                <h3>Read, adjust, learn</h3>
                {liveApplication.adaptation.cues && (
                  <div className="adaptation-cues">
                    <span className="eyebrow">WATCH FOR</span>
                    <ul>
                      {liveApplication.adaptation.cues.map((cue) => (
                        <li key={cue}>{cue}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {liveApplication.adaptation.adjustments && (
                  <div className="adaptation-adjustments">
                    <span className="eyebrow">IF / THEN</span>
                    {liveApplication.adaptation.adjustments.map((adj, i) => (
                      <div className="adjustment-card" key={i}>
                        <span className="if-part">IF {adj.if}</span>
                        <span className="then-part">THEN {adj.then}</span>
                      </div>
                    ))}
                  </div>
                )}
                {liveApplication.adaptation.learning && (
                  <div className="adaptation-learning">
                    <span className="eyebrow">AFTER EACH EXCHANGE</span>
                    <p>{liveApplication.adaptation.learning}</p>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

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
