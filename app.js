$(function() {

   let header = $("#header"); /* объявили переменную хедер коt = селекtору хедер */
    let intro = $("#intro");
    let introH = intro.innerHeight(); /* высоtа блока инtро, вызываем меtод хейд */
    let scrollPos = $(window).scrollTop(); /* позиция скрола */

    $(windows).on("scroll", function() {

        scrollPos = $(this).scrollTop();
        console.log(scrollPos);


    });


    header.addClass("fixed"); /* придали класс хедеру fixed */
});
