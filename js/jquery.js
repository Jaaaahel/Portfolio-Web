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
	    $(".faces-tags").fadeIn(100);
	    $(".faces-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/faces-img.png").fadeIn(150);
	    })
	},	
		function () {
			$(".tags").fadeOut(50);
			$(".faces-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/faces-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.esapp-project').hover(function () {
	    $(".esapp-tags").fadeIn(100);
	    $(".esapp-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/esapp-img.png").fadeIn(150);
	    })

	},	
		function () {
			$(".tags").fadeOut(50);
			$(".esapp-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/esweb-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.dta-project').hover(function () {
	    $(".dta-tags").fadeIn(100);
	     $(".dta-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/dta-img.png").fadeIn(150);
	    })
	},	
		function () {
			$(".tags").fadeOut(50);
			$(".dta-logo").fadeOut(150, function(){
	    	$(this).attr("src", "assets/dta-logo.png").fadeIn(150);
	    	})
		}
	);

	$('.vt-project').hover(function () {
	    $(".vt-tags").fadeIn(100);
	},	
		function () {
			$(".tags").fadeOut(50);
		}
	);

	// $(".tags").css('border', '4px solid red');
});