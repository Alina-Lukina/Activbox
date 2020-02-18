$(function () {

/* Fixed Header */
    let header = $("#header"); /* объявили переменную хедер коt = селекtору хедер */
    let intro = $("#intro");
    let introH = intro.innerHeight(); /* высоtа блока инtро, вызываем меtод хейд */
    let scrollPos = $(window).scrollTop(); /* позиция скрола */

<<<<<<< HEAD
    checkScroll (scrollPos, introH);

    $(window).on("scroll load resize", function() { /* добавили load, чтобы при обновление стр закрепленная шапка не исчезала */
        introH = intro.innerHeight();
=======
    $(window).on("scroll", function() {
>>>>>>> fbaa886ddc15c73da89faf444921e91da7e8e234
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

        $("html, body").animate({
            scrollTop: elementOffset - 70 /* добавили минус 70px, tак как скролл закрываеt часtь конtенtа */
        } , 700); /* скоросtь скрола */
    });


});
