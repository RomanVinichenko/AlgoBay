$(function () {
    $('.hero__inner').slick({
        loop: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: true,
        // responsive: [
        //     {
        //         breakpoint: 1322,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 950,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 650,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    });
});

$(function () {
    $('.blog__articles').slick({
        loop: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        // responsive: [
        //     {
        //         breakpoint: 1322,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 950,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 650,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    });
});
