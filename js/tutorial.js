"use strict";
let x = 10, message = 'Hello, World';
const myBirthday = '08.06.2003'
const COLOR_RED = "#F00";


console.log(COLOR_RED);
console.log(myBirthday);
console.log(message + ' ' +x);
console.log(x);

let name = 'John';
let admin;
admin = name;
console.log(admin);
console.log(`Hello, ${name}!`);

function showMessage (name, text) {
    if (text == undefined) {
        text = 'no text given';
    }
    console.log(text);
    console.log('Hello, Everyone!' + `My Name is ${name}`);
    return text;
}

let result = showMessage('Kent');
console.log(result);

function checkAge(age) {
    if (age >= 18) {
        return true
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('What is your age', 18);

if ( checkAge(age) ) {
    alert('access granted')
} else {
    alert('access denied');
}