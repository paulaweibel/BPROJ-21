const eyes = document.querySelector('.eyes');

window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 2 - evt.pageY) / 160;
    eyes.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  