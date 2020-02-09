const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path').resolve;
const WebpackHtmlPlugin = require('html-webpack-plugin');

const destinationPath = path(__dirname, '..', 'build');
const sourcePath = path(__dirname, '..', 'src');

module.exports = {
	entry: {
		index: path(sourcePath, 'index.ts'),
	},
	output: {
		path: path(destinationPath),
		chunkFilename: 'js/[name].[contenthash:6].js',
		filename: '[name].[contenthash:6].js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				include: sourcePath,
				options: {
					transpileOnly: true,
				},
				exclude: /node_modules/,
			}
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			useTypescriptIncrementalApi: true,
		}),

		new WebpackHtmlPlugin ({
			template: path(__dirname, '..', 'public', 'index.html'),
		}),
	],
};
