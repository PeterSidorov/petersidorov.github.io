let btn = document.getElementById('btn');
let htmlRandomNumber = document.getElementById('htmlRandomNumber');
let winnerTitle = document.getElementById('winnerTitle');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

btn.addEventListener('click', function(){
    let inputTryNumber = document.getElementById('inputTryNumber').value;

    let randomNubmer =  getRandomInt(1, 10);

    if (inputTryNumber == ''){
        htmlRandomNumber.innerHTML = randomNubmer;
        console.log('инпут пуст')

    } else {
        console.log('число в инпуте')
        htmlRandomNumber.innerHTML = randomNubmer;
        if (inputTryNumber == randomNubmer){
            winnerTitle.classList.add('active');
        } else {
            winnerTitle.classList.remove('active');
        }
    }
})