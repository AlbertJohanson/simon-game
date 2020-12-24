const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')


const SRC = path.resolve(__dirname, 'node_modules');

module.exports = {
  
  entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                  },
                ],
              },
              {
                test: /\.css/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                ],
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true, 
                    },
                  },
                ]},
                {
                  test: /\.mp3$/,
                  loader: 'file-loader',
                  query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                  }
                }
        ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
          }),
    ]
}