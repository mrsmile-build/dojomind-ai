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
                { id: 'karate-stances', title: 'Understanding Stances' },
                { id: 'karate-stances-front', title: 'Front Stance' },
                { id: 'karate-stances-back', title: 'Back Stance' },
                { id: 'karate-stances-horse', title: 'Horse Stance' },
              ],
            },
            {
              id: 'movement',
              title: 'Movement',
              lessons: [
                { id: 'karate-movement-footwork', title: 'Basic Footwork' },
                { id: 'karate-movement-balance', title: 'Moving Without Losing Balance' },
                { id: 'karate-movement-direction', title: 'Changing Direction' },
              ],
            },
            {
              id: 'strikes',
              title: 'Basic Strikes',
              lessons: [
                { id: 'karate-strikes-mechanics', title: 'Understanding Striking Mechanics' },
                { id: 'karate-strikes-straight-punch', title: 'Straight Punch' },
                { id: 'karate-strikes-elbow', title: 'Basic Elbow Mechanics' },
              ],
            },
            {
              id: 'blocks',
              title: 'Basic Blocks',
              lessons: [
                { id: 'karate-blocks-why', title: 'Why Blocking Works' },
                { id: 'karate-blocks-downward', title: 'Basic Downward Block' },
                { id: 'karate-blocks-rising', title: 'Basic Rising Block' },
              ],
            },
            {
              id: 'kicks',
              title: 'Basic Kicks',
              lessons: [
                { id: 'karate-kicks-mechanics', title: 'Understanding Kicking Mechanics' },
                { id: 'karate-kicks-front', title: 'Front Kick' },
                { id: 'karate-kicks-balance', title: 'Balance During Kicks' },
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
                { id: 'karate-combinations-combining', title: 'Combining Techniques' },
                { id: 'karate-combinations-rhythm', title: 'Changing Rhythm' },
                { id: 'karate-combinations-recovering', title: 'Recovering After Combinations' },
              ],
            },
            {
              id: 'timing',
              title: 'Timing',
              lessons: [
                { id: 'karate-timing-understanding', title: 'Understanding Timing' },
                { id: 'karate-timing-reading', title: 'Reading Movement' },
                { id: 'karate-timing-openings', title: 'Creating Openings' },
              ],
            },
            {
              id: 'distance',
              title: 'Distance',
              lessons: [
                { id: 'karate-distance-range', title: 'Understanding Range' },
                { id: 'karate-distance-managing', title: 'Managing Distance' },
                { id: 'karate-distance-entering-exiting', title: 'Entering and Exiting' },
              ],
            },
            {
              id: 'applications',
              title: 'Applications',
              lessons: [
                { id: 'karate-applications-understanding', title: 'Understanding Technique Applications' },
                { id: 'karate-applications-defensive', title: 'Defensive Applications' },
                { id: 'karate-applications-movement', title: 'Movement and Positioning' },
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
                { id: 'karate-strategy-understanding', title: 'Understanding Strategy' },
                { id: 'karate-strategy-pace', title: 'Controlling the Pace' },
                { id: 'karate-strategy-adapting', title: 'Adapting to an Opponent' },
              
            {
              id: 'self-defense',
              title: 'Self-Defense & Weapons Awareness',
              lessons: [
                { id: 'karate-self-defense-principles', title: 'Self-Defense Principles' },
                { id: 'karate-self-defense-against-knife', title: 'Against a Knife' },
                { id: 'karate-self-defense-against-stick', title: 'Against a Stick or Blunt Weapon' },
                { id: 'karate-self-defense-against-grabs', title: 'Against Grabs and Holds' },
              ],
            },],
            },
            {
              id: 'tactics',
              title: 'Tactics',
              lessons: [
                { id: 'karate-tactics-openings', title: 'Creating Openings' },
                { id: 'karate-tactics-feints', title: 'Feints and Deception' },
                { id: 'karate-tactics-adaptation', title: 'Tactical Adaptation' },
              ],
            },
            {
              id: 'advanced-training',
              title: 'Advanced Training',
              lessons: [
                { id: 'karate-advanced-training-pressure', title: 'Training Under Pressure' },
                { id: 'karate-advanced-training-decisions', title: 'Developing Decision Making' },
                { id: 'karate-advanced-training-longterm', title: 'Building Long-Term Skill' },
              ],
            },
          ],
        },
        expert: {
          name: 'Expert',
          description:
            'Refine technique under pressure, study initiative and kata application, and develop a personal expression of the art built on everything below.',

          modules: [
            {
              id: 'initiative',
              title: 'Initiative and Sen',
              lessons: [
                { id: 'karate-initiative-understanding', title: 'Understanding Initiative' },
                { id: 'karate-initiative-sen-no-sen', title: 'Sen no Sen: Attacking the Attack' },
                { id: 'karate-initiative-reading-intent', title: 'Reading Intent Before Motion' },
              
            {
              id: 'kobudo',
              title: 'Traditional Weapons (Kobudo)',
              lessons: [
                { id: 'karate-kobudo-introduction', title: 'Introduction to Kobudo' },
                { id: 'karate-kobudo-bo-grip', title: 'Bo Staff: Grip and Stance' },
                { id: 'karate-kobudo-bo-strikes', title: 'Bo Staff: Strikes and Blocks' },
                { id: 'karate-kobudo-sai-basics', title: 'Sai: Grip and Fundamental Moves' },
              ],
            },],
            },
            {
              id: 'kata',
              title: 'Kata as Application',
              lessons: [
                { id: 'karate-kata-structure', title: 'Structure Within Kata' },
                { id: 'karate-kata-bunkai', title: 'Bunkai: Reading the Applications' },
                { id: 'karate-kata-expression', title: 'Personal Expression of Form' },
              ],
            },
            {
              id: 'mastery',
              title: 'Mastery and Transmission',
              lessons: [
                { id: 'karate-mastery-refinement', title: 'Lifelong Refinement' },
                { id: 'karate-mastery-teaching', title: 'Principles of Teaching' },
                { id: 'karate-mastery-coaching-eyes', title: 'Developing the Coaching Eye' },
              ],
            },
          ],
        },
      },
    },
  },
}

export default curriculum
