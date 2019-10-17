//need to make an array that changes the src's of the img tag every three seconds
//make a funcrtion that changes that inmg src
// have a timer that calls that function

// var i = 0
// var image = []
// var timer = 4000;

// image[0] = "img/IMG_1903.jpeg"
// image[1] = "img/IMG_0053.jpeg"
// image[2] = "img/IMG_0057.jpeg"
// image[3] = "img/IMG_2522.jpeg"
// image[4] = "img/IMG_2592.jpeg"
// image[5] = "img/IMG_4820.jpeg"

// function changeSlides(){
//     document.slide.src = image[i]

//     if(i < image.length - 1){
//         i++
//     }else{
//         i = 0
//     }
//     setTimeout("changeSlides()", timer)
// }

// window.onload = changeSlides;



(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 5000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
