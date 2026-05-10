let username = document.querySelector('#username');
let textAreaUser = document.querySelector('#textAreaUser');
let userBtn = document.querySelector('#userBtn');

let divElement = document.getElementById('fullComent');


const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

userBtn.addEventListener('click', () => {
    divElement.innerHTML += `
                    <div class="comentsBox">
                         <p class="nameUser">${username.value}</p>
                         <p class="dateUser">${day} ${month} ${year}</p>
                         <p class="coment">${textAreaUser.value}</p>
                    </div>`;
})


