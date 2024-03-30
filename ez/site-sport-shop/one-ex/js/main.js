/* Images */
const bigImg = document.getElementById('big-img')

const imgElements = document.querySelectorAll('.product-card .images .image img');

for (let i = 0; i < imgElements.length; i++) {
    imgElements.item(i).addEventListener('click', onImageClick)
}

function onImageClick() {
    bigImg.src = this.src;
    document.querySelector('.product-card .images .image img.active').classList.remove('active');
    this.classList.add('active')
}

/* Colors */
let colorElements = document.querySelectorAll('.color');

for (let i = 0; i < colorElements.length; i++) {
    colorElements.item(i).addEventListener('click', checkColor)
}

function checkColor() {
    document.querySelector('.product-card .color.active').classList.remove('active');
    this.classList.add('active');
}
// tabs + content

let tabElements = document.querySelectorAll('.tab-btn');
let contentElements = document.querySelectorAll('.content');

for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', checkTab)
}

function checkTab() {
    document.querySelector('.tab-btn.active').classList.remove('active');
    this.classList.add('active');

    document.querySelector('.content.active').classList.remove('active');
    for(let i = 0; i < contentElements.length; i++){
        if(contentElements[i].dataset.content === this.dataset.btn){
            contentElements[i].classList.add('active');
        }
    }
}



