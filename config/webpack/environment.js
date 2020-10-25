const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const erb = require('./loaders/erb')
const vue = require('./loaders/vue')
const customConfig = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  }
}

environment.plugins.prepend(
  'VueLoaderPlugin',
  new VueLoaderPlugin()
)

environment.plugins.prepend(
  'Define',
  new DefinePlugin({
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false
  })
)

environment.loaders.prepend('erb', erb)
environment.loaders.prepend('vue', vue)

environment.config.merge(customConfig)

module.exports = environment
