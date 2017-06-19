( function( $ ) {
	"use strict";

	$(document).ready( function(){
		//slide
		$(".slide .image").slick({
			"autoplay": true,
			nextArrow: ".slide .next",
			prevArrow: ".slide .prev"
		});
		
		//slide-col
		$(".sl-small .image").slick({
			"autoplay": true,
			"slidesToShow": 3,
			"slidesToScroll": 3,
			nextArrow: ".sl-small .next",
			prevArrow: ".sl-small .prev",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			      
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
    
  			]
		});
	} );

} )( jQuery );