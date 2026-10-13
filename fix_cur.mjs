import fs from 'fs'
const txt = fs.readFileSync('./frontend/src/data/curriculum/index.js', 'utf8')
if (/export\s+(const|\{)/.test(txt)) { console.error('ABORT: named exports present'); process.exit(1) }
const mod = await import('./frontend/src/data/curriculum/index.js')
const curriculum = mod.default
console.log('loaded, martialArts keys before:', Object.keys(curriculum.martialArts || {}))
if (!curriculum.martialArts) curriculum.martialArts = {}
if (curriculum.martialArts.boxing) {
  console.log('boxing already present, skipping')
} else {
  curriculum.martialArts.boxing = {
    name: 'Boxing', icon: '🥊',
    description: 'Learn striking fundamentals, footwork, defense and movement.',
    levels: {
      beginner: {
        name: 'Beginner',
        description: 'Build the boxing base: stance, guard, footwork and the jab.',
        modules: [
          { id: 'foundations', title: 'Boxing Foundations', lessons: [
            { id: 'boxing-foundations-stance', title: 'Stance and Guard' },
            { id: 'boxing-foundations-footwork', title: 'Step-Slide Footwork' },
            { id: 'boxing-foundations-jab', title: 'The Jab' },
          ] },
        ],
      },
    },
  }
  console.log('boxing registered')
}
console.log('martialArts keys after:', Object.keys(curriculum.martialArts))
fs.writeFileSync('./frontend/src/data/curriculum/index.js', 'export default ' + JSON.stringify(curriculum, null, 2) + '\n')
console.log('curriculum written')
