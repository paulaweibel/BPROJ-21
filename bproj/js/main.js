//HIDDEN WORRIES OF JAVASCRIPT

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
}

let character = {
  // knot
  knot: document.querySelector("#wiggle"),
  backgroundKnot: document.querySelector("#back-wiggle"),
  knotLasso: document.querySelector("#knotLasso"),
  // valentino
  valentino: document.querySelector("#valentino"),
  valentino1: document.querySelector("#valentino-1"),
  valentino2: document.querySelector("#valentino-2"),
  valentino3: document.querySelector("#valentino-3"),
  valentino4: document.querySelector("#valentino-4"),
  valentino5: document.querySelector("#valentino-5"),
  valentino6: document.querySelector("#valentino-6"),
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
  // barbara
  barbara: document.querySelector("#barbara"),
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
  whisper1: document.querySelector("#whisper1"),
  phrase10: document.querySelector("#phrase10"),
  phrase11: document.querySelector("#phrase11"),
  phrase12: document.querySelector("#phrase12"),
  phrase13: document.querySelector("#phrase13"),
  phrase14: document.querySelector("#phrase14"),
  whisper2: document.querySelector("#whisper2"),
  whisper3: document.querySelector("#whisper3"),
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
  // people
  peopleTalk: document.querySelector("#people-talk"),
  valentinoTalk1: document.querySelector("#valentino-talk1"),
  valentinoTalk2: document.querySelector("#valentino-talk2"),
  mercyTalk1: document.querySelector("#mercy-talk1"),
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
}

////////////////////////////////////////////////////////////////
///// LOADING BAR //////////////////////////////////////////////

function alarm() {
  console.log("background is loaded")
}

//PRELOAD JS
let progress = document.getElementById("progress");
let startPage = document.getElementById("start-page");
let hi = document.querySelector("#title-button");

var queue = new createjs.LoadQueue(false);

queue.on("progress", event => {
  let progress = Math.floor(event.progress * 50);
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
const MINIMUM_MOUSE_MOVE_TIME = 2000;
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

const eyes = document.querySelector('.eyes');
window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX + sLeft) / 100;
  const y = -(window.innerHeight / 2 - evt.pageY + scrollLocation) / 100;
  eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

////////////////////////////////////////////////////////////////
// SCROLL MEMORY ///////////////////////////////////////////////

let scrollLocation = 0;
let sLeft = 0;
let ticking = false;

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
  if (variable.visible === 1 || variable.visible === 3) {
    variable.visible = 0;
    domElement.body.style.overflowY = "visible";
    domElement.body.style.background = "#fafafa";
    document.querySelector("#title-dark").classList.add("titleBright");
    document.querySelector("#about-content").classList.add("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--schwarz)";
    domElement.about.style.color = "var(--schwarz)";
    character.knot.classList.add("knotTitle");
  } else {
    variable.visible = 3;
    domElement.body.style.overflowY = "hidden";
    domElement.body.style.background = "#0c0c0c";
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
  // BED second sentence valentino
  if (variable.currentScene === 9.5) {
    scene9a();
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
  // SCENE 20
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
  // SCENE 25
  if (variable.currentScene === 25) {
    scene25();
  }
  // SCENE 26
  if (variable.currentScene === 26) {
    scene26();
  }
  // SCENE 27
  if (variable.currentScene === 27) {
    scene27();
  }
  // SCENE 27
  if (variable.currentScene === "goBarbara") {
    goBarbara();
  }
  console.log("Scene: " + variable.currentScene + ", I am at: " + scrollY);
});

// SCENE 1: You don't usually see me, but I decided to make an exception this time.
function scene1() {
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
domElement.helpNo.addEventListener('mouseenter', function () {
  domElement.helpYes.style.marginLeft = "20vh";
});
domElement.helpNo.addEventListener('mouseleave', function () {
  domElement.helpYes.style.marginLeft = "0vh";
});

//// (YES)
domElement.helpButtons.addEventListener('click', function () {
  goValentino();
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
  document.querySelector(".ambience-apartment").currentTime = 0;
  document.querySelector(".ambience-apartment").play();
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
  character.knot.classList.add("knotValentinoObserve");
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
  character.valentino2.style.display = "block";
  character.valentino1.style.display = "none";
  document.querySelector("#valentino-info").style.display = "none";
  setTimeout(() => {
    variable.currentScene = 8;
  }, 500)
}

// SCENE 8 (white Phone was clicked) it's up to you, turn off the other alarms
function scene8() {
  character.valentino2.style.display = "none";
  character.valentino3.style.display = "block";
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
    character.valentino2.style.display = "none";
    character.valentino3.style.display = "block";

    // smooth fade-out phonescreen
    setTimeout(() => {
      scene.whitePhoneScreen.style.display = "none";
    }, 500)
    character.backgroundKnot.classList.add("showWhisperKnotValentino");
    text.backWhisper.classList.add("showWhisperKnotValentino");

    // speechbubble "keep on sleeping, you still have plenty of time…"
    setTimeout(() => {
      text.backWhisper.classList.add("showWhisperRight");
    }, 2000)

    // go to black
    setTimeout(() => {
      text.backWhisper.classList.remove("showWhisperRight");
      character.knot.style.opacity = "0";
    }, 5000)

    // show one hour later
    setTimeout(() => {
      document.querySelector(".ambience-apartment").pause();
      document.querySelector("#one-hour-later").style.display = "block";
      text.whisper1.style.display = "none";
      domElement.spotlight.style.display = "none";
      text.backWhisper.classList.remove("showWhisperKnotValentino");
      character.backgroundKnot.classList.remove("showWhisperKnotValentino");
      text.phrase10.style.display = "block";
    }, 5500)


    setTimeout(() => {
      document.querySelector("#one-hour-later").style.opacity = "0";
      character.knot.classList.add("knotTrumpet");
      character.knot.style.opacity = "1";
    }, 8000)

    // trumpet!!!!
    setTimeout(() => {
      document.querySelector(".trumpet-sound").currentTime = 0;
      document.querySelector(".trumpet-sound").play();
      document.querySelector("#one-hour-later").style.display = "none";
      document.querySelector("#trumpet-container").style.display = "block";
      document.querySelector("#wake-up-scream1").style.display = "block";
      document.querySelector("#wake-up-scream2").style.display = "block";
      variable.currentScene = 9.5;
      text.phrase10.style.display = "none";
      domElement.knotTalkingRight.classList.add("bubbleGrow");
      text.peopleTalk.classList.add("bubbleGrow");
      text.valentinoTalk1.style.display = "block";
      character.valentino4.style.display = "block";
      character.valentino3.style.display = "none";
    }, 8500)
  }
}

// SCENE 9A SECOND SENTENCE VALENTINO
function scene9a() {
  text.valentinoTalk1.style.display = "none";
  text.valentinoTalk2.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 10;
  }, 200)
}

// SCENE 10: VALENTINO RUN HORIZONTAL!!
function scene10() {
  document.querySelector(".trumpet-sound").pause();
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
  character.valentino4.style.display = "none";
  character.valentino5.style.display = "block";
  scene.cinematicEffect.style.display = "block";
  document.querySelector("#line-floor-valentino").style.display = "none";
  scene.horizontalScrollContainer.style.display = "block";
  document.querySelector(".bus-container").style.display = "block";
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
    character.valentino6.style.display = "none";
    character.valentino6.classList = "valentino-run";
    character.valentino5.classList = "valentino-run";
    scene.bus.classList = "";
    character.knot.classList.remove("knotValentinoRunMiddle");
  }
  // 2. horizontal scroll valentino  
  if (sLeft > 1.5 * window.innerWidth) {
    character.valentino6.style.display = "block";
    character.valentino5.style.opacity = "0";
  } else {
    character.valentino5.style.opacity = "1";
    character.valentino6.style.display = "none";
  }

  // 3. horizontal scroll valentino  
  if (sLeft > 2.5 * window.innerWidth) {
    character.valentino6.classList.add("valentinoMiddle");
    character.valentino5.classList.add("valentinoMiddle");
  } else {
    character.valentino6.classList.remove("valentinoMiddle");
    character.valentino5.classList.remove("valentinoMiddle");
  }

  // 4. horizontal scroll valentino  
  if (sLeft > 2.8 * window.innerWidth) {
    text.phrase11.style.display = "block";
    character.valentino5.classList.add("valentinoLeaves");
    character.valentino6.classList.add("valentinoLeaves");
    character.knot.classList.add("knotValentinoRunEnd");
    scene.bus.classList.add("driveAway");
  } else {
    text.phrase11.style.display = "none";
    character.valentino5.classList.remove("valentinoLeaves");
    character.valentino6.classList.remove("valentinoLeaves");
    character.knot.classList.remove("knotValentinoRunEnd");
    scene.bus.classList.remove("driveAway");
  }
}

// SCENE 11 (ID of LAWRENCE WAS OBSERVED) It looks like this guy needs some stimulation.
function goLawrence() {
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
  variable.currentScene = 15;
  setTimeout(() => {
    scene.busOutside.style.display = "none";
  }, 2000)
}

// SCENE 15 "whisper"
function scene15() {
  showWhisperLeft();
  text.whisper2.style.display = "block";
  character.backgroundKnot.classList.add("showWhisperKnotLawrence");
  text.backWhisper.classList.add("showWhisperKnotLawrence");
  text.phrase14.style.display = "none";
  character.knot.classList.add("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 16;
    character.lawrence2a.style.display = "none";
    character.lawrence2b.style.display = "block";
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
    // scene 19
    setTimeout(() => {
      text.phrase18.style.display = "none";
      document.querySelector("#looser-scream-box").style.display = "block";
      document.querySelector(".ambience-bus").pause();
      variable.currentScene = 20;
    }, 2000)
  }
}

//SCENE 19 // LOOOOOOOSER TEXT BIG
function scene19() {
  console.log("change to scene 20 automaticly")
}

// SCENE 20 LAWRENCE WALKING TO BUILDING
function scene20() {
  document.querySelector("#looser-scream-box").style.display = "none";
  character.lawrence2a.style.display = "none";
  character.lawrence2b.style.display = "none";
  character.lawrence2c.style.display = "none";
  character.lawrence2d.style.display = "none";
  scene.busInside.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 0;
    character.lawrence3.style.display = "block";
    scene.officeBuilding.style.display = "block";
    document.querySelector(".ambience-street-afternoon").currentTime = 0;
    document.querySelector(".ambience-street-afternoon").play();
  }, 200)
  setTimeout(() => {
    document.querySelector(".ambience-street-afternoon").pause();
    character.mercy.style.display = "block";
    text.peopleTalk.classList.add("bubbleGrow");
    text.peopleTalk.classList.add("mercy-goodmorning");
    text.mercyTalk1.style.display = "block";
    text.phrase19.style.display = "block";
    character.knotLasso.style.display = "block";
    character.knot.classList.add("knotWaitingroom");
    character.lawrence3.style.display = "none";
    character.lawrence4a.style.display = "block";
    scene.officeBuilding.style.display = "none";
    scene.waitingRoom1.style.display = "block";
    scene.clock0930.style.display = "block";
    variable.currentScene = 21;
  }, 3000)
}

// SCENE 22 LAWRENCE START FALLING
function scene21() {
  document.querySelector(".knotLassoPath").style.strokeDashoffset = "0";
  text.phrase19.style.display = "none";
  text.peopleTalk.classList.remove("bubbleGrow");
  text.peopleTalk.classList.remove("mercy-goodmorning");
  text.mercyTalk1.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 0;
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "block";
    document.querySelector(".knotLassoPath").style.strokeDashoffset = "calc(30vw + 30vh)";
    character.knot.classList.add("knotWaitingroom-AfterLasso");
  }, 1000)
  setTimeout(() => {
    character.mercy1a.style.display = "none";
    character.mercy1b.style.display = "block";
    character.lawrence4a.style.display = "none";
    character.lawrence4b.style.display = "none";
    character.lawrence4c.style.display = "block";
    variable.currentScene = 22;
  }, 2000)
}


// SCENE 24 LAWRENCE WALKING AFTER FALL
function scene22() {
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
  eyes.style.display = "None";
  scene.waitingRoom2.style.display = "block";
  scene.waitingRoom1.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 0;
  }, 200)
  setTimeout(() => {
    document.querySelector("#one-hour-later").style.display = "block";
    text.phrase20.style.display = "none";
    text.phrase10.style.display = "block";
    scene.clock0930.style.display = "none";
    scene.clock11.style.display = "block";
  }, 3000)
  setTimeout(() => {
    document.querySelector("#one-hour-later").style.display = "none";
    text.phrase10.style.display = "none";
  }, 5000)
  setTimeout(() => {
    scene.waitingRoom2.style.display = "none";
    scene.waitingRoom1.style.display = "block";
    character.lawrence5.style.display = "block";
  }, 6000)
  setTimeout(() => {
    eyes.style.display = "block";
    text.phrase21.style.display = "block";
    variable.currentScene = 26;
  }, 8000)

}


function scene26() {
  goMercy();
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
    variable.currentScene = 27;
  }, 200)
}

function scene27() {
  text.phrase22.style.display = "block";
  character.mercy3a.style.display = "none";
  character.mercy3b.style.display = "block";
  setTimeout(() => {
    document.querySelector("#info-icon-mercy").style.display = "block";
  }, 1000)
  setTimeout(() => {
    variable.currentScene = 28;
  }, 200)
}

function scene28() {
  text.phrase22.style.display = "none";
  document.querySelector("#info-icon-mercy").style.display = "none";
  // to do list stuff here, nachher:
  moveMercysWindow();
}


// DRAGGING MERCYS WINDOW
var container = document.querySelector("#window-move");
var activeItem = null;
var active = false;

function moveMercysWindow() {
  text.phrase26.style.display = "block";
  document.querySelector("#dragQueen").classList.add("drag-cursor");

  // drag window
  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);
  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);
}

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
        console.log("doing something!");
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


// SCENE wind blowed
function mercyChaos() {
  text.phrase26.style.display = "None";
  document.querySelector("#dragQueen").classList.remove("drag-cursor");
  character.mercy3c.style.display = "block";
  character.mercy3a.style.display = "none";
  character.mercy3b.style.display = "none";
  scene.windowFix.style.display = "block";
  scene.windowMove.style.display = "block";
  character.knot.classList.add("knotMercy")
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
  character.valentino.style.display = "none";
  character.lawrence.style.display = "none";
  character.mercy.style.display = "none";
  domElement.body.style.height = "10000vh"
  window.scrollTo(0, 25000);
  // stop horizontal scroll
  domElement.body.style.overflow = "hidden";
  domElement.body.style.overflowX = "hidden";
  domElement.body.style.overflowY = "hidden";
  //
  text.phrase27.style.display = "none";
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

////////////////////////////////////////////////////////////////
// ID's ////////////////////////////////////////////////////////

function idValentino() {
  document.querySelector("#id-valentino").style.display = "block";
  console.log("ID VALENTINO")
}

function idLawrence() {
  document.querySelector("#id-lawrence").style.display = "block";
  console.log("ID Lawrence")
}

function idMercy() {
  document.querySelector("#id-mercy").style.display = "block";
  console.log("ID Mercy")
}

function idBarbara() {
  document.querySelector("#id-barbara").style.display = "block";
  console.log("ID Barbara")
}

function hideId() {
  document.querySelector("#id-valentino").style.display = "none";
  document.querySelector("#id-lawrence").style.display = "none";
  document.querySelector("#id-mercy").style.display = "none";
  document.querySelector("#id-barbara").style.display = "none";
  console.log("hide ID")
}


////////////////////////////////////////////////////////////////
// TYPING ANIMATIONS FOR ALLL THE TEXTS: ///////////////////////


new TypeIt("#phrase1", {
  startDelay: 1000,
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
  strings: ["GREAT!", "Here we are, the first person of the day"],
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
  strings: ["What can we do for him?", "Mhhhh"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase8", {
  cursor: false,
  strings: ["it's up to you, turn off the other alarms."],
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
  strings: ["I'm so late, what will they think of me in the hospital Such a bad impression…."],
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
  strings: ["It looks like this guy needs some stimulation."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase13", {
  cursor: false,
  strings: ["He is going to a job interview.", "He needs to earn money for his studies."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase14", {
  cursor: false,
  strings: ["I know what to do… watch and learn."],
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
  strings: ["Assistant, let’s see what you have learned so far.", "Delete the three motivational thoughts:"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase18", {
  cursor: false,
  strings: ["Good, I have my thoughts now"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase19", {
  cursor: false,
  strings: ["Here, come on, give me a hand."],
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
  strings: ["So far, she already had four job interviews, and the day is still long. Let's check her To-Do list."],
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
  strings: ["Think, think, think 💭"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase26", {
  cursor: false,
  strings: ["She’s distracted. Assistant, she needs some fresh air!"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase27", {
  cursor: false,
  strings: ["hehe, now I've got her into trouble."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()