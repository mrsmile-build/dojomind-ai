const fs = require('fs');
const p = 'frontend/src/data/lessons.js';
let c = fs.readFileSync(p, 'utf8');
c = c.trimEnd();
if (c.endsWith('}')) c = c.slice(0, -1);

const lessons = `  'karate-self-defense-principles': {
    id: 'karate-self-defense-principles',
    subject: 'Karate',
    title: 'Self-Defense Principles',
    level: 'Advanced',
    duration: '15 min',

    description:
      'Learn the foundation of real self-defense: awareness, de-escalation, escape, and using technique only as the last resort when violence is unavoidable.',

    objectives: [
      'Understand that self-defense begins long before physical contact',
      'Recognize the priority: avoid, de-escalate, escape, then technique',
      'Apply awareness to recognize threats before they materialize',
      'Understand reasonable force and legal context',
      'Recognize the four most common self-defense errors',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'The self-defense pyramid',
        caption:
          'Self-defense is built on a foundation of awareness, not technique. The higher you are in the pyramid, the better your outcome.',
        labels: [
          'Awareness prevents most threats',
          'De-escalation defuses many',
          'Escape resolves most',
          'Technique is the last resort',
        ],
      },
    ],

    sections: [
      {
        title: 'Awareness is the first line',
        content:
          'The best self-defense happens before any confrontation: noticing a situation developing, recognizing body language and environment, and avoiding the area or person entirely. Awareness is not paranoia; it is calm, continuous observation of your surroundings. Most threats can be avoided by someone who is aware, because the aware person never enters the dangerous situation in the first place.',
      },
      {
        title: 'De-escalation and escape',
        content:
          'If avoidance fails and a confrontation begins, the next tools are verbal de-escalation and creating opportunity to escape. Calm tone, open hands, stepping back, and agreeing with provocations can defuse many situations. The goal is not to win the argument but to create the space and time to leave. Every self-defense curriculum teaches that the fight you win is the one you never have.',
      },
      {
        title: 'Technique as the last resort',
        content:
          'Physical technique is reserved for when avoidance, de-escalation, and escape have all failed and violence is unavoidable. At that point, technique must be decisive, efficient, and aimed at creating the opportunity to escape, not at winning a fight or punishing the attacker. Reasonable force means using only what is necessary to end the threat and escape; excess force creates legal and ethical problems.',
      },
    ],

    principles: [
      'Awareness prevents more threats than technique ever will.',
      'De-escalation and escape are always preferable to fighting.',
      'Technique is the last resort, used only when violence is unavoidable.',
      'Reasonable force means using only what is necessary to escape.',
    ],

    mistakes: [
      { title: 'Relying on technique instead of awareness', explanation: 'Technique cannot save you from a threat you never saw coming. Train awareness first, always.' },
      { title: 'Fighting to win instead of fighting to escape', explanation: 'The goal of self-defense is escape, not victory. Once you have created the opening to leave, take it.' },
      { title: 'Excessive force', explanation: 'Using more force than necessary to escape creates legal liability and ethical problems. Use only what the situation requires.' },
      { title: 'Ignoring de-escalation', explanation: 'Many confrontations can be defused verbally. Skipping de-escalation to jump to fighting escalates situations unnecessarily.' },
    ],

    practice: [
      'Walk through a public space and note three exits and three potential threats without looking suspicious.',
      'Practice verbal de-escalation phrases in a mirror until they sound natural.',
      'With a partner, role-play a confrontation where your goal is to de-escalate and create an exit.',
      'Practice creating distance and escaping from a grab or hold.',
      'Review the principles after each training session and note where you applied them.',
    ],

    reflection:
      'In your daily life, how aware are you of your surroundings? When was the last time you noticed a potential threat and avoided it without physical confrontation?',

    safety:
      'Self-defense training must be supervised by qualified instructors. Never use excessive force. Local laws regarding self-defense vary; understand your legal context. The goal is always escape, not injury to the attacker.',

    quiz: [
      {
        question: 'What is the first and most effective line of self-defense?',
        options: [
          'Physical technique',
          'Verbal de-escalation',
          'Awareness and avoidance',
          'Calling for help',
        ],
        answer: 2,
        explanation:
          'Awareness and avoidance prevent most threats before they materialize. You cannot be attacked if you never enter the dangerous situation.',
      },
      {
        question: 'What is the goal of physical self-defense technique?',
        options: [
          'To defeat the attacker completely',
          'To create the opportunity to escape',
          'To punish the attacker',
          'To win the confrontation',
        ],
        answer: 1,
        explanation:
          'Physical technique is used only to create the opening to escape. Once you can leave, you leave. The goal is not victory but safety.',
      },
    ],

    mastery: [
      'Explain the self-defense pyramid and why awareness comes first.',
      'Demonstrate verbal de-escalation in a role-play scenario.',
      'Create distance and escape from a grab or hold.',
      'Identify and correct the four common self-defense errors.',
    ],

    liveApplication: {
      scenarios: [
        {
          setup: 'You notice a group of aggressive people ahead on the sidewalk.',
          action: 'You cross the street or change your route to avoid them entirely, never entering their area.',
          why: 'Awareness and avoidance prevent the confrontation from ever happening. You cannot be attacked if you are not there.',
        },
        {
          setup: 'Someone confronts you verbally and escalates.',
          action: 'You use calm tone, open hands, and agree with their provocations while stepping back and looking for an exit.',
          why: 'De-escalation and creating distance defuse many situations without violence, preserving everyone safety.',
        },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Self-defense begins with awareness and ends with escape; technique is only the bridge between them when escape is blocked.' },
        { role: 'Facing it', detail: 'An aware, calm person who de-escalates is hard to escalate against; their calm often defuses the aggressor anger.' },
      ],
      adaptation: {
        cues: [
          'Aggressive body language and tone',
          'Multiple people positioning around you',
          'Your own fear or anger rising',
        ],
        adjustments: [
          { if: 'You can avoid the situation', then: 'Leave immediately; do not engage.' },
          { if: 'You are already confronted', then: 'De-escalate verbally while creating distance and looking for escape routes.' },
        ],
        learning: 'After each day, note one situation you avoided through awareness and one you de-escalated or escaped from.',
      },
    },

    practiceEngine: {
      type: 'timed-hold',
      label: 'Awareness Scan',
      initialTime: 60,
    },
  },
  'karate-self-defense-against-knife': {
    id: 'karate-self-defense-against-knife',
    subject: 'Karate',
    title: 'Against a Knife',
    level: 'Advanced',
    duration: '15 min',

    description:
      'Learn the harsh reality of knife defense: escape is almost always the only winning option, and technique exists only to create the moment to run.',

    objectives: [
      'Understand why knife defense is almost always about escape',
      'Recognize the reality: you will likely be cut if attacked with a knife',
      'Learn to control the weapon arm and create distance',
      'Understand the priority: escape immediately',
      'Recognize the four most common knife-defense errors',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Knife defense reality',
        caption:
          'Against a knife, escape is the only winning option. Technique exists only to create the moment to run.',
        labels: [
          'You will likely be cut',
          'Control the weapon arm',
          'Create distance immediately',
          'Escape is the only victory',
        ],
      },
    ],

    sections: [
      {
        title: 'The reality of knife attacks',
        content:
          'Knife attacks are fast, chaotic, and almost always result in the defender being cut, even if they escape. Movies and myths create false confidence; reality is that knife defense is about damage limitation and escape, not disarming the attacker. The only winning move against a knife is not to be there, which is why awareness and avoidance are paramount.',
      },
      {
        title: 'Control the weapon arm',
        content:
          'If escape is not immediately possible and you must engage, the priority is controlling the weapon arm to prevent it from stabbing or cutting you repeatedly. This means grabbing the wrist or forearm and directing the blade away from your vital areas while you create distance. This is not a permanent solution; it is a bridge to escape.',
      },
      {
        title: 'Escape immediately',
        content:
          'The moment you have created any opening, you escape. You do not stay to fight, disarm, or punish the attacker. You run. Every second you remain engaged increases the chance of being cut or stabbed. The goal is to end the engagement, not to win it.',
      },
    ],

    principles: [
      'Escape is the only winning option against a knife.',
      'You will likely be cut even if you escape successfully.',
      'Control the weapon arm only to create distance.',
      'Every second engaged increases the risk of serious injury.',
    ],

    mistakes: [
      { title: 'Trying to disarm the attacker', explanation: 'Disarming a knife attacker is extremely difficult and dangerous. Focus on escape, not disarming.' },
      { title: 'Staying to fight after creating an opening', explanation: 'Every second you remain engaged increases the chance of being cut. Escape immediately when you have an opening.' },
      { title: 'Ignoring the reality of cuts', explanation: 'You will likely be cut even with perfect technique. Accept this and focus on escaping rather than avoiding all contact.' },
      { title: 'Overcomplicating the response', explanation: 'Knife attacks are fast and chaotic. Simple, direct actions (control arm, create distance, escape) are more reliable than complex techniques.' },
    ],

    practice: [
      'With a partner using a rubber training knife, practice creating distance and escaping.',
      'Practice controlling the weapon arm and directing it away from your body.',
      'Role-play scenarios where you must escape immediately after creating an opening.',
      'Review the reality of knife attacks and accept that you will likely be cut.',
      'Practice awareness and avoidance to prevent knife situations from occurring.',
    ],

    reflection:
      'Have you accepted that knife defense is about damage limitation and escape, not about winning or disarming? How does that change your approach to training?',

    safety:
      'Knife defense training must use rubber or padded training knives only. Never use live blades. Train with qualified instructors only. Expect to be cut in a real knife attack; focus on escape, not avoiding all contact.',

    quiz: [
      {
        question: 'What is the only winning option against a knife attack?',
        options: [
          'Disarming the attacker',
          'Defeating the attacker',
          'Escaping immediately',
          'Controlling the weapon',
        ],
        answer: 2,
        explanation:
          'Escape is the only winning option against a knife. Every second engaged increases the risk of being cut or stabbed.',
      },
      {
        question: 'Why is knife defense about damage limitation rather than winning?',
        options: [
          'Because knives are illegal',
          'Because you will likely be cut even with perfect technique',
          'Because knife attacks are rare',
          'Because knives are slow weapons',
        ],
        answer: 1,
        explanation:
          'Knife attacks are fast and chaotic. Even with perfect technique, you will likely be cut. The goal is to escape with minimal injury, not to avoid all contact.',
      },
    ],

    mastery: [
      'Explain why escape is the only winning option against a knife.',
      'Demonstrate controlling the weapon arm and creating distance.',
      'Escape immediately after creating an opening in a drill.',
      'Identify and correct the four common knife-defense errors.',
    ],

    liveApplication: {
      scenarios: [
        {
          setup: 'An attacker draws a knife and advances toward you.',
          action: 'You create distance immediately, looking for escape routes while keeping the attacker in view.',
          why: 'Distance is your best defense against a knife. The more distance, the more time you have to escape.',
        },
        {
          setup: 'You are too close to escape and the attacker thrusts the knife.',
          action: 'You control the weapon arm, directing the blade away from your body while you create distance and escape.',
          why: 'Controlling the weapon arm prevents immediate stabbing while you create the opening to escape.',
        },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Against a knife, you control the weapon arm only to create distance, then escape immediately. You will likely be cut even with perfect technique.' },
        { role: 'Facing it', detail: 'A knife attacker has a decisive advantage; the only winning response is escape, not engagement.' },
      ],
      adaptation: {
        cues: [
          'The attacker drawing or displaying a knife',
          'The distance between you and the attacker',
          'Available escape routes in your environment',
        ],
        adjustments: [
          { if: 'You have distance', then: 'Maintain it and escape immediately.' },
          { if: 'You are too close to escape', then: 'Control the weapon arm, create distance, then escape.' },
        ],
        learning: 'After each drill, note whether you escaped immediately or stayed engaged, and what that taught you about the reality of knife defense.',
      },
    },

    practiceEngine: {
      type: 'rep-counter',
      label: 'Escape Drills',
      targetReps: 10,
    },
  },
  'karate-self-defense-against-stick': {
    id: 'karate-self-defense-against-stick',
    subject: 'Karate',
    title: 'Against a Stick or Blunt Weapon',
    level: 'Advanced',
    duration: '15 min',

    description:
      'Learn to defend against blunt weapons: control the weapon, close the distance, and escape or neutralize the threat while minimizing damage.',

    objectives: [
      'Understand the danger of blunt weapons and their reach advantage',
      'Learn to close distance to negate the reach advantage',
      'Control the weapon and the weapon arm',
      'Understand when to escape versus when to neutralize',
      'Recognize the four most common blunt-weapon-defense errors',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Closing the distance',
        caption:
          'Blunt weapons have a reach advantage. Close the distance to negate that advantage and control the weapon.',
        labels: [
          'Blunt weapons have reach',
          'Close the distance quickly',
          'Control the weapon arm',
          'Escape or neutralize',
        ],
      },
    ],

    sections: [
      {
        title: 'The reach advantage',
        content:
          'Blunt weapons like sticks, bats, or pipes give the attacker a significant reach advantage. They can strike you from a distance where you cannot reach them. The solution is to close that distance quickly and decisively, moving inside their effective range where the weapon is less effective.',
      },
      {
        title: 'Controlling the weapon',
        content:
          'Once inside their range, control the weapon and the weapon arm to prevent them from striking you. This may mean grabbing the weapon itself, controlling the wrist, or using your body to limit their movement. The goal is to prevent them from using the weapon effectively while you decide whether to escape or neutralize the threat.',
      },
      {
        title: 'Escape or neutralize',
        content:
          'Once you have controlled the weapon, you have two options: escape immediately if you can do so safely, or neutralize the threat if escape is not possible. Neutralization means rendering the attacker unable to continue the attack, which may involve controlling them until help arrives or creating a situation where they cannot pursue. The choice depends on the situation and your ability to escape safely.',
      },
    ],

    principles: [
      'Close the distance to negate the reach advantage.',
      'Control the weapon and the weapon arm immediately.',
      'Escape if you can do so safely; neutralize if you cannot.',
      'Blunt weapons can cause serious injury even without penetration.',
    ],

    mistakes: [
      { title: 'Staying at their effective range', explanation: 'If you stay at the distance where they can strike you with the weapon, you will be hit repeatedly. Close the distance quickly.' },
      { title: 'Not controlling the weapon', explanation: 'If you do not control the weapon, they can continue striking you. Control the weapon or the weapon arm immediately.' },
      { title: 'Staying engaged when escape is possible', explanation: 'If you can escape safely, do so immediately. Staying engaged increases your risk of injury.' },
      { title: 'Underestimating blunt force', explanation: 'Blunt weapons can cause serious injury, including broken bones and concussions, even without penetration. Treat them with the same seriousness as edged weapons.' },
    ],

    practice: [
      'With a partner using a padded stick, practice closing the distance quickly.',
      'Practice controlling the weapon and the weapon arm once inside.',
      'Role-play scenarios where you must decide whether to escape or neutralize.',
      'Practice creating distance and escaping after controlling the weapon.',
      'Review the principles and note where you applied them in drills.',
    ],

    reflection:
      'In your training, do you close the distance decisively, or do you hesitate at the edge of their range? What does that hesitation teach you about real confrontations?',

    safety:
      'Blunt weapon defense training must use padded sticks only. Train with qualified instructors only. Blunt weapons can cause serious injury; treat them with respect.',

    quiz: [
      {
        question: 'Why is closing the distance important against a blunt weapon?',
        options: [
          'To strike the attacker more effectively',
          'To negate their reach advantage',
          'To intimidate them',
          'To show courage',
        ],
        answer: 1,
        explanation:
          'Blunt weapons have a reach advantage. Closing the distance moves you inside their effective range, where the weapon is less effective.',
      },
      {
        question: 'What are your two options after controlling the weapon?',
        options: [
          'Fight or flee',
          'Escape or neutralize',
          'Win or lose',
          'Attack or defend',
        ],
        answer: 1,
        explanation:
          'After controlling the weapon, you can escape if you can do so safely, or neutralize the threat if escape is not possible. The choice depends on the situation.',
      },
    ],

    mastery: [
      'Explain why closing the distance is important against blunt weapons.',
      'Demonstrate closing distance and controlling the weapon.',
      'Make the correct decision (escape or neutralize) in a drill.',
      'Identify and correct the four common blunt-weapon-defense errors.',
    ],

    liveApplication: {
      scenarios: [
        {
          setup: 'An attacker swings a stick at you from a distance.',
          action: 'You close the distance quickly, moving inside their effective range where the stick is less effective.',
          why: 'Closing the distance negates their reach advantage and puts you in a position to control the weapon.',
        },
        {
          setup: 'You have closed the distance and grabbed the weapon.',
          action: 'You control the weapon and the weapon arm, then decide whether to escape or neutralize the threat.',
          why: 'Controlling the weapon prevents them from striking you while you make your decision.',
        },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Against a blunt weapon, close the distance quickly to negate their reach advantage, then control the weapon and escape or neutralize.' },
        { role: 'Facing it', detail: 'A blunt weapon attacker relies on reach; if you close the distance, their advantage disappears.' },
      ],
      adaptation: {
        cues: [
          'The attacker displaying a blunt weapon',
          'The distance between you and the attacker',
          'Your ability to close the distance safely',
        ],
        adjustments: [
          { if: 'You have distance and can close it', then: 'Close the distance quickly and decisively.' },
          { if: 'You cannot close the distance safely', then: 'Create distance and escape if possible.' },
        ],
        learning: 'After each drill, note whether you closed the distance decisively or hesitated, and what that taught you about real confrontations.',
      },
    },

    practiceEngine: {
      type: 'rep-counter',
      label: 'Close-Distance Drills',
      targetReps: 10,
    },
  },
  'karate-self-defense-against-grabs': {
    id: 'karate-self-defense-against-grabs',
    subject: 'Karate',
    title: 'Against Grabs and Holds',
    level: 'Advanced',
    duration: '15 min',

    description:
      'Learn to escape from grabs and holds: use leverage, structure, and technique to break free and create distance for escape.',

    objectives: [
      'Understand the principles of escaping from grabs and holds',
      'Learn to use leverage and structure to break free',
      'Apply specific techniques for common grabs (wrist, arm, bear hug)',
      'Create distance and escape immediately after breaking free',
      'Recognize the four most common grab-escape errors',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Breaking free from grabs',
        caption:
          'Grabs and holds can be escaped using leverage, structure, and technique. Break free and escape immediately.',
        labels: [
          'Use leverage and structure',
          'Break the grip decisively',
          'Create distance immediately',
          'Escape before they can re-grab',
        ],
      },
    ],

    sections: [
      {
        title: 'Principles of escaping grabs',
        content:
          'Grabs and holds are attempts to control you. Escaping them requires breaking the grip using leverage and structure, then creating distance immediately before the attacker can re-grab or escalate. The key is decisiveness: half-hearted attempts fail, while decisive actions succeed.',
      },
      {
        title: 'Using leverage and structure',
        content:
          'Grabs can be broken by using leverage (twisting, pulling against the thumb, using body weight) and structure (maintaining your stance, using your whole body rather than just your arm). The goal is to break the grip efficiently, not to fight strength with strength.',
      },
      {
        title: 'Creating distance and escaping',
        content:
          'Once you have broken the grab, create distance immediately. Do not stay to fight or punish the attacker. Escape to safety. Every second you remain engaged increases the risk of being re-grabbed or escalated to a more serious attack.',
      },
    ],

    principles: [
      'Break the grip decisively using leverage and structure.',
      'Create distance immediately after breaking free.',
      'Escape before they can re-grab or escalate.',
      'Use your whole body, not just your arm, to break the grip.',
    ],

    mistakes: [
      { title: 'Half-hearted attempts to break the grip', explanation: 'If you do not commit fully to breaking the grip, you will not succeed. Be decisive.' },
      { title: 'Fighting strength with strength', explanation: 'Trying to pull away with arm strength alone is inefficient. Use leverage and your whole body.' },
      { title: 'Staying engaged after breaking free', explanation: 'Once you have broken the grab, create distance and escape. Staying engaged increases your risk.' },
      { title: 'Not practicing specific techniques', explanation: 'Different grabs require different techniques. Practice specific escapes for common grabs (wrist, arm, bear hug).' },
    ],

    practice: [
      'Practice wrist grab escapes using leverage and structure.',
      'Practice arm grab escapes using body weight and twisting.',
      'Practice bear hug escapes using elbows, knees, and dropping your weight.',
      'Role-play scenarios where you must break free and escape immediately.',
      'Review the principles and note where you applied them in drills.',
    ],

    reflection:
      'In your training, do you break grips decisively, or do you hesitate and fight strength with strength? What does that teach you about real confrontations?',

    safety:
      'Grab escape training must be supervised by qualified instructors. Practice with cooperative partners at controlled speeds. Never use excessive force.',

    quiz: [
      {
        question: 'What is the key to breaking a grab decisively?',
        options: [
          'Using arm strength',
          'Using leverage and structure',
          'Pulling away quickly',
          'Fighting back harder',
        ],
        answer: 1,
        explanation:
          'Grabs are broken using leverage and structure, not arm strength. Use your whole body and efficient technique.',
      },
      {
        question: 'What should you do immediately after breaking a grab?',
        options: [
          'Stay and fight',
          'Create distance and escape',
          'Punish the attacker',
          'Wait to see what happens',
        ],
        answer: 1,
        explanation:
          'After breaking a grab, create distance and escape immediately. Staying engaged increases your risk of being re-grabbed or escalated.',
      },
    ],

    mastery: [
      'Explain the principles of escaping grabs using leverage and structure.',
      'Demonstrate escaping from wrist, arm, and bear hug grabs.',
      'Create distance and escape immediately after breaking free.',
      'Identify and correct the four common grab-escape errors.',
    ],

    liveApplication: {
      scenarios: [
        {
          setup: 'An attacker grabs your wrist from the front.',
          action: 'You twist your arm to break the grip using leverage, then create distance and escape.',
          why: 'Twisting breaks the grip efficiently using leverage rather than strength, and creating distance prevents re-grabbing.',
        },
        {
          setup: 'An attacker grabs you from behind in a bear hug.',
          action: 'You drop your weight, use your elbows to strike, and break free, then create distance and escape.',
          why: 'Dropping your weight and using your whole body breaks the hold more effectively than arm strength alone.',
        },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Escape grabs using leverage and structure, then create distance and escape immediately. Do not stay to fight.' },
        { role: 'Facing it', detail: 'A grabbed person who breaks free decisively and escapes is hard to hold; hesitation allows the grab to escalate.' },
      ],
      adaptation: {
        cues: [
          'The type of grab (wrist, arm, bear hug, etc.)',
          'The direction of the grab (front, side, behind)',
          'Your ability to break free and escape',
        ],
        adjustments: [
          { if: 'You can break free and escape', then: 'Do so immediately and decisively.' },
          { if: 'You cannot break free easily', then: 'Use more leverage, drop your weight, or strike to create an opening.' },
        ],
        learning: 'After each drill, note whether you broke free decisively or hesitated, and what that taught you about real confrontations.',
      },
    },

    practiceEngine: {
      type: 'rep-counter',
      label: 'Grab Escape Drills',
      targetReps: 20,
    },
  },
}
`;

fs.writeFileSync(p, c + '\n' + lessons);
console.log('4 self-defense lessons added');
