/* scroll-smooth btn up */
$(window).on('scroll', function () {

    var offSetTop = $('.bandera').offset().top;

    if ($(window).scrollTop() >= offSetTop) {

        $('#BtnUp').css('margin-right', 0);

    }else if ($(window).scrollTop() <= offSetTop/2) {

        $('#BtnUp').css('margin-right', '-60px');

    }

});

$('a.bttn-up-a').on('click', function (event) {
    event.preventDefault();

    if ($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 800);
    }
});

/* scroll-smooth */
$('a.scroll-smooth').on('click', function (event) {
    event.preventDefault();

    var seccionOffsetTop = $($(this).attr('href')).offset().top;

    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 800);

});