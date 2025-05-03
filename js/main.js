(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".sticky-top").addClass("shadow-sm").css("top", "0px");
        } else {
            $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true
    });
})(jQuery);

//------- code programme send msg form to WhatsApp -------

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const courseType = document.getElementById("courseType").value.trim();
    const date = document.getElementById("appointmentDate").value.trim();
    const time = document.getElementById("appointmentTime").value.trim();

    const fullMessage =
        `طلب حجز موعد:%0A` +
        `الاسم الكامل: ${name}%0A` +
        `رقم الهاتف: ${phone}%0A` +
        `نوع الدورة / البطاقة: ${courseType}%0A` +
        `تاريخ الموعد: ${date}%0A` +
        `الوقت المفضل: ${time || 'غير محدد'}`;

    const phoneNumber = "+212601862102"; // رقم الواتساب مع رمز الدولة

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
});
//---fin---- code programme send msg form to WhatsApp -------
