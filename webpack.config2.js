var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
	// context: path.resolve('./src'),
    entry: './src/main.js',
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename:'js/[name]-bundle.js'
	},
	module:{
		rules:[
			{	
				test: /\.vue$/,  
        // use: ['vue-loader']
        loader:'vue-loader',
        exclude:__dirname + '/node_modules/',
        options: {
            // vue-loader options go here
            postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
        }

			},
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude:__dirname + '/node_modules/',
				include:__dirname + 'src/',
				options:{
					presets:['env']
				}
			},
			
			{
			  test: /\.css$/,
			  use: [
			    'style-loader',
			    {
			      loader: 'css-loader',
			      options: {
			        importLoaders: 1,
			        name:'css/[name]-[hash].[ext]'
			      }
			    },
			    'postcss-loader',
			    'sass-loader'
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
				test:/\.(ttf|eot|woff)$/,
				loader:'file-loader',
				exclude:__dirname + '/node_modules/',
				options:{
					name:'font/[hash].[ext]'
				}
			},
			{
				test:/\.(png|jpg|gif)$/,
				loader:'url-loader',
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
	    'vue$': 'vue/dist/vue.common.js',
	    'src': path.resolve(__dirname, '../src'),
	    'assets': path.resolve(__dirname, '../src/assets'),
	    'components': path.resolve(__dirname, '../src/components'),
	    jquery: "jquery"
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
		}),
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false
		  },
		  sourceMap: true
		})
	]
}