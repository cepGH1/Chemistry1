/* 
 * CEP 2017
 * GCSE Chemistry
 * Working out molarities
 */


//counts the question set used
var qsCounter = 0;

//The tick or cross to show if answer is correct or wrong
var tick = "&#x2714";
var cross = "&#x2718";

//array to hold full set of correct ticks
var allCorrect =[tick, tick, tick, tick, tick];

//to represent the curent question set
 var questionSet = "Hello World";
//array of questions
var questions0 = ["Calculate the concentration, in mol/dm<sup>3</sup>, of the solution resulting from dissolving \n\
54.45g of sodium chloride in 1dm<sup>3</sup> water",
    "Calculate the concentration of the solution that results from dissolving 67g of potassium chloride in\n\
1dm<sup>3</sup> of water ",
   "Calculate the concentration of the solution that results from dissolving 67g of potassium chloride in\n\
0.5dm<sup>3</sup> of water ",
"Calculate the concentration of the solution that results from dissolving 67g of potassium chloride in\n\
500cm<sup>3</sup> of water ",
    "Calculate the concentration of the solution that results from dissolving 50g of lithium fluoride in\n\
500cm<sup>3</sup> of water "];

var questions1 = ["What concentration solution would result from dissolving 92g of potassium fluoride in\n\
 0.5dm<sup>3</sup> of water",
"Calculate the concentration of the solution that would result from dissolving 123g of sodium bromide in \n\
250cm<sup>3</sup> water",
    "Calculate the concentration of the solution that would result from 400g of calcium oxide being dissolved in \n\
2dm<sup>3</sup> water",
    "Calculate the concentration of the solution that would result from dissolving 65g of sodium nitrate in\n\
750dm<sup>3</sup> water",
    "Calculate the concentration of the solution that would result from dissolving 23g of sodium in\n\
1dm<sup>3</sup> liquid ammonia"];

var questions2 = ["Calculate the concentration of the solution that would result from dissolving 80g of sodium hydroxide pastels in\n\
2dm<sup>3</sup> of water",
    "Calculate the concentration of the solution that would result from dissolving 80g of potassium hydroxide pastels in\n\
2dm<sup>3</sup> of water",
    "Calculate the concentration of the solution that would result from dissolving 55g of lithium hydroxide in\n\
1dm<sup>3</sup> of water",
    "calculate the concentration of the solution that would result from dissolving 35g of potassium hydroxide in\n\
500cm<sup>3</sup> of water",
    "Calculate the concentration of the solution that would result from dissolving 20g ammonium hydroxide in\n\
 2dm<sup>3</sup> water"];

//array of answers in same order as questions
var answers0 = [1.000, 0.887, 1.774, 1.774, 3.855];

var answers1 = [3.167, 4.782, 3.566, 1.020, 1.000];

var answers2 = [1.000, 0.713, 2.297, 1.248, 0.285];

//array to hold the input answers
var inputAnswers = [0,0,0,0,0];

var thisSetAnswers;

//when the exerciseis completed the following message appears
var exerciseEndedMessage = "Well Done! You successfully answered all the questions.";

//function to set a question
function selectQuestions(){
     
  
   if(qsCounter === 0){
       questionSet = questions0;
   }
    if(qsCounter === 1){
       questionSet = questions1;
   }
   if(qsCounter === 2){
       questionSet = questions2;
   }
   if(qsCounter === 3){
       questionSet = exerciseEndedMessage;
   }
   document.getElementById("remarks").innerHTML = " " ;
    
}

function writeQuestions(){
    selectQuestions();
    if(qsCounter ===3){
        document.getElementById("questions").innerHTML = questionSet ;
    }
    else{
    var workspace = "<ol><li>" + questionSet[0] + " : <textarea id='concA0'></textarea><span id=concM0></span></li>\n\
<li>" + questionSet[1] + " : <textarea id='concA1'></textarea><span id=concM1></span></li>\n\
<li>" + questionSet[2] + " : <textarea id='concA2'></textarea><span id=concM2></span></li>\n\
<li>" + questionSet[3] + " : <textarea id='concA3'></textarea><span id=concM3></span></li>\n\
<li>" + questionSet[4] + " : <textarea id='concA4'></textarea><span id=concM4></span></li></ol>";
    document.getElementById("questions").innerHTML = workspace ;
}
}

//function to retrieve the inputted answers
function getConcAnswers(){
    
           for (i = 0; i < answers0.length; i++) {
        var address = "concA" + i; 
         
        var ans = document.getElementById(address).value;
        var ansFloat = parseFloat(ans);
    inputAnswers[i] = ansFloat;
    }
   
}

//use the correct set of answers to mark the questions
function setCorrectAnswers(){
    if(qsCounter ===0){
      thisSetAnswers = answers0;  
    }
        if(qsCounter ===1){
      thisSetAnswers = answers1;  
    }
         if(qsCounter ===2){
      thisSetAnswers = answers2;  
    }
}

//function to check if the answers are correct
function checkAnswers(){  
    getConcAnswers();
    setCorrectAnswers();
    var responses = [cross, cross, cross, cross, cross];
    //check the answer values
    for ( i=0; i<answers0.length; i++){
            if(thisSetAnswers[i] === inputAnswers[i]){
        responses[i] = tick;
    }
    else {
        responses[i] = cross;
    }
    }
    //put the appropriate mark against each answer
    for(i=0; i<answers0.length; i++){
       var reply = "concM" + i;
       document.getElementById(reply).innerHTML = responses[i]; 
    }
     if((responses[0]=== tick) && (responses[1]=== tick) && (responses[2] === tick)
           && (responses[3]=== tick)&& (responses[4]=== tick)){
       var celebratoryGif = "<img src='../../images/fireworks3.gif' alt='Well Done!'><br>\n\
Well Done!";
       document.getElementById("remarks").innerHTML = celebratoryGif;
       
       qsCounter = qsCounter +1;

   }
}

function concHelpWindow() {
    var myWindow = window.open("../../html/helpSheets/concentrationQuestions1Help.html", "myWindow", "width=800,height=500");
    
   
}
function concDefinitionWindow() {
    var myWindow = window.open("../ks4chemistry/definitions/concentration.html", "myWindow", "width=800,height=500");
    
   
}

function volumeConversionHelp() {
    var myWindow2 = window.open("../helpSheets/volumeConversionHelp.html", "myWindow2", "width=800,height=500");
    
   
}

function test(){
    document.getElementById("test3").innerHTML = "hello world";
}