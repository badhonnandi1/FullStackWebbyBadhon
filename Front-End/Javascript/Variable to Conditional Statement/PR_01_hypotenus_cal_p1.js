let a, b, c;

// x = window.prompt("Enter the value of base: ");

// y = window.prompt("43Enter the value of height: ");  // prompt() method displays a dialog box that prompts the visitor for input.

// x = Number(x); // convert string to number
// y = Number(y); // convert string to number

// z = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

// console.log(z);



document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C = " + c;

}