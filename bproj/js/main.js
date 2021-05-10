////

//script für beste website
var w = window.innerWidth;
var h = window.innerHeight;


////EYES MAIN CHARACTER

const eyes = document.querySelector('.eyes');

window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 2 - evt.pageY) / 160;
    eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  



// GLOBAL VARIABLES
var body = document.querySelector("#body")

var titleBox = document.querySelector("#title-container")
var title = document.querySelector("#title")
var eyeImg = document.querySelector("#eye-img")
var knot = document.querySelectorAll(".scribble")

//GET STORY TEXTS
var phrase1 = document.querySelector("#phrase1");
var phrase2 = document.querySelector("#phrase2");
var phrase3 = document.querySelector("#phrase3");
var phrase4 = document.querySelector("#phrase4");



//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";
phrase4.style.display = "none";

//////////////////////////////////////////////

//// TITLE

var titleButton = document.querySelector("#title-button");
var visible = 1;
var startControll = 1;

titleButton.addEventListener('click', function() {
    if (visible === 1 || visible === 3){
        visible = 0;
        console.log(knot);
        body.style.overflow = "visible";
        title.innerHTML="<img class=title-text id=title1 src=img/title1.png>";
        titleButton.innerHTML="<img id=title-button-on class=on src=img/on.png>";
        titleBox.style.backgroundColor="#FAFAFA";
        console.log(visible)
        
    } else {
        visible = 3;
        title.innerHTML="<img class=title-text id=title0 src=img/title0.png>";
        titleButton.innerHTML="<img id=title-button-off class=off src=img/off.png>";
        body.style.overflow = "hidden";
        eyeImg.style.animation = "smallBlink 10s infinite"
        titleBox.style.backgroundColor="#1A1A1A";
        console.log(visible)
    }
});


// LOCK SCROLLING
window.onload = function checkPosition(){
    if (visible === 1){
        body.style.overflow="hidden";
    }
    else{
        body.style.overflow="visible";
    }
}








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
});  



/////////////////////////////////////////////////////////////////////




// function for animations to scroll position
function animation(scrollPos) {
console.log(scrollLocation)

// ANIMATIONS BASED ON SCROLL POSITION
  if (scrollLocation >= 100){
    titleBox.style.opacity = 0;
   
  } else{
    titleBox.style.opacity = 1;
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