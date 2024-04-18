customElements.get("pickup-availability") ||
  customElements.define(
    "pickup-availability",
    class extends HTMLElement {
      constructor() {
        super(),
          this.hasAttribute("available") &&
            ((this.errorHtml = this.querySelector(
              "template"
            ).content.firstElementChild.cloneNode(!0)),
            (this.onClickRefreshList = this.onClickRefreshList.bind(this)),
            this.fetchAvailability(this.dataset.variantId));
      }
      fetchAvailability(e) {
        let t = this.dataset.rootUrl;
        t.endsWith("/") || (t += "/"),
          fetch(`${t}variants/${e}/?section_id=pickup-availability`)
            .then((e) => e.text())
            .then((e) => {
              const t = new DOMParser()
                .parseFromString(e, "text/html")
                .querySelector(".shopify-section");
              this.renderPreview(t);
            })
            .catch((e) => {
              const t = this.querySelector("button");
              t && t.removeEventListener("click", this.onClickRefreshList),
                this.renderError();
            });
      }
      onClickRefreshList(e) {
        this.fetchAvailability(this.dataset.variantId);
      }
      renderError() {
        (this.innerHTML = ""),
          this.appendChild(this.errorHtml),
          this.querySelector("button").addEventListener(
            "click",
            this.onClickRefreshList
          );
      }
      renderPreview(e) {
        const t = document.querySelector("pickup-availability-drawer");
        if ((t && t.remove(), !e.querySelector("pickup-availability-preview")))
          return (this.innerHTML = ""), void this.removeAttribute("available");
        (this.innerHTML = e.querySelector(
          "pickup-availability-preview"
        ).outerHTML),
          this.setAttribute("available", ""),
          document.body.appendChild(
            e.querySelector("pickup-availability-drawer")
          ),
          this.dataset.productPageColorScheme.split(" ").forEach((e) => {
            document
              .querySelector("pickup-availability-drawer")
              .classList.add(e);
          });
        const i = this.querySelector("button");
        i &&
          i.addEventListener("click", (e) => {
            document.querySelector("pickup-availability-drawer").show(e.target);
          });
      }
    }
  ),
  customElements.get("pickup-availability-drawer") ||
    customElements.define(
      "pickup-availability-drawer",
      class extends HTMLElement {
        constructor() {
          super(),
            (this.onBodyClick = this.handleBodyClick.bind(this)),
            this.querySelector("button").addEventListener("click", () => {
              this.hide();
            }),
            this.addEventListener("keyup", (e) => {
              "ESCAPE" === e.code.toUpperCase() && this.hide();
            });
        }
        handleBodyClick(e) {
          const t = e.target;
          t == this ||
            t.closest("pickup-availability-drawer") ||
            "ShowPickupAvailabilityDrawer" == t.id ||
            this.hide();
        }
        hide() {
          this.removeAttribute("open"),
            document.body.removeEventListener("click", this.onBodyClick),
            document.body.classList.remove("overflow-hidden"),
            removeTrapFocus(this.focusElement);
        }
        show(e) {
          (this.focusElement = e),
            this.setAttribute("open", ""),
            document.body.addEventListener("click", this.onBodyClick),
            document.body.classList.add("overflow-hidden"),
            trapFocus(this);
        }
      }
    );
