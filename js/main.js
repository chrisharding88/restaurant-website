var SLIDER = SLIDER || {}; 
$(document).ready(function(){
/*********************************
Slideshow for the menu
*********************************/

var slides = ["img/burritos.jpg","img/chips-and-guac.jpg","img/sopa-de-frioles.jpg","img/taco.jpg","img/the-perfect-flan.jpg"]	  
	   
var currentSlide = 0;
var numberOfSlides = slides.length-1;

window.addEventListener("load", loader, false);

function loader(){
	changeImage();
}

function changeImage(){
	console.log("changeImage function")
	if (currentSlide > numberOfSlides){
	currentSlide = 0
	}
}

document.getElementById("slide").
	innerHTML=slides[currentSlide];

console.log ('displaing slide' + currentSlide + "of " + numberOfSlides);
currentSlide++;

setTimeout(changeImage, 1000);




	  

}); //end document
