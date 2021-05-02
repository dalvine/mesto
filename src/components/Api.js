export default class Api {
  constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(res => {
        return this._responseProcessing(res)
      })
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(res => {
        return this._responseProcessing(res)
      })
  }
  // другие методы работы с API

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      "method": "PATCH",
      "headers": this._headers,
      "body": JSON.stringify({
        "name": data.name,
        "about": data.about,
      })
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      "method": "POST",
      "headers": this._headers,
      "body": JSON.stringify({
        "name": data.name,
        "link": data.link,
      })
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }

  changeAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      "method" : "PATCH",
      "headers": this._headers,
      "body": JSON.stringify({
        "avatar": link,
      })
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      "method" : "DELETE",
      "headers" : this._headers,
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }

  addLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      "method" : "PUT",
      "headers" : this._headers,
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }

  removeLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      "method" : "DELETE",
      "headers" : this._headers,
    })
    .then(res => {
      return this._responseProcessing(res)
    })
  }


  _responseProcessing(res) {
    if (res.ok) return res.json()
    return Promise.reject(res.json())
  }


}
