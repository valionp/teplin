(() => {
  function e() {
    const e = document.querySelectorAll("product-modal[open]");
    e && e.forEach((e) => e.hide());
  }
  document.addEventListener("shopify:block:select", function (t) {
    if ((e(), !t.target.classList.contains("slideshow__slide"))) return;
    const o = t.target.closest("slideshow-component");
    o.pause(),
      setTimeout(function () {
        o.slider.scrollTo({ left: t.target.offsetLeft });
      }, 200);
  }),
    document.addEventListener("shopify:block:deselect", function (e) {
      if (!e.target.classList.contains("slideshow__slide")) return;
      const t = e.target.closest("slideshow-component");
      t.autoplayButtonIsSetToPlay && t.play();
    }),
    document.addEventListener("shopify:section:load", () => {
      e();
      const t = document.querySelector("[id^=EnableZoomOnHover]");
      if (t && t) {
        const e = document.createElement("script");
        (e.src = t.src), t.parentNode.replaceChild(e, t);
      }
    }),
    document.addEventListener("shopify:section:reorder", () => e()),
    document.addEventListener("shopify:section:select", () => e()),
    document.addEventListener("shopify:section:deselect", () => e()),
    document.addEventListener("shopify:inspector:activate", () => e()),
    document.addEventListener("shopify:inspector:deactivate", () => e());
})();
