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

// let number = (num) =>{
//     let first = num;
//     while(first>=10){
//         first = parseInt(first/10);
//     }
//     return (first);
// }
// let result = number(123345);
//  console.log(result);

//8. Take a number and return the sum of the first and last digit.

// let number = (num) => {
//     let last = num % 10;
//     let first = num;
//     while(first >= 10) {
//         first = parseInt(first / 10);
//     }
//     return (last + first);
// }

// let result = number(123345);
// console.log(result);

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



//1.Draw a flowchart to find the sum of the first n natural numbers, where n is any given integer.


// function sum(num){
//     let sum = 0;                                  ///// sum of n numbers
//     for(let i = 1; i<=num; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// let numbers = sum(10);
// console.log(numbers);



//Draw a flowchart to find the sum of the first 15 even natural numbers.


// function even(coun){
//     let sum = 0;                  
//     for (let i = 1; i<=coun; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// let numbers = even(4);
// console.log(numbers);



//4.Construct a flowchart to print the numbers below 100 that are divisible by 7.

// function divisible(num){
//     let seven = [ ];
//     for(let i = 1; i<=num; i++){
//         if(i%7==0){
//             seven += i;
//         }
//     }
//     return  `${seven}`;
// }
// let numbers = divisible(21);
// console.log(numbers);



// 5.Construct a flowchart to show how to find the product of n natural numbers.

// function product(num){
//     let pro = 1;
//     for(let i = 1; i<=num; i++){
//         pro = pro * i;
//     }
//     return pro;
// }
// let numbers = product(3);
// console.log(numbers);



//6.Draw a flowchart to show how to find all even natural numbers that are divisible by 7 in a given range. (Input lower and upper limit of the range from the user)

// function even(num){
//     let seven = [ ];
//     for(let i = 1; i<=num; i++){
//         if(i%2==0 && i%7==0){
//             seven += i;
//         }
//     }
//     return seven;
// }
// let numbers = even(100);
// console.log(numbers);



//7.Construct a flowchart to find the sum of the squares of the first 9 natural numbers that are divisible by 3.

// function squares(num){
//     let sum = 0;
//     let three =[ ];
//     for(let i = 1; i<=num; i++){
//         let a = i**2;
//         if(a%3==0){
//             sum = sum + a;
//         }
//     }
//     return sum;
// }
// let numbers = squares(6);
// console.log(numbers);



//8.Draw a flowchart to show how the sum of the digits of a given number can be obtained. (Input the number from the user)

// function digits(num){
//     let sum = 0;
//     let num1 = num;
//     while(num>0){
//         a = num % 10;
//         sum = sum + a;
//         num = num /10;
//     }
//     return parseInt(sum);
// }
// let numbers = digits(124);
// console.log(numbers);



//9.Draw a flowchart to show the logic of obtaining the reversed form of a given whole number. (Input the number from the user)

// function reversed(num){
//     let r =0;
//     let num1 = num;
//     while(num>0){
//         a = num % 10;
//         r = r * 10 + a;
//         num = Math.floor(num / 10);
//     }
//     return r;
// }
// let numbers = reversed(123);
// console.log(numbers);



//10.Construct a flowchart to show how the factors of a given number can be obtained. (Input the number from the user)


// function fact(num){
//     let factors = [ ];
//     for(let i = 1; i<num; i++){
//         if(num%i==0){
//             factors += i;
//         }
//     }
//     return factors;
// }
// let numbers = fact(10);
// console.log(numbers);



//11.Construct a flowchart to show how to determine whether a given number is a perfect number.  (Input the number from the user)


// function perfect(num){
//     let numbers = [];
//     for(let i = 1; i <= num; i++){
//         let sum = 0;
//         for(let j = 1; j < i; j++){
//             if(i % j === 0){
//                 sum += j;
//             }
//         }
//         if(sum === i){
//             numbers += i;
//         }
//     }
//     return numbers;
// }

// let per = perfect(100);
// console.log(per);



//12.Construct a flowchart to show how you can decide if a given number is prime or not.  (Input the number from  the user)

// function prime(num){
//     let numbers = [];
//     for(let i = 1; i<=num; i++){
//         let coun = 0;
//         for(let j = 1; j<i; j++){                 ////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//             if(i%j==0){
//                 coun = coun + j;
//             }
//         }
//         if(coun==2){
//             numbers += i;
//         }
//     }
//     return numbers;
// }
// let pri = prime(100);
// console.log(pri);



//13.Construct a flowchart to find out the sum of first N terms of the following series. 5 + 55 + 555 + 5555 + .......... up to N terms.

// function sum(num){
//     let sum = 0;
//     for(i = 1; i<=num; i++){
//         sum = sum * 10 + 5;
//     }
//     return sum;
// }
// let numbers = sum(8);
// console.log(numbers);



//14.Construct a flowchart to print multiplication tables from 1 to 5.

// function table(num){
//     let i = 1;
//     while(i <= num){
//         let j = 1;
//         while(j <= 10){
//             let fact = j * i;
//             console.log(`${i} * ${j} = ${fact}`);
//             j = j + 1;
//         }
//         console.log("");
//         i = i + 1;
//     }
// }
// table(5);



//15.Construct a flowchart to show the logic of printing the first N Fibonacci numbers. Fibonacci numbers are obtained from the relationship ti = ti–1 + ti–2, i = 2 to n where t0 = 0, t1 = 1.

// function Fibonacci(num){
//     let x = 0;
//     let sum = 0;
//     let y = 1;
//     let i = 1;
//     while(i<=num){
//         x = y;
//         y = sum;
//         sum = x + y;
//         console.log(sum);
//         i = i + 1;
//     }
// }
// Fibonacci (8);



// function Fibonacci(num){
//     let x = 0;
//     let y = 1;
//     let i = 1;
//     while(i <= num){
//         let sum = x + y;
//         console.log(sum);
//         x = y;
//         y = sum;
//         i = i + 1;
//     }
// }

// Fibonacci(8)



// Immediately invoked function


// (function (){
//     console.log("Hello world");
//     // return ("Hello world");
// })();

// length is three that's way 1,2,3 print

// let arr = [1,2,3,4,5];
// arr.length = 3;
// console.log(arr);

// arr .length = 5;
// console.log(arr);



// Changing

// let arr = ["priya", "Riya", "paras"];
// arr [4] = "preeti";
// console.log(arr);

// length

// let number = [ 1 , 2, 3, 4, 5,];
// let num = number.length;
// console.log(num);


// use in push
// let arr = ["priya","riya","Amit"];
// arr.push("Komal");
// console.log(arr);


//use in pop
// let arr = ["priya","riya"];
// arr.pop( );
// console.log(arr);


// use in shift
// let arr = ["priya","riya"];
// arr.shift("komal");
// console.log(arr);


// use in unshift
// let arr = ["priya","riya"];
// arr.unshift( "komal");
// console.log(arr);


// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ]; 
// console.log(cars);

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// console.log(cars);


// let number = ["priya","paras","riya","Amit"];
// let num = number.toString();
// console.log(num);


// let name = ["priya", "riya", "paras"];
// let nam = name[2];
// console.log(nam);


// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {                                   // even number;
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }


// let arr = [1,2,3,4,5,6];
// for(let i = 0; i<arr.length; i++){                       // odd number
//     if(arr[i]%2!=0){
//         console.log("odd", arr[i]);
//     }else{
//         console.log("Even",arr[i]);
//     }
// }



// let arr = [1,2,3,4,5,6];
// for(let i = arr.length; i>0; i--){
//     console.log(arr[i]);
// }


// let arr = [1,2,3,4,5];                                  // sum of the numbers
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
// sum = sum + arr[i];
// }
// console.log(sum);


// let arr = [5,6,7,14,15,67,70];                              //
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%7==0){
//         console.log("divisible",arr[i]);
//     }else{
//         console.log("Not",arr[i]);
//     }
// }

// concatiate
// console.log("Hello"+"js");
// console.log([1,2,]+[,3,4]);

// console.log([,,3,4].length);
// console.log([1,2,,]);


// console.log([1,2]+3);

// console.log([1,2]+"3");

// console.log([]+1);

// console.log([1]+1);
// console.log([7] +1+2);

// let a = [1,2,3,4,5];
// let p = a.splice(1,1);
// console.log(p);

///////////////////////////////////////////////////////////////////////// multidimensinal array///////////////////////////////////////////////////////////

// let arr = [
//     [1,2,3],
//     [3,3,5], 
//     [9,6,7]
// ];
// // console.log(arr[0]); 

// console.log(arr[2][2]);
// console.log(arr[2][0]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use delete methods
// let arr = ["riya","priya","paras","Amit"]
// delete arr[3];
// console.log(arr);


// use in splice mathods

// let arr = ["riya", "priya","neha","paras"]
// arr.splice(1,1);
// console.log(arr);


// let arr = ["riya","priya","amit","preeti"]
// arr.splice(-3,0,"par","khara","nara");
// console.log(arr);

// conctenate

// console.log(1,2 + [,3,4]);
// output 1,2,3,4

// console.log([1,2]+[3,4]);
// output 1,23,4

// console.log([1,2, ,]+[3,4]);
// output(1,2,,3,4)


// console.log(2 + '2' -1);
// output(21)

// console.log("2" + 2 - 1);
// output(21)

// console.log(3 * "4");
// output(12);


// console.log(typeof NaN);
// output (number);

// console.log(undefined == null);
// output(turu)

// console.log(NaN == NaN);
// console.log(false);

// console.log(true + false);
// output(1);

// console.log(!"false" == !!"true");
// output(false)

// console.log("1" - - "1");
// output(2);

// console.log(1 + 1 + "1");
// output(21);