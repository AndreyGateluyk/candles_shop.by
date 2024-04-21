const trackSlider = document.querySelector('.slider__track');
const trackItems = document.querySelector('.slider__items');
const currentLeft = document.querySelector('.slider__current_left');
const currentRight = document.querySelector('.slider__current_right');
const pagination = document.getElementsByClassName('slider__pagination');
const animationTime = 5000;
let slidesIndex = 0;
let pause = false;
let timer = 0;
let interval;

function updateInterval() {
  timer = 0;
  clearInterval(interval);
  interval = setInterval(function () {
    if (!pause) {
      timer += 100;
      animationPagination()
        if (timer >= 5000) {
          timer = 0;
          moveSlides(1)
          }
      }
  }, 100);
}

updateInterval()

function animationPagination() {
  let activeItem = document.querySelector('.slider__pagination_active > div');
  let widthPagination = (timer / animationTime) * 100;
  activeItem.style.width = `${widthPagination}%`;
}

function restartAnimationPagination() {
  let activeItem = document.querySelector('.slider__pagination_active > div');
  activeItem.style.width = '0%';
}

trackSlider.addEventListener('mouseover', (e) => {
  if(e.type !== 'touchend') {
    pause = true;
  }
});
trackSlider.addEventListener('mouseout', (e) => {
  if(e.type !== 'touchend') {
    pause = false;
  }
});

function moveSlides(n) {
  showSlides(slidesIndex += n);
  restartAnimationPagination();
  updateInterval();
}

function showSlides(n) {
  let widthScroll = document.querySelector('.slider__item').clientWidth ;
  trackItems.style.transform = `translateX(-${widthScroll * (n)}px)`;
    if(slidesIndex === 3) {
      trackItems.style.transform = `translateX(0px)`;
      slidesIndex = 0;
    }
      if(slidesIndex === -1) {
        trackItems.style.transform = `translateX(-${widthScroll * 2}px)`;
        slidesIndex = 2;
      }
        for(i = 0; i < pagination.length; i++) {
          pagination[i].className = pagination[i].className.replace(' slider__pagination_active', '')
        }
  pagination[slidesIndex].className += ' slider__pagination_active'
}
trackItems.addEventListener('click', (e) => {
  e.preventDefault();
})
trackItems.addEventListener('touchstart', touchStart);
trackItems.addEventListener('touchend', touchEnd);
let xStart = 0;

function touchStart (e) {
  xStart = e.touches[0].clientX;
  pause = true;
}

function touchEnd(e) {
  const xEnd = e.changedTouches[0].clientX;
  let xDiff = xStart - xEnd;
  if(xDiff === 0) {
    pause = false;
  }
  //console.log(pause, xEnd, xStart, xDiff)
    if(xDiff > 0) {
      moveSlides(1);
      pause = false;
    }
      if(xDiff < 0) {
        moveSlides(-1);
        pause = false;
      }
}