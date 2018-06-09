---
Title: The Range of DotNetNuke® Extensions
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# The Range of DotNetNuke® Extensions

---
## The Range of DotNetNuke® Extensions

# TODO: Add TODO Comments
 
- Add TODO Comments

 
# The Range of DotNetNuke® Extensions
 

In this article, I will walk you through the various kinds of DotNetNuke® Extensions that can be created on the DNN® framework. Today, there are over ten different categories of Extensions you can create for DotNetNuke, each with their own characteristics and targeted functionality within the DotNetNuke framework.

 

I'll cover each category of extensions and describe what distinguishes it from the others. At the end of this article, you will find links to tutorials and other resources to help you in developing your own particular add-in for DotNetNuke. Whether you are new to developing for DotNetNuke or have been building on DotNetNuke since the early years, I invite you to explore the range of possibilities open for you on this ever-expanding CMS framework.


# The Range of DotNetNuke® Extensions
 

The world of development for the DotNetNuke® framework has grown by leaps and bounds in the last few years. It used to be that if you created 3<sup>rd</sup> party add-ons to DotNetNuke, you were either a Module developer or a Skin developer.

 

Today, there are over ten different kinds of add-ons you can create for DotNetNuke. With the release of DNN® 5, these add-ons have been officially dubbed ***Extensions*** and new Host and Admin facilities were added to help portal owners and developers manage the range of both core and 3<sup>rd</sup> party plug-ins.

 

Before diving in, it would be helpful to cover a few terms that will pop up throughout this article.

 
- **Extension –**An "extension" is the same idea as the term "add-in" or "plug-in". It refers to some kind of functionality or component that can be added to a DotNetNuke installation without the need to modify any part of the existing DotNetNuke framework.  - **Core –**The term "core" is often used to refer to the DotNetNuke framework itself. It can also be thought of as the API (Application Programming Interface) of the framework. As the heart of the DotNetNuke system, the functionality provided in the core is essential for the overall stability of the web site. From a developer's perspective, the core is something you frequently *use* but never *change*. Changing the core means that your web site immediately becomes incompatible with future releases, and maintenance becomes a nightmare. All DotNetNuke extensions make use of the core, but they never change the core to achieve their goals.  - **Module –**This is a somewhat loaded term in DotNetNuke. In its general usage, it can be almost the same as the term "Extension". DotNetNuke comes with over 25 built-in modules that bring all sorts of functionality that is commonly expected of a Content Management System (CMS). In its narrowest sense, however, the term "Module" refers to a particular type of extension in DotNetNuke. Whenever you read or hear this term, you will probably need to look at the larger context to get a sense of what is meant.  - **Skin –**Like the term "Module", the term "Skin" has both a narrow and broad meaning. In it's broad meaning, a "Skin" is a set of components whose sole purpose is to provide the "look and feel" of a website. In its narrower sense, a "Skin" is a specific type of extension that is concerned with the layout and design of an individual page. Skins are totally separate from the functionality of the website and can be easily interchanged without ever breaking the site.

 
## Types of DotNetNuke Extensions
 

As of this writing, there are eleven categories of extensions for DotNetNuke. Although there are so many different categories of extensions distinguished by DotNetNuke, they still largely fall within three groups: ***Module-like extensions*** which provide some added functionality, ***Skin components*** which focus on the visual aspect of a portal, or **Language extensions** that deliver Internationalization support for portals.

 

The "Module-like" group includes the **Authentication System**, **Dashboard Control**, **Library**, (traditional) **Module**, and **Provider** extensions. Each of these are written to manage content or provide some kind of added functionality to a DotNetNuke portal. To create these, you almost certainly have to be a "coder". At the programming level, these extensions often integrate heavily with the DotNetNuke core.

 

Skin components include extensions such as the **Container**, **Skin**, **Skin Object**, and the **Widget**. Producing these kinds of extensions often blend artistic skills in website design along with technical skills in HTML/CSS and image-manipulation software like PhotoShop. **Widgets** are a fairly new type to DotNetNuke; they act as client-side extensions and enhancements to skins, containers and skin objects. Primarily written in JavaScript, widgets can also be useful additions to the traditional Module as well as other types of DotNetNuke extensions.

 

Language extensions in DotNetNuke deliver Internationalization support to DotNetNuke portals. Internationalization has to do with rendering the literal (or "hard-coded") parts of the portal into different languages across the globe. There are two types of language extensions: the **Core Language Pack** and the **Extension Language Pack**. These extensions are enhancements to existing modules and core elements of DotNetNuke. Creating these extensions does not involve coding expertise; these require expertise in Human languages, as well as familiarity with English (the default language of DotNetNuke) and the intent and phrases used in the various UI components of DotNetNuke and its modules.

 
## How We Got Here
 

The huge increase in the variety of possible DotNetNuke extensions has been made possible by two factors. The first was the desire to create a single, unified approach to dealing with installing and uninstalling extensions. Previously, installing modules was somewhat different from installing skins, and that in turn was also different from installing language packs. These differences brought an extra (and unnecessary) level of complexity to managing a portal. With the growing capabilities (and 3<sup>rd</sup> party extensions) for DotNetNuke, the time seemed right to develop a unified way of managing extensions.

 

The second factor was a desire from the community to see DotNetNuke more "pluggable". Developers wanted the ability to supply alternative ways of doing things without needing to change the "core". Part of the success of DotNetNuke has been its use of the Provider architecture for various components such as the DAL (you could use MS SQL or Oracle or other providers for the data access layer) and the Rich Text Editor (remember FCKEditor before the days of Telerik's RADEditor?). In order to make it easier to swap out various components that used to be intertwined more closely with the DNN Core, the developers at DotNetNuke have increased the use of Providers for all sorts of items. In fact, Providers are now a very distinct item in the range of DotNetNuke extensions.

 

In the following sections, I'll cover each of these extension categories and describe what distinguishes them from other extensions. At the end of this article, you will find links to tutorials and other articles to guide you in developing particular extensions.

 
## Authentication System
 

**Authentication System** extensions are all about validating a user's access to a DotNetNuke portal. These types of extensions are treated differently from other types of extensions specifically because of their implications for the security of the entire portal.

 

LiveID and OpenID are two examples of alternate authentication systems. These extensions allow administrators to offer single-sign-on options to their users. That way, a user might choose to use their Google or Yahoo or Microsoft Live account as a simple one-click way to log into the website. It makes it easier when users have only one login id and password to remember when jumping between websites.

 

There are some essential elements to creating an Authentication System in the eyes of DotNetNuke. An Authentication System must provide a login control, a settings control and an optional logout control. Additional controls may be provided, of course, but these are required for the DotNetNuke core to ensure that any custom Login page set up by an administrator will always have at least one system in place for logging in.

 
## Container
 

**Container** extensions are part of the suite of skinning extensions. Containers are a subset of skin extensions. Whereas skin extensions apply to pages, containers apply to modules on a page. They "wrap" modules and give a higher level of granularity to the site administrator in managing the overall look of the site. Containers are independent of skin extensions and can be mixed and matched with skins from the same or different skin packages. They are effectively a "skin within a skin".

 

Containers can be developed as either plain HTML designs with token-based placeholders for DNN controls or as straight server-side user controls (with the extension ".ascx"). When developed as an HTML design, the DotNetNuke framework will parse the HTML and produce an ASCX user control, replacing each "token" with the corresponding DNN or 3<sup>rd</sup> party user control. This token-based approach to converting HTML skin elements into server-side user controls allows the skin designer to focus on the design (look & feel) without having to get hung up on the functionality.

 

DotNetNuke comes with a number of container-level user controls/tokens that can be inserted by the developer. <font style="background-color: rgb(255, 255, 0);">èstart list of tokens here

 
## Core Language Pack
 

**Core Language Pack** extensions are …

 

> **Note:** If you are creating a Language Pack the Language must already be defined in the Admin/Languages module.

 

IMAGE

 
## Dashboard Control
 

**Dashboard Control** extensions are a specialty-case module that provides reporting capabilities for the DotNetNuke installation. These are meant to extend the Dashboard page under the Host and Admin menus.

 
## Extension Language Pack
 

**Extension Language Pack** extensions are …

 

> **Note:** If you are creating a Language Pack the Language must already be defined in the Admin/Languages module.   
> **Note:** If you are creating an Extension Language Pack the Extension must already be defined.

 



 
## Library
 

**Library** extensions are a ubiquitous entity in that they can represent items that extend the core or be totally independent and unaware of anything DotNetNuke. They can relate to any or all of the layers of a standard web applications: UI, Business Logic Layer, or Data Access Layer. They can be the basis for web services, desktop integration, or any host of items.

 

The key concern for a Library is that it provides *supporting* functionality for other extensions. Libraries are not useful in-and-of themselves; they exist to serve others. It's not unusual to imagine a developer who has a whole suite of modules with common functionality that can be wrapped up in a single distinct library. The use of libraries makes it much easier to provide support and maintainability across a range of applications. That's why they tend to make up the heart of most desktop and web development around the globe.

 

In the DotNetNuke world, however, library extensions are still quite rare. Since DNN 0#.0#.0#, the core has shipped with a single library extension: Telerik Controls.

 
## Module
 

**Module** extensions are representative of perhaps 90% of the (non-skin) 3<sup>rd</sup> party plug-ins to DotNetNuke.

 



 
## Provider
 

**Provider** extensions are …

 

Today, DotNetNuke ships with various providers already installed. There are providers for caching, data, the HTML editor, logging, membership, module caching, navigation, permissions, scheduling, search, and the site map. Each of these are clear opportunities for extending and improving on what DotNetNuke offers out-of-the-box.

 
## Skin
 

**Skin** extensions are the top-level piece to the suite of skinning extensions. Skins represent the layout & design of an entire page. Like containers, skins can be designed as HTML files with tokens for DNN controls, or they can be created as ASCX user controls.

 

DotNetNuke comes with a number of skin-level user controls/tokens that can be inserted by the developer. <font style="background-color: rgb(255, 255, 0);">èlist skin tokens hereç

 



 
## Skin Object
 

**Skin Object** extensions are "min-modules" that provide common functionality in the UI. What makes these unique is that they are designed to supplement skins and containers.

 

Skin Objects are represented in HTML-designed skins and containers by ***tokens***, which are typically upper-case identifiers wrapped in square brackets. For example, there are these tokens which are built into the DotNetNuke framework: LOGO, LOGIN, SEARCH, and MENU. To illustrate, you could place the SEARCH token inside an HTML-designed skin's table cell as follows.

 
&lt;td&gt;[SEARCH]&lt;/td&gt;

<!--CRLF-->
 

Skin objects can also be placed in ASCX-designed skins and containers as ordinary user controls. To do this, you would have to include a @Register directive to import the user control and then place the user control just as you would place any ASP.NET control. This example shows the @Register directive for the SEARCH token, followed by a sample table cell with the DNN Search control.

 
&lt;%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    &lt;td&gt;&lt;dnn:SEARCH runat="server" id="dnnSEARCH" /&gt;&lt;/td&gt;

<!--CRLF-->
  
 
### Skin Objects and the Skin Designer
 

If you intend on allowing your skin object's attributes to be edited in the Skin Designer (on the Admin->Skins page), then you will need to follow a certain set of rigid conventions.

 

First, you must have an Xml file whose name matches the user control's (.ascx) name that is registered as the skin object's Control Source. Thus, if your skin object's user control is called "UltraHot.ascx", then you would need to have a file named "UltraHot.xml" with <Setting> tags for each editable property. Here is a sample.

 
&lt;Settings&gt;

<!--CRLF-->

        &lt;Setting&gt;

<!--CRLF-->

            &lt;Name&gt;ShowWelcom&lt;/Name&gt;

<!--CRLF-->

            &lt;Type&gt;Boolean&lt;/Type&gt;

<!--CRLF-->

            &lt;Help&gt;True to show the welcome message.&lt;/Help&gt;

<!--CRLF-->

            &lt;Value&gt;False,True&lt;/Value&gt;

<!--CRLF-->

        &lt;/Setting&gt;

<!--CRLF-->

        &lt;Setting&gt;

<!--CRLF-->

            &lt;Name&gt;UserNameFormat&lt;/Name&gt;

<!--CRLF-->

            &lt;Type&gt;String&lt;/Type&gt;

<!--CRLF-->

            &lt;Help&gt;Format to use when displaying the user's info.&lt;/Help&gt;

<!--CRLF-->

            &lt;Value&gt;UserName,DisplayName,FirstName,LastName &lt;/Value&gt;

<!--CRLF-->

        &lt;/Setting&gt;

<!--CRLF-->

        &lt;Setting&gt;

<!--CRLF-->

            &lt;Name&gt;WelcomePrefix&lt;/Name&gt;

<!--CRLF-->

            &lt;Type&gt;String&lt;/Type&gt;

<!--CRLF-->

            &lt;Help&gt;The text to place before the User information (UserNameFormat).&lt;/Help&gt;

<!--CRLF-->

            &lt;Value&gt;&lt;/Value&gt;

<!--CRLF-->

        &lt;/Setting&gt;

<!--CRLF-->

        &lt;Setting&gt;

<!--CRLF-->

            &lt;Name&gt;WelcomeSuffix&lt;/Name&gt;

<!--CRLF-->

            &lt;Type&gt;String&lt;/Type&gt;

<!--CRLF-->

            &lt;Help&gt;The text to place after the User information (UserNameFormat).&lt;/Help&gt;

<!--CRLF-->

            &lt;Value&gt;&lt;/Value&gt;

<!--CRLF-->

        &lt;/Setting&gt;

<!--CRLF-->

    &lt;/Settings&gt;

<!--CRLF-->
 

Next, the formatting of the user control's presence in the skin or container must follow a specific format, based on the token name. The following line shows the pattern.

 
&lt;dnn:TokenName runat="server" id="dnnTokenName"

<!--CRLF-->
  
 

Note that the order of the runat and id attributes must match the pattern. Also, the values must be enclosed in double quotes (not single quotes) and the spaces and upper/lower case characteristics must match.

 

So, if the token for the UltraHot.ascx user control is HOTWELCOME, then the @Register directive must set the tag prefix as "dnn" and then the user control must be referenced using "dnn:HOTWELCOME" and given an ID of "dnnHOTWELCOME". Here are the resulting lines that must be present.

 
&lt;%@ Register src="~/DesktopModules/HOTDemo/UltraHot.ascx" 

<!--CRLF-->

                 tagname="HOTWELCOME" tagprefix="dnn" %&gt;

<!--CRLF-->

    &lt;dnn:HOTWELCOME runat="server" id="dnnHOTWELCOME"

<!--CRLF-->
 

Lastly, the control must end with the short-form closing tag (" />"). If the particular attribute for the setting being changed in the Skin Designer is present, then that attribute will be removed and replaced with the new value. If the attribute is not present, then it will simply be added with your specified value.

 

> Note that as of DNN 5.4, there are two notable limitations to the Skin Designer.
> 
>  
> 
> The first is a limitation on the ability of the Skin Designer in manipulating the skin object's attributes. The Skin Designer can only be used to add attributes with a non-empty value. So, if you intend site owners to be able to set an attribute to an empty string or to have it removed from the skin object, they won't be able to do this through the Skin Designer.
> 
>  
> 
> The second limitation is that the Skin Designer expects only one instance of the skin object on the page (with a specific control ID).

 
## Widget
 

**Widget** extensions are fairly new to DotNetNuke (as a type of extension). Their primary purpose is to run client-side – sometimes providing integration with server-side components, other times focusing on giving a rich user experience in the browser.



---
