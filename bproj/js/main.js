////

//script für beste website
var w = window.innerWidth;
var h = window.innerHeight;


////EYES MAIN CHARACTER
const eyes = document.querySelector('.eyes');
window.addEventListener('mousemove', (evt) => {
  const x = -(window.innerWidth / 2 - evt.pageX) / 160;
  const y = -(window.outerHeight / 2) / 160;
  eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});



// GLOBAL VARIABLES
var body = document.querySelector("#body")

var whereAmI = localStorage.getItem('scrollMemory');
console.log("I am at: " + whereAmI)

var titleBox = document.querySelector("#title-container")
var title = document.querySelector("#title")
var eyeImg = document.querySelector("#eye-img")
var knot = document.querySelector("#wiggle")

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


//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";
phrase5.style.display = "none";
phrase6.style.display = "none";
phrase7.style.display = "none";
phrase8.style.display = "none";
phrase9.style.display = "none";
phrase10.style.display = "none";

//////////////////////////////////////////////

//// TITLE

var titleButton = document.querySelector("#title-button");
var visible = 1;
var startControll = 1;

titleButton.addEventListener('click', function () {
  if (visible === 1 || visible === 3) {
    visible = 0;
    body.style.overflow = "visible";
    titleBox.style.backgroundColor = "transparent";
    titleButton.innerHTML = "<img id=title-button-on class=on src=img/on.png>"

  } else {
    visible = 3;
    body.style.overflow = "hidden";
    titleButton.innerHTML = "<img id=title-button-off class=off src=img/off.png>";
    titleBox.style.backgroundColor = "#1a1a1a";
  }
});

//ScrollLocation (lastKnownScrollPosition)
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
  if (whereAmI <= 1) {
    body.style.overflow = "hidden";
    titleBox.style.backgroundColor = "#1a1a1a";
  } else {
    body.style.overflow = "visible";
  }
}




//SPOTLIGHT!!!///////////////////////////////////////////////

// var moveflag = true;

// window.addEventListener("mousemove", (e) => {
//   if (moveflag == true) {
//     spotlightMove(e);
//   }
// });
// function spotlightMove(e) {
//   let string =
//     "radial-gradient(circle at " +
//     (e.pageX / window.innerWidth) * 100 +
//     "% " +
//     (e.pageY / window.innerHeight) * 100 +
//     "%,transparent var(--spotlightTransparent),var(--spotlightColor) var(--spotlightSize))";
//   document.getElementById("spotlight").style.backgroundImage = string;
// }



///Story Interactions


//FAKE INTERACTIONS
var trigger2 = 0;

phrase2.addEventListener('click', function () {
  trigger2 = trigger2 + 1;
  console.log("trigger count: " + trigger2)
  if (trigger2 == 1) {
    phrase2.style.transform = "translate(0,-100px)";
    phrase2.style.opacity = "0.7";
  }
  if (trigger2 == 2) {
    phrase2.style.transform = "translate(-100px,-100px)";
    phrase2.style.opacity = "0.4";
  }
  if (trigger2 == 3) {
    phrase2.style.transform = "translate(-100px,-200px)";
    phrase2.style.opacity = "0.2";
  }
  if (trigger2 == 4) {
    phrase2.style.transform = "translate(-200px,-200px)";
    phrase2.style.opacity = "0";
  }
});



//// real interaction
phrase3.addEventListener('click', function () {
  console.log("clicked");
  phrase1.style.display = "none";
  phrase2.style.display = "none";
  phrase3.style.display = "none";
  phrase4.style.display = "block";
});



// STORY START ///////////////////////////////////////////////////////////////////////

// function for animations to scroll position
function animation(scrollPos) {
  console.log(scrollLocation)

  // ANIMATIONS BASED ON SCROLL POSITION

  //move Knot
  if (scrollLocation > 50) {
    knot.style.animation = "titleKnot 2s forwards";
  } else {
    knot.style.animation = "wiggle 2s infinite";
  }

  //Hello, im the stress knot.
  if (scrollLocation > 100) {
    phrase1.style.display="block";
    titleBox.style.opacity = "0";
  } else {
    titleBox.style.opacity = "1";
    phrase1.style.display="none";
  }

  //my job is to visit people.
  if (scrollLocation > 1000) {
    phrase1.style.display="none";
    phrase2.style.display="block";
  } else {
    phrase2.style.display="none";
  }

  //
  if (scrollLocation > 2000) {
    phrase2.style.display="none";
    phrase3.style.display="block";
  } else {
    phrase3.style.display="none";
  }

  //
  if (scrollLocation > 3000) {
    phrase3.style.display="none";
    phrase4.style.display="block";
  } else {
    phrase4.style.display="none";
  }

  //
  if (scrollLocation > 4000) {
    phrase4.style.display="none";
    phrase5.style.display="block";
  } else {
    phrase5.style.display="none";
  }

  //
  if (scrollLocation > 5000) {
    phrase5.style.display="none";
    phrase6.style.display="block";
  } else {
    phrase6.style.display="none";
  }

  //
  if (scrollLocation > 6000) {
    phrase6.style.display="none";
    phrase7.style.display="block";
  } else {
    phrase7.style.display="none";
  }

  //
  if (scrollLocation > 7000) {
    phrase7.style.display="none";
    phrase8.style.display="block";
  } else {
    phrase8.style.display="none";
  }

  //
  if (scrollLocation > 8000) {
    phrase8.style.display="none";
    phrase9.style.display="block";
  } else {
    phrase9.style.display="none";
  }


}







// TYPING ANIMATIONS FOR ALLL THE TEXTS:

var textspeed = 30;

new TypeIt("#phrase1", {
  // startDelay: 1000,
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

new TypeIt("#phrase5", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase6", {
  cursor: false,
  speed: textspeed,
  waitUntilVisible: true,
}).go()

new TypeIt("#phrase7", {
  cursor: false,
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