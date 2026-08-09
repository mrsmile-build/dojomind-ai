import { useState } from 'react'
import MartialArts from './MartialArts'
import './App.css'

const areas = [
  {
    icon: '🥋',
    title: 'Martial Arts',
    text: 'Learn techniques, styles, fundamentals and principles.',
  },
  {
    icon: '🧘',
    title: 'Meditation',
    text: 'Train attention, calm, awareness and mental discipline.',
  },
  {
    icon: '🫁',
    title: 'Breathing',
    text: 'Explore controlled breathing and breath-awareness practices.',
  },
  {
    icon: '🏋️',
    title: 'Training',
    text: 'Build mobility, balance, flexibility and conditioning.',
  },
]

function App() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const [page, setPage] = useState('home')

  if (page === 'martial-arts') {
    return <MartialArts onBack={() => setPage('home')} />
  }

  const askDojoMind = () => {
    const text = question.trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      {
        role: 'assistant',
        text: `I'm learning how to help with "${text}". The DojoMind AI knowledge engine will be connected here next.`,
      },
    ])

    setQuestion('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      askDojoMind()
    }
  }

  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">D</div>
          <span>DojoMind <b>AI</b></span>
        </div>

        <div className="nav-links">
          <a href="#learn">Learn</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">Start learning</button>
      </nav>

      <section className="hero">
        <div className="hero-badge">
          <span>✦</span> Your AI learning companion
        </div>

        <h1>
          Train the body.
          <br />
          <span>Focus the mind.</span>
        </h1>

        <p className="hero-text">
          Learn martial arts, meditation, breathing and disciplined training
          with an AI companion built to teach step by step.
        </p>

        <div className="ask-box">
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask DojoMind anything..."
            rows="2"
          />
          <button onClick={askDojoMind} aria-label="Ask DojoMind">
            →
          </button>
        </div>

        <div className="suggestions">
          <button onClick={() => setQuestion('Teach me the basics of boxing')}>
            Teach me boxing basics
          </button>
          <button onClick={() => setQuestion('Guide me through a 10-minute meditation')}>
            10-minute meditation
          </button>
          <button onClick={() => setQuestion('How can I improve my balance?')}>
            Improve my balance
          </button>
        </div>
      </section>

      {messages.length > 0 && (
        <section className="conversation">
          <div className="section-heading">
            <span>YOUR SESSION</span>
            <h2>Ask. Learn. Practice.</h2>
          </div>

          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                <div className="message-label">
                  {message.role === 'user' ? 'YOU' : 'DOJOMIND AI'}
                </div>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="learning" id="learn">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>What do you want to train?</h2>
          <p>Start anywhere. Build your knowledge progressively.</p>
        </div>

        <div className="area-grid">
          {areas.map((area) => (
            <article
              className="area-card"
              key={area.title}
              onClick={() => area.title === 'Martial Arts' && setPage('martial-arts')}
              role={area.title === 'Martial Arts' ? 'button' : undefined}
              tabIndex={area.title === 'Martial Arts' ? 0 : undefined}
            >
              <div className="area-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <span className="card-arrow">Explore →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="practice" id="practice">
        <div>
          <span className="eyebrow">YOUR JOURNEY</span>
          <h2>Progress comes from practice.</h2>
          <p>
            Your future DojoMind profile will track lessons, meditation
            sessions, training and consistency in one place.
          </p>
        </div>

        <div className="stats">
          <div>
            <strong>0</strong>
            <span>Day streak</span>
          </div>
          <div>
            <strong>0</strong>
            <span>Lessons</span>
          </div>
          <div>
            <strong>0</strong>
            <span>Sessions</span>
          </div>
        </div>
      </section>

      <footer id="about">
        <div className="brand">
          <div className="brand-mark">D</div>
          <span>DojoMind <b>AI</b></span>
        </div>
        <p>Train the body. Focus the mind.</p>
      </footer>
    </main>
  )
}

export default App
