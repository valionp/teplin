customElements.get("quick-add-modal") ||
  customElements.define(
    "quick-add-modal",
    class extends ModalDialog {
      constructor() {
        super(),
          (this.modalContent = this.querySelector('[id^="QuickAddInfo-"]'));
      }
      hide(e = !1) {
        const t =
          document.querySelector("cart-notification") ||
          document.querySelector("cart-drawer");
        t && t.setActiveElement(this.openedBy),
          (this.modalContent.innerHTML = ""),
          e && (this.openedBy = null),
          super.hide();
      }
      show(e) {
        e.setAttribute("aria-disabled", !0),
          e.classList.add("loading"),
          e.querySelector(".loading__spinner").classList.remove("hidden"),
          fetch(e.getAttribute("data-product-url"))
            .then((e) => e.text())
            .then((t) => {
              const r = new DOMParser().parseFromString(t, "text/html");
              (this.productElement = r.querySelector(
                'section[id^="MainProduct-"]'
              )),
                this.productElement.classList.forEach((e) => {
                  (e.startsWith("color-") || "gradient" === e) &&
                    this.modalContent.classList.add(e);
                }),
                this.preventDuplicatedIDs(),
                this.removeDOMElements(),
                this.setInnerHTML(
                  this.modalContent,
                  this.productElement.innerHTML
                ),
                window.Shopify &&
                  Shopify.PaymentButton &&
                  Shopify.PaymentButton.init(),
                window.ProductModel && window.ProductModel.loadShopifyXR(),
                this.removeGalleryListSemantic(),
                this.updateImageSizes(),
                this.preventVariantURLSwitching(),
                super.show(e);
            })
            .finally(() => {
              e.removeAttribute("aria-disabled"),
                e.classList.remove("loading"),
                e.querySelector(".loading__spinner").classList.add("hidden");
            });
      }
      setInnerHTML(e, t) {
        (e.innerHTML = t),
          e.querySelectorAll("script").forEach((e) => {
            const t = document.createElement("script");
            Array.from(e.attributes).forEach((e) => {
              t.setAttribute(e.name, e.value);
            }),
              t.appendChild(document.createTextNode(e.innerHTML)),
              e.parentNode.replaceChild(t, e);
          });
      }
      preventVariantURLSwitching() {
        const e = this.modalContent.querySelector("variant-selects");
        e && e.setAttribute("data-update-url", "false");
      }
      removeDOMElements() {
        const e = this.productElement.querySelector("pickup-availability");
        e && e.remove();
        const t = this.productElement.querySelector("product-modal");
        t && t.remove();
        const r = this.productElement.querySelectorAll("modal-dialog");
        r && r.forEach((e) => e.remove());
      }
      preventDuplicatedIDs() {
        const e = this.productElement.dataset.section;
        (this.productElement.innerHTML =
          this.productElement.innerHTML.replaceAll(e, `quickadd-${e}`)),
          this.productElement
            .querySelectorAll("variant-selects, product-info")
            .forEach((t) => {
              t.dataset.originalSection = e;
            });
      }
      removeGalleryListSemantic() {
        const e = this.modalContent.querySelector('[id^="Slider-Gallery"]');
        e &&
          (e.setAttribute("role", "presentation"),
          e
            .querySelectorAll('[id^="Slide-"]')
            .forEach((e) => e.setAttribute("role", "presentation")));
      }
      updateImageSizes() {
        const e = this.modalContent.querySelector(".product");
        if (!e.classList.contains("product--columns")) return;
        const t = e.querySelectorAll(".product__media img");
        if (!t.length) return;
        let r =
          "(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)";
        e.classList.contains("product--medium")
          ? (r = r.replace("715px", "605px"))
          : e.classList.contains("product--small") &&
            (r = r.replace("715px", "495px")),
          t.forEach((e) => e.setAttribute("sizes", r));
      }
    }
  );
