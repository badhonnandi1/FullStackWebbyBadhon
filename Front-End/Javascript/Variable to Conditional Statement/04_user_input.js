// let username = window.prompt("What is your name?"); // this is a prompt window
// console.log("Hello", username);


document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById('myText').value; 
    console.log(username)
    document.getElementById("mylabel").innerHTML = "Hello "+username; //this will change the label name into the input name
}