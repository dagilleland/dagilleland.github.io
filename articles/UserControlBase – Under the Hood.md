---
Title: UserControlBase – Under the Hood
Created: 8/12/2013 3:40:34 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# UserControlBase – Under the Hood

---

## UserControlBase – Under the Hood


![UserControlBase](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-UserControlBaseUndertheHood_A03-image_3.png "UserControlBase")In the DotNetNuke® framework, modules developers can leverage a number of classes are available as base classes for their user controls. This article takes a closer look at **UserControlBase** which extends the System.Web.UI.UserControl class to provide PortalSettings info to your module.

 

This article is part of a suite of articles on module development basics.

 
- Module Extensions – Building the UI  
 - UserControlBase   - PortalModuleBase   - ModuleSettingsBase   - ModuleInstanceContext   - View Controls   - Edit Controls   - Settings Control   - Resource Files (.resx)

 - Module Extensions – Building the Back End  
 - BLL – The Controller Class   - CBOs – Your Module-Specific “Info” Classes   - DAL – Provider-Specific Implementations

  
   
 

**UserControlBase** is at the top of a hierarchy of base classes used by module developers when they create their user controls. It is located in the DotNetNuke.Framework namespace. This class extends the System.Web.UI.UserControl class and is the first part of the hierarchy to bring information about the portal framework to the developer’s UI. Here are the commonly used classes in the UI hierarchy.

 

![DotNetNuke UI Base Classes](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-UserControlBaseUndertheHood_A03-image_6.png "DotNetNuke UI Base Classes")

  
 

UserControlBase contains three read-only properties, one of which is now tagged as obsolete: **IsHostMenu**, **PortalSettings** and **IsAdminMenu** (now obsolete). Although this class adds only a few items to a developer’s user control, the second property (PortalSettings) is extremely rich in information.

 
## IsHostMenu
 

The **IsHostMenu** property checks the active tab to determine if it is in the Host menu. The Host menu is only accessible by the portal’s Super Users. DotNetNuke’s design extensibilities allow developers to create modules that are strictly host-level. For all other pages in which a module may reside, this property is largely irrelevant.

 
## PortalSettings
 

[![PortalSettings Class Diagram - Properties](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-UserControlBaseUndertheHood_A03-image_thumb_2.png "PortalSettings Class Diagram - Properties (Click to enlarge)")](/Portals/0/images/dagilleland/News-Articles/2010/Aug/WLW-UserControlBaseUndertheHood_A03-image_8.png)This **PortalSettings** property returns an instance of the DotNetNuke.Entities.Portals.PortalSettings class. The PortalSettings class is full of extremely rich information, containing over 70 properties (almost all read only) as well as a number of (mostly obsolete) methods. PortalSettings exposes to the module developer all of the information they might need about the portal in which the module resides. This gives the developer tremendous opportunity to know the context in which their DotNetNuke extension has to work. For more information on the PortalSettings class, see the related links at the end of this article.

 

Module developers may be interested in the following properties of the PortalSettings class. This is not an exhaustive list, of course, and you might find other properties more useful for your particular module extension. To learn more about the PortalSettings class, see the related links at the end of this article. Nonetheless, here are a few that stood out for me as a fellow module developer.

 
### Portal Information
 

PortalSettings contains a lot of information on the portal instance. The

 
- Cacheability – This property is a CacheLevel object that <font style="background-color: rgb(255, 255, 0);">???</font>- **Email** – This String property returns the e-mail address set for the portal’s Administrator account.  - **GUID** – This property is a GUID object that uniquely identifies the portal in the DNN installation. DotNetNuke can host multiple websites with distinct URLs from within a single installation. Each website is called a “portal”, and the Super User can list the portals by navigating to the Host->Portals page. As the name implies, these GUIDs are “globally unique” identifiers.  - **HomeDirectoryMapPath** – This string returns the server-side path to the portal’s home directory. Portal home directories are located in the “Portals” folder under the webite’s root. This is helpful should your module perform file I/O, such as storing or retrieving images or other documents for the website. In a default installation of DotNetNuke, the first portal has a home directory name of “0”, meaning that the HomeDirectoryMapPath for this would end with “\Portals\0\”.  - HostSettings – This property is a Hashtable of <font style="background-color: rgb(255, 255, 0);">???</font>- **HostSpace** – This Integer property represents the amount of hard drive space (in MB) allocated by the Super User for this portal’s home directory. If this amount of space is filled, then it will not be possible to save any more items to the home directory. If the HomeSpace is set to zero, then there are no limits set by the Super User for the size of the portal’s home directory.  - **PortalId** – This Integer property uniquely identifies this portal (or website) for this DotNetNuke installation. Portal IDs are not unique among separate installations of DotNetNuke; for completely unique IDs, see the PortalSettings.GUID property.  - **PortalName** – This String property is the name supplied for the website.  - **SSLEnabled** – This Boolean property indicates whether an SSL (Secure Sockets Layer) certificate has been installed for this website.  - **SSLEnforced** – This Boolean property indicates whether or not a page can be viewed as SSL if it is not also marked as “Secure” in the Page Settings for the tab. This security feature of DNN prevents pages marked as “Secure” from being accessed as regular pages.  - **SSLURL** – This String property will typically have a value when SSL is enabled and there is no SSL certificate. In these cases, the hosting provider is likely providing an URL for Shared SSL.  - **STDURL** – This String value will be needed whenever there is an SSLURL, so as to allow for unsecured connections to pages or resources (such as images).  - **Version** – This String value is the version of DotNetNuke that is currently running.

 
### Tab (Page) Information
 
- ActiveTab – This property presents a TabInfo object …  - ContentVisible – This Boolean property …  - LoginTabId – This Integer property…  - RegisterTabId – This Integer property…  - UserTabId – This Integer property…

 
### User Information
 
- UserId – This Integer property…  - UserInfo – This property presents a UserInfo object that…  - UserQuota – This Integer property…  - UserRegistration – This Integer property…  - Users – This Integer property…  - UserTabId – This Integer property…

 
### Localization and Culture Information
 
- CultureCode – (New since DNN 5.5.0) This String property…  - Currency – This String property …  - DefaultLanguage – This String property …  - TimeZoneOffset – This Integer property…

 

<< <font style="background-color: rgb(255, 255, 0);">class diagram</font> >>

 

--->> talk about some popular/key properties of PortalSettings; **<u>classify/group them</u>**

 

--->> why are most methods now obsolete?

 
## IsAdminMenu
 

This obsolete Boolean property is now set to always return false. Since DNN ??, the concept of administrator-only pages has been removed.

 

--->> why has this been made obsolete?

 

--->> what is the concept of an “Admin page” in the new model?

 

--->> what to do if you want to determine if something is now under the “Admin” menu (the name of the tab itself can now be changed from “Admin” to something else)?

 
# Summary


---

