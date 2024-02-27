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
    /***/ "./src/js/components/customer.js":
      /*!***************************************!*\
  !*** ./src/js/components/customer.js ***!
  \***************************************/
      /***/ () => {
        eval(
          "const selectors = {\n  customerAddresses: '[data-customer-addresses]',\n  addressCountrySelect: '[data-address-country-select]',\n  addressContainer: '[data-address]',\n  toggleAddressButton: 'button[aria-expanded]',\n  cancelAddressButton: 'button[type=\"reset\"]',\n  deleteAddressButton: 'button[data-confirm-message]',\n};\n\nconst attributes = {\n  expanded: 'aria-expanded',\n  confirmMessage: 'data-confirm-message',\n};\n\nclass CustomerAddresses {\n  constructor() {\n    this.elements = this._getElements();\n    if (Object.keys(this.elements).length === 0) return;\n    this._setupCountries();\n    this._setupEventListeners();\n  }\n\n  _getElements() {\n    const container = document.querySelector(selectors.customerAddresses);\n    return container\n      ? {\n          container,\n          addressContainer: container.querySelector(selectors.addressContainer),\n          toggleButtons: document.querySelectorAll(selectors.toggleAddressButton),\n          cancelButtons: container.querySelectorAll(selectors.cancelAddressButton),\n          deleteButtons: container.querySelectorAll(selectors.deleteAddressButton),\n          countrySelects: container.querySelectorAll(selectors.addressCountrySelect),\n        }\n      : {};\n  }\n\n  _setupCountries() {\n    if (Shopify && Shopify.CountryProvinceSelector) {\n      // eslint-disable-next-line no-new\n      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {\n        hideElement: 'AddressProvinceContainerNew',\n      });\n      this.elements.countrySelects.forEach((select) => {\n        const formId = select.dataset.formId;\n        // eslint-disable-next-line no-new\n        new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {\n          hideElement: `AddressProvinceContainer_${formId}`,\n        });\n      });\n    }\n  }\n\n  _setupEventListeners() {\n    this.elements.toggleButtons.forEach((element) => {\n      element.addEventListener('click', this._handleAddEditButtonClick);\n    });\n    this.elements.cancelButtons.forEach((element) => {\n      element.addEventListener('click', this._handleCancelButtonClick);\n    });\n    this.elements.deleteButtons.forEach((element) => {\n      element.addEventListener('click', this._handleDeleteButtonClick);\n    });\n  }\n\n  _toggleExpanded(target) {\n    target.setAttribute(attributes.expanded, (target.getAttribute(attributes.expanded) === 'false').toString());\n  }\n\n  _handleAddEditButtonClick = ({ currentTarget }) => {\n    this._toggleExpanded(currentTarget);\n  };\n\n  _handleCancelButtonClick = ({ currentTarget }) => {\n    this._toggleExpanded(currentTarget.closest(selectors.addressContainer).querySelector(`[${attributes.expanded}]`));\n  };\n\n  _handleDeleteButtonClick = ({ currentTarget }) => {\n    // eslint-disable-next-line no-alert\n    if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {\n      Shopify.postLink(currentTarget.dataset.target, {\n        parameters: { _method: 'delete' },\n      });\n    }\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9jdXN0b21lci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnBhY2svLi9zcmMvanMvY29tcG9uZW50cy9jdXN0b21lci5qcz8xOTc5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgY3VzdG9tZXJBZGRyZXNzZXM6ICdbZGF0YS1jdXN0b21lci1hZGRyZXNzZXNdJyxcbiAgYWRkcmVzc0NvdW50cnlTZWxlY3Q6ICdbZGF0YS1hZGRyZXNzLWNvdW50cnktc2VsZWN0XScsXG4gIGFkZHJlc3NDb250YWluZXI6ICdbZGF0YS1hZGRyZXNzXScsXG4gIHRvZ2dsZUFkZHJlc3NCdXR0b246ICdidXR0b25bYXJpYS1leHBhbmRlZF0nLFxuICBjYW5jZWxBZGRyZXNzQnV0dG9uOiAnYnV0dG9uW3R5cGU9XCJyZXNldFwiXScsXG4gIGRlbGV0ZUFkZHJlc3NCdXR0b246ICdidXR0b25bZGF0YS1jb25maXJtLW1lc3NhZ2VdJyxcbn07XG5cbmNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIGV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gIGNvbmZpcm1NZXNzYWdlOiAnZGF0YS1jb25maXJtLW1lc3NhZ2UnLFxufTtcblxuY2xhc3MgQ3VzdG9tZXJBZGRyZXNzZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5fZ2V0RWxlbWVudHMoKTtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdGhpcy5fc2V0dXBDb3VudHJpZXMoKTtcbiAgICB0aGlzLl9zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBfZ2V0RWxlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuY3VzdG9tZXJBZGRyZXNzZXMpO1xuICAgIHJldHVybiBjb250YWluZXJcbiAgICAgID8ge1xuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhZGRyZXNzQ29udGFpbmVyOiBjb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuYWRkcmVzc0NvbnRhaW5lciksXG4gICAgICAgICAgdG9nZ2xlQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMudG9nZ2xlQWRkcmVzc0J1dHRvbiksXG4gICAgICAgICAgY2FuY2VsQnV0dG9uczogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLmNhbmNlbEFkZHJlc3NCdXR0b24pLFxuICAgICAgICAgIGRlbGV0ZUJ1dHRvbnM6IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5kZWxldGVBZGRyZXNzQnV0dG9uKSxcbiAgICAgICAgICBjb3VudHJ5U2VsZWN0czogY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLmFkZHJlc3NDb3VudHJ5U2VsZWN0KSxcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuXG4gIF9zZXR1cENvdW50cmllcygpIHtcbiAgICBpZiAoU2hvcGlmeSAmJiBTaG9waWZ5LkNvdW50cnlQcm92aW5jZVNlbGVjdG9yKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgICBuZXcgU2hvcGlmeS5Db3VudHJ5UHJvdmluY2VTZWxlY3RvcignQWRkcmVzc0NvdW50cnlOZXcnLCAnQWRkcmVzc1Byb3ZpbmNlTmV3Jywge1xuICAgICAgICBoaWRlRWxlbWVudDogJ0FkZHJlc3NQcm92aW5jZUNvbnRhaW5lck5ldycsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudHMuY291bnRyeVNlbGVjdHMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1JZCA9IHNlbGVjdC5kYXRhc2V0LmZvcm1JZDtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgICBuZXcgU2hvcGlmeS5Db3VudHJ5UHJvdmluY2VTZWxlY3RvcihgQWRkcmVzc0NvdW50cnlfJHtmb3JtSWR9YCwgYEFkZHJlc3NQcm92aW5jZV8ke2Zvcm1JZH1gLCB7XG4gICAgICAgICAgaGlkZUVsZW1lbnQ6IGBBZGRyZXNzUHJvdmluY2VDb250YWluZXJfJHtmb3JtSWR9YCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUFkZEVkaXRCdXR0b25DbGljayk7XG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50cy5jYW5jZWxCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDYW5jZWxCdXR0b25DbGljayk7XG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50cy5kZWxldGVCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEZWxldGVCdXR0b25DbGljayk7XG4gICAgfSk7XG4gIH1cblxuICBfdG9nZ2xlRXhwYW5kZWQodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLmV4cGFuZGVkLCAodGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLmV4cGFuZGVkKSA9PT0gJ2ZhbHNlJykudG9TdHJpbmcoKSk7XG4gIH1cblxuICBfaGFuZGxlQWRkRWRpdEJ1dHRvbkNsaWNrID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdGhpcy5fdG9nZ2xlRXhwYW5kZWQoY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgX2hhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdGhpcy5fdG9nZ2xlRXhwYW5kZWQoY3VycmVudFRhcmdldC5jbG9zZXN0KHNlbGVjdG9ycy5hZGRyZXNzQ29udGFpbmVyKS5xdWVyeVNlbGVjdG9yKGBbJHthdHRyaWJ1dGVzLmV4cGFuZGVkfV1gKSk7XG4gIH07XG5cbiAgX2hhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgaWYgKGNvbmZpcm0oY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5jb25maXJtTWVzc2FnZSkpKSB7XG4gICAgICBTaG9waWZ5LnBvc3RMaW5rKGN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXQsIHtcbiAgICAgICAgcGFyYW1ldGVyczogeyBfbWV0aG9kOiAnZGVsZXRlJyB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/customer.js\n"
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
  /******/ __webpack_modules__["./src/js/components/customer.js"]();
  /******/
  /******/
})();