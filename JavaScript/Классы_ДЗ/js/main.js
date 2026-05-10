const printer = document.getElementById('printer')


const btn = document.getElementById('btn')

class ForPrint {
    constructor(color, percent, text) {
        this.color = color
        this.percent = percent
        this.text = text

        let sumSymbol = text.replace(/\s/g, '').length;

        console.log(sumSymbol)

        if ((sumSymbol * 0.5) <= percent) {
            console.log('Чернил хватает')
            printer.innerHTML += `<a style="color: ${color}" class="textPrinter">${text}</a>`;
        } else {
            console.log('Чернил не хватает')
            printer.innerHTML += `<a style="color: ${color}" class="textPrinter">Мало краски</a>`;
        }
    }
}


btn.addEventListener('click', function (){
    const inputColor = document.getElementById('inputColor')
    const inputPercent = document.getElementById('inputPercent')
    const inputText = document.getElementById('inputText')

    printer.innerHTML = '';


    const  user1 = new ForPrint(inputColor.value, inputPercent.value, inputText.value);


})



