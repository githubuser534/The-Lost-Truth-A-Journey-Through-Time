
// ========================================
// THE LOST TRUTH
// SOJOURNER DOCUMENTARY
// ========================================


// HTML ELEMENTS

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const intro = document.getElementById("intro");
const documentary = document.getElementById("documentary");

const scene = document.getElementById("scene");

const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");

const factTitle = document.getElementById("factTitle");
const factText = document.getElementById("factText");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const sceneLabel = document.getElementById("sceneLabel");


// ========================================
// DOCUMENTARY CHAPTERS
// ========================================

const chapters = [

  {
    
    title: "The Beginning",
    scene: "beginning",
    label: "THE BEGINNING",

    text:
      "I was an idea, an experiment born from ambition. NASA wanted to prove to the world that a small, lightweight robotic vehicle like me could survive the surface of another planet. Like all experiments, NASA needed a name for me. They saw the name Sojourner, after Sojourner Truth, the American civil rights activist and abolitionist, fit. I can see why that name stuck with me. Sojourner Truth and I have one thing in common: we both set out to challenge those who underestimated us. I was a part of a mission much, much bigger than my tiny self.",

    factTitle: "A tiny explorer",

    fact:
      "I weighed approximately 10.6 kilograms (23 pounds). Despite my small size, I carried scientific instruments that could investigate Martian rocks and soil."
  },

  {
    title: "The Journey",
    scene: "journey",
    label: "MILLIONS OF MILES FROM HOME",

    text:
      "On December 4, 1996, I said goodbye to my home, and launched henceforth into the vast darkness that was outer space. I traveled inside the spacecraft, heading toward an alien planet millions of miles away. I was humming with excitement and anticipation. What would it be like? Are we there yet? After what seemed like forever, I finally approached the mysterious red rock. There it was, floating in space. I reached Mars, my final destination.",

    factTitle: "The long journey",

    fact:
      "I launched aboard a Delta II rocket, and I reached Mars on July 4, 1997, America's Independence Day."
  },

  {
    title: "Touchdown",
    scene: "landing",
    label: "WELCOME TO MARS",

    text:
      "On July 4, 1997, I finally reached Mars. My spacecraft descended toward a region called Ares Vallis. Instead of landing on its legs, it relied on a parachute to slow its descent and enormous airbags to cushion its impact against the Martian surface. After bouncing across the red terrain, everything finally came to a stop. Then, the lander's petals slowly unfolded, revealing the world around me. But I wasn't quite ready to explore yet. The next couple of days were spent preparing for my first journey across the Martian surface. Finally, on July 6, the moment I had traveled millions of miles for arrived. I rolled down the ramp. For the very first time, my wheels touched the soil of another planet. I was finally here.",

    factTitle: "A bouncing landing",

    fact:
      "I bounced approximately 15 times before coming to rest. My airbag landing system was an important technological demonstration."
  },

  {
    title: "A New World",
    scene: "exploration",
    label: "EXPLORING A NEW PLANET",

    text:
      "My mind was filled with curiosity. Slowly moving across the rocky, red surface, I began to wonder how NASA was doing back on Earth. They probably felt ecstatic because this is big. Scientists could finally control an object remotely on another planet like Mars. Taking in my surroundings, I explored nearby rocks, photographed the landscape, used my Alpha Proton X-ray Spectrometer to investigate the chemical composition of rocks and soil, searched for anything that would help my people back at home. I wanted them to see the beauty in front of me no matter how far away from me they were.",

    factTitle: "A mission that exceeded expectations",

    fact:
      "I was designed for a seven-day mission but I actually operated for 83 days. My cameras returned 550 images."
  },

  {
    title: "The Silence",
    scene: "silence",
    label: "THE FINAL TRANSMISSION",

    text:
      "I was only built to last seven Martian days, yet I kept going for months. My hunger for exploration was never satiated. Then, on September 27, 1997, everything changed. I sent my usual transmission to my companion lander, Pathfinder, waiting for the familiar pulse of instructions from Earth. I sat there, waiting and waiting, but nothing came back. I tried again. Silence. Days turned into weeks, and weeks into months, as I waited in the freezing Martian dust, calling out into a void that no longer answered. By March 10, 1998, the calls stopped completely. Alone beside my silent lander, a heavy emptiness settled over my circuits. Without Earth’s voice guiding me, what was I? The mission that gave me life was over, and I was left behind––abandoned on a silent, frozen world, stripped of my purpose. For something so tiny, I've never felt smaller in my life.",

    factTitle: "A mission remembered",

    fact:
      "I operated for roughly twelve times my planned seven-day lifetime. My final mission data helped preserve an important chapter in planetary exploration."
  },

  {
    title: "The Legacy",
    scene: "legacy",
    label: "A LEGACY BEYOND ITS MISSION",

    text:
      "I spent days kicking red rocks on the sand. I felt discarded. Staring back at what was once my home planet, I wondered if they ever thought about me, or if they forgot about me. For the longest time, I thought my story ended in that silence. But I was wrong. Though my wheels never turned again, the path I carved didn't disappear. I proved to the world that a small, affordable rover could conquer another planet. Everything my creators learned from my struggles and triumphs became the blueprint for the giants that followed—–Spirit, Opportunity, Curiosity, and Perseverance. I may rest forever in the red dust of Mars, but every time a new rover rolls across this horizon, a piece of me is driving right beside them. And so, dear receiver, I am finally signaling to remind you that even though I am a million miles away, I am still here, and that is my Truth.",

    factTitle: "A little rover, a big impact",

    fact:
      "The entire mission returned approximately 2.3 billion bits of information, including more than 16,500 lander images and 550 rover images."
  }

];


// ========================================
// TRACK THE CURRENT CHAPTER
// ========================================

let currentChapter = 0;


// ========================================
// DISPLAY A CHAPTER
// ========================================

function showChapter() {

  const chapter = chapters[currentChapter];

  // Update story text

  chapterNumber.textContent =
    `CHAPTER 0${currentChapter + 1} / 06`;

  chapterTitle.textContent = chapter.title;

  chapterText.textContent = chapter.text;


// Replay cinematic animations whenever a chapter changes
const animatedElements = [
  document.querySelector(".story-container"),
  document.getElementById("chapterNumber"),
  document.getElementById("chapterTitle"),
  document.getElementById("chapterText"),
  document.getElementById("factTitle"),
  document.getElementById("factText")
];

animatedElements.forEach((element) => {
  if (!element) return;

  element.classList.remove("chapter-transition");

  // Restart the animation
  void element.offsetWidth;

  element.classList.add("chapter-transition");
});



  // Update science fact

  factTitle.textContent = chapter.factTitle;

  factText.textContent = chapter.fact;


  // Update animated scene

  scene.dataset.scene = chapter.scene;

  sceneLabel.textContent = chapter.label;


  // Update progress bar

  const progress =
    ((currentChapter + 1) / chapters.length) * 100;

  progressBar.style.width = `${progress}%`;

  progressText.textContent =
    `${currentChapter + 1} / ${chapters.length}`;


  // Update buttons

  prevBtn.disabled = currentChapter === 0;

  prevBtn.style.opacity =
    currentChapter === 0 ? "0.4" : "1";

  if (currentChapter === chapters.length - 1) {

    nextBtn.textContent = "RESTART DOCUMENTARY ↻";

  } else {

    nextBtn.textContent = "NEXT CHAPTER →";

  }

  // Update the chapter soundtrack
  updateMusic();

}


// ========================================
// START THE DOCUMENTARY
// ========================================


// PROLOGUE ELEMENTS
const prologue = document.getElementById("prologue");
const prologueContinue = document.getElementById("prologueContinue");


const storyContainer = document.querySelector(".story-container");
const landingSequence = document.getElementById("landingSequence");

// BEGIN JOURNEY → SHOW PROLOGUE
startBtn.addEventListener("click", () => {
  intro.hidden = true;
  documentary.hidden = false;

  prologue.hidden = false;

  // Hide the regular documentary content for now
  if (scene) scene.hidden = true;
  if (storyContainer) storyContainer.hidden = true;
  if (landingSequence) landingSequence.hidden = true;

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// PROLOGUE → CHAPTER 1
prologueContinue.addEventListener("click", () => {
  prologue.hidden = true;

  if (scene) scene.hidden = false;
  if (storyContainer) storyContainer.hidden = false;
  if (landingSequence) landingSequence.hidden = false;

  currentChapter = 0;
  showChapter();

  window.scrollTo({ top: 0, behavior: "smooth" });
});



// ========================================
// NEXT CHAPTER
// ========================================

nextBtn.addEventListener("click", () => {

  if (currentChapter === chapters.length - 1) {

    currentChapter = 0;

  } else {

    currentChapter++;

  }

  showChapter();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ========================================
// PREVIOUS CHAPTER
// ========================================

prevBtn.addEventListener("click", () => {

  if (currentChapter > 0) {

    currentChapter--;

    showChapter();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

});


/* ==========================================
   INTERACTIVE MARS LANDING SEQUENCE
========================================== */


// HTML ELEMENTS

const landingScene = document.getElementById("landingScene");

const playLanding = document.getElementById("playLanding");
const pauseLanding = document.getElementById("pauseLanding");
const replayLanding = document.getElementById("replayLanding");

const landingStageNumber =
  document.getElementById("landingStageNumber");

const landingStageTitle =
  document.getElementById("landingStageTitle");

const landingStageText =
  document.getElementById("landingStageText");

const landingTime =
  document.getElementById("landingTime");

const landingVisualLabel =
  document.getElementById("landingVisualLabel");


// Check visitor's motion preference

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


// ==========================================
// LANDING EVENTS
// ==========================================

const landingStages = [

  {
    title: "Approaching the Red Planet",

    description:
      "After months of interplanetary travel, Pathfinder reaches Mars. Its entry vehicle plunges into the Martian atmosphere inside a protective heat shield.",

    label: "ATMOSPHERIC ENTRY",

    time: "BEFORE TOUCHDOWN",

    duration: 2800,

    classes: []
  },

  {
    title: "The Parachute Opens",

    description:
      "A supersonic parachute deploys to slow Pathfinder as it descends through the thin Martian atmosphere.",

    label: "PARACHUTE DEPLOYMENT",

    time: "APPROXIMATELY 2 MINUTES BEFORE TOUCHDOWN",

    duration: 2800,

    classes: ["stage-parachute"]
  },

  {
    title: "The Heat Shield Separates",

    description:
      "After the parachute slows the spacecraft, its forward heat shield separates. Pathfinder continues descending beneath its parachute.",

    label: "HEAT SHIELD SEPARATION",

    time: "DURING DESCENT",

    duration: 2800,

    classes: ["stage-parachute", "stage-shield"]
  },

  {
    title: "The Airbags Inflate",

    description:
      "Four large interconnected airbags inflate around the lander. They create a protective cushion designed to absorb the impact with the Martian surface.",

    label: "AIRBAG INFLATION",

    time: "ABOUT 8 SECONDS BEFORE TOUCHDOWN",

    duration: 3000,

    classes: [
      "stage-parachute",
      "stage-shield",
      "stage-airbags"
    ]
  },

  {
    title: "The Rockets Fire",

    description:
      "Three solid retrorockets fire from the backshell to slow the spacecraft before it is released toward the surface.",

    label: "RETROROCKET FIRING",

    time: "SECONDS BEFORE TOUCHDOWN",

    duration: 2800,

    classes: [
      "stage-parachute",
      "stage-shield",
      "stage-airbags",
      "stage-rockets"
    ]
  },

  {
    title: "Touchdown",

    description:
      "The bridle releases the airbag-protected lander. Pathfinder drops the remaining distance and impacts the Martian surface at approximately 31 miles per hour.",

    label: "TOUCHDOWN",

    time: "JULY 4, 1997",

    duration: 2800,

    classes: [
      "stage-shield",
      "stage-airbags",
      "stage-landing"
    ]
  },

  {
    title: "A Bumpy Arrival",

    description:
      "Pathfinder bounces across the surface like a giant beach ball. It bounces approximately 15 times before finally coming to rest.",

    label: "BOUNCING ON MARS",

    time: "APPROXIMATELY 2.5 MINUTES AFTER FIRST IMPACT",

    duration: 3500,

    classes: [
      "stage-bounce",
      "stage-airbags"
    ]
  },

  {
    title: "The Lander Opens",

    description:
      "After the airbags deflate and retract, the lander's three petals open. The solar arrays, instruments, and stowed Sojourner rover are exposed. This happens about 87 minutes after touchdown.",

    label: "LANDER PETALS OPEN",

    time: "ABOUT 87 MINUTES AFTER TOUCHDOWN",

    duration: 3500,

    classes: ["stage-petals"]
  },

  {
    title: "Sojourner's First Steps",

    description:
      "On the following Martian day, Sojourner rolls down a ramp and onto the Martian surface. Its exploration of another world begins.",

    label: "SOJOURNER DEPLOYMENT",

    time: "THE FOLLOWING MARTIAN DAY",

    duration: 4500,

    classes: ["stage-petals", "stage-rover"]
  }

];


// ==========================================
// ANIMATION STATE
// ==========================================

let landingIndex = 0;

let landingTimer = null;

let isLandingPlaying = false;

let remainingTime = 0;

let stageStartTime = 0;

let sequenceFinished = false;


// All possible animation classes

const stageClasses = [
  "stage-parachute",
  "stage-shield",
  "stage-airbags",
  "stage-rockets",
  "stage-landing",
  "stage-bounce",
  "stage-petals",
  "stage-rover"
];


// ==========================================
// DISPLAY CURRENT EVENT
// ==========================================

function showLandingStage() {

  const stage = landingStages[landingIndex];

  // Update the text

  landingStageNumber.textContent =
    `EVENT 0${landingIndex + 1} / 09`;

  landingStageTitle.textContent = stage.title;

  landingStageText.textContent = stage.description;

  landingTime.textContent = stage.time;

  landingVisualLabel.textContent = stage.label;


  // Remove previous animation states

  landingScene.classList.remove(...stageClasses);

  // Apply the current animation states

  landingScene.classList.add(...stage.classes);

}


// ==========================================
// START OR RESUME THE SEQUENCE
// ==========================================

function playCurrentStage() {

  if (isLandingPlaying || sequenceFinished) {
    return;
  }

  isLandingPlaying = true;

  playLanding.textContent = "PLAYING...";

  playLanding.disabled = true;

  pauseLanding.disabled = false;


  // Use shorter durations for reduced-motion visitors

  const stage = landingStages[landingIndex];

  if (remainingTime === 0) {

    remainingTime = reducedMotion
      ? 700
      : stage.duration;

  }

  stageStartTime = Date.now();

  landingTimer = setTimeout(() => {

    isLandingPlaying = false;

    remainingTime = 0;

    landingIndex++;

    if (landingIndex >= landingStages.length) {

      finishLandingSequence();

      return;

    }

    showLandingStage();

    playCurrentStage();

  }, remainingTime);

}


// ==========================================
// PAUSE
// ==========================================

function pauseCurrentStage() {

  if (!isLandingPlaying) {
    return;
  }

  clearTimeout(landingTimer);

  const elapsed = Date.now() - stageStartTime;

  remainingTime = Math.max(
    0,
    remainingTime - elapsed
  );

  isLandingPlaying = false;

  playLanding.disabled = false;

  playLanding.textContent = "RESUME →";

  pauseLanding.disabled = true;

}


// ==========================================
// FINISH
// ==========================================

function finishLandingSequence() {

  isLandingPlaying = false;

  sequenceFinished = true;

  playLanding.disabled = true;

  pauseLanding.disabled = true;

  playLanding.textContent = "LANDING COMPLETE";

  landingStageNumber.textContent = "MISSION MILESTONE";

  landingStageTitle.textContent =
    "A New World Awaits.";

  landingStageText.textContent =
    "Sojourner has reached the surface of Mars. " +
    "A small robotic explorer has just begun a journey " +
    "that will help shape the future of planetary exploration.";

  landingTime.textContent =
    "MARS PATHFINDER · JULY 1997";

}


// ==========================================
// REPLAY
// ==========================================

function resetLandingSequence() {

  clearTimeout(landingTimer);

  landingIndex = 0;

  isLandingPlaying = false;

  remainingTime = 0;

  sequenceFinished = false;

  playLanding.disabled = false;

  playLanding.textContent = "PLAY LANDING SEQUENCE →";

  pauseLanding.disabled = true;

  landingScene.classList.remove(...stageClasses);

  showLandingStage();

}


// ==========================================
// BUTTON EVENTS
// ==========================================

playLanding.addEventListener("click", () => {

  if (sequenceFinished) {
    return;
  }

  playCurrentStage();

});


pauseLanding.addEventListener("click", () => {

  pauseCurrentStage();

});


replayLanding.addEventListener("click", () => {

  resetLandingSequence();

  playCurrentStage();

});


// ==========================================
// INITIALIZE
// ==========================================

showLandingStage();




/* ========================================
   THE LOST TRUTH - SOUNDTRACK SYSTEM
======================================== */

// SOUND BUTTON
const soundButton = document.getElementById("ambientToggle");

// AUDIO PLAYER
const soundtrack = new Audio();

soundtrack.loop = true;
soundtrack.volume = 0;

let musicEnabled = false;
let activeTrack = "";
let fadeTimer = null;

const MUSIC_VOLUME = 0.35;

// MUSIC FOR EACH CHAPTER
const chapterMusic = [
  "beginning music.mp3",
  "the journey music1.mp3",
  "exploring a new planet music.mp3",
  "exploring a new planet music.mp3",
  "the silence music.mp3",
  "the legacy music.mp3"
];

// Make sure the button starts OFF
if (soundButton) {
  soundButton.textContent = "SOUND: OFF";
}

// GRADUALLY CHANGE THE VOLUME
function fadeAudioTo(targetVolume, callback) {
  clearInterval(fadeTimer);

  const startingVolume = soundtrack.volume;
  const steps = 10;
  let step = 0;

  fadeTimer = setInterval(() => {
    step++;

    const progress = step / steps;

    soundtrack.volume =
      startingVolume +
      (targetVolume - startingVolume) * progress;

    if (step >= steps) {
      clearInterval(fadeTimer);
      fadeTimer = null;
      soundtrack.volume = targetVolume;

      if (callback) callback();
    }
  }, 50);
}

// PLAY A TRACK
function playTrack(file) {
  if (!musicEnabled || !file) return;

  // If this track is already loaded, resume it
  if (activeTrack === file) {
    if (soundtrack.paused) {
      soundtrack.play()
        .then(() => fadeAudioTo(MUSIC_VOLUME))
        .catch(error => {
          console.warn("Music playback failed:", error);
        });
    } else {
      fadeAudioTo(MUSIC_VOLUME);
    }

    return;
  }

  // Fade out the previous track first
  fadeAudioTo(0, () => {
    if (!musicEnabled) return;

    soundtrack.pause();

    activeTrack = file;
    soundtrack.src = file;
    soundtrack.load();

    soundtrack.play()
      .then(() => {
        fadeAudioTo(MUSIC_VOLUME);
      })
      .catch(error => {
        console.warn("Music playback failed:", error);
      });
  });
}

// DETERMINE WHICH TRACK SHOULD PLAY
function updateMusic() {

    if (!musicEnabled) {
        stopPrologueDrone();
        return;
    }

    // PROLOGUE
    if (prologue && !prologue.hidden) {

        playTrack("audio/prologue.mp3");
        startPrologueDrone();

        return;
    }

    // DOCUMENTARY CHAPTERS
    stopPrologueDrone();

    if (documentary && !documentary.hidden) {
        playTrack(chapterMusic[currentChapter]);
    }
}

// SOUND ON / OFF
if (soundButton) {
  soundButton.addEventListener("click", () => {
    musicEnabled = !musicEnabled;

    soundButton.textContent = musicEnabled
      ? "SOUND: ON"
      : "SOUND: OFF";

    if (musicEnabled) {
      updateMusic();
    } else {
      fadeAudioTo(0, () => {
        soundtrack.pause();
        stopPrologueDrone();
      });
    }
  });
}

// START THE PROLOGUE MUSIC WHEN THE JOURNEY BEGINS
startBtn.addEventListener("click", () => {
  updateMusic();
});

/* ========================================
   PROLOGUE AMBIENT DRONE
======================================== */

let droneContext = null;
let droneOscillator1 = null;
let droneOscillator2 = null;
let droneGain = null;

function startPrologueDrone() {

    if (!musicEnabled) return;
    if (droneOscillator1) return;

    droneContext = new (window.AudioContext || window.webkitAudioContext)();

    droneGain = droneContext.createGain();
    droneGain.gain.setValueAtTime(0, droneContext.currentTime);

    droneOscillator1 = droneContext.createOscillator();
    droneOscillator2 = droneContext.createOscillator();

    // Two low sine waves
    droneOscillator1.type = "sine";
    droneOscillator1.frequency.value = 55;

    droneOscillator2.type = "sine";
    droneOscillator2.frequency.value = 82.4;

    // Connect everything
    droneOscillator1.connect(droneGain);
    droneOscillator2.connect(droneGain);
    droneGain.connect(droneContext.destination);

    // Start the drone
    droneOscillator1.start();
    droneOscillator2.start();

    // Gradually fade in
    droneGain.gain.setTargetAtTime(
        0.035,
        droneContext.currentTime,
        2
    );
}

function stopPrologueDrone() {

    if (!droneOscillator1) return;

    const context = droneContext;

    droneGain.gain.setTargetAtTime(
        0,
        context.currentTime,
        0.5
    );

    const oscillator1 = droneOscillator1;
    const oscillator2 = droneOscillator2;

    droneOscillator1 = null;
    droneOscillator2 = null;

    setTimeout(() => {
        oscillator1.stop();
        oscillator2.stop();
        context.close();
    }, 1800);

    droneContext = null;
    droneGain = null;
}


/* =================================
   RETURN TO HOMEPAGE
================================= */

/* =================================
   RETURN TO HOMEPAGE
================================= */

const homeBtn = document.getElementById("homeBtn");

if (homeBtn) {
    homeBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // Hide documentary sections
        documentary.hidden = true;
        prologue.hidden = true;

        if (scene) scene.hidden = true;
        if (storyContainer) storyContainer.hidden = true;
        if (landingSequence) landingSequence.hidden = true;

        // Show homepage
        intro.hidden = false;

        // Reset chapter
        currentChapter = 0;
        showChapter();

        // Stop current audio WITHOUT changing sound preference
        clearInterval(fadeTimer);
        fadeTimer = null;

        soundtrack.pause();
        soundtrack.currentTime = 0;
        soundtrack.volume = 0;
        activeTrack = "";

        stopPrologueDrone();

        // Keep the sound button's current ON/OFF state
        if (soundButton) {
            soundButton.textContent = musicEnabled
                ? "SOUND: ON"
                : "SOUND: OFF";
        }

        // Replay homepage animations
        const animatedItems = intro.querySelectorAll(
            ".earth, .mars, .pathfinder, .opening-title, .opening-subtitle, .primary-btn"
        );

        animatedItems.forEach(element => {
            element.style.animation = "none";
            void element.offsetWidth;
            element.style.animation = "";
        });

        // Return to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}