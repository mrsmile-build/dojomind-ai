import fs from 'fs'
import curriculum from './frontend/src/data/curriculum/index.js'
import { lessons } from './frontend/src/data/lessons.js'
const lj = fs.readFileSync('./frontend/src/Lesson.jsx','utf8')
const et = fs.readFileSync('./frontend/src/components/EarTrainerVisual.jsx','utf8')
const pl = fs.readFileSync('./frontend/src/components/PracticeLoopVisual.jsx','utf8')
const gr = fs.readFileSync('./frontend/src/components/GrooveRecorder.jsx','utf8')
let fail = 0
const chk = (c,l)=>{ console.log(c?'OK  ':'BAD ',l); if(!c) fail++ }
chk(et.includes('function EarTrainerVisual({ visual })') && et.includes('export default EarTrainerVisual'), 'EarTrainer component shape')
chk(pl.includes('function PracticeLoopVisual({ visual })') && pl.includes('export default PracticeLoopVisual'), 'PracticeLoop component shape')
chk(gr.includes('function GrooveRecorder({ visual })') && gr.includes('export default GrooveRecorder'), 'GrooveRecorder component shape')
chk(lj.includes("visual.type === 'ear-trainer'") && lj.includes('<EarTrainerVisual'), 'ear-trainer wired')
chk(lj.includes("visual.type === 'practice-loop'") && lj.includes('<PracticeLoopVisual'), 'practice-loop wired')
chk(lj.includes("visual.type === 'groove-recorder'") && lj.includes('<GrooveRecorder'), 'groove-recorder wired')
const nm = lessons['music-foundations-note-map']
const pl2 = lessons['music-foundations-practice-loop']
chk(nm.visuals.some(v=>v.type==='ear-trainer'), 'note-map has ear trainer')
chk(pl2.visuals.some(v=>v.type==='practice-loop'), 'practice-loop has loop timer')
chk(nm.sections[2].content.includes('Twinkle'), 'Feynman: intervals anchored to songs')
chk(nm.sections[1].content.includes('whole, whole, half'), 'Feynman: scale as step pattern')
chk(pl2.sections[0].content.includes('hoop'), 'Feynman: practice grounded in throwing')
chk(pl2.sections[1].content.includes('save button'), 'Feynman: rest as save button')
const beg = curriculum.music.theory.levels.beginner.modules[0].lessons
chk(beg.every(c => lessons[c.id] && lessons[c.id].title === c.title), 'titles match curriculum exactly')
chk(beg.every(c => (lessons[c.id].visuals||[]).some(v => ['metronome','ear-trainer','practice-loop'].includes(v.type))), 'all 3 foundations lessons wedged')
console.log('Total lessons:', Object.keys(lessons).length)
console.log(fail===0?'FOUNDATIONS_VERIFY_PASS':('FOUNDATIONS_VERIFY_FAIL '+fail))
process.exit(fail===0?0:1)
