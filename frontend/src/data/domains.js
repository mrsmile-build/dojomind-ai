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
  roles: {
    name: 'Company Roles', icon: '🏢', tagline: 'What each position does, and what the same job is called elsewhere.', subLabel: 'ROLE',
    subs: [
      { id: 'manager', icon: '🧑💼', name: 'Manager', description: 'Leading people and delivery without doing everything yourself.', level: 'Beginner', topics: ['Accountability', 'Delegation', 'Reviews'] },
      { id: 'hr', icon: '🤝', name: 'Human Resources', description: 'Hiring, people policy, and the line between admin and judgment.', level: 'Beginner', topics: ['Recruiting', 'Policy', 'Relations'] },
      { id: 'hod', icon: '📋', name: 'Head of Department', description: 'Owning the department: output, standards and staffing.', level: 'Beginner', topics: ['Standards', 'Budget', 'People'] },
      { id: 'operator', icon: '⚙️', name: 'Operator', description: 'Running the machines or processes that keep output flowing.', level: 'Beginner', topics: ['Setup', 'Monitoring', 'Shutdown'] },
      { id: 'accountant', icon: '🧾', name: 'Accountant', description: 'Turning transactions into numbers a business can trust.', level: 'Beginner', topics: ['Books', 'Statements', 'Judgment'] },
      { id: 'sales', icon: '📈', name: 'Salesperson', description: 'Moving a prospect from interest to a signed yes.', level: 'Beginner', topics: ['Pipeline', 'Offers', 'Closing'] },
      { id: 'stock', icon: '📦', name: 'Stock Keeper', description: 'Keeping the right goods in the right place at the right time.', level: 'Beginner', topics: ['Receiving', 'Counting', 'Reordering'] },
      { id: 'support', icon: '🎧', name: 'Customer Support', description: 'Turning a frustrated customer into a retained one.', level: 'Beginner', topics: ['Triage', 'Resolution', 'Escalation'] },
      { id: 'procurement', icon: '🛒', name: 'Procurement', description: 'Buying well: vendors, terms and the audit trail.', level: 'Beginner', topics: ['Sourcing', 'Negotiation', 'Controls'] },
      { id: 'project', icon: '🗂️', name: 'Project / Product', description: 'Holding scope, time and quality together under change.', level: 'Beginner', topics: ['Scope', 'Schedule', 'Risk'] },
      { id: 'founder', icon: '🚀', name: 'Founder / CEO', description: 'Setting direction, raising the money and owning the outcome.', level: 'Beginner', topics: ['Vision', 'Capital', 'Decisions'] },
      { id: 'compliance', icon: '🛡️', name: 'Compliance & Risk', description: 'Keeping the company inside the rules before the rules bite.', level: 'Beginner', topics: ['Policy', 'Audits', 'Reporting'] },
    ],
  },
  law: {
    name: 'Law & Rights', icon: '⚖️', tagline: 'Legal structures and your rights, as awareness, never as advice.', subLabel: 'AREA OF LAW',
    subs: [
      { id: 'contract', icon: '📜', name: 'Contracts & Obligations', description: 'What a promise becomes when the law backs it, and what breach costs.', level: 'Beginner', topics: ['Formation', 'Breach', 'Remedies'] },
      { id: 'employment', icon: '🧑‍', name: 'Employment & Labour', description: 'The rights and duties between a worker and a workplace.', level: 'Beginner', topics: ['Contract', 'Termination', 'Protection'] },
      { id: 'entity', icon: '🏢', name: 'Business Entity', description: 'How a business becomes a thing that can own, owe and be sued.', level: 'Beginner', topics: ['Structure', 'Liability', 'Filing'] },
      { id: 'privacy', icon: '🔒', name: 'Privacy & Data', description: 'What personal data is, and the rules that govern its use.', level: 'Beginner', topics: ['Consent', 'Collection', 'Rights'] },
      { id: 'payments', icon: '💳', name: 'Payments & Consumer', description: 'The rules around moving money and protecting the payer.', level: 'Beginner', topics: ['Authorization', 'Disputes', 'Consumer'] },
      { id: 'investment', icon: '📊', name: 'Investment & Securities', description: 'What a security is and why disclosure exists before money moves.', level: 'Beginner', topics: ['Offering', 'Disclosure', 'Risk'] },
      { id: 'fraud', icon: '🕵️', name: 'Fraud Awareness', description: 'The elements that turn a lie for gain into a crime.', level: 'Beginner', topics: ['Deception', 'Intent', 'Loss'] },
      { id: 'tort', icon: '⚖️', name: 'Tort & Injury', description: 'When harm between people becomes a civil claim, not only a crime.', level: 'Beginner', topics: ['Duty', 'Breach', 'Damage'] },
      { id: 'consent', icon: '🛡️', name: 'Consent & Defence', description: 'Consent, abuse and defence: the lines the law draws and protects.', level: 'Beginner', topics: ['Consent', 'Defence', 'Process'] },
    ],
  }
}
