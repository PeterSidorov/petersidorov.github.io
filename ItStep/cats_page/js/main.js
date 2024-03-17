let btn = document.getElementById('btn');
let modal = document.getElementById('window');
let cat = document.getElementById('catImg');

function addEventChangeClass (a) {
    a.addEventListener('click', function () {
        modal.classList.toggle('active');
    })
}
addEventChangeClass(btn);
addEventChangeClass(cat);