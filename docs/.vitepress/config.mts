import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

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
          { text: '基于CW32的物联网电压电流表', link: '/CW32-volt-ammeter/基于CW32的物联网电压电流表/介绍' },
          { text: '瑞萨RA4E2开发板', link: '/RA4E2-Develop-Board/瑞萨RA4E2开发板/00 开发板开箱与环境搭建/前言' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vrxiaojie' },

    ],
  },
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
}



const vitePressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'CW32-volt-ammeter',
    basePath: '/CW32-volt-ammeter/',
    resolvePath: '/CW32-volt-ammeter/',
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
