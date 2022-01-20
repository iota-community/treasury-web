jQuery(function ($) {
    
    // Header fixed position
    $(document).scroll(function() {
        var mastHeadDistance = $('#masthead').attr('style');
        var pixels = mastHeadDistance.replace('top: ','');
        pixels = pixels.replace('px;','');
        if ( $(document).scrollTop() > pixels ) {
            $('#masthead').addClass('locked');
        } else {
            $('#masthead').removeClass('locked');
        }
    });

    // Add class to current active url
    $( document ).ready(function() {
        var path = window.location.href;
        $('#main-menu a').each(function() {
        if (this.href === path) {
            $(this).addClass('active-link');
            }
        });
    });

    // mobile menu
        // #main-menu toggle & aria changing
        $('.navbar-toggle').on("click", function(){
            var toggler = $(this);
            var menu = $('#main-menu');

            toggler.toggleClass('toggled');
            menu.slideToggle(300);

            if( toggler.hasClass('toggled') ) {
                toggler.attr("aria-expanded","true");
                toggler.attr("aria-pressed","true");
                menu.attr("aria-hidden","false");
            } else {
                toggler.attr("aria-expanded","false");
                toggler.attr("aria-pressed","false");
                menu.attr("aria-hidden","true");
            }
        });

        // mobile menu top offset
        function mastHeadOffset() {
            $('#masthead').css('top', $('#info-message').outerHeight() );
        };

        $(window).on('resize',mastHeadOffset);
        $(document).ready(mastHeadOffset);
        $('#countdown').bind("DOMSubtreeModified",mastHeadOffset);
    

        // Add aria hidden to #main-menu on mobile
        $( document ).ready(function() {
            if ($(window).width() < 992) {
                $('#main-menu').attr("aria-hidden","true");
            }
        });

    // Smooth scroll for faq anchor links
    $("#faq-link, #faq-nav a").click(function(e) {
        var clickedId = $(this).attr('href');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(clickedId).offset().top - 150
        }, 1000);
    });

    // FAQs nav sticky
    if( $('body').hasClass('start-stick')) {
        var sticky = new Sticky('#faq-nav');
    }


    // FAQs button active class
    $("#faqs .button").click(function() {
        $(this).toggleClass('active');
    });

    // Scroll reveal effect
    if ( $('body').hasClass('home') ) {
        ScrollReveal().reveal('.reveal', {scale: 0.8, duration: 600, interval: 150 });
    }
});