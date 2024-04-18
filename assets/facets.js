(() => {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.onActiveFilterClick = this.onActiveFilterClick.bind(this)),
        (this.debouncedOnSubmit = debounce((e) => {
          this.onSubmitHandler(e);
        }, 500)),
        this.querySelector("form").addEventListener(
          "input",
          this.debouncedOnSubmit.bind(this)
        );
      const e = this.querySelector("#FacetsWrapperDesktop");
      e && e.addEventListener("keyup", onKeyUpEscape);
    }
    static setListeners() {
      window.addEventListener("popstate", (t) => {
        const r = t.state ? t.state.searchParams : e.searchParamsInitial;
        r !== e.searchParamsPrev && e.renderPage(r, null, !1);
      });
    }
    static toggleActiveFacets(e = !0) {
      document.querySelectorAll(".js-facet-remove").forEach((t) => {
        t.classList.toggle("disabled", e);
      });
    }
    static renderPage(t, r, n = !0) {
      e.searchParamsPrev = t;
      const o = e.getSections(),
        i = document.getElementById("ProductCount"),
        s = document.getElementById("ProductCountDesktop");
      document
        .querySelectorAll(
          ".facets-container .loading__spinner, facet-filters-form .loading__spinner"
        )
        .forEach((e) => e.classList.remove("hidden")),
        document
          .getElementById("ProductGridContainer")
          .querySelector(".collection")
          .classList.add("loading"),
        i && i.classList.add("loading"),
        s && s.classList.add("loading"),
        o.forEach((n) => {
          const o = `${window.location.pathname}?section_id=${n.section}&${t}`,
            i = (e) => e.url === o;
          e.filterData.some(i)
            ? e.renderSectionFromCache(i, r)
            : e.renderSectionFromFetch(o, r);
        }),
        n && e.updateURLHash(t);
    }
    static renderSectionFromFetch(t, r) {
      fetch(t)
        .then((e) => e.text())
        .then((n) => {
          const o = n;
          (e.filterData = [...e.filterData, { html: o, url: t }]),
            e.renderFilters(o, r),
            e.renderProductGridContainer(o),
            e.renderProductCount(o),
            "function" == typeof initializeScrollAnimationTrigger &&
              initializeScrollAnimationTrigger(o.innerHTML);
        });
    }
    static renderSectionFromCache(t, r) {
      const n = e.filterData.find(t).html;
      e.renderFilters(n, r),
        e.renderProductGridContainer(n),
        e.renderProductCount(n),
        "function" == typeof initializeScrollAnimationTrigger &&
          initializeScrollAnimationTrigger(n.innerHTML);
    }
    static renderProductGridContainer(e) {
      (document.getElementById("ProductGridContainer").innerHTML =
        new DOMParser()
          .parseFromString(e, "text/html")
          .getElementById("ProductGridContainer").innerHTML),
        document
          .getElementById("ProductGridContainer")
          .querySelectorAll(".scroll-trigger")
          .forEach((e) => {
            e.classList.add("scroll-trigger--cancel");
          });
    }
    static renderProductCount(e) {
      const t = new DOMParser()
          .parseFromString(e, "text/html")
          .getElementById("ProductCount").innerHTML,
        r = document.getElementById("ProductCount"),
        n = document.getElementById("ProductCountDesktop");
      (r.innerHTML = t),
        r.classList.remove("loading"),
        n && ((n.innerHTML = t), n.classList.remove("loading")),
        document
          .querySelectorAll(
            ".facets-container .loading__spinner, facet-filters-form .loading__spinner"
          )
          .forEach((e) => e.classList.add("hidden"));
    }
    static renderFilters(t, r) {
      const n = new DOMParser().parseFromString(t, "text/html"),
        o = n.querySelectorAll(
          "#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter"
        ),
        i = document.querySelectorAll(
          "#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter"
        );
      Array.from(i).forEach((e) => {
        Array.from(o).some(({ id: t }) => e.id === t) || e.remove();
      });
      const s = (e) => {
          const t = r ? r.target.closest(".js-filter") : void 0;
          return !!t && e.id === t.id;
        },
        c = Array.from(o).filter((e) => !s(e)),
        a = Array.from(o).find(s);
      if (
        (c.forEach((e, t) => {
          if (document.getElementById(e.id))
            document.getElementById(e.id).innerHTML = e.innerHTML;
          else {
            if (t > 0) {
              const { className: r, id: n } = c[t - 1];
              if (e.className === r)
                return void document.getElementById(n).after(e);
            }
            e.parentElement &&
              document
                .querySelector(`#${e.parentElement.id} .js-filter`)
                .before(e);
          }
        }),
        e.renderActiveFacets(n),
        e.renderAdditionalElements(n),
        a)
      ) {
        const t = r.target.closest(".js-filter").id;
        if (t) {
          e.renderCounts(a, r.target.closest(".js-filter")),
            e.renderMobileCounts(a, document.getElementById(t));
          const n = document.getElementById(t),
            o = n.classList.contains("mobile-facets__details")
              ? ".mobile-facets__close-button"
              : ".facets__summary",
            i = n.querySelector(o);
          i && i.focus();
        }
      }
    }
    static renderActiveFacets(t) {
      [".active-facets-mobile", ".active-facets-desktop"].forEach((e) => {
        const r = t.querySelector(e);
        r && (document.querySelector(e).innerHTML = r.innerHTML);
      }),
        e.toggleActiveFacets(!1);
    }
    static renderAdditionalElements(e) {
      [".mobile-facets__open", ".mobile-facets__count", ".sorting"].forEach(
        (t) => {
          e.querySelector(t) &&
            (document.querySelector(t).innerHTML =
              e.querySelector(t).innerHTML);
        }
      ),
        document
          .getElementById("FacetFiltersFormMobile")
          .closest("menu-drawer")
          .bindEvents();
    }
    static renderCounts(e, t) {
      const r = t.querySelector(".facets__summary"),
        n = e.querySelector(".facets__summary");
      n && r && (r.outerHTML = n.outerHTML);
      const o = t.querySelector(".facets__header"),
        i = e.querySelector(".facets__header");
      i && o && (o.outerHTML = i.outerHTML);
      const s = t.querySelector(".facets-wrap"),
        c = e.querySelector(".facets-wrap");
      c &&
        s &&
        (Boolean(t.querySelector("show-more-button .label-show-more.hidden")) &&
          c
            .querySelectorAll(".facets__item.hidden")
            .forEach((e) => e.classList.replace("hidden", "show-more-item")),
        (s.outerHTML = c.outerHTML));
    }
    static renderMobileCounts(e, t) {
      const r = t.querySelector(".mobile-facets__list"),
        n = e.querySelector(".mobile-facets__list");
      n && r && (r.outerHTML = n.outerHTML);
    }
    static updateURLHash(e) {
      history.pushState(
        { searchParams: e },
        "",
        `${window.location.pathname}${e && "?".concat(e)}`
      );
    }
    static getSections() {
      return [{ section: document.getElementById("product-grid").dataset.id }];
    }
    createSearchParams(e) {
      const t = new FormData(e);
      return new URLSearchParams(t).toString();
    }
    onSubmitForm(t, r) {
      e.renderPage(t, r);
    }
    onSubmitHandler(e) {
      e.preventDefault();
      const t = document.querySelectorAll("facet-filters-form form");
      if ("mobile-facets__checkbox" == e.srcElement.className) {
        const t = this.createSearchParams(e.target.closest("form"));
        this.onSubmitForm(t, e);
      } else {
        const r = [],
          n = "FacetFiltersFormMobile" === e.target.closest("form").id;
        t.forEach((e) => {
          n
            ? "FacetFiltersFormMobile" === e.id &&
              r.push(this.createSearchParams(e))
            : ("FacetSortForm" !== e.id &&
                "FacetFiltersForm" !== e.id &&
                "FacetSortDrawerForm" !== e.id) ||
              (document
                .querySelectorAll(".no-js-list")
                .forEach((e) => e.remove()),
              r.push(this.createSearchParams(e)));
        }),
          this.onSubmitForm(r.join("&"), e);
      }
    }
    onActiveFilterClick(t) {
      t.preventDefault(), e.toggleActiveFacets();
      const r =
        -1 == t.currentTarget.href.indexOf("?")
          ? ""
          : t.currentTarget.href.slice(t.currentTarget.href.indexOf("?") + 1);
      e.renderPage(r);
    }
  }
  (e.filterData = []),
    (e.searchParamsInitial = window.location.search.slice(1)),
    (e.searchParamsPrev = window.location.search.slice(1)),
    customElements.define("facet-filters-form", e),
    e.setListeners();
  class t extends HTMLElement {
    constructor() {
      super(),
        this.querySelectorAll("input").forEach((e) =>
          e.addEventListener("change", this.onRangeChange.bind(this))
        ),
        this.setMinAndMaxValues();
    }
    onRangeChange(e) {
      this.adjustToValidValues(e.currentTarget), this.setMinAndMaxValues();
    }
    setMinAndMaxValues() {
      const e = this.querySelectorAll("input"),
        t = e[0],
        r = e[1];
      r.value && t.setAttribute("max", r.value),
        t.value && r.setAttribute("min", t.value),
        "" === t.value && r.setAttribute("min", 0),
        "" === r.value && t.setAttribute("max", r.getAttribute("max"));
    }
    adjustToValidValues(e) {
      const t = Number(e.value),
        r = Number(e.getAttribute("min")),
        n = Number(e.getAttribute("max"));
      t < r && (e.value = r), t > n && (e.value = n);
    }
  }
  customElements.define("price-range", t);
  class r extends HTMLElement {
    constructor() {
      super();
      const e = this.querySelector("a");
      e.setAttribute("role", "button"),
        e.addEventListener("click", this.closeFilter.bind(this)),
        e.addEventListener("keyup", (e) => {
          e.preventDefault(),
            "SPACE" === e.code.toUpperCase() && this.closeFilter(e);
        });
    }
    closeFilter(e) {
      e.preventDefault(),
        (
          this.closest("facet-filters-form") ||
          document.querySelector("facet-filters-form")
        ).onActiveFilterClick(e);
    }
  }
  customElements.define("facet-remove", r);
})();
