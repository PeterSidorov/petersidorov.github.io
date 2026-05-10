let canvas = document.querySelector('#canvasMain');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const boxes = document.querySelectorAll('.box');
let inputTouche;
let drawing = false;
let startX, startY;

// Установка цветов для коробок
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = boxes[i].dataset.color;
}

// Обработчик выбора цветов
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        for (let j = 0; j < boxes.length; j++) {
            boxes[j].classList.remove('active');
        }
        boxes[i].classList.add('active');
        ctx.fillStyle = boxes[i].dataset.color; // установка выбранного цвета для рисования
    });
}

// Обработчик выбора фигуры
let inputs = document.querySelectorAll('input[name="f"]');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(event) {
        inputTouche = event.target.value;
        console.log(`Выбрана фигура: ${inputTouche}`);
    });
}

// Начало рисования или фиксированного клика
canvas.addEventListener('mousedown', function(event) {
    const rect = canvas.getBoundingClientRect();
    startX = event.clientX - rect.left;
    startY = event.clientY - rect.top;
    drawing = true;
});

// Завершение рисования или фиксированный клик
canvas.addEventListener('mouseup', function(event) {
    const rect = canvas.getBoundingClientRect();
    const endX = event.clientX - rect.left;
    const endY = event.clientY - rect.top;
    drawing = false;

    if (startX === endX && startY === endY) {
        // Пользователь просто кликнул по канвасу
        console.log('Простой клик');
        switch (inputTouche) {
            case 'square':
                ctx.fillRect(startX - 25, startY - 25, 50, 50);
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(startX, startY, 25, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'rhombus':
                ctx.save();
                ctx.translate(startX, startY);
                ctx.rotate(Math.PI / 4);
                ctx.fillRect(-25, -25, 50, 50);
                ctx.restore();
                break;
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(startX, startY - 25);
                ctx.lineTo(startX - 25, startY + 25);
                ctx.lineTo(startX + 25, startY + 25);
                ctx.closePath();
                ctx.fill();
                break;
        }
    } else {
        // Пользователь зажал мышку и рисовал
        console.log('Рисование с зажатием мышки');
        const width = endX - startX;
        const height = endY - startY;

        switch (inputTouche) {
            case 'square':
                ctx.fillRect(startX, startY, width, width);
                break;
            case 'circle':
                ctx.beginPath();
                const radius = Math.sqrt(width * width + height * height);
                ctx.arc(startX, startY, radius, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 'rhombus':
                ctx.save();
                ctx.translate(startX + width / 2, startY + height / 2);
                ctx.rotate(Math.PI / 4);
                ctx.fillRect(-width / 2, -height / 2, width, height);
                ctx.restore();
                break;
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(startX + width / 2, startY);
                ctx.lineTo(startX, startY + height);
                ctx.lineTo(startX + width, startY + height);
                ctx.closePath();
                ctx.fill();
                break;
        }
    }
});

// Обновление рисования при движении мыши
canvas.addEventListener('mousemove', function(event) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const endX = event.clientX - rect.left;
    const endY = event.clientY - rect.top;
    const width = endX - startX;
    const height = endY - startY;

    switch (inputTouche) {
        case 'square':
            ctx.fillRect(startX, startY, width, width);
            break;
        case 'circle':
            ctx.beginPath();
            const radius = Math.sqrt(width * width + height * height);
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'rhombus':
            ctx.save();
            ctx.translate(startX + width / 2, startY + height / 2);
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-width / 2, -height / 2, width, height);
            ctx.restore();
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(startX + width / 2, startY);
            ctx.lineTo(startX, startY + height);
            ctx.lineTo(startX + width, startY + height);
            ctx.closePath();
            ctx.fill();
            break;
    }
});
