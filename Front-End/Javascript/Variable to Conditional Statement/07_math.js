// Math //An intrinsic object that provides basic mathematics functionality and constants.

let x = 3.1416;
let y,z,k,l,m,n,a,b,c;

x =Math.round(x);
y = Math.pow(2,3); // explain: 2^3 = 8
z = Math.sqrt(16); // explain: 4
l = Math.abs(-4.7); // explain: 4.7
k = Math.ceil(4.4); // explain: 4.4 -> 5
m = Math.floor(4.7); // explain: 4.7 -> 4
n = Math.min(0, 150, 30, 20, -8, -200); // explain: -200
a = Math.max(0, 150, 30, 20, -8, -200); // explain: 150
b = Math.random(); // explain: random number between 0 and 1
c = Math.floor(Math.random() * 10); // explain: random number between 0 and 10
x = Math.PI; // explain: 3.141592653589793

console.log(x); 