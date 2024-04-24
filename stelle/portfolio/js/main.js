const change = document.getElementById('changeImg');
const header = document.getElementById('header');

console.log(change);
console.log(header);

change.addEventListener("click", function (){
    header.classList.toggle('new-img');
})