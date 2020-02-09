const webpackMerge = require("webpack-merge");
const commonConfiguration = require("./webpack/common");

module.exports = (_env, { mode }) => {
	console.log(mode);
    const enviromentConfig = require(`./webpack/${mode}`);
	const mergedConfig = webpackMerge(commonConfiguration, enviromentConfig);
	
    return mergedConfig;
};
