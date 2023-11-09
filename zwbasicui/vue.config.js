// vue.config.js
module.exports = {
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/styles/variables.scss";` // 导入全局的SCSS变量文件
    //         }
    //     }
    // },  
  pages: {
      index: {
          // 修改入口
          entry: 'examples/main.js',
          template: 'public/index.html',
          filename: 'index.html'
      }
  },
  chainWebpack: config => {
      config.module
          .rule('js')
          .include
          .add('/packages')
          .end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              return options
          })
  }
}

