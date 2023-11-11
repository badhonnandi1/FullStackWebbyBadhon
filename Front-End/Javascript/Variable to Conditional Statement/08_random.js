document.getElementById("rollButton").onclick = function(){
    let x = Math.floor(Math.random()*6) + 1; // Math.floor() returns the largest integer less than or equal to a given number.
    let y = Math.floor(Math.random()*6) + 1;
    let z = Math.floor(Math.random()*6) + 1;

    document.getElementById("xlabel").innerHTML = x; // innerHTML property sets or returns the HTML content (inner HTML) of an element.
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
    // console.log(x);
    // console.log(y);
    // console.log(z);
}