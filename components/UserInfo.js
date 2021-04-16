export default class UserInfo {
  constructor({ nameUserSelector, jobUserSelector }) { //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    this._nameUser = document.querySelector(nameUserSelector).textContent
    this._jobUser = document.querySelector(jobUserSelector).textContent
  }

  getUserInfo() {
    const user = {}
    user.name = this._nameUser
    user.job = this._jobUser
    return user
  }

  setUserInfo(user) {
    this._nameUser = user.name
    this._jobUser = user.job
  }
}
