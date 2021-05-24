//HIDDEN WORRIES OF JAVASCRIPT

////////////////////////////////////////////////////////////////
//// GLOBAL VARIABLES //////////////////////////////////////////

let variable = {
  currentScene: 0,
  toggleCount: 0,
  moveflag: false,
  visible: 1,
  textspeed: 20,
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
  knot: document.querySelector("#wiggle"),
  valentino: document.querySelector("#valentino"),
  valentino1: document.querySelector("#valentino-1"),
  valentino2: document.querySelector("#valentino-2"),
  valentino3: document.querySelector("#valentino-3"),
  valentino4: document.querySelector("#valentino-4"),
  valentino5: document.querySelector("#valentino-5"),
  valentino6: document.querySelector("#valentino-6"),
}

let scene = {
  whitePhoneScreen: document.querySelector("#valentino-phone-screen"),
  alarmToggles: document.querySelector("#valentino-toggles"),
  busOutside: document.querySelector("#bus-outside"),
  cinematicEffect: document.querySelector("#cinematic-effect"),
}

let text = {
  knotText: document.querySelector("#knot-text"),
  phrase1: document.querySelector("#phrase1"),
  phrase2: document.querySelector("#phrase2"),
  phrase3: document.querySelector("#phrase3"),
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
}

////////////////////////////////////////////////////////////////
// SIDE RELOAD /////////////////////////////////////////////////

window.onload = function checkPosition() {
  variable.currentScene = 0;
  console.log("it should scroll to 0")
  window.scrollTo(0, 0);
}

////////////////////////////////////////////////////////////////
//////// NAVIGATE //////////////////////////////////////////////

function goHome() {
  domElement.body.style.overflow = "block";
  window.scrollTo(0, 0);
  variable.currentScene = 0;
}

function goValentino() {
  window.scrollTo(0, 10000);
  variable.currentScene = 10;
}

function goLawrence() {
  window.scrollTo(0, 15000);
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
////EYES MAIN CHARACTER   //////////////////////////////////////

const eyes = document.querySelector('.eyes');
window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 100;
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
  localStorage.setItem("scrollMemory", scrollLocation);
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
    domElement.body.style.overflow = "visible";
    domElement.body.style.background = "#fafafa";
    document.querySelector("#title-dark").classList.add("titleBright");
    document.querySelector("#about-content").classList.add("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--schwarz)";
    domElement.about.style.color = "var(--schwarz)";
    character.knot.classList.add("knotTitle");
  } else {
    variable.visible = 3;
    domElement.body.style.overflow = "hidden";
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
    variable.currentScene = 1;
  }


  // setting INTRO and SPEECHBUBBLE invisible while scrolling to Storystart
  if (scrollLocation > 4000) {
    domElement.titleBox.style.display = "none";
    domElement.titleButton.style.display = "none";
    domElement.bubbleRight.classList.remove("bubbleGrow");
    domElement.helpButtons.style.display = "none";
  } else {
    domElement.titleBox.style.display = "block";
    domElement.titleButton.style.display = "block";
    domElement.bubbleRight.classList.add("bubbleGrow");
  }

  // 10000PX, STORY ENTER, domElement.assets VISIBLE
  if (scrollLocation <= 10000 && scrollLocation > 9500) {
    domElement.assets.style.display = "block";
  } else {
    domElement.assets.style.display = "none";
  }

  // 1. horizontal scroll valentino  
  if (sLeft > 1) {
    character.knot.classList.add("knotValentinoRunMiddle");
  } else {
    character.valentino6.style.display = "none";
    character.valentino6.classList = "valentino-run";
    character.valentino5.classList = "valentino-run";
    scene.busOutside.classList = "";
    character.knot.classList.remove("knotValentinoRunMiddle");
  }
  if (sLeft > 1 * window.innerWidth) {
    scene.busOutside.classList.add("driveLeft");

  } else {
    scene.busOutside.classList = "";

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
    text.phrase12.display = "none";
    text.phrase13.display = "block";
    character.valentino5.classList.add("valentinoLeaves");
    character.valentino6.classList.add("valentinoLeaves");
    character.knot.classList.add("knotValentinoRunEnd");
    scene.busOutside.classList.add("driveAway");
  } else {
    text.phrase12.display = "block";
    text.phrase13.display = "none";
    character.valentino5.classList.remove("valentinoLeaves");
    character.valentino6.classList.remove("valentinoLeaves");
    character.knot.classList.remove("knotValentinoRunEnd");
    scene.busOutside.classList.remove("driveAway");
  }

}


////////////////////////////////
// GENERAL SCENE CHANGES


// KNOT INTRO
// SCENE 1 IS BY SCROLL (hello i'm knot)
domElement.body.addEventListener('click', function () {

  // SCENE 2 you dont usally see me"
  if (variable.currentScene === 1) {
    text.phrase1.style.display = "none";
    text.phrase2.style.display = "block";
    setTimeout(() => {
      variable.currentScene = 2;
    }, 500)
  }
  // SCENE 3 (it is my responsibility to…)
  if (variable.currentScene === 2) {
    text.phrase1.style.display = "none";
    text.phrase2.style.display = "none";
    text.phrase3.style.display = "block";
    domElement.helpButtons.style.display = "block";
    setTimeout(() => {
      variable.currentScene = 3;
    }, 500)
  }
  // SCENE 4 (do you wanna help me?)
  if (variable.currentScene === 3) {
    text.phrase1.style.display = "none";
    text.phrase2.style.display = "none";
    text.phrase3.style.display = "none";
    phrase4.style.display = "block";
    domElement.helpYes.classList.add("helpUp");
    domElement.helpNo.classList.add("helpUp");
    setTimeout(() => {
      variable.currentScene = 4;
    }, 500)
  }
  // VALENTINO
  // SCENE 5 (Here we are, the first person of the day.)
  if (variable.currentScene === 5) {
    text.phrase1.style.display = "none";
    text.phrase2.style.display = "none";
    text.phrase3.style.display = "none";
    text.phrase4.style.display = "none";
    text.phrase5.style.display = "block";
    domElement.assets.style.display = "block";
    setTimeout(() => {
      variable.currentScene = 6;
    }, 500)
  }
  // SCENE 6 (let’s see what we have here)
  if (variable.currentScene === 6) {
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

  // SCENE 10 run Valentino!! 
  if (variable.currentScene === 10) {
    text.phrase11.style.display = "none";
    domElement.spotlight.style.display = "none";
    document.querySelector("#trumpet-container").style.display = "none";
    character.knot.classList = "";
    character.knot.classList.add("knotValentinoRunStart");
    character.valentino4.style.display = "none";
    character.valentino5.style.display = "block";
    scene.cinematicEffect.style.display = "block";
    document.querySelector("#line-floor-valentino").style.display = "none";
    document.querySelector("#horizontal-scroll-container").style.display = "block";
    document.querySelector(".bus-container").style.display = "block";
    // horizontaler scroll
    domElement.body.style.overflow = "hidden";
    domElement.body.style.overflowX = "hidden";
    domElement.body.style.overflowX = "visible";

    // console.log(--scrollX);
    setTimeout(() => {
      variable.currentScene = 11;
      // text.phrase12.style.display = "block";
      scene11();
    }, 200)
  }

  console.log("Scene: " + variable.currentScene + ", I am at: " + scrollY);
});

////////////////////////////////
//BUTTONS ////////////////////////////////

// SCENE 4 
// "WOULD YOU LIKE TO BE MY ASSISTENT?"

//// (NO)
domElement.helpNo.addEventListener('mouseenter', function () {
  domElement.helpYes.style.marginLeft = "20vh";
});
domElement.helpNo.addEventListener('mouseleave', function () {
  domElement.helpYes.style.marginLeft = "0vh";
});

//// (YES)
domElement.helpButtons.addEventListener('click', function () {
  console.log("helpYes");
  domElement.intro.style.display = "none";
  domElement.helpButtons.style.display = "none";
  domElement.body.style.overflow = "hidden";
  domElement.body.style.height = "10000vh";
  window.scrollTo(0, 10000);
  domElement.spotlight.style.display = "block";
  variable.currentScene = 5;
});

// SCENE 7 (Valentino ID was clicked)
function scene7() {
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

// SCENE 8 (white Phone was clicked) PLEASE DEACTIVATE THE OTHER ALARMS
function scene8() {
  text.phrase6.style.display = "none";
  text.phrase7.style.display = "none";
  text.phrase8.style.display = "block";
  scene.alarmToggles.style.display = "block";
  variable.toggleCount = 0;
  setTimeout(() => {
    variable.currentScene = 9;
  }, 500)
  setTimeout(() => {
    text.phrase8.style.opacity = "0";
    domElement.knotTalkingLeft.classList.remove("bubbleGrow");
    domElement.bubbleLeft.classList.remove("bubbleGrow");
    character.knot.classList.add("knotValentinoDisappear");
  }, 2500)
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

// all toggles off? -> ANIMATED CHANGE TO SCENE 10
function countToggle() {
  variable.toggleCount = variable.toggleCount + 1;
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

    // speechbubble "sleep on"
    setTimeout(() => {
      domElement.knotTalkingLeft.classList.add("bubbleGrow");
      domElement.bubbleLeft.classList.add("bubbleGrow");
    }, 2000)

    // go to black
    setTimeout(() => {
      domElement.knotTalkingLeft.classList.remove("bubbleGrow");
      domElement.bubbleLeft.classList.remove("bubbleGrow");
      character.knot.style.opacity = "0";
      console.log("one hour later");
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
      variable.currentScene = 10;
      text.phrase10.style.display = "none";
      text.phrase11.style.display = "block";
      document.querySelector("#one-hour-later").style.display = "none";
      domElement.spotlight.style.setProperty('--spotlightSize', '500px');
      domElement.spotlight.style.setProperty('--spotlightTransparent', '500px');
      domElement.knotTalkingRight.classList.add("bubbleGrow");
      domElement.bubbleRight.classList.add("bubbleGrow");
      character.valentino4.style.display = "block";
      character.valentino3.style.display = "none";
    }, 8500)
  }
}



// SCENE 11 CHANGE TO HORIZONTAL SCROLL
function scene11() {
  (function () {

    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      console.log(delta);
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
    strings: ["…"],
    cursor: false,
    speed: variable.textspeed,
    waitUntilVisible: true,
  }).pause(5000)
  .type("please click…")
  .go();

new TypeIt("#phrase2", {
  cursor: false,
  strings: ["…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase3", {
  cursor: false,
  strings: ["…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase4", {
  cursor: false,
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase5", {
  startDelay: 1000,
  cursor: false,
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase6", {
  startDelay: 1000,
  cursor: false,
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase7", {
  cursor: false,
  strings: ["…"],
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase8", {
  cursor: false,
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase9", {
  cursor: false,
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
  speed: variable.textspeed,
  waitUntilVisible: true,
}).go()