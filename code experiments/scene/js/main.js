////

//script für beste website



////EYES MAIN CHARACTER

const eyes = document.querySelector('.eyes');

window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 2 - evt.pageY) / 160;
    eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  



//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");

var backgroundcolor = document.querySelector("#background-color");
var backSVG = document.querySelector(".stress-path");

//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";

//////////////////////////////////////////////

///Story Interactions


//FAKE INTERACTIONS
var trigger2 = 0;

phrase2.addEventListener('click', function() {
  trigger2 = trigger2 + 1;
  console.log("trigger count: " + trigger2)
  if (trigger2 == 1) {
    phrase2.style.transform = "translate(0,-100px)";
    phrase2.style.opacity = "0.7";
  }
  if (trigger2 == 2){
    phrase2.style.transform = "translate(-100px,-100px)";
    phrase2.style.opacity = "0.4";
  }
  if (trigger2 == 3){
    phrase2.style.transform = "translate(-100px,-200px)";
    phrase2.style.opacity = "0.2";
  }
  if (trigger2 == 4){
    phrase2.style.transform = "translate(-200px,-200px)";
    phrase2.style.opacity = "0";
  }
});  



//// real interaction
phrase3.addEventListener('click', function() {
  console.log("clicked");
  phrase1.style.display = "none";
  phrase2.style.display = "none";
  phrase3.style.display = "none";
  phrase4.style.display = "block";
  backSVG.style.transform = "scale(1)";
});  



/////////////////////////////////////////////////////////////////////

//ScrollLocation (lastKnownScrollPosition)
let scrollLocation = 0;
let ticking = false;

//updating scroll position
document.addEventListener('scroll', function(e) {
  scrollLocation = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      animation(scrollLocation);
      ticking = false;
    });
    ticking = true;
  }
});


// function for animations to scroll position
function animation(scrollPos) {
console.log(scrollLocation)

// ANIMATIONS BASED ON SCROLL POSITION
  if (scrollLocation >= 0){
    phrase1.style.display = "block";
  } else{
    phrase1.style.display = "none";
  }

  if (scrollLocation > 501){
    phrase2.style.display = "block";
  } else{
    phrase2.style.display = "none";
  }

  if (scrollLocation > 501){
    phrase3.style.display = "block";
  } else{
    phrase3.style.display = "none";
  }

  // if (scrollLocation > 500){
  //   backgroundcolor.style.backgroundColor = "#000";
  // } else{
  //   backgroundcolor.style.backgroundColor = "#fff";
  // }

}







// TYPING ANIMATIONS FOR ALLL THE TEXTS:

var textspeed = 30;

new TypeIt("#phrase1", {
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