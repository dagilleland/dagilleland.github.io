---
title: Identities Under IIS
---
# Identities Under IIS

The following is a copy of the [excellent post](http://www.mikeobrien.net/blog/identities-for-different-iis7) by [Mike O'Brien](http://www.mikeobrien.net/cv/). His original post is dated in 2009, but it's information is ***very*** helpful for anyone trying to make sense of how Identities are extablished under the various IIS authentication configurations.

It's so good, I'm simply afraid that one day it might be lost, so I'm capturing it here for my own reference.

<!-- more -->

## Identities for different IIS7 Authentication Configurations January, 2009

A few notes about identities from the standpoint of ASP.NET:

**[WindowsIdentity.GetCurrent()](http://msdn.microsoft.com/en-us/library/system.security.principal.windowsidentity.getcurrent.aspx)** - This WindowsIdentity represents the OS thread identity or more specifically an [account token](http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsAToken.html) (Not to be confused with [Thread.CurrentPrincipal.Identity](http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsThreadDotCurrentPrincipal.html) which is just a simple container for your convenience). This token represents a LSA (Local Security Authority) or Active Directory account. This will always be the process identity set in the App Pool configuration (AKA the App Pool identity) unless you are doing impersonation. This is the actual identity (Or Windows account token) that code runs as. As far as Windows Security is concerned this is the only identity that matters. The only way to "change" this is to do [impersonation](http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsImpersonation.html) which is done on a thread by thread basis and should be reverted ASAP to the original identity to avoid a security hole (And resource leak because of unclosed handles). New threads always inherit the process token regardless of if the creating thread is impersonating another user (Something to remember when doing async calls in ASP.NET while impersonating).

**[Thread.CurrentPrinciple.Identity](http://msdn.microsoft.com/en-us/library/system.threading.thread.currentprincipal.aspx) & [HttpContext.Current.User.Identity](http://msdn.microsoft.com/en-us/library/system.web.httpcontext.user.aspx)** - These are set by ASP.NET during the authentication phase and will either be...

1. ...an Anonymous WindowsIdentity when doing just anonymous auth
2. ...a GenericIdentity when doing forms auth (Which implies anon auth).
3. ...a custom identity when doing custom auth (Which implies anon auth).
4. ...a WindowsIdentity representing the authenticating user when doing any other types of auth such as Basic, Windows or Challenge-Response. These two properties actually point to the same instance of the identity. This will be the same as the OS thread ***only*** when you are doing impersonation.

**[Request.LogonUserIdentity](http://msdn.microsoft.com/en-us/library/system.web.httprequest.logonuseridentity.aspx)** - This is a WindowsIdentity representing the authenticating user, regardless of the authentication type. This will be the same as the OS thread ***only*** when you are doing impersonation. It will be the same as Thread.CurrentPrinciple.Identity & HttpContext.Current.User.Identity only when you are not doing anonymous authentication.

Here is a listing of the identities set by IIS7 auth in a number of configurations. They remained the same in both integrated and classic pipeline modes.

### Anonymous (Specific User, which happens to be IUSR)

| Source |  Type |  Return Type |  Authentication Type |  Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  NT AUTHORITYIUSR |

### Anonymous (Specific User, which happens to be IUSR), Impersonation

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYIUSR |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  NT AUTHORITYIUSR |

### Anonymous (App Pool Identity, which happens to be NETWORK SERVICE)

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  NT AUTHORITYNETWORK SERVICE |

### Anonymous (App Pool Identity, which happens to be NETWORK SERVICE), Impersonation

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  NT AUTHORITYNETWORK SERVICE |

### Anonymous, Physical Path Credentials, LSA User

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  HOSTusername |

### Anonymous, Impersonation, Physical Path Credentials, LSA User

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  NTLM |  HOSTusername |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  HOSTusername |

### Basic, LSA User (Same for AD user)

| Source |  Type |  Return Type |  Authentication Type |  Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |

### Impersonation, Basic Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)

| Source |  Type |  Return Type |  Authentication Type |  Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  NTLM |  HOSTusername |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  HOSTusername |

### Impersonation, Basic Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Kerberos |  DOMAINusername |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  DOMAINusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  DOMAINusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Basic |  DOMAINusername |

### Forms, Anonymous Auth

| Source |  Type |  Return Type |  Authentication Type |  Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.GenericIdentity |    |    |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.GenericIdentity |    |    |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |    |  NT AUTHORITYIUSR |

### Windows, LSA User (Same for AD user)

| Source |  Type |  Return Type |  Authentication Type |  Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  NT AUTHORITYNETWORK SERVICE |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |

### Impersonation, Windows Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)

| Source |  Type |  Return Type |  Authentication Type |  Identity Name | 
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  NTLM |  HOSTusername |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  HOSTusername |

### Impersonation, Windows Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)

| Source |  Type |  Return Type |  Authentication Type  | Identity Name |
| ------ | ----- | ------------ | -------------------- | -------------- |
| WindowsIdentity.GetCurrent() |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Kerberos |  DOMAINusername |
| Thread.CurrentPrincipal.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  DOMAINusername |
| HttpContext.Current.User.Identity |  IIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  DOMAINusername |
| Request.LogonUserIdentity |  WindowsIdentity |  System.Security.Principal.WindowsIdentity |  Negotiate |  DOMAINusername |

[.NET](http://www.mikeobrien.net/blog/tags#tag-3), [IIS 7](http://www.mikeobrien.net/blog/tags#tag-48)
