class ExtendedDate extends Date {
    // Метод для вывода даты текстом
    toText() {
        const day = this.getDate();
        const month = this.getMonth();

        const days = [
            'первого', 'второго', 'третьего', 'четвертого', 'пятого', 'шестого', 'седьмого',
            'восьмого', 'девятого', 'десятого', 'одиннадцатого', 'двенадцатого', 'тринадцатого',
            'четырнадцатого', 'пятнадцатого', 'шестнадцатого', 'семнадцатого', 'восемнадцатого',
            'девятнадцатого', 'двадцатого', 'двадцать первого', 'двадцать второго', 'двадцать третьего',
            'двадцать четвертого', 'двадцать пятого', 'двадцать шестого', 'двадцать седьмого',
            'двадцать восьмого', 'двадцать девятого', 'тридцатого', 'тридцать первого'
        ];

        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        return `${days[day - 1]} ${months[month]}`;
    }

    // Метод для проверки прошлой, будущей или текущей даты
    checkDate() {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const comparisonDate = new Date(this.getFullYear(), this.getMonth(), this.getDate());

        if (comparisonDate < today) {
            console.log('Это прошлая дата');
            return false;
        } else if (comparisonDate > today) {
            console.log('Это будущая дата');
            return true;
        } else {
            console.log('Это дата сегодня');
            return true;
        }
    }
}


const date1 = new ExtendedDate('2024-06-17');
console.log(date1.toText()); // семнадцатого июня
console.log(date1.checkDate()); // Это будущая дата, true

const date2 = new ExtendedDate('2023-01-01');
console.log(date2.toText()); // первого января
console.log(date2.checkDate()); // Это прошлая дата, false

const today = new ExtendedDate();
console.log(today.toText()); // Текущая дата текстом
console.log(today.checkDate()); // Это дата сегодня, true
