const imgElements = document.querySelectorAll('.img')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


const a = imgElements.length;


prev.addEventListener('click', onPrevClick)

next.addEventListener('click', onNextClick)

let index = 0;

function onPrevClick() {
    if (index === 0) {
        index = a -1;
    } else {
        index--;
    }

    renderImg();
}

function onNextClick() {
    if (index === a - 1) {
        index = 0;
    } else  {
        index++;
    }

    renderImg();
}

function renderImg () {
    for (let i = 0; i < imgElements.length; i++) {
        imgElements.item(i).classList.remove('active')
    }
    imgElements[index].classList.add('active')
}


