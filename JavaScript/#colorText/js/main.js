const boxes = document.querySelectorAll('.box');

const paragraph = document.querySelector('.paragraph');

console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = boxes[i].dataset.color;
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        paragraph.style.color = boxes[i].dataset.color;
    })
}