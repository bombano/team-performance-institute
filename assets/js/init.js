$(function () {
    initNavbarFixed();
    initOwlCarousel();
    initTeamSlider();
});


function initTeamSlider(){
   $(document).on("click",".slide-nav", function(){
       var currentNav=$(this);
       var currentIndex=currentNav.attr("data-index");
       var currentSlide=$(".team-slider.slider").find("[data-index='"+currentIndex+"']"); 
        
       if(!currentNav.hasClass("active")){
            var activeNav=$(".slide-nav.active");
            var activeIndex=activeNav.attr("data-index");
            var activeSlide=$(".slider").find("[data-index='"+activeIndex+"']");

            activeNav.removeClass("active");
            activeSlide.removeClass("active");

            currentNav.addClass("active");
            currentSlide.addClass("active"); 
        }
   });
}