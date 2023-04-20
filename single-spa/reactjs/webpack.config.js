const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "reactjs",
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
    // modify the webpack config however you'd like to by adding to this object
  });
};
