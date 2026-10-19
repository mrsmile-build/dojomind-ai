import { useState, useEffect } from 'react'
import MartialArts from './MartialArts'
import MindBody from './MindBody'
import Music from './Music'
import Domains from './Domains'
import { ProgressProvider, useProgress } from './ProgressContext'
import './App.css'

const MIND_PAGES = ['meditation', 'breathing', 'training', 'music']
const DOMAIN_PAGES = ['programming', 'medicine', 'business', 'skills', 'roles', 'law']

const areas = [
  { icon: '🥋', title: 'Martial Arts', path: '/martial-arts', text: 'Learn techniques, styles, fundamentals and principles.' },
  { icon: '🧘', title: 'Meditation',  path: '/meditation',  text: 'Train attention, calm, awareness and mental discipline.' },
  { icon: '🫁', title: 'Breathing',   path: '/breathing',   text: 'Explore controlled breathing and breath-awareness practices.' },
  { icon: '🏋️', title: 'Training',    path: '/training',    text: 'Build mobility, balance, flexibility and conditioning.' },
  { icon: '🎵', title: 'Music',       path: '/music',       text: 'Learn rhythm, melody, harmony and how to practice any instrument.' },
  { icon: '💻', title: 'Programming', path: '/programming', text: 'Write instructions a machine can follow, from first principles up.' },
  { icon: '🩺', title: 'Medicine',    path: '/medicine',    text: 'Understand the body, read symptoms honestly, know the referral ceiling.' },
  { icon: '💼', title: 'Business',    path: '/business',    text: 'Create value, reach customers and read the numbers that matter.' },
  { icon: '🎯', title: 'Skills',      path: '/skills',      text: 'Focus, memory, habits and learning-how-to-learn: the meta-skills.' },
  { icon: '🏢', title: 'Company Roles', path: '/roles', text: 'What each position actually does, and what the same job is called in every industry.' },
  { icon: '⚖️', title: 'Law & Rights', path: '/law', text: 'Legal structures and your rights, explained as awareness, never as advice.' },
]

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const parts = raw.split('/').filter(Boolean)
  if (parts.length === 0) return { page: 'home' }
  if (DOMAIN_PAGES.includes(parts[0])) {
    return { page: parts[0], subId: parts[1] || null, levelId: parts[2] || null, lessonId: parts[3] || null }
  }
  if (parts[0] === 'music') {
    return { page: 'music', instrumentId: parts[1] || null, levelId: parts[2] || null, lessonId: parts[3] || null }
  }
  if (parts[0] === 'martial-arts') {
    return { page: 'martial-arts', artId: parts[1] || null, levelId: parts[2] || null, lessonId: parts[3] || null }
  }
  if (MIND_PAGES.includes(parts[0])) {
    return { page: parts[0], levelId: parts[1] || null, lessonId: parts[2] || null }
  }
  return { page: 'home' }
}

function useRoute() {
  const [route, setRoute] = useState(parseHash)
  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

function navigate(path) {
  const clean = path.replace(/^#?\//, '')
  window.location.hash = '#/' + clean
}

function AppContent() {
  const route = useRoute()
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const { completedLessons } = useProgress()

  if (DOMAIN_PAGES.includes(route.page)) {
    return <Domains route={route} navigate={navigate} domainKey={route.page} />
  }

  if (route.page === 'music') {
    return <Music route={route} navigate={navigate} />
  }

  if (route.page === 'martial-arts') {
    return <MartialArts route={route} navigate={navigate} />
  }

  if (MIND_PAGES.includes(route.page)) {
    return <MindBody route={route} navigate={navigate} />
  }

  const askDojoMind = () => {
    const text = question.trim()
    if (!text) return
    setMessages((current) => [
      ...current,
      { role: 'user', text },
      { role: 'assistant', text: `I'm learning how to help with "${text}". The DojoMind AI knowledge engine will be connected here next.` },
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
        <div className="brand" onClick={() => navigate('/')} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
          <div className="brand-mark">D</div>
          <span>DojoMind <b>AI</b></span>
        </div>
        <div className="nav-links">
          <a href="#learn">Learn</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
        </div>
        <button className="nav-button" onClick={() => navigate('/martial-arts')}>Start learning</button>
      </nav>

      <section className="hero">
        <div className="hero-badge"><span>✦</span> Your AI learning companion</div>
        <h1>Train the body.<br /><span>Focus the mind.</span></h1>
        <p className="hero-text">
          Learn martial arts, meditation, breathing and disciplined training
          with an AI companion built to teach step by step.
        </p>
        <div className="ask-box">
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask DojoMind anything..." rows="2" />
          <button onClick={askDojoMind} aria-label="Ask DojoMind">→</button>
        </div>
        <div className="suggestions">
          <button onClick={() => setQuestion('Teach me the basics of boxing')}>Teach me boxing basics</button>
          <button onClick={() => setQuestion('Guide me through a 10-minute meditation')}>10-minute meditation</button>
          <button onClick={() => setQuestion('How can I improve my balance?')}>Improve my balance</button>
        </div>
      </section>

      {messages.length > 0 && (
        <section className="conversation">
          <div className="section-heading"><span>YOUR SESSION</span><h2>Ask. Learn. Practice.</h2></div>
          <div className="messages">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.role}`}>
                <div className="message-label">{m.role === 'user' ? 'YOU' : 'DOJOMIND AI'}</div>
                <p>{m.text}</p>
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
              onClick={() => area.path && navigate(area.path)}
              role={area.path ? 'button' : undefined}
              tabIndex={area.path ? 0 : undefined}
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
          <p>Your DojoMind profile tracks lessons, sessions and consistency in one place.</p>
        </div>
        <div className="stats">
          <div><strong>0</strong><span>Day streak</span></div>
          <div><strong>{completedLessons.length}</strong><span>Lessons</span></div>
          <div><strong>0</strong><span>Sessions</span></div>
        </div>
      </section>

      <footer id="about">
        <div className="brand"><div className="brand-mark">D</div><span>DojoMind <b>AI</b></span></div>
        <p>Train the body. Focus the mind.</p>
      </footer>
    </main>
  )
}

function App() {
  return <ProgressProvider><AppContent /></ProgressProvider>
}

export default App
