$(document).ready(function(){
	
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

	var slideindex = 1
	var slides = document.getElementsByClassName("tooltip");
	var myArray = ["mount-everest-himalayas-nuptse-lhotse-51387.jpeg",
	"01.jpg","6.jpg","pexels-photo-248797.jpeg"];

	function showSlides(){
	
	for(i=0; i<slides.length; i++){
	slides[i].style.display = "none";
	
	}
	$(".slideshow").css("background-image", "url('" + myArray[slideindex-1] + "')");

	slideindex++;
	if(slideindex>slides.length){slideindex = 1}
	if (slideindex>myArray.length) {slideindex = 1}
	$(slides[slideindex -1]).fadeIn(3000).fadeOut(5000);
	setTimeout(showSlides,8000);
	}
	showSlides();





	var myArray2 = ["image.png","AW16_LabelHighTheme_hb_01.jpg","AlainAudet_Sunset_YkVlRGI.jpg","college-scholarship-student-2.jpg"];
	
	slideindex = 1;
	function slideshow(){
	$(".round-mask").css("background-image", "url('" + myArray2[slideindex-1] + "')");
	slideindex++;
	if(slideindex > myArray2.length){slideindex = 1}
	
	setTimeout(slideshow,2000);
	
	}
	slideshow();

	
})
	
window.onload = function(argument) {
	$(".menu1").animate({"top": "10px", "opacity":"1"},2000);
	$(".blocklist").animate({"margin-left": "0px", "opacity":"1"},2000);
	//$(".blocklist1").animate({"margin-left": "0px", "opacity":"1"},2000);
	$("body").animate({"opacity":"1"},2000);
}

	

	
