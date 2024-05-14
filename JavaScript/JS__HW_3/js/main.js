const number =(a,b)=> {
    if (a>b) {
        console.log("Число -> " + a + " больше чем число "  + b)
    } else if (a<b) {
        console.log("Число -> " + b + " больше чем число "  + a)
    } else if (a === b) {
        console.log("Числа -> " + a + " и " + b + " одинаковые")
    } else {
        console.log("ERORRE")
    }
}

number(56,56);

/**/
const power = (a,b) => {
    console.log(Math.pow(a, b));
}
power(4,3)


/**/

const calculator =(a,i,b)=> {
    if (i === '+') {
        console.log(a + b)
    } else if (i === '-') {
        console.log(a - b);
    } else if (i === '/') {
        console.log(a / b);
    } else if (i === '*') {
        console.log(a * b);
    } else if (i === '%') {
        console.log(a % b);
    } else {
        console.log('ERRORE');
    }
}

calculator(10,'*',5)

/**/

const facile =(a)=> {
    if ((a%2) == 1) {
        console.log(a + " число простое");
    } else {
        console.log("None");
    }
}
facile(2)

/**/

const table =(a)=> {
    console.log(a*1, a*2, a*3, a*4, a*5, a*6, a*7, a*8,  a*9,  a*10);
}
table(9)