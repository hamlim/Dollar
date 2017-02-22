var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext')({
	features: {
		rem: {
			html: false,
			browsers: 'ie > 11'
		},
		customProperties: false
	}
});

module.exports = {
	entry: './index',
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
						presets: ['es2015', 'react'],
						plugins: ["transform-class-properties"]
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
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
							minimize: true,
							sourceMap: true
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
