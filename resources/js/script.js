$(function() {
    $('.js--features-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js--plans-section').offset().top }, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--features-section').offset().top }, 1000);
    });

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    $('.js--nav-icon').click(function() {
        $('.js--main-nav').slideToggle(200);
        if ($('.js--menu-icon').is(":visible")) {
            $('.js--menu-icon').hide();
            $('.js--close-icon').show();
        } else {
            $('.js--menu-icon').show();
            $('.js--close-icon').hide();
        }

    });
});