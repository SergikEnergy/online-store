const path = require('path');
const EslintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, './src/index'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/i,
        use: ['ts-loader'],
        include: [path.resolve(__dirname, './src')],
      },
      {
        test: /.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: 'ts' }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
