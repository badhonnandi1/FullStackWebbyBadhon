let username;

do{
    username = window.prompt("Enter your name");
}while(username == "" || username == null);

console.log("Hello " + username);

// ----------------------------------------------

let count = 1;

do{
    console.log(count); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    count++;
}while(count>10);

