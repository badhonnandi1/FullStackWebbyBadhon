let username = "Badhon nandi"
let phone = '123-456-7890'

console.log(username.length); // this will count the length of the string
console.log(username.charAt(1)); // this will return the character at the given index
console.log(username.indexOf("B")); // this will return the index of the given character
console.log(username.lastIndexOf("n")); // this will return the last index of the given character

username = "   Badhon nandi  "
console.log(username.trim()); // this will remove the extra spaces from the string
username = "Badhon nandi"

console.log(username.toLowerCase()); // this will convert the string into lowercase
console.log(username.toUpperCase()); // this will convert the string into lowercase

console.log(phone); // this will print the phone number
phone = phone.replaceAll("-","/"); // this will replace all the "-" with "/"
console.log(phone); 