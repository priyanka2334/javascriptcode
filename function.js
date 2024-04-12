// function sum(a,y){       ////sum of two number
//     console.log(a+y);
// }
// sum(6,4);   


// function sum(x,y){         //// sum of two number
//     s = x + y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);

// function table(){
//     const prompt = require('prompt-sync')();
//     let num = parseInt(prompt("Enter the number"));
//     for(let i = 1; i<=num*10; i++){
//         if(i%num==0){
//             console.log(i);
//         }
//     } 
// }
// table();

// function num(city, country){
//     country = country || "China";                         ///////without if condition
//     console.log("I belong to " + city + " in " + country);
// }
// num("Kanpur");


// let check= (num) => {
//     let num1 = num;                        ///// palindrom
//     let r = 0;
//     while (num > 0) {
//         let digit = num % 10;
//         r = r * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     if (r === num1) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }


// function array(arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// array([10,20,30,40]);

//  function hello(){
//     if(true){
//         let a = 10;
//         console.log(a);
//     }
//     console.log(a)
//  }
//  hello();

// function call(name,age){
//     if(age>=18){
//         console.log("hey"+name+"your age")
//     }else{
//         console.log("hey" +name+"not your age")
//     }
// }
// call("priyanka",19);


// let vote = (name, age) => {
//     if (age >= 18) {
//         return `Hey ${name}, at ${age} years old, you are eligible to vote.`;
//     } else {
//         return `Hey ${name}, at ${age} years old, you are not eligible to vote.`;
//     }
// }

// console.log(vote("priyanka", 19));






////////////////////////////////////////////Basic Arithmetic Questions //////////////////////////////////////////////- 


//1. Given length and breadth of a rectangle return the area of a rectangle.

// let rectrangle = (len , breadth) => {                      
//     return len * breadth;
// }
// let area = rectrangle(5,10);
// console.log("area of rectangle",area);


//2. Take a number and print the square of the number

// let square = (num) => {                               
//     return num ** 2;
// }
// let number = square(5);
// console.log("square of number",number);


//3. Take two numbers and only print the integer part when a is divided by b

// let integer = (num1,num2) => {               
//     return parseInt(num1 /num2);

// }
// let numbers=(integer(2 ,20));
// console.log("integer part",numbers);

//4. Take a number and print out the last digit of the number.

// let last = (num) =>{         
//     return num % 10;  
// }
// let digit = (last(25));
// console.log("last digit",digit);

//5. Take a number and find the cube of that number

// let cube = (num) =>{                 
//     return num **3;
// }
// let number = (cube(3));
// console.log("cube of number",number);


//6. Take a 3 digit number and print the reverse of that number.

// let reverse = (num) => {
// let r = 0;                                      
//     while (num > 0) {
//         let digit = num % 10;
//         r = r * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return r;
// }

// 7. Take a number and print out the first digit of the number.

// let first = (num) => {                                  
//     let number = num.toString().charAt(0);
//     return number;
// }
// let digit = first(1235677);
// console.log(digit);


//9. Take the salary of five employees and print the average salary of all the employees.

// let frist = (a,b,c,d,e) =>{                        
//     let f = a +b+c+d+e;
//     return f/5;
// }
// let average = (frist(1,2,3,4,5));
// console.log(average);


//10. Take two numbers and swap them.

// let number = (a,b) =>{
//     let c;
//     c = a;                                 
//     a = b;
//     b = c;
//     return [a,b];
// }
// let swap = (number(2,3));
// console.log(swap);




    ///////////////////////////////////////////// Today's Questions/////////////////////////////////////////////////


//  1. Write a program that checks if a given number is even or odd.

// function even (num){
//     if(num%2===0){                         
//         return "even";
//     }else{
//         return "odd"
//     }
// }
// let check = even(11);
// console.log(check);

//2. Create a function that takes two numbers as parameters and returns the larger one.

// function check(num1,num2){
//     if(num1>num2){                       
//         return num1;
//     }else{
//         return num2;
//     }
// }
// let numbers = check(12,13);
// console.log(numbers);


//3. Write a function that determines if a given year is a leap year.

// function leep(year){
//     if((year%400==0) || (year%4==0 && year%100!=0)){                
//         return "yes";
//     }else{
//         return "NOT";
//     }
// }
// let numbers = leep(2000);
// console.log(numbers);


//4. Implement a program that checks whether a given character is a vowel or consonant.

// function check(char){
//     if(char=="a" || char=="e" || char=="o" || char=="u" || char=="i"){           
//         return "YES";                         
//     }else{
//         return "NOT";
//     }
// }
// let charater = check("a");
// console.log(charater);


//5. Create a function that takes three numbers as input and returns the largest among them
// function check(num1, num2, num3){                     
//     let num4= Math.max(num1,num2,num3);
//     return num4;
// }
// let numbers = check(1,6,3);
// console.log(numbers);


//6. Write a program that checks if a given number is positive, negative, or zero.

// function check(num){                             
//     if(num<0){
//         return "nagative";
//     }else if(num>0){
//         return "positive"
//     }else{
//         return "Zero";
//     }
// }
// let numbers = check();
// console.log(numbers);


//7. Implement a function that calculates the grade of a student based on their score.

// function check(num){
//     if(num>80){                                    
//         return "A";
//     }if(num<80 || num>60){
//         return "B"
//     }else{
//         return "C";
//     }
// }
// let grade = check(90);
// console.log(grade);


//8. Create a program that determines if a given string is a palindrome.

// let check = (str) => {
//     // let store = str;
//     let r = "";                                         
//     for(let i = str.length-1;i>=0; i--){
//         r += str[i];
//     }
//     if(str===r){
//         return ("YES");
//     }else{
//         return ("NO");
//     }
    
// };
// let string = check("priyanka");
// console.log(string);


//9. Write a function that checks whether a person is eligible to vote based on their age.

// let number = check(121);
// console.log(number); 

//  function vote (age){
//     if(age>=18){                 
//         return "YES";
//     }else{
//         return "NO";
//     }
//  } 
//  let check = vote(19);
//  console.log(check);  
   


//10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// function Triangle(a,b,c){
//     if(a==b && b==c && c==a){                           
//         return "Equilateral";
//     }else if(a==b || b==c|| c==a){
//         return "Isosceles";
//     }else{
//         return "Scalen";
//     }
// }
// let check = Triangle(23,23,34);
// console.log(check);


