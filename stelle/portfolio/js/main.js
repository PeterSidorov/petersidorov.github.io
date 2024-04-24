const change = document.getElementById('changeImg');
const header = document.getElementById('header');


change.addEventListener("click", function (){
    header.classList.toggle('new-img');
})