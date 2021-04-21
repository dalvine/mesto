export default class UserInfo {
  constructor({nameUserSelector, jobUserSelector}) { //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
    this._nameUser = document.querySelector(nameUserSelector)
    this._jobUser = document.querySelector(jobUserSelector)
  }

  getUserInfo() {
    const user = {}
    user.name = this._nameUser.textContent
    user.job = this._jobUser.textContent
    return user
  }

  setUserInfo({name, job}) {
    this._nameUser.textContent = name
    this._jobUser.textContent = job
  }
}
