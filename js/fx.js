$(document).ready(function(){
	'use strict';	
	//menu===toggle======================
	$(function(){
			$(".menu-toggle").click(function(){
				$("#sidebar-wrapper").toggleClass("active");
				$(this).toggleClass('active');
				return false; // prevent default browser refresh on "#" link
			  });
			  $(".menu-toggle.active").click(function(){
				$("#sidebar-wrapper").removeClass('active');
				$(this).removeClass('active');
				return false; // prevent default browser refresh on "#" link
			  });
			   
	  });
	  
	 //====== Closes responsive menu when a scroll trigger link is clicked
		  $('#sidebar-wrapper a').click(function() {
			$("#sidebar-wrapper").removeClass("active");
			$(".menu-toggle").removeClass("active");			
		  });
		  
	  //======= Scroll to top button appear
		  $(document).scroll(function() {
			var scrollDistance = $(this).scrollTop();
			if (scrollDistance > 100) {
			  $('.scroll-to-top').fadeIn();
			} else {
			  $('.scroll-to-top').fadeOut();
			}
		  });
	  
	
	//=========stellar.js======setting======================
	$(window).stellar({
		  // Set scrolling to be in either one or both directions
		  horizontalScrolling: false,
		  verticalScrolling: true,

		  // Set the global alignment offsets
		  horizontalOffset: 0,
		  verticalOffset: 0,

		  // Refreshes parallax content on window load and resize
		  responsive: false,

		  // Select which property is used to calculate scroll.
		  // Choose 'scroll', 'position', 'margin' or 'transform',
		  // or write your own 'scrollProperty' plugin.
		  scrollProperty: 'scroll',

		  // Select which property is used to position elements.
		  // Choose between 'position' or 'transform',
		  // or write your own 'positionProperty' plugin.
		  positionProperty: 'position',

		  // Enable or disable the two types of parallax
		  parallaxBackgrounds: true,
		  parallaxElements: true,

		  // Hide parallax elements that move outside the viewport
		  hideDistantElements: true,

		  // Customise how elements are shown and hidden
		  hideElement: function($elem) { $elem.hide(); },
		  showElement: function($elem) { $elem.show(); }
	});
	
  //===========Add smooth scrolling on all links inside the navbar
  
  $("#myNavbar a,.primary-button,.brand a,.scroll-to-top").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		}  // End if
	  });


 //===================== Magnific popup calls================
  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
		  enabled: true,
		  navigateByImgClick: true,
		  preload: [0, 1]
		},
		image: {
		  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
  });
//=================================================	
});	