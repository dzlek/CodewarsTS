console.log('started....');

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

function toCamelCase(str:string):string{
  const arr = str.split('-').join(' ').split('_').join(' ').split(' ')
  const firstWorld = arr[0]
  const restWorldstoUppercace = arr.slice(1).map(el=>{
   return el[0].toUpperCase() + el.slice(1) 
  }
 )
  return String([firstWorld, ...restWorldstoUppercace].join(''))
}


console.log(toCamelCase("The-stealth_warrior"));