
// This function takes two numbers as arguments and returns their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Call the function and store the result in a variable
let sum = addNumbers(5, 10);

// Log the result to the console
console.log(sum); // Output: 15

// ------------------------------------------------------------------
let username ;
let age ; //global variable which can be accessed from anywhere

function startProgram(){
    username = "Badhon";
    age = 21;

    happybirthday(username, age);
}


function happybirthday(username, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log("Happy Birthday dear",username);
    console.log("You age is",age,"Years old now");
    console.log("Happy Birthday to you");
}

startProgram();
