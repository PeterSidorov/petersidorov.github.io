const heart = document.querySelectorAll('.heart');

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', groupTitlesClick)
}
function groupTitlesClick() {
    this.parentElement.classList.toggle('active');
}