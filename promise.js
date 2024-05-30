
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//        console.log('Async task is complete'); 
//        resolve();
//     }, 1000);
// });

// promise.then(function() {
//     console.log("Promise consumed");
// });

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log("Async 2 resolved");
// });

//////////////////////////////////////////////////////////////////promise code

// let treat = new Promise(function(resolve,reject){
//     let party = false;
//     if(party){
//         resolve("party is going on");
//     }else{
//         reject("no party");
//     }
// });
// treat.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

// enter ATM,inser card 
// , enter pin withdrow money 
// , collect cash leave atm



// let treat = new Promise(function(resolve,reject){
//     let gift = false;
//     let party = true;
//     if(gift){
//     if(party) {
//         resolve("party is going on");
//     } else {
//         reject("no party");
//     }
// }else{
//     reject(" no party");
// }
// });
// treat.then((party)=> {
//     console.log(party);
// }).catch((error)=> {
//     console.log(error);
// });




// let treet = new Promise(function(resolve,reject){
//     resolve("promise is resolved");
// });
// let isParty = function(){
//     return new Promise(function(resolve,reject){
//         let party = true;
//         if(party){
//             resolve("party is on");
//         }else{
//             reject("party is off");
//         }
//     })
// }
// let isGift = function(){
//     return new Promise(function(resolve,reject){
//         let gift = false;
//         if(gift){
//             resolve("Gift Recieved");
//         }else{
//             reject("No Gift recieved");
//         }
//     })
// }
// isGift().then(function(result){
//     console.log(result);
//     return isParty();
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

// let enter = new Promise(function(resolve,reject){
//     resolve("Enter the ATM");
// });
// let insert = function(){
//     return new Promise(function(resolve,reject){
//         let insert = true;
//         if(insert){
//             resolve("insert the card");
//         }else{
//             reject("no insert card");
//         }
//     })
// }
// let pin = function(){
//     return new Promise(function(resolve,reject){
//         let pin = true;
//         if(pin){
//             resolve("Enter the pin");
//         }else{
//             reject("no enter the code");
//         }
//     })
// }
// let withdrow = function(){
//     return new Promise(function(resolve,reject){
//         let withdrow = true;
//         if(withdrow){
//             resolve("withdrow the money");
//         }else{
//             reject("no withdrow");
//         }
//     })
// }




// enter ATM,inser card 
// , enter pin withdrow money 
// , collect cash leave atm


let enter = new Promise(function(resolve, reject) {
    resolve("Enter the ATM");
});

let insert = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let isInserted = true;
        if (isInserted) {
            resolve("Insert the card");
        } else {
            reject("No card inserted");
        }
    },1000);
    });
}

let pin = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let isPinEntered = true;
        if (isPinEntered) {
            resolve("Enter the pin");
        } else {
            reject("Pin not entered");
        }
    },1000);
    });
}

let withdraw = function() {
    return new Promise(function(resolve, reject) {
        let isWithdrawn = true;
        if (isWithdrawn) {
            resolve("Withdraw the money");
        } else {
            reject("No money withdrawn");
        }
    });
}
let cash = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        let isCash = true;
        if(isCash){
            resolve("collect the cash");
        }else{
            reject("no collect");
        }
    },2000);
    })
}
let leave = function(){
    return new Promise(function(resolve,reject){
        let isLeave = true;
        if(isLeave){
            resolve("leave the Atm");
        }else{
            reject("no leave");
        }
    })
}

// Chaining the promises
enter
    .then((message) => {
        console.log(message);
        return insert();
    })
    .then((message) => {
        console.log(message);
        return pin();
    })
    .then((message) => {
        console.log(message);
        return withdraw();
    })
    .then((message) => {
        console.log(message);
        return cash();
    })
    .then((message) => {
        console.log(message);
        return leave();

    }).then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// enter ATM,inser card 
// , enter pin withdrow money 
// , collect cash leave atm

