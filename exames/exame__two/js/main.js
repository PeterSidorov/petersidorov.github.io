const stelle_one = document.querySelectorAll('.img__stella_one')
const stelle_two = document.querySelectorAll('.img__stella_two')
const stella_three = document.querySelectorAll('.img__stella_three')
const stella_four = document.querySelectorAll('.img__stella_four')
const stella_five = document.querySelectorAll('.img__stella_five')
const stella_six = document.querySelectorAll('.img__stella_six')
const stella_seven = document.querySelectorAll('.img__stella_seven')
const stella_eight = document.querySelectorAll('.img__stella_eight')

const test = (main) => {
    for (let i = 0; i < main.length; i++) {

        main[i].onclick = function () {

            const result = (i);

            for (let a = 0; a < main.length; a++) {
                main[a].classList.remove('active')
            }

            for (let b = 0; b <= result; b++) {
                main[b].classList.add('active')
            }



        }
    }
}

test(stelle_one);
test(stelle_two);
test(stella_three);
test(stella_four);
test(stella_five);
test(stella_six);
test(stella_seven);
test(stella_eight);
