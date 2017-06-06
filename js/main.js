var SLIDER = SLIDER || {}; 
$(document).ready(function(){
/*********************************
Slideshow for the menu
*********************************/
	   var count = 0;
	   var images = ["../img/burritos.jpg","../img/chips-and-guac.jpg","../img/sopa-de-frioles.jpg","../img/tacos.jpg", "../img/the-perfect-flan.jpg"];
	   var time = 5000;

	   function changeImg(){
	   		document.getElementById("img-slideshow").src = images[count];

	   		if (count < images.length - 1){
	   			count++;
	   		}else{
	   			count = 0;
	   		}

	   		setTimeout("changeImg()", time);

	   }

	   window.onload = changeImg;



	  

}); //end document
