import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(submitCallBack, popupSelector) {
    super(popupSelector)
    this._submit = submitCallBack
    this._form = this._popup.querySelector('.form')
    this._inputList = this._form.querySelectorAll('.form__input')
    this._buttonSubmit = this._form.querySelector('.form__button')
  }

  _getInputValues() {
    this._inputsValues = {}
    this._inputList.forEach(input => {
      this._inputsValues[input.name] = input.value
    })
    return this._inputsValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', evt => {
      evt.preventDefault()
      this._submit(this._getInputValues())
    })
  }

  close() {
    this._form.reset()
    super.close()
  }

  renderSaving(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...'
    } else {
      setTimeout(() => {
        this._buttonSubmit.textContent = 'Сохранить'
      }, 300)
    }
  }

  renderAdding(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Создаем...'
    } else {
      setTimeout(() => {
        this._buttonSubmit.textContent = 'Создать'
      }, 300)
    }
  }
}