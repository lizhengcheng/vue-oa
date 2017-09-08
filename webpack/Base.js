"use strict";

const path = require('path');

const Rule = require('./Rule');

/**
 * Abstract Webpack configuration Class
 */
class BasiscWebpackConfig extends Rule {

  /**
   * Basic Webpack Class constructor
   */
  constructor (options) {
    if (new.target === BasiscWebpackConfig) {
      throw new TypeError('Abstract Class "BasiscWebpackConfig" can not been instantiated directly.');
    }
    super(options);
  }

  /**
   * Webpack configuration instance
   */
  get config () {
    return {
      entry: this.entry,
      output: this.output,
      devtool: this.devtool,
      resolve: this.resolve,
      module: {
        rules: this.rules
      },
      stats: this.stats,
      devServer: this.devServer,
      plugins: this.plugins
    };
  }

  /**
   * Webpack configuration entry
   */
  get entry () {
    return {
      main: './src/scripts/app.js'
    };
  }

  get output () {
    return {
      path: path.resolve(__dirname, '../dist'),
      filename: 'scripts/main.js',
      publicPath: this.publicPath,
      chunkFilename: 'scripts/[name].js'
    };
  }

  /**
   * Webpack configuration devtool
   */
  get devtool() {
    return '#cheap-module-eval-source-map';
  }

  /**
   * Webpack configuration resolve
   */
  get resolve() {
    return {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, '../src')
      }
    };
  }

  /**
   * Webpack configuration rules
   */
  get rules () {
    return [
      this.eslint,
      this.babel,
      this.vue,
      this.less,
      this.css,
      this.fonts
    ];
  }

  /**
   * Webpack configuration stats,
   */
  get stats () {
    return {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    };
  }

}

module.exports = BasiscWebpackConfig;
