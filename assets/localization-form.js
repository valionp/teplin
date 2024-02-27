/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/components/localization-form.js":
      /*!************************************************!*\
  !*** ./src/js/components/localization-form.js ***!
  \************************************************/
      /***/ () => {
        eval(
          "if (!customElements.get('localization-form')) {\n  customElements.define(\n    'localization-form',\n    class LocalizationForm extends HTMLElement {\n      constructor() {\n        super();\n        this.mql = window.matchMedia('(min-width: 750px)');\n        this.header = document.querySelector('.header-wrapper');\n        this.elements = {\n          input: this.querySelector('input[name=\"locale_code\"], input[name=\"country_code\"]'),\n          button: this.querySelector('button.localization-form__select'),\n          panel: this.querySelector('.disclosure__list-wrapper'),\n          search: this.querySelector('input[name=\"country_filter\"]'),\n          closeButton: this.querySelector('.country-selector__close-button'),\n          resetButton: this.querySelector('.country-filter__reset-button'),\n          searchIcon: this.querySelector('.country-filter__search-icon'),\n          liveRegion: this.querySelector('#sr-country-search-results'),\n        };\n        this.addEventListener('keyup', this.onContainerKeyUp.bind(this));\n        this.addEventListener('keydown', this.onContainerKeyDown.bind(this));\n        this.addEventListener('focusout', this.closeSelector.bind(this));\n        this.elements.button.addEventListener('click', this.openSelector.bind(this));\n\n        if (this.elements.search) {\n          this.elements.search.addEventListener('keyup', this.filterCountries.bind(this));\n          this.elements.search.addEventListener('focus', this.onSearchFocus.bind(this));\n          this.elements.search.addEventListener('blur', this.onSearchBlur.bind(this));\n          this.elements.search.addEventListener('keydown', this.onSearchKeyDown.bind(this));\n        }\n        if (this.elements.closeButton) {\n          this.elements.closeButton.addEventListener('click', this.hidePanel.bind(this));\n        }\n        if (this.elements.resetButton) {\n          this.elements.resetButton.addEventListener('click', this.resetFilter.bind(this));\n          this.elements.resetButton.addEventListener('mousedown', (event) => event.preventDefault());\n        }\n\n        this.querySelectorAll('a').forEach((item) => item.addEventListener('click', this.onItemClick.bind(this)));\n      }\n\n      hidePanel() {\n        this.elements.button.setAttribute('aria-expanded', 'false');\n        this.elements.panel.setAttribute('hidden', true);\n        if (this.elements.search) {\n          this.elements.search.value = '';\n          this.filterCountries();\n          this.elements.search.setAttribute('aria-activedescendant', '');\n        }\n        document.body.classList.remove('overflow-hidden-mobile');\n        document.querySelector('.menu-drawer').classList.remove('country-selector-open');\n        this.header.preventHide = false;\n      }\n\n      onContainerKeyDown(event) {\n        const focusableItems = Array.from(this.querySelectorAll('a')).filter(\n          (item) => !item.parentElement.classList.contains('hidden')\n        );\n        let focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);\n        let itemToFocus;\n\n        switch (event.code.toUpperCase()) {\n          case 'ARROWUP':\n            event.preventDefault();\n            itemToFocus =\n              focusedItemIndex > 0 ? focusableItems[focusedItemIndex - 1] : focusableItems[focusableItems.length - 1];\n            itemToFocus.focus();\n            break;\n          case 'ARROWDOWN':\n            event.preventDefault();\n            itemToFocus =\n              focusedItemIndex < focusableItems.length - 1 ? focusableItems[focusedItemIndex + 1] : focusableItems[0];\n            itemToFocus.focus();\n            break;\n        }\n\n        if (!this.elements.search) return;\n\n        setTimeout(() => {\n          focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);\n          if (focusedItemIndex > -1) {\n            this.elements.search.setAttribute('aria-activedescendant', focusableItems[focusedItemIndex].id);\n          } else {\n            this.elements.search.setAttribute('aria-activedescendant', '');\n          }\n        });\n      }\n\n      onContainerKeyUp(event) {\n        event.preventDefault();\n\n        switch (event.code.toUpperCase()) {\n          case 'ESCAPE':\n            if (this.elements.button.getAttribute('aria-expanded') == 'false') return;\n            this.hidePanel();\n            event.stopPropagation();\n            this.elements.button.focus();\n            break;\n          case 'SPACE':\n            if (this.elements.button.getAttribute('aria-expanded') == 'true') return;\n            this.openSelector();\n            break;\n        }\n      }\n\n      onItemClick(event) {\n        event.preventDefault();\n        const form = this.querySelector('form');\n        this.elements.input.value = event.currentTarget.dataset.value;\n        if (form) form.submit();\n      }\n\n      openSelector() {\n        this.elements.button.focus();\n        this.elements.panel.toggleAttribute('hidden');\n        this.elements.button.setAttribute(\n          'aria-expanded',\n          (this.elements.button.getAttribute('aria-expanded') === 'false').toString()\n        );\n        if (!document.body.classList.contains('overflow-hidden-tablet')) {\n          document.body.classList.add('overflow-hidden-mobile');\n        }\n        if (this.elements.search && this.mql.matches) {\n          this.elements.search.focus();\n        }\n        if (this.hasAttribute('data-prevent-hide')) {\n          this.header.preventHide = true;\n        }\n        document.querySelector('.menu-drawer').classList.add('country-selector-open');\n      }\n\n      closeSelector(event) {\n        if (\n          event.target.classList.contains('country-selector__overlay') ||\n          !this.contains(event.target) ||\n          !this.contains(event.relatedTarget)\n        ) {\n          this.hidePanel();\n        }\n      }\n\n      filterCountries() {\n        const searchValue = this.elements.search.value.toLowerCase();\n        const popularCountries = this.querySelector('.popular-countries');\n        const allCountries = this.querySelectorAll('a');\n        let visibleCountries = allCountries.length;\n\n        this.elements.resetButton.classList.toggle('hidden', !searchValue);\n\n        if (popularCountries) {\n          popularCountries.classList.toggle('hidden', searchValue);\n        }\n\n        allCountries.forEach((item) => {\n          const countryName = item.querySelector('.country').textContent.toLowerCase();\n          if (countryName.indexOf(searchValue) > -1) {\n            item.parentElement.classList.remove('hidden');\n            visibleCountries++;\n          } else {\n            item.parentElement.classList.add('hidden');\n            visibleCountries--;\n          }\n        });\n\n        if (this.elements.liveRegion) {\n          this.elements.liveRegion.innerHTML = window.accessibilityStrings.countrySelectorSearchCount.replace(\n            '[count]',\n            visibleCountries\n          );\n        }\n\n        this.querySelector('.country-selector').scrollTop = 0;\n        this.querySelector('.country-selector__list').scrollTop = 0;\n      }\n\n      resetFilter(event) {\n        event.stopPropagation();\n        this.elements.search.value = '';\n        this.filterCountries();\n        this.elements.search.focus();\n      }\n\n      onSearchFocus() {\n        this.elements.searchIcon.classList.add('country-filter__search-icon--hidden');\n      }\n\n      onSearchBlur() {\n        if (!this.elements.search.value) {\n          this.elements.searchIcon.classList.remove('country-filter__search-icon--hidden');\n        }\n      }\n\n      onSearchKeyDown(event) {\n        if (event.code.toUpperCase() === 'ENTER') {\n          event.preventDefault();\n        }\n      }\n    }\n  );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9sb2NhbGl6YXRpb24tZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnBhY2svLi9zcmMvanMvY29tcG9uZW50cy9sb2NhbGl6YXRpb24tZm9ybS5qcz9iZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdsb2NhbGl6YXRpb24tZm9ybScpKSB7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgICAnbG9jYWxpemF0aW9uLWZvcm0nLFxuICAgIGNsYXNzIExvY2FsaXphdGlvbkZvcm0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tcWwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzUwcHgpJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci13cmFwcGVyJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7XG4gICAgICAgICAgaW5wdXQ6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxvY2FsZV9jb2RlXCJdLCBpbnB1dFtuYW1lPVwiY291bnRyeV9jb2RlXCJdJyksXG4gICAgICAgICAgYnV0dG9uOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5sb2NhbGl6YXRpb24tZm9ybV9fc2VsZWN0JyksXG4gICAgICAgICAgcGFuZWw6IHRoaXMucXVlcnlTZWxlY3RvcignLmRpc2Nsb3N1cmVfX2xpc3Qtd3JhcHBlcicpLFxuICAgICAgICAgIHNlYXJjaDogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiY291bnRyeV9maWx0ZXJcIl0nKSxcbiAgICAgICAgICBjbG9zZUJ1dHRvbjogdGhpcy5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1zZWxlY3Rvcl9fY2xvc2UtYnV0dG9uJyksXG4gICAgICAgICAgcmVzZXRCdXR0b246IHRoaXMucXVlcnlTZWxlY3RvcignLmNvdW50cnktZmlsdGVyX19yZXNldC1idXR0b24nKSxcbiAgICAgICAgICBzZWFyY2hJY29uOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWZpbHRlcl9fc2VhcmNoLWljb24nKSxcbiAgICAgICAgICBsaXZlUmVnaW9uOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNzci1jb3VudHJ5LXNlYXJjaC1yZXN1bHRzJyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uQ29udGFpbmVyS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Db250YWluZXJLZXlEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5jbG9zZVNlbGVjdG9yLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlblNlbGVjdG9yLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5maWx0ZXJDb3VudHJpZXMuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLm9uU2VhcmNoRm9jdXMuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25TZWFyY2hCbHVyLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uU2VhcmNoS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5jbG9zZUJ1dHRvbikge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVQYW5lbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5yZXNldEJ1dHRvbikge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc2V0RmlsdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpKTtcbiAgICAgIH1cblxuICAgICAgaGlkZVBhbmVsKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wYW5lbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zZWFyY2gpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNlYXJjaC52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuZmlsdGVyQ291bnRyaWVzKCk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4tbW9iaWxlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyYXdlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50cnktc2VsZWN0b3Itb3BlbicpO1xuICAgICAgICB0aGlzLmhlYWRlci5wcmV2ZW50SGlkZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBvbkNvbnRhaW5lcktleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnYScpKS5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+ICFpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKVxuICAgICAgICApO1xuICAgICAgICBsZXQgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZUl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGxldCBpdGVtVG9Gb2N1cztcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgIGNhc2UgJ0FSUk9XVVAnOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGl0ZW1Ub0ZvY3VzID1cbiAgICAgICAgICAgICAgZm9jdXNlZEl0ZW1JbmRleCA+IDAgPyBmb2N1c2FibGVJdGVtc1tmb2N1c2VkSXRlbUluZGV4IC0gMV0gOiBmb2N1c2FibGVJdGVtc1tmb2N1c2FibGVJdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGl0ZW1Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdBUlJPV0RPV04nOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGl0ZW1Ub0ZvY3VzID1cbiAgICAgICAgICAgICAgZm9jdXNlZEl0ZW1JbmRleCA8IGZvY3VzYWJsZUl0ZW1zLmxlbmd0aCAtIDEgPyBmb2N1c2FibGVJdGVtc1tmb2N1c2VkSXRlbUluZGV4ICsgMV0gOiBmb2N1c2FibGVJdGVtc1swXTtcbiAgICAgICAgICAgIGl0ZW1Ub0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5zZWFyY2gpIHJldHVybjtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlSXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICBpZiAoZm9jdXNlZEl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGZvY3VzYWJsZUl0ZW1zW2ZvY3VzZWRJdGVtSW5kZXhdLmlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25Db250YWluZXJLZXlVcChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgY2FzZSAnRVNDQVBFJzpcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmhpZGVQYW5lbCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5mb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnU1BBQ0UnOlxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uSXRlbUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcbiAgICAgICAgaWYgKGZvcm0pIGZvcm0uc3VibWl0KCk7XG4gICAgICB9XG5cbiAgICAgIG9wZW5TZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5idXR0b24uZm9jdXMoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wYW5lbC50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgICAgICh0aGlzLmVsZW1lbnRzLmJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykudG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdvdmVyZmxvdy1oaWRkZW4tdGFibGV0JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbi1tb2JpbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zZWFyY2ggJiYgdGhpcy5tcWwubWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2VhcmNoLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkYXRhLXByZXZlbnQtaGlkZScpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXIucHJldmVudEhpZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWRyYXdlcicpLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktc2VsZWN0b3Itb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBjbG9zZVNlbGVjdG9yKGV2ZW50KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudHJ5LXNlbGVjdG9yX19vdmVybGF5JykgfHxcbiAgICAgICAgICAhdGhpcy5jb250YWlucyhldmVudC50YXJnZXQpIHx8XG4gICAgICAgICAgIXRoaXMuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5oaWRlUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaWx0ZXJDb3VudHJpZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5lbGVtZW50cy5zZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcG9wdWxhckNvdW50cmllcyA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcHVsYXItY291bnRyaWVzJyk7XG4gICAgICAgIGNvbnN0IGFsbENvdW50cmllcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgICBsZXQgdmlzaWJsZUNvdW50cmllcyA9IGFsbENvdW50cmllcy5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhc2VhcmNoVmFsdWUpO1xuXG4gICAgICAgIGlmIChwb3B1bGFyQ291bnRyaWVzKSB7XG4gICAgICAgICAgcG9wdWxhckNvdW50cmllcy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBzZWFyY2hWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxDb3VudHJpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY291bnRyeScpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGNvdW50cnlOYW1lLmluZGV4T2Yoc2VhcmNoVmFsdWUpID4gLTEpIHtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHZpc2libGVDb3VudHJpZXMrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdmlzaWJsZUNvdW50cmllcy0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMubGl2ZVJlZ2lvbikge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMubGl2ZVJlZ2lvbi5pbm5lckhUTUwgPSB3aW5kb3cuYWNjZXNzaWJpbGl0eVN0cmluZ3MuY291bnRyeVNlbGVjdG9yU2VhcmNoQ291bnQucmVwbGFjZShcbiAgICAgICAgICAgICdbY291bnRdJyxcbiAgICAgICAgICAgIHZpc2libGVDb3VudHJpZXNcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1zZWxlY3RvcicpLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvcignLmNvdW50cnktc2VsZWN0b3JfX2xpc3QnKS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXNldEZpbHRlcihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2gudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5maWx0ZXJDb3VudHJpZXMoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2guZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgb25TZWFyY2hGb2N1cygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2NvdW50cnktZmlsdGVyX19zZWFyY2gtaWNvbi0taGlkZGVuJyk7XG4gICAgICB9XG5cbiAgICAgIG9uU2VhcmNoQmx1cigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLnNlYXJjaC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudHJ5LWZpbHRlcl9fc2VhcmNoLWljb24tLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uU2VhcmNoS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuY29kZS50b1VwcGVyQ2FzZSgpID09PSAnRU5URVInKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/localization-form.js\n"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/js/components/localization-form.js"]();
  /******/
  /******/
})();