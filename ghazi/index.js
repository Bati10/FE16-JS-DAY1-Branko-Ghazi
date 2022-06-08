"use strict";
//ex1 1
for (let i = 1; i < 11; i++) {
    console.log(`${i}* 1=${i}`);
}
for (let i = 1; i < 11; i++) {
    console.log(`${i}* 2=${2 * i}`);
}
for (let i = 9; i < 11; i++) {
    console.log(`${i}* 2=${10 * i}`);
}
//ex2
let myName = { fname: 'Ghazi', lname: 'Alanzi' };
document.write(myName.fname + "  " + myName.lname);
let b = [myName.fname];
let m = [myName.lname];
b.forEach((pri) => {
    for (let i = 1; i < 11; i++) {
        console.log(`${i + pri}`);
    }
});
function late() {
    m.forEach((pri) => {
        for (let i = 1; i < 11; i++) {
            console.log(`${i + pri}`);
        }
    });
}
setTimeout(late, 5000);
//ex3
let myArr = ["jon", "ted", "willi", "titan"];
myArr.forEach((x, index) => {
    console.log(index);
});
myArr.forEach((x, index) => {
    console.log(x);
});
myArr.forEach((x, index) => {
    console.log(x + " " + index);
});
