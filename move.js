$(window).on('scroll', function () {
    if (350 < $(this).scrollTop()) {
        $('.drawer-open span').addClass('change-color');
        $('.drawer-open span:before').addClass('change-color');
        $('.drawer-open span:after').addClass('change-color');

    } else {
        jQuery('#target').removeClass('change-color');
    }
});






