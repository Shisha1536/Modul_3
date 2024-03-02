//Задание_1
let a = prompt();
let b = prompt();
let arr = new Array();
for (let index = a; index <= b; index++) {
    arr.push(index);
}
console.log(arr.join());
//Задание_2
let arr2 = new Array();
for (let y = 0; arr2.length < 10 ; y = Math.floor(Math.random() * (19 - 0))) {
    arr2.push(y)
}
console.log(arr2);
console.log(arr2.sort((h, j) => {return h-j}));
//Задание_3
class Books {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;

    }
    isplayInformationAboutBook() {
        return {this:name,
            this:author,
            this:year}
    }
}
let book = new Books('ВОЙНА И МИР', 'Лев Николаевич Толстой', '1868');
console.log(book);
let text = document.querySelector('.book');
text.textContent = JSON.stringify(book);