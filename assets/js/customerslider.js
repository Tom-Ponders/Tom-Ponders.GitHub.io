/* <!-- Initialize slick slider -->
within html add <script> & </script> at the beginning and end
*/
$(document).ready(function(){
  $('.product-slider').each(function() {
    var slider = $(this);
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true
    });

    var sLightbox = $(this);
    sLightbox.slickLightbox({
      src: 'data-src',
      itemSelector: '.slick-slide > img',
      imageMaxHeight: 1,
      arrows: true
    });
    //product-slider	$('#slick-demo').slick({	$('#slick-demo').slickLightbox({
    $('#toplightbox').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true
    });
    $('#toplightbox').slickLightbox({
      src: 'src',
      itemSelector: '.slide img'	//'.item2 img'
    });
    
    $('.sliderfortop').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-navbot'	//asNavFor: '.slider-navbot'
    });
    $('.slider-navbot').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.sliderfortop',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      slide: 'div'
    });
    
    $('.slider-for').slick({	/* $('.slider-for').slick({	*/
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      slide: 'div'
    });
    
    $('.sliderfortop2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-navbot2'	//asNavFor: '.slider-navbot2'
    });
    $('.slider-navbot2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '#toplightbox',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      slide: 'div'
    });
    
  });
  
});