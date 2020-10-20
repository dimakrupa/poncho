$(document).ready(function(){
    $('.rewievs-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        dotsClass: 'reviews-slider-dots',
	});
	
	$('.header-img-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 200,
		pauseOnFocus: false,
		fade: true,
        cssEase: 'linear',
		slidesToShow: 1,
		autoplay: true,
	});

	let winAdr = window.location.pathname;
	if (winAdr == '/blog-page.html' || winAdr == '/blog-page.php') {
		let writeMeBtn = document.querySelector('#write-me-btn');
		let blogSideBarForm = document.querySelector('.sidebar-contact-form-wrap');
		
		writeMeBtn.addEventListener('click', function(e) {
			e.preventDefault();
			blogSideBarForm.classList.toggle("none");	
		  });
	} else {
		return;
	}
	
	
  });

  


$(function() {
	var $menu_popup = $('.mobile-menu-popup');
	
	$(".mobile-menu-triger, .mobile-menu-close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.mobile-menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});
});
  