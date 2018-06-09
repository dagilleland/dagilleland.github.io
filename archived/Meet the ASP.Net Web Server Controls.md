---
Title: Meet the ASP.Net Web Server Controls
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Meet the ASP.Net Web Server Controls


*[Re-posted from my archives]*

 

Visual Studio allows website developers to quickly create highly functional websites with relatively little effort through the use of ASP.Net Server Controls. There are quite a few controls available out-of-the-box with Visual Studio, as well as scores of 3rd-party controls. In this exercise, you will get a chance to meet and try out some of the more commonly used controls.


---
## Meet the ASP.Net Web Server Controls


Visual Studio allows website developers to quickly create highly functional websites with relatively little effort through the use of ASP.Net Server Controls. There are quite a few controls available out-of-the-box with Visual Studio, as well as scores of 3rd-party controls. In this exercise, you will get a chance to meet and try out some of the more commonly used controls.

 
***Quick Steps***

 
1. Create an ASP.Net Web Site.
2. Edit Default.aspx. Add a heading to the page "Meet the ASP.Net Server Controls".
3. Insert a table for displaying the controls; give it three columns and fourteen rows and a width of 100 px. Give the following column headings in the first row of the table: Control Name, Sample Control, and Comments.
4. Add the following controls from the ToolBox: Label, TextBox, Button, LinkButton, HyperLink, RadioButton, CheckBox, Image, Menu, Calendar, DropDownList, Gridview, and ObjectDataSource.
5. View the page in your browser. Note which controls are displayed in the browser and which are not.
6. Edit some of the properties of the controls on Default.aspx.
 
1. Create an ASP.Net Web Site.        
[![Create ASP.Net Website](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_4.png "Create ASP.Net Website")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_10.png)
2. Edit Default.aspx. Add a heading to the page "Meet the ASP.Net Server Controls".        
[![Page Heading (h1)](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_7.png "Page Heading (h1)")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_16.png)
3. Insert a table for displaying the controls; give it three columns and fourteen rows and a width of 100 px. Give the following column headings in the first row of the table: Control Name, Sample Control, and Comments.        
[![Insert Table](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_5.png "Insert Table")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_12.png) [![3 Columns X 14 Rows](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_6.png "3 Columns X 14 Rows")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_14.png)
4. Add the following controls from the ToolBox to the table, one row for each control. For now, leave their properties at their default values.     
 1. **Label** – (Standard Controls) The Label Web server control lets you programmatically set text in an ASP.NET Web page. You typically use the Label control when you want to change text in the page at run time, such as in response to a button click. (see [http://msdn.microsoft.com/en-us/library/bfhhhk72.aspx](http://msdn.microsoft.com/en-us/library/bfhhhk72.aspx))
 2. **TextBox** - (Standard Controls) The TextBox Web server control provides a way for users to type information into an ASP.NET Web page, including text, numbers, and dates. The TextBox server control is an input control that lets the user enter text. By default, the TextMode property of the control is set to TextBoxMode.SingleLine, which displays a single-line text box. However, you can set the TextMode property to TextBoxMode.MultiLine to display a multi-line text box (which renders as a textarea element). You can also change the TextMode property to TextBoxMode.Password to display a text box that masks user input. The text displayed in the TextBox control is available by using the Text property. (see [http://msdn.microsoft.com/en-us/library/ke98t8z7.aspx](http://msdn.microsoft.com/en-us/library/ke98t8z7.aspx))
 3. **Button** - (Standard Controls) Presents a standard command button, which is rendered as an HTML input element. Use the ASP.NET button Web server control to enable users to post a page to the server and to trigger an event on a page.
 4. **LinkButton** - (Standard Controls) Renders as a hyperlink in the page. However, it contains client-side script that causes the form to be posted back to the server. (You can create a true hyperlink by using the HyperLink Web server control.) Use the ASP.NET LinkButton Web server control to enable users to post a page to the server and to trigger an event on a page.
 5. **HyperLink** - (Standard Controls) The HyperLink Web server control creates links on a Web page that enables users to move from page to page in an application. The primary advantage of using a HyperLink control is that you can set link properties in server code. For example, you can dynamically change the link text or target page based on conditions in the page. Unlike most Web server controls, the HyperLink control does not raise an event in server code when users click it. Instead, the control simply performs navigation.
 6. **RadioButton** - (Standard Controls) The RadioButton control and the RadioButtonList control enable users to select from a small set of mutually exclusive, predefined choices.
 7. **CheckBox** - (Standard Controls) The CheckBox control and the CheckBoxList control provide a way for users to specify yes/no (true/false) choices.
 8. **[![ASP.Net Warrior](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/ASP.Net%20Warrior_thumb.jpg "ASP.Net Warrior")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/ASP.Net%20Warrior_2.jpg)Image** - (Standard Controls) The Image Web server control enables you to display images on an ASP.NET Web page and manage these images in your own code. You can specify the graphics file for an Image control at design time or at run time programmatically. You can also bind the control's ImageUrl property to a data source to display graphics based on database information. Unlike most other Web server controls, the Image control does not support any events. For example, the Image control does not respond to mouse clicks. Instead, you can create an interactive image by using the ImageMap or the ImageButton Web server controls.
 9. **Menu** - (Navigation Controls) The ASP.NET Menu control allows you to develop both statically and dynamically displayed menus for your ASP.NET Web pages. You can configure the contents of the Menu control directly in the control, or you can specify the contents by binding the control to a data source.
 10. **Calendar** - (Standard Controls) The Calendar Web server control can be used to display selectable dates in a calendar and to display data associated with specific dates.
 11. **DropDownList** - (Standard Controls) The DropDownList Web server control enables users to select a single item from a predefined drop-down list.
 12. **GridView** - (Data Controls) With the GridView control, you can display, edit, and delete data from many different kinds of data sources, including databases, XML files, and business objects that expose data.
 13. **ObjectDataSource** - (Data Controls) The ASP.NET ObjectDataSource control represents a middle-tier object with data retrieval and update capabilities. The ObjectDataSource control acts as a data interface for data-bound controls such as the GridView, FormView, or DetailsView controls. You can use these controls to display and edit data from a middle-tier business object on an ASP.NET Web page.
5. View the page in your browser. Note which controls are displayed in the browser and which are not.
6. Edit some of the properties of the controls on Default.aspx.     
 1. **Label**
  - Text: "*Database Update Successful*"
  - ForeColor: *Green*
  - Font-Bold: *True*
 2. **TextBox**
  - TextMode: *Multiline*
  - Rows: *5*
 3. **Button** -         
  - Text: "Save Changes"
  - Enabled: False
 4. **LinkButton** -         
  - Text: "Change Password"
  - ToolTip: "Click here to change your password."
 5. **HyperLink** -         
  - Text: "Google"
  - NavigateUrl: [http://www.Google.ca](http://www.Google.ca)
  - Target: \_blank
 6. **RadioButton** -         
  - Checked: True
 7. **CheckBox** -         
  - Checked: True
 8. **Image** -         
  - AlternateText: NAIT – An Institute of Technology Committed to Student Success
  - ImageUrl: [http://www.nait.ca/images/interface/h\_nait\_logo.gif](http://www.nait.ca/images/interface/h_nait_logo.gif)
  - ImageAlign: Left
 9. **Menu** -             
[![ASP:Menu - Smart Tag](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_3.png "ASP:Menu - Smart Tag")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_8.png)
  - Click the Smart Tag and add two items:             
   - Text: "Home Again"
   - Text: "About Me"
 10. **Calendar** -             
[![ASP:Calendar - Smart Tag](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_2.png "ASP:Calendar - Smart Tag")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_6.png)
  - Click the Smart Tag, then click "Auto Format…"
  - Select the "Colorful 1" format
 11. **DropDownList** -             
[![ASP:DropDownList - Smart Tag](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb_1.png "ASP:DropDownList - Smart Tag")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_4.png)
  - Click the Smart Tag, then "Edit Items…"
  - Add three items with any Text you choose
 12. **GridView** -             
[![ASP:GridView - Smart Tag](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_thumb.png "ASP:GridView - Smart Tag")](/Portals/50/images/%5BProvider%5D/%5BFolderFilePath%5D/WLW/MeettheASP.NetWebServerControls_12185/image_2.png)
  - Click the Smart Tag, then click "Edit Templates"
  - Display the EmptyData Template and enter "No data has been loaded"
7. View the page once more in your browser. Take a look at the HTML that was sent from the website by selecting "View Source" from your browser.

 



---
