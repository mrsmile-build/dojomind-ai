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
}
