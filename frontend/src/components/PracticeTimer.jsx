import { useState, useEffect } from 'react'

function PracticeTimer({ config }) {
  const [time, setTime] = useState(config.initialTime || 0)
  const [reps, setReps] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalPhase, setIntervalPhase] = useState('work')
  const [intervalCount, setIntervalCount] = useState(0)

  const type = config.type

  useEffect(() => {
    let interval = null
    if (isRunning && (type === 'timed-hold' || type === 'interval')) {
      interval = setInterval(() => {
        setTime((current) => {
          if (current <= 1) {
            if (type === 'interval') {
              if (intervalPhase === 'work') {
                setIntervalPhase('rest')
                return config.restTime || 10
              }
              setIntervalPhase('work')
              setIntervalCount((count) => count + 1)
              if (intervalCount + 1 >= (config.totalIntervals || 5)) {
                setIsRunning(false)
                return 0
              }
              return config.workTime || 30
            }
            setIsRunning(false)
            return 0
          }
          return current - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, type, intervalPhase, intervalCount, config])

  const start = () => {
    if (type === 'timed-hold') setTime(config.initialTime || 30)
    if (type === 'interval') {
      setTime(config.workTime || 30)
      setIntervalPhase('work')
      setIntervalCount(0)
    }
    setIsRunning(true)
  }

  const pause = () => setIsRunning(false)

  const reset = () => {
    setIsRunning(false)
    if (type === 'timed-hold') setTime(config.initialTime || 30)
    if (type === 'rep-counter') setReps(0)
    if (type === 'interval') {
      setTime(config.workTime || 30)
      setIntervalPhase('work')
      setIntervalCount(0)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return mins + ':' + String(secs).padStart(2, '0')
  }

  return (
    <div className="practice-timer">
      <div className="timer-header">
        <span className="eyebrow">PRACTICE TIMER</span>
        <h3>{config.label}</h3>
      </div>

      {type === 'timed-hold' && (
        <div className="timer-content">
          <div className="timer-display">{formatTime(time)}</div>
          <p className="timer-instruction">
            Hold the position for {formatTime(config.initialTime || 30)}. Focus on alignment and breathing.
          </p>
          <div className="timer-controls">
            {!isRunning && time === 0 && (
              <button className="primary-button" onClick={start}>Start</button>
            )}
            {isRunning && (
              <button className="primary-button" onClick={pause}>Pause</button>
            )}
            {!isRunning && time > 0 && (
              <button className="primary-button" onClick={start}>Resume</button>
            )}
          </div>
        </div>
      )}

      {type === 'rep-counter' && (
        <div className="timer-content">
          <div className="timer-display">{reps}</div>
          <p className="timer-instruction">
            Perform {config.targetReps || 10} clean repetitions. Count each complete rep.
          </p>
          <div className="timer-controls">
            <button className="timer-button" onClick={() => setReps((r) => Math.max(0, r - 1))}>−</button>
            <button className="timer-button large" onClick={() => setReps((r) => r + 1)}>+</button>
            <button className="timer-button" onClick={reset}>Reset</button>
          </div>
          {reps >= (config.targetReps || 10) && (
            <div className="timer-complete">
              <span>✓</span> Target reached
            </div>
          )}
        </div>
      )}

      {type === 'interval' && (
        <div className="timer-content">
          <div className="timer-phase">{intervalPhase === 'work' ? 'WORK' : 'REST'}</div>
          <div className="timer-display">{formatTime(time)}</div>
          <div className="timer-interval-count">
            Interval {Math.min(intervalCount + 1, config.totalIntervals || 5)} of {config.totalIntervals || 5}
          </div>
          <div className="timer-controls">
            {!isRunning && intervalCount === 0 && time === 0 && (
              <button className="primary-button" onClick={start}>Start</button>
            )}
            {isRunning && (
              <button className="primary-button" onClick={pause}>Pause</button>
            )}
            {!isRunning && intervalCount > 0 && (
              <button className="primary-button" onClick={reset}>Reset</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PracticeTimer
