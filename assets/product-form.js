customElements.get("product-form") ||
  customElements.define(
    "product-form",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.form = this.querySelector("form")),
          (this.form.querySelector("[name=id]").disabled = !1),
          this.form.addEventListener("submit", this.onSubmitHandler.bind(this)),
          (this.cart =
            document.querySelector("cart-notification") ||
            document.querySelector("cart-drawer")),
          (this.submitButton = this.querySelector('[type="submit"]')),
          document.querySelector("cart-drawer") &&
            this.submitButton.setAttribute("aria-haspopup", "dialog"),
          (this.hideErrors = "true" === this.dataset.hideErrors);
      }
      onSubmitHandler(t) {
        if (
          (t.preventDefault(),
          "true" === this.submitButton.getAttribute("aria-disabled"))
        )
          return;
        this.handleErrorMessage(),
          this.submitButton.setAttribute("aria-disabled", !0),
          this.submitButton.classList.add("loading"),
          this.querySelector(".loading__spinner").classList.remove("hidden");
        const e = fetchConfig("javascript");
        (e.headers["X-Requested-With"] = "XMLHttpRequest"),
          delete e.headers["Content-Type"];
        const r = new FormData(this.form);
        this.cart &&
          (r.append(
            "sections",
            this.cart.getSectionsToRender().map((t) => t.id)
          ),
          r.append("sections_url", window.location.pathname),
          this.cart.setActiveElement(document.activeElement)),
          (e.body = r),
          fetch(`${routes.cart_add_url}`, e)
            .then((t) => t.json())
            .then((t) => {
              if (t.status) {
                publish(PUB_SUB_EVENTS.cartError, {
                  source: "product-form",
                  productVariantId: r.get("id"),
                  errors: t.errors || t.description,
                  message: t.message,
                }),
                  this.handleErrorMessage(t.description);
                const e = this.submitButton.querySelector(".sold-out-message");
                if (!e) return;
                return (
                  this.submitButton.setAttribute("aria-disabled", !0),
                  this.submitButton
                    .querySelector("span")
                    .classList.add("hidden"),
                  e.classList.remove("hidden"),
                  void (this.error = !0)
                );
              }
              if (!this.cart)
                return void (window.location = window.routes.cart_url);
              this.error ||
                publish(PUB_SUB_EVENTS.cartUpdate, {
                  source: "product-form",
                  productVariantId: r.get("id"),
                  cartData: t,
                }),
                (this.error = !1);
              const e = this.closest("quick-add-modal");
              e
                ? (document.body.addEventListener(
                    "modalClosed",
                    () => {
                      setTimeout(() => {
                        this.cart.renderContents(t);
                      });
                    },
                    { once: !0 }
                  ),
                  e.hide(!0))
                : this.cart.renderContents(t);
            })
            .catch((t) => {
              console.error(t);
            })
            .finally(() => {
              this.submitButton.classList.remove("loading"),
                this.cart &&
                  this.cart.classList.contains("is-empty") &&
                  this.cart.classList.remove("is-empty"),
                this.error ||
                  this.submitButton.removeAttribute("aria-disabled"),
                this.querySelector(".loading__spinner").classList.add("hidden");
            });
      }
      handleErrorMessage(t = !1) {
        this.hideErrors ||
          ((this.errorMessageWrapper =
            this.errorMessageWrapper ||
            this.querySelector(".product-form__error-message-wrapper")),
          this.errorMessageWrapper &&
            ((this.errorMessage =
              this.errorMessage ||
              this.errorMessageWrapper.querySelector(
                ".product-form__error-message"
              )),
            this.errorMessageWrapper.toggleAttribute("hidden", !t),
            t && (this.errorMessage.textContent = t)));
      }
    }
  );
