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
    process(htmlContent) {
      // console.log('loading mdcontent' + htmlContent);
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
      fetchMarkdown(toFile, null, this.process);
      // console.log(from);
  },
  watch: {
    '$route' (to, from) {
      console.log('Inside MdContent');
      // console.log(to);
      var toFile = 'posts/' + to.params.mdFile;
      fetchMarkdown(toFile, null, this.process);
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
