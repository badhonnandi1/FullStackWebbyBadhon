let firstname = "Badhon nandi"; // string
let age=21; // int
let student = true; // boolean

// let age; // undefined
// age = 21;
 
age = age + 1; // increment
age = age - 1; // decrement 
// but if "21"  then it will be string
// so if we add 1 with string then it will be 211

console.log("Hello Badhon:",firstname);
console.log("Your age is:",age);
console.log("You are a student:",student);



document.getElementById("p1").innerHTML = "Hello" + firstname;

document.getElementById("p2").innerHTML = "Your are " + age + " years old";

document.getElementById("p3").innerHTML = "Enrolled: " + student;