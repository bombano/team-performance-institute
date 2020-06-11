function initBstCarousel(){
  $('.carousel-item', '.show-neighbors').each(function(){
    var next = $(this).next();
    if (! next.length) {
      next = $(this).siblings(':first');
    }
    nextNeighbor=next.children(':first-child').clone();
    nextNeighbor.addClass("neighbor-next");
    nextNeighbor.appendTo($(this));

  }).each(function(){
    var prev = $(this).prev();
    if (! prev.length) {
      prev = $(this).siblings(':last');
    }
    prevNeighbor=prev.children(':nth-last-child(2)').clone();
    prevNeighbor.addClass("neighbor-prev");
    prevNeighbor.prependTo($(this));
  });
  $('.carousel').carousel('pause');




  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;
  
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
}

