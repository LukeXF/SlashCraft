////////////////////////////////////////
//// MAKES BUTTON GO BLUE ON NAV ///////
////////////////////////////////////////
jQuery(document).ready(function($) {

	if ($("body").data("page") === "frontpage") {
		$(window).scroll(function() {
			var scrolled = $(window).scrollTop();
			var downloadLink = $("#top-nav").find(".download")
			if (scrolled >= 420) {
				downloadLink.addClass("download-on");
			} else if (scrolled < 420) {
				downloadLink.removeClass("download-on");
			}
		})
	}

	$('#myTab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	})


});



////////////////////////////////////////
//// LOGN SYSTEM - DETECTS IMAGE ///////
////////////////////////////////////////
