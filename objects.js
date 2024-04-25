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
//     firstName: "Priyanka",
//     lastName: "Diwakar",
// };

// person.age = 25;

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


//using this key word

let person = {
  firstName: "priyanka",
  lastName: "Diwakar",
  sayHello(){
      console.log(" Helio !");
  }
};

let car = {
  brand: "Tata",
  model: "safari",
}

person.sayHello();

