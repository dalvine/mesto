import { Card } from '../components/Card.js'
import {
  inputEditNameAuthor, inputEditJobAuthor,
} from './constants.js'
import { userInfo } from '../pages/index.js'

export const fillFormAuthor = () => {
  const userData = userInfo.getUserInfo()
  inputEditNameAuthor.value = userData.name
  inputEditJobAuthor.value = userData.job
}

export const createCard = ({ name, link }, placeTemplate, callBack) => {
  return new Card({ name: name, link: link }, placeTemplate, callBack)
}
