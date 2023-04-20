const singleSpaDefaults = require("webpack-config-single-spa")
const {merge} = require("webpack-merge")

module.exports = () => {
  const defaultConf = singleSpaDefaults({
    orgName: "study",
    projectName: "demojs"
  })
  defaultConf.devServer = {
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }

  return merge(defaultConf, {
    devServer: {
      port: 9001
    }
  })
}