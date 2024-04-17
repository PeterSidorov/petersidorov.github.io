// tabs + content

let contentElements = document.querySelectorAll('.content'); /* Весь контент */

let tabElements = document.querySelectorAll('.tab-btn'); /* Все кнопки */

for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener('click', function (){

        document.querySelector('.tab-btn.active').classList.remove('active');
        this.classList.add('active');

        document.querySelector('.content.active').classList.remove('active');
        for(let i = 0; i < contentElements.length; i++){
            if(contentElements[i].dataset.content === this.dataset.btn){
                contentElements[i].classList.add('active');
            }
        }
    })
}




