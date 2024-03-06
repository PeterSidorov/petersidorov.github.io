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

// function sum(a,b) {
//     const c = a + b
//     console.log(c)
// }
//
// sum(12,8);




function myFn (a,b) {
    let c;
    a = a + 1;
    c = a + b;
    return c;
}

console.log(myFn(10,25));
