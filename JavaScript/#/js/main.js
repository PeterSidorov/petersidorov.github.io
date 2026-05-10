let calkItemText = document.querySelectorAll(".calkItem__text");
let area = document.getElementById("area");
let ravno = document.getElementById("ravno");
console.log(area);

let sumFinal = 0;


let arr = [];
let test = 0;
for (let i = 0; i < calkItemText.length; i++) {

   calkItemText[i].addEventListener("click", function() {

       arr[test]= this.textContent;
       test++;

       area.value = arr.join(' ');

       if (calkItemText[i].textContent === '=') {
           console.log(arr);

           delete arr[arr.length - 1];


           let string = arr.join(' ');

           console.log(string);

           area.value = eval(string);
           console.log('Ответ = ' + eval(string));
       }

   })
}
