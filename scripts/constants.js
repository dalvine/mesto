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
const configForValidation = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
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

const openPopup = popup => {
  const popupContainer = popup.firstElementChild
  popupContainer.addEventListener('mousedown', evt => evt.stopPropagation())
  // RUS - событие 'mousedown' т.к. при выделении текста, если курсор выходит за пределы попапа, то он закрывается
  // ENG - event 'mousedown' because when selecting text, if the cursor goes beyond the popup, then it is closed
  popup.addEventListener('mousedown', closePopupOverlay)
  document.addEventListener('keydown', handleEscPress)
  popup.classList.add('popup_opened');
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay)
  document.removeEventListener('keydown', handleEscPress)
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
