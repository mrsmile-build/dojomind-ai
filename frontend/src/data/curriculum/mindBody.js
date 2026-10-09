export const mindBody = {
  meditation: {
    name: 'Meditation',
    icon: '🧘',
    description: 'Train attention, calm, awareness and mental discipline.',
    levels: {
      beginner: {
        name: 'Beginner',
        description: 'Build a stable sitting practice and learn to anchor attention.',
        modules: [
          {
            id: 'foundations',
            title: 'Foundations',
            lessons: [
              { id: 'meditation-foundations-posture', title: 'Sitting Posture and Setup' },
              { id: 'meditation-foundations-breath', title: 'Anchoring on the Breath' },
              { id: 'meditation-foundations-returning', title: 'The Art of Returning' },
            ],
          },
        ],
      },
      intermediate: {
        name: 'Intermediate',
        description: 'Work with thoughts, emotions and distraction.',
        modules: [
          {
            id: 'working-mind',
            title: 'Working with Mind',
            lessons: [
              { id: 'meditation-mind-thoughts', title: 'Thoughts as Events' },
              { id: 'meditation-mind-emotions', title: 'Meeting Emotions' },
              { id: 'meditation-mind-distraction', title: 'Distraction as Teacher' },
            ],
          },
        ],
      },
      advanced: {
        name: 'Advanced',
        description: 'Develop stability, clarity and equanimity.',
        modules: [
          {
            id: 'stability',
            title: 'Stability and Clarity',
            lessons: [
              { id: 'meditation-stability-depth', title: 'Deepening Stability' },
              { id: 'meditation-stability-clarity', title: 'Clarity of Awareness' },
              { id: 'meditation-stability-equanimity', title: 'Equanimity Under Load' },
            ],
          },
        ],
      },
      expert: {
        name: 'Expert',
        description: 'Integrate practice into daily life and relationships.',
        modules: [
          {
            id: 'integration',
            title: 'Integration',
            lessons: [
              { id: 'meditation-integration-daily', title: 'Practice in Daily Life' },
              { id: 'meditation-integration-relationships', title: 'Presence in Relationships' },
              { id: 'meditation-integration-insight', title: 'Insight and Letting Go' },
            ],
          },
        ],
      },
    },
  },
  breathing: {
    name: 'Breathing',
    icon: '🫁',
    description: 'Explore controlled breathing and breath-awareness practices.',
    levels: {
      beginner: {
        name: 'Beginner',
        description: 'Build foundational breath control and awareness.',
        modules: [
          {
            id: 'foundations',
            title: 'Breath Foundations',
            lessons: [
              { id: 'breathing-foundations-diaphragm', title: 'Diaphragmatic Breathing' },
              { id: 'breathing-foundations-awareness', title: 'Breath Awareness' },
              { id: 'breathing-foundations-rhythm', title: 'Rhythmic Breathing' },
            ],
          },
        ],
      },
      intermediate: {
        name: 'Intermediate',
        description: 'Develop breath control for performance and calm.',
        modules: [
          {
            id: 'control',
            title: 'Breath Control',
            lessons: [
              { id: 'breathing-control-ratio', title: 'Breath Ratios' },
              { id: 'breathing-control-retention', title: 'Breath Retention' },
              { id: 'breathing-control-recovery', title: 'Recovery Breathing' },
            ],
          },
        ],
      },
      advanced: {
        name: 'Advanced',
        description: 'Master advanced techniques and applications.',
        modules: [
          {
            id: 'applications',
            title: 'Advanced Applications',
            lessons: [
              { id: 'breathing-applications-performance', title: 'Performance Breathing' },
              { id: 'breathing-applications-stress', title: 'Stress Regulation' },
              { id: 'breathing-applications-integration', title: 'Integration in Movement' },
            ],
          },
        ],
      },
      expert: {
        name: 'Expert',
        description: 'Refine and personalize breath mastery.',
        modules: [
          {
            id: 'mastery',
            title: 'Breath Mastery',
            lessons: [
              { id: 'breathing-mastery-personal', title: 'Personal Breath Pattern' },
              { id: 'breathing-mastery-teaching', title: 'Teaching Breath Work' },
              { id: 'breathing-mastery-lifelong', title: 'Lifelong Breath Practice' },
            ],
          },
        ],
      },
    },
  },
  training: {
    name: 'Training',
    icon: '🏋️',
    description: 'Build mobility, balance, flexibility and conditioning.',
    levels: {
      beginner: {
        name: 'Beginner',
        description: 'Build movement foundations: mobility, balance and base conditioning.',
        modules: [
          {
            id: 'movement-foundations',
            title: 'Movement Foundations',
            lessons: [
              { id: 'training-foundations-mobility', title: 'Joint Mobility Basics' },
              { id: 'training-foundations-balance', title: 'Static and Dynamic Balance' },
              { id: 'training-foundations-conditioning', title: 'Foundational Conditioning' },
            ],
          },
        ],
      },
      intermediate: {
        name: 'Intermediate',
        description: 'Develop strength, core control and movement quality.',
        modules: [
          {
            id: 'strength-control',
            title: 'Strength and Control',
            lessons: [
              { id: 'training-strength-bodyweight', title: 'Bodyweight Strength' },
              { id: 'training-strength-core', title: 'Core Control' },
              { id: 'training-strength-quality', title: 'Movement Quality' },
            ],
          },
        ],
      },
      advanced: {
        name: 'Advanced',
        description: 'Build power, endurance and recovery capacity.',
        modules: [
          {
            id: 'performance',
            title: 'Performance',
            lessons: [
              { id: 'training-performance-power', title: 'Power Development' },
              { id: 'training-performance-endurance', title: 'Endurance Building' },
              { id: 'training-performance-recovery', title: 'Recovery Capacity' },
            ],
          },
        ],
      },
      expert: {
        name: 'Expert',
        description: 'Program your own training for longevity.',
        modules: [
          {
            id: 'programming',
            title: 'Self-Programming',
            lessons: [
              { id: 'training-programming-design', title: 'Designing Your Program' },
              { id: 'training-programming-periodization', title: 'Periodization for Life' },
              { id: 'training-programming-longevity', title: 'Training for Longevity' },
            ],
          },
        ],
      },
    },
  },
}
