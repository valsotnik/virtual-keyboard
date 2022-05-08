const path = require('path'); // подключение библиотеки путей
const HtmlWebpackPlugin = require('html-webpack-plugin'); // для работы с HLML
const CopyWebpackPlugin = require('copy-webpack-plugin'); // подключение файлов (ico например)
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // для очистки вебпака от лишних файлов
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // сжатие файлов
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'), // из какой папки собираем
  entry: './index.js', // файл из которого собираем
  output: { // выходные параметры
    path: path.resolve(__dirname, 'dist'), // путь к папке выходной
    filename: '[hash].js', // имя собранного js-файла(хэшируется)
    clean: true, // свойство перезаписи предыдущей версии js-файла
  },
  resolve: {
    extensions: ['.js', '.json', '.png'], // автоматически ищет файлы с данными расширениями когда мы подключаем их без .js , .json, .png
    alias: {
      // '@models': path.resolve(__dirname, 'src/models'),
      // '@': path.resolve(__dirname, 'src'),
      // после @ - папку, потом путь, в импорте - путь а @dirname/filename
    },
  },
  mode: 'development', // устанавливает режим  development/production
  plugins: [
    new HtmlWebpackPlugin({ //  для работы с HTML
      filename: 'index.html', // имя сбилденного нового файла
      template: './index.html', // путь и имя шаблона с которого начинается сборка
    }),
    // new ESLintPlugin({ // eslint
    // extensions: ['js']
    // }),
    new CleanWebpackPlugin(), // очистка лищних файлов вебпака
    new CopyWebpackPlugin({ // добавление файлов в сборку
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'), // путь от файла к сборке
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // для работы с css файлами
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { // sass/scss
        test: /\.s[ac]ss$/,
        use: ['sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, // для работы картинками
        type: 'asset-resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/, // также для работы с cкартинками
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/, // для работы с файлами шрифтов
        use: ['file-loader'],
      },
      {
        test: /\.xml$/, // для работы с xml файлами
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/, // для работы с csv файлами
        use: ['csv-loader'],
      },
      // {
      //   test: /\.js$/, // eslint
      //   exclude: /node_modules/,
      // loader: 'eslint-loader',
      //   options: {
      //     formatter: 'stylish',
      // fix: true,
      // eslintPath: 'eslint',
      // emitError: true,
      // emitWarning: true
      // }
      // },
    ],
  },
  devServer: { // для работы в режиме live-server
    static: './dist',
    port: 3004,
  },
};
