console.log('Js-collegato')


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: `Buongiorno mondo`,
        imageUrl: `img/favicon.png`,
        descrizione: `favicon-Boolean`
      }
    },
    methods: {
      titolo: (function (e) {
        this.message = e.target.value
      }),
      immagine: (function (e) {
        this.imageUrl = e.target.value
      }),
    },
  }).mount('#app')