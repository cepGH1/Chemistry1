/* 
 * CEP 2021
 */

// the possible techniques stored in an array
var techniques = [ "distillation", "Filtration", "Fractional distillation", "Crystallisation",
    "Paper chromatography"];

//The questions in an array

var questions = ["Separate a mixture of salt and sand",
    "Separating a mixture of alkanes",
    "Separating a mixture of dyes", 
    "Getting a sample of pure copper sulphate from the mixture \n\
produced after reacting copper carbonate with sulphuric acid"];

//The answers, referring to the id of the technique in hte techniques array
var answers = [1, 2, 4, 3];

//the current technique choice is
var techniqueChoice = 5;

//current question number
var questionNumber = 0;

//loads a question to the page
function displayQuestion(){
    document.getElementById("sepFeedback2").innerHTML = "";
    document.getElementById("chosenTechnique").innerHTML = "";
    if(questionNumber<3){
        questionNumber ++;
    }
    else{
        questionNumber = 0;
    }
    var question = questions[questionNumber];
    document.getElementById("problem").innerHTML = question;

}


// code to check that the button pressed is the correct one
function checkChoice(){
    if(techniqueChoice === answers[questionNumber]){
        document.getElementById("sepFeedback2").innerHTML = "Correct!";
    }
    else{
      document.getElementById("sepFeedback2").innerHTML = "No thats not it, try another method";  
    }
}



//choosing a technique using a button on the page
function lodgeChoice( myChoice){
    document.getElementById("sepFeedback2").innerHTML = "";
    var selectedTechnique = techniques[myChoice];
    
    techniqueChoice = myChoice;
     document.getElementById("chosenTechnique").innerHTML = selectedTechnique;
}

function sepExplanationPopUp(theAddress){
    var address = theAddress;
    var myWindow = window.open(address, "myWindow", "width=500,height=500");
}

//opens a new page with proper explanation of the correct answer to the displayed question
function displayTechniqueExplanation(){
    if(techniqueChoice === 1){
        sepExplanationPopUp("../ks4chemistry/filtration.html");
    }
    if(techniqueChoice === 0){
        sepExplanationPopUp("../ks4chemistry/distillation.html");
    }
    if(techniqueChoice === 2){
        sepExplanationPopUp("../ks4chemistry/fractionalDistillation.html");
    }
    if(techniqueChoice === 3){
        sepExplanationPopUp("../ks4chemistry/crystallisation.html");
    }
    if(techniqueChoice === 4){
        sepExplanationPopUp("../ks4chemistry/chromatography.html");
    }
}

//gives a standard answer to the separation problem displayed
function displayAnswerExplanation(){
    if(questionNumber === 0){
    sepExplanationPopUp("../../resources/separationAndPurification/saltAndSand.pdf");
    }
    if(questionNumber === 1){
        sepExplanationPopUp("../../resources/separationAndPurification/mixtureOfAlkanes.pdf");
    }
}

