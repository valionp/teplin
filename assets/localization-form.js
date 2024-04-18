customElements.get("localization-form") ||
  customElements.define(
    "localization-form",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.mql = window.matchMedia("(min-width: 750px)")),
          (this.header = document.querySelector(".header-wrapper")),
          (this.elements = {
            input: this.querySelector(
              'input[name="locale_code"], input[name="country_code"]'
            ),
            button: this.querySelector("button.localization-form__select"),
            panel: this.querySelector(".disclosure__list-wrapper"),
            search: this.querySelector('input[name="country_filter"]'),
            closeButton: this.querySelector(".country-selector__close-button"),
            resetButton: this.querySelector(".country-filter__reset-button"),
            searchIcon: this.querySelector(".country-filter__search-icon"),
            liveRegion: this.querySelector("#sr-country-search-results"),
          }),
          this.addEventListener("keyup", this.onContainerKeyUp.bind(this)),
          this.addEventListener("keydown", this.onContainerKeyDown.bind(this)),
          this.addEventListener("focusout", this.closeSelector.bind(this)),
          this.elements.button.addEventListener(
            "click",
            this.openSelector.bind(this)
          ),
          this.elements.search &&
            (this.elements.search.addEventListener(
              "keyup",
              this.filterCountries.bind(this)
            ),
            this.elements.search.addEventListener(
              "focus",
              this.onSearchFocus.bind(this)
            ),
            this.elements.search.addEventListener(
              "blur",
              this.onSearchBlur.bind(this)
            ),
            this.elements.search.addEventListener(
              "keydown",
              this.onSearchKeyDown.bind(this)
            )),
          this.elements.closeButton &&
            this.elements.closeButton.addEventListener(
              "click",
              this.hidePanel.bind(this)
            ),
          this.elements.resetButton &&
            (this.elements.resetButton.addEventListener(
              "click",
              this.resetFilter.bind(this)
            ),
            this.elements.resetButton.addEventListener("mousedown", (e) =>
              e.preventDefault()
            )),
          this.querySelectorAll("a").forEach((e) =>
            e.addEventListener("click", this.onItemClick.bind(this))
          );
      }
      hidePanel() {
        this.elements.button.setAttribute("aria-expanded", "false"),
          this.elements.panel.setAttribute("hidden", !0),
          this.elements.search &&
            ((this.elements.search.value = ""),
            this.filterCountries(),
            this.elements.search.setAttribute("aria-activedescendant", "")),
          document.body.classList.remove("overflow-hidden-mobile"),
          document
            .querySelector(".menu-drawer")
            .classList.remove("country-selector-open"),
          (this.header.preventHide = !1);
      }
      onContainerKeyDown(e) {
        const t = Array.from(this.querySelectorAll("a")).filter(
          (e) => !e.parentElement.classList.contains("hidden")
        );
        let s,
          n = t.findIndex((e) => e === document.activeElement);
        switch (e.code.toUpperCase()) {
          case "ARROWUP":
            e.preventDefault(),
              (s = n > 0 ? t[n - 1] : t[t.length - 1]),
              s.focus();
            break;
          case "ARROWDOWN":
            e.preventDefault(),
              (s = n < t.length - 1 ? t[n + 1] : t[0]),
              s.focus();
        }
        this.elements.search &&
          setTimeout(() => {
            (n = t.findIndex((e) => e === document.activeElement)),
              n > -1
                ? this.elements.search.setAttribute(
                    "aria-activedescendant",
                    t[n].id
                  )
                : this.elements.search.setAttribute(
                    "aria-activedescendant",
                    ""
                  );
          });
      }
      onContainerKeyUp(e) {
        switch ((e.preventDefault(), e.code.toUpperCase())) {
          case "ESCAPE":
            if ("false" == this.elements.button.getAttribute("aria-expanded"))
              return;
            this.hidePanel(), e.stopPropagation(), this.elements.button.focus();
            break;
          case "SPACE":
            if ("true" == this.elements.button.getAttribute("aria-expanded"))
              return;
            this.openSelector();
        }
      }
      onItemClick(e) {
        e.preventDefault();
        const t = this.querySelector("form");
        (this.elements.input.value = e.currentTarget.dataset.value),
          t && t.submit();
      }
      openSelector() {
        this.elements.button.focus(),
          this.elements.panel.toggleAttribute("hidden"),
          this.elements.button.setAttribute(
            "aria-expanded",
            (
              "false" === this.elements.button.getAttribute("aria-expanded")
            ).toString()
          ),
          document.body.classList.contains("overflow-hidden-tablet") ||
            document.body.classList.add("overflow-hidden-mobile"),
          this.elements.search &&
            this.mql.matches &&
            this.elements.search.focus(),
          this.hasAttribute("data-prevent-hide") &&
            (this.header.preventHide = !0),
          document
            .querySelector(".menu-drawer")
            .classList.add("country-selector-open");
      }
      closeSelector(e) {
        (!e.target.classList.contains("country-selector__overlay") &&
          this.contains(e.target) &&
          this.contains(e.relatedTarget)) ||
          this.hidePanel();
      }
      filterCountries() {
        const e = this.elements.search.value.toLowerCase(),
          t = this.querySelector(".popular-countries"),
          s = this.querySelectorAll("a");
        let n = s.length;
        this.elements.resetButton.classList.toggle("hidden", !e),
          t && t.classList.toggle("hidden", e),
          s.forEach((t) => {
            t.querySelector(".country").textContent.toLowerCase().indexOf(e) >
            -1
              ? (t.parentElement.classList.remove("hidden"), n++)
              : (t.parentElement.classList.add("hidden"), n--);
          }),
          this.elements.liveRegion &&
            (this.elements.liveRegion.innerHTML =
              window.accessibilityStrings.countrySelectorSearchCount.replace(
                "[count]",
                n
              )),
          (this.querySelector(".country-selector").scrollTop = 0),
          (this.querySelector(".country-selector__list").scrollTop = 0);
      }
      resetFilter(e) {
        e.stopPropagation(),
          (this.elements.search.value = ""),
          this.filterCountries(),
          this.elements.search.focus();
      }
      onSearchFocus() {
        this.elements.searchIcon.classList.add(
          "country-filter__search-icon--hidden"
        );
      }
      onSearchBlur() {
        this.elements.search.value ||
          this.elements.searchIcon.classList.remove(
            "country-filter__search-icon--hidden"
          );
      }
      onSearchKeyDown(e) {
        "ENTER" === e.code.toUpperCase() && e.preventDefault();
      }
    }
  );
