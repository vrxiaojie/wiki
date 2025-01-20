import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "VR小杰的技术文档中心",
  description: "",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '项目合集',
        items: [
          { text: '基于CW32的物联网电压电流表', link: '/' },
          { text: '瑞萨RA4E2开发板', link: '/RA4E2-Develop-Board/瑞萨RA4E2开发板/00 开发板开箱与环境搭建/前言' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vrxiaojie' },

    ]
  }
}



const vitePressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: '基于CW32的物联网电压电流表',
    // basePath: '/基于CW32的物联网电压电流表/',
    resolvePath: '/基于CW32的物联网电压电流表/',
    useTitleFromFileHeading: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'RA4E2-Develop-Board',
    resolvePath: '/RA4E2-Develop-Board/',
    basePath: '/RA4E2-Develop-Board/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: true,

  }
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
