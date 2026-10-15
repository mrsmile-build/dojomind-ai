export const domains = {
  programming: {
    name: 'Programming', icon: '💻', tagline: 'Write instructions a machine can follow.', subLabel: 'LANGUAGE / FIELD',
    subs: [
      { id: 'foundations', icon: '🧠', name: 'Foundations', description: 'How computers think: instructions, variables and logic.', level: 'Beginner', topics: ['Programs', 'Variables', 'Loops'] },
      { id: 'python', icon: '🐍', name: 'Python', description: 'A friendly first language for real projects.', level: 'Beginner', topics: ['Syntax', 'Functions', 'Projects'] },
      { id: 'javascript', icon: '🌐', name: 'JavaScript', description: 'The language of the web, front and back.', level: 'Beginner', topics: ['DOM', 'Events', 'Async'] },
      { id: 'web', icon: '🕸️', name: 'Web Development', description: 'HTML, CSS and how pages are built.', level: 'Beginner', topics: ['HTML', 'CSS', 'Layout'] },
    ],
  },
  medicine: {
    name: 'Medicine', icon: '🩺', tagline: 'Understand the body; know the ceiling.', subLabel: 'MODALITY',
    subs: [
      { id: 'foundations', icon: '🧬', name: 'Foundations', description: 'How the body is organized and how to read a symptom honestly.', level: 'Beginner', topics: ['Systems', 'Symptoms', 'Referral'] },
      { id: 'first-aid', icon: '🚑', name: 'First Aid', description: 'What to do in the first minutes, and when to call for help.', level: 'Beginner', topics: ['DRABC', 'Bleeding', 'CPR awareness'] },
      { id: 'herbalism', icon: '🌿', name: 'Plant Medicine', description: 'Leaves, roots, bark: traditional uses and modern caution.', level: 'Beginner', topics: ['Identification', 'Preparation', 'Safety'] },
      { id: 'anatomy', icon: '🦴', name: 'Anatomy & Physiology', description: 'The machines inside: bones, muscles, organs, systems.', level: 'Beginner', topics: ['Skeleton', 'Muscles', 'Organs'] },
    ],
  },
  business: {
    name: 'Business', icon: '💼', tagline: 'Create value and make it reach people.', subLabel: 'FUNCTION',
    subs: [
      { id: 'foundations', icon: '🧭', name: 'Foundations', description: 'Value, customers and unit economics in plain numbers.', level: 'Beginner', topics: ['Value', 'Customers', 'Margins'] },
      { id: 'marketing', icon: '📣', name: 'Marketing', description: 'Being found and being chosen.', level: 'Beginner', topics: ['Positioning', 'Channels', 'Offers'] },
      { id: 'finance', icon: '📊', name: 'Finance', description: 'Reading the numbers that tell the truth.', level: 'Beginner', topics: ['Cash flow', 'P&L', 'Ratios'] },
      { id: 'operations', icon: '⚙️', name: 'Operations', description: 'Making the thing happen reliably.', level: 'Beginner', topics: ['Process', 'Bottlenecks', 'Quality'] },
    ],
  },
  skills: {
    name: 'Skills', icon: '🎯', tagline: 'The meta-skills that make every other skill stick.', subLabel: 'SKILL',
    subs: [
      { id: 'focus', icon: '🧘', name: 'Focus & Attention', description: 'Train the attention muscle everything else depends on.', level: 'Beginner', topics: ['Deep work', 'Distraction', 'Rest'] },
      { id: 'memory', icon: '🧠', name: 'Memory & Recall', description: 'Encode, space, retrieve: memory that lasts.', level: 'Beginner', topics: ['Encoding', 'Spacing', 'Testing'] },
      { id: 'habits', icon: '🔁', name: 'Habits', description: 'Design behavior so the good thing happens by default.', level: 'Beginner', topics: ['Cue', 'Routine', 'Reward'] },
      { id: 'learning', icon: '📚', name: 'Learning How to Learn', description: 'The method behind every method in this app.', level: 'Beginner', topics: ['Interleaving', 'Feedback', 'Transfer'] },
    ],
  },
}
