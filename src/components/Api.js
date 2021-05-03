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
      .then(this._responseProcessing)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      "method": "GET",
      "headers": this._headers
    })
      .then(this._responseProcessing)
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
      .then(this._responseProcessing)
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
      .then(this._responseProcessing)
  }

  changeAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      "method": "PATCH",
      "headers": this._headers,
      "body": JSON.stringify({
        "avatar": link,
      })
    })
      .then(this._responseProcessing)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      "method": "DELETE",
      "headers": this._headers,
    })
      .then(this._responseProcessing)
  }

  addLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      "method": "PUT",
      "headers": this._headers,
    })
      .then(this._responseProcessing)
  }

  removeLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      "method": "DELETE",
      "headers": this._headers,
    })
      .then(this._responseProcessing)
  }


  _responseProcessing(res) {
    if (res.ok) return res.json()
    return Promise.reject(res.json())
  }


}
