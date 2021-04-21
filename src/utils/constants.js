export {
  editProfileButton, formEditAuthor, formAddPlace,
  addPlaceButton, placeTemplate, configForValidation,
  inputEditNameAuthor, inputEditJobAuthor, nameUserSelector,
  jobUserSelector
}

const page = document.querySelector('.page');
const editProfileButton = page.querySelector('.author__button-edit');
const formEditAuthor = page.querySelector('.form[name=formAuthor]');
const inputEditNameAuthor = formEditAuthor.querySelector('.form__input[name=author-fullname]');
const inputEditJobAuthor = formEditAuthor.querySelector('.form__input[name=author-job]');
const formAddPlace = page.querySelector('.form[name=formAddPlace]');
const addPlaceButton = page.querySelector('.profile__button-add');
const placeTemplate = page.querySelector('#list-place').content;
const nameUserSelector = '.author__fullname'
const jobUserSelector = '.author__job'
const configForValidation = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

