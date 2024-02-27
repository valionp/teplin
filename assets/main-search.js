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
    /***/ "./src/js/components/main-search.js":
      /*!******************************************!*\
  !*** ./src/js/components/main-search.js ***!
  \******************************************/
      /***/ () => {
        eval(
          "class MainSearch extends SearchForm {\n  constructor() {\n    super();\n    this.allSearchInputs = document.querySelectorAll('input[type=\"search\"]');\n    this.setupEventListeners();\n  }\n\n  setupEventListeners() {\n    let allSearchForms = [];\n    this.allSearchInputs.forEach((input) => allSearchForms.push(input.form));\n    this.input.addEventListener('focus', this.onInputFocus.bind(this));\n    if (allSearchForms.length < 2) return;\n    allSearchForms.forEach((form) => form.addEventListener('reset', this.onFormReset.bind(this)));\n    this.allSearchInputs.forEach((input) => input.addEventListener('input', this.onInput.bind(this)));\n  }\n\n  onFormReset(event) {\n    super.onFormReset(event);\n    if (super.shouldResetForm()) {\n      this.keepInSync('', this.input);\n    }\n  }\n\n  onInput(event) {\n    const target = event.target;\n    this.keepInSync(target.value, target);\n  }\n\n  onInputFocus() {\n    const isSmallScreen = window.innerWidth < 750;\n    if (isSmallScreen) {\n      this.scrollIntoView({ behavior: 'smooth' });\n    }\n  }\n\n  keepInSync(value, target) {\n    this.allSearchInputs.forEach((input) => {\n      if (input !== target) {\n        input.value = value;\n      }\n    });\n  }\n}\n\ncustomElements.define('main-search', MainSearch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9tYWluLXNlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL2NvbXBvbmVudHMvbWFpbi1zZWFyY2guanM/MmI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYWluU2VhcmNoIGV4dGVuZHMgU2VhcmNoRm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hbGxTZWFyY2hJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGxldCBhbGxTZWFyY2hGb3JtcyA9IFtdO1xuICAgIHRoaXMuYWxsU2VhcmNoSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBhbGxTZWFyY2hGb3Jtcy5wdXNoKGlucHV0LmZvcm0pKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5vbklucHV0Rm9jdXMuYmluZCh0aGlzKSk7XG4gICAgaWYgKGFsbFNlYXJjaEZvcm1zLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgICBhbGxTZWFyY2hGb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5vbkZvcm1SZXNldC5iaW5kKHRoaXMpKSk7XG4gICAgdGhpcy5hbGxTZWFyY2hJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5vbklucHV0LmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIG9uRm9ybVJlc2V0KGV2ZW50KSB7XG4gICAgc3VwZXIub25Gb3JtUmVzZXQoZXZlbnQpO1xuICAgIGlmIChzdXBlci5zaG91bGRSZXNldEZvcm0oKSkge1xuICAgICAgdGhpcy5rZWVwSW5TeW5jKCcnLCB0aGlzLmlucHV0KTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0KGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMua2VlcEluU3luYyh0YXJnZXQudmFsdWUsIHRhcmdldCk7XG4gIH1cblxuICBvbklucHV0Rm9jdXMoKSB7XG4gICAgY29uc3QgaXNTbWFsbFNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzUwO1xuICAgIGlmIChpc1NtYWxsU2NyZWVuKSB7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfVxuXG4gIGtlZXBJblN5bmModmFsdWUsIHRhcmdldCkge1xuICAgIHRoaXMuYWxsU2VhcmNoSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQgIT09IHRhcmdldCkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWFpbi1zZWFyY2gnLCBNYWluU2VhcmNoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/main-search.js\n"
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
  /******/ __webpack_modules__["./src/js/components/main-search.js"]();
  /******/
  /******/
})();
