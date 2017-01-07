// Custom Markdown Renderings
var renderer = new marked.Renderer();

function customHeadingRenderer (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h' + level + '><a name="' +
                escapedText +
                 '" class="anchor" href="#' +
                 escapedText +
                 '"><span class="header-link"></span></a>' +
                  text + '</h' + level + '>';
};
renderer.heading = customHeadingRenderer;
function customLinkRenderer(href, title, text) { // string, string, string
  if(!href.startsWith('http')){
    href = 'posts/' + href;
    href = href.replace('//','/');
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
renderer.link = customLinkRenderer;
function customImageRenderer(href, title, text) { // string, string, string
  if(!href.startsWith('http')){
    href = 'posts/' + href;
    href = href.replace('//','/');
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
}
renderer.image = customImageRenderer;


// 0. If using a module system, call Vue.use(VueRouter)
Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
const TagRouteComponent = {
  template: '<div>Tags {{ $route.params.tags }}</div>',
  created(){
    
  },
  watch: {
    '$route' (to, from) {
      console.log('Inside TagRouteComponent');
      // console.log(to);
      var toFile = to.params.tags;
      // console.log(from);
    }
  }
}
const MdContent = {
  template: '<div v-html="theContent" class="markdown-body"></div>',
  data: function(){
    return {
      theContent: ''
    }
  },
  methods: {
    process(content) {
      // console.log('loading mdcontent' + htmlContent);
      var htmlContent = content.markup;
      this.$data.theContent = htmlContent;
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
      var toFile = 'posts/' + this.$route.params.mdFile;
      // fetchMarkdown(toFile, null, this.process);
      var process = this.process;
      fetchMarkdown2(toFile).then(process);
      // console.log(from);
  },
  watch: {
    '$route' (to, from) {
      console.log('Inside MdContent');
      // console.log(to);
      var toFile = 'posts/' + to.params.mdFile;
      // fetchMarkdown(toFile, null, this.process);
      var process = this.process;
      fetchMarkdown2(toFile).then(process);
      // console.log(from);
    }
  }
}
const HomeComponent = {
  template: '<div v-html="theContent" class="markdown-body"></div>',
  data: function(){
    return {
      theContent: 'loading....'
    }
  },
  methods: {
    process(htmlContent) {
      // console.log('loading mdcontent' + htmlContent);
      this.$data.theContent = htmlContent;
    }
  },
  created(){
    fetchMarkdown('README.md', null, this.process);
  },
  watch: {
    '$route' (to, from) {
      console.log('Inside HomeComponent');
      // console.log(to);
      fetchMarkdown('README.md', null, this.process);
      // console.log(from);
    }
  }
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
const routes = [
  // dynamic segements start with a colon
  { path: '/tags/:tags', component: TagRouteComponent },
  { path: '/posts/:mdFile', component: MdContent },
  { path: '/', component: HomeComponent }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes: routes // in es6, just use:  routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
var sb;

var app = new Vue({
  router: router, // in es6, just use:  router
  devtools: true,
  //el: '#content',
  data: {
    message: 'Hello Vue!',
    posts: ''
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
      for (var link of links) {
        link.href = link.href.replace('/posts','/#/posts');
      }
sb = tmp.childNodes;      
      return tmp.innerHTML;
    }
  },
  created: function(){
    fetchMarkdown('nav.md', this.routerlink, this.callback);
    // fetch('nav.md')
    // .then(function(response) { // Check the Response
    //   if(response.ok) {
    //     console.log('loaded');
    //     return response.text();
    //   } else {
    //     console.log('not loaded');
    //   }
    // })
    // .then(function(text){ // Process the text of the Response
    //   console.log(text);
    //   var markup = marked(text);
    //   var tmp = document.createElement('nav');
    //   tmp.innerHTML = markup;
    //   var links = tmp.getElementsByTagName('a');
    //   for (var link of links) {
    //     link.href = link.href.replace('/posts','/#/posts');
    //   }
    //   markup = tmp.innerHTML;
    //   // this.app.$data.message = markup;
    // })
    // .catch(function(err) {
    //   console.log(err);
    // })
  }
}).$mount('#app')

function fetchMarkdown2(path) {
  return fetch(path, { method: 'GET', cache: 'reload'})
    .then(status)
    .then(responseToText)
    .then(markdownToFrontMatterMarkup)
    .catch(consoleLogFetchError)
}

function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error(response.statusText))  
  }  
}
function responseToText(response) { return response.text();}
function markdownToFrontMatterMarkup(text) {
  var md = text.split('\n');
  var fm = [];
  if(text.indexOf('---')===0) {
    fm = md.splice(0,md.indexOf('---',1));
    md = md.splice(1,md.length - 1);
  }
  var fms = fm.join('\n');
  var mds = md.join('\n');
  var content = {
    frontMatter: YAML.parse(fms),
    markup: marked.parse(mds,{ renderer: renderer })
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


// OBSOLETE
function fetchMarkdown(path,htmlProcess,callback) {
  fetch(path,{ method: 'GET',
              //  headers: myHeaders,
              //  mode: 'cors',
               cache: 'reload' })
    .then(function(response) {
      if(response.ok) {
        console.log('loaded');
        return response.text();
      } else {
        console.log('not loaded');
      }
    })
    .then(function(text){
      // console.log(text);
      var markup = marked(text);
      if(htmlProcess)
        markup = htmlProcess(markup);
      callback(markup);
    })
    .catch(function(err) {
      console.log(err);
    })
};


// Postscript testing....
if(self.fetch) {
  // run my fetch request here
  console.log("fetch working")
} else {
  // do something with XMLHttpRequest?
}


// var nav = new Vue({
//   el: '#content',
//   data: {
//     message: 'Hello Vue!'
//   },
//   created: function(){
//     fetch('README.md')
//     .then(function(response) {
//       if(response.ok) {
//         console.log('loaded');
//         return response.text();
//       } else {
//         console.log('not loaded');
//       }
//     })
//     .then(function(text){
//       console.log(text);
//       this.app.$data.message = marked(text);
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
//   }
// })


function parseNav(sb) {
  var ar = [];
  if(sb.length > 0) {
    var elm = sb[0];
    let obj;
    do {
      if(elm.tagName === 'H1') {
        if(obj) ar.push(obj);
        obj = {
          name: elm.innerText,
          content: [elm],
          links:[]
        };
      } else if(elm.tagName === 'UL') {
        obj.content.push(elm);
        var li = elm.getElementsByTagName('li');
        for(let v of li) {
          for(let a of v.getElementsByTagName('a')) {
            obj.links.push({
              rel:a.href.replace(a.baseURI,''),
              tags:a.title.split(' ')
            });
          }
        }
      } else {
        obj.content.push(elm);
      }
      elm = elm.nextElementSibling;
    }while(elm);
    if(obj) ar.push(obj);
  }
  return ar;
}