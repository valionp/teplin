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
    /***/ "./src/js/components/recipient-form.js":
      /*!*********************************************!*\
  !*** ./src/js/components/recipient-form.js ***!
  \*********************************************/
      /***/ () => {
        eval(
          "if (!customElements.get('recipient-form')) {\n  customElements.define(\n    'recipient-form',\n    class RecipientForm extends HTMLElement {\n      constructor() {\n        super();\n        this.recipientFieldsLiveRegion = this.querySelector(`#Recipient-fields-live-region-${this.dataset.sectionId}`);\n        this.checkboxInput = this.querySelector(`#Recipient-checkbox-${this.dataset.sectionId}`);\n        this.checkboxInput.disabled = false;\n        this.hiddenControlField = this.querySelector(`#Recipient-control-${this.dataset.sectionId}`);\n        this.hiddenControlField.disabled = true;\n        this.emailInput = this.querySelector(`#Recipient-email-${this.dataset.sectionId}`);\n        this.nameInput = this.querySelector(`#Recipient-name-${this.dataset.sectionId}`);\n        this.messageInput = this.querySelector(`#Recipient-message-${this.dataset.sectionId}`);\n        this.sendonInput = this.querySelector(`#Recipient-send-on-${this.dataset.sectionId}`);\n        this.offsetProperty = this.querySelector(`#Recipient-timezone-offset-${this.dataset.sectionId}`);\n        if (this.offsetProperty) this.offsetProperty.value = new Date().getTimezoneOffset().toString();\n\n        this.errorMessageWrapper = this.querySelector('.product-form__recipient-error-message-wrapper');\n        this.errorMessageList = this.errorMessageWrapper?.querySelector('ul');\n        this.errorMessage = this.errorMessageWrapper?.querySelector('.error-message');\n        this.defaultErrorHeader = this.errorMessage?.innerText;\n        this.currentProductVariantId = this.dataset.productVariantId;\n        this.addEventListener('change', this.onChange.bind(this));\n        this.onChange();\n      }\n\n      cartUpdateUnsubscriber = undefined;\n      variantChangeUnsubscriber = undefined;\n      cartErrorUnsubscriber = undefined;\n\n      connectedCallback() {\n        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {\n          if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {\n            this.resetRecipientForm();\n          }\n        });\n\n        this.variantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {\n          if (event.data.sectionId === this.dataset.sectionId) {\n            this.currentProductVariantId = event.data.variant.id.toString();\n          }\n        });\n\n        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartError, (event) => {\n          if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {\n            this.displayErrorMessage(event.message, event.errors);\n          }\n        });\n      }\n\n      disconnectedCallback() {\n        if (this.cartUpdateUnsubscriber) {\n          this.cartUpdateUnsubscriber();\n        }\n\n        if (this.variantChangeUnsubscriber) {\n          this.variantChangeUnsubscriber();\n        }\n\n        if (this.cartErrorUnsubscriber) {\n          this.cartErrorUnsubscriber();\n        }\n      }\n\n      onChange() {\n        if (this.checkboxInput.checked) {\n          this.enableInputFields();\n          this.recipientFieldsLiveRegion.innerText = window.accessibilityStrings.recipientFormExpanded;\n        } else {\n          this.clearInputFields();\n          this.disableInputFields();\n          this.clearErrorMessage();\n          this.recipientFieldsLiveRegion.innerText = window.accessibilityStrings.recipientFormCollapsed;\n        }\n      }\n\n      inputFields() {\n        return [this.emailInput, this.nameInput, this.messageInput, this.sendonInput];\n      }\n\n      disableableFields() {\n        return [...this.inputFields(), this.offsetProperty];\n      }\n\n      clearInputFields() {\n        this.inputFields().forEach((field) => (field.value = ''));\n      }\n\n      enableInputFields() {\n        this.disableableFields().forEach((field) => (field.disabled = false));\n      }\n\n      disableInputFields() {\n        this.disableableFields().forEach((field) => (field.disabled = true));\n      }\n\n      displayErrorMessage(title, body) {\n        this.clearErrorMessage();\n        this.errorMessageWrapper.hidden = false;\n        if (typeof body === 'object') {\n          this.errorMessage.innerText = this.defaultErrorHeader;\n          return Object.entries(body).forEach(([key, value]) => {\n            const errorMessageId = `RecipientForm-${key}-error-${this.dataset.sectionId}`;\n            const fieldSelector = `#Recipient-${key}-${this.dataset.sectionId}`;\n            const message = `${value.join(', ')}`;\n            const errorMessageElement = this.querySelector(`#${errorMessageId}`);\n            const errorTextElement = errorMessageElement?.querySelector('.error-message');\n            if (!errorTextElement) return;\n\n            if (this.errorMessageList) {\n              this.errorMessageList.appendChild(this.createErrorListItem(fieldSelector, message));\n            }\n\n            errorTextElement.innerText = `${message}.`;\n            errorMessageElement.classList.remove('hidden');\n\n            const inputElement = this[`${key}Input`];\n            if (!inputElement) return;\n\n            inputElement.setAttribute('aria-invalid', true);\n            inputElement.setAttribute('aria-describedby', errorMessageId);\n          });\n        }\n\n        this.errorMessage.innerText = body;\n      }\n\n      createErrorListItem(target, message) {\n        const li = document.createElement('li');\n        const a = document.createElement('a');\n        a.setAttribute('href', target);\n        a.innerText = message;\n        li.appendChild(a);\n        li.className = 'error-message';\n        return li;\n      }\n\n      clearErrorMessage() {\n        this.errorMessageWrapper.hidden = true;\n\n        if (this.errorMessageList) this.errorMessageList.innerHTML = '';\n\n        this.querySelectorAll('.recipient-fields .form__message').forEach((field) => {\n          field.classList.add('hidden');\n          const textField = field.querySelector('.error-message');\n          if (textField) textField.innerText = '';\n        });\n\n        [this.emailInput, this.messageInput, this.nameInput, this.sendonInput].forEach((inputElement) => {\n          inputElement.setAttribute('aria-invalid', false);\n          inputElement.removeAttribute('aria-describedby');\n        });\n      }\n\n      resetRecipientForm() {\n        if (this.checkboxInput.checked) {\n          this.checkboxInput.checked = false;\n          this.clearInputFields();\n          this.clearErrorMessage();\n        }\n      }\n    }\n  );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9yZWNpcGllbnQtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVjaXBpZW50LWZvcm0uanM/OWM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgncmVjaXBpZW50LWZvcm0nKSkge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gICAgJ3JlY2lwaWVudC1mb3JtJyxcbiAgICBjbGFzcyBSZWNpcGllbnRGb3JtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmVjaXBpZW50RmllbGRzTGl2ZVJlZ2lvbiA9IHRoaXMucXVlcnlTZWxlY3RvcihgI1JlY2lwaWVudC1maWVsZHMtbGl2ZS1yZWdpb24tJHt0aGlzLmRhdGFzZXQuc2VjdGlvbklkfWApO1xuICAgICAgICB0aGlzLmNoZWNrYm94SW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCNSZWNpcGllbnQtY2hlY2tib3gtJHt0aGlzLmRhdGFzZXQuc2VjdGlvbklkfWApO1xuICAgICAgICB0aGlzLmNoZWNrYm94SW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW5Db250cm9sRmllbGQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCNSZWNpcGllbnQtY29udHJvbC0ke3RoaXMuZGF0YXNldC5zZWN0aW9uSWR9YCk7XG4gICAgICAgIHRoaXMuaGlkZGVuQ29udHJvbEZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAjUmVjaXBpZW50LWVtYWlsLSR7dGhpcy5kYXRhc2V0LnNlY3Rpb25JZH1gKTtcbiAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCNSZWNpcGllbnQtbmFtZS0ke3RoaXMuZGF0YXNldC5zZWN0aW9uSWR9YCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAjUmVjaXBpZW50LW1lc3NhZ2UtJHt0aGlzLmRhdGFzZXQuc2VjdGlvbklkfWApO1xuICAgICAgICB0aGlzLnNlbmRvbklucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAjUmVjaXBpZW50LXNlbmQtb24tJHt0aGlzLmRhdGFzZXQuc2VjdGlvbklkfWApO1xuICAgICAgICB0aGlzLm9mZnNldFByb3BlcnR5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAjUmVjaXBpZW50LXRpbWV6b25lLW9mZnNldC0ke3RoaXMuZGF0YXNldC5zZWN0aW9uSWR9YCk7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldFByb3BlcnR5KSB0aGlzLm9mZnNldFByb3BlcnR5LnZhbHVlID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VXcmFwcGVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1mb3JtX19yZWNpcGllbnQtZXJyb3ItbWVzc2FnZS13cmFwcGVyJyk7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlTGlzdCA9IHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlcj8ucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLmVycm9yTWVzc2FnZVdyYXBwZXI/LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEVycm9ySGVhZGVyID0gdGhpcy5lcnJvck1lc3NhZ2U/LmlubmVyVGV4dDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdFZhcmlhbnRJZCA9IHRoaXMuZGF0YXNldC5wcm9kdWN0VmFyaWFudElkO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgIH1cblxuICAgICAgY2FydFVwZGF0ZVVuc3Vic2NyaWJlciA9IHVuZGVmaW5lZDtcbiAgICAgIHZhcmlhbnRDaGFuZ2VVbnN1YnNjcmliZXIgPSB1bmRlZmluZWQ7XG4gICAgICBjYXJ0RXJyb3JVbnN1YnNjcmliZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmNhcnRVcGRhdGVVbnN1YnNjcmliZXIgPSBzdWJzY3JpYmUoUFVCX1NVQl9FVkVOVFMuY2FydFVwZGF0ZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ3Byb2R1Y3QtZm9ybScgJiYgZXZlbnQucHJvZHVjdFZhcmlhbnRJZC50b1N0cmluZygpID09PSB0aGlzLmN1cnJlbnRQcm9kdWN0VmFyaWFudElkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UmVjaXBpZW50Rm9ybSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YXJpYW50Q2hhbmdlVW5zdWJzY3JpYmVyID0gc3Vic2NyaWJlKFBVQl9TVUJfRVZFTlRTLnZhcmlhbnRDaGFuZ2UsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnNlY3Rpb25JZCA9PT0gdGhpcy5kYXRhc2V0LnNlY3Rpb25JZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvZHVjdFZhcmlhbnRJZCA9IGV2ZW50LmRhdGEudmFyaWFudC5pZC50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXJ0VXBkYXRlVW5zdWJzY3JpYmVyID0gc3Vic2NyaWJlKFBVQl9TVUJfRVZFTlRTLmNhcnRFcnJvciwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ3Byb2R1Y3QtZm9ybScgJiYgZXZlbnQucHJvZHVjdFZhcmlhbnRJZC50b1N0cmluZygpID09PSB0aGlzLmN1cnJlbnRQcm9kdWN0VmFyaWFudElkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvck1lc3NhZ2UoZXZlbnQubWVzc2FnZSwgZXZlbnQuZXJyb3JzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FydFVwZGF0ZVVuc3Vic2NyaWJlcikge1xuICAgICAgICAgIHRoaXMuY2FydFVwZGF0ZVVuc3Vic2NyaWJlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFyaWFudENoYW5nZVVuc3Vic2NyaWJlcikge1xuICAgICAgICAgIHRoaXMudmFyaWFudENoYW5nZVVuc3Vic2NyaWJlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FydEVycm9yVW5zdWJzY3JpYmVyKSB7XG4gICAgICAgICAgdGhpcy5jYXJ0RXJyb3JVbnN1YnNjcmliZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVJbnB1dEZpZWxkcygpO1xuICAgICAgICAgIHRoaXMucmVjaXBpZW50RmllbGRzTGl2ZVJlZ2lvbi5pbm5lclRleHQgPSB3aW5kb3cuYWNjZXNzaWJpbGl0eVN0cmluZ3MucmVjaXBpZW50Rm9ybUV4cGFuZGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dEZpZWxkcygpO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZUlucHV0RmllbGRzKCk7XG4gICAgICAgICAgdGhpcy5jbGVhckVycm9yTWVzc2FnZSgpO1xuICAgICAgICAgIHRoaXMucmVjaXBpZW50RmllbGRzTGl2ZVJlZ2lvbi5pbm5lclRleHQgPSB3aW5kb3cuYWNjZXNzaWJpbGl0eVN0cmluZ3MucmVjaXBpZW50Rm9ybUNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dEZpZWxkcygpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLmVtYWlsSW5wdXQsIHRoaXMubmFtZUlucHV0LCB0aGlzLm1lc3NhZ2VJbnB1dCwgdGhpcy5zZW5kb25JbnB1dF07XG4gICAgICB9XG5cbiAgICAgIGRpc2FibGVhYmxlRmllbGRzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaW5wdXRGaWVsZHMoKSwgdGhpcy5vZmZzZXRQcm9wZXJ0eV07XG4gICAgICB9XG5cbiAgICAgIGNsZWFySW5wdXRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZHMoKS5mb3JFYWNoKChmaWVsZCkgPT4gKGZpZWxkLnZhbHVlID0gJycpKTtcbiAgICAgIH1cblxuICAgICAgZW5hYmxlSW5wdXRGaWVsZHMoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWFibGVGaWVsZHMoKS5mb3JFYWNoKChmaWVsZCkgPT4gKGZpZWxkLmRpc2FibGVkID0gZmFsc2UpKTtcbiAgICAgIH1cblxuICAgICAgZGlzYWJsZUlucHV0RmllbGRzKCkge1xuICAgICAgICB0aGlzLmRpc2FibGVhYmxlRmllbGRzKCkuZm9yRWFjaCgoZmllbGQpID0+IChmaWVsZC5kaXNhYmxlZCA9IHRydWUpKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0aXRsZSwgYm9keSkge1xuICAgICAgICB0aGlzLmNsZWFyRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlV3JhcHBlci5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IHRoaXMuZGVmYXVsdEVycm9ySGVhZGVyO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhib2R5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZUlkID0gYFJlY2lwaWVudEZvcm0tJHtrZXl9LWVycm9yLSR7dGhpcy5kYXRhc2V0LnNlY3Rpb25JZH1gO1xuICAgICAgICAgICAgY29uc3QgZmllbGRTZWxlY3RvciA9IGAjUmVjaXBpZW50LSR7a2V5fS0ke3RoaXMuZGF0YXNldC5zZWN0aW9uSWR9YDtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHt2YWx1ZS5qb2luKCcsICcpfWA7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAjJHtlcnJvck1lc3NhZ2VJZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dEVsZW1lbnQgPSBlcnJvck1lc3NhZ2VFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICAgICAgaWYgKCFlcnJvclRleHRFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yTWVzc2FnZUxpc3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRXJyb3JMaXN0SXRlbShmaWVsZFNlbGVjdG9yLCBtZXNzYWdlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVycm9yVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7bWVzc2FnZX0uYDtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXNbYCR7a2V5fUlucHV0YF07XG4gICAgICAgICAgICBpZiAoIWlucHV0RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKTtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBlcnJvck1lc3NhZ2VJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBib2R5O1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVFcnJvckxpc3RJdGVtKHRhcmdldCwgbWVzc2FnZSkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgdGFyZ2V0KTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBtZXNzYWdlO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2Vycm9yLW1lc3NhZ2UnO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyRXJyb3JNZXNzYWdlKCkge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVdyYXBwZXIuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5lcnJvck1lc3NhZ2VMaXN0KSB0aGlzLmVycm9yTWVzc2FnZUxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcucmVjaXBpZW50LWZpZWxkcyAuZm9ybV9fbWVzc2FnZScpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gZmllbGQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKTtcbiAgICAgICAgICBpZiAodGV4dEZpZWxkKSB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFt0aGlzLmVtYWlsSW5wdXQsIHRoaXMubWVzc2FnZUlucHV0LCB0aGlzLm5hbWVJbnB1dCwgdGhpcy5zZW5kb25JbnB1dF0uZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgZmFsc2UpO1xuICAgICAgICAgIGlucHV0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0UmVjaXBpZW50Rm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5jaGVja2JveElucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsZWFySW5wdXRGaWVsZHMoKTtcbiAgICAgICAgICB0aGlzLmNsZWFyRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/recipient-form.js\n"
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
  /******/ __webpack_modules__["./src/js/components/recipient-form.js"]();
  /******/
  /******/
})();
