let fullname = "Badhon Nandi";
let firstname;
let lastname;
// lastname = fullname.slice(7,12); // this will slice the string from index 7 to 12
// firstname = fullname.slice(0,6); // this will slice the string from index 0 to 6 
firstname = fullname.slice(0,fullname.indexOf(" ")); // this will slice the string from index 0 to 6

lastname = fullname.slice(fullname.indexOf(" ")+1,fullname.length); // this will slice the string from index 7 to 12

console.log(lastname);
console.log(firstname);