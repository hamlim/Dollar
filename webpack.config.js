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


module.exports = {
	entry: './app',
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}]
			},
			{
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
					{ loader: 'postcss-loader' }
        ]
      }
		]
	},
  plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
        	require('postcss-import')(),
        	cssnext
    		]
			}
		})
  ]
}
