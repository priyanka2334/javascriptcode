// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));                                                                    //// Question 1
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }


// let arr = [5,4,9,2,1,0];                                 //////Question 2;
// console.log(arr.reverse());


// let arr = [5,4,9,2,1,0];
// let i = 0;                                                 ///// Question 3
// while(i<arr.length){
//     console.log(i);
//     i = i + 2;
// }


// let arr = [1,2,3,4,5,6,7];
// let a = 10;                                                    //// Question 4
// let exists = false;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]=== a){
//         exists = true;
//         break;
//     }
// }
// if(exists){
//     console.log("exists");
// }else{
//     console.log("NOT");
// }


// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the of element"));                               //// Question 5
// let arr = [];
// for(let k = 0; k<n; k++){
//     arr = (parseInt(prompt("Enter the element")));
// }
// let con = true;
// for(let i = 0;i<arr.length-1;i++){
//         if(arr[i]-arr[i-1]===1 && arr[i]-arr[i-1]===-1){
//             con = false;
//             break;
//         }
// }
// if(con){
//     console.log("YES");
// }else{
//     console.log("NO");
// }


// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));                          //// Question 6
// let arr = [];
// for(let k = 0; k<n; k++){
//     arr.push(parseInt(prompt("Enter the element")));
// }
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// let avg = sum / n;
// console.log(avg);


// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));
// let arr = [];
// for (let k = 0; k < n; k++) {                              /// occurrences number Question 7
//     arr.push(parseInt(prompt("Enter the element")));
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== -1) { 
//         let c = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr[j] = -1; 
//                 c++;
//             }
//         }
//         if (c > 1) {
//             console.log("Duplicate element:", arr[i], "Count:", c); 
//         }
//     }
// }


// const prompt = require ('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));                          //// Question 8
// let arr = [];
// for(let k = 0; k<n; k++){
//     arr.push(parseInt(prompt("Enter the element")));
// }
// let c = 0;
// let c1 = 0;
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         c = c + 1;
//     }else{
//         c1 = c1 + 1;
//     }
// }
// console.log(c,c1);



// const prompt = require ('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));
// let arr = [];                                                 //// question 9 duplicates
// for(let k = 0; k<n; k++){
//     arr.push(parseInt(prompt("Enter the element")));
// }
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]!=-1){
//         let c = 1;
//         for(let j = i+ 1; j< arr.length; j++){
//             if(arr[i]==arr[j]){
//                 arr[j]=-1;
//                 c = c + 1;
//             }
//         }
//         if(c==1){
//             console.log(c);
//             console.log(arr[i]);
//         }
//     }
// }


// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter the number"));                    Question 10
// let arr = [];
// let sum = 0;

// for(let i = 1; i <= n; i++){
//     if(i % 2 !== 0){
//         arr.push(i);
//         sum += i;
//     }
// } 
// console.log("Odd numbers from 1 to", n, "are:", arr);
// console.log("Sum of odd numbers:", sum);


//////////////////////////////////////////////////////////////// Today's Question /.////////////////////////////////////////////////////////////////


//1.Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
// let arr = [1,2,3,4,5,6];
// function sum() {
//   let add = 0;
//   for (let i = 0; i < arr.length; i++) {
//     add =add+arr[i];
//   }
//   return add;
// }
// console.log(sum());



// let arr = [1,2,3,4,5,6,7];
// function myFunction(num,num1){
//     return num + num1;
// }
// console.log(arr.reduce(myFunction));


// 2.  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.


// let arr = [1,2,3,4,5];
// function avg() {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
    
//     return sum / 5;
// }

// console.log(avg());


//  3.Find Maximum Element: Write a function to find the maximum element in an array of integers.

// let arr = [1, 2, 3, 4, 5, 6]; 
// function max() {
//     let max1 = arr[0];                          
//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] > max1) { 
//             max1 = arr[i]; 
//         }
//     } 
//     return max1; 
// }
// console.log(max()); 


//4 Find Minimum Element: Write a function to find the minimum element in an array of integers.


// let arr = [1, 2, 3, 4, 5, 6]; // Initialize the array directly

// function min() {
//     let min1 = arr[0];

//     for (let i = 1; i < arr.length; i++) { 
//         if (arr[i] < min1) { 
//             min1 = arr[i]; 
//         }
//     }
    
//     return min1; 
// }

// console.log(min()); 



// 5.  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// let arr = [1,2,3,4,5,6,7];
// function found(){
//     let a = 2;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]===a){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(found());



// 6.Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).

// let a = [2,4,7,1,8,9,2];

// function sortMethod(){
//     let b = a.sort()
//     return(b)
// }
// console.log(sortMethod(a))



//  7.Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.


// let number = [45,34,5,6,78,9];
// function myFunction(value){
//     return value % 2==0;
// }
// console.log (number.filter(myFunction));









//////////////////////////////////////////////////strings methods ////////////////////////////////////////////////

//Math.round
// let num = 3.3;                                            // output 3
// console.log(Math.round(num));


// let num = 4.6;                                                 //// output 5
// console.log(Math.round(num));


// Math.ceil

// let num = 4.8;                                                  //// output 5
// console.log(Math.ceil(num));

//Math.floor

// let num = 4.5;                                                    //// output 4
// console.log(Math.floor(num));

// Math.turnc

// let num = 6.1;                                           ///// output 6
// console.log(Math.trunc(num));


// Math.sign

// let num = -5;                                           //// output -1
// console.log(Math.sign(num));

////Math.pow

// let num = 2;                                         ////output 8
// let num1 = 2;
// console.log(Math.pow(2,3));

//// Math.sqrt

// let num = 81;                                //// output 9
// console.log(Math.sqrt(num));

////Math.min

// let num = 1;                                 ///// output 1
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;
// let num4 = 5;
// console.log(Math.min(num,num1,num2,num3,num4));


//Math.max

// let num = 1;
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;                                //// output 5
// let num4 = 5;
// console.log(Math.max(num,num1,num2,num3,num4));


//Array.length
// let fruits = ["apple","banana","orange","Mango"];
// console.log(fruits.length);

//loop array
// let arr = [1,2,3,4,5];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//push

// let arr = [1,2,3,4,5,6];                              //// output 1,2,3,4,5,6,7;
// arr.push(7);
// console.log(arr);

//pop

// let arr = [1,2,3,4,5,6];
// arr.pop();                                      ///// output 1,2,3,4,5
// console.log(arr);

//shift

// let arr = [1,2,3,4,5,6,7];
// arr.shift();                                 //// output 2,3,4,5,6,7
// console.log(arr);

///unshift

// let arr = [1,2,3,4,5,6,7];
// arr.unshift(0);                               ///// output 0,1,2,3,4,5,6,7
// console.log(arr);

//splice

// let fruits = ["Apple","Banana","orange","mango"];
// fruits.splice(1,2);
// console.log(fruits);

//concatenating

// console.log(1,2 + [,3,4]);
// console.log([1,2,]+[,3,4]);

//concat

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9];
// console.log(arr.concat(arr1));


//indexof
// let arr = ["Apple","Banana","Mango","Orange"];
// console.log(arr.indexOf("Mango"));

//include
// let arr = ["Apple","Mango","Banana","orange"];
// console.log(arr.includes("Mango"));

//join
// let arr = ["mango","Apple","Banana","orange"];
// console.log(arr.join("+"));

//find

// let arr = [
//     {name:"Riya",age: 20},
//     {name: "Priya", age: 30},
//     {name: "Paras", age: 40},
//     {name: "Amit", age: 50},
// ];
// let user = arr.find(element => element.age===40);
// console.log(user);
// console.log(user.name);

//sort

// let arr = [9,8,6,7,5,4,3,2,1];
// console.log(arr.sort( ));

//Reverse

// let arr = [9,8,7,6,5,4,3,2,1];
// console.log(arr.reverse());

//map

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArray = arr.map(element => element*2);
// console.log(newArray);

//filter
// let number = [45,34,5,6,78,9];
// function myFunction(value){
//     return value>18;
// }
// console.log (number.filter(myFunction));

// every

// let number = [23,4,5,67,89,2];
// function myFunction(value){
//     return value>=2;
// } 
// console.log(number.every(myFunction));


//some
// let number = [12,3,4,45,67,89,9];
// function myFunction(num){
//     return num>53;
// }
// console.log(number.some(myFunction));

///hosting

// console.log(a);
// greet()
// function greet(){
//     console.log("Good Morning");
// }
// var a = 9;
// // console.log(a);


//upper case

// let text = "Hello priyanka";
// console.log(text.toUpperCase());


//Lowercase
// let text = "Hello Priyanka";
// console.log(text.toLowerCase());


//concat
// let text = "Hello";
// let text1 = "      Priyanka";
// console.log(text.concat(text1));


//trim
// let text = "     Hello priyanka       ";
// console.log(text.trim(text));


//reduce
// let arr = [1,2,3,4,5,6,7];
// function myFunction(num,num1){
//     return num * num1;
// }
// console.log(arr.reduce(myFunction));

//flat

// let arr = [[1,2],[3,4],[5,6]]; 
// console.log(arr.flat());


// let num = [1,2,3,4,5,6,7,8];
// console.log(num.length);


// let arr = [[1,2],[3,4],[5,6]];
// console.log(arr.flat());

//console.log(Math.max(0,150,98,78,56,90));



// let arr = [1,2,3,4,5,6,7];
// function number(){
//     let max1 = arr[0];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]>max1){
//             max1 = arr[i];
//         }
//     }
//     return max1;
// }
// console.log(number());


// function fact(num) {
//     let fac = 1;
//     for (let i = 1; i <= num; i++) {
//         fac = fac * i;
//     }
//     return fac;
// }
// console.log(fact(5)); 



// function fact (num){
//     if(num==0){
//         return 1;
//     }
//     return num * fact(num -1);
// }
// console.log(fact(5));


// function coun(n){
//     if(n>10){
//         return 1
//     }
//     console.log(n)
//     return coun(n+1)
// }
// let num = 1;
// coun(num);


//////////////////////////////////////////power
// function power(num1, num2) {
//    return Math.pow(num1,num2);
// }
// console.log(power(5,2));



// function power(num1, num2) {
//     if (num2 === 0) {
//         return 1;
//     }
// if(num1 === 1){
//    return num1;
// }
//     return num1 * power(num1, num2 - 1);
// }

// console.log(power(5, 2));  

///////////////////////////////////////////sum of array
// arr = [1,2,3,4,5]
// function sum(arr, i =0){
//     if(i>=arr.length){
//         return 0; 
//     }
//     return arr[i] + sum(arr,i + 1);
// }
// let number = [1,2,3,4,5,6];
// console.log(sum(number));

///////////////////////////////////////Question fibonacci


// function fibo(num) {
//     if (num === 0) {
//         return 0;
//     } else if (num === 1) {
//         return 1;
//     }
//     return fibo(num - 1) + fibo(num - 2);
// }

// function fibon(n) {
//     let s = [];
//     for (let i = 0; i <= n; i++) {
//         s.push(fibo(i));
//     }
//     return s;
// }

// console.log(fibon(8)); 


/////////////////////////////////////////Qusetion Product of list

// arr = [1,2,3,4,5,6,7,8,9];
// function pro(num,i=0){
//     if(arr.length<=i){
//         return 1;
//     }
//     return arr[i] * pro(arr,i+1);
// }
// let number = [];
// console.log(pro(number));


function isPalindrome(number) {
    // Helper function to reverse the number
    function reverse(n, rev = 0) {
        if (n === 0) {
            return rev;
        }
        return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
    }

    // Check if the original number is equal to its reversed version
    return number === reverse(number);
}

// Example usage:
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false