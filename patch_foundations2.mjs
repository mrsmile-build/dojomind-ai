import fs from 'fs'

let lesson = fs.readFileSync('./frontend/src/Lesson.jsx','utf8')
let changed = false
const IMPS = [
  ["import EarTrainerVisual from './components/EarTrainerVisual'", 'GrooveRecorder'],
  ["import PracticeLoopVisual from './components/PracticeLoopVisual'", 'EarTrainerVisual'],
]
for (const [line, anchorName] of IMPS) {
  if (!lesson.includes(line)) {
    const anchor = "import " + anchorName + " from './components/" + anchorName + "'"
    if (!lesson.includes(anchor)) throw new Error('ANCHOR MISSING: ' + anchor)
    lesson = lesson.split(anchor).join(anchor + '\n' + line)
    changed = true
  }
}
console.log('imports:', changed ? 'added' : 'present')

const addBranch = (newType, newComp) => {
  const marker = "visual.type === '" + newType + "'"
  if (lesson.includes(marker)) { console.log(newType + ' branch present'); return }
  const tgt = "visual.type === 'groove-recorder'"
  const ti = lesson.indexOf(tgt)
  if (ti < 0) throw new Error('groove-recorder branch not found')
  const nextIf = lesson.indexOf("if (visual.type ===", ti + tgt.length)
  const fb = lesson.indexOf("return <LessonVisualBlock", ti + tgt.length)
  const raw = (nextIf >= 0 && nextIf < fb) ? nextIf : fb
  let ins = raw; while (ins > 0 && lesson[ins-1] !== '\n') ins--
  let st = ti; while (st > 0 && lesson[st-1] !== '\n') st--
  const clone = lesson.slice(st, ins).split('groove-recorder').join(newType).split('GrooveRecorder').join(newComp)
  lesson = lesson.slice(0, ins) + clone + lesson.slice(ins)
  console.log(newType + ' branch added')
}
addBranch('ear-trainer', 'EarTrainerVisual')
addBranch('practice-loop', 'PracticeLoopVisual')
fs.writeFileSync('./frontend/src/Lesson.jsx', lesson)

const lessons = (await import('./frontend/src/data/lessons.js')).lessons
lessons['music-foundations-note-map'] = {
  id: 'music-foundations-note-map',
  subject: 'Music',
  title: 'Notes, Scales & Intervals',
  level: 'Beginner',
  duration: '12 min',
  description: 'Notes are just names for sounds. A scale is a ladder of notes built from a step pattern. And the distance between two notes - an interval - is something your ear already knows from songs you have sung your whole life. This lesson gives names to what you can already hear.',
  objectives: [
    'Say what a note is: a name for one steady sound',
    'Build a major scale from its step pattern instead of memorizing letters',
    'Hear an interval as a distance, not as two separate notes',
    'Match the five most useful intervals to songs you already know',
    'Name an interval on first hearing using the Ear Trainer'
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'A ladder of sounds',
      caption: 'A note is a name for one steady sound. A scale is a ladder of notes built from a pattern of steps. An interval is the distance between any two rungs - and your ear already knows these distances from songs.',
      labels: [
        'Note: a name for one steady sound (C, D, E...)',
        'Step: the gap to the next rung - whole (skip one key) or half (very next key)',
        'Scale: a ladder built from a step pattern, starting on any note',
        'Interval: the distance between any two notes',
        'Your ear learned intervals from songs before this lesson existed'
      ]
    },
    {
      type: 'ear-trainer',
      title: 'Name the distance',
      caption: 'Press Play. You will hear two notes, one after the other. Your job: how far apart are they? Pick a button. If you are wrong, play it again and sing the two notes out loud - your voice teaches your ear faster than your brain does.'
    }
  ],
  sections: [
    {
      title: 'Notes are names for sounds',
      content: 'Hum as low as you can, then slide up as high as you can. You just traveled through sounds. A note is simply a name we give to one steady sound so we can talk about it - the way a name lets us talk about a person. When the air wiggles faster, the sound is higher; slower, lower. A piano gives each common wiggle its own key and its own letter name. That is all a note is: not a symbol on paper, not a button - a steady sound with a name. Everything else in music is just relationships between these named sounds, which is why the next two ideas (ladders and distances) are the whole map.'
    },
    {
      title: 'A scale is a ladder with a step pattern',
      content: 'Neighbors on the ladder are separated by steps, and there are only two sizes: a half step (the very next key, no gap) and a whole step (skip one key in between). Now here is the trick that frees you from memorizing: the major scale is not a list of letters, it is a step pattern - whole, whole, half, whole, whole, whole, half. Start on any note, follow that pattern of steps, and you have built that note is major scale. Start on C and you get the white keys; start on G and one key must turn black to keep the pattern true - that is all a sharp is: a keeper of the pattern. Sing do-re-mi-fa-so-la-ti-do and you have sung the same ladder with singable names. The pattern is the scale; the letters are just one address it can live at.'
    },
    {
      title: 'Intervals: the distance you already hear',
      content: 'The distance between two notes is called an interval, and here is the secret: you already know them. The first two different notes of "Twinkle Twinkle Little Star" are a perfect fifth. The first two notes of "Frere Jacques" are a major second. "Oh When the Saints" starts with a major third, "Here Comes the Bride" with a perfect fourth, and "Somewhere Over the Rainbow" leaps an octave on some-where. Your ear collected these distances from a lifetime of songs; this lesson is only handing you the names. That turns a feeling into a tool: hear a melody once, recognize its distances, and you can sing it back, play it in any key, or write it down. Use the Ear Trainer above - guess, get corrected, sing the two notes - and within a week the names will stick to sounds you already owned.'
    }
  ],
  principles: [
    'A note is a name for one steady sound - nothing more.',
    'The major scale is a step pattern (W-W-H-W-W-W-H), not a list of letters.',
    'An interval is a distance, and your ear already knows the distances from songs.',
    'Naming what you can already hear turns feeling into a tool you can use.'
  ],
  mistakes: [
    { title: 'Memorizing letters instead of the pattern', explanation: 'Letters are one address; the step pattern works from any note. Build, do not memorize.' },
    { title: 'Hearing two notes instead of one distance', explanation: 'An interval is a single span. Sing the two notes as one jump, like the song does.' },
    { title: 'Skipping the singing', explanation: 'Your voice wires the ear. If you only click buttons, the interval stays a guess.' },
    { title: 'Guessing fast to finish', explanation: 'A wrong guess you never hear again teaches nothing. Play it again and listen.' }
  ],
  practice: [
    'Hum low, slide high, then stop on any steady sound and name it: that is a note.',
    'Build a major scale from C on a piano or paper using only the step pattern; check it against the white keys.',
    'Build the same pattern from G and discover which key must change - meet your first sharp.',
    'Sing the five interval songs: Twinkle (5th), Frere Jacques (2nd), Saints (3rd), Bride (4th), Rainbow (octave).',
    'Do six rounds of the Ear Trainer, singing each interval back after you hear it.'
  ],
  reflection: 'When you heard two notes today, did you hear a distance you recognized from a song, or two separate sounds?',
  safety: 'Keep playback volume comfortable and sing gently - matching pitch softly trains the ear without straining the voice.',
  quiz: [
    { question: 'A major scale is best described as:', options: ['A fixed list of letter names', 'A step pattern that works from any starting note', 'Only the white piano keys', 'A random set of nice notes'], answer: 1, explanation: 'Whole-whole-half-whole-whole-whole-half from any note builds that note is major scale; letters are just one address for it.' },
    { question: 'The first two different notes of "Twinkle Twinkle Little Star" are which interval?', options: ['Major 2nd', 'Major 3rd', 'Perfect 4th', 'Perfect 5th'], answer: 3, explanation: 'That opening jump is a perfect fifth - the distance your ear already knows from the song.' }
  ],
  mastery: [
    'Explain a note as a named steady sound in one sentence.',
    'Build a major scale from any note using the step pattern.',
    'Match the five core intervals to their songs instantly.',
    'Name a played interval on first hearing in the Ear Trainer.'
  ],
  liveApplication: {
    scenarios: [
      { setup: 'You hear a melody once and want to sing it back.', action: 'You catch its distances - a fifth here, a third there - and rebuild it from any starting note.', why: 'Intervals are relative; knowing the spans lets you rebuild the melody anywhere.' },
      { setup: 'A song is too high for your voice.', action: 'You move the starting note and keep the same step pattern and distances.', why: 'The ladder shape stays identical; only the bottom rung moves. That is transposing.' }
    ],
    perspectives: [
      { role: 'Using it', detail: 'Interval hearing lets you learn songs by ear instead of by sheet music.' },
      { role: 'Facing it', detail: 'A player who hears distances can join any song mid-way and find the notes.' }
    ],
    adaptation: {
      cues: ['Guessing instead of hearing', 'Letters over pattern', 'Silent practice'],
      adjustments: [
        { if: 'You guess intervals', then: 'Play it again and sing the jump before answering.' },
        { if: 'You memorize letters', then: 'Rebuild the scale from a new note using only the step pattern.' }
      ],
      learning: 'After each session, note which interval song finally stuck and which one still tricks you.'
    }
  },
  practiceEngine: { type: 'rep-counter', label: 'Ear Trainer Rounds', targetReps: 6 }
}
fs.writeFileSync('./frontend/src/data/lessons.js', 'export const lessons = ' + JSON.stringify(lessons, null, 2) + '\n')
console.log('NOTE_MAP_REWRITTEN | total lessons:', Object.keys(lessons).length)
