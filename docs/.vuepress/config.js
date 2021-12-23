// 配置网站的标题和描述，方便 SEO
// 修改配置需要重启项目
module.exports = {
  theme: 'reco', // 主题
  //语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: '...', // 左侧名称
  description: '...打打所多',
  themeConfig: {
    //   目录结构自动生成
    subSidebar: 'auto',
    //   右侧导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'LEO的 JavaScript 博客',
        items: [
          { text: 'Github', link: 'https://github.com/wizardlyCorgi' }
          //   { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    //   侧边栏
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }]
      },
      {
        title: '基础学习',
        path: '/handbook/InterviewQuestions',
        collapsable: false, // 不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: '泛型', path: '/handbook/Generics' },
          { title: '面试题', path: '/handbook/InterviewQuestions' }
        ]
      }
    ]
  }
}
