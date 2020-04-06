/* 
 * CEP 2017
 * Calculating Masses
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
        
//an array to hold the symbols of the elements of the periodic table in order of atomic number

var pTableSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", 
            "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
            "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
            "Ga", "Ge", "As", "Se", "Br", "Kr",
            "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd",
            "In", "Sn", "Sb", "Te", "I", "Xe",
            "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
            "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
            "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm"];
        
//an array holding the realtive atomic masses in atomic number order in text format

var pTableMasses = ["1.01", "4.00", "6.94", "9.01", "10.81", "12.01", "14.01", "16.00", "19.00", "20.18",
    "22.99", "24.31", "26.98", "28.09", "30.97", "32.06", "35.45", "39.95",
"39.10", "40.08", "44.96", "47.87", "50.94", "52.00", "54.94", "55.85", "58.93", "58.69", "63.55", "65.38",
"69.72", "72.63", "74.92", "78.97", "79.90", "83.80",
"85.47", "87.62", "88.91", "91.22", "92.91", "95.95", "98", "101.07", "102.91", "106.42", "107.87", "112.41",
"114.82", "118.71", "121.76", "127.60", "126.90", "131.29",
"132.91", "137.33", "138.91", "140.12", "140.91", "144.24", "145", "150.36", "151.96", "157.25", "158.93", "162.50",
"164.93", "167.26", "168.93", "173.05", "174.97",
"178.49", "180.95", "183.84", "186.21", "190.23", "192.22", "195.08", "196.97", "200.59",
"204.38", "207.20", "208.98", "209", "210", "222",
"223", "226", "227", "232.04", "231.04", "238.03", "237", "244", "243", "247", "247", "251", "252", "257"];

//an array of floats of atomic masses
var pTableMassesNumber = [1.01, 4.00, 6.94, 9.01, 10.81, 12.01, 14.01, 16.00, 19.00, 20.18,
    22.99, 24.31, 26.98, 28.09, 30.97, 32.06, 35.45, 39.95,
39.10, 40.08, 44.96, 47.87, 50.94, 52.00, 54.94, 55.85, 58.93, 58.69, 63.55, 65.38,
69.72, 72.63, 74.92, 78.97, 79.90, 83.80,
85.47, 87.62, 88.91, 91.22, 92.91, 95.95, 98, 101.07, 102.91, 106.42, 107.87, 112.41,
114.82, 118.71, 121.76, 127.60, 126.90, 131.29,
132.91, 137.33, 138.91, 140.12, 140.91, 144.24, 145, 150.36, 151.96, 157.25, 158.93, 162.50,
164.93, 167.26, 168.93, 173.05, 174.97,
178.49, 180.95, 183.84, 186.21, 190.23, 192.22, 195.08, 196.97, 200.59,
204.38, 207.20, 208.98, 209, 210, 222,
223, 226, 227, 232.04, 231.04, 238.03, 237, 244, 243, 247, 247, 251, 252, 257];

//array to hold formulas
var molecularFormulas = ["NaCl", "MgO", "KF", "LiBr", "MgS", "CaO", "NaI", "KCl",
    "NaOH", "LiOH", "H<sub>2</sub>O", "CH<sub>4</sub>", "H<sub>2</sub>",
    "CH<sub>3</sub>CH<sub>2</sub>OH",
    "C<Sub>2</sub>H<sub>6</sub>", "C<sub>3</sub>H<sub>8</sub>", "CH<sub>3</sub>OH", 
    "C<sub>3</sub>H<sub>7</sub>OH","MgCl<sub>2</sub>", "CO<sub>2</sub>", "CuO",
    "CuCO<sub>3</sub>", "Fe<sub>2</sub>O<sub>3</sub>", "FeS", "O<sub>3</sub>",
    "N<sub>2</sub>", "O<sub>2</sub>"];
var tester = ["H<sub>2</sub>O" ];
//array to hold relative formula masses
var RFMs = [58.44, 40.30, 58.1, 86.64, 56.37, 56.08, 149.89, 74.55, 40.00, 22.95, 18.02,
    16.04, 2.02, 46.07, 30.07, 44.10, 32.04, 60.10, 95.31, 44.01, 79.54, 123.55, 159.69, 
    87.91, 48.00, 28.01, 32.00];

//variable to hold the selected element name
var elementName;

//variable to hold the selected element symbol
var elementSymbol;

//variable to hold the selected element relative atomic mass
var elementMass;
var elementMassText;

//variable to hold the selected molecule's formula
var molecule;

//variable to hold the selected molecule's relative formula mass.
var relativeFormulaMass;

//function to select an element at random
function generateRandomElement(){
     //generate a random number between 0 and 99
    var num1 = Math.floor((Math.random() * 100) ); 
     //select the associated element from the array
    elementName = pTable[num1];
    //select the assoaciated element symbol
    elementSymbol = pTableSymbols[num1];
    //select the associated relative atomic mass of the element
    elementMassText = pTableMasses[num1];
    elementMass = pTableMassesNumber[num1];
}

//function to display an element at random
function displayNewElement(){
    generateRandomElement();
    document.getElementById("selectedElement").innerHTML = "<p><h4>" + elementName + "</h4></p>";
}

//function that retrieves the contents of the textarea answerbox1 and checks if the inserted number is
//the same as the text of the relative atomic mass from the array pTableMasses
function getRAM(){
    var myAns = document.getElementById("answerbox1").value;
    if (myAns === elementMassText){
        var myReply = "That is correct! The Relative Atomic Mass of " + elementName + " is: ";
    }
    else{
        myReply = "The Relative Atomic Mass of " + elementName + " is: ";
  }
     document.getElementById("RAMAnswer").innerHTML = myReply + elementMass;
}

//function that retrieves the content of the textarea answerbox1, parses it to a number
//and checks if it is the same as the relative atomic mass number from the array pTableMassesNumber
function getRAMFloat(){
    var myAns = document.getElementById("answerbox1").value;
    var myAnsFloat = parseFloat(myAns);
        if (myAnsFloat === elementMass){
        var myReply = "That is correct! The Relative Atomic Mass of " + elementName + " is: ";
    }
    else{
        myReply = "The Relative Atomic Mass of " + elementName + " is: ";
  }
     document.getElementById("RAMAnswer").innerHTML = myReply + elementMass;
}


//calculates the Relative Formula Mass of the selected molecule
function calculateRFM(){
    
}

//checks if the answer in the textarea is the same as the recorded relative formula 
//mass of the selected molecule
function checkFormulaMass(){
       var myAns2 = document.getElementById("answerbox2").value;
    var myAns2Float = parseFloat(myAns2);
        if (myAns2Float === relativeFormulaMass){
        var myReply = "That is correct! The Relative Formula Mass of " + molecule + " is: ";
    }
    else{
        myReply = "The Relative Atomic Mass of " + molecule + " is: ";
  }
     document.getElementById("RFMAnswer").innerHTML = myReply + relativeFormulaMass; 
}

function displayRandomMolecule(){
     //generate a random number between 0 and 9
    var num2 = Math.floor((Math.random() * 27) );
    molecule = molecularFormulas[num2];
    relativeFormulaMass = RFMs[num2];
    document.getElementById("selectedMolecule").innerHTML = "<p><h4>" + molecule + "</h4></p>";
}

function testing(){
    document.getElementById("RFMTest").innerHTML = tester[0];
}