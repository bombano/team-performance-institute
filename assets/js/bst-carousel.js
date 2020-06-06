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
}
