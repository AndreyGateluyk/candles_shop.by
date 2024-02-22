const offerBtn = document.querySelectorAll('.menu__offer-btn');
const gridItems = document.querySelectorAll('.menu__item')
const offer = document.querySelector('.menu__offer')
const loadBtn = document.querySelector('.load-btn')
const menuCard = document.querySelectorAll('.menu__card')

//function show menu section
offer.addEventListener("click", showMenuSection);

function showMenuSection(e) {
  if(e.target.className === 'menu__offer-btn') {
    for( let i = 0; i < offerBtn.length; i += 1) {
      offerBtn[i].className = 'menu__offer-btn';
    }
    e.target.classList.add('menu__offer-btn_active');
  }
  for(let i = 0; i < gridItems.length; i+= 1) {
    if(`${e.target.id}-block` === gridItems[i].id) {
      gridItems[i].className = gridItems[i].className.replace('hidden', 'active');
      let targetBlock = gridItems[i].childNodes;
      let targetBlockItems = [];
      targetBlock.forEach((item, index) => {
        if(index % 2 === 1) {
          targetBlockItems.push(item);
        }
      })
      if(window.innerWidth <= 768) {
        if(targetBlockItems.length >= 4) {
          loadBtn.classList.remove('hidden');
        }
        if(targetBlockItems.length < 5) {
          loadBtn.classList.add('hidden');
        }
        
        targetBlockItems.forEach((item, index) => {
          if(index > 3) {
            item.classList.add('hidden');
          }
        })
      }
    }
      else {
        gridItems[i].classList.replace('active', 'hidden');
      }
    }
}
//window size tracking
window.addEventListener('resize', EventResize);

function EventResize() {
  let activeItems = document.querySelector('.active').childNodes;
  let activeItemsArr = [];
  activeItems.forEach((item, index) => {
    if(index % 2 === 1) {
      activeItemsArr.push(item);
    }
  })
  if(document.body.clientWidth <= 768) {
    loadBtn.classList.remove('hidden');
    activeItemsArr.forEach((item, index) => {
      if(index > 3) {
        item.classList.add('hidden');
      }
    })
    if(activeItemsArr.length < 5) {
      loadBtn.classList.add('hidden');
    }
  }
  if(document.body.clientWidth > 768 ) {
    loadBtn.classList.add('hidden');
    activeItemsArr.forEach((item) => {
      item.classList.remove('hidden');
    })
  }
}
EventResize()

//show hidden menu items
loadBtn.addEventListener('click', () => {
  menuCard.forEach((item) => {
    item.classList.remove('hidden');
  })
  loadBtn.classList.add('hidden');
})
