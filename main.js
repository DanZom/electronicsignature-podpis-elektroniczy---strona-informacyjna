$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu-toggle').toggleClass('active')
        $('.navigationbar').toggleClass('active')
    });
});

var btnUp = $('#buttonUp');

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btnUp.addClass('show');
    } else {
        btnUp.removeClass('show');
    }
});

btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("footer").css({ "opacity": "1" })
        } else {
            $("footer").css({ "opacity": "0" })
        }
    })

});