import {
  editProfileButton, formEditAuthor, formAddPlace,
  addPlaceButton, configForValidation,
  nameUserSelector, jobUserSelector, avatarUserSelector,
  buttonEditSelector, changeAvatarButton, formChangeAvatar,
  isLoadingPageFigure, main
} from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js'
import { fillFormAuthor, createCard, getMessage } from '../utils/utils.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import './index.css'
import PopupWithConfirm from '../components/PopupWithСonfirm.js'

export { userInfo, popupWithConfirm, api, popupWithImage }

const addPlaceFormValidation = new FormValidator(configForValidation, formAddPlace)
const formAuthorFormValidation = new FormValidator(configForValidation, formEditAuthor)
const formChangeAvatarValidation = new FormValidator(configForValidation, formChangeAvatar)

const popupWithImage = new PopupWithImage('.popup_content_photo');
const userInfo = new UserInfo({
  nameUserSelector: nameUserSelector,
  jobUserSelector: jobUserSelector,
  avatarUserSelector: avatarUserSelector,
  buttonEditSelector: buttonEditSelector,
})

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: 'ee54480d-8407-451a-93a4-4101fced51f5',
    'Content-Type': 'application/json'
  }
});

const cardList = new Section({
  renderer: (element) => {
    const cardElement = createCard(element)
    return cardElement.createCard()
  },
  containerSelector: '.places__list'
}
);

  (function() {
    main.classList.add('main_hidden')
    isLoadingPageFigure.classList.add('loading-page_visible')
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(value => {
        const [initialCards, userData] = value
        userInfo.saveUserInfo(userData)
        userInfo.setUserInfo(userData)
        cardList.renderItems(initialCards.reverse())
      })
      .catch(err => console.log(err))
      .finally(() => {
        main.classList.remove('main_hidden')
        isLoadingPageFigure.classList.remove('loading-page_visible')
      })
  })();



const popupFormAuthor = new PopupWithForm(
  (inputValues) => {
    popupFormAuthor.renderWaiting(true)
    api.editUserInfo({
      name: inputValues['author-fullname'],
      about: inputValues['author-job']
    })
      .then(result => {
        userInfo.setUserInfo(result)
        popupFormAuthor.close()
      })
      .catch(err => getMessage(err))
      .finally(() => {
        popupFormAuthor.renderWaiting(false)
      })
  },
  '.popup_content_form-author',  // popupSelector
  'Сохранение...' //textWaiting
)


const popupAddPlace = new PopupWithForm(
  (inputValues) => {
    popupAddPlace.renderWaiting(true)
    api.addCard({
      name: inputValues['namePlace'],
      link: inputValues['urlPlace']
    })
      .then(result => {
        const card = createCard(result)
        cardList.addItem(card.createCard())
        popupAddPlace.close()
      })
      .catch(err => getMessage(err))
      .finally(() => {
        popupAddPlace.renderWaiting(false)
      })
  },
  '.popup_content_add-place', //popupSelector
  'Добавляем...' //textWaiting
)

const popupWithConfirm = new PopupWithConfirm(
  '.popup_content_confirm-deletion',
  (id, card) => {
    popupWithConfirm.renderWaiting(true)
    api.deleteCard(id)
      .then((res) => {
        console.log(res.message)
        card.remove()
        popupWithConfirm.close()
      })
      .catch(err => {
        getMessage(err)
      })
      .finally(() => popupWithConfirm.renderWaiting(false))
  }
)

const popupWithChangeAvatar = new PopupWithForm(
  (inputValues) => {
    popupWithChangeAvatar.renderWaiting(true)
    api.changeAvatar(inputValues['urlAvatar'])
      .then(result => {
        userInfo.changeAvatar(result.avatar)
        popupWithChangeAvatar.close()
      })
      .catch(err => getMessage(err))
      .finally(() => popupWithChangeAvatar.renderWaiting(false))
  },
  '.popup_content_change-avatar',  // popupSelector
  'Сохраняем...' //textWaiting
)

formAuthorFormValidation.enableValidation()
addPlaceFormValidation.enableValidation()
formChangeAvatarValidation.enableValidation()
popupWithConfirm.setEventListeners()



popupWithImage.setEventListeners()
popupFormAuthor.setEventListeners()
popupAddPlace.setEventListeners()
popupWithChangeAvatar.setEventListeners()


editProfileButton.addEventListener('click', () => {
  fillFormAuthor()
  formAuthorFormValidation.checkValidation()
  popupFormAuthor.open()
})


addPlaceButton.addEventListener('click', () => {
  addPlaceFormValidation.checkValidation()
  popupAddPlace.open()
})

changeAvatarButton.addEventListener('click', () => {
  formChangeAvatarValidation.checkValidation()
  popupWithChangeAvatar.open()
})


