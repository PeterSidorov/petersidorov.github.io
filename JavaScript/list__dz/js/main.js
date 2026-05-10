let textUser = document.getElementById('textUser');
let btn = document.getElementById('btn');
let mainList = document.getElementById('mainList');
let errore = document.getElementById('errore');

let inputMain = document.querySelectorAll(".inputMain");

let inputIndividualSymbol = document.getElementById('inputIndividualSymbol');

console.log(inputMain);

function checInput () {
    for(let i = 0; i < inputMain.length; i++ ) {
        if (inputMain[i].checked) {
            return inputMain[i].value
        }
    }
}


btn.addEventListener('click', function() {
    let arrTextUser = textUser.value.split('\n').filter(Boolean);
    console.log(arrTextUser);



    mainList.innerHTML = ' ';

    console.log(checInput());


    const arrWithElement = [];

    arrTextUser.forEach((url, index) => {
        if (url.startsWith('https://') || url.startsWith('http://')) {
            arrWithElement.push(index);
        }
    });

    console.log(arrWithElement);



    if (checInput() === undefined) {
        console.log('Inpute не выбран');
        arrTextUser.forEach((li) => {
            mainList.innerHTML += `<li class="main__list_item">${li}</li>`;
        });
    } else {
        console.log(' Input выбран ');
        if (checInput() == 1) {
            inputIndividualSymbol.value = ' ';
            //Нумерация
            arrTextUser.forEach((li, i) => {
                mainList.innerHTML += `<li class="main__list_item">${i + 1 + ')'} ${li}</li>`;
            });
        } else if (checInput() == 2) {
            inputIndividualSymbol.value = ' ';
            //Просто кружочек
            arrTextUser.forEach((li) => {
                mainList.innerHTML += `<li class="main__list_item">${`◦`} ${li}</li>`;
            });
        } else if (checInput() == 3) {
            if (inputIndividualSymbol.value.trim() === '') {

                console.log('Напишите индивидуальный символ')
                errore.classList.add('active');

            } else {
                console.log('Символ есть')
                errore.classList.remove('active');
                //индивидуальный символ
                arrTextUser.forEach((li) => {
                    mainList.innerHTML += `<li class="main__list_item">${inputIndividualSymbol.value} ${li}</li>`;
                });
            }
        } else {
            console.log('ERRORE')
        }
    }
})
