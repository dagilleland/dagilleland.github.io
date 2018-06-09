---
Title: DotNetNuke® Dynamic Module Template – Journal Module
Created: 8/12/2013 3:45:50 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# DotNetNuke® Dynamic Module Template – Journal Module

---

## DotNetNuke® Dynamic Module Template – Journal Module

# DotNetNuke® Dynamic Module Template – Journal Module
 

![clip_image001](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-clip_image001_3.gif "clip_image001")Many module developers use the DotNetNuke® Dynamic Module template as their starting point. The Dynamic Module template contains the end-to-end pieces found in most modules:

 
- View, Edit and Settings controls  - Resource files (.resx) for language independence (internationalization)  - CBO, BLL and DAL classes  - Database Install/Uninstall scripts  - DotNetNuke manifest (.dnn) for creating installation packages

 

This template, however, is much more than a simple starting point for module development. It's actually a fully-functional module, designed to manage and display a particular form of content.

 

In this tutorial, I'll direct you through the steps to create and use this module as-is. The design of this template is ideal for creating a simple Journal module that a group or individual can use to keep a running set of HTML content. At the end of the tutorial, I'll delve deeper into its design and integration into the DotNetNuke pluggable architecture.


# DotNetNuke® Dynamic Module Template – Journal Module
 

![clip_image001](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-clip_image001_3.gif "clip_image001")Many module developers use the DotNetNuke® Dynamic Module template as their starting point. The Dynamic Module template contains the end-to-end pieces found in most modules:

 
- View, Edit and Settings controls  - Resource files (.resx) for language independence (internationalization)  - CBO, BLL and DAL classes  - Database Install/Uninstall scripts  - DotNetNuke manifest (.dnn) for creating installation packages

 

This template, however, is much more than a simple starting point for module development. It's actually a fully-functional module, designed to manage and display a particular form of content.

 

In this tutorial, I'll direct you through the steps to create and use this module as-is. The design of this template is ideal for creating a simple Journal module that a group or individual can use to keep a running set of HTML content. At the end of the tutorial, I'll delve deeper into its design and integration into the DotNetNuke pluggable architecture.

 
## Journal Module
 

The idea behind the Journal Module is to provide a single user or a group of users with the ability to create a series of "posts" or entries on a single page. The user would write the post in the Rich Text Editor of DotNetNuke, allowing them to include images, do font styling, etc.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image7_thumb.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image7.png)

 

The supporting database table consists of five columns. The main column is named "Content" and it holds the HTML/text of the user's journal entry. The users' ID and the date that the entry was created is also stored in the table. Each journal entry can be identified by the ItemID column (the table's Primary Key). Lastly, a column named "ModuleID" acts as a foreign key column to the Modules table in the DotNetNuke framework.

 

[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image4_thumb.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image4.png)

 

Another key feature of the module is the ability to lay out the information in a flexible format. All of the data from the table could (conceivable) be shown for each Journal entry. To achieve this, a "template" approach will be taken to render the content. The template is a simple string with "placeholders" that mark what content is to go where. A placeholder would simply be the property name of the custom business object (equivalent to the column name from the database) surrounded by square brackets, such as [CONTENT] or [CREATEDDATE].

 

For example, consider the following data for a journal entry.

 
- Content – "Today, I just <i>had</i> to jot down what I learned. I <b>finally</b> understand the Dynamic Module template!"  - CreatedDate – 06/13/2010 3:15  - ItemID – 5

 

A template for rendering the content could be generated that incorporates HTML to control the display.

 

"<div>[CONTENT]</div><div style="text-align:right;">Entry # [ITEMID] – [CREATEDDATE]</div><hr />"

 

When the journal entry is displayed to the user, it would appear like this (in HTML).

 

"<div> Today, I just <i>had</i> to jot down what I learned. I <b>finally</b> understand the Dynamic Module template!</div><div style="text-align:right;">Entry # 5 – 06/13/2010 3:15:48 PM</div><hr />"

 
### Constructing the Journal Module
 

There are four parts to making the Journal module

 
- Create the module from the template  - Rename the module's folders  - Run the script to install the database tables  - Register the module in the DotNetNuke Web Application Framework

 
## Part 1 – Create the Module
 
1. Open Visual Studio and create a new website using the DotNetNuke Web Application Framework template. Place the website in some location on your computer (I've placed mine in a folder on my I:\ drive).   
[![Add New Web Site Dialog](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcc9ea13_thumb.png "Add New Web Site Dialog")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcc9ea13.png)- In the Solution Explorer, right-click the website and select "Add New Item…"    
[![Add New Item](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_27.png "Add New Item")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_58.png)- In the Add New Item dialog box, select the DotNetNuke Dynamic Module template and give the module the name "Journal". Then click the Add button.    
[![Add Dynamic Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_28.png "Add Dynamic Module")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_60.png)

 

At this stage, a number of files and folders have been created.

 
- Inside the DesktopModules folder, a folder called "ModuleName" has been created. It contains the UI-related controls for the module (EditJournal, Settings, and ViewJournal) along with resource files, introductory documentation, a DNN manifest (Journal.dnn), and a couple of database install/uninstall scripts (01.00.00.SqlDataProvider and Uninstall.SqlDataProvider).    
[![Template items in DesktopModules](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_29.png "Template items in DesktopModules")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_62.png)- Inside the App\_Code folder, a folder called "ModuleName" has been created. It contains classes for the module's Custom Business Object (CBO), Business Logic Layer (BLL) and Data Access Layer (DAL).    
[![Template items in App_Code](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_30.png "Templte items in App_Code")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_64.png)

 
# Part 2 – Rename the "ModuleName" Folders
 

Besides creating the files and folders, a Documentation.html file will be opened in the Editor window with instructions to rename the "ModuleName" folders to the name you gave the module in the Add New Item dialog.

 

![Documentation.html](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image23_thumb.png)

 

Walking through this part, you would perform the following steps.

 
1. In the Solution Explorer, expand the App\_Code folder until you see a folder called "ModuleName". Right-click the "ModuleName" folder and choose "Rename" from the menu; then give it the new name of "YourCompany.Journal".    
[![Rename ModuleName folder](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_31.png "Rename ModuleName folder")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_66.png)- Expand the DesktopModules folder until you see another folder called "ModuleName". Right-click the "ModuleName" folder and give it the name "YourCompany.Journal".    
[![Rename ModuleName folder](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_32.png "Rename ModuleName folder")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_68.png)

 

At this point, we have done all that is needed inside Visual Studio to create the module. Remember, we're using the built-in functionality of the Dynamic Module template to provide all of the desired functionality of our Journal module, so no coding is required for this project. The remaining steps for setting up the module will happen inside the browser as we view the DotNetNuke web application.

 
# Part 3 – Create the Database Tables
 

The Dynamic Module template comes with a file named "01.00.00.SqlDataProvider". This file has the DNN-ready scripts to create the database tables and stored procedures for the module. Because the scripts are "DNN-ready", they can be executed in the browser by the Super User. Follow these steps to install the database items.

 
1. Press [CTRL] + [F5] in Visual Studio to launch the website in a browser. Visual Studio will build (or compile) the website, so this step may take a few minutes, depending on your computer's processing power.  - If this is the first time you've run the website in your browser, you will get the DotNetNuke Installation Wizard. This wizard guides you through the setup of your DotNetNuke website.    
[![DotNetNuke Installation Wizard](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_33.png "DotNetNuke Installation Wizard")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_70.png)   
 
 1. For this tutorial, select the "Auto" option and click "Next". This sets up the website to use an SQL Express database in the website's App\_Data folder. All of the other options for the website are already configured in the web.config file.    
[![Auto Installation](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_34.png "Auto Installation")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_72.png) - The installation process will take a few seconds. Once it is complete, click the link at the bottom of the page to access the website.    
[![Click Here to Access Your Portal](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_35.png "Access Your Portal")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_74.png)

 - On the website, log on as the Super User. In the auto-installation, the username and password for the "Host" Super User account are displayed on the default home page. Once logged in, you will have full access to the website, which is required in order to install modules.   
[![Host Login](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_36.png "Host Login")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_76.png)  - From the Host menu, select SQL. This will open a page where you can run database scripts and execute any SQL on the portal's database.    
[![Menu: Host-&gt;SQL](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_37.png "Menu: Host-&gt;SQL")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_78.png)- Click the "Choose File" button and browse to the folder that holds your module. Select the "01.00.00.SqlDataProvider" file to upload. Then click the "Load" link on the page.    
[![SQL - Choose File](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_38.png "Choose File")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_80.png)   
This will load the file's contents into the text box for running against the database.  - Make sure the "Run as Script" checkbox is selected and click the "Execute" link.    
[![Run as Script](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_39.png "Run as Script")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_82.png)- The page should refresh with a message "The Query completed successfully!"    
[![Query Successful](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_40.png "Query Successful")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_84.png)

 
# Part 4 – Register the Module
 

With the database table and stored procedures installed, we can now proceed with registering the new module in the DotNetNuke website.

 
1. From the Host menu, select Module Definitions. This opens a page that lists all the installed modules.   
[![Menu: Host-&gt;Module Definitions](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcd2f7c9_thumb.png "Menu: Host-&gt;Module Definitions")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcd2f7c9.png)- From the Module Definitions action menu, select "Create New Module".    
[![Action Menu: Create New Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_41.png "Action Menu: Create New Module")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_86.png)- In the Create New Module form, select "Manifest" from the drop-down-list to create the module from the Journal.dnn installation manifest.    
[![Create Module From Manifest](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_42.png "Create Module From Manifest")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_88.png)- Select "YourCompany.Journal" as the Module Folder and "Journal.dnn" as the Resource. Check the "Add Test Page" checkbox and then click the "Create Module" link.    
[![Create New Module Form](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_43.png "Create New Module Form")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_90.png)- On the Test Page, you should see an instance of the Journal module.   
[![Module Test Page](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image65_thumb.png "Module Test Page")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image65.png)

 
# Using the Module
 

The Journal module adds a default entry when it is first placed on a page. A user with Edit rights to the module can

 
- **Edit existing content** by clicking the pencil icon beside a specific entry,  - **Add new content** by clicking the "Add Content" link or choosing "Add Content" from the Action menu, and  - **Modify the layout** of journal entries through the module's settings.

 

![Journal Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image68_thumb.png "Journal Module")

 
## A) Editing and Adding Content
 

Editing existing journal entries is easy. Simply follow these steps.

 
1. Click the pencil icon beside the journal entry you wish to edit. This will open the entry in a new control (EditJournal.ascx) to allow editing.   
[![Journal Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb.png "Journal Module")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_2.png)- The Edit page for the module sports a Rich Text Editor with the existing content already loaded.   
[![Edit Journal Page](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_1.png "Edit Journal Page")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_4.png)- Click inside the Rich Text Editor to begin changing the content to whatever you like. With the full features of the Rich Text Editor, you can apply text formatting, insert images, and much more!   
[![Edit Journal - Rich Text Editor](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_2.png "Edit Journal - Rich Text Editor")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_6.png)- When you are finished, click "Update" to save your changes and return to the regular view of your module.   
![Update Cancel Delete Buttons](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_9.png "Update Cancel Delete Buttons")- Journal entries can be edited at any time. They can also be deleted. To delete a Journal entry, click the Delete button in the Edit Journal control. Please remember that once deleted, the entry cannot be retrieved.    
[![Delete Confirmation Box](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcdc2e43_thumb.png "Delete Confirmation Box")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcdc2e43.png)

 

Adding new journal entries is as easy as editing existing ones. In the background, it uses the exact same user control – EditJournal.ascx.

 
1. Click the "Add Content" link below the existing content or select "Add Content" from the module's action menu.   
[![Add Content Link](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_4.png "Add Content Link")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_11.png) [![Action Menu: Add Content](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcdf2474_thumb.png "Action Menu: Add Content")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLcdf2474.png)- The Edit page now shows the Rich Text Editor without any content. Enter whatever content you wish in the editor, then click "Update" to save the entry.   
[![Edit Journal - Add Content](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_5.png "Edit Journal - Add Content")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_13.png)

 
# B) Modifying the Layout
 

By default, the Journal module displays the content of each journal entry without any formatting.

 

There is more information stored than just the content, however. Each journal entry records the ID of the user who wrote it and the date that it was entered. There is also the unique ID that each entry contains in the database table, along with the ID of the module to which it belongs. All of these pieces of information can be displayed in the module by simply modifying the template that controls the layout.

 
1. Click the Settings icon (![Settings Icon](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-SNAGHTMLce58558_1.png "Settings Icon")) or select "Settings" from the module's action menu.   
[![Action Menu: Settings](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_6.png "Action Menu: Settings")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_15.png)- Expand the Journal Settings section at the bottom of the page. In the Template text box, enter whatever HTML you wish to use in creating the layout for the content. You can use placeholders to represent the specific information you want to use from the journal entry.   
[![Journal Settings](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_7.png "Journal Settings")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_17.png)- Click "Update" to save the module settings.

 

The Journal module supports the following placeholders. These should be entered in upper-case in the template.

 
- **[CONTENT]** – This is the content that was entered through the Rich Text Editor when adding/editing entries. As "rich text", it contains HTML tags for formatting, styling, images, etc.  - **[CREATEDDATE]** – The date that the entry was first created.  - **[CREATEDBYUSER]** – The ID of the user who created the entry.  - **[ITEMID]** – An ID that uniquely identifies the entry in the database table. It is auto-generated whenever a new entry is created.  - **[MODULEID]** – The ID of the module instance on the website. Each time a Journal module is added to a page, it is given its own unique Module ID to distinguish it from other instances of the module.

 

> **Note:** The help text for the Template states that one of the placeholders is [CREATEDBYUSERNAME], but that is not actually supported in the default functionality of the Dynamic Module template. All placeholders are actually the property names of the "info" class for the module. See the section "Understanding the Module" for more details.

Creating this first version of the Journal module has been pretty easy. No coding was required because the functionality was already built into the DotNetNuke Dynamic Module template. It can be used as journal for one person or for a group of people, simply by applying the right Edit permissions in the module's settings.   
 

[![Sample Journal Module](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image71_thumb.png "Sample Journal Module")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image71.png)

 

With a fully-functional module in place, we have a basis from which to begin exploring how modules are built and how they interact with the DotNetNuke framework. In the next section we will dive into the code for the module to see how it all works.

 
# Understanding the Module
 

DotNetNuke modules have traditionally been modeled using a layered architecture (like Client-Server). The functionality is broken into distinct layers, each with their own responsibility.

 

[![DotNetNuke Module Architecture](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_9.png "DotNetNuke Module Architecture")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_21.png)

 
- **Database** – The database will hold the table, which stores the module's information, and stored procedures, which are used to access the table.  - **CBOs** – A Custom Business Object (CBO) is essentially a class that represents a single row of data from the database table.  - **DAL** – The Data Access Layer (or DAL) is the part of the module that is responsible for communicating with the database.  - **BLL** – The Business Logic Layer (BLL) embodies the data and services of the module; through it, the user interface (and the DotNetNuke framework) gain access to the module's data.  - **UI** – The User Interface (UI) layer is a set of User Controls which allow people to View and Edit the module's content as well as manage its unique Settings.

 

From a coding perspective (and possibly a design perspective), it works well to create the module from the back end (database) to the front end (user interface). Likewise, we'll examine the Journal module starting with the database scripts.

 

> Those new to programming will usually code their modules from the back end to the front end, since it is easier to take advantage of Visual Studio's Intellisense. It's not a hard and fast rule, however. Developers who take Test-Driven Design (TDD) or Behaviour Driven Design (BDD) approaches will likely start elsewhere.

 
# In Depth Part 1 – The Database Scripts
 

The Journal module has two database scripts. One is for installing the tables and stored procedures. The other is for uninstalling these items. They are named "01.00.00.SqlDataProvider" and "Uninstall.SqlDataProvider", respectively. All of the database scripts that are processed by DotNetNuke should have the ".SqlDataProvider" file extension.

 

For the most part, these scripts use standard SQL syntax. The only unique aspect to these scripts is the inclusion of two placeholders which DotNetNuke uses to tailor these scripts to the active database environment. These placeholders are enclosed in curly braces to make it easy for the DotNetNuke framework to perform a search and replace on the scripts before running them on the database server.

 
- **{databaseOwner}** – For security purposes, some databases use a custom account name for the database owner (DBO) other than the default name of "dbo". The decision to use a specific account as the DBO will be made outside of the DotNetNuke environment (typically by a DBA), yet the DotNetNuke framework needs to be aware of that name in order to properly access . During a typical or custom installation, the DotNetNuke Install Wizard provides opportunity to enter this account name.  - **{objectQualifier}** – It is actually possible (though highly unusual) to have more than one set of DotNetNuke database objects in the same physical database. This is done by adding a prefix to the tables, stored procedures, etc. This prefix is called an "Object Qualifier". Each set of database objects is completely distinct from each other.

 

Every module's database scripts should make use of these two placeholders when identifying objects in the database, such as table and stored procedure names. Failure to do so will cause your module's installation to crash in those rare cases where the Database Administrator (DBA) has made requirements for these in their database server environments.

 
## 01.00.00.SqlDataProvider
 

Notice the unique name given to this script. The first part of the file name is the module's version number. The file extension of ".SqlDataProvider" tells DotNetNuke that this is a database script. When creating new versions of your module, you can add new scripts for modifying the module's database objects; simply add new files using the module's version number as the main name along with the .SqlDataProvider extension. Thus, the next major version of your module would have the name "02.00.00.SqlDataProvider".

 

> The following scripts preface the name of every table, stored procedure, constraint and index with the name "YourCompany\_". This is a standard practice to ensure that two module developers with similar table names won't over-write each other's work. Keeping it in mind will save your clients from potential problems and yourself from a bad reputation!

 

Nested inside an if statement that checks if the module's table has already been created, the first part of the script simply creates the table and sets primary key and foreign key indexes. ([**view code**](mp1))

 



[mp1]   
### Create Table Script
 
if not exists (select * from dbo.sysobjects 

<!--CRLF-->

                    where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_Journal]') 

<!--CRLF-->

                    and OBJECTPROPERTY(id, N'IsTable') = 1)

<!--CRLF-->

        BEGIN

<!--CRLF-->

            CREATE TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal]

<!--CRLF-->

            (

<!--CRLF-->

                [ModuleID] [int] NOT NULL,

<!--CRLF-->

                [ItemID] [int] NOT NULL IDENTITY(1, 1),

<!--CRLF-->

                [Content] [ntext] NOT NULL,

<!--CRLF-->

                [CreatedByUser] [int] NOT NULL,

<!--CRLF-->

                [CreatedDate] [datetime] NOT NULL

<!--CRLF-->

            )

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ALTER TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal] 

<!--CRLF-->

                ADD CONSTRAINT [PK_{objectQualifier}YourCompany_Journal] PRIMARY KEY CLUSTERED  ([ItemID])

<!--CRLF-->

            CREATE NONCLUSTERED INDEX [IX_{objectQualifier}YourCompany_Journal] 

<!--CRLF-->

                ON {databaseOwner}[{objectQualifier}YourCompany_Journal] ([ModuleID])

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ALTER TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal] WITH NOCHECK 

<!--CRLF-->

                ADD CONSTRAINT [FK_{objectQualifier}YourCompany_Journal_{objectQualifier}Modules] 

<!--CRLF-->

                FOREIGN KEY ([ModuleID]) REFERENCES {databaseOwner}[{objectQualifier}Modules] ([ModuleID]) 

<!--CRLF-->

                ON DELETE CASCADE NOT FOR REPLICATION

<!--CRLF-->

        END

<!--CRLF-->
 



[/mp1]  

Following the table creation, another series of if statements check for the module's stored procedures, dropping each stored procedure that already exists in the database. ([**view code**](mp2))

 



[mp2]   
### Drop Stored Procedures
 
if exists (select * from dbo.sysobjects 

<!--CRLF-->

                where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_GetJournals]') 

<!--CRLF-->

                and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}YourCompany_GetJournals

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects 

<!--CRLF-->

                where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_GetJournal]') 

<!--CRLF-->

                and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}YourCompany_GetJournal

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects 

<!--CRLF-->

                where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_AddJournal]') 

<!--CRLF-->

                and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}YourCompany_AddJournal

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects 

<!--CRLF-->

                where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_UpdateJournal]') 

<!--CRLF-->

                and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}YourCompany_UpdateJournal

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects 

<!--CRLF-->

                where id = object_id(N'{databaseOwner}[{objectQualifier}YourCompany_DeleteJournal]') 

<!--CRLF-->

                and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}YourCompany_DeleteJournal

<!--CRLF-->

    GO

<!--CRLF-->
 



[/mp2]  

At first glance, these if statements may seem unnecessary for the first version of the module. However, if there are problems with the installation of the module, during either production or development, these if statements come in handy for re-running the installation. They give an opportunity to clean up any lingering items while ensuring that the rest of the script has a chance to run. Without them, re-running the script could fail because of pre-existing items.

 

The last portion of the installation script creates the stored procedures. For this module, there are five stored procedures.

 
- **GetJournals** – Returns all the journal entries for a specific module.  - **GetJournal**– Returns a single, specific journal entry for a specific module.  - **AddJournal**– Creates a new row in the table for a new journal entry.  - **UpdateJournal**– Used for editing an existing journal entry with updated information.  - **DeleteJournal**– Permanently removes a row from the table for a specific journal entry.

 

In their entirety, here are the [**five stored procedures**](mp3).

 



[mp3]   
### Stored Procedures Scripts
 
create procedure {databaseOwner}{objectQualifier}YourCompany_GetJournals

<!--CRLF-->

        @ModuleId int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    select ModuleId,

<!--CRLF-->

           ItemId,

<!--CRLF-->

           Content,

<!--CRLF-->

           CreatedByUser,

<!--CRLF-->

           {objectQualifier}YourCompany_Journal.CreatedDate

<!--CRLF-->

    from {objectQualifier}YourCompany_Journal with (nolock)

<!--CRLF-->

    left outer join {objectQualifier}Users 

<!--CRLF-->

    on {objectQualifier}YourCompany_Journal.CreatedByUser = {objectQualifier}Users.UserId

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}YourCompany_GetJournal

<!--CRLF-->

        @ModuleId int,

<!--CRLF-->

            @ItemId int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    select ModuleId,

<!--CRLF-->

           ItemId,

<!--CRLF-->

           Content,

<!--CRLF-->

           CreatedByUser,

<!--CRLF-->

           {objectQualifier}YourCompany_Journal.CreatedDate

<!--CRLF-->

    from {objectQualifier}YourCompany_Journal with (nolock)

<!--CRLF-->

    left outer join {objectQualifier}Users 

<!--CRLF-->

    on {objectQualifier}YourCompany_Journal.CreatedByUser = {objectQualifier}Users.UserId

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    and ItemId = @ItemId

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}YourCompany_AddJournal

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

        @Content        ntext,

<!--CRLF-->

        @UserID         int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    insert into {objectQualifier}YourCompany_Journal (

<!--CRLF-->

        ModuleId,

<!--CRLF-->

        Content,

<!--CRLF-->

        CreatedByUser,

<!--CRLF-->

        CreatedDate

<!--CRLF-->

    ) 

<!--CRLF-->

    values (

<!--CRLF-->

        @ModuleId,

<!--CRLF-->

        @Content,

<!--CRLF-->

        @UserID,

<!--CRLF-->

        getdate()

<!--CRLF-->

    )

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}YourCompany_UpdateJournal

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

          @ItemId         int,

<!--CRLF-->

        @Content        ntext,

<!--CRLF-->

        @UserID         int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    update {objectQualifier}YourCompany_Journal

<!--CRLF-->

    set    Content       = @Content,

<!--CRLF-->

           CreatedByUser = @UserID,

<!--CRLF-->

           CreatedDate   = getdate()

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    and    ItemId = @ItemId

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}YourCompany_DeleteJournal

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

            @ItemId         int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    delete

<!--CRLF-->

    from   {objectQualifier}YourCompany_Journal

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    and    ItemId = @ItemId

<!--CRLF-->
 

[/mp3]  
## Uninstall.SqlDataProvider
 

Because modules are "plug-ins" to a DotNetNuke website, it is important to make it easy for website owners to "un-plug" the module. The "Uninstall.SqlDataProvider" script ensures the clean removal of all the database objects related to the module.

 

This script begins by clearing all the table constraints and indexes. These have to be cleared before the database table can be removed. Next, the table itself is removed. The last part of this script removes all the stored procedures for the module. ([**view code**](mp4))

 



[mp4]   
### Alter Table Script
 
ALTER TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal] DROP CONSTRAINT [FK_{objectQualifier}Journal_{objectQualifier}Modules]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    ALTER TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal] DROP CONSTRAINT [PK_{objectQualifier}YourCompany_Journal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP INDEX {databaseOwner}[{objectQualifier}YourCompany_Journal].[IX_{objectQualifier}YourCompany_Journal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP TABLE {databaseOwner}[{objectQualifier}YourCompany_Journal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}YourCompany_GetJournals]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}YourCompany_GetJournal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}YourCompany_AddJournal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}YourCompany_UpdateJournal]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}YourCompany_DeleteJournal]

<!--CRLF-->
[/mp4]  

It's a good idea to always perform a test of the un-install script, followed by a re-running of the installation script. This can highlight any errors or omissions that could cause problems on someone's DotNetNuke website.

 
# In Depth Part 2 – The Custom Business Object
 

The database is separate from the web application. Because of this, the web application needs a way to hold any data it wants to retrieve from or send to the database. One of the ways this is done is with Custom Business Objects (CBOs). A CBO (sometimes called a "Business Entity") is simply a class whose design or structure matches the database table.

 

In this module, there is a single database table, named "YourCompany\_Journal". There is a corresponding class in the web application named JournalInfo which has public properties, one for each column in the database table. In essence, each instance of the JournalInfo class will represent a single row of data from the database table.

 

[![JournalInfo Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_3.png "JournalInfo Class Diagram")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_18.png)

 

The class is designed as a simple POCO (Plain Old CLR Object). There are private fields with public properties, but no methods. Its sole purpose is to store data about a single journal entry. The real value of the class comes into play when it is used in the rest of the web application to package, transport and manipulate this data. ([**view code**](mp5))

 



[mp5]   
### JournalInfo Class
 
Imports System

<!--CRLF-->

    Imports System.Configuration

<!--CRLF-->

    Imports System.Data

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        Public Class JournalInfo

<!--CRLF-->

            ' local property declarations

<!--CRLF-->

            Private _ModuleId As Integer

<!--CRLF-->

            Private _ItemId As Integer

<!--CRLF-->

            Private _Content As String

<!--CRLF-->

            Private _CreatedByUser As Integer

<!--CRLF-->

            Private _CreatedDate As DateTime

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ' initialization

<!--CRLF-->

            Public Sub New()

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ' public properties

<!--CRLF-->

            Public Property ModuleId() As Integer

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _ModuleId

<!--CRLF-->

                End Get

<!--CRLF-->

                Set(ByVal Value As Integer)

<!--CRLF-->

                    _ModuleId = Value

<!--CRLF-->

                End Set

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Property ItemId() As Integer

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _ItemId

<!--CRLF-->

                End Get

<!--CRLF-->

                Set(ByVal Value As Integer)

<!--CRLF-->

                    _ItemId = Value

<!--CRLF-->

                End Set

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Property Content() As String

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _Content

<!--CRLF-->

                End Get

<!--CRLF-->

                Set(ByVal Value As String)

<!--CRLF-->

                    _Content = Value

<!--CRLF-->

                End Set

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Property CreatedByUser() As Integer

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _CreatedByUser

<!--CRLF-->

                End Get

<!--CRLF-->

                Set(ByVal Value As Integer)

<!--CRLF-->

                    _CreatedByUser = Value

<!--CRLF-->

                End Set

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Property CreatedDate() As DateTime

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _CreatedDate

<!--CRLF-->

                End Get

<!--CRLF-->

                Set(ByVal Value As DateTime)

<!--CRLF-->

                    _CreatedDate = Value

<!--CRLF-->

                End Set

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    End Namespace

<!--CRLF-->
 

 



[/mp5]  
# In Depth Part 3 – The Data Access Layer
 

The Data Access Layer (DAL) is where information is exchanged between the web application and the database.

 

Since DotNetNuke is a web application that can have different types of databases in the back end, such as Microsoft SQL Server or Oracle, it is a common practice to build a bit of database abstraction into the DAL portion of the module. For this module, there are two classes that make up the DAL.

 

[![DAL Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image3_thumb.png "DAL Class Diagram")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image3.png)

 

At first, it might seem strange to need two classes for the DAL. Strictly speaking, both classes are not needed for this sample module. However, part of the idea behind the Dynamic Module template is to provide a good example of common "best practices" for module developers. One of those best practices is the idea of designing with the idea of allowing for different database engines backing the DotNetNuke website. Hence the two classes.

 
- **DataProvider** – This is an abstract class that specifies the specific methods for database CRUD actions (Create, Read, Update and Delete).  - **SqlDataProvider** – This is a concrete class that inherits from DataProvider. It implements all of the abstract methods of the base class to provide the specific code required to perform the CRUD actions on a particular database. Since Microsoft's SQL Server is used by default in most DNN modules, this class is written to do the CRUD for that database.

 

Each of these classes fulfill an important role in the DAL, and together they set the basis for creating flexible modules in the DotNetNuke ecosystem.

 
## DataProvider.vb
 

The following class diagram lays out the base class for the module's DAL. The methods in *italics* are abstract methods which the concrete classes (such as SqlDataProvider) will have to override to provide the specific code to run when the methods are called.

 

[![DataProvider Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image6_thumb.png "DataProvider Class Diagram")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image6.png)

 

For the CRUD actions, the following abstract methods are defined. Not surprisingly, each of these method names mirror the stored procedure name which will eventually be called by the concrete DAL class.

 
- **GetJournals** – This takes the ID of the module instance on the page and returns all of the Journal entries for that module.  - **GetJournal**– This gets an individual Journal entry.  - **AddJournal**– This method takes the bare-bones data needed to add a new Journal entry to the database.  - **UpdateJournal**– This method also takes the minimal amount of information needed to modify a Journal entry in the database.  - **DeleteJournal**– This method takes the ID of the module instance and the specific Journal entry that is to be removed from the database.

 

The class also defines the following static (shared in VB) items.

 
- A private field, ***objProvider***, that holds a reference to a concrete DataProvider object.  - A shared constructor (and private shared subroutine ***CreateProvider***) that sets the ***objProvider**.*- A public method ***Instance*** that returns the ***objProvider***.

 

Together, these static (shared) items embody a Singleton Pattern that ensures a single instance of the DAL class for use by the Business Logic Layer.

 

One of the interesting methods is the ***CreateProvider*** method. It works by calling the CreateObject method of the Reflection class in the DotNetNuke.Framework namespace. ([**view code**](mp6))

 



[mp6]   
### DataProvider.CreateProvider
 
Private Shared Sub CreateProvider()

<!--CRLF-->

                objProvider = CType(Framework.Reflection.CreateObject("data", "YourCompany.Modules.Journal", ""), DataProvider)

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp6]  

Essentially, the CreateObject method checks the configuration file (web.config) for the name of the concrete class to use as the DataProvider instance. By default, the <data> element of the <dotnetnuke> section of the configuration file defines a default class name to look for: ***SqlDataProvider***. The CreateObject method combines this name with the supplied namespace ("YourCompany.Modules.Journal") to get the specific concrete object to create for your module's data provider ("YourCompany.Modules.Journal.SqlDataProvider"). Here is the relevant portion of the web.config that names the provider. ([**view code**](mp7))

 



[mp7]   
### SqlDataProvider in Web.Config
 
&lt;data defaultProvider="SqlDataProvider"&gt;

<!--CRLF-->

                &lt;providers&gt;

<!--CRLF-->

                    &lt;clear/&gt;

<!--CRLF-->

                    &lt;add name="SqlDataProvider" type="DotNetNuke.Data.SqlDataProvider, DotNetNuke.SqlDataProvider" 

<!--CRLF-->

                         connectionStringName="SiteSqlServer" upgradeConnectionString="" 

<!--CRLF-->

                         providerPath="~\Providers\DataProviders\SqlDataProvider\" 

<!--CRLF-->

                         objectQualifier="" databaseOwner="dbo"/&gt;

<!--CRLF-->

                &lt;/providers&gt;

<!--CRLF-->

            &lt;/data&gt;

<!--CRLF-->
 



[/mp7]  

The following link is to the complete code for the module's DataProvider class. ([**view code**](mp8))

 



[mp8]   
### DataProvider Class
 
Imports System

<!--CRLF-->

    Imports DotNetNuke

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        Public MustInherit Class DataProvider

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Shared/Static Methods"

<!--CRLF-->

            ' singleton reference to the instantiated object 

<!--CRLF-->

            Private Shared objProvider As DataProvider = Nothing

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ' constructor

<!--CRLF-->

            Shared Sub New()

<!--CRLF-->

                CreateProvider()

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ' dynamically create provider

<!--CRLF-->

            Private Shared Sub CreateProvider()

<!--CRLF-->

                objProvider = CType(Framework.Reflection.CreateObject("data", "YourCompany.Modules.Journal", ""), DataProvider)

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ' return the provider

<!--CRLF-->

            Public Shared Shadows Function Instance() As DataProvider

<!--CRLF-->

                Return objProvider

<!--CRLF-->

            End Function

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Abstract methods"

<!--CRLF-->

            Public MustOverride Function GetJournals(ByVal ModuleId As Integer) As IDataReader

<!--CRLF-->

            Public MustOverride Function GetJournal(ByVal ModuleId As Integer,ByVal ItemId As Integer) As IDataReader

<!--CRLF-->

            Public MustOverride Sub AddJournal(ByVal ModuleId As Integer, ByVal Content As String, ByVal UserId As Integer)

<!--CRLF-->

            Public MustOverride Sub UpdateJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer, _

<!--CRLF-->

                                                  ByVal Content As String, ByVal UserId As Integer)

<!--CRLF-->

            Public MustOverride Sub DeleteJournal(ByVal ModuleId As Integer,ByVal ItemId As Integer)

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



[/mp8]  
## SqlDataProvider.vb
 

The SqlDataProvider class is a "concrete" class that inherits from the DataProvider class. By "concrete" I mean that this class is the one that does the actual work of the generic DataProvider class. All of the abstract methods of DataProvider are overridden with specific code that will execute when those methods are called.

 

Besides having code for the abstract methods of its base class, the SqlDataProvider has a number of other fields, properties and methods which provide background support to these overridden methods. The following class diagram shows the complete design of the SqlDataProvider class for the Journal module.

 

[![SqlDataProvider Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image9_thumb.png "SqlDataProvider Class Diagram")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image9.png)

 

Part of the key to understanding the purpose of these behind-the-scenes fields and properties is to look at the database script and review how one of the stored procedures was written. ([**view code**](mp9))

 



[mp9]   
### AddJournal Stored Procedure
 
create procedure {databaseOwner}{objectQualifier}YourCompany_AddJournal

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

        @Content        ntext,

<!--CRLF-->

        @UserID         int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    insert into {objectQualifier}YourCompany_Journal (

<!--CRLF-->

        ModuleId,

<!--CRLF-->

        Content,

<!--CRLF-->

        CreatedByUser,

<!--CRLF-->

        CreatedDate

<!--CRLF-->

    ) 

<!--CRLF-->

    values (

<!--CRLF-->

        @ModuleId,

<!--CRLF-->

        @Content,

<!--CRLF-->

        @UserID,

<!--CRLF-->

        getdate()

<!--CRLF-->

    )

<!--CRLF-->
 



[/mp9]  

Note that all the object names begin with "YourCompany\_". This name is supplied as a constant in the SqlDataProvider class, so as to make managing the name easier.

 
Private Const ModuleQualifier As String = "YourCompany_"

<!--CRLF-->
 

Another item to note from the database script are the placeholders {databaseOwner} and {objectQualifier}. These parts get supplied by the DotNetNuke framework when the scripts are run to create the database objects. Once created on the database, the stored procedure might look like this. ([**view code**](mp10))

 



[mp10]   
### AddJournal Stored Procedure – After Processing
 
create procedure dbo.HOT4DNN_YourCompany_AddJournal

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

        @Content        ntext,

<!--CRLF-->

        @UserID         int

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    insert into HOT4DNN_YourCompany_Journal (

<!--CRLF-->

        ModuleId,

<!--CRLF-->

        Content,

<!--CRLF-->

        CreatedByUser,

<!--CRLF-->

        CreatedDate

<!--CRLF-->

    ) 

<!--CRLF-->

    values (

<!--CRLF-->

        @ModuleId,

<!--CRLF-->

        @Content,

<!--CRLF-->

        @UserID,

<!--CRLF-->

        getdate()

<!--CRLF-->

    )

<!--CRLF-->
 



[/mp10]  

Since DotNetNuke knew to use "dbo." for the database owner and "HOT4DNN\_" as the object qualifier, they have become a physical part of the names for the stored procedures and databases of the module. In order to call these stored procedures from the DAL, the SqlDataProvider needs to know their names. That's why there are two properties in the class which are named DatabaseOwner and ObjectQualifier.

 

To see how these properties are used, consider the following code from SqlDataProvider which calls the AddJournal stored procedure. ([**view code**](mp11)) Note that the basic name of the stored procedure ("AddJournal") is passed into a method called GetFullyQualifiedName. This method is part of the SqlDataProvider class. It puts the DatabaseOwner, ObjectQualifier and ModuleQualifier strings in front of the stored procedure's name. ([**view code**](mp12)) Thus, the final stored procedure name is used when calling the database: **"dbo.HOT4DNN\_YourCompany\_AddJournal"**

 



[mp11]   
### SqlDataProvider.AddJournal
 
Public Overrides Sub AddJournal(ByVal ModuleId As Integer, _

<!--CRLF-->

                                            ByVal Content As String, _

<!--CRLF-->

                                            ByVal UserId As Integer)

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString,

<!--CRLF-->

                                          GetFullyQualifiedName("AddJournal"),

<!--CRLF-->

                                          ModuleId, Content, UserId)

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp11]  



[mp12]   
### SqlDataProvider.GetFullyQualifiedName
 
Private Function GetFullyQualifiedName(ByVal name As String) As String

<!--CRLF-->

                Return DatabaseOwner &amp; ObjectQualifier &amp; ModuleQualifier &amp; name

<!--CRLF-->

            End Function

<!--CRLF-->
 



[/mp12]  

The values for the DatabaseOwner and ObjectQualifier properties of SqlDataProvider are set in that class' constructor ([**view code**](mp13)). It pulls the information from the web.config file and establishes a pattern that is expected for object qualifier and database owner text.

 

If present, the objectQualifier should end with an underscore (\_). The underscore is merely a matter of "convention" or common practice among DNN modules – its presence helps to separate the objectQualifier from the other part of the database object names to make it more "human readable". The objectQualifier acts as a "prefix" to the database object, but that is only in terms of human readability; the objectQualifier actually becomes a part of the object name ("YourCompany\_AddJournal", for example, is a stored procedure name).

 

In a similar vein, if the databaseOwner is present, then it should end with a period (.). The period is not mere convention, however. It is required as part of the syntax of SQL, because it formally separates the "schema"  name (databaseOwner) from the database object name (which might be a table, stored precedure, etc).

 



[mp13]   
### Part of SqlDataProvider Constructor
 
_objectQualifier = objProvider.Attributes("objectQualifier")

<!--CRLF-->

                If _objectQualifier &lt;&gt; "" And _objectQualifier.EndsWith("_") = False Then

<!--CRLF-->

                    _objectQualifier += "_"

<!--CRLF-->

                End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                _databaseOwner = objProvider.Attributes("databaseOwner")

<!--CRLF-->

                If _databaseOwner &lt;&gt; "" And _databaseOwner.EndsWith(".") = False Then

<!--CRLF-->

                    _databaseOwner += "."

<!--CRLF-->

                End If

<!--CRLF-->
 



[/mp13]  

This information is pulled from the DotNetNuke framework (which, in turn, was retrieved from the web.config file) and stored in the SqlDataProvider object. You can examine the web.config file to see this information in the <data> element under the <dotnetnuke> section. ([**view code**](mp14)) Based on the default settings for an auto-installed DNN portal, the full stored procedure name for AddJournal would be as follows.

 

"dbo.YourCompany\_AddJournal"

 



[mp14]   
### <data> in Web.Config
 
&lt;data defaultProvider="SqlDataProvider"&gt;

<!--CRLF-->

                &lt;providers&gt;

<!--CRLF-->

                    &lt;clear/&gt;

<!--CRLF-->

                    &lt;add name="SqlDataProvider" type="DotNetNuke.Data.SqlDataProvider, DotNetNuke.SqlDataProvider" 

<!--CRLF-->

                         connectionStringName="SiteSqlServer" upgradeConnectionString="" 

<!--CRLF-->

                         providerPath="~\Providers\DataProviders\SqlDataProvider\" 

<!--CRLF-->

                         objectQualifier="" databaseOwner="dbo"/&gt;

<!--CRLF-->

                &lt;/providers&gt;

<!--CRLF-->

            &lt;/data&gt;

<!--CRLF-->
 



[/mp14]  
### SqlHelper
 

The template's code also leverages Microsoft's Data Access Application Blocks (DAAB) for performing SQL Server-specific actions. The DAAB was introduced into DotNetNuke since its earliest inception because the DAAB provided clean and easy to use code for working with MS SQL Server. Central to DotNetNuke's usage of the DAAB, the SqlHelper class has a number of methods for executing stored procedures on the database (two of which are used in this sample module). Let's examine the first of these, ExecuteNonQuery, in the context of the AddJournal method of SqlDataProvider. ([**view code**](mp15))

 



[mp15]   
### SqlDataProvider.AddJournal
 
Public Overrides Sub AddJournal(ByVal ModuleId As Integer, ByVal Content As String, ByVal UserId As Integer)

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                                          GetFullyQualifiedName("AddJournal"), _

<!--CRLF-->

                                          ModuleId, Content, UserId)

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp15]  

The ExecuteNonQuery method runs the stored procedure and returns the number of rows that were affected by the command (though, in the case of this sample, the return value is simply ignored). The version that is called has three parameters. The first is a string that represents the connection string. A connection string is basically the key information for connecting to the database. It identifies the server name and location, the logon credentials, etc. You can find these details in the web.config under the default connection string name of "SiteSqlServer". ([**view code**](mp16))

 



[mp16]   
### <connectionStrings> in Web.Config
 
&lt;add name="SiteSqlServer"

<!--CRLF-->

    connectionString="Data Source=.\SQLExpress;Integrated Security=True;User Instance=True;AttachDBFilename=|DataDirectory|Database.mdf;" 

<!--CRLF-->

    providerName="System.Data.SqlClient"/&gt;

<!--CRLF-->
 



[/mp16]  

The second parameter of ExecuteNonQuery is the name of the stored procedure (which we've already looked at in detail). The last parameter is actually defined as a ParamArray, meaning that it can be called with zero or more values of mixed types. These values must match up with the expected items in the stored procedure's parameters (order and data type will matter). Thus, since the stored procedure expects the ModuleId (an **int**), the Content (a **ntext**) and the UserId (another **int**), the call to SqlHelper provides these items in the same order, immediately after the stored procedure's name.

 

The Update and Delete methods of SqlDataProvider also call ExecuteNonQuery, and you can see the patterns repeating themselves. ([**view code**](mp17))

 



[mp17]   
### SqlDataProvider.UpdateJournal and SqlDataProvider.DeleteJournal
 
Public Overrides Sub UpdateJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer, ByVal Content As String, ByVal UserId As Integer)

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                                          GetFullyQualifiedName("UpdateJournal"), _

<!--CRLF-->

                                          ModuleId, ItemId, Content, UserId)

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Sub DeleteJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer) 

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                                          GetFullyQualifiedName("DeleteJournal"), _

<!--CRLF-->

                                          ModuleId, ItemId)

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp17]  

The other SqlHelper method that comes into play happens with the Read actions of the SqlDataProvider class: GetJournals and GetJournal. That method's name is ExecuteReader. It takes the exact same types of parameters as the ExecuteNonQuery, but it returns an SqlDataReader object. Here are the two methods, GetJournals and GetJournal, making use of this DAAB method. ([**view code**](mp18))

 



[mp18]   
### SqlDataProvider.GetJournals and SqlDataProvider.GetJournal
 
Public Overrides Function GetJournals(ByVal ModuleId As Integer) As IDataReader

<!--CRLF-->

                Return CType(SqlHelper.ExecuteReader(ConnectionString, _

<!--CRLF-->

                                                     GetFullyQualifiedName("GetJournals"), _

<!--CRLF-->

                                                     ModuleId), _

<!--CRLF-->

                             IDataReader)

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Function GetJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer) As IDataReader

<!--CRLF-->

                Return CType(SqlHelper.ExecuteReader(ConnectionString, _

<!--CRLF-->

                                                     GetFullyQualifiedName("GetJournal"), _

<!--CRLF-->

                                                     ModuleId, ItemId), _

<!--CRLF-->

                             IDataReader)

<!--CRLF-->

            End Function

<!--CRLF-->
 



[/mp18]  

One thing to note is that the SqlDataReader that is returned from ExecuteReader is cast (through the CType function) to an IDataReader data type. The SqlDataReader implements the IDataReader interface, so the cast is completely valid. IDataReader is an interface supported by all databases accessible through the .NET framework. The base class defined the GetJournals and GetJournal methods to return this generic interface, so the conversion in our concrete SqlDataReader class is meant to comply with that pattern. Again, this is a code-reuse and maintainability characteristic that makes the DAL much easier to use from the Business Logic Layer (BLL).

 

That pretty much summarizes the SqlDataProvider class. Here is the complete code for that class. ([**view code**](mp19))

 



[mp19]   
### SqlDataProvider Class
 
Imports System

<!--CRLF-->

    Imports System.Data

<!--CRLF-->

    Imports System.Data.SqlClient

<!--CRLF-->

    Imports Microsoft.ApplicationBlocks.Data

<!--CRLF-->

    Imports DotNetNuke.Common.Utilities

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

        Public Class SqlDataProvider

<!--CRLF-->

            Inherits DataProvider

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Private Members"

<!--CRLF-->

            Private Const ProviderType As String = "data"

<!--CRLF-->

            Private Const ModuleQualifier As String = "YourCompany_"

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Private _providerConfiguration As Framework.Providers.ProviderConfiguration = _

<!--CRLF-->

                    Framework.Providers.ProviderConfiguration.GetProviderConfiguration(ProviderType)

<!--CRLF-->

            Private _connectionString As String

<!--CRLF-->

            Private _providerPath As String

<!--CRLF-->

            Private _objectQualifier As String

<!--CRLF-->

            Private _databaseOwner As String

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Constructors"

<!--CRLF-->

            Public Sub New()

<!--CRLF-->

                ' Read the configuration specific information for this provider

<!--CRLF-->

                Dim objProvider As Framework.Providers.Provider = _

<!--CRLF-->

                    CType(_providerConfiguration.Providers(_providerConfiguration.DefaultProvider), _

<!--CRLF-->

                          Framework.Providers.Provider)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                ' Read the attributes for this provider

<!--CRLF-->

                'Get Connection string from web.config

<!--CRLF-->

                _connectionString = Config.GetConnectionString()

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                If _connectionString = "" Then

<!--CRLF-->

                    ' Use connection string specified in provider

<!--CRLF-->

                    _connectionString = objProvider.Attributes("connectionString")

<!--CRLF-->

                End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                _providerPath = objProvider.Attributes("providerPath")

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                _objectQualifier = objProvider.Attributes("objectQualifier")

<!--CRLF-->

                If _objectQualifier &lt;&gt; "" And _objectQualifier.EndsWith("_") = False Then

<!--CRLF-->

                    _objectQualifier += "_"

<!--CRLF-->

                End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                _databaseOwner = objProvider.Attributes("databaseOwner")

<!--CRLF-->

                If _databaseOwner &lt;&gt; "" And _databaseOwner.EndsWith(".") = False Then

<!--CRLF-->

                    _databaseOwner += "."

<!--CRLF-->

                End If

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Properties"

<!--CRLF-->

            Public ReadOnly Property ConnectionString() As String

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _connectionString

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public ReadOnly Property ProviderPath() As String

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _providerPath

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public ReadOnly Property ObjectQualifier() As String

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _objectQualifier

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public ReadOnly Property DatabaseOwner() As String

<!--CRLF-->

                Get

<!--CRLF-->

                    Return _databaseOwner

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Private Methods"

<!--CRLF-->

            Private Function GetFullyQualifiedName(ByVal name As String) As String

<!--CRLF-->

                Return DatabaseOwner &amp; ObjectQualifier &amp; ModuleQualifier &amp; name

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Private Function GetNull(ByVal Field As Object) As Object

<!--CRLF-->

                Return DotNetNuke.Common.Utilities.Null.GetNull(Field, DBNull.Value)

<!--CRLF-->

            End Function

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Public Methods"

<!--CRLF-->

            Public Overrides Function GetJournals(ByVal ModuleId As Integer) As IDataReader

<!--CRLF-->

                Return CType(SqlHelper.ExecuteReader(ConnectionString, _

<!--CRLF-->

                    GetFullyQualifiedName("GetJournals"), ModuleId), IDataReader)

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Function GetJournal(ByVal ModuleId As Integer, _

<!--CRLF-->

                                                 ByVal ItemId As Integer) As IDataReader

<!--CRLF-->

                Return CType(SqlHelper.ExecuteReader(ConnectionString, _

<!--CRLF-->

                    GetFullyQualifiedName("GetJournal"), ModuleId, ItemId), IDataReader)

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Sub AddJournal(ByVal ModuleId As Integer, _

<!--CRLF-->

                                            ByVal Content As String, _

<!--CRLF-->

                                            ByVal UserId As Integer)

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                    GetFullyQualifiedName("AddJournal"), ModuleId, Content, UserId)

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Sub UpdateJournal(ByVal ModuleId As Integer, _

<!--CRLF-->

                                               ByVal ItemId As Integer, _

<!--CRLF-->

                                               ByVal Content As String, _

<!--CRLF-->

                                               ByVal UserId As Integer)

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                    GetFullyQualifiedName("UpdateJournal"), ModuleId, ItemId, Content, UserId)

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Sub DeleteJournal(ByVal ModuleId As Integer, _

<!--CRLF-->

                                               ByVal ItemId As Integer) 

<!--CRLF-->

                SqlHelper.ExecuteNonQuery(ConnectionString, _

<!--CRLF-->

                    GetFullyQualifiedName("DeleteJournal"), ModuleId, ItemId)

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



[/mp19]  

From the code we've looked at so far, one thing should be pretty evident. The DotNetNuke Dynamic Module template has a high degree of code re-use, which is critically important when it comes to maintaining your module.

 

From the CBO and DAL, we can now move on to the Business Logic Layer.

 
# In Depth Part 4 – The Business Logic Layer
 

The Business Logic Layer (BLL) for the Dynamic Module Template is made up of a single class, often referred to as the module's Controller class. This class acts as a "gateway" for the User Interface (and DotNetNuke) to access your module's system.

 

As the name implies, the BLL is the place where the "business logic" of a module is placed. It is here that business rules are applied along with any other business or "workflow" type of processing. It is also a major point at which the DotNetNuke framework can hook into your module. In the Journal Module, there isn't any significant business processing for the module itself; just simple data-in, data-out CRUD actions. However, as a plug-in point for the DotNetNuke framework, there is a bit of processing that it can perform in response to calls from DotNetNuke.

 

As a Content Management System (CMS), the DotNetNuke framework has facilities to search content as well as import and export content as XML. These facilities are aspects that any module can support, thereby allowing DotNetNuke to interface with the unique characteristics of that module. To make this possible, the DotNetNuke API defines specific Interfaces which modules can implement. All a module has to do is implement these interfaces and tell DotNetNuke the name of the class that supports these interfaces. Telling DotNetNuke the name of the class is done when the module is "registered" (during the module's installation). We can see in the following screen shot of the website's Module Definitions for the Journal module the fully-qualified name of the controller class.

 

[![Extension Settings](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_44.png "Extension Settings")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_92.png)

 

The two interfaces that modules will often support are ISearchable and IPortable. DotNetNuke will check the module's controller class to see if they support those interfaces. If they do, then DotNetNuke will be able to make calls to your controller class to perform searches or import/export requests.

 

Here are the class diagrams that describe ISearchable and IPortable.

 

![ISearchable Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_101.png "ISearchable Class Diagram")

 

![IPortable Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_104.png "IPortable Class Diagram")

 

When a class implements an interface, it must supply the actual code for all of the methods and properties of the interface. The JournalController class implements these interfaces and provides the logic for searching and importing/exporting journal entries.

 

![JournalController Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_107.png "JournalController Class Diagram")

 

To support an interface, a class must do two things. First, it must declare that it intends to implement the interface. ([**view code**](mp20))

 



[mp20]   
### JournalController Class Declaration
 
Public Class JournalController

<!--CRLF-->

            Implements Entities.Modules.ISearchable

<!--CRLF-->

            Implements Entities.Modules.IPortable

<!--CRLF-->
 



[/mp20]  

Second, the class must supply the code for the interfaces' members. Here is the code which the JournalController supplies for the ISearchable interface. ([**view code**](mp21))

 



[mp21]   
### JournalController.GetSearchItems
 
Public Function GetSearchItems(ByVal ModInfo As Entities.Modules.ModuleInfo) _

<!--CRLF-->

                   As DotNetNuke.Services.Search.SearchItemInfoCollection _

<!--CRLF-->

                   Implements DotNetNuke.Entities.Modules.ISearchable.GetSearchItems

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Dim SearchItemCollection As New SearchItemInfoCollection

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Dim colJournals As List(Of JournalInfo) = GetJournals(ModInfo.ModuleID)

<!--CRLF-->

                Dim objJournal As JournalInfo

<!--CRLF-->

                For Each objJournal In colJournals

<!--CRLF-->

                    Dim SearchItem As SearchItemInfo = _

<!--CRLF-->

                                      New SearchItemInfo(ModInfo.ModuleTitle, _

<!--CRLF-->

                                                         objJournal.Content, _

<!--CRLF-->

                                                         objJournal.CreatedByUser, _

<!--CRLF-->

                                                         objJournal.CreatedDate, _

<!--CRLF-->

                                                         ModInfo.ModuleID, _

<!--CRLF-->

                                                         objJournal.ItemId.ToString, _

<!--CRLF-->

                                                         objJournal.Content, _

<!--CRLF-->

                                                         "ItemId=" &amp; _

<!--CRLF-->

                                                         objJournal.ItemId.ToString)

<!--CRLF-->

                    SearchItemCollection.Add(SearchItem)

<!--CRLF-->

                Next

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Return SearchItemCollection

<!--CRLF-->

            End Function

<!--CRLF-->
 



[/mp21]  

The GetSearchItems method calls the JournalController's GetJournals method to get all of the journal entries for the specific module instance. Then it loops through that list of entries, adding each one to the collection of search items. Lastly, it returns that search item collection to the DotNetNuke framework.

 

For the IPortable interface, the JournalController must implement the ExportModule and ImportModule methods. These methods will be called by the DotNetNuke framework when the user selects either Export or Import from the module's action menu.

 

![Journal Module Action Menu](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_95.png "Journal Module Action Menu")

 

ExportModule generates an XML file with the content for each journal entry. When DotNetNuke calls this method, it will return this XML data as a simple string, which DotNetNuke will then embed in an XML file that will be saved to a file on the website. ([**view code**](mp22))

 



[mp22]   
### JournalModule.ExportModule
 
Public Function ExportModule(ByVal ModuleID As Integer) As String _

<!--CRLF-->

                            Implements DotNetNuke.Entities.Modules.IPortable.ExportModule

<!--CRLF-->

                Dim strXML As String = ""

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Dim colJournals As List(Of JournalInfo) = GetJournals(ModuleID)

<!--CRLF-->

                If colJournals.Count &lt;&gt; 0 Then

<!--CRLF-->

                    strXML += "&lt;Journals&gt;"

<!--CRLF-->

                    Dim objJournal As JournalInfo

<!--CRLF-->

                    For Each objJournal In colJournals

<!--CRLF-->

                        strXML += "&lt;Journal&gt;"

<!--CRLF-->

                        strXML += "&lt;content&gt;" &amp; XMLEncode(objJournal.Content) &amp; "&lt;/content&gt;"

<!--CRLF-->

                        strXML += "&lt;/Journal&gt;"

<!--CRLF-->

                    Next

<!--CRLF-->

                    strXML += "&lt;/Journals&gt;"

<!--CRLF-->

                End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Return strXML

<!--CRLF-->

            End Function

<!--CRLF-->
 



 



[/mp22]  

The ImportModule works in much the same way, only reversing the process. DotNetNuke sends in the XML file as a string (the Content parameter) which the ImportModule method will walk through to find and extract the content for each journal entry. It will then add each entry as a new item in the database. ([**view code**](mp23))

 



[mp23]   
### JournalModule.ImportModule
 
Public Sub ImportModule(ByVal ModuleID As Integer, _

<!--CRLF-->

                                    ByVal Content As String, _

<!--CRLF-->

                                    ByVal Version As String, _

<!--CRLF-->

                                    ByVal UserId As Integer) _

<!--CRLF-->

                       Implements DotNetNuke.Entities.Modules.IPortable.ImportModule

<!--CRLF-->

                Dim xmlJournal As XmlNode

<!--CRLF-->

                Dim xmlJournals As XmlNode = GetContent(Content, "Journals")

<!--CRLF-->

                For Each xmlJournal In xmlJournals.SelectNodes("Journal")

<!--CRLF-->

                    Dim objJournal As New JournalInfo

<!--CRLF-->

                    objJournal.ModuleId = ModuleID

<!--CRLF-->

                    objJournal.Content = xmlJournal.SelectSingleNode("content").InnerText

<!--CRLF-->

                    objJournal.CreatedByUser = UserId

<!--CRLF-->

                    AddJournal(objJournal)

<!--CRLF-->

                Next

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp23]  

The remaining methods of the JournalController class perform the add, update, delete, and read actions, and they simply call the DAL to perform the actions. Here is the complete code for the JournalController. ([**view code**](mp24))

 



[mp24]   
### JournalController Class
 
Imports System

<!--CRLF-->

    Imports System.Configuration

<!--CRLF-->

    Imports System.Data

<!--CRLF-->

    Imports System.XML

<!--CRLF-->

    Imports System.Web

<!--CRLF-->

    Imports System.Collections.Generic

<!--CRLF-->

    Imports DotNetNuke

<!--CRLF-->

    Imports DotNetNuke.Services.Search

<!--CRLF-->

    Imports DotNetNuke.Common.Utilities.XmlUtils

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

        Public Class JournalController

<!--CRLF-->

            Implements Entities.Modules.ISearchable

<!--CRLF-->

            Implements Entities.Modules.IPortable

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Public Methods"

<!--CRLF-->

            Public Function GetJournals(ByVal ModuleId As Integer) As List(Of JournalInfo)

<!--CRLF-->

                Return CBO.FillCollection(Of JournalInfo)(DataProvider.Instance().GetJournals(ModuleId))

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Function GetJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer) As JournalInfo

<!--CRLF-->

                Return CType(CBO.FillObject(DataProvider.Instance().GetJournal(ModuleId,ItemId), GetType(JournalInfo)), JournalInfo)

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Sub AddJournal(ByVal objJournal As JournalInfo)

<!--CRLF-->

                If objJournal.Content.Trim &lt;&gt; "" Then

<!--CRLF-->

            DataProvider.Instance().AddJournal(objJournal.ModuleId, objJournal.Content, objJournal.CreatedByUser)

<!--CRLF-->

                End If

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Sub UpdateJournal(ByVal objJournal As JournalInfo)

<!--CRLF-->

                If objJournal.Content.Trim &lt;&gt; "" Then

<!--CRLF-->

                    DataProvider.Instance().UpdateJournal(objJournal.ModuleId, objJournal.ItemId, objJournal.Content, objJournal.CreatedByUser)

<!--CRLF-->

                End If

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Sub DeleteJournal(ByVal ModuleId As Integer, ByVal ItemId As Integer) 

<!--CRLF-->

                DataProvider.Instance().DeleteJournal(ModuleId, ItemId)

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Optional Interfaces"

<!--CRLF-->

            Public Function GetSearchItems(ByVal ModInfo As Entities.Modules.ModuleInfo) As DotNetNuke.Services.Search.SearchItemInfoCollection Implements DotNetNuke.Entities.Modules.ISearchable.GetSearchItems

<!--CRLF-->

                Dim SearchItemCollection As New SearchItemInfoCollection

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Dim colJournals As List(Of JournalInfo) = GetJournals(ModInfo.ModuleID)

<!--CRLF-->

                Dim objJournal As JournalInfo

<!--CRLF-->

                For Each objJournal In colJournals

<!--CRLF-->

                    Dim SearchItem As SearchItemInfo = New SearchItemInfo(ModInfo.ModuleTitle, objJournal.Content, objJournal.CreatedByUser, objJournal.CreatedDate, ModInfo.ModuleID, objJournal.ItemId.ToString, objJournal.Content, "ItemId=" &amp; objJournal.ItemId.ToString)

<!--CRLF-->

                    SearchItemCollection.Add(SearchItem)

<!--CRLF-->

                Next

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Return SearchItemCollection

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Function ExportModule(ByVal ModuleID As Integer) As String Implements DotNetNuke.Entities.Modules.IPortable.ExportModule

<!--CRLF-->

                Dim strXML As String = ""

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Dim colJournals As List(Of JournalInfo) = GetJournals(ModuleID)

<!--CRLF-->

                If colJournals.Count &lt;&gt; 0 Then

<!--CRLF-->

                    strXML += "&lt;Journals&gt;"

<!--CRLF-->

                    Dim objJournal As JournalInfo

<!--CRLF-->

                    For Each objJournal In colJournals

<!--CRLF-->

                        strXML += "&lt;Journal&gt;"

<!--CRLF-->

                        strXML += "&lt;content&gt;" &amp; XMLEncode(objJournal.Content) &amp; "&lt;/content&gt;"

<!--CRLF-->

                        strXML += "&lt;/Journal&gt;"

<!--CRLF-->

                    Next

<!--CRLF-->

                    strXML += "&lt;/Journals&gt;"

<!--CRLF-->

                End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Return strXML

<!--CRLF-->

            End Function

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Sub ImportModule(ByVal ModuleID As Integer, ByVal Content As String, ByVal Version As String, ByVal UserId As Integer) Implements DotNetNuke.Entities.Modules.IPortable.ImportModule

<!--CRLF-->

                Dim xmlJournal As XmlNode

<!--CRLF-->

                Dim xmlJournals As XmlNode = GetContent(Content, "Journals")

<!--CRLF-->

                For Each xmlJournal In xmlJournals.SelectNodes("Journal")

<!--CRLF-->

                    Dim objJournal As New JournalInfo

<!--CRLF-->

                    objJournal.ModuleId = ModuleID

<!--CRLF-->

                    objJournal.Content = xmlJournal.SelectSingleNode("content").InnerText

<!--CRLF-->

                    objJournal.CreatedByUser = UserId

<!--CRLF-->

                    AddJournal(objJournal)

<!--CRLF-->

                Next

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



 

[/mp24]


# In Depth Part 5 – The User Interface
 

In a DotNetNuke module, the user interface elements are written as User Controls (.ascx). If you are familiar with developing standard user controls in ASP.NET, you will find the techniques for developing user controls in DotNetNuke to be very similar.

 

While standard user controls in ASP.NET inherit from the System.Web.UI.UserControl class, DotNetNuke provides other classes as the user control's base class. In fact, DotNetNuke provides as its UI core three classes and two interfaces to support a module's user interface. All of the classes inherit from the standard UserControl class, but each of them bring additional functionality so that the module developer can have information about the DotNetNuke application readily available in their UI.

 

![DotNetNuke UI Base Classes](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_98.png "DotNetNuke UI Base Classes")

 

The Dynamic Module template has three user controls based on these DotNetNuke classes.

 
- **A View Control** – (Inherits from **PortalModuleBase**) This control simply renders the module's content on the page.  - **An Edit Control**– (Inherits from **PortalModuleBase**) This control provides a user with the ability to edit the content of the module.  - **A Settings Control**– (Inherits from **ModuleSettingsBase**) This control combines with the module settings to provide the user with a way to manage settings that are specific to the developer's module.

 

These three controls are a standard fare for most DotNetNuke modules, but your own module can have as few as one control (which would be the View) to as many as are needed for your module's functionality. What they will all have in common is the tendency to be based on the PortalModuleBase (or ModuleSettingsBase, for the Settings control).

 
## View Control
 

The view control for the Journal module is named ViewJournal.ascx. It consists of a DataList control whose item template generates a single table for each journal entry. A HyperLink control is used to provide a link to the Edit control for each journal entry, and a simple label acts as the container for the journal entry's content. ([**view code**](mp25))

 



[mp25]   
### ViewJournal.ascx
 
&lt;%@ Control language="vb" Inherits="YourCompany.Modules.Journal.ViewJournal" CodeFile="ViewJournal.ascx.vb" AutoEventWireup="false" Explicit="True" %&gt;

<!--CRLF-->

    &lt;%@ Register TagPrefix="dnn" TagName="Audit" Src="~/controls/ModuleAuditControl.ascx" %&gt;

<!--CRLF-->

    &lt;asp:datalist id="lstContent" datakeyfield="ItemID" runat="server" cellpadding="4"&gt;

<!--CRLF-->

      &lt;itemtemplate&gt;

<!--CRLF-->

        &lt;table cellpadding="4" width="100%"&gt;

<!--CRLF-->

          &lt;tr&gt;

<!--CRLF-->

            &lt;td valign="top" width="100%" align="left"&gt;

<!--CRLF-->

              &lt;asp:HyperLink ID="HyperLink1" NavigateUrl='&lt;%# EditURL("ItemID",DataBinder.Eval(Container.DataItem,"ItemID")) %&gt;' Visible="&lt;%# IsEditable %&gt;" runat="server"&gt;&lt;asp:Image ID="Image1" Runat=server ImageUrl="~/images/edit.gif" AlternateText="Edit" Visible="&lt;%#IsEditable%&gt;" resourcekey="Edit"/&gt;&lt;/asp:hyperlink&gt;

<!--CRLF-->

              &lt;asp:Label ID="lblContent" runat="server" CssClass="Normal"/&gt;

<!--CRLF-->

            &lt;/td&gt;

<!--CRLF-->

          &lt;/tr&gt;

<!--CRLF-->

        &lt;/table&gt;

<!--CRLF-->

      &lt;/itemtemplate&gt;

<!--CRLF-->

    &lt;/asp:datalist&gt;

<!--CRLF-->
 



[/mp25]  

The DataList control is populated through the Page\_Load event handler in the form's code-behind. This method gets the module's template setting (for formatting the journal entry's content) and then accesses the JournalControl to get a list of JournalInfo objects. Lastly, this list is bound to the DataList control. ([**view code**](mp26))

 



[mp26]   
### ViewJournal.Page\_Load
 
Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

<!--CRLF-->

                Try

<!--CRLF-->

                    If Not Page.IsPostBack Then

<!--CRLF-->

                        If CType(Settings("template"), String) &lt;&gt; "" Then

<!--CRLF-->

                            strTemplate = CType(Settings("template"), String)

<!--CRLF-->

                        Else

<!--CRLF-->

                            strTemplate = Localization.GetString("Template.Text", LocalResourceFile)

<!--CRLF-->

                        End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        Dim objJournals As New JournalController

<!--CRLF-->

                        Dim colJournals As List(Of JournalInfo)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' get the content from the Journal table

<!--CRLF-->

                        colJournals = objJournals.GetJournals(ModuleId)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        If colJournals.Count = 0 Then

<!--CRLF-->

                            If Localization.GetString("DefaultContent", LocalResourceFile) &lt;&gt; "" Then

<!--CRLF-->

                                ' add the content to the Journal table

<!--CRLF-->

                                Dim objJournal As JournalInfo = New JournalInfo

<!--CRLF-->

                                objJournal.ModuleId = ModuleId

<!--CRLF-->

                                objJournal.Content = Localization.GetString("DefaultContent", LocalResourceFile)

<!--CRLF-->

                                objJournal.CreatedByUser = Me.UserId

<!--CRLF-->

                                objJournals.AddJournal(objJournal)

<!--CRLF-->

                                ' get the content from the Journal table

<!--CRLF-->

                                colJournals = objJournals.GetJournals(ModuleId)

<!--CRLF-->

                            End If

<!--CRLF-->

                        End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' bind the content to the repeater

<!--CRLF-->

                        lstContent.DataSource = colJournals

<!--CRLF-->

                        lstContent.DataBind()

<!--CRLF-->

                    End If

<!--CRLF-->

                Catch exc As Exception        'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp26]  

You might notice the presence of objects named ModuleId, UserId, Settings and Localization. These are a few of the DotNetNuke specific properties that are available through the PortalModuleBase. Of particular note are the calls to the Localization's GetString method. The Localization object allows your module to be customized for different languages. All of this information is stored in a resource control (.resx) under the App\_LocalResources folder of your module.

 

![App_LocalResources Folder](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_119.png "App_LocalResources Folder")

 

When you open the ViewJournal.ascx.resx file, you will see default values for the "Template.Text" and "DefaultContent" strings.

 

[![ViewJournal.ascx.resx](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_54.png "ViewJournal.ascx.resx")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_121.png)

 

The "DefaultContent" value is what gets added to the journal if there is no other content entered by the user. The "Template.Text" value defines a template with a single placeholder – **[CONTENT]** – which is applied for formatting each JournalInfo object. This formatting takes place during the call to the DataBind method of the DataList.

 

Once the DataBind method is called for the DataList, another method in the code-behind handles the DataList.ItemDataBound event for each JournalInfo object in the list. This method injects the data from each JounalInfo object into its appropriate place in the template string. Then it takes the resulting string and places it in the Label control inside the DataList's item template. ([**view code**](mp27))

 



[mp27]   
### ViewJournal.lstContent\_ItemDataBound
 
Protected Sub lstContent_ItemDataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.DataListItemEventArgs) Handles lstContent.ItemDataBound

<!--CRLF-->

                Dim strContent As String = strTemplate

<!--CRLF-->

                Dim strValue As String

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                ' add content to template

<!--CRLF-->

                Dim objProperties As ArrayList = Common.Utilities.CBO.GetPropertyInfo(GetType(JournalInfo))

<!--CRLF-->

                Dim intProperty As Integer

<!--CRLF-->

                Dim objPropertyInfo As PropertyInfo

<!--CRLF-->

                For intProperty = 0 To objProperties.Count - 1

<!--CRLF-->

                    objPropertyInfo = CType(objProperties(intProperty), PropertyInfo)

<!--CRLF-->

                    If strContent.IndexOf("[" &amp; objPropertyInfo.Name.ToUpper &amp; "]") &lt;&gt; -1 Then

<!--CRLF-->

                        strValue = Server.HtmlDecode(DataBinder.Eval(e.Item.DataItem, objPropertyInfo.Name).ToString())

<!--CRLF-->

                        strContent = strContent.Replace("[" &amp; objPropertyInfo.Name.ToUpper &amp; "]", strValue)

<!--CRLF-->

                    End If

<!--CRLF-->

                Next intProperty

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                ' assign the content

<!--CRLF-->

                Dim lblContent As Label = CType(e.Item.FindControl("lblContent"), Label)

<!--CRLF-->

                lblContent.Text = strContent

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp27]  

There is only one other item in the ViewJournal class: the ModuleActions property. This property is present because the ViewJournal class implements the DotNetNuke.Entities.Modules.IActionable interface. This interface is used to allow DotNetNuke to obtain any navigational items to other user controls in the module, such as the Edit control. Links to these controls are placed in the module's action menu. Or, as noted in the comments above the method, it "Registers the module actions required for interfacing with the portal framework". ([**view code**](mp28))

 

![Journal Module Action Menu](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_124.png "Journal Module Action Menu")

 



 



[mp28]   
### ViewJournal.ModuleActions
 
Public ReadOnly Property ModuleActions() _

<!--CRLF-->

                                  As Entities.Modules.Actions.ModuleActionCollection _

<!--CRLF-->

                                  Implements Entities.Modules.IActionable.ModuleActions

<!--CRLF-->

                Get

<!--CRLF-->

                    Dim Actions As New Entities.Modules.Actions.ModuleActionCollection

<!--CRLF-->

                    Actions.Add(GetNextActionID, _

<!--CRLF-->

                                Localization.GetString( _

<!--CRLF-->

                                      Entities.Modules.Actions.ModuleActionType.AddContent, _

<!--CRLF-->

                                      LocalResourceFile), _

<!--CRLF-->

                                Entities.Modules.Actions.ModuleActionType.AddContent, _

<!--CRLF-->

                                "", _

<!--CRLF-->

                                "", _

<!--CRLF-->

                                EditUrl(),_

<!--CRLF-->

                                False, _

<!--CRLF-->

                                Security.SecurityAccessLevel.Edit, _

<!--CRLF-->

                                True, _

<!--CRLF-->

                                False)

<!--CRLF-->

                    Return Actions

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->
 



[/mp28]  

Here is the complete code-behind file for the ViewJournal.ascx control. ([**view code**](mp29))

 



[mp29]   
### ViewJournal Class
 
&nbsp;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Imports DotNetNuke

<!--CRLF-->

    Imports System.Web.UI

<!--CRLF-->

    Imports System.Collections.Generic

<!--CRLF-->

    Imports System.Reflection

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

        Partial Class ViewJournal

<!--CRLF-->

            Inherits Entities.Modules.PortalModuleBase

<!--CRLF-->

            Implements Entities.Modules.IActionable

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Private Members"

<!--CRLF-->

            Private strTemplate As String

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Event Handlers"

<!--CRLF-->

            Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

<!--CRLF-->

                Try

<!--CRLF-->

                    If Not Page.IsPostBack Then

<!--CRLF-->

                        If CType(Settings("template"), String) &lt;&gt; "" Then

<!--CRLF-->

                            strTemplate = CType(Settings("template"), String)

<!--CRLF-->

                        Else

<!--CRLF-->

                            strTemplate = Localization.GetString("Template.Text", LocalResourceFile)

<!--CRLF-->

                        End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        Dim objJournals As New JournalController

<!--CRLF-->

                        Dim colJournals As List(Of JournalInfo)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' get the content from the Journal table

<!--CRLF-->

                        colJournals = objJournals.GetJournals(ModuleId)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        If colJournals.Count = 0 Then

<!--CRLF-->

                            If Localization.GetString("DefaultContent", LocalResourceFile) &lt;&gt; "" Then

<!--CRLF-->

                                ' add the content to the Journal table

<!--CRLF-->

                                Dim objJournal As JournalInfo = New JournalInfo

<!--CRLF-->

                                objJournal.ModuleId = ModuleId

<!--CRLF-->

                                objJournal.Content = Localization.GetString("DefaultContent", LocalResourceFile)

<!--CRLF-->

                                objJournal.CreatedByUser = Me.UserId

<!--CRLF-->

                                objJournals.AddJournal(objJournal)

<!--CRLF-->

                                ' get the content from the Journal table

<!--CRLF-->

                                colJournals = objJournals.GetJournals(ModuleId)

<!--CRLF-->

                            End If

<!--CRLF-->

                        End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' bind the content to the repeater

<!--CRLF-->

                        lstContent.DataSource = colJournals

<!--CRLF-->

                        lstContent.DataBind()

<!--CRLF-->

                    End If

<!--CRLF-->

                Catch exc As Exception        'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Protected Sub lstContent_ItemDataBound(ByVal sender As Object, _

<!--CRLF-->

                                                   ByVal e As System.Web.UI.WebControls.DataListItemEventArgs) _

<!--CRLF-->

                                                   Handles lstContent.ItemDataBound

<!--CRLF-->

                Dim strContent As String = strTemplate

<!--CRLF-->

                Dim strValue As String

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                ' add content to template

<!--CRLF-->

                Dim objProperties As ArrayList = Common.Utilities.CBO.GetPropertyInfo(GetType(JournalInfo))

<!--CRLF-->

                Dim intProperty As Integer

<!--CRLF-->

                Dim objPropertyInfo As PropertyInfo

<!--CRLF-->

                For intProperty = 0 To objProperties.Count - 1

<!--CRLF-->

                    objPropertyInfo = CType(objProperties(intProperty), PropertyInfo)

<!--CRLF-->

                    If strContent.IndexOf("[" &amp; objPropertyInfo.Name.ToUpper &amp; "]") &lt;&gt; -1 Then

<!--CRLF-->

                        strValue = Server.HtmlDecode(DataBinder.Eval(e.Item.DataItem, objPropertyInfo.Name).ToString())

<!--CRLF-->

                        strContent = strContent.Replace("[" &amp; objPropertyInfo.Name.ToUpper &amp; "]", strValue)

<!--CRLF-->

                    End If

<!--CRLF-->

                Next intProperty

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                ' assign the content

<!--CRLF-->

                Dim lblContent As Label = CType(e.Item.FindControl("lblContent"), Label)

<!--CRLF-->

                lblContent.Text = strContent

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Optional Interfaces"

<!--CRLF-->

            Public ReadOnly Property ModuleActions() As Entities.Modules.Actions.ModuleActionCollection _

<!--CRLF-->

                                     Implements Entities.Modules.IActionable.ModuleActions

<!--CRLF-->

                Get

<!--CRLF-->

                    Dim Actions As New Entities.Modules.Actions.ModuleActionCollection

<!--CRLF-->

                    Actions.Add(GetNextActionID, _

<!--CRLF-->

                                Localization.GetString(Entities.Modules.Actions.ModuleActionType.AddContent, _

<!--CRLF-->

                                                       LocalResourceFile), _

<!--CRLF-->

                                Entities.Modules.Actions.ModuleActionType.AddContent, _

<!--CRLF-->

                                "", _

<!--CRLF-->

                                "", _

<!--CRLF-->

                                EditUrl(), _

<!--CRLF-->

                                False, _

<!--CRLF-->

                                Security.SecurityAccessLevel.Edit, _

<!--CRLF-->

                                True, _

<!--CRLF-->

                                False)

<!--CRLF-->

                    Return Actions

<!--CRLF-->

                End Get

<!--CRLF-->

            End Property

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



[/mp29]  
## Edit Control
 

The Edit control for the Journal module is very similar to the View control. It also inherits from PortalModuleBase, but it does not implement IActionable. This control is used for both adding new Journal entries and for updating existing journal entries.

 

[![Edit Journal Page](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_56.png "Edit Journal Page")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_126.png)

 

In the markup for the EditJournal.ascx control, there are a few references to user controls in the DotNetNuke framework. Specifically, there are the DotNetNuke LabelControl, TextEditor and ModuleAuditControl. ([**view code**](mp30))

 



[mp30]   
### EditJournal.ascx
 
&nbsp;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    &lt;%@ Control language="vb" Inherits="YourCompany.Modules.Journal.EditJournal" 

<!--CRLF-->

        CodeFile="EditJournal.ascx.vb" AutoEventWireup="false" Explicit="True" %&gt;

<!--CRLF-->

    &lt;%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %&gt;

<!--CRLF-->

    &lt;%@ Register TagPrefix="dnn" TagName="TextEditor" Src="~/controls/TextEditor.ascx"%&gt;

<!--CRLF-->

    &lt;%@ Register TagPrefix="dnn" TagName="Audit" Src="~/controls/ModuleAuditControl.ascx" %&gt;

<!--CRLF-->

    &lt;table width="650" cellspacing="0" cellpadding="0" border="0" summary="Edit Table"&gt;

<!--CRLF-->

        &lt;tr valign="top"&gt;

<!--CRLF-->

            &lt;td class="SubHead" width="125"&gt;&lt;dnn:label id="lblContent" runat="server" controlname="lblContent" suffix=":"&gt;&lt;/dnn:label&gt;&lt;/td&gt;

<!--CRLF-->

            &lt;td&gt;

<!--CRLF-->

                &lt;dnn:texteditor id="txtContent" runat="server" height="200" width="500" /&gt;

<!--CRLF-->

                &lt;asp:RequiredFieldValidator ID="valContent" resourcekey="valContent.ErrorMessage" ControlToValidate="txtContent"

<!--CRLF-->

                    CssClass="NormalRed" Display="Dynamic" ErrorMessage="&amp;amp;lt;br&gt;Content is required" Runat="server" /&gt;

<!--CRLF-->

            &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &lt;/table&gt;

<!--CRLF-->

    &lt;p&gt;

<!--CRLF-->

        &lt;asp:linkbutton cssclass="CommandButton" id="cmdUpdate" resourcekey="cmdUpdate" 

<!--CRLF-->

             runat="server" borderstyle="none" text="Update"&gt;&lt;/asp:linkbutton&gt;

<!--CRLF-->

        &lt;asp:linkbutton cssclass="CommandButton" id="cmdCancel" resourcekey="cmdCancel" 

<!--CRLF-->

             runat="server" borderstyle="none" text="Cancel" causesvalidation="False"&gt;&lt;/asp:linkbutton&gt;

<!--CRLF-->

        &lt;asp:linkbutton cssclass="CommandButton" id="cmdDelete" resourcekey="cmdDelete" 

<!--CRLF-->

             runat="server" borderstyle="none" text="Delete" causesvalidation="False"&gt;&lt;/asp:linkbutton&gt;

<!--CRLF-->

    &lt;/p&gt;

<!--CRLF-->

    &lt;dnn:audit id="ctlAudit" runat="server" /&gt;

<!--CRLF-->
 



[/mp30]  

The DotNetNuke LabelControl provides functionality similar to the ASP.NET Label control, but with all of the benefits of Localization and the presence of a help icon (![Help Icon](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_110.png "Help Icon")) that provides a "tool tip". This LabelControl is typically used for each data entry item on the form. In the case of this module, the LabelControl gives guidance for entering a Journal entry using the Rich Text Editor.

 

The Rich Text Editor is embodied by the DotNetNuke TextEditor control. With it, the user can write their journal entry as formatted text, complete with images if desired, all without needing to hand-generate the HTML. The TextEditor deals with all of the nitty-gritty details of representing the user's input as HTML.

 

The final DotNetNuke control in the EditJournal is the ModuleAuditControl. This displays and records information about the last person to edit the content for the module, and is only visible when using the EditJournal.ascx to perform an update.

 

![ModuleAuditControl](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_129.png "ModuleAuditControl")

 

The code-behind for the EditJournal control has four event handlers. The first is for when the page loads. It checks the query string for the ItemId of the journal entry. If no ID is present, then it assumes that the user is adding a new journal entry. If there is an ItemId, then it uses this to look up the specific journal entry and place its content into the rich text editor. ([**view code**](mp31))

 



[mp31]   
### EditJournal.Page\_Load
 
Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

<!--CRLF-->

                Try

<!--CRLF-->

                    ' Determine ItemId of Journal to Update

<!--CRLF-->

                    If Not (Request.QueryString("ItemId") Is Nothing) Then

<!--CRLF-->

                        ItemId = Int32.Parse(Request.QueryString("ItemId"))

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' If this is the first visit to the page, bind the data to the datalist

<!--CRLF-->

                    If Page.IsPostBack = False Then

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        cmdDelete.Attributes.Add("onClick", "javascript:return confirm('" &amp; Localization.GetString("DeleteItem") &amp; "');")

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        If Not Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

                            ' get content

<!--CRLF-->

                            Dim objJournals As New JournalController

<!--CRLF-->

                            Dim objJournal As JournalInfo = objJournals.GetJournal(ModuleId,ItemId)

<!--CRLF-->

                            If Not objJournal Is Nothing Then

<!--CRLF-->

                                txtContent.Text = objJournal.Content

<!--CRLF-->

                                ctlAudit.CreatedByUser = objJournal.CreatedByUser.ToString

<!--CRLF-->

                                ctlAudit.CreatedDate = objJournal.CreatedDate.ToString

<!--CRLF-->

                            Else 

<!--CRLF-->

                                ' security violation attempt to access item not 

<!--CRLF-->

                                ' related to this Module

<!--CRLF-->

                                Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                            End If

<!--CRLF-->

                        Else

<!--CRLF-->

                            cmdDelete.Visible = False

<!--CRLF-->

                            ctlAudit.Visible = False

<!--CRLF-->

                        End If

<!--CRLF-->

                    End If

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp31]  

The other three event handler methods deal with the button click events of the Update and Delete buttons. The Cancel button will result in a re-direct back to the page with View control. It gets the address for this page using DotNetNuke's NavigateURL method. ([**view code**](mp32))

 



[mp32]   
### EditJournal.cmdCancel\_Click
 
Private Sub cmdCancel_Click(ByVal sender As Object, ByVal e As EventArgs) _

<!--CRLF-->

                        Handles cmdCancel.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp32]  

The method handling the Update button simply takes the user's input and calls either AddJournal or UpdateJournal on the JournalController class. ([**view code**](mp33))

 



[mp33]   
### EditJournal.cmdUpdate\_Click
 
Private Sub cmdUpdate_Click(ByVal sender As Object, ByVal e As EventArgs) Handles cmdUpdate.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    Dim objJournals As New JournalController

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    Dim objJournal As JournalInfo = New JournalInfo

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    objJournal.ModuleId = ModuleId

<!--CRLF-->

                    objJournal.ItemId = ItemId

<!--CRLF-->

                    objJournal.Content = txtContent.Text

<!--CRLF-->

                    objJournal.CreatedByUser = Me.UserId

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    If Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

                        ' add the content within the Journal table

<!--CRLF-->

                        objJournals.AddJournal(objJournal)

<!--CRLF-->

                    Else

<!--CRLF-->

                        ' update the content within the Journal table

<!--CRLF-->

                        objJournals.UpdateJournal(objJournal)

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' refresh cache

<!--CRLF-->

                    SynchronizeModule()

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' Redirect back to the portal home page

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp33]  

The method for the Delete button also uses the JournalController class, this time to call the DeleteJournal method. ([**view code**](mp34))

 



[mp34]   
### EditJournal.cmdDelete\_Click
 
Private Sub cmdDelete_Click(ByVal sender As Object, ByVal e As EventArgs) _

<!--CRLF-->

                        Handles cmdDelete.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    ' Only attempt to delete the item if it exists already

<!--CRLF-->

                    If Not Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

                        Dim objJournals As New JournalController

<!--CRLF-->

                        objJournals.DeleteJournal(ModuleId,ItemId)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' refresh cache

<!--CRLF-->

                        SynchronizeModule()

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' Redirect back to the portal home page

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->
 



[/mp34]  

The following is the complete code for the EditJournal's code-behind file. ([**view code**](mp35))

 



[mp35]   
### EditJournal Class
 
Imports DotNetNuke

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

        Partial Class EditJournal

<!--CRLF-->

            Inherits Entities.Modules.PortalModuleBase

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Private Members"

<!--CRLF-->

            Private ItemId As Integer = Common.Utilities.Null.NullInteger

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Event Handlers"

<!--CRLF-->

            Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

<!--CRLF-->

                Try

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' Determine ItemId of Journal to Update

<!--CRLF-->

                    If Not (Request.QueryString("ItemId") Is Nothing) Then

<!--CRLF-->

                        ItemId = Int32.Parse(Request.QueryString("ItemId"))

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' If this is the first visit to the page, bind the role data to the datalist

<!--CRLF-->

                    If Page.IsPostBack = False Then

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        cmdDelete.Attributes.Add("onClick", "javascript:return confirm('" &amp; Localization.GetString("DeleteItem") &amp; "');")

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        If Not Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

                            ' get content

<!--CRLF-->

                            Dim objJournals As New JournalController

<!--CRLF-->

                            Dim objJournal As JournalInfo = objJournals.GetJournal(ModuleId,ItemId)

<!--CRLF-->

                            If Not objJournal Is Nothing Then

<!--CRLF-->

                                txtContent.Text = objJournal.Content

<!--CRLF-->

                                ctlAudit.CreatedByUser = objJournal.CreatedByUser.ToString

<!--CRLF-->

                                ctlAudit.CreatedDate = objJournal.CreatedDate.ToString

<!--CRLF-->

                            Else ' security violation attempt to access item not related to this Module

<!--CRLF-->

                                Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                            End If

<!--CRLF-->

                        Else

<!--CRLF-->

                            cmdDelete.Visible = False

<!--CRLF-->

                            ctlAudit.Visible = False

<!--CRLF-->

                        End If

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Private Sub cmdCancel_Click(ByVal sender As Object, ByVal e As EventArgs) Handles cmdCancel.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Private Sub cmdUpdate_Click(ByVal sender As Object, ByVal e As EventArgs) Handles cmdUpdate.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    Dim objJournals As New JournalController

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    Dim objJournal As JournalInfo = New JournalInfo

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    objJournal.ModuleId = ModuleId

<!--CRLF-->

                    objJournal.ItemId = ItemId

<!--CRLF-->

                    objJournal.Content = txtContent.Text

<!--CRLF-->

                    objJournal.CreatedByUser = Me.UserId

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    If Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

                        ' add the content within the Journal table

<!--CRLF-->

                        objJournals.AddJournal(objJournal)

<!--CRLF-->

                    Else

<!--CRLF-->

                        ' update the content within the Journal table

<!--CRLF-->

                        objJournals.UpdateJournal(objJournal)

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' refresh cache

<!--CRLF-->

                    SynchronizeModule()

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' Redirect back to the portal home page

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Private Sub cmdDelete_Click(ByVal sender As Object, ByVal e As EventArgs) Handles cmdDelete.Click

<!--CRLF-->

                Try

<!--CRLF-->

                    ' Only attempt to delete the item if it exists already

<!--CRLF-->

                    If Not Common.Utilities.Null.IsNull(ItemId) Then

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        Dim objJournals As New JournalController

<!--CRLF-->

                        objJournals.DeleteJournal(ModuleId,ItemId)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                        ' refresh cache

<!--CRLF-->

                        SynchronizeModule()

<!--CRLF-->

                    End If

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' Redirect back to the portal home page

<!--CRLF-->

                    Response.Redirect(NavigateURL(), True)

<!--CRLF-->

                Catch exc As Exception    'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



[/mp35]  
## Settings Control
 

The purpose of the Settings user control in a module is different from the other user controls. The Settings user control is displayed as a custom part of the overall module settings. There is no need to add any navigation to display this control, as it is automatically injected into the page that is used to manage other module-related settings, such as the module permissions and custom display settings.

 

[![Journal Module Settings Page](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_58.png "Journal Module Settings Page")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_131.png)

 

To view the module settings, a user with Edit Module permissions would simply select Settings from the module's action menu.

 

![Journal Module Action Menu](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_134.png "Journal Module Action Menu")

 

If you think of your module as being a pluggable item meant to manage a particular type of content in a particular way, then the View and Edit controls would be seen as dealing directly with your content. The Settings control, however, would be used to deal with *meta-data* about your content. This can include items such as values for certain constants used by your module to affect the way information is displayed, managed, or manipulated.

 

In the case of the Journal module, the Settings control allows the user to set the template to be used when viewing the Journal entries. The mark-up for this user control is pretty straight forward. A DotNetNuke LabelControl supplies the "Template" label for a TextBox control. The user enters their template as plain text which can include HTML and placeholders for properties of the CBO class (JournalInfo). ([**view code**](mp36))

 



[mp36]   
### Settings.ascx
 
&lt;%@ Control Language="vb" AutoEventWireup="false" CodeFile="Settings.ascx.vb" Inherits="YourCompany.Modules.Journal.Settings" %&gt;

<!--CRLF-->

    &lt;%@ Register TagPrefix="dnn" TagName="Label" Src="~/controls/LabelControl.ascx" %&gt;

<!--CRLF-->

    &lt;table cellspacing="0" cellpadding="2" border="0" summary="Journal Settings Design Table"&gt;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

            &lt;td class="SubHead" width="150"&gt;&lt;dnn:label id="lblTemplate" runat="server" controlname="txtTemplate" suffix=":"&gt;&lt;/dnn:label&gt;&lt;/td&gt;

<!--CRLF-->

            &lt;td valign="bottom" &gt;

<!--CRLF-->

                &lt;asp:textbox id="txtTemplate" cssclass="NormalTextBox" width="390" columns="30" textmode="MultiLine" rows="10" maxlength="2000" runat="server" /&gt;

<!--CRLF-->

            &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &lt;/table&gt;

<!--CRLF-->
 



[/mp36]  

Like the View and Edit controls, the Settings control has a resource file (Settings.ascx.resx) to allow website owners to support other languages and to customize various parts of the text around the control.

 

[![Settings.ascx.resx](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_thumb_60.png "Settings.ascx.resx")](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_136.png)

 

In the code-behind of the Settings control, one of the first items to note is that this control inherits from ModuleSettingsBase (not PortalModuleBase, which is used for the View and Edit controls). ModuleSettingsBase introduces a couple of additional items used by the DotNetNuke framework when it displays the control along with the general module settings.

 

![ModuleSettingsBase Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_113.png "ModuleSettingsBase Class Diagram")

 

![ISettingsControl Class Diagram](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-DotNetNukeDynamicModuleTemplate_E372-image_116.png "ISettingsControl Class Diagram")

 
Partial Class Settings

<!--CRLF-->

            Inherits Entities.Modules.ModuleSettingsBase

<!--CRLF-->
 

A brief word should be mentioned here about the ModuleSettings and TabModuleSettings properties of the base class. Both of these properties are name/value pairs that relate to the meta-data you intend to use in your module. What is different is that the data stored in TabModuleSettings will be unique for a specific instance of your module on a specific page; TabModuleSettings data allows for a very "fine granularity" of settings for your module. The data stored in ModuleSettings, however, is more generic and will be shared by all instances of your module throughout the specific DotNetNuke portal.

 

In both ModuleSettings and TabModuleSettings, however, the data stored is specific to your module. This is different from the Settings property which contains general meta-data that applies to the active DotNetNuke portal or website.

 

One of the frequent questions developers ask is whether they should use ModuleSettings or TabModuleSettings. The answer will depend on whether or not the values should be unique to each instance of your module (in which case, you should use TabModuleSettings). If you are in doubt, a good rule-of-thumb is to use TabModuleSettings, because they will allow the end-user the greatest degree of customization when using your module.

 

The rest of the code-behind for the Settings module consists of two simple methods: LoadSettings and UpdateSettings. These methods are where you, as the module developer, can save the user's input for your module's meta-data. You can even mix and match the use of TabModuleSettings and ModuleSettings. In the case of the Journal module, the Dynamic Module template's code stores the module's "template" meta-data into the TabModuleSettings collection.

 

Here is the complete code for Settings.ascx.vb. ([**view code**](mp37))

 



[mp37]   
### Settings Class
 
Imports DotNetNuke

<!--CRLF-->

    Imports System.Web.UI

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    Namespace YourCompany.Modules.Journal

<!--CRLF-->

        Partial Class Settings

<!--CRLF-->

            Inherits Entities.Modules.ModuleSettingsBase

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    #Region "Base Method Implementations"

<!--CRLF-->

            Public Overrides Sub LoadSettings()

<!--CRLF-->

                Try

<!--CRLF-->

                    If (Page.IsPostBack = False) Then

<!--CRLF-->

                        If CType(TabModuleSettings("template"), String) &lt;&gt; "" Then

<!--CRLF-->

                            txtTemplate.Text = CType(TabModuleSettings("template"), String)

<!--CRLF-->

                        End If

<!--CRLF-->

                    End If

<!--CRLF-->

                Catch exc As Exception           'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            Public Overrides Sub UpdateSettings()

<!--CRLF-->

                Try

<!--CRLF-->

                    Dim objModules As New Entities.Modules.ModuleController

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    objModules.UpdateTabModuleSetting(TabModuleId, "template", txtTemplate.Text)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

                    ' refresh cache

<!--CRLF-->

                    SynchronizeModule()

<!--CRLF-->

                Catch exc As Exception           'Module failed to load

<!--CRLF-->

                    ProcessModuleLoadException(Me, exc)

<!--CRLF-->

                End Try

<!--CRLF-->

            End Sub

<!--CRLF-->

    #End Region

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        End Class

<!--CRLF-->

    End Namespace

<!--CRLF-->
 



[/mp37]  
# Beyond This Template
 

In this tutorial, I discussed the basics of module development using the DotNetNuke Dynamic Module template. This template is more than a simple starting point for module developers. It is a fully-functional module that demonstrates common practices in writing plug-ins for DotNetNuke.

 

It doesn't stop here, however. The DotNetNuke framework has a very rich API that developers can leverage in all sorts of ways. Whether you are interested in using the API to speed your development efforts or to enhance the integration of your module with DotNetNuke or other modules on the site, you are sure to find endless opportunities in the technologies employed within DotNetNuke.



---

