const list = document.getElementById('list');
// const str = document.getElementById('str'); // str.innerHTML="Ваш список продуктов: "+val; // Показать список продуктов
const btn = document.getElementById('btn');
let items = document.querySelectorAll('.item');
let itemsText = document.querySelectorAll('.item_text');

/**/

/**/
list.addEventListener( 'input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

let val; // Список
let newVal; // Массив из списка

console.log(list.value)


btn.addEventListener('click', function () {
    val = list.value;
    console.log(val);
    newVal = val.split('\n'); //Делит список продуктов на массив
    console.log(newVal); //Показывает массив

    for (let a=0; a < newVal.length;a++) {
        itemsText[a].innerHTML = "" + newVal[a];

        if (typeof itemsText[a] === 'object') {
            items[a].classList.add('displayActive')
        }

    }
    console.log( itemsText[0]);
})

 // Показать список продуктов










/*
let spisok =
    "Хлеб\n" +
    "Лаваш\n" +
    "Сулугуни 2 шт\n" +
    "Бри 2 кусочка\n" +
    "Помидоры \n" +
    "Огурцы\n" +
    "Лимоны\n" +
    "Пакеты упаковка маленькие\n" +
    "Пакеты для мусора\n" +
    "Сок Эмми Клубника банан 2 шт\n" +
    "Кола 3 шт\n" +
    "Круассаны\n" +
    "Крылышки 3 уп\n" +
    "Масло сливочное 3 пачки\n" +
    "Тортик без Орехов\n" +
    "Мороженое на палочке пломбир в шоколаде эскимос";

 let masivSpisok = spisok.split('\n');

 console.log(spisok);
 console.log(masivSpisok);
 console.log(masivSpisok[0]);
 console.log(masivSpisok[3]);
 console.log(masivSpisok[7]);
 */



/*
const item_text__zero = document.getElementById('item_text__zero');
const item_text__uno = document.getElementById('item_text__uno');
const item_text__due = document.getElementById('item_text__due');
const item_text__tre = document.getElementById('item_text__tre');
item_text__zero.innerHTML="" + newVal[0];
item_text__uno.innerHTML="" + newVal[1];
item_text__due.innerHTML="" + newVal[2];
item_text__tre.innerHTML="" + newVal[3];
 */