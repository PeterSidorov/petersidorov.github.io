const buttons = document.querySelectorAll('.buttons__btn');
const blockButtons = document.getElementById('buttons')


const joke = document.getElementById('joke');

const form = document.getElementById('form');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', groupTitlesClick)
}

function groupTitlesClick() {
    this.classList.add('selected');
    this.parentElement.classList.add('loading');


    setTimeout(function (){
        blockButtons.classList.add('success')
        form.classList.add('active')

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = 'white';
        }
    }, 1000)

    setTimeout(function (){
        joke.classList.add('active')
    }, 1500)

    setTimeout(function (){
        joke.classList.add('color')
    }, 2000)

    setTimeout(function (){
        joke.classList.add('colorr')
    }, 2500)
}









