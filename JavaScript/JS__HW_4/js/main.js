let items = document.getElementById('items');
let item = document.querySelectorAll('.item')


let menu = [
    bread = {
        name: 'Хлеб',
        quantity: 1,
        price: 25,
        currency: '₴'
    },
    bananaJuice = {
        name: 'Банановый сок',
        quantity: 1,
        price: 79,
        currency: '₴',
    },
    crabChipsBig = {
        name: 'Крабовые чипсы большие',
        quantity: 1,
        price: 120,
        currency: '₴',
    }
];

const checkUser = (arr, position) =>
    console.log(
        arr[position].name +
        ' | ' + arr[position].quantity + ' шт' +
        ' | Цена ' + arr[position].price + ' грн'
    );

console.log('Ваш чек :')

for (let i = 0; i<menu.length; i++) {

    checkUser(menu, i);
}
console.log(' ')
/* Допустим пользователь выбрал 3 позиции */

let userChoice = [menu[0], menu[1], menu[2]];


/**/

function checkCounting () {
    let finalCheck = 0;

    for (let i = 0; i<userChoice.length; i++) {
        finalCheck = finalCheck + menu[i].price;
    }
    let srednee = finalCheck / userChoice.length;

    console.log('Сумма ' + finalCheck + ' ' + menu[0].currency)
    console.log('Среднее ' + srednee)
}

checkCounting();



/**/

let numbers = [menu[0].price, menu[1].price, menu[2].price];
numbers = numbers.sort(function(a, b) {
    return a - b;
});

console.log('Самая дорогая покупка в чеке '+ numbers[(numbers.length - 1)] + ' ' + menu[0].currency)


// function getAverageAge(users) {
//
//     return users.reduce((iterator, item) => iterator + item.price, 0) / users.length;
// }
//
// let arr = [ menu[0], menu[1], menu[2]];
//
// console.log('Среднее ' + getAverageAge(arr));


