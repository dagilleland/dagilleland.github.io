---
Title: Moving a Windows App to the Web
Created: 6/18/2009 11:08:18 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Moving a Windows App to the Web

## Abstract


This article looks at the main steps to convert a simple Windows application into a Web application.


---

## Moving a Windows App to the Web

## Abstract


This article looks at the main steps to convert a simple Windows application into a Web application.


## Overview


One of the big advantages to coding in Visual Studio .NET is that there is little difference between what we do in a Windows application and what we do in a Web application. (For vetran programmers, you may argue that there is a big difference, and while that is true *under the hood* of what you need to code for an application, there is far, far more stuff that just doesn't change when moving from Windows to Web apps.)



In this article, we'll look at creating a Web form equivalent of a simple Windows form that holds text boxes, combo boxes, buttons, and a datagrid. Here's the "before and after" pictures:



[[picture here]]


### What Changes?


Code-wise, there is really very little that changes between these two apps. Here's a quick summary:


- We need to call .DataBind() for datagrids and drop-down lists
- no more messagebox.show available
- page.load has an IsPostBack variable
- .displaymemeber -> .datatextfield       
.valuemember -> .datavaluefield
- how to add/retreive an item from viewstate
- solutions with multiple projects      
 - must add a ref. to the class library proj into the pl project
 - must add the namespace qualifier to any code accessing our bll


<script src="/DesktopModules/itcMetaPost/js/mg.js" type="text/javascript"></script>


---

