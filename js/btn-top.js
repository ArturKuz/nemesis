$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('.btn-top').fadeIn();

        } else {

            $('.btn-top').fadeOut();

        }

    });

    $('.btn-top').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});