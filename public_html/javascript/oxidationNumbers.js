/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var pTable = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
            "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulphur", "Chlorine", "Argon",
            "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
            "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton",
            "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium",
            "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon",
            "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium",
            "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon",
            "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium"];

var pTableSymbol = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", 
                    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
                    "K", "Ca", "Sc", "Ti", "Va", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zi", 
                    "Ga", "Ge", "As", "Se", "Br", "Kr"];
                
var compounds = ["NaCl", "NH\u2083", "KMnO\u2084", "H\u2082SO\u2084", "Fe\u2082O\u2083", "CaBr\u2082", "HNO\u2083", "Na\u2082Cr\u2082O\u2087", "VF\u2082", "VF\u2084"];

var NaCl = ["+1","-1"];
var NH3 = ["-3", "+1"];
var KMnO4 = ["+1","+7", "-2"];
var H2SO4 = ["+1", "+6", "-2"];
var Fe2O3 = ["+3", "-2"];
var CaBr2 = ["+2", "-1"];
var HNO3 = ["+1", "+5", "-2"];
var Na2Cr2O7 = ["+1", "+6", "-2"];
var VF2 = ["+2", "-1"];
var VF4 = ["+4", "-1"];
var oxidationNumbers = [NaCl, NH3, KMnO4, H2SO4, Fe2O3, CaBr2, HNO3, Na2Cr2O7, VF2, VF4];
var compoundCounter = 0;
var compound;
var compoundFormula;

//check the link to the html file
function ONtest1(){
    document.getElementById("ONtest1").innerHTML = compounds[2];
}

//selects a compound, creates an array to help show the elements inside it

function getCompound(){
    compound = compounds[compoundCounter];
    compoundFormula = [compound];
        if (compoundCounter < compounds.length -1 ){
             compoundCounter = compoundCounter + 1;  
            }
        else {
               compoundCounter = 0;  
            }
}
//finds and displays the elements in a compound in a compoundFormula array
function getElements(){
    var output = "";
 
    var length = compound.length;
    var counter = 0;
   
    var first = compound.charAt(0);
    var second = compound.charAt(1);
    
    while (counter<length){
        first = compound.charAt(counter);
        second = compound.charAt(counter + 1);
        
        
    if (first === "\u2082" || first === "\u2083" || first === "\u2084" || first === "\u2087"){
        counter = counter + 1;
    }
    else{
        if (second === second.toLowerCase())
        {
   
            if (second === "\u2082" || second === "\u2083" || second === "\u2084" || second === "\u2087"){
                output = output + "<br>" + first;
                compoundFormula.push(first);
                
            }
            else{
                output = output + "<br>" + first + second;
               var formula2 = first + second;
               compoundFormula.push(formula2);
                }
                counter = counter +2;
        }   
        else
        {
            output = output + "<br>" +  first;
            compoundFormula.push(first);
            counter = counter +1;
        }
        }   
    }


     //document.getElementById("showElements").innerHTML = output;
}

// puts a few words of introduction on the screen
function doIntro(){
    document.getElementById("answers").innerHTML = "";
    document.getElementById("intro").innerHTML = "<p>Calculate the oxidation numbers of the elements within " + compoundFormula[0] + "</p>";
}

//produces a string to use as html input for the body of the table to enter the answers in
function buildRow(){
    var text = "<tr><td>Element</td><td>Oxidation Number</td></tr>";
  
    for (i = 1; i < compoundFormula.length; i++) {
    var myRow = "<tr><td style=\"color:red;\">" + compoundFormula[i] + "</td><td><textarea id=\"TextArea" +i + "\"></textarea></td></tr>";
  text = text + myRow;
}
return text;
}

// builds a table to enter the answers into
function buildTable2(){
    var table2;
    var tableHead2 = "<table><thead><p style=\"color:red;\">" + compoundFormula[0] + "</p></thead>";
    var tableBody = "<tbody>";
    var content = buildRow();
    var endTable ="</tbody></table>";
    table2 = tableHead2 + tableBody + content + endTable;
    document.getElementById("testTable").innerHTML = table2;
    return table2;
    
}

//selects a compound and displays a table to enter the answers in
function oxidationNumberQuiz(){
    getCompound();
    getElements();
    doIntro();
    buildTable2();
}

function checkAnswers(){
    var myString;
    var myStrings = [];
    var compoundID;
    for (i = 1; i < compoundFormula.length; i++){
        var name = "TextArea" + i;
       myString = document.getElementById(name).value;
       myStrings.push(myString);
       
   }
 if(compoundCounter ===0){
     compoundID = compounds.length -1;
 }
 else{
     compoundID = compoundCounter - 1;
 }
 
if (oxidationNumbers[compoundID].toString()===myStrings.toString()){
 document.getElementById("answers").innerHTML = myStrings + ", answers " + oxidationNumbers[compoundID] + " well done!";
 }
 

 else{
     document.getElementById("answers").innerHTML = "Nope! The answers are " + oxidationNumbers[compoundID];
 }
}