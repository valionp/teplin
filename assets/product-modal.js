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
    /***/ "./src/js/components/product-modal.js":
      /*!********************************************!*\
  !*** ./src/js/components/product-modal.js ***!
  \********************************************/
      /***/ () => {
        eval(
          "if (!customElements.get('product-modal')) {\n  customElements.define(\n    'product-modal',\n    class ProductModal extends ModalDialog {\n      constructor() {\n        super();\n      }\n\n      hide() {\n        super.hide();\n      }\n\n      show(opener) {\n        super.show(opener);\n        this.showActiveMedia();\n      }\n\n      showActiveMedia() {\n        this.querySelectorAll(\n          `[data-media-id]:not([data-media-id=\"${this.openedBy.getAttribute('data-media-id')}\"])`\n        ).forEach((element) => {\n          element.classList.remove('active');\n        });\n        const activeMedia = this.querySelector(`[data-media-id=\"${this.openedBy.getAttribute('data-media-id')}\"]`);\n        const activeMediaTemplate = activeMedia.querySelector('template');\n        const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;\n        activeMedia.classList.add('active');\n        activeMedia.scrollIntoView();\n\n        const container = this.querySelector('[role=\"document\"]');\n        container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;\n\n        if (\n          activeMedia.nodeName == 'DEFERRED-MEDIA' &&\n          activeMediaContent &&\n          activeMediaContent.querySelector('.js-youtube')\n        )\n          activeMedia.loadContent();\n      }\n    }\n  );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LW1vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnBhY2svLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LW1vZGFsLmpzPzlkODIiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ3Byb2R1Y3QtbW9kYWwnKSkge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gICAgJ3Byb2R1Y3QtbW9kYWwnLFxuICAgIGNsYXNzIFByb2R1Y3RNb2RhbCBleHRlbmRzIE1vZGFsRGlhbG9nIHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKCkge1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIHNob3cob3BlbmVyKSB7XG4gICAgICAgIHN1cGVyLnNob3cob3BlbmVyKTtcbiAgICAgICAgdGhpcy5zaG93QWN0aXZlTWVkaWEoKTtcbiAgICAgIH1cblxuICAgICAgc2hvd0FjdGl2ZU1lZGlhKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgYFtkYXRhLW1lZGlhLWlkXTpub3QoW2RhdGEtbWVkaWEtaWQ9XCIke3RoaXMub3BlbmVkQnkuZ2V0QXR0cmlidXRlKCdkYXRhLW1lZGlhLWlkJyl9XCJdKWBcbiAgICAgICAgKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lZGlhID0gdGhpcy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZWRpYS1pZD1cIiR7dGhpcy5vcGVuZWRCeS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVkaWEtaWQnKX1cIl1gKTtcbiAgICAgICAgY29uc3QgYWN0aXZlTWVkaWFUZW1wbGF0ZSA9IGFjdGl2ZU1lZGlhLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lZGlhQ29udGVudCA9IGFjdGl2ZU1lZGlhVGVtcGxhdGUgPyBhY3RpdmVNZWRpYVRlbXBsYXRlLmNvbnRlbnQgOiBudWxsO1xuICAgICAgICBhY3RpdmVNZWRpYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgYWN0aXZlTWVkaWEuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiZG9jdW1lbnRcIl0nKTtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbExlZnQgPSAoYWN0aXZlTWVkaWEud2lkdGggLSBjb250YWluZXIuY2xpZW50V2lkdGgpIC8gMjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgYWN0aXZlTWVkaWEubm9kZU5hbWUgPT0gJ0RFRkVSUkVELU1FRElBJyAmJlxuICAgICAgICAgIGFjdGl2ZU1lZGlhQ29udGVudCAmJlxuICAgICAgICAgIGFjdGl2ZU1lZGlhQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuanMteW91dHViZScpXG4gICAgICAgIClcbiAgICAgICAgICBhY3RpdmVNZWRpYS5sb2FkQ29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/product-modal.js\n"
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
  /******/ __webpack_modules__["./src/js/components/product-modal.js"]();
  /******/
  /******/
})();
