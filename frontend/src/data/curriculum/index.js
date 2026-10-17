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
        },
        "intermediate": {
          "name": "Intermediate",
          "description": "Read and build the grammar: time signatures, key signatures and chord function.",
          "modules": [
            {
              "id": "intermediate",
              "title": "Music Theory Intermediate",
              "lessons": [
                {
                  "id": "music-theory-intermediate-rhythm",
                  "title": "Rhythm in Depth - Time, Dots & Syncopation"
                },
                {
                  "id": "music-theory-intermediate-scales",
                  "title": "Scales & Keys - Building and the Circle"
                },
                {
                  "id": "music-theory-intermediate-harmony",
                  "title": "Harmony & Chords - Stacking Thirds"
                }
              ]
            }
          ]
        },
        "expert": {
          "name": "Expert",
          "description": "Color and motion: modes, extended tensions, and moving between keys.",
          "modules": [
            {
              "id": "expert",
              "title": "Music Theory Expert",
              "lessons": [
                {
                  "id": "music-theory-expert-modes",
                  "title": "Modes - The Seven Diatonic Colors"
                },
                {
                  "id": "music-theory-expert-extensions",
                  "title": "Extended Chords & Available Tensions"
                },
                {
                  "id": "music-theory-expert-motion",
                  "title": "Secondary Dominants & Modulation"
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
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Hold it, fret it clean, strum it in time.",
          "modules": [
            {
              "id": "foundations",
              "title": "Guitar Foundations",
              "lessons": [
                {
                  "id": "music-guitar-hold",
                  "title": "Holding the Guitar & First Frets"
                },
                {
                  "id": "music-guitar-first-chords",
                  "title": "Your First Chords - Em & G"
                },
                {
                  "id": "music-guitar-strum",
                  "title": "Strumming With Time"
                }
              ]
            }
          ]
        }
      }
    },
    "voice": {
      "name": "Voice",
      "icon": "🎤",
      "description": "Breath, pitch, tone and vocal technique.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The instrument is the body: breath, pitch, tone.",
          "modules": [
            {
              "id": "foundations",
              "title": "Voice Foundations",
              "lessons": [
                {
                  "id": "music-voice-breath",
                  "title": "Breath & Support"
                },
                {
                  "id": "music-voice-pitch",
                  "title": "Finding & Matching Pitch"
                },
                {
                  "id": "music-voice-tone",
                  "title": "Tone, Resonance & Range"
                }
              ]
            }
          ]
        }
      }
    },
    "drums": {
      "name": "Drums",
      "icon": "🥁",
      "description": "Time, limbs, groove and basic patterns.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Grip, strokes, and your first groove.",
          "modules": [
            {
              "id": "foundations",
              "title": "Drum Foundations",
              "lessons": [
                {
                  "id": "music-drums-grip",
                  "title": "Grip & Posture"
                },
                {
                  "id": "music-drums-strokes",
                  "title": "Basic Stroke Types"
                },
                {
                  "id": "music-drums-groove",
                  "title": "Your First Groove"
                }
              ]
            }
          ]
        }
      }
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
    },
    "javascript": {
      "name": "JavaScript",
      "icon": "🌐",
      "description": "The language of the web, front and back.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The console, the page, and the network.",
          "modules": [
            {
              "id": "foundations",
              "title": "JavaScript Foundations",
              "lessons": [
                {
                  "id": "prog-js-console",
                  "title": "The Browser & the Console"
                },
                {
                  "id": "prog-js-dom",
                  "title": "DOM & Events"
                },
                {
                  "id": "prog-js-async",
                  "title": "Async & Fetch"
                }
              ]
            }
          ]
        }
      }
    },
    "web": {
      "name": "Web Development",
      "icon": "🕸️",
      "description": "HTML, CSS and how pages are built.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The skeleton, the skin, and the three layers.",
          "modules": [
            {
              "id": "foundations",
              "title": "Web Foundations",
              "lessons": [
                {
                  "id": "prog-web-html",
                  "title": "HTML - The Page Skeleton"
                },
                {
                  "id": "prog-web-css",
                  "title": "CSS - The Page Skin"
                },
                {
                  "id": "prog-web-layers",
                  "title": "Building a Page - Three Layers"
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
    },
    "herbalism": {
      "name": "Plant Medicine",
      "icon": "🌿",
      "description": "Leaves, roots, bark: traditional uses and modern caution.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Identification, preparations and the safety ceiling.",
          "modules": [
            {
              "id": "foundations",
              "title": "Plant Medicine Foundations",
              "lessons": [
                {
                  "id": "med-herb-identification",
                  "title": "Reading a Plant - Safe Identification"
                },
                {
                  "id": "med-herb-preparations",
                  "title": "Preparations - Teas, Tinctures, Poultices"
                },
                {
                  "id": "med-herb-ceiling",
                  "title": "Safety, Interactions & the Referral Ceiling"
                }
              ]
            }
          ]
        }
      }
    },
    "anatomy": {
      "name": "Anatomy & Physiology",
      "icon": "🦴",
      "description": "The machines inside: bones, muscles, organs, systems.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The frame, the movers, and the organ systems at a glance.",
          "modules": [
            {
              "id": "foundations",
              "title": "Anatomy Foundations",
              "lessons": [
                {
                  "id": "med-anatomy-skeleton",
                  "title": "The Skeletal Frame"
                },
                {
                  "id": "med-anatomy-muscles",
                  "title": "Muscles & Movement"
                },
                {
                  "id": "med-anatomy-systems",
                  "title": "Organ Systems at a Glance"
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
    },
    "finance": {
      "name": "Finance",
      "icon": "📊",
      "description": "Reading the numbers that tell the truth.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Statements, cash flow and capital decisions.",
          "modules": [
            {
              "id": "foundations",
              "title": "Finance Foundations",
              "lessons": [
                {
                  "id": "biz-finance-statements",
                  "title": "Reading Financial Statements"
                },
                {
                  "id": "biz-finance-cashflow",
                  "title": "Cash Flow & Runway"
                },
                {
                  "id": "biz-finance-capital",
                  "title": "Funding & Capital Decisions"
                }
              ]
            }
          ]
        }
      }
    },
    "operations": {
      "name": "Operations",
      "icon": "⚙️",
      "description": "Making the thing happen reliably.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Process, constraint and quality.",
          "modules": [
            {
              "id": "foundations",
              "title": "Operations Foundations",
              "lessons": [
                {
                  "id": "biz-ops-process",
                  "title": "Process & Flow"
                },
                {
                  "id": "biz-ops-bottleneck",
                  "title": "Bottlenecks & Throughput"
                },
                {
                  "id": "biz-ops-quality",
                  "title": "Quality & Consistency"
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
    },
    "memory": {
      "name": "Memory & Recall",
      "icon": "🧠",
      "description": "Encode, space, retrieve: memory that lasts.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The three pillars: encoding, spacing, retrieval.",
          "modules": [
            {
              "id": "foundations",
              "title": "Memory Foundations",
              "lessons": [
                {
                  "id": "skills-memory-encoding",
                  "title": "Encoding - How Memory Gets In"
                },
                {
                  "id": "skills-memory-spacing",
                  "title": "Spacing - The Testing Effect"
                },
                {
                  "id": "skills-memory-retrieval",
                  "title": "Retrieval - Active Beats Passive"
                }
              ]
            }
          ]
        }
      }
    },
    "habits": {
      "name": "Habits",
      "icon": "🔁",
      "description": "Design behavior so the good thing happens by default.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "The loop, the design, and changing the stubborn ones.",
          "modules": [
            {
              "id": "foundations",
              "title": "Habit Foundations",
              "lessons": [
                {
                  "id": "skills-habits-loop",
                  "title": "The Habit Loop"
                },
                {
                  "id": "skills-habits-design",
                  "title": "Designing Habits That Stick"
                },
                {
                  "id": "skills-habits-change",
                  "title": "Changing Stubborn Habits"
                }
              ]
            }
          ]
        }
      }
    },
    "learning": {
      "name": "Learning How to Learn",
      "icon": "📚",
      "description": "The method behind every method in this app.",
      "levels": {
        "beginner": {
          "name": "Beginner",
          "description": "Interleaving, feedback and transfer.",
          "modules": [
            {
              "id": "foundations",
              "title": "Learning Foundations",
              "lessons": [
                {
                  "id": "skills-learning-interleaving",
                  "title": "Interleaving & Variation"
                },
                {
                  "id": "skills-learning-feedback",
                  "title": "Feedback - The Signal Diet"
                },
                {
                  "id": "skills-learning-transfer",
                  "title": "Transfer - Knowledge That Travels"
                }
              ]
            }
          ]
        }
      }
    }
  }
};
