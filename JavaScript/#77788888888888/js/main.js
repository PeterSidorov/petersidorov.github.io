/**/
let firstname = document.querySelectorAll('.firstname')
let lastname = document.querySelectorAll('.lastname')
let age = document.querySelectorAll('.age')
let company = document.querySelectorAll('.company')

let firstnameMain = document.getElementById('firstname')
let lastnameMain = document.getElementById('lastname')
let ageMain = document.getElementById('age')
let companyMain = document.getElementById('company')



const object = {
    arrFirstName : [],
    arrLastName : [],
    arrAge : [],
    arrCompany : [],
};

let i = 0;

function arrrr (listElement, arrElement) {
    for (let i = 0; i < listElement.length; i++) {
        arrElement[i] = listElement[i].textContent;
    }
}
arrrr(firstname, object.arrFirstName)
arrrr(lastname, object.arrLastName)
arrrr(age, object.arrAge)
arrrr(company, object.arrCompany)



firstnameMain.addEventListener("click", function() {
    // По одному клику в порядке убывания
    object.arrFirstName = object.arrFirstName.sort(function(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    console.log(object.arrFirstName)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        firstname[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrFirstName.length; i++) {
        firstname[i].innerHTML = object.arrFirstName[i];
    }
})
firstnameMain.addEventListener("dblclick", function() {
    // По одному дабл-клику в порядке возрастания
    object.arrFirstName = object.arrFirstName.sort();
    console.log(object.arrFirstName)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        firstname[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrFirstName.length; i++) {
        firstname[i].innerHTML = object.arrFirstName[i];
    }
})
/**/

lastnameMain.addEventListener("click", function() {
    // По одному клику в порядке убывания
    object.arrLastName = object.arrLastName.sort(function(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    console.log(object.arrLastName)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        lastname[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrLastName.length; i++) {
        lastname[i].innerHTML = object.arrLastName[i];
    }
})

lastnameMain.addEventListener("dblclick", function() {
    // По одному дабл-клику в порядке возрастания
    object.arrLastName = object.arrLastName.sort();
    console.log(object.arrLastName)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        lastname[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrFirstName.length; i++) {
        lastname[i].innerHTML = object.arrLastName[i];
    }
})

/**/

ageMain.addEventListener("click", function() {
    // По одному клику в порядке убывания
    object.arrAge = object.arrAge.sort(function(a, b) {
        return b - a;
    });
    console.log(object.arrAge)
    /**/
    for (let i = 0; i < age.length; i++) {
        age[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrAge.length; i++) {
        age[i].innerHTML = object.arrAge[i];
    }
})
ageMain.addEventListener("dblclick", function() {
    // По одному дабл-клику в порядке возрастания
    object.arrAge = object.arrAge.sort(function(a, b) {
        return a - b;
    });
    console.log(object.arrAge)
    /**/
    for (let i = 0; i < age.length; i++) {
        age[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrAge.length; i++) {
        age[i].innerHTML = object.arrAge[i];
    }
})


companyMain.addEventListener("click", function() {
    // По одному клику в порядке убывания
    object.arrCompany = object.arrCompany.sort(function(a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    console.log(object.arrCompany)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        company[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrCompany.length; i++) {
        company[i].innerHTML = object.arrCompany[i];
    }
})

companyMain.addEventListener("dblclick", function() {
    // По одному дабл-клику в порядке возрастания
    object.arrCompany = object.arrCompany.sort();
    console.log(object.arrCompany)
    /**/
    for (let i = 0; i < firstname.length; i++) {
        company[i].innerHTML = '';
    }
    for (let i = 0; i < object.arrFirstName.length; i++) {
        company[i].innerHTML = object.arrCompany[i];
    }
})
