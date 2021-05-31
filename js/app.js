var lastScrollTop = 0;

$(window).on('scroll',function(){
    let pixel = $(window).scrollTop()

    if (pixel >= 300){
        $('.header').addClass('hide')
        $('.newsletter').addClass('show')
    }else {
        $('.header').removeClass('hide')
        $('.newsletter').removeClass('show')
    }

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.newsletter').removeClass('show')
    }
})