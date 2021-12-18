let math = Math;
console.log(math.E)
var calSpace = document.getElementById(`calSpace`);
var container = document.querySelector(`.container`);
var digit = document.querySelectorAll(`.digit`);
var day = document.getElementById(`day`);
var night = document.getElementById(`night`);

day.addEventListener(`click`, (e) => {
    day.classList.add(`display1`);
    night.classList.remove(`display1`);
    container.classList.remove(`night`);
    digit.forEach(element => {
        element.classList.remove(`night`);
    });
})
night.addEventListener(`click`, (e) => {
    container.classList.add(`night`);
    digit.forEach(element => {
        element.classList.add(`night`);
    });
    night.classList.add(`display1`);
    day.classList.remove(`display1`);

})


let clear = document.getElementById(`clear`);
let backSpace = document.getElementById(`backSpace`);
let percentage = document.getElementById(`percentage`);
let divide = document.getElementById(`divide`);
let seven = document.getElementById(`seven`);
let eight = document.getElementById(`eight`);
let nine = document.getElementById(`nine`);
let multiple = document.getElementById(`multiple`);
let four = document.getElementById(`four`);
let five = document.getElementById(`five`);
let six = document.getElementById(`six`);
let minus = document.getElementById(`minus`);
let one = document.getElementById(`one`);
let two = document.getElementById(`two`);
let three = document.getElementById(`three`);
let add = document.getElementById(`add`);
let exp = document.getElementById(`exp`);
let zero = document.getElementById(`zero`);
let dot = document.getElementById(`dot`);
let equal = document.getElementById(`equal`);

clear.addEventListener(`click`, (e) => {
    e.preventDefault();
    calSpace.innerHTML = "0";
})

backSpace.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.length <= 10) { calSpace.style.fontSize = "2.4rem"; }
    if (calSpace.innerText == 0) { }
    else if (calSpace.innerText <= 9) {
        calSpace.innerText = 0;
    }
    else if (calSpace.innerText == 'error') { calSpace.innerText = 0 }
    else {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
    }
})

one.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '1';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '1';
    }
})
two.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '2';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '2';
    }
})
three.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '3';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '3';
    }
})
four.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '4';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '4';
    }
})
five.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '5';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '5';
    }
})
six.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '6';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '6';
    }
})
seven.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '7';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '7';
    }
})
eight.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '8';
    } else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '8';
    }
})
nine.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '9';
    }
    else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '9';
    }
})
zero.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '0';
    }
    else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '0';
    }
})
dot.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('%') || calSpace.innerText.endsWith('-') || calSpace.innerText.endsWith('x') || calSpace.innerText.endsWith('+')) { }
    else if (calSpace.innerText == 'e') { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '.';
    }
})
exp.addEventListener(`click`, (e) => {
    e.preventDefault();
    let reg = /[0-9]/;
    if (calSpace.innerText == 0) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + 'e';
    }
    else if (calSpace.innerText == 'e' || reg.test(calSpace.innerText[calSpace.innerText.length - 1])) { calSpace.innerText = 'error'; }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + 'e';
    }
})
add.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('+')) {
    }
    else if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('%') || calSpace.innerText.endsWith('-') || calSpace.innerText.endsWith('x') || calSpace.innerText.endsWith('/')) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '+';
    }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '+';
    }
})
minus.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('-')) {
    }
    else if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('%') || calSpace.innerText.endsWith('+') || calSpace.innerText.endsWith('x') || calSpace.innerText.endsWith('/')) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '-';
    }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '-';
    }
})
multiple.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('x')) {
    }
    else if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('%') || calSpace.innerText.endsWith('-') || calSpace.innerText.endsWith('+') || calSpace.innerText.endsWith('/')) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + 'x';
    }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + 'x';
    }
})
divide.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('/')) {
    }
    else if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('%') || calSpace.innerText.endsWith('-') || calSpace.innerText.endsWith('x') || calSpace.innerText.endsWith('+')) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '/';
    }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = calSpace.innerText + '/';
    }
})
percentage.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (calSpace.innerText.endsWith('%')) {
    }
    if (calSpace.innerText.includes('e')) {
        calSpace.innerText = calSpace.innerText.replace('e', '0.0271828');
    }
    else if (calSpace.innerText == 0) {
        calSpace.innerText = '0';
    }
    else if (calSpace.innerText.endsWith('.') || calSpace.innerText.endsWith('-') || calSpace.innerText.endsWith('x') || calSpace.innerText.endsWith('+') || calSpace.innerText.endsWith('/')) {
        calSpace.innerText = calSpace.innerText.slice(0, calSpace.innerText.length - 1);
        calSpace.innerText = calSpace.innerText + '%';
    }
    else {
        if (calSpace.innerText.length >= 10) { calSpace.style.fontSize = "2rem"; }
        calSpace.innerText = String(Number(calSpace.innerText[calSpace.innerText.length - 1]) * 0.01);
    }
})

equal.addEventListener(`click`, (e) => {
    calVar = calSpace.innerText;
    if (calVar.includes("x")) {
        calVar = calVar.replace('x', '*');
    }
    if (calVar.includes("e")) {
        calVar = calVar.replace('e', '2.71828');
    }
    calSpace.innerText = eval(calVar);
})