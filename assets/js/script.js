$(document).ready(function () {

    // navigation menu bar
    // main menu 2
    if ($(window).width() >= 992) {
        $('#nav-produk').removeAttr('data-bs-toggle');
        $('#nav-produk').removeAttr('data-bs-target');
        // $('#nav-produk').mouseenter(function () {
        //     $('#collapse-produk').collapse('show');
        //     $(this).addClass('active');
        // });
        // $('#nav-mesin, #nav-promo').mouseenter(function () {
        //     $('#collapse-produk').collapse('hide');
        //     $('#nav-produk').removeClass('active');
        // });
        // $('#main-menu-2').mouseleave(function () {
        //     $('#main-menu-2 .collapse').collapse('hide');
        //     $('#main-menu-2 .nav-list .nav-link').removeClass('active');
        // });

        // fungsi baru hover menu produk permintaan pak Agus agar lebih lambat
        $('#nav-produk').mouseenter(function() {
            $('#collapse-produk').slideDown(600);
            $(this).addClass('active');
        });
        $('#nav-mesin, #nav-promo').mouseenter(function () {
            $('#collapse-produk').slideUp(600);
            $('#nav-produk').removeClass('active');
        });
        $('#main-menu-2').mouseleave(function () {
            $('#main-menu-2 .collapse').slideUp(600);
            $('#main-menu-2 .nav-list .nav-link').removeClass('active');
        });
    } else {
        $('#nav-produk').removeAttr('href');
    }

    // hover on menu tab produk
    $('#collapse-produk .nav > .nav-link').hover(function () {
        $(this).tab('show');
    });

    // main menu 1
    // if ($(window).width() >= 992) {

    //     $('#mainMenuBar .nav-link').removeAttr('data-bs-toggle');

    //     $('#mainMenuBar li:first-of-type .nav-link').mouseenter(function () {
    //         $('#collapseProduk').collapse('show');
    //         $('#collapseMesin, #collapsePromo').collapse('hide');
    //         $(this).removeClass('collapsed');
    //         $('#mainMenuBar li:nth-of-type(2) .nav-link, #mainMenuBar li:last-of-type .nav-link').addClass('collapsed');
    //     });

    //     $('#mainMenuBar li:nth-of-type(2) .nav-link').mouseenter(function () {
    //         $('#collapseMesin').collapse('show');
    //         $('#collapseProduk, #collapsePromo').collapse('hide');
    //         $(this).removeClass('collapsed');
    //         $('#mainMenuBar li:first-of-type .nav-link, #mainMenuBar li:last-of-type .nav-link').addClass('collapsed');
    //     });

    //     $('#mainMenuBar li:last-of-type .nav-link').mouseenter(function () {
    //         $('#collapsePromo').collapse('show');
    //         $('#collapseProduk, #collapseMesin').collapse('hide');
    //         $(this).removeClass('collapsed');
    //         $('#mainMenuBar li:first-of-type .nav-link, #mainMenuBar li:nth-of-type(2) .nav-link').addClass('collapsed');
    //     });

    //     $('#mainMenu').mouseleave(function () {
    //         $('#mainMenu .collapse').collapse('hide');
    //         $('#mainMenuBar li .nav-link').addClass('collapsed');
    //     });

    // } else {

    //     $('#mainMenuBar .nav-link').removeAttr('href');

    // }

});



// swiper menu promo
const swiper = new Swiper(".swiper-promo", {
    slidesPerView: "auto",
    spaceBetween: 24,
    // loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});



// swiper produk
const swiperProduk = new Swiper(".swiper-produk", {
    slidesPerView: "2",
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: "2",
            spaceBetween: 12,
        },
        576: {
            slidesPerView: "2",
            spaceBetween: 24,
        },
        768: {
            slidesPerView: "3",
            spaceBetween: 12,
        },
        992: {
            slidesPerView: "3",
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: "4",
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: "5",
            spaceBetween: 24,
        },
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});