const checkInput = (inputElement, formElement, selectors) => {
  const inputErrorMessage = formElement.querySelector(`.${inputElement.id}-error`)

  if (!inputElement.validity.valid) {
    //если не валидна то показываем сообщение, задаем стилизацию поля
    inputElement.classList.add(selectors.inputErrorClass)
    inputErrorMessage.classList.add(selectors.errorClass)
    inputErrorMessage.textContent = inputElement.validationMessage
  } else {
    inputElement.classList.remove(selectors.inputErrorClass)
    inputErrorMessage.classList.remove(selectors.errorClass)
    inputErrorMessage.textContent = ''
  }
}

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector))
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(inputElement, formElement, selectors)
      toggleButton(formElement, inputList, selectors) //проверяем инпут на ошибки
    })
    toggleButton(formElement, inputList, selectors)
  })
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};

const toggleButton = (formElement, inputList, selectors) => {
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector)
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

const enableValidation = selectors => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector))
  formList.forEach(formElement => {
    setEventListeners(formElement, selectors)
  })
}


enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
