const navbar = document.querySelector('.navbar');

/*****   Sticky navbar   *****/

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 500) {
        navbar.style.position = 'fixed';
        navbar.style.backgroundColor = 'rgba(0,0,0,.815)';
    } else {
        navbar.style.position = 'initial';
        navbar.style.backgroundColor = 'transparent';

    }
});

/*****   Counter Animation   *****/

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        });
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect>h1")
    }
});