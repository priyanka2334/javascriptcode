//1. Write a JavaScript program to list the properties of a JavaScript object.

// const student ={
//     name:"priyanka",
//     class: 12,
//     rollno:34,
// };
// console.log(student);

//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 

// const student = {
//     name: "priyanka",
//     class: 21,
//     roll: 35,
// };
// console.log(student);
// delete student.roll;
// console.log(student);

//3. Write a JavaScript program to get the length of a JavaScript object. 
// function object(obj){
//     let len = 0;
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             len++;
//         }
//     }
//     return len;
// }
// const student = {
//     name: "priyanka",
//     class: 21,
//     roll: 35,
// };
// let objl = object(student);
// console.log(objl);

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];
//    console.log(library);

// let originalValue = {
//     name: "priyanka",
//     age: 20,
// };
// let copiedValue = JSON.parse(JSON.stringify(originalValue));
// console.log(originalValue);
// console.log(copiedValue);
// let add = () => {

// }

// let user = {
//     name:"priyanka",
//     age: 20,
//     sayHi:function(){
//         return "Hello,Good Morning";   //Method
//     },
//     sayBye(){
//         return "Hello, Good night";  // short hand metode
//     },
//     add: ()=>{
//         return "Hello";
//     }
// }
// console.log(user.sayHi());

// console.log("1"+2*"3");

