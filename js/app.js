const sliderMain = new Swiper(".slider_main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slider_bg", {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
  allowTouchMove: false,
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider_main .slider__item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const openedItem = document.querySelector(
      ".slider_main .slider__item.opened"
    );
    if (openedItem && openedItem !== item) {
      return;
    }
    item.classList.toggle("opened");
  });
});

let desc = document.querySelector(".description");

sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});
