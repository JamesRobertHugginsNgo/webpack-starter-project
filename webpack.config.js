const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {

	entry: path.join(__dirname, 'src/index.js'),
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html')
		})
	],
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	watch: true
}
