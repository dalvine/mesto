const page = document.querySelector('.page');
const editProfileButton = page.querySelector('.author__button-edit');
const formEditAuthor = page.querySelector('.form[name=formAuthor]');
const fullNameAuthorInput = formEditAuthor.querySelector('.form__input_content_fullname');
const jobAuthorInput = formEditAuthor.querySelector('.form__input_content_job');
const formAddPlace = page.querySelector('.form[name=formAddPlace]');
const namePlaceInput = formAddPlace.querySelector('.form__input_content_name-place');
const linkPlaceInput = formAddPlace.querySelector('.form__input_content_link-image');
const addPlaceButton = page.querySelector('.profile__button-add');
const btnClosePopupWithFormEditAuthor = page.querySelector('.popup__close_content_form-author');
const btnClosePopupWithAddPlace = page.querySelector('.popup__close_content_form-add-place');
const fullNameAuthor = page.querySelector('.author__fullname');
const jobAuthor = page.querySelector('.author__job');
const popupWithFormEditAuthor = page.querySelector('.popup_content_form-author');
const popupWithAddPlace = page.querySelector('.popup_content_add-place');
const placesList = page.querySelector('.places__list');
const placeTemplate = page.querySelector('#list-place').content;
const popupPhoto = page.querySelector('.popup_content_photo');
const btnClosePopupPhoto = popupPhoto.querySelector('.popup__close_content_photo');
const popupPhotoContentImg = popupPhoto.querySelector('.popup__photo');
const popupPhotoContentCaption = popupPhoto.querySelector('.popup__caption');

function submitEditProfileForm(evt) {
  evt.preventDefault();
  fullNameAuthor.textContent = fullNameAuthorInput.value;
  jobAuthor.textContent = jobAuthorInput.value;
  closePopup(popupWithFormEditAuthor);
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const newPlace = [];
  newPlace.name = namePlaceInput.value;
  newPlace.link = linkPlaceInput.value;
  addCard(createCard(newPlace));
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
  closePopup(popupWithAddPlace);
}

function openPopup(popupContent) {
  popupContent.classList.add('popup_opened');
}

function closePopup(popupContent) {
  popupContent.classList.remove('popup_opened');
}

function createCard(place) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  const placePhoto = placeElement.querySelector('.place__photo');
  placePhoto.src = place.link;
  placePhoto.alt = place.name;
  placeElement.querySelector('.place__title').textContent = place.name;
  return placeElement;
}

function addCard(placeElement) {
  placeElement.querySelector('.place__like').addEventListener('click', evt => {
    const evtTarget = evt.target;
    evtTarget.classList.toggle('place__like_active');
  });
  placeElement.querySelector('.place__photo').addEventListener('click', evt => {
    const evtTarget = evt.target;
    openPopupPhoto(evtTarget.src, evtTarget.alt);
  });
  placeElement.querySelector('.place__delete').addEventListener('click', evt => {
    const evtTarget = evt.target;
    const place = evtTarget.closest('.place');
    place.remove();
  });
  placesList.prepend(placeElement);
}

function openPopupPhoto(link, name) {
  popupPhotoContentImg.src = link;
  popupPhotoContentImg.alt = name;
  popupPhotoContentCaption.textContent = name;
  openPopup(popupPhoto);
}


initialCards.forEach(place => {
  addCard(createCard(place));
});
formEditAuthor.addEventListener('submit', submitEditProfileForm);
editProfileButton.addEventListener('click', () => {
  openPopup(popupWithFormEditAuthor);
  fullNameAuthorInput.value = fullNameAuthor.textContent;
  jobAuthorInput.value = jobAuthor.textContent;
});
btnClosePopupWithFormEditAuthor.addEventListener('click', () => closePopup(popupWithFormEditAuthor));
addPlaceButton.addEventListener('click', () => openPopup(popupWithAddPlace));
formAddPlace.addEventListener('submit', submitAddCardForm);
btnClosePopupWithAddPlace.addEventListener('click', () => closePopup(popupWithAddPlace));
btnClosePopupPhoto.addEventListener('click', () => closePopup(popupPhoto));
