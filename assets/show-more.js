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
    /***/ "./src/js/components/show-more.js":
      /*!****************************************!*\
  !*** ./src/js/components/show-more.js ***!
  \****************************************/
      /***/ () => {
        eval(
          "if (!customElements.get('show-more-button')) {\n  customElements.define(\n    'show-more-button',\n    class ShowMoreButton extends HTMLElement {\n      constructor() {\n        super();\n        const button = this.querySelector('button');\n        button.addEventListener('click', (event) => {\n          this.expandShowMore(event);\n          const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');\n          if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {\n            nextElementToFocus.querySelector('input').focus();\n          }\n        });\n      }\n      expandShowMore(event) {\n        const parentDisplay = event.target.closest('[id^=\"Show-More-\"]').closest('.parent-display');\n        const parentWrap = parentDisplay.querySelector('.parent-wrap');\n        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));\n        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));\n        if (!this.querySelector('.label-show-less')) {\n          this.classList.add('hidden');\n        }\n      }\n    }\n  );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zaG93LW1vcmUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4td2VicGFjay8uL3NyYy9qcy9jb21wb25lbnRzL3Nob3ctbW9yZS5qcz9mYWFlIl0sInNvdXJjZXNDb250ZW50IjpbImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdzaG93LW1vcmUtYnV0dG9uJykpIHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICAgICdzaG93LW1vcmUtYnV0dG9uJyxcbiAgICBjbGFzcyBTaG93TW9yZUJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmV4cGFuZFNob3dNb3JlKGV2ZW50KTtcbiAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudFRvRm9jdXMgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnBhcmVudC1kaXNwbGF5JykucXVlcnlTZWxlY3RvcignLnNob3ctbW9yZS1pdGVtJyk7XG4gICAgICAgICAgaWYgKG5leHRFbGVtZW50VG9Gb2N1cyAmJiAhbmV4dEVsZW1lbnRUb0ZvY3VzLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgJiYgbmV4dEVsZW1lbnRUb0ZvY3VzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykpIHtcbiAgICAgICAgICAgIG5leHRFbGVtZW50VG9Gb2N1cy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGV4cGFuZFNob3dNb3JlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERpc3BsYXkgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2lkXj1cIlNob3ctTW9yZS1cIl0nKS5jbG9zZXN0KCcucGFyZW50LWRpc3BsYXknKTtcbiAgICAgICAgY29uc3QgcGFyZW50V3JhcCA9IHBhcmVudERpc3BsYXkucXVlcnlTZWxlY3RvcignLnBhcmVudC13cmFwJyk7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmxhYmVsLXRleHQnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKTtcbiAgICAgICAgcGFyZW50RGlzcGxheS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1tb3JlLWl0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKTtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1zaG93LWxlc3MnKSkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/show-more.js\n"
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
  /******/ __webpack_modules__["./src/js/components/show-more.js"]();
  /******/
  /******/
})();
