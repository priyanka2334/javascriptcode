// const student = {
//     fullName: "Priyanka",
//     marks:94.4,
//     school: D.P.S,
// };
// console.log(student);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(person);
//   console.log(person.firstName);
//   console.log(person.lastName);
//   console.log(person.age);
//   console.log(person.eyeColor);
 // console.log(person['firstName']);


//  const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       country: "USA"
//     }
//   };
//   console.log(person.firstName); // Output: John
//   console.log(person); // Output: Anytown
  

// let user ={
//     name:"pryanka",
//     age:20,
//     add:(a,b) => {return a+b},
//     sub: (a,b) => {return a-b},
// }
// let k = user.add(2,3);
// console.log(k);



// let user ={
//     firstname: "priyanka",
//     lastName: "Diwakar",
//     fullName(){
//        return this.firstname + this.lastName
//     },

// }
// console.log(user.fullName());



//hum ek object k under hum dusre object ki properti ko acsses kr skty hy

// let person = {
//     firstName: "priyanka",
//     lastName: "Diwakar",
//     sayHello(){
//         console.log(`Hello i am ${this.firstName} i have a ${car.brand} car`);
//     }
// };

// let car = {
//     brand: "Tata",
//     model: "safari",
//     sayp(){
//     console.log(`Hello i have a ${this.brand} car`);
//     }
// }
// person.sayHello();
// car.sayp();



// let person = {
//     "first Name": "priyanka",
//     "last Name": "Diwakar",
//     firstName: "preeti",
// }
// person.age = 23;
// person.firstName = "paras";
// console.log(person['first Name']);
// delete person["last Name"];
// console.log(person);
// console.log('age' in person);



// let person = {
//     "first Name": "priyanka",
//     "last Name": "Diwakar",
//     firstName: "preeti",
// }
// console.log('firstName' in person);


// for in loop

// let person = {
//     person1: 100,
//     person2: 200,
//     person3: 300,
//     person4: 400,
//     person5: 500,
// };
// for (let key in person) {
    // console.log(`${key}: ${person[key]+1000}`);
//        console.log(key + " " + person.key);
// }

// let a = {
//   name: "punam",
// }
// let b = a;
// a.name = "priyanka";
// console.log(a);
// console.log(b);


//using this key word

// let person = {
//   firstName: "priyanka",
//   lastName: "Diwakar",
//   sayHello(){
//       console.log(" Helio !");
//   }
// };

// let car = {
//   brand: "Tata",
//   model: "safari",
// }

// person.sayHello();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let student = {
//   firstName: "priyanka",
//   lastName: "Diwakar",
//   age: 19,
//   class: MA,
// }
// let student2 = {
//   firstName: "priya",
//   lastName: "Diwakar",
//   age: 19,
//   class: MA,
// }

//constructor function

// function Student(first,last,age,cls){
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.class = cls; 
//   this.nationality = "Indian";
//   this.student3 (){

//   }
// }
// let Student1 = new Student("priyanka","Diwakar",20, 6);
// let Student2 = new Student("priyanka","Diwakar",20, 6);
// console.log(Student1);
// console.log(Student2);                                                         //////xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Student1.name = function(){
//   return this.firstName + this.lastName;
// }
// console.log(Student1.name());


// function student(name, age, cls){
//     this.firstName = name;
//     this.age = age;
//     this.class = cls;
// }
// let student1 = new student("priyanka" , 19, 12);
// let student2 = new student("priyanka" , 19, 12);
// console.log(student1);
// console.log(student2);



// function Student(first, last, age, cls) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.class = cls;
//   this.nationality = "Indian";
//   this.student3 = function () { // Corrected the method definition
//     // Method logic goes here
//   }
// }
// let Student1 = new Student("Priyanka", "Diwakar", 20, 6);
// let Student2 = new Student("Priyanka", "Diwakar", 20, 6);
// console.log(Student1);
// console.log(Student2);
// Student1.name = function () {
//   return this.firstName + this.lastName;
// }
// console.log(Student1.name());

// function student(first,age,cls){
//     return {
//     firstName : first,
//     age : age,
//     class:cls,
//     };
// }
// console.log(student("priyanka",19,12));
// console.log(student("preeti",23,6));
// const counterApp = {
//   value: 0,
//   increment() {
//     console.log(this.value = this.value + 1);
//   },
//   decrement() {
//     console.log(this.value = this.value - 1);
//   },
//   reset() {
//     console.log(this.value = 0);
//   }
// };

// console.log(counterApp.increment());
// console.log(counterApp.increment());
// console.log(counterApp.increment());
// counterApp.reset();
// console.log(counterApp.decrement());
// console.log(counterApp.decrement());
// console.log(counterApp.decrement());

// const obj = {
//   name : "priyanka",
//   age: 12,
// }
// obj.location=" kanpur";
// console.log(obj);
// let fobj = obj.freeze(obj);
// console.log(fobj);

// console.log(typeof typeof 1);


// let x = 5;
// (function (){
//   var x= 10;
//   console.log(x);
// })(); // variable shadowing


// function calculate (num,callback){
//   return callback(num*2);
// }
// function addOne(num){
//   return num + 1;
// }
// console.log(calculate(4,addOne));


// let originalValue = {
//     name: "priyanka",
//     age: 20,
// };
// let copiedValue = JSON.parse(JSON.stringify(originalValue));
// console.log(originalValue);
// console.log(copiedValue);


//  distruct
// let arr = [1,2,3,4,5,6];
// let [,,,,, six]=arr;
// console.log(six);


//objects
// let student = {
//     name :"priyanka",
//     age: 19,
// }
// let {name,age} = student;
// console.log(name,age);


// let text = 6;
// let text1 = String(text).padStart(5 , "1");
// console.log(text1);

// let text = "priyanka";
// let text1 = text.repeat(5);
// console.log(text1);

// let greet = " my name is priyanka";
// let text1 = greet.replace("my" , "Your");
// console.log(text1);

// let greet = " priyanka";
// let text = greet.indexOf("k");
// console.log(text);

//map
//  let arr = [1,2,3,4,5,6,7,8,9];
//  let newArray = arr.map(element => element* 2);
//  console.log(newArray);

// let arr = [1,2,4,5,8,7,6,2];
// let arr1 = arr.sort();
// console.log(arr1);

// let arr =  [9,8,5,2,3,7,8,9];
// let arr1 = arr.reverse();
// console.log(arr1);

// let arr = [1,2,,4,5,6,7,8,9];
// function myFunction(value){
//    return value>=4;
// }
// console.log(arr.filter(myFunction));

//  let arr = [1,2,,4,5,6,7,8,9];
// function myFunction(value){
//    return value>=4;
// }
// console.log(arr.every(myFunction));

//let arr = [1,2,,4,5,6,7,8,9];
// function myFunction(value){
//    return value>=4;
// }
// console.log(arr.every(myFunction));

// let arr = [1,2,3,4,5,6,7,8];
// function myFunction(num,num1){
//     return (num*num1);
// }
// console.log(arr.reduce(myFunction));


// let user ={
//     name : "priyanka",
//     age : 19,
//     class: 12,
// }
// console.log(user);
// user.lastName= "Diwakar";
// console.log(user);
// console.log(user.name);
// console.log(user.lastName);
// function myFunction(user){
//     return user.name   +  user.lastName;
// }
// console.log(myFunction(user));


// 
//in loop
// const user = {
//     name: 100,
//     lastName: 200,
// }
// for(key in user){
//     console.log(`${key}: ${user[key]+3}`)
// }

// ( function (name){
//     console.log("Hello",name);
// }
// ("Priyanka"));

// let arr = [
//     {name:"priyanka" , age: 19},
//     {name:"paras" , age:15},
//     {name:"preeti" , age:17},
// ];
// let user = arr.find(element => element .age===17);
// console.log(user);
// console.log(user.name);

 //hoisting
//  console.log(a);
//  function greet(){
//     console.log("Hello Morning");
//  }
//  let a = 9;


///////////////////////////////deep copy////////////////////////////
// const object = {
//     name: "priyanka",
//     age: 19,
//     country:{
//         Name: "india",
//         city:"Kanpur",
//     }
// }
// let object2 = JSON.parse(JSON.stringify(object));
// object2.name = "paras",
// object2.age= 15,
// console.log(object);
// console.log(object2);


////shallow copy
// let person = {
//     frame: "priyanka",
//     age: 20,
//     address:{
//         city:"kanpur",
//     }
// };
// const shallow = {...person};
// shallow.address.city = "delhi";
// console.log(person);
// console.log(shallow);


// function student(name,age,cls){
//     return {
//         name:name,
//         age:age,
//         class:cls,
//     }
// };
// console.log(student("priyanka",19,12));

// function student(name,age,cls){
//     this.name = name;
//     this.age = age;
//     this.class = cls;
// }
// let student1 = new student("priyanka" , 9,12);
// console.log(student1);


//deep copy
// const user = {
//     name:"priyanka",
//     age: 16,
//     class: 12,
//     country:{
//         name: "india",
//         city: "kanpur",
//     }
// };
// const user2 = JSON.parse(JSON.stringify(user));
// user2.name="paras";
// user2.age = "age";
// console.log(user);
// console.log(user2);



// const user = {
//     name : "priyanka",
//     age : 19,
//     class: 12,
//     country:{
//         name:"indiya",
//         city:"kanpur",
//     }
// };
// const user1 = {...user};
// user1.country.city = "pune";
// console.log(user);
// console.log(user1);


//freeze methods

//  const student = {
//     name:"priyanka",
//     age: 19,
//     class: 12,
//     year: 2022,
//  }
//  student.name = "paras";
//  Object.freeze(student);
//  delete student.year;
//  console.log(student);


//flat methods
// let arr = [[1,2],[2,3],[3,4],[4,5]];
// console.log(arr.flat());

// function user(name,age,clc){
//     return{
//         name:name,
//         age:age,
//         class:clc,
//     }
// };
// console.log(user("priyanka",19,12));
// console.log(user("priyanka",19,12));
// console.log(user("priyanka",19,12));


/////////////////////////////////////////////////////////////shallow copy
// const user = {
//     name:"priyanka",
//     age: 19,
//     country:{
//         name:"india",
//         city:"kanpur",
//     }
// };
// const user2 = {...user};
// user.country.city = "pune",
// console.log(user);
// console.log(user2);


// let  arr = [1,5,4,6,7,8,2,3];
// let arr1 = arr.sort();
// console.log(arr1);


//Fibonacci sequence.
// let num = 8;
// let i = 1;
// let sum = 0;
// let x = 0;
// let y = 1;
// while(i<=num){
//     x = y;
//     y = sum;
//     sum = x+y;
//     console.log(sum);
//     i = i + 1;
// }


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


/////string is a palindrome.

// let name = "abccba";
// let r = "";
// for(let i = name.length-1; i>=0; i--){
//     r  += name[i];
// }
// if(r===name){
//     console.log("YES");
// }else{
//     console.log("NO");
// }


///factory function
// function user(name,age,pro){
//     return{
//     name:name,
//     age:age,
//     pro:pro,
// }
// };
// console.log(user("priyanka",19,23)
//constoctor

// function student(name,age,cls){
//     this.name = name;
//     this.age = age;
//     this.class = cls;
// }
//  student1 = new student("priyanka",19,12);
//  console.log(student1);



