module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "乐下载虚拟主机",
  description: "这是一个提供免费虚拟主机的公益项目",
  //base: '/',
  dest: "public",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://p.qlogo.cn/gh/707537805/950336404/100",
    displayAllHeaders: true, // 默认值：false,
    sidebar: "auto",
    lastUpdated: true,
    navbar: [
      {
        text: "指南",
        link: "/wiki/introduce.md",
      },
      {
        text: "视频教程",
        link: "/video/",
      },
      {
        text: "源码推荐",
        link: "/recommend/",
      },
      {
        text: "FAQ",
        link: "/FAQ/1.md",
      },
      {
        text: "官网",
        link: "http://idc.letec.xyz/",
      },
    ],
    sidebar: {
      "/wiki/": [
        {
          text: "指南",
          children: ["/wiki/introduce.md", "/wiki/QA.md", "/wiki/start.md"],
        },
        {
          text: "更进一步",
          children: ["/more/wordpress.md"],
        },
      ],
      "/more/": [
        {
          text: "指南",
          children: ["/wiki/introduce.md", "/wiki/QA.md", "/wiki/start.md"],
        },
        {
          text: "更进一步",
          children: ["/more/wordpress.md"],
        },
      ],
      "/video/": [
        {
          text: "视频教程",
          children: ["/video/1.md","/video/2.md","/video/3.md"],
        },
      ],
      "/FAQ/": [
        {
          text: "FAQ",
          children: ["/FAQ/1.md","/FAQ/2.md"],
        },
      ],
    },
  },
};
