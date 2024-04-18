(() => {
  const e = document.querySelector(".featured-products__slider"),
    s = document.querySelector(".testimonials__slider");
  function i(e, s, i) {
    let t = null;
    function n() {
      let n;
      (n = "all" === i.breakpoint || window.innerWidth <= i.breakpoint),
        n && !t
          ? (t = new Swiper(e, s))
          : !n && t && t && (t.destroy(), (t = null));
    }
    n(), window.addEventListener("resize", n);
  }
  e &&
    i(
      ".featured-products__slider",
      {
        slidesPerView: 4,
        spaceBetween: 25,
        speed: 600,
        loop: !1,
        autoHeight: !1,
        breakpoints: {
          250: { slidesPerView: 1, spaceBetween: 10 },
          330: { slidesPerView: 1.1, spaceBetween: 15 },
          400: { slidesPerView: 1.2, spaceBetween: 15 },
          450: { slidesPerView: 1.4, spaceBetween: 15 },
          500: { slidesPerView: 1.6, spaceBetween: 15 },
          550: { slidesPerView: 1.8, spaceBetween: 20 },
          800: { slidesPerView: 2.2, spaceBetween: 25 },
          900: { slidesPerView: 3.1, spaceBetween: 25 },
          1150: { slidesPerView: 3.5, spaceBetween: 25 },
          1300: { slidesPerView: 4, spaceBetween: 25 },
        },
      },
      { breakpoint: 1350 }
    ),
    s &&
      i(
        ".testimonials__slider",
        {
          slidesPerView: 1.5,
          centeredSlides: !0,
          initialSlide: 1,
          spaceBetween: 25,
          speed: 600,
          observer: !0,
          observeParents: !0,
          loop: !1,
          autoHeight: !1,
          pagination: { el: ".slider__pagination", clickable: !0 },
          breakpoints: {
            250: { slidesPerView: 1.1, spaceBetween: 10 },
            500: { slidesPerView: 1.1, spaceBetween: 15 },
            750: { slidesPerView: 1.2, spaceBetween: 15 },
            1e3: { slidesPerView: 1.3, spaceBetween: 25 },
          },
        },
        { breakpoint: "all" }
      );
})();
