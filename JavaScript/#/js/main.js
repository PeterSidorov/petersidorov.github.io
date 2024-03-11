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

function printMyName (a) {
    console.log(a)
}

setTimeout(printMyName('Peter'), 2000);
