/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//an array to hold the names of the elements in order of atomic number

var pTable = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
            "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon",
            "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
            "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton",
            "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium",
            "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon",
            "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium",
            "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon",
            "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium"];

// an array of electronic levels
var electronConfiguration = ["1S", "2S", "2P", "3S", "3P", "4S", "3D", "4P", "5S", "4D", "5p", "6S", "4F", "5D", "6P", "7S", "5F"];

//and array of numbers of electrons per level in the previous array
var electronNumbers =[2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,12];

//variable to hold a selected elements atomic number
var atomicNumber;
//variable to hold the element name
var element1;

//variable to hold the inputted electron configuration
var inputConfiguration1 = "";

//variable to hold the selected element electronic configuration
var finalConfiguration;

//variable to hold a score
var score = 0;

//generate a randon element up to atomic number 100
function generateRandomElement(){
    //generate a random number between 0 and 99
    var num1 = Math.floor((Math.random() * 100) ); 
    //select the associated element from the array
    element1 = pTable[num1];
    //generate the atomic number of the element
    atomicNumber = num1 +1;
    //generate a counter to use to count down the electrons used up in the configuration while loop
    var counter = num1 +1;
    //array to store the numbers of electrons per level of the selected element
    var elementConfiguration = [];
    //array to store the electron levels of the selected element
    var elementElectronLevels = [];
    //to count the indices of the arrays
    var level = 0;
    //select the electron levels in use by this element
    while (counter >0){
        if(counter>electronNumbers[level]){
        elementConfiguration.splice(level,0,electronNumbers[level]);
        elementElectronLevels.splice(level,0,electronConfiguration[level]);
        counter = counter-electronNumbers[level];
        level = level +1;
    }
    else{
        elementElectronLevels.splice(level,0,electronConfiguration[level]);
        elementConfiguration.splice(level,0,counter);
        counter = counter-electronNumbers[level];
    }
        
    }
    finalConfiguration = "";
    for (i = 0; i < elementConfiguration.length; i++) {
        
   
     finalConfiguration = finalConfiguration + elementElectronLevels[i] + elementConfiguration[i] + ", ";
}
   
    document.getElementById("demo2").innerHTML =  element1 + "<br>" + atomicNumber + "<br>" +
            elementElectronLevels + "<br>" + finalConfiguration;
}

function generateRandomElement1(){
    //generate a random number between 0 and 99
    var num1 = Math.floor((Math.random() * 100) ); 
    //select the associated element from the array
    element1 = pTable[num1];
    //generate the atomic number of the element
    atomicNumber = num1 +1;
    //generate a counter to use to count down the electrons used up in the configuration while loop
    var counter = num1 +1;
    //array to store the numbers of electrons per level of the selected element
    var elementConfiguration = [];
    //array to store the electron levels of the selected element
    var elementElectronLevels = [];
    //to count the indices of the arrays
    var level = 0;
    //select the electron levels in use by this element
    while (counter >0){
        if(counter>electronNumbers[level]){
        elementConfiguration.splice(level,0,electronNumbers[level]);
        elementElectronLevels.splice(level,0,electronConfiguration[level]);
        counter = counter-electronNumbers[level];
        level = level +1;
    }
    else{
        elementElectronLevels.splice(level,0,electronConfiguration[level]);
        elementConfiguration.splice(level,0,counter);
        counter = counter-electronNumbers[level];
    }
        
    }
    finalConfiguration = "";
    for (i = 0; i < elementConfiguration.length; i++) {
        
   
     finalConfiguration = finalConfiguration + elementElectronLevels[i] + elementConfiguration[i] + ", ";
}
   
  
}

function getElement(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("inputConfiguration").innerHTML = "";
    document.getElementById("success").style.background = "";
    inputConfiguration1 = "";
    generateRandomElement1();
    document.getElementById("elementGenerator").innerHTML =  element1 + "<br>" + atomicNumber + "<br>" ;
}

function levelButtonPressed(selectedLevel){
    inputConfiguration1 = inputConfiguration1 + selectedLevel;
    document.getElementById("inputConfiguration").innerHTML =  inputConfiguration1;
}

function electronButtonPressed(selectedNumber){
    inputConfiguration1 = inputConfiguration1 + selectedNumber + ", ";
    document.getElementById("inputConfiguration").innerHTML =  inputConfiguration1;
}

function goCompare(){
    if (inputConfiguration1 === finalConfiguration){
        document.getElementById("result").innerHTML = "<h2>Well done!</h2>";
        score = score +1;
        document.getElementById("score").innerHTML = score; 
        
        document.getElementById("success").style.background = "url('../images/fireworks2.gif')";
    }
    else{
       document.getElementById("result").innerHTML = "Nope"; 
    }
}