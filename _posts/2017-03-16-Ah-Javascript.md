---
title: Ah, JavaScript...
date: 2017-03-16
tag: JavaScript
---
# Ah, JavaScript...

> Republished from earlier blog

Normally I wouldn't expect myself to find a reason to blog about JavaScript. After all, for anyone who's gone through the browser wars having tried to do html the hard way *and* be browser friendly, JavaScript, CSS, HTML, & DOM differences would be enough to make one vow never to touch the stuff again, particularly when the easy-to-control server-side .NET programming became available.

But, if you are interested in AJAX, you'll probably get back to the JavaScript thing again (like I am about to).

So, along that vein, I thought I would note [a post by Bertrand Le Roy](http://weblogs.asp.net/bleroy/archive/2006/09/29/A-nice-and-compact-way-to-coerce-to-Boolean-in-JavaScript.aspx) about a nice, tight-coded way to ensure a JavaScript function returns a Boolean (as opposed to a null, undefined, or object. He also shared a way to force an undefined to return a null. Here's the code snippets:

```js
something ? true : false

!!something

return something || null;
```

Ah! That's refreshing! Brings me back to my old C++ days....
