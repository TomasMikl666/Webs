(function($){
    $(function(){

        /* Scroll menu to sections */
        $(".jq--scroll-our-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-about-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about-pizza").offset().top}, 1200);
        });

        $(".jq--scroll-reference-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference-pizza").offset().top}, 1400);
        });
        
        $(".jq--scroll-fotogalery-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotogalery-pizza").offset().top}, 1600);
        });

        $(".jq--scroll-contact-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact-pizza").offset().top}, 1800);
        });

        /* Scroll buttons to sections */
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference-pizza").offset().top}, 1400);
        });

    });
})(jQuery);