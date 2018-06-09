---
Title: Preserving metaPost Goodness
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Preserving metaPost Goodness

---
## Preserving metaPost Goodness


If you post via WLW through metaPost to your DNN blog/news articles/etc, then you've probably noticed that any edits via the browser will cause the metaPost script goodness to be stripped out. This is by design (not metaPost's, but the Rich Text Editor) because it's not a good idea to allow scripts in the browser for rich-text-editing.

 

There may be a fix coming for that, though. For those who need a quick "hack", just include the following script in WLW when re-publishing and you'll (hopefully) get that nice goodness back again. It's not a guarantee, of course. This page is actually having troubles showing the tabs. Again, the script it getting stripped, and it's causing a few problems.

 

[What the Script Does](tb3) [How it Does It Work?](tb4)

 

[tb3]

It allows cool things like tabs & pictures & stuff. This is a tab, BTW. And this is a picture of what the stuff looks like in WLW when editing.  



 

[![SNAGHTMLc988d2](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-PreservingmetaPostGoodness_F8CA-SNAGHTMLc988d2_thumb.png "SNAGHTMLc988d2")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-PreservingmetaPostGoodness_F8CA-SNAGHTMLc988d2.png)[![SNAGHTMLcb0226](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-PreservingmetaPostGoodness_F8CA-SNAGHTMLcb0226_thumb.png "SNAGHTMLcb0226")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-PreservingmetaPostGoodness_F8CA-SNAGHTMLcb0226.png)

 

[/tb3]

 

[tb4]

It's all made possible by a little script added by metaPost. Here's the script tag:  



 

<script type="text/javascript" src="http://www.hot4dnn.com/DesktopModules/itcMetaPost/js/ca0c21fbdc85f6a1597417732d450607.ashx?hs=1"></script>

 

You can add certain parameters to this script. Notice the "hs=1"? That's for the image stuff. If you want tabs, you can put "tabs=1". Here's another sample.

 

<script type="text/javascript" src="http://www.hot4dnn.com/DesktopModules/itcMetaPost/js/ca0c21fbdc85f6a1597417732d450607.ashx?tabs=1&amp;hs=0"></script>

 

And here's a [link to the Javascript itself](/DesktopModules/itcMetaPost/js/ca0c21fbdc85f6a1597417732d450607.ashx?hs=1).

 

[/tb4]

 

<script type="text/javascript" src="http://www.hot4dnn.com/DesktopModules/itcMetaPost/js/ca0c21fbdc85f6a1597417732d450607.ashx?hs=1"></script>



---
