customElements.get("product-info") ||
  customElements.define(
    "product-info",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.input = this.querySelector(".quantity__input")),
          (this.currentVariant = this.querySelector(".product-variant-id")),
          (this.submitButton = this.querySelector('[type="submit"]'));
      }
      cartUpdateUnsubscriber = void 0;
      variantChangeUnsubscriber = void 0;
      connectedCallback() {
        this.input &&
          ((this.quantityForm = this.querySelector(".product-form__quantity")),
          this.quantityForm &&
            (this.setQuantityBoundries(),
            this.dataset.originalSection ||
              (this.cartUpdateUnsubscriber = subscribe(
                PUB_SUB_EVENTS.cartUpdate,
                this.fetchQuantityRules.bind(this)
              )),
            (this.variantChangeUnsubscriber = subscribe(
              PUB_SUB_EVENTS.variantChange,
              (t) => {
                const i = this.dataset.originalSection
                  ? this.dataset.originalSection
                  : this.dataset.section;
                t.data.sectionId === i &&
                  (this.updateQuantityRules(t.data.sectionId, t.data.html),
                  this.setQuantityBoundries());
              }
            ))));
      }
      disconnectedCallback() {
        this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber(),
          this.variantChangeUnsubscriber && this.variantChangeUnsubscriber();
      }
      setQuantityBoundries() {
        const t = {
          cartQuantity: this.input.dataset.cartQuantity
            ? parseInt(this.input.dataset.cartQuantity)
            : 0,
          min: this.input.dataset.min ? parseInt(this.input.dataset.min) : 1,
          max: this.input.dataset.max ? parseInt(this.input.dataset.max) : null,
          step: this.input.step ? parseInt(this.input.step) : 1,
        };
        let i = t.min;
        const e = null === t.max ? t.max : t.max - t.cartQuantity;
        null !== e && (i = Math.min(i, e)),
          t.cartQuantity >= t.min && (i = Math.min(i, t.step)),
          (this.input.min = i),
          (this.input.max = e),
          (this.input.value = i),
          publish(PUB_SUB_EVENTS.quantityUpdate, void 0);
      }
      fetchQuantityRules() {
        this.currentVariant &&
          this.currentVariant.value &&
          (this.querySelector(
            ".quantity__rules-cart .loading__spinner"
          ).classList.remove("hidden"),
          fetch(
            `${this.dataset.url}?variant=${this.currentVariant.value}&section_id=${this.dataset.section}`
          )
            .then((t) => t.text())
            .then((t) => {
              const i = new DOMParser().parseFromString(t, "text/html");
              this.updateQuantityRules(this.dataset.section, i),
                this.setQuantityBoundries();
            })
            .catch((t) => {
              console.error(t);
            })
            .finally(() => {
              this.querySelector(
                ".quantity__rules-cart .loading__spinner"
              ).classList.add("hidden");
            }));
      }
      updateQuantityRules(t, i) {
        const e = i.getElementById(`Quantity-Form-${t}`),
          a = [".quantity__input", ".quantity__rules", ".quantity__label"];
        for (let t of a) {
          const i = this.quantityForm.querySelector(t),
            a = e.querySelector(t);
          if (i && a)
            if (".quantity__input" === t) {
              const t = ["data-cart-quantity", "data-min", "data-max", "step"];
              for (let e of t) {
                const t = a.getAttribute(e);
                null !== t && i.setAttribute(e, t);
              }
            } else i.innerHTML = a.innerHTML;
        }
      }
    }
  );
