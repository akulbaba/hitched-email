// document.getElementById("frosted").addEventListener("click", function() {
// 	document.getElementById("schedule").scrollIntoView();
// })

$("#frosted").click(function() {
	$("html, body").animate({scrollTop: $("#schedule").offset().top} , 500);

})

