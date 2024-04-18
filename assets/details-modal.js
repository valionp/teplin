(() => {
  class t extends HTMLElement {
    constructor() {
      super(),
        (this.detailsContainer = this.querySelector("details")),
        (this.summaryToggle = this.querySelector("summary")),
        this.detailsContainer.addEventListener(
          "keyup",
          (t) => "ESCAPE" === t.code.toUpperCase() && this.close()
        ),
        this.summaryToggle.addEventListener(
          "click",
          this.onSummaryClick.bind(this)
        ),
        this.querySelector('button[type="button"]').addEventListener(
          "click",
          this.close.bind(this)
        ),
        this.summaryToggle.setAttribute("role", "button");
    }
    isOpen() {
      return this.detailsContainer.hasAttribute("open");
    }
    onSummaryClick(t) {
      t.preventDefault(),
        t.target.closest("details").hasAttribute("open")
          ? this.close()
          : this.open(t);
    }
    onBodyClick(t) {
      (this.contains(t.target) &&
        !t.target.classList.contains("modal-overlay")) ||
        this.close(!1);
    }
    open(t) {
      (this.onBodyClickEvent =
        this.onBodyClickEvent || this.onBodyClick.bind(this)),
        t.target.closest("details").setAttribute("open", !0),
        document.body.addEventListener("click", this.onBodyClickEvent),
        document.body.classList.add("overflow-hidden"),
        trapFocus(
          this.detailsContainer.querySelector('[tabindex="-1"]'),
          this.detailsContainer.querySelector('input:not([type="hidden"])')
        );
    }
    close(t = !0) {
      removeTrapFocus(t ? this.summaryToggle : null),
        this.detailsContainer.removeAttribute("open"),
        document.body.removeEventListener("click", this.onBodyClickEvent),
        document.body.classList.remove("overflow-hidden");
    }
  }
  customElements.define("details-modal", t);
})();
