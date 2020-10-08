// Intro text animation

const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text", {duration: 1, y: 0, stagger: 0.2})
  .to(".slider", {duration: 0.8, y: "-100%"}, "+=1")
  .to(".intro", {duration: 0.8, y: "-100%"}, "-=0.7")
  .from(".showcase-content .slider-contain", {duration: 1, opacity:0, x: -50})
  .from(".showcase-art .circle-art", {duration: 0.5, x: "50px"}, "-=0.4")
  .fromTo(".showcase-art .circle-art .circular-grid .circle", {opacity: 0, y: -50}, {opacity:1, y: 0, duration: 0.4, stagger: 0.1});

// ScrollTrigger
let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'center bottom',
    }
});
    
t1.from(".about .feature", {x: -100, opacity: 0, duration: 1, stagger: 0.2} );