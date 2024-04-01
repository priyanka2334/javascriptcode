
// 1. Take two number num,num1 and print the sum diffrence quotient and modulus of a & b ?

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1= parseInt(prompt("Enter the number1"));
// console.log(num + num1);
// console.log(num % num1);
// console.log(num * num1);
// console.log(num - num1);
// console.log(num / num1);


// 2.Take two numbers and only print the integer part when a is divided by num1.

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1= parseInt(prompt("Enter the number1"));
// console.log(parseInt(num/num1));


// 3. Take two numbers num,num1 and print the exponential power of the first number raised by the second.

// const prompt =require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1 = parseInt(prompt("Enter the num1"));
//  console.log(num**num1);


// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter tne number"));
// let num1 = parseInt(prompt("Enter the number1"));
// let a = num/num1;
// let b = a - parseInt(a);
// console.log(b);


// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number1"));
// let num1 = parseInt(prompt("Enter the number2"));
// let num2 = parseInt(prompt("Enter the number3"));
// let num3 = parseInt(prompt("Enter the number4"));
// let num4 = parseInt(prompt("Enter the number5"));
// let sum = num + num1 + num2 + num3 + num4;
// let avg = sum/5;
// console.log(avg);


// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1 = parseInt(prompt("Enter the number"));
// if(num<num1){
//     console.log("profit");
// }else{
//     console.log("loss");
// }

// 7. Take a number and print out the last digit of the number.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let a = num % 10;
// console.log(a);


// 8. Take a 2 digit number and return the first and last digits.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let a = num / 10;
// let b = num % 10;
// console.log("first digits" + parseInt(a));
// console.log ("last digits" + b);


//9. Write a JavaScript program to find the largest of three numbers.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1 = parseInt(prompt("Enter the number"));
// let num2= parseInt(prompt("Enter the number"));
//  let largest = num;
//  if(num1>largest){
//     num1 = largest;
//  }
//  if(largest>num2){
//     num2 = largest;
//  }
//  console.log(largest);


// 10. Write a JavaScript program to check whether a number is even or odd.

// const prompt = require ('prompt-sync')();
// let num = parseInt (prompt("Enter the number"));
// if(num % 2===0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }


// 11. Write a JavaScript program to check whether a given number is prime or not.

// const prompt = require ('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let co = 0;
// let i;
// for( i = 1; i<=num; i++){
//     if(num%i==0){
//         co = co + 1;
//     }
// }
// if(co==2){
//     console.log("YES");
// }else{
//     console.log("NO");
// }



// find the max number
// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));
// let num3 = parseInt(prompt("Enter the third number: "));
// let num4 = parseInt(prompt("Enter the fourth number: "));
// let maxNumber = Math.max(num1, num2, num3, num4);
// console.log("The maximum number is: " + maxNumber);



// find the minmum number of four number

// const prompt = require('prompt-sync')();
// let num = parseInt(prompt("Enter the number"));
// let num1 = parseInt(prompt("Enter the number"));
// let num2 = parseInt(prompt("Enter the number"));
// let num3 = parseInt(prompt("Enter the number"));
// let minNumber = Math.min(num, num1, num2, num3);
// console.log("The maximum number is:" + minNumber);


// let name = "priyanka diwakar";
// console.log(name.length);


// let text = "AHELLO WORLD";
// let char = text.charAt(0);
// console.log(char);


// let text = "A HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);


// let name = "W3Schools";
// let letter = name.charAt(2);
// console.log(letter);


// let name = "priyanka";
// console.log(name[0]);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(0);
// console.log(part);


// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7);
// console.log(part);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let text1 = "  priyanka diwakar    ";
// let text2 = text1.trim();
// console.log(text2);

// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();
// console.log(text2);

// let text1 = "Hello";
// let text2 = "World";
// let text4 = "priyanka";
// let text3 = text1.concat(" ", text2," ",text4);
// console.log(text3);


// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);


// let text = "Hello world!";
// let result = text.repeat(10);
// console.log(result);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);


// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(padded);

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);


// let text = "Please visit Microsoft!";
// let newText = text.replace("Please", "Priyanka");
// console.log(newText);


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

