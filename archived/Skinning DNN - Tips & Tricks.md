---
Title: Skinning DNN - Tips & Tricks
Created: 6/18/2009 11:02:53 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Skinning DNN - Tips & Tricks


This article highlights some tips, tricks, and patterns to creating Skins and Containers for DNN. In keeping with the philosophy of "cheap developer tools," I'm going to focus on how to create these using the following software:


- EditPlus - a text editor with some cool features (~$30US, or use the trial version)
- Serif PhotoPlus - Version 6 is the latest free version from[www.FreeSerifSoftware.com](http://www.freeserifsoftware.com/) - it's a graphics editor that gives a lot of functionality for just the right price!


---

## Skinning DNN - Tips & Tricks

## A Planned Approach to Skinning


One of the first things that a person encounters when skinning for DNN is that there can be a lot of details to attend to. To be proficient at skinning, you should (at the least) know HTML, CSS, and a bit of XML. You should also get familiar with using graphics editors (like Serif's PhotoPlus or Adobe's PhotoShop).


### Consistency


Building a pattern of consistency in skinning is essential (due to all the little details that typically crop up). Here's a pattern I try to use:


- Make sure each Skin Object (except the SolpartMenu object) that supports a CssClass attribute (or other stylesheet classes) is given a CSS style using this naming pattern: ***SkinObjectName*Style**
 - To prevent naming conflicts when having more than one Skin or Container in a package, I will append an ***\_SkinName*** to the style; e.g.: **BreadcrumbsStyle\_default** and**BreadcrumbsStyle\_dark** for the *default.html* and *dark.html*skins, respectively.
- Confine my work to using about 3-5 distinct table layouts; these will handle abut 80% of the skinning jobs I'll really need
- Use a standard set of names for content panes in all my skins; this will ensure that when I switch from one skin to another, hardly any of the modules will default to the main ContentPane if the original pane name doesn't exist in the new skin. I use the following names for my panes (and most developers use similar names):      
 - ContentPane (This is required by all skins)
 - LeftPane
 - RightPane
 - HeaderPane
 - FooterPane
 - InfoPane
 - SiteInfoPane
- Always try to use a minimal amount of CSS styles. Also, avoid using width and height attributes of HTML elements if they can instead be put into the CSS stylesheet.
- Create my rough-draft HTML with some in-line style attributes, to do quick'n'dirty visual checks of the the look I'm trying to achieve. when I'm satisfied with the CSS styles, I'll move them to the CSS stylesheet file.


### Make Use of Templates


Once you've done a couple of skins, you will quickly realize that most of the work in skinning is simply repetitive stuff. You can minimize this repetitive labour by using templates to ease your work.



I use Edit Plus' ClipText feature to hold common code snippets. I have six key clip text files: three for Skins and three for Containers. Basically, making a Skin and making a Container are pretty much the same, but for each of these I need to create the following files:


- .html - an HTML Layout for the skin (including Skin Object references)
- .xml - an XML file for the Skin Object Attributes
- .css - some CSS Styles to be used by my skin/container


<script src="/DesktopModules/itcMetaPost/js/mg.js" type="text/javascript"></script>


---

