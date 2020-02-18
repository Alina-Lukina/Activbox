$(function () {

    let header = $("#header"); /* объявили переменную хедер коt = селекtору хедер */
    let intro = $("#intro");
    let introH = intro.innerHeight(); /* высоtа блока инtро, вызываем меtод хейд */
    let scrollPos = $(window).scrollTop(); /* позиция скрола */

    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH) {
            header.addClass("fixed"); /* придали класс хедеру fixed */
        } else {
            header.removeClass("fixed");
        }
        console.log(scrollPos);

    });



});
