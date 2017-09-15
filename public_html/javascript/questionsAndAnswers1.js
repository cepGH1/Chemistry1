/* 
*CEP 2017
*question sets compared to answer sets
*single page
*each set 5 questions
 */

//counts the question set used
var qsCounter = 0;

//The tick or cross to show if answer is correct or wrong
var tick = "&#x2714";
var cross = "&#x2718";

//array to hold full set of correct ticks
var allCorrect =[tick, tick, tick, tick, tick];

//answers to first set of questions
var moleAnswers0 = [22.990, 58.44, 39.098, 196.967, 56.365];

//answers to second set of questions
var moleAnswers1 = [45.980,204.540,156.392,147.725,563.650];

//answers to third set of questions
var moleAnswers2 = [117.275,11.257,205.803,19.454,123.713];

//answers to fourth set of questions
var moleAnswers3 = [0,0,0,0,0];

//answers to fifth set of questions
var moleAnswers4 = [0,0,0,0,0];

//array to hold the input answers
var inputAnswers = [0,0,0,0,0];
//1st set of questions
var moleQuestions0 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
1 mole of Sodium has mass <textarea  id='moleq0'></textarea> g. <span id='moleMark0'></span>\n\
</p><p>1 mole of Sodium Chloride has mass <textarea  id='moleq1'></textarea> g.<span id='moleMark1'></span>\n\
</p><p>1 mole of Potassium has mass <textarea id='moleq2'></textarea> g.<span id='moleMark2'></span>\n\
</p><p>1 mole of Gold has mass <textarea  id='moleq3'></textarea> g.<span id='moleMark3'></span>\n\
</p><p>1 mole of Magnesium Sulphide has mass <textarea id='moleq4'></textarea> g.<span id='moleMark4'></span></p>";

//2nd set of questions
var moleQuestions1 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
2 moles of Sodium have mass <textarea  id='moleq0'></textarea> g. <span id='moleMark0'></span>\n\
</p><p>3.5 moles of Sodium Chloride have mass <textarea  id='moleq1'></textarea> g.<span id='moleMark1'></span>\n\
</p><p>4 moles of Potassium have mass <textarea id='moleq2'></textarea> g.<span id='moleMark2'></span>\n\
</p><p>0.75 moles of Gold has mass <textarea  id='moleq3'></textarea> g.<span id='moleMark3'></span>\n\
</p><p>10 moles of Magnesium Sulphide have mass <textarea id='moleq4'></textarea> g.<span id='moleMark4'></span></p>";

//2nd set of questions
var moleQuestions2 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
2.1 moles of Iron have mass <textarea  id='moleq0'></textarea> g. <span id='moleMark0'></span>\n\
</p><p>0.151 moles of Potassium Chloride have mass <textarea  id='moleq1'></textarea> g.<span id='moleMark1'></span>\n\
</p><p>3.67 moles of Calcium Oxide have mass <textarea id='moleq2'></textarea> g.<span id='moleMark2'></span>\n\
</p><p>0.75 moles of Lithium Fluoride has mass <textarea  id='moleq3'></textarea> g.<span id='moleMark3'></span>\n\
</p><p>10.3 moles of Diamonds have mass <textarea id='moleq4'></textarea> g.<span id='moleMark4'></span></p>";

//when the exerciseis completed the following message appears
var exerciseEndedMessage = "Well Done! You successfully answered all the questions.";
//function to load a set of questions
function selectQuestions(){
     
   var questionSet = "Hello World";
   if(qsCounter === 0){
       questionSet = moleQuestions0;
   }
    if(qsCounter === 1){
       questionSet = moleQuestions1;
   }
   if(qsCounter === 2){
       questionSet = moleQuestions2;
   }
   if(qsCounter === 3){
       questionSet = exerciseEndedMessage;
   }
   document.getElementById("remarks").innerHTML = " " ;
    document.getElementById("questions").innerHTML = questionSet ;
}

//function to retrieve the inputted answers
function getMoleAnswers(){
    
           for (i = 0; i < moleAnswers0.length; i++) {
        var address = "moleq" + i; 
         
        var ans = document.getElementById(address).value;
        var ansFloat = parseFloat(ans);
    inputAnswers[i] = ansFloat;
    }
   
}

function setCorrectAnswers(){
    if(qsCounter ===0){
      thisSetAnswers = moleAnswers0;  
    }
        if(qsCounter ===1){
      thisSetAnswers = moleAnswers1;  
    }
         if(qsCounter ===2){
      thisSetAnswers = moleAnswers2;  
    }
}
//function to check if the answers are correct
function checkAnswers(){
     
    getMoleAnswers();
    setCorrectAnswers();
    var responses = [cross, cross, cross, cross, cross];
    //check the answer values
    for ( i=0; i<moleAnswers0.length; i++){
            if(thisSetAnswers[i] === inputAnswers[i]){
        responses[i] = tick;
    }
    else {
        responses[i] = cross;
    }
    }
    //put the appropriate mark against each answer
    for(i=0; i<moleAnswers0.length; i++){
       var reply = "moleMark" + i;
       document.getElementById(reply).innerHTML = responses[i]; 
    }
     if((responses[0]=== tick) && (responses[1]=== tick) && (responses[2] === tick)
           && (responses[3]=== tick)&& (responses[4]=== tick)){
       var celebratoryGif = "<img src='../../images/fireworks3.gif' alt='Well Done!'><br>\n\
Well Done!";
       document.getElementById("remarks").innerHTML = celebratoryGif;
       
       qsCounter = qsCounter +1;
   }
}

function test(){
    document.getElementById("questions").innerHTML = "hello world";
}
