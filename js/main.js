// var swiper = new Swiper(".bg-slider-thumbs", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
//   var swiper2 = new Swiper(".bg-silder", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//       swiper: swiper,
//     },
//   });

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });