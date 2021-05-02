export default class UserInfo {
  constructor({nameUserSelector, jobUserSelector,
    avatarUserSelector, buttonEditSelector}) { //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    this._nameUser = document.querySelector(nameUserSelector)
    this._jobUser = document.querySelector(jobUserSelector)
    this._avatar = document.querySelector(avatarUserSelector)
    this._buttonEdit = document.querySelector(buttonEditSelector)
    this._userInfo = {}
  }

  getUserInfo() {
    return this._userInfo
  }

  setUserInfo({name, about, avatar}) {
    this._nameUser.textContent = name
    this._jobUser.textContent = about
    this._avatar.src = avatar
  }

  saveUserInfo(data) {
    this._userInfo = data
  }

  changeAvatar(link) {
    this._avatar.src = link
  }


}
