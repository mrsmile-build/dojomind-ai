import { useState, useEffect, useRef } from 'react'

const DISTRACTION_TYPES = [
  { id: 'phone', label: 'Phone / notification', icon: '📱' },
  { id: 'person', label: 'Person interrupted', icon: '🗣️' },
  { id: 'thought', label: 'Internal thought', icon: '💭' },
  { id: 'other', label: 'Other', icon: '❓' },
]

function PomodoroEngine({ visual }) {
  const focusMin = visual.focusMinutes || 25
  const breakMin = visual.breakMinutes || 5
  const [mode, setMode] = useState('focus')
  const [timeLeft, setTimeLeft] = useState(focusMin * 60)
  const [running, setRunning] = useState(false)
  const [cycles, setCycles] = useState(0)
  const [distractions, setDistractions] = useState([])
  const [showPicker, setShowPicker] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            setRunning(false)
            if (mode === 'focus') {
              setCycles(c => c + 1)
              setMode('break')
              return breakMin * 60
            } else {
              setMode('focus')
              return focusMin * 60
            }
          }
          return t - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running, mode, focusMin, breakMin])

  const logDistraction = (type) => {
    setDistractions(d => [...d, { type, time: new Date().toISOString() }])
    setShowPicker(false)
  }

  const reset = () => {
    setRunning(false)
    setTimeLeft(focusMin * 60)
    setMode('focus')
    setCycles(0)
    setDistractions([])
  }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60
  const distRate = cycles > 0 ? (distractions.length / cycles).toFixed(1) : '0.0'

  return (
    <div className="pomodoro-engine">
      <div className="pm-header">
        <span className="eyebrow">FOCUS TIMER</span>
        <h3>{visual.title || 'Pomodoro with distraction logging'}</h3>
      </div>

      <div className="pm-display">
        <div className="pm-mode">{mode === 'focus' ? 'Focus time' : 'Break time'}</div>
        <div className="pm-time">{String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}</div>
        <div className="pm-stats">
          <span>{cycles} cycle{cycles === 1 ? '' : 's'}</span>
          <span>{distractions.length} distraction{distractions.length === 1 ? '' : 's'}</span>
          <span>{distRate} per cycle</span>
        </div>
      </div>

      <div className="pm-controls">
        <button className="primary-button" onClick={() => setRunning(r => !r)}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button className="timer-button" onClick={reset}>Reset</button>
        {mode === 'focus' && running && (
          <button className="pm-distraction-button" onClick={() => setShowPicker(!showPicker)}>
            I got distracted
          </button>
        )}
      </div>

      {showPicker && (
        <div className="pm-picker">
          <p className="pm-picker-prompt">What pulled you away?</p>
          <div className="pm-picker-options">
            {DISTRACTION_TYPES.map(dt => (
              <button key={dt.id} className="pm-picker-option" onClick={() => logDistraction(dt.id)}>
                <span className="pm-picker-icon">{dt.icon}</span>
                <span>{dt.label}</span>
              </button>
            ))}
          </div>
          <button className="timer-button" onClick={() => setShowPicker(false)}>Cancel</button>
        </div>
      )}

      {distractions.length > 0 && (
        <div className="pm-log">
          <p className="pm-log-title">Your distraction pattern:</p>
          {DISTRACTION_TYPES.map(dt => {
            const count = distractions.filter(d => d.type === dt.id).length
            if (count === 0) return null
            return (
              <div key={dt.id} className="pm-log-item">
                <span className="pm-log-icon">{dt.icon}</span>
                <span>{count} × {dt.label}</span>
              </div>
            )
          })}
        </div>
      )}

      {visual.caption && <p className="pm-caption">{visual.caption}</p>}
    </div>
  )
}

export default PomodoroEngine
