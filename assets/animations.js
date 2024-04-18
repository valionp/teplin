(() => {
  const e = "scroll-trigger--offscreen",
    t = "scroll-trigger--cancel";
  function r(r, n) {
    r.forEach((r, o) => {
      if (r.isIntersecting) {
        const t = r.target;
        t.classList.contains(e) &&
          (t.classList.remove(e),
          t.hasAttribute("data-cascade") &&
            t.setAttribute("style", `--animation-order: ${o};`)),
          n.unobserve(t);
      } else r.target.classList.add(e), r.target.classList.remove(t);
    });
  }
  function n(e = document, t = !1) {
    const n = Array.from(e.getElementsByClassName("scroll-trigger"));
    if (0 === n.length) return;
    if (t)
      return void n.forEach((e) => {
        e.classList.add("scroll-trigger--design-mode");
      });
    const o = new IntersectionObserver(r, { rootMargin: "0px 0px -50px 0px" });
    n.forEach((e) => o.observe(e));
  }
  function o(e) {
    const t = window.innerHeight,
      r = window.scrollY,
      n = e.getBoundingClientRect().top + r,
      o = e.offsetHeight;
    if (n > r + t) return 0;
    if (n + o < r) return 100;
    let s = (r + t - n) / ((t + o) / 100);
    return Math.round(s);
  }
  window.addEventListener("DOMContentLoaded", () => {
    n(),
      (function () {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        const e = Array.from(
          document.getElementsByClassName("animate--zoom-in")
        );
        0 !== e.length &&
          e.forEach((e) => {
            let t = !1;
            new IntersectionObserver((e) => {
              e.forEach((e) => {
                t = e.isIntersecting;
              });
            }).observe(e),
              e.style.setProperty("--zoom-in-ratio", 1 + 0.002 * o(e)),
              window.addEventListener(
                "scroll",
                throttle(() => {
                  t && e.style.setProperty("--zoom-in-ratio", 1 + 0.002 * o(e));
                }),
                { passive: !0 }
              );
          });
      })();
  }),
    Shopify.designMode &&
      (document.addEventListener("shopify:section:load", (e) =>
        n(e.target, !0)
      ),
      document.addEventListener("shopify:section:reorder", () =>
        n(document, !0)
      ));
})();
