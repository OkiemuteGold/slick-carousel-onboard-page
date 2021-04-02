$(document).ready(function () {
    // slick
    // $(".onboard-summary-img").slick({
    //     accessibility: true,
    //     autoplay: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     autoplaySpeed: 2000,
    //     dots: true,
    //     arrows: false,
    //     draggable: true,
    //     lazyLoad: 'ondemand',
    //     centerMode: true
    // });
    
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
