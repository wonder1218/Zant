module.exports = {
    title: 'Zwantui',  // 设置网站标题
    description : '适用于pc端的ui样式库',
    base : '/zh/zwantui/',
    themeConfig : {
      nav : [
          { text: '指南', link: '/design' },
          { text: '组件', link: '/component' },
          { text: '主题', link: '/theme' },
          { text: '资源', link: '/resource' }
      ],
      sidebar: {
          '/' : [
             "/", //指的是根目录的md文件 也就是 README.md 里面的内容
              "指南",  //根目录创建 apiword.md文件
              "component", //根目录创建 api.md文件
              "theme", //根目录创建 error.md文件
              "resource"
          ]
      },
      sidebarDepth : 2
    }
  }