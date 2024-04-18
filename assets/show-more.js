customElements.get("show-more-button") ||
  customElements.define(
    "show-more-button",
    class extends HTMLElement {
      constructor() {
        super(),
          this.querySelector("button").addEventListener("click", (e) => {
            this.expandShowMore(e);
            const t = e.target
              .closest(".parent-display")
              .querySelector(".show-more-item");
            t &&
              !t.classList.contains("hidden") &&
              t.querySelector("input") &&
              t.querySelector("input").focus();
          });
      }
      expandShowMore(e) {
        const t = e.target
          .closest('[id^="Show-More-"]')
          .closest(".parent-display");
        t.querySelector(".parent-wrap"),
          this.querySelectorAll(".label-text").forEach((e) =>
            e.classList.toggle("hidden")
          ),
          t
            .querySelectorAll(".show-more-item")
            .forEach((e) => e.classList.toggle("hidden")),
          this.querySelector(".label-show-less") ||
            this.classList.add("hidden");
      }
    }
  );
