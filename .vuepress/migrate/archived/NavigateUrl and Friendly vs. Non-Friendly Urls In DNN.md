---
Title: NavigateUrl and Friendly vs. Non-Friendly Urls In DNN
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# NavigateUrl and Friendly vs. Non-Friendly Urls In DNN

---
## NavigateUrl and Friendly vs. Non-Friendly Urls In DNN


The host settings in DotNetNuke has an option for Friendly Urls (where query string parameters are built into the url path). It turns out that when you select Friendly Urls, you get a complete path when using NavigateUrl. But with the non-friendly setting, the Scheme of the path is missing with the NavigateUrl. Here's a quick bit of code to take a non-friendly NavigateUrl result and re-build it to include the scheme:

 <font size="2">   <p>   <font face="Courier New"><font color="#0000ff" size="2">Dim<font size="2"> startPosition <font color="#0000ff" size="2">As<font size="2"> <font color="#0000ff" size="2">Integer<font size="2">    <p><font face="Courier New">startPosition = InStr(ctrlKey, glbDefaultPage)</p>    <p>   <font face="Courier New"><font color="#0000ff" size="2">If<font size="2"> startPosition &gt; 0 <font color="#0000ff" size="2">Then<font size="2">    <p><font face="Courier New">ctrlKey = Mid(ctrlKey, startPosition)</p>    <p><font face="Courier New">ctrlKey = </p>   <font face="Courier New"><font color="#0000ff" size="2">Me<font size="2">.Request.Url.GetLeftPart(UriPartial.Scheme) + <font color="#0000ff" size="2">Me<font size="2">.PortalSettings.PortalAlias.HTTPAlias + <font color="#800000" size="2">&quot;/&quot;<font size="2"><font face="Courier New"> + ctrlKey     <p>   <font face="Courier New"><font color="#0000ff" size="2">End<font size="2"> <font color="#0000ff" size="2">If



---
