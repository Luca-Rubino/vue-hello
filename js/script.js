console.log('Js-collegato')


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: `Buongiorno mondo`,
        src: `img/favicon.png`
      }
    }
  }).mount('#app')