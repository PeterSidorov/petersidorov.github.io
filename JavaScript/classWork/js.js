const elem = document.getElementById('header');
const boxImg = document.getElementById('boxImg');
const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const ggg = document.getElementById('ggg');

elem.addEventListener('click', function (event) {
    // добавляем обработчик события "mousemove"
    const x = event.clientX;
    const y = event.clientY;

    //console.log(`Координаты мыши: x=${x}, y=${y}`);
    boxImg.style.left = x + 'px';
    boxImg.style.top = y + 'px';
});

btn.addEventListener('click', function () {
    modal.classList.add('active');
})
ggg.addEventListener('click', function () {
    modal.classList.toggle('active');
})
