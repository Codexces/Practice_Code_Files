(function($) {
    "use strict";

    var $window = $(window);
    var $body = $('body');



    /* Text Effect Animation */
    if ($('.text-anime').length) {
        let animatedTextElements = document.querySelectorAll(".text-anime");

        animatedTextElements.forEach((element) => {
            let staggerAmount = 0.05,
                translateXValue = 0,
                translateYValue = 0,
                scrollAnimation = 1,
                delayValue = 0.5;

            if (element.getAttribute("data-stagger")) {
                staggerAmount = parseFloat(element.getAttribute("data-stagger")) || staggerAmount;
            }

            if (element.getAttribute("data-translateX")) {
                translateXValue = parseFloat(element.getAttribute("data-translateX")) || translateXValue;
            }

            if (element.getAttribute("data-translateY")) {
                translateYValue = parseFloat(element.getAttribute("data-translateY")) || translateYValue;
            }

            if (element.getAttribute("data-on-scroll")) {
                scrollAnimation = parseInt(element.getAttribute("data-on-scroll")) || scrollAnimation;
            }

            if (element.getAttribute("data-delay")) {
                delayValue = parseFloat(element.getAttribute("data-delay")) || delayValue;
            }

            if (scrollAnimation === 1) {
                if (translateXValue && !translateYValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        delay: delayValue,
                        scrollTrigger: { trigger: element, start: "top 90%" },
                    });
                } else if (translateYValue && !translateXValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        y: translateYValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        scrollTrigger: { trigger: element, start: "top 90%" },
                    });
                } else if (translateYValue && translateXValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        y: translateYValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        scrollTrigger: { trigger: element, start: "top 90%" },
                    });
                } else if (!translateXValue && !translateYValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: 20,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        scrollTrigger: { trigger: element, start: "top 85%" },
                    });
                }
            } else {
                if (translateXValue > 0 && !translateYValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                    });
                } else if (translateYValue > 0 && !translateXValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        y: translateYValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                    });
                } else if (translateYValue > 0 && translateXValue > 0) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        y: translateYValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                    });
                } else if (!translateXValue && !translateYValue) {
                    let animationSplitText = new SplitType(element, { type: "chars, words" });
                    gsap.from(animationSplitText.words, {
                        duration: 1,
                        delay: delayValue,
                        x: 20,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                    });
                }
            }
        });
    }

    /* Hero Water Effect js */
    $('.banner').ripples({

        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true,
        crossOrigin: ''

    });

    /* Animated Wow Js */
    new WOW().init();

})(jQuery);