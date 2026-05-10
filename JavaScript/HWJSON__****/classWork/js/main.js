let search = document.querySelector('.search')
let btn = document.querySelector('.btn')
let name = document.querySelector('.name')
let login = document.querySelector('.login')
let urlGithub = document.querySelector('.urlGithub')
let blog = document.querySelector('.blog')
let city = document.querySelector('.city')
let email = document.querySelector('.email')
let followers = document.querySelector('.followers')
let following = document.querySelector('.following')
let imgBody = document.querySelector('.imgBody')


btn.addEventListener('click', (e) => {
    console.log(search.value);

    const apiUrl = `https://api.github.com/users/${search.value}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Парсим ответ как JSON
        })
        .then(data => {
            console.log(data); // Выводим данные в консоль
            console.log(data.name);
            imgBody.innerHTML = ` <img class="imgMain" src="${data.avatar_url}">`

            name.innerText = data.name;
            login.innerText = data.login;
            urlGithub.innerText = data.url;
            blog.innerText = data.blog;
            city.innerText = data.location;
            email.innerText = data.email;
            followers.innerText = data.followers;
            following.innerText = data.following;


        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

})


let student = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 19,
    subjects: ["English", "History", "Marketing"],
    course: 3
}
// const { name, surname, age, subjects:[one, two, three], course } = student;

// console.log(name)

arr = [2,4,6,8,16];
const practice =(mass,multiplier = 2)=>{
    let newArr = [];
    for (let i = 0; i < mass.length; i++) {
        newArr[i] = mass[i] * multiplier;
    }
    return newArr;
}
const practice2 =(mass,multiplier = 2)=>{
    const doubledNumbers = mass.map(number => number * multiplier);
    return doubledNumbers;
}

console.log(practice(arr))
console.log(practice2(arr, 2))

let green = document.querySelector('.green')
let orange = document.querySelector('.orange')
let red = document.querySelector('.red')
let style2 = document.querySelector('.style2')

const colorBlock = (first, two) => {
    first.addEventListener('mouseover', function () {
        two.style.backgroundColor = first.dataset.info;
    })
}
const colorBlockEnd = (first, two) => {
    first.addEventListener('mouseout', function () {
        two.style.backgroundColor = two.dataset.info;
    })
}

colorBlock(green, style2);
colorBlock(orange, style2);
colorBlock(red, style2);

colorBlockEnd(green, style2);
colorBlockEnd(orange, style2);
colorBlockEnd(red, style2);