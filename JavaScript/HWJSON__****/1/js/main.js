let allUsersGrid = document.querySelector('.allUsersGrid');
let sectionUserInfo = document.querySelector('.userInfo');
let blockWithTables = document.querySelector('.blockWithTables');
let showPost = document.querySelector('#showPost');
let usersPostsSections = document.querySelector('.usersPosts');
let allPostUserGrid = document.querySelector('.allPostUserGrid');

const parseAddName = (data1) => {
    for (let i = 0; i < data1.length; i++) {
        allUsersGrid.innerHTML += `<div class="allUsersGridItem">
                    <p class="allUsersName">${data1[i].name}</p>
                </div>`
    }
}
/*
 */




const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
    .then(([data1, data2]) => {
        console.log('Data from first URL:', data1);
        console.log('Data from second URL:', data2);
        // Дальнейшая обработка данных
        parseAddName(data1)
        let allUsersGridItems = document.querySelectorAll('.allUsersGridItem');
        let touchUser = 0;

        for (let i = 0; i < allUsersGridItems.length; i++) {
            allUsersGridItems[i].addEventListener('click', (e) => {
                touchUser = i;
                console.log(touchUser);
                sectionUserInfo.classList.add('active');

                blockWithTables.innerHTML = `<table class="userInfoTables">
                    <tr>
                        <td class="static">Name:</td>
                        <td>${data1[touchUser].name}</td>
                    </tr>
                <tr>
                    <td class="static">Username:</td>
                    <td>${data1[touchUser].username}</td>
                </tr>
                <tr>
                    <td class="static">Address:</td>
                    <td>${data1[touchUser].address.street}</td>
                </tr>
                <tr>
                    <td class="static">Email:</td>
                    <td>${data1[touchUser].email}</td>
                </tr>
                <tr>
                    <td class="static">Phone</td>
                    <td>${data1[touchUser].phone}</td>
                </tr>
                <tr>
                    <td class="static">Website:</td>
                    <td>${data1[touchUser].website}</td>
                </tr>
                
                </table>`
            })
        }
        showPost.addEventListener('click', (e) => {
            usersPostsSections.classList.add('active');
            console.log('Шаг тут ' + touchUser);

           for (let i = 0; i < data2.length; i++) {
               if (data2[i].userId === touchUser) {
                   console.log(data2[i])
                   allPostUserGrid.innerHTML += `<div class="allPostUserGridItem">
                <p class="title">${data2[i].title}</p>
                <p class="body">${data2[i].body}</p>
            </div>`
               }
           }



        })

    })
    .catch(error => {
        console.error('Ошибка при выполнении fetch-запросов:', error);
    });







/*
 */


















