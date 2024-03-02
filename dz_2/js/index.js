//Задание_1
const arr = document.querySelectorAll('div');
let a = arr[0].textContent;
let b = arr[1].textContent;
let c = arr[2].textContent;
console.log(a, b, c);
//Задание_2
arr[0].textContent = 'Помидор';
arr[1].textContent = 'Баклажан';
arr[2].textContent = 'Огурец';
//Задание_3
let body = document.querySelector('body');
for (let index = 0; index < 3; index++) {
    let div = document.createElement('div');
    div.textContent = index;
    div.className = 'new';
    body.appendChild(div);
}