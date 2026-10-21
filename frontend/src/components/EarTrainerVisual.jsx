import { useState, useRef } from 'react'

const INTERVALS = [
  { name: 'Major 2nd', semis: 2, hint: 'the first two notes of "Frere Jacques" (do-re)' },
  { name: 'Major 3rd', semis: 4, hint: 'the first two notes of "Oh, When the Saints"' },
  { name: 'Perfect 4th', semis: 5, hint: 'the first two notes of "Here Comes the Bride"' },
  { name: 'Perfect 5th', semis: 7, hint: 'the first two notes of "Twinkle Twinkle Little Star"' },
  { name: 'Octave', semis: 12, hint: '"Somewhere Over the Rainbow" (some-where)' },
]

function EarTrainerVisual({ visual }) {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * INTERVALS.length))
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState({ right: 0, total: 0 })
  const ctxRef = useRef(null)

  const getCtx = () => {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    return ctxRef.current
  }

  const tone = (c, freq, t, dur) => {
    const o = c.createOscillator()
    const g = c.createGain()
    o.type = 'sine'
    o.frequency.value = freq
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(0.35, t + 0.02)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur)
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur)
  }

  const play = (idx) => {
    const c = getCtx()
    const base = 261.63
    const t = c.currentTime + 0.05
    tone(c, base, t, 0.55)
    tone(c, base * Math.pow(2, INTERVALS[idx].semis / 12), t + 0.7, 0.7)
  }

  const answer = (i) => {
    if (picked !== null) return
    setPicked(i)
    setScore(s => ({ right: s.right + (i === target ? 1 : 0), total: s.total + 1 }))
  }

  const next = () => {
    const n = Math.floor(Math.random() * INTERVALS.length)
    setPicked(null)
    setTarget(n)
    play(n)
  }

  const correct = picked === target

  return (
    <div className="ear-trainer-visual">
      <div className="et-header">
        <span className="eyebrow">EAR TRAINER</span>
        <h3>{visual.title || 'Name the distance'}</h3>
      </div>

      <div className="et-controls">
        <button className="primary-button" onClick={() => play(target)}>Play the two notes</button>
        <span className="et-score">{score.right} of {score.total} right</span>
      </div>

      <div className="et-choices">
        {INTERVALS.map((iv, i) => (
          <button
            key={iv.name}
            className={picked === null ? 'et-choice' : (i === target ? 'et-choice right' : (i === picked ? 'et-choice wrong' : 'et-choice'))}
            onClick={() => answer(i)}
          >
            {iv.name}
          </button>
        ))}
      </div>

      {picked !== null && (
        <div className="et-feedback">
          {correct
            ? <p>Yes! That was a <strong>{INTERVALS[target].name}</strong>. {INTERVALS[target].hint}. Sing it back and it is yours forever.</p>
            : <p>That was a <strong>{INTERVALS[target].name}</strong>, not a {INTERVALS[picked].name}. {INTERVALS[target].hint}. Play it again and sing the two notes - your voice teaches your ear.</p>}
          <button className="timer-button" onClick={() => play(target)}>Play it again</button>
          <button className="primary-button" onClick={next}>Next interval</button>
        </div>
      )}

      {visual.caption && <p className="et-caption">{visual.caption}</p>}
    </div>
  )
}

export default EarTrainerVisual
