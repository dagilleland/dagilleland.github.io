---
Title: Ah, Javascript...
Created: 9/6/2009 3:03:48 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Ah, Javascript...

---

## Ah, Javascript...


Normally I wouldn't expect myself to find a reason to blog about Javascript. After all, for anyone who's gone through the browser wars having tried to do dhtml the hard way *and* be browser friendly, Javascript, CSS, HTML, & DOM differences would be enough to make one vow never to touch the stuff again, particularly when the easy-to-control server-side .NET programming became available.



But, if you are interested in AJAX, you'll probably get back to the Javascript thing again (like I am about to).



So, along that vein, I thought I would note [a post by Bertrand Le Roy](http://weblogs.asp.net/bleroy/archive/2006/09/29/A-nice-and-compact-way-to-coerce-to-Boolean-in-JavaScript.aspx) about a nice, tight-coded way to ensure a javascript function returns a Boolean (as opposed to a null, undefined, or object. He also shared a way to force an undefined to return a null. Here's the code snippets:



> | <font face="Courier New"><font size="2">something ? <span style="color: #0000ff">true</span> : <span style="color: #0000ff">false</span> |
> 
>   
> <font size="2" face="Courier New">!!something
> 
> 
> 
> <font face="Courier New"><font size="2"><span style="color: #0000ff">return</span> something || <span style="color: #0000ff">null</span>;



Ah! That's refreshing! Brings me back to my old C++ days....





---

