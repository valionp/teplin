(() => {
  class t extends HTMLElement {
    constructor() {
      super(),
        this.addEventListener("click", (t) => {
          t.preventDefault(),
            this.closest("quick-order-list").updateQuantity(
              this.dataset.index,
              0
            );
        });
    }
  }
  customElements.define("quick-order-list-remove-button", t);
  class e extends HTMLElement {
    constructor() {
      super();
      const t = Array.from(document.querySelectorAll("[data-variant-id]")),
        e = {};
      let i = !1;
      (this.quickOrderList = this.closest("quick-order-list")),
        t.forEach((t) => {
          parseInt(t.dataset.cartQty) > 0 &&
            ((i = !0), (e[parseInt(t.dataset.variantId)] = 0));
        }),
        i || this.classList.add("hidden"),
        (this.actions = {
          confirm: "confirm",
          remove: "remove",
          cancel: "cancel",
        }),
        this.addEventListener("click", (t) => {
          t.preventDefault(),
            this.dataset.action === this.actions.confirm
              ? this.toggleConfirmation(!1, !0)
              : this.dataset.action === this.actions.remove
              ? (this.quickOrderList.updateMultipleQty(e),
                this.toggleConfirmation(!0, !1))
              : this.dataset.action === this.actions.cancel &&
                this.toggleConfirmation(!0, !1);
        });
    }
    toggleConfirmation(t, e) {
      this.quickOrderList
        .querySelector(".quick-order-list-total__confirmation")
        .classList.toggle("hidden", t),
        this.quickOrderList
          .querySelector(".quick-order-list-total__info")
          .classList.toggle("hidden", e);
    }
  }
  customElements.define("quick-order-list-remove-all-button", e);
  class i extends HTMLElement {
    constructor() {
      super(),
        (this.cart = document.querySelector("cart-drawer")),
        (this.actions = { add: "ADD", update: "UPDATE" }),
        (this.quickOrderListId = "quick-order-list"),
        (this.variantItemStatusElement = document.getElementById(
          "shopping-cart-variant-item-status"
        )),
        this.querySelector("form").addEventListener(
          "submit",
          this.onSubmit.bind(this)
        );
      const t = debounce((t) => {
        this.onChange(t);
      }, ON_CHANGE_DEBOUNCE_TIMER);
      this.addEventListener("change", t.bind(this));
    }
    cartUpdateUnsubscriber = void 0;
    onSubmit(t) {
      t.preventDefault();
    }
    connectedCallback() {
      (this.cartUpdateUnsubscriber = subscribe(
        PUB_SUB_EVENTS.cartUpdate,
        (t) => {
          t.source !== this.quickOrderListId && this.onCartUpdate();
        }
      )),
        (this.sectionId = this.dataset.id);
    }
    disconnectedCallback() {
      this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber();
    }
    onChange(t) {
      const e = parseInt(t.target.value),
        i = parseInt(t.target.dataset.cartQuantity),
        r = t.target.dataset.index,
        s = document.activeElement.getAttribute("name"),
        n = e - i;
      i > 0
        ? this.updateQuantity(r, e, s, this.actions.update)
        : this.updateQuantity(r, n, s, this.actions.add);
    }
    onCartUpdate() {
      fetch(`${window.location.pathname}?section_id=${this.sectionId}`)
        .then((t) => t.text())
        .then((t) => {
          const e = new DOMParser()
            .parseFromString(t, "text/html")
            .querySelector(this.quickOrderListId);
          this.innerHTML = e.innerHTML;
        })
        .catch((t) => {
          console.error(t);
        });
    }
    getSectionsToRender() {
      return [
        {
          id: this.quickOrderListId,
          section: document.getElementById(this.quickOrderListId).dataset.id,
          selector: ".js-contents",
        },
        {
          id: "cart-icon-bubble",
          section: "cart-icon-bubble",
          selector: ".shopify-section",
        },
        {
          id: "quick-order-list-live-region-text",
          section: "cart-live-region-text",
          selector: ".shopify-section",
        },
        {
          id: "quick-order-list-total",
          section: document.getElementById(this.quickOrderListId).dataset.id,
          selector: ".quick-order-list__total",
        },
        { id: "CartDrawer", selector: "#CartDrawer", section: "cart-drawer" },
      ];
    }
    renderSections(t) {
      this.getSectionsToRender().forEach((e) => {
        const i = document.getElementById(e.id);
        i &&
          i.parentElement &&
          i.parentElement.classList.contains("drawer") &&
          (t.items.length > 0
            ? i.parentElement.classList.remove("is-empty")
            : i.parentElement.classList.add("is-empty"),
          setTimeout(() => {
            document
              .querySelector("#CartDrawer-Overlay")
              .addEventListener("click", this.cart.close.bind(this.cart));
          }));
        const r =
          i && i.querySelector(e.selector) ? i.querySelector(e.selector) : i;
        r &&
          (r.innerHTML = this.getSectionInnerHTML(
            t.sections[e.section],
            e.selector
          ));
      });
    }
    updateMultipleQty(t) {
      this.querySelector(
        ".variant-remove-total .loading__spinner"
      ).classList.remove("hidden");
      const e = JSON.stringify({
        updates: t,
        sections: this.getSectionsToRender().map((t) => t.section),
        sections_url: window.location.pathname,
      });
      this.updateMessage(),
        this.setErrorMessage(),
        fetch(`${routes.cart_update_url}`, { ...fetchConfig(), body: e })
          .then((t) => t.text())
          .then((t) => {
            const e = JSON.parse(t);
            this.renderSections(e);
          })
          .catch(() => {
            this.setErrorMessage(window.cartStrings.error);
          })
          .finally(() => {
            this.querySelector(
              ".variant-remove-total .loading__spinner"
            ).classList.add("hidden");
          });
    }
    updateQuantity(t, e, i, r) {
      this.toggleLoading(t, !0);
      let s,
        n = routes.cart_change_url,
        a = JSON.stringify({
          quantity: e,
          id: t,
          sections: this.getSectionsToRender().map((t) => t.section),
          sections_url: window.location.pathname,
        });
      r === this.actions.add &&
        ((s = "javascript"),
        (n = routes.cart_add_url),
        (a = JSON.stringify({
          items: [{ quantity: parseInt(e), id: parseInt(t) }],
          sections: this.getSectionsToRender().map((t) => t.section),
          sections_url: window.location.pathname,
        }))),
        this.updateMessage(),
        this.setErrorMessage(),
        fetch(`${n}`, { ...fetchConfig(s), body: a })
          .then((t) => t.text())
          .then((s) => {
            const n = JSON.parse(s),
              a = document.getElementById(`Quantity-${t}`);
            if (
              (document.querySelectorAll(".variant-item"),
              n.description || n.errors)
            )
              return (
                document
                  .querySelector(
                    `[id^="Variant-${t}"] .variant-item__totals.small-hide .loading__spinner`
                  )
                  .classList.add("loading__spinner--error"),
                this.resetQuantityInput(t, a),
                void (n.errors
                  ? this.updateLiveRegions(t, n.errors)
                  : this.updateLiveRegions(t, n.description))
              );
            this.classList.toggle("is-empty", 0 === n.item_count),
              this.renderSections(n);
            let o = !1;
            const c = n.items.find((e) => e.variant_id === parseInt(t)),
              d = c ? c.quantity : void 0;
            d && d !== e && (this.updateError(d, t), (o = !0));
            const l = document.getElementById(`Variant-${t}`);
            l &&
              l.querySelector(`[name="${i}"]`) &&
              l.querySelector(`[name="${i}"]`).focus(),
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: this.quickOrderListId,
                cartData: n,
              }),
              o
                ? this.updateMessage()
                : r === this.actions.add
                ? this.updateMessage(parseInt(e))
                : r === this.actions.update
                ? this.updateMessage(parseInt(e - a.dataset.cartQuantity))
                : this.updateMessage(-parseInt(a.dataset.cartQuantity));
          })
          .catch((e) => {
            this.querySelectorAll(".loading__spinner").forEach((t) =>
              t.classList.add("hidden")
            ),
              this.resetQuantityInput(t),
              console.error(e),
              this.setErrorMessage(window.cartStrings.error);
          })
          .finally(() => {
            this.toggleLoading(t);
          });
    }
    resetQuantityInput(t, e) {
      const i = e ?? document.getElementById(`Quantity-${t}`);
      i.value = i.getAttribute("value");
    }
    setErrorMessage(t = null) {
      (this.errorMessageTemplate =
        this.errorMessageTemplate ??
        document
          .getElementById(`QuickOrderListErrorTemplate-${this.sectionId}`)
          .cloneNode(!0)),
        document.querySelectorAll(".quick-order-list-error").forEach((e) => {
          if (((e.innerHTML = ""), !t)) return;
          const i = this.errorMessageTemplate.cloneNode(!0);
          (i.content.querySelector(
            ".quick-order-list-error-message"
          ).innerText = t),
            e.appendChild(i.content);
        });
    }
    updateMessage(t = null) {
      const e = this.querySelectorAll(".quick-order-list__message-text"),
        i = this.querySelectorAll(".quick-order-list__message-icon");
      if (null === t || isNaN(t))
        return (
          e.forEach((t) => (t.innerHTML = "")),
          void i.forEach((t) => t.classList.add("hidden"))
        );
      const r = t < 0,
        s = Math.abs(t),
        n = r
          ? 1 === s
            ? window.quickOrderListStrings.itemRemoved
            : window.quickOrderListStrings.itemsRemoved
          : 1 === t
          ? window.quickOrderListStrings.itemAdded
          : window.quickOrderListStrings.itemsAdded;
      e.forEach((t) => (t.innerHTML = n.replace("[quantity]", s))),
        r || i.forEach((t) => t.classList.remove("hidden"));
    }
    updateError(t, e) {
      let i = "";
      (i =
        void 0 === t
          ? window.cartStrings.error
          : window.cartStrings.quantityError.replace("[quantity]", t)),
        this.updateLiveRegions(e, i);
    }
    updateLiveRegions(t, e) {
      const i = document.getElementById(
          `Quick-order-list-item-error-desktop-${t}`
        ),
        r = document.getElementById(`Quick-order-list-item-error-mobile-${t}`);
      i &&
        ((i.querySelector(".variant-item__error-text").innerHTML = e),
        i.closest("tr").classList.remove("hidden")),
        r && (r.querySelector(".variant-item__error-text").innerHTML = e),
        this.variantItemStatusElement.setAttribute("aria-hidden", !0);
      const s = document.getElementById("quick-order-list-live-region-text");
      s.setAttribute("aria-hidden", !1),
        setTimeout(() => {
          s.setAttribute("aria-hidden", !0);
        }, 1e3);
    }
    getSectionInnerHTML(t, e) {
      return new DOMParser().parseFromString(t, "text/html").querySelector(e)
        .innerHTML;
    }
    toggleLoading(t, e) {
      const i = document.getElementById(this.quickOrderListId),
        r = this.querySelectorAll(`#Variant-${t} .loading__spinner`);
      e
        ? (i.classList.add("quick-order-list__container--disabled"),
          [...r].forEach((t) => t.classList.remove("hidden")),
          document.activeElement.blur(),
          this.variantItemStatusElement.setAttribute("aria-hidden", !1))
        : (i.classList.remove("quick-order-list__container--disabled"),
          r.forEach((t) => t.classList.add("hidden")));
    }
  }
  customElements.define("quick-order-list", i);
})();
