const path = require('path').resolve;
const WebpackHtmlPlugin = require('html-webpack-plugin');

const destinationPath = path(__dirname, '..', 'build');
const sourcePath = path(__dirname, '..', 'src');

module.exports = {
	entry: {
		index: path(sourcePath, 'index.js'),
	},
	output: {
		path: path(destinationPath),
		chunkFilename: 'js/[name].[contenthash:6].js',
		filename: '[name].[contenthash:6].js',
	},
	plugins: [
		new WebpackHtmlPlugin ({
			template: path(__dirname, '..', 'public', 'index.html'),
		}),
	],
};
