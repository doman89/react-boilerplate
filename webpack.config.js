const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack/common');

module.exports = (_env, { mode }) => {
  const enviromentConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfiguration, enviromentConfig);

  return mergedConfig;
};
