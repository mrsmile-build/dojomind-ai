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

    practiceEngine: {
      type: 'timed-hold',
      label: 'Front Stance Hold',
      initialTime: 30,
    },
    mastery: [
      'Set up the front stance with correct foot angles and spacing unaided.',
      'Hold the stance for ten breaths with heel, knee and posture intact.',
      'Explain why the weight sits about 60% forward.',
      'Identify and correct the four common mistakes in your own stance.',
    ],
  },
  'karate-stances-back': {
    id: 'karate-stances-back',
    subject: 'Karate',
    title: 'Back Stance (Kokutsu-Dachi)',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn the back stance: a rear-weighted base used for defense, evasions, and counter-attacks, built on a deeply bent rear leg and an L-shaped foot alignment.',

    objectives: [
      'Understand the defensive purpose of the back stance',
      'Position the feet in a stable L-shape',
      'Feel a 70/30 weight distribution on the rear leg',
      'Recognize the four most common stance errors',
      'Hold the stance while keeping the torso upright',
    ],

    positionDiagram: {
      title: 'Back stance — kokutsu-dachi',
      description:
        'Side and top-down views of the back stance. The rear leg is deeply bent with the knee over the foot; the front leg is relatively straight; weight sits about 70% on the rear leg.',
      torsoAngle: 0,
      frontArmAngle: -15,
      rearArmAngle: 20,
      frontLegAngle: -15,
      rearLegAngle: 35,
      weightDistribution: { front: 30, rear: 70 },
      feet: {
        front: { x: -10, y: -80, angle: 0 },
        rear: { x: 30, y: 50, angle: 90 },
        note:
          'The feet form an L-shape. The front foot points straight forward, while the rear foot points directly to the side (90 degrees). The heels should align on the same forward-backward line.',
      },
      annotations: [
        { number: '01', label: 'Deeply bent rear knee', detail: 'The rear knee is bent deeply and stacks over the rear foot.' },
        { number: '02', label: 'Relatively straight front leg', detail: 'The front leg is extended but not locked.' },
        { number: '03', label: 'Upright torso', detail: 'The upper body stays over the hips, not leaning backward.' },
        { number: '04', label: 'Weight about 30/70', detail: 'Most weight sits backward to keep the body out of striking range.' },
      ],
      metrics: [
        { label: 'Weight', value: '30% front / 70% rear' },
        { label: 'Front foot', value: 'Pointing forward' },
        { label: 'Rear foot', value: 'Pointing sideways (90°)' },
        { label: 'Stance length', value: 'About two shoulder widths' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'A defensive base',
        caption:
          'The back stance trades forward drive for defensive mobility: it is the shape used to absorb incoming force and prepare to counter.',
        labels: [
          'Deeply bent rear leg under control',
          'Relatively straight front leg',
          'Upright torso over the hips',
          'Weight pressed backward',
        ],
      },
    ],

    sections: [
      {
        title: 'What defines the back stance',
        content:
          'Kokutsu-dachi is a rear-weighted stance. The feet form an L-shape: the front foot points straight forward, while the rear foot points directly to the side (about 90 degrees). The heels align on the same forward-backward line, with no sideways staggering. The rear knee is bent deeply until it stacks over the rear foot, and the front leg is extended but not locked.',
      },
      {
        title: 'Why the weight sits backward',
        content:
          'Putting about seventy percent of the weight on the rear leg keeps the torso out of immediate striking range, making it the primary defensive and evasive base in karate. The structure is stable enough to absorb incoming force and mobile enough to push off the rear leg for a counter-attack or evasion.',
      },
      {
        title: 'Where you will use it',
        content:
          'The back stance is the working base for many blocking techniques, evasions, and counter-strikes. Later modules will connect it to footwork, so for now the goal is simply to hold the shape correctly and feel where the weight sits.',
      },
    ],

    principles: [
      'The rear knee tracks over the rear foot, never caving inward.',
      'The front leg stays extended but not locked.',
      'The torso stays upright over the hips even though the weight is backward.',
      'The heels align front-to-back; sideways staggering removes the L-shape mobility.',
    ],

    mistakes: [
      { title: 'Front foot floating off the ground', explanation: 'A floating front foot removes the ability to move forward if needed. Keep the front heel planted.' },
      { title: 'Rear knee caving inward', explanation: 'When the rear knee collapses toward the center line the joint is stressed and power leaks. Press the knee outward in line with the foot.' },
      { title: 'Torso leaning backward', explanation: 'Leaning backward shifts balance outside the base and tires the core. Stack the shoulders over the hips instead.' },
      { title: 'Feet too wide side-to-side', explanation: 'Placing the feet wide removes the L-shape structure and makes the stance easy to tip forward. Keep the heels aligned front-to-back.' },
    ],

    practice: [
      'Stand in a natural ready position.',
      'Step one foot directly back about two shoulder widths.',
      'Turn the rear foot out 90 degrees so it points to the side.',
      'Bend the rear knee deeply until it stacks over the rear foot; extend the front leg without locking it.',
      'Settle about seventy percent of your weight onto the rear leg without leaning the torso backward.',
      'Hold the stance for ten slow breaths, checking heel, knee and posture each breath.',
      'Return to the ready position and repeat on the opposite side.',
    ],

    reflection:
      'While holding the stance, could you easily retract your front foot to dodge an incoming attack without losing your balance?',

    safety:
      'Keep the rear knee aligned over the foot and avoid sinking deeper than your mobility allows. Knee or ankle discomfort is a signal to reduce depth. Physical technique is best learned with qualified in-person instruction.',

    quiz: [
      {
        question: 'How is the weight distributed in the back stance?',
        options: [
          'Evenly on both legs',
          'Mostly on the front leg',
          'About seventy percent on the rear leg',
          'Entirely on the ball of the rear foot',
        ],
        answer: 2,
        explanation:
          'Roughly 70% of the weight rests on the rear leg to keep the body out of striking range and prepare for defensive actions.',
      },
      {
        question: 'What is the shape of the feet in the back stance?',
        options: [
          'Both feet point forward',
          'An L-shape with the rear foot pointing sideways',
          'Both feet point outward at 45 degrees',
          'The front foot crosses behind the rear foot',
        ],
        answer: 1,
        explanation:
          'The feet form an L-shape: the front foot points forward, the rear foot points to the side, and the heels align front-to-back.',
      },
    ],

    practiceEngine: {
      type: 'timed-hold',
      label: 'Back Stance Hold',
      initialTime: 30,
    },
    mastery: [
      'Set up the back stance with correct L-shape foot alignment unaided.',
      'Hold the stance for ten breaths with a deeply bent rear knee and upright torso.',
      'Explain why the weight sits about 70% on the rear leg.',
      'Identify and correct the four common mistakes in your own stance.',
    ],
  },
  'karate-stances-horse': {
    id: 'karate-stances-horse',
    subject: 'Karate',
    title: 'Horse Stance (Kiba-Dachi)',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn the horse stance: a parallel, evenly-weighted base used for strength, stability, and low-line techniques, built on bent knees and feet shoulder-width apart.',

    objectives: [
      'Understand the strength and stability purpose of the horse stance',
      'Position the feet parallel and shoulder-width apart',
      'Feel a 50/50 weight distribution',
      'Recognize the four most common stance errors',
      'Hold the stance while keeping the torso upright and knees aligned',
    ],

    positionDiagram: {
      title: 'Horse stance — kiba-dachi',
      description:
        'Side and top-down views of the horse stance. Both knees are bent equally, feet are parallel and shoulder-width apart, and weight sits evenly on both legs.',
      torsoAngle: 0,
      frontArmAngle: -5,
      rearArmAngle: 5,
      frontLegAngle: -25,
      rearLegAngle: 25,
      weightDistribution: { front: 50, rear: 50 },
      feet: {
        front: { x: -40, y: 0, angle: 0 },
        rear: { x: 40, y: 0, angle: 0 },
        note:
          'Both feet point straight forward and are about shoulder-width apart. The feet are on the same forward-backward line, creating a stable, parallel base.',
        practiceEngine: {
      type: 'timed-hold',
      label: 'Horse Stance Hold',
      initialTime: 30,
    },
  },
      annotations: [
        { number: '01', label: 'Both knees bent equally', detail: 'The knees are bent and track over the feet, not caving inward.' },
        { number: '02', label: 'Parallel feet', detail: 'Both feet point straight forward, about shoulder-width apart.' },
        { number: '03', label: 'Upright torso', detail: 'The upper body stays over the hips, not leaning forward or backward.' },
        { number: '04', label: 'Even weight distribution', detail: 'Weight sits about 50/50 on both legs for maximum stability.' },
      ],
      metrics: [
        { label: 'Weight', value: '50% / 50% (even)' },
        { label: 'Both feet', value: 'Pointing forward' },
        { label: 'Foot spacing', value: 'Shoulder-width apart' },
        { label: 'Knee depth', value: 'Bent, tracking over feet' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'A grounded strength base',
        caption:
          'The horse stance trades mobility for stability: it is the shape used for strength training, low kicks, and holding ground against force.',
        labels: [
          'Both knees bent and tracking over feet',
          'Feet parallel and shoulder-width apart',
          'Upright torso over the hips',
          'Even weight distribution',
        ],
      },
    ],

    sections: [
      {
        title: 'What defines the horse stance',
        content:
          'Kiba-dachi is a parallel stance with even weight distribution. Both feet point straight forward and are about shoulder-width apart, on the same forward-backward line. Both knees are bent equally and track over the feet. The torso stays upright over the hips.',
      },
      {
        title: 'Why even weight matters here',
        content:
          'Putting weight evenly on both legs creates maximum stability in all directions. The horse stance is the primary base for strength training, holding ground against incoming force, and executing low-line techniques like low kicks or sweeps.',
      },
      {
        title: 'Where you will use it',
        content:
          'The horse stance is used for conditioning, low kicks, and techniques that require a stable, grounded base. Later modules will connect it to movement and applications, so for now the goal is simply to hold the shape correctly and build leg strength.',
      },
    ],

    principles: [
      'Both knees track over the feet, never caving inward.',
      'The feet stay parallel and shoulder-width apart.',
      'The torso stays upright over the hips.',
      'Weight sits evenly on both legs for maximum stability.',
    ],

    mistakes: [
      { title: 'Knees caving inward', explanation: 'When the knees collapse toward the center line the joint is stressed and stability is lost. Press the knees outward in line with the feet.' },
      { title: 'Feet too wide or too narrow', explanation: 'Feet wider than shoulder-width remove mobility; narrower than shoulder-width remove stability. Find the shoulder-width sweet spot.' },
      { title: 'Torso leaning forward', explanation: 'Leaning forward shifts weight off the base and tires the lower back. Stack the shoulders over the hips.' },
      { title: 'Feet turned outward', explanation: 'Turning the feet outward removes the parallel structure and stresses the knees. Keep both feet pointing straight forward.' },
    ],

    practice: [
      'Stand with feet together.',
      'Step one foot directly sideways until the feet are about shoulder-width apart.',
      'Turn both feet so they point straight forward.',
      'Bend both knees equally until they stack over the feet.',
      'Settle weight evenly on both legs without leaning the torso.',
      'Hold the stance for ten slow breaths, checking knee alignment and posture each breath.',
      'Return to standing and repeat, gradually increasing hold time as strength builds.',
    ],

    reflection:
      'While holding the stance, do you feel equally stable if someone were to push you from the front, back, or either side?',

    safety:
      'Keep the knees aligned over the feet and avoid sinking deeper than your mobility allows. Knee discomfort is a signal to reduce depth or stop. Physical technique is best learned with qualified in-person instruction.',

    quiz: [
      {
        question: 'How is the weight distributed in the horse stance?',
        options: [
          'Mostly on the front leg',
          'Mostly on the rear leg',
          'Evenly on both legs (50/50)',
          'Entirely on the balls of the feet',
        ],
        answer: 2,
        explanation:
          'The horse stance uses even weight distribution (50/50) to create maximum stability in all directions.',
      },
      {
        question: 'What is the foot position in the horse stance?',
        options: [
          'Front foot forward, rear foot turned out',
          'Both feet turned outward at 45 degrees',
          'Both feet parallel and pointing straight forward',
          'Feet crossed or staggered',
        ],
        answer: 2,
        explanation:
          'Both feet point straight forward and are about shoulder-width apart, creating a stable, parallel base.',
      },
    ],

    practiceEngine: {
      type: 'timed-hold',
      label: 'Horse Stance Hold',
      initialTime: 30,
    },
    mastery: [
      'Set up the horse stance with correct parallel foot alignment unaided.',
      'Hold the stance for ten breaths with knees tracking over feet and torso upright.',
      'Explain why the weight sits evenly on both legs.',
      'Identify and correct the four common mistakes in your own stance.',
    ],
  },

  'karate-movement-footwork': {
    id: 'karate-movement-footwork',
    subject: 'Karate',
    title: 'Basic Footwork',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn how karate moves: stepping that preserves your stance, keeps your balance and arrives ready to act, instead of walking that breaks your base.',

    objectives: [
      'Understand why footwork is trained before technique',
      'Step forward and backward without crossing the feet',
      'Keep head height constant while moving',
      'Arrive in a correct stance after every step',
      'Recognize the four most common footwork errors',
    ],

    positionDiagram: {
      title: 'Footwork — the moving frame',
      description:
        'Good footwork keeps the same frame before, during and after the step: stance length and width survive the movement, and the feet stay low.',
      torsoAngle: 0,
      frontArmAngle: -10,
      rearArmAngle: 10,
      frontLegAngle: -14,
      rearLegAngle: 16,
      weightDistribution: { front: 50, rear: 50 },
      feet: {
        front: { x: -40, y: -45, angle: 0 },
        rear: { x: 40, y: 45, angle: 15 },
        note:
          'This frame is what every step must reproduce: same length, same width, feet low. If the step ends narrower, shorter or crossed, the base was lost mid-move.',
      },
      annotations: [
        { number: '01', label: 'Head height constant', detail: 'The body travels level; bouncing up and down spends balance.' },
        { number: '02', label: 'Push, do not pull', detail: 'The rear leg pushes the body forward; the front foot does not reach and drag.' },
        { number: '03', label: 'Feet stay low', detail: 'Steps slide just above the floor, never lifting high.' },
        { number: '04', label: 'Arrive ready', detail: 'The step ends in a correct stance, weight settled, ready to act.' },
      ],
      metrics: [
        { label: 'Step height', value: 'Low, sliding' },
        { label: 'Head', value: 'Level, no bounce' },
        { label: 'Stance after step', value: 'Same length and width' },
        { label: 'Arrival', value: 'Settled and ready' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Steps that keep the base',
        caption:
          'Every step is a transfer of the same stance to a new place on the floor, not a walk that breaks it.',
        labels: [
          'Push from the rear leg',
          'Feet slide low',
          'Width preserved mid-step',
          'Arrive in stance',
        ],
      },
    ],

    sections: [
      {
        title: 'Why footwork comes first',
        content:
          'A technique can only deliver what the body position allows. Footwork is the skill of moving the base itself: if the stance survives the step, every technique trained on top of it stays usable while moving. If the step breaks the stance, the technique arrives weak or off balance.',
      },
      {
        title: 'How a karate step works',
        content:
          'From your stance, the rear leg pushes the body forward while the front foot slides low to its new place; the rear foot then follows to restore the original stance length and width. The head stays at the same height throughout. Backward and sideways steps use the same idea in reverse: push, slide, restore the frame.',
      },
      {
        title: 'Smooth before fast',
        content:
          'Speed built on a bouncing, crossing step only moves mistakes faster. Beginners train footwork slowly enough to feel the weight transfer, then let speed grow from smoothness. A useful test: if someone paused you mid-step, would you still be balanced?',
      },
    ],

    principles: [
      'The stance you start with is the stance you arrive in.',
      'Feet stay low; the head stays level.',
      'Push from the ground instead of reaching with the front foot.',
      'Never let the feet cross or touch mid-step.',
    ],

    mistakes: [
      { title: 'Crossing the feet', explanation: 'When the moving foot passes inside the support foot the base collapses to a line. Keep lateral width through the whole step.' },
      { title: 'Bouncing', explanation: 'Rising and dropping the head mid-step spends balance twice per step. Move level, as if gliding under a low ceiling.' },
      { title: 'Overstepping', explanation: 'A step longer than your stance arrives weak and slow to recover. Step to your stance length, not beyond it.' },
      { title: 'Stomping or lifting high', explanation: 'Lifting the foot high or slamming it down breaks smoothness and telegraphs the move. Slide just above the floor.' },
    ],

    practice: [
      'Stand in a front stance and note its length and width.',
      'Push from the rear leg and slide the front foot forward, keeping it low.',
      'Bring the rear foot to restore the same stance dimensions.',
      'Repeat five steps forward, checking that head height never changes.',
      'Repeat five steps backward, pushing from the front leg this time.',
      'Finish each step paused for one breath, balanced and ready.',
    ],

    reflection:
      'If someone had frozen you mid-step, would you have been balanced enough to continue in any direction?',

    safety:
      'Practice on a smooth, clear surface, barefoot or in flat shoes. Ankle-roll risk increases when steps are rushed or the floor is uneven.',

    quiz: [
      {
        question: 'Why do karate steps keep the feet low?',
        options: [
          'To move silently and nothing else',
          'To preserve balance and base during the transfer',
          'Because lifting the feet is forbidden',
          'To make every step shorter',
        ],
        answer: 1,
        explanation:
          'Low, sliding feet keep the center of mass level and the base recoverable at every moment of the step.',
      },
      {
        question: 'What should be true of your stance after a correct step?',
        options: [
          'It is longer than before',
          'It is narrower than before',
          'It has the same length and width as before',
          'It does not matter if you moved fast',
        ],
        answer: 2,
        explanation:
          'Footwork moves the base without changing it: the arriving stance matches the starting stance.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Footwork Steps',
      targetReps: 10,
    },
    mastery: [
      'Step forward and backward without crossing the feet.',
      'Keep head height constant across five consecutive steps.',
      'Arrive in a correct stance after every step, unaided.',
      'Explain why footwork is trained before technique.',
    ],
  },
  'karate-movement-balance': {
    id: 'karate-movement-balance',
    subject: 'Karate',
    title: 'Moving Without Losing Balance',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn what balance actually is while moving: keeping your center over your base so you can stop, turn or act at any moment of the step.',

    objectives: [
      'Understand balance as center-over-base, not stillness',
      'Move the body as one unit instead of in pieces',
      'Stop instantly at any point of a movement',
      'Recognize the four most common balance errors',
      'Practice controlled arrivals after each step',
    ],

    positionDiagram: {
      title: 'Balance in motion',
      description:
        'Balance while moving means the center stays over the base at every instant. The dashed axis shows where the center should travel: straight and level, above the middle of the base.',
      torsoAngle: 0,
      frontArmAngle: -8,
      rearArmAngle: 8,
      frontLegAngle: -12,
      rearLegAngle: 18,
      weightDistribution: { front: 50, rear: 50 },
      feet: {
        front: { x: -40, y: -40, angle: 0 },
        rear: { x: 40, y: 45, angle: 15 },
        note:
          'The base is the area between and around the feet. The wider and better placed the base, the more freedom the center has to move without falling outside it.',
      },
      annotations: [
        { number: '01', label: 'Center over base', detail: 'The balance point travels above the middle of the feet, not ahead of them.' },
        { number: '02', label: 'One unit', detail: 'Head, torso and hips move together; no part reaches first.' },
        { number: '03', label: 'Stoppable', detail: 'True balance means you can freeze at any instant of the move.' },
        { number: '04', label: 'Controlled arrival', detail: 'The feet and the weight settle together, not one after the other.' },
      ],
      metrics: [
        { label: 'Center', value: 'Over the base' },
        { label: 'Body', value: 'Moves as one unit' },
        { label: 'Stop test', value: 'Freezable at any moment' },
        { label: 'Arrival', value: 'Settled, not collapsing' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Balance is a moving skill',
        caption:
          'Standing still is easy; the test is keeping the center over the base while it travels.',
        labels: [
          'Center over base',
          'Level travel',
          'One-unit movement',
          'Controlled stop',
        ],
      },
    ],

    sections: [
      {
        title: 'What balance really is',
        content:
          'Balance is not stillness. It is the relationship between your center of mass and your base: as long as the center stays over the area your feet cover, you can act. Movement becomes risky when the center travels outside the base, because then the only option left is to catch yourself.',
      },
      {
        title: 'Move as one unit',
        content:
          'Beginners often send the head and shoulders first and let the legs catch up, which throws the center ahead of the base. Trained movement keeps head, torso and hips travelling together so the center stays supported the whole way. This is why posture work and footwork are the same work.',
      },
      {
        title: 'The stop test',
        content:
          'A simple and honest measure of balance: at a random moment of your step, freeze. If you wobble, lean or need an extra step to recover, the center had left the base. Practice until freezing feels as stable as standing.',
      },
    ],

    principles: [
      'The center stays over the base at every instant.',
      'Head, torso and hips travel together.',
      'If you cannot stop instantly, you were not in balance.',
      'Tension is not stability; control is.',
    ],

    mistakes: [
      { title: 'Leaning into the direction of travel', explanation: 'Reaching forward with the upper body puts the center ahead of the base. Let the legs move the whole unit instead.' },
      { title: 'Feet arriving before the body settles', explanation: 'When the foot lands and the weight crashes in after it, the arrival is a stumble. Settle foot and weight together.' },
      { title: 'Looking down while moving', explanation: 'Dropping the head shifts the center forward and steals your view. Keep the head level and eyes up.' },
      { title: 'Holding the breath', explanation: 'Breath-holding creates rigidity that slows correction. Keep breathing evenly through the movement.' },
    ],

    practice: [
      'Step forward slowly in front stance and freeze mid-transfer for three breaths.',
      'Check that you are not leaning and that freezing felt stable.',
      'Complete the step and freeze again on arrival for three breaths.',
      'Repeat backward, freezing mid-transfer and on arrival.',
      'Have a training partner call stop at random moments; freeze instantly each time.',
      'Finish by standing quietly and noticing where your weight sits on both feet.',
    ],

    reflection:
      'During your last set of steps, was there any moment where you could not have stopped instantly? What was the body doing at that moment?',

    safety:
      'Practice the freeze drill slowly at first. Sudden stops at speed stress knees and ankles until the pattern is smooth.',

    quiz: [
      {
        question: 'What is the stop test measuring?',
        options: [
          'How fast you can move',
          'Whether the center stayed over the base during movement',
          'How strong your legs are',
          'How long you can stand still',
        ],
        answer: 1,
        explanation:
          'Being able to freeze instantly at any moment proves the center never left the base during the move.',
      },
      {
        question: 'Why should head, torso and hips move together?',
        options: [
          'It looks more correct',
          'It keeps the center supported over the base',
          'It makes steps longer',
          'It only relaxes the shoulders',
        ],
        answer: 1,
        explanation:
          'When the body moves as one unit the center of mass stays above the base instead of being thrown ahead of it.',
      },
    ],

    practiceEngine: {
      type: 'timed-hold',
      label: 'Balance Freeze',
      initialTime: 20,
    },
    mastery: [
      'Freeze stably at a random moment of a step, unaided.',
      'Move forward and backward with a level head and no leaning.',
      'Explain balance as center-over-base in your own words.',
      'Identify and correct the four common balance mistakes in your own movement.',
    ],
  },
  'karate-movement-direction': {
    id: 'karate-movement-direction',
    subject: 'Karate',
    title: 'Changing Direction',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn how to turn without falling apart: pivoting on the ball of the foot, keeping your height and center, and finishing every turn in a stance.',

    objectives: [
      'Understand why turns are where balance is lost',
      'Pivot on the ball of the foot instead of the heel',
      'Keep height and center constant through a turn',
      'Finish every turn in a correct stance',
      'Recognize the four most common turning errors',
    ],

    positionDiagram: {
      title: 'Turning — pivot and settle',
      description:
        'A turn rotates the base around one point: the ball of the pivot foot. The center stays over that point while the body rotates, then the weight settles into the new stance.',
      torsoAngle: 0,
      frontArmAngle: -10,
      rearArmAngle: 12,
      frontLegAngle: -14,
      rearLegAngle: 20,
      weightDistribution: { front: 50, rear: 50 },
      feet: {
        front: { x: -35, y: -45, angle: 0 },
        rear: { x: 40, y: 45, angle: 45 },
        note:
          'During the turn the pivot foot spins on its ball while the other foot travels to its new line. After the turn both feet plant fully and the weight settles into the stance.',
      },
      annotations: [
        { number: '01', label: 'Pivot on the ball', detail: 'Spinning on the ball of the foot keeps the turn light; the heel plants after.' },
        { number: '02', label: 'Height constant', detail: 'Rising mid-turn lifts the center and steals balance.' },
        { number: '03', label: 'Hips lead', detail: 'The hips turn and the shoulders follow, keeping the body one unit.' },
        { number: '04', label: 'Finish in stance', detail: 'The turn is not done until the weight settles into a correct stance.' },
      ],
      metrics: [
        { label: 'Pivot point', value: 'Ball of the foot' },
        { label: 'Height', value: 'Constant through turn' },
        { label: 'Sequence', value: 'Hips, then shoulders' },
        { label: 'Finish', value: 'Settled stance' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Turns that keep the base',
        caption:
          'A controlled turn rotates the base around a single supported point instead of swinging the body and hoping.',
        labels: [
          'Pivot on the ball',
          'Level height',
          'Hips lead the turn',
          'Settle into stance',
        ],
      },
    ],

    sections: [
      {
        title: 'Why turns lose people their balance',
        content:
          'During a turn the base temporarily shrinks to the pivot foot, so the center has very little room to wander. If the body rises, leans or swings wide mid-turn, the center leaves that small base and the turn becomes a stumble. Controlled turns keep everything stacked over the pivot until the second foot plants.',
      },
      {
        title: 'Pivot on the ball, settle on the whole foot',
        content:
          'Spinning on the ball of the foot lets the body rotate smoothly with little friction. The heel stays light during the rotation and plants fully once the new direction is set. Pivoting on the heel grinds, twists the knee and slows the turn.',
      },
      {
        title: 'Turn the hips, not just the shoulders',
        content:
          'The hips carry the center of mass, so they lead the rotation; the shoulders follow. Turning the upper body first leaves the legs behind and wrings the body out of alignment. Hips-first turning keeps the whole unit facing the new direction together.',
      },
    ],

    principles: [
      'Pivot on the ball of the foot; plant the heel after.',
      'Height and center stay constant through the rotation.',
      'Hips lead, shoulders follow.',
      'A turn is finished only when the stance is finished.',
    ],

    mistakes: [
      { title: 'Pivoting on the heel', explanation: 'Heel pivots grind the foot, twist the knee and make the turn heavy. Rise slightly onto the ball to spin, then plant.' },
      { title: 'Standing tall mid-turn', explanation: 'Rising lifts the center exactly when the base is smallest. Keep the same bent-knee height through the rotation.' },
      { title: 'Crossing the feet during the turn', explanation: 'Letting the travelling foot cross inside the pivot foot removes the base at the worst moment. Send it wide to its new line.' },
      { title: 'Shoulders first', explanation: 'Twisting the upper body before the hips leaves the center behind and strains the lower back. Start the turn at the hips.' },
    ],

    practice: [
      'From a front stance, rise slightly onto the ball of the front foot.',
      'Turn the hips 90 degrees while the rear foot travels to its new line.',
      'Plant both feet and settle into the new front stance.',
      'Repeat five times each direction, keeping height constant.',
      'Progress to 180 degree turns using the same pivot-and-settle pattern.',
      'Finish each turn paused for one breath, balanced in stance.',
    ],

    reflection:
      'Through your last turn, was there a moment your height changed or your feet crossed? What did that do to your balance on arrival?',

    safety:
      'Turn slowly on a non-slip surface until the pivot pattern is smooth. Fast turns on slippery floors or in socks risk ankle rolls.',

    quiz: [
      {
        question: 'Which part of the foot should a turn pivot on?',
        options: [
          'The heel',
          'The ball of the foot',
          'The outside edge',
          'The toes of both feet',
        ],
        answer: 1,
        explanation:
          'Pivoting on the ball keeps the rotation light and smooth; the heel plants once the new direction is set.',
      },
      {
        question: 'What leads a controlled turn?',
        options: [
          'The shoulders',
          'The head',
          'The hips',
          'The arms',
        ],
        answer: 2,
        explanation:
          'The hips carry the center of mass, so they lead the rotation and the shoulders follow, keeping the body one unit.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Turn Reps',
      targetReps: 10,
    },
    mastery: [
      'Complete 90 and 180 degree turns without crossing the feet.',
      'Keep height constant through five consecutive turns.',
      'Finish every turn settled in a correct stance.',
      'Explain why the pivot happens on the ball of the foot.',
    ],
  },

  'karate-strikes-mechanics': {
    id: 'karate-strikes-mechanics',
    subject: 'Karate',
    title: 'Understanding Striking Mechanics',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn how karate generates power: the kinetic chain from the ground through the hips to the fist, and why striking is a whole-body skill, not an arm skill.',

    objectives: [
      'Understand the kinetic chain that generates striking power',
      'Recognize why hip rotation is the engine of power',
      'Understand the role of the rear leg and ground contact',
      'Recognize the four most common striking power errors',
      'Identify the contact points for different strikes',
    ],

    positionDiagram: {
      title: 'The kinetic chain',
      description:
        'Power travels from the ground through the legs, rotates at the hips, and exits through the striking surface. Each link must be connected and timed correctly.',
      torsoAngle: 0,
      frontArmAngle: -15,
      rearArmAngle: 25,
      frontLegAngle: -18,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -30, y: -50, angle: 0 },
        rear: { x: 35, y: 50, angle: 45 },
        note:
          'The rear leg pushes against the ground, the hips rotate to transfer that force, and the arm extends to deliver it. If any link is weak or out of sequence, power is lost.',
      },
      annotations: [
        { number: '01', label: 'Ground contact', detail: 'Power starts with the rear foot pushing against the floor.' },
        { number: '02', label: 'Hip rotation', detail: 'The hips rotate to transfer leg force into torso rotation.' },
        { number: '03', label: 'Torso whip', detail: 'The shoulders and arms follow the hip rotation like a whip.' },
        { number: '04', label: 'Contact surface', detail: 'Power exits through a small, hard surface (knuckles, elbow, etc.).' },
      ],
      metrics: [
        { label: 'Power source', value: 'Ground + hips' },
        { label: 'Transfer', value: 'Kinetic chain' },
        { label: 'Delivery', value: 'Small contact surface' },
        { label: 'Key principle', value: 'Whole-body skill' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Striking is not an arm skill',
        caption:
          'The arm is the delivery mechanism, not the power source. Power comes from the ground through the kinetic chain.',
        labels: [
          'Rear leg pushes the ground',
          'Hips rotate to transfer force',
          'Torso and arm follow',
          'Small surface delivers power',
        ],
      },
    ],

    sections: [
      {
        title: 'The kinetic chain',
        content:
          'A powerful strike is not made by the arm alone. It is a chain of connected movements: the rear leg pushes against the ground, that force travels up the leg to the hips, the hips rotate to transfer it into the torso, and the torso whips the arm forward. Each link must be connected and properly timed for maximum power.',
      },
      {
        title: 'Why the hips are the engine',
        content:
          'The hips sit at the center of the body and can rotate powerfully. When the hips turn, they drag the torso and shoulders with them, adding rotational force to the linear extension of the arm. A strike with hip rotation delivers far more force than an arm-only punch, even if the arm moves slower.',
      },
      {
        title: 'Contact surfaces',
        content:
          'Different strikes use different contact surfaces: the first two knuckles for punches, the elbow tip for close-range strikes, the knife-hand edge for chops. The surface should be small and hard to concentrate force into a small area. The surface must be properly aligned with the wrist and arm to avoid injury.',
      },
    ],

    principles: [
      'Power comes from the ground through the kinetic chain, not from the arm.',
      'Hip rotation is the primary engine of striking power.',
      'The contact surface should be small, hard and properly aligned.',
      'Tension kills power; relaxation allows speed and whip.',
    ],

    mistakes: [
      { title: 'Arm-only striking', explanation: 'Pushing with just the arm muscles limits power dramatically. Connect the rear leg, hips and torso to the strike.' },
      { title: 'Locked joints at impact', explanation: 'Locking the elbow or wrist at full extension transfers shock back into your joints. Keep slight bend and structure at contact.' },
      { title: 'Shoulder tension', explanation: 'Raised, tense shoulders slow the arm and absorb power. Keep shoulders relaxed and down during the strike.' },
      { title: 'Pushing instead of striking', explanation: 'Pushing through the target wastes energy. A strike should penetrate and retract cleanly, not linger.' },
    ],

    practice: [
      'Stand in front stance and place your rear hand on your hip.',
      'Feel the rear foot pushing into the ground.',
      'Rotate your hips forward while keeping the hand on your hip.',
      'Notice how the hip rotation wants to drag your shoulder forward.',
      'Add the arm extension, keeping the shoulder relaxed.',
      'Repeat slowly, feeling the chain: ground, hip, torso, arm.',
    ],

    reflection:
      'When you extend your arm, can you feel the force starting from your rear foot, or does it feel like your arm is working alone?',

    safety:
      'Practice strikes slowly and without full power until the kinetic chain pattern is smooth. Never strike hard objects without proper conditioning and supervision.',

    quiz: [
      {
        question: 'Where does striking power primarily come from?',
        options: [
          'The arm muscles alone',
          'The ground through the kinetic chain',
          'The shoulders and chest',
          'The speed of the fist',
        ],
        answer: 1,
        explanation:
          'Power travels from the ground through the legs, hips and torso before exiting through the striking surface. The arm is the delivery mechanism, not the source.',
      },
      {
        question: 'Why is hip rotation important for striking?',
        options: [
          'It looks more powerful',
          'It transfers leg force into rotational torso force',
          'It only helps with kicks',
          'It slows the strike down',
        ],
        answer: 1,
        explanation:
          'The hips rotate to transfer the push from the rear leg into rotational force that whips the torso and arm forward.',
      },
    ],

    practiceEngine: {
      type: 'interval',
      label: 'Power Intervals',
      workTime: 30,
      restTime: 15,
      totalIntervals: 4,
    },
    mastery: [
      'Explain the kinetic chain from ground to contact surface.',
      'Feel and describe hip rotation during a slow strike.',
      'Identify the contact surface for at least three different strikes.',
      'Recognize and correct the four common power errors.',
    ],
  },
  'karate-strikes-straight-punch': {
    id: 'karate-strikes-straight-punch',
    subject: 'Karate',
    title: 'Straight Punch (Choku-Zuki)',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn the straight punch: the most basic karate strike, built on proper chamber, hip rotation, kime (focus) at impact, and hikite (pullback).',

    objectives: [
      'Understand the structure of a proper straight punch',
      'Chamber the fist correctly at the hip',
      'Extend with hip rotation and proper fist alignment',
      'Achieve kime (focus) at the moment of impact',
      'Execute proper hikite (pullback) for power and readiness',
    ],

    positionDiagram: {
      title: 'Straight punch — choku-zuki',
      description:
        'The straight punch extends from the hip chamber with hip rotation, making contact with the first two knuckles, and the non-punching hand pulls back to the hip.',
      torsoAngle: 0,
      frontArmAngle: -20,
      rearArmAngle: 35,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'The punching fist starts chambered at the hip, extends straight with the palm down, and makes contact with the first two knuckles. The other fist pulls back to the hip simultaneously.',

  },
      annotations: [
        { number: '01', label: 'Chamber at hip', detail: 'The fist starts palm-up at the hip, elbow back.' },
        { number: '02', label: 'Hip rotation', detail: 'The hips rotate forward as the fist extends.' },
        { number: '03', label: 'First two knuckles', detail: 'Contact is made with the first two knuckles, wrist straight.' },
        { number: '04', label: 'Hikite (pullback)', detail: 'The non-punching hand pulls back to the hip, palm-up.' },
      ],
      metrics: [
        { label: 'Chamber', value: 'Fist at hip, palm up' },
        { label: 'Extension', value: 'Straight line, palm down' },
        { label: 'Contact', value: 'First two knuckles' },
        { label: 'Pullback', value: 'Other hand to hip' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Chamber, extend, pull back',
        caption:
          'The straight punch is a complete cycle: chambered fist, extension with hip rotation, contact, and simultaneous pullback of the other hand.',
        labels: [
          'Fist chambered at hip',
          'Extension with hip rotation',
          'First two knuckles contact',
          'Opposite hand pulls back',
        ],
      },
    ],

    sections: [
      {
        title: 'Chamber: where the punch starts',
        content:
          'The punch begins with the fist chambered at the hip, palm facing up, elbow pulled back. This position stores potential energy and prepares the arm for a straight-line extension. The chamber should be tight against the body, not floating away from the ribs.',
      },
      {
        title: 'Extension with rotation',
        content:
          'As the fist extends forward, the palm rotates from up to down, and the hips rotate forward simultaneously. This rotation adds power from the kinetic chain. The fist travels in a straight line from the hip to the target, not in an arc. The elbow stays down and close to the body during extension.',
      },
      {
        title: 'Kime and hikite',
        content:
          'Kime (focus) is the momentary tension at the instant of contact: the whole body tightens for a split second to transfer maximum force, then immediately relaxes. Simultaneously, the non-punching hand pulls back sharply to the hip (hikite), which helps generate power through the principle of equal and opposite reaction and prepares that hand for the next technique.',
      },
    ],

    principles: [
      'Chamber tight at the hip, palm up, elbow back.',
      'Extend straight with simultaneous hip rotation and palm rotation.',
      'Contact with the first two knuckles, wrist straight and strong.',
      'Hikite (pullback) the other hand sharply to the hip.',
    ],

    mistakes: [
      { title: 'Wide, looping punch', explanation: 'Swinging the fist in an arc instead of a straight line makes the punch slower and easier to block. Keep the fist traveling straight from hip to target.' },
      { title: 'No hip rotation', explanation: 'Punching with just the arm loses most of the power. Rotate the hips forward as the fist extends.' },
      { title: 'Wrist bent at contact', explanation: 'A bent wrist transfers force into the wrist joint instead of the target, risking injury. Keep the wrist straight and strong at impact.' },
      { title: 'Lazy pullback', explanation: 'If the non-punching hand does not pull back sharply, power is lost and the hand is not ready for the next technique. Hikite should be as intentional as the punch itself.' },
    ],

    practice: [
      'Stand in front stance with both fists chambered at the hips, palms up.',
      'Slowly extend the right fist forward while rotating the palm down and the hips forward.',
      'At full extension, tighten the whole body for one second (kime), then relax.',
      'Simultaneously pull the left fist back to the hip (hikite), palm up.',
      'Repeat with the left hand, alternating for ten repetitions.',
      'Focus on straight-line extension, hip rotation, and sharp pullback.',
    ],

    reflection:
      'During your last set of punches, did you feel the hip rotation adding power, or did the arm feel like it was working alone?',

    safety:
      'Practice punches in the air or on proper striking targets only. Never punch hard surfaces without proper conditioning. Wrist alignment is critical to avoid injury.',

    quiz: [
      {
        question: 'What is the correct contact surface for a straight punch?',
        options: [
          'The whole fist',
          'The first two knuckles',
          'The palm',
          'The back of the hand',
        ],
        answer: 1,
        explanation:
          'The first two knuckles (index and middle finger knuckles) are the strongest and most aligned with the wrist, making them the correct contact surface.',
      },
      {
        question: 'What is hikite and why is it important?',
        options: [
          'The chamber position before the punch',
          'The pullback of the non-punching hand, which adds power and readiness',
          'The rotation of the hips',
          'The extension of the elbow',
        ],
        answer: 1,
        explanation:
          'Hikite is the sharp pullback of the non-punching hand to the hip. It adds power through equal-and-opposite reaction and prepares that hand for the next technique.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Punch Reps',
      targetReps: 20,
    },
    mastery: [
      'Execute a straight punch with proper chamber, extension, kime and hikite.',
      'Feel and demonstrate hip rotation during the punch.',
      'Make contact with the first two knuckles consistently.',
      'Identify and correct the four common punch errors.',
    ],
        liveApplication: {
      scenarios: [
        {
          setup: 'The partner closes to punching range and throws a straight punch.',
          action: 'You chamber your fist at the hip, extend with hip rotation, make contact with the first two knuckles, and immediately pull the other fist back (hikite).',
          why: 'The chamber stores potential energy, hip rotation adds power from the kinetic chain, and hikite creates equal-and-opposite force that stabilizes your structure and adds speed.',
        },
        {
          setup: 'You want to create an opening for a front kick.',
          action: 'You throw a fast, light straight punch to the face to draw a high block, then immediately follow with a front kick to the midsection.',
          why: 'The punch forces the partner to raise their guard, exposing the lower target. The kick travels the opened line before they can recover.',
        },
        {
          setup: 'The partner throws a straight punch at you.',
          action: 'You perform a downward block to redirect the punch outward, then immediately counter with your own straight punch through the opening created.',
          why: 'The block angles the attack away and places you inside their guard, so your counter travels an undefended line to the target.',
        },
      ],
      perspectives: [
        {
          role: 'Using it',
          detail: 'The straight punch is your most versatile tool: use it light and fast to create openings, heavy and committed as a counter, or sharp and short to stop a rush. Adjust intensity and commitment to match the purpose.',
        },
        {
          role: 'Facing it',
          detail: 'A straight punch coming at you can be deflected (downward or rising block), evaded (angle off line), or caught in the chamber (crash in before it extends). Your response depends on timing and range.',
        },
      ],
      adaptation: {
        cues: [
          'Shoulder drops slightly before the punch extends',
          'Weight shifts to the rear leg before a power punch',
          'The chambered fist pulls back before extension',
        ],
        adjustments: [
          { if: 'They punch fast and committed', then: 'Angle off line and let their momentum carry them past, then counter from the side.' },
          { if: 'They feint high then attack low', then: 'Watch the center mass and hips, not the hands, to read the real intent.' },
          { if: 'They retract slowly after punching', then: 'Crash in immediately while their guard is still recovering from the extension.' },
        ],
        learning: 'After each exchange where a straight punch was used (by you or them), name one cue you read correctly or missed, and one adjustment it teaches for the next exchange.',
      },
    },
  },
  'karate-strikes-elbow': {
    id: 'karate-strikes-elbow',
    subject: 'Karate',
    title: 'Basic Elbow Mechanics',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn the elbow strike: a close-range weapon that uses body rotation and the hard point of the elbow to deliver concentrated force.',

    objectives: [
      'Understand when and why the elbow is used',
      'Position the arm correctly for an elbow strike',
      'Generate power through body rotation',
      'Recognize the four most common elbow strike errors',
      'Execute a horizontal elbow strike with proper structure',
    ],

    positionDiagram: {
      title: 'Elbow strike — empi-uchi',
      description:
        'The elbow strike uses the hard point of the elbow, driven by body rotation, to deliver concentrated force at close range.',
      torsoAngle: 0,
      frontArmAngle: -30,
      rearArmAngle: 10,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'The striking arm is bent with the elbow pointing toward the target, the fist near the shoulder. Body rotation drives the elbow forward like a battering ram.',
      },
      annotations: [
        { number: '01', label: 'Elbow point', detail: 'The hard point of the elbow is the contact surface.' },
        { number: '02', label: 'Bent arm', detail: 'The arm stays bent, fist near the shoulder.' },
        { number: '03', label: 'Body rotation', detail: 'The whole torso rotates to drive the elbow forward.' },
        { number: '04', label: 'Close range', detail: 'Elbows are most effective at very close distance.' },
      ],
      metrics: [
        { label: 'Contact', value: 'Elbow point' },
        { label: 'Arm', value: 'Bent, fist near shoulder' },
        { label: 'Power', value: 'Body rotation' },
        { label: 'Range', value: 'Very close' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Close-range power',
        caption:
          'The elbow strike is a short, explosive weapon that uses body rotation to drive the elbow point into the target at close range.',
        labels: [
          'Elbow point as contact surface',
          'Bent arm structure',
          'Whole-body rotation',
          'Effective at close range',
        ],
      },
    ],

    sections: [
      {
        title: 'When the elbow is the right weapon',
        content:
          'The elbow is most effective at very close range where punches cannot extend fully. It is a hard, bony surface that can deliver concentrated force without the risk of wrist injury that punching carries. Elbows are used when the opponent is inside punching range, in clinch situations, or as part of close-quarters combinations.',
      },
      {
        title: 'Structure and rotation',
        content:
          'The striking arm is bent with the fist near the shoulder and the elbow pointing toward the target. Power comes from rotating the whole body forward, driving the elbow like a battering ram. The non-striking hand can chamber at the hip or guard the head. The rotation should come from the hips and torso, not just the shoulder.',
      },
      {
        title: 'Types of elbow strikes',
        content:
          'The horizontal elbow (yoko-empi) travels sideways and is the most common beginner variation. Other types include the rising elbow (age-empi), downward elbow (otoshi-empi), and rearward elbow (ushiro-empi). All use the same principle of body rotation driving the elbow point.',
      },
    ],

    principles: [
      'The elbow point is the contact surface, not the forearm.',
      'The arm stays bent with the fist near the shoulder.',
      'Power comes from whole-body rotation, not shoulder muscles.',
      'Elbows are close-range weapons; distance matters.',
    ],

    mistakes: [
      { title: 'Straightening the arm', explanation: 'If the arm straightens, you lose the elbow point and risk elbow joint injury. Keep the arm bent throughout the strike.' },
      { title: 'Shoulder-only rotation', explanation: 'Just swinging the shoulder without hip and torso rotation loses most of the power. Rotate the whole body forward.' },
      { title: 'Using the forearm instead of the point', explanation: 'The forearm is softer and less concentrated. Strike with the hard point of the elbow itself.' },
      { title: 'Trying to use elbows at long range', explanation: 'Elbows are ineffective at distance. Step in close before executing an elbow strike.' },
    ],

    practice: [
      'Stand in front stance with the right fist near your right shoulder, elbow pointing forward.',
      'Rotate your hips and torso sharply to the right, driving the right elbow forward.',
      'Keep the arm bent and the fist near the shoulder throughout.',
      'Feel the whole body rotating, not just the shoulder.',
      'Repeat ten times on the right side, then ten times on the left.',
      'Practice stepping in close before executing the elbow strike.',
    ],

    reflection:
      'During your last set of elbow strikes, did you feel the whole torso rotating, or was it mostly just the shoulder swinging?',

    safety:
      'Practice elbow strikes in the air or on proper striking targets only. Never strike hard surfaces without proper conditioning. Keep the arm bent to avoid elbow joint stress.',

    quiz: [
      {
        question: 'What is the correct contact surface for an elbow strike?',
        options: [
          'The forearm',
          'The elbow point',
          'The fist',
          'The shoulder',
        ],
        answer: 1,
        explanation:
          'The hard point of the elbow is the contact surface. The forearm is softer and less concentrated.',
      },
      {
        question: 'Where does the power for an elbow strike come from?',
        options: [
          'The shoulder muscles alone',
          'Whole-body rotation from hips and torso',
          'The speed of the arm',
          'The weight of the fist',
        ],
        answer: 1,
        explanation:
          'Power comes from rotating the whole body forward, driving the elbow like a battering ram. Shoulder-only rotation loses most of the force.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Elbow Reps',
      targetReps: 20,
    },
    mastery: [
      'Execute a horizontal elbow strike with proper bent-arm structure.',
      'Generate power through whole-body rotation, not shoulder muscles.',
      'Strike with the elbow point, not the forearm.',
      'Identify and correct the four common elbow strike errors.',
    ],
  },

  'karate-blocks-why': {
    id: 'karate-blocks-why',
    subject: 'Karate',
    title: 'Why Blocking Works',
    level: 'Beginner',
    duration: '10 min',

    description:
      'Learn the principles behind karate blocks: redirecting force instead of meeting it head-on, using structure and timing to protect yourself.',

    objectives: [
      'Understand why blocks redirect rather than stop force',
      'Recognize the role of structure and angles',
      'Understand timing: block before the attack arrives',
      'Recognize the four most common blocking errors',
      'Identify the different types of blocks and when to use them',
    ],

    positionDiagram: {
      title: 'Blocking principles',
      description:
        'A good block redirects incoming force using structure, angles and timing, rather than trying to stop it with brute strength.',
      torsoAngle: 0,
      frontArmAngle: -25,
      rearArmAngle: 15,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'The blocking arm creates an angled surface that redirects incoming force sideways. The body structure and stance provide the foundation for the block.',
      },
      annotations: [
        { number: '01', label: 'Redirect, not stop', detail: 'Blocks angle incoming force away, not straight against it.' },
        { number: '02', label: 'Structure first', detail: 'The stance and body alignment provide the foundation.' },
        { number: '03', label: 'Timing', detail: 'The block must be in place before the attack arrives.' },
        { number: '04', label: 'Counter-ready', detail: 'After blocking, you should be positioned to counter.' },
      ],
      metrics: [
        { label: 'Principle', value: 'Redirect force' },
        { label: 'Foundation', value: 'Stance + structure' },
        { label: 'Timing', value: 'Before impact' },
        { label: 'Follow-up', value: 'Counter-ready' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Redirecting force',
        caption:
          'A block is not a wall; it is an angled surface that redirects incoming force away from your center line.',
        labels: [
          'Angled surface redirects',
          'Structure provides foundation',
          'Timing before arrival',
          'Position for counter',
        ],
      },
    ],

    sections: [
      {
        title: 'Redirecting, not stopping',
        content:
          'A common misconception is that blocks try to stop attacks with brute force. In reality, karate blocks redirect incoming force sideways or upward, using angles and structure to move the attack away from your center line. This requires much less strength than trying to stop the force head-on.',
      },
      {
        title: 'Structure and foundation',
        content:
          'A block is only as strong as the stance and body structure behind it. The blocking arm creates the angled surface, but the power comes from the legs driving into the ground and the hips and torso providing a stable base. Without proper structure, even a correctly positioned arm will collapse under force.',
      },
      {
        title: 'Timing is everything',
        content:
          'A block must be in position before the attack arrives. This requires reading the opponent\'s movement early and moving your arm to intercept. Late blocks meet full force; early blocks redirect the attack while it still has room to travel. Timing is trained through repetition and partner drills.',
      },
    ],

    principles: [
      'Blocks redirect force using angles, not brute strength.',
      'Structure (stance and alignment) is the foundation of every block.',
      'Timing: the block must be in place before the attack arrives.',
      'After blocking, you should be positioned to counter immediately.',
    ],

    mistakes: [
      { title: 'Meeting force head-on', explanation: 'Trying to stop an attack straight-on requires immense strength and often fails. Angle the block to redirect force sideways.' },
      { title: 'Blocking with just the arm', explanation: 'Without leg and hip structure behind it, the arm will collapse. Drive from the ground through the hips.' },
      { title: 'Late timing', explanation: 'Blocking after the attack has arrived means you absorb full force. Read early and move to intercept.' },
      { title: 'Blocking and freezing', explanation: 'If you block but do not immediately counter or reposition, you lose the initiative. Every block should set up a response.' },
    ],

    practice: [
      'Stand in front stance with both hands in guard position.',
      'Practice the motion of a downward block: sweep the arm down and across the body.',
      'Feel the legs driving into the ground and the hips rotating.',
      'Repeat slowly, focusing on structure and angles.',
      'Have a partner throw slow, controlled punches for you to block.',
      'After each block, immediately execute a counter-technique.',
    ],

    reflection:
      'During your last blocking practice, did you feel the block redirecting force, or did it feel like you were trying to stop it with strength?',

    safety:
      'Practice blocking with controlled, cooperative partners. Start slowly and increase speed only when the pattern is smooth. Never block full-power attacks without proper conditioning and supervision.',

    quiz: [
      {
        question: 'What is the primary principle of karate blocking?',
        options: [
          'Stop the attack with maximum strength',
          'Redirect the attack using angles and structure',
          'Avoid the attack entirely',
          'Absorb the attack and counter',
        ],
        answer: 1,
        explanation:
          'Karate blocks redirect incoming force sideways or upward using angles and body structure, rather than trying to stop it head-on.',
      },
      {
        question: 'What provides the foundation for a strong block?',
        options: [
          'Arm strength alone',
          'Stance and body structure',
          'Speed of the arm',
          'Flexibility of the shoulder',
        ],
        answer: 1,
        explanation:
          'The stance, legs and body alignment provide the structural foundation. Without it, even a correctly positioned arm will collapse under force.',
      },
    ],

    mastery: [
      'Explain why blocks redirect rather than stop force.',
      'Demonstrate proper structure and foundation in a block.',
      'Execute blocks with correct timing (before the attack arrives).',
      'Identify and correct the four common blocking errors.',
    ],
  },
  'karate-blocks-downward': {
    id: 'karate-blocks-downward',
    subject: 'Karate',
    title: 'Basic Downward Block (Gedan Barai)',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn the downward block: a fundamental technique that sweeps incoming attacks away from the lower body using a circular arm motion and body structure.',

    objectives: [
      'Understand when and why the downward block is used',
      'Execute the proper circular arm motion',
      'Use hip rotation and structure to generate power',
      'Recognize the four most common downward block errors',
      'Block low kicks and strikes to the midsection',
    ],

    positionDiagram: {
      title: 'Downward block — gedan barai',
      description:
        'The downward block sweeps the arm in a circular motion across the body, using hip rotation and structure to redirect low attacks away from the center.',
      torsoAngle: 0,
      frontArmAngle: -45,
      rearArmAngle: 20,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'The blocking arm starts high near the opposite shoulder, then sweeps down and across the body in a circular motion, ending with the fist near the hip.',
      },
      annotations: [
        { number: '01', label: 'Start high', detail: 'The fist starts near the opposite shoulder, palm facing you.' },
        { number: '02', label: 'Circular sweep', detail: 'The arm sweeps down and across in a circular motion.' },
        { number: '03', label: 'Hip rotation', detail: 'The hips rotate forward to add power to the block.' },
        { number: '04', label: 'End position', detail: 'The fist ends near the same-side hip, palm down.' },
      ],
      metrics: [
        { label: 'Start', value: 'Opposite shoulder' },
        { label: 'Motion', value: 'Circular sweep' },
        { label: 'Power', value: 'Hip rotation + structure' },
        { label: 'End', value: 'Same-side hip' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Sweeping the attack away',
        caption:
          'The downward block uses a circular arm motion to sweep low attacks away from the body, redirecting them to the outside.',
        labels: [
          'Start at opposite shoulder',
          'Circular sweeping motion',
          'Hip rotation adds power',
          'End at same-side hip',
        ],
      },
    ],

    sections: [
      {
        title: 'When to use the downward block',
        content:
          'The downward block (gedan barai) is used to deflect low kicks, knee strikes, and punches or strikes aimed at the midsection or groin. It is one of the most fundamental blocks in karate and appears in many kata and combinations.',
      },
      {
        title: 'The circular motion',
        content:
          'The block starts with the fist chambered high near the opposite shoulder, palm facing toward you. The arm then sweeps down and across the body in a circular arc, ending with the fist near the same-side hip, palm facing down. This circular path creates an angled surface that redirects incoming force to the outside.',
      },
      {
        title: 'Adding power with structure',
        content:
          'As the arm sweeps down, the hips rotate forward and the legs drive into the ground. This adds whole-body power to the block, making it much stronger than arm movement alone. The non-blocking hand pulls back to the hip (hikite) simultaneously, which helps generate power through equal-and-opposite reaction.',
      },
    ],

    principles: [
      'Start the block high near the opposite shoulder.',
      'Sweep down in a circular arc, not a straight line.',
      'Rotate the hips forward to add power.',
      'End with the fist near the same-side hip, palm down.',
    ],

    mistakes: [
      { title: 'Straight-line block', explanation: 'Sweeping the arm straight down instead of in a circular arc loses the redirecting angle. Use a circular path.' },
      { title: 'No hip rotation', explanation: 'Blocking with just the arm loses most of the power. Rotate the hips forward as the arm sweeps down.' },
      { title: 'Finishing too wide', explanation: 'If the fist ends far outside the hip, the block covers less area. End with the fist close to the hip.' },
      { title: 'Lazy hikite', explanation: 'If the non-blocking hand does not pull back sharply, power is lost. Hikite should be as intentional as the block itself.' },
    ],

    practice: [
      'Stand in front stance with both fists chambered at the hips.',
      'Bring the right fist up to the left shoulder, palm facing you.',
      'Sweep the right arm down and across the body in a circular arc.',
      'Rotate the hips forward as the arm sweeps.',
      'End with the right fist near the right hip, palm down.',
      'Simultaneously pull the left fist back to the left hip (hikite).',
      'Repeat ten times, then switch sides.',
    ],

    reflection:
      'During your last set of blocks, did you feel the hip rotation adding power, or did the arm feel like it was working alone?',

    safety:
      'Practice blocks slowly and with controlled, cooperative partners. The circular motion should be smooth, not jerky. Wrist alignment is important to avoid strain.',

    quiz: [
      {
        question: 'Where does the downward block start?',
        options: [
          'At the same-side hip',
          'Near the opposite shoulder',
          'Straight out in front',
          'Behind the back',
        ],
        answer: 1,
        explanation:
          'The downward block starts with the fist chambered high near the opposite shoulder, then sweeps down and across the body.',
      },
      {
        question: 'What type of motion does the downward block use?',
        options: [
          'A straight line up and down',
          'A circular sweeping arc',
          'A figure-eight pattern',
          'A zigzag motion',
        ],
        answer: 1,
        explanation:
          'The downward block uses a circular arc that sweeps down and across the body, creating an angled surface to redirect incoming force.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Downward Block Reps',
      targetReps: 20,
    },
    mastery: [
      'Execute a downward block with proper circular motion.',
      'Use hip rotation to generate power in the block.',
      'Start high and end at the same-side hip consistently.',
      'Identify and correct the four common downward block errors.',
    ],
  },
  'karate-blocks-rising': {
    id: 'karate-blocks-rising',
    subject: 'Karate',
    title: 'Basic Rising Block (Age Uke)',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn the rising block: a fundamental technique that deflects downward strikes and overhead attacks by sweeping the arm upward with structure and rotation.',

    objectives: [
      'Understand when and why the rising block is used',
      'Execute the proper upward sweeping motion',
      'Use hip rotation and structure to generate power',
      'Recognize the four most common rising block errors',
      'Block overhead strikes and downward attacks',
    ],

    positionDiagram: {
      title: 'Rising block — age uke',
      description:
        'The rising block sweeps the arm upward in an arc, using hip rotation and structure to redirect overhead attacks away from the head.',
      torsoAngle: 0,
      frontArmAngle: -60,
      rearArmAngle: 15,
      frontLegAngle: -22,
      rearLegAngle: 22,
      weightDistribution: { front: 60, rear: 40 },
      feet: {
        front: { x: -18, y: -70, angle: 0 },
        rear: { x: 22, y: 55, angle: 45 },
        note:
          'The blocking arm starts low near the opposite hip, then sweeps up and across the body in an arc, ending with the fist above the forehead.',
      },
      annotations: [
        { number: '01', label: 'Start low', detail: 'The fist starts near the opposite hip, palm facing down.' },
        { number: '02', label: 'Upward sweep', detail: 'The arm sweeps up and across in an arc.' },
        { number: '03', label: 'Hip rotation', detail: 'The hips rotate forward to add power to the block.' },
        { number: '04', label: 'End position', detail: 'The fist ends above the forehead, palm facing away.' },
      ],
      metrics: [
        { label: 'Start', value: 'Opposite hip' },
        { label: 'Motion', value: 'Upward arc' },
        { label: 'Power', value: 'Hip rotation + structure' },
        { label: 'End', value: 'Above forehead' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Deflecting downward attacks',
        caption:
          'The rising block uses an upward sweeping motion to deflect overhead strikes and downward attacks away from the head.',
        labels: [
          'Start at opposite hip',
          'Upward sweeping arc',
          'Hip rotation adds power',
          'End above forehead',
        ],
      },
    ],

    sections: [
      {
        title: 'When to use the rising block',
        content:
          'The rising block (age uke) is used to deflect overhead strikes, hammer fists, downward knife attacks, and any technique coming from above. It protects the head and upper body from downward-angled attacks.',
      },
      {
        title: 'The upward motion',
        content:
          'The block starts with the fist chambered low near the opposite hip, palm facing down. The arm then sweeps up and across the body in an arc, ending with the fist above the forehead on the same side, palm facing away. This creates an angled surface that redirects downward force upward and to the side.',
      },
      {
        title: 'Structure and timing',
        content:
          'As the arm sweeps up, the hips rotate forward and the legs drive into the ground. The non-blocking hand pulls back to the hip simultaneously. The block must be executed before the attack arrives, so timing and reading the opponent\'s movement are crucial.',
      },
    ],

    principles: [
      'Start the block low near the opposite hip.',
      'Sweep up in an arc, ending above the forehead.',
      'Rotate the hips forward to add power.',
      'Time the block to arrive before the attack.',
    ],

    mistakes: [
      { title: 'Straight-line block', explanation: 'Sweeping the arm straight up instead of in an arc loses the redirecting angle. Use an upward arc that crosses the body.' },
      { title: 'No hip rotation', explanation: 'Blocking with just the arm loses most of the power. Rotate the hips forward as the arm sweeps up.' },
      { title: 'Finishing too low', explanation: 'If the fist ends at eye level instead of above the forehead, the head is still exposed. End high enough to protect the entire head.' },
      { title: 'Late timing', explanation: 'If the block arrives after the attack, you absorb full force. Read the attack early and move to intercept.' },
    ],

    practice: [
      'Stand in front stance with both fists chambered at the hips.',
      'Bring the right fist down to the left hip, palm facing down.',
      'Sweep the right arm up and across the body in an arc.',
      'Rotate the hips forward as the arm sweeps.',
      'End with the right fist above the right side of the forehead, palm facing away.',
      'Simultaneously pull the left fist back to the left hip (hikite).',
      'Repeat ten times, then switch sides.',
    ],

    reflection:
      'During your last set of blocks, did you feel the block arriving before an imaginary attack, or did it feel late?',

    safety:
      'Practice rising blocks slowly and with controlled, cooperative partners. The upward motion should be smooth, not jerky. Be careful not to hyperextend the elbow at full extension.',

    quiz: [
      {
        question: 'Where does the rising block start?',
        options: [
          'Above the head',
          'Near the opposite hip',
          'Straight out in front',
          'At the same-side shoulder',
        ],
        answer: 1,
        explanation:
          'The rising block starts with the fist chambered low near the opposite hip, then sweeps up and across the body.',
      },
      {
        question: 'Where should the rising block end?',
        options: [
          'At eye level',
          'At the same-side hip',
          'Above the forehead',
          'Behind the head',
        ],
        answer: 2,
        explanation:
          'The rising block ends with the fist above the forehead, high enough to protect the entire head from overhead strikes.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Rising Block Reps',
      targetReps: 20,
    },
    mastery: [
      'Execute a rising block with proper upward arc motion.',
      'Use hip rotation to generate power in the block.',
      'End with the fist above the forehead consistently.',
      'Identify and correct the four common rising block errors.',
    ],
  },

  'karate-kicks-mechanics': {
    id: 'karate-kicks-mechanics',
    subject: 'Karate',
    title: 'Understanding Kicking Mechanics',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn how karate kicks generate power: the chamber, extension, contact surface, and retraction phases, and why balance is the foundation of every kick.',

    objectives: [
      'Understand the four phases of every kick',
      'Recognize why balance on the support leg is essential',
      'Understand the role of hip rotation in kicking power',
      'Recognize the four most common kicking errors',
      'Identify contact surfaces for different kicks',
    ],

    positionDiagram: {
      title: 'Kicking mechanics',
      description:
        'Every kick has four phases: chamber, extension, contact, and retraction. Balance on the support leg is the foundation throughout all phases.',
      torsoAngle: 0,
      frontArmAngle: -15,
      rearArmAngle: 20,
      frontLegAngle: -10,
      rearLegAngle: 25,
      weightDistribution: { front: 10, rear: 90 },
      feet: {
        front: { x: -50, y: 0, angle: 0 },
        rear: { x: 20, y: 40, angle: 15 },
        note:
          'During a kick, nearly all weight rests on the support leg. The kicking leg moves through chamber, extension, contact and retraction while the body stays balanced over the support foot.',
      },
      annotations: [
        { number: '01', label: 'Support leg balance', detail: 'Nearly all weight rests on the support leg during the kick.' },
        { number: '02', label: 'Chamber position', detail: 'The kicking leg lifts and bends, preparing to extend.' },
        { number: '03', label: 'Hip rotation', detail: 'The hips rotate to add power and extend the kick further.' },
        { number: '04', label: 'Retraction', detail: 'The leg retracts along the same path before lowering.' },
      ],
      metrics: [
        { label: 'Weight', value: '90% on support leg' },
        { label: 'Phases', value: 'Chamber, extend, contact, retract' },
        { label: 'Power source', value: 'Hip rotation + extension' },
        { label: 'Foundation', value: 'Balance on support leg' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'The four phases of a kick',
        caption:
          'Every kick follows the same pattern: chamber, extend to the target, make contact, and retract before lowering the foot.',
        labels: [
          'Chamber: lift and bend the kicking leg',
          'Extension: drive the foot toward the target',
          'Contact: strike with the correct surface',
          'Retraction: pull back along the same path',
        ],
      },
    ],

    sections: [
      {
        title: 'Balance is the foundation',
        content:
          'During any kick, nearly all of your weight rests on the support leg. If you cannot balance on one leg, you cannot kick effectively. Kicking power and accuracy both depend on maintaining a stable base on the support foot throughout the entire technique.',
      },
      {
        title: 'The four phases',
        content:
          'Every kick follows the same sequence: first, the kicking leg lifts into a chambered position with the knee bent; second, the leg extends toward the target; third, contact is made with the appropriate surface (ball of foot, heel, etc.); fourth, the leg retracts back along the same path before lowering to the ground. Skipping retraction and just dropping the leg loses control and power.',
      },
      {
        title: 'Hip rotation adds power',
        content:
          'Just like with punches, hip rotation adds significant power to kicks. As the kicking leg extends, the hips rotate forward, driving the leg further and adding rotational force. The support foot may pivot slightly to allow this rotation.',
      },
    ],

    principles: [
      'Balance on the support leg is the foundation of every kick.',
      'Every kick has four phases: chamber, extend, contact, retract.',
      'Hip rotation adds power to the kick.',
      'Retraction must be as controlled as extension.',
    ],

    mistakes: [
      { title: 'Poor balance', explanation: 'If you wobble on the support leg, the kick will be weak and inaccurate. Practice standing on one leg until balance is solid.' },
      { title: 'No chamber position', explanation: 'Swinging the leg up from the ground instead of lifting into a chamber loses power and control. Always chamber first.' },
      { title: 'No retraction', explanation: 'Just dropping the leg after contact loses control and telegraphs your next move. Retract along the same path before lowering.' },
      { title: 'Leaning backward', explanation: 'Leaning the torso backward to compensate for poor balance makes the kick weak. Stay upright over the support leg.' },
    ],

    practice: [
      'Stand in a natural ready position and lift your right knee into a chamber.',
      'Hold the chamber for five seconds, balancing on your left leg.',
      'Slowly extend the right leg forward, then retract it back to chamber.',
      'Lower the foot slowly back to the ground.',
      'Repeat ten times on each leg, focusing on balance throughout.',
      'Add hip rotation to the extension phase for more power.',
    ],

    reflection:
      'During your practice, was there a moment where you lost balance on the support leg? What was happening with your upper body at that moment?',

    safety:
      'Practice kicks slowly and with control. Do not kick hard targets without proper conditioning. Balance work should be done on a non-slip surface.',

    quiz: [
      {
        question: 'Where does most of your weight rest during a kick?',
        options: [
          'Evenly on both legs',
          'Mostly on the kicking leg',
          'Nearly all on the support leg',
          'Mostly on the arms',
        ],
        answer: 2,
        explanation:
          'During a kick, nearly all weight (about 90%) rests on the support leg, which must maintain balance throughout the technique.',
      },
      {
        question: 'What are the four phases of a kick?',
        options: [
          'Lift, swing, hit, drop',
          'Chamber, extend, contact, retract',
          'Bend, straighten, strike, lower',
          'Step, kick, return, stand',
        ],
        answer: 1,
        explanation:
          'Every kick follows the sequence: chamber the leg, extend toward the target, make contact, then retract before lowering the foot.',
      },
    ],

    practiceEngine: {
      type: 'interval',
      label: 'Kick Intervals',
      workTime: 30,
      restTime: 15,
      totalIntervals: 4,
    },
    mastery: [
      'Hold a chambered kick position for five seconds with good balance.',
      'Execute the four phases of a kick in sequence.',
      'Demonstrate hip rotation during the extension phase.',
      'Identify and correct the four common kicking errors.',
    ],
  },
  'karate-kicks-front': {
    id: 'karate-kicks-front',
    subject: 'Karate',
    title: 'Front Kick (Mae Geri)',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn the front kick: the most basic karate kick, delivered straight forward using the ball of the foot as the contact surface.',

    objectives: [
      'Understand the structure of a proper front kick',
      'Chamber the leg correctly with the knee lifted',
      'Extend the kick with proper foot position',
      'Make contact with the ball of the foot',
      'Retract and lower with control',
    ],

    positionDiagram: {
      title: 'Front kick — mae geri',
      description:
        'The front kick extends straight forward from a high chamber, making contact with the ball of the foot while the toes are pulled back.',
      torsoAngle: 0,
      frontArmAngle: -10,
      rearArmAngle: 15,
      frontLegAngle: -15,
      rearLegAngle: 30,
      weightDistribution: { front: 10, rear: 90 },
      feet: {
        front: { x: -60, y: -20, angle: 0 },
        rear: { x: 20, y: 40, angle: 15 },
        note:
          'The kicking leg chambers high with the knee bent, then extends forward with the toes pulled back, striking with the ball of the foot. The support leg is slightly bent for balance.',
      },
      annotations: [
        { number: '01', label: 'High chamber', detail: 'The knee lifts high, bending the leg at the knee.' },
        { number: '02', label: 'Toes pulled back', detail: 'The toes are pulled back to expose the ball of the foot.' },
        { number: '03', label: 'Ball of foot contact', detail: 'Contact is made with the ball of the foot, not the toes.' },
        { number: '04', label: 'Controlled retraction', detail: 'The leg retracts along the same path before lowering.' },
      ],
      metrics: [
        { label: 'Chamber', value: 'Knee high, leg bent' },
        { label: 'Extension', value: 'Straight forward' },
        { label: 'Contact', value: 'Ball of foot' },
        { label: 'Retraction', value: 'Same path back' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Chamber, extend, retract',
        caption:
          'The front kick uses a high chamber, straight extension with toes pulled back, and controlled retraction along the same path.',
        labels: [
          'High chamber with knee lifted',
          'Straight extension forward',
          'Ball of foot makes contact',
          'Controlled retraction',
        ],
      },
    ],

    sections: [
      {
        title: 'The chamber position',
        content:
          'The front kick begins with the kicking leg chambered high: the knee lifts toward the chest while the lower leg bends back at the knee. This position stores potential energy and prepares the leg for a powerful straight-line extension. The higher the chamber, the more versatile the kick can be at different heights.',
      },
      {
        title: 'Extension and contact',
        content:
          'From the chamber, the lower leg extends forward in a snapping motion. The toes are pulled back strongly to expose the ball of the foot, which is the contact surface. The ball of the foot is hard and concentrated, making it effective for striking. The support leg stays slightly bent for balance, and the hips rotate forward to add power.',
      },
      {
        title: 'Retraction and recovery',
        content:
          'After contact, the leg retracts back along the same path it came, returning to the chamber position before lowering to the ground. This controlled retraction maintains balance and prepares you for the next technique. Simply dropping the leg after the kick loses control and leaves you vulnerable.',
      },
    ],

    principles: [
      'Chamber high with the knee lifted and leg bent.',
      'Extend straight forward with toes pulled back.',
      'Make contact with the ball of the foot, not the toes.',
      'Retract along the same path before lowering.',
    ],

    mistakes: [
      { title: 'Low chamber', explanation: 'If the knee does not lift high enough, the kick will be weak and lack range. Chamber with the knee high.' },
      { title: 'Toes not pulled back', explanation: 'If the toes are not pulled back, contact is made with the toes, risking injury. Pull the toes back strongly to expose the ball of the foot.' },
      { title: 'Swinging instead of snapping', explanation: 'A swinging kick from the hip loses power and control. Snap the lower leg out from the knee.' },
      { title: 'Dropping the leg', explanation: 'Just dropping the leg after contact loses balance and control. Retract to chamber before lowering.' },
    ],

    practice: [
      'Stand in front stance and shift weight to the rear leg.',
      'Lift the front knee high into a chamber position.',
      'Snap the lower leg forward, pulling the toes back.',
      'Make contact with an imaginary target at waist height.',
      'Retract the leg back to the chamber position.',
      'Lower the foot slowly to the ground.',
      'Repeat ten times, then switch to the other leg.',
    ],

    reflection:
      'During your last set of kicks, did you feel the snap from the knee, or did the whole leg swing from the hip?',

    safety:
      'Practice front kicks in the air or on proper striking targets only. Never kick hard surfaces without proper conditioning. Pull the toes back to avoid toe injuries.',

    quiz: [
      {
        question: 'What is the correct contact surface for a front kick?',
        options: [
          'The toes',
          'The ball of the foot',
          'The heel',
          'The top of the foot',
        ],
        answer: 1,
        explanation:
          'The ball of the foot is the correct contact surface for a front kick. The toes must be pulled back to expose it and avoid injury.',
      },
      {
        question: 'What should happen after contact in a front kick?',
        options: [
          'The leg drops immediately to the ground',
          'The leg retracts back to chamber before lowering',
          'The leg stays extended',
          'The leg swings sideways',
        ],
        answer: 1,
        explanation:
          'After contact, the leg should retract back along the same path to the chamber position before lowering to the ground. This maintains balance and control.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Front Kick Reps',
      targetReps: 20,
    },
    mastery: [
      'Execute a front kick with proper high chamber position.',
      'Make contact with the ball of the foot consistently.',
      'Retract the leg to chamber before lowering.',
      'Identify and correct the four common front kick errors.',
    ],
  },
  'karate-kicks-balance': {
    id: 'karate-kicks-balance',
    subject: 'Karate',
    title: 'Balance During Kicks',
    level: 'Beginner',
    duration: '12 min',

    description:
      'Learn how to maintain balance throughout every kick: proper weight distribution, support leg structure, upper body alignment, and the connection between balance and power.',

    objectives: [
      'Understand how balance affects kick power and accuracy',
      'Maintain proper weight distribution on the support leg',
      'Keep the upper body aligned over the support foot',
      'Recognize the four most common balance errors',
      'Practice kicks with controlled balance throughout',
    ],

    positionDiagram: {
      title: 'Balance during kicks',
      description:
        'Good kicking balance means the center of mass stays over the support foot throughout all phases of the kick.',
      torsoAngle: 0,
      frontArmAngle: -12,
      rearArmAngle: 18,
      frontLegAngle: -12,
      rearLegAngle: 28,
      weightDistribution: { front: 10, rear: 90 },
      feet: {
        front: { x: -55, y: -15, angle: 0 },
        rear: { x: 20, y: 40, angle: 15 },
        note:
          'During a kick, the center of mass must stay over the support foot. The upper body may lean slightly to counterbalance the kicking leg, but should not lean excessively.',
      },
      annotations: [
        { number: '01', label: 'Center over support', detail: 'The center of mass stays over the support foot.' },
        { number: '02', label: 'Support leg structure', detail: 'The support leg is slightly bent, not locked.' },
        { number: '03', label: 'Upper body alignment', detail: 'The torso stays aligned, not leaning excessively.' },
        { number: '04', label: 'Arm position', detail: 'Arms help maintain balance, not just guard.' },
      ],
      metrics: [
        { label: 'Weight', value: '90% on support leg' },
        { label: 'Center', value: 'Over support foot' },
        { label: 'Support leg', value: 'Slightly bent' },
        { label: 'Upper body', value: 'Aligned, not leaning' },
      ],
    },

    visuals: [
      {
        type: 'diagram',
        title: 'Balance is the foundation',
        caption:
          'Without balance on the support leg, kicks lose power, accuracy and control. Balance must be maintained throughout all phases.',
        labels: [
          'Center over support foot',
          'Support leg slightly bent',
          'Upper body aligned',
          'Arms assist balance',
        ],
      },
    ],

    sections: [
      {
        title: 'Why balance matters for kicks',
        content:
          'Balance is the foundation of every kick. If you cannot maintain balance on the support leg, the kick will be weak, inaccurate and slow to recover from. Good balance allows you to generate maximum power through hip rotation, extend the leg fully, and retract with control. Balance and power are not separate concerns — they are the same concern.',
      },
      {
        title: 'Weight distribution and structure',
        content:
          'During a kick, about 90% of your weight rests on the support leg. The support foot should be planted firmly, with the knee slightly bent for shock absorption and balance. Locking the support knee makes balance more difficult and stresses the joint. The weight should be centered over the middle of the support foot, not on the toes or heel.',
      },
      {
        title: 'Upper body and arm position',
        content:
          'The upper body may lean slightly to counterbalance the extended kicking leg, but should not lean excessively backward or sideways. The arms play an active role in maintaining balance: they can be held out slightly to the sides or used in guard position, but should not be rigid or flailing. Relaxed, aware arms help the body stay balanced.',
      },
    ],

    principles: [
      'Keep the center of mass over the support foot throughout the kick.',
      'The support leg should be slightly bent, never locked.',
      'The upper body stays aligned, with only slight counterbalance lean.',
      'Arms actively assist balance, not just guard.',
    ],

    mistakes: [
      { title: 'Locked support knee', explanation: 'Locking the support knee makes balance more difficult and stresses the joint. Keep a slight bend in the support knee.' },
      { title: 'Excessive leaning', explanation: 'Leaning too far backward or sideways to compensate for poor balance makes the kick weak. Stay more upright and improve leg strength instead.' },
      { title: 'Weight on the toes or heel', explanation: 'If weight is not centered over the support foot, balance is compromised. Center the weight over the middle of the foot.' },
      { title: 'Rigid or flailing arms', explanation: 'Arms held too rigid or swinging wildly disrupt balance. Keep arms relaxed and aware, assisting balance naturally.' },
    ],

    practice: [
      'Stand on one leg and hold the position for 30 seconds.',
      'Switch to the other leg and hold for 30 seconds.',
      'From a front stance, lift into a front kick chamber and hold for 5 seconds.',
      'Slowly extend the kick, hold for 3 seconds, then retract slowly.',
      'Lower the foot with control.',
      'Repeat ten times on each leg, focusing on balance throughout.',
    ],

    reflection:
      'During your last set of kicks, was there a moment where you felt unstable? What was happening with your support leg or upper body at that moment?',

    safety:
      'Practice balance work on a non-slip surface. If you feel unsteady, reduce the height or speed of your kicks until balance improves. Support knee alignment is important to avoid injury.',

    quiz: [
      {
        question: 'Where should most of your weight rest during a kick?',
        options: [
          'Evenly on both legs',
          'Mostly on the kicking leg',
          'About 90% on the support leg',
          'Mostly on the arms',
        ],
        answer: 2,
        explanation:
          'During a kick, about 90% of your weight rests on the support leg, which must maintain balance throughout the technique.',
      },
      {
        question: 'What should the support knee do during a kick?',
        options: [
          'Lock straight for stability',
          'Stay slightly bent for balance',
          'Bend completely',
          'Point outward',
        ],
        answer: 1,
        explanation:
          'The support knee should stay slightly bent during a kick. This aids balance, absorbs shock and protects the joint.',
      },
    ],

    practiceEngine: {
      type: 'timed-hold',
      label: 'Chamber Hold',
      initialTime: 20,
    },
    mastery: [
      'Hold a chambered kick position for five seconds with good balance.',
      'Execute kicks with the support knee slightly bent throughout.',
      'Maintain upper body alignment during all phases of the kick.',
      'Identify and correct the four common balance errors.',
    ],
  },

  'karate-combinations-combining': {
    id: 'karate-combinations-combining',
    subject: 'Karate',
    title: 'Combining Techniques',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn why techniques are linked: the first technique creates a reaction, and the second uses that reaction. Build your first two- and three-technique combinations with balance intact.',

    objectives: [
      'Understand what makes a combination different from a list of moves',
      'Link two techniques so the first sets up the second',
      'Keep balance and guard at every link in the chain',
      'Recognize the four most common combination errors',
      'Build a clean three-technique chain from basics you already know',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'One technique sets up the next',
        caption:
          'A combination is a chain of causes: each technique creates the opening the next one travels through.',
        labels: [
          'First technique draws a reaction',
          'Second technique uses the opening',
          'Momentum links the chain',
          'Balance survives every link',
        ],
        practiceEngine: {
      type: 'rep-counter',
      label: 'Combination Reps',
      targetReps: 10,
    },
  },
    ],

    sections: [
      {
        title: 'Why combinations exist',
        content:
          'A single technique is easy to read and answer. A punch forces a block; that block opens a line; the second technique travels that line. This is the heart of combining: each technique is chosen because of the reaction the previous one creates. A combination is therefore a chain of causes, not a shopping list of moves performed in order.',
      },
      {
        title: 'Momentum is the glue',
        content:
          'Each technique should leave the body positioned for the next one. Stance, weight distribution and hip rotation carry through the chain instead of resetting between moves. If a technique ends off balance or with the guard down, the chain breaks and the combination becomes two separate, slower techniques.',
      },
      {
        title: 'Length of the chain',
        content:
          'Beginners in intermediate training build chains of two, then three techniques. Longer is not better: a clean chain of two that preserves balance and guard defeats a loose chain of four every time. Depth of connection between techniques matters more than the number of them.',
      },
    ],

    principles: [
      'Every technique sets up the next one.',
      'Balance is preserved at every link, not only at the end.',
      'The chain follows the reaction it creates.',
      'Short and clean beats long and loose.',
    ],

    mistakes: [
      { title: 'Treating combos as a shopping list', explanation: 'Performing techniques in order without cause and effect produces a sequence anyone can read. Choose each next technique because of what the previous one forced.' },
      { title: 'Sacrificing balance for speed', explanation: 'A fast chain that arrives off balance is a gift to the partner. Speed is added only after every link is stable.' },
      { title: 'Attacking the same line every time', explanation: 'High then high again is easy to cover. Strong chains change level or line: high to low, outside to inside.' },
      { title: 'Stopping dead between techniques', explanation: 'A full reset between moves destroys momentum and telegraphs the next technique. Let each technique flow into the next while keeping structure.' },
    ],

    practice: [
      'Shadow a single straight punch and reset fully to guard. Repeat five times.',
      'Link punch to punch: the first draws a high reaction, the second follows the same line deeper.',
      'Repeat the two-link chain ten times, checking guard and stance between links.',
      'Add a front kick as the third link after the second punch changes the level.',
      'Perform the three-link chain at half speed, pausing to verify balance at each link.',
      'Finish every repetition in guard, in stance, ready to move.',
    ],

    reflection:
      'In your last combination, could you name what each technique was setting up? If not, the chain was still a list.',

    safety:
      'Shadow practice first. When working with a partner, keep control and distance appropriate, and agree on speed before starting. Combinations multiply impact, so control matters more than with single techniques.',

    quiz: [
      {
        question: 'What makes a combination more than a list of techniques?',
        options: [
          'Performing them quickly',
          'Each technique creating the opening the next one uses',
          'Using at least four techniques',
          'Performing them without pausing',
        ],
        answer: 1,
        explanation:
          'A combination is a chain of causes: every technique is chosen because of the reaction the previous one creates.',
      },
      {
        question: 'What must survive every link of a combination?',
        options: [
          'Maximum speed',
          'Balance and guard',
          'The same stance throughout',
          'Full power in each technique',
        ],
        answer: 1,
        explanation:
          'If balance or guard is lost at any link, the chain breaks and the practitioner becomes vulnerable mid-sequence.',
      },
    ],

    practiceEngine: {
      type: 'rep-counter',
      label: 'Combination Reps',
      targetReps: 10,
    },
    mastery: [
      'Explain the cause-and-effect logic of a two-technique chain.',
      'Perform a three-link combination with balance and guard at every link.',
      'Change level or line within a combination deliberately.',
      'Identify and correct the four common combination errors.',
    ],
  },
  'karate-combinations-rhythm': {
    id: 'karate-combinations-rhythm',
    subject: 'Karate',
    title: 'Changing Rhythm',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn why uniform tempo makes you readable, and how pauses, accelerations and broken cadence turn the same techniques into something a partner cannot time.',

    objectives: [
      'Understand rhythm as information you give or deny the partner',
      'Break a uniform cadence on purpose',
      'Use a balanced pause as a weapon',
      'Recognize the four most common rhythm errors',
      'Apply tempo changes to a combination you already know',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Tempo is a weapon',
        caption:
          'A steady cadence hands the partner a schedule. Broken rhythm takes that schedule away.',
        labels: [
          'Uniform tempo is readable',
          'The pause breaks prediction',
          'Acceleration exploits the break',
          'Balance under every tempo change',
        ],
      },
    ],

    sections: [
      {
        title: 'Rhythm is information',
        content:
          'Every repeated tempo teaches the partner when your next move arrives. A metronome-like combination, even a fast one, can be timed and intercepted. Rhythm control is the skill of deciding what schedule you reveal: sometimes steady to lull, sometimes broken to explode into the gap the partner did not expect.',
      },
      {
        title: 'The pause as a weapon',
        content:
          'A deliberate pause mid-combination is not rest. It is a balanced, guarded freeze that hides when the next technique comes. The partner commits to a timing; the pause expires without the expected move; the next technique arrives on a new beat. For the pause to work, the body must stay loaded: guard up, knees alive, weight ready.',
      },
      {
        title: 'Acceleration inside the chain',
        content:
          'The simplest usable rhythm change is slow-slow-fast: two measured techniques establish a cadence, the third arrives at double speed into the gap. Its opposite, fast-slow-fast, works just as well. The acceleration must come from the legs and hips, not from rushing the upper body ahead of the base.',
      },
    ],

    principles: [
      'Uniform rhythm is a gift to the partner.',
      'Change tempo on purpose, never by accident.',
      'A pause must stay balanced, guarded and loaded.',
      'Speed changes mean nothing without balance underneath.',
    ],

    mistakes: [
      { title: 'Metronome combinations', explanation: 'Equal spacing between every technique makes the sequence perfectly timable. Vary the gaps deliberately.' },
      { title: 'Pause equals relax', explanation: 'If the guard drops or the knees lock during a pause, it is a rest break, not a weapon. Stay loaded through every freeze.' },
      { title: 'Accelerating into broken structure', explanation: 'Speed that outruns the base arrives weak and off balance. Accelerate from the legs while structure holds.' },
      { title: 'Rhythm changes only in the arms', explanation: 'Tempo lives in the feet and hips. Arm-speed changes without foot timing are visible and easy to read.' },
    ],

    practice: [
      'Perform a known three-technique chain at a perfectly uniform tempo, three repetitions.',
      'Repeat it with a two-second balanced pause between the second and third techniques.',
      'Perform the chain slow, slow, fast. Feel the third technique arrive from the legs.',
      'Perform the chain fast, slow, fast and notice how the pause changes the partner read.',
      'Have a partner clap the moment they think your next technique arrives; try to make them clap wrong three times.',
      'Finish every repetition in guard and stance, at any tempo.',
    ],

    reflection:
      'Which tempo change felt most under control: the pause, the acceleration, or the deceleration? What did the least controlled one reveal about your base?',

    safety:
      'Tempo work invites sudden direction and speed changes. Warm the legs and ankles first, keep the surface non-slip, and keep partner drills at agreed speeds.',

    quiz: [
      {
        question: 'Why is a uniform rhythm a problem in combination work?',
        options: [
          'It tires the body faster',
          'It gives the partner a predictable schedule to time',
          'It reduces striking power',
          'It is against karate rules',
        ],
        answer: 1,
        explanation:
          'A steady cadence teaches the partner exactly when the next technique arrives, making the sequence easy to intercept.',
      },
      {
        question: 'What must a deliberate pause preserve to work as a weapon?',
        options: [
          'Relaxed breathing only',
          'Balance, guard and readiness to explode',
          'A completely straight posture',
          'Maximum distance from the partner',
        ],
        answer: 1,
        explanation:
          'A pause only deceives if the body stays loaded: balanced, guarded and ready to fire the next technique on a new beat.',
      },
    ],

    practiceEngine: {
      type: 'interval',
      label: 'Rhythm Intervals',
      workTime: 30,
      restTime: 15,
      totalIntervals: 4,
    },
    mastery: [
      'Perform one combination at three different deliberate tempos.',
      'Use a balanced pause to break a partner timing in a drill.',
      'Accelerate the final technique of a chain without losing structure.',
      'Identify and correct the four common rhythm errors.',
    ],
  },
  'karate-combinations-recovering': {
    id: 'karate-combinations-recovering',
    subject: 'Karate',
    title: 'Recovering After Combinations',
    level: 'Intermediate',
    duration: '10 min',

    description:
      'Learn how to end a chain: exit with balance, guard and distance. The habit of remaining aware and ready after the last technique is called zanshin in karate.',

    objectives: [
      'Understand why the moment after the last technique is the most dangerous',
      'Recover guard, stance and distance in one controlled exit',
      'Apply the concept of zanshin, remaining awareness',
      'Recognize the four most common recovery errors',
      'End every combination ready to defend or continue',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'The combination ends in a stance',
        caption:
          'Recovery is part of the technique, not the end of it: guard, base and awareness return before the breath does.',
        labels: [
          'Guard returns immediately',
          'Stance under the body at the exit',
          'Distance or angle taken',
          'Awareness outlasts the movement',
        ],
      },
    ],

    sections: [
      {
        title: 'The danger is after the last technique',
        content:
          'Most counters land in the moment a practitioner admires the finished combination: hands dropping, weight fallen forward, eyes following the last punch. Trained recovery treats the exit as part of the technique: the chain is not complete until guard, stance and distance are restored.',
      },
      {
        title: 'What recovery looks like',
        content:
          'A clean exit has three parts arriving together: the guard returns to position, the feet find a stance under the body instead of a stretched finish, and distance or angle is taken so the next exchange starts on your terms. Exiting on an angle is stronger than retreating straight back through the line of attack.',
      },
      {
        title: 'Zanshin: remaining awareness',
        content:
          'Zanshin is the mental half of recovery: attention stays on the partner after the movement ends, without tension or celebration. In training it shows as eyes up, breathing controlled, body ready. In grading and in life it is the habit of never declaring victory before the situation is actually safe.',
      },
    ],

    principles: [
      'The combination ends in a stance, not in a stretch.',
      'Guard returns before the breath does.',
      'Exit on an angle, not straight back through the attack line.',
      'Awareness outlasts the movement.',
    ],

    mistakes: [
      { title: 'Dropping the hands after the last technique', explanation: 'The guard is what survives the exchange. Hands that drop at the finish invite the counter that ends the fight.' },
      { title: 'Falling forward past the target', explanation: 'Momentum that carries the head beyond the base leaves no way to defend or redirect. Finish with the stance under the body.' },
      { title: 'Turning away early', explanation: 'Looking or turning away before distance is restored hands the partner a free moment. Eyes stay on the partner until safe.' },
      { title: 'Holding the breath through the chain', explanation: 'Breath-holding creates tension that slows recovery and ends in a gasp at the worst moment. Breathe rhythmically through the techniques.' },
    ],

    practice: [
      'Perform a three-link chain, then freeze for three seconds in guard and stance. Repeat five times.',
      'Repeat the chain and exit on a 45 degree angle instead of straight back.',
      'Repeat the chain and retreat to a safe distance, guard up, eyes forward.',
      'Have a partner apply light, slow pressure immediately after your finish; your goal is to be already recovered when it arrives.',
      'Perform the chain with controlled breathing: exhale on techniques, steady breath in recovery.',
      'End every session repetition with one full second of still, aware zanshin.',
    ],

    reflection:
      'Watch your last training round in your memory: at the moment after your final technique, where were your hands, your base and your eyes?',

    safety:
      'Recovery drills with partner pressure must start slow and light. The purpose is timing awareness, not impact. Agree on intensity before every round.',

    quiz: [
      {
        question: 'When is a practitioner most exposed during a combination?',
        options: [
          'During the first technique',
          'At the moment of contact',
          'In the moment after the last technique',
          'During the pause between chains',
        ],
        answer: 2,
        explanation:
          'Counters most often land right after the finish, when hands drop, weight falls forward and attention relaxes.',
      },
      {
        question: 'What does zanshin refer to?',
        options: [
          'The final bow of a session',
          'Remaining awareness and readiness after the technique ends',
          'A specific breathing pattern',
          'The strongest stance in karate',
        ],
        answer: 1,
        explanation:
          'Zanshin is the mental half of recovery: attention, guard and readiness maintained after the movement is complete.',
      },
    ],

    mastery: [
      'Finish every combination with guard, stance and distance restored.',
      'Exit on an angle under light partner pressure without being caught unready.',
      'Explain zanshin and demonstrate one second of it after a chain.',
      'Identify and correct the four common recovery errors.',
    ],
  },

  'karate-timing-understanding': {
    id: 'karate-timing-understanding',
    subject: 'Karate',
    title: 'Understanding Timing',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn what timing really is: the relationship between your motion and the movement of the partner, and why being early or being late both fail while being correct succeeds.',

    objectives: [
      'Understand timing as a relationship, not as raw speed',
      'Recognize the three basic timing windows',
      'Feel the difference between early, late and correct',
      'Recognize the four most common timing errors',
      'Apply one timing window in a controlled drill',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Three windows',
        caption:
          'Every exchange offers moments to act. Timing is choosing the window where the commitment of the partner works for you.',
        labels: [
          'Before the attack begins',
          'As the attack begins',
          'After the attack commits and misses',
          'Correct beats fast',
        ],
      },
    ],

    sections: [
      {
        title: 'Timing is a relationship',
        content:
          'Timing is not how fast you move. It is the relationship between your motion and the motion of the partner. A very fast technique launched at the wrong moment fails, while a moderate technique launched at the correct moment lands cleanly. Speed only matters once the moment is right.',
      },
      {
        title: 'The three windows',
        content:
          'Broadly there are three windows to act: before the attack begins, which pre-empts it but requires reading intent early; as the attack begins, which intercepts it while it is still forming; and after the attack commits and misses, which counters into the gap it leaves. Each window carries different risk and reward, and trained practitioners learn to recognize all three in real time.',
      },
      {
        title: 'Why early and late both fail',
        content:
          'Acting too early reveals your intent and lets the partner change plan before you arrive. Acting too late means meeting force that has already developed. The correct window is the one where the commitment of the partner cannot be withdrawn, so their own energy becomes the reason your technique lands.',
      },
    ],

    principles: [
      'Timing is about when, not how fast.',
      'The correct window makes the commitment of the partner work for you.',
      'Patience is a timing skill, not a passive one.',
      'Every technique has a moment it is meant to arrive.',
    ],

    mistakes: [
      { title: 'Chasing speed instead of moment', explanation: 'Adding speed to a badly timed technique only makes the miss faster. Fix the moment first, then add speed.' },
      { title: 'Committing before reading', explanation: 'Launching on a guess hands the exchange to the partner. Wait for a cue, then commit fully.' },
      { title: 'Freezing while waiting', explanation: 'Waiting too long is just being late with extra tension. The window is a moment to move, not a place to hide.' },
      { title: 'Ignoring distance', explanation: 'Timing and distance are linked. A perfect moment at the wrong range still fails, so train them together.' },
    ],

    practice: [
      'With a partner, stand at safe distance and have them step in slowly at random moments.',
      'Your task is to move exactly as their step begins, not before and not after.',
      'Repeat ten times, calling out whether you were early, late or correct.',
      'Switch roles and feel how different the three windows feel from the other side.',
      'Add a light technique on the intercept window once the step timing is clean.',
      'Finish by standing still and naming which window you prefer and why.',
    ],

    reflection:
      'In your last drill, which failure showed up more often for you: moving early and revealing intent, or moving late and meeting force?',

    safety:
      'Timing drills involve a moving partner. Agree on speed and contact level before starting, and keep a safe distance until intercept timing is reliable.',

    quiz: [
      {
        question: 'What is timing best described as?',
        options: [
          'Maximum speed of a technique',
          'The relationship between your motion and the motion of the partner',
          'The strength behind a technique',
          'The number of techniques per second',
        ],
        answer: 1,
        explanation:
          'Timing is about when a technique arrives relative to the movement of the partner, not how fast it travels.',
      },
      {
        question: 'Why does acting too early usually fail?',
        options: [
          'It uses too much energy',
          'It reveals intent and lets the partner change plan',
          'It is against the rules',
          'It always loses balance',
        ],
        answer: 1,
        explanation:
          'An early commitment telegraphs your plan while the partner is still free to adapt, so they simply change what they were doing.',
      },
    ],

    mastery: [
      'Name the three timing windows and the risk of each.',
      'Intercept a slow stepping partner at the correct window repeatedly.',
      'Distinguish early, late and correct in your own repetitions.',
      'Identify and correct the four common timing errors.',
    ],
  },
  'karate-timing-reading': {
    id: 'karate-timing-reading',
    subject: 'Karate',
    title: 'Reading Movement',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn to read the cues that announce a technique before it arrives: weight shifts, hip turns, shoulder drops and eye lines, so your timing has real information to work with.',

    objectives: [
      'Understand that most techniques are announced before they land',
      'Recognize the primary physical cues of an incoming technique',
      'Reduce the cues you give away in your own movement',
      'Recognize the four most common reading errors',
      'Train the eyes to watch center mass instead of hands',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'The body announces first',
        caption:
          'Hands and feet are the last things to move. Weight, hips and shoulders move first, and those are the cues you learn to read.',
        labels: [
          'Weight shift begins the motion',
          'Hips turn before the strike',
          'Shoulders drop or rise',
          'Watch center mass, not hands',
        ],
      },
    ],

    sections: [
      {
        title: 'Techniques are announced',
        content:
          'A technique rarely appears from nothing. Before a punch extends, weight loads onto a leg; before a kick, the hip begins to turn and the center rises or shifts; before a change of direction, the shoulders tilt. These preparatory movements are the announcement. Reading them gives your timing something real to key on instead of guesswork.',
      },
      {
        title: 'Where to look',
        content:
          'Beginners watch hands and feet, which move last and fastest, so they are always a beat behind. Trained readers watch the center: the chest, hips and weight line. From the center you can see the whole body organize, which gives an earlier and more reliable signal than any single limb.',
      },
      {
        title: 'Reading yourself',
        content:
          'Reading is a two-way street. Every habit you have of tensing, bouncing, or loading visibly before a technique is a cue you hand to the partner. Part of training reading is training silence in your own movement: initiating without the announcement, so the information flow favors you.',
      },
    ],

    principles: [
      'Watch the center mass, not the fastest limb.',
      'Weight and hips move before hands and feet.',
      'Reduce the cues you give away in your own initiation.',
      'Reading improves with repetition against live partners.',
    ],

    mistakes: [
      { title: 'Watching the hands', explanation: 'Hands move last and fastest, so tracking them keeps you a beat behind. Lift your focus to chest and hips.' },
      { title: 'Reading only one cue', explanation: 'A single cue can be faked. Confirm with two or more signals, such as weight shift plus hip turn.' },
      { title: 'Staring instead of seeing', explanation: 'A fixed hard stare narrows vision and slows reaction. Use a soft, wide focus that takes in the whole body.' },
      { title: 'Telegraphing your own reads', explanation: 'If you visibly prepare every time you spot a cue, you teach the partner to fake it. Keep your reaction internal until you move.' },
    ],

    practice: [
      'With a partner, watch only their chest and hips while they perform slow random techniques.',
      'Call out the technique before it extends, using the center cues only.',
      'Repeat until your calls land before the limb moves, ten times.',
      'Switch roles and notice which cues you give away when you initiate.',
      'Practice initiating a slow technique with no visible preload, then check with the partner.',
      'Finish with soft-focus standing, tracking the partner center for one minute.',
    ],

    reflection:
      'Which cue did you rely on most when reading: weight shift, hip turn, or shoulder movement? Which one did you give away most in your own movement?',

    safety:
      'Reading drills use slow, controlled techniques. Keep contact off until both partners can call cues reliably at speed.',

    quiz: [
      {
        question: 'Which part of the body gives the earliest reliable cue?',
        options: [
          'The hands',
          'The feet',
          'The center mass: chest, hips and weight line',
          'The eyes only',
        ],
        answer: 2,
        explanation:
          'The center organizes the whole body first, so watching chest, hips and weight gives an earlier signal than any single limb.',
      },
      {
        question: 'Why is watching the hands a poor reading habit?',
        options: [
          'Hands are too small to see',
          'Hands move last and fastest, keeping you a beat behind',
          'Hands never move first in any technique',
          'It is considered rude',
        ],
        answer: 1,
        explanation:
          'Because hands and feet are the final and fastest part of a technique, tracking them means reacting after the motion is already underway.',
      },
    ],

    mastery: [
      'Call a slow partner technique before it extends using center cues.',
      'Name at least three physical cues that announce an incoming technique.',
      'Initiate a technique with minimal visible preload.',
      'Identify and correct the four common reading errors.',
    ],
  },
  'karate-timing-openings': {
    id: 'karate-timing-openings',
    subject: 'Karate',
    title: 'Creating Openings',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn that openings are usually made rather than found: using feints, draws, pressure and rhythm breaks to force the partner to reveal a line you can use.',

    objectives: [
      'Understand the difference between finding and creating an opening',
      'Use a feint to draw a reaction and expose a line',
      'Apply pressure and angle to force a mistake',
      'Recognize the four most common opening-creation errors',
      'Connect an created opening to a follow-up technique',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Make the gap, then use it',
        caption:
          'An opening is a moment the guard is elsewhere. You can wait for it, or you can move the guard there yourself.',
        labels: [
          'Feint draws the guard away',
          'Pressure forces a response',
          'Angle reveals a new line',
          'Follow-up travels the opened line',
        ],
      },
    ],

    sections: [
      {
        title: 'Found versus made',
        content:
          'A passive fighter waits for the partner to make a mistake and hopes an opening appears. An active fighter creates one: by threatening a line so the guard moves, by applying pressure so the structure breaks, or by changing angle so a covered line becomes open. Waiting is sometimes correct, but creation is a skill you can rely on.',
      },
      {
        title: 'The feint and the draw',
        content:
          'A feint is a committed-looking threat that is not the real technique. It asks a question the body must answer: a twitch of the guard, a shift of weight, a block that goes to the wrong line. The answer reveals what is now unprotected, and the real technique travels there. A draw is the same idea in reverse: you expose a line on purpose so the partner attacks it, into a prepared response.',
      },
      {
        title: 'Pressure and angle',
        content:
          'Steady forward pressure forces the partner to spend attention on not being backed up, which degrades their guard and reading. Changing angle, even slightly, moves you off the line their guard covers and opens a new one without any technique at all. Pressure and angle are the quiet tools that set up the loud ones.',
      },
    ],

    principles: [
      'An opening is a moment the guard is elsewhere.',
      'A feint must look real enough to force an answer.',
      'Pressure and angle create openings without contact.',
      'Every created opening needs a prepared follow-up.',
    ],

    mistakes: [
      { title: 'Feinting without a follow-up', explanation: 'A feint that is not connected to a real technique wastes the reaction it bought. Decide the follow-up before you feint.' },
      { title: 'Feinting too subtly', explanation: 'If the threat does not look real, the partner ignores it and nothing opens. Commit enough to force an answer, stay balanced enough to redirect.' },
      { title: 'Attacking the guard instead of the gap', explanation: 'Once the guard moves, the target is where it is not. Hitting the moving guard wastes the created opening.' },
      { title: 'Creating without reading', explanation: 'If you do not watch for the reaction your feint caused, you cannot use it. Creation and reading are one loop.' },
    ],

    practice: [
      'With a partner, feint a high punch and watch which way their guard moves.',
      'Immediately follow to the line their guard left, at controlled speed.',
      'Repeat ten times, varying the feint line: high, low, inside, outside.',
      'Practice steady forward pressure for three steps, then note what the partner did.',
      'Change angle by one step and have the partner confirm a new line opened.',
      'Combine: pressure, feint, follow-up, in one controlled sequence.',
    ],

    reflection:
      'In your last round, did you wait for openings or create them? What did the partner do when you applied pressure without attacking?',

    safety:
      'Feint and draw drills invite real reactions, so keep contact controlled and agreed. Draws that expose a line on purpose require a trusted partner at agreed speed.',

    quiz: [
      {
        question: 'What is a feint designed to do?',
        options: [
          'Score a point on its own',
          'Force a reaction that reveals an unprotected line',
          'Tire out the partner',
          'Replace the need for footwork',
        ],
        answer: 1,
        explanation:
          'A feint is a credible threat that buys a reaction; the reaction shows what is now open for the real technique.',
      },
      {
        question: 'How do pressure and angle create openings?',
        options: [
          'They make the partner tired immediately',
          'They move attention and guard, revealing lines without contact',
          'They increase your striking power',
          'They slow the partner down permanently',
        ],
        answer: 1,
        explanation:
          'Pressure spends the partner attention on not being backed up, and angle moves you off the covered line, both opening targets without any strike.',
      },
    ],

    mastery: [
      'Draw a guard reaction with a feint and follow to the opened line.',
      'Use pressure or angle to create an opening without contact.',
      'Connect every created opening to a prepared follow-up.',
      'Identify and correct the four common opening-creation errors.',
    ],
  },

  'karate-distance-range': {
    id: 'karate-distance-range',
    subject: 'Karate',
    title: 'Understanding Range',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn maai, the combative distance: how the gap between you and the partner decides which techniques are possible, which are safe, and which are illusions.',

    objectives: [
      'Understand distance as a shared property of two people, not a fixed number',
      'Name the four practical ranges and what works in each',
      'Feel the one-step threshold that turns far into close',
      'Recognize the four most common distance errors',
      'Estimate range correctly against a moving partner',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'The gap decides everything',
        caption:
          'Range is not scenery. It decides which techniques exist at all in this moment of the exchange.',
        labels: [
          'Out of range: nothing lands',
          'Kicking range: legs reach',
          'Punching range: hands reach',
          'Close range: elbows and control',
        ],
      },
    ],

    sections: [
      {
        title: 'Distance is shared',
        content:
          'The gap between two people belongs to both of them. It changes when either one steps, shifts weight or changes height. That is why range is never a fixed number: it is a live property of the pair. Traditional karate calls the combative distance maai, and the concept includes timing and angle as well as space, because all three decide what can actually land.',
      },
      {
        title: 'The four practical ranges',
        content:
          'Outside range, nothing lands even with a step, and this is where observation and preparation happen. Kicking range is where the legs reach with one shift of weight. Punching range is where the hands reach, and it is also where most exchanges become fast and tight. Close range is where elbows, clinching and control live, and where kicking and punching lose their room. Each range has its own best techniques and its own specific dangers.',
      },
      {
        title: 'The one-step threshold',
        content:
          'The line that matters most is not where a technique reaches right now, but where it reaches after one step. A partner who looks safe can be dangerous the instant they step, and the same is true of you. Trained practitioners measure this threshold continuously, because crossing it changes what is possible for both people at once.',
      },
    ],

    principles: [
      'Distance belongs to both people and changes with either step.',
      'Measure the range after one step, not the range right now.',
      'Every range has its own techniques and its own dangers.',
      'Reach, stance and height all change the true range.',
    ],

    mistakes: [
      { title: 'Fighting at the range of the partner', explanation: 'Staying where their best techniques work instead of where yours do hands them the whole exchange. Move the gap to your range on purpose.' },
      { title: 'Measuring with the eyes only', explanation: 'Visual estimation degrades under pressure. Range learned through footwork and felt distance is faster and more reliable than guessing with the eyes.' },
      { title: 'Ignoring reach differences', explanation: 'A taller or longer-limbed partner shifts every threshold. Adjust your measurements to the person in front of you instead of assuming a standard range.' },
      { title: 'Hovering at dead range', explanation: 'Floating just outside reach with no intent wastes initiative and tires the legs. Be at a range with a purpose: threaten, deny, or observe deliberately.' },
    ],

    practice: [
      'With a partner, stand far apart and step in until one of you could land a front kick with a single shift.',
      'Freeze there and name the range out loud: kick range.',
      'Step in once more until a straight punch would land; freeze and name it: punch range.',
      'Step in until elbows would reach; freeze and name it: close range.',
      'Have the partner move randomly and call the current range continuously for one minute.',
      'Switch roles and compare where each of you felt the thresholds change.',
    ],

    reflection:
      'During the drill, which threshold surprised you most: the point where kicking became possible, or the point where the partner could reach you with one step?',

    safety:
      'Range drills involve continuous stepping toward a partner. Keep controlled speed, clear space behind both people, and stop if either person approaches a wall or obstacle.',

    quiz: [
      {
        question: 'What does the traditional term maai refer to?',
        options: [
          'A specific kicking technique',
          'The combative distance including space, timing and angle',
          'A breathing method',
          'The bow at the start of training',
        ],
        answer: 1,
        explanation:
          'Maai is the live combative distance between two people, and the concept includes timing and angle because all three decide what can land.',
      },
      {
        question: 'Why is the one-step threshold more important than current reach?',
        options: [
          'It is easier to see',
          'Because crossing one step changes what is possible for both people instantly',
          'It saves energy',
          'It only matters in competition',
        ],
        answer: 1,
        explanation:
          'A partner who looks safe can become dangerous the moment they step, so the threshold after one step is the line that must be tracked.',
      },
    ],

    mastery: [
      'Name the four practical ranges and one technique suited to each.',
      'Identify the one-step threshold against a moving partner.',
      'Adjust your measurements for a partner with different reach.',
      'Identify and correct the four common distance errors.',
    ],
  },
  'karate-distance-managing': {
    id: 'karate-distance-managing',
    subject: 'Karate',
    title: 'Managing Distance',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn to own the gap: the stepping, angling and pressure tools that keep an exchange at the range where your techniques work and deny the partner the range where theirs do.',

    objectives: [
      'Understand managing distance as an active skill, not a passive one',
      'Use steps and angles to set the gap deliberately',
      'Deny the partner their preferred range',
      'Recognize the four most common distance-management errors',
      'Combine pressure with distance to force readable reactions',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'The gap is a dial',
        caption:
          'Distance is adjusted continuously with the feet: in to threaten, out to deny, around to change the line.',
        labels: [
          'Step in to threaten',
          'Step out to deny',
          'Angle to change the line',
          'Pressure to force errors',
        ],
      },
    ],

    sections: [
      {
        title: 'Owning the gap',
        content:
          'Distance management is the continuous work of placing the gap where you want it. Step in to threaten and force a reaction, step out to deny a technique that was already launched, and hold steady when the current range already favors you. The gap is a dial you adjust with your feet, moment by moment, not a circumstance that happens to you.',
      },
      {
        title: 'Denial as a weapon',
        content:
          'Every fighter has a range where their best tools live. Denying that range is defense without blocking: stay one half-step beyond where their technique ends and their best weapon expires in the air. Denial also gathers information, because the attempts to close on you reveal habits, timings and favorite lines.',
      },
      {
        title: 'Distance plus angle',
        content:
          'Straight-line stepping manages depth only. Adding angle changes the line of attack as well, so the partner must turn to re-face you while you keep your structure. Small angular steps, taken continuously, are among the strongest distance tools because they defend and reposition at the same time.',
      },
    ],

    principles: [
      'The gap is a dial you adjust with your feet.',
      'Deny the range where the best tools of the partner live.',
      'Angle changes the line, depth changes the reach; use both.',
      'Manage distance before you need to defend.',
    ],

    mistakes: [
      { title: 'Chasing instead of managing', explanation: 'Lunging after a retreating partner collapses your own structure and walks you into counters. Move the gap deliberately instead of hunting.' },
      { title: 'Retreating in straight lines only', explanation: 'Backing up on the same line keeps you inside the attack corridor. Add angle so retreat also repositions.' },
      { title: 'Letting pressure collapse structure', explanation: 'Pressing forward with the head and shoulders ahead of the base is not pressure, it is falling. Keep stance and guard while you close.' },
      { title: 'Managing distance with the upper body', explanation: 'Leaning in and out changes reach slightly but ruins balance. Distance belongs to the feet; lean only as counterbalance, never as footwork.' },
    ],

    practice: [
      'With a partner, hold punch range and mirror their steps for one minute, keeping the gap constant.',
      'When they step in, step out just enough to expire their reach; when they step out, follow to restore your range.',
      'Add angle: circle around the partner while keeping the same depth, never crossing your feet.',
      'Apply steady forward pressure for three steps without attacking; observe what they do.',
      'Release the pressure suddenly and note whether they rush into the space you left.',
      'Finish each round in guard at a range you chose on purpose.',
    ],

    reflection:
      'When you released pressure in the last drill, did the partner rush in, hold, or retreat? What does that tell you about using distance to gather information?',

    safety:
      'Mirroring and pressure drills keep two people moving continuously. Keep the floor clear, control your speed, and agree on no-contact rules before starting.',

    quiz: [
      {
        question: 'What is the primary tool for managing distance?',
        options: [
          'Leaning the torso',
          'Footwork: steps and angles',
          'Faster punches',
          'A louder voice',
        ],
        answer: 1,
        explanation:
          'Distance belongs to the feet; steps and angles place the gap where you want it while structure stays intact.',
      },
      {
        question: 'Why is denying the preferred range of the partner a form of defense?',
        options: [
          'It tires them quickly',
          'Their best techniques expire before reaching you',
          'It is counted as a block',
          'It forces them to stop training',
        ],
        answer: 1,
        explanation:
          'Staying just beyond where their technique ends means their strongest tools miss without any block being needed.',
      },
    ],

    mastery: [
      'Hold a chosen range against a moving partner for one minute.',
      'Expire an incoming technique using distance alone.',
      'Combine depth and angle while circling without crossing the feet.',
      'Identify and correct the four common distance-management errors.',
    ],
  },
  'karate-distance-entering-exiting': {
    id: 'karate-distance-entering-exiting',
    subject: 'Karate',
    title: 'Entering and Exiting',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn how to cross distance safely: enter with guard, angle and timing, and leave without handing the partner a free moment. Entry and exit are one continuous skill.',

    objectives: [
      'Understand why crossing distance is the most dangerous moment of an exchange',
      'Enter with guard, angle and timing instead of commitment alone',
      'Exit without turning away or falling forward',
      'Recognize the four most common entry and exit errors',
      'Link one clean entry and exit to a single technique',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'One loop, not two skills',
        caption:
          'The crossing in and the crossing out form a single loop; training only half of it leaves a hole in the middle of the skill.',
        labels: [
          'Enter on your timing',
          'Guard leads the entry',
          'Exit on an angle',
          'Awareness closes the loop',
        ],
      },
    ],

    sections: [
      {
        title: 'Why entries fail',
        content:
          'Crossing from safe range into striking range means passing through the zone where the techniques of the partner already work. Most entries fail for the same reasons: arriving on the rhythm of the partner instead of your own, leading with the head instead of the guard, and committing so fully that no exit remains. A good entry treats the crossing as a controlled movement, not a leap of faith.',
      },
      {
        title: 'The anatomy of a clean entry',
        content:
          'A clean entry has three parts arriving together: timing chosen from a read or a created opening, guard and structure leading the way so the head never arrives first, and an angle that shortens the dangerous corridor. The entry ends in a stance, at a chosen range, with a technique ready, never in a stretched lunge.',
      },
      {
        title: 'Exiting is part of entering',
        content:
          'The exit begins before the technique finishes. Guard returns, feet find a stance, and distance or angle is taken so the next exchange starts on your terms. Exiting straight back through the line of attack is the weakest option; exiting on an angle keeps you safe while you reset. Entry and exit form one loop, and training them separately leaves a hole in the middle of the skill.',
      },
    ],

    principles: [
      'Cross distance on your timing, never on the rhythm of the partner.',
      'Guard and structure arrive before the head.',
      'Every entry contains its exit from the first step.',
      'Exit on an angle, in stance, with awareness intact.',
    ],

    mistakes: [
      { title: 'Entering without an exit plan', explanation: 'Committing fully with no reserved structure leaves nothing for defense or redirection. Keep enough base to leave at every moment of the entry.' },
      { title: 'Diving in with the head', explanation: 'When the head leads, balance follows it forward and the guard trails behind. Let guard and feet lead the crossing.' },
      { title: 'Exiting straight back through the attack', explanation: 'Retreating on the same line keeps you inside the corridor of the partner techniques. Step off line while you create distance.' },
      { title: 'Relaxing at the finish', explanation: 'Dropping guard or attention after the technique hands over the moment you just fought for. Awareness closes the loop before anything relaxes.' },
    ],

    practice: [
      'From just outside punch range, enter one step with guard up and freeze in stance; check balance.',
      'Add a single straight punch at the end of the entry, then freeze again in guard.',
      'Exit on a 45 degree angle to a safe range and freeze; confirm eyes stayed forward.',
      'Repeat the entry-technique-exit loop ten times at half speed.',
      'Have the partner apply light pressure at your finish; your recovery must already be in place.',
      'Close with three repetitions at full control, naming your timing window on each entry.',
    ],

    reflection:
      'In your last repetitions, at which moment did your guard or attention drop: during the crossing, at contact, or during the exit?',

    safety:
      'Entry and exit drills close real distance on a partner. Keep contact light or absent until both people control the loop at speed, and keep the training area free of obstacles in both directions of movement.',

    quiz: [
      {
        question: 'Why is crossing distance considered the most dangerous moment?',
        options: [
          'It uses the most energy',
          'You pass through the zone where the techniques of the partner already work',
          'It is illegal in most styles',
          'It always breaks balance',
        ],
        answer: 1,
        explanation:
          'Between safe range and your own striking range lies the zone where the techniques of the partner can reach you, so the crossing must be controlled.',
      },
      {
        question: 'What makes an exit strong?',
        options: [
          'Speed alone',
          'Angle, stance and awareness taken together',
          'Turning away quickly',
          'A loud shout',
        ],
        answer: 1,
        explanation:
          'A strong exit restores guard, base and distance or angle at once, so the next exchange begins on your terms.',
      },
    ],

    mastery: [
      'Enter on a chosen timing window with guard and structure leading.',
      'Link entry, single technique and angled exit in one controlled loop.',
      'Keep awareness and guard intact through the finish under light pressure.',
      'Identify and correct the four common entry and exit errors.',
    ],
  },

  'karate-applications-understanding': {
    id: 'karate-applications-understanding',
    subject: 'Karate',
    title: 'Understanding Technique Applications',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn how isolated techniques connect to real use: what a punch does in context, why a block leads somewhere, and how understanding application changes how you perform every technique.',

    objectives: [
      'Understand why every technique exists for a reason',
      'Recognize that application shapes how a technique is performed',
      'Connect isolated drills to their use in combinations and exchanges',
      'Recognize the four most common application-understanding errors',
      'Explain the purpose of at least three techniques you already know',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Techniques exist for reasons',
        caption:
          'Every technique solves a problem: a punch creates an opening, a block redirects force, a kick changes range. Understanding the why changes how you perform the what.',
        labels: [
          'Every technique has a purpose',
          'Application shapes performance',
          'Context changes execution',
          'Understanding improves skill',
        ],
      },
    ],

    sections: [
      {
        title: 'Why application matters',
        content:
          'A technique performed without understanding its purpose is a shape without meaning. You can drill the shape mechanically, but you will never know when to use it, how hard to commit, or what should happen after. Understanding application transforms isolated movement into functional skill: you know what problem the technique solves, so you recognize when to deploy it.',
      },
      {
        title: 'Application shapes performance',
        content:
          'The same technique performed for different purposes looks different. A straight punch used to create an opening is fast and light; the same punch used as a counter after a block is heavier and more committed; the same punch used to stop a rush is a short, sharp impact. Understanding the application lets you adjust intensity, timing and structure to match the moment.',
      },
      {
        title: 'From isolation to integration',
        content:
          'Beginners learn techniques in isolation: one punch, one block, one kick. Intermediate practitioners learn that techniques exist in context: a punch sets up a kick, a block creates a counter opportunity, a kick changes the range. Understanding application is the bridge from isolated movement to integrated skill where techniques connect into combinations and exchanges.',
      },
    ],

    principles: [
      'Every technique solves a specific problem.',
      'Application shapes how a technique is performed.',
      'Context changes intensity, timing and structure.',
      'Understanding application bridges isolation to integration.',
    ],

    mistakes: [
      { title: 'Performing techniques without purpose', explanation: 'Drilling shapes mechanically without understanding why they exist produces movement that cannot be deployed. Ask what problem each technique solves.' },
      { title: 'Treating all applications as identical', explanation: 'The same technique used for different purposes requires different intensity and timing. Adjust your execution to match the application.' },
      { title: 'Learning combinations without understanding', explanation: 'Memorizing sequences without knowing why each technique is there produces combinations that cannot adapt. Understand the cause-and-effect of each link.' },
      { title: 'Ignoring the partner context', explanation: 'Techniques exist in exchanges with partners. Understanding application means understanding how your technique affects what the partner does next.' },
    ],

    practice: [
      'Choose one technique you know well and write down three different purposes it could serve.',
      'Perform that technique three times, once for each purpose, noticing how intensity and timing change.',
      'Choose a block you know and explain what should happen immediately after it.',
      'Perform the block followed by the counter or movement it sets up.',
      'Choose a combination you know and explain the cause-and-effect logic of each link.',
      'Perform the combination slowly, naming the purpose of each technique as you perform it.',
    ],

    reflection:
      'Think of a technique you have drilled many times: can you name three different situations where you would use it differently? If not, the application is still unclear.',

    safety:
      'Application understanding involves partner work. Keep contact controlled and agreed, and never test applications at full force without proper supervision and protective equipment.',

    quiz: [
      {
        question: 'Why does understanding application improve technique performance?',
        options: [
          'It makes the technique faster automatically',
          'It lets you adjust intensity, timing and structure to match the purpose',
          'It is only important for competitions',
          'It replaces the need for drilling',
        ],
        answer: 1,
        explanation:
          'Understanding what problem a technique solves lets you adjust how you perform it: intensity for the moment, timing for the partner, structure for the application.',
      },
      {
        question: 'How does the same straight punch change based on application?',
        options: [
          'It does not change at all',
          'A punch to create an opening is light and fast; a counter punch is heavier and more committed',
          'It only changes the target',
          'It only changes the speed',
        ],
        answer: 1,
        explanation:
          'The same technique performed for different purposes requires different intensity and commitment: opening creation is light, countering is heavier, stopping a rush is short and sharp.',
      },
    ],

    mastery: [
      'Name three different applications for one technique you know well.',
      'Adjust your performance of a technique to match different purposes.',
      'Explain the cause-and-effect logic of a combination you know.',
      'Identify and correct the four common application-understanding errors.',
    ],
  },
  'karate-applications-defensive': {
    id: 'karate-applications-defensive',
    subject: 'Karate',
    title: 'Defensive Applications',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn how blocks connect to counters and repositioning: a block is not the end of defense but the beginning of a response, and understanding this transforms passive defense into active skill.',

    objectives: [
      'Understand that blocks set up counters, not just protect',
      'Recognize the connection between defense and immediate response',
      'Apply blocks that position you for the next action',
      'Recognize the four most common defensive-application errors',
      'Execute block-counter sequences that flow as one unit',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Block and counter as one',
        caption:
          'A block is not the end of defense but the beginning of response: it redirects force and positions you for the next action.',
        labels: [
          'Block redirects the attack',
          'Block positions for counter',
          'Counter flows from block',
          'Defense becomes initiative',
        ],
      },
    ],

    sections: [
      {
        title: 'Blocks are not endpoints',
        content:
          'A common mistake is treating a block as the end of defense: the attack is redirected, and then nothing happens until the partner attacks again. This leaves the initiative with the partner. Trained defense understands that every block creates an opening: the partner committed to an attack that missed, their structure is momentarily disrupted, and you are positioned to respond. The block is not the end but the beginning.',
      },
      {
        title: 'Positioning through defense',
        content:
          'Every block positions you relative to the partner. A downward block may place you inside their guard; a rising block may create distance. Understanding this positioning lets you choose blocks that set up your preferred response: a block that places you at punching range for an immediate counter, or a block that creates distance for a repositioning step.',
      },
      {
        title: 'The block-counter loop',
        content:
          'The strongest defensive applications flow as one unit: block and counter happen without a reset between them. The block redirects the attack and the counter travels through the opening it created, all in one continuous movement. This requires timing, distance and application understanding working together, which is why this is intermediate material rather than beginner.',
      },
    ],

    principles: [
      'Every block creates an opening for response.',
      'Defense positions you for the next action.',
      'Block and counter flow as one continuous unit.',
      'The initiative returns to you after successful defense.',
    ],

    mistakes: [
      { title: 'Blocking and freezing', explanation: 'If you block but do not immediately counter or reposition, the partner recovers and retains initiative. Every block should set up a response.' },
      { title: 'Choosing blocks without considering position', explanation: 'A block that places you poorly for your preferred response wastes the opening it created. Choose blocks that position you for what comes next.' },
      { title: 'Resetting between block and counter', explanation: 'A full reset between block and counter destroys momentum and gives the partner time to recover. Flow the counter from the block without resetting.' },
      { title: 'Counter without reading the opening', explanation: 'If you counter without seeing where the block redirected the partner, you may attack a line that is no longer open. Read the opening, then respond.' },
    ],

    practice: [
      'With a partner, have them throw a slow straight punch.',
      'Perform a downward block and immediately follow with a counter to the opening created.',
      'Repeat ten times, focusing on the flow from block to counter without reset.',
      'Try a rising block instead and notice how the counter changes.',
      'Practice block-counter sequences at different ranges: close, medium and stepping in.',
      'Finish by having the partner vary attacks and you respond with appropriate block-counter flows.',
    ],

    reflection:
      'In your last drill, did the counter feel like it flowed from the block, or did you reset between them? What did that reveal about your timing?',

    safety:
      'Block-counter drills involve a partner attacking and you responding. Keep attacks controlled and at agreed speeds, and maintain safe distance until timing is reliable.',

    quiz: [
      {
        question: 'Why is a block considered the beginning of response rather than the end of defense?',
        options: [
          'Because it scores points in competition',
          'Because it creates an opening and positions you for the next action',
          'Because it is always followed by a kick',
          'Because it is illegal to stop after blocking',
        ],
        answer: 1,
        explanation:
          'A successful block redirects the attack and disrupts the partner structure, creating an opening and positioning you for immediate response, which returns initiative to you.',
      },
      {
        question: 'What makes a block-counter sequence strong?',
        options: [
          'Maximum speed in both movements',
          'Flowing from block to counter without resetting',
          'Using different stances for each',
          'Performing them at different times',
        ],
        answer: 1,
        explanation:
          'Strong block-counter flows happen when the counter travels through the opening created by the block, all in one continuous movement without a reset between them.',
      },
    ],

    mastery: [
      'Execute a block-counter sequence that flows as one unit.',
      'Choose blocks that position you for your preferred counter.',
      'Read the opening created by a block and respond appropriately.',
      'Identify and correct the four common defensive-application errors.',
    ],
  },
  'karate-applications-movement': {
    id: 'karate-applications-movement',
    subject: 'Karate',
    title: 'Movement and Positioning',
    level: 'Intermediate',
    duration: '12 min',

    description:
      'Learn how footwork and positioning connect to technique application: stepping is not just transportation but a positioning tool that changes what is possible for both you and the partner.',

    objectives: [
      'Understand that positioning changes what techniques are possible',
      'Use footwork to place yourself where your techniques work best',
      'Recognize how angle and distance combine in positioning',
      'Recognize the four most common positioning errors',
      'Apply positioning to set up techniques effectively',
    ],

    visuals: [
      {
        type: 'diagram',
        title: 'Positioning enables technique',
        caption:
          'Where you stand relative to the partner determines what techniques are possible for you and what they can do in response. Positioning is a continuous tool.',
        labels: [
          'Position enables your techniques',
          'Position limits their techniques',
          'Angle and distance combine',
          'Positioning is continuous',
        ],
      },
    ],

    sections: [
      {
        title: 'Positioning enables technique',
        content:
          'A technique that works from one position may not work from another. A straight punch is effective at punching range but useless from kicking range or close range. A front kick works from kicking range but cannot be thrown from punching range without stepping back first. Positioning is the continuous work of placing yourself where your techniques work and the partner techniques do not.',
      },
      {
        title: 'Positioning limits the partner',
        content:
          'Positioning is not only about enabling your techniques but also about limiting what the partner can do. Standing at a range where their best technique does not reach, or at an angle where their guard does not cover you, denies them options. This is positioning as defense: you defend by being where they cannot reach rather than by blocking what they throw.',
      },
      {
        title: 'Continuous positioning',
        content:
          'Positioning is not a one-time decision but a continuous adjustment. As the partner moves, the optimal position changes, and you must adjust to maintain it. This requires reading the partner, understanding range and angle, and using footwork as a continuous tool rather than only when you need to attack or retreat.',
      },
    ],

    principles: [
      'Position enables your techniques and limits theirs.',
      'Positioning is a continuous adjustment, not a one-time decision.',
      'Angle and distance combine to define position.',
      'Footwork is the primary positioning tool.',
    ],

    mistakes: [
      { title: 'Standing where their techniques work', explanation: 'If you position yourself at the range where the partner best techniques reach, you hand them the advantage. Move the position to where your techniques work and theirs do not.' },
      { title: 'Positioning only when attacking', explanation: 'Positioning only when you need to attack leaves you at poor positions the rest of the time. Position continuously to maintain advantage throughout the exchange.' },
      { title: 'Ignoring angle and focusing only on distance', explanation: 'Distance alone does not define position; angle changes what lines are covered. Consider both together.' },
      { title: 'Static positioning against a moving partner', explanation: 'If the partner moves and you do not adjust, the position changes without your choice. Track and adjust continuously.' },
    ],

    practice: [
      'With a partner, stand at punch range and note what techniques work for both of you.',
      'Step back to kicking range and note how the options change.',
      'Step to close range and note how the options change again.',
      'Circle around the partner while maintaining the same depth and note how angle changes what is covered.',
      'Have the partner move randomly and continuously adjust your position to maintain your preferred range and angle.',
      'Finish by holding your chosen position for one minute against their attempts to change it.',
    ],

    reflection:
      'During the drill, did you adjust your position continuously or only when you needed to attack? What does that reveal about how you use positioning?',

    safety:
      'Positioning drills involve continuous movement with a partner. Keep the training area clear, control your speed, and agree on no-contact rules before starting.',

    quiz: [
      {
        question: 'How does positioning affect what techniques are possible?',
        options: [
          'It does not affect technique choice',
          'It determines which techniques can reach and work effectively',
          'It only affects speed',
          'It only affects power',
        ],
        answer: 1,
        explanation:
          'Position determines range and angle, which determine what techniques can reach and work effectively for both you and the partner.',
      },
      {
        question: 'Why is positioning considered continuous rather than a one-time decision?',
        options: [
          'Because you must always be moving',
          'Because as the partner moves, the optimal position changes and must be adjusted',
          'Because it is required by competition rules',
          'Because it uses more energy',
        ],
        answer: 1,
        explanation:
          'As the partner moves, the optimal position for you changes, so positioning must be continuously adjusted to maintain advantage throughout the exchange.',
      },
    ],

    mastery: [
      'Explain how position affects technique options for both people.',
      'Use footwork to continuously adjust position against a moving partner.',
      'Combine distance and angle to position effectively.',
      'Identify and correct the four common positioning errors.',
    ],
  },

  'karate-self-defense-principles': {
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

  'karate-self-defense-principles': {
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

  'karate-self-defense-principles': {
    id: 'karate-self-defense-principles',
    subject: 'Karate',
    title: 'Self-Defense Principles',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn the foundation of real self-defense: awareness, de-escalation, escape, and using technique only as the last resort when violence is unavoidable.',
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
        caption: 'Self-defense is built on a foundation of awareness, not technique. The higher you are in the pyramid, the better your outcome.',
        labels: ['Awareness prevents most threats', 'De-escalation defuses many', 'Escape resolves most', 'Technique is the last resort'],
      },
    ],
    sections: [
      { title: 'Awareness is the first line', content: 'The best self-defense happens before any confrontation: noticing a situation developing, recognizing body language and environment, and avoiding the area or person entirely. Awareness is not paranoia; it is calm, continuous observation of your surroundings. Most threats can be avoided by someone who is aware, because the aware person never enters the dangerous situation in the first place.' },
      { title: 'De-escalation and escape', content: 'If avoidance fails and a confrontation begins, the next tools are verbal de-escalation and creating opportunity to escape. Calm tone, open hands, stepping back, and agreeing with provocations can defuse many situations. The goal is not to win the argument but to create the space and time to leave. Every self-defense curriculum teaches that the fight you win is the one you never have.' },
      { title: 'Technique as the last resort', content: 'Physical technique is reserved for when avoidance, de-escalation, and escape have all failed and violence is unavoidable. At that point, technique must be decisive, efficient, and aimed at creating the opportunity to escape, not at winning a fight or punishing the attacker. Reasonable force means using only what is necessary to end the threat and escape; excess force creates legal and ethical problems.' },
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
    reflection: 'In your daily life, how aware are you of your surroundings? When was the last time you noticed a potential threat and avoided it without physical confrontation?',
    safety: 'Self-defense training must be supervised by qualified instructors. Never use excessive force. Local laws regarding self-defense vary; understand your legal context. The goal is always escape, not injury to the attacker.',
    quiz: [
      { question: 'What is the first and most effective line of self-defense?', options: ['Physical technique', 'Verbal de-escalation', 'Awareness and avoidance', 'Calling for help'], answer: 2, explanation: 'Awareness and avoidance prevent most threats before they materialize. You cannot be attacked if you never enter the dangerous situation.' },
      { question: 'What is the goal of physical self-defense technique?', options: ['To defeat the attacker completely', 'To create the opportunity to escape', 'To punish the attacker', 'To win the confrontation'], answer: 1, explanation: 'Physical technique is used only to create the opening to escape. Once you can leave, you leave. The goal is not victory but safety.' },
    ],
    mastery: [
      'Explain the self-defense pyramid and why awareness comes first.',
      'Demonstrate verbal de-escalation in a role-play scenario.',
      'Create distance and escape from a grab or hold.',
      'Identify and correct the four common self-defense errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice a group of aggressive people ahead on the sidewalk.', action: 'You cross the street or change your route to avoid them entirely, never entering their area.', why: 'Awareness and avoidance prevent the confrontation from ever happening. You cannot be attacked if you are not there.' },
        { setup: 'Someone confronts you verbally and escalates.', action: 'You use calm tone, open hands, and agree with their provocations while stepping back and looking for an exit.', why: 'De-escalation and creating distance defuse many situations without violence, preserving everyone safety.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Self-defense begins with awareness and ends with escape; technique is only the bridge between them when escape is blocked.' },
        { role: 'Facing it', detail: 'An aware, calm person who de-escalates is hard to escalate against; their calm often defuses the aggressor anger.' },
      ],
      adaptation: {
        cues: ['Aggressive body language and tone', 'Multiple people positioning around you', 'Your own fear or anger rising'],
        adjustments: [
          { if: 'You can avoid the situation', then: 'Leave immediately; do not engage.' },
          { if: 'You are already confronted', then: 'De-escalate verbally while creating distance and looking for escape routes.' },
        ],
        learning: 'After each day, note one situation you avoided through awareness and one you de-escalated or escaped from.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Awareness Scan', initialTime: 60 },
  },
  'karate-self-defense-against-knife': {
    id: 'karate-self-defense-against-knife',
    subject: 'Karate',
    title: 'Against a Knife',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn the harsh reality of knife defense: escape is almost always the only winning option, and technique exists only to create the moment to run.',
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
        caption: 'Against a knife, escape is the only winning option. Technique exists only to create the moment to run.',
        labels: ['You will likely be cut', 'Control the weapon arm', 'Create distance immediately', 'Escape is the only victory'],
      },
    ],
    sections: [
      { title: 'The reality of knife attacks', content: 'Knife attacks are fast, chaotic, and almost always result in the defender being cut, even if they escape. Movies and myths create false confidence; reality is that knife defense is about damage limitation and escape, not disarming the attacker. The only winning move against a knife is not to be there, which is why awareness and avoidance are paramount.' },
      { title: 'Control the weapon arm', content: 'If escape is not immediately possible and you must engage, the priority is controlling the weapon arm to prevent it from stabbing or cutting you repeatedly. This means grabbing the wrist or forearm and directing the blade away from your vital areas while you create distance. This is not a permanent solution; it is a bridge to escape.' },
      { title: 'Escape immediately', content: 'The moment you have created any opening, you escape. You do not stay to fight, disarm, or punish the attacker. You run. Every second you remain engaged increases the chance of being cut or stabbed. The goal is to end the engagement, not to win it.' },
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
    reflection: 'Have you accepted that knife defense is about damage limitation and escape, not about winning or disarming? How does that change your approach to training?',
    safety: 'Knife defense training must use rubber or padded training knives only. Never use live blades. Train with qualified instructors only. Expect to be cut in a real knife attack; focus on escape, not avoiding all contact.',
    quiz: [
      { question: 'What is the only winning option against a knife attack?', options: ['Disarming the attacker', 'Defeating the attacker', 'Escaping immediately', 'Controlling the weapon'], answer: 2, explanation: 'Escape is the only winning option against a knife. Every second engaged increases the risk of being cut or stabbed.' },
      { question: 'Why is knife defense about damage limitation rather than winning?', options: ['Because knives are illegal', 'Because you will likely be cut even with perfect technique', 'Because knife attacks are rare', 'Because knives are slow weapons'], answer: 1, explanation: 'Knife attacks are fast and chaotic. Even with perfect technique, you will likely be cut. The goal is to escape with minimal injury, not to avoid all contact.' },
    ],
    mastery: [
      'Explain why escape is the only winning option against a knife.',
      'Demonstrate controlling the weapon arm and creating distance.',
      'Escape immediately after creating an opening in a drill.',
      'Identify and correct the four common knife-defense errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'An attacker draws a knife and advances toward you.', action: 'You create distance immediately, looking for escape routes while keeping the attacker in view.', why: 'Distance is your best defense against a knife. The more distance, the more time you have to escape.' },
        { setup: 'You are too close to escape and the attacker thrusts the knife.', action: 'You control the weapon arm, directing the blade away from your body while you create distance and escape.', why: 'Controlling the weapon arm prevents immediate stabbing while you create the opening to escape.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Against a knife, you control the weapon arm only to create distance, then escape immediately. You will likely be cut even with perfect technique.' },
        { role: 'Facing it', detail: 'A knife attacker has a decisive advantage; the only winning response is escape, not engagement.' },
      ],
      adaptation: {
        cues: ['The attacker drawing or displaying a knife', 'The distance between you and the attacker', 'Available escape routes in your environment'],
        adjustments: [
          { if: 'You have distance', then: 'Maintain it and escape immediately.' },
          { if: 'You are too close to escape', then: 'Control the weapon arm, create distance, then escape.' },
        ],
        learning: 'After each drill, note whether you escaped immediately or stayed engaged, and what that taught you about the reality of knife defense.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Escape Drills', targetReps: 10 },
  },
  'karate-self-defense-against-stick': {
    id: 'karate-self-defense-against-stick',
    subject: 'Karate',
    title: 'Against a Stick or Blunt Weapon',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to defend against blunt weapons: control the weapon, close the distance, and escape or neutralize the threat while minimizing damage.',
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
        caption: 'Blunt weapons have a reach advantage. Close the distance to negate that advantage and control the weapon.',
        labels: ['Blunt weapons have reach', 'Close the distance quickly', 'Control the weapon arm', 'Escape or neutralize'],
      },
    ],
    sections: [
      { title: 'The reach advantage', content: 'Blunt weapons like sticks, bats, or pipes give the attacker a significant reach advantage. They can strike you from a distance where you cannot reach them. The solution is to close that distance quickly and decisively, moving inside their effective range where the weapon is less effective.' },
      { title: 'Controlling the weapon', content: 'Once inside their range, control the weapon and the weapon arm to prevent them from striking you. This may mean grabbing the weapon itself, controlling the wrist, or using your body to limit their movement. The goal is to prevent them from using the weapon effectively while you decide whether to escape or neutralize the threat.' },
      { title: 'Escape or neutralize', content: 'Once you have controlled the weapon, you have two options: escape immediately if you can do so safely, or neutralize the threat if escape is not possible. Neutralization means rendering the attacker unable to continue the attack, which may involve controlling them until help arrives or creating a situation where they cannot pursue. The choice depends on the situation and your ability to escape safely.' },
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
    reflection: 'In your training, do you close the distance decisively, or do you hesitate at the edge of their range? What does that hesitation teach you about real confrontations?',
    safety: 'Blunt weapon defense training must use padded sticks only. Train with qualified instructors only. Blunt weapons can cause serious injury; treat them with respect.',
    quiz: [
      { question: 'Why is closing the distance important against a blunt weapon?', options: ['To strike the attacker more effectively', 'To negate their reach advantage', 'To intimidate them', 'To show courage'], answer: 1, explanation: 'Blunt weapons have a reach advantage. Closing the distance moves you inside their effective range, where the weapon is less effective.' },
      { question: 'What are your two options after controlling the weapon?', options: ['Fight or flee', 'Escape or neutralize', 'Win or lose', 'Attack or defend'], answer: 1, explanation: 'After controlling the weapon, you can escape if you can do so safely, or neutralize the threat if escape is not possible. The choice depends on the situation.' },
    ],
    mastery: [
      'Explain why closing the distance is important against blunt weapons.',
      'Demonstrate closing distance and controlling the weapon.',
      'Make the correct decision (escape or neutralize) in a drill.',
      'Identify and correct the four common blunt-weapon-defense errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'An attacker swings a stick at you from a distance.', action: 'You close the distance quickly, moving inside their effective range where the stick is less effective.', why: 'Closing the distance negates their reach advantage and puts you in a position to control the weapon.' },
        { setup: 'You have closed the distance and grabbed the weapon.', action: 'You control the weapon and the weapon arm, then decide whether to escape or neutralize the threat.', why: 'Controlling the weapon prevents them from striking you while you make your decision.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Against a blunt weapon, close the distance quickly to negate their reach advantage, then control the weapon and escape or neutralize.' },
        { role: 'Facing it', detail: 'A blunt weapon attacker relies on reach; if you close the distance, their advantage disappears.' },
      ],
      adaptation: {
        cues: ['The attacker displaying a blunt weapon', 'The distance between you and the attacker', 'Your ability to close the distance safely'],
        adjustments: [
          { if: 'You have distance and can close it', then: 'Close the distance quickly and decisively.' },
          { if: 'You cannot close the distance safely', then: 'Create distance and escape if possible.' },
        ],
        learning: 'After each drill, note whether you closed the distance decisively or hesitated, and what that taught you about real confrontations.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Close-Distance Drills', targetReps: 10 },
  },
  'karate-self-defense-against-grabs': {
    id: 'karate-self-defense-against-grabs',
    subject: 'Karate',
    title: 'Against Grabs and Holds',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to escape from grabs and holds: use leverage, structure, and technique to break free and create distance for escape.',
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
        caption: 'Grabs and holds can be escaped using leverage, structure, and technique. Break free and escape immediately.',
        labels: ['Use leverage and structure', 'Break the grip decisively', 'Create distance immediately', 'Escape before they can re-grab'],
      },
    ],
    sections: [
      { title: 'Principles of escaping grabs', content: 'Grabs and holds are attempts to control you. Escaping them requires breaking the grip using leverage and structure, then creating distance immediately before the attacker can re-grab or escalate. The key is decisiveness: half-hearted attempts fail, while decisive actions succeed.' },
      { title: 'Using leverage and structure', content: 'Grabs can be broken by using leverage (twisting, pulling against the thumb, using body weight) and structure (maintaining your stance, using your whole body rather than just your arm). The goal is to break the grip efficiently, not to fight strength with strength.' },
      { title: 'Creating distance and escaping', content: 'Once you have broken the grab, create distance immediately. Do not stay to fight or punish the attacker. Escape to safety. Every second you remain engaged increases the risk of being re-grabbed or escalated to a more serious attack.' },
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
    reflection: 'In your training, do you break grips decisively, or do you hesitate and fight strength with strength? What does that teach you about real confrontations?',
    safety: 'Grab escape training must be supervised by qualified instructors. Practice with cooperative partners at controlled speeds. Never use excessive force.',
    quiz: [
      { question: 'What is the key to breaking a grab decisively?', options: ['Using arm strength', 'Using leverage and structure', 'Pulling away quickly', 'Fighting back harder'], answer: 1, explanation: 'Grabs are broken using leverage and structure, not arm strength. Use your whole body and efficient technique.' },
      { question: 'What should you do immediately after breaking a grab?', options: ['Stay and fight', 'Create distance and escape', 'Punish the attacker', 'Wait to see what happens'], answer: 1, explanation: 'After breaking a grab, create distance and escape immediately. Staying engaged increases your risk of being re-grabbed or escalated.' },
    ],
    mastery: [
      'Explain the principles of escaping grabs using leverage and structure.',
      'Demonstrate escaping from wrist, arm, and bear hug grabs.',
      'Create distance and escape immediately after breaking free.',
      'Identify and correct the four common grab-escape errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'An attacker grabs your wrist from the front.', action: 'You twist your arm to break the grip using leverage, then create distance and escape.', why: 'Twisting breaks the grip efficiently using leverage rather than strength, and creating distance prevents re-grabbing.' },
        { setup: 'An attacker grabs you from behind in a bear hug.', action: 'You drop your weight, use your elbows to strike, and break free, then create distance and escape.', why: 'Dropping your weight and using your whole body breaks the hold more effectively than arm strength alone.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Escape grabs using leverage and structure, then create distance and escape immediately. Do not stay to fight.' },
        { role: 'Facing it', detail: 'A grabbed person who breaks free decisively and escapes is hard to hold; hesitation allows the grab to escalate.' },
      ],
      adaptation: {
        cues: ['The type of grab (wrist, arm, bear hug, etc.)', 'The direction of the grab (front, side, behind)', 'Your ability to break free and escape'],
        adjustments: [
          { if: 'You can break free and escape', then: 'Do so immediately and decisively.' },
          { if: 'You cannot break free easily', then: 'Use more leverage, drop your weight, or strike to create an opening.' },
        ],
        learning: 'After each drill, note whether you broke free decisively or hesitated, and what that taught you about real confrontations.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Grab Escape Drills', targetReps: 20 },
  },
  'karate-kobudo-introduction': {
    id: 'karate-kobudo-introduction',
    subject: 'Karate',
    title: 'Introduction to Kobudo',
    level: 'Expert',
    duration: '12 min',
    description: 'Learn the history, philosophy, and foundational principles of Okinawan kobudo: the traditional weapons arts that complement empty-hand karate.',
    objectives: [
      'Understand the historical context of kobudo development',
      'Recognize the relationship between kobudo and empty-hand karate',
      'Learn the safety principles for weapons training',
      'Understand the philosophy of weapons as extensions of the body',
      'Recognize the four most common kobudo training errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Kobudo: weapons as extensions',
        caption: 'Kobudo weapons are extensions of empty-hand technique. The same principles of structure, power, and movement apply.',
        labels: ['Weapons extend the body', 'Same principles as empty-hand', 'Structure generates power', 'Training builds discipline'],
      },
    ],
    sections: [
      { title: 'Historical context', content: 'Kobudo developed in Okinawa alongside karate, often using farming and fishing tools as weapons when traditional weapons were banned. The bo staff, sai, nunchaku, and other weapons were adapted from everyday tools. This history explains why kobudo emphasizes practical, efficient technique rather than ornamental forms.' },
      { title: 'Relationship to empty-hand', content: 'Kobudo and karate share the same foundation: structure, power generation from the ground through the hips, and efficient movement. A weapon is an extension of the body, not a separate skill. The stances, footwork, and body mechanics you learned in empty-hand karate transfer directly to weapons work.' },
      { title: 'Safety and philosophy', content: 'Weapons training requires strict safety protocols: train only with wooden or padded trainers until technique is mastered, always train with qualified supervision, and never use weapons outside of training or legitimate self-defense. The philosophy of kobudo emphasizes discipline, control, and respect for the tools. Weapons are not toys or status symbols; they are serious training implements.' },
    ],
    principles: [
      'Weapons are extensions of empty-hand technique.',
      'The same principles of structure and power generation apply.',
      'Train only with safe implements until technique is mastered.',
      'Weapons demand discipline, control, and respect.',
    ],
    mistakes: [
      { title: 'Treating weapons as separate from empty-hand', explanation: 'Weapons work is an extension of empty-hand technique. The same principles apply; do not try to learn weapons as a completely separate skill.' },
      { title: 'Using live or metal weapons too early', explanation: 'Train with wooden or padded implements until technique is solid. Live weapons increase injury risk dramatically.' },
      { title: 'Ignoring safety protocols', explanation: 'Weapons training requires strict safety: qualified supervision, proper implements, and controlled environment. Never train alone or unsupervised.' },
      { title: 'Lack of respect for the weapon', explanation: 'Weapons are serious training implements, not toys. Treat them with respect and never use them outside of training or legitimate self-defense.' },
    ],
    practice: [
      'Review your empty-hand stances and movement, noting how they will transfer to weapons.',
      'If you have access to a wooden bo staff, hold it and feel its weight and balance.',
      'Practice basic stances while holding the weapon, maintaining the same structure.',
      'Review the safety protocols and commit to following them strictly.',
      'Study the history of kobudo and its relationship to karate.',
    ],
    reflection: 'How does your understanding of empty-hand structure and power generation prepare you for weapons work? What principles will transfer directly?',
    safety: 'Kobudo training must be supervised by qualified instructors. Train only with wooden or padded implements until technique is mastered. Never use weapons outside of training or legitimate self-defense. Treat weapons with respect and discipline.',
    quiz: [
      { question: 'What is the relationship between kobudo and empty-hand karate?', options: ['They are completely separate skills', 'Kobudo is more advanced than karate', 'Weapons are extensions of empty-hand technique', 'Kobudo replaces empty-hand training'], answer: 2, explanation: 'Kobudo weapons are extensions of the body, using the same principles of structure, power generation, and movement as empty-hand karate.' },
      { question: 'Why is safety especially important in kobudo training?', options: ['Because weapons are expensive', 'Because weapons can cause serious injury', 'Because kobudo is illegal', 'Because weapons are heavy'], answer: 1, explanation: 'Weapons can cause serious injury or death. Strict safety protocols (qualified supervision, proper implements, controlled environment) are essential.' },
    ],
    mastery: [
      'Explain the historical context of kobudo development.',
      'Describe the relationship between kobudo and empty-hand karate.',
      'Commit to following strict safety protocols in weapons training.',
      'Identify and correct the four common kobudo training errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You begin kobudo training after years of empty-hand karate.', action: 'You recognize that the same principles of structure, power, and movement apply to weapons work.', why: 'Weapons are extensions of the body, so the foundation you built in empty-hand training transfers directly to weapons.' },
        { setup: 'You are training with a partner using wooden weapons.', action: 'You maintain strict safety protocols: controlled speed, proper distance, and qualified supervision.', why: 'Weapons training requires discipline and safety awareness to prevent serious injury.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Kobudo extends your empty-hand skills to weapons, using the same principles of structure and power generation.' },
        { role: 'Facing it', detail: 'A kobudo practitioner uses weapons as extensions of their body, applying the same discipline and control as empty-hand technique.' },
      ],
      adaptation: {
        cues: ['Your empty-hand structure and movement', 'The weight and balance of the weapon', 'Safety protocols and supervision'],
        adjustments: [
          { if: 'You have solid empty-hand foundation', then: 'Apply the same principles to weapons work.' },
          { if: 'You are new to weapons', then: 'Start with wooden implements and train under qualified supervision.' },
        ],
        learning: 'After each training session, note which empty-hand principles transferred most effectively to weapons work.',
      },
    },
  },
  'karate-kobudo-bo-grip': {
    id: 'karate-kobudo-bo-grip',
    subject: 'Karate',
    title: 'Bo Staff: Grip and Stance',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn the foundational grip and stance for bo staff work: how to hold the weapon and position your body for efficient, powerful technique.',
    objectives: [
      'Understand the standard bo grip and hand placement',
      'Learn the basic bo stances and their purposes',
      'Maintain structure and balance while holding the weapon',
      'Understand how the bo extends your reach and power',
      'Recognize the four most common bo grip and stance errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bo grip and stance',
        caption: 'The bo is held with hands shoulder-width apart, extending your reach while maintaining structure and balance.',
        labels: ['Hands shoulder-width apart', 'Dominant hand near the rear', 'Stance provides stability', 'Bo extends reach and power'],
      },
    ],
    sections: [
      { title: 'The standard grip', content: 'The bo is held with hands approximately shoulder-width apart, with the dominant hand near the rear third of the staff. This grip allows for both powerful strikes and quick defensive movements. The grip should be firm but not tense, allowing the staff to move freely while maintaining control.' },
      { title: 'Bo stances', content: 'Bo work uses the same stances as empty-hand karate: front stance for forward power, back stance for defensive positioning, and horse stance for stability. The weapon extends your reach, but the stance provides the foundation for power and stability. Maintain the same structure and alignment you learned in empty-hand work.' },
      { title: 'Extending reach and power', content: 'The bo extends your effective range, allowing you to strike and defend from a distance. However, power still comes from the ground through the hips, just as in empty-hand technique. The weapon is a lever that amplifies your body movement; it does not generate power on its own.' },
    ],
    principles: [
      'Hold the bo with hands shoulder-width apart for control.',
      'Use the same stances as empty-hand karate for stability.',
      'Power comes from the body, not the weapon.',
      'Maintain structure and balance while holding the weapon.',
    ],
    mistakes: [
      { title: 'Gripping too tightly', explanation: 'A tense grip restricts movement and tires the hands quickly. Hold firmly but not rigidly.' },
      { title: 'Hands too close together', explanation: 'Hands too close reduce leverage and control. Maintain shoulder-width spacing.' },
      { title: 'Ignoring stance and structure', explanation: 'The weapon extends your reach, but power and stability come from your stance and structure. Do not neglect your foundation.' },
      { title: 'Thinking the weapon generates power', explanation: 'Power comes from the body moving through the weapon, not from the weapon itself. Use your whole body, not just your arms.' },
    ],
    practice: [
      'Hold the bo with proper grip and hand placement.',
      'Practice front stance, back stance, and horse stance while holding the bo.',
      'Maintain structure and balance while moving in stance with the weapon.',
      'Feel how the bo extends your reach while your stance provides stability.',
      'Practice transitions between stances while maintaining grip and structure.',
    ],
    reflection: 'How does holding the bo change your stance and structure? What adjustments do you need to make to maintain balance and power?',
    safety: 'Bo training must be supervised by qualified instructors. Train with wooden or padded staffs in a clear space. Be aware of your surroundings to avoid hitting others or objects.',
    quiz: [
      { question: 'Where should your hands be placed on the bo?', options: ['At the very ends', 'Shoulder-width apart', 'Close together in the middle', 'One hand at each end'], answer: 1, explanation: 'Hands should be approximately shoulder-width apart for optimal control, leverage, and balance.' },
      { question: 'Where does power in bo technique come from?', options: ['The weight of the bo', 'The speed of the arms', 'The body moving through the weapon', 'The grip strength'], answer: 2, explanation: 'Power comes from the body moving through the weapon, using the same principles of structure and hip rotation as empty-hand technique.' },
    ],
    mastery: [
      'Demonstrate proper bo grip and hand placement.',
      'Maintain structure and balance in stances while holding the bo.',
      'Explain how the bo extends reach while power comes from the body.',
      'Identify and correct the four common bo grip and stance errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You pick up a bo staff for the first time.', action: 'You grip it with hands shoulder-width apart and assume a front stance, maintaining the same structure as empty-hand work.', why: 'The same principles of structure and stance apply to weapons; the bo extends your reach but your body provides the foundation.' },
        { setup: 'You practice stances while holding the bo.', action: 'You maintain balance and structure, feeling how the weapon extends your reach while your stance provides stability.', why: 'The weapon is a lever that amplifies body movement; structure and stance provide the foundation for power.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'The bo extends your reach while your stance and structure provide the foundation for power and stability.' },
        { role: 'Facing it', detail: 'A bo practitioner uses the weapon to extend reach while maintaining the same discipline and structure as empty-hand work.' },
      ],
      adaptation: {
        cues: ['The weight and balance of the bo', 'Your stance and structure while holding it', 'The extended reach the weapon provides'],
        adjustments: [
          { if: 'You feel unbalanced', then: 'Check your stance and structure; the weapon should not compromise your foundation.' },
          { if: 'Your grip is too tight', then: 'Relax your hands while maintaining control; tension restricts movement.' },
        ],
        learning: 'After each practice session, note how your stance and structure support the weapon, and where you need to adjust.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Bo Stance Hold', initialTime: 60 },
  },
  'karate-kobudo-bo-strikes': {
    id: 'karate-kobudo-bo-strikes',
    subject: 'Karate',
    title: 'Bo Staff: Strikes and Blocks',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn the fundamental bo strikes and blocks: how to use the weapon to strike and defend using the same principles as empty-hand technique.',
    objectives: [
      'Learn the basic bo strikes: overhead, horizontal, and thrusting',
      'Learn the basic bo blocks: rising, downward, and middle',
      'Understand how power is generated in bo technique',
      'Apply the same principles as empty-hand strikes and blocks',
      'Recognize the four most common bo technique errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bo strikes and blocks',
        caption: 'Bo strikes and blocks use the same principles as empty-hand technique: power from the ground through the hips, structure, and efficient movement.',
        labels: ['Overhead strike', 'Horizontal strike', 'Thrusting strike', 'Rising, downward, and middle blocks'],
      },
    ],
    sections: [
      { title: 'Bo strikes', content: 'The fundamental bo strikes are the overhead strike (striking downward from above), the horizontal strike (striking from the side), and the thrusting strike (extending the point forward). Each strike uses the same principles as empty-hand strikes: power generated from the ground through the hips, structure maintained throughout, and efficient movement without wasted energy.' },
      { title: 'Bo blocks', content: 'The fundamental bo blocks are the rising block (defending against overhead attacks), the downward block (defending against low attacks), and the middle block (defending against middle-level attacks). Like empty-hand blocks, bo blocks redirect force rather than stopping it, using structure and angles to deflect attacks away from the body.' },
      { title: 'Power generation', content: 'Power in bo technique comes from the same source as empty-hand technique: the ground, through the legs, rotating through the hips, and extending through the arms and weapon. The bo is a lever that amplifies this power, but it does not generate power on its own. Efficient technique uses the whole body, not just the arms.' },
    ],
    principles: [
      'Bo strikes and blocks use the same principles as empty-hand technique.',
      'Power comes from the ground through the hips, not from the arms.',
      'Blocks redirect force using structure and angles.',
      'Efficient movement uses the whole body, not just the arms.',
    ],
    mistakes: [
      { title: 'Using only the arms', explanation: 'Power comes from the whole body, not just the arms. Use your hips and legs to generate force.' },
      { title: 'Tense, rigid movement', explanation: 'Tension restricts movement and reduces power. Stay relaxed and fluid while maintaining structure.' },
      { title: 'Stopping force with blocks instead of redirecting', explanation: 'Blocks should redirect force away, not stop it head-on. Use angles and structure to deflect attacks.' },
      { title: 'Wasted movement', explanation: 'Efficient technique uses the minimum necessary movement. Avoid swinging the bo wildly or adding unnecessary motion.' },
    ],
    practice: [
      'Practice the overhead strike, focusing on power from the hips.',
      'Practice horizontal strikes, maintaining structure throughout.',
      'Practice thrusting strikes, extending the point forward efficiently.',
      'Practice rising, downward, and middle blocks, redirecting force.',
      'Combine strikes and blocks in simple sequences, maintaining flow.',
    ],
    reflection: 'How do bo strikes and blocks feel compared to empty-hand technique? What principles transfer directly, and what adjustments do you need to make?',
    safety: 'Bo training must be supervised by qualified instructors. Train with wooden or padded staffs in a clear space. Be aware of your surroundings to avoid hitting others or objects. Start slowly and increase speed only when technique is solid.',
    quiz: [
      { question: 'Where does power in bo strikes come from?', options: ['The weight of the bo', 'The speed of the arms', 'The ground through the hips', 'The grip strength'], answer: 2, explanation: 'Power comes from the ground through the legs and hips, using the same principles as empty-hand technique. The bo amplifies this power but does not generate it.' },
      { question: 'How should bo blocks work?', options: ['Stop force head-on', 'Redirect force using structure and angles', 'Absorb the impact', 'Strike back immediately'], answer: 1, explanation: 'Bo blocks redirect force away using structure and angles, just like empty-hand blocks. They do not stop force head-on.' },
    ],
    mastery: [
      'Demonstrate basic bo strikes: overhead, horizontal, and thrusting.',
      'Demonstrate basic bo blocks: rising, downward, and middle.',
      'Generate power from the hips, not just the arms.',
      'Identify and correct the four common bo technique errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You practice an overhead strike with the bo.', action: 'You generate power from the ground through the hips, rotating the body as you strike downward.', why: 'Power comes from the whole body, not just the arms. The bo amplifies the force generated by your hips and legs.' },
        { setup: 'A partner attacks and you must block with the bo.', action: 'You use structure and angles to redirect the attack away from your body, rather than stopping it head-on.', why: 'Blocks redirect force using structure and angles, just like empty-hand blocks. This is more efficient than trying to stop force directly.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Bo strikes and blocks use the same principles as empty-hand technique: power from the ground through the hips, structure, and efficient movement.' },
        { role: 'Facing it', detail: 'A bo practitioner uses the weapon to extend reach and amplify power, but the foundation is the same as empty-hand technique.' },
      ],
      adaptation: {
        cues: ['Your stance and structure while striking or blocking', 'The power generated from the hips', 'The efficiency of your movement'],
        adjustments: [
          { if: 'Your strikes feel weak', then: 'Check your stance and hip rotation; power comes from the whole body.' },
          { if: 'Your blocks feel like shoving matches', then: 'Use angles to redirect force rather than stopping it head-on.' },
        ],
        learning: 'After each practice session, note which principles from empty-hand technique transferred most effectively to bo work.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Bo Strike Reps', targetReps: 20 },
  },
  'karate-kobudo-sai-basics': {
    id: 'karate-kobudo-sai-basics',
    subject: 'Karate',
    title: 'Sai: Grip and Fundamental Moves',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn the foundational grip and movements for sai work: how to hold and manipulate this unique weapon for striking, blocking, and trapping.',
    objectives: [
      'Understand the sai grip and hand placement',
      'Learn basic sai movements: strikes, blocks, and trapping',
      'Understand how the sai extends your defensive capabilities',
      'Apply the same principles as empty-hand technique',
      'Recognize the four most common sai technique errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Sai grip and movements',
        caption: 'The sai is held by the handle with the prongs extending forward, used for striking, blocking, and trapping attacks.',
        labels: ['Grip the handle firmly', 'Prongs extend forward', 'Strike with the point or shaft', 'Block and trap with the prongs'],
      },
    ],
    sections: [
      { title: 'The sai grip', content: 'The sai is held by the handle with the prongs extending forward. The grip should be firm but not tense, allowing for quick transitions between strikes, blocks, and trapping movements. The sai is typically used in pairs, one in each hand, but beginners start with a single sai to learn the fundamentals.' },
      { title: 'Basic movements', content: 'The fundamental sai movements include strikes (using the point or shaft), blocks (using the prongs to deflect attacks), and trapping (using the prongs to catch and control an opponent weapon or limb). Each movement uses the same principles as empty-hand technique: power from the ground through the hips, structure maintained throughout, and efficient movement without wasted energy.' },
      { title: 'Defensive capabilities', content: 'The sai is primarily a defensive weapon, designed to block, trap, and control rather than to strike aggressively. The prongs can catch and control an opponent weapon, while the shaft can be used for strikes and blocks. The sai extends your defensive capabilities by providing a tool to intercept and control attacks.' },
    ],
    principles: [
      'Hold the sai firmly but not rigidly, allowing for quick transitions.',
      'Use the same principles as empty-hand technique: power from the hips.',
      'The sai is primarily defensive: block, trap, and control.',
      'Efficient movement uses the whole body, not just the arms.',
    ],
    mistakes: [
      { title: 'Gripping too tightly', explanation: 'A tense grip restricts movement and tires the hands quickly. Hold firmly but not rigidly.' },
      { title: 'Using only the arms', explanation: 'Power comes from the whole body, not just the arms. Use your hips and legs to generate force.' },
      { title: 'Ignoring the defensive nature of the sai', explanation: 'The sai is primarily a defensive weapon. Focus on blocking, trapping, and controlling rather than aggressive striking.' },
      { title: 'Wasted movement', explanation: 'Efficient technique uses the minimum necessary movement. Avoid swinging the sai wildly or adding unnecessary motion.' },
    ],
    practice: [
      'Practice the sai grip, holding it firmly but not rigidly.',
      'Practice basic strikes with the point and shaft.',
      'Practice blocks using the prongs to deflect attacks.',
      'Practice trapping movements, catching and controlling imaginary attacks.',
      'Combine strikes, blocks, and traps in simple sequences.',
    ],
    reflection: 'How does the sai change your defensive capabilities compared to empty-hand technique? What new options does it provide?',
    safety: 'Sai training must be supervised by qualified instructors. Train with wooden or padded sai until technique is mastered. Be aware of your surroundings to avoid hitting others or objects. Start slowly and increase speed only when technique is solid.',
    quiz: [
      { question: 'What is the primary purpose of the sai?', options: ['Aggressive striking', 'Defensive blocking, trapping, and controlling', 'Throwing at opponents', 'Intimidation'], answer: 1, explanation: 'The sai is primarily a defensive weapon, designed to block, trap, and control attacks rather than to strike aggressively.' },
      { question: 'Where does power in sai technique come from?', options: ['The weight of the sai', 'The speed of the arms', 'The ground through the hips', 'The grip strength'], answer: 2, explanation: 'Power comes from the ground through the legs and hips, using the same principles as empty-hand technique. The sai amplifies this power but does not generate it.' },
    ],
    mastery: [
      'Demonstrate proper sai grip and hand placement.',
      'Demonstrate basic sai strikes, blocks, and trapping movements.',
      'Generate power from the hips, not just the arms.',
      'Identify and correct the four common sai technique errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You practice blocking with the sai.', action: 'You use the prongs to deflect an attack away from your body, redirecting the force.', why: 'The sai prongs are designed to catch and redirect attacks, using structure and angles to deflect force.' },
        { setup: 'You practice trapping with the sai.', action: 'You use the prongs to catch and control an imaginary weapon or limb, demonstrating the defensive capability.', why: 'The sai can trap and control attacks, providing a defensive option beyond simple blocking.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'The sai extends your defensive capabilities, allowing you to block, trap, and control attacks using the same principles as empty-hand technique.' },
        { role: 'Facing it', detail: 'A sai practitioner uses the weapon defensively, catching and controlling attacks rather than striking aggressively.' },
      ],
      adaptation: {
        cues: ['Your grip and structure while holding the sai', 'The defensive options the sai provides', 'The efficiency of your movements'],
        adjustments: [
          { if: 'Your blocks feel weak', then: 'Check your stance and hip rotation; power comes from the whole body.' },
          { if: 'Your traps feel ineffective', then: 'Use the prongs to catch and control, using angles and leverage.' },
        ],
        learning: 'After each practice session, note which defensive options the sai provides that empty-hand technique does not.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Sai Movement Reps', targetReps: 20 },
  },
  'karate-strategy-understanding': {
    id: 'karate-strategy-understanding',
    subject: 'Karate',
    title: 'Understanding Strategy',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn the mental game: how to think about fighting at a strategic level, reading the opponent as a system rather than reacting to individual techniques.',
    objectives: [
      'Understand strategy as the mental framework before and during combat',
      'Recognize that every opponent has patterns, habits, and preferences',
      'Learn to think in terms of systems and responses, not just moves',
      'Understand the difference between strategy and tactics',
      'Recognize the four most common strategic errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The strategic loop',
        caption: 'Strategy is the mental game: observe, orient, decide, act. The faster and more accurately you complete this loop, the more you control the exchange.',
        labels: ['Observe patterns', 'Orient to context', 'Decide on response', 'Act decisively'],
      },
    ],
    sections: [
      { title: 'Strategy is the mental game', content: 'Strategy is not a specific technique but a way of thinking about fighting. It is the mental framework you use to understand what is happening, predict what will happen next, and decide what to do about it. Strategy happens before the fight (game planning), during the fight (reading and adapting), and after the fight (learning from the exchange). Every fighter has a strategy, whether they know it or not; trained fighters make theirs conscious and deliberate.' },
      { title: 'Every opponent is a system', content: 'Every opponent has patterns, habits, and preferences: favorite techniques, preferred ranges, typical rhythms, and predictable responses to pressure. These are not random; they are the system that is the opponent. Reading this system is the core strategic skill: recognizing patterns, predicting responses, and choosing actions that exploit the system rather than fighting against it.' },
      { title: 'Strategy versus tactics', content: 'Strategy is the high-level framework: what kind of fight do I want, what patterns does my opponent show, how do I exploit them? Tactics are the specific technical executions: feints, combinations, rhythm changes, and real-time adaptations. Strategy without tactics is thinking without acting; tactics without strategy is acting without understanding. Both are necessary, and they operate at different levels of the same skill.' },
    ],
    principles: [
      'Strategy is the mental framework that guides tactical execution.',
      'Every opponent is a system with patterns you can read and exploit.',
      'The strategic loop (observe, orient, decide, act) must be fast and accurate.',
      'Strategy and tactics operate at different levels but must work together.',
    ],
    mistakes: [
      { title: 'Reacting instead of reading', explanation: 'Reacting to individual techniques is tactical, not strategic. Strategic thinking recognizes patterns and predicts what comes next.' },
      { title: 'Fighting the opponent instead of the system', explanation: 'If you fight the person instead of their patterns, you miss opportunities. Learn the system, then exploit it.' },
      { title: 'Thinking without acting', explanation: 'Strategy without tactics is useless. Every strategic insight must translate into a tactical action or it is wasted.' },
      { title: 'Ignoring the strategic loop', explanation: 'If you do not observe, orient, decide, and act in a continuous loop, you fall behind the opponent who does.' },
    ],
    practice: [
      'Watch a sparring match and identify three patterns the fighters show.',
      'Predict what each fighter will do next based on their patterns.',
      'Note when predictions are correct and when they fail, and why.',
      'In your own training, identify your own patterns and habits.',
      'Practice reading a partner during light sparring, naming patterns out loud.',
    ],
    reflection: 'In your last sparring session, did you recognize patterns in your opponent, or did you react to individual techniques? What patterns do you yourself show that an opponent could exploit?',
    safety: 'Strategic thinking is applied during controlled sparring. Keep contact light and controlled, and agree on intensity before starting.',
    quiz: [
      { question: 'What is strategy in the context of fighting?', options: ['A specific technique', 'The mental framework that guides tactical execution', 'The physical execution of techniques', 'The rules of the match'], answer: 1, explanation: 'Strategy is the mental framework that guides tactical execution. It is about understanding patterns, predicting responses, and choosing actions that exploit the opponent system.' },
      { question: 'Why is every opponent described as a system?', options: ['Because they are predictable robots', 'Because they have patterns, habits, and preferences you can read and exploit', 'Because they follow rules', 'Because they are all the same'], answer: 1, explanation: 'Every opponent has patterns, habits, and preferences that form a system. Reading this system is the core strategic skill.' },
    ],
    mastery: [
      'Explain the difference between strategy and tactics.',
      'Identify three patterns in an opponent during sparring.',
      'Predict opponent actions based on recognized patterns.',
      'Identify and correct the four common strategic errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice your opponent always throws a jab after stepping in.', action: 'You anticipate the jab and prepare a counter or evasion before it extends.', why: 'Recognizing patterns allows you to predict and prepare, rather than react after the fact.' },
        { setup: 'Your opponent prefers long range and retreats when you close.', action: 'You use feints and angle changes to close distance, then attack once inside their preferred range.', why: 'Understanding their preference allows you to manipulate the situation to your advantage.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Strategy is reading patterns, predicting responses, and choosing actions that exploit the opponent system rather than reacting to individual techniques.' },
        { role: 'Facing it', detail: 'A strategic opponent reads your patterns and exploits them; vary your responses and avoid predictable habits.' },
      ],
      adaptation: {
        cues: ['Opponent favorite techniques', 'Preferred ranges and rhythms', 'Typical responses to pressure'],
        adjustments: [
          { if: 'You recognize a pattern', then: 'Predict the next action and prepare a response.' },
          { if: 'Your predictions fail', then: 'Re-observe and update your model of their system.' },
        ],
        learning: 'After each exchange, note whether you read patterns or reacted to individual techniques, and what that taught you about strategic thinking.',
      },
    },
  },
  'karate-strategy-reading': {
    id: 'karate-strategy-reading',
    subject: 'Karate',
    title: 'Reading Opponents',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to read opponents as systems: identifying patterns, habits, and preferences, then using that information to predict and exploit.',
    objectives: [
      'Understand that every opponent has readable patterns',
      'Learn to identify favorite techniques, ranges, and rhythms',
      'Recognize typical responses to pressure and feints',
      'Use pattern recognition to predict and exploit',
      'Recognize the four most common reading errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Reading the opponent system',
        caption: 'Every opponent has favorite techniques, preferred ranges, typical rhythms, and predictable responses. Reading these patterns allows you to predict and exploit.',
        labels: ['Favorite techniques', 'Preferred ranges', 'Typical rhythms', 'Predictable responses'],
      },
    ],
    sections: [
      { title: 'Patterns are everywhere', content: 'Every opponent has patterns they repeat: favorite techniques they throw most often, preferred ranges where they feel comfortable, typical rhythms they establish, and predictable responses to pressure and feints. These patterns are not random; they are the system that is the opponent. Recognizing these patterns is the first step in strategic thinking.' },
      { title: 'Reading under pressure', content: 'Reading is easy in slow, controlled sparring. The strategic skill is reading under pressure: when you are being attacked, when you are tired, when the pace is fast. This requires training your attention to focus on the right cues (center mass, hips, weight shifts) rather than being distracted by fast-moving hands and feet.' },
      { title: 'Using what you read', content: 'Reading is useless unless it translates into action. Once you recognize a pattern, you must decide how to exploit it: anticipate and counter, feint to draw the response, or change your own behavior to break their read. Every strategic insight must translate into a tactical action or it is wasted.' },
    ],
    principles: [
      'Every opponent has readable patterns you can exploit.',
      'Reading must work under pressure, not just in slow sparring.',
      'Focus on center mass and hips, not fast-moving hands and feet.',
      'Every read must translate into a tactical action.',
    ],
    mistakes: [
      { title: 'Reading without acting', explanation: 'If you recognize a pattern but do not exploit it, the read is wasted. Translate every insight into action.' },
      { title: 'Watching hands and feet instead of center', explanation: 'Hands and feet move fast and distract. Focus on center mass, hips, and weight shifts for earlier, more reliable reads.' },
      { title: 'Assuming patterns will not change', explanation: 'Good opponents adapt when they realize you are reading them. Update your read continuously as they change.' },
      { title: 'Ignoring your own patterns', explanation: 'If you do not recognize your own patterns, the opponent can read and exploit you. Know your own habits and vary them.' },
    ],
    practice: [
      'During sparring, identify your opponent three favorite techniques.',
      'Note their preferred range and how they respond when you change it.',
      'Recognize their rhythm and how it changes under pressure.',
      'Use your reads to predict and counter at least three times.',
      'After the session, note what you read correctly and what you missed.',
    ],
    reflection: 'In your last sparring session, did you recognize patterns in your opponent, and did you use those reads to your advantage? What patterns do you show that an opponent could exploit?',
    safety: 'Reading practice should be done in controlled sparring with agreed intensity. Keep contact light and controlled.',
    quiz: [
      { question: 'What is the core skill of reading opponents?', options: ['Watching their hands closely', 'Recognizing patterns in their techniques, ranges, and rhythms', 'Predicting every move perfectly', 'Reacting faster than they can attack'], answer: 1, explanation: 'Reading opponents is about recognizing patterns in their techniques, ranges, rhythms, and responses. This allows you to predict and exploit rather than react.' },
      { question: 'Why is reading under pressure difficult?', options: ['Because opponents hide their patterns', 'Because attention must focus on the right cues despite distractions', 'Because patterns do not exist under pressure', 'Because you are too tired to think'], answer: 1, explanation: 'Reading under pressure is difficult because attention must focus on the right cues (center mass, hips) rather than being distracted by fast-moving hands and feet.' },
    ],
    mastery: [
      'Identify three patterns in an opponent during sparring.',
      'Use recognized patterns to predict and counter at least three times.',
      'Recognize and update your read as the opponent adapts.',
      'Identify and correct the four common reading errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice your opponent always throws a cross after a jab.', action: 'You anticipate the cross and prepare a counter or evasion before it extends.', why: 'Recognizing the pattern allows you to predict and prepare, rather than react after the fact.' },
        { setup: 'Your opponent retreats when you pressure them.', action: 'You apply steady pressure to force them back, then attack when they are off balance or near a boundary.', why: 'Understanding their response to pressure allows you to manipulate the situation to your advantage.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Reading opponents is recognizing patterns in their techniques, ranges, rhythms, and responses, then using that information to predict and exploit.' },
        { role: 'Facing it', detail: 'A reading opponent will exploit your patterns; vary your responses and avoid predictable habits.' },
      ],
      adaptation: {
        cues: ['Opponent favorite techniques', 'Preferred ranges and how they respond to range changes', 'Rhythm and how it changes under pressure'],
        adjustments: [
          { if: 'You recognize a pattern', then: 'Predict the next action and prepare a response.' },
          { if: 'Your predictions fail', then: 'Re-observe and update your model of their system.' },
        ],
        learning: 'After each exchange, note whether you read patterns correctly and used them to your advantage, and what that taught you about reading opponents.',
      },
    },
  },
  'karate-strategy-planning': {
    id: 'karate-strategy-planning',
    subject: 'Karate',
    title: 'Game Planning',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to prepare strategically for different types of opponents: developing game plans before the fight and adapting them as the fight progresses.',
    objectives: [
      'Understand game planning as strategic preparation',
      'Learn to develop plans for different opponent types',
      'Recognize when to stick to the plan versus when to adapt',
      'Use game planning to reduce surprises and increase confidence',
      'Recognize the four most common game planning errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The game plan',
        caption: 'A game plan is a strategic framework developed before the fight: what kind of opponent do I expect, what patterns will they show, how will I exploit them?',
        labels: ['Identify opponent type', 'Predict patterns', 'Plan exploitation', 'Adapt as needed'],
      },
    ],
    sections: [
      { title: 'Preparing before the fight', content: 'Game planning is strategic preparation: before the fight, you identify what kind of opponent you expect, what patterns they will show, and how you will exploit those patterns. This is not about memorizing specific techniques but about developing a mental framework for the fight. Good game planning reduces surprises and increases confidence because you have thought through likely scenarios.' },
      { title: 'Plans for different opponent types', content: 'Different opponent types require different game plans: aggressive opponents who pressure forward, defensive opponents who wait and counter, tall opponents with reach advantage, short opponents who close distance. Each type has predictable patterns and exploitable weaknesses. Developing a library of game plans for different types allows you to enter any fight with a strategic framework already in place.' },
      { title: 'Adapting the plan', content: 'No plan survives contact with the opponent unchanged. The strategic skill is recognizing when the plan is working (stick with it) and when it is failing (adapt it). This requires reading the fight continuously and updating your plan based on what you observe. Good fighters are not rigid; they adapt their plans while staying strategically focused.' },
    ],
    principles: [
      'Game planning is strategic preparation before the fight.',
      'Different opponent types require different game plans.',
      'No plan survives contact unchanged; adapt as needed.',
      'Stay strategically focused while adapting tactically.',
    ],
    mistakes: [
      { title: 'No plan at all', explanation: 'Entering a fight without a plan means you will react rather than act. Develop a plan for every opponent type you might face.' },
      { title: 'Rigid adherence to a failing plan', explanation: 'If the plan is not working, adapt it. Sticking to a failing plan out of stubbornness or fear is a strategic error.' },
      { title: 'Overcomplicating the plan', explanation: 'A simple plan that you can execute under pressure is better than a complex plan that falls apart. Keep plans focused and actionable.' },
      { title: 'Ignoring the opponent actual behavior', explanation: 'If the opponent does not match your expectations, update your plan based on what you observe, not what you predicted.' },
    ],
    practice: [
      'Develop a game plan for an aggressive opponent who pressures forward.',
      'Develop a game plan for a defensive opponent who waits and counters.',
      'Develop a game plan for a tall opponent with reach advantage.',
      'Test your game plans in sparring and note what works and what fails.',
      'Practice adapting your plan mid-fight when it is not working.',
    ],
    reflection: 'Do you enter fights with a strategic plan, or do you react to whatever happens? What opponent types do you struggle with, and what game plan could help?',
    safety: 'Game planning is applied during controlled sparring. Keep contact light and controlled, and agree on intensity before starting.',
    quiz: [
      { question: 'What is the purpose of game planning?', options: ['To memorize specific techniques', 'To develop a strategic framework before the fight', 'To predict every opponent move', 'To intimidate the opponent'], answer: 1, explanation: 'Game planning is strategic preparation: developing a mental framework for the fight based on what kind of opponent you expect and how you will exploit their patterns.' },
      { question: 'When should you adapt your game plan?', options: ['Never; stick to the plan no matter what', 'When the plan is not working or the opponent does not match expectations', 'Only when you are losing', 'Only at the start of the fight'], answer: 1, explanation: 'Adapt your game plan when it is not working or when the opponent does not match your expectations. Good fighters adapt while staying strategically focused.' },
    ],
    mastery: [
      'Develop game plans for at least three different opponent types.',
      'Test game plans in sparring and note what works and what fails.',
      'Adapt your plan mid-fight when it is not working.',
      'Identify and correct the four common game planning errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You know your opponent is aggressive and pressures forward.', action: 'You develop a game plan to use angle and distance to evade, then counter when they overcommit.', why: 'A game plan for an aggressive opponent focuses on evasion and counter, exploiting their tendency to overcommit.' },
        { setup: 'Your game plan is not working because the opponent is defensive, not aggressive.', action: 'You adapt by using feints and pressure to draw them out, then attack when they commit.', why: 'Adapting the plan based on what you observe allows you to stay strategically focused while changing tactics.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Game planning is developing a strategic framework before the fight, then adapting it as needed based on what you observe during the fight.' },
        { role: 'Facing it', detail: 'A prepared opponent will have a game plan for your patterns; vary your behavior and avoid predictable habits.' },
      ],
      adaptation: {
        cues: ['Opponent type and behavior', 'Whether your plan is working or failing', 'Changes in opponent behavior that require plan updates'],
        adjustments: [
          { if: 'Your plan is working', then: 'Stick with it and execute decisively.' },
          { if: 'Your plan is failing', then: 'Adapt based on what you observe, while staying strategically focused.' },
        ],
        learning: 'After each fight, note whether you had a game plan, whether it worked, and what you learned for next time.',
      },
    },
  },
  'karate-tactics-feints': {
    id: 'karate-tactics-feints',
    subject: 'Karate',
    title: 'Feints and Deception',
    level: 'Advanced',
    duration: '15 min',
    description: 'Master deception as a weapon: selling feints with full commitment, layering misdirection, and using deception both offensively and defensively.',
    objectives: [
      'Understand a feint as a question that demands an answer',
      'Sell a feint with eyes, weight, and rhythm, not just the hand',
      'Layer deception: feint, feint-feint, and the double bluff',
      'Use deception defensively to bait and slip counters',
      'Recognize the four most common deception errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Deception as a conversation',
        caption: 'A feint is not a fake attack; it is a real-looking threat that demands a defensive answer. The answer reveals what is open.',
        labels: ['Feint asks a question', 'Opponent answers with commitment', 'Real technique exploits the answer', 'Deception works both ways'],
      },
    ],
    sections: [
      { title: 'The feint is a question', content: 'A feint is not a half-hearted attack; it is a credible threat designed to force a defensive answer. When the opponent commits to blocking or evading the feint, they reveal what is now unprotected. The feint asks a question the body must answer, and the answer is the opening your real technique travels through. Without a believable question, there is no useful answer.' },
      { title: 'Selling the lie', content: 'A feint only works if it is believed. That means the whole body must commit: the eyes look at the target, the shoulders turn, the weight shifts, and the rhythm matches a real attack. A feint made only with the hand is read instantly and ignored. The more of your body sells the lie, the more the opponent must answer it, and the bigger the opening you create.' },
      { title: 'Deception is a conversation', content: 'Every feint teaches the opponent something. If you feint the same way twice, the second feint is read and countered. Skilled fighters evolve the conversation: feint the feint, change the target, or use the feint defensively to bait a counter you then slip and punish. Deception is not a single trick but an ongoing exchange of lies and reads that you must keep winning.' },
    ],
    principles: [
      'A feint must look real enough to force an answer.',
      'Commit with eyes, weight, and rhythm, not just the hand.',
      'Every deception teaches the opponent, so evolve it.',
      'Deception works defensively too, by baiting counters.',
    ],
    mistakes: [
      { title: 'Feinting without commitment', explanation: 'A half feint is ignored. Sell the lie with your whole body or do not feint at all.' },
      { title: 'Feinting the same way repeatedly', explanation: 'Repetition makes the feint readable and counterable. Vary target, timing, and setup.' },
      { title: 'Deceiving without a follow-up plan', explanation: 'If you do not know what you will do with the answer, the feint wastes the opening it bought. Decide the follow-up first.' },
      { title: 'Over-deceiving', explanation: 'Constant feinting telegraphs the deception itself and costs you real attacking opportunities. Mix truth and lie.' },
    ],
    practice: [
      'Shadow a feint with full body commitment, then check that you stay balanced.',
      'Have a partner call out whether each feint looked real or fake.',
      'Practice feint-feint-real sequences at controlled speed.',
      'Bait a counter with a defensive feint, then slip and respond.',
      'Vary feint targets: high, low, inside, outside, across a round.',
    ],
    reflection: 'In your last round, did your feints draw real answers, or were they ignored? What part of your body gave the lie away?',
    safety: 'Feint drills involve sudden changes of intent. Keep contact controlled and agreed, and keep space clear behind both partners.',
    quiz: [
      { question: 'What is a feint fundamentally designed to do?', options: ['Score a light touch', 'Force a defensive answer that reveals an opening', 'Tire the opponent', 'Replace a real attack'], answer: 1, explanation: 'A feint is a credible threat that demands a defensive commitment; that commitment reveals what is now open for the real technique.' },
      { question: 'Why must a feint involve the whole body?', options: ['To look impressive', 'Because a hand-only feint is read and ignored', 'To use more energy', 'To satisfy form requirements'], answer: 1, explanation: 'Only a feint sold with eyes, weight, shoulders and rhythm is believable enough to force a genuine defensive answer.' },
    ],
    mastery: [
      'Sell a feint that draws a real defensive answer from a partner.',
      'Execute a feint-feint-real sequence with balance throughout.',
      'Bait and slip a counter using defensive deception.',
      'Identify and correct the four common deception errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your opponent blocks every high attack reliably.', action: 'You feint high to draw the block, then attack the midsection the block left open.', why: 'The feint forces the committed block, and the real technique travels the line it uncovered.' },
        { setup: 'Your opponent has started ignoring your feints.', action: 'You throw a real attack where they expect a feint, then return to feinting once they respect it again.', why: 'Mixing truth and lie keeps the opponent guessing and restores the power of the feint.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Deception creates openings by forcing committed answers; sell it fully and always have a follow-up ready.' },
        { role: 'Facing it', detail: 'A deceptive opponent forces you to guess; answer feints with minimal commitment and watch the center, not the bait.' },
      ],
      adaptation: {
        cues: ['Whether your feints draw answers or are ignored', 'The opponent starting to read your setup', 'Counters arriving after your feints'],
        adjustments: [
          { if: 'Feints are ignored', then: 'Increase commitment or land one real attack to restore belief.' },
          { if: 'Feints are being countered', then: 'Feint the feint, or change target and timing.' },
        ],
        learning: 'After each round, note which feints drew answers, which were read, and what you changed in response.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Feint Reps', targetReps: 20 },
  },
  'karate-tactics-rhythm': {
    id: 'karate-tactics-rhythm',
    subject: 'Karate',
    title: 'Rhythm and Pace Control',
    level: 'Advanced',
    duration: '15 min',
    description: 'Control the tempo of the whole fight, not just single chains: impose your rhythm, break the opponent rhythm, and use pace as a deliberate weapon across the exchange.',
    objectives: [
      'Understand pace as a fight-level weapon, not just a chain tool',
      'Impose your rhythm on the opponent instead of accepting theirs',
      'Break an established opponent rhythm deliberately',
      'Speed up and slow down on purpose, with a reason',
      'Recognize the four most common pace-control errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Tempo is territory',
        caption: 'Whoever controls the tempo controls the fight. Fast pace pressures and overwhelms; slow pace resets and lets you read.',
        labels: ['Impose your rhythm', 'Break theirs', 'Speed up to overwhelm', 'Slow down to reset and read'],
      },
    ],
    sections: [
      { title: 'Pace is a weapon', content: 'Tempo is not background; it is territory you contest. A fast pace pressures the opponent, limits their thinking time, and can overwhelm their defense. A slow pace resets the exchange, conserves energy, and gives you space to read patterns. The fighter who chooses the pace chooses the kind of fight being had, and that choice is a major strategic advantage.' },
      { title: 'Imposing and breaking rhythm', content: 'If you let the opponent set the tempo, every exchange happens on their schedule. Impose your rhythm by making them react to you: attack on your beats, move on your beats, and force their responses to fit your timing. Once a rhythm is established, break it suddenly; the change itself is the weapon, because their body has committed to a schedule that no longer exists.' },
      { title: 'Changing gears on purpose', content: 'Drifting into a single pace is the error; deliberate gear changes are the skill. Burst to overwhelm when an opening appears, then lull to recover and observe when it closes. Each change must be intentional and matched to a reason: speed to exploit, slowness to read. Random pace changes confuse you as much as the opponent; purposeful ones control them.' },
    ],
    principles: [
      'Control the tempo or cede it to the opponent.',
      'Change gears deliberately, with a reason, never by drift.',
      'Fast pace pressures and overwhelms; slow pace resets and reads.',
      'A rhythm change only works if it is sudden and believable.',
    ],
    mistakes: [
      { title: 'Fighting at one pace the whole time', explanation: 'A constant pace is readable and lets the opponent settle. Vary tempo deliberately.' },
      { title: 'Letting the opponent set the tempo', explanation: 'If every exchange happens on their schedule, you are always reacting. Impose your beats.' },
      { title: 'Speeding up out of panic', explanation: 'Panic speed is unstructured and wastes energy. Speed up only to exploit a real opening.' },
      { title: 'Slowing down into passivity', explanation: 'A slow pace must stay active and reading, not become a resting target. Reset with intent.' },
    ],
    practice: [
      'Spar one round at a deliberately slow pace, focused only on reading.',
      'Spar one round at a fast pace, focused only on pressure.',
      'Switch gears mid-round on a partner cue, noting the effect.',
      'Establish a rhythm for three exchanges, then break it suddenly.',
      'After each round, name which pace favored you and why.',
    ],
    reflection: 'In your last rounds, who set the tempo: you or the opponent? When you changed pace, was it deliberate or accidental?',
    safety: 'Pace work raises intensity quickly. Agree on contact level, keep rounds short, and stop if either partner loses control of speed.',
    quiz: [
      { question: 'Why is controlling tempo a strategic advantage?', options: ['It looks dominant', 'It decides what kind of fight is being had and on whose schedule', 'It always wins points', 'It tires the referee'], answer: 1, explanation: 'The fighter who sets the pace chooses whether the fight is fast and pressuring or slow and reading, forcing the opponent to operate on an uncomfortable schedule.' },
      { question: 'What makes a rhythm change effective?', options: ['Doing it gradually', 'Doing it suddenly so the opponent committed schedule expires', 'Doing it only when winning', 'Doing it rarely'], answer: 1, explanation: 'A sudden, believable change invalidates the timing the opponent has committed to, creating the gap you exploit.' },
    ],
    mastery: [
      'Impose your rhythm on a partner for a full exchange sequence.',
      'Break an established rhythm suddenly to create an opening.',
      'Change gears deliberately with a stated reason each time.',
      'Identify and correct the four common pace-control errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your opponent is comfortable at a medium pace, reading you easily.', action: 'You burst to a fast pace for two exchanges to pressure them, then drop slow to reset while they are still reacting.', why: 'The sudden gear change invalidates their reading schedule and the slow phase lets you observe their recovery habits.' },
        { setup: 'Your opponent pressures you with a fast, relentless pace.', action: 'You deliberately slow the exchange, clinch or angle off to reset, and force them to restart their rhythm.', why: 'Denying their pace removes their advantage and returns the tempo decision to you.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Pace is a weapon you choose: fast to pressure and overwhelm, slow to reset and read, always changed on purpose.' },
        { role: 'Facing it', detail: 'A pace-controlling opponent forces you onto their schedule; refuse it by resetting, angling, or imposing your own beats.' },
      ],
      adaptation: {
        cues: ['Who is setting the tempo right now', 'Whether your pace changes are drawing reactions', 'Signs the opponent has settled into a rhythm'],
        adjustments: [
          { if: 'They have settled into a rhythm', then: 'Break it suddenly with a gear change or rhythm-breaking pause.' },
          { if: 'You are being paced by them', then: 'Reset with angle or distance, then impose your own beats.' },
        ],
        learning: 'After each round, note who controlled tempo, which gear changes worked, and which were accidental.',
      },
    },
    practiceEngine: { type: 'interval', label: 'Pace Intervals', workTime: 30, restTime: 15, totalIntervals: 4 },
  },
  'karate-tactics-adaptation': {
    id: 'karate-tactics-adaptation',
    subject: 'Karate',
    title: 'Tactical Adaptation',
    level: 'Advanced',
    duration: '15 min',
    description: 'Change tools and approaches in real time when plan A fails: mid-fight problem solving that keeps your structure, guard, and confidence intact.',
    objectives: [
      'Detect a failing tactic early instead of repeating it',
      'Change one variable at a time so you learn what worked',
      'Adapt without abandoning structure, guard, or balance',
      'Stay calm and problem-solve under pressure',
      'Recognize the four most common adaptation errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Adapt or stall',
        caption: 'When a tactic fails, the skill is changing it fast and cleanly: notice, choose a new tool, change one variable, keep your structure.',
        labels: ['Notice failure fast', 'Choose a new tool', 'Change one variable', 'Keep structure while adapting'],
      },
    ],
    sections: [
      { title: 'Noticing failure fast', content: 'The cost of a failing tactic grows every time you repeat it: you lose time, energy, and confidence while the opponent learns your pattern. Early detection is the core adaptation skill. Signs of failure include techniques landing on guard every time, ranges that never connect, and rhythms the opponent has already read. The moment you notice, change; do not hope the third attempt works because the first two did not.' },
      { title: 'Changing one variable at a time', content: 'Effective adaptation is scientific: change one variable and observe the result. Switch range, or angle, or rhythm, or technique, but not all four at once. If you change everything and it works, you do not know why; if it fails, you do not know what to fix. Single-variable changes build a real understanding of the opponent while keeping your own game coherent.' },
      { title: 'Adapting without falling apart', content: 'Adaptation must not cost you your fundamentals. Changing tools while your guard drops, your stance collapses, or your breathing stops is not adaptation, it is panic. Calm problem-solving keeps structure intact: you stay balanced, guarded, and breathing while you swap the tactic. The fighters who adapt best are the ones who stay relaxed enough to think.' },
    ],
    principles: [
      'Detect failure early; repetition of a losing tactic is a choice.',
      'Change one variable at a time so you learn what worked.',
      'Keep structure, guard, and breathing while you adapt.',
      'Calm problem-solving beats frantic switching.',
    ],
    mistakes: [
      { title: 'Repeating a failing tactic too long', explanation: 'Each repetition teaches the opponent and drains you. Change as soon as failure is clear.' },
      { title: 'Changing everything at once', explanation: 'Wholesale changes give no feedback about what actually worked. Change one variable and observe.' },
      { title: 'Adapting by abandoning fundamentals', explanation: 'Dropping guard or structure to change tactics trades one problem for a worse one. Adapt inside good form.' },
      { title: 'Freezing instead of adapting', explanation: 'Panic can look like doing nothing. If plan A fails, have a plan B ready to deploy, not a blank mind.' },
    ],
    practice: [
      'Spar with a partner instructed to shut down your favorite technique.',
      'When it fails twice, switch exactly one variable and note the result.',
      'Practice resetting to guard and re-engaging after a failed tactic.',
      'Run rounds where you must use three different tools, never repeating one.',
      'After each round, write down what you changed and whether it worked.',
    ],
    reflection: 'In your last round, how many times did you repeat a tactic that was already failing? What stopped you from changing sooner?',
    safety: 'Adaptation drills raise unpredictability. Keep contact controlled, maintain space, and stop if either partner becomes frantic rather than thoughtful.',
    quiz: [
      { question: 'Why change only one variable at a time when adapting?', options: ['It is slower and safer', 'So you learn which change actually produced the result', 'Because rules require it', 'To confuse the opponent'], answer: 1, explanation: 'Single-variable changes give clean feedback: you know what worked and can build on it, instead of guessing among many simultaneous changes.' },
      { question: 'What separates adaptation from panic?', options: ['Speed of change', 'Keeping structure, guard, and calm while changing tools', 'Number of techniques used', 'Volume of movement'], answer: 1, explanation: 'Adaptation solves the problem inside good form; panic abandons form and usually creates a worse problem.' },
    ],
    mastery: [
      'Detect a failing tactic within two repetitions and change it.',
      'Change one variable at a time and explain the result.',
      'Adapt while keeping guard, stance, and breathing intact.',
      'Identify and correct the four common adaptation errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your straight punch is being blocked every time.', action: 'You change one variable: attack the low line with a kick instead, keeping the same entry rhythm.', why: 'A single clean change tests whether the line was the problem, and the unchanged rhythm keeps your entry believable.' },
        { setup: 'Your opponent reads your rhythm and counters your entries.', action: 'You keep your techniques but break the rhythm with a pause, then enter on the new beat.', why: 'Changing only the rhythm isolates the variable that was being read, without discarding tools that still work.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Adaptation is fast, clean problem solving: notice failure, change one variable, keep your structure while you do it.' },
        { role: 'Facing it', detail: 'An adapting opponent will not stay predictable; force them into wholesale changes by shutting down single variables one at a time.' },
      ],
      adaptation: {
        cues: ['Techniques landing on guard repeatedly', 'Ranges that never connect', 'Rhythms the opponent has clearly read'],
        adjustments: [
          { if: 'One tool is failing', then: 'Change exactly one variable: line, range, rhythm, or tool.' },
          { if: 'Everything is failing', then: 'Reset distance, breathe, and re-establish structure before choosing a new approach.' },
        ],
        learning: 'After each round, list the changes you made, which were single-variable, and which produced a real result.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Adaptation Rounds', targetReps: 6 },
  },
  'karate-advanced-training-pressure': {
    id: 'karate-advanced-training-pressure',
    subject: 'Karate',
    title: 'Training Under Pressure',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to train strategic and tactical skills under realistic stress: sparring, scenarios, and fatigue inoculation that bridge the gap between drill and fight.',
    objectives: [
      'Understand that skills trained only in calm conditions fail under pressure',
      'Learn progressive pressure: from drills to scenarios to live sparring',
      'Recognize the signs of pressure overload and how to manage it',
      'Use pressure training to stress-inoculate decision making',
      'Recognize the four most common pressure-training errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The pressure gradient',
        caption: 'Skills must be trained progressively: calm drills, then scenarios with constraints, then live sparring. Skipping steps leaves gaps that appear under real stress.',
        labels: ['Calm drills build technique', 'Scenarios add constraints', 'Live sparring adds unpredictability', 'Pressure reveals training gaps'],
      },
    ],
    sections: [
      { title: 'Calm training is not enough', content: 'Techniques and tactics trained only in calm, cooperative conditions often fail under real pressure: fatigue, unpredictability, and genuine threat. The gap between drill and fight is where most fighters fall apart. Pressure training bridges this gap by progressively adding stress, unpredictability, and consequences until the skills hold up outside the dojo.' },
      { title: 'The pressure gradient', content: 'Pressure training follows a gradient: start with calm drills where you can focus on technique, add scenarios with constraints (limited techniques, specific goals), then move to live sparring with full unpredictability. Each step adds stress while keeping the skill learnable. Skipping steps leaves gaps that only appear when you cannot afford them. The gradient must be progressive, not sudden.' },
      { title: 'Managing overload', content: 'Pressure training only works if you stay in the learning zone, not the panic zone. Signs of overload include tunnel vision, loss of technique, and frantic rather than thoughtful responses. When overload appears, reduce pressure (slower pace, fewer constraints) and rebuild. The goal is stress inoculation, not trauma; too much pressure too fast creates bad habits and fear rather than skill.' },
    ],
    principles: [
      'Skills trained only in calm conditions fail under real pressure.',
      'Progress pressure gradually: drills, scenarios, live sparring.',
      'Stay in the learning zone, not the panic zone.',
      'Pressure reveals training gaps; use it to find and fix them.',
    ],
    mistakes: [
      { title: 'Skipping the pressure gradient', explanation: 'Jumping from calm drills to live sparring leaves gaps that appear under stress. Progress gradually.' },
      { title: 'Training in the panic zone', explanation: 'Too much pressure too fast creates fear and bad habits. Reduce pressure when overload appears.' },
      { title: 'Ignoring pressure-induced failures', explanation: 'Failures under pressure reveal real training gaps. Use them to identify what needs more calm training.' },
      { title: 'Avoiding pressure training entirely', explanation: 'Avoiding pressure means your skills never get tested. Progressive pressure is necessary for real skill.' },
    ],
    practice: [
      'Practice a technique in calm, cooperative conditions until it is solid.',
      'Add constraints: limited techniques, specific goals, or time pressure.',
      'Move to light live sparring with the same technique as a focus.',
      'Note when the technique breaks down and what pressure caused it.',
      'Return to calm drills to fix the breakdown, then re-test under pressure.',
    ],
    reflection: 'In your training, do you practice skills under progressive pressure, or only in calm conditions? When have your skills failed under pressure, and what did that reveal?',
    safety: 'Pressure training raises intensity and injury risk. Keep contact controlled, use protective equipment, and stop if either partner shows signs of panic or loss of control.',
    quiz: [
      { question: 'Why is calm training alone insufficient?', options: ['It is boring', 'Skills trained only in calm conditions often fail under real pressure', 'It does not build muscle memory', 'It is too slow'], answer: 1, explanation: 'The gap between calm training and real pressure is where most fighters fall apart. Progressive pressure training bridges this gap.' },
      { question: 'What is the pressure gradient?', options: ['A measure of force', 'Progressive stress: drills, scenarios, live sparring', 'A type of drill', 'A competition rule'], answer: 1, explanation: 'The pressure gradient is progressive stress: starting with calm drills, adding scenario constraints, then moving to live sparring with full unpredictability.' },
    ],
    mastery: [
      'Explain the pressure gradient and why it matters.',
      'Progress a skill from calm drills through scenarios to live sparring.',
      'Recognize signs of pressure overload and reduce pressure appropriately.',
      'Identify and correct the four common pressure-training errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your straight punch works in drills but fails in sparring.', action: 'You add progressive pressure: constrained sparring with only punches, then light live sparring with punch focus.', why: 'Progressive pressure bridges the gap between drill and fight, revealing where the technique breaks down.' },
        { setup: 'You feel overwhelmed during live sparring.', action: 'You reduce pressure by slowing the pace or adding constraints, then rebuild as you regain control.', why: 'Staying in the learning zone prevents panic and allows skill development rather than trauma.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Pressure training bridges the gap between drill and fight by progressively adding stress, unpredictability, and consequences.' },
        { role: 'Facing it', detail: 'A pressure-trained opponent has tested their skills under stress and knows where they break down.' },
      ],
      adaptation: {
        cues: ['Techniques failing under pressure', 'Signs of overload (tunnel vision, frantic responses)', 'Specific pressure points where skills break down'],
        adjustments: [
          { if: 'Skills fail under pressure', then: 'Identify the pressure point and return to calm drills to fix it.' },
          { if: 'Overload appears', then: 'Reduce pressure and rebuild from the learning zone.' },
        ],
        learning: 'After each pressure session, note where skills held up and where they broke down, and what that reveals about your training.',
      },
    },
    practiceEngine: { type: 'interval', label: 'Pressure Rounds', workTime: 60, restTime: 30, totalIntervals: 5 },
  },
  'karate-advanced-training-decisions': {
    id: 'karate-advanced-training-decisions',
    subject: 'Karate',
    title: 'Developing Decision Making',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn to make good decisions under fatigue and pressure: pattern recognition while tired, choosing tools in real time, and building the judgment that separates advanced from intermediate fighters.',
    objectives: [
      'Understand that decision making degrades under fatigue',
      'Learn to recognize patterns while tired and stressed',
      'Develop the judgment to choose the right tool for the moment',
      'Build decision-making speed through repetition and reflection',
      'Recognize the four most common decision-making errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Decision making under pressure',
        caption: 'Good decisions require pattern recognition, tool selection, and execution, all under fatigue and stress. Train each component separately, then together.',
        labels: ['Recognize patterns', 'Select the right tool', 'Execute decisively', 'Train under fatigue'],
      },
    ],
    sections: [
      { title: 'Decisions degrade under fatigue', content: 'Physical fatigue impairs cognitive function: pattern recognition slows, tool selection becomes reactive rather than strategic, and execution loses precision. This is why fighters make poor decisions late in rounds and why pressure training must include fatigue. Training decision making while fresh does not prepare you for decision making while tired. You must train the skill under the conditions where you will use it.' },
      { title: 'Pattern recognition while tired', content: 'Reading patterns is the foundation of decision making, but fatigue makes it harder: attention narrows, cues are missed, and the opponent system becomes harder to see. Training pattern recognition under fatigue requires deliberate practice: spar while tired, identify patterns anyway, and note when your reads fail. The skill is not reading when fresh but reading when exhausted.' },
      { title: 'Choosing tools in real time', content: 'Advanced fighters do not just have more tools; they choose the right tool for the moment faster and more accurately. This judgment comes from repetition and reflection: thousands of decisions made in training, each followed by reflection on whether it was correct. Over time, good decisions become automatic, not through thoughtlessness but through trained judgment. The goal is not to think less but to think better under pressure.' },
    ],
    principles: [
      'Decision making degrades under fatigue; train it while tired.',
      'Pattern recognition is the foundation of good decisions.',
      'Judgment comes from repetition and reflection on thousands of decisions.',
      'The goal is to think better under pressure, not to think less.',
    ],
    mistakes: [
      { title: 'Training decisions only while fresh', explanation: 'Fresh training does not prepare you for tired decisions. Train while fatigued to simulate real conditions.' },
      { title: 'Reacting instead of deciding', explanation: 'Reaction is tactical; decision is strategic. Recognize patterns and choose tools rather than just responding.' },
      { title: 'Not reflecting on decisions', explanation: 'Without reflection, you do not learn from decisions. Review each round and note what you decided and why.' },
      { title: 'Avoiding complex decisions', explanation: 'Simple decisions do not build judgment. Seek complex, ambiguous situations that force real choice.' },
    ],
    practice: [
      'Spar for several rounds until fatigued, then focus on reading patterns.',
      'After each exchange, name the decision you made and whether it was correct.',
      'Practice choosing tools in real time: call out your choice before executing.',
      'Review rounds and note where decisions were good, bad, or absent.',
      'Train pattern recognition under fatigue by sparring while tired and reading anyway.',
    ],
    reflection: 'In your last sparring session, did you make deliberate decisions or react automatically? When fatigued, did your decision making degrade, and how?',
    safety: 'Decision training under fatigue requires careful monitoring. Stop if either partner shows signs of dangerous fatigue or loss of control.',
    quiz: [
      { question: 'Why must decision making be trained under fatigue?', options: ['Because fatigue builds character', 'Because decision making degrades under fatigue and fresh training does not prepare you', 'Because fatigue makes you stronger', 'Because rules require it'], answer: 1, explanation: 'Physical fatigue impairs cognitive function. Training decisions while fresh does not prepare you for making them while tired.' },
      { question: 'What builds good decision-making judgment?', options: ['Natural talent', 'Repetition and reflection on thousands of decisions', 'Memorizing techniques', 'Watching videos'], answer: 1, explanation: 'Judgment comes from making thousands of decisions in training and reflecting on whether they were correct, building automatic good choices over time.' },
    ],
    mastery: [
      'Make good decisions while fatigued in sparring.',
      'Recognize patterns under stress and use them to choose tools.',
      'Reflect on decisions and learn from good and bad choices.',
      'Identify and correct the four common decision-making errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You are tired late in a round and your opponent pressures forward.', action: 'You recognize the pattern (aggressive pressure when you are tired) and choose to angle off and reset rather than engage.', why: 'Recognizing the pattern under fatigue allows you to make a strategic decision rather than react automatically.' },
        { setup: 'You have multiple tools available but hesitate.', action: 'You commit to the tool that matches the opening and execute decisively, accepting that imperfect action beats perfect hesitation.', why: 'Decisive action, even if imperfect, is better than hesitation that allows the opponent to act first.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Good decision making under pressure requires pattern recognition, tool selection, and decisive execution, all trained under fatigue.' },
        { role: 'Facing it', detail: 'A good decision-maker recognizes your patterns and chooses tools that exploit them, making you predictable to them.' },
      ],
      adaptation: {
        cues: ['Decision making degrading under fatigue', 'Hesitation or poor tool selection', 'Patterns you recognize under stress'],
        adjustments: [
          { if: 'Decisions degrade under fatigue', then: 'Simplify choices and focus on fundamentals until you recover.' },
          { if: 'You hesitate', then: 'Commit to a tool and execute decisively, learning from the result.' },
        ],
        learning: 'After each round, note where decisions were good, bad, or absent, and what that teaches you about your judgment.',
      },
    },
    practiceEngine: { type: 'interval', label: 'Decision Rounds', workTime: 45, restTime: 15, totalIntervals: 6 },
  },
  'karate-advanced-training-longterm': {
    id: 'karate-advanced-training-longterm',
    subject: 'Karate',
    title: 'Building Long-Term Skill',
    level: 'Advanced',
    duration: '15 min',
    description: 'Learn periodization, avoiding plateaus, and the multi-year progression from technique to tactics to strategy that builds lasting skill rather than short-term performance.',
    objectives: [
      'Understand periodization as planned variation over time',
      'Learn to recognize and break through plateaus',
      'Understand the progression from technique to tactics to strategy',
      'Build sustainable training habits that last years',
      'Recognize the four most common long-term training errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The long-term progression',
        caption: 'Skill building is a multi-year progression: technique first, then tactics, then strategy. Each stage builds on the previous, and skipping stages leaves gaps.',
        labels: ['Years 1-2: Technique', 'Years 3-4: Tactics', 'Years 5+: Strategy', 'Lifelong: Integration'],
      },
    ],
    sections: [
      { title: 'Periodization and planned variation', content: 'Periodization is the planned variation of training over time: periods of high intensity and volume followed by periods of lower intensity for recovery and integration. Without variation, the body and mind adapt to the stress and stop improving (plateau). With planned variation, you continue to improve over years rather than months. Periodization is not just for physical conditioning but for technical and tactical training as well.' },
      { title: 'Recognizing and breaking plateaus', content: 'Plateaus are inevitable: periods where progress stops despite consistent training. Recognizing them early is the skill. Signs include techniques that feel stuck, tactics that no longer work, and motivation that wanes. Breaking plateaus requires change: new techniques, different training partners, varied sparring, or temporary focus shifts. The plateau is not failure but a signal that your current training is no longer sufficient.' },
      { title: 'The multi-year progression', content: 'Skill building follows a progression: technique first (years 1-2), then tactics (years 3-4), then strategy (years 5+), then lifelong integration. Each stage builds on the previous. Trying to learn strategy before solid technique leaves gaps; staying at technique too long prevents advancement. The progression is not rigid but provides a framework for knowing where you are and what to focus on next.' },
    ],
    principles: [
      'Periodization is planned variation that prevents plateaus.',
      'Plateaus signal the need for change, not failure.',
      'Skill building follows a progression: technique, tactics, strategy, integration.',
      'Sustainable training habits matter more than short-term intensity.',
    ],
    mistakes: [
      { title: 'Training the same way forever', explanation: 'Without variation, you plateau. Change techniques, partners, and focus periodically.' },
      { title: 'Ignoring plateaus', explanation: 'Plateaus signal the need for change. Recognize them early and adjust training accordingly.' },
      { title: 'Skipping stages in the progression', explanation: 'Each stage builds on the previous. Solid technique before tactics, solid tactics before strategy.' },
      { title: 'Prioritizing short-term performance over long-term skill', explanation: 'Short-term wins (competition success) can come at the cost of long-term development. Balance both.' },
    ],
    practice: [
      'Review your training over the last year and note periods of progress and plateau.',
      'Identify what changes broke through past plateaus.',
      'Assess where you are in the progression: technique, tactics, or strategy focus.',
      'Plan variation for the next month: new techniques, different partners, varied sparring.',
      'Set long-term goals (years) alongside short-term goals (months).',
    ],
    reflection: 'Where are you in the multi-year progression? Have you hit plateaus, and what broke through them? Is your training varied enough to prevent future plateaus?',
    safety: 'Long-term training requires listening to your body and avoiding overtraining. Rest and recovery are part of sustainable training, not obstacles to it.',
    quiz: [
      { question: 'What is periodization?', options: ['A type of drill', 'Planned variation of training over time to prevent plateaus', 'A competition format', 'A recovery technique'], answer: 1, explanation: 'Periodization is planned variation: periods of high intensity followed by lower intensity for recovery and integration, preventing plateaus and enabling long-term progress.' },
      { question: 'What is the typical skill-building progression?', options: ['Strategy, tactics, technique', 'Technique, tactics, strategy, integration', 'Tactics, strategy, technique', 'Integration, technique, tactics'], answer: 1, explanation: 'Skill building follows a progression: technique first (years 1-2), then tactics (years 3-4), then strategy (years 5+), then lifelong integration.' },
    ],
    mastery: [
      'Explain periodization and its role in preventing plateaus.',
      'Recognize plateaus and implement changes to break through them.',
      'Assess your position in the multi-year skill-building progression.',
      'Identify and correct the four common long-term training errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You have been training the same way for months and feel stuck.', action: 'You implement periodization: vary techniques, change training partners, and plan recovery periods.', why: 'Planned variation breaks plateaus by providing new stimuli for adaptation and preventing staleness.' },
        { setup: 'You are focused on technique but your sparring performance is poor.', action: 'You assess your progression and shift focus to tactics, applying your technique in real-time decision making.', why: 'Recognizing your position in the progression allows you to focus on the appropriate stage rather than staying too long at a previous one.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Long-term skill building requires periodization, plateau recognition, and understanding the progression from technique to tactics to strategy.' },
        { role: 'Facing it', detail: 'A long-term practitioner has solid foundations and continues to progress, making them a challenging and evolving opponent.' },
      ],
      adaptation: {
        cues: ['Signs of plateau (stuck techniques, waning motivation)', 'Your position in the skill-building progression', 'Need for variation in training'],
        adjustments: [
          { if: 'You hit a plateau', then: 'Change techniques, partners, or focus to provide new stimuli.' },
          { if: 'You are ready to advance', then: 'Shift focus to the next stage in the progression (technique to tactics, tactics to strategy).' },
        ],
        learning: 'Review your training quarterly and assess progress, plateaus, and whether you are focusing on the right stage for your development.',
      },
    },
  },
  'karate-initiative-understanding': {
    id: 'karate-initiative-understanding',
    subject: 'Karate',
    title: 'Understanding Initiative',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn the concept of sen (initiative): who controls the moment an exchange begins, and why initiative is about timing the start, not just moving fast.',
    objectives: [
      'Understand initiative as control over when the exchange begins',
      'Recognize the three classical types of initiative (go no sen, sen no sen, sen sen no sen)',
      'Learn that initiative is timing the start, not raw speed',
      'Understand how initiative relates to but differs from timing',
      'Recognize the four most common initiative errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The three initiatives',
        caption: 'Initiative is control over the moment of engagement: respond after (go no sen), attack into their attack (sen no sen), or pre-empt before they commit (sen sen no sen).',
        labels: ['Go no sen: respond after', 'Sen no sen: attack the attack', 'Sen sen no sen: pre-empt intent', 'All three control the start'],
      },
    ],
    sections: [
      { title: 'Initiative is control of the start', content: 'Initiative (sen) is not about who moves fastest but about who controls when the exchange begins. The fighter with initiative chooses the moment of engagement; the fighter without it is forced to respond on the other schedule. Controlling the start is a deeper advantage than speed, because it lets you act into a moment you selected rather than reacting to one imposed on you.' },
      { title: 'The three classical initiatives', content: 'Japanese martial arts name three ways to take initiative. Go no sen is responding after the opponent commits: you let them start, then counter into their committed attack. Sen no sen is attacking into their attack: you launch as they launch, meeting or beating their technique in flight. Sen sen no sen is pre-empting before they fully commit: you attack the intent you have read, before their body has fully launched. Each has different risk and reward, and expert fighters move fluidly among all three.' },
      { title: 'Initiative versus timing', content: 'Timing (learned at intermediate level) is about when within an exchange to act: early, late, or correct. Initiative is one level deeper: it is about who decides that the exchange has begun at all. You can have perfect timing within an exchange the opponent initiated, or you can seize initiative and make them fight on your start. Expert practice integrates both: take the start, then win the moments within it.' },
    ],
    principles: [
      'Initiative is control over when the exchange begins, not raw speed.',
      'Go no sen responds after; sen no sen attacks into; sen sen no sen pre-empts.',
      'The fighter with initiative acts on a chosen moment, not an imposed one.',
      'Initiative and timing integrate: take the start, then win the moments.',
    ],
    mistakes: [
      { title: 'Confusing initiative with speed', explanation: 'Moving first is not initiative if the opponent baited you into it. Initiative is choosing the moment, not merely occupying it first.' },
      { title: 'Always using one initiative', explanation: 'Relying only on go no sen makes you reactive; only on sen sen no sen makes you guessy. Move fluidly among all three.' },
      { title: 'Ceding the start by hesitating', explanation: 'Hesitation hands initiative to the opponent. If you will not choose the start, they will.' },
      { title: 'Pre-empting without a read', explanation: 'Sen sen no sen requires reading intent. Attacking on a guess is not pre-emption, it is a gamble.' },
    ],
    practice: [
      'With a partner, practice go no sen: let them commit, then counter into it.',
      'Practice sen no sen: launch as they launch, meeting their technique in flight.',
      'Practice sen sen no sen: read their intent and attack before full commitment.',
      'Alternate among all three within one round, choosing deliberately.',
      'After each exchange, name which initiative you used and whether it was a choice.',
    ],
    reflection: 'In your last sparring, who chose the moment each exchange began: you or the opponent? Which of the three initiatives do you default to, and what does that reveal?',
    safety: 'Initiative drills involve launching into a moving partner. Keep contact controlled and agreed, and start slow until both partners can read commitment safely.',
    quiz: [
      { question: 'What is initiative (sen) fundamentally about?', options: ['Moving faster than the opponent', 'Controlling when the exchange begins', 'Striking harder', 'Blocking first'], answer: 1, explanation: 'Initiative is control over the moment of engagement: choosing when the exchange starts rather than reacting to a start imposed on you.' },
      { question: 'Which initiative attacks into the opponent attack as it launches?', options: ['Go no sen', 'Sen no sen', 'Sen sen no sen', 'None of these'], answer: 1, explanation: 'Sen no sen is attacking into the attack: launching as they launch, meeting or beating their technique in flight.' },
    ],
    mastery: [
      'Name and demonstrate the three classical initiatives.',
      'Choose initiative deliberately rather than defaulting to one.',
      'Distinguish initiative (the start) from timing (within the exchange).',
      'Identify and correct the four common initiative errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your opponent always waits for you to start, then counters.', action: 'You use sen sen no sen: read their counter intent and attack into it before it launches, or feint to draw the counter and slip it.', why: 'Against a counter-fighter, taking the earliest initiative or baiting their counter removes their go no sen advantage.' },
        { setup: 'Your opponent attacks first every time.', action: 'You shift to sen no sen: launch as they launch so you meet their attack in flight rather than after it lands.', why: 'Attacking into their attack denies them the clean committed strike their first-move strategy depends on.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Initiative is choosing when the exchange begins; move fluidly among go no sen, sen no sen, and sen sen no sen based on the opponent.' },
        { role: 'Facing it', detail: 'An initiative-controlling opponent makes you fight on their start; vary your own starts and refuse predictable commitment.' },
      ],
      adaptation: {
        cues: ['Who is choosing the start of each exchange', 'The opponent default initiative type', 'Moments when you hesitated and ceded the start'],
        adjustments: [
          { if: 'They always counter your starts', then: 'Use feints to draw the counter, or shift to sen no sen into their counter.' },
          { if: 'They always start first', then: 'Move to sen no sen or sen sen no sen to take the start back.' },
        ],
        learning: 'After each round, note who chose each start and which initiative you used, and whether it was deliberate.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Initiative Reps', targetReps: 15 },
  },
  'karate-initiative-sen-no-sen': {
    id: 'karate-initiative-sen-no-sen',
    subject: 'Karate',
    title: 'Sen no Sen: Attacking the Attack',
    level: 'Expert',
    duration: '15 min',
    description: 'Master the narrow, high-reward window of sen no sen: launching into the opponent attack as it begins, meeting or beating it in flight.',
    objectives: [
      'Understand sen no sen as attacking into the attack',
      'Learn to recognize the launch moment of an opponent technique',
      'Develop the commitment and line to beat an attack in flight',
      'Understand the risk and reward of the sen no sen window',
      'Recognize the four most common sen no sen errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The narrow window',
        caption: 'Sen no sen lives in the instant between the opponent decision and their full extension: launch into it and you meet the attack in flight.',
        labels: ['Opponent decides', 'Launch begins', 'Sen no sen window', 'Full extension (too late)'],
      },
    ],
    sections: [
      { title: 'The window between decision and extension', content: 'Every attack has a brief window between the moment the opponent decides and the moment their technique fully extends. Sen no sen lives in this window: you launch as they launch, so your technique meets or beats theirs in flight. The window is narrow, which is why sen no sen is high-risk and high-reward: succeed and you dominate the exchange; mistime it and you walk into their technique.' },
      { title: 'Recognizing the launch', content: 'To enter the window you must see the launch, not the finished technique. The launch is announced by the same preparation cues you learned at intermediate level: weight shift, hip turn, shoulder drop, and the breath that precedes effort. At expert level these reads must be fast enough to trigger your launch within a fraction of a second, which is why sen no sen depends on the reading skill built earlier.' },
      { title: 'Commitment and line', content: 'Sen no sen only works with full commitment and the correct line. A half-committed counter launched into an attack gets beaten by it. You must take a line that both intercepts their technique and reaches them: often an angle that removes you from their line while your counter travels theirs. The combination of decisive commitment and correct line is what turns a dangerous gamble into a controlled technique.' },
    ],
    principles: [
      'Sen no sen lives between the opponent decision and full extension.',
      'See the launch cues, not the finished technique.',
      'Full commitment and correct line are both required.',
      'The window is narrow: high risk, high reward.',
    ],
    mistakes: [
      { title: 'Launching on the finished technique', explanation: 'If you wait until the attack is extended, the window is gone and you are countering late, not doing sen no sen.' },
      { title: 'Half commitment into the window', explanation: 'A tentative counter loses the race. Commit fully or choose a different initiative.' },
      { title: 'Ignoring line and angle', explanation: 'Entering straight into their line while attacking gets you hit. Take an angle that removes you from their path.' },
      { title: 'Using sen no sen without a read', explanation: 'Launching on a guess into an attack is a gamble. The window must be opened by a real read of the launch.' },
    ],
    practice: [
      'With a partner throwing slow committed attacks, launch your counter as their launch begins.',
      'Gradually increase their speed while keeping your entry in the window.',
      'Practice taking an angle that removes you from their line as you counter.',
      'Drill full commitment: each rep either in the window or clearly not, no half entries.',
      'Review each rep: did you launch on the launch cue or on the finished technique?',
    ],
    reflection: 'In your drills, are you entering the window between decision and extension, or are you reacting to the finished attack? What cue triggers your launch?',
    safety: 'Sen no sen drills involve crossing into an incoming attack. Use controlled speed, protective equipment, and a partner who commits predictably at first.',
    quiz: [
      { question: 'Where does the sen no sen window live?', options: ['After the attack fully extends', 'Between the opponent decision and full extension', 'Before any intent exists', 'During the recovery'], answer: 1, explanation: 'Sen no sen lives in the brief window between the opponent deciding and their technique fully extending; you launch into it to meet the attack in flight.' },
      { question: 'What two things must accompany a sen no sen counter?', options: ['Speed and strength', 'Full commitment and correct line or angle', 'Patience and distance', 'Feint and pause'], answer: 1, explanation: 'A half-committed or straight-line counter into an attack gets beaten; decisive commitment plus a line that intercepts and removes you is required.' },
    ],
    mastery: [
      'Enter the sen no sen window against a committed attack reliably.',
      'Launch on the launch cue rather than the finished technique.',
      'Combine commitment with an angle that removes you from their line.',
      'Identify and correct the four common sen no sen errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your opponent commits to a straight punch.', action: 'You angle off their line and launch your counter as their shoulder turns, meeting the punch in flight.', why: 'Angling removes you from their path while your committed counter travels theirs inside the launch window.' },
        { setup: 'You keep getting hit because you launch late.', action: 'You shift your trigger from the extending arm to the earlier weight shift and hip turn.', why: 'Reading the earlier preparation cues opens the window in time; the finished arm is already too late.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Sen no sen beats an attack by launching into its window with full commitment and a line that intercepts while removing you.' },
        { role: 'Facing it', detail: 'A sen no sen fighter punishes committed attacks; vary commitment, feint the launch, or attack on unexpected beats.' },
      ],
      adaptation: {
        cues: ['The opponent launch cues (weight, hip, shoulder, breath)', 'Whether your entries land in the window or late', 'Their commitment level on each attack'],
        adjustments: [
          { if: 'You are consistently late', then: 'Trigger on earlier cues and pre-load your counter.' },
          { if: 'They feint the launch to bait you', then: 'Require a second confirmation cue before committing.' },
        ],
        learning: 'After each drill, note which cue triggered your launch and whether you were in the window, early, or late.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Sen no Sen Entries', targetReps: 12 },
  },
  'karate-initiative-reading-intent': {
    id: 'karate-initiative-reading-intent',
    subject: 'Karate',
    title: 'Reading Intent Before Motion',
    level: 'Expert',
    duration: '15 min',
    description: 'Perceive the opponent intent in the moment before physical motion begins, and learn to act on intent while distinguishing it from feints.',
    objectives: [
      'Understand intent as the moment before physical motion',
      'Learn the micro-cues of intent: breath, gaze, tension, weight',
      'Act on intent to enable sen sen no sen',
      'Distinguish genuine intent from feigned intent',
      'Recognize the four most common intent-reading errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The moment before motion',
        caption: 'Intent precedes motion: breath, gaze, tension, and a micro weight shift announce the decision before the body moves. Reading this is the basis of sen sen no sen.',
        labels: ['Intent forms', 'Micro-cues appear', 'Motion begins', 'Acting on intent pre-empts motion'],
      },
    ],
    sections: [
      { title: 'Intent precedes motion', content: 'Before any technique moves, the opponent has already decided. That decision produces micro-cues: a breath held or released, a gaze that locks or shifts, a subtle tension in the shoulders or jaw, and a micro weight shift. These appear a fraction of a second before visible motion. Reading intent means perceiving this pre-motion layer, which is the earliest possible signal and the foundation of sen sen no sen.' },
      { title: 'The micro-cues', content: 'The most reliable intent cues are involuntary or hard to fake: the breath that loads before effort, the gaze that fixes on the target, the tension that precedes explosion, and the tiny weight transfer that begins any real movement. Trained readers watch for this cluster rather than a single cue, because a cluster is far harder to feign than one isolated signal.' },
      { title: 'Intent versus feint', content: 'The expert challenge is that opponents feign intent to bait pre-emption. Genuine intent and feigned intent differ in commitment: a real intent has the breath, weight, and tension aligned toward action, while a feint usually lacks one element, most often the true weight transfer or the loading breath. Requiring the full cluster before acting protects you from bait, at the cost of sometimes being slightly late. Balancing that trade-off is expert judgment.' },
    ],
    principles: [
      'Intent precedes motion and announces itself in micro-cues.',
      'Read the cluster (breath, gaze, tension, weight), not a single cue.',
      'Genuine intent aligns all cues; feints usually miss one.',
      'Acting on intent enables sen sen no sen but risks bait.',
    ],
    mistakes: [
      { title: 'Acting on a single cue', explanation: 'One cue is easily feigned. Require the cluster of breath, gaze, tension, and weight before pre-empting.' },
      { title: 'Waiting for full motion', explanation: 'If you wait for visible technique, you have left the intent layer and lost sen sen no sen. Trust the cluster.' },
      { title: 'Pre-empting every tension', explanation: 'Not all tension is intent to attack. Over-reacting to noise makes you baitable and wastes energy.' },
      { title: 'Ignoring your own intent leakage', explanation: 'You broadcast the same micro-cues. Manage your breath, gaze, and tension so your intent is harder to read.' },
    ],
    practice: [
      'With a partner, watch only for the pre-motion cluster as they decide to attack slowly.',
      'Call out the moment of intent before any motion; partner confirms or denies.',
      'Have the partner mix real intent with feints; require the full cluster before calling.',
      'Practice acting on a confirmed intent cluster with a light pre-emptive technique.',
      'Observe your own micro-cues in a mirror or video and learn to minimize them.',
    ],
    reflection: 'Can you currently perceive the moment before motion, or do you only see motion itself? Which micro-cue is clearest for you, and which do you leak most?',
    safety: 'Intent-reading drills involve pre-emptive movement. Keep contact light or absent until reads are reliable, and use a cooperative partner at first.',
    quiz: [
      { question: 'What layer does reading intent perceive?', options: ['The finished technique', 'The moment before physical motion begins', 'The recovery phase', 'The scoring outcome'], answer: 1, explanation: 'Intent precedes motion; reading it means perceiving the micro-cues (breath, gaze, tension, weight) that appear before the body moves.' },
      { question: 'How do you protect against feigned intent?', options: ['Act faster', 'Require the full cluster of cues rather than a single one', 'Ignore all cues', 'Always pre-empt'], answer: 1, explanation: 'A real intent aligns breath, gaze, tension, and weight; feints usually miss one. Requiring the cluster filters bait at the cost of slight lateness.' },
    ],
    mastery: [
      'Perceive and call the intent moment before motion reliably.',
      'Read the cue cluster rather than single cues.',
      'Distinguish genuine intent from feints in mixed drills.',
      'Identify and correct the four common intent-reading errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your opponent breathes in, locks gaze, and shifts weight microscopically.', action: 'You recognize the full intent cluster and pre-empt with a light technique before their motion begins.', why: 'Acting on the aligned pre-motion cluster is sen sen no sen: you attack the decision before it becomes a technique.' },
        { setup: 'Your opponent twitches a shoulder but the weight and breath do not commit.', action: 'You hold, recognizing a feint missing the cluster, and let the fake expire.', why: 'Requiring the full cluster prevents you from being baited by isolated fake cues.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Reading intent lets you act on the decision before the motion, enabling sen sen no sen and the earliest possible control.' },
        { role: 'Facing it', detail: 'An intent-reader punishes your decisions before they move; mask your breath, gaze, and tension, and feign clusters carefully.' },
      ],
      adaptation: {
        cues: ['Breath loading or releasing', 'Gaze locking or shifting', 'Shoulder and jaw tension', 'Micro weight transfer'],
        adjustments: [
          { if: 'The full cluster appears', then: 'Act on intent with a pre-emptive technique or prepared response.' },
          { if: 'Only partial cues appear', then: 'Hold and require more confirmation before committing.' },
        ],
        learning: 'After each drill, note which clusters were genuine, which were feints, and which cue you relied on or missed.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Intent Reads', targetReps: 20 },
  },
  'karate-kata-bunkai': {
    id: 'karate-kata-bunkai',
    subject: 'Karate',
    title: 'Understanding Bunkai',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn to extract practical fighting applications from kata: understanding that kata movements encode techniques, principles, and strategies that can be applied in real combat.',
    objectives: [
      'Understand kata as encoded fighting knowledge, not just forms',
      'Learn to extract bunkai (applications) from kata movements',
      'Recognize that kata encode principles, not just specific techniques',
      'Understand the relationship between form and function',
      'Recognize the four most common bunkai errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Kata as encoded knowledge',
        caption: 'Kata movements encode fighting techniques, principles, and strategies. Bunkai is the process of extracting and understanding this encoded knowledge.',
        labels: ['Kata encodes fighting knowledge', 'Bunkai extracts applications', 'Principles generalize beyond specific techniques', 'Form and function are connected'],
      },
    ],
    sections: [
      { title: 'Kata as encoded knowledge', content: 'Kata are not just forms or exercises; they are encoded fighting knowledge passed down through generations. Each movement encodes techniques, principles, and strategies that can be applied in real combat. Understanding this transforms kata from meaningless repetition into a living library of fighting wisdom. The expert skill is extracting this knowledge through bunkai (application analysis).' },
      { title: 'Extracting applications', content: 'Bunkai is the process of analyzing kata movements to understand their fighting applications. This involves asking: what attack does this movement defend against? What technique does it execute? What principle does it embody? Good bunkai recognizes that kata often encode principles that generalize beyond the specific technique shown. A single movement may have multiple valid applications depending on context.' },
      { title: 'Form and function', content: 'The form of kata movements is not arbitrary; it reflects function. Why is the hand positioned that way? Why does the body turn? Why is the stance that depth? Each element serves a purpose in the encoded technique or principle. Understanding form and function allows you to extract deeper applications and adapt kata knowledge to real situations that differ from the form itself.' },
    ],
    principles: [
      'Kata encode fighting knowledge, not just forms.',
      'Bunkai extracts applications through analysis and questioning.',
      'Kata encode principles that generalize beyond specific techniques.',
      'Form reflects function; understand why movements are structured as they are.',
    ],
    mistakes: [
      { title: 'Treating kata as meaningless forms', explanation: 'If you do not extract applications, kata become empty repetition. Always ask what each movement encodes.' },
      { title: 'Only finding one application per movement', explanation: 'Kata movements often have multiple valid applications. Explore different contexts and interpretations.' },
      { title: 'Ignoring principles for specific techniques', explanation: 'The principle is more valuable than the specific technique. Extract the principle so you can apply it in novel situations.' },
      { title: 'Accepting form without understanding function', explanation: 'Every element of form has a reason. Ask why the movement is structured that way and what purpose it serves.' },
    ],
    practice: [
      'Choose one kata movement and analyze what attack it defends against.',
      'Determine what technique it executes and what principle it embodies.',
      'Find at least two different applications for the same movement.',
      'Practice the applications with a partner, testing their validity.',
      'Extract principles from the applications and note how they generalize.',
    ],
    reflection: 'Do you understand the applications of your kata, or do you perform them without understanding? What principles have you extracted from kata movements?',
    safety: 'Bunkai practice involves testing applications with a partner. Keep contact controlled and agreed, and use protective equipment as needed.',
    quiz: [
      { question: 'What is bunkai?', options: ['A type of kata', 'The process of extracting fighting applications from kata movements', 'A competition format', 'A training method'], answer: 1, explanation: 'Bunkai is analyzing kata movements to understand their fighting applications: what attacks they defend, what techniques they execute, and what principles they embody.' },
      { question: 'Why are principles more valuable than specific techniques in kata?', options: ['Principles are easier to learn', 'Principles generalize to novel situations beyond the specific technique shown', 'Principles are faster to execute', 'Principles score more points'], answer: 1, explanation: 'Principles generalize beyond the specific technique, allowing you to apply kata knowledge to real situations that differ from the form itself.' },
    ],
    mastery: [
      'Extract multiple applications from a single kata movement.',
      'Identify the principles encoded in kata movements.',
      'Explain why kata movements are structured as they are.',
      'Identify and correct the four common bunkai errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You are learning a kata with a downward block movement.', action: 'You analyze the movement: it defends against a front kick, uses hip rotation for power, and encodes the principle of redirecting force downward.', why: 'Extracting the application and principle transforms the movement from empty form into useful fighting knowledge.' },
        { setup: 'You encounter an attack not shown in your kata.', action: 'You apply the principles extracted from kata (redirecting force, using structure, maintaining distance) to handle the novel attack.', why: 'Principles generalize beyond specific techniques, allowing you to handle attacks you have not specifically trained.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Bunkai extracts fighting knowledge from kata: applications, principles, and strategies that can be applied in real combat.' },
        { role: 'Facing it', detail: 'A bunkai-trained opponent has a library of fighting knowledge encoded in their kata practice.' },
      ],
      adaptation: {
        cues: ['Kata movements and their structure', 'Possible attacks they defend against', 'Principles they embody'],
        adjustments: [
          { if: 'You find only one application', then: 'Explore different contexts and interpretations to find multiple valid applications.' },
          { if: 'You cannot see the function', then: 'Ask why the form is structured that way and what purpose each element serves.' },
        ],
        learning: 'After each bunkai session, note which applications you extracted, which principles you identified, and how they might generalize.',
      },
    },
  },
  'karate-kata-oyo': {
    id: 'karate-kata-oyo',
    subject: 'Karate',
    title: 'Oyo: Adapting Kata to Real Fighting',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn to adapt kata applications to real fighting situations: modifying techniques, combining principles, and using kata knowledge flexibly rather than rigidly.',
    objectives: [
      'Understand oyo as adapting kata applications to real situations',
      'Learn to modify techniques for different contexts',
      'Combine principles from multiple kata movements',
      'Use kata knowledge flexibly rather than rigidly',
      'Recognize the four most common oyo errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'From bunkai to oyo',
        caption: 'Bunkai extracts applications; oyo adapts them to real fighting. This means modifying techniques, combining principles, and using kata knowledge flexibly.',
        labels: ['Bunkai extracts applications', 'Oyo adapts to real situations', 'Modify techniques for context', 'Combine principles flexibly'],
      },
    ],
    sections: [
      { title: 'Adapting to reality', content: 'Real fighting rarely matches the exact scenarios encoded in kata. Oyo is the skill of adapting kata applications to real situations: modifying techniques for different ranges, angles, and opponent types. The kata provides the principle and the basic application; oyo adapts it to the messy reality of actual combat where nothing goes exactly as planned.' },
      { title: 'Modifying techniques', content: 'Not every kata technique will work exactly as shown in every situation. Oyo involves modifying techniques: changing the angle, adjusting the range, combining movements, or substituting similar techniques. The principle remains; the execution adapts. A downward block might become a downward strike; a front kick might become a knee strike at close range. The principle of redirecting force or attacking the center remains.' },
      { title: 'Combining principles', content: 'Advanced oyo combines principles from multiple kata movements or even multiple kata. You might use the distance principle from one kata, the timing from another, and the structure from a third, all in a single exchange. This creative combination is where kata knowledge becomes truly powerful: you are not limited to the specific applications shown, but can synthesize principles into novel solutions for novel problems.' },
    ],
    principles: [
      'Real fighting rarely matches kata exactly; adaptation is required.',
      'Modify techniques while preserving the principle.',
      'Combine principles from multiple sources for novel solutions.',
      'Flexibility beats rigidity; adapt kata knowledge to context.',
    ],
    mistakes: [
      { title: 'Rigidly applying kata exactly as shown', explanation: 'Real fighting is messy. Adapt applications to the actual situation rather than forcing reality to match kata.' },
      { title: 'Changing technique while losing principle', explanation: 'Modification should preserve the principle. If you change the technique, ensure the underlying principle still applies.' },
      { title: 'Sticking to one kata only', explanation: 'Combine principles from multiple kata for richer solutions. Do not limit yourself to one source.' },
      { title: 'Not practicing oyo', explanation: 'Adaptation is a skill that must be trained. Practice modifying applications in varied scenarios.' },
    ],
    practice: [
      'Take a bunkai application and practice it at different ranges.',
      'Modify the technique for close range, medium range, and long range.',
      'Practice the application against different attack types.',
      'Combine principles from two different kata movements in one exchange.',
      'Spar and consciously apply adapted kata principles in real time.',
    ],
    reflection: 'In your sparring, do you apply kata applications rigidly or adapt them to the situation? Have you combined principles from multiple sources to solve problems?',
    safety: 'Oyo practice involves adapting techniques in live situations. Keep contact controlled and use protective equipment as needed.',
    quiz: [
      { question: 'What is oyo?', options: ['A type of kata', 'Adapting kata applications to real fighting situations', 'A competition format', 'A meditation technique'], answer: 1, explanation: 'Oyo is adapting kata applications to real fighting: modifying techniques for different contexts, combining principles, and using kata knowledge flexibly rather than rigidly.' },
      { question: 'Why must kata applications be adapted?', options: ['Because kata are wrong', 'Because real fighting rarely matches the exact scenarios encoded in kata', 'Because kata are too slow', 'Because rules require it'], answer: 1, explanation: 'Real fighting is messy and unpredictable. Kata provide principles and basic applications, but oyo adapts them to the actual situation.' },
    ],
    mastery: [
      'Adapt a kata application to multiple different contexts.',
      'Modify techniques while preserving the underlying principle.',
      'Combine principles from multiple kata in a single exchange.',
      'Identify and correct the four common oyo errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'Your kata application works at medium range but you are now at close range.', action: 'You modify the technique: a punch becomes an elbow, a kick becomes a knee, while preserving the principle of attacking the center.', why: 'Adapting the technique to the range while preserving the principle allows you to apply kata knowledge in the actual situation.' },
        { setup: 'You face an attack not directly addressed in your kata.', action: 'You combine principles from multiple kata movements: distance management from one, timing from another, and structure from a third.', why: 'Combining principles from multiple sources allows you to handle novel attacks that no single kata application addresses directly.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Oyo adapts kata applications to real fighting by modifying techniques, combining principles, and using kata knowledge flexibly.' },
        { role: 'Facing it', detail: 'An oyo-skilled opponent can adapt their kata knowledge to any situation, making them unpredictable and versatile.' },
      ],
      adaptation: {
        cues: ['The actual range, angle, and context of the exchange', 'Which kata principles apply', 'How techniques must be modified'],
        adjustments: [
          { if: 'The exact technique does not fit', then: 'Modify it for the context while preserving the principle.' },
          { if: 'One principle is not enough', then: 'Combine principles from multiple sources.' },
        ],
        learning: 'After each sparring session, note where you adapted kata principles successfully and where rigid application failed.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Oyo Adaptations', targetReps: 15 },
  },
  'karate-kata-personal-expression': {
    id: 'karate-kata-personal-expression',
    subject: 'Karate',
    title: 'Personal Expression in Kata',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn to make kata your own: developing personal expression while preserving principles, understanding that mastery means making the art yours.',
    objectives: [
      'Understand personal expression as the mark of mastery',
      'Learn to adapt kata to your body type and strengths',
      'Preserve principles while developing personal style',
      'Understand the balance between tradition and innovation',
      'Recognize the four most common personal expression errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Tradition and innovation',
        caption: 'Mastery means making the art yours: adapting kata to your body and strengths while preserving the principles that make it work.',
        labels: ['Learn the tradition', 'Understand the principles', 'Adapt to your body and strengths', 'Make it your own'],
      },
    ],
    sections: [
      { title: 'Making the art yours', content: 'True mastery is not perfect imitation but personal expression. After learning kata correctly, understanding applications, and practicing oyo, you begin to make the art your own: adapting movements to your body type, emphasizing techniques that suit your strengths, and developing a personal style that is recognizably yours while still faithful to the principles. This is the mark of expert-level practice.' },
      { title: 'Adapting to your body', content: 'Every body is different: height, reach, flexibility, strength distribution, and natural movement patterns vary. Personal expression means adapting kata to your body: a tall practitioner might emphasize long-range techniques; a short practitioner might emphasize close-range and angular movement. The principles remain; the expression adapts to what your body does best. This is not changing kata but making them work optimally for you.' },
      { title: 'Tradition and innovation', content: 'Personal expression must balance tradition and innovation. Change too much and you lose the principles that make kata effective; change too little and you remain a copy rather than a practitioner. The balance is: preserve the principles absolutely, adapt the expression freely. The principle of redirecting force is sacred; whether you use a downward block or a circular deflection to achieve it is flexible. This balance allows the art to evolve while remaining true.' },
    ],
    principles: [
      'Mastery means making the art your own through personal expression.',
      'Adapt kata to your body type and natural strengths.',
      'Preserve principles absolutely; adapt expression freely.',
      'Balance tradition and innovation: too much change loses principles, too little prevents growth.',
    ],
    mistakes: [
      { title: 'Perfect imitation without understanding', explanation: 'Copying without understanding prevents personal expression. Understand principles first, then adapt.' },
      { title: 'Changing principles instead of expression', explanation: 'Adapt the execution, not the principle. If you change the principle, you are no longer doing the same art.' },
      { title: 'Ignoring your body type', explanation: 'Fighting against your natural body type wastes energy. Adapt kata to emphasize your strengths.' },
      { title: 'Personal expression without foundation', explanation: 'Personal expression requires deep understanding first. Do not skip the learning and oyo stages.' },
    ],
    practice: [
      'Perform a kata with perfect form, then perform it emphasizing your strengths.',
      'Identify which techniques suit your body type and which do not.',
      'Adapt techniques that do not suit you while preserving their principles.',
      'Develop a personal rhythm and expression while maintaining correct principles.',
      'Perform the kata as yourself, not as a copy of your instructor.',
    ],
    reflection: 'Is your kata performance a copy of your instructor, or is it recognizably yours while still faithful to principles? Have you adapted kata to your body type and strengths?',
    safety: 'Personal expression practice should still respect safety principles. Do not change movements in ways that compromise structure or control.',
    quiz: [
      { question: 'What marks expert-level kata practice?', options: ['Perfect imitation', 'Personal expression while preserving principles', 'Speed and power', 'Complexity'], answer: 1, explanation: 'Mastery means making the art your own: adapting kata to your body and strengths while preserving the principles that make them effective.' },
      { question: 'What should be preserved absolutely and what can be adapted freely?', options: ['Everything should be preserved', 'Principles preserved absolutely, expression adapted freely', 'Expression preserved, principles adapted', 'Nothing needs to be preserved'], answer: 1, explanation: 'The principles are sacred and must be preserved; the expression (specific techniques, rhythm, emphasis) can be adapted to your body and style.' },
    ],
    mastery: [
      'Perform kata with personal expression while preserving principles.',
      'Adapt techniques to your body type and strengths.',
      'Balance tradition and innovation appropriately.',
      'Identify and correct the four common personal expression errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You are tall with long reach but less explosive power.', action: 'You adapt your kata to emphasize long-range techniques and angular movement, using your reach advantage.', why: 'Adapting kata to your body type allows you to fight using your natural strengths rather than fighting against your body.' },
        { setup: 'You have developed a personal style that is recognizably yours.', action: 'You perform kata with your own rhythm and emphasis while still demonstrating all the correct principles.', why: 'Personal expression is the mark of mastery: you have made the art your own while remaining faithful to what makes it work.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Personal expression means making kata your own: adapting to your body and strengths while preserving principles.' },
        { role: 'Facing it', detail: 'A personally expressive practitioner fights in a way that suits their body optimally, making them efficient and effective.' },
      ],
      adaptation: {
        cues: ['Your body type and natural strengths', 'Which techniques suit you and which do not', 'Whether your expression preserves principles'],
        adjustments: [
          { if: 'A technique does not suit your body', then: 'Adapt it while preserving the principle it embodies.' },
          { if: 'Your expression loses principles', then: 'Return to the foundation and ensure principles are preserved.' },
        ],
        learning: 'After each practice, note how your personal expression has evolved and whether it still preserves all the principles.',
      },
    },
  },
  'karate-mastery-refinement': {
    id: 'karate-mastery-refinement',
    subject: 'Karate',
    title: 'Lifelong Refinement',
    level: 'Expert',
    duration: '15 min',
    description: 'Understand mastery as a lifelong process of refinement (shu-ha-ri): learning the form, breaking the form, and transcending the form over decades of practice.',
    objectives: [
      'Understand shu-ha-ri as the three stages of mastery',
      'Recognize that refinement continues for decades, not years',
      'Learn to refine fundamentals rather than accumulate techniques',
      'Understand depth over breadth in advanced practice',
      'Recognize the four most common refinement errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Shu-ha-ri',
        caption: 'Mastery progresses through shu (learn the form), ha (break the form), and ri (transcend the form). Each stage builds on the previous over decades.',
        labels: ['Shu: learn the form', 'Ha: break the form', 'Ri: transcend the form', 'Refinement never ends'],
      },
    ],
    sections: [
      { title: 'Shu: learn the form', content: 'The first stage, shu (protect/obey), is learning the form exactly as taught: correct technique, correct structure, correct principles. This stage is about faithful imitation and building a solid foundation. It takes years and cannot be rushed. Without solid shu, the later stages have nothing to build on or break away from.' },
      { title: 'Ha: break the form', content: 'The second stage, ha (break/detach), is questioning and adapting the form: understanding why techniques work, exploring variations, and adapting to your body and context. This is where bunkai and oyo live. You are no longer copying; you are understanding and modifying. Ha requires the solid foundation of shu, otherwise breaking the form is just doing it wrong.' },
      { title: 'Ri: transcend the form', content: 'The third stage, ri (separate/transcend), is moving beyond the form entirely: your movement expresses principles naturally without conscious reference to technique. The form is internalized so deeply that you create rather than recall. Ri is rare and takes decades. It is not a destination but a direction: refinement continues for as long as you practice.' },
    ],
    principles: [
      'Mastery progresses through shu (learn), ha (break), ri (transcend).',
      'Each stage requires the previous; you cannot skip shu.',
      'Refinement continues for decades, not years.',
      'Depth over breadth: refine fundamentals rather than accumulate techniques.',
    ],
    mistakes: [
      { title: 'Skipping shu to reach ha or ri', explanation: 'Without a solid foundation, breaking the form is just doing it wrong. Master the form first.' },
      { title: 'Staying in shu forever', explanation: 'Perfect imitation without understanding prevents growth. Progress to questioning and adapting.' },
      { title: 'Accumulating techniques instead of refining', explanation: 'More techniques is not mastery. Deep refinement of fundamentals yields more than a wide shallow repertoire.' },
      { title: 'Believing mastery is a destination', explanation: 'Mastery is a direction, not an endpoint. Refinement continues for life.' },
    ],
    practice: [
      'Identify which stage (shu, ha, ri) you are in for your core techniques.',
      'Refine one fundamental technique deeply rather than learning a new one.',
      'Question one technique you have always done: why does it work this way?',
      'Practice a technique until it expresses principle naturally, without conscious steps.',
      'Set a multi-year refinement goal rather than a multi-month technique goal.',
    ],
    reflection: 'Which stage are you in for your core techniques? Are you refining deeply or accumulating broadly? What would decades of refinement look like for you?',
    safety: 'Lifelong refinement includes listening to your body over decades. Adapt training to age and injury to sustain practice for life.',
    quiz: [
      { question: 'What are the three stages of mastery (shu-ha-ri)?', options: ['Learn, fight, teach', 'Learn the form, break the form, transcend the form', 'Beginner, intermediate, expert', 'Technique, tactic, strategy'], answer: 1, explanation: 'Shu-ha-ri: shu is learning the form faithfully, ha is questioning and adapting it, ri is transcending it so principles flow naturally.' },
      { question: 'Why is depth preferred over breadth in advanced practice?', options: ['Depth is easier', 'Deep refinement of fundamentals yields more than a wide shallow repertoire', 'Breadth is forbidden', 'Depth scores more points'], answer: 1, explanation: 'Refining fundamentals deeply builds transferable principle-based skill; accumulating many shallow techniques does not.' },
    ],
    mastery: [
      'Explain shu-ha-ri and identify your stage for core techniques.',
      'Refine a fundamental deeply rather than adding a new technique.',
      'Question and understand why a technique works as it does.',
      'Identify and correct the four common refinement errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You have learned a punch correctly for years.', action: 'You enter ha: you explore variations, adapt it to your body, and understand the principle of power generation behind it.', why: 'Breaking the form after solid shu deepens understanding and adapts the technique to you.' },
        { setup: 'After decades, your movement expresses principle without conscious technique.', action: 'You are in ri: you create appropriate responses naturally rather than recalling specific techniques.', why: 'Transcending the form means principles are internalized and flow without conscious reference to technique.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Lifelong refinement means progressing through shu-ha-ri and deepening fundamentals over decades rather than accumulating techniques.' },
        { role: 'Facing it', detail: 'A ri-stage practitioner moves naturally and unpredictably because they express principles rather than recall techniques.' },
      ],
      adaptation: {
        cues: ['Which stage you are in for each technique', 'Whether you are refining deeply or accumulating broadly', 'Signs you are ready to progress to the next stage'],
        adjustments: [
          { if: 'You are stuck in shu', then: 'Begin questioning and adapting (ha) once the form is solid.' },
          { if: 'You broke form without foundation', then: 'Return to shu and rebuild the correct form first.' },
        ],
        learning: 'Review annually which techniques have deepened and which stages you have progressed through.',
      },
    },
  },
  'karate-mastery-teaching': {
    id: 'karate-mastery-teaching',
    subject: 'Karate',
    title: 'Principles of Teaching',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn to transmit knowledge effectively: teaching as the deepest form of learning, structuring lessons, and guiding students through the stages of mastery.',
    objectives: [
      'Understand teaching as the deepest form of learning',
      'Learn to structure lessons from simple to complex',
      'Understand how to guide students through shu-ha-ri',
      'Learn to give feedback that builds rather than discourages',
      'Recognize the four most common teaching errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Teaching as learning',
        caption: 'Teaching forces you to understand deeply, structure clearly, and communicate precisely. It is the deepest form of learning and the mark of mastery.',
        labels: ['Teaching deepens understanding', 'Structure from simple to complex', 'Guide through shu-ha-ri', 'Feedback builds students'],
      },
    ],
    sections: [
      { title: 'Teaching is the deepest learning', content: 'To teach something you must understand it deeply enough to explain it, structure it clearly enough to sequence it, and communicate it precisely enough to transfer it. This forces a level of understanding that solo practice never reaches. Many masters say they truly learned their art when they began teaching it. Teaching is not separate from mastery; it is an expression of it.' },
      { title: 'Structuring from simple to complex', content: 'Effective teaching sequences material from simple to complex, from concrete to abstract. Students need a solid foundation (shu) before they can question (ha) or create (ri). A good teacher builds each layer on the previous, checks understanding before advancing, and never overwhelms with complexity too early. Structure is the scaffold on which student understanding is built.' },
      { title: 'Feedback that builds', content: 'Feedback must be specific, actionable, and balanced. Vague praise or vague criticism does not help. Specific feedback names exactly what to change and how. Balanced feedback acknowledges what works alongside what needs work, keeping students motivated. The goal is to build the student, not to demonstrate the teacher knowledge.' },
    ],
    principles: [
      'Teaching deepens the teacher understanding as much as the student.',
      'Sequence from simple to complex, concrete to abstract.',
      'Guide students through shu-ha-ri at their own pace.',
      'Feedback must be specific, actionable, and balanced.',
    ],
    mistakes: [
      { title: 'Teaching complexity too early', explanation: 'Students need solid foundations before advanced concepts. Sequence appropriately.' },
      { title: 'Vague feedback', explanation: 'Name exactly what to change and how. Vague praise or criticism does not build skill.' },
      { title: 'Teaching to demonstrate yourself', explanation: 'The goal is student growth, not showcasing the teacher. Keep focus on the student.' },
      { title: 'One-size-fits-all teaching', explanation: 'Different students learn differently and progress at different rates. Adapt your teaching to the student.' },
    ],
    practice: [
      'Teach a beginner one fundamental technique, sequencing from simple to complex.',
      'Give specific, actionable feedback on a partner technique.',
      'Explain a principle three different ways for three learning styles.',
      'Observe a student and identify which shu-ha-ri stage they are in.',
      'Reflect after teaching: what did you learn about your own understanding?',
    ],
    reflection: 'Have you taught others, and what did it reveal about your own understanding? Is your feedback specific and balanced, or vague?',
    safety: 'Teaching involves supervising others. Ensure safe practice environments and appropriate intensity for student level.',
    quiz: [
      { question: 'Why is teaching considered the deepest form of learning?', options: ['It is easier than practicing', 'It forces deep understanding, clear structure, and precise communication', 'It requires no skill', 'It is only for masters'], answer: 1, explanation: 'Teaching demands you understand deeply, structure clearly, and communicate precisely, reaching a level of mastery solo practice does not.' },
      { question: 'What makes feedback effective?', options: ['Being frequent', 'Being specific, actionable, and balanced', 'Being harsh', 'Being brief'], answer: 1, explanation: 'Effective feedback names exactly what to change and how, and balances what works with what needs work to keep students motivated.' },
    ],
    mastery: [
      'Teach a fundamental technique sequenced from simple to complex.',
      'Give specific, actionable, balanced feedback.',
      'Identify a student shu-ha-ri stage and teach appropriately.',
      'Identify and correct the four common teaching errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'A beginner struggles with a punch.', action: 'You break it into simple components, teach each, then recombine, giving specific feedback at each step.', why: 'Sequencing from simple to complex with specific feedback builds solid understanding step by step.' },
        { setup: 'A student is ready to question techniques.', action: 'You guide them into ha: exploring variations and understanding principles behind the form.', why: 'Recognizing the student stage allows you to teach at the right level rather than forcing shu on a ready ha student.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Teaching transmits knowledge while deepening your own understanding; structure, sequence, and feedback are the tools.' },
        { role: 'Facing it', detail: 'A teaching-skilled master can accelerate your growth by sequencing and feedback precisely matched to your stage.' },
      ],
      adaptation: {
        cues: ['The student current stage and learning style', 'Whether feedback is landing and producing change', 'Signs of overwhelm or boredom'],
        adjustments: [
          { if: 'Student is overwhelmed', then: 'Simplify and return to earlier components.' },
          { if: 'Student is bored', then: 'Increase complexity or introduce ha-level questioning.' },
        ],
        learning: 'After each teaching session, note what your students learned and what you learned about your own understanding.',
      },
    },
  },
  'karate-mastery-coaching-eyes': {
    id: 'karate-mastery-coaching-eyes',
    subject: 'Karate',
    title: 'Developing the Coaching Eye',
    level: 'Expert',
    duration: '15 min',
    description: 'Learn to see errors and strengths in others movement: the diagnostic skill of identifying what is wrong, why it is wrong, and what fix to prescribe.',
    objectives: [
      'Understand the coaching eye as diagnostic perception',
      'Learn to identify errors in structure, timing, and strategy',
      'Understand root causes versus symptoms',
      'Learn to prescribe the right fix for each root cause',
      'Recognize the four most common coaching-eye errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'See, diagnose, prescribe',
        caption: 'The coaching eye sees the error, diagnoses the root cause (not the symptom), and prescribes the specific fix that addresses that cause.',
        labels: ['See the error', 'Diagnose root cause', 'Prescribe the fix', 'Verify the correction'],
      },
    ],
    sections: [
      { title: 'Diagnostic perception', content: 'The coaching eye is the ability to watch movement and see what is actually happening, not what you expect to see. It notices deviations in structure, timing, distance, and strategy. This perception is trained, not innate: it develops through watching thousands of repetitions and learning what correct and incorrect look like in detail.' },
      { title: 'Root cause versus symptom', content: 'A visible error is often a symptom of a deeper root cause. A punch that lacks power (symptom) may stem from poor hip rotation (cause) or poor stance (deeper cause). Fixing the symptom without the cause fails. The coaching eye traces the error to its root: what upstream element is producing this downstream problem? Prescribing at the root cause yields lasting correction.' },
      { title: 'Prescribing the fix', content: 'Once the root cause is identified, prescribe the specific fix that addresses it: a drill, a cue, a constraint, or a demonstration. Good prescriptions are minimal and targeted: the smallest change that corrects the root cause. Over-prescribing (changing many things at once) confuses the student and obscures what actually fixed the problem.' },
    ],
    principles: [
      'The coaching eye sees what is actually happening, not what is expected.',
      'Trace visible errors to their root causes, not just symptoms.',
      'Prescribe the smallest targeted fix for the root cause.',
      'Verify the correction before moving on.',
    ],
    mistakes: [
      { title: 'Fixing symptoms instead of causes', explanation: 'Correcting the visible error without the root cause means the error returns. Trace to the cause.' },
      { title: 'Over-prescribing', explanation: 'Changing many things at once confuses the student and hides what worked. Prescribe minimally.' },
      { title: 'Seeing what you expect', explanation: 'Watch what is actually happening, not your assumption. Train perception against reality.' },
      { title: 'Not verifying correction', explanation: 'Confirm the fix worked before advancing. Unverified corrections often did not take.' },
    ],
    practice: [
      'Watch a partner perform a technique and name one error you see.',
      'Trace that error to its likely root cause.',
      'Prescribe one minimal fix and have them apply it.',
      'Verify whether the correction took; if not, re-diagnose.',
      'Watch video of skilled and unskilled performers and compare what you see.',
    ],
    reflection: 'When you watch others, do you see actual movement or your expectations? Can you trace errors to root causes, or do you only see symptoms?',
    safety: 'Coaching involves giving corrections; ensure feedback is respectful and the student applies fixes safely.',
    quiz: [
      { question: 'What is the coaching eye?', options: ['Natural talent for seeing', 'Trained diagnostic perception of movement errors and strengths', 'Watching competitions', 'Judging appearance'], answer: 1, explanation: 'The coaching eye is trained perception that sees what is actually happening in movement: errors and strengths in structure, timing, distance, and strategy.' },
      { question: 'Why trace errors to root causes?', options: ['It is faster', 'Fixing symptoms without causes means the error returns', 'Causes are easier to see', 'Rules require it'], answer: 1, explanation: 'A visible error is often a symptom of a deeper cause; correcting only the symptom fails because the cause keeps producing it.' },
    ],
    mastery: [
      'Identify errors in a partner movement accurately.',
      'Trace a visible error to its root cause.',
      'Prescribe a minimal targeted fix and verify it worked.',
      'Identify and correct the four common coaching-eye errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'A student punch lacks power.', action: 'You see the symptom (weak punch), trace it to the root cause (hips not rotating), and prescribe a hip-rotation drill.', why: 'Fixing the root cause (hip rotation) corrects the symptom (weak punch) lastingly, whereas cueing the arm alone would fail.' },
        { setup: 'A student keeps losing balance in kicks.', action: 'You diagnose the root cause as poor support-leg structure, not the kicking leg, and prescribe support-leg balance holds.', why: 'The visible error (kick balance) stems from the support leg; correcting the support structure resolves the kick.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'The coaching eye sees errors, diagnoses root causes, and prescribes minimal targeted fixes, verifying each correction.' },
        { role: 'Facing it', detail: 'A coach with a trained eye accelerates your correction by fixing root causes you cannot see yourself.' },
      ],
      adaptation: {
        cues: ['Deviations in structure, timing, distance, strategy', 'Whether an error is symptom or cause', 'Whether a prescribed fix actually took'],
        adjustments: [
          { if: 'The fix did not take', then: 'Re-diagnose; you may have treated a symptom, not the cause.' },
          { if: 'Multiple errors appear', then: 'Address the root cause first; downstream errors may self-correct.' },
        ],
        learning: 'After each coaching session, note which diagnoses were correct and which prescriptions actually produced lasting correction.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Coaching Observations', targetReps: 10 },
  },
  'meditation-foundations-posture': {
    id: 'meditation-foundations-posture',
    subject: 'Meditation',
    title: 'Sitting Posture and Setup',
    level: 'Beginner',
    duration: '10 min',
    description: 'Learn a stable, relaxed sitting posture that supports alertness without strain, and set up a repeatable practice space and time.',
    objectives: [
      'Understand that posture supports alertness, not just comfort',
      'Set a tall but relaxed spine and a stable base',
      'Choose a seat or cushion that suits your body',
      'Establish a consistent time and place for practice',
      'Recognize the four most common posture errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The aligned, relaxed seat',
        caption: 'Good meditation posture is tall but relaxed: spine stacked, base stable, shoulders and jaw loose, alertness supported without strain.',
        labels: ['Spine tall but relaxed', 'Stable seated base', 'Shoulders and jaw loose', 'Alert without strain'],
      },
    ],
    sections: [
      { title: 'Posture supports attention', content: 'Meditation posture is not about looking a certain way; it is about creating a body that supports alertness without strain. A collapsed spine invites drowsiness; an over-rigid spine invites tension and pain. The aim is a middle way: tall enough to stay awake, relaxed enough to stay still. The body becomes a stable platform for the mind.' },
      { title: 'The aligned, relaxed seat', content: 'Sit with the spine stacked naturally, crown of the head lifting gently, chin slightly tucked. Let the shoulders drop and the jaw and hands relax. If on the floor, sit on a cushion so the hips tilt forward and the knees rest down; if on a chair, sit forward with feet flat. The base should feel stable and grounded, not balanced precariously.' },
      { title: 'Setting up practice', content: 'Consistency beats intensity. Choose a regular time and a quiet place, and keep the setup the same each day so the environment itself becomes a cue for practice. Start short, five to ten minutes, and grow gradually. A repeatable setup removes decision-making and lets the practice become a habit rather than a negotiation.' },
    ],
    principles: [
      'Posture supports alertness without strain.',
      'Tall but relaxed: stacked spine, stable base, loose shoulders and jaw.',
      'Consistency of time and place builds the habit.',
      'Start short and grow gradually.',
    ],
    mistakes: [
      { title: 'Slouching into drowsiness', explanation: 'A collapsed spine invites sleepiness. Lengthen the spine gently to stay alert.' },
      { title: 'Over-rigid posture', explanation: 'Gripping the body creates tension and pain. Relax what does not need to hold you up.' },
      { title: 'Lying down when learning', explanation: 'Lying down usually leads to sleep while building the habit. Sit upright until stability is established.' },
      { title: 'Changing setup every session', explanation: 'A variable setup forces decisions each time. Keep time and place consistent so practice becomes automatic.' },
    ],
    practice: [
      'Set up your seat (cushion or chair) in a quiet, consistent place.',
      'Sit with a tall but relaxed spine; let shoulders and jaw loosen.',
      'Set a timer for five minutes and simply remain seated and alert.',
      'Notice where tension or slouching appears and adjust gently.',
      'Repeat at the same time daily, adding a minute each week.',
    ],
    reflection: 'Where does your posture tend to fail: slouching into dullness or tightening into strain? What does your ideal alert-relaxed seat feel like?',
    safety: 'Meditation is not endurance of pain. If you feel sharp pain, adjust your posture or use a chair. Consult a professional for medical conditions affecting sitting.',
    quiz: [
      { question: 'What is the purpose of meditation posture?', options: ['To look correct', 'To support alertness without strain', 'To build muscle', 'To impress others'], answer: 1, explanation: 'Posture creates a body that stays awake and still: tall enough for alertness, relaxed enough to avoid tension and pain.' },
      { question: 'Why keep time and place consistent?', options: ['It is a rule', 'Consistency removes decisions and builds the habit', 'It looks disciplined', 'It is required'], answer: 1, explanation: 'A repeatable setup makes the environment a cue for practice, turning meditation into a habit rather than a daily negotiation.' },
    ],
    mastery: [
      'Set a tall but relaxed sitting posture without strain.',
      'Choose a seat or cushion suited to your body.',
      'Establish a consistent time and place for practice.',
      'Identify and correct the four common posture errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You feel drowsy a few minutes into sitting.', action: 'You gently lengthen the spine, lift the crown, and open the eyes slightly to restore alertness.', why: 'Alertness follows posture; straightening the spine counteracts the slouch that invites sleep.' },
        { setup: 'Your back aches from holding too rigidly.', action: 'You soften the shoulders and jaw and let the base, not muscular gripping, support you.', why: 'Relaxing unnecessary tension removes strain while the stable base keeps you upright.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Posture and setup create a stable, alert platform so attention can train without fighting the body.' },
        { role: 'Facing it', detail: 'A practitioner with poor posture drifts into dullness or pain; a good seat keeps practice sustainable.' },
      ],
      adaptation: {
        cues: ['Slouching or drowsiness', 'Gripping tension or pain', 'Restlessness from an inconsistent setup'],
        adjustments: [
          { if: 'Drowsy', then: 'Lengthen the spine and brighten the gaze slightly.' },
          { if: 'Tense or pained', then: 'Soften shoulders and jaw; adjust the seat or use a chair.' },
        ],
        learning: 'After each sit, note one posture cue that helped and one that needs adjusting next time.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Sitting Practice', initialTime: 300 },
  },
  'meditation-foundations-breath': {
    id: 'meditation-foundations-breath',
    subject: 'Meditation',
    title: 'Anchoring on the Breath',
    level: 'Beginner',
    duration: '10 min',
    description: 'Learn to rest attention on the breath as an anchor, noticing the sensation of breathing and gently sustaining focus without forcing.',
    objectives: [
      'Understand the breath as a stable anchor for attention',
      'Place attention on the sensation of breathing',
      'Sustain focus gently without forcing or controlling breath',
      'Recognize the difference between observing and controlling',
      'Recognize the four most common anchoring errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The breath as anchor',
        caption: 'The breath is always present and always changing, making it an ideal anchor: attention rests on the sensation of breathing, returning whenever it wanders.',
        labels: ['Breath is always present', 'Rest on the sensation', 'Observe, do not control', 'Return when wandering'],
      },
    ],
    sections: [
      { title: 'Why the breath works as an anchor', content: 'The breath is always with you, always in the present, and always changing slightly, which gives attention something real to rest on. Unlike a thought, the breath is a bodily sensation you can feel directly. This makes it an ideal anchor: stable enough to return to, subtle enough to train fine attention.' },
      { title: 'Placing attention', content: 'Choose one place where breathing is most vivid, the nostrils, the rising chest, or the moving belly, and rest attention there. You are not watching an idea of breath but feeling the actual sensation: cool air in, warm air out, the rise and fall. Keep the field of attention narrow and soft, not strained.' },
      { title: 'Observing without controlling', content: 'A common error is to start controlling the breath, making it deeper or slower on purpose. The practice is to observe the breath exactly as it is, letting it breathe itself while attention watches. When you notice you have taken over the breathing, relax control and return to pure observation.' },
    ],
    principles: [
      'The breath is a present-moment, ever-changing anchor.',
      'Rest attention on the actual sensation, not the idea of breath.',
      'Observe the breath; do not control it.',
      'Keep attention narrow and soft, not strained.',
    ],
    mistakes: [
      { title: 'Controlling the breath', explanation: 'Deliberately deepening or slowing the breath is not observation. Let it breathe itself and watch.' },
      { title: 'Chasing perfect focus', explanation: 'Straining for unbroken concentration creates tension. Gentle, repeated returning is the practice.' },
      { title: 'Analyzing instead of feeling', explanation: 'Thinking about the breath is not feeling it. Rest on the raw sensation.' },
      { title: 'Gripping attention', explanation: 'A tight, forced attention tires quickly. Keep the focus soft and sustainable.' },
    ],
    practice: [
      'Sit in your established posture and settle for a minute.',
      'Choose one anchor point (nostrils, chest, or belly).',
      'Rest attention on the sensation of breathing there for five minutes.',
      'When you notice control or analysis, relax and return to feeling.',
      'End by noting how often attention stayed versus wandered.',
    ],
    reflection: 'Did you observe the breath or control it? Where was the sensation most vivid, and how soft or strained was your attention?',
    safety: 'If focusing on breath causes anxiety, widen attention to the whole body or use a sound anchor instead, and consult a teacher if distress persists.',
    quiz: [
      { question: 'Why is the breath a good anchor for attention?', options: ['It is easy to control', 'It is present, changing, and directly feelable', 'It is loud', 'It stops the mind'], answer: 1, explanation: 'The breath is always present and always changing, and its sensation is directly feelable, making it a stable yet subtle anchor.' },
      { question: 'What should you do with the breath during practice?', options: ['Control it to be slower', 'Observe it exactly as it is', 'Hold it periodically', 'Ignore it'], answer: 1, explanation: 'The practice is pure observation: let the breath breathe itself while attention rests on the sensation.' },
    ],
    mastery: [
      'Rest attention on the breath sensation for several minutes.',
      'Distinguish observing from controlling and relax control.',
      'Keep attention soft and sustainable rather than strained.',
      'Identify and correct the four common anchoring errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice you have been forcing the breath deeper.', action: 'You relax control and let the breath return to its natural rhythm while attention watches.', why: 'Observation, not control, is the practice; releasing control restores pure attention on sensation.' },
        { setup: 'Attention keeps sliding into thoughts about the breath.', action: 'You drop the analysis and return to the raw physical sensation at your anchor point.', why: 'Feeling the sensation, not thinking about it, keeps attention anchored in the present.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'The breath anchor trains stable, present-moment attention that can later be applied to any object or situation.' },
        { role: 'Facing it', detail: 'A breath-anchored practitioner remains calm and present under stress because attention has a trained home base.' },
      ],
      adaptation: {
        cues: ['Taking over the breathing', 'Analyzing instead of feeling', 'Strained or gripped attention'],
        adjustments: [
          { if: 'Controlling breath', then: 'Relax and let it breathe itself; return to watching.' },
          { if: 'Attention strained', then: 'Soften the focus and widen slightly, then re-settle on the anchor.' },
        ],
        learning: 'After each sit, note whether you observed or controlled, and how soft your attention was.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Breath Anchor Sit', initialTime: 600 },
  },
  'meditation-foundations-returning': {
    id: 'meditation-foundations-returning',
    subject: 'Meditation',
    title: 'The Art of Returning',
    level: 'Beginner',
    duration: '10 min',
    description: 'Learn that meditation is not never-wandering but noticing and returning; each gentle return is a repetition that strengthens attention.',
    objectives: [
      'Understand that wandering is normal and expected',
      'Recognize noticing as the moment of success, not failure',
      'Return attention gently rather than harshly',
      'Treat each return as a repetition that builds strength',
      'Recognize the four most common returning errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Notice and return',
        caption: 'The practice loop: attention wanders, you notice, you return gently. Each return is a rep that strengthens attention, like a curl for the mind.',
        labels: ['Attention wanders', 'You notice', 'You return gently', 'Each return builds strength'],
      },
    ],
    sections: [
      { title: 'Wandering is normal', content: 'The mind wanders; that is what minds do. Beginners often believe a good session has no wandering, but this is a misunderstanding. Wandering is not the failure; failing to notice is the only real miss. A session full of noticed wanderings and gentle returns is a strong session, because each return is the actual training.' },
      { title: 'Noticing is the win', content: 'The moment you realize attention has wandered is the moment of mindfulness, the success, not the mistake. That instant of noticing is awareness waking up. Celebrate it internally rather than judging it. The more you value noticing, the more often it arises, and attention becomes self-correcting.' },
      { title: 'Returning gently', content: 'How you return matters. A harsh, frustrated yank back to the anchor trains tension and aversion; a gentle, kind escort back trains calm and stability. Return as you would guide a puppy or a child: firmly but warmly. Over thousands of returns, this gentle quality becomes the texture of your attention in daily life.' },
    ],
    principles: [
      'Wandering is normal; noticing is the practice.',
      'The moment of noticing is success, not failure.',
      'Return gently, not harshly.',
      'Each return is a repetition that strengthens attention.',
    ],
    mistakes: [
      { title: 'Judging wandering as failure', explanation: 'Wandering is expected. Judging it adds aversion and obscures the noticing that is the real win.' },
      { title: 'Trying to stop all thought', explanation: 'Suppressing thought is impossible and exhausting. Let thoughts arise and pass; return to the anchor.' },
      { title: 'Returning harshly', explanation: 'A frustrated yank trains tension. Escort attention back gently and warmly.' },
      { title: 'Giving up after many wanderings', explanation: 'Many returns are many reps, not a bad session. Persistence is the training.' },
    ],
    practice: [
      'Sit anchored on the breath for five to ten minutes.',
      'Each time you notice wandering, silently note it and return gently.',
      'Count returns up to ten, then start over, treating each as a rep.',
      'Notice the tone of your returning: harsh or kind; soften it.',
      'End by appreciating that every notice was a moment of awareness.',
    ],
    reflection: 'How did you treat your wandering this session: with judgment or with kindness? Did you see noticing as failure or as the win?',
    safety: 'If strong difficult emotions arise during practice, pause, ground in the body or eyes open, and seek support if needed. Meditation is not a substitute for care.',
    quiz: [
      { question: 'What is the actual training in meditation?', options: ['Never wandering', 'Noticing wandering and returning gently', 'Emptying the mind', 'Sitting perfectly still'], answer: 1, explanation: 'Each cycle of wander-notice-return is a repetition that strengthens attention; the return is the rep.' },
      { question: 'Why return gently rather than harshly?', options: ['It is faster', 'Harsh returning trains tension; gentle returning trains calm stability', 'It is a rule', 'Harsh is impossible'], answer: 1, explanation: 'The quality of the return shapes the quality of attention; kindness builds calm, frustration builds aversion.' },
    ],
    mastery: [
      'Treat wandering as normal and noticing as success.',
      'Return attention gently and consistently.',
      'Count returns as repetitions that build strength.',
      'Identify and correct the four common returning errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice attention has been lost in a worry for a minute.', action: 'You acknowledge the noticing as a win, then escort attention gently back to the breath.', why: 'Valuing the noticing reinforces awareness, and the gentle return trains calm rather than aversion.' },
        { setup: 'You feel frustrated at wandering repeatedly.', action: 'You reframe each return as a rep and soften the tone of returning.', why: 'Reframing wandering as training converts frustration into persistence and kindness.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'The return loop builds a self-correcting attention that notices distraction in daily life and comes back to what matters.' },
        { role: 'Facing it', detail: 'A practitioner trained in returning recovers focus quickly after interruption instead of staying hijacked.' },
      ],
      adaptation: {
        cues: ['Wandering into thought or emotion', 'Harsh or frustrated returning', 'Long lost periods without noticing'],
        adjustments: [
          { if: 'Returning feels harsh', then: 'Soften the tone; escort attention kindly.' },
          { if: 'Long lost periods', then: 'Shorten sits or strengthen the anchor until noticing arises sooner.' },
        ],
        learning: 'After each sit, note the tone of your returns and whether you valued noticing as success.',
      },
    },
    practiceEngine: { type: 'rep-counter', label: 'Gentle Returns', targetReps: 10 },
  },
  'breathing-foundations-diaphragm': {
    id: 'breathing-foundations-diaphragm',
    subject: 'Breathing',
    title: 'Diaphragmatic Breathing',
    level: 'Beginner',
    duration: '10 min',
    description: 'Learn to breathe from the diaphragm instead of the chest, engaging the primary breathing muscle for efficient, calm respiration.',
    objectives: [
      'Understand the diaphragm as the primary breathing muscle',
      'Feel belly expansion on inhale and relaxation on exhale',
      'Distinguish diaphragmatic from shallow chest breathing',
      'Establish a relaxed, efficient breathing pattern',
      'Recognize the four most common diaphragmatic breathing errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'The diaphragm in action',
        caption: 'The diaphragm contracts and flattens on inhale, expanding the belly; it relaxes on exhale, allowing the belly to soften. This is efficient, calm breathing.',
        labels: ['Inhale: diaphragm contracts, belly expands', 'Exhale: diaphragm relaxes, belly softens', 'Chest stays relatively still', 'Efficient and calming'],
      },
    ],
    sections: [
      { title: 'The diaphragm is the primary muscle', content: 'The diaphragm is a dome-shaped muscle at the base of the lungs that contracts and flattens on inhale, creating negative pressure that draws air in. When it relaxes on exhale, air is pushed out. This is the body natural, efficient breathing pattern. Shallow chest breathing uses secondary muscles and is less efficient, often associated with stress and anxiety.' },
      { title: 'Feeling the breath in the belly', content: 'Place one hand on your belly and one on your chest. On inhale, feel the belly expand outward as the diaphragm contracts and pushes the abdominal contents down. On exhale, feel the belly soften and return. The chest moves minimally. This belly breathing is deep, efficient, and activates the parasympathetic nervous system, promoting calm.' },
      { title: 'Establishing the pattern', content: 'Practice lying down or sitting comfortably. Breathe in slowly through the nose, feeling the belly rise. Breathe out slowly through the nose or mouth, feeling the belly fall. Keep the breath smooth and unforced. Start with 5-10 breaths, gradually extending to longer practice as the pattern becomes automatic.' },
    ],
    principles: [
      'The diaphragm is the primary breathing muscle; use it.',
      'Belly expands on inhale, softens on exhale.',
      'Chest breathing is shallow and stressful; belly breathing is deep and calming.',
      'Keep the breath smooth and unforced.',
    ],
    mistakes: [
      { title: 'Chest breathing instead of belly breathing', explanation: 'If the chest rises more than the belly, you are using secondary muscles. Focus on belly expansion.' },
      { title: 'Forcing the breath too deep', explanation: 'Forcing creates tension. Let the breath be naturally deep but comfortable.' },
      { title: 'Tensing the belly on exhale', explanation: 'The belly should soften and relax on exhale, not contract forcefully.' },
      { title: 'Breathing through the mouth habitually', explanation: 'Nose breathing filters and humidifies air. Use the nose unless there is a reason not to.' },
    ],
    practice: [
      'Lie down with one hand on belly, one on chest.',
      'Inhale slowly through the nose, feeling belly rise.',
      'Exhale slowly, feeling belly soften.',
      'Practice 10 breaths, then extend to 5 minutes.',
      'Notice when you revert to chest breathing and return to belly breathing.',
    ],
    reflection: 'Do you typically breathe from the chest or the belly? How does diaphragmatic breathing feel compared to your usual pattern?',
    safety: 'If you feel lightheaded, return to normal breathing. Consult a professional if you have respiratory conditions.',
    quiz: [
      { question: 'What happens to the belly during diaphragmatic inhale?', options: ['It contracts', 'It expands outward', 'It stays still', 'It moves sideways'], answer: 1, explanation: 'The diaphragm contracts and flattens on inhale, pushing abdominal contents down and causing the belly to expand outward.' },
      { question: 'Why is diaphragmatic breathing preferred over chest breathing?', options: ['It is faster', 'It is more efficient and activates the calming nervous system', 'It looks better', 'It is louder'], answer: 1, explanation: 'Diaphragmatic breathing uses the primary muscle efficiently and activates the parasympathetic nervous system, promoting calm.' },
    ],
    mastery: [
      'Demonstrate diaphragmatic breathing with belly expansion on inhale.',
      'Distinguish diaphragmatic from chest breathing by feel.',
      'Establish a relaxed, efficient diaphragmatic pattern.',
      'Identify and correct the four common diaphragmatic breathing errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You notice you are breathing shallowly from the chest during stress.', action: 'You place a hand on your belly and consciously expand it on inhale, activating diaphragmatic breathing.', why: 'Shifting to diaphragmatic breathing activates the calming nervous system and improves oxygen efficiency.' },
        { setup: 'You need to calm down before a performance.', action: 'You take 10 slow diaphragmatic breaths, focusing on belly expansion and relaxation.', why: 'Diaphragmatic breathing activates the parasympathetic system, reducing stress and anxiety.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Diaphragmatic breathing is efficient, calming, and foundational for all breath work and stress regulation.' },
        { role: 'Facing it', detail: 'A practitioner breathing diaphragmatically remains calm and efficient under stress, while chest breathers become anxious and inefficient.' },
      ],
      adaptation: {
        cues: ['Chest rising more than belly', 'Shallow, rapid breathing', 'Tension in neck and shoulders'],
        adjustments: [
          { if: 'Chest breathing', then: 'Place hand on belly and focus on expansion there.' },
          { if: 'Forcing too deep', then: 'Let the breath be natural and comfortable.' },
        ],
        learning: 'After each practice, note whether breathing was diaphragmatic and how it affected your calm and energy.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Diaphragmatic Practice', initialTime: 300 },
  },
  'breathing-foundations-awareness': {
    id: 'breathing-foundations-awareness',
    subject: 'Breathing',
    title: 'Breath Awareness',
    level: 'Beginner',
    duration: '10 min',
    description: 'Develop awareness of your natural breathing pattern without changing it, building the foundation for conscious breath control.',
    objectives: [
      'Observe your natural breathing pattern without altering it',
      'Notice breath depth, rate, and rhythm',
      'Recognize how breath changes with activity and emotion',
      'Build the habit of checking in with breath throughout the day',
      'Recognize the four most common breath awareness errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Observing without changing',
        caption: 'Breath awareness means observing your natural breathing pattern without altering it, building a baseline understanding of your breath.',
        labels: ['Observe without changing', 'Notice depth, rate, rhythm', 'Recognize patterns', 'Build daily awareness'],
      },
    ],
    sections: [
      { title: 'Observing without changing', content: 'Before you can control the breath, you must understand it. Breath awareness means observing your natural breathing pattern without trying to change it. Notice the depth, rate, rhythm, and sensation. This builds a baseline understanding that later allows you to make informed changes. Changing the breath before understanding it is like adjusting an engine before knowing how it works.' },
      { title: 'Noticing patterns', content: 'Your breath changes with activity, emotion, and time of day. When stressed, it becomes shallow and rapid; when relaxed, it becomes deep and slow. When exercising, it deepens to meet demand. Noticing these patterns builds awareness of the mind-body connection and allows you to use breath as a window into your state.' },
      { title: 'Daily breath check-ins', content: 'Set reminders throughout the day to check in with your breath for 30 seconds. Notice how it is right now: deep or shallow, fast or slow, smooth or irregular. This builds the habit of breath awareness and allows you to notice when stress or tension has changed your breathing, giving you the opportunity to intervene.' },
    ],
    principles: [
      'Observe the breath without changing it to build understanding.',
      'Notice depth, rate, rhythm, and sensation.',
      'Breath changes with activity, emotion, and time of day.',
      'Daily check-ins build the habit of breath awareness.',
    ],
    mistakes: [
      { title: 'Changing the breath while observing', explanation: 'The goal is observation, not control. Let the breath be natural and watch it.' },
      { title: 'Judging the breath', explanation: 'There is no good or bad breath in observation; just notice what is there without judgment.' },
      { title: 'Forgetting to check in', explanation: 'Set reminders until awareness becomes automatic. Habit building requires consistency.' },
      { title: 'Only checking when stressed', explanation: 'Check in during calm moments too to understand your baseline, not just your stress response.' },
    ],
    practice: [
      'Sit comfortably and observe your natural breath for 5 minutes without changing it.',
      'Notice depth, rate, rhythm, and sensation.',
      'Set 3-5 reminders throughout the day to check in with your breath for 30 seconds.',
      'Note how your breath changes with different activities and emotions.',
      'End the day by reviewing when your breath was calm and when it was stressed.',
    ],
    reflection: 'What did you notice about your natural breathing pattern? How does your breath change throughout the day?',
    safety: 'Breath awareness is safe for most people. If observing breath causes anxiety, open your eyes and ground in the environment.',
    quiz: [
      { question: 'What is the goal of breath awareness?', options: ['To control the breath', 'To observe without changing', 'To breathe deeply', 'To slow the breath'], answer: 1, explanation: 'Breath awareness means observing your natural breathing pattern without altering it, building understanding before control.' },
      { question: 'Why check in with breath throughout the day?', options: ['To meet a quota', 'To build awareness and notice stress-induced changes', 'To impress others', 'To compete'], answer: 1, explanation: 'Daily check-ins build the habit of awareness and allow you to notice when stress or tension has changed your breathing.' },
    ],
    mastery: [
      'Observe natural breathing for 5 minutes without changing it.',
      'Notice depth, rate, rhythm, and sensation accurately.',
      'Check in with breath 3-5 times daily.',
      'Identify and correct the four common breath awareness errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You feel stressed and notice your breath is shallow and rapid.', action: 'You observe this without judgment, recognizing it as a stress response.', why: 'Noticing the stress response in the breath allows you to recognize stress early and intervene if desired.' },
        { setup: 'You check in with your breath during a calm moment.', action: 'You observe that it is naturally deep and slow, establishing your baseline.', why: 'Understanding your calm baseline helps you recognize when you have deviated from it.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Breath awareness builds understanding of your natural patterns and how they change with state and context.' },
        { role: 'Facing it', detail: 'A breath-aware practitioner can read their own state and the states of others through breath observation.' },
      ],
      adaptation: {
        cues: ['Changes in breath depth, rate, or rhythm', 'Breath becoming shallow or rapid', 'Forgetting to check in'],
        adjustments: [
          { if: 'Changing breath while observing', then: 'Relax and let it return to natural pattern.' },
          { if: 'Judging the breath', then: 'Return to neutral observation without evaluation.' },
        ],
        learning: 'After each check-in, note the breath pattern and what it tells you about your current state.',
      },
    },
    practiceEngine: { type: 'timed-hold', label: 'Breath Observation', initialTime: 300 },
  },
  'breathing-foundations-rhythm': {
    id: 'breathing-foundations-rhythm',
    subject: 'Breathing',
    title: 'Rhythmic Breathing',
    level: 'Beginner',
    duration: '10 min',
    description: 'Learn to breathe in a steady rhythm, using counted inhale and exhale to establish a calm, regular breathing pattern.',
    objectives: [
      'Establish a steady breathing rhythm using counts',
      'Match inhale and exhale duration for balance',
      'Use rhythmic breathing to calm the nervous system',
      'Maintain smooth transitions between inhale and exhale',
      'Recognize the four most common rhythmic breathing errors',
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Steady rhythmic breathing',
        caption: 'Rhythmic breathing uses counted inhale and exhale to establish a steady, balanced pattern that calms the nervous system.',
        labels: ['Count inhale duration', 'Match exhale duration', 'Smooth transitions', 'Calm and balanced'],
      },
    ],
    sections: [
      { title: 'The power of rhythm', content: 'Rhythmic breathing uses a steady count to establish a regular breathing pattern. This regularity signals safety to the nervous system, activating the parasympathetic response and promoting calm. A 4-count inhale followed by a 4-count exhale is a common starting rhythm, but the exact count matters less than the consistency and smoothness.' },
      { title: 'Matching inhale and exhale', content: 'Balanced breathing typically matches inhale and exhale duration, creating equilibrium in the nervous system. Longer exhales relative to inhales enhance the calming effect, while longer inhales can be energizing. For beginners, start with equal counts and experiment with ratios as you progress.' },
      { title: 'Smooth transitions', content: 'The transitions between inhale and exhale should be smooth, not jerky or held. There is no pause at the top or bottom unless specifically practicing retention. The breath flows continuously: inhale smoothly transitions to exhale, which smoothly transitions to the next inhale. This flow is calming and natural.' },
    ],
    principles: [
      'Rhythmic breathing uses counts to establish regularity.',
      'Match inhale and exhale for balance; longer exhales for calm.',
      'Transitions should be smooth, not jerky or held.',
      'Consistency matters more than the exact count.',
    ],
    mistakes: [
      { title: 'Rushing the count', explanation: 'Counting too fast defeats the purpose. Use a comfortable, sustainable pace.' },
      { title: 'Jerky transitions', explanation: 'Abrupt changes between inhale and exhale create tension. Keep transitions smooth.' },
      { title: 'Holding breath unintentionally', explanation: 'Pausing at the top or bottom without intention disrupts flow. Keep the breath continuous unless practicing retention.' },
      { title: 'Forcing an uncomfortable count', explanation: 'If the count feels strained, shorten it. Comfort and sustainability matter more than a specific number.' },
    ],
    practice: [
      'Sit comfortably and establish a 4-count inhale, 4-count exhale rhythm.',
      'Count silently: inhale for 4, exhale for 4, with smooth transitions.',
      'Practice for 5 minutes, maintaining the rhythm steadily.',
      'Experiment with 5-count or 6-count if comfortable.',
      'Notice how the rhythm affects your calm and focus.',
    ],
    reflection: 'How did the rhythmic breathing affect your state? Was it easy to maintain, or did you rush or struggle?',
    safety: 'If you feel lightheaded or uncomfortable, return to natural breathing. Consult a professional for respiratory conditions.',
    quiz: [
      { question: 'What is the purpose of rhythmic breathing?', options: ['To breathe as fast as possible', 'To establish a steady, calming pattern', 'To hold the breath', 'To breathe only through the mouth'], answer: 1, explanation: 'Rhythmic breathing uses counts to establish regularity, which signals safety to the nervous system and promotes calm.' },
      { question: 'How should transitions between inhale and exhale be?', options: ['Held', 'Jerky', 'Smooth and continuous', 'Paused'], answer: 2, explanation: 'Smooth transitions maintain the calming flow; jerky or held transitions create tension and disrupt the rhythm.' },
    ],
    mastery: [
      'Establish and maintain a steady breathing rhythm for 5 minutes.',
      'Match inhale and exhale duration with smooth transitions.',
      'Use rhythmic breathing to calm the nervous system.',
      'Identify and correct the four common rhythmic breathing errors.',
    ],
    liveApplication: {
      scenarios: [
        { setup: 'You feel anxious before an event.', action: 'You practice 4-count inhale, 4-count exhale breathing for 2 minutes to calm your nervous system.', why: 'Rhythmic breathing signals safety to the nervous system, reducing anxiety and promoting calm focus.' },
        { setup: 'You need to steady your breathing after exertion.', action: 'You establish a 3-count rhythm to regulate your breathing and recover efficiently.', why: 'Rhythmic breathing helps regulate the breath after exertion, promoting efficient recovery.' },
      ],
      perspectives: [
        { role: 'Using it', detail: 'Rhythmic breathing is a portable tool for calming and regulating the nervous system in any context.' },
        { role: 'Facing it', detail: 'A practitioner using rhythmic breathing remains calm and regulated under pressure, while unregulated breathing amplifies stress.' },
      ],
      adaptation: {
        cues: ['Rushing or struggling with the count', 'Jerky transitions', 'Feeling uncomfortable with the rhythm'],
        adjustments: [
          { if: 'Rushing the count', then: 'Slow down to a comfortable pace.' },
          { if: 'Uncomfortable count', then: 'Shorten to 3-count or return to natural breathing.' },
        ],
        learning: 'After each practice, note which count felt comfortable and how the rhythm affected your state.',
      },
    },
    practiceEngine: { type: 'interval', label: 'Rhythmic Breathing', workTime: 240, restTime: 60, totalIntervals: 3 },
  },

}
