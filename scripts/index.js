import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'
export { openPopupPhoto }


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
