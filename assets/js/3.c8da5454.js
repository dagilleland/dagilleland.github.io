(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,e,i){"use strict";i.r(e);var n=i(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("The following is a copy of the "),i("a",{attrs:{href:"http://www.mikeobrien.net/blog/identities-for-different-iis7",target:"_blank",rel:"noopener noreferrer"}},[t._v("excellent post"),i("OutboundLink")],1),t._v(" by "),i("a",{attrs:{href:"http://www.mikeobrien.net/cv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mike O'Brien"),i("OutboundLink")],1),t._v(". His original post is dated in 2009, but it's information is "),t._m(1),t._v(" helpful for anyone trying to make sense of how Identities are extablished under the various IIS authentication configurations.")]),i("p",[t._v("It's so good, I'm simply afraid that one day it might be lost, so I'm capturing it here for my own reference.")]),t._m(2),i("p",[t._v("A few notes about identities from the standpoint of ASP.NET:")]),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.security.principal.windowsidentity.getcurrent.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("WindowsIdentity.GetCurrent()"),i("OutboundLink")],1)]),t._v(" - This WindowsIdentity represents the OS thread identity or more specifically an "),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsAToken.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("account token"),i("OutboundLink")],1),t._v(" (Not to be confused with "),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsThreadDotCurrentPrincipal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thread.CurrentPrincipal.Identity"),i("OutboundLink")],1),t._v(' which is just a simple container for your convenience). This token represents a LSA (Local Security Authority) or Active Directory account. This will always be the process identity set in the App Pool configuration (AKA the App Pool identity) unless you are doing impersonation. This is the actual identity (Or Windows account token) that code runs as. As far as Windows Security is concerned this is the only identity that matters. The only way to "change" this is to do '),i("a",{attrs:{href:"http://alt.pluralsight.com/wiki/default.aspx/Keith.GuideBook/WhatIsImpersonation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("impersonation"),i("OutboundLink")],1),t._v(" which is done on a thread by thread basis and should be reverted ASAP to the original identity to avoid a security hole (And resource leak because of unclosed handles). New threads always inherit the process token regardless of if the creating thread is impersonating another user (Something to remember when doing async calls in ASP.NET while impersonating).")]),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.threading.thread.currentprincipal.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Thread.CurrentPrinciple.Identity"),i("OutboundLink")],1),t._v(" & "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.web.httpcontext.user.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpContext.Current.User.Identity"),i("OutboundLink")],1)]),t._v(" - These are set by ASP.NET during the authentication phase and will either be...")]),t._m(3),i("p",[i("strong",[i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/system.web.httprequest.logonuseridentity.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Request.LogonUserIdentity"),i("OutboundLink")],1)]),t._v(" - This is a WindowsIdentity representing the authenticating user, regardless of the authentication type. This will be the same as the OS thread "),t._m(4),t._v(" when you are doing impersonation. It will be the same as Thread.CurrentPrinciple.Identity & HttpContext.Current.User.Identity only when you are not doing anonymous authentication.")]),i("p",[t._v("Here is a listing of the identities set by IIS7 auth in a number of configurations. They remained the same in both integrated and classic pipeline modes.")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),i("p",[i("a",{attrs:{href:"http://www.mikeobrien.net/blog/tags#tag-3",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET"),i("OutboundLink")],1),t._v(", "),i("a",{attrs:{href:"http://www.mikeobrien.net/blog/tags#tag-48",target:"_blank",rel:"noopener noreferrer"}},[t._v("IIS 7"),i("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"identities-under-iis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identities-under-iis","aria-hidden":"true"}},[this._v("#")]),this._v(" Identities Under IIS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("em",[e("strong",[this._v("very")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"identities-for-different-iis7-authentication-configurations-january-2009"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identities-for-different-iis7-authentication-configurations-january-2009","aria-hidden":"true"}},[this._v("#")]),this._v(" Identities for different IIS7 Authentication Configurations January, 2009")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("...an Anonymous WindowsIdentity when doing just anonymous auth")]),e("li",[this._v("...a GenericIdentity when doing forms auth (Which implies anon auth).")]),e("li",[this._v("...a custom identity when doing custom auth (Which implies anon auth).")]),e("li",[this._v("...a WindowsIdentity representing the authenticating user when doing any other types of auth such as Basic, Windows or Challenge-Response. These two properties actually point to the same instance of the identity. This will be the same as the OS thread "),e("em",[e("strong",[this._v("only")])]),this._v(" when you are doing impersonation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("em",[e("strong",[this._v("only")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-specific-user-which-happens-to-be-iusr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-specific-user-which-happens-to-be-iusr","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous (Specific User, which happens to be IUSR)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("NT AUTHORITYIUSR")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-specific-user-which-happens-to-be-iusr-impersonation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-specific-user-which-happens-to-be-iusr-impersonation","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous (Specific User, which happens to be IUSR), Impersonation")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYIUSR")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("NT AUTHORITYIUSR")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-app-pool-identity-which-happens-to-be-network-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-app-pool-identity-which-happens-to-be-network-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous (App Pool Identity, which happens to be NETWORK SERVICE)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-app-pool-identity-which-happens-to-be-network-service-impersonation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-app-pool-identity-which-happens-to-be-network-service-impersonation","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous (App Pool Identity, which happens to be NETWORK SERVICE), Impersonation")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-physical-path-credentials-lsa-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-physical-path-credentials-lsa-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous, Physical Path Credentials, LSA User")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"anonymous-impersonation-physical-path-credentials-lsa-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-impersonation-physical-path-credentials-lsa-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Anonymous, Impersonation, Physical Path Credentials, LSA User")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("NTLM")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"basic-lsa-user-same-for-ad-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-lsa-user-same-for-ad-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic, LSA User (Same for AD user)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"impersonation-basic-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-basic-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false","aria-hidden":"true"}},[this._v("#")]),this._v(" Impersonation, Basic Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("NTLM")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"impersonation-basic-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-basic-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false","aria-hidden":"true"}},[this._v("#")]),this._v(" Impersonation, Basic Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Kerberos")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Basic")]),i("td",[t._v("DOMAINusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"forms-anonymous-auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forms-anonymous-auth","aria-hidden":"true"}},[this._v("#")]),this._v(" Forms, Anonymous Auth")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.GenericIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.GenericIdentity")]),i("td"),i("td")]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td"),i("td",[t._v("NT AUTHORITYIUSR")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"windows-lsa-user-same-for-ad-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-lsa-user-same-for-ad-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows, LSA User (Same for AD user)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("NT AUTHORITYNETWORK SERVICE")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"impersonation-windows-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-windows-auth-and-lsa-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false","aria-hidden":"true"}},[this._v("#")]),this._v(" Impersonation, Windows Auth, and LSA User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("NTLM")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("HOSTusername")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"impersonation-windows-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impersonation-windows-auth-and-ad-user-classic-pipeline-mode-or-integrated-pipeline-and-validateintegratedmodeconfiguration-false","aria-hidden":"true"}},[this._v("#")]),this._v(" Impersonation, Windows Auth, and AD User (Classic Pipeline Mode or Integrated Pipeline and validateIntegratedModeConfiguration=false)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Source")]),i("th",[t._v("Type")]),i("th",[t._v("Return Type")]),i("th",[t._v("Authentication Type")]),i("th",[t._v("Identity Name")])])]),i("tbody",[i("tr",[i("td",[t._v("WindowsIdentity.GetCurrent()")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Kerberos")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("Thread.CurrentPrincipal.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("HttpContext.Current.User.Identity")]),i("td",[t._v("IIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("DOMAINusername")])]),i("tr",[i("td",[t._v("Request.LogonUserIdentity")]),i("td",[t._v("WindowsIdentity")]),i("td",[t._v("System.Security.Principal.WindowsIdentity")]),i("td",[t._v("Negotiate")]),i("td",[t._v("DOMAINusername")])])])])}],!1,null,null,null);e.default=r.exports}}]);