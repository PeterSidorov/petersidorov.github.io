let username = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementById('button');
let textUsername = document.querySelector('.text-username');
let textPassword = document.querySelector('.text-password');



function light (a,b) {
    button.addEventListener('click', function () {
        if (a.value === "") {
            b.classList.remove('none')
            a.classList.add('red')
        } else {
            b.classList.add('none')
            a.classList.remove('red')
        }
    });
}
light(username,textUsername);
light(password,textPassword);