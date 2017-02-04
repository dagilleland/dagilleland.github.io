(function () {
  window.addEventListener('load', function () {
    const store = new Vuex.Store({
      state: {      // The root state object for the Vuex store.
        navs: []
      },
      mutations: {  // 
        // type: { [type: string]: Function }
        loadNavs (state, payload) {
          state.navs.push(payload.nav);
        }
      }
      
    })

    /** fetchMarkdown 
     */
    function fetchMarkdown(path, {routeAdapter: hrefToRouteAdapter}) { // path: string, options: object
      // Custom Markdown Renderings
      var renderer = new marked.Renderer();
      renderer.heading = customHeadingRenderer;
      renderer.link = customLinkRenderer;
      renderer.image = customImageRenderer;

      return fetch(path, { method: 'GET', cache: 'reload' })
        .then(status)
        .then(responseToText)
        .then(markdownToFrontMatterMarkup)
        .catch(consoleLogFetchError);

      /* ************ Hoisted Functions ************** */
      /* Fetch infrastructure */
      function status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
      }

      function responseToText(response) { return response.text(); }

      function markdownToFrontMatterMarkup(text) {
        var md = text.split(/\r?\n/); // \r is optional to work both locally with lite-server and in production
        var fm = [];
        if (md.indexOf('---') === 0) {
          fm = md.splice(0, md.indexOf('---', 1));
          md = md.splice(1, md.length - 1);
        }
        var fms = fm.join('\n');
        var mds = md.join('\n');
        var content = {
          frontMatter: YAML.parse(fms),
          markup: marked.parse(mds, { renderer: renderer })
        }
        return content;
      }

      function consoleLogFetchError(response) {
        // right now, just console-logging the error
        if (response && response.headers) {
          console.log('<!--  Fetch Error:');
          console.log(response.headers.get('Content-Type'));
          console.log(response.headers.get('Date'));

          console.log(response.status);
          console.log(response.statusText);
          console.log(response.type);
          console.log(response.url);
          console.log('... end Fetch Error-->');
        } else {
          console.log('<!--  Fetch Error:');
          console.log(response);
          console.log('... end Fetch Error-->');
        }
      }

      /* Custom Markdown Renderings */
      function customHeadingRenderer(text, level) {
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

        return '<h' + level + '><a name="' +
          escapedText +
          '" class="anchor" href="#' +
          escapedText +
          '"><span class="header-link"></span></a>' +
          text + '</h' + level + '>';
      };

      function customLinkRenderer(href, title, text) { // string, string, string
        if (!href.startsWith('http')) {
          href = hrefToRouteAdapter(href);
        }
        if (this.options.sanitize) {
          try {
            var prot = decodeURIComponent(unescape(href))
              .replace(/[^\w:]/g, '')
              .toLowerCase();
          } catch (e) {
            return '';
          }
          if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
            return '';
          }
        }
        var out = '<a href="' + href + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
      }

      function customImageRenderer(href, title, text) { // string, string, string
        if (!href.startsWith('http')) {
          href = hrefToRouteAdapter(href);
        }
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
      }
    };


    /**
     * hrefToRouteAdapter - convert a route adapter to 
     * 
     * @param {string} href
     * @returns
     */
    function hrefToRouteAdapter(href) {
      return "#" + MdContent.routePath.replace(':mdFile*', href);
    }

    /** MdContent - Component to load markdown as html
     */
    const MdContent = {
      routeHomePath: '/',
      routePath: ':parentNav?/vue/:mdFile*',
      template: '<core-content :header="header" :footer="footer" :theContent="theContent"></core-content>',
      data: function () {
        return {
          theContent: '',
          frontMatter: {},
          header: {},
          footer: {}
          // ,
          // navs: []
          , allNavs: store.state.navs
        }
      },
      computed: {
        navs: function() {
          return this.$store.state.navs;
        }
      },
      methods: {
        process: function (content) {
          this.$data.theContent = content.markup;
          this.$data.frontMatter = content.frontMatter;
          if (content.frontMatter) {
            this.$data.header = content.frontMatter.header;
            this.$data.footer = content.frontMatter.footer;
          }
        },
        fetchFile: function (toFile) {
          if (!toFile) {
            toFile = this.$root.defaultDoc;
          }
          var process = this.process;
          console.log(process);
          fetchMarkdown(toFile).then(process);
        }
      },
      created() {
        // TODO: Process parentNav parameter
        this.navs = this.$root.navs;
        this.fetchFile(this.$route.params.mdFile);
      },
      watch: {
        '$route'(to, from) {
          this.fetchFile(to.params.mdFile);
        }
      }
    };

    const routes = [
      // dynamic segements start with a colon
      // { path: '/tags/:tags', component: TagRouteComponent },
      { path: MdContent.routePath, component: MdContent },
      // TODO: Route for :parentNav
      { path: MdContent.routeHomePath, component: MdContent }
    ];
    console.log(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
    const router = new VueRouter({
      base: location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/',
      routes: routes // in es6, just use:  routes
    });

    Vue.use(VueRouter);
    // Vue.use(Vuex);
    Vue.component('core-content', {
      data: function() {
        return {
          allNavs: store.state.navs
        }
      },
      props: ['theContent', 'header', 'footer'],
      template: `<main>
      <nav v-for="item in allNavs"><section v-html="item.markup"></section></nav>
      <header><h1>{{header.title}}</h1><p>{{header.summary}}</p></header>
    <article v-html="theContent" class="markdown-body"></article>
    <footer><ul><li>Author: {{footer.author}}</li><li>Contributors: {{footer.contributors}}</li><li>Created On: {{footer.created}}</li><li>Modified On: {{footer.modified}}</ul></footer>
  </main>`
    })
    Vue.component('a-nav', {
      props: ['navContent', 'navMeta'],
      template: `<nav><section v-html="navContent"></section></nav>`
    })
    const app = new Vue({
      // Make sure to inject the router with the router option to make the whole app router-aware.
      router: router, // in es6, just use:  router,
      store: store,   // in es6, just use:  store,
      // devtools: false,
      data: {
        navDoc: 'nav.md',
        defaultDoc: 'README.md'
      },
      methods: {
        callback(contentHtml) {
          // console.log('--- callback ---');
          // console.log(contentHtml);
          // console.log('--- end callback ---');
          this.message = contentHtml;
        },
        routerlink(markup) {
          var tmp = document.createElement('nav');
          tmp.innerHTML = markup;
          var links = tmp.getElementsByTagName('a');
          // NOTE: Remove the following as prefexing not needed
          // for (var link of links) {
          //   link.href = link.href.replace('/posts', '/#/posts');
          // }
          return tmp.innerHTML;
        }
      },
      mounted: function () {
        this.navDoc = this.$el.dataset.nav;
        this.defaultDoc = this.$el.dataset.home;

        //   // Load the navigation and the default document
        // },
        // created: function () {
        fetchMarkdown(this.navDoc)
          .then(function (content) {
            store.commit('loadNavs',{ nav: content });

            var __fm = app.frontMatter;
            console.log(__fm);
            if (__fm) {
              // // el.classList.add($all.nav.position);
              // var links = el.getElementsByTagName('a');
              // for (var i = 0; i < links.length; i++) {
              //   if (__fm.target === 'nav') {
              //     // then there is a secondary set of navs to be loaded
              //     var path = links[i].href.replace('#', '');
              //     fetchMd(path)
              //       .then(createElement('nav'))
              //       .then(appendToBody())
              //       .then(function (e) {
              //         e.dataset.parentNav = path.replace($location.origin, '');
              //       });
              //     // links[i].addEventListener('click', showSubNav);
              //   } else {
              //     // links[i].addEventListener('click', doNavClick);
              //   }
              // }
            }
            return content.markup;
          })
          .then(this.routerlink)
          .then(this.callback);
      }
    }).$mount('#app')
  });
})();