export const curriculum = {
  martialArts: {
    karate: {
      name: 'Karate',
      icon: '🥋',
      description:
        'Traditional and modern karate fundamentals, movement, technique, application and strategy.',

      levels: {
        beginner: {
          name: 'Beginner',
          description:
            'Build a strong foundation in posture, movement, basic techniques and discipline.',

          modules: [
            {
              id: 'stances',
              title: 'Stances',
              lessons: [
                'Understanding Stances',
                'Front Stance',
                'Back Stance',
                'Horse Stance',
              ],
            },
            {
              id: 'movement',
              title: 'Movement',
              lessons: [
                'Basic Footwork',
                'Moving Without Losing Balance',
                'Changing Direction',
              ],
            },
            {
              id: 'strikes',
              title: 'Basic Strikes',
              lessons: [
                'Understanding Striking Mechanics',
                'Straight Punch',
                'Basic Elbow Mechanics',
              ],
            },
            {
              id: 'blocks',
              title: 'Basic Blocks',
              lessons: [
                'Why Blocking Works',
                'Basic Downward Block',
                'Basic Rising Block',
              ],
            },
            {
              id: 'kicks',
              title: 'Basic Kicks',
              lessons: [
                'Understanding Kicking Mechanics',
                'Front Kick',
                'Balance During Kicks',
              ],
            },
          ],
        },

        intermediate: {
          name: 'Intermediate',
          description:
            'Develop combinations, timing, distance, applications and greater technical control.',

          modules: [
            {
              id: 'combinations',
              title: 'Combinations',
              lessons: [
                'Combining Techniques',
                'Changing Rhythm',
                'Recovering After Combinations',
              ],
            },
            {
              id: 'timing',
              title: 'Timing',
              lessons: [
                'Understanding Timing',
                'Reading Movement',
                'Creating Openings',
              ],
            },
            {
              id: 'distance',
              title: 'Distance',
              lessons: [
                'Understanding Range',
                'Managing Distance',
                'Entering and Exiting',
              ],
            },
            {
              id: 'applications',
              title: 'Applications',
              lessons: [
                'Understanding Technique Applications',
                'Defensive Applications',
                'Movement and Positioning',
              ],
            },
          ],
        },

        advanced: {
          name: 'Advanced',
          description:
            'Explore strategy, tactics, pressure, adaptability and advanced training principles.',

          modules: [
            {
              id: 'strategy',
              title: 'Strategy',
              lessons: [
                'Understanding Strategy',
                'Controlling the Pace',
                'Adapting to an Opponent',
              ],
            },
            {
              id: 'tactics',
              title: 'Tactics',
              lessons: [
                'Creating Openings',
                'Feints and Deception',
                'Tactical Adaptation',
              ],
            },
            {
              id: 'advanced-training',
              title: 'Advanced Training',
              lessons: [
                'Training Under Pressure',
                'Developing Decision Making',
                'Building Long-Term Skill',
              ],
            },
          ],
        },
      },
    },
  },
}

export default curriculum
