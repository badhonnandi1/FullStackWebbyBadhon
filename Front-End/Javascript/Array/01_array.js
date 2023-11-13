let fruit = ["apple", "orange", "banana", "peach", "pear", "plum", "grape"];

console.log(fruit);
console.log(fruit[0]); // apple -> index 0
console.log(fruit[7]); // undefined

fruit[0] = "strawberry"; // change the value of the first element
console.log(fruit[0]); // strawberry

fruit.push("kiwi"); // add to the end of the array
fruit.pop(); // remove from the end of the array

fruit.unshift("kiwi"); // add to the beginning of the array

fruit.shift(); // remove from the beginning of the array

let lenght = fruit.length // 6
let index = fruit.indexOf("banana"); // 2
// if the element is not in the array, indexOf returns -1

// ----------------------------------------------------------------------------------------------------------------

//iterate over an array
for(let i=0;i<fruit.length; i++){
    console.log(fruit[i]);
}

//reverse an array loop
for(let i=fruit.length -1 ;i>=0; i--){
    console.log(fruit[i]);
}

//3rd way to iterate over an array
for(let name of fruit){
    console.log(name);
}