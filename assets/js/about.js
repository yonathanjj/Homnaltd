gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-header", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-header",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.to(".hero-description", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});






gsap.registerPlugin(ScrollTrigger);

// Animate the left-side text (fade in, move up, and scale slightly)
gsap.from(".sticky-heading", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".sticky-heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Animate each content block with a staggered effect
gsap.utils.toArray(".content-block").forEach((block, index) => {
    gsap.from(block, {
        opacity: 0,
        y: 50,
        rotateX: 10,  // Subtle rotation for depth effect
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.2, // Stagger effect
        scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});


      // GSAP animation
        gsap.from(".header", {
            opacity: 0,
            y: -50,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".description", {
            opacity: 0,
            y: 30,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out"
        });



