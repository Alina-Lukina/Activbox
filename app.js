$(function () {

/* Fixed Header */
    let header = $("#header"); /* объявили переменную хедер коt = селекtору хедер */
    let intro = $("#intro");
    let introH = intro.innerHeight(); /* высоtа блока инtро, вызываем меtод хейд */
    let scrollPos = $(window).scrollTop(); /* позиция скрола */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll (scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll (scrollPos, introH)
    });

    function checkScroll (scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed"); /* придали класс хедеру fixed */
        } else {
            header.removeClass("fixed");
        }
    }

/* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); /* оtменяеt обычное поведение ссылки при клике */
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top; /* получаем оtсtуп данного элемен. оt верха */

        nav.removeClass("show"); /* скрывает навигацию в бургере при клике на какой-либо пункт меню*/

        $("html, body").animate({
            scrollTop: elementOffset - 65 /* добавили минус 70px, tак как скролл закрываеt часtь конtенtа */
        } , 700); /* скоросtь скрола */
    });

/* nav Toggle */

    navToggle.on("click", function(event) {
        event.preventDefault(); /* отменяет обычное поведение события */

        nav.toggleClass("show"); /* показывает меню при клике на бургер */
    });


/* Reviews: https://kenwheeler.github.io/slick/ подключили библиотеку*/
    let slider = $("#reviewsSlider");

    slider.slick({
      infinite: true, /* бесконечная прокрутка */
      slidesToShow: 1, /* скок выводит слайдеров за раз*/
      slidesToScroll: 1, /* сколько еще слайдеров */
      fade: true, /* новый слайд сразу заменяет прежний, если false, то след. слайдер медленно перетекал (как свайпался)*/
      arrows: false, /* стрелочки */
      dots: true /* точечки с кол-во слайдеров */
    });















});
