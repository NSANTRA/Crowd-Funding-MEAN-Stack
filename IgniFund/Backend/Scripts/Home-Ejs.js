(function ($) {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass("start-style").addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass("start-style");
            }
        });
    });

    // Animation
    $(document).ready(function () {
        $("body.hero-anime").removeClass("hero-anime");

        // Check localStorage for dark mode preference
        if (localStorage.getItem("dark-mode") === "enabled") {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });

    // Menu On Hover
    $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest(".nav-item");
            _d.addClass("show");
            setTimeout(function () {
                _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
            }, 1);
        }
    });

    // Switch Light/Dark Mode
    $("#switch").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");

            // Save preference in localStorage
            localStorage.setItem("dark-mode", "disabled");
        } else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");

            // Save preference in localStorage
            localStorage.setItem("dark-mode", "enabled");
        }
    });
})(jQuery);
