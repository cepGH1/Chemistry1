/* 
 * CEP 2020
 * Calculate the number of particles in a given mass or moles of a substance
 */


var mass;
var relativeFormulaMass;
var avagadrosNumber;
var numOfMoles;

var nom;
var power;
var clare;

var numOfParticles = ["6.02 x 10<sup>23</sup>",  "1.20 x 10<sup>24</sup>", "6.02 x 10<sup>23</sup>",
    "6.01 x 10<sup>23</sup>"];

var questionList =["How many sodium atoms are there in 23g of sodium metal?",
                   "How many sodium atoms are there in 46g of sodium metal?",
                   "How many sodium atoms are there in 58.5g of sodium chloride?",
                    "How many molecules are there in 18g of pure water?",
                    "How many atoms are there in 18g of pure water?"];
var questionNumber;

var explanations = [
    "How many moles of sodium atoms are there in 23g of sodium metal?<br>Relative Atomic Mass sodium = 22.99<br> Moles = Mass/Relative Atomic Mass<br> \n\
Moles = 23g/22.99g/mol = 1.00mol<br> There are 6.02 x 10<sup>23</sup> particles in each mole<br> \n\
Number of particles = number of moles x number of particles in each mole<br>\n\
Number of particles = number of moles x 6.02 x 10<sup>23</sup><br>\n\
Number of particles = 1.00 x 6.02 x 10<sup>23</sup> <br> Number of particles = 6.02 x10<sup>23</sup>",
    "How many moles of sodium atoms are there in 46g of sodium metal?<br>Relative Atomic Mass sodium = 22.99<br> Moles = Mass/Relative Atomic Mass<br> \n\
Moles = 46g/22.99g/mol = 2.00mol<br> There are 6.02 x 10<sup>23</sup> particles in each mole<br> \n\
Number of particles = number of moles x 6.02 x 10<sup>23</sup><br>\n\
Number of particles = 2.00 x 6.02 x 10<sup>23</sup><br> Number of particles = 1.2 x 10<sup>24</sup> ",
    "How many sodium ions are there in 58.5g of sodium chloride?<br> Relative Atomic Mass sodum = 22.99<br>\n\
Relative atomic mass chlorine = 35.5<br> Relative Formula Mass sodium chloride = Relative Atomic Mass sodium + Relative Atomic mass chlorine<br>\n\
Relative Formula Mass sodium chloride = 22.99 + 35.5 = 58.5<br>\n\
Number of moles of sodium chloride = mass of sodium chloride/relative formula mass sodium chloride<br>\n\
Number of moles of sodium chloride in 58.5g of sodium chloride = 58.5g/58.5g/mol = 1mol<br>\n\
In one mole sodium chloride there is 1 mole of sodium ions and one mole of chloride ions\n\
Number of particles in 1 mole = 6.02x10<sup>23</sup><br>\n\
Number of sodium ions in 58.5g sodium chloride = 1 x 1 x 6.02x10<sup>23</sup><br>\n\
Number of sodium ions in 58.5g of sodium chloride = 6.02x10<sup>23</sup><br>",
    "How many water molecules are there in 18g of water?<br>\n\
Relative Atomic mass Oxygen = 15.999 Relative atomic mass hydrogen = 1.008<br>\n\
Relative Formula Mass water H<sub>2</sub>O = (2 x RAM Hydrogen) + (1 x RAM oxygen)<br>\n\
RFM water = (2 x 1.008) + (1 x 15.999)<br>\n\
RFM water = 18.015<br>\n\
Moles of water = mass/RFM = 18/18.015 = 0.999mol<br>\n\
6.01x10<sup>23</sup> molecules",
    "1.8x10<sup>24</sup> atoms"
];


function convertToScientificNotation(myNumber){
    //convert a copy of it to string
    //measure the length of the string
    //take one off this length
    //divide the original number by 10 to the power of this number using pow() function
    //round to one decimal place
    //concatenate these into a string that represents the number
}

function selectQuestion(){
    questionNumber = 0;
    document.getElementById("particleQuestionBox1").innerHTML = questionList[questionNumber];
}

function nextQuestion(){
    clearBoxes();
    if(questionNumber < questionList.length-1){
    questionNumber = questionNumber +1;
    document.getElementById("particleQuestionBox1").innerHTML = questionList[questionNumber];
    }
    else{
        document.getElementById("particleQuestionBox1").innerHTML = "Activity Complete";
    }
}

function clearBoxes(){
   document.getElementById("particleAnswer1").innerHTML = " "; 
}

function collectAnswer(){
    nom = document.getElementById("answerNumerator").value;
    power = document.getElementById("answerPower").value;
    nom = nom.trim();
    power = power.trim();
    clare = nom + " x 10<sup>"+ power + "</sup>";
    
    //document.getElementById("testAv1").innerHTML = clare;
}

function checkAnswer(){
    collectAnswer();
    if(clare === numOfParticles[questionNumber] ){
        document.getElementById("testAv1").innerHTML = clare + " correct, well done!";
    }
    else{
       document.getElementById("testAv1").innerHTML = clare + " is not the right answer";  
    }
}
//may just be look it up
function calculateRelativeFormulaMass(){
    
}
function howManyMoles(){
    
}

function howManyParticles(){
    
}

function explanationPopUp(){
    
    var myWindow = window.open("howManyParticlesAnswer.html", "myWindow", "width=500,height=500");
}
function definitionPopUp(theAddress){
    var address = theAddress;
    var myWindow = window.open(address, "myWindow", "width=500,height=500");
}

function showAnswer(){
    num = questionNumber;
    document.getElementById("particleAnswer1").innerHTML = explanations[num];
   
}

