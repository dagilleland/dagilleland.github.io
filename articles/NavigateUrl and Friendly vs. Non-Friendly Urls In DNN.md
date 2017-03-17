---
Title: NavigateUrl and Friendly vs. Non-Friendly Urls In DNN
Created: 9/6/2009 2:59:03 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# NavigateUrl and Friendly vs. Non-Friendly Urls In DNN

---

## NavigateUrl and Friendly vs. Non-Friendly Urls In DNN


The host settings in DotNetNuke has an option for Friendly Urls (where query string parameters are built into the url path). It turns out that when you select Friendly Urls, you get a complete path when using NavigateUrl. But with the non-friendly setting, the Scheme of the path is missing with the NavigateUrl. Here's a quick bit of code to take a non-friendly NavigateUrl result and re-build it to include the scheme:

 <font size="2">   <p>   <font face="Courier New"><font color="#0000ff" size="2">Dim</font><font size="2"> startPosition </font><font color="#0000ff" size="2">As</font><font size="2"> </font><font color="#0000ff" size="2">Integer</font></font></font><font size="2">    <p><font face="Courier New">startPosition = InStr(ctrlKey, glbDefaultPage)</font></p>    <p>   <font face="Courier New"><font color="#0000ff" size="2">If</font><font size="2"> startPosition &gt; 0 </font><font color="#0000ff" size="2">Then</font></font></font><font size="2">    <p><font face="Courier New">ctrlKey = Mid(ctrlKey, startPosition)</font></p>    <p><font face="Courier New">ctrlKey = </font></p>   <font face="Courier New"><font color="#0000ff" size="2">Me</font><font size="2">.Request.Url.GetLeftPart(UriPartial.Scheme) + </font><font color="#0000ff" size="2">Me</font><font size="2">.PortalSettings.PortalAlias.HTTPAlias + </font><font color="#800000" size="2">&quot;/&quot;</font></font><font size="2"><font face="Courier New"> + ctrlKey</font></font>     <p>   <font face="Courier New"><font color="#0000ff" size="2">End</font><font size="2"> </font><font color="#0000ff" size="2">If</font></font></font>
<script src="/DesktopModules/itcMetaPost/js/m.js" type="text/javascript"></script>


---

