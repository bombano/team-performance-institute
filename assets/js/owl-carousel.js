function initOwlCarousel(){
    $('#carousel-cases-studies').owlCarousel({
        loop:true,
        margin:30,
        navText: ['','<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            992:{
                items:2,
                nav:true,
            },
        }
    });
}