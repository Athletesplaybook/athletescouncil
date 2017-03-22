$(document).ready(function(){
	$("#accordeon h6").click(function(){
		$("#accordeon ul ul").slideUp();
		if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});
	$('.menuIcon').click(function(e) {
		e.preventDefault();
		$('.menu-content').slideToggle(200);
	});
})