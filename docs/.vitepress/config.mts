import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import markdownItKatex from 'markdown-it-katex'
import { La51Plugin } from 'vitepress-plugin-51la'

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
  ignoreDeadLinks: true,
  title: "VR小杰的技术文档中心",
  description: "",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]// 设置网站图标
  ],
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
              closeText: "退出",
            },
          },
        },
      },
    },
    editLinks: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/menu' },
      {
        text: '项目合集',
        items: [
          { text: '基于CW32的物联网电压电流表', link: '/CW32-volt-ammeter/' },
          { text: '物联网桌面环境监测仪', link: '/iot_env_monitor_guide/项目简介/' },
        ]
      },
      {
        text: '开发笔记',
        items: [
          { text: 'STM32 FreeRTOS笔记', link: '/STM32_FreeRTOS/' },
          { text: '泰山派笔记', link: '/TSPI-tai-shan-pai-RK3566/' },
          { text: '瑞萨RA4E2开发板', link: '/RA4E2-Develop-Board/' },
          { text: '瑞萨RA2L1开发板', link: '/RA2L1-Develop-Board/' },
          { text: '瑞萨RA4L1开发板', link: '/RA4L1-Develop-Board/' },
        ]
      },
      {
        text: '嵌入式教程',
        items: [
          { text: '香橙派5部署Deepseek-R1-1.5B蒸馏模型', link: '/Deepseek-R1-RK3588-OrangePi5/' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vrxiaojie' },
    ],
    outline: {
      level: [2, 6],
      label: '本页导航'
    },
    lastUpdated: {
      text: '上一次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

  },
  sitemap: {
    hostname: 'https://wiki.vrxiaojie.top'
  },

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    },
    image: {
      lazyLoading: true
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  vite: {
    plugins: [
      //51.la统计
      La51Plugin({
        id: '3LDzbFYu6VQ4y34t',
        ck: '3LDzbFYu6VQ4y34t'
      })
    ]
  }
}



const vitePressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'CW32-volt-ammeter',
    basePath: '/CW32-volt-ammeter/',
    resolvePath: '/CW32-volt-ammeter/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'RA4E2-Develop-Board',
    resolvePath: '/RA4E2-Develop-Board/',
    basePath: '/RA4E2-Develop-Board/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'RA2L1-Develop-Board',
    resolvePath: '/RA2L1-Develop-Board/',
    basePath: '/RA2L1-Develop-Board/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'Deepseek-R1-RK3588-OrangePi5',
    resolvePath: '/Deepseek-R1-RK3588-OrangePi5/',
    basePath: '/Deepseek-R1-RK3588-OrangePi5/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'TSPI-tai-shan-pai-RK3566',
    resolvePath: '/TSPI-tai-shan-pai-RK3566/',
    basePath: '/TSPI-tai-shan-pai-RK3566/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'STM32_FreeRTOS',
    resolvePath: '/STM32_FreeRTOS/',
    basePath: '/STM32_FreeRTOS/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'RA4L1-Develop-Board',
    resolvePath: '/RA4L1-Develop-Board/',
    basePath: '/RA4L1-Develop-Board/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'iot_env_monitor_guide',
    resolvePath: '/iot_env_monitor_guide/',
    basePath: '/iot_env_monitor_guide/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true, // 文件夹标题使用index.md中的title属性
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
    sortFolderTo: 'bottom', // 设置文件夹均位于文件下方显示
  },
];



export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
