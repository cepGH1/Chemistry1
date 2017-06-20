/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var symbols = ["H", "He", "Li", "Be", "O", "F", "Ne", 
                    "Na", "Mg", "Al",  "S", "Cl", "Ar",
                    "K", "Ca", 
                     "Se", "Br", "I"];
var charges = ["+", "0", "+", "2+", "2-", "-", "0", 
                "+", "2+", "3+", "2-", "-", "0", "+", "2+", "2-", "-", "-"  ];

var num1;
function periodicTableWindow() {
    var myWindow = window.open("../html/periodicTableBigImage.html", "myWindow", "width=800,height=500");
    
   
}

function displayIonAnswers() {
    var myWindow = window.open("../html/complexIonAnswers.html", "myWindow", "width=500,height=800");
    
   
}

function selectElement(){
    num1 = Math.floor((Math.random() * 18) );
    var ion1 = symbols[num1];
    clearTextArea();
    clearResponse();
     document.getElementById("ionSymbol").innerHTML = ion1;
     
}


function clearTextArea(){
    document.getElementById("ionCharge").value = '';
}

function clearResponse(){
    document.getElementById("ionResponse").innerHTML = " ";
}

function checkAnswer(){
var answer = document.getElementById("ionCharge").value;

if (answer === charges[num1]){
//    addRow(counter);
    document.getElementById("ionResponse").innerHTML = "That is correct. Well Done!";
    //selectElement();
    
}
else{
    document.getElementById("ionResponse").innerHTML = "Nope, please think again";
}
}
