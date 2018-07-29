module.exports = {
  title: 'Gilleland.ca',
  description: 'Personal and Professional Blog of Dan Gilleland',
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-mermaid').default) // leave default options
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/about/' },
      { text: 'Articles', link: '/articles/' },
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

      '/blog/': [
        'asp-identities',
        'vuepress-broken-images',
        'why-patterns'
      ],
      // fallback
      '/': [
        ''
      ]
    }
  }
}
