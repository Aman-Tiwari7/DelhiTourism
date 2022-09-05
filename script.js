
const navbar = document.getElementsByClassName('navbar')[0];
const html = document.querySelector('html');
const landingNavbar = document.getElementsByClassName("landing-navbar")[0];
const navUl = document.getElementsByClassName('nav-ul')[0];


const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "cube",
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 40,
        shadowScale: 0.85,
      },
    autoplay:{
        delay:2000,
        disableOnInteraction: false
        // pauseOnMouseEnter:true
    },
    speed:1000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
});
// var swiper = new Swiper(".mySwiper", {
//   effect: "cube",
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

  
// swiper.mouseenter(function() {
//   mySwiper.autoplay.stop();
//   console.log('slider stopped');
// });

// swiper.mouseleave(function() {
//   mySwiper.autoplay.start();
//   console.log('slider started again');
// });

