import { useState } from 'react'

const EMPTY_LOOP = { cue: '', craving: '', routine: '', reward: '' }

function HabitLoopEngine({ visual }) {
  const [loops, setLoops] = useState([])
  const [current, setCurrent] = useState(EMPTY_LOOP)
  const [editing, setEditing] = useState(false)

  const saveLoop = () => {
    if (!current.cue || !current.craving || !current.routine || !current.reward) return
    setLoops(prev => [...prev, { ...current, id: Date.now() }])
    setCurrent(EMPTY_LOOP)
    setEditing(false)
  }

  const deleteLoop = (id) => {
    setLoops(prev => prev.filter(l => l.id !== id))
  }

  const commonCues = {}
  const commonRewards = {}
  loops.forEach(l => {
    const cueWords = l.cue.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    cueWords.forEach(w => { commonCues[w] = (commonCues[w] || 0) + 1 })
    const rewardWords = l.reward.toLowerCase().split(/\s+/).filter(w => w.length > 3)
    rewardWords.forEach(w => { commonRewards[w] = (commonRewards[w] || 0) + 1 })
  })
  const topCues = Object.entries(commonCues).filter(([_, c]) => c >= 2).slice(0, 3)
  const topRewards = Object.entries(commonRewards).filter(([_, c]) => c >= 2).slice(0, 3)

  return (
    <div className="habit-loop-engine">
      <div className="hl-header">
        <span className="eyebrow">HABIT MAPPER</span>
        <h3>{visual.title || 'Map your loops'}</h3>
      </div>

      <p className="hl-intro">
        {visual.caption || 'Every habit is a machine with four gears: a cue starts it, a craving runs it, a routine does the work, and a reward teaches the brain to run it again. Map three loops and you will see your own patterns.'}
      </p>

      <div className="hl-actions">
        <button className="primary-button" onClick={() => setEditing(true)}>
          {loops.length === 0 ? 'Map your first loop' : 'Map another loop'}
        </button>
        <span className="hl-count">{loops.length} loop{loops.length === 1 ? '' : 's'} mapped</span>
      </div>

      {editing && (
        <div className="hl-editor">
          <div className="hl-field">
            <label>Cue — what starts it? (time, place, feeling, person, previous action)</label>
            <input
              type="text"
              value={current.cue}
              onChange={e => setCurrent({ ...current, cue: e.target.value })}
              placeholder="e.g. 3pm at my desk, feeling stuck"
            />
          </div>
          <div className="hl-field">
            <label>Craving — what does it promise? (the want that pulls you)</label>
            <input
              type="text"
              value={current.craving}
              onChange={e => setCurrent({ ...current, craving: e.target.value })}
              placeholder="e.g. a break from the hard paragraph"
            />
          </div>
          <div className="hl-field">
            <label>Routine — what do you actually do?</label>
            <input
              type="text"
              value={current.routine}
              onChange={e => setCurrent({ ...current, routine: e.target.value })}
              placeholder="e.g. scroll phone for 20 minutes"
            />
          </div>
          <div className="hl-field">
            <label>Reward — what did it actually give you?</label>
            <input
              type="text"
              value={current.reward}
              onChange={e => setCurrent({ ...current, reward: e.target.value })}
              placeholder="e.g. relief from the stuck feeling"
            />
          </div>
          <div className="hl-editor-actions">
            <button className="primary-button" onClick={saveLoop}>Save this loop</button>
            <button className="timer-button" onClick={() => { setCurrent(EMPTY_LOOP); setEditing(false) }}>Cancel</button>
          </div>
        </div>
      )}

      {loops.length > 0 && (
        <div className="hl-saved">
          <h4>Your mapped loops:</h4>
          {loops.map(l => (
            <div key={l.id} className="hl-loop-card">
              <div className="hl-loop-visual">
                <span className="hl-node cue">CUE<br/><small>{l.cue.slice(0, 30)}</small></span>
                <span className="hl-arrow">→</span>
                <span className="hl-node craving">CRAVING<br/><small>{l.craving.slice(0, 30)}</small></span>
                <span className="hl-arrow">→</span>
                <span className="hl-node routine">ROUTINE<br/><small>{l.routine.slice(0, 30)}</small></span>
                <span className="hl-arrow">→</span>
                <span className="hl-node reward">REWARD<br/><small>{l.reward.slice(0, 30)}</small></span>
              </div>
              <button className="hl-delete" onClick={() => deleteLoop(l.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {(topCues.length > 0 || topRewards.length > 0) && (
        <div className="hl-patterns">
          <h4>Your patterns:</h4>
          {topCues.length > 0 && (
            <p className="hl-pattern"><strong>Common cues:</strong> {topCues.map(([w]) => w).join(', ')}</p>
          )}
          {topRewards.length > 0 && (
            <p className="hl-pattern"><strong>Common rewards:</strong> {topRewards.map(([w]) => w).join(', ')}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default HabitLoopEngine
