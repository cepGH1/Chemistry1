/* 
 * CEP 2021
 */


//array to hold the questions/scenarios
var electrolytes =["sodium chloride dissolved in water",
    "copper chloride dissolved in water",
"molten lead bromide", "molten sodium chloride", "sodium sulfate solution (in water)",
"water acidified with sulfuric acid", "molten aluminium oxide", "molten potassium chloride",
"sodium bromide dissolved in water"];

//array to hold the anode product identities
var anodeProducts = ["Chlorine gas", "Hydrogen gas", "Bromine", "Iodine", "Oxygen gas"];

//array to hold the cathode product identities
var cathodeProducts =["Hydrogen gas", "Copper metal", "Lead metal", "Sodium metal", "Aluminium metal", "Potassium metal"];

//array to hold the anode answers
var anodeAnswers = [0,0,2,0,4,4,4,0,2];

//array to hold the cathode answers
var cathodeAnswers = [0,1,2,3,0,0,4,5,0];

//the scenario number
var scenarioNumber = 0;

//holds the id of the selected anode product button 
var anodeProductChoice = 0;

//holds the id of the selected cathode product button
var cathodeProductChoice = 0;

//function that displays a file in a child window 
function sepExplanationPopUp(theAddress){
    var address = theAddress;
    var myWindow = window.open(address, "myWindow", "width=500,height=500");
}

//runs when choose anode product button is pressed. Updates page and anodeProductChoice var.
function lodgeAnodeChoice(myChoice){
    anodeProductChoice = myChoice;
    document.getElementById("anodeAnswer").innerHTML = anodeProducts[anodeProductChoice];
    
}

//runs when choose anode product button is pressed. Updates page and cathodeProductChoice var.
function lodgeCathodeChoice(myChoice){
    cathodeProductChoice = myChoice;
    document.getElementById("cathodeAnswer").innerHTML = cathodeProducts[cathodeProductChoice];
    
}

//loads a question to the page
function displayQuestion(){
    document.getElementById("elecFeedback3").innerHTML = "";
    document.getElementById("anodeAnswer").innerHTML = "";
    document.getElementById("cathodeAnswer").innerHTML = "";
    if(scenarioNumber<8){
        scenarioNumber ++;
    }
    else{
        scenarioNumber = 0;
    }
    var question = electrolytes[scenarioNumber];
    document.getElementById("electrolysisExperiment").innerHTML = question;

}

// code to check that the button pressed is the correct one
function checkChoice(){
    if(cathodeProductChoice === cathodeAnswers[scenarioNumber] & anodeProductChoice === anodeAnswers[scenarioNumber]){
        document.getElementById("elecFeedback3").innerHTML = "Correct!";
    }
    else{
      document.getElementById("elecFeedback3").innerHTML = "No thats not it, try another method";  
    }
}

//gives a standard answer to the separation problem displayed
function displayAnswerExplanation(){
    if(scenarioNumber === 0){
        sepExplanationPopUp("../../resources/electrolysisProducts/sodiumChlorideSolution.pdf");
    } 
    if(scenarioNumber === 1){
    sepExplanationPopUp("../../resources/electrolysisProducts/copperChlorideSolution.pdf");
    }
    if(scenarioNumber === 2){
        sepExplanationPopUp("../../resources/electrolysisProducts/moltenLeadBromide.pdf");
    }
     if(scenarioNumber === 3){
        sepExplanationPopUp("../../resources/electrolysisProducts/moltenSodiumChloride.pdf");
    }
      if(scenarioNumber === 4){
        sepExplanationPopUp("../../resources/electrolysisProducts/sodiumSulfateSolution.pdf");
    }
          if(scenarioNumber === 5){
        sepExplanationPopUp("../../resources/electrolysisProducts/diluteSulfuricAcid.pdf");
    }
          if(scenarioNumber === 6){
        sepExplanationPopUp("../../resources/electrolysisProducts/moltenAluminiumOxide.pdf");
    }
          if(scenarioNumber === 7){
        sepExplanationPopUp("../../resources/electrolysisProducts/moltenPotassiumChloride.pdf");
    }
          if(scenarioNumber === 8){
        sepExplanationPopUp("../../resources/electrolysisProducts/sodiumBromideSolution.pdf");
    }
     }

