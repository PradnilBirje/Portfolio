(function ($) {
    "use strict";
    
    // Sticky Navbar: Keeps your header bar fixed cleanly at the top when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
})(jQuery);
