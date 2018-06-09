---
Title: Testing Email Apps during Development
Created: 6/26/2009 2:17:32 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Testing Email Apps during Development

---

## Testing Email Apps during Development


Here's a good [article/resource](http://weblogs.asp.net/dfindley/archive/2006/04/23/Migrating-from-System.Web.Mail-to-System.Net.Mail.aspx) on testing e-mailing apps in an environment that doesn't have SMTP. Basically, you add info in the configuration file for dropping the e-mails in a local area, like this:



    &lt;system.net&gt;     &lt;mailSettings&gt;         &lt;smtp deliveryMethod=&quot;Network&quot;&gt;             &lt;network host=&quot;mail.mydomain.com&quot; port=&quot;25&quot; /&gt;         &lt;/smtp&gt;         &lt;!-- Use this setting for development   &lt;smtp deliveryMethod=&quot;SpecifiedPickupDirectory&quot;&gt;     &lt;specifiedPickupDirectory pickupDirectoryLocation=&quot;C:\Temp&quot; /&gt;   &lt;/smtp&gt;   --&gt;     &lt;/mailSettings&gt; &lt;/system.net&gt;

 There's more to look at [here](http://weblogs.asp.net/steveschofield/archive/2007/09/08/smtp-server-on-vista-using-port-25-and-587.aspx) and [here (for leveraging Vista's IIS7 & building "realistic" SMTP forwarding)](http://weblogs.asp.net/steveschofield/archive/2006/12/19/iis7-post-23-vista-and-smtp-server-where-is-it.aspx) as well.



---

