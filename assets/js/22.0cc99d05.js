(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{405:function(t,e,i){"use strict";i.r(e);var n=i(9),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"identities-under-iis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#identities-under-iis"}},[t._v("#")]),t._v(" Identities Under IIS")]),t._v(" "),i("p",[t._v("The following is a copy of the "),i("a",{attrs:{href:"http://www.mikeobrien.net/blog/identities-for-different-iis7",target:"_blank",rel:"noopener noreferrer"}},[t._v("excellent post"),i("OutboundLink")],1),t._v(" by "),i("a",{attrs:{href:"http://www.mikeobrien.net/cv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mike O'Brien"),i("OutboundLink")],1),t._v(". His original post is dated in 2009, but it's information is "),i("em",[i("strong",[t._v("very")])]),t._v(" helpful for anyone trying to make sense of how Identities are extablished under the various IIS authentication configurations.")]),t._v(" "),i("p",[t._v("It's so good, I'm simply afraid that one day it might be lost, so I'm capturing it here for my own reference.")]),t._v(" "),i("h2",{attrs:{id:"identities-for-different-iis7-authentication-configurations-january-2009"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#identities-for-different-iis7-authentication-configurations-january-2009"}},[t._v("#")]),t._v(" Identities for different IIS7 Authentication Configurations January, 2009")]),t._v(" "),i("p",[t._v("A few notes about identities from the standpoint of ASP.NET:")]),t._v(" "),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.security.principal.windowsidentity.getcurrent.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("WindowsIdentity.GetCurrent()"),i("OutboundLink")],1)]),t._v(" - This WindowsIdentity represents the OS thread identity or more specifically an "),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsAToken.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("account token"),i("OutboundLink")],1),t._v(" (Not to be confused with "),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsThreadDotCurrentPrincipal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thread.CurrentPrincipal.Identity"),i("OutboundLink")],1),t._v(' which is just a simple container for your convenience). This token represents a LSA (Local Security Authority) or Active Directory account. This will always be the process identity set in the App Pool configuration (AKA the App Pool identity) unless you are doing impersonation. This is the actual identity (Or Windows account token) that code runs as. As far as Windows Security is concerned this is the only identity that matters. The only way to "change" this is to do '),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsImpersonation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("impersonation"),i("OutboundLink")],1),t._v(" which is done on a thread by thread basis and should be reverted ASAP to the original identity to avoid a security hole (And resource leak because of unclosed handles). New threads always inherit the process token regardless of if the creating thread is impersonating another user (Something to remember when doing async calls in ASP.NET while impersonating).")]),t._v(" "),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.threading.thread.currentprincipal.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thread.CurrentPrinciple.Identity"),i("OutboundLink")],1),t._v(" & "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.web.httpcontext.user.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpContext.Current.User.Identity"),i("OutboundLink")],1)]),t._v(" - These are set by ASP.NET during the authentication phase and will either be...")]),t._v(" "),i("ol",[i("li",[t._v("...an Anonymous WindowsIdentity when doing just anonymous auth")]),t._v(" "),i("li",[t._v("...a GenericIdentity when doing forms auth (Which implies anon auth).")]),t._v(" "),i("li",[t._v("...a custom identity when doing custom auth (Which implies anon auth).")]),t._v(" "),i("li",[t._v("...a WindowsIdentity representing the authenticating user when doing any other types of auth such as Basic, Windows or Challenge-Response. These two properties actually point to the same instance of the identity. This will be the same as the OS thread "),i("em",[i("strong",[t._v("only")])]),t._v(" when you are doing impersonation.")])]),t._v(" "),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.web.httprequest.logonuseridentity.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Request.LogonUserIdentity"),i("OutboundLink")],1)]),t._v(" - This is a WindowsIdentity representing the authenticating user, regardless of the authentication type. This will be the same as the OS thread "),i("em",[i("strong",[t._v("only")])]),t._v(" when you are doing impersonation. It will be the same as Thread.CurrentPrinciple.Identity & HttpContext.Current.User.Identity only when you are not doing anonymous authentication.")]),t._v(" "),i("p",[t._v("Here is a listing of the identities set by IIS7 auth in a number of configurations. They remained the same in both integrated and classic pipeline modes.")]),t._v(" "),i("h3",{attrs:{id:"anonymous-specific-user-which-happens-to-be-iusr"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-specific-user-which-happens-to-be-iusr"}},[t._v("#")]),t._v(" Anonymous (Specific User, which happens to be IUSR)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("NT AUTHORITYIUSR")])])])]),t._v(" "),i("h3",{attrs:{id:"anonymous-specific-user-which-happens-to-be-iusr-impersonation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-specific-user-which-happens-to-be-iusr-impersonation"}},[t._v("#")]),t._v(" Anonymous (Specific User, which happens to be IUSR), Impersonation")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYIUSR")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("NT AUTHORITYIUSR")])])])]),t._v(" "),i("h3",{attrs:{id:"anonymous-app-pool-identity-which-happens-to-be-network-service"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-app-pool-identity-which-happens-to-be-network-service"}},[t._v("#")]),t._v(" Anonymous (App Pool Identity, which happens to be NETWORK SERVICE)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])])])]),t._v(" "),i("h3",{attrs:{id:"anonymous-app-pool-identity-which-happens-to-be-network-service-impersonation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-app-pool-identity-which-happens-to-be-network-service-impersonation"}},[t._v("#")]),t._v(" Anonymous (App Pool Identity, which happens to be NETWORK SERVICE), Impersonation")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])])])]),t._v(" "),i("h3",{attrs:{id:"anonymous-physical-path-credentials-lsa-user"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-physical-path-credentials-lsa-user"}},[t._v("#")]),t._v(" Anonymous, Physical Path Credentials, LSA User")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"anonymous-impersonation-physical-path-credentials-lsa-user"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-impersonation-physical-path-credentials-lsa-user"}},[t._v("#")]),t._v(" Anonymous, Impersonation, Physical Path Credentials, LSA User")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("NTLM")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"basic-lsa-user-same-for-ad-user"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-lsa-user-same-for-ad-user"}},[t._v("#")]),t._v(" Basic, LSA User (Same for AD user)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"impersonation-basic-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-basic-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[t._v("#")]),t._v(" Impersonation, Basic Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("NTLM")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"impersonation-basic-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-basic-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[t._v("#")]),t._v(" Impersonation, Basic Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Kerberos")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Basic")]),t._v(" "),i("td",[t._v("DOMAINusername")])])])]),t._v(" "),i("h3",{attrs:{id:"forms-anonymous-auth"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#forms-anonymous-auth"}},[t._v("#")]),t._v(" Forms, Anonymous Auth")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.GenericIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.GenericIdentity")]),t._v(" "),i("td"),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("NT AUTHORITYIUSR")])])])]),t._v(" "),i("h3",{attrs:{id:"windows-lsa-user-same-for-ad-user"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-lsa-user-same-for-ad-user"}},[t._v("#")]),t._v(" Windows, LSA User (Same for AD user)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"impersonation-windows-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-windows-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[t._v("#")]),t._v(" Impersonation, Windows Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("NTLM")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("HOSTusername")])])])]),t._v(" "),i("h3",{attrs:{id:"impersonation-windows-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-windows-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[t._v("#")]),t._v(" Impersonation, Windows Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),t._v(" "),i("th",[t._v("Type")]),t._v(" "),i("th",[t._v("Return Type")]),t._v(" "),i("th",[t._v("Authentication Type")]),t._v(" "),i("th",[t._v("Identity Name")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Kerberos")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),t._v(" "),i("td",[t._v("IIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("DOMAINusername")])]),t._v(" "),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),t._v(" "),i("td",[t._v("WindowsIdentity")]),t._v(" "),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),t._v(" "),i("td",[t._v("Negotiate")]),t._v(" "),i("td",[t._v("DOMAINusername")])])])]),t._v(" "),i("p",[i("a",{attrs:{href:"http://www.mikeobrien.net/blog/tags#tag-3",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET"),i("OutboundLink")],1),t._v(", "),i("a",{attrs:{href:"http://www.mikeobrien.net/blog/tags#tag-48",target:"_blank",rel:"noopener noreferrer"}},[t._v("IIS 7"),i("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);