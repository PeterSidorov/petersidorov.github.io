const list = document.getElementById('list');
const btn = document.getElementById('btn');
const modalWindow = document.getElementById('modal-window');
const congratulation = document.getElementById('congratulation-block');
let items = document.querySelectorAll('.item');
let itemsText = document.querySelectorAll('.item_text');
const repeatList = document.querySelector('.repeat__list');

/**/

/**/

/**/
list.addEventListener( 'input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}); /* Решение что-бы textarea подстраивалась под размер текста */

let val; // Список

let newVal; // Массив из списка

function main () {
    val = list.value;
    // В переменной val сохранен текст который ввели в list
    // list.value это весь текст который ввели в textarea на странице
    // Далее текст делиться на ячейки массива с помощью
    newVal = val.split('\n'); // Делит список(весь текст) на массив с помощью .split('\n');
    for (let a=0; a < newVal.length;a++) {
        itemsText[a].innerHTML = "" + newVal[a];
        items[a].classList.add('displayActive')
    } /* Этот цикл for: Каждому айтему в текст добавляет
         текст который указали в textarea и разделили на ячейки массива
         Например текст первого айтема = первой ячейке массива
         и добавляет ячейке массива класс 'displayActive' */
}

/* При нажатии на кнопку стартуют события */
btn.addEventListener('click', function () {

    for (let a=0; a < 100;a++) {
        items[a].classList.remove('displayActive')
    } /* При нажатии на кнопку,
         удаляет класс 'displayActive' всем айтемам */

    main();

    for (let a=0; a < 100;a++) {
        if (newVal[a] === "") {
            items[a].classList.remove('displayActive')
        }
    } /* newVal = весь массив, со всеми ячейками
         цикл for прогоняет все айтемы массива
         и если есть пустые айтемы удаляет у них класс 'displayActive' */

    if (val === "") {
        console.log('Список должен содержать хотя бы один продукт')
    } else if (newVal.join('') === ""){
        console.log('Список должен содержать хотя бы один продукт')
    } else {
        modalWindow.classList.add('close')
        console.log(newVal)
        console.log(newVal.join(''))
    } /* Проверяет textarea на наличие текста
       Если в textarea пусто, пишет в консоль что нужно добавить продукты,
       если текст есть, закрывает модальное окно */



})


/* Удаляет айтем продукта при двойном клике */
function dblclickRemoveActive (favicon) {
    for (let a=0;a<100;a++) {
        favicon[a].addEventListener( "dblclick", function (){
            // console.log('hello', a)
            favicon[a].classList.remove('displayActive');
        })
    }
}
dblclickRemoveActive(items); /* Удаляет айтем продукта при двойном клике */



/* Блок проверки сколько осталось айтемов с активным классом displayActive
   если нет блоков с активным классом displayActive в консоли пишет 'Поздравляю вы завершили покупки' */

repeatList.innerHTML = "";

for (let a = 0; a<100; a++) {
    items[a].addEventListener("dblclick", function () {
        let objectItemDisplayActive = document.querySelectorAll('.item.displayActive');
        console.log(objectItemDisplayActive.length)

        if (objectItemDisplayActive.length === 0) {
            console.log('Поздравляю вы завершили покупки')
            congratulation.classList.remove('displayNone');

            let filteredNewVal = newVal.filter(Boolean);

            filteredNewVal.forEach((book, i) => {
                repeatList.innerHTML += `<li class="repeat__item">${i + 1} ${book}</li>`;
            });/* forEach перебирает массив в список */

            let repeatItem = document.querySelectorAll('.repeat__item');
            for (let a=0;a<100;a++) {
                repeatItem[a].addEventListener( "dblclick", function (){
                    repeatItem[a].classList.toggle('lineThrough');
                })
            }
        }
    })
}

