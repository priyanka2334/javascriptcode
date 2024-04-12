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


// let square = (num) => {                               ////// Question 2
//     return num ** 2;
// }
// let number = square(5);
// console.log("square of number",number);



// let integer = (num1,num2) => {               //// Question 3
//     return parseInt(num1 /num2);

// }
// let numbers=(integer(2 ,20));
// console.log("integer part",numbers);

 
// let last = (num) =>{         /////  Question 4
//     return num % 10;  
// }
// let digit = (last(25));
// console.log("last digit",digit);


// let cube = (num) =>{                  ////// Question 5
//     return num **3;
// }
// let number = (cube(3));
// console.log("cube of number",number);



// let reverse = (num) => {
// let r = 0;                                        //////reverse  Question 6
//     while (num > 0) {
//         let digit = num % 10;
//         r = r * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return r;
// }


// let first = (num) => {                                  //// Question 7 
//     let number = num.toString().charAt(0);
//     return number;
// }
// let digit = first(1235677);
// console.log(digit);



// let frist = (a,b,c,d,e) =>{                         /// Question 9 average
//     let f = a +b+c+d+e;
//     return f/5;
// }
// let average = (frist(1,2,3,4,5));
// console.log(average);



// let number = (a,b) =>{
//     let c;
//     c = a;                                 ///// swap of two number  Question 10
//     a = b;
//     b = c;
//     return [a,b];
// }
// let swap = (number(2,3));
// console.log(swap);




    ///////////////////////////////////////////// Today's Questions/////////////////////////////////////////////////


// function even (num){
//     if(num%2===0){                         
//         return "even";
//     }else{
//         return "odd"
//     }
// }
// let check = even(11);
// console.log(check);


// function check(num1,num2){
//     if(num1>num2){                       ///Question 2 large number
//         return num1;
//     }else{
//         return num2;
//     }
// }
// let numbers = check(12,13);
// console.log(numbers);


// function leep(year){
//     if((year%400==0) || (year%4==0 && year%100!=0)){                //// Question 3 leep year
//         return "yes";
//     }else{
//         return "NOT";
//     }
// }
// let numbers = leep(2000);
// console.log(numbers);


// function check(char){
//     if(char=="a" || char=="e" || char=="o" || char=="u" || char=="i"){           //// Question 4 character
//         return "YES";                         
//     }else{
//         return "NOT";
//     }
// }
// let charater = check("a");
// console.log(charater);


// function check(num1, num2, num3){                      //// Question 5 largest numbers
//     let num4= Math.max(num1,num2,num3);
//     return num4;
// }
// let numbers = check(1,6,3);
// console.log(numbers);


// function check(num){                              ////Question 6 positive ,Zero
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


// function check(num){
//     if(num>80){                                     //// Question 7 grade
//         return "A";
//     }if(num<80 || num>60){
//         return "B"
//     }else{
//         return "C";
//     }
// }
// let grade = check(90);
// console.log(grade);



// let check = (str) => {
//     // let store = str;
//     let r = "";                                           /////Question 8 palindrom strings
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



// let number = check(121);
// console.log(number); 

//  function vote (age){
//     if(age>=18){                 ////Quation 9 vote
//         return "YES";
//     }else{
//         return "NO";
//     }
//  } 
//  let check = vote(19);
//  console.log(check);  
    

// function Triangle(a,b,c){
//     if(a==b && b==c && c==a){                           ////Question 10 triangle
//         return "Equilateral";
//     }else if(a==b || b==c|| c==a){
//         return "Isosceles";
//     }else{
//         return "Scalen";
//     }
// }
// let check = Triangle(23,23,34);
// console.log(check);


