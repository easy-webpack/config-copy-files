import {WebpackConfig, get} from '@easy-webpack/core'
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * For copying files and folders see here for options: https://github.com/kevlened/copy-webpack-plugin
 *
 * Basic usage:
 *
 * require('@easy-webpack/config-generate-index-html')
 * {patterns: [
 *   {from: 'src/images', to: 'images'}
 * ]})
 *
 */
export = function copyFiles({patterns = [], options = {}} = {}) {
  return function copyFiles(this: WebpackConfig): WebpackConfig {
    const config = {
      plugins: [
        new CopyWebpackPlugin(patterns, options)
      ].concat(get(this, 'plugins', []))
    }
  }
}