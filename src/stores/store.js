import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    fetchdata: null,
    firstname: '',
    secondname: ''
  }),
  actions: {
    // GET: получение данных с API
    async getApidata() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json()
      this.fetchdata = result
      console.log('Данные загружены:', this.fetchdata)
    },
    // POST: отправка формы
    sendmessage() {
      const ContactForm = {
        title: this.firstname,
        body: this.secondname,
        userId: 1
      }
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ ContactForm }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((response) => response.json())
        .then((json) => console.log('Ответ сервера:', json)) // в методичке строка обрезана, исправлено для работы
    }
  }
})