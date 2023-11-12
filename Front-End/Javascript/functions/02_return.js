let area;
let width;
let height;

width = window.prompt("Enter the width of the rectangle");
height = window.prompt("Enter the height of the rectangle");


function calculateArea(width, height){
    area = width * height;
    return area;
}

let result = calculateArea(width, height);
console.log("The area of the rectangle is",result,"square units");