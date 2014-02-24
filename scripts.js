//namespaces
var svgns="http://www.w3.org/2000/svg";
var xhtmlns="http://www.w3.org/1999/xhtml";

//menu flag (false = menu hidden)
var flag = false;

function $(id){
	return document.getElementById(id);
}

function init(){
	$('snitch').addEventListener('mouseleave',generateFact,false);
}

//sliding animation
function slideLeft(which,rate){
	//get current x position and width
	var currentX = parseInt(which.getAttributeNS(null,'x')); 
	var myWidth = parseInt(which.getAttributeNS(null,'width'));

	//if x position is greater than negative width...
	if(currentX >= (-1*myWidth)){ 
		which.setAttributeNS(null,'x',currentX-rate); //move left - different rates create parallax effect
	}	
	else{
		which.setAttributeNS(null,'x',700); //else reset position to right of viewport
	}
	
	setTimeout(function(){slideLeft(which,rate);},20); //slide again
}

//loop to beginning of chained SMIL animations
function restartAnimation(which,tagType){
	which.parentNode.getElementsByTagName(tagType)[0].beginElement();
}

//dynamically create a fact
function generateFact(){
	//get a random number between 0 and 19 and use it to grab a fact from the facts array
	var num = Math.floor(Math.random() * facts.length);
	var fact = facts[num];
	$('fact').innerHTML = fact;
}