/*
function a () {
    console.log('Hello, world')
}

a();
*/
/*
const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!')
    }
}
*/
/*
myCity.cityGreeting();

const d = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status: {
        completed: false
    }
}

const dd = JSON.stringify(d);
console.log(dd);

const returN = JSON.parse(dd);

console.log(returN);

const user = {
    age: 45,
    car: 'BMW M5',
    music: 'Rap',
    city: {
       first: 'Kyiv'
    }
};

console.log(user);

const userCopy = JSON.parse(JSON.stringify(user));

userCopy.age = 35;

console.log(user);
console.log(userCopy);
*/


/*
function myFn (a,b) {

}
 */
/*
const personOne= {
    name: 'Bob',
    age: 23
}

function increasePersonAge (person) {

    const updatePerson = JSON.parse(JSON.stringify(personOne));
    updatePerson.age += 7;
    return updatePerson
}
const updatePersonOne = increasePersonAge(personOne);

console.log(personOne.age);
console.log(updatePersonOne.age);
 */
/*
function printMyName (a) {
    console.log(a)
}
setTimeout(printMyName('Peter'), 2000); //Задержда перед выполнением
 */
/*
const button = {
    width: 200,
    text: 'Buy',
    color: 'black'
}
console.table(button);

const redButton = {
    ...button, //Берет старый обьект и к нему добавляет новые значения
    color: 'red'
}

console.table(redButton);
 */
/*
let person = {
    city: 'Kyiv',
    years: 21,
    name: 'Peter'
}
const myName = 'My name is';
const anni = 'ho' + ' ' +person.years + ' ' + 'anni.';



console.log(`${myName} ${person.name}, ${anni}`);
 */


/*
const myFunction = (a,b) => {
    let c;

    a = a+1;
    c= a+b;

    return c;
}

console.log(myFunction(5,3))
 */
const multByFactor = (value, multiplier = 1) => {
    return value * multiplier
}

console.log(multByFactor(4, 0));
console.log(multByFactor(4));
const firstPost = {
    id: 1,
    author: 'Bogdan',
}

const newPost = (post, addedAt = Date()) => {
    return post = firstPost.addedAt

}



console.log(newPost(firstPost))
