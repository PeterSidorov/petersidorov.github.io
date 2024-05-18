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
repeatListFirst.innerHTML = "";
let test;
btnAcceptTextArea.addEventListener('click', function (){
    menuMain.classList.add('notActive');// Убирает текст арену после нажатия на кнопку
    repeatListFirst.classList.add('active');// Показывает список продуктов после нажатия на кнопку

    let ArrTextArea = textArea.value.split('\n'); //Создание массива с айтемами из текст арены
    // console.log(ArrTextArea);



    // Создает список продуктов
    ArrTextArea.filter(Boolean).forEach((book, i) => {
        repeatListFirst.innerHTML += `<li class="itemTextFirst">${i + 1 + ')'} ${book}</li>`;
    });

    let itemTextFirst = document.querySelectorAll('.itemTextFirst');

    for(let i = 0; i < itemTextFirst.length; i++ ) {

        itemTextFirst[i].addEventListener('click', function (){
            this.classList.toggle('active');
            /* Я не знаю что тут не так
            let ccc = this.textContent.split(') ');
            delete ccc[0];
            console.log(ccc.filter(Boolean));
            delete ArrTextArea[i]; //удалил айтем из массива на который нажали
            // Два варианта кода
            //1 вариант
            ArrTextArea[ArrTextArea.filter(Boolean).length + 1] = ccc[1];
            //2 вариант
            //let newArrTextArea = ArrTextArea.filter(Boolean);
            //newArrTextArea[newArrTextArea.length] = ccc[1];

            //console.log(newArrTextArea);

            console.log(ArrTextArea.filter(Boolean));
            repeatListFirst.innerHTML = "";
            // Создает список продуктов
            ArrTextArea.filter(Boolean).forEach((book, i) => {
                repeatListFirst.innerHTML += `<li class="itemTextFirst">${i + 1 + ')'} ${book}</li>`;

            });
             */
        })
    }
});


