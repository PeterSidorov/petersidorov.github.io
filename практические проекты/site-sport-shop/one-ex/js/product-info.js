const groupTitleElements = document.querySelectorAll('.group-title');


for (let i = 0; i < groupTitleElements.length; i++) {
    groupTitleElements[i].addEventListener('click', function () {
        this.parentElement.classList.toggle('active');
    })
}
