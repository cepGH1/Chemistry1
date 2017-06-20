/* 
 * KS4 physics
 * To play a pairs game matching names to formulae
 * CEP2017
 */




function cepCard(back, face, name, value, exposed){
    this.back = back;
    this.face = face;
    this.name = name;
    this.value = value;
    this.exposed = exposed;
}

var cards = [];
var backImage = "../../images/ks4Physics/commonFormulae/back1.jpg";
var backImage2 = "../../images/ks4Physics/commonFormulae/back2.jpg";
var cardCount = 0;
var exposedCard1;
var exposedCard2;
var exposedCell1;
var exposedCell2;
var tableArray = [];

var pairs = [];

var answers =[];
 var answer = false;
 var size = 16;

dealCepCards();

function setTableArray(size){
    var blankCard = new cepCard("empty", "empty", "empty", 0, "empty");
     for (i = 0; i < size; i++){
     tableArray[i] = blankCard;
 }
}

function makeAnswers(){
   answers[0] = [0, 1];
   answers[1] = [2, 3];
   answers[2] = [4, 5];
   answers[3] = [6, 7];
   answers[4] = [8, 9];
   answers[5] = [10,11];
   answers[6]= [12, 13];
   answers[7] = [14, 15];
   
   }

/*
 * creates a deck of cepCards
 */
function dealCepCards(){
    setTableArray(size);
    makeAnswers();
    
    for (i = 0; i < size; i++) {
        
        var front = "../../images/ks4Physics/commonFormulae/"+i+".jpg";
        var name = "formula";
        var value = i;
        var exposed = false;
        
    cards[i] = new cepCard("../../images/ks4Physics/commonFormulae/back1.jpg", front, name, value, exposed);
}
    for (i=0; i< size; i++){
    var num1 = Math.floor((Math.random() * size) ); 
    
  while(tableArray[num1].face !== "empty" ){
      num1 = Math.floor((Math.random() * size) ); 
  }
    tableArray[num1] = cards[i];
    
    }
}
/*
 * used to create individual cards
 * connecting filenames to each one.
 */
function createCards(back, front, name, value, exposed){
    var myCard = new cepCard(back, front, name, value, exposed);
    return myCard;
}

function turnCardOver(cellNo){
    
    var theID = "pairsButton"+ cellNo;
    
     if(cardCount===1){  
        cardCount++;
        tableArray[cellNo].exposed = true;
        exposedCell2 = cellNo;
    document.getElementById(theID).src = tableArray[cellNo].face;
    exposedCard2 = tableArray[cellNo];
    //document.getElementById("showElement").innerHTML = "the card is " + exposedCard2.value + " the cell is: " + exposedCell1;
    checkIfPaired();
    } 
    
    if(cardCount===0){  
        cardCount++;
        tableArray[cellNo].exposed = true;
        exposedCell1 = cellNo;
    document.getElementById(theID).src = tableArray[cellNo].face;
    
    exposedCard1 = tableArray[cellNo];
    //document.getElementById("showElement").innerHTML = "the card is " + exposedCard1.value + " the cell is: " + exposedCell2 ;
    }
     else{
         beep();
     }
     //document.getElementById("result").innerHTML = "turned over cards were " + tableArray[cellNo].exposed + " and " + exposedCard1.value; ;
}

function nextTry(){
    var theID1 = "pairsButton"+ exposedCell1;
    var theID2 = "pairsButton"+ exposedCell2;
    
    cardCount=0;
    tableArray[exposedCell1].exposed = false;
    tableArray[exposedCell2].exposed = false;
    
    if(answer===true){
        document.getElementById(theID1).src = backImage2;
        document.getElementById(theID2).src = backImage2;
        
    }
    else{
        document.getElementById(theID1).src = backImage;
    document.getElementById(theID2).src = backImage;
    }
    answer = false;
}

function checkIfPaired(){
   
    var message1 = "That's not correct. Please Try Again";
    var testArray =  [tableArray[exposedCell1].value, tableArray[exposedCell2].value];
    var testArray2 =  [tableArray[exposedCell2].value, tableArray[exposedCell1].value];
      for (i=0; i<answers.length; i++){
         if(testArray[0] === answers[i][0] && testArray[1]===answers[i][1]){
             answer = true;
             message1 = "the formula and the name match each other";
         }
          if(testArray2[0] === answers[i][0] && testArray2[1]===answers[i][1]){
             answer = true;
             message1 = "the formula and the name match each other";
         }
         
      }
     
          document.getElementById("showElement").innerHTML = answer + " : " + message1;
      
    
}



function testPairs( cellNo){
    document.getElementById("pairsButton0").src = tableArray[0].face;
    document.getElementById("pairsButton1").src = tableArray[1].face;
}

function showMe(){
    document.getElementById("showElement").innerHTML = 
            "The value is: " + tableArray[12].value + " The other value is: " + tableArray[13].value;
    
}
function reDeal(){
    
   location.reload(true);
    
}

function test(){
    document.getElementById("test").innerHTML = "hello world";
}