var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});