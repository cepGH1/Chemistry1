/* 
 *CEP 2021
 */


var metals = ["sodium", "magnesium", "lithium", "potassium", "calcium", "beryllium"];
var nonMetals =["fluorine", "chlorine", "bromine", "iodine", "oxygen", "sulfur"];



var sodiumFluoride = "<h3>sodium fluoride, NaF</h3> <p>Sodium reacts violently with fluorine\n\
to produce the salt, sodium fluoride. Sodium fluoride is a white solid. Like all \n\
group 1 salts, it is soluble (dissolves) in water</p>\n\
<p> sodium + fluorine --> sodium fluoride</p><p> 2Na(s) + F<sub>2</sub>(g) --> 2NaF(s)</p> ";

var sodiumChloride = "<h3>sodium chloride, NaCl</h3> <p>Sodium reacts vigorously with chlorine\n\
gas to produce sodium chloride. Sodium chloride (the salt that you put on food), is a white\n\
crystalline solid soluble in water. <p>sodium + chlorine --> sodium chloride</p>\n\
<p>2Na(s) + Cl<sub>2</sub>(g) --> 2NaCl(s)</p> ";

var magnesiumChloride = "<h3>magnesium chloride, MgCl<sub>2</sub></h3><p>Magnesium chloride\n\
is a white crystalline solid, soluble in water</p><p>Magnesium chloride can be made by reacting\n\
magnesium metal with chlorine gas</p><p>magnesium + chlorine --> magnesium chloride</p>\n\
<p>Mg(s) + Cl<sub>2<sub>(g) --> MgCl<sub>2</sub>(s)</p>";

var magnesiumOxide = "<h3>magnesium oxide, MgO</h3><p>Magnesium oxide\n\
is a white powder produced when magnesium burns in oxygen or air.</p>\n\
<p>magnesium + oxygen --> magnesium oxide</p>\n\
<p>2Mg(s) + O<sub>2</sub>(g) --> 2MgO(s)</p>"

var magnesiumBromide = "<h3>magnesium bromide MgBr<sub>2</sub></h3>";

var aluminiumChloride = "<h3>aluminium chloride AlCl<sub>3</sub></h3>\n\
<p>aluminium + chlorine --> aluminium chloride</p>\n\
<p>2Al(s) + 3Cl<sub>2</sub>(g) --> 2AlCl<sub>3</sub>(s)";

var aluminiumBromide = "<h3>aluminium bromide AlBr<sub>3</sub></h3>\n\
<p>Aluminium reacts directly with bromine to produce aluminium bromide.</p>\n\
<p>aluminium + bromine --> aluminium bromide</p>\n\
<p>2Al(s) + 3Br<sub>2</sub>(l) --> 2AlBr<sub>3</sub>(s)</p>  ";

var aluminiumOxide = "<h3>aluminium oxide Al<sub>2</sub>O<sub>3</sub></h3>\n\
<p>Aluminium reacts with oxygen to form aluminium oxide. Aluminium oxide is unreactive\n\
and forms a coating over the aluminium metal preventing further reaction</p>\n\
<p>aluminium + oxygen --> aluminium oxide</p>\n\
<p>4Al(s) + 3O<sub>2</sub>(g) --> 2Al<sub>2</sub>O<sub>3</sub>(s)</p> ";

var sodiumOxide = "<h3>sodium oxide  Na<sub>2</sub>O </h3>\n\
<p>Sodium oxide can be made by reacting sodium with dry oxygen. Sodium oxide reacts with\n\
water instantly to produce sodium hydroxide, so is a very rare salt</p>\n\
<p>sodium + oxygen --> sodium oxide</p>\n\
<p>4Na(s) + O<sub>2</sub>(g) --> 2Na<sub>2</sub>O(s)</p> ";

var sodiumBromide = "<h3>sodium bromide NaBr</h3>\n\
<p>sodium + bromine --> sodium bromide</p>\n\
<p>2Na(s) + Br<sub>2</sub>(l) --> 2NaBr(s)</p>";

var potassiumChloride ="<h3>potassium chloride KCl</h3>\n\
<p>Potassium burns in chlorine gas, in an intense reaction\n\
This would not be the usual method of making potassium chloride</p>\n\
<p>potassium + chlorine --> potassium chloride</p>\n\
<p>2K(s) + Cl<sub>2</sub>(g) --> 2KCl(s)</p>";

var potassiumOxide ="<h3>potassium oxide K<sub>2</sub>O</h3>\n\
<p>Potassium oxide is a very reactive salt, so not usually seen in the lab.\n\
it reacts with water to make potassium hydroxide</p>\n\
<p>potassium + oxygen --> potassium oxide</p>\n\
<p>4K(s) + O<sub>2</sub>(g) --> 2K<sub>2</sub>O(s)</p>";

var potassiumBromide = "<h3>potassium bromide KBr</h3>\n\
<p>Potassium bromide a common type of salt. KBr is transparent to infrared\n\
radiation and is used tot support samples in infrared spectrometers.</p>\n\
<p>potassium + bromine --> potassium bromide</p>\n\
<p>2K(s) + Cl<sub>2</sub>(g) --> 2KCl(s)</p>";

var selectedMetal = "";
var selectedNonMetal = "";
var createdSalt;

function upDateSalt(){
    var saltID = selectedMetal + selectedNonMetal;
    createdSalt = saltID;
    if (saltID === "sodiumChloride"){
    document.getElementById("salts").innerHTML = sodiumChloride;
}
if(saltID === "magnesiumChloride"){
   document.getElementById("salts").innerHTML = magnesiumChloride; 
}
if(saltID === "magnesiumOxide"){
   document.getElementById("salts").innerHTML = magnesiumOxide;  
}
if(saltID === "magnesiumBromide"){
    document.getElementById("salts").innerHTML = magnesiumBromide; 
}
if(saltID === "aluminiumChloride"){
    document.getElementById("salts").innerHTML = aluminiumChloride;
}
if(saltID === "aluminiumBromide"){
    document.getElementById("salts").innerHTML = aluminiumBromide;
}
if(saltID === "aluminiumOxide"){
    document.getElementById("salts").innerHTML = aluminiumOxide;
}
if(saltID === "sodiumOxide"){
    document.getElementById("salts").innerHTML = sodiumOxide;
}
if(saltID === "sodiumBromide"){
    document.getElementById("salts").innerHTML = sodiumBromide;
}
if(saltID === "potassiumChloride"){
    document.getElementById("salts").innerHTML = potassiumChloride;
}
if(saltID === "potassiumOxide"){
    document.getElementById("salts").innerHTML = potassiumOxide;
}
if(saltID === "potassiumBromide"){
     document.getElementById("salts").innerHTML = potassiumBromide;
}
}



function selectMetal(theMetal){
  selectedMetal = theMetal;
 document.getElementById("selectedMetal").innerHTML = theMetal;
  upDateSalt();
}

function selectNonMetal(theNonMetalIon){
    selectedNonMetal = theNonMetalIon;
    document.getElementById("selectedNonMetal").innerHTML = theNonMetalIon;
    upDateSalt();
}

function tester(){
    
}

