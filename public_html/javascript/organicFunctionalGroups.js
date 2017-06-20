/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var functionalGroups = ["carbonyl", "ketone", "aldehyde", "carboxylic acid", "nitrile", "alcohol", "phenyl"];
var num1;
var imageName;
var imageCode;

function organicFunctionalGroups(){
  
    var groupMessage = "image number "+ num1 ;
   
    
    document.getElementById("imageTracker").innerHTML = groupMessage;
}
function clearResultMessage(){
    document.getElementById("toBegin").innerHTML = " ";
}
function displayRandomImage(){
    num1 = Math.floor((Math.random() * 11) ); 
    
    imageName = "../images/functionalGroups/" + num1 + ".png";
    imageCode = "<img src =" + imageName + " height='200' width='400' >" ;
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
        result = "well done !";
        fillTable(num1);
    }
    if(num1 === 1 && myNum=== 0){
        result = "well done !";
        fillTable(num1);
    }
    if(num1 === 2 && myNum === 0){
        result = "well done, an aldehyde contains a carbonyl group";
        fillTable(num1);
    }
    document.getElementById("toBegin").innerHTML = result; 
}

function fillTable(groupNum){
    var groupId = groupNum;
    var cellId = "structureRow" + groupId;
    fillTableName();
    var structureTableImage = "<img src =" + imageName + " height='100' width='200' >";
    document.getElementById(cellId).innerHTML = structureTableImage;
}

function fillTableName(){
    var cellId = "nameRow" + num1;
    var names = ["carbonyl", "ketone", "aldehyde", "carboxylic acid", "nitrile", "alcohol", "phenyl", "alkene", "alkyne", "amino", "Bromo"];
    document.getElementById(cellId).innerHTML = names[num1];
}

function startAgain(){
    location.reload();
}