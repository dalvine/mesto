export {
  editProfileButton, formEditAuthor, formAddPlace, addPlaceButton,
  fullNameAuthor, jobAuthor, placeTemplate, configForValidation,
  inputEditNameAuthor, inputEditJobAuthor
}

const page = document.querySelector('.page');
const editProfileButton = page.querySelector('.author__button-edit');
const formEditAuthor = page.querySelector('.form[name=formAuthor]');
const inputEditNameAuthor = formEditAuthor.querySelector('.form__input[name=author-fullname]');
const inputEditJobAuthor = formEditAuthor.querySelector('.form__input[name=author-job]');
const formAddPlace = page.querySelector('.form[name=formAddPlace]');
const addPlaceButton = page.querySelector('.profile__button-add');
const fullNameAuthor = page.querySelector('.author__fullname');
const jobAuthor = page.querySelector('.author__job');
const placeTemplate = page.querySelector('#list-place').content;
const configForValidation = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

