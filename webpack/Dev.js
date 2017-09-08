"use strict";

const path = require('path');
const webpack = require('webpack');
const args = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BasiscWebpackConfig = require('./Base');

const host = args.host || '127.0.0.1';
const port = args.port || '8000';

class DevWebpackConfig extends BasiscWebpackConfig {

  constructor () {
    super({
      sourceMap: true
    });
  }

  /**
   * Webpackconfig  publicPath
   */
  get publicPath() {
    return `http://${host}:${port}/`;
  }

  get devServer() {
    return {
      contentBase: [path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../mock')],
      historyApiFallback: true,
      host: host,
      hot: true,
      hotOnly: true,
      inline: true,
      overlay: true,
      port: port,
      proxy: {},
      publicPath: this.publicPath
    };
  }

  /**
   * dev plugins
   */
  get plugins() {
    return [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: true })
    ];
  }

}

module.exports = DevWebpackConfig;
