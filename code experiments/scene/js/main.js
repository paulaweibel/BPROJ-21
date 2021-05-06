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

var backgroundcolor = document.querySelector("#background-color");

//SET STORY TEXTS INVISIBLE
phrase1.style.display = "none";
phrase2.style.display = "none";
phrase3.style.display = "none";





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
  if (scrollLocation > 1 && scrollLocation < 600){
    phrase1.style.display = "block";
  } else{
    phrase1.style.display = "none";
  }

  if (scrollLocation > 301 && scrollLocation < 1024){
    phrase2.style.display = "block";
  } else{
    phrase2.style.display = "none";
  }

  if (scrollLocation > 601 && scrollLocation < 1024){
    phrase3.style.display = "block";
  } else{
    phrase3.style.display = "none";
  }

  if (scrollLocation > 500){
    backgroundcolor.style.backgroundColor = "#000";
  } else{
    backgroundcolor.style.backgroundColor = "#fff";
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