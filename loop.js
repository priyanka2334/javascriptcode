//  Quation 1


// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = num;
// while (i >= 1) {
//     let j = 1;
//     while (j <= i) {
//         process.stdout.write("* "); // print "*" without newline
//         j = j + 1;
//     }
//     console.log(""); // newline after each row
//     i = i - 1;
// }



// sum natural number Quation 2

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// let sum = 0;
// while(i<=num){
//     sum = sum + i;
//     i = i + 1;
// }
// console.log(sum);


// sum of the n even natural number quation 3

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 2;
// let sum = 0;
// while(i<=num){
//     sum = sum + i;
//     i = i + 2;
// }
// console.log(sum);


// divisible by 7 n Number; Quation 4

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// while(i<=num){
//     if(i%7==0){
//         console.log(i);
//     }
//     i = i + 1;
// }


// product n natural Quation 5

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// let pro = 1;
// while(i<=num){
//     pro = pro * i;
//     i = i + 1;
// }
// console.log(pro);


// all even natural number divisible by 7; quation 6

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let u = 2;
// while(u<=num){
//     if(u%7==0){
//         console.log(u);
//     }
//     u = u + 2;
// }


// print pramid quation 7

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// while(i<=num){
//     let j = 1;
//     while(j<=num-i){
//         process.stdout.write(" ");
//         j = j + 1;
//     }
//     let k = 1;
//     while(k<=i){
//         process.stdout.write("* ");
//         k = k + 1;
//     }
//     console.log("");
//     i = i + 1;
// }

// find the sum of the squres of the n natural number quation 8

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// let c = 1;
// let sum = 0;
// while(c<=num){
//     if(i%3==0){
//         c = c + 1;
//         sum = sum + i*i;
//         console.log(sum);
//     }
//     i = i + 1;
// }


// find the sum of all the number that divisible by p but not divisible q: Quation 9

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 2;
// let p = 2;
// let q = 3;
// let sum = 0;
// while(i<=num){
//     if(i%p==0 || i%q!=0){
//         sum = sum + i;
//         console.log(sum);
//     }
//     i = i + 1;
// }

// find n prime number Quation 10

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// let c;
// while(i<=num){
//     let j = 1;
//     c = 0;
//     while(j<=i){
//         if(i%j==0){
//         c = c + 1;
//     }
//     j = j + 1;
// }
// if(c==2){
//     console.log(i);
// }
// i = i + 1;
// }


// find the n perfect number Quation 11

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let sum
// let i = 1;
// while(i<=num){
//     let j = 1;
//     sum = 0;
//     while(j<i){
//         if(i%j==0){
//             sum = sum + j;
//         }
//         j = j + 1;
//     }
//     if(sum == i){
//         console.log(i);
//     }
//     i = i + 1;
// }


// Fibonacci number quation 12


// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// let x = 0;
// let y = 1;
// let sum = 0;
// while(i<=num){
//     x = y;
//     y = sum;
//     sum = x + y;
//     console.log(sum);
//     i = i + 1;
// }



// Armstrong number Quation 13

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1 = num;
// let num2  = num1;
// let c = 0;
// let sum = 0;
// while(num>0){
//     let a = num % 10;
//     c = c + 1;
//     num = Math.floor(num / 10);
// }
// num1 = num2;
// while(num1>0){
//     let k = num1 % 10;
//     sum = sum + k ** c;
//     num1 = Math.floor(num1 / 10);
// }
// if(sum===num2){
//     console.log("Yes");
// }else{
//     console.log("NO");
// }


// multiplication table Quation 14

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let i = 1;
// while(i<=num){
//     let j = 1;
//     while(j<=10){
//         let fact = j * i;
//         // console.log('${j} * ${i}= ${fact}');
//         console.log(fact);
//         j = j + 1;
//     }
//     console.log("")
//     i = i + 1;

// }

let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = arr.map(element => element * 5);
console.log(arr1);