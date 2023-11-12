for(var i=1;i<5;i++){
    console.log(i);
}
console.log(i); //5 because var is global scope variable


for(let j=1;j<5;j++){
    console.log(j);
}
console.log(j); // error j is not defined because let is block scope variable

// ---------------------------------------------------------


function doSomething(){
    for(var i=1;i<5;i++){
        console.log(i);
    }
    console.log(i);
}
console.log(i); // error i is not defined because var is function scope variable