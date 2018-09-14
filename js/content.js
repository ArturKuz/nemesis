var slideNow = 1;
var slideCount = 0;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
	setDotActive(1);
	slideCount = $(".slide-wrapper").children().length;
    
    $('.content-nav__next-btn').click(function() {
        nextSlide();
    });

    $('.content-nav__prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
		resetDotStyle()
		$(this).css('background-color', '#663283');
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.viewport').width() * (navBtnId);
            $('.slide-wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function resetDotStyle(){
	$('.slide-nav-btn').css('background-color', '#c2c2c2');
}

function nextSlide() {
    if (slideNow >= slideCount || slideNow <= 0) {
        $('.slide-wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow);
        $('.slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
	resetDotStyle();
	setDotActive(slideNow);
}

function setDotActive(slideNumber){
	$('.slide-nav-btn')[slideNumber-1].style.backgroundColor = "#663283";
}

function prevSlide() {
	
    if (slideNow <= 1 || slideNow > slideCount) {
        translateWidth = -$('.viewport').width() * (slideCount - 1);
        $('.slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.viewport').width() * (slideNow - 2);
        $('.slide-wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
	resetDotStyle();
	setDotActive(slideNow);
}