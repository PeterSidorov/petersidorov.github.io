

let ourPromise = new Promise(function(resolve, reject) {

    // function abc() {
    //
    //     if (Math.random() < 0.5) {
    //         resolve(159);
    //     } else {
    //         reject("i am sorry, i loose");
    //     }
    // }

    setTimeout(resolve(159753),5000);
});

ourPromise.then(function(promiseResult){
    console.log(promiseResult);
})

let x = 0;
fetch(
    "#"
).then(function (promiseResult){
    x = promiseResult.json();
    abc()
})