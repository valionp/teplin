document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".header__inline-menu")
    .querySelectorAll("details")
    .forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.setAttribute("open", !0),
          e
            .querySelector(".menu-dropdown")
            .addEventListener("mouseleave", () => {
              e.removeAttribute("open");
            }),
          e.addEventListener("mouseleave", () => {
            e.removeAttribute("open");
          });
      });
    });
});
