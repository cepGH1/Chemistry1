/* 
 * CEP 2020
 */

var aluminium = ["Forms a white precipitate when sodium hydroxide solution is added. If more (excess) sodium hydroxide solution is added the precipitate redissolves",
    "Forms a white precipitate when ammonia solution added to a solution that contains aluminiums ions. The precipitate doesnt change when excess ammonia solution is added"];

var calcium = ["Forms a white precipitate if sodium hydroxide solution is added. The precipitate will not redissolve, no matter how much more sodium hydroxide solution is added",
    "No precipitate formed when ammonia solution added", "Turns a flame red in a flame test"];

var copper =["A blue precipitate is formed when sodium hydroxide solution is added to solutions containing copper ions",
    "Turns a flame green in a flame test"];

var iron2= ["Adding sodium hydroxide to a solution containing Fe<sup>2+</sup> ions produces a green precipitate"];

var iron3 = ["Adding sodium hydroxide to a solution containing Fe<sup>3+</sup> ions produces a red-brown (rust coloured) precipitate"];

var ammonia =["Ammonia gas turns moist pH paper blue"];

var carbonDioxide = ["Turns lime water cloudy", "Extinguishes a lighted spill"];

var oxygen = ["Relights a glowing spill"];

var ammonium = ["Adding sodium hydroxide solution to a solution of ammonium ions and heating, produces ammonia gas.\n\
 The ammonia can then be tested for with damp pH paper, which will go blue if ammonia is present. "];

var carbonate =["Dilute acid (usually hydrochloric acid HCl) reacts with carbonte ions to produce bubbles of carbon dioxide gas. \n\
The gas can be tested with lime water <br> Limewater goes cloudy when carbon dioxide is bubbled through it"];

var sulfate = ["Adding dilute hydrochloric acid does not produce any bubbles and when barium chloride solution \n\
is added a white precipitate of barium sulfate appears."];

var chloride = ["Adding acidified silver nitrate solution to a solution of chloride ions prodices a white precipitate\n\
<p>Ag<sup>+</sup>(aq) + Cl<sup>-</sup>(aq) --> AgCl(s)</p>"];
var bromide = ["Adding acidified silver nitrate solution to a solution of bromide ions prodices a cream coloured precipitate\n\
<p>Ag<sup>+</sup>(aq) + Br<sup>-</sup>(aq) --> AgBr(s)</p>"];
var iodide = ["Adding acidified silver nitrate solution to a solution of iodide ions prodices a pale yellow precipitate\n\
<p>Ag<sup>+</sup>(aq) + I<sup>-</sup>(aq) --> AgI(s)</p>"];

function showTest(num){
    var test = num;
    if (test === 1){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Copper ions</h3><p>1. " + copper[0] + "</p><p>2. " + copper[1] + "</p>";
    }
    if(test === 2){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Calcium ions</h3><p>1. " + calcium[0] + "</p><p>2. " + calcium[1] + "</p><p>3. " + calcium[2] + "</p>";
    }
    if(test === 3){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Aluminium ions</h3> <p>1. " + aluminium[0] + "</p><p> 2. " + aluminium[1] + "</p>";
    }
        
    if(test === 4){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Carbon Dioxide</h3> <p>1. " + carbonDioxide[0] + "</p><p> 2. " + carbonDioxide[1] + "</p>";
    }
    if(test === 5){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Ammonia</h3> <p>1. " + ammonia[0] + "</p>";
    }
    if(test === 6){
       document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Oxygen</h3> <p>1. " + oxygen[0] + "</p>"; 
    }
    if(test === 7){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Ammonium Ions</h3> <p>1. " + ammonium[0] + "</p>"; 
    }
    if(test === 8){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Iron II (Fe<sup>2+</sup>) ions</h3> <p>1. " + iron2[0] + "</p>"; 
    }
    if(test === 9){
       document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Iron III (Fe<sup>3+</sup>) ions</h3> <p>1. " + iron3[0] + "</p>"; 
    }
    if(test === 10){
         document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Carbonate (CO<sub>3</sub><sup>2-</sup>) ions</h3> <p>1. " + carbonate[0] + "</p>";
    }
    if(test === 11){
         document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Sulfate (SO<sub>4</sub><sup>2-</sup>) ions</h3> <p>1. " + sulfate[0] + "</p>";   
    }
    if(test === 12){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Chloride (Cl<sup>-</sup>) ions</h3> <p>1. " + chloride[0] + "</p>";
    }
    if(test === 13){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Bromide (Br<sup>-</sup>) ions</h3> <p>1. " + bromide[0] + "</p>";
    }
    if(test === 14){
        document.getElementById("precipitationTest").innerHTML = "<h3>Tests for Iodide (I<sup>-</sup>) ions</h3> <p>1. " + iodide[0] + "</p>";
    }
    }  



