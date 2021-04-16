import {
  inputEditNameAuthor, inputEditJobAuthor,
  fullNameAuthor, jobAuthor
} from './constants.js'

export const fillFormAuthor = () => {
  inputEditNameAuthor.value = fullNameAuthor.textContent
  inputEditJobAuthor.value = jobAuthor.textContent
}

