document.addEventListener("DOMContentLoaded", function () {
  let menus = document
    .querySelector(".header__inline-menu")
    .querySelectorAll("details");
  menus.forEach((menu) => {
    menu.addEventListener("mouseover", () => {
      menu.setAttribute("open", true);
      menu
        .querySelector(".menu-dropdown")
        .addEventListener("mouseleave", () => {
          menu.removeAttribute("open");
        });
      menu.addEventListener("mouseleave", () => {
        menu.removeAttribute("open");
      });
    });
  });
});
