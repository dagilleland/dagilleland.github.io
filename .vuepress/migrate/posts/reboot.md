# Rebooting My Site

This reboot (Dec 27-28, 2016) is less about content and more about rendering GitHub pages in a clean GitHub repository of posts.

By clean, I mean that the repository has a small-footprint of files for actually rendering the page and is focused on keeping the posts (in MarkDown format) up-front. Why do I want this? Well, it's basically because other solutions (i.e. - Jekyll) seem to flood the repository with all sorts of templates, parsable items, yaml files, etc.

Instead, I want to just have the following core files:

<dl>
  <dt>index.html</dt>
  <dd>A small, clean html file that "frames" out the web page.</dd>

  <dt>index.js</dt>
  <dd>A small, clean javascript file that leverages CDN libraries to load (using Fetch) and parse MarkDown files as HTML.</dd>

  <dt>index.css</dt>
  <dd>A small, clean CSS file that uses modern layout tools like the modern FlexBox CSS and the upcoming Grid (which is "upcoming" in that most browsers don't support it yet).</dd>

  <dt>nav.md</dt>
  <dd>The article list as a MarkDown file that creates a simple list of links to the pages.</dd>

  <dt>ReadMe.md</dt>
  <dd>A ReadMe.md file that most repositories have that doubles as the "home page" content of the web page.</dd>

  <dt>.nojekyll</dt>
  <dd>Required to prevent GitHub from default-rendering the site as a Jekyll website (which prevents getting the MarkDown files via Fetch).</dd>

  <dt>404.html</dt>
  <dd>To re-direct the user to the home page</dd>
</dl>

I'm using Vue and Vue-Router to help accomplish these tasks. It's important to me that the site makes it friendly for the visitor to bookmark articles (*#DontFearTheHashBang*). Also, since there is no other "dynamic" aspects than having more posts to share, I would like it to work as a SPA (Single-Page-App).
