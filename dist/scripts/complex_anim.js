// Intro text animation

const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text", {duration: 1, y: 0, stagger: 0.2})
  .to(".slider", {duration: 0.8, y: "-100%"}, "+=1")
  .to(".intro", {duration: 0.8, y: "-100%"}, "-=0.7")