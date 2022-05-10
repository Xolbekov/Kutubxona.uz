$(document).ready(function(){
    var owl = $('.owl-carousel');
    $(".slayd").owlCarousel({
        itms:4,
        margin:20,
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            750:{
                items:3
            },
            1100:{
                items:4
            },
            1300:{
                items:5
            }
        }
    })
    $('#prev').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#next').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('#prev1').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#next1').click(function() {
        owl.trigger('prev.owl.carousel');
    });
})