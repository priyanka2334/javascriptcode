// Math.round methods

// let a = 2.6;
// console.log(Math.round(a));

// let a = 2.3;
// console.log(Math.round(a));

// Math.ceil methods

// let a =2.3;
// console.log(Math.ceil(a));

// string length

// let text = "Priyanka";
// console.log(text.length);

//String charAt

// let text = "priyanka";
// console.log(text.charAt(2));

//string charcodeAt

// let text = "priyanka"
// console.log(text.charCodeAt(2));

// slice methods
// let text = "priyanka,preeti,paras,kopal";
// console.log(text.slice(7,15));

//concat string

// let text = "hello";
// let text1 = "priyanka";
// let text2 = "are you okk";
// console.log(text.concat(`${text1},${text2}`));

// let text = "priyanka, Diwakar, are, you, okk";
// let text2 = text.lastIndexOf("k");
// console.log(text2);

//find methods

// let arr = [
//     {name:"priyanka",age:17},
//     {name:"paras",age:16},
//     {name:"preeti",age:23},
// ]
// let user = arr.find(element => element.age===16);
// console.log(user);

// let arr = [1,2,3,4,5,6,7,8,9];
// let num = arr.map(element => element-2);
// console.log(num);


// let arr = [1,2,3,4,5,6,78,9];
// function user(x){
//     return x*2;
// }
// console.log(arr.map(user));

//filter

// let arr = [1,2,3,4,5,6,7,8,9];
// function myFunction(num){
//     return num>=5
// }
// console.log(arr.filter(myFunction));

//some 
// let arr = [1,2,3,4,5,6,7,8,9];
// function myFunction(num){
//     return num>4;
// }
// console.log(arr.some(myFunction));


////////////////////////////////////////////////////////////////hoisting
// console.log(a);
// function greet(){
// }
// let a = 9;

// const user ={
//     name:"priyanka",
//     age: 19,
//     year: 2023,
// }
// // user.name = "Ppara";
// // console.log(user);
// delete user.name;
// console.log(user);


//////////////////////////////////////////////////////////////// shallow
// let student = {
//     name: "priyanka",
//     class: 12,
//     age: 19,
//     year: 2023,
//     country:{
//         name:"india",
//         city:"kanpur",
//     }
// }
// let student1 = {...student};
// student1.country.name = "preeti";
// console.log(student);
// console.log(student1);

///////////////////////////////////////////////////////////////deep copy

// let student = {
//     name: "priyanka",
//     class: 12,
//     age: 19,
//     year: 2023,
//     country:{
//         name:"india",
//         city:"kanpur",
//     }
// }
// let student1 = JSON.parse(JSON.stringify(student));
// student.name = "paras";
// student1.name = "preeti";
// console.log(student);
// console.log(student1);


///////////////////////////////////////////////////////////factory function
// function user(name,age,cls){
//     return{
//         name:name,
//         age: age,
//         year: cls,
//     }
// }
// console.log(user("priyanka",19,12));


////////////////////////////////////////////////////////////////consuctor
// function user(name,age,cls){
//     this.name = name;
//     this.age = age;
//     this.year = cls;
// }
// let user1 = (new user("priyanka",19,25));
// console.log(user1);


///////////////////////////////////////////////////////////////////////freeze
// let user ={
//     name:"priyanka",
//     age: 19,
//     class: 12,
// }
// user.name = "preeti";
// Object.freeze(user);
// console.log(user);

///////////////////////////////////////////////////////////////////////setTimeout

// function greet(name){
//     console.log("hello"+ name);
// }
// setTimeout(greet,1000,"priyanka");

///////////////////////////////////////////////////////////////////////clearTimeout

// function greet(name){
//     console.log("hello"+name);
// }
//  clearTimeout(greet,1000,"priyanka");

/////////////////////////////////////////////////////////////////////////setInterval

// function greet(name){
//     console.log("hello" + name);
// }
// setInterval(greet,1000,"priyanka");

/////////////////////////////////////////////////////////////////////////clearInterval

// function greet(name){
//     console.log("hello" + name);
// }
// clearInterval(greet,500,"priyanka");

//////////////////////////////////////////////////////////////////////////callback function


// function sum(num){
//     let sum = 0;
//     while(num>0){
//         let a = num % 10;
//         sum = sum + a;
//         num = Math.round(num / 10);
//     }
//     return sum;
// }
// console.log(sum(78));


// function user(name,age,email,phone){
//     return {
//         name:name,
//         age:age,
//         email:email,
//         phone:phone,
//     }
// };
// let a = user("priyanka",19,"priyanka@123gmail.com",12345678910);
// let b = user("preeti",20,"preeti@123gmail.com",12345678910);
// let c = user("paras",21,"paras@123gmail.com",12345678910);
// let d = user("Amit",22,"Amit@123gmail.com",12345678910);
// let arr = [a,b,c,d];
// // console.log(arr);

// function searchperson(name){
//     let  k=arr.find(element => element.name==name);
//     return k;
// };
// console.log(searchperson('priyanka'));
 
// function update(name){
//     if(name==name){
//         return 6548900010;
//     }
// }
// console.log(update("priyanka"));

// function d(name){
//     let p = arr.splice(element.email=email);
//     return p;
// }
// console.log(d("priyanka"));





// function user(name,age,email,phone){
//     return {
//         name:name,
//         age:age,
//         email:email,
//         phone:phone,
//     }
// };
// let a = user("priyanka",19,"priyanka@123gmail.com",12345678910);
// let b = user("preeti",20,"preeti@123gmail.com",12345678910);
// let c = user("paras",21,"paras@123gmail.com",12345678910);
// let d = user("Amit",22,"Amit@123gmail.com",12345678910);

// let arr = [a,b,c,d];

// function searchperson(name){
//     let person = arr.find(element => element.name === name);
//     return person;
// };
// console.log(`search person :-`,(searchperson('preeti')));

// function update(phone, newPhone){
//     let person = arr.find(element => element.phone === phone);
//     if(person){
//         person.phone = newPhone;
//         return `${newPhone}`;
//     } else {
//         return ` ${newPhone} `;
//     }
// }
// console.log(`update`,(update("12345678910", 6548900010))); 

// function deletePerson(name){
//     let index = arr.findIndex(element => element.name === name); 
//     if(index !== -1){
//        return arr.splice(index, 1); 
//     } else {
//         return `not found `;
//     }
// }
// console.log(`delete`,(deletePerson('Amit')));
// console.log(arr);









// let arr = [1,2,3,4,5,6,3,5];
// function dup(){
//     un = [];
// for (let i = 0; i<arr.length; i++){
//     if(arr[i]!=-1){
//         let c = 1;
//         for(let j = i+1; j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 c = c + 1;
//                 arr[j] =-1;
//             }
//         }
//         if(c==1){
//             un.push(arr[i]);
//             // console.log(arr[i]);
//             // console.log(c);
//         }
//     }
// }
// return un;
// }
// console.log(dup());




// let user = {
//     name : "priyanka",
//     age : 19,
//     class : 20,
// }
// user.name = "preeti";
// Object.freeze(user);
// console.log(user);

// user.age = 25

