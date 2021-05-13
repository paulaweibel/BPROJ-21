////

//script für beste website


////      LOADING BAR     /////////////////////////////////////////////////////

let progress = document.getElementById("progress");
let all = document.getElementById("all");

var queue = new createjs.LoadQueue(false);

queue.on("progress", event =>{
  let progress = Math.floor(event.progress * 100);
  this.progress.style.width = progress+"%";
  if ( progress == 100){
    console.log("all done");
    document.querySelector("body").style.background = "#fafafa";
  }
})

queue.on("complete", event =>{
  all.classList.add("fadeIn");
  setTimeout(() => {
    progress.classList.add("fadeOut");
  },500)
})

queue.on("fileload", handleFileComplete);
queue.loadFile("./img/background.png");
// queue.loadFile("https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg");
// queue.loadFile("https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg");


function handleFileComplete(event){
  var item = event.item;
  var type = item.type;

  if (type == createjs.Types.IMAGE){
    // all.appendChild(event.result);
  }

}


// GLOBAL VARIABLES //////////////////////////////////////////////////////////////////////////
var body = document.querySelector("#body")

var w = window.innerWidth;
var h = window.innerHeight;

var whereAmI = localStorage.getItem('scrollMemory');
console.log("I am at: " + whereAmI)

var titleBox = document.querySelector("#title-container");
var title = document.querySelector("#title");
var titleButton = document.querySelector("#title-button");
var eyeImg = document.querySelector("#eye-img");
var knot = document.querySelector("#wiggle");
var spotlight = document.querySelector("#spotlight");

// INTRO
var bubble = document.querySelector("#speechbubble");

// SCENES
// var scene1 = document.querySelector("#scene1");

//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");
// var phrase5 = document.querySelector("#phrase5");
// var phrase6 = document.querySelector("#phrase6");
// var phrase7 = document.querySelector("#phrase7");
// var phrase8 = document.querySelector("#phrase8");

var helpYes = document.querySelector("#help-yes");
var helpNo = document.querySelector("#help-no");



//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";

helpYes.style.display = "none";
helpNo.style.display = "none";

// phrase5.style.display = "none";
// phrase6.style.display = "none";
// phrase7.style.display = "none";
// phrase8.style.display = "none";

spotlight.style.display = "none";
bubble.style.display = "none";



////EYES MAIN CHARACTER   /////////////////////////////////////////////////////////////////////

const eyes = document.querySelector('.eyes');
window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 160;
  const y = -(window.innerHeight / 2 - evt.pageY + scrollLocation) / 160;
  eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});



//// TITLE /////////////////////////////////////////////////////////////////////////////


var visible = 1;
var startControll = 1;

titleButton.addEventListener('click', function () {
  if (visible === 1 || visible === 3) {
    visible = 0;
    body.style.overflow = "visible";
    titleBox.style.backgroundColor = "transparent";

  } else {
    visible = 3;
    body.style.overflow = "hidden";
    titleBox.style.backgroundColor = "#1a1a1a";
  }
});

//ScrollLocation (lastKnownScrollPosition) ////////////////////////////////////////////////
let scrollLocation = 0;
let ticking = false;

//updating scroll position

document.addEventListener('scroll', function (e) {
  localStorage.setItem("scrollMemory", scrollLocation);
  scrollLocation = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      animation(scrollLocation);
      ticking = false;
    });
    ticking = true;
  }
});


// LOCK SCROLLING
window.onload = function checkPosition() {
  console.log("hello")
  scrollTo(0,0);
  body.style.overflow = "hidden";

  // if (whereAmI <= 1) {
  //   body.style.overflow = "hidden";
  //   titleBox.style.backgroundColor = "#1a1a1a";
  // } else {
  //   body.style.overflow = "visible";
  //   storage.clear();
  // }

}



//SPOTLIGHT!!!/////////////////////////////////////////////////////////////////////////////////////

var moveflag = true;

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
    (verschoben / window.innerHeight ) * 100+
    "%,transparent var(--spotlightTransparent),var(--spotlightColor) var(--spotlightSize))";
  document.getElementById("spotlight").style.backgroundImage = string;
}





// STORY START ///////////////////////////////////////////////////////////////////////

// function for animations to scroll position
function animation(scrollPos) {
  console.log(scrollLocation)

  // ANIMATIONS BASED ON SCROLL POSITION

  //move Knot
  if (scrollLocation > 100 && scrollLocation < 9000) {
    knot.style.animation = "titleKnot 2s forwards";
    bubble.style.display = "block"
    titleBox.classList.add("titleUp");
    titleButton.classList.add("ropeUp");
  } else {
    knot.style.animation = "wiggle 2s infinite";
    titleBox.classList.remove("titleUp");
    titleButton.classList.remove("ropeUp");
    bubble.style.display = "none";
  }

  //Hello, im the stress knot.
  if (scrollLocation > 100) {
    
    
    phrase1.style.display="block";
  } else {
    
    phrase1.style.display="none";
  }

  //my job is to visit people.
  if (scrollLocation > 1500) {
    phrase1.style.display = "none";
    phrase2.style.display="block";
  } else {
    phrase2.style.display="none";
  }

  //
  if (scrollLocation > 2500) {
    phrase2.style.display = "none";
    phrase3.style.display="block";
  } else {
    phrase3.style.display="none";
  }

  //
  if (scrollLocation > 3500) {
    phrase3.style.display = "none";
    phrase4.style.display="block";
    helpYes.style.display="block";
    helpNo.style.display="block";
    body.style.overflow="hidden";
  } else {
    
    helpYes.style.display = "none";
    helpNo.style.display = "none";
    body.style.overflow="visible";
  }

  // 
  if (scrollLocation > 7000) {
    phrase4.style.display="none";
    helpYes.style.display="none";
    helpNo.style.display="none";
  } else {
  }

}


///Story Interactions


//FAKE INTERACTIONS
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


//// real interaction CHANGE TO FIRST SCENE
helpYes.addEventListener('click', function () {
  console.log("helpYes");
  phrase4.style.display="none";
  helpYes.style.display="none";
  helpNo.style.display="none";
  body.style.overflow="hidden";
  window.scrollTo(0, 10000);
  spotlight.style.display="block";
  // scene1.style.display="block";
  knot.style.animation="scene1Knot 1s forwards";
});






// TYPING ANIMATIONS FOR ALLL THE TEXTS:

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


new TypeIt("#help-yes", {
  startDelay: 1500,
  cursor: false,
  speed: 10,
  waitUntilVisible: true,
}).go()

new TypeIt("#help-no", {
  startDelay: 1700,
  cursor: false,
  speed: 10,
  waitUntilVisible: true,
}).go()



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