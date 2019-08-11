const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pageInfo =  require('./src/pageinfo')

const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = env => {
  const node_env = env.NODE_ENV
  const mode = node_env === 'test' ? 'production' : node_env
   return {
    mode: mode,
    devtool:
      node_env === 'development' ? 'source-map' :
      node_env === 'test' ? 'inline-cheap-module-source-map' :
      undefined,
    entry: './src/app',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: '/node_modules/',
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
              }
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/',
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: node_env === 'development',
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(node_env),
      }),  
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: pageInfo.title,
        meta: pageInfo.meta,
        links: pageInfo.links,
        data: pageInfo.data,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    devServer: {
      contentBase: './dist',
      port: 3000,
      host: '0.0.0.0',
    },
    externals: node_env === 'test' ? [nodeExternals()] : undefined,
  };
};
