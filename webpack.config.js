const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
		clean: true,
  },
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset-resource",
      },
			{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
		],
	},
	devServer: { 
    static: './dist',
		por: 3002,
  },

} 