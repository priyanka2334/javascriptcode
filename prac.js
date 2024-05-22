// let newDiv = document.createElement("div")
// newDiv.innerHTML = "newBox";
// newDiv.setAttribute("class","Box 6");
// document.querySelector(".container").append(newDiv);


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// document.querySelectorAll(".box").forEach(elem =>{
//     elem.style.backgrroundColor = "green";
// })

// let newDiv = document.createElement("div");
// newDiv.innerHTML = "newBox";
// newDiv.classList.add("Box", "6");
// document.querySelector(".container").append(newDiv);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////textContent

// {/* <p id="myp">This is <span>para</span>graph</p>
// let p = document.getElementById("myp")
// console.log(p.textContent); */}







/////xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// function greet(name){
//     console.log("hello"+ name);
// }
// clearInterval(greet,1000,"priyanka");




// function num(){
//     return 6;
// }
// function number(n){
//     let k = n()*10;
//     return k;
// }
// console.log(number(num));


// let a = 3.5;
// console.log(Math.round(a));

// let b = 4.7;
// console.log(Math.ceil(b));
// console.log(Math.floor(b));
// console.log(Math.trunc(b));
// console.log(Math.sign(b));

// let c = 2;
// let d = 3;
// console.log(Math.pow(3,2));


/////////////////////charAt
// let text = " Hello world";
// let ctext = text.charAt(5);
// console.log(ctext);

///////////////////////charCodeAt

// let text1 = "Hello priyanka";
// let atext = text1.charCodeAt(a);
// console.log(atext);

/////////////////////////slice

// let char = " priyanka , preeti , paras";
// let part = char.slice(2,8);
// console.log(part);

///////////////////////////toupperCase
// let char1 = " my name is priyanka";
// let cha = char1.toUpperCase(char1);
// console.log(cha);

//////////////////////////////toLowercase

// let name = "PRIYANKA IS MY NAME";
// let nam = name.toLowerCase(name);
// console.log(nam);

////////////////////////////// concat

// let con = "my name is priyanka";
// let cat = "i am from kanpur";
// let cont = con.concat(cat);
// console.log(cont);

//////////////////////////// trim

// let t = " my name is priyanka  ";
// let tri = t.trim();
// console.log(tri);

/////////////////////////////////padstart

// let e = 5;
// let e1 = e.toString().padStart(5, "0");
// console.log(e1);

///////////////////////////////////////////repeat


// let re = "priyanka";
// let rep = re.repeat(3);
// console.log(rep);

///////////////////////////////////////////////replace

// let lec = " i am from kanpur";
// let les = lec.replace("kanpur", "pune");
// console.log(les);


////////////////////////////////////////function expression

// const s = function (){
//     console.log("hello priyanka");
// }
// s();

// //////////////////////////////////////////////Arrow function

// let p = () => {
//     console.log("hello Kanpur");
// }
// p();

////////////////////////////////////////////decleration function

// function sum(num,num1){
//     return num + num1;
// }
// console.log(sum(2,3));


// function mul(num,num1){
//     return num * num1;
// }
// console.log(mul(2,5));


//////////////////////////////////////////////////////eifi function 

// (function(name){
//     console.log("Hello", name);
// }("priyanka"));

//////////////////////////////////////////////////////////setTimeout

// function greet(name){
//     console.log("hello",name);
// }
// setTimeout(greet,1000,"priyanka");

/////////////////////////////////////////////clearTimeout

// function greet(name){
//     console.log("hello",name);
// }
// clearTimeout(greet,1000,"priyanka");

/////////////////////////////////////////////////setInterval

// function greet(name){
//     console.log("hello",name);
// }
// setInterval(greet,1000,"priyanka");

///////////////////////////////////////////////////clearInterval

// function greet(name){
//     console.log("hello",name);
// }
// clearInterval(greet,1000,"priyanka");


///////////////////////////////////////////////////////////Array

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);


// let arr = [1,2,3,4,5,6,7,8];
// let arr1 = arr[4];
// console.log(arr1);

// let arr = [1,2,3,4,5,6,7,8];
// arr[9] = 'priyanka';
// console.log(arr);


////////////////////////////////////////////////array length


// let arr = [1,2,3,4,5,6,7,8,9];
// let arr1 = arr.length;
// console.log(arr1);

//////////////////////////////////////////////////////push

// let arr = [1,2,3,4,5,6,7];
// arr.push(8);
// console.log(arr);

//////////////////////////////////////////////////////pop

// let arr = [1,2,3,4,5,6,7];
// arr.pop();
// console.log(arr);

///////////////////////////////////////////////////////shift

// let arr = [1,2,3,4,5,6,7,8];
// arr.shift(arr);
// console.log(arr);

///////////////////////////////////////////////////////unshift

// let arr = [1,2,3,4,5,6,7];
// arr.unshift(0);
// console.log(arr);


//////////////////////////////////////////////////////////splice

// let fruits = ["paras", "Amit","preeti","priyanka"];
// fruits.splice(2,0,"aarti","punam");
// console.log(fruits);


// let fruits = ["paras", "Amit","preeti","priyanka"];
// fruits.splice(0);
// console.log(fruits);


//////////////////////////////////////////////////////////concatenating
// console.log(1,3, +[3,4]);
// console.log([1,3]+[2,4]);
// console.log([1,2,,]+[3,4]);
// console.log([1,2,,]+[,3,4]);

///////////////////////////////////////////////////array concat

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// console.log(arr.concat(arr1));

////////////////////////////////////////////////////////flat

// let arr = [[1,2],[3,4],[5,6]];
// console.log(arr.flat());


/////////////////////////////////////////////////////////indexOf

// let arr = ["paras","preeti","priyanka","amit"];
// console.log(arr.indexOf("paras"));


////////////////////////////////////////////////////////////////includes


// let arr = ["Apple","preeti","Amit","preeti","priyanka"];
// console.log(arr.includes('Amit'));

/////////////////////////////////////////////////////////////join

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.join("*"));


/////////////////////////////////////////////////////////////find

// let user = [
//     {name:"priyanka", age: 19},
//     {name:"paras", age: 18},
//     {name:"Amit", age: 17},
//     {name:"preeti", age: 16},
    
// ];
// let arr1 = user.find(element => element.age === 18);
// console.log(arr1);

///////////////////////////////////////////////////////////////sort

// let arr = [1,2,6,8,4,9,3];
// console.log(arr.sort());


/////////////////////////////////////////////////////////////Reverse

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.reverse());

// let arr = [2,4,6,8,7,9,3,5];
// let arr1 = arr.sort();
// let arr2 = arr1.reverse();
// console.log(arr2);


/////////////////////////////////////////////////////////////////map

// let arr = [1,2,3,4,5,6,7,8,9];
// let user = arr.map(element => element*2);
// console.log(user);

///////////////////////////////////////////////////////////// filter

// let arr = [1,2,3,4,5,6,7,8,9];
// function user(value){
//     return value >5;
// }
// console.log(arr.filter(user));

//////////////////////////////////////////////////////////////////every

// let arr = [1,2,3,4,5,6,7,8,9];
// function user(value){
//     return value>0;
// }
// console.log(arr.every(user));

//////////////////////////////////////////////////////////////////// some

// let arr = [1,2,3,4,5,6,7,8];
// function user(value){
//     return value>3;
// }
// console.log(arr.some(user));

//////////////////////////////////////////////////////////////////// Hosting

// console.log(a);
// function greet(){
// }
// var a = 9;

// console.log(b);
// let user = () => {

// }
// let b = 9;

// let s = function (){
//     console.log("hello priyanka");
// }
// s();


////////////////////////////////////////////////////////////////reduce

// let arr = [1,2,3,4,5,6,7];
// function sum(num,num1){
//     return num+ num1;
// }
// console.log(arr.reduce(sum));

///////////////////////////////////////////////////////////////////object

// let user = {
//     name:"priyanka",
//     age: 19,
//     class: 12,
// }
// console.log(user);

///////////////////////////////////////////////////////////////////////////////////nested object

// let user ={
//     name:"priyanka",
//     age: 19,
//     class: 12,
//     address:{
//         cname:"india",
//         city:"kanpur",
//     }
// }
// console.log(user);

//////////////////////////////////////////////////////////////////////////factory function


// function user(name,age,cls){
//     return {
//         name:name,
//         age:age,
//         class:cls,
//     }
// }
// console.log(user("priyannka",19,12));


// function user (name,age,cls){
//     return {
//         name:name,
//         age: age,
//         class: cls,
//     }
// }
// console.log(user("priyanka",19,12));

/////////////////////////////////////////////////////////////// constuctor function

// function user (name,age,cls){
//     this.name = name;
//     this.age = age;
//     this.class = cls;
// }

// let user1 = (new user ('priyanka',19,12));
// console.log(user1);