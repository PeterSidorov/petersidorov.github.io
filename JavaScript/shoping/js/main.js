let header = document.getElementById('header');
let textArea = document.getElementById('textArea');
let btnAcceptTextArea = document.getElementById('btnAcceptTextArea');
let menuMain = document.getElementById('menuMain');


let repeatListFirst = document.getElementById('repeatListFirst');


/* Добавляет и убирает фон у кнопки */
textArea.addEventListener('click', function (){
    if (document.activeElement === textArea) {
        // console.log('area active')
        btnAcceptTextArea.classList.add('focus')
    }
});
header.addEventListener('click', function (){
    if (document.activeElement != textArea) {
        // console.log('area not active')
        btnAcceptTextArea.classList.remove('focus')
    }
});


textArea.addEventListener( 'input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}); /* Решение что-бы textarea подстраивалась под размер текста */


/**/



btnAcceptTextArea.addEventListener('click', function (){
    repeatListFirst.innerHTML = ""; //Очищает список

    menuMain.classList.add('notActive');// Убирает текст арену после нажатия на кнопку
    repeatListFirst.classList.add('active');// Показывает список продуктов после нажатия на кнопку

     let ArrTextArea = textArea.value.split('\n'); //Создание массива с айтемами из текст арены
    // console.log(ArrTextArea);


    // Создает список продуктов
    ArrTextArea.filter(Boolean).forEach((book, i) => {
        repeatListFirst.innerHTML += `<li class="itemTextFirst">${i + 1 + ')'} ${book}</li>`;
    });

    for(let i = 0; i < repeatListFirst.children.length; i++ ) {
        repeatListFirst.children[i].addEventListener('click', function (){
            this.classList.toggle('active');

            /*АААААААААААААААААААААА*/
            let clickElement = this.textContent.split(') ');
            delete clickElement[0];
            delete ArrTextArea[i]; //удалил айтем из массива на который нажали
            ArrTextArea[ArrTextArea.filter(Boolean).length + 1] = clickElement[1];

            repeatListFirst.innerHTML = "";
            // Создает список продуктов
            ArrTextArea.filter(Boolean).forEach((book, i) => {
                repeatListFirst.innerHTML += `<li class="itemTextFirst">${i + 1 + ')'} ${book}</li>`;
            });
        })
    }

});

