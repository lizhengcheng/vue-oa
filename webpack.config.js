"use striact";

module.exports = function (env) {

  if (!env || !['prod', 'dev'].includes(env)) {
    throw new TypeError(`invalid arguments: ${env}`);
  }

  const LoadConfig = env === 'prod' ? require('./webpack/Prod'): require('./webpack/Dev');

  process.env.NODE_ENV = `"${env}"`;

  return new LoadConfig().config;
};
