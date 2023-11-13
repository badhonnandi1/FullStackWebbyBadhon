const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessfield").value
    guesses += 1;

    if(guess==answer)
    {
        alert(`${answer} is the number of guesses you took to guess the number`)
    }
    else if(guess>answer)
    {
        alert('Your guess is too high')
    }
    else if(guess<answer)
    {
        alert('Your guess is too low')
    }
    else
    {
        alert('Your guess is incorrect')
    }

}