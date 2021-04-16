import {
  editProfileButton, formEditAuthor, formAddPlace, addPlaceButton,
  fullNameAuthor, jobAuthor, placeTemplate, configForValidation
} from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { initialCards } from '../utils/initial-сards.js'
import { fillFormAuthor } from '../utils/utils.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import './index.css'


const addPlaceFormValidation = new FormValidator(configForValidation, formAddPlace)
const formAuthorFormValidation = new FormValidator(configForValidation, formEditAuthor)
const cardList = new Section({
  items: initialCards,
  renderer: (element) => {
    const cardElement = new Card({
      name: element.name,
      link: element.link,
    },
      placeTemplate,
      () => {
        const popupWithImage = new PopupWithImage({
          name: element.name,
          link: element.link,
        }, '.popup_content_photo')
        popupWithImage.open()
        popupWithImage.setEventListeners()
      })
    return cardElement.createCard()
  }
},
  '.places__list'
)

const popupFormAuthor = new PopupWithForm(
  (inputValues) => {
    fullNameAuthor.textContent = inputValues['author-fullname'],
      jobAuthor.textContent = inputValues['author-job']
  },
  '.popup_content_form-author'
)

const popupAddPlace = new PopupWithForm(
  (inputValues) => {
    const card = new Card(
      {
        name: inputValues['namePlace'],
        link: inputValues['urlPlace']
      },
      placeTemplate,
      () => {
        const popupWithImage = new PopupWithImage({
          name: element.name,
          link: element.link,
        }, '.popup_content_photo')
        popupWithImage.open()
        popupWithImage.setEventListeners()
      })
    cardList.addItem(card.createCard())
  },
  '.popup_content_add-place'
)

popupFormAuthor.setEventListeners()
popupAddPlace.setEventListeners()
editProfileButton.addEventListener('click', () => {
  fillFormAuthor()
  formAuthorFormValidation.enableValidation()
  popupFormAuthor.open()
})
addPlaceButton.addEventListener('click', () => {
  addPlaceFormValidation.enableValidation()
  popupAddPlace.open()
})
cardList.renderItems()






