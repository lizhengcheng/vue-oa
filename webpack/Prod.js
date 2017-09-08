"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const BasiscWebpackConfig = require('./Base');

class ProdWebpackConfig extends BasiscWebpackConfig {

  constructor () {
    super({
      sourceMap: false
    });
  }

  /**
   * add hash value to output file, hash value changed while file changed
   *
   */
  get output () {
    return Object.assign({}, super.output, {
      filename: 'scripts/[name].[chunkhash:7].js',
      chunkFilename: 'scripts/[name].[chunkhash:7].js'
    });
  }

  /**
   *  disable sourcemap for production environment do not use sourcemap
   */
  get devtool() { return false; }

  /**
   * for production environment, add follow plugins
   * 1. webpack.optimize.CommonsChunkPlugin: compress all node_modules file into vender.[chunkhash].js
   * 2. ExtractTextPlugin: All style file compress into style.[conteclearnthash].js
   * 3. UglifyJsPlugin: compress all javascript files
   * 4. ImageminPlugin:  compress all image file
   */
  get plugins () {
    return [
      new webpack.optimize.CommonsChunkPlugin({ name: 'vender', minChunks: module => module.resource && /node_modules/.test(module.resource) }),
      new webpack.optimize.CommonsChunkPlugin({ name: 'mainifest', chunks: ['vender'] }),
      new ExtractTextPlugin({ filename: 'styles/app.[contenthash:7].css' }),
      new OptimizeCSSPlugin({ cssProcessorOptions: { discardComments: { removeAll: true }, sourcemap: false, safe: true } }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false }),
      new ImageminPlugin({ test: /\.(png|jpg|jpeg|gif|ico|svg)$/, optimizationLevel: 3 }),
      new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: true, chunksSortMode: 'dependency' })
    ];
  }

  /**
   * extract css file
   */
  extral (loaders) {
    // remove style-loader
    loaders.shift();

    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loaders,
      publicPath: '../'
    });
  }

}

module.exports = ProdWebpackConfig;
