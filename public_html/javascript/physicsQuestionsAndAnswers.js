/* 
 * CEP 2017
 * KS4 physics
 * 
 */


var kineticEnergyAnswers =["308700", "9.9", "312.50", "2.3", "19.8" ];
var kineticEnergyQuestions = 
    [
    "A car travelling at a velocity of 21m/s, with mass of 1400 kg", 
    "A year 10 student with a mass of 55kg swinging back on their chair and falling off it at a speed of 0.6m/s",
    "A tennis ball travelling at a speed of 50m/s with a mass of 0.25kg",
    "A dog running across a field at a speed of 1.2m/s with a mass of 3.2kg",
    "A runner with a mass of 62kg running at a speed of 0.8m/s"
    ];
    
 var velocityAnswers = ["16"];
 var velocityQuestions = [
     "a car that has travelled 200km in 3.5 hours",
     "A cyclist who takes 48 minutes to travel 12km",
     "A runner who completes 100m sprint in 9.8seconds",
     "A long distance runner who completes 50km in 4 hours 25 minutes",
     "James leaves his house at 8:10am and arrives at school at 8:55am, the distance between\n\
 his house and the school is 3km. What is his average velocity?"
 ];

function isTheAnswerCorrect(myNum){
    var result = false;
    var identity = "feedback" + myNum;
    var answer = document.getElementById("ta" + myNum).value;
    
    if( answer === kineticEnergyAnswers[myNum]){
        result = true;
        document.getElementById(identity).innerHTML = "Well Done"; 
    }
   else{
       document.getElementById(identity).innerHTML = "thats not it, please try again";
   }
}

function isTheVelocityAnswerCorrect(myNum){
    var result = false;
    var identity = "feedback" + myNum;
    var answer = document.getElementById("ta" + myNum).value;
    
    if( answer === velocityAnswers[myNum]){
        result = true;
        document.getElementById(identity).innerHTML = "Well Done"; 
    }
   else{
       document.getElementById(identity).innerHTML = "thats not it, please try again";
   }
}

function getNewQuestions(){
    document.getElementById("testQuestions").innerHTML = kineticEnergyQuestions[0]; 
}

function showAnswer(theNum){
     var filename = "../../html/ks4physics/KEAnswer" + theNum + ".html";
     var myWindow = window.open(filename, "myWindow", "width=500,height=500");
}

function showVelocityAnswer(theNum){
     var filename = "../../html/ks4physics/velocityAnswer" + theNum + ".html";
     var myWindow = window.open(filename, "myWindow", "width=500,height=500");
}