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
  bubbleRight: document.querySelector("#speechbubble-big-right"),
  knotTalkingLeft: document.querySelector("#knot-talking-left"),
  bubbleLeft: document.querySelector("#speechbubble-big-left"),
  helpYes: document.querySelector("#help-yes"),
  helpNo: document.querySelector("#help-no"),
  helpButtons: document.querySelector("#help-button"),
  spotlight: document.querySelector("#spotlight"),
}

let character = {
  // knot
  knot: document.querySelector("#wiggle"),
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
}

let text = {
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
  phrase9: document.querySelector("#phrase9"),
  phrase10: document.querySelector("#phrase10"),
  phrase11: document.querySelector("#phrase11"),
  phrase12: document.querySelector("#phrase12"),
  phrase13: document.querySelector("#phrase13"),
  phrase14: document.querySelector("#phrase14"),
  phrase15: document.querySelector("#phrase15"),
  phrase16: document.querySelector("#phrase16"),
  phrase17: document.querySelector("#phrase17"),
  phrase18: document.querySelector("#phrase18"),
  phrase19: document.querySelector("#phrase19"),
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

function goValentino() {
  console.log("go to valentino doesnt exist")
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
  }, 500)
})

queue.on("fileload", handleFileComplete);
queue.loadFile("./img/background.png");


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
    domElement.bubbleRight.classList.remove("bubbleGrow");
    domElement.scrollIcon.classList.remove("scroll-icon-after");
    variable.currentScene = 0;
  }

  // 100 PX, "HELLO I'M STRESS KNOT" (MOVE KNOT, ADD SPEECHBUBBLE, REMOVE SCROLL ARROW)
  if (scrollLocation > 100) {
    domElement.intro.style.display = "block";
    domElement.titleBox.classList.add("titleUp");
    domElement.titleButton.classList.add("ropeUp");
    domElement.homeButton.classList.add("showHome");
    domElement.bubbleRight.classList.add("bubbleGrow");
    domElement.scrollIcon.classList.add("scroll-icon-after");
    character.knot.classList.add("knotIntro");
    domElement.knotTalkingRight.classList.add("bubbleGrow");
    text.knotText.style.display = "block";
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
    domElement.bubbleRight.classList.remove("bubbleGrow");
    domElement.helpButtons.style.display = "none";
  } else {
    domElement.titleBox.style.display = "block";
    domElement.titleButton.style.display = "block";
    domElement.bubbleRight.classList.add("bubbleGrow");
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
  // SCENE 22
  if (variable.currentScene === 24) {
    scene24();
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
  domElement.intro.style.display = "none";
  domElement.helpButtons.style.display = "none";
  domElement.body.style.overflowY = "hidden";
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 10000);
  domElement.assets.style.display = "block";
  domElement.spotlight.style.display = "block";
  variable.currentScene = 5;
});

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
    domElement.knotTalkingLeft.classList.add("bubbleGrow");
    domElement.bubbleLeft.classList.add("bubbleGrow");
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
  document.querySelector(".alarm-clock1").currentTime = 0;
  document.querySelector(".alarm-clock1").pause();
  document.querySelector(".alarm-clock2").currentTime = 0;
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
  domElement.knotTalkingLeft.classList.remove("bubbleGrow");
  domElement.bubbleLeft.classList.remove("bubbleGrow");
  character.knot.classList.add("knotValentinoDisappear");
  variable.toggleCount = variable.toggleCount + 1;
  //check if its finished:
  if (variable.toggleCount === 4) {
    text.phrase9.style.display = "block";
    scene.alarmToggles.style.display = "none";
    scene.whitePhoneScreen.style.opacity = "0";
    character.valentino2.style.display = "none";
    character.valentino3.style.display = "block";

    // smooth fade-out phonescreen
    setTimeout(() => {
      scene.whitePhoneScreen.style.display = "none";
    }, 500)
    character.knot.classList.add("knotValentinoAppear");

    // speechbubble "keep on sleeping, you still have plenty of time…"
    setTimeout(() => {
      domElement.bubbleLeft.style.display = "block";
      domElement.knotTalkingLeft.classList.add("bubbleGrow");
      domElement.bubbleLeft.classList.add("bubbleGrow");
    }, 2000)

    // go to black
    setTimeout(() => {
      domElement.knotTalkingLeft.classList.remove("bubbleGrow");
      domElement.bubbleLeft.classList.remove("bubbleGrow");
      character.knot.style.opacity = "0";
    }, 5000)

    // show one hour later
    setTimeout(() => {
      document.querySelector("#one-hour-later").style.display = "block";
      text.phrase9.style.display = "none";
      text.phrase10.style.display = "block";
    }, 5500)

    // hide one hour later
    setTimeout(() => {
      document.querySelector("#one-hour-later").style.opacity = "0";
      document.querySelector("#trumpet-container").style.display = "block";
      character.knot.classList.add("knotTrumpet");
      character.knot.style.opacity = "1";
    }, 8000)

    // trumpet!!!!
    setTimeout(() => {
      document.querySelector(".trumpet-sound").currentTime = 0;
      document.querySelector(".trumpet-sound").play();
      document.querySelector("#wake-up-scream1").style.display = "block";
      document.querySelector("#wake-up-scream2").style.display = "block";
      variable.currentScene = 10;
      text.phrase10.style.display = "none";
      document.querySelector("#one-hour-later").style.display = "none";
      domElement.spotlight.style.display = "none";
      domElement.knotTalkingRight.classList.add("bubbleGrow");
      domElement.bubbleRight.classList.add("bubbleGrow");
      character.valentino4.style.display = "block";
      character.valentino3.style.display = "none";
    }, 8500)
  }
}

// SCENE 10: VALENTINO RUN HORIZONTAL!!
function scene10() {
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
  document.querySelector(".trumpet-sound").currentTime = 0;
  document.querySelector(".trumpet-sound").pause();

  document.querySelector("#wake-up-scream1").style.display = "none";
  document.querySelector("#wake-up-scream2").style.display = "none";

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

function runToBus() {
  // 1. horizontal scroll valentino  
  if (sLeft > 1) {
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
    text.phrase11.display = "block";
    character.valentino5.classList.add("valentinoLeaves");
    character.valentino6.classList.add("valentinoLeaves");
    character.knot.classList.add("knotValentinoRunEnd");
    scene.bus.classList.add("driveAway");
  } else {
    text.phrase11.display = "none";
    character.valentino5.classList.remove("valentinoLeaves");
    character.valentino6.classList.remove("valentinoLeaves");
    character.knot.classList.remove("knotValentinoRunEnd");
    scene.bus.classList.remove("driveAway");
  }
}

// SCENE 11 (ID of LAWRENCE WAS OBSERVED) It looks like this guy needs some stimulation.
function goLawrence() {
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
  domElement.body.style.overflowY = "visible";
}


// SCENE 12 "He is going to a job interview."
function scene12() {
  text.phrase13.style.display = "block";
  text.phrase12.style.display = "none";
  setTimeout(() => {
    variable.currentScene = 13;
  }, 200)
}

// SCENE 13 change to bus
function scene13() {
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
  domElement.knotTalkingLeft.classList.add("bubbleGrow");
  scene.busOutside.classList.add("busOutsideAway");
  text.phrase14.style.display = "block";
  setTimeout(() => {
    variable.currentScene = 15;
  }, 200)
}

// SCENE 15 "whisper"
function scene15() {
  text.phrase15.style.display = "block";
  text.phrase14.style.display = "none";
  character.lawrence2a.style.display="none";
  character.lawrence2b.style.display="block";
  character.knot.classList.add("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 16;
  }, 200)
}

// SCENE 16 "whisper"
function scene16() {
  text.phrase16.style.display = "block";
  text.phrase15.style.display = "none";
  character.lawrence2b.style.display="none";
  character.lawrence2c.style.display="block";
  character.knot.classList.add("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 17;
  }, 200)
}

// SCENE 17 motivational quotes
function scene17() {
  text.phrase17.style.display = "block";
  text.phrase16.style.display = "none";
  character.lawrence2c.style.display="none";
  character.lawrence2d.style.display="block";
  document.querySelector("#motivational-quotes").style.display = "block";
  character.knot.classList.remove("knotLawrenceBus");
  setTimeout(() => {
    variable.currentScene = 18;
  }, 200)
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
  variable.motCount = variable.motCount + 1;
  if (variable.motCount === 3) {
    text.phrase18.style.display = "block";
    setTimeout(() => {
      variable.currentScene = 19;
    }, 200)
  }
}

//SCENE 19 // LOOOOOOOSER TEXT BIG
function scene19() {
  text.phrase18.style.display = "none";
  document.querySelector("#looser-scream-box").style.display = "block";
  setTimeout(() => {
    variable.currentScene = 20;
  }, 200)
}

// SCENE 20 LAWRENCE WALKING TO BUILDING
function scene20() {
  document.querySelector("#looser-scream-box").style.display = "none";
  character.lawrence3.style.display="block";
  character.lawrence2d.style.display="none";
  scene.busInside.style.display="none";
  scene.officeBuilding.style.display="block";
  setTimeout(() => {
    variable.currentScene = 21;
  }, 200)
}

function scene21() {
  character.knotLasso.style.display="block";
  character.lawrence3.style.display="none";
  character.lawrence4a.style.display="block";
  scene.officeBuilding.style.display="none";
  scene.waitingRoom1.style.display="block";
  setTimeout(() => {
    variable.currentScene = 22;
  }, 200)
}

function scene22() {
  character.lawrence4a.style.display="none";
  character.lawrence4b.style.display="block";
  setTimeout(() => {
    variable.currentScene = 23;
  }, 200)
}

function scene23() {
  character.lawrence4b.style.display="none";
  character.lawrence4c.style.display="block";
  setTimeout(() => {
    variable.currentScene = 24;
  }, 200)
}

function scene24() {
  character.lawrence4c.style.display="none";
  character.lawrence4d.style.display="block";
  setTimeout(() => {
    variable.currentScene = 25;
  }, 200)
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

new TypeIt("#phrase9", {
  cursor: false,
  strings: ["keep on sleeping, you still have plenty of time…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase10", {
  cursor: false,
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
  strings: ["I know what to do… watch and learn (assistant)"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase15", {
  cursor: false,
  strings: ["It's time to get nervous now. You'll ruin everything at the interview."],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase16", {
  cursor: false,
  strings: ["Why should they hire you? A poor student with no experience…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase17", {
  cursor: false,
  strings: ["Assistant, let’s see what you have learned so far. Delete the three motivational quotes:"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase18", {
  cursor: false,
  strings: ["Good, I have my quotes now"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase19", {
  cursor: false,
  strings: ["…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

// new TypeIt("#phrase13", {
//   cursor: false,
//   speed: variable.textspeed,
//   waitUntilVisible: true,
// }).go()