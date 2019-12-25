var number;
var firstTime = true;
var attempts = 0;
var highscore = 99999;
function start(){
    number = Math.ceil(Math.random() * (100 - 1) + 1);
    
    document.getElementById('ia').innerHTML = "Pick a number!";
    firstTime = false;
    document.getElementById("buttonOne").value = "Submit"
}

function guess(){
    var userNumber = document.getElementById("userNumber").value;

    attempts++;
    document.getElementById("attempts").innerHTML = "Attempts: " + attempts;

    if(userNumber == ""){
        document.getElementById('ia').innerHTML = "You have not submited a number";
    }
    else if(userNumber > 100 || userNumber < 1){
        document.getElementById('ia').innerHTML = "The numbers are between 1 and 100!";
    }
    else if(userNumber > number){
        document.getElementById('ia').innerHTML = "Your number: " + userNumber + ", is higher than my number";
    }
    else if(userNumber < number){
        document.getElementById('ia').innerHTML = "Your number: " +userNumber + ", is lower than my number";
    }
    else if(userNumber == number){
        document.getElementById('ia').innerHTML = "Congrats! You Won!\n Press the 'Reset' button to start over";

        if(attempts < highscore){
            highscore = attempts + 1 ;
            document.getElementById("highScore").innerHTML = "High Score: " + highscore;
        }
    }


}

function isFirst(){
    firstTime ? start() : guess();
}

function reset(){
    firstTime = true;
    document.getElementById("buttonOne").value = "Start!";
    document.getElementById("ia").innerHTML = "Press the button to start."
    document.getElementById("userNumber").value = "";
    attempts = 0;
    document.getElementById("attempts").innerHTML = "Attempts: " + attempts;
}