sum(2,3,displayAlert); 

function sum(x,y,callBack){ 
    let result = x + y;
    callBack(result); // displayAlert(result);
    // firstly the result will be calculated and then the result will be passed to the displayAlert function
    // we are doing some work and then we are working with the result by passing it to the displayAlert/displayConsole function
}

function displayConsole(output){
    console.log(output);
}

function displayAlert(output){
    document.getElementById("callBac").innerHTML = output;
}

//ensures that a function is not going to run before a task is completed.Helps us develop asynchronous code.

// let total = sum(2,3);
// displayConsole(total);
// displayAlert(total); //

// function sum(x,y){
//     let result = x + y;
//     return result;
// }