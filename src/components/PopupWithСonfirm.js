import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector)
    this._buttonSubmit = this._popup.querySelector('.confirmation-box__button')
    this._form = this._popup.querySelector('.confirmation-box__form')
    this._submit = submitCallback
    this._id = ''
    this._element = ''
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', evt => {
      evt.preventDefault()
      this._submit(this._id,  this._element)
    })
  }

  open(id, card) {
    super.open()
    this._id = id
    this._element = card
    this._buttonSubmit.focus()
  }

  renderWaiting(isLoading) {
    if(isLoading) {
      this._buttonSubmit.textContent = 'Удаляем...'
    } else {
      setTimeout(() => {
        this._buttonSubmit.textContent = 'Да'
      }, 300)
    }
  }

}
