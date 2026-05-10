let color = document.querySelector('#color')
let code = document.querySelector('#code')
let typeMain = document.querySelector('#typeMain')

let btnSave = document.querySelector('#btnSave')
let itemsGridColors = document.querySelector('.itemsGridColors')

let errorColorName = document.querySelector('#errorColorName')
let errorColorCode = document.querySelector('#errorColorCode')

let labelColorName = document.querySelector('#labelColorName')

let mainArrColors = [
    {
        color : 'YELLOWGREEN',
        type : 'RGB',
        code : '154, 205, 50'
    },
    {
        color : 'DARKCYAN',
        type : 'RGBA',
        code : '0, 139, 139, 1'
    },
    {
        color : 'ORANGERED',
        type : 'HEX',
        code : '#FF4500'
    }
];


function startColors () {
    itemsGridColors.innerHTML = '';
    mainArrColors.forEach((colorObj, i) => {
        itemsGridColors.innerHTML += `<div class="itemColor" style="background: ${colorObj.type === 'HEX' ? '' : colorObj.type + '('}${colorObj.code}${colorObj.type === 'HEX' ? '' : ')'};">
        <div class="itemColorBody">
            <p class="itemColorName">${colorObj.color}</p>
            <p class="itemColorType">${colorObj.type}</p>
            <p class="itemColorCode">${colorObj.code}</p>
        </div>
    </div>`;
    });

}
startColors();

let i = mainArrColors.length;

function checkNameColor () {

    if (color.value.trim() === '') {
        console.log("Поле ввода пустое");
        errorColorName.innerHTML = 'Пустое поле ввода';
    } else {
        console.log("Поле ввода не пустое");
        let regexColor = /^[a-zA-Zа-яА-ЯёЁ]+$/;

        if (regexColor.test(color.value) === false) {
            console.log("строка содержит что то помимо букв");
            console.log(regexColor.test(color.value))
            errorColorName.innerHTML = 'Название должно быть только из букв';
            return;
        } else if (regexColor.test(color.value) === true) {
            console.log("строка содержит только буквы англ и рус");
            console.log(regexColor.test(color.value))

            for (let i = 0; i < mainArrColors.length; i++) {
                if (color.value === mainArrColors[i].color) {
                    console.log("Такое название уже существует");
                    errorColorName.innerHTML = 'Такое название уже есть';
                    return false;
                } else {
                    console.log("все гуд")
                }
            }
        }
    }


}

function checkTypeColor () {
    console.log("Выбор формата")

    let regexTypeRGB = /^ *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *, *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *, *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *$/;
    let regexTypeRGBA = /^ *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *\, *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *\, *([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) *\, *(0(\.\d+)?|1(\.0+)?) *$/;
    let regexTypeHEX = /^ *#[0-9A-Fa-f]{6} *$/;



    if (typeMain.value === "RGB"){
            console.log("Выбран формат RGB")

              if (regexTypeRGB.test(code.value) === false) {
                  console.log("не подходит")
                  errorColorCode.innerHTML = "3 числа через запятую,в диапазоне от 0 до 255";
                  return false;
              } else {
                  console.log("подходит")
                  errorColorCode.style.color = 'green';
              }

        } else if (typeMain.value === "RGBA"){
            console.log("Выбран формат RGBA")

            if (regexTypeRGBA.test(code.value) === false) {
                console.log("не подходит")
                errorColorCode.style.top = "-10px";
                errorColorCode.innerHTML = "4 числа через `,`,в диапазоне" + "<br>" + "от 0 до 255, последнее от 0 до 1";
                return false;
            } else {
                console.log("подходит")
                errorColorCode.style.color = 'green';
            }

        } else if (typeMain.value === "HEX"){
            console.log("Выбран формат HEX")

            if (regexTypeHEX.test(code.value) === false) {
                console.log("не подходит")
                errorColorCode.innerHTML = "Введите код HEX";
                return false;
            } else {
                console.log("подходит")
                errorColorCode.style.color = 'green';
            }

        }

}
btnSave.addEventListener('click', () => {


    checkNameColor();
    console.log(checkNameColor()) //false если не прошло что то

    checkTypeColor();
    console.log(checkTypeColor()) //false если не прошло что то


    if (checkTypeColor() === false) {
        console.log("ERRORE")
    } else if (checkNameColor() === false) {
        console.log("ERRORE")
    } else {
        errorColorName.innerHTML = ' ';
        mainArrColors[i] = { color: `${color.value}`, type: `${typeMain.value}`, code: `${code.value}` };
        i++;
        startColors();
    }



    // console.log(mainArrColors);


})

