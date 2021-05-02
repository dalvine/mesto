export { FormValidator }

class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = formElement;
  }

  _checkValidInput(inputElement) {
    const inputErrorMessage = this._form.querySelector(`.${inputElement.id}-error`)

    if (!inputElement.validity.valid) {
      this._activateError(inputElement, inputErrorMessage)
    } else {
      this._disableError(inputElement, inputErrorMessage)
    }
  }

  _activateError(inputElement, inputErrorMessage) {
    inputElement.classList.add(this._inputErrorClass)
    inputErrorMessage.classList.add(this._errorClass)
    inputErrorMessage.textContent = inputElement.validationMessage
  }

  _disableError(inputElement, inputErrorMessage) {
    inputElement.classList.remove(this._inputErrorClass)
    inputErrorMessage.classList.remove(this._errorClass)
    inputErrorMessage.textContent = ''
  }

  _removeErrorInput() {

  }

  _toggleButtonSubmit(inputList) {
    const buttonElement = this._form.querySelector(this._submitButtonSelector)

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


  _setEventListeners(inputElement, inputList) {
    inputElement.addEventListener('input', () => {
      this._checkValidInput(inputElement)
      this._toggleButtonSubmit(inputList)
    })
  }


  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    inputList.forEach(inputElement => {
      this._checkValidInput(inputElement)
      this._setEventListeners(inputElement, inputList)
    })
    this._toggleButtonSubmit(inputList)
  }

  checkValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    inputList.forEach(inputElement => {
      this._checkValidInput(inputElement)
    })
    this._toggleButtonSubmit(inputList)
  }
}
