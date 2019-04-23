$(function(){
	$('.project').hover(function () {
		var screenshot = $(this).find('.screenshot');
		var logo = $(this).find('.logo');

		$(this).find('.descrip').css('display','none');
		$(this).find('.tags').addClass('is-inline-block');
		$(this).find('.tags').css('display','none');
		$(this).find('.tags').animate({ opacity: 1 }, 100);

		logo.animate({ opacity: 0 }, 100, function () {
			screenshot.animate({ opacity: 1 }, 100);
		});
	}, function () {
		var screenshot = $(this).find('.screenshot');
		var logo = $(this).find('.logo');

		$(this).find('.descrip').css('display','block');
		$(this).find('.tags').animate({ opacity: 0 }, 100);
		$(this).find('.tags').removeClass('is-inline-block');
		$(this).find('.tags').css('display','none');

		screenshot.animate({ opacity: 0 }, 100, function () {
			logo.animate({ opacity: 1 }, 100);
		})
	});

	// $(".tags").css('border', '4px solid red');
});