import fs from 'fs'
import curriculum from './frontend/src/data/curriculum/index.js'
import { lessons } from './frontend/src/data/lessons.js'
const lj = fs.readFileSync('./frontend/src/Lesson.jsx','utf8')
const hl = fs.readFileSync('./frontend/src/components/HabitLoopEngine.jsx','utf8')
let fail = 0
const chk = (c,l)=>{ console.log(c?'OK  ':'BAD ',l); if(!c) fail++ }
chk(hl.includes('function HabitLoopEngine({ visual })') && hl.includes('export default HabitLoopEngine'), 'HabitLoopEngine component shape')
chk(hl.includes('saveLoop') && hl.includes('deleteLoop'), 'HabitLoopEngine has save/delete')
chk(lj.includes("visual.type === 'habit-loop'") && lj.includes('<HabitLoopEngine'), 'habit-loop wired')
const hl2 = lessons['skills-habits-loop']
chk(hl2.visuals.some(v=>v.type==='habit-loop'), 'habits has habit-loop visual')
chk(hl2.sections[0].content.includes('vending machine'), 'Feynman: vending machine metaphor')
chk(hl2.sections[1].content.includes('gear people miss'), 'Feynman: craving as gear')
chk(hl2.sections[2].content.includes('Map your machine'), 'Feynman: mapping language')
const beg = curriculum.skills.habits.levels.beginner.modules[0].lessons
chk(beg.every(c => lessons[c.id] && lessons[c.id].title === c.title), 'titles match curriculum exactly')
console.log('Total lessons:', Object.keys(lessons).length)
console.log(fail===0?'HABITS_VERIFY_PASS':('HABITS_VERIFY_FAIL '+fail))
process.exit(fail===0?0:1)
