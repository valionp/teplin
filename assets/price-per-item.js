customElements.get("price-per-item") ||
  customElements.define(
    "price-per-item",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.variantId = this.dataset.variantId),
          (this.input = document.getElementById(
            `Quantity-${this.dataset.sectionId || this.dataset.variantId}`
          )),
          this.input &&
            this.input.addEventListener(
              "change",
              this.onInputChange.bind(this)
            ),
          this.getVolumePricingArray();
      }
      updatePricePerItemUnsubscriber = void 0;
      variantIdChangedUnsubscriber = void 0;
      connectedCallback() {
        (this.variantIdChangedUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChange,
          (t) => {
            (this.variantId = t.data.variant.id.toString()),
              this.getVolumePricingArray();
          }
        )),
          (this.updatePricePerItemUnsubscriber = subscribe(
            PUB_SUB_EVENTS.cartUpdate,
            (t) => {
              if (t.cartData)
                if (void 0 !== t.cartData.variant_id)
                  t.productVariantId === this.variantId &&
                    this.updatePricePerItem(t.cartData.quantity);
                else if (0 !== t.cartData.item_count) {
                  const e = t.cartData.items.find(
                    (t) => t.variant_id.toString() === this.variantId
                  );
                  e && e.id.toString() === this.variantId
                    ? this.updatePricePerItem(e.quantity)
                    : this.updatePricePerItem(0);
                } else this.updatePricePerItem(0);
            }
          ));
      }
      disconnectedCallback() {
        this.updatePricePerItemUnsubscriber &&
          this.updatePricePerItemUnsubscriber(),
          this.variantIdChangedUnsubscriber &&
            this.variantIdChangedUnsubscriber();
      }
      onInputChange() {
        this.updatePricePerItem();
      }
      updatePricePerItem(t) {
        this.input &&
          ((this.enteredQty = parseInt(this.input.value)),
          (this.step = parseInt(this.input.step))),
          (this.currentQtyForVolumePricing =
            void 0 === t
              ? this.getCartQuantity(t) + this.enteredQty
              : this.getCartQuantity(t) + parseInt(this.step)),
          this.classList.contains("variant-item__price-per-item") &&
            (this.currentQtyForVolumePricing = this.getCartQuantity(t));
        for (let t of this.qtyPricePairs)
          if (this.currentQtyForVolumePricing >= t[0]) {
            const e = document.querySelector(
              `price-per-item[id^="Price-Per-Item-${
                this.dataset.sectionId || this.dataset.variantId
              }"] .price-per-item span`
            );
            this.classList.contains("variant-item__price-per-item")
              ? (e.innerHTML = window.quickOrderListStrings.each.replace(
                  "[money]",
                  t[1]
                ))
              : (e.innerHTML = t[1]);
            break;
          }
      }
      getCartQuantity(t) {
        return t || 0 === t ? t : parseInt(this.input.dataset.cartQuantity);
      }
      getVolumePricingArray() {
        const t = document.getElementById(
          `Volume-${this.dataset.sectionId || this.dataset.variantId}`
        );
        (this.qtyPricePairs = []),
          t &&
            t.querySelectorAll("li").forEach((t) => {
              const e = parseInt(
                  t.querySelector("span:first-child").textContent
                ),
                i = t.querySelector("span:not(:first-child):last-child").dataset
                  .text;
              this.qtyPricePairs.push([e, i]);
            }),
          this.qtyPricePairs.reverse();
      }
    }
  );
