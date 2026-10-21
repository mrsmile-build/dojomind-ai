import { useState, useEffect } from 'react'

function FlashcardEngine({ visual }) {
  const cards = visual.cards || []
  const [deck, setDeck] = useState(() => cards.map((c, i) => ({ ...c, id: i, nextReview: 0, interval: 1, repetitions: 0 })))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [stats, setStats] = useState({ reviewed: 0, due: cards.length })

  const currentCard = deck[currentIndex]

  useEffect(() => {
    const due = deck.filter(c => c.nextReview <= Date.now()).length
    setStats(s => ({ ...s, due }))
  }, [deck])

  const rate = (quality) => {
    if (!currentCard) return
    const now = Date.now()
    let { interval, repetitions, ef } = currentCard
    ef = ef || 2.5

    if (quality < 3) {
      repetitions = 0
      interval = 1
    } else {
      if (repetitions === 0) interval = 1
      else if (repetitions === 1) interval = 6
      else interval = Math.round(interval * ef)
      repetitions++
    }

    ef = Math.max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

    const updated = deck.map((c, i) =>
      i === currentIndex ? { ...c, interval, repetitions, ef, nextReview: now + interval * 24 * 60 * 60 * 1000 } : c
    )
    setDeck(updated)
    setStats(s => ({ ...s, reviewed: s.reviewed + 1 }))
    setShowAnswer(false)
    nextCard(updated)
  }

  const nextCard = (d = deck) => {
    const due = d.filter(c => c.nextReview <= Date.now())
    if (due.length === 0) {
      setCurrentIndex(-1)
    } else {
      const nextIdx = d.findIndex(c => c.nextReview <= Date.now())
      setCurrentIndex(nextIdx)
    }
  }

  if (currentIndex === -1 || !currentCard) {
    return (
      <div className="flashcard-engine">
        <div className="fc-header">
          <span className="eyebrow">SPACED REPETITION</span>
          <h3>{visual.title || 'Flashcard Deck'}</h3>
        </div>
        <div className="fc-done">
          <p>All caught up! You reviewed {stats.reviewed} card{stats.reviewed === 1 ? '' : 's'}.</p>
          <p>Come back tomorrow — that is when the spacing does its work.</p>
          <button className="timer-button" onClick={() => { setCurrentIndex(0); setShowAnswer(false) }}>Restart deck</button>
        </div>
      </div>
    )
  }

  return (
    <div className="flashcard-engine">
      <div className="fc-header">
        <span className="eyebrow">SPACED REPETITION</span>
        <h3>{visual.title || 'Flashcard Deck'}</h3>
        <span className="fc-stats">{stats.due} due · {stats.reviewed} reviewed</span>
      </div>

      <div className="fc-card" onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? (
          <div className="fc-question">
            <p>{currentCard.question}</p>
            <span className="fc-hint">Tap to reveal</span>
          </div>
        ) : (
          <div className="fc-answer">
            <p className="fc-q-small">{currentCard.question}</p>
            <p className="fc-a">{currentCard.answer}</p>
          </div>
        )}
      </div>

      {showAnswer && (
        <div className="fc-ratings">
          <span className="fc-prompt">How well did you remember?</span>
          <button className="fc-rate hard" onClick={() => rate(2)}>Hard<br/><small>Forgot</small></button>
          <button className="fc-rate good" onClick={() => rate(3)}>Good<br/><small>Struggled</small></button>
          <button className="fc-rate easy" onClick={() => rate(5)}>Easy<br/><small>Instant</small></button>
        </div>
      )}

      {visual.caption && <p className="fc-caption">{visual.caption}</p>}
    </div>
  )
}

export default FlashcardEngine
