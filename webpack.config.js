const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'index.js'
	},
	module: {
		rules: [
			{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	use: {
	          		loader: 'babel-loader',
	          		options: {
	            		presets: ['env', 'react']
	          		}
	        	}
	    	},
	    	{
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
		      	test: /\.(gif|png|jpe?g|svg)$/i,
	      		use: [
	      			{
		        		loader: 'file-loader',
			      	}
			    ]
			}
		]
	},
	plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html",
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}