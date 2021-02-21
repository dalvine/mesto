let page = document.querySelector('.page');
let editProfileButton = page.querySelector('.author__button-edit');
let popup = page.querySelector('.popup');
let formEditAuthor = page.querySelector('.form')

let closePopupButton = popup.querySelector('.form__button-close');
let fullNameAuthor = page.querySelector('.author__name');
let jobAuthor = page.querySelector('.author__about');
let fullNameAuthorInput = popup.querySelector('.form__input_content_fullname');
let jobAuthorInput = popup.querySelector('.form__input_content_job');

function togglePopup() {
  if (!popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
    fullNameAuthorInput.value = fullNameAuthor.textContent;
    jobAuthorInput.value = jobAuthor.textContent;
  }
  else {
    popup.classList.toggle('popup_opened');
  }
}

function saveForm(evt) {
  evt.preventDefault();
  fullNameAuthor.textContent = fullNameAuthorInput.value;
  jobAuthor.textContent = jobAuthorInput.value;
  togglePopup();
}

editProfileButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
formEditAuthor.addEventListener('submit', saveForm);
