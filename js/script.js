let scrollHeight = 300;

$('#about-us-a').on('click', function(event) {
    animateScroll('#more-info', event);
});

$('#feedback-a').on('click', function(event) {
    animateScroll('#letter', event);
});

$('#contact-a').on('click', function(event) {
    animateScroll('#maps', event);
});

$('.to-top').on('click', function(event) {
    animateScroll('header', event);
});

$('.logo').on('click', function(event) {
    animateScroll('header', event);
});

function animateScroll(elem, event){
    var target = $(elem);
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - $('#nav').height()
        }, 1000);
    }
}


if($(window).scrollTop() >= scrollHeight && $('.to-top').hasClass( "d-none" )) {
    $('.to-top').removeClass('d-none');
}
if($(window).scrollTop() < scrollHeight && !$('.to-top').hasClass( "d-none" )) {
    $('.to-top').addClass('d-none');
}

$(window).scroll(function(event){
    let st = $(this).scrollTop();
    if (st >= scrollHeight && $('.to-top').hasClass( "d-none" )){
        $('.to-top').removeClass('d-none');
    }
    if (st < scrollHeight && !$('.to-top').hasClass( "d-none" )){
        $('.to-top').addClass('d-none');
    }
});