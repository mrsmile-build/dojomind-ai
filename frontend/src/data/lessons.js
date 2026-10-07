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

    mastery: [
      'Execute a straight punch with proper chamber, extension, kime and hikite.',
      'Feel and demonstrate hip rotation during the punch.',
      'Make contact with the first two knuckles consistently.',
      'Identify and correct the four common punch errors.',
    ],
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
}
