export {
  editProfileButton, formEditAuthor, fullNameAuthorInput,
  jobAuthorInput, formAddPlace, namePlaceInput, linkPlaceInput,
  addPlaceButton, btnClosePopupWithFormEditAuthor, btnClosePopupWithAddPlace,
  fullNameAuthor, jobAuthor, popupWithFormEditAuthor, popupWithAddPlace,
  placesList, placeTemplate, popupPhoto, btnClosePopupPhoto,
  popupPhotoContentImg, popupPhotoContentCaption, configForValidation
}

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
