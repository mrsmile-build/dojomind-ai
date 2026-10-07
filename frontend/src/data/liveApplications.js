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
}
