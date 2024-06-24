
var handleMobiToggler = function () {
    $(".mobi-toggler").on("click", function(event) {
        event.preventDefault();//the default action of the event will not be triggered
        
        $(".header").toggleClass("menuOpened");
        $(".header").find(".header-navigation").toggle(300);            
    });

    function SlideUpMenu () {
        $(".header-navigation a").on("click", function(event) {
            if ($(window).width()<1024) {
                event.preventDefault();//the default action of the event will not be triggered
                $(".header-navigation").slideUp(100);
                $(".header").removeClass("menuOpened");
            }
        });
        $(window).scroll(function() {
            if (($(window).width()>480)&&($(window).width()<1024)) {
                $(".header-navigation").slideUp(100);
                $(".header").removeClass("menuOpened");
            }
        });
    }
    SlideUpMenu();
    $(window).resize(function() {
        SlideUpMenu();
    });
}
