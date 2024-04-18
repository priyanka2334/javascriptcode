/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal 
           e.g. 
           s1: pale
           s2: ealp
        3. Return true if strings are almost equal else return false
*/

var areAlmostEqual = function(s1, s2) {
    let c = 0;
    let c1 = 0;
    let i = 0;
    while(i<s1.length){
        c = c + 1;
        i = i + 1;
    }
    let j = 0;
    while(j<s2.length){
        c1 = c1 + 1;
        j = j + 1;
    }
    if(c==c1){
        return "true";
    }else{
        return "flase";
    }
    //WRITE YOUR LOGIC HERE
};
let string = areAlmostEqual("mam","maa");
console.log(string);


/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("s1: ", function(s1) {
    rl.question("s2: ", function(s2) {
        if (areAlmostEqual(s1, s2)) {
            console.log("true");
        } else {
            console.log("false");
        }
        rl.close();
    });
});