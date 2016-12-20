var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,

});

document.querySelector('.toggle-button').addEventListener('click', function () {
    slideout.toggle();
});


$(document).ready(function () {

    $("#textarea").focus(function () {

        if ($(this).text() == "Your Message...") {
            $(this).text("");
        }

    });

    $("#textarea").blur(function () {

        if ($(this).text() == "") {
            $(this).text("Your Message...");
        }

    });

    $('.authorContainer').hover(
        function () {
            $(this).find(".authorContainer__generalBlock")
                .fadeOut(1000);
            $(this).find(".authorContainer__hoverBlock")
                .fadeIn(1000);
        },
        function () {
            $(this).find('.authorContainer__hoverBlock')
                .fadeOut(1000);
            $(this).find('.authorContainer__generalBlock')
                .fadeIn(1000);
        }
    );


});