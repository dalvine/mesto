export default class Card {
  constructor({ name, link, _id, likes, owner }, //obj
    templateElement, // DOM-element
    handleCardClick, //func
    handleDelete, //func
    checkLike, //func
    addLike, //func
    removeLike, // func
    checkCardOwnership //func
  ) {
    this._name = name
    this._link = link
    this._id = _id
    this._likes = likes
    this._template = templateElement
    this._handleCardClick = handleCardClick
    this._handleDelete = handleDelete
    this._owner = owner
    this._checkLike = checkLike
    this._addLike = addLike
    this._removeLike = removeLike
    this._checkCardOwnership = checkCardOwnership
  }

  _getTemplate() {
    return this._template.querySelector('.place').cloneNode(true)
  }

  _setEventListeners(isOwner) {
    this._like = this._view.querySelector('.place__like')
    this._like.addEventListener('click', () => {
      if (this._inLiked) {
        this._removeLike(this._id, this._like, this._countLike)
        this._inLiked = false
      } else {
        this._addLike(this._id, this._like, this._countLike)
        this._inLiked = true
      }
    })
    this._view.querySelector('.place__photo').addEventListener('click', () => this._handleCardClick())
    if (isOwner) this._view.querySelector('.place__delete')
      .addEventListener('click', () => this._handleDelete(this._id, this._view))
  }

  _setMyLike() {
    if (this._checkLike(this._likes)) {
      this._view.querySelector('.place__like').classList.add('place__like_active')
      this._inLiked = true
    } else {
      this._view.querySelector('.place__like').classList.remove('place__like_active')
      this._inLiked = false
    }
  }

  _fillCard() {
    const placePhoto = this._view.querySelector('.place__photo')
    placePhoto.src = this._link
    placePhoto.alt = this._name
    this._view.querySelector('.place__title').textContent = this._name
  }

  createCard() {
    this._view = this._getTemplate()
    this._fillCard()
    this._addCountLike()
    this._setMyLike()
    this._toggleDeleteButton()
    this._setEventListeners(this._checkCardOwnership(this._owner))
    return this._view
  }

  _addCountLike() {
    this._countLike = this._view.querySelector('.place__like-count')
    this._countLike.textContent = this._likes.length
  }

  _toggleDeleteButton() {
    if (!this._checkCardOwnership(this._owner)) {
      this._view.querySelector('.place__delete').remove()
    }
  }
}
