$(function(){

	$(".tags").hide();

	$('.portfolio-project').hover(function () {
	    $(".portfolio-tags").fadeIn(100);
	    $(".portfolio-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/portfolio-img.png").fadeIn(150);
	    })
	},	
		function () {
			$(".tags").fadeOut(50);
			$(".portfolio-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/portfolio-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.va-project').hover(function () {
	    $(".va-tags").fadeIn(100);
	    $(".va-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/va-img.png").fadeIn(150);
	    })
	},	
		function () {
			$(".tags").fadeOut(50);
			$(".va-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/va-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.esweb-project').hover(function () {
	    $(".esweb-tags").fadeIn(100);
	    $(".esweb-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/esweb-img.png").fadeIn(150);
	    })
	},	
		function () {
			$(".tags").fadeOut(50);
			$(".esweb-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/esweb-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.faces-project').hover(function () {
	    $(".faces-project-tags").fadeIn(100);
	},	
		function () {
			$(".tags").fadeOut(50);
		}
	);

	$('.esapp-project').hover(function () {
	    $(".esapp-project-tags").fadeIn(100);
	},	
		function () {
			$(".tags").fadeOut(50);
		}
	);

	$('.dta-project').hover(function () {
	    $(".dta-project-tags").fadeIn(100);
	},	
		function () {
			$(".tags").fadeOut(50);
		}
	);

	$('.vt-project').hover(function () {
	    $(".vt-project-tags").fadeIn(100);
	},	
		function () {
			$(".tags").fadeOut(50);
		}
	);


	// $(".tags").css('border', '4px solid red');

});