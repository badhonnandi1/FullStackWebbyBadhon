let number = [12,3,4,5,,67];

let squares_array = number.map(square); // map is a callback function
let cubes_array = number.map(cube); // map is a callback function
squares_array.forEach(print_element); // print_element is a callback function

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function print_element(element){
    console.log(element);
}