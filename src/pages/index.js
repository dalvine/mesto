import {
  editProfileButton, formEditAuthor, formAddPlace,
  addPlaceButton, placeTemplate, configForValidation,
  nameUserSelector, jobUserSelector
} from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js'
import { initialCards } from '../utils/initial-сards.js'
import { fillFormAuthor, createCard } from '../utils/utils.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import './index.css'

export const userInfo = new UserInfo({
  nameUserSelector: nameUserSelector,
  jobUserSelector: jobUserSelector
})
const addPlaceFormValidation = new FormValidator(configForValidation, formAddPlace)
const formAuthorFormValidation = new FormValidator(configForValidation, formEditAuthor)
const popupWithImage = new PopupWithImage('.popup_content_photo');

const cardList = new Section({
  items: initialCards,
  renderer: (element) => {
    const cardElement = createCard({
      name: element.name,
      link: element.link,
    },
      placeTemplate,
      () => popupWithImage.open(element)
    )
    return cardElement.createCard()
  }
},
  '.places__list'
)

const popupFormAuthor = new PopupWithForm(
  (inputValues) => {
    userInfo.setUserInfo({
      name: inputValues['author-fullname'],
      job: inputValues['author-job']
    })
  },
  '.popup_content_form-author'
)

const popupAddPlace = new PopupWithForm(
  (inputValues) => {
    const card = createCard(
      {
        name: inputValues['namePlace'],
        link: inputValues['urlPlace']
      },
      placeTemplate,
      () => {
        popupWithImage.open({
          name: inputValues['namePlace'],
          link: inputValues['urlPlace']
        })
      })
    cardList.addItem(card.createCard())
  },
  '.popup_content_add-place'
)

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: 'ee54480d-8407-451a-93a4-4101fced51f5',
    'Content-Type': 'application/json'
  }
});

fillFormAuthor()
formAuthorFormValidation.enableValidation()
addPlaceFormValidation.enableValidation()
popupWithImage.setEventListeners()
popupFormAuthor.setEventListeners()
popupAddPlace.setEventListeners()
editProfileButton.addEventListener('click', () => {
  fillFormAuthor()
  popupFormAuthor.open()
})
addPlaceButton.addEventListener('click', () => {
  popupAddPlace.open()
})
cardList.renderItems()






