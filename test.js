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


let a = [1,2,2,3,3,3,4,5,5];
for (let i = 0; i<a.length;i++){
    if(a[i]!=-1){
        let c = 1;
        for(let j = i+1; j<a.length;j++){
            if(a[i]==a[j]){
                c = c + 1;
                a[j] = -1;
            }
        }
        if(c==1){
            console.log(a[i]);
        }
    }
}