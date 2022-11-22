const webpack = require('webpack');

module.exports = function override(config) {
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser.js', //add *.js for  prevent BREAKING CHANGE
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
