// Intro text animation

const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text", {duration: 1, y: 0, stagger: 0.2})
  .to(".slider", {duration: 0.8, y: "-100%"}, "+=1")
  .to(".intro", {duration: 0.8, y: "-100%"}, "-=0.7")
  .from(".showcase-content .slider-contain", {duration: 1, opacity:0, x: -50})
  .from(".showcase-art .circle-art", {duration: 0.5, x: "50px"}, "-=0.4")
  .fromTo(".showcase-art .circle-art .circular-grid .circle", {opacity: 0, y: -50}, {opacity:1, y: 0, duration: 0.4, stagger: 0.1});

// ScrollTrigger
// About section
let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'center bottom',
        duration: 1,
        ease:"power1.out"
    }
});
    
t1.from(".about .feature", {x: -100, opacity: 0, stagger: 0.2})
  .from(".about .img-contain", {x: 200}, "-=0.5")
  .fromTo(".about .circular-grid .circle", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration:0.4, stagger: 0.1})

// Gallery section
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".gallery",
        start: 'center bottom',
        ease:"power1.out"
    }
});

t2.from(".gallery .img", {scale: 0, duration: 1});

// Trainer section
const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".trainers",
        start: "center bottom",
        duration: 1,
        ease:"power1.out"
    }
});

t3.from(".trainers .trainer-card", {opacity: 0, x: -50, stagger: 0.2})

// Navbar shrink animation
// Accessing toggler
const toggle = document.querySelector('.toggler');
toggle.addEventListener('click',animateMenu);

function animateMenu()
{
    if(this.checked == true)
    tl.from(".navbar-shrink ul li", {opacity: 0, x: -50, duration: 0.5, stagger: 0.2})
}