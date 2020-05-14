const breakpoint = [{
    breakpoint:1280,
    settings:{
        slidesToShow: 4
    }
},
{
    breakpoint: 1009,
    settings:{
    slidesToShow: 3,
    }
},

{
    breakpoint: 720,
    settings:{
    slidesToShow: 2,
    }
},

{
    breakpoint: 460,
    settings:{
    slidesToShow: 1,
    }
}

];




/** First Slider */
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"

});

/** Second Slider */
$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll :1,
    autoplaySpeed:3000,
    responsive: breakpoint

});

/** Third Slider */
$(".slider-three")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-three .prev",
    nextArrow: ".site-slider-three .next",
    slidesToShow: 4,
    slidesToScroll :1,
    autoplaySpeed:3000,
    infinite: false,
    responsive: breakpoint

});

/** Four Slider */
$(".slider-four")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-four .prev",
    nextArrow: ".site-slider-four .next",
    slidesToShow: 4,
    slidesToScroll :1,
    autoplaySpeed:3000,
    infinite: false,
    responsive: breakpoint

});

/** Five Slider */
$(".slider-five")
.not(".slick-intialized")
.slick({
    prevArrow: ".slider-brand .prev",
    nextArrow: ".slider-brand .next",
    slidesToShow: 6,
    slidesToScroll :1,
    autoplaySpeed:3000,
    infinite: true,
    responsive: breakpoint

});

/** Six Slider */
$(".slider-six")
.not(".slick-intialized")
.slick({
    prevArrow : "",
    nextArrow : "",
    autoplaySpeed:3000,
    infinite:true,
    autoplay:true,
    dots: true

});