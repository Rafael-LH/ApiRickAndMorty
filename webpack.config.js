const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {
  return {
    mode: args.mode,
    entry: {
      index: path.resolve(__dirname, './src/index')
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
      }
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
    devtool: "eval-source-map",

    module: {
      rules: [
        {
          test: /.(js|jsx)$/i,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        },
        {
          test: /.html$/i,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
      })
    ]
  }
}