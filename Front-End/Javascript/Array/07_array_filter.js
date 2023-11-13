let ages = [10,15,18,19,20,21,22,23,24,90];

let adults = ages.filter(checkAge); // filter is a callback function
// console.log(adults); // [ 21, 22, 23, 24, 90 ]

adults.forEach(print_element); // print_element is a callback function

function checkAge(element){
    return element >= 21; // if the element is greater than or equal to 21, it will return true
}

function print_element(element){
    console.log(element);
}