require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// import Routes from '../RailsRoutes.js.erb'
// window.Routes = Routes

import { mountAll } from '../utils.js'

import InPlaceEdit from '../apps/InPlaceEdit.js'

document.addEventListener('DOMContentLoaded', () => {
  mountAll(InPlaceEdit, '[data-app="InPlaceEdit"]')
})