(() => {
  class e extends SearchForm {
    constructor() {
      super(),
        (this.allSearchInputs = document.querySelectorAll(
          'input[type="search"]'
        )),
        this.setupEventListeners();
    }
    setupEventListeners() {
      let e = [];
      this.allSearchInputs.forEach((t) => e.push(t.form)),
        this.input.addEventListener("focus", this.onInputFocus.bind(this)),
        e.length < 2 ||
          (e.forEach((e) =>
            e.addEventListener("reset", this.onFormReset.bind(this))
          ),
          this.allSearchInputs.forEach((e) =>
            e.addEventListener("input", this.onInput.bind(this))
          ));
    }
    onFormReset(e) {
      super.onFormReset(e),
        super.shouldResetForm() && this.keepInSync("", this.input);
    }
    onInput(e) {
      const t = e.target;
      this.keepInSync(t.value, t);
    }
    onInputFocus() {
      window.innerWidth < 750 && this.scrollIntoView({ behavior: "smooth" });
    }
    keepInSync(e, t) {
      this.allSearchInputs.forEach((s) => {
        s !== t && (s.value = e);
      });
    }
  }
  customElements.define("main-search", e);
})();
