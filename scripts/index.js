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
const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/dombay.jpg'
  },
  {
    name: 'Сочи',
    link: './images/sochi.jpg'
  },
  {
    name: 'Смоленск',
    link: './images/smolensk.jpg'
  },
  {
    name: 'Роза-хутор',
    link: './images/rosa-hutor.jpg'
  }
];

function saveForm(evt) {
  evt.preventDefault();
  fullNameAuthor.textContent = fullNameAuthorInput.value;
  jobAuthor.textContent = jobAuthorInput.value;
  closePopup(popupWithFormEditAuthor);
}

function createArrayPlace(evt) {
  evt.preventDefault();
  const newPlace = [{ name: '', link: '' }];
  newPlace[0].name = namePlaceInput.value;
  newPlace[0].link = linkPlaceInput.value;
  addPlaces(newPlace);
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

function addPlaces(arrayWithPlace) {
  arrayWithPlace.forEach(place => {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__photo').src = place.link;
    placeElement.querySelector('.place__photo').alt = place.name;
    placeElement.querySelector('.place__title').textContent = place.name;
    placesList.prepend(placeElement);
    placeElement.querySelector('.place__like').addEventListener('click', evt => {
      const evtTarget = evt.target;
      evtTarget.classList.toggle('place__like_active');
    });
    placeElement.querySelector('.place__photo').addEventListener('click', evt => {
      const evtTarget = evt.target;
      openPopupPhoto(evtTarget.src, evtTarget.alt);
    });
    placeElement.querySelector('.place__delete').addEventListener('click' , evt => {
      const evtTarget = evt.target;
      const place = evtTarget.closest('.place');
      place.remove();
    });
  });
}

function openPopupPhoto(link, name) {
  popupPhotoContentImg.src = link;
  popupPhotoContentImg.alt = name;
  popupPhotoContentCaption.textContent = name;
  popupPhoto.classList.add('popup_opened');
}


addPlaces(initialCards);
formEditAuthor.addEventListener('submit', saveForm);
editProfileButton.addEventListener('click', () => {
  openPopup(popupWithFormEditAuthor);
  fullNameAuthorInput.value = fullNameAuthor.textContent;
  jobAuthorInput.value = jobAuthor.textContent;
});
btnClosePopupWithFormEditAuthor.addEventListener('click', () => closePopup(popupWithFormEditAuthor));
addPlaceButton.addEventListener('click', () => openPopup(popupWithAddPlace));
formAddPlace.addEventListener('submit', createArrayPlace);
btnClosePopupWithAddPlace.addEventListener('click', () => closePopup(popupWithAddPlace));
btnClosePopupPhoto.addEventListener('click', () => closePopup(popupPhoto));
