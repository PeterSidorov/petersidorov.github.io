let username = document.querySelector('#username');
let textAreaUser = document.querySelector('#textAreaUser');
let userBtn = document.querySelector('#userBtn');

let divElement = document.getElementById('fullComent');
let divNew = document.createElement('div');


console.log(username);
console.log(textAreaUser);
console.log(userBtn);




userBtn.addEventListener('click', () => {
    divNew.innerHTML += `<p class="nameUser">${username.value}</p>
                    <p class="dateUser">28 11 2024</p>
                    <p class="coment">${textAreaUser.value}</p>`;
    divElement.prepend(divNew);
})


