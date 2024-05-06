const nameUser = document.getElementById('nameUser');
const dataUser = document.getElementById('dataUser');
const btnUser = document.getElementById('btnUser');

const fullNameUser = document.getElementById('fullNameUser');
const fullNameUserName = document.getElementById('fullNameUserName');
const fullNameUserBirthday = document.getElementById('fullNameUserBirthday');

let infoDataUser;

let dateNow = new Date();
let mouthNow = dateNow.getMonth() + 1; //Дописал + 1 потому что js думает что апрель это 3 месяц
let yearNow = dateNow.getFullYear();

let htmlFulldate = dateNow.toDateString().split(' ');

let dayNow = htmlFulldate[2];

let howYouOld;
btnUser.addEventListener('click', function () {
    nameUser.classList.remove('color');
    dataUser.classList.remove('color');

    infoDataUser = dataUser.value;

    const arrInfoDataUser = infoDataUser.split('-');

   let yearDataUser = arrInfoDataUser[0];
   let monthDataUser = arrInfoDataUser[1];
   let dayDataUser = arrInfoDataUser[2];

   if (nameUser.value == '') {
       nameUser.classList.add('color');
       console.log('Инпут 1 пустой')
   }

   if (dataUser.value == '') {
       dataUser.classList.add('color');
       console.log('Инпут 2 пустой')
   }

   if (nameUser.value != '' && dataUser.value != '') {

       nameUser.classList.remove('color');
       dataUser.classList.remove('color');

       if (monthDataUser > mouthNow ) {
           howYouOld = (yearNow - yearDataUser) - 1;
           console.log('Месяц больше');
       } else if (monthDataUser < mouthNow) {
           howYouOld = (yearNow - yearDataUser);
           console.log('Месяц меньше');
       } else {
           console.log('Месяц равен')

           if (dayDataUser > dayNow) {
               howYouOld = (yearNow - yearDataUser) - 1;
               console.log('День больше')
           } if (dayDataUser < dayNow) {
               howYouOld = (yearNow - yearDataUser);
               console.log('День меньше')
           } else {
               howYouOld = (yearNow - yearDataUser);
               console.log('День равен')
               console.log('Поздравляю, у вас сегодня ДЕНЬ РОЖДЕНИЯ')
           }
       }

       fullNameUser.classList.add('active');

       fullNameUserName.innerHTML = "Вас зовут: " + nameUser.value;
       fullNameUserBirthday.innerHTML = "Вам " + howYouOld + " год";
   }
})
/**/

const sSquareInput = document.getElementById('sSquareInput');
const sSquareBtn = document.getElementById('sSquareBtn');
const sSquareFinal = document.getElementById('sSquareFinal');

const sSquareText = document.getElementById('sSquareText');

sSquareBtn.addEventListener('click', function () {
    sSquareText.classList.add('active')
    let sSquareInputValue = sSquareInput.value;
    let sSquareAnswer = sSquareInputValue * sSquareInputValue;

    sSquareFinal.innerHTML = " " + sSquareAnswer + "см";

})/**/

const circleRadiusInput = document.getElementById('circleRadiusInput');
const circleRadiusBtn = document.getElementById('circleRadiusBtn');
const circleRadiusText = document.getElementById('circleRadiusText');

const circleRadiusFinal = document.getElementById('circleRadiusFinal');

circleRadiusBtn.addEventListener('click', function () {
    circleRadiusText.classList.add('active')

    console.log(circleRadiusInput.value);

    let circleRadiusInputValue = circleRadiusInput.value;

    let circleRadiusAnswer = /*Math.PI*/ 3.14 * (circleRadiusInputValue * circleRadiusInputValue);
    circleRadiusFinal.innerHTML = " " + circleRadiusAnswer;


})