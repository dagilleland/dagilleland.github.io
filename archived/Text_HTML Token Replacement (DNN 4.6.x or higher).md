---
Title: Text/HTML Token Replacement (DNN 4.6.x or higher)
Created: 10/22/2007 3:30:06 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Text/HTML Token Replacement (DNN 4.6.x or higher)


In DotNetNuke 4.6, the Text/HTML module (which is the mainstay and most frequently used module in the DotNetNuke framework) gained some new features. The most notable is that there is now support for including Tokens in your module's content.

 

Tokens are basically a way to show customized information about the portal environment. For example, if you want to display the name of the user who has logged in, then you can use a token that looks like **<font color="#993300">[*user:DisplayName*<font color="#993300">]**.


---

## Text/HTML Token Replacement (DNN 4.6.x or higher)


<font face="Courier New" color="#003300">&nbsp;&nbsp;&nbsp; ''' The TokenReplace class provides the option to replace tokens formatted <br> &nbsp;&nbsp;&nbsp; ''' [object:property] or [object:property|format] or [custom:no] within a string<br> &nbsp;&nbsp;&nbsp; ''' with the appropriate current property/custom values.<br> &nbsp;&nbsp;&nbsp; ''' Example for Newsletter: 'Dear [user:Displayname],' ==&gt; 'Dear Superuser Account,'<br> &nbsp;&nbsp;&nbsp; ''' Supported Token Sources: User, Host, Portal, Tab, Module, Membership, Profile, <br> &nbsp;&nbsp;&nbsp; '''&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Row, Date, Ticks, ArrayList (Custom), IDictionary<br> 

 



 

Token Properties  
 Supported Token Properties and Their Usage in the Text-HTML Module

 

user:DisplayName is displayed as: [user:DisplayName]   
 user:FirstName is displayed as: [user:FirstName]   
 user:LastName is displayed as: [user:LastName]   
 user:UserName is displayed as: [user:UserName]   
 user:Email is displayed as: [user:Email]   
 user:PortalId is displayed as: [user:PortalId]   
 user:IsSuperUser is displayed as: [user:IsSuperUser]   
 user:AffiliateId is displayed as: [user:AffiliateId]   
 user:TimeZone is displayed as: [user:TimeZone]   
 user:PreferredLocale is displayed as: [user:PreferredLocale]   
 user:Prefix is displayed as: [user:Prefix]   
 user:MiddleName is displayed as: [user:MiddleName]   
 user:Suffix is displayed as: [user:Suffix]   
 user:Unit is displayed as: [user:Unit]   
 user:Street is displayed as: [user:Street]   
 user:City is displayed as: [user:City]   
 user:Region is displayed as: [user:Region]   
 user:Country is displayed as: [user:Country]   
 user:PostalCode is displayed as: [user:PostalCode]   
 user:Telephone is displayed as: [user:Telephone]   
 user:Cell is displayed as: [user:Cell]   
 user:Fax is displayed as: [user:Fax]   
 user:Website is displayed as: [user:Website]   
 user:IM is displayed as: [user:IM]

 

profile:TimeZone is displayed as: [profile:TimeZone]   
 profile:PreferredLocale is displayed as: [profile:PreferredLocale]   
 profile:Prefix is displayed as: [profile:Prefix]   
 profile:MiddleName is displayed as: [profile:MiddleName]   
 profile:Suffix is displayed as: [profile:Suffix]   
 profile:Unit is displayed as: [profile:Unit]   
 profile:Street is displayed as: [profile:Street]   
 profile:City is displayed as: [profile:City]   
 profile:Region is displayed as: [profile:Region]   
 profile:Country is displayed as: [profile:Country]   
 profile:PostalCode is displayed as: [profile:PostalCode]   
 profile:Telephone is displayed as: [profile:Telephone]   
 profile:Cell is displayed as: [profile:Cell]   
 profile:Fax is displayed as: [profile:Fax]   
 profile:Website is displayed as: [profile:Website]   
 profile:IM is displayed as: [profile:IM]

 

portal:SkinPath is displayed as: [portal:SkinPath]   
 portal:ContainerPath is displayed as: [portal:ContainerPath]

 

tab:TabID is displayed as: [tab:TabID]   
 tab:TabOrder is displayed as: [tab:TabOrder]   
 tab:PortalID is displayed as: [tab:PortalID]   
 tab:TabName is displayed as: [tab:TabName]   
 tab:AuthorizedRoles is displayed as: [tab:AuthorizedRoles]   
 tab:IsVisible is displayed as: [tab:IsVisible]   
 tab:ParentID is displayed as: [tab:ParentID]   
 tab:Level is displayed as: [tab:Level]   
 tab:IconFile is displayed as: [tab:IconFile]   
 tab:AdministratorRoles is displayed as: [tab:AdministratorRoles]   
 tab:DisableLink is displayed as: [tab:DisableLink]   
 tab:Title is displayed as: [tab:Title]   
 tab:Description is displayed as: [tab:Description]   
 tab:Keywords is displayed as: [tab:Keywords]   
 tab:IsDeleted is displayed as: [tab:IsDeleted]   
 tab:Url is displayed as: [tab:Url]   
 tab:SkinSrc is displayed as: [tab:SkinSrc]   
 tab:ContainerSrc is displayed as: [tab:ContainerSrc]   
 tab:TabPath is displayed as: [tab:TabPath]   
 tab:StartDate is displayed as: [tab:StartDate]   
 tab:EndDate is displayed as: [tab:EndDate]   
 tab:HasChildren is displayed as: [tab:HasChildren]   
 tab:RefreshInterval is displayed as: [tab:RefreshInterval]   
 tab:PageHeadText is displayed as: [tab:PageHeadText]   
 tab:IsSuperTab is displayed as: [tab:IsSuperTab]

 

Module:PortalID is displayed as: [Module:PortalID]   
 Module:TabID is displayed as: [Module:TabID]   
 Module:TabModuleID is displayed as: [Module:TabModuleID]   
 Module:ModuleID is displayed as: [Module:ModuleID]   
 Module:ModuleDefID is displayed as: [Module:ModuleDefID]   
 Module:ModuleOrder is displayed as: [Module:ModuleOrder]   
 Module:PaneName is displayed as: [Module:PaneName]   
 Module:ModuleTitle is displayed as: [Module:ModuleTitle]   
 Module:AuthorizedEditRoles is displayed as: [Module:AuthorizedEditRoles]   
 Module:CacheTime is displayed as: [Module:CacheTime]   
 Module:AuthorizedViewRoles is displayed as: [Module:AuthorizedViewRoles]   
 Module:Alignment is displayed as: [Module:Alignment]   
 Module:Color is displayed as: [Module:Color]   
 Module:Border is displayed as: [Module:Border]   
 Module:IconFile is displayed as: [Module:IconFile]   
 Module:AllTabs is displayed as: [Module:AllTabs]   
 Module:Visibility is displayed as: [Module:Visibility]   
 Module:AuthorizedRoles is displayed as: [Module:AuthorizedRoles]   
 Module:IsDeleted is displayed as: [Module:IsDeleted]   
 Module:Header is displayed as: [Module:Header]   
 Module:Footer is displayed as: [Module:Footer]   
 Module:StartDate is displayed as: [Module:StartDate]   
 Module:EndDate is displayed as: [Module:EndDate]   
 Module:ContainerSrc is displayed as: [Module:ContainerSrc]   
 Module:DisplayTitle is displayed as: [Module:DisplayTitle]   
 Module:DisplayPrint is displayed as: [Module:DisplayPrint]   
 Module:DisplaySyndicate is displayed as: [Module:DisplaySyndicate]   
 Module:InheritViewPermissions is displayed as: [Module:InheritViewPermissions]   
 Module:ModulePermissions is displayed as: [Module:ModulePermissions]   
 Module:DesktopModuleID is displayed as: [Module:DesktopModuleID]   
 Module:FolderName is displayed as: [Module:FolderName]   
 Module:FriendlyName is displayed as: [Module:FriendlyName]   
 Module:Description is displayed as: [Module:Description]   
 Module:Version is displayed as: [Module:Version]   
 Module:IsPremium is displayed as: [Module:IsPremium]   
 Module:IsAdmin is displayed as: [Module:IsAdmin]   
 Module:BusinessControllerClass is displayed as: [Module:BusinessControllerClass]   
 Module:ModuleName is displayed as: [Module:ModuleName]   
 Module:SupportedFeatures is displayed as: [Module:SupportedFeatures]   
 Module:CompatibleVersions is displayed as: [Module:CompatibleVersions]   
 Module:Dependencies is displayed as: [Module:Dependencies]   
 Module:Permissions is displayed as: [Module:Permissions]   
 Module:DefaultCacheTime is displayed as: [Module:DefaultCacheTime]   
 Module:ModuleControlId is displayed as: [Module:ModuleControlId]   
 Module:ControlSrc is displayed as: [Module:ControlSrc]   
 Module:ControlType is displayed as: [Module:ControlType]   
 Module:ControlTitle is displayed as: [Module:ControlTitle]   
 Module:HelpUrl is displayed as: [Module:HelpUrl]   
 Module:SupportsPartialRendering is displayed as: [Module:SupportsPartialRendering]   
 Module:ContainerPath is displayed as: [Module:ContainerPath]   
 Module:PaneModuleIndex is displayed as: [Module:PaneModuleIndex]   
 Module:PaneModuleCount is displayed as: [Module:PaneModuleCount]   
 Module:IsDefaultModule is displayed as: [Module:IsDefaultModule]   
 Module:AllModules is displayed as: [Module:AllModules]

 

PORTAL.NAME is displayed as:    [PORTAL.NAME]  Equivalent to PortalSettings.PortalName   
       
 DATE is displayed as:   [DATE]  If a format is specified, it will attempt to use that format; should the format fail or if no format is specified, it will display the date as a ShortDate String.   
     [DATE:MMM dd, yyyy]

 

TIME is displayed as:   [TIME]  If a format is specified, it will attempt to use that format; should the format fail or if no format is specified, it will display the time as a ShortTime String.   
     [TIME:hh:mm]



---

