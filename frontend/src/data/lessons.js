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
        src: '/assets/dojo/karate/stances/front-stance.jpg',
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
}
