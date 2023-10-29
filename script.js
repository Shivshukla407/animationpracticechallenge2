
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:10,
    duration:1,
    opacity:0,
    ease: Power2
});
Shery.textAnimate("#heading h1" , {
    style:1,
    y: 10,
    delay: 0.1,
    duration:1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from(".anim2",{
   y:50,
   stagger:.3,
   opacity:0,
   ease: Power3,
   duration:1.5
  });
  
  document.querySelector("button")
.addEventListener("mousehover",function(){
  gsap.to("vidio",{
    opacity:1,
    duration:1.5,
    ease: power4
  })
 })
  
  
