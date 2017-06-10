

$(document).ready(function(){
	$(".three-d").hover(function(){
		var myArray = ["mount-everest-himalayas-nuptse-lhotse-51387.jpeg",
		"01.jpg","6.jpg","pexels-photo-248797.jpeg"];
	
		$(".slideshow").css("background-image", "url('" + myArray[Math.floor((Math.random() * 4) + 0)] + "')");
		return false;



	})
	// Perform the slide button effect on mobile devices

	

	$(window).mousemove(function(event) {
  		$(".slideshow").animate({left : event.pageX/100, top : event.pageY/100},10);
	});


	$(".menu1").click(function(event){
		$(".slidedowncont").slideDown("slow");
		$(".menu1").hide("slow");
		$(".menu2").fadeIn("slow");
		//$(".slidedown").css("height","500px");
		return false;
	})

	$(".menu2").click(function(event){
		$(".slidedowncont").slideUp("slow");
		$(".menu2").hide("slow");
		$(".menu1").fadeIn("slow");
		//$(".slidedown").css("height","500px");
		return false;
	})

	var slideindex = 0
	function showSlides(){
	var slides = document.getElementsByClassName("tooltip");
	for(i=0; i<slides.length; i++){
	slides[i].style.display = "none";
	
	}
	slideindex++;
	if(slideindex>slides.length){slideindex = 1}
	$(slides[slideindex -1]).fadeIn(3000).fadeOut(5000);
	setTimeout(showSlides,8000);
	}
	showSlides();
	
})
	
window.onload = function(argument) {
	//$("div").hide();
	//$("body").fadeIn(2000);
	$(".menu1").animate({"top": "10px", "opacity":"1"},2000);
	$(".blocklist").animate({"margin-left": "0px", "opacity":"1"},2000);
	//$(".blocklist1").animate({"margin-left": "0px", "opacity":"1"},2000);
	$("body").animate({"opacity":"1"},2000);
}

	

	
