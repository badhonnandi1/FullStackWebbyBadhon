let prices = [5,10,15,20,25,30];
let total = prices.reduce(checkOut);

console.log(total); // 75 // reduces the array to a single value
//example : shoping cart

function checkOut(total,element){
    return total + element;
}