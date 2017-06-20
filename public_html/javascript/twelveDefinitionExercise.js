/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var name0 = "carbonyl";
var name1 = "ketone";
var name2 = "aldehyde";
var name3 = "carboxylic acid";
var name4 = "nitrile";
var name5 = "alcohol";
var name6 = "phenyl";
var name7 = "alkene";
var name8 = "alkyne";
var name9 = "amino";
var name10 = "Bromo";
var name11 = "sam";

 var names = [name0, name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11];
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
    num1 = Math.floor((Math.random() * 12) ); 
    
    imageName = "../images/twelveDefinitionExercise/" + num1 + ".png";
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
   
    document.getElementById(cellId).innerHTML = names[num1];
}

function startAgain(){
    location.reload();
}


