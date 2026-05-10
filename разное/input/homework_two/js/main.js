let email = document.getElementById('email');


let username = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementById('button');
let textUsername = document.querySelector('.text-username');
let textPassword = document.querySelector('.text-password');
let textEmail = document.querySelector('.text-email');






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


button.addEventListener('click', function () {

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


    if (emailPattern.test(email.value)) {
        console.log("Valid email address");
        textEmail.classList.add('none')
        email.classList.remove('red')
    } else {
        console.log("Invalid email address");
        textEmail.classList.remove('none')
        email.classList.add('red')
    }

    if (passPattern.test(password.value)) {
        console.log("Valid password address");
    } else {
        console.log("Invalid password address");
    }

});


