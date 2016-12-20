var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext')({
	features: {
		rem: {
			html: false
		},
		customProperties: {
			preserve: 'computed'
		}
	}}
);
var postcolor = require('postcss-color-function');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry: {
		landing: './app.js',
		blog: './blog.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
	  new ExtractTextPlugin("[name].css")
	],
	watch: true,
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'es2016', 'es2017', 'react']
				}
			},
			{
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
      }
		]
	},
  postcss: function () {
    return [cssnext, postcolor];
  }
}
