// 1. Підрахуйте суму всіх чисел у заданому користувачем діа- пазоні.

let start = 1;
let end = 5;
let sum = 0;

for (let i = start; i <= end;i++) {
    sum = sum + i;
    console.log(sum)
}
console.log('Ответ = ' + sum)

// Запросіть у користувача число та виведіть усі дільники цього числа.

/*Запросить 2 числа и найти только наибольший общий делитель.*/

let one = 9;
let two = 2;
const nod = (a, b) => {
    if (b !== 0) {
        const k = a % b;
        return nod(b, k);
    }
    return a;
};

console.log('НОД чисел ' + one + ' и ' + two + ' будет: ' + nod(one, two));


// 4. Визначте кількість цифр у введеному числі.

let number = 344324432525;
newNumber = ('' + number).split('');
console.log('В числе ' + number + ': ' + newNumber.length + ' цифр')
