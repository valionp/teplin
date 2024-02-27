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
    /***/ "./src/js/components/theme-editor.js":
      /*!*******************************************!*\
  !*** ./src/js/components/theme-editor.js ***!
  \*******************************************/
      /***/ () => {
        eval(
          "function hideProductModal() {\n  const productModal = document.querySelectorAll('product-modal[open]');\n  productModal && productModal.forEach((modal) => modal.hide());\n}\n\ndocument.addEventListener('shopify:block:select', function (event) {\n  hideProductModal();\n  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');\n  if (!blockSelectedIsSlide) return;\n\n  const parentSlideshowComponent = event.target.closest('slideshow-component');\n  parentSlideshowComponent.pause();\n\n  setTimeout(function () {\n    parentSlideshowComponent.slider.scrollTo({\n      left: event.target.offsetLeft,\n    });\n  }, 200);\n});\n\ndocument.addEventListener('shopify:block:deselect', function (event) {\n  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');\n  if (!blockDeselectedIsSlide) return;\n  const parentSlideshowComponent = event.target.closest('slideshow-component');\n  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();\n});\n\ndocument.addEventListener('shopify:section:load', () => {\n  hideProductModal();\n  const zoomOnHoverScript = document.querySelector('[id^=EnableZoomOnHover]');\n  if (!zoomOnHoverScript) return;\n  if (zoomOnHoverScript) {\n    const newScriptTag = document.createElement('script');\n    newScriptTag.src = zoomOnHoverScript.src;\n    zoomOnHoverScript.parentNode.replaceChild(newScriptTag, zoomOnHoverScript);\n  }\n});\n\ndocument.addEventListener('shopify:section:reorder', () => hideProductModal());\n\ndocument.addEventListener('shopify:section:select', () => hideProductModal());\n\ndocument.addEventListener('shopify:section:deselect', () => hideProductModal());\n\ndocument.addEventListener('shopify:inspector:activate', () => hideProductModal());\n\ndocument.addEventListener('shopify:inspector:deactivate', () => hideProductModal());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy90aGVtZS1lZGl0b3IuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXdlYnBhY2svLi9zcmMvanMvY29tcG9uZW50cy90aGVtZS1lZGl0b3IuanM/ZjExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoaWRlUHJvZHVjdE1vZGFsKCkge1xuICBjb25zdCBwcm9kdWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcm9kdWN0LW1vZGFsW29wZW5dJyk7XG4gIHByb2R1Y3RNb2RhbCAmJiBwcm9kdWN0TW9kYWwuZm9yRWFjaCgobW9kYWwpID0+IG1vZGFsLmhpZGUoKSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6YmxvY2s6c2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGhpZGVQcm9kdWN0TW9kYWwoKTtcbiAgY29uc3QgYmxvY2tTZWxlY3RlZElzU2xpZGUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXNob3dfX3NsaWRlJyk7XG4gIGlmICghYmxvY2tTZWxlY3RlZElzU2xpZGUpIHJldHVybjtcblxuICBjb25zdCBwYXJlbnRTbGlkZXNob3dDb21wb25lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnc2xpZGVzaG93LWNvbXBvbmVudCcpO1xuICBwYXJlbnRTbGlkZXNob3dDb21wb25lbnQucGF1c2UoKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBwYXJlbnRTbGlkZXNob3dDb21wb25lbnQuc2xpZGVyLnNjcm9sbFRvKHtcbiAgICAgIGxlZnQ6IGV2ZW50LnRhcmdldC5vZmZzZXRMZWZ0LFxuICAgIH0pO1xuICB9LCAyMDApO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6YmxvY2s6ZGVzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgYmxvY2tEZXNlbGVjdGVkSXNTbGlkZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlc2hvd19fc2xpZGUnKTtcbiAgaWYgKCFibG9ja0Rlc2VsZWN0ZWRJc1NsaWRlKSByZXR1cm47XG4gIGNvbnN0IHBhcmVudFNsaWRlc2hvd0NvbXBvbmVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdzbGlkZXNob3ctY29tcG9uZW50Jyk7XG4gIGlmIChwYXJlbnRTbGlkZXNob3dDb21wb25lbnQuYXV0b3BsYXlCdXR0b25Jc1NldFRvUGxheSkgcGFyZW50U2xpZGVzaG93Q29tcG9uZW50LnBsYXkoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaG9waWZ5OnNlY3Rpb246bG9hZCcsICgpID0+IHtcbiAgaGlkZVByb2R1Y3RNb2RhbCgpO1xuICBjb25zdCB6b29tT25Ib3ZlclNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZF49RW5hYmxlWm9vbU9uSG92ZXJdJyk7XG4gIGlmICghem9vbU9uSG92ZXJTY3JpcHQpIHJldHVybjtcbiAgaWYgKHpvb21PbkhvdmVyU2NyaXB0KSB7XG4gICAgY29uc3QgbmV3U2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbmV3U2NyaXB0VGFnLnNyYyA9IHpvb21PbkhvdmVyU2NyaXB0LnNyYztcbiAgICB6b29tT25Ib3ZlclNjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTY3JpcHRUYWcsIHpvb21PbkhvdmVyU2NyaXB0KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6c2VjdGlvbjpyZW9yZGVyJywgKCkgPT4gaGlkZVByb2R1Y3RNb2RhbCgpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTpzZWN0aW9uOnNlbGVjdCcsICgpID0+IGhpZGVQcm9kdWN0TW9kYWwoKSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6c2VjdGlvbjpkZXNlbGVjdCcsICgpID0+IGhpZGVQcm9kdWN0TW9kYWwoKSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3BpZnk6aW5zcGVjdG9yOmFjdGl2YXRlJywgKCkgPT4gaGlkZVByb2R1Y3RNb2RhbCgpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2hvcGlmeTppbnNwZWN0b3I6ZGVhY3RpdmF0ZScsICgpID0+IGhpZGVQcm9kdWN0TW9kYWwoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/theme-editor.js\n"
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
  /******/ __webpack_modules__["./src/js/components/theme-editor.js"]();
  /******/
  /******/
})();
