
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
 slides[currentSlide].className = 'slide';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide showing';
}
var playing = true;
var pauseButton = document.getElementById('pause');
 
function pauseSlideshow() {
    pauseButton.innerHTML ='Возобновить показ' ;
    playing = false;
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    pauseButton.innerHTML = 'Прекратить';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}
 
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};