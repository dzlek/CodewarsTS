console.log("started....");

//1 https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript

// const arr1 = [1, 2, 2];

// function squareSum(arr1: number[]): number {
//     return arr1.map((val) => val*val).reduce((acc, cur) => acc + cur, 0);
// }

// console.log(squareSum(arr1));

//2 https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

// function reverseWords(str: string): string {
//   // your code here
//   return str.split(' ').map(el=>el.split('').reverse().join('')).join(' ');
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//3 https://www.codewars.com/kata/517abf86da9663f1d2000003/train/typescript

// function toCamelCase(str:string):string{
//   const arr = str.split('-').join(' ').split('_').join(' ').split(' ')
//   const firstWorld = arr[0]
//   const restWorldstoUppercace = arr.slice(1).map(el=>{
//    return el[0].toUpperCase() + el.slice(1)
//   }
//  )
//   return String([firstWorld, ...restWorldstoUppercace].join(''))
// }

// console.log(toCamelCase("The-stealth_warrior"));

//4 https://www.codewars.com/kata/54b724efac3d5402db00065e/train/typescript
// const MORSE_CODE:{[key:string]:string} = {
//   '-.-.--': '!',
//   '.-..-.': '"',
//   '...-..-': '$',
//   '.-...': '&',
//   '.----.': "'",
//   '-.--.': '(',
//   '-.--.-': ')',
//   '.-.-.': '+',
//   '--..--': ',',
//   '-....-': '-',
//   '.-.-.-': '.',
//   '-..-.': '/',
//   '-----': '0',
//   '.----': '1',
//   '..---': '2',
//   '...--': '3',
//   '....-': '4',
//   '.....': '5',
//   '-....': '6',
//   '--...': '7',
//   '---..': '8',
//   '----.': '9',
//   '---...': ':',
//   '-.-.-.': ',',
//   '-...-': '=',
//   '..--..': '?',
//   '.--.-.': '@',
//   '.-': 'A',
//   '-...': 'B',
//   '-.-.': 'C',
//   '-..': 'D',
//   '.': 'E',
//   '..-.': 'F',
//   '--.': 'G',
//   '....': 'H',
//   '..': 'I',
//   '.---': 'J',
//   '-.-': 'K',
//   '.-..': 'L',
//   '--': 'M',
//   '-.': 'N',
//   '---': 'O',
//   '.--.': 'P',
//   '--.-': 'Q',
//   '.-.': 'R',
//   '...': 'S',
//   '-': 'T',
//   '..-': 'U',
//   '...-': 'V',
//   '.--': 'W',
//   '-..-': 'X',
//   '-.--': 'Y',
//   '--..': 'Z',
//   '..--.-': '_',
//   '...---...': 'SOS'
// }

// const decodeBits = (bits: string) => {

//     return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
// };

// const decodeMorse = (morseCode: string):string => {
// const morseCodeSplittedWords = morseCode.trim().split('   ');
// console.log(morseCodeSplittedWords);
// const res = morseCodeSplittedWords.map(word=>word.split(' ').map(el=>MORSE_CODE[el]).join(''))
//     return res.join(' ');
// }

// decodeMorse('.... . -.--   .--- ..- -.. .');

//5 не решено до конца https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript

// function sumPairs(ints: number[], s: number): [number, number] | void {

// for (let i = 0; i < ints.length; i++) {
//     for (let j = i+1; j < ints.length; j++){
//         if (ints[i]+ints[j] === s) return [ints[i],ints[j]]
//     }
// }
// return undefined;
// }

// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

// const obj ={name: 'sdf', sur: '121'}

// class Sam {
//   constructor(name) {
//     this.name = name
//   }
//   hello() {alert ${this.name}}
// }

//   const obj2 = new Sam('Dimych')

//   console.log(obj2);

// // console.log(obj.__proto__);
//ЗАМЫКАНИЕ
// function greet() {
//     let count = 0;

//     function interFunc() {
//         return count++;

//     }
// return interFunc
// }

// const first = greet()  // interFunc + свой count
// const second = greet() // interFunc + свой count
// const third = greet()

// console.log(first());
// console.log(first());
// console.log(first());

// console.log(second());
// console.log(second());
// console.log(second());
// console.log(second());
// console.log(second());

// console.log(third());

// console.log(second());

// const obj ={name: 'sdf', id: '121'}

// console.log(obj.id);

// Object.defineProperties(obj, {
//   id: {
//     value: 1,
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// });

// // obj.id = 'new';

// console.log(obj.id);

// 6 https://www.codewars.com/kata/5270f22f862516c686000161/train/typescript

// function toBase64(str: string): string {
//     const res = btoa(str)
//   return res
// }

// function fromBase64(str: string): string {
//  return atob(str)
// }

// console.log(toBase64('hi'), fromBase64('hi'));

// console.log(null == undefined);

// function validISBN10(isbn: string): boolean {
//   if (!/^\d{9}[\dXx]$/.test(isbn)) return false;

//   const sum = [...isbn].reduce((acc, char, i) => {
//     const digit = (char === 'X' || char === 'x') ? 10 : Number(char);
//     return acc + digit * (i + 1);
//   }, 0);

//   return sum % 11 === 0;
// }
// console.log(validISBN10('1112223339'));
