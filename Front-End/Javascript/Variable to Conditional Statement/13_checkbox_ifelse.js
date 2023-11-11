document.getElementById("myButton").onclick = function(){
    
    const myCheckbox = document.getElementById("mycheckbox");
    const Visa = document.getElementById("visa");
    const Master = document.getElementById("master");
    const Paypal = document.getElementById("paypal");

    if(myCheckbox.checked){
        console.log("Subscribed");
    }
    else{
        console.log("Not Subscribed");
    }

    if(visa.checked){
        console.log("You are using a Visa card");
    }
    else if(Master.checked){
        console.log("You are using a Master card");
    }
    else if(Paypal.checked){
        console.log("You are using a Paypal card");
    }
    else{
        console.log("You must use a card");
    }
}