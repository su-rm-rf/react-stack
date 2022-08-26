const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathResolve = _path => path.resolve(__dirname, _path)

module.exports = env => {
  return {
    entry: './src/main.js', // 从项目根目录算起
    output: {
      path: pathResolve('../dist'), // 使用绝对路径
      filename: 'assets/js/[name].code.js',
      chunkFilename: 'assets/js/[name].bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: pathResolve('../public/index.html'),
        filename: 'index.html',
        title: 'react-stack'
      })
    ]
  }
}