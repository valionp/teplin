customElements.get("quantity-popover") ||
  customElements.define(
    "quantity-popover",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.mql = window.matchMedia("(min-width: 990px)")),
          (this.mqlTablet = window.matchMedia("(min-width: 750px)")),
          (this.infoButtonDesktop = this.querySelector(
            ".quantity-popover__info-button--icon-only"
          )),
          (this.infoButtonMobile = this.querySelector(
            ".quantity-popover__info-button--icon-with-label"
          )),
          (this.popoverInfo = this.querySelector(".quantity-popover__info")),
          (this.closeButton = this.querySelector(".button-close")),
          (this.variantInfo = this.querySelector(
            ".quantity-popover-container"
          )),
          (this.eventMouseEnterHappened = !1),
          this.closeButton &&
            this.closeButton.addEventListener(
              "click",
              this.closePopover.bind(this)
            ),
          this.popoverInfo &&
            this.infoButtonDesktop &&
            this.mql.matches &&
            this.popoverInfo.addEventListener(
              "mouseenter",
              this.closePopover.bind(this)
            ),
          this.infoButtonDesktop &&
            (this.infoButtonDesktop.addEventListener(
              "click",
              this.togglePopover.bind(this)
            ),
            this.infoButtonDesktop.addEventListener(
              "focusout",
              this.closePopover.bind(this)
            )),
          this.infoButtonMobile &&
            (this.infoButtonMobile.addEventListener(
              "click",
              this.togglePopover.bind(this)
            ),
            this.infoButtonMobile.addEventListener(
              "focusout",
              this.closePopover.bind(this)
            )),
          this.infoButtonDesktop &&
            this.mqlTablet.matches &&
            (this.variantInfo.addEventListener(
              "mouseenter",
              this.togglePopover.bind(this)
            ),
            this.variantInfo.addEventListener(
              "mouseleave",
              this.closePopover.bind(this)
            ));
      }
      togglePopover(t) {
        if (
          (t.preventDefault(),
          "mouseenter" === t.type && (this.eventMouseEnterHappened = !0),
          "click" === t.type && this.eventMouseEnterHappened)
        )
          return;
        const e =
            this.infoButtonDesktop && this.mql.matches
              ? this.infoButtonDesktop
              : this.infoButtonMobile,
          o = "true" === e.getAttribute("aria-expanded");
        e.setAttribute("aria-expanded", !o),
          this.popoverInfo.toggleAttribute("hidden");
        const i = "true" === e.getAttribute("aria-expanded");
        e.classList.toggle("quantity-popover__info-button--open"),
          i && "mouseenter" !== t.type && e.focus();
      }
      closePopover(t) {
        t.preventDefault();
        const e = this.variantInfo.contains(t.relatedTarget),
          o =
            this.infoButtonDesktop && this.mql.matches
              ? this.infoButtonDesktop
              : this.infoButtonMobile;
        (t.relatedTarget && e) ||
          (o.setAttribute("aria-expanded", "false"),
          o.classList.remove("quantity-popover__info-button--open"),
          this.popoverInfo.setAttribute("hidden", "")),
          (this.eventMouseEnterHappened = !1);
      }
    }
  );
