// HIDDEN WORRIES OF JAVASCRIPT

////////////////////////////////////////////////////////////////
//// GLOBAL VARIABLES //////////////////////////////////////////

let variable = {
  currentScene: 0,
  toggleCount: 0,
  motCount: 0,
  postitCount: 0,
  backgroundFade: -0.5,
  moveflag: false,
  visible: 1,
  textspeed: 30,
  wind: 0,
}

let ux = {
  click: document.querySelector("#click-help"),
  scroll: document.querySelector("#scroll-help"),
}

let domElement = {
  body: document.querySelector("#body"),
  intro: document.querySelector("#intro"),
  titleBox: document.querySelector("#title-container"),
  titleButton: document.querySelector("#title-button-container"),
  // scrollIcon: document.querySelector("#scroll-icon"),
  homeButton: document.querySelector("#home-button"),
  about: document.querySelector("#about-content"),
  assets: document.querySelector("#asset-container"),
  knotTalkingRight: document.querySelector("#knot-talking-right"),
  knotNarration: document.querySelector("#knot-narration"),
  helpYes: document.querySelector("#help-yes"),
  helpNo: document.querySelector("#help-no"),
  helpButtons: document.querySelector("#help-button"),
  spotlight: document.querySelector("#spotlight"),
  callIcon: document.querySelector("#call-icon-container"),
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
  enterOffice: document.querySelector("#enter-office-gif"),
  drink: document.querySelector("#drink-gif"),
  happyHour: document.querySelector("#happy-hour-gif"),
  screamphone: document.querySelector("#screaming-phone-gif"),
  wtf: document.querySelector("#wtf-gif"),
  arrowdrag: document.querySelector("#drag-gif"),
  scribble: document.querySelector("#scribble-gif"),
  dreaming: document.querySelector("#sweet-dreams-gif"),
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
  // happy hour
  guest1: document.querySelector("#guest1"),
  guest2: document.querySelector("#guest2"),
  guest3: document.querySelector("#guest3"),
  guest4: document.querySelector("#guest4"),
  guest5: document.querySelector("#guest5"),
  guest6: document.querySelector("#guest6"),
  guest7: document.querySelector("#guest7"),
  guest8: document.querySelector("#guest8"),
  guest9: document.querySelector("#guest9"),
  guest10: document.querySelector("#guest10"),
  guest11: document.querySelector("#guest11"),
  guest12: document.querySelector("#guest12"),
  guest13: document.querySelector("#guest13"),
  guest14: document.querySelector("#guest14"),
  guest15: document.querySelector("#guest15"),
  guest16: document.querySelector("#guest16"),
  guest17: document.querySelector("#guest17"),
  guest18: document.querySelector("#guest18"),
  guest19: document.querySelector("#guest19"),
  guest20: document.querySelector("#guest20"),
  guest21: document.querySelector("#guest21"),
  guest22: document.querySelector("#guest22"),
  guest23: document.querySelector("#guest23"),
  guest24: document.querySelector("#guest24"),
  guest25: document.querySelector("#guest25"),
  guest26: document.querySelector("#guest26"),
  guest27: document.querySelector("#guest27"),
  guest28: document.querySelector("#guest28"),
  guest29: document.querySelector("#guest29"),
  guest30: document.querySelector("#guest30"),
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
  // outro
  outro1: document.querySelector("#outro1"),
  outro2: document.querySelector("#outro2"),
  outro3: document.querySelector("#outro3"),
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
  mercyTalk1a: document.querySelector("#mercy-talk1a"),
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
  outsideTheOffice: document.querySelector("#outside-the-office-phrase"),
  aHappyHourLater: document.querySelector("#a-happy-hour-later-phrase"),
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
    domElement.body.style.height = "100vh";
    window.scrollTo(0, 0);
    ux.scroll.style.display = "block";
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
      // document.querySelector("#mouseTransparent").style.display = "block";
      document.querySelector("#mouseMoved").classList.add("mousePaused");
    }, 30000)
    setTimeout(() => {
      // document.querySelector("#mouseTransparent").classList.add("mouseBlack");
    }, 30000)
    mouseStartedMoving = false;
  }
  mouseMoved = false;
}, MINIMUM_MOUSE_MOVE_TIME);
//Mouse started moving
body.onmousemove = function (ev) {
  mouseStartedMoving = true;
  document.querySelector("#mouseMoved").classList.remove("mousePaused");

  // document.querySelector("#mouseTransparent").classList.remove("mouseBlack");
  setTimeout(() => {
    // document.querySelector("#mouseTransparent").style.display = "none";
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
  }, 10)
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

function showNavigation() {
  document.querySelector("#navigation-points").style.display = "block";
  document.querySelector("#navigation-button").style.display = "none";
}

function hideNavigation() {
  document.querySelector("#navigation-points").style.display = "none";
  document.querySelector("#navigation-button").style.display = "block";
}

////////////////////////////////
//// TITLE /////////////////////

// CHANGE BETWEEN BLACK AND WHITE TITLE
domElement.titleButton.addEventListener('click', function () {

  // AUDIO
  document.querySelector(".user-clicking-sound").currentTime = 0;
  document.querySelector(".user-clicking-sound").play();
  document.querySelector(".user-clicking-sound").loop = false;
  document.querySelector(".user-clicking-sound").volume = 0.5;

  if (variable.visible === 1 || variable.visible === 3) {
    variable.visible = 0;
    domElement.body.style.overflowY = "visible";
    domElement.body.style.height = "200vh";
    domElement.body.style.background = "var(--weiss)";
    document.querySelector("#title-dark").classList.add("titleBright");
    // document.querySelector("#about-content").classList.add("whiteAbout");
    // document.querySelector("#about-button").style.color = "var(--schwarz)";
    // domElement.about.style.color = "var(--schwarz)";
    character.knot.classList.add("knotTitle");
  } else {
    variable.visible = 3;
    domElement.body.style.overflowY = "hidden";
    domElement.body.style.background = "var(--schwarz)";
    domElement.body.style.height = "100vh";
    document.querySelector("#title-dark").classList.remove("titleBright");
    // document.querySelector("#about-content").classList.remove("whiteAbout");
    // document.querySelector("#about-button").style.color = "var(--weiss)"
    // domElement.about.style.color = "var(--weiss)";
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
    text.phrase2.style.display = "none";
    text.phrase3.style.display = "none";
    text.phrase4.style.display = "none";
    text.phrase5.style.display = "none";
    ux.click.style.display = "none";
    ux.scroll.style.display = "block";
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
    // domElement.scrollIcon.classList.remove("scroll-icon-after");
    document.querySelector("#navigation-button").style.display = "block";
    variable.currentScene = 0;
  }

  // 100 PX, "HELLO I'M STRESS KNOT" (MOVE KNOT, ADD SPEECHBUBBLE, REMOVE SCROLL ARROW)
  if (scrollLocation > 100) {
    domElement.intro.style.display = "block";
    domElement.titleBox.classList.add("titleUp");
    domElement.titleButton.classList.add("ropeUp");
    domElement.homeButton.classList.add("showHome");
    // domElement.scrollIcon.classList.add("scroll-icon-after");
    character.knot.classList.add("knotIntro");
    domElement.knotTalkingRight.classList.add("bubbleGrow");
    text.knotText.style.display = "block";
    document.querySelector("#navigation-button").style.display = "none";

  }

  if (scrollLocation > 100 && scrollLocation < 2000 && variable.currentScene === 0) {
    text.phrase1.style.display = "block";
    variable.currentScene = 1;
    ux.click.style.display = "block";
    ux.scroll.style.display = "none";
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
  // SCENE 32
  if (variable.currentScene === 34) {
    scene34();
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
  if (variable.currentScene === 46.1) {
    scene46a();
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
  if (variable.currentScene === 55.1) {
    scene55a();
  }
  if (variable.currentScene === 55.2) {
    scene55b();
  }
  if (variable.currentScene === 56) {
    scene56();
  }

  // HAPPY HOUR
  if (variable.currentScene === 57) {
    scene57();
  }
  if (variable.currentScene === 58) {
    scene58();
  }
  if (variable.currentScene === 59) {
    scene59();
  }
  if (variable.currentScene === 60) {
    scene60();
  }
  if (variable.currentScene === 61) {
    scene61();
  }
  if (variable.currentScene === 62) {
    scene62();
  }
  if (variable.currentScene === 63) {
    scene63();
  }
  if (variable.currentScene === 64) {
    scene64();
  }
  if (variable.currentScene === 65) {
    scene65();
  }
  if (variable.currentScene === 66) {
    scene66();
  }
  if (variable.currentScene === 68) {
    scene67();
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

  if (variable.currentScene === "outro1") {
    outro1();
  }
  if (variable.currentScene === "outro2") {
    outro2();
  }
  if (variable.currentScene === "outro3") {
    outro3();
  }

  if (variable.currentScene === 1001) {
    sceneFinish();
  }

  // LAST SCENE
  if (variable.currentScene === "goValentinoEnd") {
    goValentinoEnd();
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
  setTimeout(() => {

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
  ux.click.style.display = "none";
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
  document.querySelector("#navigation-points").style.display = "none";
  document.querySelector(".yes-no-click").pause();
  ux.scroll.style.display = "none";
  domElement.intro.style.display = "none";
  domElement.body.style.backgroundColor = "var(--schwarz)";
  domElement.helpButtons.style.display = "none";
  domElement.body.style.overflowY = "hidden";
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 10000);
  domElement.assets.style.display = "block";
  domElement.spotlight.style.display = "block";
  document.querySelector(".ambience-apartment1").currentTime = 0;
  document.querySelector(".ambience-apartment1").volume = 0.2;
  document.querySelector(".ambience-apartment1").play();
  document.querySelector(".ambience-apartment2").currentTime = 0;
  document.querySelector(".ambience-apartment2").volume = 0.4;
  document.querySelector(".ambience-apartment2").play();
  variable.currentScene = 4.5;
  scene5();
}

// SCENE 5; GREAT!", "Here we are, the first person of the day
function scene5() {
  ux.click.style.display = "block";
  ux.click.classList = "whiteText";
  text.phrase4.style.display = "none";
  text.phrase5.style.display = "block";
  domElement.assets.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 6;
  }, 500)
}

// SCENE 6: Let’s see what we have here...
function scene6() {
  ux.click.style.display = "none";
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
  document.querySelector(".alarm-clock1").volume = 0.5;

  document.querySelector(".alarm-clock2").currentTime = 0;
  document.querySelector(".alarm-clock2").play();
  document.querySelector(".alarm-clock2").volume = 0.5;

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
  if (variable.currentScene === 8) {
    document.querySelector(".toggle-click").currentTime = 0;
    document.querySelector(".toggle-click").play();
    document.querySelector(".toggle-click").loop = false;
    document.querySelector(".toggle-click").volume = 0.75;
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
  document.querySelector(".toggle-click").volume = 0.75;
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
      ux.click.style.display = "block";
    }, 2000)
  }
}

function scene9a() {

  document.querySelector(".countdown").currentTime = 0;
  document.querySelector(".countdown").play();
  document.querySelector(".countdown").loop = true;
  document.querySelector(".countdown").volume = 0.5;


  ux.click.style.display = "none";
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
    document.querySelector(".trumpet-sound").volume = 0.4;
    document.querySelector("#one-hour-later").style.display = "none";
    variable.currentScene = 9.5;
    ux.click.style.display = "block";
    ux.click.classList = "textBlack";
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
  ux.click.style.display = "none";
  ux.scroll.style.display = "block";
  document.querySelector(".trumpet-sound").pause();
  gifs.worried.style.display = "none";
  console.log("wtf");
  document.querySelector(".ambience-street-morning").currentTime = 0;
  document.querySelector(".ambience-street-morning").play();
  document.querySelector(".ambience-street-morning").volume = 0.4;
  document.querySelector("#wake-up-scream1").style.display = "none";
  document.querySelector("#wake-up-scream2").style.display = "none";
  document.querySelector("#run-scream").style.display = "block";
  text.valentinoTalk2.style.display = "none";
  text.peopleTalk.style.display = "none";
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
    character.knot.classList.add("knotValentinoRunMiddle");
    scene.bus.classList.add("driveLeft");
    ux.scroll.classList = "textWhite";
  } else {
    character.valentino2b.style.display = "none";
    character.valentino2b.classList = "valentino-run";
    character.valentino2a.classList = "valentino-run";
    gifs.running.classList = "valentino-run";
    scene.bus.classList = "";
    character.knot.classList.remove("knotValentinoRunMiddle");
    ux.scroll.classList = "textBlack";
  }
  // 2. horizontal scroll valentino  
  if (sLeft > 1.5 * window.innerWidth) {
    document.querySelector("#run-scream").style.display = "none";
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
    document.querySelector(".lawrence-music-headphones").currentTime = 0;
    document.querySelector(".lawrence-music-headphones").play();
    document.querySelector(".lawrence-music-headphones").loop = false;
    document.querySelector(".lawrence-music-headphones").volume = 0.4;
    text.phrase11.style.display = "block";
    character.valentino2a.classList.add("valentinoLeaves");
    character.valentino2b.classList.add("valentinoLeaves");
    gifs.running.classList.add("valentinoLeaves");
    character.knot.classList.add("knotValentinoRunEnd");
    scene.bus.classList.add("driveAway");
    document.querySelector(".countdown").pause();
    gifs.musicnotes.style.display = "block";
    ux.scroll.style.display = "none";
  } else {
    text.phrase11.style.display = "none";
    character.valentino2a.classList.remove("valentinoLeaves");
    character.valentino2b.classList.remove("valentinoLeaves");
    gifs.running.classList.remove("valentinoLeaves");
    character.knot.classList.remove("knotValentinoRunEnd");
    scene.bus.classList.remove("driveAway");
    ux.scroll.style.display = "block";
  }
}

// SCENE 11 (ID of LAWRENCE WAS OBSERVED) It looks like this guy needs some stimulation.
function goLawrence() {
  ux.scroll.style.display = "none";
  ux.click.style.display = "block";
  document.querySelector("#navigation-points").style.display = "none";
  document.querySelector(".lawrence-music-headphones").play();
  document.querySelector(".lawrence-music-headphones").loop = false;
  document.querySelector(".lawrence-music-headphones").volume = 0.5;
  gifs.running.style.display = "none";
  gifs.musicnotes2.style.display = "block";
  gifs.running.style.display = "none";
  domElement.body.style.backgroundColor = "var(--weiss)";
  domElement.assets.style.display = "block";
  character.lawrence.style.display = "block";
  character.valentino.style.display = "none";
  scene.horizontalScrollContainer.style.display = "none";
  scene.cinematicEffect.style.display = "none";
  character.knot.classList.add("knotLawrenceBusstop");
  character.valentino2a.style.display = "none";
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
  document.querySelector(".ambience-bus").volume = 0.3;
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
  document.querySelector(".lawrence-music-headphones").pause();
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
  ux.click.style.display = "none";
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
  document.querySelector(".delete-key").volume = 0.5;

  variable.motCount = variable.motCount + 1;
  if (variable.motCount === 3) {
    text.phrase18.style.display = "block";
    ux.click.style.display = "block";
    document.querySelector(".lawrence-music-headphones").pause();
    setTimeout(() => {
      variable.currentScene = 19;
    }, 200)
  }
}

// looooooser
function scene19() {
  document.querySelector(".sound-quote1").currentTime = 0;
  document.querySelector(".sound-quote1").play();
  document.querySelector(".sound-quote1").loop = true;
  document.querySelector(".sound-quote1").volume = 0.4;
  document.querySelector(".sound-quote1").playbackRate = 1.5;

  document.querySelector(".sound-quote2").currentTime = 0;
  document.querySelector(".sound-quote2").play();
  document.querySelector(".sound-quote2").loop = true;
  document.querySelector(".sound-quote2").volume = 0.3;
  ux.click.style.display = "none";
  ux.click.classList = "textWhite";
  gifs.nervous.style.display = "block";
  text.phrase18.style.display = "none";
  document.querySelector("#looser-scream-box").style.display = "block";
  document.querySelector(".ambience-bus").pause();
  setTimeout(() => {
    variable.currentScene = 20;
    ux.click.style.display = "block";
  }, 200)
}

// SCENE 20 LAWRENCE WALKING TO BUILDING
function scene20() {
  document.querySelector(".waiting-room-sound").currentTime = 0;
  document.querySelector(".waiting-room-sound").play();
  document.querySelector(".waiting-room-sound").loop = true;
  document.querySelector(".waiting-room-sound").volume = 0.35;
  ux.click.style.display = "none";
  ux.click.classList = "textBlack";
  document.querySelector(".sound-quote1").pause();
  document.querySelector(".sound-quote2").pause();
  document.querySelector("#outside-the-office").style.display = "block";
  text.outsideTheOffice.style.display = "block";
  gifs.nervous.style.display = "none";
  document.querySelector("#looser-scream-box").style.display = "none";
  character.lawrence2a.style.display = "none";
  character.lawrence2b.style.display = "none";
  character.lawrence2c.style.display = "none";
  character.lawrence2d.style.display = "none";
  scene.busInside.style.display = "none";
  character.lawrence3.style.display = "none";
  character.knot.classList.add("knotOutsideOfficeBuilding");
  scene.officeBuilding.style.display = "none";
  variable.currentScene = 20.4;
  setTimeout(() => {
    scene20a();
  }, 2500)
}

// SCENE 20a Mercy saying hello
function scene20a() {
  ux.click.style.display = "block";
  document.querySelector("#outside-the-office").style.display = "none";
  text.outsideTheOffice.style.display = "none";
  character.mercy.style.display = "block";
  character.mercy1a.style.display = "block";
  text.peopleTalk.style.display = "flex";
  extraSmallTalkingBubble();
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
  ux.click.style.display = "none";
  text.peopleTalk.classList.remove("bubbleGrow");
  text.peopleTalk.style.display = "none";
  character.knot.classList.add("knotWaitingroom");
  text.mercyTalk1.style.display = "none";
  text.phrase19.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 21;
  }, 200)
}

// SCENE 22 LAWRENCE START FALLING
function scene21() {
  document.querySelector(".lasso").currentTime = 0;
  document.querySelector(".lasso").play();
  document.querySelector(".lasso").loop = false;
  document.querySelector(".lasso").volume = 0.5;

  document.querySelector(".knotLassoPath").style.strokeDashoffset = "0";
  text.peopleTalk.classList.remove("mercy-goodmorning");
  text.phrase19.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 0;
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "block";
    document.querySelector(".knotLassoPath").style.strokeDashoffset = "calc(30vw + 30vh)";
    character.knot.classList.add("knotWaitingroom-AfterLasso");
    document.querySelector(".lasso2").currentTime = 0;
    document.querySelector(".lasso2").play();
    document.querySelector(".lasso2").loop = false;
    document.querySelector(".lasso2").volume = 0.5;
  }, 1000)
  setTimeout(() => {
    gifs.wtf.style.display = "block";
    character.mercy1a.style.display = "none";
    character.mercy1b.style.display = "block";
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "none";
    character.lawrence4c.style.display = "block";
    variable.currentScene = 22;
    document.querySelector(".lawrence-ground").currentTime = 0;
    document.querySelector(".lawrence-ground").play();
    document.querySelector(".lawrence-ground").loop = false;
    document.querySelector(".lawrence-ground").volume = 0.5;
    ux.click.style.display = "block";
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
  variable.currentScene = 24.7;
  character.knot.classList.add("knotWaitingChair");
  setTimeout(() => {
    text.phrase20.style.display = "block";
    character.mercy2.style.display = "none";
    document.querySelector(".door-close").currentTime = 0;
    document.querySelector(".door-close").play();
    document.querySelector(".door-close").volume = 0.5;
    scene.waitingRoom2.style.display = "block";
    scene.waitingRoom1.style.display = "none";
  }, 200)
  setTimeout(() => {
    gifs.sleep.style.display = "block";
    eyes.style.display = "None";
    variable.currentScene = 24.1;
  }, 2500)
}

// SCENE 24A - a siesta later
function scene24a() {
  document.querySelector("#a-siesta-later").style.display = "block";
  text.phrase20.style.display = "none";
  text.aSiestaLater.style.display = "block";
  scene.clock0930.style.display = "none";
  scene.clock11.style.display = "block";
  variable.currentScene = 24.9;
  setTimeout(() => {
    document.querySelector("#a-siesta-later").style.display = "none";
    text.aSiestaLater.style.display = "none";
    variable.currentScene = 24.2;
  }, 2000)
}

// SCENE 24b Lawrence leaving the office
function scene24b() {

  document.querySelector(".door-open").currentTime = 0;
  document.querySelector(".door-open").play();
  document.querySelector(".door-open").volume = 0.5;
  scene.waitingRoom2.style.display = "none";
  scene.waitingRoom1.style.display = "block";
  character.lawrence5.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 24.3;
  }, 200)
}

// SCENE 24c Knot is waking up
function scene24c() {
  ux.click.style.display = "none";
  eyes.style.display = "block";
  gifs.sleep.style.display = "none";
  text.phrase21.style.display = "block";
  document.querySelector("#door-div-waitingroom").style.display = "block";
  setTimeout(() => {
    variable.currentScene = 26;
  }, 200)
  setTimeout(() => {
    gifs.enterOffice.style.display = "block";
  }, 1500)
}

// change to mercy Office
function scene26() {
  gifs.enterOffice.style.display = "none";
  character.lawrence5.style.display = "none";
  document.querySelector("#door-div-waitingroom").style.display = "none";
  goMercy();
}

// (when user doesnt click on door)
function scene26Error() {
  document.querySelector(".door-enter").currentTime = 0;
  document.querySelector(".door-enter").play();
  document.querySelector(".door-enter").volume = 0.5;
  document.querySelector("#door-div-waitingroom").style.backgroundColor = "var(--schwarz)";
  setTimeout(() => {
    document.querySelector("#door-div-waitingroom").style.backgroundColor = "transparent";
  }, 200)
}

/////////////
function goMercy() {
  document.querySelector("#navigation-points").style.display = "none";
  document.querySelector(".typing-mercy").currentTime = 0;
  document.querySelector(".typing-mercy").play();
  document.querySelector(".typing-mercy").loop = true;
  document.querySelector(".typing-mercy").volume = 0.1;
  ux.scroll.style.display = "none";
  ux.click.style.display = "block";
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
  ux.click.style.display = "none";
  character.knot.classList.add("knotOfficeLookingAround1");
  variable.currentScene = 28;
  setTimeout(() => {
    character.knot.classList.add("knotOfficeLookingAround2");
  }, 1000)
  setTimeout(() => {
    text.phrase22.style.display = "block";
    character.knot.classList.add("knotOfficeStopLooking");
  }, 2000)
  setTimeout(() => {
    document.querySelector("#info-icon-mercy").style.display = "block";
  }, 3000)
}

// lets check her to do list
function scene28a() {
  ux.click.style.display = "block";
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

  document.querySelector(".mail-notification1").currentTime = 0;
  document.querySelector(".mail-notification1").play();
  document.querySelector(".mail-notification1").loop = false;
  document.querySelector(".mail-notification1").volume = 0.5;

  document.querySelector(".clicking-keyboard-mercy").currentTime = 0;
  document.querySelector(".clicking-keyboard-mercy").play();
  document.querySelector(".clicking-keyboard-mercy").volume = 0.6;

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
  document.querySelector(".clicking-keyboard-mercy").pause();
  document.querySelector(".typing-mercy").pause();
  document.querySelector(".mail-notification1").pause();
  text.phrase24.style.display = "none";
  text.phrase25.style.display = "none";
  character.mercy3a.style.display = "none";
  character.mercy3b.style.display = "block";
  document.querySelector("#mail2").style.display = "block"
  setTimeout(() => {
    document.querySelector(".mail-notification2").currentTime = 0;
    document.querySelector(".mail-notification2").play();
    document.querySelector(".mail-notification2").loop = false;
    document.querySelector(".mail-notification2").volume = 0.5;
    variable.currentScene = 32;
  }, 200)
  setTimeout(() => {
    document.querySelector(".mail-notification3").currentTime = 0;
    document.querySelector(".mail-notification3").play();
    document.querySelector(".mail-notification3").loop = false;
    document.querySelector(".mail-notification3").volume = 0.5;
    document.querySelector("#mail3").style.display = "block"
  }, 500)
  setTimeout(() => {
    document.querySelector(".mail-notification4").currentTime = 0;
    document.querySelector(".mail-notification4").play();
    document.querySelector(".mail-notification4").loop = false;
    document.querySelector(".mail-notification4").volume = 0.5;
    document.querySelector("#mail4").style.display = "block"
  }, 1000)
  setTimeout(() => {
    document.querySelector(".mail-notification5").currentTime = 0;
    document.querySelector(".mail-notification5").play();
    document.querySelector(".mail-notification5").loop = false;
    document.querySelector(".mail-notification5").volume = 0.5;
    ux.click.style.display = "none";
    document.querySelector("#mail5").style.display = "block"
    text.phrase26.style.display = "block";
    gifs.arrowdrag.style.display = "block";
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
        variable.currentScene = 33;
        variable.wind = 1;
      }
      setTranslate(activeItem.currentX, 0, activeItem);
    }
  }
}

function setTranslate(xPos, yPos, el) {

  document.querySelector(".wind-sound").currentTime = 0;
  document.querySelector(".wind-sound").play();
  document.querySelector(".wind-sound").loop = false;
  document.querySelector(".wind-sound").volume = 0.5;

  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// SCENE MERCY CHAOS WIND
function mercyChaos() {
  document.querySelector(".wind-sound").pause();
  gifs.arrowdrag.style.display = "none";

  document.querySelector(".wind-sound").pause();
  ux.click.style.display = "block";
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
    ux.click.style.display = "block";
    variable.currentScene = 34;
    document.querySelector(".face-hit").currentTime = 0;
    document.querySelector(".face-hit").play();
    document.querySelector(".face-hit").volume = 0.7;
    document.querySelector(".face-hit2").currentTime = 0;
    document.querySelector(".face-hit2").play();
    document.querySelector(".face-hit2").volume = 0.6;
  }, 1000)
}

// i need a break
function scene34() {
  officeMercyTalks();
  extraSmallTalkingBubble();
  text.phrase27.style.display = "none";
  text.mercyTalk1a.style.display = "block";
  setTimeout(() => {
    variable.currentScene = "goBarbara";
  }, 200)
}


///////////// BARBIE
function goBarbara() {
  document.querySelector("#navigation-points").style.display = "none";
  text.peopleTalk.style.display = "none";
  noOneTalks();
  document.querySelector(".face-hit").pause();
  document.querySelector(".face-hit2").pause();

  document.querySelector(".bar-ambience-chill").currentTime = 0;
  document.querySelector(".bar-ambience-chill").play();
  document.querySelector(".bar-ambience-chill").loop = true;
  document.querySelector(".bar-ambience-chill").volume = 0.1;

  document.querySelector(".waiting-room-sound").pause();
  text.peopleTalk.style.display = "flex";
  ux.scroll.style.display = "none";
  ux.click.style.display = "block";
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
  text.mercyTalk1a.style.display = "none";
  scene.mailMercy.style.display = "none";
  scene.todoMercy.style.display = "none";
  setTimeout(() => {
    text.peopleTalk.style.display = "flex";
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

// so there you go
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

// lets get her mad now
function scene39() {
  noOneTalks();
  text.barbaraTalk3.style.display = "none";
  character.knot.classList.remove("knotBarAway")
  character.knot.classList.add("knotMercyBar1")
  ux.click.style.display = "none";
  text.phrase28.style.display = "block";
  document.querySelector("#sandwich-bag").classList.add("sandwich-bag-holding");
  setTimeout(() => {
    variable.currentScene = 40.1;
  }, 200)
  setTimeout(() => {
    document.querySelector("#coffee").style.display = "block";
  }, 200)
}

// actually spilling the tea
function scene40a() {
  ux.click.style.display = "block";
  document.querySelector("#sandwich-bag").classList.add("sandwich-bag-floor");
  document.querySelector(".coffee-spill").currentTime = 0;
  document.querySelector(".coffee-spill").play();
  document.querySelector(".coffee-spill").loop = false;
  document.querySelector(".coffee-spill").volume = 0.7;

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
  document.querySelector(".coffee-spill").pause();
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
  gifs.scribble.style.display = "block";
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
  character.mercy5c.classList.add("mercy-5c-away");
  gifs.scribble.classList.add("mercy-5c-away");
  character.knot.classList.remove("knotBarAway")
  text.phrase29.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 44;
  }, 200)
}

// info icon barbara
function scene44() {
  ux.click.style.display = "none";
  text.phrase29.style.display = "none";
  text.phrase30.style.display = "block";
  document.querySelector("#info-icon-barbara").style.display = "block";
  character.mercy5c.style.display = "none";
  gifs.scribble.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 45;
  }, 200)
}

// barbara ID was clicked
function scene45a() {
  ux.click.style.display = "block";
  text.phrase30.style.display = "none";
  document.querySelector("#info-icon-barbara").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 46;
  }, 200)
}


function scene46() {
  text.phrase31.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 46.1;
  }, 200)
}

// take call
function scene46a() {
  document.querySelector(".ringtone").currentTime = 0;
  document.querySelector(".ringtone").play();
  document.querySelector(".ringtone").loop = true;
  document.querySelector(".ringtone").volume = 0.5;
  text.phrase31.style.display = "none";
  ux.click.style.display = "none";
  domElement.callIcon.style.display = "block";
  character.knot.classList.add("knotBarAway");
  setTimeout(() => {
    variable.currentScene = 46.2;
  }, 200)
}

//supervisor talk 1
function scene47() {
  document.querySelector(".ringtone").pause();
  ux.click.style.display = "block";
  domElement.callIcon.style.display = "none";
  document.querySelector(".yelling1").currentTime = 0;
  document.querySelector(".yelling1").play();
  document.querySelector(".yelling1").loop = false;
  document.querySelector(".yelling1").volume = 0.5;

  text.phrase31.style.display = "none";
  character.barbara5.style.display = "none";
  character.barbara6a.style.display = "block";
  barTalks();
  text.supervisorTalk1.style.display = "block";
  document.querySelector("#people-talk-left").style.display = "none";
  document.querySelector("#people-talk-right").style.display = "none";
  document.querySelector("#people-talk-angry").style.display = "block";
  setTimeout(() => {
    variable.currentScene = 48;
  }, 200)
}

//supervisor talk 2
function scene48() {

  document.querySelector(".yelling1").pause();

  document.querySelector(".yelling2").currentTime = 0;
  document.querySelector(".yelling2").play();
  document.querySelector(".yelling2").loop = true;
  document.querySelector(".yelling2").volume = 0.5;

  text.peopleTalk.classList.add("angry-supervisor-talks");
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
  text.peopleTalk.classList.remove("angry-supervisor-talks");
  document.querySelector("#people-talk-left").style.display = "block";
  document.querySelector("#people-talk-angry").style.display = "none";
  gifs.screamphone.style.display = "none";
  document.querySelector(".yelling2").pause();
  text.supervisorTalk2.style.display = "none";
  text.barbaraTalk5.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 50;
  }, 200)
}

// 
function scene50() {
  noOneTalks();
  document.querySelector(".endedcall").currentTime = 0;
  document.querySelector(".endedcall").play();
  document.querySelector(".endedcall").loop = true;
  document.querySelector(".endedcall").volume = 0.5;
  text.barbaraTalk5.style.display = "none";
  text.phrase32.style.display = "block";
  character.knot.classList.add("knotBarSiesta");
  setTimeout(() => {
    variable.currentScene = 52;
  }, 200)
}

// siesta time
function scene52() {
  document.querySelector(".siesta-sound").currentTime = 0;
  document.querySelector(".siesta-sound").play();
  document.querySelector(".siesta-sound").loop = true;
  document.querySelector(".siesta-sound").volume = 0.5;
  document.querySelector(".endedcall").pause();
  document.querySelector(".bar-ambience-chill").pause();
  gifs.drink.style.display = "none";
  character.barbara6b.style.display = "none";
  text.phrase32.style.display = "none";
  document.querySelector("#siesta-time").style.display = "block";
  text.siestaTime.style.display = "block";
  character.barbara7.style.display = "block";
  character.barbara6b.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 53;
  }, 200)
}

//  HELLLO AGAIN
function scene53() {
  character.barbara7.style.display = "block";
  document.querySelector(".siesta-sound").pause();
  document.querySelector(".bar-ambience-chill").play();

  ux.click.style.display = "none";
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
  ux.click.style.display = "block";
  document.querySelector(".neonlight1").currentTime = 0;
  document.querySelector(".neonlight1").play();
  document.querySelector(".neonlight1").loop = false;
  document.querySelector(".neonlight1").volume = 0.6;

  document.querySelector(".neonlight2").currentTime = 0;
  document.querySelector(".neonlight2").play();
  document.querySelector(".neonlight2").loop = false;
  document.querySelector(".neonlight2").volume = 0.5;

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

// HAPPY HOUR GUESTS
function scene55() {
  document.querySelector(".bar-ambience-full1").currentTime = 0;
  document.querySelector(".bar-ambience-full1").play();
  document.querySelector(".bar-ambience-full1").loop = true;
  document.querySelector(".bar-ambience-full1").volume = 0.5;
  document.querySelector(".bar-ambience-chill").pause();
  document.querySelector(".neonlight1").pause();
  document.querySelector(".neonlight2").pause();
  ux.click.style.display = "none";
  character.knot.classList = "knotValentinoBarHidden";
  text.phrase34.style.display = "none";
  scene.guest1.style.display = "block";
  variable.currentScene = 55.7;
  // HAPPY HOUR GUESTS
  setTimeout(() => {

    scene.guest2.style.display = "block";
  }, 300)
  setTimeout(() => {
    scene.guest3.style.display = "block";
  }, 600)
  setTimeout(() => {
    scene.guest4.style.display = "block";
    character.barbara7.style.display = "none";
    character.barbara8.style.display = "block";
  }, 900)
  setTimeout(() => {
    scene.guest5.style.display = "block";
    scene.guest6.style.display = "block";
  }, 1200)
  setTimeout(() => {
    scene.guest7.style.display = "block";
    scene.guest8.style.display = "block";
    scene.guest9.style.display = "block";
  }, 1500)
  setTimeout(() => {
    scene.guest10.style.display = "block";
    scene.guest11.style.display = "block";
  }, 1800)
  setTimeout(() => {
    scene.guest12.style.display = "block";
    scene.guest13.style.display = "block";
  }, 2100)
  setTimeout(() => {
    scene.guest14.style.display = "block";
    scene.guest15.style.display = "block";
  }, 2400)
  setTimeout(() => {
    scene.guest16.style.display = "block";
    scene.guest17.style.display = "block";
  }, 2700)
  setTimeout(() => {
    scene.guest18.style.display = "block";
    scene.guest19.style.display = "block";
  }, 3000)
  setTimeout(() => {
    scene.guest20.style.display = "block";
    scene.guest21.style.display = "block";
    scene.guest22.style.display = "block";
  }, 3300)
  setTimeout(() => {
    document.querySelector(".bar-ambience-full2").currentTime = 0;
    document.querySelector(".bar-ambience-full2").play();
    document.querySelector(".bar-ambience-full2").loop = true;
    document.querySelector(".bar-ambience-full2").volume = 0.5;
    scene.guest23.style.display = "block";
    scene.guest24.style.display = "block";
    scene.guest25.style.display = "block";
  }, 3600)
  setTimeout(() => {
    scene.guest26.style.display = "block";
    scene.guest27.style.display = "block";
    scene.guest28.style.display = "block";
  }, 3900)
  setTimeout(() => {
    document.querySelector(".bar-ambience-late").currentTime = 0;
    document.querySelector(".bar-ambience-late").play();
    document.querySelector(".bar-ambience-late").loop = true;
    document.querySelector(".bar-ambience-late").volume = 0.05;
    scene.guest29.style.display = "block";
    scene.guest30.style.display = "block";
  }, 4200)
  setTimeout(() => {
    character.barbara8.style.display = "none";
    character.barbara4.style.display = "block";
  }, 4600)
  setTimeout(() => {
    ux.click.classList = "textWhite";
    variable.currentScene = 55.1;
    ux.click.style.display = "block";
  }, 9700)
}

// click to see transistion "a happy hour later"
function scene55a() {
  character.valentino3.style.display = "block";
  character.barbara4.style.display = "none";
  character.barbara9.style.display = "block";
  ux.click.style.display = "none";
  gifs.happyHour.style.display = "none";
  document.querySelector("#a-happy-hour-later").style.display = "Block";
  text.aHappyHourLater.style.display = "block";
  document.querySelector("#happy-hour-guests").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 55.2;
    ux.click.style.display = "block";
  }, 200)
}

// look whos back!!
function scene55b() {
  document.querySelector(".bar-ambience-full1").pause();
  document.querySelector(".bar-ambience-full2").pause();
  ux.click.style.display = "none";
  ux.click.classList = "textBlack";
  document.querySelector("#a-happy-hour-later").style.display = "none";
  character.knot.classList = "knotValentinoBar";
  text.phrase35.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 56;
    ux.click.style.display = "block";
  }, 200)
}

function scene56() {
  character.barbara9.style.display = "none";
  character.barbara10a.style.display = "block";
  document.querySelector("#happy-hour-guests").style.display = "none";
  character.knot.classList = "knotValentinoBarHidden";
  text.phrase35.style.display = "none";
  barGuestTalks();
  text.valentinoTalk3.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 57;
  }, 200)
}

function scene57() {
  barTalks();
  character.barbara10a.style.display = "none";
  character.barbara10b.style.display = "block";
  text.valentinoTalk3.style.display = "none";
  text.barbaraTalk6.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 58;
  }, 200)
}

function scene58() {
  barGuestTalks();
  character.valentino4.style.display = "block";
  character.valentino3.style.display = "none";
  character.barbara10b.style.display = "none";
  character.barbara10c.style.display = "block";
  text.valentinoTalk4.style.display = "block";
  text.barbaraTalk6.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 59;
  }, 200)
}

function scene59() {
  noOneTalks();
  text.peopleTalk.style.display = "none";
  character.knot.classList = "knotValentinoBar";
  text.valentinoTalk4.style.display = "none";
  text.phrase36.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 60;
  }, 200)
}

function scene60() {
  text.peopleTalk.style.display = "block";
  text.phrase36.style.display = "none";
  text.phrase37.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 61;
  }, 200)
}

function scene61() {
  document.querySelector(".bar-ambience-late").pause();
  barGuestTalks();
  text.valentinoTalk5.style.display = "block";
  text.phrase37.style.display = "none";
  character.knot.classList = "knotMercyBar1";
  character.valentino5.style.display = "block";
  character.valentino4.style.display = "none";
  character.barbara10c.style.display = "none";
  character.barbara10d.style.display = "block";
  setTimeout(() => {
    variable.currentScene = "goValentinoEnd";
  }, 200)
}

/// VALENTINO: LAST SCENE OF STORY
function goValentinoEnd() {
  document.querySelector(".french-sound").currentTime = 0;
  document.querySelector(".french-sound").play();
  document.querySelector(".french-sound").loop = false;
  document.querySelector(".french-sound").volume = 0.3;
  document.querySelector("#navigation-points").style.display = "none";
  ux.click.style.display = "none";
  ux.scroll.style.display = "none";
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
  character.valentino5.style.display = "none";
  character.valentino6.style.display = "block";
  character.mercy.style.display = "none";
  character.lawrence.style.display = "none";
  character.barbara.style.display = "none";
  tiredValentinoTalks();
  text.valentinoTalk5.style.display = "none";
  text.valentinoTalk6.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 80;
    ux.click.style.display = "block";
  }, 200)
}

function scene80() {
  noOneTalks();
  gifs.dreaming.style.display = "block";
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
  ux.click.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 81.1;
  }, 200)
}

// VALENTINO POST ITS CLICKED
function countPostit() {
  variable.postitCount = variable.postitCount + 1;
  if (variable.postitCount < 5) {
    domElement.body.style.backgroundColor = "#0c0c0c";
    setTimeout(() => {
      domElement.body.style.backgroundColor = "#fafafa";
    }, 200)
  }
  if (variable.postitCount === 5) {
    domElement.body.style.backgroundColor = "#0c0c0c";
    setTimeout(() => {
      scene82();
    }, 1500)
  }
}

function postit1() {
  document.querySelector("#val-post1").classList.add("endPositionPostIt")
  document.querySelector(".post-it-sound").currentTime = 0;
  document.querySelector(".post-it-sound").play();
  document.querySelector(".post-it-sound").loop = false;
  document.querySelector(".post-it-sound").volume = 0.2;
}

function postit2() {
  document.querySelector("#val-post2").classList.add("endPositionPostIt")
  document.querySelector(".post-it-sound").currentTime = 0;
  document.querySelector(".post-it-sound").play();
  document.querySelector(".post-it-sound").loop = false;
  document.querySelector(".post-it-sound").volume = 0.2;
}

function postit3() {
  gifs.dreaming.style.display = "none";
  document.querySelector("#val-post3").classList.add("endPositionPostIt")
  document.querySelector(".post-it-sound").currentTime = 0;
  document.querySelector(".post-it-sound").play();
  document.querySelector(".post-it-sound").loop = false;
  document.querySelector(".post-it-sound").volume = 0.2;
}

function postit4() {
  document.querySelector("#val-post4").classList.add("endPositionPostIt")
  document.querySelector(".post-it-sound").currentTime = 0;
  document.querySelector(".post-it-sound").play();
  document.querySelector(".post-it-sound").loop = false;
  document.querySelector(".post-it-sound").volume = 0.2;
}

function postit5() {
  document.querySelector("#val-post5").classList.add("endPositionPostIt")
  document.querySelector(".post-it-sound").currentTime = 0;
  document.querySelector(".post-it-sound").play();
  document.querySelector(".post-it-sound").loop = false;
  document.querySelector(".post-it-sound").volume = 0.2;
}


// after post its on right position
function scene82() {
  character.valentino7b.classList.add("valentino-transition1");
  ux.click.classList = "textWhite";
  ux.click.style.display = "block";
  domElement.body.style.backgroundColor = "#0c0c0c";
  document.querySelector(".post-it-sound").pause();
  character.valentino7b.style.display = "block";
  character.valentino7a.style.display = "none";
  character.knot.classList.remove("knotLastScene");
  text.phrase39.style.display = "block";
  ux.click.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 83;
  }, 200)
}

function scene83() {
  character.valentino7b.classList.add("valentino-transition2");
  scene.valentinoPostIt.style.display = "none";
  text.phrase39.style.display = "none";
  text.phrase40.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 84;
  }, 200)
}

// Initial volume of 0.20
// Make sure it's a multiple of 0.05
var vol = 0.30;
var interval = 500; // 200ms interval

// VALENTINO DISAPPEARS TRANSITION
function scene84() {
  // FRENCH FADE OUT SONG
  var fadeout = setInterval(
    function () {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol > 0) {
        vol -= 0.05;
        document.querySelector(".french-sound").volume = vol;

      } else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval);
  character.valentino7b.classList.add("valentino-transition3");
  ux.click.style.display = "none";
  character.knot.classList = "knotGone";
  text.phrase40.style.display = "none";
  setTimeout(() => {
    variable.currentScene = "outro1";
  }, 200)
  setTimeout(() => {
    ux.click.classList = "textBlack";
    ux.click.style.display = "block";
  }, 1000)
  setTimeout(() => {
    outro1();
  }, 3000)
}

// OUTRO: thank you, you were best assistant ever
function outro1() {
  // document.querySelector(".french-sound").pause();
  ux.click.classList = "textWhite";
  ux.click.style.display = "none";
  domElement.assets.style.display = "none";
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "none";
  character.barbara.style.display = "none";
  // knot outro
  character.knot.classList = "knotOutro";
  text.phrase40.style.display = "none";
  document.querySelector("#knot-outro").style.display = "flex";
  text.outro1.style.display = "block";
  setTimeout(() => {
    variable.currentScene = "outro2";
    ux.click.style.display = "block";
  }, 200)
}

// OUTRO: at the end of the day i always let...
function outro2() {
  text.outro2.style.display = "block";
  text.outro1.style.display = "none";
  setTimeout(() => {
    variable.currentScene = "outro3";
  }, 200)
}

// OUTRO CALL TO ACTION - dont hesistate to fill in
function outro3() {
  document.querySelector("#knot-outro").style.display = "flex";
  document.querySelector("#knot-outro").style.backgroundColor = "rgba(12,12,12,0.95)";
  document.querySelector("#navigation-points").style.display = "none";
  character.knot.classList = "knotOutro2";
  text.outro3.style.display = "block";
  text.outro2.style.display = "none";
  variable.currentScene = 1000;
  ux.click.classList = "textWhite";
  ux.click.style.display = "block";
  ux.scroll.style.display = "none";
  domElement.intro.style.display = "none";
  domElement.body.style.background = "var(--schwarz)";
  domElement.body.style.overflow = "auto";
  domElement.body.style.overflowX = "auto";
  domElement.body.style.overflowY = "auto";
  scene.cinematicEffect.style.display = "none";
  domElement.assets.style.display = "none";
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "none";
  character.barbara.style.display = "none";
  domElement.callToAction.style.display = "block";
  prepareFormular();
  addCommentsToHTML();
  domElement.body.style.height = "";
  window.scrollTo(0, 3000);
  setTimeout(() => {
    variable.currentScene = 1001;
  }, 200)
}

// CALL TO ACTION
function sceneFinish() {
  character.knot.classList = "knotGone";
  document.querySelector("#knot-outro").style.display = "none";
  text.outro1.style.display = "none";
}


/// DIALOGUES AT THE BAR POSITIONING

function barTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("bar-talks");
  document.querySelector("#people-talk-left").style.display = "block";
  document.querySelector("#people-talk-right").style.display = "none";
}

function tiredValentinoTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("tired-valentino-talks");
  document.querySelector("#people-talk-left").style.display = "block";
  document.querySelector("#people-talk-right").style.display = "none";
}

function barGuestTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("bar-guest-talks");
  document.querySelector("#people-talk-left").style.display = "none";
  document.querySelector("#people-talk-right").style.display = "block";
}

function officeMercyTalks() {
  text.peopleTalk.classList = "bubbleGrow";
  text.peopleTalk.classList.add("office-mercy-talks");
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

// function goCallToAction() {
//   variable.currentScene = 1000;
//   ux.scroll.style.display = "none";
//   domElement.intro.style.display = "none";
//   domElement.body.style.background = "var(--schwarz)";
//   domElement.body.style.overflow = "auto";
//   domElement.body.style.overflowX = "auto";
//   domElement.body.style.overflowY = "auto";
//   scene.cinematicEffect.style.display = "none";
//   domElement.assets.style.display = "none";
//   character.valentino.style.display = "none";
//   character.lawrence.style.display = "none";
//   character.mercy.style.display = "none";
//   character.barbara.style.display = "none";
//   domElement.callToAction.style.display = "block";
//   prepareFormular();
//   addCommentsToHTML();
//   domElement.body.style.height = "";
//   window.scrollTo(0, 3000);
//   setTimeout(() => {
//     variable.currentScene = 1000;
//   }, 200)
// }


// PREPARE GLITCH FORMULAR AS SOON AS CALL TO ACTION IS CLICKED
function prepareFormular() {
  var glitchdiv = document.createElement("div");
  glitchdiv.setAttribute("class", "glitch-embed-wrap");
  glitchdiv.setAttribute("style", "position: absolute; height: 80vh; width: 700px;");
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://glitch.com/embed/#!/embed/stressformular?path=server.js&previewSize=100&attributionHidden=true");
  ifrm.setAttribute("title", "stressformular on Glitch");
  ifrm.setAttribute("allow", "geolocation; microphone; camera; midi; vr; encrypted-media");
  ifrm.style.width = "100%";
  ifrm.style.height = "100%";
  domElement.glitchStressFormular.appendChild(glitchdiv);
  glitchdiv.appendChild(ifrm);
}



////////////// ADD STUFF FROM IN.CSV
function addCommentsToHTML() {
  if (variable.currentScene === 1000) {
    $.ajax({
      url: "in.csv",
      dataType: "text"
    }).done(successFunction);

    function successFunction(data) {
      var allRows = data.split(/\r?\n|\r/);
      var table = "<table>";
      for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        countLetters = Object.keys(table).length;
        if (singleRow === 0) {
          table += "<thead>";
          table += "<tr>";
        } else {
          table += "<tr>";
        }
        var rowCells = allRows[singleRow].split("%");
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
          if (singleRow === 0) {
            console.log("woa");
          } else {
            table += '<div class="comment" id="comment';
            table += singleRow;
            table += '">';
            table += rowCells[rowCell];
            table += "</div>";
            // console.log(Object.keys(table).length - countLetters)
            console.log(singleRow);
          }
        }
        if (singleRow === 0) {
          table += "</tr>";
          table += "</thead>";
          table += "<tbody>";
        } else {
          table += "</tr>";
        }
      }
      table += "</tbody>";
      table += "</table>";
      $(".comment-grid").append(table);
    }
  }
}




function showStressFormular() {
  domElement.glitchStressFormular.style.display = "block";
  document.querySelector("#show-formular-button").style.display = "none";
  document.querySelector("#hide-formular-button").style.display = "block";
}

function hideStressFormular() {
  domElement.glitchStressFormular.style.display = "none";
  document.querySelector("#show-formular-button").style.display = "block";
  document.querySelector("#hide-formular-button").style.display = "none";
}



////////////////////////////////////////////////////////////////
// ID's ////////////////////////////////////////////////////////

function idValentino() {
  document.querySelector("#id-valentino").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.6;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID VALENTINO")
}

function idLawrence() {
  document.querySelector("#id-lawrence").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.7;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID Lawrence")
}

function idMercy() {
  document.querySelector("#id-mercy").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.6;
  document.querySelector(".info-icon-sound").play();
  document.querySelector(".info-icon-sound").loop = false;
  console.log("ID Mercy")
}

function idBarbara() {
  document.querySelector("#id-barbara").style.display = "block";
  document.querySelector(".info-icon-sound").currentTime = 0;
  document.querySelector(".info-icon-sound").volume = 0.7;
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
  document.querySelector(".delete-key").volume = 0.5;
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
  strings: ["Stress has many shades.", "My job is to visit people from time to time and increase their stress level."],
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
  strings: ["GREAT!", "Here we are...", "the first person of the day."],
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
  strings: ["I know... assistant! Do me a favour, turn off the other alarms."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#whisper1", {
  cursor: false,
  strings: ["keep on sleeping, you still have plenty of time."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk1", {
  cursor: false,
  strings: ["Nooo, how did I not hear the other alarm clocks?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#valentino-talk2", {
  cursor: false,
  strings: ["I'm so late, what will they think of me in the hospital? Such a bad impression…."],
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
  strings: ["Seems like we will have someone else to bother."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase12", {
  cursor: false,
  strings: ["I can smell potential here. Hehehe!", "This guy needs some stimulation."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase13", {
  cursor: false,
  strings: ["He is going to a job interview. He has to earn money for his studies."],
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

new TypeIt("#outside-the-office-phrase", {
  cursor: false,
  strings: ["Arrived at the office."],
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
  strings: ["after the nap"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase21", {
  cursor: false,
  strings: ["He will be walking back to his house miserably... ", "I also swapped his exam dates in the calendar, hehehehehe. ", "I'm done with him for today. Let’s enter the office. "],
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
  strings: [" Let's check her To-Do list.", "So far, she had two job interviews."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase24", {
  cursor: false,
  strings: ["She does not seem overwhelmed by this schedule. It’s not easy to unsettle her.", "I will have to come up with some personal stuff."],
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
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase27", {
  cursor: false,
  strings: ["hehe, now we have got her into trouble."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#mercy-talk1a", {
  cursor: false,
  strings: ["I need a break!"],
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
  strings: ["Hello, Can I have a cup of tea and a sandwich to-go please?"],
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
  strings: ["Let’s upset her!"],
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
  strings: ["Ohhh I’m so sorry, I don’t know what happened, let me help you…"],
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
  strings: ["Well, well, well, we pissed her off. ", "Mercy’s day is no longer as perfect as she thought."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase30", {
  cursor: false,
  strings: ["Who do we have here? Poor little thing, I think we already caused her some trouble."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase31", {
  cursor: false,
  strings: ["Maybe you did not notice earlier, but I moved the security camera to Barbara", "The supervisor has seen the whole mess scene... I am sure he will call very soon."],
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
  strings: ["and: your colleague is sick and you'll have to do a double shift. I hope you don't have better plans."],
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
  strings: ["I think she had something planned... Oops!", "Anyway, we deserve a break now, stressing others is stressful. Call me in a few hours! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// siesta 3
new TypeIt("#siesta-time-phrase", {
  cursor: false,
  strings: ["enjoying the siesta"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase33", {
  cursor: false,
  strings: ["Hello again! That was such a good nap!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase34", {
  cursor: false,
  strings: ["Happy hour, cheap drinks... The bar will be sooo full.", "That's a great idea!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#a-happy-hour-later-phrase", {
  cursor: false,
  strings: ["A happy hour later"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// adding many people to bar

new TypeIt("#phrase35", {
  cursor: false,
  strings: ["Oh look who's back again...", "Valentino, the sleeping beauty! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

/// valentino at bar
new TypeIt("#valentino-talk3", {
  cursor: false,
  strings: ["Hii ! Quick question…", "I broke my phone in a rush. Would you let me use your phone to check the bus number to go home?"],
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
  strings: ["That's really nice of you, thank you very much! "],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase36", {
  cursor: false,
  strings: ["Wait? What? Are we in a romantic comedy now?"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase37", {
  cursor: false,
  strings: ["We should switch back to Valentino, let’s follow him!"],
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
  strings: ["ufff...That was a long day. I'm going straight to bed."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase38", {
  cursor: false,
  strings: ["soooo, the demotivational quotes worked pretty well with Lawrence. Make sure, Valentino noticed all of them."

  ],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase39", {
  cursor: false,
  strings: ["Good, these thoughts won’t let him sleep for a while. "],
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



new TypeIt("#outro1", {
  cursor: false,
  strings: ["So, we are done for today.", "You are the best assistant I've ever had."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#outro2", {
  cursor: false,
  strings: ["I always have the assistants fill out a small form. ", "The purpose is to understand the factors that create stress in people and how they react. So I can improve my stress-producing tactics."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#outro3", {
  cursor: false,
  strings: ["Feel free to fill it out too.", "You can also scroll down to see the answers of the other stress-assistants and maybe identify yourself with some situations."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()


//WHEN RIGHT CLICK, DISABLE OPTIONS (EXAMPLE: SAVE IMAGE AS... ETC)

// var message = 'Your message here.';

// function disableClick(e) {
//   var message = 'I AM WORKING HERE, DO NOT STEAL MY STUFF';
//   if (document.all) {
//     if (((event.button == 2) || (event.button == 3)) && ((event.srcElement.tagName == "IMG") || (event.srcElement.getAttribute("type").toUpperCase() == "IMAGE"))) {
//       if (event.srcElement.oncontextmenu) {
//         event.srcElement.oncontextmenu = function (event) {
//           if (event.preventDefault) {
//             event.preventDefault();
//           };
//           if (event.stopPropagation) {
//             event.stopPropagation();
//           };
//           if (event.returnValue) {
//             event.returnValue = false;
//           };
//         };
//       } else {

//         if (event.srcElement.addEventListener) {
//           event.srcElement.addEventListener("contextmenu", function (event) {
//               if (event.preventDefault) {
//                 event.preventDefault();
//               };
//               if (event.stopPropagation) {
//                 event.stopPropagation();
//               };
//               if (event.returnValue) {
//                 event.returnValue = false;
//               };
//             }

//           );
//         } else if (event.srcElement.attachEvent) {
//           event.srcElement.attachEvent("contextmenu", function (event) {
//               if (event.preventDefault) {
//                 event.preventDefault();
//               };
//               if (event.stopPropagation) {
//                 event.stopPropagation();
//               };
//               if (event.returnValue) {
//                 event.returnValue = false;
//               };
//             }

//           );
//         };

//       };

//       alert(message);
//       return false;
//     };
//   } else if (document.layers)

//   {
//     if ((e.which == 2) || (e.which == 3)) {

//       if (e.target.oncontextmenu) {
//         e.target.oncontextmenu = function (e) {
//           if (e.preventDefault) {
//             e.preventDefault();
//           };
//           if (e.stopPropagation) {
//             e.stopPropagation();
//           };
//           if (e.returnValue) {
//             e.returnValue = false;
//           };
//         };
//       } else {

//         if (e.target.addEventListener) {
//           e.target.addEventListener("contextmenu", function (e) {
//               if (e.preventDefault) {
//                 e.preventDefault();
//               };
//               if (e.stopPropagation) {
//                 e.stopPropagation();
//               };
//               if (e.returnValue) {
//                 e.returnValue = false;
//               };
//             }

//           );
//         };


//       };


//       alert(message);
//       return false;
//     };
//   } else if (document.getElementById)

//   {
//     if (((e.which == 2) || (e.which == 3)) && ((e.target.tagName == "IMG") || (e.target.getAttribute("type") && e.target.getAttribute("type").toUpperCase() == "IMAGE"))) {

//       if (e.target.oncontextmenu) {
//         e.target.oncontextmenu = function (e) {
//           if (e.preventDefault) {
//             e.preventDefault();
//           };
//           if (e.stopPropagation) {
//             e.stopPropagation();
//           };
//           if (e.returnValue) {
//             e.returnValue = false;
//           };
//         };
//       } else {

//         if (e.target.addEventListener) {
//           e.target.addEventListener("contextmenu", function (e) {
//               if (e.preventDefault) {
//                 e.preventDefault();
//               };
//               if (e.stopPropagation) {
//                 e.stopPropagation();
//               };
//               if (e.returnValue) {
//                 e.returnValue = false;
//               };
//             }

//           );
//         };


//       };


//       alert(message);
//       return false;

//     };
//   };

// };

// function associateImages() {
//   for (i = 0; i < document.images.length; i++) {
//     document.images[i].onmousedown = disableClick;
//   };

// };

// if (document.all) {
//   if (document.onmouseup) {
//     document.onmouseup = disableClick;
//   } else {
//     window.onmouseup = disableClick;
//   };

// } else if (document.getElementById) {
//   if (document.onmousedown) {
//     document.onmousedown = disableClick;
//   } else {
//     window.onmousedown = disableClick;
//   };

// } else if (document.layers) {
//   associateImages();
// };