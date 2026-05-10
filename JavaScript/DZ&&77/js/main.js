let userTextWeb = "7 8 8, Привет !!!! ... ,,, //"; // Сюда вводим текст
/// 3 цифры, 13 знаков, 7 пробелов, 6 букв

console.log(userTextWeb);


const statistic = (userText) => {
    let abc = userText.match(/[a-zA-Zа-яА-Я]/g)
    let numbers = userText.match(/\d/g);
    let space = userText.match(/\s/g);
    let symbols = userText.match(/[^a-zA-Zа-яА-ЯёЁ\d\s]/g);

    console.log('Количество букв' + ' ' + `${abc.length}`);
    console.log('Количество цифр' + ' ' + `${numbers.length}`);
    console.log('Количество пробелов' + ' ' + `${space.length}`);
    console.log('Количество символов' + ' ' + `${symbols.length}`);
}

statistic(userTextWeb)