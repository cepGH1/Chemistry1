/* 
 * CEP 2020
 */


var stateQuestions = [
    "A pure substance x has melting point 10<sup>o</sup>C and boiling point 156<sup>o</sup>C\n\
What state of matter is x in at 5<sup>o</sup>C?", 
"A molecule made up from C, H, O, and N, has a melting point\n\
 of 70<sup>o</sup>C and a boiling point of 120<sup>o</sup>C. What physical \n\
state is it in at 135<sup>o</sup>C?", 
"Mercury has a melting point of -39<sup>o</sup>C and a boiling point of \n\
357<sup>o</sup>C. In what state of matter is mercury when it’s temperature is 0<sup>o</sup>C?",
  "Sodium melts at 98<sup>o</sup>C and boils at 883<sup>o</sup>C. In which physical state is sodium at 99<sup>o</sup>C?",
  "Fluorine has a boiling point of -118<sup>o</sup>C and a melting point of -219<sup>o</sup>C.\n\
 In which physical state is Fluorine at -100<sup>o</sup>C?" , 
  "Hydrogen fluoride has melting point -84<sup>o</sup>C and a boiling point of 19.5<sup>o</sup>C.\n\
 What physical state is hydrogen fluoride in at -12<sup>o</sup>C?",
  "Gallium has a melting point of 30<sup>o</sup>C and a boiling point of 2229<sup>o</sup>C.\n\
 Is Gallium a solid or a liquid or a gas at 35<sup>o</sup>C?",
  "Potassium has a boiling point of 759<sup>o</sup>C and a melting point of 64<sup>o</sup>C.\n\
 In which physical state is potassium at 50<sup>o</sup>C?",
    "Carbon dioxide sublimes at -79<sup>o</sup>C. What physical state is carbon dioxide in at -90<sup>o</sup>C? "
  ];
var stateAnswers = [0, 2, 1, 1, 2, 1, 1, 0,0];
var selectedState;
var selectedQuestion =0;
var stateScore = 0;

function selectState(myState){
    selectedState = myState;
    
    //var stateName;
   if(selectedState === 0){
      document.getElementById("solid").innerHTML = "<div id='selectedStateText'><b>Solid</b></div>";
      document.getElementById("liquid").innerHTML = "<div id='stateText'><b>Liquid</b></div>";
      document.getElementById("gas").innerHTML = "<div id='stateText'><b>Gas</b></div>";
   }
   if(selectedState === 1){
      document.getElementById("solid").innerHTML = "<div id='stateText'><b>Solid</b></div>";
      document.getElementById("liquid").innerHTML = "<div id='selectedStateText'><b>Liquid</b></div>";
      document.getElementById("gas").innerHTML = "<div id='stateText'><b>Gas</b></div>";
   }
   if(selectedState === 2){
      document.getElementById("solid").innerHTML = "<div id='stateText'><b>Solid</b></div>";
      document.getElementById("liquid").innerHTML = "<div id='stateText'><b>Liquid</b></div>";
      document.getElementById("gas").innerHTML = "<div id='selectedStateText'><b>Gas</b></div>";
   }
    
    
}

function checkStateAnswer(){
    if (selectedState === stateAnswers[selectedQuestion] ){
        document.getElementById("stateResult").innerHTML = "Right Answer";
        stateScore++;
        document.getElementById("stateCounterBox").innerHTML = stateScore;
    }
    else
      document.getElementById("stateResult").innerHTML = "Nope";  
}

function nextStateQuestion(){
    selectedQuestion ++;
    document.getElementById("stateResult").innerHTML = "";
    document.getElementById("solid").innerHTML = "<div id='stateText'><b>Solid</b></div>";
      document.getElementById("liquid").innerHTML = "<div id='stateText'><b>Liquid</b></div>";
      document.getElementById("gas").innerHTML = "<div id='stateText'><b>Gas</b></div>";
      if(selectedQuestion < 9){
      document.getElementById("stateQuestion").innerHTML = stateQuestions[selectedQuestion];
  }
  else 
     document.getElementById("stateQuestion").innerHTML = "excercise complete"; 
}