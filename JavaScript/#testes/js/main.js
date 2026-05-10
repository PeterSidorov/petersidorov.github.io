let inputs = document.querySelectorAll('input');
let btn = document.querySelector(".btn");
let answersFinish = document.querySelector(".answers_finish");
let correctAnswers = 0;


btn.addEventListener("click", function(){
    answersFinish.innerHTML = '';
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].checked) {
            if (inputs[i].value == 'correct' ) {
                correctAnswers++;
            }
        } else {
            console.log('Инпуты не выбраны')
        }

    }

    if (correctAnswers == 0) {
        answersFinish.style.color = 'red';
    } else {
        answersFinish.style.color = 'green';

    }
    answersFinish.innerHTML = `Количество правильных ответов ${correctAnswers}`;
    console.log(correctAnswers);


    correctAnswers = 0;
})


