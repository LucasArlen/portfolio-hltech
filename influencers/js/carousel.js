$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        items: 5,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 3,
            },
            990:{
                items: 5,
            }
        },
        onInitialized: coverFlowEfx,
        onTranslate: coverFlowEfx,
    });

    // Controle de Autoplay
    var isPlaying = false;
    
    $('#play-carousel').click(function(evt) {
        isPlaying = !isPlaying;
        if(isPlaying){
            $('.status').html('Autoplay: ON');
            $('.owl-carousel').trigger('play.owl.autoplay', [2000]);
            $(this).html("Stop");
        } else {
            $('.owl-carousel').trigger('stop.owl.autoplay');
            $(this).html("Play");
            $('.status').html('Autoplay: OFF');
        }
    });
});

function coverFlowEfx(e){
    if ($('.owl-dots')) {
        $('.owl-dots').remove();
    }
    idx = e.item.index;
    $('.owl-item.big').removeClass('big');
    $('.owl-item.medium').removeClass('medium');
    $('.owl-item.mdright').removeClass('mdright');
    $('.owl-item.mdleft').removeClass('mdleft');
    $('.owl-item.smallRight').removeClass('smallRight');
    $('.owl-item.smallLeft').removeClass('smallLeft');
    $('.owl-item').eq(idx -1).addClass('medium mdleft');
    $('.owl-item').eq(idx).addClass('big');
    $('.owl-item').eq(idx + 1).addClass('medium mdright');
    $('.owl-item').eq(idx + 2).addClass('smallRight');
    $('.owl-item').eq(idx - 2).addClass('smallLeft');
} 