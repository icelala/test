$(document).ready(function() {
	$('.showmenu').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('menu-show');
	});

});

