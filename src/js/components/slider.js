const featuredCollection = document.querySelector(".featured-products__slider");

const testimonial = document.querySelector(".testimonials__slider");

function initializeSlider(selector, options, breakpoints) {
  let sliderInstance = null;

  function initSlider() {
    sliderInstance = new Swiper(selector, options);
  }

  function destroySlider() {
    if (sliderInstance) {
      sliderInstance.destroy();
      sliderInstance = null;
    }
  }

  function handleMobileSlider() {
    let isMobile;
    if (breakpoints.breakpoint === "all") {
      isMobile = true;
    } else {
      isMobile = window.innerWidth <= breakpoints.breakpoint;
    }

    if (isMobile && !sliderInstance) {
      initSlider();
    } else if (!isMobile && sliderInstance) {
      destroySlider();
    }
  }

  handleMobileSlider();
  window.addEventListener("resize", handleMobileSlider);
}

if (featuredCollection) {
  initializeSlider(
    ".featured-products__slider",
    {
      slidesPerView: 4,
      spaceBetween: 25,
      speed: 600,
      loop: false,
      autoHeight: false,
      breakpoints: {
        250: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        330: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        400: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        450: {
          slidesPerView: 1.4,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 1.6,
          spaceBetween: 15,
        },
        550: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2.2,
          spaceBetween: 25,
        },
        900: {
          slidesPerView: 3.1,
          spaceBetween: 25,
        },
        1150: {
          slidesPerView: 3.5,
          spaceBetween: 25,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    },
    { breakpoint: 1350 }
  );
}

if (testimonial) {
  initializeSlider(
    ".testimonials__slider",
    {
      slidesPerView: 1.5,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 25,
      speed: 600,
      observer: true,
      observeParents: true,
      loop: false,
      autoHeight: false,
      pagination: {
        el: ".slider__pagination",
        clickable: true,
      },
      breakpoints: {
        250: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        750: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 1.3,
          spaceBetween: 25,
        },
      },
    },
    { breakpoint: "all" }
  );
}
