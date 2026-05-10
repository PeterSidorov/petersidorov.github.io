
class ExtentedArray extends Array {
    constructor() {
        super();
    }
    getString(userText){
        this.userText = userText.split(' ');
        console.log(this.userText)
    }
    getHTML(list, tegName){
        this.list = list;
        console.log(list)

        tegName = document.createElement(`${tegName}`)
        list.forEach((book, i) => {
            tegName.innerHTML += `<li class="test">${i + 1 + ')'} ${book}</li>`;
        });
        console.log(tegName)
        document.body.append(tegName);
    }
}

const user = new ExtentedArray();
user.getString('Привет, меня зовут Peter !)')

user.getHTML(['f','g','rt'], 'ul');






