"use strict";
console.log('started....');
//1 https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript
const arr1 = [1, 2, 2];
function squareSum(arr1) {
    return arr1.map((val) => val * val).reduce((acc, cur) => acc + cur, 0);
}
console.log(squareSum(arr1));
