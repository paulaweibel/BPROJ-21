// HIDDEN WORRIES OF JAVASCRIPT

////////////////////////////////////////////////////////////////
//// GLOBAL VARIABLES //////////////////////////////////////////

let variable = {
  currentScene: 0,
  toggleCount: 0,
  motCount: 0,
  moveflag: false,
  visible: 1,
  textspeed: 30,
  wind: 0,
}

let domElement = {
  body: document.querySelector("#body"),
  intro: document.querySelector("#intro"),
  titleBox: document.querySelector("#title-container"),
  titleButton: document.querySelector("#title-button-container"),
  scrollIcon: document.querySelector("#scroll-icon"),
  homeButton: document.querySelector("#home-button"),
  about: document.querySelector("#about-content"),
  assets: document.querySelector("#asset-container"),
  knotTalkingRight: document.querySelector("#knot-talking-right"),
  knotNarration: document.querySelector("#knot-narration"),
  helpYes: document.querySelector("#help-yes"),
  helpNo: document.querySelector("#help-no"),
  helpButtons: document.querySelector("#help-button"),
  spotlight: document.querySelector("#spotlight"),
  callToAction: document.querySelector("#call-to-action"),
  glitchStressFormular: document.querySelector("#glitch-stress-formular"),
}

let character = {
  // knot
  knot: document.querySelector("#wiggle"),
  backgroundKnot: document.querySelector("#back-wiggle"),
  knotLasso: document.querySelector("#knotLasso"),
  // valentino
  valentino: document.querySelector("#valentino"),
  valentino1a: document.querySelector("#valentino-1a"),
  valentino1b: document.querySelector("#valentino-1b"),
  valentino1c: document.querySelector("#valentino-1c"),
  valentino1d: document.querySelector("#valentino-1d"),
  valentino2a: document.querySelector("#valentino-2a"),
  valentino2b: document.querySelector("#valentino-2b"),
  valentino3: document.querySelector("#valentino-3"),
  valentino4: document.querySelector("#valentino-4"),
  valentino5: document.querySelector("#valentino-5"),
  valentino6: document.querySelector("#valentino-6"),
  valentino7a: document.querySelector("#valentino-7a"),
  valentino7b: document.querySelector("#valentino-7b"),
  // lawrence
  lawrence: document.querySelector("#lawrence"),
  lawrence1: document.querySelector("#lawrence-1"),
  lawrence2a: document.querySelector("#lawrence-2a"),
  lawrence2b: document.querySelector("#lawrence-2b"),
  lawrence2c: document.querySelector("#lawrence-2c"),
  lawrence2d: document.querySelector("#lawrence-2d"),
  lawrence3: document.querySelector("#lawrence-3"),
  lawrence4a: document.querySelector("#lawrence-4a"),
  lawrence4b: document.querySelector("#lawrence-4b"),
  lawrence4c: document.querySelector("#lawrence-4c"),
  lawrence4d: document.querySelector("#lawrence-4d"),
  lawrence5: document.querySelector("#lawrence-5"),
  // mercy
  mercy: document.querySelector("#mercy"),
  mercy1a: document.querySelector("#mercy-1a"),
  mercy1b: document.querySelector("#mercy-1b"),
  mercy2: document.querySelector("#mercy-2"),
  mercy3a: document.querySelector("#mercy-3a"),
  mercy3b: document.querySelector("#mercy-3b"),
  mercy3c: document.querySelector("#mercy-3c"),
  mercy3d: document.querySelector("#mercy-3d"),
  mercy3dMess: document.querySelector("#mercy-3d-mess"),
  mercy4: document.querySelector("#mercy-4"),
  mercy5a: document.querySelector("#mercy-5a"),
  mercy5b: document.querySelector("#mercy-5b"),
  mercy5c: document.querySelector("#mercy-5c"),
  // barbara
  barbara: document.querySelector("#barbara"),
  barbara1: document.querySelector("#barbara-1"),
  barbara2: document.querySelector("#barbara-2"),
  barbara3: document.querySelector("#barbara-3"),
  barbara4: document.querySelector("#barbara-4"),
  barbara5: document.querySelector("#barbara-5"),
  barbara6a: document.querySelector("#barbara-6a"),
  barbara6b: document.querySelector("#barbara-6b"),
  barbara7: document.querySelector("#barbara-7"),
  barbara8: document.querySelector("#barbara-8"),
  barbara9: document.querySelector("#barbara-9"),
  barbara10a: document.querySelector("#barbara-10a"),
  barbara10b: document.querySelector("#barbara-10b"),
  barbara10c: document.querySelector("#barbara-10c"),
  barbara10d: document.querySelector("#barbara-10d"),
}

let gifs = {
  worried: document.querySelector("#worried-gif"),
  running: document.querySelector("#running-gif"),
  musicnotes: document.querySelector("#music-gif"),
  musicnotes2: document.querySelector("#music-gif-2"),
  musicnotes3: document.querySelector("#music-gif-3"),
  nervous: document.querySelector("#nervous-gif"),
  sleep: document.querySelector("#sleep-gif"),
  drink: document.querySelector("#drink-gif"),
  happyHour: document.querySelector("#happy-hour-gif"),
  screamphone: document.querySelector("#screaming-phone-gif"),
  wtf: document.querySelector("#wtf-gif"),
}

let scene = {
  whitePhoneScreen: document.querySelector("#valentino-phone-screen"),
  alarmToggles: document.querySelector("#valentino-toggles"),
  horizontalScrollContainer: document.querySelector("#horizontal-scroll-container"),
  cinematicEffect: document.querySelector("#cinematic-effect"),
  bus: document.querySelector("#bus"),
  busStop: document.querySelector("#bus-stop-2"),
  busInside: document.querySelector("#bus-inside"),
  busOutside: document.querySelector("#bus-outside"),
  officeBuilding: document.querySelector("#office-building"),
  waitingRoom1: document.querySelector("#waiting-room-1"),
  waitingRoom2: document.querySelector("#waiting-room-2"),
  clock0930: document.querySelector("#clock9-30"),
  clock11: document.querySelector("#clock11"),
  windowMove: document.querySelector("#window-move"),
  windowFix: document.querySelector("#window-fix"),
  todoMercy: document.querySelector("#todo-mercy-box"),
  mailMercy: document.querySelector("#mail-mercy-box"),
  valentinoPostIt: document.querySelector("#all-valentino-post-it"),
  nightTable: document.querySelector("#night-table"),
}

let text = {
  // speechbubble
  backWhisper: document.querySelector("#back-whisper"),
  // knot
  knotText: document.querySelector("#knot-text"),
  phrase1: document.querySelector("#phrase1"),
  phrase2: document.querySelector("#phrase2"),
  phrase3: document.querySelector("#phrase3"),
  phrase3b: document.querySelector("#phrase3b"),
  phrase4: document.querySelector("#phrase4"),
  phrase5: document.querySelector("#phrase5"),
  phrase6: document.querySelector("#phrase6"),
  phrase7: document.querySelector("#phrase7"),
  phrase8: document.querySelector("#phrase8"),
  phrase10: document.querySelector("#phrase10"),
  phrase11: document.querySelector("#phrase11"),
  phrase12: document.querySelector("#phrase12"),
  phrase13: document.querySelector("#phrase13"),
  phrase14: document.querySelector("#phrase14"),
  phrase17: document.querySelector("#phrase17"),
  phrase18: document.querySelector("#phrase18"),
  phrase19: document.querySelector("#phrase19"),
  phrase20: document.querySelector("#phrase20"),
  phrase21: document.querySelector("#phrase21"),
  phrase22: document.querySelector("#phrase22"),
  phrase23: document.querySelector("#phrase23"),
  phrase24: document.querySelector("#phrase24"),
  phrase25: document.querySelector("#phrase25"),
  phrase26: document.querySelector("#phrase26"),
  phrase27: document.querySelector("#phrase27"),
  phrase28: document.querySelector("#phrase28"),
  phrase29: document.querySelector("#phrase29"),
  phrase30: document.querySelector("#phrase30"),
  phrase31: document.querySelector("#phrase31"),
  phrase32: document.querySelector("#phrase32"),
  phrase33: document.querySelector("#phrase33"),
  phrase34: document.querySelector("#phrase34"),
  phrase35: document.querySelector("#phrase35"),
  phrase36: document.querySelector("#phrase36"),
  phrase37: document.querySelector("#phrase37"),
  phrase38: document.querySelector("#phrase38"),
  phrase39: document.querySelector("#phrase39"),
  phrase40: document.querySelector("#phrase40"),
  // knot whispers
  whisper1: document.querySelector("#whisper1"),
  whisper2: document.querySelector("#whisper2"),
  whisper3: document.querySelector("#whisper3"),
  whisper4: document.querySelector("#whisper4"),
  // people
  peopleTalk: document.querySelector("#people-talk"),
  valentinoTalk1: document.querySelector("#valentino-talk1"),
  valentinoTalk2: document.querySelector("#valentino-talk2"),
  valentinoTalk3: document.querySelector("#valentino-talk3"),
  valentinoTalk4: document.querySelector("#valentino-talk4"),
  valentinoTalk5: document.querySelector("#valentino-talk5"),
  valentinoTalk6: document.querySelector("#valentino-talk6"),
  //
  mercyTalk1: document.querySelector("#mercy-talk1"),
  mercyTalk2: document.querySelector("#mercy-talk2"),
  mercyTalk3: document.querySelector("#mercy-talk3"),
  //
  barbaraTalk1: document.querySelector("#barbara-talk1"),
  barbaraTalk2: document.querySelector("#barbara-talk2"),
  barbaraTalk3: document.querySelector("#barbara-talk3"),
  barbaraTalk3a: document.querySelector("#barbara-talk3a"),
  barbaraTalk4: document.querySelector("#barbara-talk4"),
  barbaraTalk5: document.querySelector("#barbara-talk5"),
  barbaraTalk6: document.querySelector("#barbara-talk6"),
  //
  supervisorTalk1: document.querySelector("#supervisor-talk1"),
  supervisorTalk2: document.querySelector("#supervisor-talk2"),
  // other texts
  aSiestaLater: document.querySelector("#a-siesta-later-phrase"),
  siestaTime: document.querySelector("#siesta-time-phrase"),
}

////////////////////////////////////////////////////////////////
// SIDE RELOAD /////////////////////////////////////////////////

// window.onload = function checkPosition() {
//   window.scrollTo(0, 0);
//   // variable.currentScene = 0;
// }

////////////////////////////////////////////////////////////////
//////// NAVIGATE //////////////////////////////////////////////

function goHome() {
  window.scrollTo(0, 0);
  variable.currentScene = 0;
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
  scene.cinematicEffect.style.display = "none";
  domElement.assets.style.display = "none";
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "none";
  character.barbara.style.display = "none";
  domElement.callToAction.style.display = "none";
}



////////////////////////////////////////////////////////////////
///// LOADING BAR //////////////////////////////////////////////

//PRELOAD JS
var progress = document.getElementById("progress");
var startPage = document.querySelector("#start-page");
var hi = document.querySelector("#title-button");

var queue = new createjs.LoadQueue(false);

queue.on("progress", event => {
  var progress = Math.floor(event.progress * 50);
  this.progress.style.width = progress + "%";
  if (progress == 50) {
    console.log("all done");
  }
})

queue.on("complete", event => {
  //show eyes
  startPage.classList.add("fadeIn");
  //show hi after 3500 ms
  setTimeout(() => {
    hi.classList.remove("hi-animation");
  }, 1500)
  //remove progress bar
  setTimeout(() => {
    progress.classList.add("fadeOut");
    character.knot.style.opacity = "1";
    window.scrollTo(0, 0);
  }, 500)
})

queue.on("fileload", handleFileComplete);
queue.loadFile("./css/style.css");
queue.loadFile("./css/0-knot.css");
queue.loadFile("./js/main.js");
queue.loadFile("./img/title/new-title-hidden-worries.png");
queue.loadFile("./img/title/new-title-hi.png");
queue.loadFile("./img/background.png");
queue.loadFile("./img/knot-images/background-knot.png");
queue.loadFile("./img/knot-images/knot1.png");
queue.loadFile("./img/knot-images/knot2.png");
queue.loadFile("./img/knot-images/knot3.png");
queue.loadFile("./img/knot-images/knot4.png");
queue.loadFile("./img/knot-images/eyes.png");
queue.loadFile("./index.html");


function handleFileComplete(event) {
  var item = event.item;
  var type = item.type;

  if (type == createjs.Types.IMAGE) {
    // all.appendChild(event.result);
  }
}


////////////////////////////////////////////////////////////////
//// MOUSE STOPPED MOVING //////////////////////////////////////

var mouseStartedMoving = false;
var mouseMoved = false;
var MINIMUM_MOUSE_MOVE_TIME = 2000;
setInterval(() => {
  if (!mouseMoved && mouseStartedMoving) {
    //Mouse stopped moving
    setTimeout(() => {
      document.querySelector("#mouseTransparent").style.display = "block";
      document.querySelector("#mouseMoved").classList.add("mousePaused");
    }, 100000)
    setTimeout(() => {
      document.querySelector("#mouseTransparent").classList.add("mouseBlack");
    }, 110000)
    mouseStartedMoving = false;
  }
  mouseMoved = false;
}, MINIMUM_MOUSE_MOVE_TIME);
//Mouse started moving
body.onmousemove = function (ev) {
  mouseStartedMoving = true;
  document.querySelector("#mouseMoved").classList.remove("mousePaused");

  document.querySelector("#mouseTransparent").classList.remove("mouseBlack");
  setTimeout(() => {
    document.querySelector("#mouseTransparent").style.display = "none";
  }, 1000)
  mouseMoved = true;
}

////////////////////////////////////////////////////////////////
////EYES MAIN CHARACTER   //////////////////////////////////////

var eyes = document.querySelector('.eyes');
window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX + sLeft) / 60;
  const y = -(window.innerHeight / 2 - evt.pageY + scrollLocation) / 60;
  eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

////////////////////////////////////////////////////////////////
// SCROLL MEMORY ///////////////////////////////////////////////

var scrollLocation = 0;
var sLeft = 0;
var ticking = false;

//updating scroll position
document.addEventListener('scroll', function (e) {
  // localStorage.setItem("scrollMemory", scrollLocation);
  scrollLocation = window.scrollY;
  sLeft = window.scrollX;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      animation(scrollLocation);
      ticking = false;
    });
    ticking = true;
  }
});

// --SCROLLX HORIZONTAL CSS-VARIABLE
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollX', window.pageXOffset / (window.innerWidth + sLeft));
}, true);

////////////////////////////////////////////////////////////////
//SPOTLIGHT!!!//////////////////////////////////////////////////

window.addEventListener("mousemove", (e) => {
  if (variable.moveflag == true) {
    spotlightMove(e);
  }
});

function spotlightMove(e) {
  var verschoben = e.pageY - 10000;
  let string =
    "radial-gradient(circle at " +
    (e.pageX / window.innerWidth) * 100 +
    "% " +
    (verschoben / window.innerHeight) * 100 +
    "%,transparent var(--spotlightTransparent),var(--spotlightColor) var(--spotlightSize))";
  domElement.spotlight.style.backgroundImage = string;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WEBSITE START ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
//// ABOUT MENU  ///////////////

// when "about" is clicked inside title-container
function showAbout() {
  // set overlaying objects invisible
  domElement.titleButton.style.opacity = "0";
  domElement.titleBox.style.opacity = "0";
  character.knot.style.opacity = "0";
  //smooth fade-in
  domElement.about.style.display = "block";
  setTimeout(() => {
    domElement.about.classList.add("showAbout");
  }, 400)
}

// when "about" is clicked inside about-container
function hideAbout() {
  // smooth fade-out
  domElement.about.classList.remove("showAbout");
  setTimeout(() => {
    domElement.about.style.display = "none";
    // set overlaying objects visible
    domElement.titleButton.style.opacity = "1";
    domElement.titleBox.style.opacity = "1";
    character.knot.style.opacity = "1";
  }, 400)
}

////////////////////////////////
//// TITLE /////////////////////

// CHANGE BETWEEN BLACK AND WHITE TITLE
domElement.titleButton.addEventListener('click', function () {

  // AUDIO
  document.querySelector(".user-clicking-sound").currentTime = 0;
  document.querySelector(".user-clicking-sound").play();
  document.querySelector(".user-clicking-sound").loop = false;
  document.querySelector(".user-clicking-sound").volume = 0.1;
  // document.querySelector(".user-clicking-sound").animate = 10;
  // document.querySelector(".user-clicking-sound").animate = 10000;


  if (variable.visible === 1 || variable.visible === 3) {
    variable.visible = 0;
    domElement.body.style.overflowY = "visible";
    domElement.body.style.background = "var(--weiss)";
    document.querySelector("#title-dark").classList.add("titleBright");
    document.querySelector("#about-content").classList.add("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--schwarz)";
    domElement.about.style.color = "var(--schwarz)";
    character.knot.classList.add("knotTitle");
  } else {
    variable.visible = 3;
    domElement.body.style.overflowY = "hidden";
    domElement.body.style.background = "var(--schwarz)";
    document.querySelector("#title-dark").classList.remove("titleBright");
    document.querySelector("#about-content").classList.remove("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--weiss)"
    domElement.about.style.color = "var(--weiss)";
    character.knot.classList.remove("knotTitle");
  }
});

//////// if small arrow is clicked:
function scrollToIntro() {
  window.scrollTo(0, 200)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STORY START ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
// TRIGGERS ON SCROLL POSITIONS 

function animation(scrollPos) {
  // ANIMATIONS BASED ON SCROLL POSITION
  if (scrollLocation < 100) {
    text.phrase1.style.display = "none";
    domElement.assets.style.display = "none";
    character.valentino.style.display = "none";
    character.lawrence.style.display = "none";
    domElement.intro.style.display = "none";
    domElement.titleBox.classList.remove("titleUp");
    domElement.titleButton.classList.remove("ropeUp");
    domElement.homeButton.classList.remove("showHome");
    character.knot.className = '';
    character.knot.classList.add("knotStart");
    domElement.knotTalkingRight.classList.remove("bubbleGrow");
    domElement.scrollIcon.classList.remove("scroll-icon-after");
    document.querySelector("#navigation").style.display = "block";
    variable.currentScene = 0;
  }

  // 100 PX, "HELLO I'M STRESS KNOT" (MOVE KNOT, ADD SPEECHBUBBLE, REMOVE SCROLL ARROW)
  if (scrollLocation > 100) {
    domElement.intro.style.display = "block";
    domElement.titleBox.classList.add("titleUp");
    domElement.titleButton.classList.add("ropeUp");
    domElement.homeButton.classList.add("showHome");
    domElement.scrollIcon.classList.add("scroll-icon-after");
    character.knot.classList.add("knotIntro");
    domElement.knotTalkingRight.classList.add("bubbleGrow");
    text.knotText.style.display = "block";
    document.querySelector("#navigation").style.display = "none";
  }

  if (scrollLocation > 100 && scrollLocation < 2000) {
    text.phrase1.style.display = "block";
    variable.currentScene = 1;
  }

  // setting INTRO and SPEECHBUBBLE invisible while scrolling to Storystart
  if (scrollLocation > 4000) {
    domElement.intro.style.display = "none";
    domElement.titleBox.style.display = "none";
    domElement.titleButton.style.display = "none";
    domElement.helpButtons.style.display = "none";
  } else {
    domElement.titleBox.style.display = "block";
    domElement.titleButton.style.display = "block";
  }
}


//////////////////////////////////////////////////////
// SCENES ////////////////////////////////////////////

// TRIGGER THINGS WHEN BODY IS CLICKED
domElement.body.addEventListener('click', function () {
  //INTRO
  if (variable.currentScene === 1) {
    scene1();
  }
  if (variable.currentScene === 2) {
    scene2();
  }
  if (variable.currentScene === 3.1) {
    scene3a();
  }
  if (variable.currentScene === 3) {
    scene3();
  }
  // VALENTINO
  if (variable.currentScene === 5) {
    scene5();
  }
  // SCENE 6 (let’s see what we have here)
  if (variable.currentScene === 6) {
    scene6();
  }

  // VALENTINO one hour later...
  if (variable.currentScene === 9.1) {
    scene9a();
  }
  // BED second sentence valentino
  if (variable.currentScene === 9.5) {
    scene9b();
  }

  // SCENE 10 run Valentino!! 
  if (variable.currentScene === 10) {
    scene10();
  }
  // SCENE 12 
  if (variable.currentScene === 12) {
    scene12();
  }
  // SCENE 13
  if (variable.currentScene === 13) {
    scene13();
  }
  // SCENE 14
  if (variable.currentScene === 14) {
    scene14();
  }
  // SCENE 15
  if (variable.currentScene === 15) {
    scene15();
  }
  // SCENE 16
  if (variable.currentScene === 16) {
    scene16();
  }
  // SCENE 17
  if (variable.currentScene === 17) {
    scene17();
  }
  // SCENE 19
  if (variable.currentScene === 19) {
    scene19();
  }
  // SCENE 20
  if (variable.currentScene === 20) {
    scene20();
  }
  // SCENE 20a
  if (variable.currentScene === 20.1) {
    scene20a();
  }
  // SCENE 20b
  if (variable.currentScene === 20.2) {
    scene20b();
  }
  // SCENE 21
  if (variable.currentScene === 21) {
    scene21();
  }
  // SCENE 22
  if (variable.currentScene === 22) {
    scene22();
  }
  // SCENE 23
  if (variable.currentScene === 23) {
    scene23();
  }
  // SCENE 24
  if (variable.currentScene === 24) {
    scene24();
  }
  // SCENE 24a
  if (variable.currentScene === 24.1) {
    scene24a();
  }
  // SCENE 24b
  if (variable.currentScene === 24.2) {
    scene24b();
  }
  // SCENE 24b
  if (variable.currentScene === 24.3) {
    scene24c();
  }
  // SCENE 25
  if (variable.currentScene === 25) {
    scene25();
  }
  // SCENE 26a
  if (variable.currentScene === 26) {
    scene26Error();
  }
  // SCENE 26a
  if (variable.currentScene === 26.1) {
    scene26a();
  }
  // SCENE 26b
  if (variable.currentScene === 26.2) {
    scene26b();
  }
  // SCENE 27
  if (variable.currentScene === 27) {
    scene27();
  }
  // SCENE 28
  if (variable.currentScene === 28.1) {
    scene28a();
  }
  // SCENE 29
  if (variable.currentScene === 29) {
    scene29();
  }
  // SCENE 30
  if (variable.currentScene === 30) {
    scene30();
  }
  // SCENE 31
  if (variable.currentScene === 31) {
    scene31();
  }
  // SCENE 32
  if (variable.currentScene === 32) {
    scene32();

  }
  // SCENE 27
  if (variable.currentScene === "goBarbara") {
    character.mercy3d.style.display = "none";
    character.mercy3dMess.style.display = "none";
    scene.windowFix.style.display = "none";
    scene.windowMove.style.display = "none";
    goBarbara();
  }

  // SCENE 35
  if (variable.currentScene === 35) {
    scene35();
  }
  // SCENE 36
  if (variable.currentScene === 36) {
    scene36();
  }
  // SCENE 37
  if (variable.currentScene === 37) {
    scene37();
  }
  // SCENE 38
  if (variable.currentScene === 38) {
    scene38();
  }
  // SCENE 39
  if (variable.currentScene === 39) {
    scene39();
  }
  // SCENE 40
  if (variable.currentScene === 40) {
    scene40();
  }
  // SCENE 41
  if (variable.currentScene === 41) {
    scene41();
  }
  if (variable.currentScene === 42) {
    scene42();
  }
  if (variable.currentScene === 43) {
    scene43();
  }
  if (variable.currentScene === 44) {
    scene44();
  }
  // COFFEE SPILL
  if (variable.currentScene === 46) {
    scene46();
  }
  if (variable.currentScene === 47) {
    scene47();
  }
  if (variable.currentScene === 48) {
    scene48();
  }
  if (variable.currentScene === 49) {
    scene49();
  }
  if (variable.currentScene === 50) {
    scene50();
  }
  if (variable.currentScene === 51) {
    scene51();
  }
  if (variable.currentScene === 52) {
    scene52();
  }
  if (variable.currentScene === 53) {
    scene53();
  }
  if (variable.currentScene === 54) {
    scene54();
  }
  if (variable.currentScene === 55) {
    scene55();
  }
  if (variable.currentScene === 56) {
    scene56();
  }



  // LAST SCENE
  if (variable.currentScene === 80) {
    scene80();
  }
  if (variable.currentScene === 81) {
    scene81();
  }
  if (variable.currentScene === 82) {
    scene82();
  }
  if (variable.currentScene === 83) {
    scene83();
  }
  if (variable.currentScene === 84) {
    scene84();
  }

  // CALL TO ACTION
  if (variable.currentScene === "goToEnd") {
    goCallToAction();
  }
  // CALL TO ACTION
  if (variable.currentScene === "callToAct") {
    hideStressFormular();
  }
  console.log("Scene: " + variable.currentScene + ", I am at: " + scrollY);
});

// SCENE 1: You don't usually see me, but I decided to make an exception this time.
function scene1() {

  document.querySelector(".type-3sec").currentTime = 0;
  document.querySelector(".type-3sec").play();
  document.querySelector(".type-3sec").loop = false;
  document.querySelector(".type-3sec").volume = 0.5;
  document.querySelector(".type-3sec").playbackRate = 1.2;

  text.phrase1.style.display = "none";
  text.phrase2.style.display = "block";
  text.phrase3.style.display = "none";
  text.phrase3b.style.display = "none";
  text.phrase4.style.display = "none";
  text.phrase5.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 2;
  }, 500)
}

// SCENE 2: Stress has many shades.", "My job is to visit people from time
function scene2() {
  document.querySelector(".type-3sec").pause();

  document.querySelector(".type-4sec").currentTime = 0;
  document.querySelector(".type-4sec").play();
  document.querySelector(".type-4sec").loop = false;
  document.querySelector(".type-4sec").volume = 0.5;
  document.querySelector(".type-4sec").playbackRate = 0.9;

  text.phrase1.style.display = "none";
  text.phrase2.style.display = "none";
  text.phrase3.style.display = "block";
  domElement.helpButtons.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 3.1;
  }, 500)
}

// SCENE 3A I know what you are thinking,", "but somehow I have
function scene3a() {
  document.querySelector(".type-4sec").pause();

  document.querySelector(".type-5sec").currentTime = 0;
  document.querySelector(".type-5sec").play();
  document.querySelector(".type-5sec").loop = false;
  document.querySelector(".type-5sec").volume = 0.5;
  document.querySelector(".type-5sec").playbackRate = 1.05;


  text.phrase1.style.display = "none";
  text.phrase2.style.display = "none";
  text.phrase3.style.display = "none";
  text.phrase3b.style.display = "block";
  domElement.helpButtons.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 3;
  }, 500)
}

// SCENE 3 Would you like to be my assistant today?
function scene3() {
  document.querySelector(".type-5sec").pause();

  document.querySelector(".type-2sec").currentTime = 0;
  document.querySelector(".type-2sec").play();
  document.querySelector(".type-2sec").loop = false;
  document.querySelector(".type-2sec").volume = 0.5;
  document.querySelector(".type-2sec").playbackRate = 1.1;


  text.phrase1.style.display = "none";
  text.phrase2.style.display = "none";
  text.phrase3.style.display = "none";
  text.phrase3b.style.display = "none";
  phrase4.style.display = "block";
  domElement.helpYes.classList.add("helpUp");
  domElement.helpNo.classList.add("helpUp");
  setTimeout(() => {
    variable.currentScene = 4;
  }, 500)
}

//// (NO)
document.querySelector(".type-2sec").pause();

domElement.helpNo.addEventListener('mouseenter', function () {
  domElement.helpYes.style.marginRight = "-25vh";
});
domElement.helpNo.addEventListener('mouseleave', function () {
  domElement.helpYes.style.marginRight = "0vh";
});

//// (YES)
domElement.helpButtons.addEventListener('click', function () {
  goValentino();
  document.querySelector(".yes-no-click").currentTime = 0;
  document.querySelector(".yes-no-click").play();
  document.querySelector(".yes-no-click").loop = false;
  document.querySelector(".yes-no-click").volume = 0.5;
});

function goValentino() {
  domElement.intro.style.display = "none";
  domElement.body.style.backgroundColor = "var(--schwarz)";
  domElement.helpButtons.style.display = "none";
  domElement.body.style.overflowY = "hidden";
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 10000);
  domElement.assets.style.display = "block";
  domElement.spotlight.style.display = "block";
  document.querySelector(".ambience-apartment1").currentTime = 0;
  document.querySelector(".ambience-apartment1").volume = 0.3;
  document.querySelector(".ambience-apartment1").play();
  document.querySelector(".ambience-apartment2").currentTime = 0;
  document.querySelector(".ambience-apartment2").volume = 0.5;
  document.querySelector(".ambience-apartment2").play();
  variable.currentScene = 5;
}

// SCENE 5; GREAT!", "Here we are, the first person of the day
function scene5() {
  text.phrase4.style.display = "none";
  text.phrase5.style.display = "block";
  domElement.assets.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 6;
  }, 500)
}

// SCENE 6: Let’s see what we have here...
function scene6() {
  text.phrase5.style.display = "none";
  //make valentino visible
  character.valentino.style.display = "block";
  character.valentino1a.style.display = "block";
  character.knot.classList.add("knotValentinoObserve");
  document.querySelector("#valentino-info").style.display = "block";
  variable.moveflag = true;
  setTimeout(() => {
    text.phrase6.style.display = "block";
    domElement.knotNarration.classList.add("bubbleGrow");
    variable.currentScene = 7;
  }, 500)
}


// SCENE 7 (Valentino ID was clicked) What can we do for him?"
function scene7() {
  document.querySelector(".alarm-clock1").currentTime = 0;
  document.querySelector(".alarm-clock1").play();
  document.querySelector(".alarm-clock2").currentTime = 0;
  document.querySelector(".alarm-clock2").play();

  text.phrase6.style.display = "none";
  text.phrase7.style.display = "block";
  scene.whitePhoneScreen.style.display = "block";
  character.valentino1b.style.display = "block";
  character.valentino1a.style.display = "none";
  document.querySelector("#valentino-info").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 8;
  }, 500)
}

// SCENE 8 (white Phone was clicked) it's up to you, turn off the other alarms
function scene8() {
  character.valentino1b.style.display = "none";
  character.valentino1c.style.display = "block";
  document.querySelector(".alarm-clock1").pause();
  document.querySelector(".alarm-clock2").pause();

  scene.whitePhoneScreen.style.animation = "none";
  text.phrase6.style.display = "none";
  text.phrase7.style.display = "none";
  text.phrase8.style.display = "block";
  scene.alarmToggles.style.display = "block";
  variable.toggleCount = 0;
  setTimeout(() => {
    variable.currentScene = 9;
  }, 500)
}

// SCENE 9 (DEACTIVATING THE TOGGLES)
function toggle1() {
  document.querySelector("#toggle1-off").classList.remove("toggle-off");
}

function toggle2() {
  document.querySelector("#toggle2-off").classList.remove("toggle-off");
}

function toggle3() {
  document.querySelector("#toggle3-off").classList.remove("toggle-off");
}

function toggle4() {
  document.querySelector("#toggle4-off").classList.remove("toggle-off");
}

// all toggles off? 
function countToggle() {
  //sound with every toggle & knot going away after first click
  document.querySelector(".toggle-click").currentTime = 0;
  document.querySelector(".toggle-click").play();
  document.querySelector(".toggle-click").loop = false;
  text.phrase8.style.opacity = "0";
  domElement.knotNarration.classList.remove("bubbleGrow");
  character.knot.classList.add("knotValentinoDisappear");
  variable.toggleCount = variable.toggleCount + 1;
  //check if its finished:
  if (variable.toggleCount === 4) {
    text.whisper1.style.display = "block";
    scene.alarmToggles.style.display = "none";
    scene.whitePhoneScreen.style.opacity = "0";
    character.valentino1b.style.display = "none";
    character.valentino1c.style.display = "block";

    // smooth fade-out phonescreen
    setTimeout(() => {
      scene.whitePhoneScreen.style.display = "none";
      variable.currentScene = 9.1;
    }, 500)
    character.backgroundKnot.classList.add("showWhisperKnotValentino");
    text.backWhisper.classList.add("showWhisperKnotValentino");

    // speechbubble "keep on sleeping, you still have plenty of time…"
    setTimeout(() => {
      text.backWhisper.classList.add("showWhisperRight");
    }, 2000)
  }
}

function scene9a() {
  text.backWhisper.classList.remove("showWhisperRight");
  character.knot.style.opacity = "0";
  // show one hour later
  setTimeout(() => {
    document.querySelector(".ambience-apartment1").pause();
    document.querySelector(".ambience-apartment2").pause();
    document.querySelector("#one-hour-later").style.display = "block";
    text.whisper1.style.display = "none";
    domElement.spotlight.style.display = "none";
    text.backWhisper.classList.remove("showWhisperKnotValentino");
    character.backgroundKnot.classList.remove("showWhisperKnotValentino");
    text.phrase10.style.display = "block";
  }, 500)

  setTimeout(() => {
    domElement.body.style.backgroundColor = "var(--weiss)";
    document.querySelector("#one-hour-later").style.opacity = "0";
    character.knot.classList.add("knotTrumpet");
    character.knot.style.opacity = "1";
    text.phrase10.style.display = "none";
    domElement.knotTalkingRight.classList.add("bubbleGrow");
    text.peopleTalk.classList.add("bubbleGrow");
    text.valentinoTalk1.style.display = "block";
    character.valentino1d.style.display = "block";
    character.valentino1c.style.display = "none";
    document.querySelector("#trumpet-container").style.display = "block";
    document.querySelector("#wake-up-scream1").style.display = "block";
    document.querySelector("#wake-up-scream2").style.display = "block";
  }, 3000)

  // trumpet!!!!
  setTimeout(() => {
    gifs.worried.style.display = "block";
    document.querySelector(".trumpet-sound").currentTime = 0;
    document.querySelector(".trumpet-sound").play();
    document.querySelector("#one-hour-later").style.display = "none";
    variable.currentScene = 9.5;
  }, 3500)
}

// SCENE 9A SECOND SENTENCE VALENTINO
function scene9b() {
  text.valentinoTalk1.style.display = "none";
  text.valentinoTalk2.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 10;
  }, 200)
}

// SCENE 10: VALENTINO RUN HORIZONTAL!!
function scene10() {
  document.querySelector(".trumpet-sound").pause();
  gifs.worried.style.display = "none";
  console.log("wtf");
  document.querySelector(".ambience-street-morning").currentTime = 0;
  document.querySelector(".ambience-street-morning").play();
  document.querySelector("#wake-up-scream1").style.display = "none";
  document.querySelector("#wake-up-scream2").style.display = "none";
  document.querySelector("#run-scream").style.display = "block";
  text.valentinoTalk2.style.display = "none";
  text.peopleTalk.classList.remove("bubbleGrow");
  document.querySelector("#trumpet-container").style.display = "none";
  character.knot.classList = "";
  character.knot.classList.add("knotValentinoRunStart");
  character.valentino1d.style.display = "none";
  character.valentino2a.style.display = "block";
  scene.cinematicEffect.style.display = "block";
  gifs.running.style.display = "block";
  scene.horizontalScrollContainer.style.display = "block";
  document.querySelector(".bus-container").style.display = "block";
  domElement.body.style.backgroundColor = "var(--weiss)";
  // horizontaler scroll
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowX = "visible";

  setTimeout(() => {
    variable.currentScene = 11;
    horizontalValentino();
  }, 200)
}

function horizontalValentino() {
  if (variable.currentScene = 11) {
    (function () {
      function scrollHorizontally(e) {
        runToBus();
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta * 30); // Multiplied by 40
        document.body.scrollLeft -= (delta * 30); // Multiplied by 40
        e.preventDefault();
      }
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
      }
    })();
  }
}

function runToBus() {
  // 1. horizontal scroll valentino  
  if (sLeft > 1) {
    document.querySelector("#run-scream").style.display = "none";
    character.knot.classList.add("knotValentinoRunMiddle");
    scene.bus.classList.add("driveLeft");
  } else {
    character.valentino2b.style.display = "none";
    character.valentino2b.classList = "valentino-run";
    character.valentino2a.classList = "valentino-run";
    gifs.running.classList = "valentino-run";
    scene.bus.classList = "";
    character.knot.classList.remove("knotValentinoRunMiddle");
  }
  // 2. horizontal scroll valentino  
  if (sLeft > 1.5 * window.innerWidth) {
    character.valentino2b.style.display = "block";
    character.valentino2a.style.opacity = "0";
  } else {
    character.valentino2a.style.opacity = "1";
    character.valentino2b.style.display = "none";
  }

  // 3. horizontal scroll valentino  
  if (sLeft > 2.5 * window.innerWidth) {
    character.valentino2b.classList.add("valentinoMiddle");
    character.valentino2a.classList.add("valentinoMiddle");
    gifs.running.classList.add("valentinoMiddle");
  } else {
    character.valentino2b.classList.remove("valentinoMiddle");
    character.valentino2a.classList.remove("valentinoMiddle");
    gifs.running.classList.remove("valentinoMiddle");
  }

  // 4. horizontal scroll valentino  
  if (sLeft > 2.8 * window.innerWidth) {
    text.phrase11.style.display = "block";
    character.valentino2a.classList.add("valentinoLeaves");
    character.valentino2b.classList.add("valentinoLeaves");
    gifs.running.classList.add("valentinoLeaves");
    character.knot.classList.add("knotValentinoRunEnd");
    scene.bus.classList.add("driveAway");
    document.querySelector(".lawrence-music-headphones").currentTime = 0;
    document.querySelector(".lawrence-music-headphones").play();
    document.querySelector(".lawrence-music-headphones").loop = false;
    document.querySelector(".lawrence-music-headphones").volume = 0.5;
    gifs.musicnotes.style.display = "block";
  } else {
    text.phrase11.style.display = "none";
    character.valentino2a.classList.remove("valentinoLeaves");
    character.valentino2b.classList.remove("valentinoLeaves");
    gifs.running.classList.remove("valentinoLeaves");
    character.knot.classList.remove("knotValentinoRunEnd");
    scene.bus.classList.remove("driveAway");
  }
}

// SCENE 11 (ID of LAWRENCE WAS OBSERVED) It looks like this guy needs some stimulation.
function goLawrence() {
  document.querySelector(".lawrence-music-headphones").play();
  document.querySelector(".lawrence-music-headphones").loop = false;
  document.querySelector(".lawrence-music-headphones").volume = 0.5;
  gifs.musicnotes2.style.display = "block";
  gifs.running.style.display = "none";
  domElement.body.style.backgroundColor = "var(--weiss)";
  domElement.assets.style.display = "block";
  character.lawrence.style.display = "block";
  character.valentino.style.display = "none";
  scene.horizontalScrollContainer.style.display = "none";
  scene.cinematicEffect.style.display = "none";
  character.knot.classList.add("knotLawrenceBusstop")
  domElement.body.style.backgroundColor = "var(--weiss)"
  domElement.body.style.height = "10000vh"
  window.scrollTo(0, 15000);
  text.phrase11.style.display = "none";
  text.phrase12.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 12;
  }, 200)
  // stop horizontal scroll
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
}


// SCENE 12 "He is going to a job interview."
function scene12() {
  text.phrase13.style.display = "block";
  text.phrase12.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 13;
  }, 200)
}

// SCENE 13 LAWRENCE IN BUS
function scene13() {
  gifs.musicnotes2.style.display = "none";
  gifs.musicnotes3.style.display = "block";
  document.querySelector(".ambience-street-morning").pause();
  document.querySelector(".ambience-bus").currentTime = 0;
  document.querySelector(".ambience-bus").play();
  text.phrase13.style.display = "none";
  scene.busInside.style.display = "block";
  scene.busOutside.style.display = "block";
  scene.busStop.style.display = "none";
  character.lawrence2a.style.display = "block";
  character.lawrence1.style.display = "none";
  console.log("change to bus");
  setTimeout(() => {
    variable.currentScene = 14;
  }, 200)
}

// SCENE 14 "watch and learn"
function scene14() {
  domElement.knotNarration.classList.add("bubbleGrow");
  scene.busOutside.classList.add("busOutsideAway");
  text.phrase14.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 15;
  }, 200)
  setTimeout(() => {
    scene.busOutside.style.display = "none";
  }, 2000)
}

// SCENE 15 "whisper"
function scene15() {
  showWhisperLeft();
  text.whisper2.style.display = "block";
  document.querySelector(".lawrence-music-headphones").volume = 0;
  character.backgroundKnot.classList.add("showWhisperKnotLawrence");
  text.backWhisper.classList.add("showWhisperKnotLawrence");
  text.phrase14.style.display = "none";
  character.knot.classList.add("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 16;
    character.lawrence2a.style.display = "none";
    character.lawrence2b.style.display = "block";
    gifs.musicnotes3.style.display = "none";
  }, 1000)
}


// SCENE 16 "whisper 2"
function scene16() {
  text.whisper3.style.display = "block";
  text.whisper2.style.display = "none";
  character.lawrence2b.style.display = "none";
  character.lawrence2c.style.display = "block";
  character.knot.classList.add("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 17;
  }, 200)
}

// SCENE 17 motivational quotes
function scene17() {
  hideWhisperLeft();
  text.phrase17.style.display = "block";
  text.whisper3.style.display = "none";
  character.lawrence2c.style.display = "none";
  character.lawrence2d.style.display = "block";
  character.backgroundKnot.classList.remove("showWhisperKnotLawrence");
  character.knot.classList.remove("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 18;
  }, 200)
  setTimeout(() => {
    document.querySelector("#motivational-quotes").style.display = "block";
    document.querySelector(".lawrence-music-headphones").volume = 0.1;
  }, 2000)
}

// SCENE 18
function motQuote1() {
  document.querySelector("#motQuote-1").style.display = "none";
}

function motQuote2() {
  document.querySelector("#motQuote-2").style.display = "none";
}

function motQuote3() {
  document.querySelector("#motQuote-3").style.display = "none";
}

function motCount() {
  text.phrase17.style.display = "none";
  document.querySelector(".delete-key").currentTime = 0;
  document.querySelector(".delete-key").play();
  variable.motCount = variable.motCount + 1;
  if (variable.motCount === 3) {
    text.phrase18.style.display = "block";
    document.querySelector(".lawrence-music-headphones").pause();
    setTimeout(() => {
      variable.currentScene = 19;
    }, 200)
  }
}

// looooooser
function scene19() {
  gifs.nervous.style.display = "block";
  text.phrase18.style.display = "none";
  document.querySelector("#looser-scream-box").style.display = "block";
  document.querySelector(".ambience-bus").pause();
  setTimeout(() => {
    variable.currentScene = 20;
  }, 200)
}

// SCENE 20 LAWRENCE WALKING TO BUILDING
function scene20() {
  gifs.nervous.style.display = "none";
  document.querySelector("#looser-scream-box").style.display = "none";
  character.lawrence2a.style.display = "none";
  character.lawrence2b.style.display = "none";
  character.lawrence2c.style.display = "none";
  character.lawrence2d.style.display = "none";
  scene.busInside.style.display = "none";
  character.lawrence3.style.display = "block";
  character.knot.classList.add("knotOutsideOfficeBuilding");
  scene.officeBuilding.style.display = "block";
  document.querySelector(".ambience-street-afternoon").currentTime = 0;
  document.querySelector(".ambience-street-afternoon").play();
  setTimeout(() => {
    variable.currentScene = 20.1;
  }, 200)
}

// SCENE 20a Mercy saying hello
function scene20a() {
  document.querySelector(".ambience-street-afternoon").pause();
  character.mercy.style.display = "block";
  character.mercy1a.style.display = "block";
  text.peopleTalk.classList.add("bubbleGrow");
  text.peopleTalk.classList.add("mercy-goodmorning");
  text.mercyTalk1.style.display = "block";
  character.knotLasso.style.display = "block";
  character.lawrence3.style.display = "none";
  character.lawrence4a.style.display = "block";
  scene.officeBuilding.style.display = "none";
  scene.waitingRoom1.style.display = "block";
  scene.clock0930.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 20.2;
  }, 200)
}

// SCENE 20b Knot_ give me a hand
function scene20b() {
  text.peopleTalk.classList.remove("bubbleGrow");
  character.knot.classList.add("knotWaitingroom");
  text.mercyTalk1.style.display = "none";
  text.phrase19.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 21;
  }, 200)
}

// SCENE 22 LAWRENCE START FALLING
function scene21() {
  document.querySelector(".knotLassoPath").style.strokeDashoffset = "0";
  text.peopleTalk.classList.remove("mercy-goodmorning");
  text.phrase19.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 0;
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "block";
    document.querySelector(".knotLassoPath").style.strokeDashoffset = "calc(30vw + 30vh)";
    character.knot.classList.add("knotWaitingroom-AfterLasso");
  }, 1000)
  setTimeout(() => {
    gifs.wtf.style.display = "block";
    character.mercy1a.style.display = "none";
    character.mercy1b.style.display = "block";
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "none";
    character.lawrence4c.style.display = "block";
    variable.currentScene = 22;
  }, 3000)
}


// SCENE 24 LAWRENCE WALKING AFTER FALL
function scene22() {
  gifs.wtf.style.display = "none";
  character.lawrence4c.style.display = "none";
  character.lawrence4d.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 23;
  }, 200)
}

// SCENE 25 entering the office
function scene23() {
  character.lawrence4d.style.display = "none";
  character.mercy1b.style.display = "none";
  character.mercy2.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 24;
  }, 200)
}

// SCENE 26 knot waits on chair
function scene24() {
  text.phrase20.style.display = "block";
  character.mercy2.style.display = "none";
  character.knot.classList.add("knotWaitingChair");
  document.querySelector(".door-close").currentTime = 0;
  document.querySelector(".door-close").play();
  scene.waitingRoom2.style.display = "block";
  scene.waitingRoom1.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 24.1;
  }, 200)
  setTimeout(() => {
    gifs.sleep.style.display = "block";
    eyes.style.display = "None";
  }, 2000)
}

// SCENE 24A - a siesta later
function scene24a() {
  document.querySelector("#a-siesta-later").style.display = "block";
  text.phrase20.style.display = "none";
  text.aSiestaLater.style.display = "block";
  scene.clock0930.style.display = "none";
  scene.clock11.style.display = "block";
  setTimeout(() => {
    document.querySelector("#a-siesta-later").style.display = "none";
    text.aSiestaLater.style.display = "none";
  }, 2000)
  setTimeout(() => {
    variable.currentScene = 24.2;
  }, 200)
}

// SCENE 24b Lawrence leaving the office
function scene24b() {
  scene.waitingRoom2.style.display = "none";
  scene.waitingRoom1.style.display = "block";
  character.lawrence5.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 24.3;
  }, 200)
}

// SCENE 24c Knot is waking up
function scene24c() {
  eyes.style.display = "block";
  gifs.sleep.style.display = "none";
  text.phrase21.style.display = "block";
  document.querySelector("#door-div-waitingroom").style.display = "block";
  setTimeout(() => {
    variable.currentScene = 26;
  }, 200)
}

// change to mercy Office
function scene26() {
  character.lawrence5.style.display = "none";
  document.querySelector("#door-div-waitingroom").style.display = "none";
  goMercy();
}

// (when user doesnt click on door)
function scene26Error() {
  document.querySelector("#door-div-waitingroom").style.backgroundColor = "var(--schwarz)";
  setTimeout(() => {
    document.querySelector("#door-div-waitingroom").style.backgroundColor = "transparent";
  }, 200)
}

/////////////
function goMercy() {
  domElement.body.style.backgroundColor = "var(--weiss)";
  domElement.assets.style.display = "block";
  character.mercy.style.display = "block";
  character.mercy1a.style.display = "none";
  character.mercy1b.style.display = "none";
  character.mercy2.style.display = "none";
  character.mercy3a.style.display = "block";
  scene.windowFix.style.display = "block";
  scene.windowMove.style.display = "block";
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.knot.classList.add("knotOfficeMercy");
  domElement.body.style.backgroundColor = "var(--weiss)"
  domElement.body.style.height = "10000vh"
  window.scrollTo(0, 20000);
  // stop horizontal scroll
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
  //
  text.phrase21.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 26.1;
  }, 200)
}

// knot flying around
function scene26a() {
  character.knot.classList.add("knotOfficeLookingAround1");
  setTimeout(() => {
    variable.currentScene = 26.2;
  }, 200)
}

function scene26b() {
  character.knot.classList.add("knotOfficeLookingAround2");
  setTimeout(() => {
    variable.currentScene = 27;
  }, 200)
}

// looks like organized person
function scene27() {
  character.knot.classList.add("knotOfficeStopLooking");
  text.phrase22.style.display = "block";
  setTimeout(() => {
    document.querySelector("#info-icon-mercy").style.display = "block";
  }, 1000)
  setTimeout(() => {
    variable.currentScene = 28;
  }, 200)
}

// lets check her to do list
function scene28a() {
  text.phrase22.style.display = "none";
  document.querySelector("#info-icon-mercy").style.display = "none";
  text.phrase23.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 29;
  }, 200)
}

// i have to come up with some personal stuff
function scene29() {
  text.phrase23.style.display = "none";
  text.phrase24.style.display = "block";
  scene.todoMercy.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 30;
  }, 200)
}

// show first mail
function scene30() {
  text.phrase24.style.display = "none";
  // text.phrase25.style.display = "block";
  document.querySelector("#mail1").style.display = "block"
  scene.mailMercy.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 31;
  }, 200)
}

// mail spam
function scene31() {
  text.phrase25.style.display = "none";
  character.mercy3a.style.display = "none";
  character.mercy3b.style.display = "block";
  document.querySelector("#mail2").style.display = "block"
  setTimeout(() => {
    variable.currentScene = 32;
  }, 200)
  setTimeout(() => {
    document.querySelector("#mail3").style.display = "block"
  }, 500)
  setTimeout(() => {
    document.querySelector("#mail4").style.display = "block"
  }, 1000)
  setTimeout(() => {
    document.querySelector("#mail5").style.display = "block"
    text.phrase26.style.display = "block";
    moveMercysWindow();
  }, 1500)
}


// change to draggable window
function scene32() {
  // to do list stuff here, nachher:
  moveMercysWindow();
}


// DRAGGING MERCYS WINDOW
var container = document.querySelector("#window-move");
var activeItem = null;
var active = false;

function moveMercysWindow() {

  document.querySelector("#dragQueen").classList.add("drag-cursor");
  // drag window eventlisteners
  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);
  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
}

// all the functions for dragging window
function dragStart(e) {
  if (e.target !== e.currentTarget) {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
      } else {
        activeItem.initialX = e.clientX - activeItem.xOffset;
      }
    }
  }
}

function dragEnd(e) {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
  }

  active = false;
  activeItem = null;
}

function drag(e) {
  if (variable.wind === 0) {
    if (active) {
      e.preventDefault();
      if (e.type === "touchmove") {
        activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      } else {
        activeItem.currentX = e.clientX - activeItem.initialX;
      }
      activeItem.xOffset = activeItem.currentX;

      // set limits for window !!
      if (activeItem.currentX > 0 * window.innerHeight) {
        activeItem.currentX = 0 * window.innerHeight;
      }

      if (activeItem.currentX < -0.22 * window.innerHeight) {
        activeItem.currentX = -0.22 * window.innerHeight;
        mercyChaos();
        variable.currentScene = 30;
        variable.wind = 1;
      }
      setTranslate(activeItem.currentX, 0, activeItem);
    }
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// SCENE MERCY CHAOS WIND
function mercyChaos() {
  text.phrase26.style.display = "None";
  document.querySelector("#dragQueen").classList.remove("drag-cursor");
  character.mercy3c.style.display = "block";
  character.mercy3a.style.display = "none";
  character.mercy3b.style.display = "none";
  scene.windowFix.style.display = "block";
  scene.windowMove.style.display = "block";
  character.knot.classList.add("knotMercy");
  document.querySelector("#mail1").classList.add("mail1-floor");
  document.querySelector("#mail2").classList.add("mail2-floor");
  document.querySelector("#mail3").classList.add("mail3-floor");
  document.querySelector("#mail4").classList.add("mail4-floor");
  document.querySelector("#mail5").classList.add("mail5-floor");
  document.querySelector("#list-title").classList.add("list-title-floor");
  document.querySelector("#todo1").classList.add("todo1-floor");
  document.querySelector("#todo2").classList.add("todo2-floor");
  document.querySelector("#todo3").classList.add("todo3-floor");
  document.querySelector("#todo4").classList.add("todo4-floor");
  document.querySelector("#todo5").classList.add("todo5-floor");
  document.querySelector("#todo6").classList.add("todo6-floor");
  document.querySelector("#todo7").classList.add("todo7-floor");
  setTimeout(() => {
    text.phrase27.style.display = "block";
    character.mercy3d.style.display = "block";
    character.mercy3dMess.style.display = "block";
    character.mercy3c.style.display = "none";
    variable.currentScene = "goBarbara";

  }, 1000)
  setTimeout(() => {
    variable.currentScene = 0;
  }, 200)
}

///////////// BARBIE
function goBarbara() {
  domElement.body.style.backgroundColor = "var(--weiss)";
  domElement.assets.style.display = "block";
  character.barbara.style.display = "block";
  character.barbara1.style.display = "block";
  character.valentino.style.display = "block";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "block";
  character.mercy4.style.display = "block";
  character.knot.classList.add("knotBarAway")
  domElement.body.style.height = "10000vh"
  window.scrollTo(0, 25000);
  // stop horizontal scroll
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
  //
  text.phrase27.style.display = "none";
  scene.mailMercy.style.display = "none";
  scene.todoMercy.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 35;
  }, 200)
}

// can i get you something
function scene35() {
  barTalks();
  smallTalkingBubble();
  character.mercy5a.style.display = "block";
  character.mercy4.style.display = "none";
  text.barbaraTalk1.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 36;
  }, 200)
}

// hello can i have a sandwich
function scene36() {
  smallTalkingBubble();
  text.barbaraTalk1.style.display = "none";
  text.mercyTalk2.style.display = "block";
  barGuestTalks();
  setTimeout(() => {
    variable.currentScene = 37;
  }, 200)
}

// sure
function scene37() {
  barTalks();
  extraSmallTalkingBubble();
  text.barbaraTalk2.style.display = "block";
  text.barbaraTalk2.style.transform = "translate(24vh, 7vh)";
  text.mercyTalk2.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 38;
  }, 200)
}

// letz get her mad now / sandwich bag
function scene38() {
  barTalks();
  smallTalkingBubble();
  text.barbaraTalk2.style.display = "none";
  text.barbaraTalk3.style.display = "block";
  character.barbara2.style.display = "block";
  character.barbara1.style.display = "none";
  document.querySelector("#sandwich-bag").style.display = "block";
  setTimeout(() => {
    variable.currentScene = 39;
  }, 200)
}

// GIVING COFFEE
function scene39() {
  noOneTalks();
  text.barbaraTalk3.style.display = "none";
  character.knot.classList.remove("knotBarAway")
  character.knot.classList.add("knotMercyBar1")
  setTimeout(() => {
    variable.currentScene = 40;
  }, 200)
}

// before spilling the tea
function scene40() {
  text.phrase28.style.display = "block";
  document.querySelector("#sandwich-bag").classList.add("sandwich-bag-floor");
  setTimeout(() => {
    variable.currentScene = 40.1;
  }, 200)
  setTimeout(() => {
    document.querySelector("#coffee").style.display = "block";
  }, 200)
}

// actually spilling the tea
function scene40a() {
  barTalks();
  text.barbaraTalk3a.style.display = "block";
  text.phrase28.style.display = "none";
  character.knot.classList.add("knotBarAway")
  document.querySelector("#coffee").style.display = "none";
  gifs.drink.style.display = "block";
  character.mercy5b.style.display = "block";
  character.mercy5a.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 41;
  }, 200)
  setTimeout(() => {
    character.barbara2.style.display = "none";
    character.barbara3.style.display = "block";
  }, 200)
}

// barbara is deeply sorry!
function scene41() {
  barTalks();
  normalTalkingBubble();
  text.barbaraTalk3a.style.display = "none";
  text.barbaraTalk4.style.display = "block";
  character.barbara3.style.display = "none";
  character.barbara4.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 42;
  }, 200)
}

// mercy says "you ve done enough"
function scene42() {
  angryMercyTalks();
  text.barbaraTalk4.style.display = "none";
  text.mercyTalk3.style.display = "block";
  character.barbara4.style.display = "none";
  character.barbara5.style.display = "block";
  character.mercy5c.style.display = "block";
  character.mercy5b.style.display = "none";
  document.querySelector("#sandwich-bag").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 43;
  }, 200)
}

// well well well i got mercy pissed off
function scene43() {
  noOneTalks();
  text.mercyTalk3.style.display = "none";
  character.knot.classList.remove("knotBarAway")
  text.phrase29.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 44;
  }, 200)
}

// info icon barbara
function scene44() {
  text.phrase29.style.display = "none";
  text.phrase30.style.display = "block";
  document.querySelector("#info-icon-barbara").style.display = "block";
  character.mercy5c.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 45;
  }, 200)
}

// barbara ID was clicked
function scene45a() {
  text.phrase30.style.display = "none";
  gifs.drink.style.display = "none";
  document.querySelector("#info-icon-barbara").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 46;
  }, 200)
}

// take call
function scene46() {
  text.phrase31.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 47;
  }, 200)
}

//supervisor talk 1
function scene47() {
  text.phrase31.style.display = "none";
  character.barbara5.style.display = "none";
  character.barbara6a.style.display = "block";
  barTalks();
  text.supervisorTalk1.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 48;
  }, 200)
}

//supervisor talk 2
function scene48() {
  gifs.screamphone.style.display = "block";
  character.barbara6b.style.display = "block";
  character.barbara6a.style.display = "none";
  text.supervisorTalk2.style.display = "block";
  text.supervisorTalk1.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 49;
  }, 200)
}

//call end
function scene49() {
  text.supervisorTalk2.style.display = "none";
  text.barbaraTalk5.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 50;
  }, 200)
}

//call end
function scene50() {
  gifs.screamphone.style.display = "none";
  gifs.drink.style.display = "none";
  noOneTalks();
  text.barbaraTalk5.style.display = "none";
  character.barbara7.style.display = "block";
  character.barbara6b.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 51;
  }, 200)
}

// we deserve a break now.!
function scene51() {
  text.phrase32.style.display = "block";
  character.knot.classList.add("knotBarSiesta");
  setTimeout(() => {
    variable.currentScene = 52;
  }, 200)
}

// hello again
function scene52() {
  text.phrase32.style.display = "none";
  document.querySelector("#siesta-time").style.display = "block";
  text.siestaTime.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 53;
  }, 200)
}

// we deserve a break now.!
function scene53() {
  document.querySelector("#siesta-time").style.display = "none";
  document.querySelector("#happy-hour-button").style.display = "block";
  document.querySelector("#sign-button-off").classList.add("sign-button-off-blink");
  text.siestaTime.style.display = "none";
  text.phrase33.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 53.1;
  }, 200)
}

// button happy hour was clicked
function scene54() {
  document.querySelector("#happy-hour-button").style.display = "none";
  document.querySelector("#sign-button-on").style.display = "block";
  document.querySelector("#sign-button-off").style.display = "none";
  gifs.happyHour.style.display = "block";
  character.knot.classList.add("knotBarHappyHour");
  text.phrase33.style.display = "none";
  text.phrase34.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 55;
  }, 200)
}


/// VALENTINO: LAST SCENE OF STORY
function goValentinoEnd() {
  domElement.intro.style.display = "none";
  domElement.body.style.backgroundColor = "var(--weiss)";
  domElement.helpButtons.style.display = "none";
  domElement.body.style.overflowY = "hidden";
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 18000);
  character.knot.classList = "";
  character.knot.classList.add("knotLastScene");
  domElement.assets.style.display = "block";
  character.valentino.style.display = "block";
  character.valentino6.style.display = "block";
  character.mercy.style.display = "none";
  character.lawrence.style.display = "none";
  character.barbara.style.display = "none";
  barTalks();
  text.valentinoTalk6.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 80;
  }, 200)
}

function scene80() {
  noOneTalks();
  text.valentinoTalk6.style.display = "none";
  character.valentino7a.style.display = "block";
  character.valentino6.style.display = "none";
  character.knot.classList.remove("knotLastScene");
  text.phrase38.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 81;
  }, 200)
}

function scene81() {
  character.knot.classList.add("knotLastScene");
  text.phrase38.style.display = "none";
  scene.valentinoPostIt.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 82;
  }, 200)
}


// after post its on right position
function scene82() {
  character.valentino7b.style.display = "block";
  character.valentino7a.style.display = "none";
  scene.valentinoPostIt.style.display = "none";
  character.knot.classList.remove("knotLastScene");
  text.phrase39.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 83;
  }, 200)
}

function scene83() {
  text.phrase39.style.display = "none";
  text.phrase40.style.display = "block";
  setTimeout(() => {
    variable.currentScene = "goToEnd";
  }, 200)
}



/// DIALOGUES AT THE BAR POSITIONING

function barTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("bar-talks");
  document.querySelector("#people-talk-left").style.display = "block";
  document.querySelector("#people-talk-right").style.display = "none";
}

function barGuestTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("bar-guest-talks");
  document.querySelector("#people-talk-left").style.display = "none";
  document.querySelector("#people-talk-right").style.display = "block";
}

function angryMercyTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("angry-mercy-talks");
  document.querySelector("#people-talk-left").style.display = "none";
  document.querySelector("#people-talk-right").style.display = "block";
}

function extraSmallTalkingBubble() {
  document.querySelector("#people-talk-left").style.transform = "scale(0.5)";
  document.querySelector("#people-talk-right").style.transform = "scale(0.5)";
}

function smallTalkingBubble() {
  document.querySelector("#people-talk-left").style.transform = "scaleY(0.8)";
  document.querySelector("#people-talk-right").style.transform = "scaleY(0.8)";
}

function normalTalkingBubble() {
  document.querySelector("#people-talk-left").style.transform = "scaleY(1) scale(1)";
  document.querySelector("#people-talk-right").style.transform = "scaleY(1) scale(1)";
}

function noOneTalks() {
  text.peopleTalk.classList = "";
  document.querySelector("#people-talk-left").style.display = "none"
  document.querySelector("#people-talk-right").style.display = "none"
}

///////////////////// bubble animations:

function showWhisperLeft() {
  document.querySelector("#whisper-bubbleL").style.display = "block";
  document.querySelector("#whisper-bubbleR").style.display = "none";
  text.backWhisper.classList.add("showWhisperLeft");
}

function showWhisperRight() {
  document.querySelector("#whisper-bubbleR").style.display = "block";
  document.querySelector("#whisper-bubbleL").style.display = "none";
  text.backWhisper.classList.add("showWhisperRight");
}

function hideWhisperLeft() {
  text.backWhisper.classList.remove("showWhisperLeft");
  setTimeout(() => {
    document.querySelector("#whisper-bubbleL").style.display = "none";
    document.querySelector("#whisper-bubbleR").style.display = "none";
  }, 10000)

}

function hideWhisperRight() {
  text.backWhisper.classList.remove("showWhisperRight");
  setTimeout(() => {
    document.querySelector("#whisper-bubbleL").style.display = "none";
    document.querySelector("#whisper-bubbleR").style.display = "none";
  }, 10000)
}



//////////////////////
///// CALL TO ACTION

function goCallToAction() {
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 30000);
  variable.currentScene = 1000;
  domElement.intro.style.display = "none";
  domElement.body.style.background = "var(--weiss)";
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
  scene.cinematicEffect.style.display = "none";
  domElement.assets.style.display = "none";
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "none";
  character.barbara.style.display = "none";
  domElement.callToAction.style.display = "block";
  prepareFormular();
}


// PREPARE GLITCH FORMULAR AS SOON AS CALL TO ACTION IS CLICKED
function prepareFormular() {
  var glitchdiv = document.createElement("div");
  glitchdiv.setAttribute("class", "glitch-embed-wrap");
  glitchdiv.setAttribute("style", "position: absolute; height: 100vh; width: 100%;");
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://glitch.com/embed/#!/embed/stressformular?path=server.js&previewSize=100&attributionHidden=true");
  ifrm.setAttribute("title", "stressformular on Glitch");
  ifrm.setAttribute("allow", "geolocation; microphone; camera; midi; vr; encrypted-media");
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  domElement.glitchStressFormular.appendChild(glitchdiv);
  glitchdiv.appendChild(ifrm);
}

function showStressFormular() {
  domElement.glitchStressFormular.style.display = "block";
}

function hideStressFormular() {
  domElement.glitchStressFormular.style.display = "none";
}

////////////////////////////////////////////////////////////////
// ID's ////////////////////////////////////////////////////////

function idValentino() {
  document.querySelector("#id-valentino").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.5;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID VALENTINO")
}

function idLawrence() {
  document.querySelector("#id-lawrence").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.5;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID Lawrence")
}

function idMercy() {
  document.querySelector("#id-mercy").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.5;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID Mercy")
}

function idBarbara() {
  document.querySelector("#id-barbara").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.5;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID Barbara")
}

function hideId() {
  document.querySelector("#id-valentino").style.display = "none";
  document.querySelector("#id-lawrence").style.display = "none";
  document.querySelector("#id-mercy").style.display = "none";
  document.querySelector("#id-barbara").style.display = "none";
  document.querySelector(".delete-key").currentTime = 0;
  document.querySelector(".delete-key").volume = 0.2;
  document.querySelector(".delete-key").play();
  console.log("hide ID")
}


////////////////////////////////////////////////////////////////
// TYPING ANIMATIONS FOR ALLL THE TEXTS: ///////////////////////


new TypeIt("#phrase1", {
  startDelay: 900,
  cursor: false,
  strings: [""],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go();

new TypeIt("#phrase2", {
  cursor: false,
  strings: ["You don't usually see me, but I decided to make an exception this time."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase3", {
  cursor: false,
  strings: ["Stress has many shades.", "My job is to visit people from time to time and increase their stress level"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase3b", {
  cursor: false,
  strings: ["I know what you are thinking,", "but somehow I have to make a living...", "so please don't judge me!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase4", {
  cursor: false,
  strings: ["Would you like to be my assistant today?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase5", {
  startDelay: 1000,
  cursor: false,
  strings: ["GREAT!", "Here we are", "the first person of the day"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase6", {
  startDelay: 1000,
  cursor: false,
  strings: ["Let’s see what we have here..."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase7", {
  cursor: false,
  strings: ["What can we do for him?", "...Mhhhh..."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase8", {
  cursor: false,
  strings: ["I know...assistant! Do me a favour, turn off all other alarms."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#whisper1", {
  cursor: false,
  strings: ["keep on sleeping, you still have plenty of time…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk1", {
  cursor: false,
  strings: ["Shoot, how did I not hear the other alarm clocks?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk2", {
  cursor: false,
  strings: ["I'm so late, what will they think of me in the hospital?? Such a bad impression…."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase10", {
  cursor: false,
  strings: ["one hour later"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase11", {
  cursor: false,
  strings: ["Seems like I’ll have someone else to bother…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase12", {
  cursor: false,
  strings: ["I can smell potential here. Hehe!", "This guy needs some stimulation."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase13", {
  cursor: false,
  strings: ["He is going to a job interview.", "He has to earn money for his studies."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase14", {
  cursor: false,
  strings: ["I know what to do…", "watch and learn, Assistant."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#whisper2", {
  cursor: false,
  strings: ["It's time to get nervous now. You'll ruin everything at the interview."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#whisper3", {
  cursor: false,
  strings: ["Why should they hire you? A poor student with no experience…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase17", {
  cursor: false,
  strings: ["Assistant, let’s see what you have learned so far.", "Delete the three motivational quotes:"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase18", {
  cursor: false,
  strings: ["Good!", "Now my quotes can be shown."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()



new TypeIt("#phrase19", {
  cursor: false,
  strings: ["Come on, give me a hand here."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#mercy-talk1", {
  cursor: false,
  strings: ["Good morning!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase20", {
  cursor: false,
  strings: ["Let’s leave him alone now, he is going to fail anyway."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#a-siesta-later-phrase", {
  cursor: false,
  strings: ["a siesta later"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase21", {
  cursor: false,
  strings: ["He will miserably be walking back to his house... I also swapped his exam dates in the calendar, hehehehehe. I'm done with him for today. Let’s enter the office. "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase22", {
  cursor: false,
  strings: ["This person is way too organized at her job and she seems like a kind person. What could stress her out?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase23", {
  cursor: false,
  strings: ["So far, she had two job interviews.", " Let's check her To-Do list."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase24", {
  cursor: false,
  strings: ["The manager does not seem overwhelmed by this daily schedule. It’s not easy to unsettle her. I will have to come up with some personal stuff. "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase25", {
  cursor: false,
  strings: ["Think, think, think…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase26", {
  cursor: false,
  strings: ["She’s distracted. It’s windy outside.", "Assistant, she needs some fresh air!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase27", {
  cursor: false,
  strings: ["hehe, now I've got her into trouble."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


///// mercy barbara talk bar
new TypeIt("#barbara-talk1", {
  cursor: false,
  strings: ["Hi, what can I get you?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#mercy-talk2", {
  cursor: false,
  strings: ["Hello, Can I have A Sandwich and a Tea to go please?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#barbara-talk2", {
  cursor: false,
  strings: ["Sure!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


new TypeIt("#phrase28", {
  cursor: false,
  strings: ["Let's get her mad now. "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#barbara-talk3", {
  cursor: false,
  strings: ["So, there you go"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#barbara-talk3a", {
  cursor: false,
  strings: ["your coff…eeEHHHHH!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// COFFFEEEE SPIILLL!!!

new TypeIt("#barbara-talk4", {
  cursor: false,
  strings: ["Oh I’m deeply sorry, I don’t know what happened, let me help you…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#mercy-talk3", {
  cursor: false,
  strings: ["There's no need, you've done enough."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


// knot talking about barbara
new TypeIt("#phrase29", {
  cursor: false,
  strings: ["Well, well, well, I pissed her off. ", "Mercy’s day is no longer as perfect as she thought."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase30", {
  cursor: false,
  strings: ["Who do we have here? Poor little thing, I think I already caused her some trouble."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase31", {
  cursor: false,
  strings: ["Maybe you did not notice earlier, but I moved the security camera to Barbara. The supervisor has seen the whole mess scene, for sure, he will call very soon."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


///// call barbara supervisor
new TypeIt("#supervisor-talk1", {
  cursor: false,
  strings: ["One more time and you can go spill drinks somewhere else!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#supervisor-talk2", {
  cursor: false,
  strings: ["By the way, your colleague is sick and you will have to do a double shift, I hope you don't have better plans."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#barbara-talk5", {
  cursor: false,
  strings: ["Well, I actually…?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


new TypeIt("#phrase32", {
  cursor: false,
  strings: ["I think she had something planned!", "Anyway, we deserve a break now, stressing others is stressful. Call me in a few hours! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// siesta 3
new TypeIt("#siesta-time-phrase", {
  cursor: false,
  strings: ["enjoy the siesta time"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase33", {
  cursor: false,
  strings: ["Hello again! That was such a good nap!! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase34", {
  cursor: false,
  strings: ["Great idea! The bar will be sooo full. ", "You’re the best assistant I’ve had so far!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// adding many people to bar

new TypeIt("#phrase35", {
  cursor: false,
  strings: ["Oh look who's back. Valentino, the sleeping beauty again! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

/// valentino at bar
new TypeIt("#valentino-talk3", {
  cursor: false,
  strings: ["Hiiii! I just have a quick question… I broke my phone in a morning rush and I don't remember the bus numbers. Would you let me use your phone for a minute?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#barbara-talk6", {
  cursor: false,
  strings: ["Yes I can do that, but normally customers come here for drinks and food. I’ll make an exception this time. "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk4", {
  cursor: false,
  strings: ["That is really nice of you, thank you very much! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase36", {
  cursor: false,
  strings: ["Wait? What? Are we in a rom com now?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase37", {
  cursor: false,
  strings: ["We should switch to Valentino, let’s go home with him!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk5", {
  cursor: false,
  strings: ["Thanks again! I will come for a drink one of these days."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk6", {
  cursor: false,
  strings: ["That was a long day. I'm going straight to bed."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase38", {
  cursor: false,
  strings: ["Here we are, I noticed that the demotivational quotes worked pretty well. Make sure, Valentino minds all of them."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase39", {
  cursor: false,
  strings: ["Good, all these thoughts won’t let him sleep for a while. "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// (whisper)
new TypeIt("#phrase40", {
  cursor: false,
  strings: ["Sweet dreams"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()