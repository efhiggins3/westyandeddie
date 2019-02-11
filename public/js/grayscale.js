//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('.button-slideshow').bind('click', function(event) {
        startSlideshow();
                $(this).hide();
                $('#story').addClass('active');
    });
});

function startSlideshow() {

  $("#owl-demo").owlCarousel({
    autoPlay : false,
    stopOnHover : true,
    navigation:true,
        lazyLoad : true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true
  });

};