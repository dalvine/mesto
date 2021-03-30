export {FormValidator}

class FormValidator {
  constructor(config, formElement) {
    this._formSelector = this.formSelector;
    this._inputSelector = this.inputSelector;
    this._submitButtonSelector = this.submitButtonSelector;
    this._inactiveButtonClass = this.inactiveButtonClass;
    this._inputErrorClass = this.inputErrorClass;
    this._errorClass = this.errorClass;
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector))
    formList.forEach(formElement => {
      this._addEventListeners(formElement)
    })
  }

  _checkValidInput(formElement, inputElement) {
    const inputErrorMessage = formElement.querySelector(`.${inputElement.id}-error`)

    if(!inputElement.validity.valid) {
      inputElement.classList.add(this._inputErrorClass)
      inputErrorMessage.classList.add(this._errorClass)
      inputErrorMessage.textContent = inputElement.validationMessage
    } else {
      inputElement.classList.remove(this._inputErrorClass)
      inputErrorMessage.classList.remove(this._errorClass)
      inputErrorMessage.textContent = ''
    }
  }

  _toggleButtonSubmit(formElement, inputList) {
    const buttonElement = formElement.querySelector(this._submitButtonSelector)

    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass)
      buttonElement.setAttribute('disabled', true)
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass)
      buttonElement.removeAttribute('disabled')
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid)
  }

  _addEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector))
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkValidInput(formElement, inputElement)
        this._toggleButtonSubmit(formElement, inputList)
      })
      this._toggleButtonSubmit(formElement, inputList)
    })
  }
}
