for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log(i + " " + j);
    }
}

// --------------------------------------------------------------

let symbol = window.prompt("Enter your symbol: ");
let row = window.prompt("Enter your rows: ");
let cols = window.prompt("Enter your cols: ");

for(let i=1; i<=row; i++){
    for(let j=1; j<=cols; j++){
        document.getElementById("myrectage").innerHTML += symbol;
    }
    document.getElementById("myrectage").innerHTML += "<br>";
}