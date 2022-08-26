const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'inline-source-map'
  }

  return merge(common(env), dev_config)
}