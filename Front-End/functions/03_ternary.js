let adult = checkAge(23);

console.log(adult);

function checkAge(age){
    // if(age>=18){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return age>=18 ? true : false; //ternary operator
} 
// ---------------------------------------------------------
let win = true;

function checkWinned(win){
    win? console.log("You win the game") : console.log("You lose the game");
}

checkWinned(win);