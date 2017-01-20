# @easy-webpack/config-copy-files
Copy files to build directory using [Copy webpack plugin](https://github.com/kevlened/copy-webpack-plugin).

# Installation
```
npm install --save-dev @easy-webpack/config-copy-files
```
[easy-webpack](https://github.com/easy-webpack/core) is also required.

# Usage
```js
// webpack.config.js
const generateConfig = require('@easy-webpack/core').generateConfig;

const baseConfig = { ... }; // project-specific config like the entry file

module.exports = generateConfig(
  baseConfig,

  require('@easy-webpack/config-copy-files')
    ([
      /* Array of patterns object */
      { from: 'favicon.ico' },
      { from: 'robots.txt' },
      { from: 'src/locals', to: 'locals' }
    ], {
      /* Options object */
      copyUnmodified: true
    })
);
```

Patterns object is identical to [pattern properties](https://github.com/kevlened/copy-webpack-plugin#pattern-properties) in copy webpack plugin.

Options object is identical to [options](https://github.com/kevlened/copy-webpack-plugin#available-options) in copy webpack plugin.

_Note_: this config will __NOT__ modify `context` options in webpack config.
Therefore all `from` paths are relative to the `webpack.config.js` file.   