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
    /***/ "./src/js/components/product-model.js":
      /*!********************************************!*\
  !*** ./src/js/components/product-model.js ***!
  \********************************************/
      /***/ () => {
        eval(
          "if (!customElements.get('product-model')) {\n  customElements.define(\n    'product-model',\n    class ProductModel extends DeferredMedia {\n      constructor() {\n        super();\n      }\n\n      loadContent() {\n        super.loadContent();\n\n        Shopify.loadFeatures([\n          {\n            name: 'model-viewer-ui',\n            version: '1.0',\n            onLoad: this.setupModelViewerUI.bind(this),\n          },\n        ]);\n      }\n\n      setupModelViewerUI(errors) {\n        if (errors) return;\n\n        this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector('model-viewer'));\n      }\n    }\n  );\n}\n\nwindow.ProductModel = {\n  loadShopifyXR() {\n    Shopify.loadFeatures([\n      {\n        name: 'shopify-xr',\n        version: '1.0',\n        onLoad: this.setupShopifyXR.bind(this),\n      },\n    ]);\n  },\n\n  setupShopifyXR(errors) {\n    if (errors) return;\n\n    if (!window.ShopifyXR) {\n      document.addEventListener('shopify_xr_initialized', () => this.setupShopifyXR());\n      return;\n    }\n\n    document.querySelectorAll('[id^=\"ProductJSON-\"]').forEach((modelJSON) => {\n      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));\n      modelJSON.remove();\n    });\n    window.ShopifyXR.setupXRElements();\n  },\n};\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  if (window.ProductModel) window.ProductModel.loadShopifyXR();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9wcm9kdWN0LW1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL2NvbXBvbmVudHMvcHJvZHVjdC1tb2RlbC5qcz9kZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdwcm9kdWN0LW1vZGVsJykpIHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICAgICdwcm9kdWN0LW1vZGVsJyxcbiAgICBjbGFzcyBQcm9kdWN0TW9kZWwgZXh0ZW5kcyBEZWZlcnJlZE1lZGlhIHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgfVxuXG4gICAgICBsb2FkQ29udGVudCgpIHtcbiAgICAgICAgc3VwZXIubG9hZENvbnRlbnQoKTtcblxuICAgICAgICBTaG9waWZ5LmxvYWRGZWF0dXJlcyhbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21vZGVsLXZpZXdlci11aScsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMS4wJyxcbiAgICAgICAgICAgIG9uTG9hZDogdGhpcy5zZXR1cE1vZGVsVmlld2VyVUkuYmluZCh0aGlzKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH1cblxuICAgICAgc2V0dXBNb2RlbFZpZXdlclVJKGVycm9ycykge1xuICAgICAgICBpZiAoZXJyb3JzKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5tb2RlbFZpZXdlclVJID0gbmV3IFNob3BpZnkuTW9kZWxWaWV3ZXJVSSh0aGlzLnF1ZXJ5U2VsZWN0b3IoJ21vZGVsLXZpZXdlcicpKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbndpbmRvdy5Qcm9kdWN0TW9kZWwgPSB7XG4gIGxvYWRTaG9waWZ5WFIoKSB7XG4gICAgU2hvcGlmeS5sb2FkRmVhdHVyZXMoW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnc2hvcGlmeS14cicsXG4gICAgICAgIHZlcnNpb246ICcxLjAnLFxuICAgICAgICBvbkxvYWQ6IHRoaXMuc2V0dXBTaG9waWZ5WFIuYmluZCh0aGlzKSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH0sXG5cbiAgc2V0dXBTaG9waWZ5WFIoZXJyb3JzKSB7XG4gICAgaWYgKGVycm9ycykgcmV0dXJuO1xuXG4gICAgaWYgKCF3aW5kb3cuU2hvcGlmeVhSKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzaG9waWZ5X3hyX2luaXRpYWxpemVkJywgKCkgPT4gdGhpcy5zZXR1cFNob3BpZnlYUigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiUHJvZHVjdEpTT04tXCJdJykuZm9yRWFjaCgobW9kZWxKU09OKSA9PiB7XG4gICAgICB3aW5kb3cuU2hvcGlmeVhSLmFkZE1vZGVscyhKU09OLnBhcnNlKG1vZGVsSlNPTi50ZXh0Q29udGVudCkpO1xuICAgICAgbW9kZWxKU09OLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5TaG9waWZ5WFIuc2V0dXBYUkVsZW1lbnRzKCk7XG4gIH0sXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5Qcm9kdWN0TW9kZWwpIHdpbmRvdy5Qcm9kdWN0TW9kZWwubG9hZFNob3BpZnlYUigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/product-model.js\n"
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
  /******/ __webpack_modules__["./src/js/components/product-model.js"]();
  /******/
  /******/
})();
