/* 
 * CEP 2020
 */


//take a string and add a suffix and a filepath. Display the resulting file
//in a div

var fileName;
var taContents;
var suffix = ".png";
var filePath ="../../images/displayedFormula/";
var fullAddress;
var image;
var imageLoader;
var test = "hello world";

function test090420(){
    document.getElementById("testThursday").innerHTML = "hello world";
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}


function findFile(){
    taContents = document.getElementById("nameBox1").value;
    fileName = myTrim(taContents);
    fullAddress = filePath + fileName + suffix;
    imageLoader = "<img src='" + fullAddress + "' alt='missing image' height='300' width='300'> ";
    document.getElementById("displayBox1").innerHTML = imageLoader;
    
    
    
    
    
    
}

function setFilePath(address){
    filePath = address;
}

