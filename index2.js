(function () {
  /** fetchMarkdown 
   */
  function fetchMarkdown(path) {
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
      var md = text.split(/\r\n/);
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
      console.log('<!--  Fetch Error:');
      console.log(response.headers.get('Content-Type'));
      console.log(response.headers.get('Date'));

      console.log(response.status);
      console.log(response.statusText);
      console.log(response.type);
      console.log(response.url);
      console.log('... end Fetch Error-->');
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
        href = "#" + MdContent.routePath.replace(':mdFile*',href);
        // href = href.replace('//', '/');
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
        href = 'posts/' + href;
        href = href.replace('//', '/');
      }
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    }
  };

  /** HomeComponent - home path routing
   */
  const HomeComponent = {
    routePath: '/',
    template: '<div v-html="theContent" class="markdown-body"></div>',
    data: function () {
      return {
        theContent: 'loading....',
        homeDoc: homeDoc
      }
    },
    methods: {
      // process(htmlContent) {
      process: function (htmlContent) {
        // console.log('loading mdcontent' + htmlContent);
        this.$data.theContent = htmlContent;
      }
    },
    created() {
      fetchMarkdown(homeDoc).then(this.process);
    },
    watch: {
      '$route'(to, from) {
        console.log('Inside HomeComponent');
        // console.log(to);
        fetchMarkdown(homeDoc).then(this.process);
        // console.log(from);
      }
    }
  };

  /** MdContent - load markdown as html
   */
  const MdContent = {
    routePath: '/vue/:mdFile*',
    template: '<div v-html="theContent" class="markdown-body"></div>',
    data: function () {
      return {
        theContent: '',
        frontMatter: {}
      }
    },
    methods: {
      process: function (content) {
        // console.log('loading mdcontent' + htmlContent);
        this.$data.theContent = content.markup;
        this.$data.frontMatter = content.frontMatter;
      }
    },
    // beforeRouteEnter (to, from, next) {
    //   // called before the route that renders this component is confirmed.
    //   // does NOT have access to `this` component instance,
    //   // because it has not been created yet when this guard is called!
    // },
    // beforeRouteLeave (to, from, next) {
    //   // called when the route that renders this component is about to
    //   // be navigated away from.
    //   // has access to `this` component instance.
    // },
    created() {
      console.log('Create of MdContent');
      // console.log(to);
      var toFile = this.$route.params.mdFile;
      // fetchMarkdown(toFile, null, this.process);
      var process = this.process;
      console.log('MdContent.created():');
      console.log(process);
      fetchMarkdown(toFile).then(process);
      // console.log(from);
    },
    watch: {
      '$route'(to, from) {
        console.log('Inside MdContent');
        // console.log(to);
        var toFile = to.params.mdFile;
        // fetchMarkdown(toFile, null, this.process);
        var process = this.process;
        console.log('MdContent.watch():');
        console.log(process);
        fetchMarkdown(toFile).then(process);
        // console.log(from);
      }
    }
  };

  const routes = [
    // dynamic segements start with a colon
    // { path: '/tags/:tags', component: TagRouteComponent },
    { path: MdContent.routePath, component: MdContent },
    { path: HomeComponent.routePath, component: HomeComponent }
  ];

  const router = new VueRouter({
    routes: routes // in es6, just use:  routes
  });

  Vue.use(VueRouter);

  const app = new Vue({
    // Make sure to inject the router with the router option to make the whole app router-aware.
    router: router, // in es6, just use:  router
    // devtools: false,
    //el: '#content',
    data: {
      message: 'Hello Vue!',
      posts: ['emp'],
      frontMatter: null,
      navDoc: navDoc
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
        this.posts = parseNav(tmp.childNodes);
        return tmp.innerHTML;
      }
    },
    created: function () {
      fetchMarkdown(navDoc)
        .then(function (content) {
          app.frontMatter = content.frontMatter;
          return content.markup;
        })
        .then(this.routerlink)
        .then(this.callback);
    }
  }).$mount('#app')

// !!!!!!!!!!!!  REFACTOR !!!!!!!!!
function parseNav(sb) {
  var ar = [];
  if (sb.length > 0) {
    var elm = sb[0];
    let obj;
    do {
      if (elm.tagName === 'H1') {
        if (obj) ar.push(obj);
        obj = {
          name: elm.innerText,
          content: [elm],
          links: []
        };
      } else if (elm.tagName === 'UL') {
        obj.content.push(elm);
        var li = elm.getElementsByTagName('li');
        for (let v of li) {
          for (let a of v.getElementsByTagName('a')) {
            obj.links.push({
              rel: a.href.replace(a.baseURI, ''),
              tags: a.title.split(' ')
            });
          }
        }
      } else {
        obj.content.push(elm);
      }
      elm = elm.nextElementSibling;
    } while (elm);
    if (obj) ar.push(obj);
  }
  return ar;
}

})();