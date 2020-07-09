module.exports = {
  title: 'Gilleland.ca',
  description: 'Personal and Professional Blog of Dan Gilleland',
  extendMarkdown(md) {
    md.set({ breaks: true })
    md.use(require('markdown-it-imsize'))
    //md.use(require('markdown-it-mermaid').default) // leave default options
    md.use(require('markdown-it-checkbox'))
    md.use(require('markdown-it-kbd'))
    md.use(require('markdown-it-deflist'))
    md.use(require('markdown-it-abbr'))
    md.use(require('markdown-it-mark'))
    // md.use(require('markdown-it-texmath'), { engine: require('katex'),
    //                                          delimiters:'dollars',
    //                                          macros:{"\\RR": "\\mathbb{R}"}
    //                                        })
    md.use(require('markdown-it-footnote'))
    md.use(require('markdown-it-sub'))
    md.use(require('markdown-it-sup'))
  },
  theme: '@vuepress/theme-blog',
  // theme: 'modern-blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/about/dan' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Archive', link: '/archive/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: {
      '/about/': [
        'dan',
        'vue-hub'
      ],

      '/articles/': [
        ''
      ],

      // '/blog/': [
      //   '',
      //   'asp-identities',
      //   'vuepress-broken-images',
      //   'why-patterns',
      //   'bless-israel'
      // ],
      // fallback
      '/': [
        ''
      ]
    },
    sitemap: {
      hostname: 'https://gilleland.ca/'
    }
    // footer: {
    //   copyright: [
    //     {
    //       text: 'Privacy Policy',
    //       link: 'https://policies.google.com/privacy?hl=en-US',
    //     },
    //     {
    //       text: 'MIT Licensed | Copyright © 2018-present Vue.js',
    //       link: '',
    //     },
    //   ],
    //   contact: [
    //     {
    //       type: 'github',
    //       link: 'https://github.com/vuejs/vuepress',
    //     },
    //     {
    //       type: 'twitter',
    //       link: 'https://github.com/vuejs/vuepress',
    //     }
    //   ]
    // }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/active-header-links': { },
    '@vuepress/back-to-top': { },
    '@vuepress/last-updated': { },
    '@vuepress/blog': {
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/blog/',
          pagination: {
            lengthPerPage: 4,
            preText: 'Previous',
            nextText: 'Next'
          },
          itemPermalink: '/blog/:year/:month/:day/:slug'
        }
      ],
      frontmatters: [
        {
          // Unique ID of current classification
          id: 'tag',
          // Decide that the frontmatter keys will be grouped under this classification
          keys: ['tag'],
          // Path of the `entry page` (or `list page`)
          path: '/tag/',
          // Layout of the `entry page`
          layout: 'Tags',
          // Layout of the `scope page`
          scopeLayout: 'Tag'
        }
      ]
     }
  }
}
