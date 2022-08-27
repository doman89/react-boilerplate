const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack/common');

module.exports = (_env, { mode }) => {
  const environmentConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfiguration, environmentConfig);

  return mergedConfig;
};
