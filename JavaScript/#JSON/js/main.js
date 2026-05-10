const textAreaJson = document.querySelector('#textAreaJson')
const textAreaJs = document.querySelector('#textAreaJs')
const btn = document.querySelector('#btn')




btn.addEventListener('click', (e) => {

    let f = textAreaJson.value;
    console.log(f);

    let js = JSON.parse(f);

    console.log(js);

    // textAreaJs.value = "{\n  \"name\": \"" + js.name + "\",\n  \"age\": " + js.age + ",\n  \"city\": \"" + js.city + "\"\n}";;

    let output = "";

    for (let key in js) {
        if (js.hasOwnProperty(key)) {
            output += key + ": " + js[key] + "\n";
        }
    }

    textAreaJs.value = output;
})
