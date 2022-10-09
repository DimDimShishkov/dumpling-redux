class Api {
  constructor(configApi) {
    this._url = configApi.url;
    this._headers = configApi.headers;
  }

  // обработчик ответа сервера
  _handleReturn(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Загрузка всего с сервера
  handleDownloadAll() { // chfnge naming
      return fetch(`${this._url}/.json`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => this._handleReturn(res));    
  }

    // Загрузка Menu с сервера
    downloadMenuFromServer() { 
      return fetch(`${this._url}/Menu.json`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => this._handleReturn(res))
      .then((res) => {return res})
      .catch((err) => {console.log(err);})
  }

      // Загрузка Cart с сервера
      downloadCartFromServer() { 
        return fetch(`${this._url}/Cart.json`, {
          method: "GET",
          headers: this._headers,
        }).then((res) => this._handleReturn(res))
        .then((res) => {return res})
        .catch((err) => {console.log(err);})
    }
  
    // Загрузка карточек HotDishes с сервера
    handleDownloadHotDishes() {
      return fetch(`${this._url}/HotDishes.json`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => this._handleReturn(res));    
  }

      // Загрузка карточек HotDishes с сервера
      handleDownloadSupes() {
        return fetch(`${this._url}/Supes.json`, {
          method: "GET",
          headers: this._headers,
        }).then((res) => this._handleReturn(res));    
    }

}

export const api = new Api({
  url: "https://dumplings-e4e34-default-rtdb.europe-west1.firebasedatabase.app/",
  headers: {
    "Content-Type": "application/json",
  }
})

/* export default api; */