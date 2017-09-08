"use strict";

/**
 * generate css loader
 */
function generateStyleLoader (name, isVue) {
  const names = [isVue ? 'vue-style' : 'style', 'css', 'postcss'];

  if (name && ['less', 'sass', 'stylus'].includes(name)) {
    names.push(name);
  }

  const loaders = names.map(key => {
    const loader = {
      loader: isVue ? `${key}-loader` : this.convertName(key),
      options: { sourceMap: this._options.sourceMap }
    };

    return loader;
  });

  return this.extral(loaders);
}

/**
 * url load options
 */
function urlLoadOptions (name) {
  return { limit: 1000, name: name };
}

/**
 * vue loader options
 */
function vueOptions () {
  return {
    loaders: {
      css: generateStyleLoader.call(this, null, true),
      less: generateStyleLoader.call(this, 'less', true)
    }
  };
}

/**
 * Abstract Loader
 */
class Rule {

  constructor (options) {
    this._options = options;
  }


  get eslint () {
    return {
      test: /\.(js|vue)$/,
      use: [{ loader: 'eslint-loader', options: { failOnError: true } }],
      enforce: 'pre',
      exclude: /node_modules/
    };
  }

  get babel () {
    return {
      test: /\.js$/,
      use: [{ loader: 'babel-loader' }],
      exclude: /node_modules/
    };
  }

  get vue () {
    return {
      test: /\.vue$/,
      use: [{ loader: 'vue-loader', options: vueOptions.call(this) }]
    };
  }

  get css() {
    return {
      test: /\.css$/,
      use: generateStyleLoader.call(this)
    };
  }

  get less () {
    return {
      test: /.less$/,
      use: generateStyleLoader.call(this, 'less')
    };
  }

  get fonts () {
    return {
      test: /\.(woff|woff2|ttf|eot)$/,
      use: [{ loader: 'url-loader', options: urlLoadOptions('fonts/[name].[ext]') }]
    };
  }

  get images () {
    return {
      test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
      use: [{ loader: 'url-loader', options: urlLoadOptions('images/[name].[ext]') }]
    };
  }

  /**
   * In test environment , global style  should use null-load instead,
   * please overide this method
   */
  convertName (name) {
    return `${name}-loader`;
  }

  /**
   * In production environment, we should genterate css file,
   * we should use extract-text-webpack-plugin, extract style-loader
   *
   */
  extral (loaders) {
    return loaders;
  }
}

module.exports = Rule;
