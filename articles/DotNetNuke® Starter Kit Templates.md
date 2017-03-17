---
Title: DotNetNuke® Starter Kit Templates
Created: 8/12/2013 3:50:00 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# DotNetNuke® Starter Kit Templates

---

## DotNetNuke® Starter Kit Templates

# About DotNetNuke® Starter Kit Templates
 

The DotNetNuke Starter Kit templates allow module and skin developers to quickly get started with building their DNN® extension. They are especially helpful for those new to creating extensions on the DotNetNuke platform.

 

The Starter Kit comes with a template for creating a fresh DotNetNuke Web Site, another for creating a Skin package, and several templates for developing DotNetNuke modules. This article will offer a tour of each of these templates and give a description of what they are all about.


# About DotNetNuke® Starter Kit Templates
 

The DotNetNuke Starter Kit templates allow module and skin developers to quickly get started with building their DNN® extension. They are especially helpful for those new to creating extensions on the DotNetNuke platform.

 

The Starter Kit comes with a template for creating a fresh DotNetNuke Web Site, another for creating a Skin package, and several templates for developing DotNetNuke modules. This article will offer a tour of each of these templates and give a description of what they are all about.

 
## DotNetNuke Web Application Framework
 

[![SNAGHTML28bb82](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-SNAGHTML28bb82_thumb.png "SNAGHTML28bb82")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-SNAGHTML28bb82.png)The **DotNetNuke Web Application Framework** template is available when you create a New Web Site. It is the starting point for all your DNN extension development, as it creates a fresh installation of the DotNetNuke web application on your local machine as a Visual Studio Web Site project.

 

To use this template, select “New Web Site…” from the File menu in Visual Studio. This will open a dialog box with all of the available web site templates. If you have installed the DNN Starter Kit, then you should see the template under “My Templates”. If you don’t see it (and know that you have installed the Starter Kit), then check that you have selected “Visual Basic” as the language. DotNetNuke is written entirely in VB.NET (although a recent parallel version in C# has come about).

 

If you still don’t see the template, then make sure that you didn’t accidentally choose “New Project…” from the File menu; choosing to start with a “New Project” is quite different than starting a “New Website”. The distinction between these two approaches becomes even more critical when you start building your own module extensions for DotNetNuke.

 
### Some History
 

This is a good time to highlight the difference between creating a **Web Site Project** (WSP) and a **Web Application Project** (WAP) in Visual Studio. These two types of projects are complementary, but not entirely interchangeable in a “cut & paste” sort of way. In short, the big difference in the WSP and WAP lay in the way that the VB.NET/C# code-behind is compiled. WSP files are compiled “dynamically” or “on-the-fly” by the web server; this results in a number of smaller libraries (.dll) for the various pages in your application. WAP files, on the other hand, are pre-compiled, meaning that you will get a distinct .dll for your project. A little bit of a history lesson will reveal the reasons behind the presence of these two seemingly incompatible models.

 

The original versions of Microsoft Visual Studio (Visual Studio .NET and VS2003) gave developers a single model for creating web applications: the “ASP.NET Web Application”, which was basically a project that had to be compiled before it could be deployed to a production environment. This was the environment in which DotNetNuke was born. When Microsoft came out with Visual Studio 2005, they had scrapped this model in favor of a more “dynamic” approach: the Web Site Project (WSP). This new model was characterized by how VB.NET/C# source code was compiled. The WSP allowed code to be compiled “on-the-fly”, or dynamically. This was great for a number of reasons, not the least of which was allowing new developers a simple way to code, test, and deploy their web sites

 

The WSP model, however, was a bit of a step backward for more complex applications. Without a pre-complied web application, it was impossible for developers to protect their intellectual property, because the entire source code was required . There were also some problems with implementing Provider Patterns (which DotNetNuke was doing) and making references to distinct .dlls in the web.config. Microsoft soon realized the need to address these issues as the developer community grew more vocal. In fact, Shaun Walker and a number of other early DNN Core developers were among those instrumental in bringing these concerns to light. Without their direct feedback to the Microsoft team in charge of Visual Studio, it might have taken a good while longer to see this problem fixed. In the end, Microsoft released the Web Application Project (WAP) in VS2005 Service Pack 1 as a resurrected form of their original ASP.NET Web Application project template.

 

Around this time, the DotNetNuke framework underwent a major revision as it switched over to using WSP as a central part of its framework. This switch-over introduced a number of breaking changes which affected module developers. While painful, the overall result was very positive as it gave a great opportunity to make improvements to the overall architecture of DotNetNuke.

 

The changes to DotNetNuke’s framework also brought changes to the starter kit.Now, module developers were presented with starter kit templates based on the new WSP model. It was not until Microsoft’s release of SP1 for VS2005 that it was possible to bring back a clean WAP-based template for DNN module development. As of DNN 5.0, the Starter Kit boasts a total of seven templates for C# and VB.NET (one project template and six DNN extension templates).

 
## DotNetNuke Dynamic Module (WSP)
 

The **DotNetNuke Dynamic Module** template represents the de-facto pattern for creating modules since some of the earliest versions of the DotNetNuke Starter Kit. Available in either **VB.NET** or **C#**, it is a template for creating a **Web Site Project** (WSP) or “Dynamic” module (as opposed to creating a “Web Application Project”, or WAP, based module). The files in this template will work as-is to create a fully functional module similar to the HTML module. The purpose of this template is not only to give a starting point for the developer, but also to demonstrate a possible module design. If you are looking for a sample of the most common places that your module will hook into the DotNetNuke framework, then this is a good template to explore.

 

The design of the module allows a user to add or edit content as regular HTML using DotNetNuke’s TextEditor control. Many separate blocks of content can be added per module, and each time content is added or edited the module will track the “who” and “when” of the user who last modified the content. Furthermore, the module allows this information to be displayed in a template-based fashion which can be customized through the module’s Settings user control.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_2.png) [![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_1.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_4.png)

 

This template will generate folders in two locations: DesktopModules and App\_Code. The folder of items under DesktopModules contain user controls for View and Edit functionality as well as a user control for the module’s Settings. The folder under App\_Code contains classes for the business logic layer (BLL) and data access layer (DAL) as well as a class for the custom business object (CBO).

 

When using this template as the starting point for your own module, plan on completely replacing most of the code in all of the user controls and classes. Most of the time, your own module will have a design that is very different, so you can expect to do a fair bit of work re-writing in order to adapt it to your own project idea. Nevertheless, this template is a good starting point for learning the basics of what you will find in a typical DotNetNuke module.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_3.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_8.png) [![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_2.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_6.png)

 
## DotNetNuke Simple Dynamic Module (WSP)
 

The **DotNetNuke Simple Dynamic Module** template is a trimmed down version of the full DotNetNuke Dynamic Module template. It is only available an a **VB.NET** web item template. This simple version contains only the bare essentials needed to get started with your own module. This template is excellent for times when you don’t want to re-write code from the full version or when you only need a thin shell, perhaps because you’re intending to do all of your work in the code-behind of the form. It’s also a good choice when you need to create a DotNetNuke project that is actually a collection of related modules, such as the kind of supporting modules that make up the DotNetNuke Blog module.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_4.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_10.png) [![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_7.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_16.png)

 
## DotNetNuke Compiled Module (WAP)
 

The **DotNetNuke Compiled Module** template is a full-fledged Web Application Project (or WAP for short). It is available in both **VB.NET** and **C#**. These Compiled Module templates are available in both C# and VB. Among the benefits of this approach in module development is that the underlying code of the module can be protected from reverse engineering, thus allowing some measure of protection of intellectual copyright.

 

In the early days of DotNetNuke (circa Visual Studio 2003), almost all modules were written as Web Application Projects. In fact, the entire DotNetNuke framework was a single Web Application Project of its own. When Visual Studio 2005 débuted, Web Application Projects were not included. In their place was the new concept of a ***Web Site*** – a special type of project that contained code that was compiled dynamically (or “on the fly”) by the web server.

 

One of the goals of moving away from Web Application Projects and toward Web Site projects was to make it simpler for beginning developers to quickly create and deploy web sites. A downfall, however, was that this new and simpler approach was unable to scale well for more complex web site architectures. In fact, it is thanks in large part to Shaun Walker and others in the DotNetNuke core team that Microsoft finally brought back the Web Application Project template in VS2005 Service Pack 1.

 

Eventually, DotNetNuke moved from being a WAP (Web Application Project) to a dynamic Web Site. The essence of the site’s architecture was retained, and a whole new set of possibilities was opened up for developers. Still, many DNN module developers of the day preferred using WAP rather than this new dynamic style or modules. Eventually, the DotNetNuke Compiled Module template was brought into the Starter Kit to provide the standard WAP approach.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_thumb_6.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-b8baeafb5853_9284-image_14.png)

 
## DotNetNuke Skin (WSP)
 

The **DotNetNuke Skin** template is a WSP template in **VB.NET** that is a starter kit for making a **Skin** and a **Container**. Both the Skin and the Container are provided as HTML templates (.htm) and User Controls (.ascx). They also come with a Cascading Style Sheet (.css) and an XML configuration file for skin/container tokens. The intended audience for this template are website designers (as opposed to programmers/developers).

 

If you’re new to DotNetNuke’s skinning engine, you will find there’s a bit of terminology to learn. First, in DotNetNuke the term “skinning” refers to creating a package of items that work to control the look and feel of a website. It’s very similar to the idea of creating a desktop theme for your computer or WordPress blog. Next, the term “skin” is one that actually has two meanings. In general terms, an entire skinning package is referred to as a “skin”. In a more detailed sense, a “skin” is a type of item in a skinning package that acts as a page-level theme. A “container” is another item in a skinning package; containers are a type of mini-theme that is used to wrap individual modules on a page.

 
## (Coming Soon) DotNetNuke MVP Module (WAP)
 

I’ve had the good fortune to get involved as a volunteer on the [Quality Assurance Team](http://www.dotnetnuke.com/Community/Teams/QualityAssurance/tabid/1557/Default.aspx). My first tasks have been to contribute to the TestDrivenDNNModule project on CodePlex. This project will be the basis for another DNN template based on the Model-View-Presenter (MVP) pattern. Based off of the close cousin to the Model-View-Controller (or MVC) project type, the Module View Pattern (or MVP) allows developers to have the familiarity of Web Forms with the testability and abstractions of MVC projects.

 

By its very nature, the MVP module is done as a Web Application Project (WAP). The (soon to be released) MVP template is intended for developers who want to incorporate unit testing in their module development processes. Anyone interested in TDD (Test-Driven-Development) or BDD (Behavior-Driven-Development) should take a gander at this template. It will also be of interest to those with experience in MVC (Model-View-Controller) programming, as there are many commonalities between these approaches (at least, from a TDD point of view).

 
## Ultra-Simple Modules (Not a Template)
 

All of the above approaches to developing modules begin with either a Project or an Item template that the programmer creates in Visual Studio. It’s possible, however, for a Super User (or Host) to create ultra-simple modules through DotNetNuke’s own interface. You don’t even need Visual Studio to create a DNN module!

 

In fact, the Module Definitions page under the Host menu of DotNetNuke allows a developer to create a single-page module whose source code can be edited in the browser. This simple user control uses inline VB or C# code rather than the code-behind approach that’s become the defacto-standard way of writing user controls and web forms. This inline code blends together the VB/C# server-side script with the ASP.NET mark-up. The approach is actually quite “retro” because in the days of ASP (before ASP.***NET***), server-side code was routinely mixed in with HTML mark-up.

 

While many DNN module developers will opt for one of the Starter Kit templates, this quick-n-dirty approach is a great way to do modules that are extremely simple or that don’t need the extra burden of a CBO, BLL or DAL to achieve its goals.

 
# Conclusion
 

Each of these DotNetNuke Starter Kit templates represents a significant productivity boost for those new to building DNN extensions. However, they don’t represent the entire range of possible extensions (or possible templates, for that matter). Since DNN 5.1, there have been a number of possible extensions: Module, Dashboard Control, Provider, Authentication System, Library, Skin, Container, Skin Object, Widget, Core Language Pack, and Extension Language Pack. With these various extension types comes and ever-growing set of opportunities for developers and designers in the DotNetNuke ecosystem.



---

