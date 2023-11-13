let x = 0;

document.getElementById("decrease").onclick = function(){
    x--;
    document.getElementById("counter").innerHTML = x;
};
document.getElementById("increase").onclick = function(){
    x++;
    document.getElementById("counter").innerHTML = x;
};

// sayHello(); 
// function sayHello(){
//     console.log("Hello");
// }
// const greeting = function(){
//     console.log("Hello");
// } // without thinking about function name we can use this function
// greeting(); 
