require([], function (){
    // Animate on Homepage
    if(!!yiliaConfig.animate) {
        if(!!yiliaConfig.isHome) {
            require([yiliaConfig.scrollreveal], function (ScrollReveal) {
                var animationNames = [
                "pulse", "fadeIn","fadeInRight", "flipInX", "lightSpeedIn","rotateInUpLeft", "slideInUp","zoomIn",
                ],
                len = animationNames.length,
                randomAnimationName = animationNames[Math.ceil(Math.random() * len) - 1];

                // Fallback (CSS3 keyframe, requestAnimationFrame)
                if (!window.requestAnimationFrame) {
                    $('content-area > article').css({opacity: 1});
                    if (navigator.userAgent.match(/Safari/i)) {
                        function showArticle(){
                            $(".article").each(function(){
                                if( $(this).offset().top <= $(window).scrollTop()+$(window).height() && !($(this).hasClass('show')) ) {
                                    $(this).removeClass("hidden").addClass("show");
                                    $(this).addClass("is-hiddened");
                                } else {
                                    if(!$(this).hasClass("is-hiddened")) {
                                        $(this).addClass("hidden");
                                    }
                                }
                            })
                        }
                        $(window).on('scroll', function(){
                            showArticle();
                        });
                        showArticle();
                    }
                    return;
                }

                var animateScope = ".content-area > article";
                var $firstArticle = $(".content-area > article:first-child");
                if ($firstArticle.height() > $(window).height()) {
                    var animateScope = ".content-area > article:not(:first-child)";
                    $firstArticle.css({opacity: 1});
                }
                ScrollReveal({
                    duration: 0,
                    afterReveal: function (domEl) {
                        $(domEl).addClass('animated ' + randomAnimationName).css({opacity: 1})
                    }
                }).reveal(animateScope);
            })
        } else {
            $('.content-area > article').css({opacity: 1});
        }
    }

})