var path = require('path');
var webpack = require('webpack');

config = {
    entry: [
		'webpack/hot/dev-server', 
		path.resolve(__dirname, 'app/main.js')
	],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
			exclude: /node_modules/,
			query:{
				presets: ['es2015', 'react']
			}
			
        },{
            test: /\.json$/,
            loader: 'json-loader'
        },{
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=8192'
        }],

    },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};

module.exports = config;