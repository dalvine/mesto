import {
  editProfileButton, formEditAuthor, fullNameAuthorInput,
  jobAuthorInput, formAddPlace, namePlaceInput, linkPlaceInput,
  addPlaceButton, btnClosePopupWithFormEditAuthor, btnClosePopupWithAddPlace,
  fullNameAuthor, jobAuthor, popupWithFormEditAuthor, popupWithAddPlace,
  placesList, placeTemplate, popupPhoto, btnClosePopupPhoto,
  popupPhotoContentImg, popupPhotoContentCaption, configForValidation
} from './constants.js'
import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'
import { initialCards } from './initial-сards.js'
import { openPopup, closePopup } from './utils.js'
export { openPopupPhoto }
export { closePopupOverlay, handleEscPress }


const addPlaceFormValidation = new FormValidator(configForValidation, formAddPlace)
const formAuthorFormValidation = new FormValidator(configForValidation, formEditAuthor)

const submitEditProfileForm = evt => {
  evt.preventDefault();
  fullNameAuthor.textContent = fullNameAuthorInput.value;
  jobAuthor.textContent = jobAuthorInput.value;
  closePopup(popupWithFormEditAuthor);
}

const submitAddCardForm = evt => {
  evt.preventDefault();
  const place = { name: namePlaceInput.value, link: linkPlaceInput.value }
  const cardElement = new Card(place, placeTemplate)
  const newCard = cardElement.createCard()
  addCard(newCard)
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
  closePopup(popupWithAddPlace);
}

const closePopupOverlay = evt => {
  closePopup(evt.currentTarget)
}

const handleEscPress = (evt) => {
  const openedPopup = document.querySelector('.popup_opened')
  const EscKey = 27;
  if (evt.keyCode === EscKey) {
    closePopup(openedPopup)
  }
}

const addCard = placeElement => {
  placesList.prepend(placeElement);
}

const openPopupPhoto = (link, name) => {
  popupPhotoContentImg.src = link;
  popupPhotoContentImg.alt = name;
  popupPhotoContentCaption.textContent = name;
  openPopup(popupPhoto);
}

const fillFormAuthor = () => {
  fullNameAuthorInput.value = fullNameAuthor.textContent;
  jobAuthorInput.value = jobAuthor.textContent;
}

initialCards.forEach(place => {
  const cardElement = new Card(place, placeTemplate)
  addCard(cardElement.createCard());
});

formEditAuthor.addEventListener('submit', submitEditProfileForm);
editProfileButton.addEventListener('click', () => {
  openPopup(popupWithFormEditAuthor)
  fillFormAuthor()
  formAuthorFormValidation.enableValidation()
});
btnClosePopupWithFormEditAuthor.addEventListener('click', () => closePopup(popupWithFormEditAuthor));
addPlaceButton.addEventListener('click', () => {
  addPlaceFormValidation.enableValidation()
  openPopup(popupWithAddPlace)
});
formAddPlace.addEventListener('submit', submitAddCardForm);
btnClosePopupWithAddPlace.addEventListener('click', () => closePopup(popupWithAddPlace));
btnClosePopupPhoto.addEventListener('click', () => closePopup(popupPhoto));
fillFormAuthor()
