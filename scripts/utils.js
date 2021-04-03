import { closePopupOverlay, handleEscPress } from './index.js'
export { openPopup, closePopup }

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


