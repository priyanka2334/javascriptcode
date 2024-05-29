

/////////////////////////////////////////////////////////////////////////factorial

// function fact (num){
//     if(num==0){
//         return 1;
//     }
//     return num * fact(num -1);
// }
// console.log(fact(5));

//////////////////////////////////////////////////////////////////////////////print counting


// function coun(n){
//     if(n>10){
//         return 1
//     }
//     console.log(n)
//     return coun(n+1)
// }
// let num = 1;
// coun(num);


//////////////////////////////////////////power


// function power(num1, num2) {
//    return Math.pow(num1,num2);
// }
// console.log(power(5,2));



// function power(num1, num2) {
//     if (num2 === 0) {
//         return 1;
//     }
// if(num1 === 1){
//    return num1;
// }
//     return num1 * power(num1, num2 - 1);
// }

// console.log(power(5, 2));  

///////////////////////////////////////////sum of array
// arr = [1,2,3,4,5]
// function sum(arr, i =0){
//     if(i>=arr.length){
//         return 0; 
//     }
//     return arr[i] + sum(arr,i + 1);
// }
// let number = [1,2,3,4,5,6];
// console.log(sum(number));

///////////////////////////////////////Question fibonacci


// function fibo(num) {
//     if (num === 0) {
//         return 0;
//     } else if (num === 1) {
//         return 1;
//     }
//     return fibo(num - 1) + fibo(num - 2);
// }

// function fibon(n) {
//     let s = [];
//     for (let i = 0; i <= n; i++) {
//         s.push(fibo(i));
//     }
//     return s;
// }

// console.log(fibon(8)); 


/////////////////////////////////////////Qusetion Product of list

// arr = [1,2,3,4,5,6,7,8,9];
// function pro(num,i=0){
//     if(arr.length<=i){
//         return 1;
//     }
//     return arr[i] * pro(arr,i+1);
// }
// let number = [];
// console.log(pro(number));


// function isPalindrome(number) {
//     // Helper function to reverse the number
//     function reverse(n, rev = 0) {
//         if (n === 0) {
//             return rev;
//         }
//         return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
//     }

//     // Check if the original number is equal to its reversed version
//     return number === reverse(number);
// }

// // Example usage:
// console.log(isPalindrome(12321)); // Output: true
// console.log(isPalindrome(12345)); // Output: false