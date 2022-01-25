module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '乐下载虚拟主机',
    description: '这是一个提供免费虚拟主机的公益项目',
    //base: '/',
    dest:'public',
     
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://p.qlogo.cn/gh/707537805/950336404/100',
      displayAllHeaders: true ,// 默认值：false,
      sidebar: 'auto',
      lastUpdated: true,
      navbar: [
        {
          text: '指南',
          link: '/wiki/introduce.md',
        }
      ],
      sidebar: [
        // SidebarItem
        {
          text: '指南',
          link: null,
          children: [
            '/wiki/introduce.md',
            '/wiki/QA.md',
            '/wiki/start.md'
          ],
        },
      ],
    },
  }