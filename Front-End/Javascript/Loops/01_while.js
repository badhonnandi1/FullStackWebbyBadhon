let username = "";

while(username == "" || username == null){ // while the username is empty or null
    username = window.prompt("Enter your name");
}
console.log("Hello " + username);

// ----------------------------------------------
while (1==1){
    console.log("Infinite loop");
    console.log("Press Ctrl + C to stop");
}
// ----------------------------------------------
let x = 0;

while(x<10){
    console.log(x); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    x += 1;
}