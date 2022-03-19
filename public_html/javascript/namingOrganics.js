/* 
 * CEP2022
 */

function test(){
document.getElementById("namedOrganicExamples").innerHTML = "Hello World" ;
}

var methylBackbones = "<button id='moleculeNameButton'  onclick='getImage(1)' height=300>Methane</button>\n\
<button id='moleculeNameButton' onclick='getImage(2)' height=300>Methanol</button><button id='moleculeNameButton' onclick='getImage(3)' height=300>Methanoic acid</button>\n\
<button id='moleculeNameButton' onclick='getImage(4)' height=300>Methanal</button>";
var ethylBackbones = "<button id='moleculeNameButton' onclick='getImage(5)' height=300>Ethane</button>\n\
<button id='moleculeNameButton' id='moleculeNameButton' onclick='getImage(6)' height=300>ethanol</button><button id='moleculeNameButton' onclick='getImage(7)' height=300>ethanoic acid</button>\n\
<button id='moleculeNameButton' onclick='getImage(8)' height=300>ethanal</button><button id='moleculeNameButton' onclick='getImage(9)' height=300>Ethene</button>\n\
<button id='moleculeNameButton' onclick='getImage(10)' height=300>ethyne</button>";

var propylBackbones = "<button id='moleculeNameButton' onclick='getImage(11)' height=300>Propane</button>\n\
<button id='moleculeNameButton' onclick='getImage(12)' height=300>Propanol</button><button id='moleculeNameButton' onclick='getImage(13)' height=300>Propanoic acid</button>\n\
<button id='moleculeNameButton' onclick='getImage(14)' height=300>Propanal</button><button id='moleculeNameButton' onclick='getImage(15)' height=300>Propene</button>\n\
<button id='moleculeNameButton' onclick='getImage(16)' height=300>Propyne</button>";

var butylBackbones = "<button id='moleculeNameButton' onclick='getImage(17)' height=300>Butane</button>\n\
<button id='moleculeNameButton' onclick='getImage(18)' height=300>Butanol</button><button id='moleculeNameButton' onclick='getImage(19)' height=300>Butanoic acid</button>\n\
<button id='moleculeNameButton' onclick='getImage(20)' height=300>Butanal</button><button id='moleculeNameButton' onclick='getImage(21)' height=300>Butene</button>\n\
<button id='moleculeNameButton' onclick='getImage(22)' height=300>Butyne</button>";

function showSubButtons(buttonNumber){
    myButtonNumber = buttonNumber;
    if(myButtonNumber === 1){
        getImage(1);
    document.getElementById("backboneGroups").innerHTML = methylBackbones ;
    }
    if(myButtonNumber === 2){
        getImage(5)
        document.getElementById("backboneGroups").innerHTML = ethylBackbones ;
    }
     if(myButtonNumber === 3){
        document.getElementById("backboneGroups").innerHTML = propylBackbones ;
    }
      if(myButtonNumber === 4){
        document.getElementById("backboneGroups").innerHTML = butylBackbones ;
    }
}
function getImage(imageName){
    var imageName = imageName;
    var imageAddress = "<img src='../../images/namingOrganics/" + imageName + ".png' height=600 >";
    document.getElementById("namedOrganicExamples").innerHTML = imageAddress ;
}