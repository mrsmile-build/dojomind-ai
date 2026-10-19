import fs from 'fs'

// --- Lesson.jsx: add import + switch branch ---
let lesson = fs.readFileSync('./frontend/src/Lesson.jsx','utf8')
const IMP_ANCHOR = "import TargetOverlay from './components/TargetOverlay'"
const IMP_NEW = "import MetronomeVisual from './components/MetronomeVisual'"
if (!lesson.includes(IMP_NEW)) {
  if (!lesson.includes(IMP_ANCHOR)) throw new Error('ANCHOR MISSING: TargetOverlay import')
  lesson = lesson.split(IMP_ANCHOR).join(IMP_ANCHOR + '\n' + IMP_NEW)
  console.log('import added')
} else console.log('import already present')

const SW_ANCHOR = "if (visual.type === 'target-overlay') {\n                                         return <TargetOverlay key={index} visual={visual} />"
const SW_NEW = "if (visual.type === 'target-overlay') {\n                                         return <TargetOverlay key={index} visual={visual} />\n                                       }\n                                       if (visual.type === 'metronome') {\n                                         return <MetronomeVisual key={index} visual={visual} />"
if (!lesson.includes("visual.type === 'metronome'")) {
  if (!lesson.includes(SW_ANCHOR)) throw new Error('ANCHOR MISSING: target-overlay switch block')
  lesson = lesson.split(SW_ANCHOR).join(SW_NEW)
  console.log('switch branch added')
} else console.log('switch branch already present')
fs.writeFileSync('./frontend/src/Lesson.jsx', lesson)

// --- Lesson data: Feynman-clear rewrite of music-foundations-rhythm ---
const lessons = (await import('./frontend/src/data/lessons.js')).lessons
lessons['music-foundations-rhythm'] = {
  id: 'music-foundations-rhythm',
  subject: 'Music',
  title: 'Rhythm & Tempo — The Pulse',
  level: 'Beginner',
  duration: '12 min',
  description: 'Every song has a heartbeat. Put your hand on your chest — that bump-bump? That is a pulse. This lesson teaches you to feel that heartbeat inside music, count how fast it goes, and find the strong beat that tells you where you are.',
  objectives: [
    'Tap along to a song without speeding up or slowing down',
    'Feel the difference between a slow heartbeat (60 per minute, like a clock) and a fast one (120 per minute, twice as busy)',
    'Find the strong ONE that starts every group of beats',
    'Cut one beat into two smaller beats (say "one-and-two-and" and tap on each word)',
    'Spot the four ways people lose the beat'
  ],
  visuals: [
    {
      type: 'diagram',
      title: 'The heartbeat under the music',
      caption: 'Every song sits on top of a steady heartbeat of beats. How fast they fall has a number. The strong first beat in each group is home. And any beat can be cut into smaller even beats. The rhythm is the pattern riding on top.',
      labels: [
        'Pulse: the steady heartbeat under the notes',
        'Tempo: how many beats fall in one minute (a number, not a feeling)',
        'Downbeat: the strong ONE at the start of each group',
        'Subdivision: cutting one beat into two or four even pieces',
        'Rhythm: the long-and-short pattern riding on top of the beats'
      ]
    },
    {
      type: 'metronome',
      title: 'Your steady heartbeat',
      caption: 'This is your metronome. It clicks a steady beat for you. Move the slider to change how fast. Start at 60 — one click per second, like a clock ticking. Then use the TAP button: tap your finger on it in time with the clicks. The bar below tells you how close you are. Try to stay above 75%.',
      initialBpm: 60,
      tapMode: true
    }
  ],
  sections: [
    {
      title: 'The heartbeat first',
      content: 'Put your hand on your chest and feel it bump. That bump is your heart\'s pulse — a steady beat that keeps going whether you think about it or not. Music has a pulse too. Every song, every tune, has a steady beat under the notes, like a heartbeat under everything else. Clap along to any song on the radio and that steady clap you land on is the pulse. It was there before you noticed it. The first job in music is not a note or a chord. It is keeping that steady clap going while the singer sings and the guitar plays. If your clap speeds up or slows down, everything you build on top of it gets wobbly. So we start here, with nothing but a steady clap. Can you clap steady for one whole minute? That is the whole first skill.'
    },
    {
      title: 'Tempo is a number, not a mood',
      content: 'How fast is the heartbeat? We give it a number so we do not argue about "too fast" or "too slow." The number is how many beats fit in one minute. Sixty beats in one minute means exactly one beat per second. Put your hand on your heart when you are resting and that is about how fast it beats. That is 60 BPM. A clock ticks 60 times a minute, so a clock is a free 60 BPM metronome. Double the number — 120 beats in a minute — and you have the speed of most pop songs. The number removes the fight. "Too fast for me" becomes "160 is too fast for me today, I will work at 80." Slow is not worse. Slow is just the speed where you can get it right. Every fast thing anyone has ever played was first played slow.'
    },
    {
      title: 'The ONE is home',
      content: 'Beats group together in little packs. The most common pack has four beats: 1-2-3-4, 1-2-3-4, 1-2-3-4. The first beat of each pack is a little heavier than the others. We call it the downbeat, or just "the one." It is like how when you walk, you know which foot is the first step without thinking about it. The ONE is the doorway into the next pack of beats. If you get lost in a song, stop chasing the notes and listen for the strong ONE that starts the next pack. Find the ONE and you know where you are again. Lose the ONE and you are playing, but you are lost.'
    }
  ],
  principles: [
    'Lock the heartbeat before any notes. Notes ride on the pulse, not the other way around.',
    'Tempo is a number: 60 means one beat per second, like a clock. Name the number and the argument ends.',
    'The ONE is home. Every pack of beats starts on the strong one.',
    'Cutting a beat into two smaller beats (1-and-2-and) keeps slow beats honest.'
  ],
  mistakes: [
    {
      title: 'Rushing ahead of the beat',
      explanation: 'Excitement speeds you up. Tap along to something outside you — a clock, a recording, a metronome — until your tap matches it.'
    },
    {
      title: 'Dragging behind the beat',
      explanation: 'Being tired or unsure makes you slow down. Count out loud: 1-2-3-4, 1-2-3-4. Your voice holds your hands honest.'
    },
    {
      title: 'Counting only in your head',
      explanation: 'Silent counting hides when you drift. Say the numbers out loud and tap them. Make the beat a sound and a feeling, not just a thought.'
    },
    {
      title: 'Ignoring the ONE',
      explanation: 'Without the ONE you do not know which pack of beats you are in. Feel the heavy first beat every pack until it is obvious.'
    }
  ],
  practice: [
    'Tap along to a clock\'s tick for one minute. That is 60 BPM, your free metronome.',
    'Tap 60 BPM with your hand while saying 1-2-3-4 out loud. Do five packs of four.',
    'Tap only the strong ONE of each pack while your foot taps every beat. Do five packs.',
    'Cut each beat into two small taps — say "one-and-two-and" and tap on each word. Do five packs.',
    'Put on any song: find its heartbeat, find its ONE, then tap both together for one minute.'
  ],
  reflection: 'Last time you listened to a song, could you find the heartbeat and the ONE within two packs, or did you have to hunt for them?',
  safety: 'Keep playback volume comfortable so you can still hear your own taps. Shake out any hand or shoulder tension that builds while tapping.',
  quiz: [
    {
      question: 'The pulse in music is best described as:',
      options: [
        'The loudest note',
        'The steady heartbeat under the notes',
        'The fastest part of the song',
        'The singer'
      ],
      answer: 1,
      explanation: 'Everything else rides on the steady pulse. It is the tap you clap along to, and the first thing to lock.'
    },
    {
      question: '60 BPM means:',
      options: [
        'One beat per second',
        '60 beats per second',
        'Six beats per minute',
        'Half a beat per second'
      ],
      answer: 0,
      explanation: '60 beats per minute is exactly one per second. A clock is a free 60 BPM metronome.'
    }
  ],
  mastery: [
    'Hold a steady beat for one whole minute without drifting.',
    'Feel the difference between a 60 BPM heartbeat (slow, like a clock) and a 120 BPM one (fast, like a pop song).',
    'Find the ONE in a new song within two packs of beats.',
    'Cut a slow beat into two small beats evenly, on the words one-and-two-and.'
  ],
  liveApplication: {
    scenarios: [
      {
        setup: 'You are playing with others and everyone drifts apart.',
        action: 'Everyone locks to one shared heartbeat — tap it, hear it, follow it — instead of each going their own speed.',
        why: 'A group stays together on one heartbeat, not on each person\'s confidence.'
      },
      {
        setup: 'You get lost mid-song and cannot find your place.',
        action: 'Stop chasing notes. Listen for the strong ONE of the next pack. Come back in there.',
        why: 'The ONE is the doorway back. Chasing melodies while lost only digs deeper.'
      }
    ],
    perspectives: [
      {
        role: 'Using it',
        detail: 'A player with solid time is the one others follow. Recordings sit well on their beat.'
      },
      {
        role: 'Facing it',
        detail: 'A steady-time player is easy to play with. Their pulse gives the whole group a floor.'
      }
    ],
    adaptation: {
      cues: [
        'Tap drifting fast',
        'Tap drifting slow',
        'Losing the ONE'
      ],
      adjustments: [
        {
          if: 'You rush',
          then: 'Tap along to an external clock or recording until your pulse matches it.'
        },
        {
          if: 'You lose the ONE',
          then: 'Count out loud 1-2-3-4 and feel the heaviness of 1 each pack.'
        }
      ],
      learning: 'After each session, note whether your tap stayed with the reference and how fast you found the ONE in a new song.'
    }
  },
  practiceEngine: {
    type: 'metronome',
    label: 'Steady Pulse with Metronome',
    initialBpm: 60
  }
}
fs.writeFileSync('./frontend/src/data/lessons.js', 'export const lessons = ' + JSON.stringify(lessons, null, 2) + '\n')
console.log('FEYNMAN_REWRITE_DONE | total lessons:', Object.keys(lessons).length)
