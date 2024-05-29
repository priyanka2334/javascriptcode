// function user (num,num1){
//     return num+ num1;
// }
// console.log(user(2,3));

// let arr = [1,2,3,4,5,6,7];
// let user = arr.map(element => element*2);
//     console.log(user);


// let a = 523;
// let s = 0;
// while(a>0){
//     let b = a % 10;
//     s=s+ b;
//     a = Math.floor(a / 10);
// }
// console.log(s);


// function add(){
//     return 4;
// }
// function addition (myfunction){
//     let result = myfunction();
//     console.log(result); 
// }
// addition(add);


// function add (){
//     return 4;
// }
// function addition(myFunction){
//     let k = myFunction();
//     return k;
// }
// console.log(addition(add));


// function sayHii(callback){
//     const data = callback();
//     return "Hii"+data;
// }
// let sayBye = ()=> "Bye";
// let result = sayHii(sayBye);
// console.log(result);


///////////////////////////////////////////////call back function


// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered(eatingFood);
//     }, 10000);

// }

// function deliveredFood(eatingFood){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eatingFood(payment);
//     }, 5000)

// }

// function eatingFood(payment){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         payment(leaveHotel);
//     }, 2000)
// }

// function payment(leaveHotel){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaveHotel();
//     }, 1000)
// }
// function leaveHotel(){
//     console.log("Leave the Hotel");
   
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
    
// }

// visitingHotel();



////////////////////////callback function process of ATM 


// function enter(insert){
//     console.log("please enter the card");
//     insert(processing);
// }

// function insert(processing){
//     console.log("please insert the card");
//     processing(pin); 

// }

// function processing(pin){
//     setTimeout(()=>{
//         console.log("processing");
//         pin(withdraw);
//     },10000);
// }

// function pin(withdraw){
//     setTimeout(()=>{
//         console.log("Enter the pin");
//         withdraw(cash);
//     },2000)
// }

// function withdraw(cash){
//     setTimeout(()=>{
//         console.log("withdraw the money");
//         cash(leave);
//     },5000)
// }
// function cash(leave){
//     setTimeout(()=>{
//         console.log("Collect the cash");
//         leave();
//     },2000)
// }
// function leave(){
//     console.log("Leave the ATM");
// }
// function atm(){
//     console.log("Entering the ATM");
//     enter(insert);
// }
// atm();



//////////////////////////////////////////////////////callback hell


function ATM(enter){
    console.log("visit Atm");
    enter();
}

function Enteratm(insert){
    console.log("enter atm");
    insert();
}

function Insertcart(processing){
    console.log("insert the card");
    processing();
}

function Processing(pin){
    setTimeout(()=>{
        console.log("processing for withdraw");
        pin();
    },5000)
}


function Enterpin(withdraw){
    setTimeout(()=>{
        console.log("Please enter the pin");
        withdraw();
    },2000)
}


function Withdrawmoney(cash){
    setTimeout(()=>{
        console.log("With draw the money");
        cash();
    },5000)
}


function CollectCash(Leave){
    setTimeout(()=>{
        console.log("Collect the cash");
        Leave();
    },1000);
} 


function LeaveATM(leavATM){
    setTimeout(()=>{
        console.log("Leave the Atm");
        leavATM()
        

    },2000)
}


ATM(()=>{
    Enteratm(()=>{
        Insertcart(()=>{
            Processing(()=>{
                Enterpin(()=>{
                    Withdrawmoney(()=>{
                        CollectCash(()=>{
                            LeaveATM(()=>{
                            })
                        })
                    })
                })
            })
        })
    })
});