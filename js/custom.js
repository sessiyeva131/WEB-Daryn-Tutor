$('.teacher-section-slider .slick_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    autoplay: true,
    dots: true,
    speed: 800,
    autoplaySpeed: 1000,
    prevArrow: '<img src="img/left.svg" class="left_arrow">',
    nextArrow: '<img src="img/right.svg" class="right_arrow">',
   
});

$('.tutor-reviews-slider .slick_slide_review').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      
    ],
    autoplay: true,
    dots: true,
    speed: 800,
    autoplaySpeed: 2000,
    prevArrow: '<div class="review_left_arrow"> <img src="img/orange-left.svg"></div>',
    nextArrow: '<div class="review_right_arrow"> <img src="img/orange-right.svg"> </div>',
    
});

if (window.matchMedia("(max-width: 700px)").matches) {
    $('.parallax-box .parallax_slick_slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 800,
    autoplaySpeed: 2000,
    responsive:
    [{
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
}

