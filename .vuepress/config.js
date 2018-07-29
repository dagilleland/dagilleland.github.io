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
      { text: 'LOGs', link: '/logs/' },
      { text: 'C-Sharp', link: '/csharp/' },
      { text: 'Html', link: '/html/' },
      { text: 'Razor', link: '/razor/' },
      { text: 'Client-Server', link: '/clientserver/' },
      { text: 'Webforms', link: '/webforms/' },
      { text: 'Lab Specs', link: 'https://cpsc-1517.github.io/LabSpecs/' },
      { text: 'Issues/Bugs', link: 'https://github.com/CPSC-1517/CPSC-1517.github.io/issues/new' },
      { text: 'Moodle', link: 'https://moodle.nait.ca' },
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
