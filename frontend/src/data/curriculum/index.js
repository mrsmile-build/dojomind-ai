export { mindBody } from './mindBody.js';

export default {
  "martialArts": {
    "karate": {
      "name": "Karate",
      "icon": "🥋",
      "description": "Traditional and modern karate fundamentals, movement, technique, application and strategy.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build a strong foundation in posture, movement, basic techniques and discipline.",
          "modules": [
            {
              "id": "stances",
              "title": "Stances",
              "lessons": [
                {
                  "id": "karate-stances",
                  "title": "Understanding Stances"
                },
                {
                  "id": "karate-stances-front",
                  "title": "Front Stance"
                },
                {
                  "id": "karate-stances-back",
                  "title": "Back Stance"
                },
                {
                  "id": "karate-stances-horse",
                  "title": "Horse Stance"
                }
              ]
            },
            {
              "id": "movement",
              "title": "Movement",
              "lessons": [
                {
                  "id": "karate-movement-footwork",
                  "title": "Basic Footwork"
                },
                {
                  "id": "karate-movement-balance",
                  "title": "Moving Without Losing Balance"
                },
                {
                  "id": "karate-movement-direction",
                  "title": "Changing Direction"
                }
              ]
            },
            {
              "id": "strikes",
              "title": "Basic Strikes",
              "lessons": [
                {
                  "id": "karate-strikes-mechanics",
                  "title": "Understanding Striking Mechanics"
                },
                {
                  "id": "karate-strikes-straight-punch",
                  "title": "Straight Punch"
                },
                {
                  "id": "karate-strikes-elbow",
                  "title": "Basic Elbow Mechanics"
                }
              ]
            },
            {
              "id": "blocks",
              "title": "Basic Blocks",
              "lessons": [
                {
                  "id": "karate-blocks-why",
                  "title": "Why Blocking Works"
                },
                {
                  "id": "karate-blocks-downward",
                  "title": "Basic Downward Block"
                },
                {
                  "id": "karate-blocks-rising",
                  "title": "Basic Rising Block"
                }
              ]
            },
            {
              "id": "kicks",
              "title": "Basic Kicks",
              "lessons": [
                {
                  "id": "karate-kicks-mechanics",
                  "title": "Understanding Kicking Mechanics"
                },
                {
                  "id": "karate-kicks-front",
                  "title": "Front Kick"
                },
                {
                  "id": "karate-kicks-balance",
                  "title": "Balance During Kicks"
                }
              ]
            }
          ]
        },
        "intermediate": {
          "name": "Intermediate",
          "description": "Develop combinations, timing, distance, applications and greater technical control.",
          "modules": [
            {
              "id": "combinations",
              "title": "Combinations",
              "lessons": [
                {
                  "id": "karate-combinations-combining",
                  "title": "Combining Techniques"
                },
                {
                  "id": "karate-combinations-rhythm",
                  "title": "Changing Rhythm"
                },
                {
                  "id": "karate-combinations-recovering",
                  "title": "Recovering After Combinations"
                }
              ]
            },
            {
              "id": "timing",
              "title": "Timing",
              "lessons": [
                {
                  "id": "karate-timing-understanding",
                  "title": "Understanding Timing"
                },
                {
                  "id": "karate-timing-reading",
                  "title": "Reading Movement"
                },
                {
                  "id": "karate-timing-openings",
                  "title": "Creating Openings"
                }
              ]
            },
            {
              "id": "distance",
              "title": "Distance",
              "lessons": [
                {
                  "id": "karate-distance-range",
                  "title": "Understanding Range"
                },
                {
                  "id": "karate-distance-managing",
                  "title": "Managing Distance"
                },
                {
                  "id": "karate-distance-entering-exiting",
                  "title": "Entering and Exiting"
                }
              ]
            },
            {
              "id": "applications",
              "title": "Applications",
              "lessons": [
                {
                  "id": "karate-applications-understanding",
                  "title": "Understanding Technique Applications"
                },
                {
                  "id": "karate-applications-defensive",
                  "title": "Defensive Applications"
                },
                {
                  "id": "karate-applications-movement",
                  "title": "Movement and Positioning"
                }
              ]
            }
          ]
        },
        "advanced": {
          "name": "Advanced",
          "description": "Explore strategy, tactics, pressure, adaptability and advanced training principles.",
          "modules": [
            {
              "id": "strategy",
              "title": "Strategy",
              "lessons": [
                {
                  "id": "karate-strategy-understanding",
                  "title": "Understanding Strategy"
                },
                {
                  "id": "karate-strategy-reading",
                  "title": "Reading Opponents"
                },
                {
                  "id": "karate-strategy-planning",
                  "title": "Game Planning"
                }
              ]
            },
            {
              "id": "tactics",
              "title": "Tactics",
              "lessons": [
                {
                  "id": "karate-tactics-feints",
                  "title": "Feints and Deception"
                },
                {
                  "id": "karate-tactics-rhythm",
                  "title": "Rhythm and Pace Control"
                },
                {
                  "id": "karate-tactics-adaptation",
                  "title": "Tactical Adaptation"
                }
              ]
            },
            {
              "id": "advanced-training",
              "title": "Advanced Training",
              "lessons": [
                {
                  "id": "karate-advanced-training-pressure",
                  "title": "Training Under Pressure"
                },
                {
                  "id": "karate-advanced-training-decisions",
                  "title": "Developing Decision Making"
                },
                {
                  "id": "karate-advanced-training-longterm",
                  "title": "Building Long-Term Skill"
                }
              ]
            },
            {
              "id": "self-defense",
              "title": "Self-Defense & Weapons Awareness",
              "lessons": [
                {
                  "id": "karate-self-defense-principles",
                  "title": "Self-Defense Principles"
                },
                {
                  "id": "karate-self-defense-against-knife",
                  "title": "Against a Knife"
                },
                {
                  "id": "karate-self-defense-against-stick",
                  "title": "Against a Stick or Blunt Weapon"
                },
                {
                  "id": "karate-self-defense-against-grabs",
                  "title": "Against Grabs and Holds"
                },
                {
                  "id": "karate-targeting-anatomy",
                  "title": "Where Force Lands: Anatomy & Escape"
                }
              ]
            }
          ]
        },
        "expert": {
          "name": "Expert",
          "description": "Refine technique under pressure, study initiative and kata application, and develop a personal expression of the art built on everything below.",
          "modules": [
            {
              "id": "initiative",
              "title": "Initiative and Sen",
              "lessons": [
                {
                  "id": "karate-initiative-understanding",
                  "title": "Understanding Initiative"
                },
                {
                  "id": "karate-initiative-sen-no-sen",
                  "title": "Sen no Sen: Attacking the Attack"
                },
                {
                  "id": "karate-initiative-reading-intent",
                  "title": "Reading Intent Before Motion"
                }
              ]
            },
            {
              "id": "kata",
              "title": "Kata as Application",
              "lessons": [
                {
                  "id": "karate-kata-bunkai",
                  "title": "Understanding Bunkai"
                },
                {
                  "id": "karate-kata-oyo",
                  "title": "Oyo: Adapting Kata to Real Fighting"
                },
                {
                  "id": "karate-kata-personal-expression",
                  "title": "Personal Expression in Kata"
                }
              ]
            },
            {
              "id": "mastery",
              "title": "Mastery and Transmission",
              "lessons": [
                {
                  "id": "karate-mastery-refinement",
                  "title": "Lifelong Refinement"
                },
                {
                  "id": "karate-mastery-teaching",
                  "title": "Principles of Teaching"
                },
                {
                  "id": "karate-mastery-coaching-eyes",
                  "title": "Developing the Coaching Eye"
                }
              ]
            },
            {
              "id": "kobudo",
              "title": "Traditional Weapons (Kobudo)",
              "lessons": [
                {
                  "id": "karate-kobudo-introduction",
                  "title": "Introduction to Kobudo"
                },
                {
                  "id": "karate-kobudo-bo-grip",
                  "title": "Bo Staff: Grip and Stance"
                },
                {
                  "id": "karate-kobudo-bo-strikes",
                  "title": "Bo Staff: Strikes and Blocks"
                },
                {
                  "id": "karate-kobudo-sai-basics",
                  "title": "Sai: Grip and Fundamental Moves"
                }
              ]
            }
          ]
        }
      }
    },
    "boxing": {
      "name": "Boxing",
      "icon": "🥊",
      "description": "Learn striking fundamentals, footwork, defense and movement.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the boxing base: stance, guard, footwork and the jab.",
          "modules": [
            {
              "id": "foundations",
              "title": "Boxing Foundations",
              "lessons": [
                {
                  "id": "boxing-foundations-stance",
                  "title": "Stance and Guard"
                },
                {
                  "id": "boxing-foundations-footwork",
                  "title": "Step-Slide Footwork"
                },
                {
                  "id": "boxing-foundations-jab",
                  "title": "The Jab"
                }
              ]
            }
          ]
        }
      }
    },
    "taekwondo": {
      "name": "Taekwondo",
      "icon": "🦵",
      "description": "Learn movement, kicking fundamentals, balance and discipline.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the taekwondo base: ready stance, front kick and balance.",
          "modules": [
            {
              "id": "foundations",
              "title": "Taekwondo Foundations",
              "lessons": [
                {
                  "id": "taekwondo-foundations-stance",
                  "title": "Ready & Sparring Stance"
                },
                {
                  "id": "taekwondo-foundations-front-kick",
                  "title": "Front Kick — Ap Chagi"
                },
                {
                  "id": "taekwondo-foundations-balance",
                  "title": "Balance & Kick Control"
                }
              ]
            }
          ]
        }
      }
    },
    "muay-thai": {
      "name": "Muay Thai",
      "icon": "🥊",
      "description": "Explore striking fundamentals, movement and conditioning.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the muay thai base: stance, round kick and teep.",
          "modules": [
            {
              "id": "foundations",
              "title": "Muay Thai Foundations",
              "lessons": [
                {
                  "id": "muay-thai-foundations-stance",
                  "title": "Stance and Guard"
                },
                {
                  "id": "muay-thai-foundations-round-kick",
                  "title": "Round Kick — Tei Tat"
                },
                {
                  "id": "muay-thai-foundations-teep",
                  "title": "Push Kick — Teep"
                }
              ]
            }
          ]
        }
      }
    },
    "judo": {
      "name": "Judo",
      "icon": "🥋",
      "description": "Learn principles of balance, grips, movement and throwing.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the judo base: breakfalls, grips and throwing principles.",
          "modules": [
            {
              "id": "foundations",
              "title": "Judo Foundations",
              "lessons": [
                {
                  "id": "judo-foundations-ukemi",
                  "title": "Breakfalls — Ukemi"
                },
                {
                  "id": "judo-foundations-grip",
                  "title": "Grip Fighting — Kumi-kata"
                },
                {
                  "id": "judo-foundations-throw",
                  "title": "How a Throw Works"
                }
              ]
            }
          ]
        }
      }
    },
    "bjj": {
      "name": "Brazilian Jiu-Jitsu",
      "icon": "🤼",
      "description": "Explore grappling concepts, positions, control and movement.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the BJJ base: position hierarchy, hip escapes and guard play.",
          "modules": [
            {
              "id": "foundations",
              "title": "BJJ Foundations",
              "lessons": [
                {
                  "id": "bjj-foundations-positions",
                  "title": "The Position Hierarchy"
                },
                {
                  "id": "bjj-foundations-movement",
                  "title": "Hip Escapes: Shrimp & Bridge"
                },
                {
                  "id": "bjj-foundations-guard",
                  "title": "Playing Guard"
                }
              ]
            }
          ]
        }
      }
    },
    "wrestling": {
      "name": "Wrestling",
      "icon": "🤼",
      "description": "Develop movement, balance, takedown and grappling fundamentals.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the wrestling base: stance, level change and double-leg.",
          "modules": [
            {
              "id": "foundations",
              "title": "Wrestling Foundations",
              "lessons": [
                {
                  "id": "wrestling-foundations-stance",
                  "title": "Wrestling Stance & Motion"
                },
                {
                  "id": "wrestling-foundations-level-change",
                  "title": "Level Change"
                },
                {
                  "id": "wrestling-foundations-double-leg",
                  "title": "Double-Leg Takedown"
                }
              ]
            }
          ]
        }
      }
    },
    "kung-fu": {
      "name": "Kung Fu",
      "icon": "🐉",
      "description": "Explore Chinese martial-arts traditions, movement and forms.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Build the kung fu base: stances, hand structure and forms.",
          "modules": [
            {
              "id": "foundations",
              "title": "Kung Fu Foundations",
              "lessons": [
                {
                  "id": "kung-fu-foundations-stance",
                  "title": "Stances — Bow & Horse"
                },
                {
                  "id": "kung-fu-foundations-hand",
                  "title": "Hand Techniques — Structure"
                },
                {
                  "id": "kung-fu-foundations-forms",
                  "title": "Forms — Taolu"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "music": {
    "theory": {
      "name": "Music Theory",
      "icon": "🎼",
      "description": "Pulse, scales, intervals and how music works.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Pulse, scales, intervals and how music works.",
          "modules": [
            {
              "id": "foundations",
              "title": "Music Theory Foundations",
              "lessons": [
                {
                  "id": "music-foundations-rhythm",
                  "title": "Rhythm & Tempo - The Pulse"
                },
                {
                  "id": "music-foundations-practice-loop",
                  "title": "The Practice Loop"
                },
                {
                  "id": "music-foundations-note-map",
                  "title": "Notes, Scales & Intervals"
                }
              ]
            }
          ]
        }
      }
    },
    "piano": {
      "name": "Piano",
      "icon": "🎹",
      "description": "Keyboard fundamentals, hand position and reading music.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Sit correctly, find your notes, play your first scale.",
          "modules": [
            {
              "id": "foundations",
              "title": "Piano Foundations",
              "lessons": [
                {
                  "id": "piano-foundations-posture",
                  "title": "Sitting & Hand Shape"
                },
                {
                  "id": "piano-foundations-keys",
                  "title": "Finding Your Notes"
                },
                {
                  "id": "piano-foundations-scale",
                  "title": "Your First Scale"
                }
              ]
            }
          ]
        }
      }
    },
    "guitar": {
      "name": "Guitar",
      "icon": "🎸",
      "description": "Fretting, strumming, chords and finger patterns.",
      "levels": {}
    },
    "voice": {
      "name": "Voice",
      "icon": "🎤",
      "description": "Breath, pitch, tone and vocal technique.",
      "levels": {}
    },
    "drums": {
      "name": "Drums",
      "icon": "🥁",
      "description": "Time, limbs, groove and basic patterns.",
      "levels": {}
    }
  },
  "programming": {
    "foundations": {
      "name": "Foundations",
      "icon": "🧠",
      "description": "How computers think: instructions, variables and logic.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Programs as exact instructions, variables as boxes, logic as forks and loops.",
          "modules": [
            {
              "id": "foundations",
              "title": "Programming Foundations",
              "lessons": [
                {
                  "id": "prog-foundations-program",
                  "title": "What a Program Is"
                },
                {
                  "id": "prog-foundations-variables",
                  "title": "Variables & Types"
                },
                {
                  "id": "prog-foundations-logic",
                  "title": "Decisions & Loops"
                }
              ]
            }
          ]
        }
      }
    },
    "python": {
      "name": "Python",
      "icon": "🐍",
      "description": "A friendly first language for real projects.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "First lines, flow and functions in real Python syntax.",
          "modules": [
            {
              "id": "foundations",
              "title": "Python Foundations",
              "lessons": [
                {
                  "id": "prog-python-first-lines",
                  "title": "Your First Lines"
                },
                {
                  "id": "prog-python-flow",
                  "title": "Ifs and Loops in Python"
                },
                {
                  "id": "prog-python-functions",
                  "title": "Functions - Name the Recipe"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "medicine": {
    "foundations": {
      "name": "Foundations",
      "icon": "🧬",
      "description": "How the body is organized and how to read a symptom honestly.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The systems map, the honest symptom read, and the referral ceiling.",
          "modules": [
            {
              "id": "foundations",
              "title": "Medicine Foundations",
              "lessons": [
                {
                  "id": "med-foundations-systems",
                  "title": "The Body as Systems"
                },
                {
                  "id": "med-foundations-symptoms",
                  "title": "Reading a Symptom Honestly"
                },
                {
                  "id": "med-foundations-referral",
                  "title": "The Referral Ceiling"
                }
              ]
            }
          ]
        }
      }
    },
    "first-aid": {
      "name": "First Aid",
      "icon": "🚑",
      "description": "What to do in the first minutes, and when to call for help.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Scene safety, bleeding control and the two rescue paths.",
          "modules": [
            {
              "id": "foundations",
              "title": "First Aid Foundations",
              "lessons": [
                {
                  "id": "med-first-aid-scene",
                  "title": "Scene Safety & Calling for Help"
                },
                {
                  "id": "med-first-aid-bleeding",
                  "title": "Bleeding & Wounds"
                },
                {
                  "id": "med-first-aid-unresponsive",
                  "title": "Unresponsive: Two Paths"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "business": {
    "foundations": {
      "name": "Foundations",
      "icon": "🧭",
      "description": "Value, customers and unit economics in plain numbers.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Who pays and why, the four true numbers, and betting under uncertainty.",
          "modules": [
            {
              "id": "foundations",
              "title": "Business Foundations",
              "lessons": [
                {
                  "id": "biz-foundations-value",
                  "title": "Value & Customers"
                },
                {
                  "id": "biz-foundations-economics",
                  "title": "Unit Economics in Plain Numbers"
                },
                {
                  "id": "biz-foundations-decisions",
                  "title": "Decisions Under Uncertainty"
                }
              ]
            }
          ]
        }
      }
    },
    "marketing": {
      "name": "Marketing",
      "icon": "📣",
      "description": "Being found and being chosen.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Positioning, channels and the first yes.",
          "modules": [
            {
              "id": "foundations",
              "title": "Marketing Foundations",
              "lessons": [
                {
                  "id": "biz-marketing-positioning",
                  "title": "Positioning - The Obvious Choice"
                },
                {
                  "id": "biz-marketing-channels",
                  "title": "Channels - Where Attention Lives"
                },
                {
                  "id": "biz-marketing-offers",
                  "title": "Offers & the First Yes"
                }
              ]
            }
          ]
        }
      }
    }
  },
  "skills": {
    "focus": {
      "name": "Focus & Attention",
      "icon": "🧘",
      "description": "Train the attention muscle everything else depends on.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The rep, the environment, and the deep block.",
          "modules": [
            {
              "id": "foundations",
              "title": "Focus Foundations",
              "lessons": [
                {
                  "id": "skills-focus-attention",
                  "title": "The Attention Muscle"
                },
                {
                  "id": "skills-focus-distraction",
                  "title": "Designing Against Distraction"
                },
                {
                  "id": "skills-focus-deepwork",
                  "title": "Deep Work Blocks & Real Rest"
                }
              ]
            }
          ]
        }
      }
    }
  }
};
