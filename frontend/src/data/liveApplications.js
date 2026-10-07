export const liveApplications = {
  'karate-stances': {
    scenarios: [
      {
        setup: 'A partner pushes your chest lightly while you hold a natural stance.',
        action: 'You widen your base and lower your center slightly, absorbing the push without stepping.',
        why: 'A wider, lower base keeps the center of mass over the support area so external force does not tip you.',
      },
      {
        setup: 'You must move quickly to your left to avoid a sweeping leg.',
        action: 'You keep weight even and feet under the hips so you can push off in any direction.',
        why: 'An even, mobile stance preserves the ability to move before committing to a direction.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'A stable stance is the platform every technique launches from; choose the stance that matches what you intend to do next.' },
      { role: 'Facing it', detail: 'An opponent with a poor stance is easy to off-balance; attack their base by forcing weight shifts or sweeping the unsupported side.' },
    ],
    adaptation: {
      cues: [
        'Center of mass drifting outside the feet',
        'Feet too close together under pressure',
        'Excess tension locking the knees',
      ],
      adjustments: [
        { if: 'You feel tipped forward', then: 'Widen the base and shift weight back over the heels.' },
        { if: 'You cannot move when needed', then: 'Reduce tension and bring the feet under the hips for mobility.' },
      ],
      learning: 'After each balance challenge, note whether your base or your tension failed first, and adjust the other next time.',
    },
  },

  'karate-stances-front': {
    scenarios: [
      {
        setup: 'You step forward into a lunge punch toward a partner.',
        action: 'You land in front stance as the punch extends, driving power from the rear leg through the hips.',
        why: 'The forward-weighted stance transfers body mass into the strike at the moment of contact.',
      },
      {
        setup: 'A partner pushes forward into your front stance.',
        action: 'You root the rear leg, keep the knee over the foot, and hold the 60/40 split without collapsing.',
        why: 'The extended rear leg and planted heel brace against forward pressure so the stance does not fold.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Front stance is your advancing power base: step into it as you strike to put body weight behind the technique.' },
      { role: 'Facing it', detail: 'A front stance is strong forward but weak to the side; circle to its outside and attack the narrow lateral base.' },
    ],
    adaptation: {
      cues: [
        'Rear heel lifting under pressure',
        'Front knee drifting inward',
        'Torso leaning past the front knee',
      ],
      adjustments: [
        { if: 'The rear heel lifts', then: 'Press the heel down and lengthen the rear leg to restore drive.' },
        { if: 'You feel tipped sideways', then: 'Widen the lateral spacing between the feet.' },
      ],
      learning: 'After each stepping strike, check whether power came from the legs and hips or only the arm, and correct the drive next rep.',
    },
  },

  'karate-stances-back': {
    scenarios: [
      {
        setup: 'A partner lunges with a punch while you hold back stance.',
        action: 'You stay weighted 70/30 on the rear leg, letting the lunge fall short, then shift forward into a counter.',
        why: 'The rear-weighted base keeps you just out of reach and loaded to drive forward the instant the attack misses.',
      },
      {
        setup: 'You need to defend a low kick to your lead leg.',
        action: 'You keep the lead leg light and lift it slightly to check or evade while the rear leg holds your weight.',
        why: 'With most weight already back, the lead leg is free to move without upsetting balance.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Back stance is your defensive and counter base: stay back, let attacks expire, then drive forward into the gap.' },
      { role: 'Facing it', detail: 'A back-stance fighter is hard to reach but slow to advance; pressure them continuously so they cannot set the counter timing.' },
    ],
    adaptation: {
      cues: [
        'Weight creeping forward onto the lead leg',
        'Rear knee caving inward',
        'Heels drifting off the aligned line',
      ],
      adjustments: [
        { if: 'Weight drifts forward', then: 'Reset 70/30 back and re-establish the L-shape feet.' },
        { if: 'You cannot counter quickly', then: 'Keep the rear knee loaded and the torso upright, ready to drive.' },
      ],
      learning: 'After each defensive exchange, note whether you countered from a loaded rear leg or from a flat, stuck position.',
    },
  },

  'karate-stances-horse': {
    scenarios: [
      {
        setup: 'A partner pushes your shoulder from the side while you hold horse stance.',
        action: 'You keep weight even, knees tracking over the feet, and absorb the lateral push without tipping.',
        why: 'The parallel, even base is strongest against side force, which is exactly where the push arrives.',
      },
      {
        setup: 'You deliver a side elbow from horse stance.',
        action: 'You rotate the hips within the stable base while the feet stay planted and parallel.',
        why: 'The grounded base lets the hips generate rotation without losing stability.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Horse stance is your grounded power and conditioning base: use it for side-line techniques and for building leg strength.' },
      { role: 'Facing it', detail: 'A horse stance is stable laterally but cannot advance quickly; attack from the front or back line where it must turn to face you.' },
    ],
    adaptation: {
      cues: [
        'Knees collapsing inward',
        'Feet turning outward',
        'Torso leaning forward under load',
      ],
      adjustments: [
        { if: 'Knees cave in', then: 'Press the knees outward in line with the feet and reduce depth.' },
        { if: 'You tip forward', then: 'Stack the shoulders over the hips and even the weight.' },
      ],
      learning: 'After each hold, note which failed first: knee alignment or torso posture, and target that in the next set.',
    },
  },

  'karate-strikes-mechanics': {
    scenarios: [
      {
        setup: 'You punch a heavy bag and hear a slap instead of a thud.',
        action: 'You reconnect the chain: push from the rear foot, rotate the hips, then extend the arm last.',
        why: 'The thud returns when force travels ground-to-hip-to-fist instead of arm-only.',
      },
      {
        setup: 'A partner holds pads and your strike feels weak.',
        action: 'You time the hip rotation to land exactly with contact and tighten only at impact (kime).',
        why: 'Synchronizing rotation with contact and focusing tension at impact transfers maximum force into the pad.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Build every strike from the ground up; the arm delivers, the body generates.' },
      { role: 'Facing it', detail: 'A strike with no hip rotation telegraphs and lacks penetration; slip or absorb it and counter before they recover.' },
    ],
    adaptation: {
      cues: [
        'Shoulders tensing before the hips move',
        'Force feeling like it stops at the shoulder',
        'A slap sound on impact',
      ],
      adjustments: [
        { if: 'Power stops at the shoulder', then: 'Slow down and re-sequence: foot, hip, then arm.' },
        { if: 'You tense too early', then: 'Stay loose until the instant of contact, then kime.' },
      ],
      learning: 'After each strike, grade where the force originated: feet, hips, or arm, and rebuild from the lowest link that failed.',
    },
  },

  'karate-strikes-elbow': {
    scenarios: [
      {
        setup: 'A partner closes inside your punching range and grabs your shoulder.',
        action: 'You rotate the hips and drive a horizontal elbow into the open line while staying compact.',
        why: 'At close range the elbow is already loaded and needs no extension, so it lands before a punch could chamber.',
      },
      {
        setup: 'You miss a punch and the partner rushes in.',
        action: 'You convert the missed extension into an elbow by bending the arm and rotating as they enter.',
        why: 'The bent-arm structure turns a failed long-range tool into an immediate close-range one without resetting.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Elbows are your inside weapons: use them when the gap closes too far for punches, driving from body rotation.' },
      { role: 'Facing it', detail: 'An elbow needs close range and rotation; keep distance or trap the rotating shoulder to deny the turn.' },
    ],
    adaptation: {
      cues: [
        'Gap closing inside punch range',
        'Partner committing forward into you',
        'Your own punch missing and leaving you inside',
      ],
      adjustments: [
        { if: 'The gap closes suddenly', then: 'Drop punch plans and switch to elbow or control.' },
        { if: 'Your elbow feels weak', then: 'Add hip and torso rotation instead of shoulder push.' },
      ],
      learning: 'After each close-range exchange, note whether you recognized the range change in time to switch weapons.',
    },
  },

  'karate-movement-footwork': {
    scenarios: [
      {
        setup: 'You advance toward a partner who keeps stepping back to stay out of reach.',
        action: 'You use smooth sliding steps that preserve your stance frame, closing the gap without crossing your feet or bouncing.',
        why: 'Preserving the frame means every step ends in a usable stance, so you can attack or defend the instant you arrive.',
      },
      {
        setup: 'A partner rushes forward at you.',
        action: 'You step back with the same low, level motion, keeping distance while staying balanced to counter.',
        why: 'Backward footwork with a preserved frame lets you exit range without turning your back or losing the ability to respond.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Footwork is how you choose the range and angle every technique happens at; good steps make every other skill easier.' },
      { role: 'Facing it', detail: 'An opponent with poor footwork crosses their feet or bounces; attack in the moment their base is mid-cross, when they cannot move or brace.' },
    ],
    adaptation: {
      cues: [
        'A bounce in the step as they move',
        'Feet crossing during a step',
        'Head height rising and falling',
      ],
      adjustments: [
        { if: 'They cross their feet mid-step', then: 'Enter at that instant; their base cannot redirect.' },
        { if: 'They bounce rhythmically', then: 'Time your entry to the moment their weight is lightest and least rooted.' },
      ],
      learning: 'After each movement exchange, note one moment your own frame broke and what caused it: rushing, bouncing, or overstepping.',
    },
  },
  'karate-movement-balance': {
    scenarios: [
      {
        setup: 'A partner pushes you lightly from an unexpected side while you step.',
        action: 'You freeze mid-step with your center over your base instead of stumbling, then continue or redirect.',
        why: 'Keeping the center over the base at every instant means an unexpected force finds structure, not momentum.',
      },
      {
        setup: 'You slip on a slightly smooth floor mid-step.',
        action: 'You shorten the step, lower your center, and widen the base to recover before continuing.',
        why: 'A lower, wider base enlarges the support area, giving the center more room to return over it.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Balance is what lets you stop, turn, or strike at any moment; train it by freezing mid-movement, not only by standing still.' },
      { role: 'Facing it', detail: 'An off-balance opponent cannot defend or generate power; push or pull when their center is already traveling outside their base.' },
    ],
    adaptation: {
      cues: [
        'Their head leading far ahead of their hips',
        'A stumble or extra recovery step',
        'Weight crashing onto the landing foot',
      ],
      adjustments: [
        { if: 'You feel your center leave the base', then: 'Shorten the step and lower the hips to bring the base back under it.' },
        { if: 'They overcommit and lean', then: 'Move off line and let their own momentum carry them past.' },
      ],
      learning: 'After each drill, name the instant your balance was weakest and which habit caused it: leaning, rushing, or looking down.',
    },
  },
  'karate-movement-direction': {
    scenarios: [
      {
        setup: 'A partner attacks the line you are facing.',
        action: 'You pivot on the ball of the front foot, turning 90 degrees so the attack passes where you were, not where you are.',
        why: 'Turning off the attack line removes the target while keeping you balanced and facing the partner.',
      },
      {
        setup: 'You need to reverse direction after advancing.',
        action: 'You pivot on the ball, keep your height constant, and settle into stance facing the new direction before moving again.',
        why: 'A settled pivot preserves the base, so the reversal is a change of line, not a loss of balance.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Turns change the angle of the whole exchange; a good pivot defends and repositions in one motion.' },
      { role: 'Facing it', detail: 'A partner who turns on their heel or rises mid-turn is slow and unstable; pressure them during the rotation.' },
    ],
    adaptation: {
      cues: [
        'Heel grinding instead of ball pivot',
        'Height rising during a turn',
        'Feet crossing mid-turn',
      ],
      adjustments: [
        { if: 'Your turn feels heavy', then: 'Rise slightly onto the ball of the pivot foot before rotating.' },
        { if: 'They turn to re-face you slowly', then: 'Enter along the arc before their stance settles.' },
      ],
      learning: 'After each turning drill, note whether your height changed at any point and what that did to your arrival stability.',
    },
  },
  'karate-blocks-why': {
    scenarios: [
      {
        setup: 'A partner throws a committed straight punch at your midsection.',
        action: 'You angle your forearm to meet it off-center, redirecting it past your hip instead of stopping it head-on.',
        why: 'Angled redirection spends their force sideways, so a fraction of your structure deflects their full commitment.',
      },
      {
        setup: 'A partner pushes into your guard with steady pressure.',
        action: 'You structure your arm and stance so the force travels through your frame into the ground instead of your shoulder.',
        why: 'Structure converts muscular effort into skeletal support, letting a smaller force manage a larger one.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Blocks are angle and structure tools that redirect force and position you to counter, not walls that absorb hits.' },
      { role: 'Facing it', detail: 'A blocker who meets force head-on tires quickly; feed them heavy committed attacks to drain them, then change line.' },
    ],
    adaptation: {
      cues: [
        'Their block arm meeting you straight on',
        'A block that stops but leaves them frozen',
        'Structure collapsing under pressure',
      ],
      adjustments: [
        { if: 'Your block feels like a shoving match', then: 'Add angle so their force travels past you instead of into you.' },
        { if: 'They block and freeze', then: 'Flow immediately into the counter their frozen guard allows.' },
      ],
      learning: 'After each blocking exchange, note whether you redirected or absorbed, and what your arms felt like at the end.',
    },
  },
  'karate-blocks-downward': {
    scenarios: [
      {
        setup: 'A partner throws a front kick at your midsection.',
        action: 'You sweep your arm down and across in a circular arc, contacting their shin and redirecting the kick past your hip.',
        why: 'The circular path meets the kicking leg early and angles it outward, spending its force beside you instead of on you.',
      },
      {
        setup: 'A partner punches low while you hold front stance.',
        action: 'You execute gedan barai with hip rotation, deflecting the punch and staying positioned to counter with the other hand.',
        why: 'Hip rotation powers the sweep while the hikite hand stays loaded, so defense and counter share one motion.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Gedan barai clears the low line: kicks, low punches, and grabs, and ends with you loaded to counter.' },
      { role: 'Facing it', detail: 'A downward block leaves the high line open while the arm is low; change level and attack above the sweeping arm.' },
    ],
    adaptation: {
      cues: [
        'Their attack dropping to the low line',
        'A kicking hip turning over',
        'Your own arm sweeping too late',
      ],
      adjustments: [
        { if: 'The kick lands before your sweep arrives', then: 'Start the block from their hip turn, not from their foot.' },
        { if: 'They follow the low feint with a high punch', then: 'Keep the non-blocking hand in guard to cover the high line.' },
      ],
      learning: 'After each drill, note whether your sweep met the attack early or late, and which cue you used to start it.',
    },
  },
  'karate-blocks-rising': {
    scenarios: [
      {
        setup: 'A partner swings a downward strike at your head.',
        action: 'You sweep your forearm up in an arc, contacting their wrist or forearm and redirecting the blow over your head.',
        why: 'The rising angled surface converts their downward force into a path that passes beside your head.',
      },
      {
        setup: 'A partner throws a high punch while you advance.',
        action: 'You use age uke to deflect the punch upward and outward while stepping in, closing distance under their guard.',
        why: 'The rising block clears the high line while your forward step takes you inside their effective range.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Age uke protects the head from downward and high-line attacks and positions you to enter and counter.' },
      { role: 'Facing it', detail: 'A rising block exposes the midsection while the arm is overhead; draw the block high, then attack the open middle.' },
    ],
    adaptation: {
      cues: [
        'Their hand rising above shoulder height',
        'A shoulder dropping into a downward swing',
        'Your elbow flaring wide during the block',
      ],
      adjustments: [
        { if: 'The block arrives late', then: 'Initiate from their shoulder lift, keeping the arc tight and early.' },
        { if: 'They counter to your middle after blocking high', then: 'Drop the elbow and reconnect guard to the midline immediately after the deflection.' },
      ],
      learning: 'After each repetition, note whether your arc stayed tight to your center line or flared, and what that cost you.',
    },
  },

  'karate-kicks-mechanics': {
    scenarios: [
      {
        setup: 'You throw a front kick and your partner catches your leg.',
        action: 'You retract the leg along the same path it came, returning to chamber before lowering, so they cannot hold it.',
        why: 'Retraction along the same path means the leg returns to a protected position before they can grab or control it.',
      },
      {
        setup: 'Your kick lands but you stumble on the landing.',
        action: 'You focus on balance on the support leg throughout, keeping the knee slightly bent and the center over the foot.',
        why: 'Balance on the support leg is the foundation of every kick; without it, the kick is weak and recovery is slow.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Kicks are powerful but leave you vulnerable; chamber, extend, contact, and retract with control, prioritizing balance over height.' },
      { role: 'Facing it', detail: 'A kicker is most vulnerable during the kick and during retraction; close distance, catch the leg, or counter as they recover.' },
    ],
    adaptation: {
      cues: [
        'Their knee lifting into chamber',
        'Weight shifting onto one leg',
        'The direction of their hips turning',
      ],
      adjustments: [
        { if: 'You catch their kicking leg', then: 'Push or sweep their support leg before they retract.' },
        { if: 'Your kick is caught', then: 'Retract immediately along the same path and drop your weight to escape the grab.' },
      ],
      learning: 'After each kicking exchange, note whether your retraction was as controlled as your extension, and what that did to your recovery.',
    },
  },
  'karate-kicks-front': {
    scenarios: [
      {
        setup: 'A partner closes to punching range while you hold front stance.',
        action: 'You shift weight to the rear leg, chamber the front leg high, and snap a front kick to their midsection before they can strike.',
        why: 'The front kick uses the lead leg, which is already positioned to reach the target without stepping, so it lands before a punch could extend.',
      },
      {
        setup: 'You throw a front kick and your partner steps back to evade.',
        action: 'You retract the leg to chamber and immediately step forward into front stance, maintaining distance and pressure.',
        why: 'Retracting to chamber preserves balance and readiness, so the step forward keeps you in range without overcommitting.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'The front kick is your fastest, most direct kick; use it to intercept, to create distance, or to follow up after a hand technique.' },
      { role: 'Facing it', detail: 'A front kick telegraphs from the chamber; step back to make it miss, or step in to jam it before extension.' },
    ],
    adaptation: {
      cues: [
        'Their weight shifting onto the rear leg',
        'The front knee lifting into chamber',
        'Their hips squaring forward',
      ],
      adjustments: [
        { if: 'You see the chamber early', then: 'Step back to make the kick fall short, then counter as they retract.' },
        { if: 'You are too close to evade', then: 'Step in and jam the kick before it extends, using your arms to block the knee.' },
      ],
      learning: 'After each front kick exchange, note whether you read the chamber in time to evade or jam, and what cue you used.',
    },
  },
  'karate-kicks-balance': {
    scenarios: [
      {
        setup: 'You throw a kick and a partner pushes you lightly from the side.',
        action: 'You maintain balance on the support leg by keeping the knee slightly bent and the center over the foot, absorbing the push.',
        why: 'A slightly bent support knee and centered weight create a stable base that can absorb lateral force without tipping.',
      },
      {
        setup: 'You hold a kick chamber and your support leg starts to shake.',
        action: 'You lower the kick, rest, then rebuild with shorter holds and better alignment.',
        why: 'Shaking indicates the support leg is fatigued or misaligned; rebuilding with proper form prevents injury and builds strength correctly.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Balance during kicks is trained by holding chambered positions, not just by kicking; build support leg strength and alignment first.' },
      { role: 'Facing it', detail: 'A kicker with poor balance is easy to sweep or push off their support leg; apply lateral force during the kick.' },
    ],
    adaptation: {
      cues: [
        'Their support knee locking straight',
        'Their center drifting off the support foot',
        'Their arms flailing for balance',
      ],
      adjustments: [
        { if: 'Their support knee is locked', then: 'Apply a light push to the side; a locked knee cannot absorb lateral force.' },
        { if: 'You feel unstable during your own kick', then: 'Reduce the height or speed until balance is solid, then rebuild.' },
      ],
      learning: 'After each balance drill, note whether the failure was strength (shaking) or alignment (drifting), and target that in the next set.',
    },
  },
  'karate-combinations-combining': {
    scenarios: [
      {
        setup: 'You throw a straight punch and your partner blocks it high.',
        action: 'You immediately follow with a front kick to the midsection, using the opening their high block created.',
        why: 'The first technique forces a reaction that opens a line; the second technique travels that line before they can recover.',
      },
      {
        setup: 'You throw a three-technique combination and your partner covers all three.',
        action: 'You recognize the chain failed and reset to guard, then look for a new opening instead of forcing more techniques.',
        why: 'A combination that is not working should be abandoned, not extended; resetting preserves balance and guard for the next exchange.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Combinations are chains of cause and effect; each technique sets up the next, so choose techniques that create openings for each other.' },
      { role: 'Facing it', detail: 'A combination is predictable if you recognize the pattern; disrupt it by changing level, angle, or timing between techniques.' },
    ],
    adaptation: {
      cues: [
        'Their guard moving to cover one line',
        'A pause between their techniques',
        'Their weight shifting after a technique',
      ],
      adjustments: [
        { if: 'They cover your first technique', then: 'Follow with a technique to the line they just opened.' },
        { if: 'They disrupt your combination', then: 'Reset to guard and look for a new opening instead of forcing the chain.' },
      ],
      learning: 'After each combination, note whether each technique created an opening for the next, or whether the chain broke at a specific link.',
    },
  },
  'karate-combinations-rhythm': {
    scenarios: [
      {
        setup: 'Your partner times your combination perfectly and counters the third technique.',
        action: 'You add a pause between the second and third techniques, breaking the rhythm they learned, then accelerate the third.',
        why: 'Breaking rhythm removes the timing they learned, so their counter arrives at the wrong moment and misses.',
      },
      {
        setup: 'You throw a slow-slow-fast combination and your partner retreats during the pause.',
        action: 'You close distance during the pause so the fast technique arrives before they can retreat fully.',
        why: 'A pause that does not close distance gives the partner time to retreat; combining pause with distance control keeps them in range.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Rhythm changes make combinations unpredictable; use pauses, accelerations, and decelerations to break the timing your partner learned.' },
      { role: 'Facing it', detail: 'A broken rhythm is hard to time; instead of guessing when the next technique arrives, watch their center and react to movement, not tempo.' },
    ],
    adaptation: {
      cues: [
        'Their techniques arriving at equal intervals',
        'A pause in their combination',
        'Their acceleration after a slow technique',
      ],
      adjustments: [
        { if: 'Their rhythm is predictable', then: 'Time your counter to arrive during their pause or after their acceleration.' },
        { if: 'They break rhythm to deceive you', then: 'Watch their center mass instead of timing, so you react to movement, not tempo.' },
      ],
      learning: 'After each rhythm drill, note whether you timed their combination or watched their body, and which was more effective.',
    },
  },
  'karate-combinations-recovering': {
    scenarios: [
      {
        setup: 'You finish a combination and drop your hands, admiring the last technique.',
        action: 'You immediately return your guard to position, settle into stance, and take distance or angle before relaxing.',
        why: 'The moment after the last technique is when counters most often land; recovery must be part of the technique, not after it.',
      },
      {
        setup: 'You finish a combination and your partner counters immediately.',
        action: 'You exit on a 45-degree angle instead of straight back, so their counter travels where you were, not where you are.',
        why: 'Exiting on an angle moves you off the line of their counter while maintaining distance and balance.',
      },
    ],
    perspectives: [
      { role: 'Using it', detail: 'Recovery is part of the technique, not the end; guard, stance, and distance must return before awareness relaxes.' },
      { role: 'Facing it', detail: 'Most fighters relax after their last technique; counter immediately after their combination ends, before they recover guard and stance.' },
    ],
    adaptation: {
      cues: [
        'Their hands dropping after the last technique',
        'Their weight falling forward past the base',
        'Their eyes looking away or celebrating',
      ],
      adjustments: [
        { if: 'They drop their guard after finishing', then: 'Counter immediately before they can recover.' },
        { if: 'You finish and feel vulnerable', then: 'Make recovery automatic: guard up, stance settled, angle taken before anything relaxes.' },
      ],
      learning: 'After each combination, note whether your guard and stance returned before your attention relaxed, and what that did to your vulnerability.',
    },
  },
}
