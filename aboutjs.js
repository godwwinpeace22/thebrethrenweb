window.onload = function(argument) {
	//$("div").hide();
	//$("body").fadeIn(2000);
	$(".headerwrp").animate({"top": "0px", "opacity":"1"},2000);
	$(".section1").fadeIn(2000);
	$("body").animate({"opacity":"1"},2000);

	aObj = document.getElementById('header').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}
