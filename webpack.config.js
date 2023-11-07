const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'zant-ui.js',
    library: 'ZantUiLibrary',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 这将应用于普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
       // 这将应用于 `.vue` 文件中的 `<style>` 块
      {
        test: /\.less$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'vue'
  }
};