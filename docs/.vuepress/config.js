const sideBar = require('./util/autoCreateSideBar')

module.exports = {
  // title: 'Itway',
  description: '像风如你',
  base: '/itway_blog_vue/',
  // dest: './docs/.vuepress/dist',
  plugins: [
    {
      name: 'page-plugin',
      globalUIComponents: ['fixed'],
    },
    ['@vuepress/back-to-top'], // 返回顶部
    ['@vuepress/nprogress'], // 加载进度条
  ],
  themeConfig: {
    logo: '/assets/img/logo.png', // logo图片
    nav: [
      // 导航栏
      { text: '主页', link: '/' },
      {
        text: '前端',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'HTML', link: '/article/web/HTML/' },
          { text: 'CSS', link: '/article/web/CSS/' },
          { text: 'JS', link: '/article/web/JS/' },
          { text: 'vue', link: '/article/web/VUE/' },
        ],
      },
      {
        text: '后端',
        ariaLabel: 'Language',
        items: [{ text: 'node', link: '/article/node/' }],
      },
      { text: '收藏', link: '/tools/' },
      { text: '个人博客', link: 'https://blog.csdn.net/m0_37903882' },
      { text: '关于', link: '/' },
      { text: 'GitHub', link: 'https://github.com/DuebassLei' },
    ],
    sidebar: {
      // ...sideBar.createSideBar('web', ['img']),
      ...sideBar.createSideBar('article', ['img']),
      // ...sideBar.createSideBar('tools', ['img']),
      // ...sideBar.createSideBar('tools', ['img']),
      // '/tools/': [
      //   // ['', 'node目录'],
      //   ['first', '作为前端也需要知道的路径知识'],
      //   // ['stream', 'node核心模块-stream'],
      // ],

      // '/article/node/': [
      //   ['', 'node目录'],
      //   ['other', '作为前端也需要知道的路径知识'],
      //   // ['stream', 'node核心模块-stream'],
      // ],
    }, // 配置两个参数，一个是文章的根目录，第二是白名单（选择性配置）
    // sidebar: {
    //   '/tools/': [
    //     ['', 'node目录'],
    //     ['other', '作为前端也需要知道的路径知识'],
    //     // ['stream', 'node核心模块-stream'],
    //   ],
    //   // "/web/":[
    //   //   ["", "前端"],
    //   //   {
    //   //     title: "css",
    //   //     name: "css",
    //   //     collabsable: false,
    //   //     children: [
    //   //       ["css/", "目录"],
    //   //       ['css/1', "css常考面试题"]
    //   //     ]
    //   //   }
    //   // ]
    // },
  },
}
