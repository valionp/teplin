customElements.get("media-gallery") ||
  customElements.define(
    "media-gallery",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.elements = {
            liveRegion: this.querySelector('[id^="GalleryStatus"]'),
            viewer: this.querySelector('[id^="GalleryViewer"]'),
            thumbnails: this.querySelector('[id^="GalleryThumbnails"]'),
          }),
          (this.mql = window.matchMedia("(min-width: 750px)")),
          this.elements.thumbnails &&
            (this.elements.viewer.addEventListener(
              "slideChanged",
              debounce(this.onSlideChanged.bind(this), 500)
            ),
            this.elements.thumbnails
              .querySelectorAll("[data-target]")
              .forEach((e) => {
                e.querySelector("button").addEventListener(
                  "click",
                  this.setActiveMedia.bind(this, e.dataset.target, !1)
                );
              }),
            this.dataset.desktopLayout.includes("thumbnail") &&
              this.mql.matches &&
              this.removeListSemantic());
      }
      onSlideChanged(e) {
        const t = this.elements.thumbnails.querySelector(
          `[data-target="${e.detail.currentElement.dataset.mediaId}"]`
        );
        this.setActiveThumbnail(t);
      }
      setActiveMedia(e, t) {
        const i = this.elements.viewer.querySelector(`[data-media-id="${e}"]`);
        if (
          (this.elements.viewer
            .querySelectorAll("[data-media-id]")
            .forEach((e) => {
              e.classList.remove("is-active");
            }),
          i.classList.add("is-active"),
          t)
        ) {
          if ((i.parentElement.prepend(i), this.elements.thumbnails)) {
            const t = this.elements.thumbnails.querySelector(
              `[data-target="${e}"]`
            );
            t.parentElement.prepend(t);
          }
          this.elements.viewer.slider && this.elements.viewer.resetPages();
        }
        if (
          (this.preventStickyHeader(),
          window.setTimeout(() => {
            (this.mql.matches && !this.elements.thumbnails) ||
              i.parentElement.scrollTo({ left: i.offsetLeft });
            const e = i.getBoundingClientRect();
            if (e.top > -0.5) return;
            const t = e.top + window.scrollY;
            window.scrollTo({ top: t, behavior: "smooth" });
          }),
          this.playActiveMedia(i),
          !this.elements.thumbnails)
        )
          return;
        const s = this.elements.thumbnails.querySelector(
          `[data-target="${e}"]`
        );
        this.setActiveThumbnail(s),
          this.announceLiveRegion(i, s.dataset.mediaPosition);
      }
      setActiveThumbnail(e) {
        this.elements.thumbnails &&
          e &&
          (this.elements.thumbnails
            .querySelectorAll("button")
            .forEach((e) => e.removeAttribute("aria-current")),
          e.querySelector("button").setAttribute("aria-current", !0),
          this.elements.thumbnails.isSlideVisible(e, 10) ||
            this.elements.thumbnails.slider.scrollTo({ left: e.offsetLeft }));
      }
      announceLiveRegion(e, t) {
        const i = e.querySelector(".product__modal-opener--image img");
        i &&
          ((i.onload = () => {
            this.elements.liveRegion.setAttribute("aria-hidden", !1),
              (this.elements.liveRegion.innerHTML =
                window.accessibilityStrings.imageAvailable.replace(
                  "[index]",
                  t
                )),
              setTimeout(() => {
                this.elements.liveRegion.setAttribute("aria-hidden", !0);
              }, 2e3);
          }),
          (i.src = i.src));
      }
      playActiveMedia(e) {
        window.pauseAllMedia();
        const t = e.querySelector(".deferred-media");
        t && t.loadContent(!1);
      }
      preventStickyHeader() {
        (this.stickyHeader =
          this.stickyHeader || document.querySelector("sticky-header")),
          this.stickyHeader &&
            this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal"));
      }
      removeListSemantic() {
        this.elements.viewer.slider &&
          (this.elements.viewer.slider.setAttribute("role", "presentation"),
          this.elements.viewer.sliderItems.forEach((e) =>
            e.setAttribute("role", "presentation")
          ));
      }
    }
  );
