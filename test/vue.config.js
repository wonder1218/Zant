// vue.config.js
module.exports = {
  pages: {
      index: {
          // 修改入口
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html'
      }
  },
  chainWebpack: config => {
      config.module
          .rule('js')
          .include
          .add('/src')
          .end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              return options
          })
  }
}
