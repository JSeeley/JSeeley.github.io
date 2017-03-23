$(document).ready(function() {

	/*------------ For Scrollspy Init ------------ */
	$('.nav-link').each(function(i) {
		var position = $($(this).attr("href")).position();
		$(this).scrollspy({
			min : position.top - 50,
			max : position.top + $($(this).attr("href")).height(),
			onEnter : function(element, position) {
				$(element).addClass('active'); 
			},
			onLeave : function(element, position) {
				$(element).removeClass('active');
			}
		});
	});
	
	
	
	
	/*------------ For Top Banner ------------ */
	// Full list of configuration options available here:
	// https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		width : 1024,
		height : 350,
		controls : false,
		progress : false,
		history : true,
		center : true,
		loop : true,
		autoSlide : 5000,
		minScale : 0.2,
		maxScale : 1.0
	});

	/*------------ For smooth scroll ------------ */

	$('.logo').click(function(event) {
		event.preventDefault();
		var liIndex = $(this).index();

		$('html, body').stop().animate({
			scrollTop : 0
		}, 800);
	});

	$('#home-link').click(function(event) {
		event.preventDefault();
		var liIndex = $(this).index();
		$('html, body').stop().animate({
			scrollTop : 0
		}, 800);
	});

	$('#about-link').click(function(event) {
		event.preventDefault();
		var liIndex = $(this).index();
		var contentPosTop = $('#about').eq(liIndex).position().top;

		$('html, body').stop().animate({
			scrollTop : contentPosTop
		}, 800);
	});

	$('#portfolio-link').click(function(event) {
		event.preventDefault();
		var liIndex = $(this).index();
		var contentPosTop = $('#portfolio').eq(liIndex).position().top;

		$('html, body').stop().animate({
			scrollTop : contentPosTop
		}, 800);
	});

	$('#contact-link').click(function(event) {
		event.preventDefault();
		var liIndex = $(this).index();
		var contentPosTop = $('#contact').eq(liIndex).position().top;

		$('html, body').stop().animate({
			scrollTop : contentPosTop
		}, 800);
	});

	/*------------ For Portfolio thumbnails ------------ */

	$('.fancybox').fancybox();

	$('.fancybox').hover(function() {
		$(this).addClass("animated bounce");
	}, function() {
		$(this).removeClass("animated bounce");
	});

	/*------------  for Google map  ------------ */

	$(window).load(function() {
		LoadGmaps();
	});

	/* Add Your Company Name latitude and  longitude here.
	 * for latitude and longitude please check http://itouchmap.com/latlong.html
	 *  */
	var latitude = "41.253032";
	var longitude = "-72.520752";
	var details = "Company Name - Brooklyn, NY, United States";

	function LoadGmaps() {
		var myLatlng = new google.maps.LatLng(latitude, longitude);
		var myOptions = {
			zoom : 8,
			scrollwheel : true,
			center : myLatlng,
			navigationControl : true,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("googlemaps"), myOptions);
		var marker = new google.maps.Marker({
			position : myLatlng,
			map : map,
			icon : 'img/map_icon.png'
		});
		var infowindow = new google.maps.InfoWindow({
			content : details
		});
		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map, marker);

		});

	}

});

