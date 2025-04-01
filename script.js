document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".scroll-container");

    const sections = document.querySelectorAll(".section");

    gsap.to(scrollContainer, {
        yPercent: -100, 
        ease: "none",
        scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: "100%",
            scrub: 1,
            pin: true
        }
    });
    
});
