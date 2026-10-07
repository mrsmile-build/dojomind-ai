export const lessons = {
  'karate-stances': {
    id: 'karate-stances',
    subject: 'Karate',
    title: 'Understanding Stances',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn how stance creates a stable base for movement, balance and technique, and how to develop control without unnecessary tension.',

    objectives: [
      'Understand why stance is important',
      'Recognize the relationship between balance and movement',
      'Understand basic weight-distribution principles',
      'Identify common beginner mistakes',
      'Practice maintaining controlled posture',
    ],

    positionDiagram: {
      title: 'Understanding the body position',
      description:
        'Use the diagram to understand the relationships between posture, balance and the lower-body base. Exact positions vary by stance and practitioner.',
      torsoAngle: 0,
      frontArmAngle: -8,
      rearArmAngle: 8,
      frontLegAngle: -12,
      rearLegAngle: 18,
      weightDistribution: { front: 50, rear: 50 },
      feet: {
        front: { x: -55, y: -35, angle: 0 },
        rear: { x: 55, y: 45, angle: 15 },
        note: 'Natural ready base: feet about shoulder-width apart, slightly staggered, weight even.',
      },
      annotations: [
        {
          number: '01',
          label: 'Upright posture',
          detail: 'Keep the torso controlled rather than collapsing forward.'
        },
        {
          number: '02',
          label: 'Stable base',
          detail: 'The feet create a base that supports controlled movement.'
        },
        {
          number: '03',
          label: 'Weight control',
          detail: 'Shift weight deliberately instead of becoming rigid.'
        },
        {
          number: '04',
          label: 'Movement ready',
          detail: 'A useful stance should allow you to move.'
        }
      ],
      metrics: [
        { label: 'Torso', value: 'Controlled' },
        { label: 'Balance', value: 'Centered' },
        { label: 'Tension', value: 'Minimal' },
        { label: 'Movement', value: 'Ready' }
      ]
    },

    visuals: [
      {
        type: 'image',
        src: '/dojomind-ai/assets/dojo/karate/stances/front-stance.jpg',
        alt: 'Karate front stance instructional image',
        caption:
          'Example of a controlled karate front stance. The image is used as a visual reference; learners should focus on balance, posture and controlled movement.'
      },
      {
        type: 'diagram',
        title: 'A stable base',
        caption:
          'The diagram highlights the main alignment and balance principles.',
        labels: [
          'Head and posture',
          'Balanced base',
          'Controlled weight',
          'Ready to move',
        ],
      }
    ],

    sections: [
      {
        title: 'Why stance matters',
        content:
          'A stance provides the base from which a practitioner can move, defend, strike and maintain balance. A useful stance is not simply a position that looks correct; it should allow controlled movement while maintaining stability.',
      },
      {
        title: 'Balance and movement',
        content:
          'Good balance means being able to control your body while stationary and while moving. Martial artists continually adjust their position so that movement does not unnecessarily compromise stability.',
      },
      {
        title: 'Weight distribution',
        content:
          'Weight distribution depends on the stance, technique and tactical situation. Beginners should focus on maintaining controlled posture and being able to shift their weight deliberately rather than becoming rigid.',
      },
    ],

    principles: [
      'Stability should support movement rather than prevent it.',
      'Good posture does not require unnecessary tension.',
      'Balance is something you maintain while moving, not only while standing still.',
      'A stance should serve the technique and situation.',
    ],

    mistakes: [
      {
        title: 'Standing too rigidly',
        explanation:
          'Excessive tension can make movement slower and less adaptable.',
      },
      {
        title: 'Feet too close together',
        explanation:
          'A narrow base can make balance more difficult during movement.',
      },
      {
        title: 'Ignoring posture',
        explanation:
          'Poor posture can make movement less controlled and place unnecessary stress on the body.',
      },
      {
        title: 'Copying shape without understanding',
        explanation:
          'A stance is not just an external shape. The practitioner should understand balance, control and movement.',
      },
    ],

    practice: [
      'Stand comfortably with a stable base.',
      'Keep your posture controlled without unnecessary tension.',
      'Shift your weight slowly from one side to the other.',
      'Return to a balanced position after each movement.',
      'Take a small controlled step without losing balance.',
      'Repeat slowly and focus on control rather than speed.',
    ],

    reflection:
      'When you move from your stance, can you remain balanced and controlled instead of becoming tense or unstable?',

    safety:
      'Practice slowly and within your ability. Martial-arts training is best learned with qualified in-person instruction, especially when learning physical techniques.',

    quiz: [
      {
        question: 'What is one major purpose of a martial-arts stance?',
        options: [
          'To make the practitioner look impressive',
          'To provide a controlled base for movement and technique',
          'To prevent all movement',
          'To make every technique stronger automatically',
        ],
        answer: 1,
        explanation:
          'A useful stance provides a controlled base for movement, balance, defense and technique.',
      },
      {
        question: 'What should a beginner prioritize when learning stance?',
        options: [
          'Maximum tension',
          'Copying the appearance perfectly',
          'Controlled posture and balance',
          'Moving as quickly as possible',
        ],
        answer: 2,
        explanation:
          'Understanding balance and controlled posture is more useful than simply copying an external shape.',
      },
    ],

    mastery: [
      'Explain why a martial-arts stance matters.',
      'Demonstrate controlled weight shifting.',
      'Move without unnecessarily losing balance.',
      'Identify at least two common stance mistakes.',
    ],
  },

  'karate-stances-front': {
    id: 'karate-stances-front',
    subject: 'Karate',
    title: 'Front Stance (Zenkutsu-Dachi)',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn the front stance: a forward-weighted base used to drive power into advancing techniques, built on a bent front leg, an extended rear leg and a planted heel.',

    objectives: [
      'Understand what the front stance is for',
      'Position the feet, knees and hips correctly',
      'Feel a 60/40 weight distribution',
      'Recognize the four most common stance errors',
      'Hold and move in the stance without losing structure',
    ],

    positionDiagram: {
      title: 'Front stance — zenkutsu-dachi',
      description:
        'Side and top-down views of the front stance. The front leg is bent with the knee over the foot; the rear leg is extended with the heel planted; weight sits about 60% forward.',
      torsoAngle: 0,
      frontArmAngle: -10,
      rearArmAngle: 10,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'Front foot points straight forward. Rear foot is turned out about 45 degrees with the heel on the floor. Feet stay about hip-width apart side to side — never on one line.',
      },
      annotations: [
        { number: '01', label: 'Front knee bent', detail: 'Knee stacks over the foot, not past the toes, never caving inward.' },
        { number: '02', label: 'Rear leg extended', detail: 'The back leg drives long and strong; the heel stays planted.' },
        { number: '03', label: 'Hips square, torso upright', detail: 'The upper body stays over the hips; do not chase the front knee forward.' },
        { number: '04', label: 'Weight about 60/40', detail: 'Most weight sits forward so pressure drives into the technique.' },
      ],
      metrics: [
        { label: 'Weight', value: '60% front / 40% rear' },
        { label: 'Front foot', value: 'Pointing forward' },
        { label: 'Rear foot', value: 'About 45° out' },
        { label: 'Stance length', value: 'About two shoulder widths' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'A driving base',
        caption:
          'The front stance trades mobility for forward drive: it is the shape power travels through when stepping into a technique.',
        labels: [
          'Bent front leg under control',
          'Extended rear leg, heel down',
          'Upright torso over the hips',
          'Weight pressed forward',
        ],
      },
    ],

    sections: [
      {
        title: 'What defines the front stance',
        content:
          'Zenkutsu-dachi is a forward-weighted stance: the front knee is bent until the knee sits roughly over the foot, the rear leg is extended behind, and the feet are separated both lengthwise (about two shoulder widths) and sideways (about hip width). The rear foot is turned out around 45 degrees and keeps contact with the floor through the heel.',
      },
      {
        title: 'Why the weight sits forward',
        content:
          'Putting about sixty percent of the weight on the front leg lets the body drive pressure into an advancing technique instead of leaking it backward. The stance is strong along its line of travel: stable going forward, deliberately mobile when you push off the rear leg to change position.',
      },
      {
        title: 'Where you will use it',
        content:
          'The front stance is the working base for many advancing basics: stepping punches, lunging strikes and forward-moving combinations. Later modules will connect it to footwork, so for now the goal is simply to hold the shape correctly and feel where the weight sits.',
      },
    ],

    principles: [
      'The knee tracks over the foot, never collapsing inward.',
      'The rear heel stays planted; a floating heel breaks the base.',
      'The torso stays upright over the hips even though the weight is forward.',
      'Width matters: feet on a single line make the stance easy to tip sideways.',
    ],

    mistakes: [
      { title: 'Rear knee bent, heel floating', explanation: 'A bent, lifted rear leg removes the drive and makes the stance wobble. Lengthen the back leg and keep the heel down.' },
      { title: 'Front knee caving inward', explanation: 'When the knee collapses toward the center line the joint is stressed and power leaks. Press the knee outward in line with the foot.' },
      { title: 'Feet on a tightrope', explanation: 'Placing both feet on one line removes sideways stability. Keep about hip width between them.' },
      { title: 'Torso leaning forward', explanation: 'Leaning over the front knee shifts balance too far forward and tires the leg. Stack the shoulders over the hips instead.' },
    ],

    practice: [
      'Stand in a natural ready position.',
      'Step one foot forward about two shoulder widths, keeping hip width sideways.',
      'Bend the front knee until it stacks over the foot; extend the rear leg and turn the rear foot out about 45 degrees.',
      'Settle about sixty percent of your weight onto the front leg without leaning the torso.',
      'Hold the stance for ten slow breaths, checking heel, knee and posture each breath.',
      'Return to the ready position and repeat on the opposite side.',
    ],

    reflection:
      'While holding the stance, can you feel the weight sitting forward without your torso tipping forward — and could you push off the rear leg instantly if needed?',

    safety:
      'Keep the front knee aligned over the foot and avoid sinking deeper than control allows. Knee or ankle discomfort is a signal to reduce depth. Physical technique is best learned with qualified in-person instruction.',

    quiz: [
      {
        question: 'Where does most of the weight sit in the front stance?',
        options: [
          'Evenly on both legs',
          'Mostly on the rear leg',
          'About sixty percent on the front leg',
          'Entirely on the ball of the front foot',
        ],
        answer: 2,
        explanation:
          'Roughly 60% of the weight rests forward so pressure can drive into advancing techniques while the rear leg stays connected through the heel.',
      },
      {
        question: 'What is the role of the rear leg in the front stance?',
        options: [
          'It stays bent and relaxed',
          'It extends long behind with the heel planted',
          'It lifts onto the toes for speed',
          'It crosses behind the front leg',
        ],
        answer: 1,
        explanation:
          'The extended rear leg with a planted heel is what gives the stance its drive and stops the base from collapsing.',
      },
    ],

    mastery: [
      'Set up the front stance with correct foot angles and spacing unaided.',
      'Hold the stance for ten breaths with heel, knee and posture intact.',
      'Explain why the weight sits about 60% forward.',
      'Identify and correct the four common mistakes in your own stance.',
    ],
  },
}
