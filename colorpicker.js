var _ =require('lodash');

var array=[1,2,3,4,5,6];
console.log('answer:',_.without(array,6));
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var gradientname=document.querySelector("h3");
var body=document.querySelector(".gradient");
var randombtn=document.getElementById("random");


function setGradient(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    gradientname.textContent=body.style.background+";";
}    
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];//floor: to the closest whole number, 16: to get the number inside 16
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
    setGradient();
    randombtn.style.textAlign="center";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randombtn.addEventListener("click",randomColors);
