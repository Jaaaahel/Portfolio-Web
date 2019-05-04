$(function(){
	$('.project').hover(function () {
		$('.screenshot').animate({opacity: 0 },50);
		var screenshot = $(this).find('.screenshot');
		var logo = $(this).find('.logo');

		$(this).find('.descrip').css('display','none');
		$(this).find('.tags').addClass('is-inline-block');
		$(this).find('.tags').css('display','none');
		$(this).find('.tags').animate({ opacity: 1 }, 100);

		logo.animate({ opacity: 0 }, 50, function () {
			screenshot.animate({ opacity: 1 }, 50);
		});
	}, function () {
		var screenshot = $(this).find('.screenshot');
		var logo = $(this).find('.logo');

		$(this).find('.descrip').css('display','block');
		$(this).find('.tags').animate({ opacity: 0 }, 100);
		$(this).find('.tags').removeClass('is-inline-block');
		$(this).find('.tags').css('display','none');

		screenshot.animate({ opacity: 0 }, 50, function () {
			logo.animate({ opacity: 1 }, 50);
		})
	});
	// $(".progress").css('border', '4px solid red');

	$(window).scroll(function() {			//EventOnScroll
		var hT = $('.bar1').offset().top,
		hH = $('.bar1').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
			setTimeout(
				function(){
					$(".bar1").attr("value","80");
					$(".bar2").attr("value","60");
					$(".bar3").attr("value","80");
					$(".bar4").attr("value","50");
					$(".bar5").attr("value","80");
					$(".bar6").attr("value","5");
					$(".bar7").attr("value","50");
					$(".bar8").attr("value","50");
					$(".bar9").attr("value","60");
					$(".bar10").attr("value","60");
					$(".bar11").attr("value","10");
					$(".bar12").attr("value","70");
					$(".bar13").attr("value","70");
					$(".bar14").attr("value","100");
				}
			,250);
		}

		var y = $(this).scrollTop();

			$('.link').each(function (event) {
				if (y >= $($(this).attr('href')).offset().top - 40) {
					$('.link').not(this).removeClass('is-active');
					$(this).addClass('is-active');
				}
			});
	});

});