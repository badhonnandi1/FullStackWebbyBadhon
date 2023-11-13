let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] -> normal array

console.log(...numbers);
// 1 2 3 4 5 6 7 8 9 -> spread operator

let userName = "Badhon Nandi";
console.log(...userName);
// B a d h o n   N a n d i

let maximum1 = Math.max(numbers);
console.log(maximum1); // NaN --> error
let maximum2 = Math.max(...numbers);
console.log(maximum2); // 9


let class1 = ["Badhon","Nandi","Rahul","Raj","Rahim"];
let class2 = ["Squidwad","Spongebob","Patrick","Sandy","Mr. Krabs"];

class1.push(...class2);

console.log(...class1);