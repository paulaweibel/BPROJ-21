//script für beste website


////////////////////////////////////////////////////////////////
//////// NAVIGATE //////////////////////////////////////////////

function goHome() {
  body.style.overflow = "block";
  window.scrollTo(0, 0);
  currentScene = 0;
}

function goValentino() {
  window.scrollTo(0, 3700);
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
  }, 3500)
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
//// GLOBAL VARIABLES //////////////////////////////////////////

var body = document.querySelector("#body")

var w = window.innerWidth;
var h = window.innerHeight;

// var whereAmI = localStorage.getItem('scrollMemory');



// INTRO
var intro = document.querySelector("#intro");
var titleBox = document.querySelector("#title-container");
var titleButton = document.querySelector("#title-button-container");
var about = document.querySelector("#about-content");

// ASSETS
var assets = document.querySelector("#asset-container");
var knot = document.querySelector("#wiggle");
var eyeImg = document.querySelector("#eye-img");
var spotlight = document.querySelector("#spotlight");
var horizontal = document.querySelector(".horizontal-scroll");

//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");
var phrase5 = document.querySelector("#phrase5");
var phrase6 = document.querySelector("#phrase6");
var phrase7 = document.querySelector("#phrase7");
var phrase8 = document.querySelector("#phrase8");
var phrase9 = document.querySelector("#phrase9");
var phrase10 = document.querySelector("#phrase10");
var phrase11 = document.querySelector("#phrase11");


var helpYes = document.querySelector("#help-yes");
var helpNo = document.querySelector("#help-no");
var helpButtons = document.querySelector("#help-button");

var currentScene = 0;
var toggleCount = 0;




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

////////////////////////////////////////////////////////////////
// SIDE RELOAD /////////////////////////////////////////////////

window.onload = function checkPosition() {
  currentScene = 0;
  console.log("it should scroll to 0")
  window.scrollTo(0, 0);
  body.style.backgroundColor = "var(--weiss)"
}

////////////////////////////////////////////////////////////////
//SPOTLIGHT!!!//////////////////////////////////////////////////

var moveflag = false;

window.addEventListener("mousemove", (e) => {
  if (moveflag == true) {
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
  document.getElementById("spotlight").style.backgroundImage = string;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WEBSITE START ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////
//// ABOUT MENU  ///////////////

// when "about" is clicked inside title-container
function showAbout() {
  // set overlaying objects invisible
  titleButton.style.opacity = "0";
  titleBox.style.opacity = "0";
  knot.style.opacity = "0";
  //smooth fade-in
  about.style.display = "block";
  setTimeout(() => {
    about.classList.add("showAbout");
  }, 400)
}

// when "about" is clicked inside about-container
function hideAbout() {
  // smooth fade-out
  about.classList.remove("showAbout");
  setTimeout(() => {
    about.style.display = "none";
    // set overlaying objects visible
    titleButton.style.opacity = "1";
    titleBox.style.opacity = "1";
    knot.style.opacity = "1";
  }, 400)
}

////////////////////////////////
//// TITLE /////////////////////

var visible = 1;
var startControll = 1;

// CHANGE BETWEEN BLACK AND WHITE TITLE
titleButton.addEventListener('click', function () {
  if (visible === 1 || visible === 3) {
    visible = 0;
    body.style.overflow = "visible";
    document.querySelector("body").style.background = "#fafafa";
    document.querySelector("#title-dark").classList.add("titleBright");
    document.querySelector("#about-content").classList.add("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--schwarz)";
    document.querySelector("#about").style.color = "var(--schwarz)";
    knot.classList.add("knotTitle");
  } else {
    visible = 3;
    body.style.overflow = "hidden";
    document.querySelector("body").style.background = "#0c0c0c";
    document.querySelector("#title-dark").classList.remove("titleBright");
    document.querySelector("#about-content").classList.remove("whiteAbout");
    document.querySelector("#about-button").style.color = "var(--weiss)"
    document.querySelector("#about").style.color = "var(--weiss)";
    knot.classList.remove("knotTitle");
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
    intro.style.display = "none";
    titleBox.classList.remove("titleUp");
    titleButton.classList.remove("ropeUp");
    knot.className = '';
    knot.classList.add("knotStart");
    document.getElementById("knot-talking-right").classList.remove("bubbleGrow");
    document.getElementById("speechbubble-big-right").classList.remove("bubbleGrow");
    document.getElementById("scroll-icon").classList.remove("scroll-icon-after");
    currentScene = 0;
  }

  // 100 PX, "HELLO I'M STRESS KNOT" (MOVE KNOT, ADD SPEECHBUBBLE, REMOVE SCROLL ARROW)
  if (scrollLocation > 100) {
    intro.style.display = "block";
    titleBox.classList.add("titleUp");
    titleButton.classList.add("ropeUp");
    knot.classList.add("knotIntro");
    document.getElementById("knot-talking-right").classList.add("bubbleGrow");
    document.getElementById("speechbubble-big-right").classList.add("bubbleGrow");
    document.getElementById("scroll-icon").classList.add("scroll-icon-after");
    document.getElementById("knot-text").style.display = "block";
    currentScene = 1;
  }


  // setting INTRO and SPEECHBUBBLE invisible while scrolling to Storystart
  if (scrollLocation > 4000) {
    titleBox.style.display = "none";
    titleButton.style.display = "none";
    document.querySelector("#speechbubble-big-right").classList.remove("bubbleGrow");
    helpButtons.style.display = "none";
  } else {
    titleBox.style.display = "block";
    titleButton.style.display = "block";
    document.querySelector("#speechbubble-big-right").classList.add("bubbleGrow");
  }

  // 10000PX, STORY ENTER, ASSETS VISIBLE
  if (scrollLocation <= 10000 && scrollLocation > 9500) {
    assets.style.display = "block";
  } else {
    assets.style.display = "none";
  }

  // 1. horizontal scroll valentino  
  if (sLeft >= 100) {
    document.querySelector("#bus-outside").classList.add("driveLeft");
  } else {
    document.querySelector("#bus-outside").classList.remove("driveLeft");
  }

  // 2. horizontal scroll valentino  
  if (sLeft > 1.5 * window.innerWidth) {
    document.querySelector("#valentino-6").style.display = "block";
    document.querySelector("#valentino-5").style.display = "none";
  } else {
    document.querySelector("#valentino-5").style.display = "block";
    document.querySelector("#valentino-6").style.display = "none";
  }

  // 3. horizontal scroll valentino  
  if (sLeft > 2.5 * window.innerWidth) {
    document.querySelector("#valentino-6").classList.add("valentinoMiddle");
    document.querySelector("#valentino-5").classList.add("valentinoMiddle");
  } else {
    document.querySelector("#valentino-6").classList.remove("valentinoMiddle");
    document.querySelector("#valentino-5").classList.remove("valentinoMiddle");
  }

  // 4. horizontal scroll valentino  
  if (sLeft > 2.8 * window.innerWidth) {
    document.querySelector("#valentino-5").classList.add("valentinoLeaves");
    document.querySelector("#valentino-6").classList.add("valentinoLeaves");
    document.querySelector("#bus-outside").classList.add("driveAway");
  } else {
    document.querySelector("#valentino-5").classList.remove("valentinoLeaves");
    document.querySelector("#valentino-6").classList.remove("valentinoLeaves");
    document.querySelector("#bus-outside").classList.remove("driveAway");
  }
}

////////////////////////////////
// GENERAL SCENE CHANGES


// KNOT INTRO
// SCENE 1 IS BY SCROLL (hello i'm knot)
body.addEventListener('click', function () {
  console.log("Scene: " + currentScene + ", I am at: " + scrollY);

  // SCENE 2 you dont usally see me"
  if (currentScene == 1) {
    phrase1.style.display = "none";
    phrase2.style.display = "block";
    setTimeout(() => {
      currentScene = 2;
    }, 500)
  }
  // SCENE 3 (it is my responsibility to…)
  if (currentScene == 2) {
    phrase1.style.display = "none";
    phrase2.style.display = "none";
    phrase3.style.display = "block";
    helpButtons.style.display = "block";
    setTimeout(() => {
      currentScene = 3;
    }, 500)
  }
  // SCENE 4 (do you wanna help me?)
  if (currentScene == 3) {
    phrase1.style.display = "none";
    phrase2.style.display = "none";
    phrase3.style.display = "none";
    phrase4.style.display = "block";
    helpYes.classList.add("helpUp");
    helpNo.classList.add("helpUp");
    setTimeout(() => {
      currentScene = 4;
    }, 500)
  }
  // VALENTINO
  // SCENE 5 (Here we are, the first person of the day.)
  if (currentScene == 5) {
    phrase4.style.display = "none";
    phrase5.style.display = "block";
    assets.style.display = "block";
    setTimeout(() => {
      currentScene = 6;
    }, 500)
  }
  // SCENE 6 (let’s see what we have here)
  if (currentScene == 6) {
    phrase5.style.display = "none";
    //make valentino visible
    document.querySelector("#valentino").style.display = "block";
    knot.classList.add("knotValentinoObserve");
    moveflag = true;
    setTimeout(() => {
      phrase6.style.display = "block";
      document.querySelector("#knot-talking-left").classList.add("bubbleGrow");
      document.querySelector("#speechbubble-big-left").classList.add("bubbleGrow");
      currentScene = 7;
    }, 500)
  }
  // SCENE 8 (What can I do for him? …. Mhhhh…)
  if (currentScene == 8) {
    phrase6.style.display = "none";
    phrase7.style.display = "none";
    phrase8.style.display = "block";
    document.querySelector("#valentino-2").style.display = "block";
    document.querySelector("#valentino-phone-screen").style.display = "block";
    document.querySelector("#valentino-1").style.display = "none";
  }
});


////////////////////////////////
//BUTTONS ////////////////////////////////

// SCENE 4 
// "WOULD YOU LIKE TO BE MY ASSISTENT?"
var trigger2 = 0;
//// (NO)
helpNo.addEventListener('mouseenter', function () {
  trigger2 = trigger2 + 1;
  console.log("trigger count: " + trigger2)
  helpYes.style.marginLeft = "20vh";
});
helpNo.addEventListener('mouseleave', function () {
  helpYes.style.marginLeft = "0vh";
});

//// (YES)
helpButtons.addEventListener('click', function () {
  console.log("helpYes");
  intro.style.display = "none";
  helpButtons.style.display = "none";
  body.style.overflow = "hidden";
  body.style.height = "10000vh";
  window.scrollTo(0, 10000);
  spotlight.style.display = "block";
  currentScene = 5;
});

// SCENE 7 (Valentino ID was clicked)
function scene7() {
  phrase6.style.display = "none";
  phrase7.style.display = "block";
  document.querySelector("#valentino-info").style.display = "none";
  phrase6.style.display = "none";
  setTimeout(() => {
    currentScene = 8;
  }, 500)
}

// SCENE 9 (white Phone was clicked)
function scene9() {
  console.log("yes");
  phrase8.style.opacity = "0";
  document.querySelector("#knot-talking-left").classList.remove("bubbleGrow");
  document.querySelector("#speechbubble-big-left").classList.remove("bubbleGrow");
  document.querySelector("#valentino-toggles").style.display = "block";
  knot.classList.add("knotValentinoDisappear");
  toggleCount = 0;
}

// SCENE 10 (DEACTIVATING THE TOGGLES)
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

// all toggles off? -> ANIMATED CHANGE TO SCENE 11
function countToggle() {
  toggleCount = toggleCount + 1;
  if (toggleCount == 4) {
    phrase9.style.display = "block";
    document.querySelector("#valentino-toggles").style.display = "none";
    document.querySelector("#valentino-phone-screen").style.opacity = "0";
    document.querySelector("#valentino-2").style.display = "none";
    document.querySelector("#valentino-3").style.display = "block";

    // smooth fade-out phonescreen
    setTimeout(() => {
      document.querySelector("#valentino-phone-screen").style.display = "none";
    }, 500)
    knot.classList.add("knotValentinoAppear");

    // speechbubble "sleep on"
    setTimeout(() => {
      document.querySelector("#knot-talking-left").classList.add("bubbleGrow");
      document.querySelector("#speechbubble-big-left").classList.add("bubbleGrow");
    }, 2000)

    // go to black
    setTimeout(() => {
      document.querySelector("#knot-talking-left").classList.remove("bubbleGrow");
      document.querySelector("#speechbubble-big-left").classList.remove("bubbleGrow");
      knot.style.opacity = "0";
      console.log = "one hour later";
    }, 5000)

    // show one hour later
    setTimeout(() => {
      phrase9.style.display = "none";
      phrase10.style.display = "block";
      document.querySelector("#one-hour-later").style.display = "block";
    }, 5500)

    // hide one hour later
    setTimeout(() => {
      document.querySelector("#one-hour-later").style.opacity = "0";
      document.querySelector("#trumper-container").style.display = "block";
      knot.classList.add("knotTrumper");
      knot.style.opacity = "1";
    }, 8000)

    // trumper!!!!
    setTimeout(() => {
      phrase10.style.display = "none";
      phrase11.style.display = "block";
      document.querySelector("#knot-talking-right").classList.add("bubbleGrow");
      document.querySelector("#speechbubble-big-right").classList.add("bubbleGrow");
      document.querySelector("#valentino-4").style.display = "block";
      document.querySelector("#valentino-3").style.display = "none";
      currentScene = 11;
    }, 8500)
  }
}



// CHANGE VALENTINI 1-4 IN BED on some event (not built-in yet)
function showValentino2() {
  valentino1.style.display = "none";
  valentino2.style.display = "block";
}

function showValentino3() {
  valentino2.style.display = "none";
  valentino3.style.display = "block";
}

function showValentino4() {
  valentino3.style.display = "none";
  valentino4.style.display = "block";
}

// CHANGE TO HORIZONTAL SCROLL
function runBus() {
  spotlight.style.display = "none";
  knot.style.display = "none";
  document.querySelector("#text-valentino").style.display = "none";
  document.querySelector("#valentino-1").style.display = "none";

  document.querySelector("#valentino-running").style.display = "block";
  document.querySelector("#horizontal-scroll-container").style.display = "block";
  document.querySelector(".bus-container").style.display = "block";

  // vertical scroll
  body.style.overflow = "hidden";
  body.style.overflowX = "hidden";
  body.style.overflowX = "visible";


  // HORIZONTALES SCROLLEN
  // http://www.dte.web.id/2013/02/event-mouse-wheel.html

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

var textspeed = 20;

new TypeIt("#phrase1", {
    startDelay: 1000,
    strings: ["…"],
    cursor: false,
    speed: textspeed,
    waitUntilVisible: true,
  }).pause(5000)
  .type("please click…")
  .go();

new TypeIt("#phrase2", {
  cursor: false,
  strings: ["…"],
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase3", {
  cursor: false,
  strings: ["…"],
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase4", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase5", {
  startDelay: 1000,
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase6", {
  startDelay: 1000,
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase7", {
  cursor: false,
  strings: ["…"],
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase8", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase9", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase10", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase11", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()