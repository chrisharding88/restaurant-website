var SLIDER = SLIDER || {}

$(document).ready(function{
/*********************************
Slideshow for the menu
*********************************/
	   var count = 0;
	   var images = ["../img/burritos.jpg","../img/chips-and-guac.jpg","../img/sopa-de-frioles.jpg","../img/tacos.jpg", "../img/the-perfect-flan.jpg"];
	   var image_length = image_length - 1;

	   function change(num){
	   		count = count + num;

	   		if(count > image_length) {
	   			count = 0;
	   		}

	   		if (count < 0){
	   			count = image_length;
	   		}
	   		document.slideshow.src=images[count];
	   		return false;
	   }

	   function auto(){
	   		setInterval(change[1], 5000)
	   }
	 
	  

}); //end document
