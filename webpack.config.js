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
        loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel',
			exclude: /node_modules/,
			query:{
				presets: ['es2015', 'react']
			}
			
        },
        { test:/\.(png|jpg)$/, loader:'url?limit=2500' }

        ],

    },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};

module.exports = config;