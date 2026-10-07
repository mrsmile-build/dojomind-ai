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

    mastery: [
      'Complete 90 and 180 degree turns without crossing the feet.',
      'Keep height constant through five consecutive turns.',
      'Finish every turn settled in a correct stance.',
      'Explain why the pivot happens on the ball of the foot.',
    ],
  },
}
