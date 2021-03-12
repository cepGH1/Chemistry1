/* 
 * CEP 2017
 * GCSE Chemistry
 */
var questions = ["Example 2<br> 50cm<sup>3</sup> of 1M hydrochloric acid was used to completely neutralise\n\
a 250cm<sup>3</sup> sample of sodium hydroxide solution. What was the concentration of the \n\
sodium hydroxide solution",
    
"Example 3<br> 125cm<sup>3</sup> of 1M hydrochloric acid was used to completely neutralise\n\
a 250cm<sup>3</sup> sample of sodium hydroxide solution. What was the concentration of the \n\
sodium hydroxide solution",
    
"Example 4<br> 50cm<sup>3</sup> of 1M sulfuric acid was used to completely neutralise\n\
a 250cm<sup>3</sup> sample of sodium hydroxide solution. What was the concentration of the \n\
sodium hydroxide solution",

"Example 5<br> 125cm<sup>3</sup> of 1M sulfuric acid was used to completely neutralise\n\
a 250cm<sup>3</sup> sample of sodium hydroxide solution. What was the concentration of the \n\
sodium hydroxide solution"];

var  wordEquations = ["Hydrochloric acid + sodium hydroxide --> sodium chloride + water",
    "Hydrochloric acid + sodium hydroxide --> sodium chloride + water",
    "Sulfuric acid + sodium hydroxide --> sodium sulfate + water",
"Sulfuric acid + sodium hydroxide --> sodium sulfate + water"];

var formulaEquations = ["HCl(aq) + NaOH(aq) --> NaCl(aq) + H<sub>2</sub>O(l)",
    "HCl(aq) + NaOH(aq) --> NaCl(aq) + H<sub>2</sub>O(l)",
   "H<sub>2</sub>SO<sub>4</sub>(aq) + 2NaOH(aq) --> Na<sub>2</sub>SO<sub>4</sub>(aq) + 2H<sub>2</sub>O(l)",
   "H<sub>2</sub>SO<sub>4</sub>(aq) + 2NaOH(aq) --> Na<sub>2</sub>SO<sub>4</sub>(aq) + 2H<sub>2</sub>O(l)" ];

var molarEquivalences = ["1:1<br> 1 mole of hydrochloric acid neutralises 1 mole of sodium hydroxide",
    "1:1<br> 1 mole of hydrochloric acid neutralises 1 mole of sodium hydroxide",
    "1:2<br> 1 mole of sulfuric acid neutralises 2 moles of sodium hydroxide",
"1:2<br> 1 mole of sulfuric acid neutralises 2 moles of sodium hydroxide"];

var knownMoles = ["We know the concentration and the volume of the hydrochloric acid<br>\n\
Concentration = 1M (1 mole per decimeter cubed, dm<sup>3</sup>)<br>\n\
Volume = 50cm<sup>3</sup> = 50/1000 dm<sup>3</sup> = 0.05dm<sup>3</sup><br>\n\
All volumes need to be converted and used in dm<sup>3</sup><br>\n\
Number of moles of hydrochloric acid used (concentration x volume = moles )<br>\n\
Number of moles = 1 x 0.05 = 0.05moles of HCl ",
    
   "We know the concentration and the volume of the hydrochloric acid<br>\n\
Concentration = 1M (1 mole per decimeter cubed, dm<sup>3</sup>)<br>\n\
Volume = 125cm<sup>3</sup> = 125/1000 dm<sup>3</sup> = 0.125dm<sup>3</sup><br>\n\
All volumes need to be converted and used in dm<sup>3</sup><br>\n\
Number of moles of hydrochloric acid used (concentration x volume = moles )<br>\n\
Number of moles = 1 x 0.125 = 0.125moles of HCl " ,
    
"We know the concentration and the volume of the sulfuric acid<br>\n\
Concentration = 1M (1 mole per decimeter cubed, dm<sup>3</sup>)<br>\n\
Volume = 50cm<sup>3</sup> = 50/1000 dm<sup>3</sup> = 0.05dm<sup>3</sup><br>\n\
All volumes need to be converted and used in dm<sup>3</sup><br>\n\
Number of moles of sulfuric acid used (concentration x volume = moles )<br>\n\
Number of moles = 1 x 0.05 = 0.05moles of H<sub>2</sub>SO<sub>4</sub> ",
    
"We know the concentration and the volume of the sulfuric acid<br>\n\
Concentration = 1M (1 mole per decimeter cubed, dm<sup>3</sup>)<br>\n\
Volume = 125cm<sup>3</sup> = 125/1000 dm<sup>3</sup> = 0.125dm<sup>3</sup><br>\n\
All volumes need to be converted and used in dm<sup>3</sup><br>\n\
Number of moles of sulfuric acid used (concentration x volume = moles )<br>\n\
Number of moles = 1 x 0.125 = 0.125moles of H<sub>2</sub>SO<sub>4</sub> "];

var unknownMoles = ["The ratio of moles HCl needed to neutralise moles NaOH is 1:1, so<br>\n\
0.05 moles of HCl would neutralise 0.05 moles of NaOH",
    "The ratio of moles HCl needed to neutralise moles NaOH is 1:1, so<br>\n\
0.125 moles of HCl would neutralise 0.125 moles of NaOH",
    "The ratio of moles H<sub>2</sub>SO<sub>4</sub> needed to neutralise moles NaOH is 1:2, so<br>\n\
0.05 moles of H<sub>2</sub>SO<sub>4</sub> would neutralise 2 x 0.05 moles of NaOH, 0.1moles\n\
NaOH",
        "The ratio of moles H<sub>2</sub>SO<sub>4</sub> needed to neutralise moles NaOH is 1:2, so<br>\n\
0.125 moles of H<sub>2</sub>SO<sub>4</sub> would neutralise 2 x 0.125 moles of NaOH, 0.25moles\n\
NaOH"];

var unknownConcentrations = ["Concentration = moles/volume<br>\n\
moles = 0.05<br> volume = 250cm<sup>3</sup> = 250/1000 dm<sup>3</sup> = 0.25dm<sup>3</sup><br>\n\
Concentration = 0.05/0.25 = 0.2mol/dm<sup>3</sup> = 0.2\n\
M",
    "Concentration = moles/volume<br>\n\
moles = 0.125<br> volume = 250cm<sup>3</sup> = 250/1000 dm<sup>3</sup> = 0.25dm<sup>3</sup><br>\n\
Concentration = 0.125/0.25 = 0.5mol/dm<sup>3</sup> = 0.5M",
    "Concentration = moles/volume<br>\n\
moles = 0.1<br> volume = 250cm<sup>3</sup> = 250/1000 dm<sup>3</sup> = 0.25dm<sup>3</sup><br>\n\
Concentration = 0.1/0.25 = 0.4mol/dm<sup>3</sup> = 0.4\n\
M NaOH solution",
    "Concentration = moles/volume<br>\n\
moles = 0.25<br> volume = 250cm<sup>3</sup> = 250/1000 dm<sup>3</sup> = 0.25dm<sup>3</sup><br>\n\
Concentration = 0.25/0.25 = 1mol/dm<sup>3</sup> = 1M NaOH solution"];

function word1(){
     var myWindow = window.open("wordEquations.html", "myWindow", "width=800,height=500");
}
function formulas1(){
     var myWindow = window.open("formulaEquations.html", "myWindow", "width=800,height=500");
}
function molars(){
     var myWindow = window.open("molarEquivalence.html", "myWindow", "width=800,height=500");
}
function concentrations(){
     var myWindow = window.open("./definitions/concentration.html", "myWindow", "width=800,height=500");
}
function usingEquivalence(){
     var myWindow = window.open("../helpSheets/usingEquivalence.html", "myWindow", "width=800,height=500");
}

function titrationExample(myNum){
    var exampleNumber = myNum;
    if(exampleNumber === 1){
        document.getElementById("titrationQuestion").innerHTML = questions[0];
        document.getElementById("titrationWordEquation").innerHTML = wordEquations[0];
        document.getElementById("titrationFormulaEquation").innerHTML = formulaEquations[0];
        document.getElementById("titrationMolarEquivalence").innerHTML = molarEquivalences[0];
        document.getElementById("titrationKnownMoles").innerHTML = knownMoles[0];
        document.getElementById("titrationUnknownMoles").innerHTML = unknownMoles[0];
        document.getElementById("titrationAnswer").innerHTML = unknownConcentrations[0];
    }
    if(exampleNumber === 2){
         document.getElementById("titrationQuestion").innerHTML = questions[1];
        document.getElementById("titrationWordEquation").innerHTML = wordEquations[1];
        document.getElementById("titrationFormulaEquation").innerHTML = formulaEquations[1];
        document.getElementById("titrationMolarEquivalence").innerHTML = molarEquivalences[1];
        document.getElementById("titrationKnownMoles").innerHTML = knownMoles[1];
        document.getElementById("titrationUnknownMoles").innerHTML = unknownMoles[1];
        document.getElementById("titrationAnswer").innerHTML = unknownConcentrations[1];
    }
     if(exampleNumber === 3){
         document.getElementById("titrationQuestion").innerHTML = questions[2];
        document.getElementById("titrationWordEquation").innerHTML = wordEquations[2];
        document.getElementById("titrationFormulaEquation").innerHTML = formulaEquations[2];
        document.getElementById("titrationMolarEquivalence").innerHTML = molarEquivalences[2];
        document.getElementById("titrationKnownMoles").innerHTML = knownMoles[2];
        document.getElementById("titrationUnknownMoles").innerHTML = unknownMoles[2];
        document.getElementById("titrationAnswer").innerHTML = unknownConcentrations[2];
    }
         if(exampleNumber === 4){
         document.getElementById("titrationQuestion").innerHTML = questions[3];
        document.getElementById("titrationWordEquation").innerHTML = wordEquations[3];
        document.getElementById("titrationFormulaEquation").innerHTML = formulaEquations[3];
        document.getElementById("titrationMolarEquivalence").innerHTML = molarEquivalences[3];
        document.getElementById("titrationKnownMoles").innerHTML = knownMoles[3];
        document.getElementById("titrationUnknownMoles").innerHTML = unknownMoles[3];
        document.getElementById("titrationAnswer").innerHTML = unknownConcentrations[3];
    }
}

function showQuestionAnswers(qNum){
    if(qNum === 1){
    document.getElementById("answerQuestion1").innerHTML = "1M solution of sodium hydroxide solution";
}
    if(qNum === 2){
    document.getElementById("answerQuestion2").innerHTML = "2M solution of sodium hydroxide solution";
}
    if(qNum === 3){
    document.getElementById("answerQuestion3").innerHTML = "1M solution of sodium hydroxide solution";
}

}

function test(){
    document.getElementById("test").innerHTML = "hello world";
}