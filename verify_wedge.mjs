import fs from 'fs'
import { lessons } from './frontend/src/data/lessons.js'

// Read JSX files as text (Node can't parse JSX natively)
const lessonJsx = fs.readFileSync('./frontend/src/Lesson.jsx', 'utf8')
const metVisualJsx = fs.readFileSync('./frontend/src/components/MetronomeVisual.jsx', 'utf8')

let fail = 0
const chk = (c, l) => { console.log(c ? 'OK  ' : 'BAD ', l); if (!c) fail++ }

// === MetronomeVisual component checks (text-based) ===
chk(metVisualJsx.includes('function MetronomeVisual({ visual })'), 'MetronomeVisual function declaration present')
chk(metVisualJsx.includes('export default MetronomeVisual'), 'MetronomeVisual default export present')
chk(metVisualJsx.includes('AudioContext') || metVisualJsx.includes('webkitAudioContext'), 'MetronomeVisual uses Web Audio API')
chk(metVisualJsx.includes('playClick'), 'MetronomeVisual has playClick function')
chk(metVisualJsx.includes('handleTap'), 'MetronomeVisual has handleTap for tap-tempo')
chk(metVisualJsx.includes('accuracy'), 'MetronomeVisual computes accuracy')

// === Lesson.jsx checks (text-based) ===
chk(lessonJsx.includes("import MetronomeVisual from './components/MetronomeVisual'"), 'Lesson.jsx imports MetronomeVisual')
chk(lessonJsx.includes("visual.type === 'metronome'"), 'Lesson.jsx has metronome switch branch')
chk(lessonJsx.includes('<MetronomeVisual'), 'Lesson.jsx renders MetronomeVisual component')

// === Lesson data checks (import-based) ===
const l = lessons['music-foundations-rhythm']
chk(!!l, 'rhythm lesson exists')
chk(l.visuals.length === 2, 'rhythm has 2 visuals (diagram + metronome)')
chk(l.visuals[1].type === 'metronome', 'second visual is metronome')
chk(l.visuals[1].tapMode === true, 'metronome tapMode on')
chk(l.description.includes('heartbeat'), 'Feynman: description uses heartbeat')
chk(l.sections[0].content.includes('Put your hand on your chest'), 'Feynman: section 1 grounded in body')
chk(l.sections[1].content.includes('A clock is a free 60 BPM metronome'), 'Feynman: section 2 anchors to clock')
chk(l.sections[2].content.includes('little packs'), 'Feynman: section 3 uses plain metaphor')
chk(l.practiceEngine.type === 'metronome', 'practiceEngine type = metronome')
chk(l.mastery[0].includes('one whole minute'), 'Feynman: mastery in plain words')

console.log(fail === 0 ? 'WEDGE_VERIFY_PASS' : ('WEDGE_VERIFY_FAIL ' + fail))
process.exit(fail === 0 ? 0 : 1)
