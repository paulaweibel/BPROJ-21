//script für beste website


////////////////////////////////////////////////////////////////
//////// NAVIGATE //////////////////////////////////////////////

function goHome() {
  window.scrollTo(0, 0);
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
let all = document.getElementById("all");
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
  all.classList.add("fadeIn");
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

var whereAmI = localStorage.getItem('scrollMemory');
console.log("I am at: " + whereAmI)


// INTRO
var intro = document.querySelector("#intro");
var titleBox = document.querySelector("#title-container");
var titleButton = document.querySelector("#title-button-container");
var about = document.querySelector("#about-content");

// ASSETS
var assets = document.querySelector("#asset-container");
var knot = document.querySelector("#wiggle");
var bubble = document.querySelector("#speechbubble");
var eyeImg = document.querySelector("#eye-img");
var spotlight = document.querySelector("#spotlight");
var horizontal = document.querySelector(".horizontal-scroll");

//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");

var helpYes = document.querySelector("#help-yes");
var helpNo = document.querySelector("#help-no");
var helpButtons = document.querySelector("#help-button");

// TEXT & SPOTLIGHT INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";

spotlight.style.display = "none";






////////////////////////////////////////////////////////////////
//// ABOUT MENU  //////////////////////////////////////////////

function showAbout() {
  about.style.display = "block";
  document.querySelector("#title-dark").style.display = "none";
  body.style.backgroundColor = "var(--schwarz)";
  about.style.top = "0";

  setTimeout(() => {
    about.classList.add("showAbout");
  }, 200)
  titleButton.style.opacity = "0";
  knot.style.opacity = "0";
}

function hideAbout() {
  about.style.display = "none";
  about.style.top = "-100vh";
  about.classList.remove("showAbout");
  document.querySelector("#title-dark").style.display = "block";
  body.style.backgroundColor = "var(--weiss)";
  titleButton.style.opacity = "1";
  knot.style.opacity = "1";
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

////////////////////////////////////////////////////////////////
// SIDE RELOAD /////////////////////////////////////////////////

window.onload = function checkPosition() {
  window.scrollTo(0, 0);
  body.style.overflow = "hidden";
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STORY START /////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//// TITLE /////////////////////////////////////////////////////

var visible = 1;
var startControll = 1;

// CHANGE BETWEEN BLACK AND WHITE TITLE
titleButton.addEventListener('click', function () {
  if (visible === 1 || visible === 3) {
    visible = 0;
    body.style.overflow = "visible";
    document.querySelector("body").style.background = "#fafafa";
    document.querySelector("#title-dark").classList.add("titleBright");
    knot.classList.add("knotTitle");
  } else {
    visible = 3;
    body.style.overflow = "hidden";
    document.querySelector("#title-dark").classList.remove("titleBright");
    knot.classList.remove("knotTitle");
  }
});

////////////////////////////////////////////////////////////////
/// SPECIAL EVENTS ON CLICK ////////////////////////////////////

// INTRO ///
//// "WOULD YOU LIKE TO BE MY ASSISTENT?" (NO)
var trigger2 = 0;
helpNo.addEventListener('click', function () {
  trigger2 = trigger2 + 1;
  console.log("trigger count: " + trigger2)
  if (trigger2 == 1) {
    helpNo.style.transform = "translate(0, 100px)";
    helpNo.style.opacity = "0.7";
  }
  if (trigger2 == 2) {
    helpNo.style.transform = "translate(300px, 100px)";
    helpNo.style.opacity = "0.4";
  }
  if (trigger2 == 3) {
    helpNo.style.transform = "translate(100px, 300px)";
    helpNo.style.opacity = "0.2";
  }
  if (trigger2 == 4) {
    helpNo.style.transform = "translate(300px, 300px)";
    helpNo.style.opacity = "0";
  }
});

//// "WOULD YOU LIKE TO BE MY ASSISTENT?" (YES)
helpYes.addEventListener('click', function () {
  console.log("helpYes");
  intro.style.display = "none";
  knot.classList.add("knotIntro");
  body.style.overflow = "hidden";
  window.scrollTo(0, 10000);
  spotlight.style.display = "block";
  document.querySelector("#text-valentino").style.display = "block";
});



//// ENTER STORY / SPOTLIGHT
function startStory() {
  document.querySelector("#enter").style.display = "none";
  document.querySelector("#valentino").style.display = "block";
  document.querySelector("#valentino-text1").style.display = "block";
  document.querySelector("#valentino-text2").style.display = "block";
  bubble.classList.add("bubbleGrow");
  knot.classList.add("knotValentino");
  moveflag = true;
}

// CHANGE VALENTINI 1-4 IN BED on some event
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
  knot.classList.remove("knotValentino");
  knot.classList.remove("knotIntro");
  document.querySelector("#valentino-text1").style.display = "none";
  document.querySelector("#valentino-text2").style.display = "none";
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
// TRIGGERS ON SCROLL POSITIONS ////////////////////////////////

function animation(scrollPos) {
  // ANIMATIONS BASED ON SCROLL POSITION

  // 100 PX, START (MOVE TITLE)
  if (scrollLocation > 100 && scrollLocation <= 4000) {
    intro.style.display = "block";
    titleBox.classList.add("titleUp");
    titleButton.classList.add("ropeUp");
  } else {
    titleBox.classList.remove("titleUp");
    titleButton.classList.remove("ropeUp");
  }

  // 100 PX, "HELLO I'M STRESS KNOT" (MOVE KNOT, ADD SPEECHBUBBLE, REMOVE SCROLL ARROW)
  if (scrollLocation > 100) {
    knot.classList.add("knotIntro");
    bubble.classList.add("bubbleGrow");
    document.getElementById("speechbubble-white").classList.add("bubbleGrow");
    bubble.style.display = "block";
    document.getElementById("scroll-icon").classList.add("scroll-icon-after");
    phrase1.style.display = "block";
  } else {
    knot.classList.remove("knotIntro");
    bubble.classList.remove("bubbleGrow");
    document.getElementById("speechbubble-white").classList.remove("bubbleGrow");
    document.getElementById("scroll-icon").classList.remove("scroll-icon-after");
    phrase1.style.display = "none";
  }

  // 1500 PX "my job is to visit people.""
  if (scrollLocation > 1500) {
    phrase1.style.display = "none";
    phrase2.style.display = "block";
  } else {
    phrase2.style.display = "none";
  }

  // 2500 PX "stress has many shades"
  if (scrollLocation > 2500) {
    phrase2.style.display = "none";
    phrase3.style.display = "block";
    helpButtons.style.display = "block";
  } else {
    phrase3.style.display = "none";
  }

  // 3500 PX "do you wanna help me?"
  if (scrollLocation > 3500 && scrollLocation < 4000) {
    phrase3.style.display = "none";
    phrase4.style.display = "block";
    helpYes.classList.add("helpUp");
    helpNo.classList.add("helpUp");
    body.style.overflow = "hidden";
  } else {
    phrase4.style.display = "none";
    helpYes.classList.remove("helpUp");
    helpNo.classList.remove("helpUp");
    // body.style.overflow = "visible";
  }

  // setting INTRO and SPEECHBUBBLE invisible while scrolling to Storystart
  if (scrollLocation > 4000) {
    intro.style.display = "none";
    titleBox.style.display = "none";
    titleButton.style.display = "none";
    document.querySelector("#speechbubble-white").classList.add("hide");
    document.querySelector("#speechbubble-white").style.display = "none";
  } else {
    intro.style.diplay = "block"
    titleBox.style.display = "block";
    titleButton.style.display = "block";
    document.querySelector("#speechbubble-white").classList.remove("hide");
    document.querySelector("#speechbubble-white").style.display = "block";
  }

  // 10000PX, STORY ENTER, ASSETS VISIBLE
  if (scrollLocation <= 10000 && scrollLocation > 9500) {
    assets.style.display = "block";
    document.querySelector("#enter").style.display = "block";
  } else {
    assets.style.display = "none";
    document.querySelector("#enter").style.display = "none";
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
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase2", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase3", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase4", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()


// new TypeIt("#help-yes", {
//   startDelay: 1500,
//   cursor: false,
//   speed: 10,
//   waitUntilVisible: true,
// }).go()

// new TypeIt("#help-no", {
//   startDelay: 1700,
//   cursor: false,
//   speed: 10,
//   waitUntilVisible: true,
// }).go()

// new TypeIt("#phrase5", {
//   cursor: false,
//   speed: textspeed,
//   waitUntilVisible: true,
// }).go()

// new TypeIt("#phrase6", {
//   cursor: false,
//   speed: textspeed,
//   waitUntilVisible: true,
// }).go()

// new TypeIt("#phrase7", {
//   cursor: false,
//   speed: textspeed,
//   waitUntilVisible: true,
// }).go()

// new TypeIt("#phrase8", {
//   cursor: false,
//   speed: textspeed,
//   waitUntilVisible: true,
// }).go()