export default class Api {
  constructor(options) {
    this._url = options.baseUrl
    this._options = options.headers
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, this._options)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  // другие методы работы с API

  getInfoUser() {
    return fetch(`${this._url}/users/me`, this._options)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  editInfoUser() {
    this._options.method = 'PATCH'
    return fetch(`${this._url}/users/me`, this._options)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}
