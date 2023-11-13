document.getElementById("submitButton").onclick = function(){
    let temp;
    if(document.getElementById("celsius").checked){
        temp = Number(document.getElementById("temp").value);
        temp = toFahrenheit(temp);
        document.getElementById("templab").innerHTML = temp+"°F";
    }
    else if(document.getElementById("fahreihite").checked){
        temp = document.getElementById("temp").value;
        temp = toCelsius(temp);
        document.getElementById("templab").innerHTML = temp+ "°C";
    }
    else{
        document.getElementById("templab").innerHTML = "Select a unit";
    }    
}

function toCelsius(temp){
    return (temp - 32) * 5/9;
}

function toFahrenheit(temp){
    return (temp * 9/5) + 32;
}