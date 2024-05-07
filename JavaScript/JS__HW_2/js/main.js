const a = document.getElementById('a')
const b = document.getElementById('b')

const center = document.getElementById('center')
const answer = document.getElementById('answer')

const calculatorBtn = document.getElementById('calculatorBtn')

// const centerValue = center.value;


calculatorBtn.addEventListener('click', function () {
    let centerValue = center.value
    let aValue = a.value;
    let bValue = b.value;

    if (centerValue === '+') {
        answer.innerHTML = " " + (parseInt(aValue) +parseInt(bValue) );
    } else if (centerValue === '-') {
        answer.innerHTML = " " + (aValue - bValue);
    } else if (centerValue === '/') {
        answer.innerHTML = " " + (aValue / bValue);
    } else if (centerValue === '*') {
        answer.innerHTML = " " + (aValue * bValue);
    } else if (centerValue === '%') {
        answer.innerHTML = " " + (aValue % bValue);
    } else {
        answer.innerHTML = " " + ('ERRORE');
    }

    center.value = " ";
})

/**/

const monthInput = document.getElementById('monthInput')
const monthBtn = document.getElementById('monthBtn')
const monthText = document.getElementById('monthText')



monthBtn.addEventListener('click', function () {
    let monthInputValue = monthInput.value;

    if (monthInputValue === 'Январь') {
        monthText.innerHTML = monthInputValue + " 1 месяц";
    } else if ( monthInputValue === 'Февраль') {
        monthText.innerHTML = monthInputValue + " 2 месяц";
    } else if ( monthInputValue === 'Март') {
        monthText.innerHTML = monthInputValue + " 3 месяц";
    } else if ( monthInputValue === 'Апрель') {
        monthText.innerHTML = monthInputValue + " 4 месяц";
    } else if ( monthInputValue === 'Май') {
        monthText.innerHTML = monthInputValue + " 5 месяц";
    } else if ( monthInputValue === 'Июнь') {
        monthText.innerHTML = monthInputValue + " 6 месяц";
    } else if ( monthInputValue === 'Июль') {
        monthText.innerHTML = monthInputValue + " 7 месяц";
    } else if ( monthInputValue === 'Август') {
        monthText.innerHTML = monthInputValue + " 8 месяц";
    } else if ( monthInputValue === 'Сентябрь') {
        monthText.innerHTML = monthInputValue + " 9 месяц";
    } else if ( monthInputValue === 'Октябрь') {
        monthText.innerHTML = monthInputValue + " 10 месяц";
    } else if ( monthInputValue === 'Ноябрь') {
        monthText.innerHTML = monthInputValue + " 11 месяц";
    } else if ( monthInputValue === 'Декабрь') {
        monthText.innerHTML = monthInputValue + " 12 месяц";
    }

    monthInput.value = " ";
})


let finishRaund = 10;
let currentRaund = 0;

let firstNumber = 1;
let secondNumber = 1;

// 1 1      2 3 5 8
let fibonachi = undefined;

while (currentRaund < finishRaund) {
    currentRaund++;

    fibonachi = firstNumber + secondNumber;

    fibonachi = fibonachi + ( secondNumber = fibonachi + secondNumber);
    console.log(fibonachi)

}