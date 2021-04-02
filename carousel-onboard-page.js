$(document).ready(function () {
    // slick
    $(".onboard-summary-img").slick({
      accessibility: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "20px",
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      draggable: true,
      // lazyLoad: "ondemand",
      // responsive: [
      //   {
      //     breakpoint: 769,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       centerMode: true,
      //       centerPadding: "20px"
      //     },
      //   }
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
      // ],
    });
    
    // footer year change
    let fullYear;
    let date = new Date();
    let year = date.getFullYear();
    if (year > 2021) {
      fullYear = "2021 - " + year;
    } else {
      fullYear = year;
    }
    $(".currentYear").html(fullYear);
});
