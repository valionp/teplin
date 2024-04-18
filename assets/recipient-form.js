customElements.get("recipient-form") ||
  customElements.define(
    "recipient-form",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.recipientFieldsLiveRegion = this.querySelector(
            `#Recipient-fields-live-region-${this.dataset.sectionId}`
          )),
          (this.checkboxInput = this.querySelector(
            `#Recipient-checkbox-${this.dataset.sectionId}`
          )),
          (this.checkboxInput.disabled = !1),
          (this.hiddenControlField = this.querySelector(
            `#Recipient-control-${this.dataset.sectionId}`
          )),
          (this.hiddenControlField.disabled = !0),
          (this.emailInput = this.querySelector(
            `#Recipient-email-${this.dataset.sectionId}`
          )),
          (this.nameInput = this.querySelector(
            `#Recipient-name-${this.dataset.sectionId}`
          )),
          (this.messageInput = this.querySelector(
            `#Recipient-message-${this.dataset.sectionId}`
          )),
          (this.sendonInput = this.querySelector(
            `#Recipient-send-on-${this.dataset.sectionId}`
          )),
          (this.offsetProperty = this.querySelector(
            `#Recipient-timezone-offset-${this.dataset.sectionId}`
          )),
          this.offsetProperty &&
            (this.offsetProperty.value = new Date()
              .getTimezoneOffset()
              .toString()),
          (this.errorMessageWrapper = this.querySelector(
            ".product-form__recipient-error-message-wrapper"
          )),
          (this.errorMessageList =
            this.errorMessageWrapper?.querySelector("ul")),
          (this.errorMessage =
            this.errorMessageWrapper?.querySelector(".error-message")),
          (this.defaultErrorHeader = this.errorMessage?.innerText),
          (this.currentProductVariantId = this.dataset.productVariantId),
          this.addEventListener("change", this.onChange.bind(this)),
          this.onChange();
      }
      cartUpdateUnsubscriber = void 0;
      variantChangeUnsubscriber = void 0;
      cartErrorUnsubscriber = void 0;
      connectedCallback() {
        (this.cartUpdateUnsubscriber = subscribe(
          PUB_SUB_EVENTS.cartUpdate,
          (e) => {
            "product-form" === e.source &&
              e.productVariantId.toString() === this.currentProductVariantId &&
              this.resetRecipientForm();
          }
        )),
          (this.variantChangeUnsubscriber = subscribe(
            PUB_SUB_EVENTS.variantChange,
            (e) => {
              e.data.sectionId === this.dataset.sectionId &&
                (this.currentProductVariantId = e.data.variant.id.toString());
            }
          )),
          (this.cartUpdateUnsubscriber = subscribe(
            PUB_SUB_EVENTS.cartError,
            (e) => {
              "product-form" === e.source &&
                e.productVariantId.toString() ===
                  this.currentProductVariantId &&
                this.displayErrorMessage(e.message, e.errors);
            }
          ));
      }
      disconnectedCallback() {
        this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber(),
          this.variantChangeUnsubscriber && this.variantChangeUnsubscriber(),
          this.cartErrorUnsubscriber && this.cartErrorUnsubscriber();
      }
      onChange() {
        this.checkboxInput.checked
          ? (this.enableInputFields(),
            (this.recipientFieldsLiveRegion.innerText =
              window.accessibilityStrings.recipientFormExpanded))
          : (this.clearInputFields(),
            this.disableInputFields(),
            this.clearErrorMessage(),
            (this.recipientFieldsLiveRegion.innerText =
              window.accessibilityStrings.recipientFormCollapsed));
      }
      inputFields() {
        return [
          this.emailInput,
          this.nameInput,
          this.messageInput,
          this.sendonInput,
        ];
      }
      disableableFields() {
        return [...this.inputFields(), this.offsetProperty];
      }
      clearInputFields() {
        this.inputFields().forEach((e) => (e.value = ""));
      }
      enableInputFields() {
        this.disableableFields().forEach((e) => (e.disabled = !1));
      }
      disableInputFields() {
        this.disableableFields().forEach((e) => (e.disabled = !0));
      }
      displayErrorMessage(e, t) {
        if (
          (this.clearErrorMessage(),
          (this.errorMessageWrapper.hidden = !1),
          "object" == typeof t)
        )
          return (
            (this.errorMessage.innerText = this.defaultErrorHeader),
            Object.entries(t).forEach(([e, t]) => {
              const r = `RecipientForm-${e}-error-${this.dataset.sectionId}`,
                s = `#Recipient-${e}-${this.dataset.sectionId}`,
                i = `${t.join(", ")}`,
                a = this.querySelector(`#${r}`),
                n = a?.querySelector(".error-message");
              if (!n) return;
              this.errorMessageList &&
                this.errorMessageList.appendChild(
                  this.createErrorListItem(s, i)
                ),
                (n.innerText = `${i}.`),
                a.classList.remove("hidden");
              const c = this[`${e}Input`];
              c &&
                (c.setAttribute("aria-invalid", !0),
                c.setAttribute("aria-describedby", r));
            })
          );
        this.errorMessage.innerText = t;
      }
      createErrorListItem(e, t) {
        const r = document.createElement("li"),
          s = document.createElement("a");
        return (
          s.setAttribute("href", e),
          (s.innerText = t),
          r.appendChild(s),
          (r.className = "error-message"),
          r
        );
      }
      clearErrorMessage() {
        (this.errorMessageWrapper.hidden = !0),
          this.errorMessageList && (this.errorMessageList.innerHTML = ""),
          this.querySelectorAll(".recipient-fields .form__message").forEach(
            (e) => {
              e.classList.add("hidden");
              const t = e.querySelector(".error-message");
              t && (t.innerText = "");
            }
          ),
          [
            this.emailInput,
            this.messageInput,
            this.nameInput,
            this.sendonInput,
          ].forEach((e) => {
            e.setAttribute("aria-invalid", !1),
              e.removeAttribute("aria-describedby");
          });
      }
      resetRecipientForm() {
        this.checkboxInput.checked &&
          ((this.checkboxInput.checked = !1),
          this.clearInputFields(),
          this.clearErrorMessage());
      }
    }
  );
