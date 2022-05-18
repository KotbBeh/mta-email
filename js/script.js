$(window).on('load', function () {

    // PAGE LOADER
    $('.pre-load').stop().animate({opacity:0}, 500, function(){
        $('.pre-load').css({'display':'none'});
        $('body').css({'overflow-y':'auto'});
        animateBox();
    });

});


$(function() {

    // POPUP 
    $('#homeModal').modal('show');


    // STEPS
    let step = 0,
        secStep;

    $('.home-2').slideUp();

    $('.step-1').click(function(e){
        e.preventDefault();
        $('.home-1 .home1').addClass('fadeOut');
        $('.home-1').slideUp();

        $('.home-2').slideUp();
        $('.home-2[data-id="'+ $(this).attr('id') +'"]').stop().slideDown();
        $('.home-2[data-id="'+ $(this).attr('id') +'"] .home1').removeClass('fadeOut').addClass('fadeInUp');

        $('.step-back').removeClass('d-none');
        step++;
    });

    $('.step-2').click(function(e){
        e.preventDefault();
        secStep = $(this).attr('id');

        $('.home-2 .home1').addClass('fadeOut');
        $('.home-2').slideUp();

        $('.home-3 > div').addClass('d-none');
        $('.home-3 > div[data-id="'+ $(this).attr('id') +'"]').removeClass('d-none').removeClass('fadeOut').addClass('fadeInUp');

        $('.step-back').removeClass('d-none');
        step++;
    });

    $('.step-back').click(function(e) {
        e.preventDefault();
        console.log(secStep, '.home1[id="'+ secStep +'"]');
        if(step == 1) {
            $('.home-2 .home1').addClass('fadeOut');
            $('.home-2').slideUp();

            $('.home-1').slideDown();
            $('.home-1 .home1').removeClass('fadeOut').addClass('fadeInUp');
            
            $('.step-back').addClass('d-none');
            step--;
        }else {
            $('.home-3 > div').addClass('fadeOut');

            $('.home1[id="'+ secStep +'"]').parents('.home-2').slideDown();
            $('.home1[id="'+ secStep +'"]').parents('.home-2').find('.home1').removeClass('fadeOut').addClass('fadeInUp');

            setTimeout(function(){
                $('.home-3 > div').addClass('d-none');
            }, 400);
            
            step--;
        }
    });


});


function animateBox() {
    let scrollVar = $(this).scrollTop();

    $('.animate-box').each(function (){
        let boxVal = $(this).offset().top - $(window).height() + 80;

        if (scrollVar > boxVal){
            if($(this).hasClass('left-in')) {
                $(this).addClass('animated fadeInLeft');
            }else if($(this).hasClass('right-in')) {
                $(this).addClass('animated fadeInRight');
            }else {
                $(this).addClass('animated fadeInUp');
            }
        }
    });
}