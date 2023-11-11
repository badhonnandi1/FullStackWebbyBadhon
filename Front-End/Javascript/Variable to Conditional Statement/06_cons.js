const PI = 3.14159; //const is a variable that cannot be changed
let radius;
let circumference;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

circumference = 2 * PI * radius;

//PI = 3.14159; //what error? const is a variable that cannot be changed

console.log("The circumference of the circle is", circumference);