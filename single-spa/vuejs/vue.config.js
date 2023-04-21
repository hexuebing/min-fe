// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  chainWebpack: config => {
    config.externals(["vue", "vue-router"])
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
}