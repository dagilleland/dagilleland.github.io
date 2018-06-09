---
Title: PortalModuleBase – Under the Hood
Created: 8/12/2013 3:35:35 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# PortalModuleBase – Under the Hood

---

## PortalModuleBase – Under the Hood


![PortalModuleBase Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_9.png "PortalModuleBase Class Diagram")In the DotNetNuke® framework, modules developers can leverage a number of classes are available as base classes for their user controls. This article takes a closer look at **PortalModuleBase** which is typically used as a base class for View and Edit controls in standard module extensions.

 

This article is part of a suite of articles on module development basics.

 
- Module Extensions – Building the UI  
 - [UserControlBase](/Articles/tabid/62/articleType/ArticleView/articleId/40/UserControlBase-ndash-Under-the-Hood.aspx) - [PortalModuleBase](/Articles/tabid/62/articleType/ArticleView/articleId/47/PortalModuleBase-ndash-Under-the-Hood.aspx) - [ModuleSettingsBase](/Articles/tabid/62/articleType/ArticleView/articleId/41/ModuleSettingsBase-ndash-Under-the-Hood.aspx) - [ModuleInstanceContext](/Articles/tabid/62/articleType/ArticleView/articleId/42/ModuleInstanceContext-ndash-Under-the-Hood.aspx) - [View Controls](/Articles/tabid/62/articleType/ArticleView/articleId/43/Developing-View-User-Controls-for-your-DotNetNuke-Module.aspx) - [Edit Controls](/Articles/tabid/62/articleType/ArticleView/articleId/44/Developing-Edit-User-Controls-for-your-DotNetNukereg-Module.aspx) - [Settings Control](/Articles/tabid/62/articleType/ArticleView/articleId/45/Developing-a-Settings-User-Control-for-your-DotNetNukereg-Module.aspx) - [Resource Files (.resx)](/Articles/tabid/62/articleType/ArticleView/articleId/46/Working-with-Resource-Files-resx-in-your-DotNetNukereg-Module.aspx)

 - Module Extensions – Building the Back End  
 - [Building a Business Controller Class](/Articles/tabid/62/articleType/ArticleView/articleId/49/Building-a-Business-Controller-Class.aspx) - [CBOs – Your Module-Specific "Info" Classes](/Articles/tabid/62/articleType/ArticleView/articleId/50/CBOs-ndash-Your-Module-Specific-ldquoInfordquo-Classes.aspx) - [Building Your Module's Data Access Layer](/Articles/tabid/62/articleType/ArticleView/articleId/51/Building-Your-Modulersquos-Data-Access-Layer.aspx) - [Designing Database Tables for DNN Modules](/Articles/tabid/62/articleType/ArticleView/articleId/52/Designing-Database-Tables-for-DNN-Modules.aspx)


# PortalModuleBase – Under the Hood
 

PortalModuleBase is the base class for View and Edit controls of DotNetNuke® module extensions. This class extends the System.Web.UI.UserControl class to bring information to your module about the DotNetNuke framework. This information includes data about the user, the requested tab (page), and a bunch of portal-specific information. Before diving into this class, it's helpful to look at the complete set of classes in their hierarchy.

 

**![DotNetNuke UI Base Classes](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_10.png "DotNetNuke UI Base Classes")**

 

**PortalModuleBase** is typically used as the base class for View and Edit controls while the Settings control inherits from **ModuleSettingsBase**. These two classes form a chain in the class hierarchy that goes back to the UserControl class – the basis of all user controls (.ascx). In the middle is a DotNetNuke class called **UserControlBase**, which supplies information about the end-user who is accessing the page. Module developers will not directly inherit the UserControlBase for their user controls.

 

Notice that both PortalModuleBase and ModuleSettingsBase implement unique interfaces (IModuleControl and ISettingsControl). These interfaces allow DotNetNuke to work directly with your module when rendering a page. Or, to put it another way, these interfaces act as a way to "plug-in" to the DotNetNuke framework.

 

[![PortalModuleBase Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_thumb_4.png "PortalModuleBase Class Diagram (Click for larger image)")](/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_12.png)

 
## Key Members
 

PortalModuleBase has over 25 properties and a few methods. The majority of the properties are simple wrappers that get their values from the ModuleContext property (which is a ModuleInstanceContext object – you can learn more about this class through the related links at the end of this article). Module developers will typically focus on a few notable properties. Here are my "top-ten" key properties; all of the other members will be described later in this article.

 
- **EditMode** – (ReadOnly) This boolean value is set to true if the current user is an administrator of the page (and therefore has Edit permissions on the module).  - **IsEditable** – (ReadOnly) This boolean property checks to see if the page can be edited. DotNetNuke uses this to determine whether or not to show the Action menu when rendering the module on the page. To be editable, the page must be rendered in Edit or Layout mode and the user must have Edit rights to the module.  - **LocalResourceFile** – This is the complete path to the resource file (.resx) for the user control.  - **ModuleId** – This is the ID of this particular instance of the module. (Remember, any module extension may be added several times to a portal; each new instance is given a unique ModuleId.)  - **PortalId** – This ID represents the particular portal (website) instance inside the DotNetNuke web application. (DotNetNuke supports the concept of hosting multiple web sites in a single installation.)  - **Settings** – This is a Hashtable (key-value) collection of module settings that are specific to your module. It includes both the ModuleSettings and TabModuleSettings.  - **TabId** – This is the ID of the tab (page) on which the module resides.  - **TabModuleId** – The TabModuleId differs from the ModuleId in that the TabModuleId is unique for modules that are "shared" (or "mirrored") between tabs.  - **UserId** – This is the ID of the logged-in user currently accessing the module/page.  - **UserInfo** – This object contains all the information about the logged in user, such as their UserId, UserName, and DisplayName. It also includes an array of the names of roles to which the user belongs as well as other information on the user's profile. For performance reasons, some of the information (such as the Profile data) is "lazy-loaded", meaning that the values are only retrieved when needed. For anonymous users, this object is set to Nothing (null).

 
### PortalId and TabId
 

**PortalId** and **TabId** are frequently referenced by module developers in their user control's code. This is because they are often required as parameters to access various methods in the DNN API.

 

For example, the GetTab() method of the TabController class requires both of these properties in its parameter list. Another example is the FillUserCollection() method of the UserController which defines the PortalId as part of its parameter list. Yet another sample which requires a PortalId value is the GetRoleGroups() method of the RoleController.

 

The DNN API is not the only part that requires tab and portal IDs. Your own module may need this information for its own purposes. In any case, the TabId and PortalId are part and parcel of the overall context of any given module on a page.

 
### ModuleId and TabModuleId
 

If PortalId and TabId are an important part of the context of a module, then **ModuleId** is absolutely central. It's no surprise, then, to see this as the PortalModuleBase property most frequently used within module extensions (both third-party and core modules). Alongside the **ModuleId** is the **TabModuleId**, which helps in uniquely identifying a module on a page. To see how these properties relate to each other, it's important to understand how DotNetNuke handles modules on a page.

 

When someone adds a new module to a page, that module is assigned a unique ModuleId. This helps to distinguish each instance of that module from other instances. Because each module instance is unique, it can hold different data from other instances.

 

For example, if a user were to add two HTML modules to a page, each instance would be given a unique ModuleId (say 354 and 355). They can then be tracked as distinct entities and moved around as needed to different positions on the page or to different pages altogether. Each HTML module has its own content that can be edited entirely independent of other HTML module instances.

 

DotNetNuke also allows modules to be "referenced" on other pages. What this allows is the ability to create content in a single module and then show that exact same module instance on another page. For example, consider the case of a Contact module that is added to the "Home" page. That module might have a ModuleId of 542. If that exact same information were needed on another page (say, the "About Us" page), it would make sense to use the same module instance on both pages. That way, if the data were modified in one instance, then the changes would be reflected on both pages.

 

Still, DotNetNuke needs to tell them apart (so as to render them on the different pages). That is where the TabModuleId comes in. TabModuleId is unique for each module instance, including referenced modules. So, the sample of a ModuleId of 542 that is referenced on two pages, each "shared copy" or reference will still have unique values for the TabModuleId (such as 96 and 104).

 

![Shared Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_39.png "TabModuleId distinguished Referenced (Shared) Modules")

 

Despite the ultimate uniqueness of the TabModuleId, the ModuleId is the one that gets the most use by developers. This is (in part) because the ModuleId is often a required parameter for interacting with many of the API calls into the DNN framework. Additionally, the ModuleId is almost indispensible for any module that has its own tables in the database. At least one of the module's tables should have ModuleId as a foreign key column (preferably with Cascade Delete) in order to ensure that the table data will be cleared when a module is deleted from a page.

 
### Settings
 

The PortalModuleBase class defines a property called **Settings**. This property is a Hashtable of key-value pairs which contains module-specific settings. Module-specific settings are typically treated as distinct from the module's own custom business objects (CBOs). A helpful way to think of module-specific settings is to regard them as customizable constants or metadata that is used to affect the module's behaviour or presentation of the CBO data. These settings can then be used in the View and Edit user controls for the module.

 

The set of module-specific settings is made up of ModuleSettings and TabModuleSettings, and these rely on the ModuleId and TabModuleId respectively. The ModuleSettingsBase class (which directly inherits the PortalModuleBase and is itself inherited by the Settings.ascx for the module) is used to load and update the module-specific information when the end-user is editing the module's overall settings. It is in this context that the ModuleId and TabModuleId are used to access and modify module-specific settings. (For more information on the ModuleSettingsBase or the Settings user control, see the related links at the end of this article.)

 

Recall that when a module is referenced (or "shared") on separate pages (tabs) in a portal, then the data (embodied in CBOs) is also shared on those pages. However, sometimes developers want to share the CBO information while having different settings for each shared module instance. That's where TabModuleSettings come in. A shared module may have different values for TabModuleSettings among the shared instances. By contrast, if the settings information is stored in the ModuleSettings, then those values are the same for the shared instances. The following image illustrates this distinction.

 

![ModuleSettings vs TabModuleSettings](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_21.png "ModuleSettings vs TabModuleSettings")

 

By putting these values in the Settings property of PortalModuleBase, they are more easily accessible to the developer when coding the View and Edit user controls. As a Hashtable, all the developer needs to do is supply a key to the Settings property and cast the value to the required data type. For example, if there was a setting for showing or hiding the Fax number in the Contact Module, then the following code could be used to get the value from the Settings property.

 
If Settings("ShowFax") IsNot Nothing Then

<!--CRLF-->

        Dim ShowFax As Boolean = CType(Settings("ShowFax"), Boolean)

<!--CRLF-->

        Me.FaxInfo.Visible = ShowFax

<!--CRLF-->

    End If

<!--CRLF-->
 

It should also be noted that while the Settings property holds both ModuleSettings and TabModuleSettings, adding to or modifying the contents of this Hashtable will not cause those changes to be saved. Adding and modifying module-specific settings is supported through the ModuleSettingsBase class. Again, see the related links at the end of this article for further information on the ModuleSettingsBase class and developing a Settings user control.

 
### UserId and UserInfo
 

For user-specific information, the **UserId** and **UserInfo** properties supply everything relevant about the logged in user. The UserId is simply an integer that uniquely identifies an individual user (it's value is unique among all portals in the DNN application). The UserInfo property is actually an object (of type DotNetNuke.Entities.Users.UserInfo) that holds the UserId, UserName, Email, etc. For more information on the UserInfo class, see the related links at the end of this article.

 

For anonymous users (that is, when there is no logged-in user behind the page request), the UserInfo property will be Nothing (or null) while the UserId will hold a value of Null.NullInteger. NullInteger is a read-only property defined in the DotNetNuke.Common.Utilities.Null class. The NullInteger value has been defined as negative one (-1) since the early days of DotNetNuke, and it is unlikely to change. Still, it is a good programming practice to check the UserId against the NullInteger "constant" rather than comparing it to the "raw" value of –1.

 

Sometimes a developer will want to check the security roles to which the user belongs. It's often not necessary (though not impossible) to use the UserInfo or UserId properties to see if the person has Edit permissions for the module; IsEditable is typically good enough for this check. Nevertheless, there are a few ways to go about checking the roles for the logged in user (especially when you're interested in roles other than those that relate to the module's Edit permissions). One way is to examine the UserInfo.Roles property, which is an array of strings containing the names of roles to which the user belongs. Another way is to call the UserInfo.IsInRole() method.

 

Along a similar vein, the UserInfo.IsSuperUser property can be checked to see if the person has Host-level access to the portal.

 
### EditMode and IsEditable
 

On the surface, **EditMode** and **IsEditable** might seem to have the same effect. In actuality, their purposes are quite different, and this is important to consider when choosing between them for your module.

 

When you dive under the hood of the EditMode property, you see that it eventually calls the CanAdminPage() method of the TabPermissionController class. What this ultimately checks is whether the current user is in a role with Edit permissions for the entire page (not just the module).

 
![Page View Mode](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_24.png "Page View Mode")

 

![Page Edit Mode](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_36.png "Page Edit Mode")

 

![Page Layout Mode](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_35.png "Page Layout Mode")
 

By contrast, IsEditable is only concerned with two things: Whether or not the page is in View mode (as opposed to Edit or Layout), and whether or not the user has Edit rights to the module. If the page is in View mode, then IsEditable will be false. (This makes sense, because the whole purpose of the page's View mode is to see what the page will look like to people without Edit rights.) Likewise, if the user does not have Edit rights, then IsEditable will be false. IsEditable will only be true when the page is in Edit or Layout mode and the user has permission to edit the module.

 

The IsEditable property is the best choice when looking for something to control the visibility of an element or control in your user control. Typically, the only time that this will be needed is when you are designing your View control. This property can be used in a declarative fashion or programmatically to control visibility. For example, in the Survey.ascx control from the DotNetNuke Survey module, this property is checked inside a DataList to control the visibility of the Edit link for each question.

 
&lt;asp:HyperLink ID="cmdEdit2" ImageUrl="~/images/edit.gif" 

<!--CRLF-->

        NavigateUrl='&lt;%# EditURL("SurveyId",DataBinder.Eval(Container.DataItem,"SurveyId")) %&gt;'

<!--CRLF-->

        Visible="&lt;%# IsEditable %&gt;" runat="server" /&gt;

<!--CRLF-->
 

To use IsEditable in your module's code-behind, simply reference it by name (since PortalModuleBase is likely your base class for your View control, it's already a property of your user control). The following code snippet, taken from the HtmlModule.ascx.vb of the DotNetNuke core demonstrates its usage in enabling the rich text editor.

 
' edit in place

<!--CRLF-->

    If EditorEnabled = True AndAlso Me.IsEditable = True AndAlso _

<!--CRLF-->

       PortalSettings.UserMode = DotNetNuke.Entities.Portals.PortalSettings.Mode.Edit Then

<!--CRLF-->

        EditorEnabled = True

<!--CRLF-->

    Else

<!--CRLF-->

        EditorEnabled = False

<!--CRLF-->

    End If

<!--CRLF-->
 

As for the EditMode property, I haven't found a suitable example to demonstrate when it should be used in a module, so I'm hesitant to recommend it for any purpose. *(Author's Note: If you know more about this property, please let me know in the article comments below.)* Knowing the distinction is important, however, to avoid choosing EditMode when IsEditable is more appropriate.

 
### LocalResourceFile
 

The DotNetNuke framework is designed to support different human languages as the basis for all built-in text and labels in the UI. This whole concept of supporting different human languages in a web site is called "Localization".

 

The DNN framework extends this capability to module developers through the use of Local Resource Files (.resx) for each User Control in the module. Resource files (.resx) are simply XML files for storing string constants used by your module; these constants can be referenced in place of putting literal text in your user control's .ascx. The DotNetNuke framework defaults to the US English language ("en-us"), and module developers should be aware that their regular .resx file will be treated as English.

 

To facilitate the use of DNN's Localization API, PortalModuleBase exposes a property called **LocalResourceFile** which identifies the server-side path to the .resx file for the user control. This property is defined as part of the IModuleControl interface which PortalModuleBase implements. By default, PortalModuleBase will return a path that leads to an "App\_LocalResources" folder inside the user control's folder and will expect the name of the .resx file to match the name of the user control. Therefore, if your user control is named "ViewMyModule.ascx" then this property will generate a complete file name that goes to the user control's folder and ends in "App\_LocalResources/ViewMyModule.ascx.resx".

 

Module developers can choose a different path for the LocalResourceFile by pointing this property to another .resx file. This can be useful when a module has many user controls and the developer wants to centralize their localization support in a single file. A good place to do this is in the Init event.

 
Protected Overrides Sub OnInit(ByVal e As System.EventArgs)

<!--CRLF-->

        Me.LocalResourceFile = Path.Combine(Me.ControlPath, _

<!--CRLF-->

                                            Localization.LocalResourceDirectory &amp; "/MyModuleResources"

<!--CRLF-->

        MyBase.OnInit(e)

<!--CRLF-->

    End Sub

<!--CRLF-->
 

This will set the path for the .resx file to "App\_LocalResources/MyModuleResources.resx" in your module's control path. Note that to use Localization.LocalResourceDirectory in your code, you will need to import the DotNetNuke.Services.Localization namespace. Alternatively, you can set the LocalResourceFile in the PageLoad event.

 
Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

<!--CRLF-->

        Me.LocalResourceFile = Path.Combine(Me.ControlPath, _

<!--CRLF-->

                                            Localization.LocalResourceDirectory &amp; "/MyModuleResources"

<!--CRLF-->

        ' ... continue Page_Load logic

<!--CRLF-->

    End Sub

<!--CRLF-->
 

Because LocalResourceFile is defined as part of the IModuleControl interface, this allows the DNN framework to reference your control as an IModuleControl in order to find your resource files; DNN can then use that file to inject your resource strings into your user control's items (such as <ASP:Label> or <ASP:LinkButton>) as long as those server controls have a Text property and a ResourceKey attribute. It also allows DNN the capability of letting site administrators customize the language settings for your module (such as offering a French version of your module's resource files).

 

There are a couple of ways to use resource strings from the .resx file in your module. The first (and easy) way to do this is to declaratively add the ResourceKey attribute to items such as the labels on your user control. For example, instead of placing the literal text "First Name" to label a text box, you could use an <ASP:Label> control with an assigned ResourceKey, as in the following code snippet.

 
&lt;ASP:Label ID="FirstNameLabel" runat="server" ResourceKey="lblFirstName"/&gt;

<!--CRLF-->

    &lt;ASP:TextBox ID="FirstName" runat="server" /&gt;

<!--CRLF-->
 

Your LocalResourceFile could then define the literal text "First Name" under the key "lblFirstName.Text" (the ".Text" suffix is a convention that allows DNN to use a single ResourceKey for different properties of the server control; for more information on these suffixes, see the links on related articles below). A website administrator could then set up a French resource file for your module and substitute "Petit nom" under the same key "lblFirstName.Text". This approach offers a flexible and elegant approach to dealing with Localization for module developers.

 

Besides this declarative approach to using the resource file, your module can programmatically access its string values through DNN's Localization API. As an example, consider the following code which could be used instead of the ResourceKey for setting the Text of the <ASP:Label> control.

 
Me.FirstNameLabel.Text = Localization.GetString("lblFirstName", Me.LocalResourceFile)

<!--CRLF-->
 

There are many opportunities for using localized string in your module. They can be used for labels, link buttons, tooltips, error messages, etc. To learn more about localization, see the related links at the end of this article.

 
### EditUrl() Method
 

Most of the methods in PortalModuleBase are obsolete (as of DNN 5.0). One method that has survived is the **EditUrl** method, which comes in various overloaded forms. The EditUrl method is used to get the URL for an Edit control registered as part of the module. If you only have a single Edit control that uses the key name "Edit", then the best one to use is either the parameter-less one called <font face="Courier New">EditUrl() or (if you want to pass parameters to your Edit control) the <font face="Courier New">EditUrl(ByVal KeyName As String, ByVal KeyValue As String) version. Here are the complete sets of signatures.

 
- <font face="Courier New">EditUrl()
 - Generate using "Edit" as the default ControlKey name with no additional query-string parameters (key-value pairs).

 - <font face="Courier New">EditUrl(ByVal ControlKey As String)
 - Generate using a specific user control (ControlKey) with no additional query-string parameters (key-value pairs).

 - <font face="Courier New">EditUrl(ByVal KeyName As String, ByVal KeyValue As String)
 - Generate an URL using "Edit" as the default ControlKey name with a single query string parameter (key-value pair).

 - <font face="Courier New">EditUrl(ByVal KeyName As String, ByVal KeyValue As String, ByVal ControlKey As String)
 - Generate an URL to request a specific user control (denoted by ControlKey) along with a single query string parameter (key-value pair).

 - <font face="Courier New">EditUrl(ByVal KeyName As String, ByVal KeyValue As String, ByVal ControlKey As String, ByVal ParamArray Additional Parameters As String())
 - Generate an URL to request a specific user control (denoted by ControlKey) along with a set of query string parameters (key-value pairs).

 



 
## Implementing IModuleControl
 

![IModuleControl Interface](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_15.png "IModuleControl Interface")IModuleControl defines a number of properties which PortalModuleBase implements. Many of these properties are used by the DotNetNuke framework to supply information about the module. DotNetNuke typically uses these properties to aid in presenting (rendering) the module in the web page. Module developers can use these properties to get information about the module in the context of the entire DNN application. In a sense, the IModuleControl properties can allow a module to be "self-aware"; through them, a module can access data about itself and the DNN-specific context in which it is being used.

 
- **Control** – (ReadOnly) This property allows a class to refer to itself as an object of type Control.  - **ControlPath** – (ReadOnly) This property defines the path to the actual .ascx control. Module developers can use this as a basis for accessing other files or controls in the same directory. Sample usages could be to get module-specific images or XML files. It is also used in PortalModuleBase to generate a default location for the control's LocalResourceFile.  - **ControlName** – (ReadOnly) This property offers a name for the control. PortalModuleBase implements this as the fully-qualified class name having underscores (\_) replaced with periods (.). Therefore, if your class has the name "View\_MyModule", then the ControlName would be "View.MyModule".  - **LocalResourceFile** – This is the complete path to the resource file (.resx) for the user control. The DotNetNuke framework uses this when trying to resolve items such as the title to use for your module's Edit or Settings controls and to replace text for server controls with the ResourceKey attribute..  - **ModuleContext** – (ReadOnly) The ModuleContext property is a ModuleInstanceContext object. The ModuleInstanceContext provides the actual "grunt work" of getting values for many of the other properties of PortalModuleBase, such as the PortalId, ModuleId, etc. Most of the properties of PortalModuleBase get their actual values from examining the ModuleContext property.

 
## Other Class Members
 

Besides the IModuleControl properties, these are the remaining properties of PortalModuleBase (including the commonly used ones discussed in detail earlier in the article).

 
- **Actions** – This is a collection of menu items that are displayed as part of the Action Menu to those users who have permission to Edit the module. When a developer creates a View user control that implements the IActionable.ModuleActions property, they can add items to be included in this collection.  - **CacheDirectory** – (ReadOnly, obsolete) This string produces the server-side path to the folder used for caching. It is now obsolete, and the path to the cache directory should now be obtained through a call to ModuleController.CacheDirectory().  - **CacheFileName** – (ReadOnly, obsolete) This overloaded string property produces the name of the file used for caching module information on the server. It is now obsolete, and the file name for the cache should be obtained by calling ModuleController.CacheFileName() and passing in the module's TabModuleId.  - **CacheKey** – (ReadOnly, obsolete) This overloaded string property produces the key for the cache. It is obsolete and the key should be obtained by calling ModuleController.CacheKey() and passing in the module's TabModuleId.  - **CacheMethod** – (ReadOnly, obsolete since DNN 5.0) This string property is used to get the caching method (either caching to disk or to memory). It is now obsolete and the caching approach used by the portal should be found through the shared and read-only ModuleCachingMethod property of the DotNetNuke.Entities.Host class.  - **ContainerControl** – (ReadOnly) This property is used to find the Control object that acts as the container of the user control. It does so with the following call: FindControlRecursive(Me, "ctr" & ModuleId.ToString)  - **EditMode** – (ReadOnly) This boolean value is set to true if the current user has Edit permissions on the page (tab) to which the module belongs.  - **HelpFile** – (Obsolete since DNN 2.2, it will be removed sometime after DNN 5.0) This obsolete property represented the name of the file in the module's directory that the end-user can read to learn how to work with the control. As mentioned, this is now obsolete and is marked with this comment: "Help files are now stored in the /App\_LocalResources folder beneath the module with the following resource key naming convention: ModuleHelp.Text"  - **HelpURL** – This string is the URL for getting help information to show how to use this particular control. The Action menu for a module will include a Help item that uses this property for the link's URL. When a developer packages a module, each user control can be given a specific Help URL as part of the module definition. The portal's Super User can override this value to provide a link to alternative documentation.  - **IsEditable** – (ReadOnly) This boolean property checks to see if the page can be edited. DotNetNuke uses this to determine whether or not to show the Action menu when rendering the module on the page. To be editable, the page must be rendered in Edit (![Page Edit Mode](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_27.png "Page Edit Mode")) or Layout mode (![Page Layout Mode](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-951ad58f1b21_1154C-image_30.png "Page Layout Mode")) and the user must have Edit rights to the module.  - **ModuleConfiguration** – This is a ModuleInfo object that describes aspects of the module itself. Think of this as the heart of allowing your module to become "self-aware".  - **ModuleId** – This is the ID of this particular instance of the module. (Remember, any module extension may be added several times to a portal; each new instance is given a unique ModuleId.)  - **ModulePath** – (ReadOnly, obsolete since DNN 5.0) ModulePath has been replaced by the new ControlPath property. The choice to rename this method lay in the fact that modules can have their individual user controls organized under various subfolders.  - **PortalAlias** – (ReadOnly) This is a PortalAliasInfo object that contains the portal alias information for the page request. This value is pulled from the UserControlBase.PortalSettings property.  - **PortalId** – (ReadOnly) This ID represents the particular portal (website) instance inside the DotNetNuke web application. (DotNetNuke supports the concept of hosting multiple web sites in a single installation.)  - **Settings** – (ReadOnly) This is a Hashtable (key-value) collection of module settings that are specific to your module. It includes both the ModuleSettings and TabModuleSettings.  - **TabId** – (ReadOnly) This is the ID of the tab (page) on which the module resides.  - **TabModuleId** – This ID uniquely identifies a particular instance of the module on a specific page (tab). It is used to distinguish between instances of the module that are shared across different pages in the website.  - **UserId** – (ReadOnly) This is the ID of the logged-in user currently accessing the module/page. This value is pulled from the UserControlBase.PortalSettings property.  - **UserInfo** – (ReadOnly) This object contains all the information about the logged in user, such as their UserId, UserName, and DisplayName. It also includes an array of the names of roles to which the user belongs as well as other information on the user's profile. For performance reasons, some of the information (such as the Profile data) is "lazy-loaded", meaning that the values are only retrieved when needed. For anonymous users, this object is set to Nothing (null). This value is pulled from the UserControlBase.PortalSettings property.

 

In addition to the above properties, here are the methods of PortalModuleBase.

 
- **HasModulePermission(ByVal PermissionKey As String)** – (Obsolete as of DNN 5.0) This obsolete method was used to find out if the current user has a particular module permission. Developers are now encourages to call ModulePermissionController.HasModulePermission(ModuleConfiguration.ModulePermissions, PermsissionKey)  - **SynchronizeModule()** – (Obsolete) This method is currently a wrapper for calling ModuleController.SynchronizeModule(ModuleId), which is the recommended call to make. It has been retained for backward compatibility of third-party modules.  - **AddActionHandler(ByVal e as ActionEventHandler)** – This is a method to help in adding an event handler to the module's parent skin in order to allow the module to respond to click events on the particular menu item. When a developer creates a View user control that implements the IActionable.ModuleActions property, this method can be called along with GetNextActionID() to simplify the creation of Action Menu items for the module.  - **GetNextActionID()** – This is a method that gets the next available ActionID for adding items in the ActionMenu for the module. This method calls ModuleContext.GetNextActionID() to get the value. When a developer creates a View user control that implements the IActionable.ModuleActions property, this method can be called along with AddActionHandler() to simplify the creation of Action Menu items.

 
# Summary
 

In the DotNetNuke® framework, modules developers can leverage a number of classes are available as base classes for their user controls. This article took a closer look at **PortalModuleBase** which is typically used as a base class for View and Edit controls in standard module extensions.

 

This article is part of a suite of articles on module development basics.

 
- Module Extensions – Building the UI  
 - [UserControlBase](/Articles/tabid/62/articleType/ArticleView/articleId/40/UserControlBase-ndash-Under-the-Hood.aspx) - [PortalModuleBase](/Articles/tabid/62/articleType/ArticleView/articleId/47/PortalModuleBase-ndash-Under-the-Hood.aspx) - [ModuleSettingsBase](/Articles/tabid/62/articleType/ArticleView/articleId/41/ModuleSettingsBase-ndash-Under-the-Hood.aspx) - [ModuleInstanceContext](/Articles/tabid/62/articleType/ArticleView/articleId/42/ModuleInstanceContext-ndash-Under-the-Hood.aspx) - [View Controls](/Articles/tabid/62/articleType/ArticleView/articleId/43/Developing-View-User-Controls-for-your-DotNetNuke-Module.aspx) - [Edit Controls](/Articles/tabid/62/articleType/ArticleView/articleId/44/Developing-Edit-User-Controls-for-your-DotNetNukereg-Module.aspx) - [Settings Control](/Articles/tabid/62/articleType/ArticleView/articleId/45/Developing-a-Settings-User-Control-for-your-DotNetNukereg-Module.aspx) - [Resource Files (.resx)](/Articles/tabid/62/articleType/ArticleView/articleId/46/Working-with-Resource-Files-resx-in-your-DotNetNukereg-Module.aspx)

 - Module Extensions – Building the Back End  
 - [Building a Business Controller Class](/Articles/tabid/62/articleType/ArticleView/articleId/49/Building-a-Business-Controller-Class.aspx) - [CBOs – Your Module-Specific "Info" Classes](/Articles/tabid/62/articleType/ArticleView/articleId/50/CBOs-ndash-Your-Module-Specific-ldquoInfordquo-Classes.aspx) - [Building Your Module's Data Access Layer](/Articles/tabid/62/articleType/ArticleView/articleId/51/Building-Your-Modulersquos-Data-Access-Layer.aspx) - [Designing Database Tables for DNN Modules](/Articles/tabid/62/articleType/ArticleView/articleId/52/Designing-Database-Tables-for-DNN-Modules.aspx)

 - Under the Hood – Articles on distinct classes in the DotNetNuke framework  
 - UserControlBase   - [PortalModuleBase](/Articles/tabid/62/articleType/ArticleView/articleId/47/PortalModuleBase-ndash-Under-the-Hood.aspx) - ModuleSettingsBase   - ModuleInstanceContext   - UserInfo   - ModuleInfo   - PortalSettings

 

> *<font color="#008000"><strong>Did you find this article helpful? If so, please let us know by filling out a comment below.</strong>*
> 
>  
> 
> *<font color="#008000"><strong>If not, please let us know how we can improve this article. Thanks for taking the time to respond!</strong>*



---

