---
Title: Simple Guest Book – A Tutorial
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Simple Guest Book – A Tutorial

---
## Simple Guest Book – A Tutorial

### TODO Items:
 
- Add Summary to posting  - Finish articles (see <font style="background-color: rgb(0, 255, 0);"><strong>highlighted</strong> items)  - Remove TODO prior to publishing

 
# Simple Guest Book – A Tutorial
 

This tutorial walks through the steps for creating an ultra-simple module: one that consists of a single User Control and a single table in the database. These types of modules can be developed directly from within a DotNetNuke website by anyone logged in as the Super User or Host.

 

At the end of the tutorial, the **Discussion Points and Review**section will cover details about design aspects specific to this module.

 
## Phase 1 – Inception
 

The general idea behind the "Simple Guest Book" module is to provide a way for people to leave comments, similar to a "guest book" that people can sign when they visit a church, museum or someone's home. Here's the general requirements.

 
- General features  
 - Anyone with "View" permissions can post a comment   - Automatically logs the user & time that the post was made   - Only adds new posts; existing posts cannot be edited   - ***Not*** rich text – plain text only (no HTML, etc.)

 - Features under "Admin" permissions  
 - Is allowed to remove existing posts   - Cannot edit existing posts   - One form only!!!   - Inline code   - No "Settings.ascx"

 
### Sketch the Form
 

The module will appear slightly different to the user, depending on their permissions. This is how the form will appear to regular users who only have the View permission.

 

![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_31.png)

 

If the user has Edit permissions, then the form will show a couple of extra items: the Action Menu and an icon for deleting previous posts. The types of controls on this form will be standard ASP.NET controls: TextBox, Repeater, etc.

 

![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_32.png)

 
## Phase 2 – Elaboration
 

Since this module is, by design, a very simple module with no real editing features or special settings, the entire module will consist of a single user control. As such, the module can be built directly through the DotNetNuke website, without any need for a Visual Studio development environment. That is the general approach that will be used in this tutorial.

 

> Although you don't need Visual Studio to develop a single user control module for DotNetNuke, it does help – a lot! Visual Studio makes it easier to develop through the use of Database tools (for creating tables & stored procedures) and the Toolbox and Editor window for the web user control.

 
### Draft the Database Table(s)
 

A single database table will be used to store the guest book comments that are posted.

 

  |   

**SimpleGuestBook**

 |
| --- | --- |
 |   

**Column Name**

 |   

Data Type

 |
  |   

**SimpleGuestBookID**

 |   

int (Primary Key)

 |
| --- | --- | --- | --- |
 |   

**ModuleID**

 |   

int (Foreign Key to Modules table)

 |
| --- | --- | --- | --- |
 |   

**Comment**

 |   

ntext

 |
| --- | --- | --- | --- |
 |   

**DisplayName**

 |   

nvarchar(128)

 |
| --- | --- | --- | --- |
 |   

**DatePosted**

 |   

datetime

 |
| --- | --- | --- | --- |

 
## Phase 3 – Construction
 

In this tutorial, the construction phase will have three parts:

 
1. **Setup the Project Development Environment** – This is typically a one-time event for any given module's life span. It needs to be done at the start for the first version of the module, but can be re-used when doing version upgrades for your module.  - **Create the Tables/SPROCS** – The bulk of the work for creating the database tables and stored procedures (SPROCS) happens in the first version of your module (just like getting your development environment setup). Later versions of your module might or might not require changes to your database design; at those times, this part of the Construction phase will have a little bit of work, but it typically won't be as much as what is done in the very first version of your module.  - **Code the Module's User Control(s)** – Here is where the main efforts of your module development lay. This will be true for the first version and subsequent versions of your module.

 

The Construction Phase is the biggest part of this tutorial, even though it's a fairly simple module. Therefore, the big focus will be on the *mechanics* of building the module rather than on explaining how each part works or why a given approach was chosen. For details on these questions, see the **Discussion Points and Review**section at the end of the tutorial.

 

> The Construction Phase of any project is, typically, the longest and most challenging part of any project. It's not unusual to run into snags or problems that throw you back to the Elaboration Phase in order to rethink your design.
> 
>  
> 
> This is because (a) it contains the most hands-on work and (b) it involves a lot of details and decision making. It requires knowledge of SQL, VB or C#, and ASP.NET. You have to make choices about the underlying ASP.NET controls for your module. There is the question of how deep to go in the module's "level of abstraction", such as choosing full client-server, leveraging LINQ, etc. Lastly, you should expect to spend a good deal of time on testing & debugging (even for experienced developers). In short, plan to spend a lot of time here.

 
### Setup the Project Development Environment
 

To build this module, you will need Super User rights to a DotNetNuke website on your local machine. You should also have the ability to directly access the DesktopModules folder so as to save the install/uninstall scripts and to get the module's installation package what will be created in the next phase.

 

Follow these steps to setup the module for development through a web browser.

 
1. Log into the site as the SuperUser.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_2.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_6.png)- Navigate to the Module Definitions page under the Host menu.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_3.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_8.png)- Select Create New Module from the Action menu.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_4.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_10.png)- Select "New" in the Create Module From drop-down-list. Then, fill out the form according to the image below. Then click the "Create Module" link. This will create and register the module in the website.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_5.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_12.png)- With the "Add Test Page" CheckBox checked, a new page is added to the site with the newly created module on that page.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_6.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_14.png)

 

The next step is to create the database tables for the module. After that, the module's user control will be edited to create the Simple Guest Book functionality.

 
### Create the Table/SPROCS
 

The scripts to create the SimpleGuestBook table and its stored procedures can also be installed directly through website. First, however, we must create the scripts and To do so, follow these steps.

 
1. Create a new text file on your computer and name it "01.00.00.SqlDataProvider". Make sure the file has the ".SqlDataProvider" file extension (instead of ".txt"). Open it in any text editor and enter the following code.   
([**View code**](mp1))  - Create another text file on your computer. Name this one "Uninstall.SqlDataProvider". Open it in a text editor and enter the following code.   
([**View code**](mp2))  - After creating the database scripts, run the scripts in the website to create the table and stored procedures. To do this, navigate to the SQL page under the Host menu.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_7.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_16.png)- Using the "Choose File" button, locate and select "01.00.00.SqlDataProvider" as the SQL File to load. Then click the Load link.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_8.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_18.png)- This will place the script in the text box for executing.   
 [![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_9.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_20.png)- Make sure the "Run as Script" CheckBox is checked on. Then click the "Execute" link.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_10.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_22.png)- The script should run successfully. If there are any errors in running the install script, then repeat steps (4) to  (6) with the "Uninstall.SqlDataProvider" script to remove the table and stored procedures. Check your code for the installation script against the code shown in step 1) and fix any errors.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_11.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_24.png)

 

With the database tables and stored procedures in place, we can move to the next task of editing the module's User Control.

 



[mp1]   
## 01.00.00.SqlDataProvider
 
/************************************************************/

<!--CRLF-->

    /*****              SqlDataProvider                     *****/

<!--CRLF-->

    /************************************************************/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /** Create Table **/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if not exists (select * from dbo.sysobjects where id = object_id(N'{databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook]') and OBJECTPROPERTY(id, N'IsTable') = 1)

<!--CRLF-->

        BEGIN

<!--CRLF-->

            CREATE TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook]

<!--CRLF-->

            (

<!--CRLF-->

                [ModuleID] [int] NOT NULL,

<!--CRLF-->

                [SimpleGuestBookID] [int] NOT NULL IDENTITY(1, 1),

<!--CRLF-->

                [Comment] [ntext] NOT NULL,

<!--CRLF-->

                [DisplayName] [nvarchar](128) NOT NULL,

<!--CRLF-->

                [DatePosted] [datetime] NOT NULL

<!--CRLF-->

            )

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ALTER TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook] ADD CONSTRAINT [PK_{objectQualifier}HOT4DNN_SimpleGuestBook] PRIMARY KEY CLUSTERED  ([SimpleGuestBookID])

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            CREATE NONCLUSTERED INDEX [IX_{objectQualifier}HOT4DNN_SimpleGuestBook] ON {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook] ([ModuleID])

<!--CRLF-->

    &nbsp;

<!--CRLF-->

            ALTER TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook] ADD CONSTRAINT [FK_{objectQualifier}HOT4DNN_SimpleGuestBook_{objectQualifier}Modules] FOREIGN KEY ([ModuleID]) REFERENCES {databaseOwner}[{objectQualifier}Modules] ([ModuleID]) ON DELETE CASCADE NOT FOR REPLICATION

<!--CRLF-->

        END

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /** Drop Existing Stored Procedures **/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects where id = object_id(N'{databaseOwner}[{objectQualifier}HOT4DNN_GetSimpleGuestBooks]') and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}HOT4DNN_GetSimpleGuestBooks

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects where id = object_id(N'{databaseOwner}[{objectQualifier}HOT4DNN_AddSimpleGuestBook]') and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}HOT4DNN_AddSimpleGuestBook

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    if exists (select * from dbo.sysobjects where id = object_id(N'{databaseOwner}[{objectQualifier}HOT4DNN_DeleteSimpleGuestBook]') and OBJECTPROPERTY(id, N'IsProcedure') = 1)

<!--CRLF-->

        drop procedure {databaseOwner}{objectQualifier}HOT4DNN_DeleteSimpleGuestBook

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /** Create Stored Procedures **/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /*  GetSimpleGuestBooks  */

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}HOT4DNN_GetSimpleGuestBooks

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        @ModuleId int

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    select SimpleGuestBookID,

<!--CRLF-->

           ModuleId,

<!--CRLF-->

           Comment,

<!--CRLF-->

           DisplayName,

<!--CRLF-->

           DatePosted

<!--CRLF-->

    from {objectQualifier}HOT4DNN_SimpleGuestBook with (nolock)

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /*  AddSimpleGuestBook  */

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}HOT4DNN_AddSimpleGuestBook

<!--CRLF-->

        @ModuleId       int,

<!--CRLF-->

        @Comment        ntext,

<!--CRLF-->

        @DisplayName    nvarchar(128)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    insert into {objectQualifier}HOT4DNN_SimpleGuestBook (

<!--CRLF-->

        ModuleId,

<!--CRLF-->

        Comment,

<!--CRLF-->

        DisplayName,

<!--CRLF-->

        DatePosted

<!--CRLF-->

    ) 

<!--CRLF-->

    values (

<!--CRLF-->

        @ModuleId,

<!--CRLF-->

        @Comment,

<!--CRLF-->

        @DisplayName,

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

    /*  DeleteSimpleGuestBook  */

<!--CRLF-->

    create procedure {databaseOwner}{objectQualifier}HOT4DNN_DeleteSimpleGuestBook

<!--CRLF-->

        @ModuleId           int,

<!--CRLF-->

          @SimpleGuestBookID  int

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    as

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    delete

<!--CRLF-->

    from   {objectQualifier}HOT4DNN_SimpleGuestBook

<!--CRLF-->

    where  ModuleId = @ModuleId

<!--CRLF-->

    and    SimpleGuestBookID = @SimpleGuestBookID

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /************************************************************/

<!--CRLF-->

    /*****              SqlDataProvider                     *****/

<!--CRLF-->

    /************************************************************/

<!--CRLF-->
 

[/mp1]

  
 

[mp2]

 
## Uninstall.SqlDataProvider
 
/************************************************************/

<!--CRLF-->

    /*****              SqlDataProvider                     *****/

<!--CRLF-->

    /************************************************************/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /** Drop Table **/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    ALTER TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook] DROP CONSTRAINT [FK_{objectQualifier}SimpleGuestBook_{objectQualifier}Modules]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    ALTER TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook] DROP CONSTRAINT [PK_{objectQualifier}HOT4DNN_SimpleGuestBook]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP INDEX {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook].[IX_{objectQualifier}HOT4DNN_SimpleGuestBook]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP TABLE {databaseOwner}[{objectQualifier}HOT4DNN_SimpleGuestBook]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /** Drop Stored Procedures **/

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}HOT4DNN_GetSimpleGuestBooks]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}HOT4DNN_AddSimpleGuestBook]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    DROP PROCEDURE {databaseOwner}[{objectQualifier}HOT4DNN_DeleteSimpleGuestBook]

<!--CRLF-->

    GO

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    /************************************************************/

<!--CRLF-->

    /*****              SqlDataProvider                     *****/

<!--CRLF-->

    /************************************************************/

<!--CRLF-->
 [/mp2]  
### Edit the Module's User Control
 
1. Navigate to the test page for the module.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_12.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_26.png)- From the Action menu of the module, choose "View Source". This will open the View Module Control Source form.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_13.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_28.png)- In the View Module Control Source, select "User Control" from the Select File drop-down-list. This will load the code for the "ViewGuestBook.ascx" user control so that it can be edited directly from the web page.   
[![image](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_thumb_14.png)](/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-SimpleGuestBook_48F4-image_30.png)- In the Module Control Source text box, enter the following code.   
([**View code**](mp3))

 



[mp3]   
## ViewGuestBook.ascx
 
&lt;%@ Control Language="VB" ClassName="HOT4DNN.SimpleGuestBook" 

<!--CRLF-->

        Inherits="DotNetNuke.Entities.Modules.PortalModuleBase" %&gt;

<!--CRLF-->

    &lt;blockquote class="Normal"&gt;

<!--CRLF-->

        &lt;span class="SubHead"&gt;Sign the book by adding a comment:&lt;/span&gt;&lt;br /&gt;

<!--CRLF-->

        &lt;asp:RequiredFieldValidator ID="NewCommentValidator" runat="server"

<!--CRLF-->

            CssClass="NormalRed"

<!--CRLF-->

            ControlToValidate="NewComment" ValidationGroup="NewCommentGroup" 

<!--CRLF-->

            ErrorMessage="Comments are required when signing the guest book.&amp;lt;br /&gt;" /&gt;

<!--CRLF-->

        &lt;asp:Label ID="UserFeedback" runat="server"&gt;&lt;/asp:Label&gt;

<!--CRLF-->

        &lt;asp:TextBox ID="NewComment" runat="server" Width="100%" 

<!--CRLF-->

             ValidationGroup="NewCommentGroup" TextMode="MultiLine" Rows="4" /&gt;

<!--CRLF-->

        &lt;div style="text-align: right;"&gt;

<!--CRLF-->

            &lt;asp:LinkButton ID="AddComment" runat="server" Text="Add Comment"

<!--CRLF-->

                 ValidationGroup="NewCommentGroup" OnClick="AddComment_Click" /&gt;

<!--CRLF-->

        &lt;/div&gt;

<!--CRLF-->

    &lt;/blockquote&gt;

<!--CRLF-->

    &lt;asp:Repeater ID="GuestBookRepeater" runat="server"

<!--CRLF-->

         OnItemCommand="GuestBookRepeater_ItemCommand"&gt;

<!--CRLF-->

        &lt;ItemTemplate&gt;

<!--CRLF-->

            &lt;asp:ImageButton ID="DeleteComment" runat="server"

<!--CRLF-->

                 CommandName="Delete" CommandArgument='&lt;%# Eval("SimpleGuestBookID") %&gt;'

<!--CRLF-->

                 ToolTip="Click to delete the comment."

<!--CRLF-->

                 ImageUrl="~/images/delete.gif"

<!--CRLF-->

                 OnClientClick="return confirm('Are you sure you want to delete this post?')"

<!--CRLF-->

                 Visible='&lt;%# IsEditable  %&gt;' /&gt;

<!--CRLF-->

            &lt;asp:Label ID="Comment" runat="server" Text='&lt;%# Eval("Comment") %&gt;' /&gt;

<!--CRLF-->

            &lt;div style="text-align: right;"&gt;

<!--CRLF-->

                &lt;asp:Label ID="DisplayName" runat="server" 

<!--CRLF-->

                     Text='&lt;%# Eval("DisplayName") %&gt;' /&gt;,

<!--CRLF-->

                &lt;asp:Label ID="DatePosted" runat="server" 

<!--CRLF-->

                     Text='&lt;%# CType(Eval("DatePosted"),DateTime).ToLongDateString()  %&gt;' /&gt;

<!--CRLF-->

            &lt;/div&gt;

<!--CRLF-->

        &lt;/ItemTemplate&gt;

<!--CRLF-->

    &lt;/asp:Repeater&gt;

<!--CRLF-->

    &lt;asp:Label ID="EmptyDataTemplate" runat="server" Visible="false"&gt;

<!--CRLF-->

    No comments have been posted to the guest book. Enter yours and be the first!

<!--CRLF-->

    &lt;/asp:Label&gt;

<!--CRLF-->

    &lt;script runat="server"&gt;

<!--CRLF-->
 
Private ReadOnly Property DataStore() As DotNetNuke.Data.DataProvider

<!--CRLF-->

            Get

<!--CRLF-->

                Return DotNetNuke.Data.SqlDataProvider.Instance()

<!--CRLF-->

            End Get

<!--CRLF-->

        End Property

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs)

<!--CRLF-->

            If Not IsPostBack Then

<!--CRLF-->

                Try

<!--CRLF-->

                    PopulateRepeater()

<!--CRLF-->

                Catch ex As Exception

<!--CRLF-->

                    ProcessModuleLoadException(Me, ex)

<!--CRLF-->

                End Try

<!--CRLF-->

            End If

<!--CRLF-->

        End Sub

<!--CRLF-->

        

<!--CRLF-->

        Private Sub PopulateRepeater()

<!--CRLF-->

            Using reader As IDataReader = _

<!--CRLF-->

            DataStore.ExecuteReader("HOT4DNN_GetSimpleGuestBooks", ModuleId)

<!--CRLF-->

                Dim table As New DataTable()

<!--CRLF-->

                table.Load(reader)

<!--CRLF-->

                If table.Rows.Count = 0 Then EmptyDataTemplate.Visible = True

<!--CRLF-->

                GuestBookRepeater.DataSource = table

<!--CRLF-->

                GuestBookRepeater.DataBind()

<!--CRLF-->

            End Using

<!--CRLF-->

        End Sub

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        Protected Sub AddComment_Click(ByVal sender As Object, ByVal e As System.EventArgs)

<!--CRLF-->

            If NewCommentValidator.IsValid Then

<!--CRLF-->

                Try

<!--CRLF-->

                    Dim Comment As String = NewComment.Text

<!--CRLF-->

                    Dim DisplayName As String

<!--CRLF-->

                    If UserInfo IsNot Nothing Then

<!--CRLF-->

                        DisplayName = UserInfo.DisplayName

<!--CRLF-->

                    Else

<!--CRLF-->

                        DisplayName = "[Anonymous]"

<!--CRLF-->

                    End If

<!--CRLF-->

                    DataStore.ExecuteNonQuery("HOT4DNN_AddSimpleGuestBook", _

<!--CRLF-->

                                              ModuleId, Comment, DisplayName)

<!--CRLF-->

                    PopulateRepeater()

<!--CRLF-->

                    UserFeedback.Text = "Thank you for signing the guest book!"

<!--CRLF-->

                Catch ex As Exception

<!--CRLF-->

                    ProcessModuleLoadException(Me, ex)

<!--CRLF-->

                End Try

<!--CRLF-->

            End If

<!--CRLF-->

        End Sub

<!--CRLF-->

        

<!--CRLF-->

        Protected Sub GuestBookRepeater_ItemCommand(ByVal source As Object, _

<!--CRLF-->

                      ByVal e As System.Web.UI.WebControls.RepeaterCommandEventArgs)

<!--CRLF-->

            If e.CommandName.Equals("Delete") Then

<!--CRLF-->

                Dim GuestBookID As Integer

<!--CRLF-->

                If Integer.TryParse(e.CommandArgument, GuestBookID) Then

<!--CRLF-->

                    DataStore.ExecuteNonQuery("HOT4DNN_DeleteSimpleGuestBook", _

<!--CRLF-->

                                              ModuleId, GuestBookID)

<!--CRLF-->

                    PopulateRepeater()

<!--CRLF-->

                    UserFeedback.Text = "The user's comment has been deleted."

<!--CRLF-->

                End If

<!--CRLF-->

            End If

<!--CRLF-->

        End Sub

<!--CRLF-->
 
&lt;/script&gt;

<!--CRLF-->
 

[/mp3]

  

# Discussion Points and Review
 
## The Database Design
 

The SimpleGuestBook table is the heart of the module, and the script to create and work with it is the first big item to create. First, take a look at this depiction of the table's design.

 

  |   

**SimpleGuestBook**

 |
| --- | --- |
 |   

**Column Name**

 |   

Data Type

 |
  |   

**SimpleGuestBookID**

 |   

int (Primary Key)

 |
| --- | --- | --- | --- |
 |   

**ModuleID**

 |   

int (Foreign Key to Modules table)

 |
| --- | --- | --- | --- |
 |   

**Comment**

 |   

ntext

 |
| --- | --- | --- | --- |
 |   

**DisplayName**

 |   

nvarchar(128)

 |
| --- | --- | --- | --- |
 |   

**DatePosted**

 |   

datetime

 |
| --- | --- | --- | --- |

 
### ModuleID Column
 

The purpose for most of the columns for the SimpleGuestBook table are self-explanatory, given the module's description during the Inception Phase. What might not be as clear is the presence of the ModuleID column.

 

DotNetNuke modules are commonly designed so that they can be added to different pages (or "Tabs") on the website. In fact, each page can hold more than one instance of the same module. Typically, each instance of the module will need to distinguish its own data from other instances on the site. That is where the ModuleID column comes in. The ModuleID uniquely identifies each instance of the module throughout the whole DotNetNuke website. Every time a module is added to a page, it is tracked in the database as another row in the Modules table.

 

A good example of this design is the HTML module. It's common to find many instances of the HTML module on a website, each with their own distinct content. The HtmlText table includes a ModuleID column to help the module distinguish each instance of the HTML module.

 

The same is true for the Simple Guest Book module. It can be added to more than one page in the site. Each Guest Book module can contain many comments, but each comment is intended for a specific instance of the Guest Book module. The ModuleID column helps to identify a specific instance of the Guest Book module. It acts as a foreign key to the Modules table.

 
### Comment and DisplayName Columns
 

Beyond the purpose of the columns, a note should be made about the data type of the columns that store text. The Comment column's data type is ntext, and the DisplayName column is nvarchar. These data types are different from the text and varchar data types. Essentially, the ‘n' in the ntext and nvarchar types means that the data type supports content from non-English languages, such as French, Hebrew or Mandarin.

 

Also, note that the DisplayName column stores an actual user's name as text rather than storing the UserID and acting as a foreign key to the Users table. The reason for this is two-fold. First, if module's permissions allow people who are not logged in (that is, anonymous users) to make comments, then the DisplayName column can simply record the person with the name "Anonymous". Secondly, if a user who has made a comment is ever deleted from the web site, then it would be impossible to look up that person's name if all we stored was the UserID. Storing the person's name at the time the comment is posted makes the module independent from other changes on the web site.

 
## The Database Install Script
 

While writing the install and uninstall script requires a knowledge of SQL, there's a bit of additional knowledge you will need to make the script "DotNetNuke friendly". This review topic will walk through each part of creating these scripts.

 
### Creating the Table
 

The following SQL would create the table.

 
CREATE TABLE SimpleGuestBook

<!--CRLF-->

    (

<!--CRLF-->

        SimpleGuestBookID int NOT NULL IDENTITY(1, 1),

<!--CRLF-->

        ModuleID int NOT NULL,

<!--CRLF-->

        Comment ntext NOT NULL,

<!--CRLF-->

        DisplayName nvarchar(128) NOT NULL,

<!--CRLF-->

        DatePosted datetime NOT NULL

<!--CRLF-->

    )

<!--CRLF-->
 

After creating the table, the following ALTER statement can be applied. The ALTER statement defines the SimpleGuestBookID as the primary key.

 
ALTER TABLE SimpleGuestBook ADD CONSTRAINT PK_SimpleGuestBook 

<!--CRLF-->

    PRIMARY KEY CLUSTERED  (SimpleGuestBookID)

<!--CRLF-->
 

The next couple of statements have to do with the ModuleID column, which acts as a foreign key to the Modules table of DotNetNuke. The first statement sets up an index on the ModuleID column, thereby making searches by ModuleID much faster. The next statement establishes the foreign key relationship with the Modules table. Note on this statement that Cascade Delete is set up, so that if the module is deleted from the web site, then all the related Guest Book comments will also be removed.

 
CREATE NONCLUSTERED INDEX [IX_SimpleGuestBook] ON SimpleGuestBook (ModuleID)

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    ALTER TABLE SimpleGuestBook ADD CONSTRAINT FK_SimpleGuestBook_Modules 

<!--CRLF-->

    FOREIGN KEY (ModuleID) REFERENCES Modules (ModuleID) 

<!--CRLF-->

    ON DELETE CASCADE NOT FOR REPLICATION

<!--CRLF-->
 
### Creating the Stored Procedures
 
- *<font style="background-color: rgb(0, 255, 0);">discuss the Drop Sprocs portion*- *<font style="background-color: rgb(0, 255, 0);">discuss each stored procedure*

 
### Making the Script DotNetNuke Compliant
 
- *<font style="background-color: rgb(0, 255, 0);">discuss the {databaseOwner} and {objectQualifier}*

 
## The User Control
 
- <font style="background-color: rgb(0, 255, 0);">overview of this part of the discussion- <font style="background-color: rgb(0, 255, 0);">discuss each part of asp.net markup
 - <font style="background-color: rgb(0, 255, 0);">blockquote group for entering comment - <font style="background-color: rgb(0, 255, 0);">repeater for displaying all comments
  - <font style="background-color: rgb(0, 255, 0);">IsEditable

 - <font style="background-color: rgb(0, 255, 0);">discuss server-side script
 - <font style="background-color: rgb(0, 255, 0);">is "inline" rather than "code-behind" - <font style="background-color: rgb(0, 255, 0);">Property (DataStore) - <font style="background-color: rgb(0, 255, 0);">Page Load - <font style="background-color: rgb(0, 255, 0);">Populate Repeater
  - <font style="background-color: rgb(0, 255, 0);">ItemCommand

  - <font style="background-color: rgb(0, 255, 0);">AddComment_Click

 
## Beyond the Ultra-Simple Module
 
- <font style="background-color: rgb(0, 255, 0);">discuss the limitations of developing this way- <font style="background-color: rgb(0, 255, 0);">why to go with Visual Studio for larger modules



---
