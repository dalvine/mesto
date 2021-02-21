let page = document.querySelector('.page');
let editProfileButton = page.querySelector('.author__button-edit');
let popup = page.querySelector('.popup');
let formEditAuthor = page.querySelector('.form')

let closePopupButton = popup.querySelector('.form__button-close');
let nameAuthor = page.querySelector('.author__name');
let aboutAuthor = page.querySelector('.author__about');
let nameAuthorForm = popup.querySelector('#author-name');
let aboutAuthorForm = popup.querySelector('#author-about');

function togglePopup() {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
    nameAuthorForm.value = nameAuthor.textContent;
    aboutAuthorForm.value = aboutAuthor.textContent;
  }
  else {
    popup.classList.toggle('popup_opened');
  }
}

function saveForm(evt) {
  evt.preventDefault();
  nameAuthor.textContent = nameAuthorForm.value;
  aboutAuthor.textContent = aboutAuthorForm.value;
  togglePopup();
}

editProfileButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
formEditAuthor.addEventListener('submit', saveForm);
//
