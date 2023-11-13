let myNum = 1000000;
myNum = myNum.toLocaleString("en-US");
// 1,000,000

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// $1,000,000.00

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// 1,000,000°C

console.log(myNum); 