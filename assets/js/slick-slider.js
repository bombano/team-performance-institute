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
    /*slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,*/
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:true
          /*centerMode: true*/
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      }
    ]
  });
}