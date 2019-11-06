const {EnvironmentPlugin} = require('webpack');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
  }),
];

module.exports = {
  config,
  plugins: [
    new EnvironmentPlugin(["REACT_GMAPS_PRIVATE_KEY"]),
    new EnvironmentPlugin(["REACT_GMAPS_KEY"]),
    new EnvironmentPlugin(["REACT_APP_GOOGLE_MAPS_KEY"])
  ]
}
