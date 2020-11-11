/* 
 * CEP 2020
 * chemistry
 */

var hydrogen = "<h4>Hydrogen</h4><div id='layoutLeft30'>Hydrogen atom<br>A Hydrogen atom has a single electron in its outer shell <br>\n\
<img src='../../images/electronicStructure/hydrogen2.png' height='200' width='200'><br>\n\
Hydrogen can make either positive ions(cations) or, more rarely negative ions(anions)\n\
</div><div id='layoutLeft30'>Hydrogen Cation, Proton<br>The single electron is lost\n\
leaving just the hydrogen atom nucleus, a proton<br> \n\
<img src='../../images/electronicStructure/proton.png' height='200' width='200'><br> \n\
  </div><div id='layoutLeft30'>Hydrogen anion<br> \n\
 By accepting an extra electron into its outer shell a -1 ion is produced and \n\
 the shell is full. This is a stable configuration. This is a hydride ion. Hydride ions only exist in extreme conditions<br> \n\
 <img src='../../images/electronicStructure/hydrideIon.png' height='200' width='200'><br> \n\
 </div>"   

var lithium = "<h4>Lithium</h4><div id='layoutLeft30'>Lithium atom<br>A Lithium atom has a single electron in its outer shell\n\
 <br>\n\
<img src='../../images/electronicStructure/lithiumAtomForDotCross.png' height='200' width='200'><br>\n\
</div><div id='layoutLeft30'>Lithium Cation Li<sup>+</sup><br>Lithium makes positive ions(cations).<br>\n\
The single electron is lost\n\
leaving the outer electron shell empty, but the shell below (1s), full<br> \n\
<img src='../../images/electronicStructure/lithiumForIons.png' height='200' width='200'><br></div>"

var sodium = "<h4>Sodium</h4><div id='layoutLeft30'>Sodium atom<br>A Sodium atom has a single \n\
electron in its outer shell\n\
 <br>\n\
<img src='../../images/electronicStructure/sodiumAtomForDotCross.png' height='200' width='200'><br>\n\
</div><div id='layoutLeft30'>Sodium Cation Na<sup>+</sup><br>Sodium makes positive ions(cations).<br>\n\
The single electron is lost\n\
leaving the outer electron shell empty, but the shell below (2s), full<br> \n\
<img src='../../images/electronicStructure/sodiumIonForDotCross.png' height='200' width='200'><br></div>"
var potassium = "<h4>Potassium</h4><div id='layoutLeft30'>Potassium atom<br>A Potassium atom has a single electron in its outer shell\n\
 <br>\n\
<img src='../../images/electronicStructure/potassiumAtomForDotCross.png' height='200' width='200'><br>\n\
</div><div id='layoutLeft30'>Potassium Cation K<sup>+</sup><br>Potassium makes positive ions(cations).<br>\n\
The single electron is lost\n\
leaving the outer electron shell empty, but the shell below (3s), full<br> \n\
<img src='../../images/electronicStructure/potassiumIonForDotCross.png' height='200' width='200'><br></div>"
var fluorine = "<h4>Fluorine</h4><div id='layoutLeft30'>Fluorine atom<br>A Fluorine atom has seven electrons in its outer shell\n\
 <br>\n\
<img src='../../images/electronicStructure/fluorineAtomForDotCross.png' height='200' width='200'><br>\n\
</div><div id='layoutLeft30'>Fluoride Anion F<sup>-</sup><br>Fluorine makes negative ions(anions).<br>\n\
A single electron is gained\n\
leaving the outer electron shell full<br> \n\
<img src='../../images/electronicStructure/fluorideIonForDotCross.png' height='200' width='200'><br></div>"

var chlorine = "<h4>Chlorine</h4><div id='layoutLeft30'>Chlorine atom<br>A Chlorine atom has seven electrons in its outer shell\n\
 <br>\n\
<img src='../../images/electronicStructure/chlorineAtomForDotCross.png' height='200' width='200'><br>\n\
</div><div id='layoutLeft30'>Chloride Anion Cl<sup>-</sup><br>Chlorine makes negative ions(anions).<br>\n\
A single electron is gained\n\
leaving the outer electron shell full<br> \n\
<img src='../../images/electronicStructure/chlorideIonForDotCross.png' height='200' width='200'><br></div>"

var lithiumChloride = "<h4>Lithium chloride</h4><div id='layoutLeft30'>Lithium atoms lose one\n\
electron to become lithium ions Li<sup>+</sup>. Chlorine atoms gain one electron to become chloride anions Cl<sup>-</sup></div>\n\
<div id='layoutLeft30'><img src='../../images/dotCrossDiagrams/lithiumChlorideDotCross.png height='200' \n\
width='400' alt='missing image'></div>"

var sodiumChloride = "<h4>Sodium chloride</h4><div id='layoutLeft30'>Sodium atoms lose one\n\
electron to become sodium ions Na<sup>+</sup>. Chlorine atoms gain one electron to become chloride anions Cl<sup>-</sup></div>\n\
<div id='layoutLeft30'><img src='../../images/dotCrossDiagrams/sodiumChlorideDotCross.png height='200' \n\
width='400' alt='missing image'></div>"

var potassiumChloride = "<h4>Potassium chloride</h4><div id='layoutLeft30'>Potassium atoms lose one\n\
electron to become potassium ions K<sup>+</sup>. Chlorine atoms gain one electron to become chloride anions Cl<sup>-</sup></div>\n\
<div id='layoutLeft30'><img src='../../images/dotCrossDiagrams/potassiumChlorideDotCross.png height='200' \n\
width='400' alt='missing image'></div>"

 function showIonicStructure(atom){
    var example= atom;
     document.getElementById("ionExamples").innerHTML = example;
 }                   

 function showCompoundStructure(compound){
    var compoundExample= compound;
     document.getElementById("compoundExamples").innerHTML = compoundExample;
 }
                 
                 
                 
                 
