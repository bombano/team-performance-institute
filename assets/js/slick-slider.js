function initSlickSlider(){
  $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
  $('.slider-nav').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    dots: false,
    /*centerMode: true,
    focusOnSelect: true,*/
     responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
          /*centerMode: true*/
        }
      },
    ]
  });
}