export { Card }
import { openPopupPhoto } from './index.js'

class Card {
  constructor(cardList, templateElement) {
    this._name = cardList.name;
    this._link = cardList.link;
    this._template = templateElement;
  }

  _getTemplate() {
    return this._template.querySelector('.place').cloneNode(true)
  } //получаем разметку template-элемента

  _setEventListeners() {
    this._view.querySelector('.place__like').addEventListener('click', () => this._handleLike())
    this._view.querySelector('.place__photo').addEventListener('click', () => this._hadleOpenPopup())
    this._view.querySelector('.place__delete').addEventListener('click', () => this._handleDelete())
  } //накладываем слушателей

  _handleLike() {
    this._view.querySelector('.place__like').classList.toggle('place__like_active')
  } // обрабатываем like

  _handleDelete() {
    this._view.remove()
  } // обрабатываем удаление

  _hadleOpenPopup() {
    openPopupPhoto(this._link, this._name)
  } // обрабатываем открытие попапа

  _fillCard() {
    const placePhoto = this._view.querySelector('.place__photo')
    placePhoto.src = this._link
    placePhoto.alt = this._name
    this._view.querySelector('.place__title').textContent = this._name
  } //заполняем карту

  createCard() {
    this._view = this._getTemplate()
    this._fillCard(this._view)
    this._setEventListeners(this._view)
    return this._view
  } //создаем карточку
}
