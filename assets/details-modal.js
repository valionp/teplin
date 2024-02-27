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
    /***/ "./src/js/components/details-modal.js":
      /*!********************************************!*\
  !*** ./src/js/components/details-modal.js ***!
  \********************************************/
      /***/ () => {
        eval(
          "class DetailsModal extends HTMLElement {\n  constructor() {\n    super();\n    this.detailsContainer = this.querySelector('details');\n    this.summaryToggle = this.querySelector('summary');\n\n    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());\n    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));\n    this.querySelector('button[type=\"button\"]').addEventListener('click', this.close.bind(this));\n\n    this.summaryToggle.setAttribute('role', 'button');\n  }\n\n  isOpen() {\n    return this.detailsContainer.hasAttribute('open');\n  }\n\n  onSummaryClick(event) {\n    event.preventDefault();\n    event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);\n  }\n\n  onBodyClick(event) {\n    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);\n  }\n\n  open(event) {\n    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);\n    event.target.closest('details').setAttribute('open', true);\n    document.body.addEventListener('click', this.onBodyClickEvent);\n    document.body.classList.add('overflow-hidden');\n\n    trapFocus(\n      this.detailsContainer.querySelector('[tabindex=\"-1\"]'),\n      this.detailsContainer.querySelector('input:not([type=\"hidden\"])')\n    );\n  }\n\n  close(focusToggle = true) {\n    removeTrapFocus(focusToggle ? this.summaryToggle : null);\n    this.detailsContainer.removeAttribute('open');\n    document.body.removeEventListener('click', this.onBodyClickEvent);\n    document.body.classList.remove('overflow-hidden');\n  }\n}\n\ncustomElements.define('details-modal', DetailsModal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9kZXRhaWxzLW1vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL2NvbXBvbmVudHMvZGV0YWlscy1tb2RhbC5qcz83NzRjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERldGFpbHNNb2RhbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRldGFpbHNDb250YWluZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2RldGFpbHMnKTtcbiAgICB0aGlzLnN1bW1hcnlUb2dnbGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKTtcblxuICAgIHRoaXMuZGV0YWlsc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gZXZlbnQuY29kZS50b1VwcGVyQ2FzZSgpID09PSAnRVNDQVBFJyAmJiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMuc3VtbWFyeVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdW1tYXJ5Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cImJ1dHRvblwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuc3VtbWFyeVRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGV0YWlsc0NvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgfVxuXG4gIG9uU3VtbWFyeUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnZGV0YWlscycpLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKGV2ZW50KTtcbiAgfVxuXG4gIG9uQm9keUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtb3ZlcmxheScpKSB0aGlzLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIG9wZW4oZXZlbnQpIHtcbiAgICB0aGlzLm9uQm9keUNsaWNrRXZlbnQgPSB0aGlzLm9uQm9keUNsaWNrRXZlbnQgfHwgdGhpcy5vbkJvZHlDbGljay5iaW5kKHRoaXMpO1xuICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkZXRhaWxzJykuc2V0QXR0cmlidXRlKCdvcGVuJywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2tFdmVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcblxuICAgIHRyYXBGb2N1cyhcbiAgICAgIHRoaXMuZGV0YWlsc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXg9XCItMVwiXScpLFxuICAgICAgdGhpcy5kZXRhaWxzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknKVxuICAgICk7XG4gIH1cblxuICBjbG9zZShmb2N1c1RvZ2dsZSA9IHRydWUpIHtcbiAgICByZW1vdmVUcmFwRm9jdXMoZm9jdXNUb2dnbGUgPyB0aGlzLnN1bW1hcnlUb2dnbGUgOiBudWxsKTtcbiAgICB0aGlzLmRldGFpbHNDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2tFdmVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2RldGFpbHMtbW9kYWwnLCBEZXRhaWxzTW9kYWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/details-modal.js\n"
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
  /******/ __webpack_modules__["./src/js/components/details-modal.js"]();
  /******/
  /******/
})();
