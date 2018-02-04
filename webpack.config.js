var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ["babel-polyfill", "./src/main.js"],
	output:{
		path: path.resolve(__dirname, './dist'),
		filename:'js/[name]-bundle.js'
	},
	module:{
		rules:[
			{	
				test: /\.vue$/,  
		        loader:'vue-loader',
		        exclude:__dirname + '/node_modules/',
		        options: {
		            // vue-loader options go here
		            postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
		        }

			},
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  use: {
			    loader: 'babel-loader',
				    options: {
				      presets: ['env']
				    }
				}
			},
			{
			  test: /\.css$/,
			  use: [
			    'style-loader',
			    {
			      loader: 'css-loader',
			      options: {
			        importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
			      }
			    },
			    'postcss-loader'
			  ]
			},
			{
				test:/\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test:/\.(woff2?|ttf|eot|woff)$/,
				loader:'file-loader',
				exclude:__dirname + '/node_modules/',
				options:{
					// outputPath:'font/'
					name: 'font/[name]-[hash].[ext]'
				}
			},
			{
				test:/\.(png|jpg|gif|svg)$/,
				loader:'file-loader',
				exclude:__dirname + '/node_modules/',
				options:{
					// outputPath:'images/',
					name: 'images/[name]-[hash].[ext]'
				}
			}
		]
	},
	resolve: {
	  alias: {
	    vue: 'vue/dist/vue.js'
	  }
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'this is HtmlWebpackPlugin',
			filename:'index.html',
			template:'index.html',
			inject:'body'			
		}),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	]
}