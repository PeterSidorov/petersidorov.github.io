function diSolito(a,b) {
    console.log(a+b)
}
const strelochnay = (a,g) => {
    console.log(a+g)
}

diSolito(5, 4)
strelochnay(3, 4)

/* Как словить ошибку */
const fnWithError = () => {
    throw new Error('Ga ga ga... LOX')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)

}
console.log('Continue...')
/* ------------------ */

