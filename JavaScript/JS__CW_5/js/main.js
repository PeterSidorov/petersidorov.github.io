const rocket = {
    name : 'BMW',
    model : 'M3',
    year : 2024,
    averageSpeed : 100
}

let userKm = 1200;

const howManyHours = () => {

    let answer = (userKm / rocket.averageSpeed);

    let how = Math.floor(userKm / 400);

    let answerA = answer + how;


    console.log('Время в пути ' + Math.trunc(answerA) + ' часов');
}

howManyHours();













let CurrentTime = new Date();

let userHours = 0;
let userMinutes = 220;
let userSecond = 3;

CurrentTime.setHours(CurrentTime.getHours() + userHours);
CurrentTime.setMinutes(CurrentTime.getMinutes() + userMinutes);
CurrentTime.setSeconds(CurrentTime.getSeconds() + userSecond);


console.log(CurrentTime.getHours()+":"+CurrentTime.getMinutes()+":"+CurrentTime.getSeconds());















// const currentTime = {
//     hours : new Date().getHours(),
//     minutes : new Date().getMinutes(),
//     second : new Date().getSeconds()
// }
//
// console.log('Сейчас '+ currentTime.hours +':'+ currentTime.minutes +':'+ currentTime.second)
//
//
// let hourss = currentTime.hours + 2;
// let minutesss = currentTime.minutes + 60;
//
// console.log('Сейчас '+ currentTime.hours +':'+ minutesss +':'+ currentTime.second)

