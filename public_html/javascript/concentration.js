/* 
 *CEP 2021
 */

var questions = ["<b>Example 1</b><br>Calculate the concentration in moles per dm<sup>3</sup> of a\n\
salt water solution where 58.5g of sodium chloride are dissolved in 500cm<sup>3</sup> water"];

var moleCalculation = [];
var volumeCalculation =[];
var concentrations = [];

var volume;
var moles;
var concentration;
var relativeMolecularMass;

function concExample(myNum){
    if(myNum === 0){
     document.getElementById("concQuestion").innerHTML = questions[0];
        document.getElementById("concMoles").innerHTML = moleCalculation[0];
        document.getElementById("concVolume").innerHTML = volumeCalculation[0];
        document.getElementById("concConcentration").innerHTML = concentrations[0];
    }
     if(myNum === 1){
     document.getElementById("concQuestion").innerHTML = questions[1];
        document.getElementById("concMoles").innerHTML = moleCalculation[1];
        document.getElementById("concVolume").innerHTML = volumeCalculation[1];
        document.getElementById("concConcentration").innerHTML = concentrations[1];
    }
    }

