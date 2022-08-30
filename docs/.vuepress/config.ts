import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { clipboardPlugin } from "vuepress-plugin-clipboard";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DoDo开放平台 - 内测版',
  description: '欢迎进入DoDo开放平台',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    clipboardPlugin({
      align: 'top',
      color: '#fff',
      successText: '复制成功',
      successTextColor: '#fff'
    }),
    docsearchPlugin({
      appId: 'HT0XFHIB64',
      apiKey: '9e509b067ed7ec66e31c7006db743c25',
      indexName: 'dodo',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        }
      },
    })
  ],
  theme: defaultTheme({
    logo: '/favicon.png',
    colorMode: 'dark',
    repo: 'dodo-open/dodo-open-docs',
    docsBranch: 'dev',
    docsDir: 'docs',
    editLink: true,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
          {
            text: '介绍',
            link: '/go/',
            activeMatch: '/go/.*'
          },
          {
            text: '更新日志',
            link: '/log/',
            activeMatch: '/log/.*'
          },
          {
            text: '开发文档',
            link: '/dev/',
            activeMatch: '/dev/.*'
          },
          {
            text: 'SDK文档',
            link: '/dev/sdk/',
            activeMatch: '/dev/sdk/.*',
            children: [
              {
                text: '官方 SDK',
                link: '/dev/sdk/official',
                activeMatch: '/dev/sdk/official/.*',
                children: [
                  {
                    text: 'Net SDK',
                    link: '/dev/sdk/official#net',
                    activeMatch: '/dev/sdk/official/.*'
                  },
                  {
                    text: 'Go SDK',
                    link: '/dev/sdk/official#go',
                    activeMatch: '/dev/sdk/official/.*'
                  },
                  {
                    text: '易语言 SDK',
                    link: '/dev/sdk/official#易语言',
                    activeMatch: '/dev/sdk/official/.*'
                  }
                ]
              },
              // {
              //   text: '第三方 SDK',
              //   link: '/dev/sdk/thirdparty',
              //   activeMatch: '/dev/sdk/thirdparty/.*',
              //   children: [
              //     {
              //       text: 'Python SDK',
              //       link: '/dev/sdk/thirdparty#python',
              //       activeMatch: '/dev/sdk/thirdparty/.*'
              //     },
              //     {
              //       text: 'Java SDK',
              //       link: '/dev/sdk/thirdparty#java',
              //       activeMatch: '/dev/sdk/thirdparty/.*'
              //     },
              //     {
              //       text: 'Net SDK',
              //       link: '/dev/sdk/thirdparty#net',
              //       activeMatch: '/dev/sdk/thirdparty/.*'
              //     },
              //     {
              //       text: '易语言 SDK',
              //       link: '/dev/sdk/thirdparty#net',
              //       activeMatch: '/dev/sdk/thirdparty/.*'
              //     }
              //   ]
              // }
            ]
          },
          {
            text: '开发者平台',
            link: 'https://doker.imdodo.com'
          },
          {
            text: '开发者社区',
            link: 'https://imdodo.com/s/108015'
          }
        ],
        sidebar: {
          '/go/': [
            {
              text: '简介',
              children: [
                '/go/',
                '/go/introduction/platform.md',
                '/go/introduction/deployment.md',
                '/go/introduction/community.md'
              ],
            },
            {
              text: '公约',
              children: [
                '/go/convention/convention.md'
              ],
            },
            {
              text: '协议',
              children: [
                '/go/agreement/agreement.md'
              ],
            },
            {
              text: '规则',
              children: [
                '/go/rule/apecification.md',
                '/go/rule/explain.md'
              ],
            }
          ],
          '/log/': [
            {
              text: '更新日志',
              children: [
                '/log/'
              ]
            }
          ],
          '/dev/': [
            {
              text: '简介',
              children: [
                '/dev/'
              ],
            },
            {
              text: '开始',
              children: [
                '/dev/start/development.md',
                '/dev/start/permission.md',
                '/dev/start/status.md'
              ],
            },
            {
              text: '接口',
              children: [
                '/dev/api/bot.md',
                '/dev/api/island.md',
                '/dev/api/channel.md',
                '/dev/api/channel-text.md',
                '/dev/api/channel-voice.md',
                '/dev/api/channel-article.md',
                '/dev/api/role.md',
                '/dev/api/member.md',
                '/dev/api/nft.md',
                '/dev/api/personal.md',
                '/dev/api/resource.md',
                '/dev/api/event.md',
                '/dev/api/message.md',
                '/dev/api/card.md'
              ],
            },
            {
              text: '事件',
              children: [
                '/dev/event/websocket.md',
                '/dev/event/event.md',
                '/dev/event/channel-text.md',
                '/dev/event/channel-voice.md',
                '/dev/event/channel-article.md',
                '/dev/event/member.md',
                '/dev/event/personal.md'
              ],
            },
            {
              text: 'SDK',
              children: [
                '/dev/sdk/official.md',
                // '/dev/sdk/thirdparty.md'
              ],
            },
          ]
        }
      }
    }
  })
})