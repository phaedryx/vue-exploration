import { createApp } from 'vue'

function mountAll(vueObject, selector) {
  document.querySelectorAll(selector).forEach((element) => {
    createApp(Object.create(vueObject)).mount(element)
  })
}

export { mountAll }
