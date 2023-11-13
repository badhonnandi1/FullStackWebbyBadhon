let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d,e)); // 15
function sum(...numbers){ // rest parameter can take infinite number of arguments
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

// function sum2(a,b){
//     return a + b;
// }
// function sum3(a,b,c){
//     return a + b + c;
// }
// function sum4(a,b,c,d){
//     return a + b + c + d;
// } --> in this way we have to create many functions and it is not efficient at all
