const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.devServer = {
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }

  return merge(defaultConfig, {
    externals: ["react-router-dom"]
  });
};
