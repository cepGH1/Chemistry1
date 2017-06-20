/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var functionalGroups = ["sulphate", "nitrate", "ammonium", "phosphate", 
     "hydroxide", "hydrogencarbonate", "carbonate", "chloride"];
var num1;
var imageName;
var imageCode;

function organicFunctionalGroups(){
  
    var groupMessage = "image number "+ num1 ;
   
    
    document.getElementById("imageTracker").innerHTML = groupMessage;
}
function clearResultMessage(){
    document.getElementById("toBegin").innerHTML = ". ";
}
function displayRandomImage(){
    num1 = Math.floor((Math.random() * 8) ); 
    
    imageName = "../images/ionStructures/" + num1 + ".png";
    imageCode = "<img src =" + imageName + " height='50px' width='50px' >" ;
    clearResultMessage();
    document.getElementById("fgStructure1").innerHTML = imageCode;
}

function correctId(myNum){
    var result = "Nope, try again";
    if(myNum === num1){
         result = "well done";
         fillTable(num1);
    }
    if(num1 === 0 && myNum=== 1){
        result = "Correct";
        fillTable(num1);
    }
    if(num1 === 1 && myNum=== 0){
        result = "Correct";
        fillTable(num1);
    }
    if(num1 === 2 && myNum === 0){
        result = "Correct";
        fillTable(num1);
    }
    document.getElementById("toBegin").innerHTML = result; 
}

function fillTable(groupNum){
    var groupId = groupNum;
    var cellId = "structureRow" + groupId;
    fillTableName();
    var structureTableImage = "<img src =" + imageName + " height='50px' width='50px' >";
    document.getElementById(cellId).innerHTML = structureTableImage;
}

function fillTableName(){
    var cellId = "nameRow" + num1;
    var names = ["sulphate", "nitrate", "ammonium", "phosphate", 
     "hydroxide", "hydrogencarbonate", "carbonate", "chloride"];
    document.getElementById(cellId).innerHTML = names[num1];
}

function startAgain(){
    location.reload();
}



