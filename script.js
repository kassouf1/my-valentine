/********************
 * ROMANTIC EFFECTS
 ********************/
const heartsLayer = document.getElementById("heartsLayer");

function spawnHeart(x, y){
  if (!heartsLayer) return;

  const el = document.createElement("div");
  el.className = "heart";
  el.textContent = "♥";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.fontSize = `${12 + Math.random() * 18}px`;
  el.style.opacity = `${0.6 + Math.random() * 0.35}`;
  el.style.transform = `translate(-50%,-50%) rotate(${(Math.random() * 40 - 20).toFixed(0)}deg)`;

  // random pink/purple tint
  const tint = Math.random() < 0.75 ? "rgba(255,47,115,0.95)" : "rgba(108,99,255,0.95)";
  el.style.color = tint;
  el.style.textShadow =
  "0 0 10px rgba(255,47,115,.35), 0 0 18px rgba(167,139,250,.22), 0 0 26px rgba(255,214,165,.18)";

  heartsLayer.appendChild(el);
  setTimeout(() => el.remove(), 1700);
}

function heartBurst(x, y, count = 10){
  for (let i = 0; i < count; i++){
    setTimeout(() => {
      spawnHeart(
        x + (Math.random() * 2 - 1) * 30,
        y + (Math.random() * 2 - 1) * 12
      );
    }, i * 25);
  }
}

// floating hearts from bottom
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight + 10;
  spawnHeart(x, y);
}, 650);

// hearts on taps/clicks
window.addEventListener("pointerdown", (e) => {
  heartBurst(e.clientX, e.clientY, 7);
}, { passive: true });

function typeText(el, text, speed = 12){
  if (!el) return;

  // stop previous typewriter on same element
  if (el._twTimer) clearInterval(el._twTimer);

  el.textContent = "";
  let i = 0;
  el._twTimer = setInterval(() => {
    el.textContent += text[i] || "";
    i++;
    if (i >= text.length){
      clearInterval(el._twTimer);
      el._twTimer = null;
    }
  }, speed);
}

/********************
 * EDIT THIS CONFIG
 ********************/
const CONFIG = {
  herName: "DJ PEARL",
  password: "Husbus",

  requireSongEnd: false,
  minListenSeconds: 6,

  chapters: [
    {
      kicker: "Chapter 1",
      title: "When we got closer",
      text:
        "Somewhere between the small talks and the long looks, you started to feel like my person. " +
        "Quietly, naturally… and then suddenly I couldn’t imagine my days without you.",
      song: "audio/chapters/chap1.mp3"
    },
    {
      kicker: "Chapter 2",
      title: "When feelings started showing up",
      text:
       "That’s when I knew it was not just fun anymore. It was real.\n" +
  "And honestly, it was never something for me to laugh about. I never saw it as a joke. " +
  "From the start, it meant something to me, even if I did not say it out loud.\n\n" +
  "But there was a moment when it got even deeper. I felt it in a clear way. " +
  "Like my heart finally said, “This is real. This matters.”\n" +
  "I started to notice everything more. I noticed when you were not okay. " +
  "I noticed when something was heavy on your mind. " +
  "I noticed the little changes in your voice, your mood, the way you text, the way you go quiet. " +
  "And instead of stepping back, I wanted to be closer. I wanted to understand. " +
  "I wanted to help. I wanted to be there.\n\n" +
  "I started caring in a different way… the kind of care that stays.\n" +
  "Not the kind that comes and goes. Not the kind that only shows up when things are easy. " +
  "The kind that stays even when things get hard. Even when life is messy. Even when feelings are scary. " +
  "It’s the kind of care that chooses patience. That chooses kindness. That chooses effort.\n\n" +
  "And I realized I was choosing you on purpose.\n" +
  "Not by accident. Not because I was bored. Not because I needed attention. " +
  "I was choosing you because you mattered to me. Because your heart mattered to me. " +
  "Because I did not want to treat you like a “maybe.” I wanted to treat you like someone important.",
      song: "audio/chapters/chap2.mp3"
    },
    {
      kicker: "Chapter 3",
      title: "When I said: I love you",
      text:
        "I remember it clearly, because it felt like a door opened and I stepped into something true.\n" +
  "It was like everything got quiet for a second, and I finally understood what my heart was trying to say.\n" +
  "I stopped guessing. I stopped holding back. I just knew.\n\n" +
  "I love you… and I still mean it in all the ways.\n" +
  "I mean it softly, in the calm moments, when it’s just us and nothing needs to be big.\n" +
  "I mean it loudly, when I’m proud of you and I want the whole world to know you matter.\n" +
  "I mean it on the good days, when we laugh and everything feels easy.\n" +
  "I mean it on the hard days too, when life is heavy and we have to choose patience and stay kind.\n\n" +
  "I mean it in my actions, not just my words.\n" +
  "In showing up. In listening. In trying again. In not giving up.\n" +
  "I mean it in the little things, like checking on you, making time for you, and caring about what you feel.\n\n" +
  "And I mean it forever.\n" +
  "Not as a perfect promise, but as a real one: as long as I’m here, I choose you on purpose.",
      song: "audio/chapters/chap3.mp3"
    },
  ],

  gallery: Array.from({ length: 15 }, (_, i) => ({
    img: `img/photo${i + 1}.JPEG`,
    label: `Memory #${i + 1}`,
    caption: "Write a short caption here."
  })),

  loveNote: `Parpurit Albe, I want you to know something very clear: I love you so much. I love you in a calm way, in a deep way, and in a real way. When I think about my day, you are the best part of it. Your voice makes me feel safe. Your smile makes my heart feel light. Even when life is busy or hard, you make everything feel better just by being you.

I love the way you care, the way you try, and the way you stay strong. I love the small things too: the way you look at me, the way you laugh, the way you talk about what you like. Being with you makes me feel proud and thankful. You are not just my girlfriend. You are my best friend, my peace, and my favorite person.

I may not always find the perfect words, but my feeling is simple: I choose you. I want to keep making memories with you, to support you, to respect you, and to love you even more as time goes on. Thank you for being in my life. Thank you for being you. I love you today, tomorrow, and always.`,

  quiz: {
    need: 2,
    questions: [
      {
        q: "What do I love most about you?",
        options: ["Your Hair", "Your Nakad", "Your heart", "All of the above"],
        answerIndex: 1,
        onWrong: "Wrong Babe! Of course I love everything about you but your Nakad is special",
        onCorrect: "Exactly Princess!!"
      },
      {
        q: "What’s our best Memory together?",
        options: ["Wine Tasting", "ZOO", "DJING together", "First Kiss", "Shopping Together", "Sleeping In my heart"],
        answerIndex: 5,
        onWrong: "Wrong Babe! All of them are beautiful… but this one is my favorite.",
        onCorrect: "Exactly Princess!!"
      },
      {
        q: "What is my favorite gift from you?",
        options: ["Shirts", "Bracelets", "Watch", "Cup", "Wine", "There is more gift in this option"],
        answerIndex: 5,
        onWrong: "You are and you will always be my favorite gift",
        onCorrect: "You are and you will always be my favorite gift"
      }
    ]
  },

  datePicks: {
    vibe: ["Dinner date", "Movie night", "Cozy at hotel"],
    food: ["Pizza", "Sushi", "Steak/Chicken", "Homemade"],
    end:  ["Go for a walk", "Photo booth", "Long drive + music", "Cuddles + a film"]
  },

  finalAudioSrc: "audio/final.mp3"
};

/********************
 * BASIC SETUP
 ********************/
const screens = [
  "screen-ready",
  "screen-lock",
  "screen-chapters",
  "screen-gallery",
  "screen-note",
  "screen-quiz",
  "screen-date",
  "screen-final",
];

let currentIndex = 0;
let quizPassed = false;

const state = { vibe: null, food: null, end: null, plan: "" };

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/********************
 * TOAST
 ********************/
function showToast(msg, ms = 3000){
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.add("hidden"), ms);
}

function updateProgress(){
  const pct = Math.round((currentIndex / (screens.length - 1)) * 100);
  $("#progressBar").style.width = `${pct}%`;
}

function stopAllAudio(){
  const ca = $("#chapterAudio");
  if (ca) ca.pause();

  const fa = $("#finalAudio");
  if (fa) fa.pause();
}

function showScreen(id){
  stopAllAudio();

  screens.forEach(x => document.getElementById(x).classList.remove("active"));
  document.getElementById(id).classList.add("active");

  currentIndex = Math.max(0, screens.indexOf(id));
  updateProgress();

  if (id === "screen-quiz") startQuiz();
}

function nextScreen(){
  const id = screens[currentIndex];
  if (id === "screen-quiz" && !quizPassed){
    $("#quizMsg").textContent = "Answer the questions to unlock the next part.";
    return;
  }
  const next = Math.min(screens.length - 1, currentIndex + 1);
  showScreen(screens[next]);
}

function backScreen(){
  const prev = Math.max(0, currentIndex - 1);
  showScreen(screens[prev]);
}

// Nav buttons
$$("[data-next]").forEach(b => b.addEventListener("click", nextScreen));
$$("[data-back]").forEach(b => b.addEventListener("click", backScreen));

/********************
 * INIT CONTENT
 ********************/
$("#herName").textContent = CONFIG.herName;
$("#quizNeed").textContent = CONFIG.quiz.need;
$("#finalAudio").src = CONFIG.finalAudioSrc;

// keep the note empty until reveal (so it feels magical)
$("#loveNote").textContent = "";

/********************
 * 1) READY (dodging NO)
 ********************/
const arena = $("#arena");
const readyNo = $("#readyNo");
const readyHint = $("#readyHint");
let dodges = 0;

function moveNo(){
  dodges++;
  const a = arena.getBoundingClientRect();
  const b = readyNo.getBoundingClientRect();
  const pad = 10;
  const maxLeft = a.width - b.width - pad;
  const maxTop  = a.height - b.height - pad;

  const left = Math.max(pad, Math.floor(Math.random() * maxLeft));
  const top  = Math.max(pad, Math.floor(Math.random() * maxTop));

  readyNo.style.left = `${left}px`;
  readyNo.style.top = `${top}px`;
  readyNo.style.right = "auto";
  readyNo.style.transform = "none";

  if (dodges === 2) readyHint.textContent = "That No button is suspicious.";
  if (dodges === 4) readyHint.textContent = "Try Yes.";
}

readyNo.addEventListener("mouseenter", moveNo);
readyNo.addEventListener("pointerdown", (e) => { e.preventDefault(); moveNo(); });

$("#readyYes").addEventListener("click", () => {
  readyHint.textContent = "Good choice.";
  heartBurst(window.innerWidth / 2, window.innerHeight * 0.75, 12);
});

$("#readyContinue").addEventListener("click", () => showScreen("screen-lock"));

/********************
 * 2) PASSWORD LOCK
 ********************/
$("#passBtn").addEventListener("click", () => {
  const v = $("#passInput").value.trim().toLowerCase();
  const ok = v === CONFIG.password.trim().toLowerCase();

  if (ok){
    $("#passMsg").textContent = "Unlocked.";
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
    heartBurst(window.innerWidth / 2, window.innerHeight * 0.75, 14);
    setTimeout(() => showScreen("screen-chapters"), 250);
  } else {
    $("#passMsg").textContent = "Nope. Try again.";
    $("#passInput").classList.add("shake");
    setTimeout(() => $("#passInput").classList.remove("shake"), 350);
  }
});

/********************
 * 3) CHAPTERS (with song gate)
 ********************/
const chapterAudio = $("#chapterAudio");
const chapterPlay = $("#chapterPlay");
const chapterPause = $("#chapterPause");
const chapterPrev = $("#chapterPrev");
const chapterNext = $("#chapterNext");

const chapterCounter = $("#chapterCounter");
const chapterKicker = $("#chapterKicker");
const chapterTitle = $("#chapterTitle");
const chapterText = $("#chapterText");
const chapterHint = $("#chapterHint");
const chapterProgress = $("#chapterProgress");

let chapterIndex = 0;
let chapterUnlocked = false;

function unlockChapter(){
  if (chapterUnlocked) return;
  chapterUnlocked = true;
  chapterNext.disabled = false;
  chapterHint.textContent = "Unlocked. Continue.";
  confetti({ particleCount: 80, spread: 60, origin: { y: 0.75 } });
  heartBurst(window.innerWidth / 2, window.innerHeight * 0.78, 10);
}

function loadChapter(i){
  const ch = CONFIG.chapters[i];
  chapterIndex = i;
  chapterUnlocked = false;

  chapterCounter.textContent = `Chapter ${i + 1} / ${CONFIG.chapters.length}`;
  chapterKicker.textContent = ch.kicker;
  chapterTitle.textContent = ch.title;
  typeText(chapterText, ch.text, 12);

  chapterAudio.pause();
  chapterAudio.currentTime = 0;
  chapterAudio.src = ch.song;

  chapterProgress.style.width = "0%";
  chapterHint.textContent = "Play the song to unlock the next chapter.";
  chapterNext.disabled = true;

  chapterPrev.disabled = (i === 0);
  chapterNext.textContent = (i === CONFIG.chapters.length - 1) ? "Finish" : "Next";
}

chapterPlay.addEventListener("click", async () => {
  try {
    await chapterAudio.play();
    showToast("Good… now listen 😌");
  } catch {
    chapterHint.textContent = "Audio didn’t play. Check the file path in CONFIG.";
  }
});

chapterPause.addEventListener("click", () => chapterAudio.pause());

chapterAudio.addEventListener("timeupdate", () => {
  if (chapterAudio.duration){
    const pct = (chapterAudio.currentTime / chapterAudio.duration) * 100;
    chapterProgress.style.width = `${Math.min(100, pct)}%`;
  }

  if (!CONFIG.requireSongEnd && chapterAudio.currentTime >= CONFIG.minListenSeconds){
    unlockChapter();
  }
});

chapterAudio.addEventListener("ended", () => unlockChapter());

chapterPrev.addEventListener("click", () => {
  if (chapterIndex > 0) loadChapter(chapterIndex - 1);
});

chapterNext.addEventListener("click", () => {
  if (!chapterUnlocked) return;

  if (chapterIndex < CONFIG.chapters.length - 1){
    loadChapter(chapterIndex + 1);
  } else {
    showScreen("screen-gallery");
  }
});

loadChapter(0);

/********************
 * 4) GALLERY (15 polaroids)
 ********************/
function buildGallery(){
  const grid = $("#galleryGrid");
  grid.innerHTML = "";

  CONFIG.gallery.forEach((g, i) => {
    const wrap = document.createElement("div");
    wrap.className = "polaroid";

    const inner = document.createElement("div");
    inner.className = "polaroidInner " + (i % 2 === 0 ? "tilt1" : "tilt2");

    inner.innerHTML = `
      <div class="face front">
        <img src="${g.img}" alt="${g.label}">
        <div class="label">${g.label}</div>
      </div>
      <div class="face back">${g.caption}</div>
    `;

    inner.addEventListener("click", () => {
      inner.classList.toggle("flipped");
      heartBurst(window.innerWidth / 2, window.innerHeight * 0.78, 6);
    });

    wrap.appendChild(inner);
    grid.appendChild(wrap);
  });
}
buildGallery();

/********************
 * 5) HOLD TO REVEAL NOTE (3s)
 ********************/
const holdBtn = $("#holdBtn");
const holdFill = $("#holdFill");
const holdMsg = $("#holdMsg");

let holdTimer = null;
let holdStart = null;
let revealed = false;

function startHold(){
  if (revealed) return;

  holdMsg.textContent = "";
  holdStart = performance.now();

  holdTimer = setInterval(() => {
    const t = performance.now() - holdStart;
    const pct = Math.min(100, Math.round((t / 3000) * 100));
    holdFill.style.width = `${pct}%`;

    if (t >= 3000){
      revealed = true;
      clearInterval(holdTimer);
      holdTimer = null;

      $("#loveNote").classList.remove("blurred");
      $("#loveNote").classList.add("unblur");
      typeText($("#loveNote"), CONFIG.loveNote, 9);

      holdMsg.textContent = "Unlocked.";
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.75 } });
      heartBurst(window.innerWidth / 2, window.innerHeight * 0.78, 14);
    }
  }, 40);
}

function stopHold(){
  if (revealed) return;
  if (holdTimer) clearInterval(holdTimer);
  holdTimer = null;
  holdFill.style.width = "0%";
}

holdBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); startHold(); });
holdBtn.addEventListener("pointerup", stopHold);
holdBtn.addEventListener("pointercancel", stopHold);
holdBtn.addEventListener("pointerleave", stopHold);

/********************
 * 6) QUIZ (one question at a time)
 ********************/
const quizBox = $("#quizBox");
const quizMsg = $("#quizMsg");
const quizSubmitBtn = document.getElementById("quizSubmit");
if (quizSubmitBtn) quizSubmitBtn.style.display = "none";

let quizStep = 0;
let quizScore = 0;
let quizLocked = false;

function startQuiz(){
  quizStep = 0;
  quizScore = 0;
  quizLocked = false;
  quizPassed = false;
  quizMsg.textContent = "";
  renderQuizStep();
}

function renderQuizStep(){
  const q = CONFIG.quiz.questions[quizStep];

  quizBox.innerHTML = `
    <div class="q">
      <div class="qTitle">${quizStep + 1}/${CONFIG.quiz.questions.length}) ${q.q}</div>
      <div class="opts" id="quizOpts"></div>
    </div>
  `;

  const optsWrap = document.getElementById("quizOpts");
  q.options.forEach((txt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "optBtn";
    btn.textContent = txt;
    btn.addEventListener("click", () => answerQuiz(idx));
    optsWrap.appendChild(btn);
  });
}

function answerQuiz(chosenIndex){
  if (quizLocked) return;
  quizLocked = true;

  const q = CONFIG.quiz.questions[quizStep];
  const correct = chosenIndex === q.answerIndex;

  if (correct){
    quizScore++;
    showToast(q.onCorrect || "Correct!");
  } else {
    showToast(q.onWrong || "Nope 😅");
  }

  heartBurst(window.innerWidth / 2, window.innerHeight * 0.80, 10);

  setTimeout(() => {
    quizStep++;
    quizLocked = false;

    if (quizStep < CONFIG.quiz.questions.length){
      renderQuizStep();
      return;
    }

    const total = CONFIG.quiz.questions.length;
    if (quizScore >= CONFIG.quiz.need){
      quizPassed = true;
      quizMsg.textContent = `Score ${quizScore}/${total}. Unlocked.`;
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.7 } });
      setTimeout(nextScreen, 650);
    } else {
      quizPassed = false;
      quizMsg.textContent = `Score ${quizScore}/${total}. Try again.`;
      quizBox.innerHTML = `<button class="btn" id="quizRetry">Try again</button>`;
      $("#quizRetry").addEventListener("click", startQuiz);
    }
  }, 650);
}

// start once (it will restart when you enter quiz screen too)
startQuiz();

/********************
 * 7) DATE BUILDER
 ********************/
function buildChips(targetId, items, key){
  const wrap = document.getElementById(targetId);
  wrap.innerHTML = "";

  items.forEach((txt, idx) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = txt;

    chip.addEventListener("click", () => {
      wrap.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state[key] = txt;
      renderPlan();
      showToast(`Noted: ${txt}`);
      heartBurst(window.innerWidth / 2, window.innerHeight * 0.84, 8);
    });

    wrap.appendChild(chip);

    if (idx === 0){
      chip.classList.add("active");
      state[key] = txt;
    }
  });
}

function renderPlan(){
  state.plan = `We’ll do a ${state.vibe.toLowerCase()}, then ${state.food.toLowerCase()}, and end with ${state.end.toLowerCase()}.`;
  $("#planText").textContent = state.plan;
  $("#finalPlanLine").textContent = state.plan;
  $("#finalDetails").textContent = `Confirmed: ${state.plan} I’m planning it. You just show up.`;
}

buildChips("pickVibe", CONFIG.datePicks.vibe, "vibe");
buildChips("pickFood", CONFIG.datePicks.food, "food");
buildChips("pickEnd",  CONFIG.datePicks.end,  "end");
renderPlan();

/********************
 * 9) FINAL MUSIC + DODGING NO
 ********************/
const finalAudio = $("#finalAudio");
const finalPlay = $("#finalPlay");
const finalMsg = $("#finalMsg");
const finalAsk = $("#finalAsk");

finalPlay.addEventListener("click", async () => {
  try{
    await finalAudio.play();
    finalAsk.classList.remove("hidden");
    finalMsg.textContent = "Open your letter…";
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.65 } });
  } catch {
    finalMsg.textContent = "If it didn’t play: check CONFIG.finalAudioSrc and that the file exists.";
  }
});

$("#finalYes").addEventListener("click", () => {
  $("#finalBox").classList.remove("hidden");
  confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
});

const finalNo = $("#finalNo");
finalNo.addEventListener("mouseenter", () => {
  finalNo.style.transform =
    `translate(${Math.round((Math.random()*2-1)*160)}px, ${Math.round((Math.random()*2-1)*70)}px)`;
});
finalNo.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  finalNo.dispatchEvent(new Event("mouseenter"));
});

$("#finalYes").addEventListener("click", () => {
  $("#finalBox").classList.remove("hidden");

  // typewriter the final message for drama
  const details = $("#finalDetails").textContent;
  if (typeof typeText === "function") typeText($("#finalDetails"), details, 10);

  confetti({ particleCount: 220, spread: 95, origin: { y: 0.6 } });
  if (typeof heartBurst === "function") heartBurst(window.innerWidth / 2, window.innerHeight * 0.70, 22);
});

/********************
 * START
 ********************/
updateProgress();