(() => {
  function e(e) {
    const n = document.createElement("img");
    return (
      n.setAttribute("src", `${e.src}`),
      (overlay = document.createElement("div")),
      (function (e, t) {
        e.setAttribute("class", "image-magnify-full-size"),
          e.setAttribute("aria-hidden", "true"),
          (e.style.backgroundImage = `url('${t.src}')`),
          (e.style.backgroundColor = "var(--gradient-background)");
      })(overlay, n),
      (e.style.opacity = "50%"),
      t(e),
      (n.onload = () => {
        t(e),
          e.parentElement.insertBefore(overlay, e),
          (e.style.opacity = "100%");
      }),
      overlay
    );
  }
  function t(e) {
    e.parentElement.parentElement
      .querySelector(".loading__spinner")
      .classList.toggle("hidden");
  }
  function n(e, t, n) {
    const o = e.height / e.width,
      r = t.target.getBoundingClientRect(),
      i = t.clientX - r.left,
      l = t.clientY - r.top,
      c = i / (e.clientWidth / 100) + "%",
      a = l / ((e.clientWidth * o) / 100) + "%";
    (overlay.style.backgroundPosition = `${c} ${a}`),
      (overlay.style.backgroundSize = e.width * n + "px");
  }
  document.querySelectorAll(".image-magnify-hover").forEach((t) => {
    t.onclick = (o) => {
      !(function (t, o) {
        const r = e(t);
        (r.onclick = () => r.remove()),
          (r.onmousemove = (e) => n(t, e, 2)),
          (r.onmouseleave = () => r.remove());
      })(t),
        n(t, o, 2);
    };
  });
})();
