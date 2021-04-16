import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(submitCallBack, popupSelector) {
    super(popupSelector)
    this._popup = document.querySelector(popupSelector)
    this._submit = submitCallBack
    this._form = this._popup.querySelector('.form')
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll('.form__input')
    this._inputsValues = {}
    inputs.forEach(input => {
      this._inputsValues[input.name] = input.value
    })
    return this._inputsValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', evt => {
      evt.preventDefault()
      this._submit(this._getInputValues())
      this.close()
    })
  }

  close() {
    this._form.reset()
    super.close()
  }

}
