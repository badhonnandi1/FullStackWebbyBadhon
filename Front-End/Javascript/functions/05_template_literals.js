let username = "Badhon";
let items = 3;
let total = 100;

let message = `Hello ${username}, you have ${items} items in your cart. The total is $${total}.`;

//template literals `string ${variable_name} `

document.getElementById("status").innerHTML = message;

