let age  = 21;

if(age>=18){
    console.log("You are eligible to vote");
}
else if(age<0){
    console.log("Invalid age");
}
else if(age>=30 && age<65){
    console.log("You are eligible to vote but not mandatory"); // &&(and) is the logical operator
}
else if(age >= 65 || age < 15){
    console.log("You are too old or small to vote"); // ||(or) is the logical operator
}
else{
    console.log("You are not eligible to vote");
}
// -------------------------------------------------
// let online = true;
// if(online){
//     console.log("You are online");
// }
// else{
//     console.log("You are offline")
// }