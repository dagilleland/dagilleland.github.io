---
Title: Guidelines for Editing
Created: 8/12/2013 3:41:46 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Guidelines for Editing

---

## Guidelines for Editing

# Guidelines for Editing HOT4DNN Articles
 

> ***NOTE: This is a draft document***

 

preamble


# Guidelines for Editing HOT4DNN Articles
 

> ***NOTE: This is a draft document***

 

preamble

 
## Article Types
 

There are four main article types.

 
- **Articles** – [What/Why] This is the general category for articles that do not fall under the other categories. These can be technical write-ups (think “knowledge-base” or “how-to”) or backgrounders (think “The reason for a separate base class for Settings”).  - **Tutorials** – [How] These are walk-through articles that tell the user “how” to build something. It focuses on mechanics and produces a fairly to totally complete example that the reader can create, just be following the instructions. You know you have a tutorial if you find yourself primarily doing a number of step-by-step instructions.  - **Commentary** – []  - **External Feeds** – These are pulled from 3rd party sites and are supplied free (as they are already accessible via those sites).  
 - **<u>TODO</u>**: Need to find a way to incorporate these features of external feeds:  
  - Filter external feeds, where the actual articles must be “approved” by the Editor    - Tag external feeds, to provide additional search characteristics    - Attribute external feeds, to provide a clear indication of where they are from and who wrote them (don’t give any false impression that they are written by us!!)

  - **<u>TODO</u>**: Formalize a process (in a way that doesn’t sound “formal” or “legalese”) to get authors permissions to reprint blogs.  
  - Offer free subscription    - Offer ad-based link-back (free vendor status)

 - **Author Gudelines** – Articles intended for authors/editors to give guidelines for contributions

 
## Styling Guides
 
### DNN Version Numbers
 

Tracking DNN Version numbers is a central aspect of the more technical of the articles. In general, version numbers for DNN should be reference following these guidelines.

 
- **DNN** – Always preface the version number with “DNN”; do not use “DotNetNuke”.  - **Short Number** – Use short number versions (DNN 5.4.3); avoid long number versions “05.04.03”  -

 
### Aside Comments
 

Sometimes, there are comments that are “asides” – a tangential note that is better to be set off from the rest of the content. Asides can signal different things:

 
- **Comment** – This is a general note or reminder; something of which to be aware or that would be of possible interest.  - **Tip** – These are very helpful ideas or considerations to keep in mind; they offer *<u>specific</u>* benefits if employed.  - **Warning** – These asides signal some potential pitfall that is easy to fall into (for the uninitiated and/or experienced)  - **Known Bug/Limitation** – This is some limitation or known bug. Sometimes, this is accompanied by a “workaround” to address the potential problem.

 



 
### Database Table Designs
 

To create an HTML table to show the design of a database table, use the following sample.

 

[Sample Code](tb1) [Resulting Display](tb2)

 

[tb1]

 
### HTML Code to Use
 
&lt;h3&gt;Draft the Database Table(s)&lt;/h3&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    &lt;p&gt;A single database table will be used to store the guest book comments that are posted.&lt;/p&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

    &lt;table class="DBTableDesign" border="1" cellspacing="0" cellpadding="3"&gt;

<!--CRLF-->

      &lt;thead&gt;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top" colspan="2"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;SimpleGuestBook&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;Column Name&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;Data Type&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

      &lt;/thead&gt;

<!--CRLF-->

      &lt;tbody&gt;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;SimpleGuestBookID&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;int (Primary Key)&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;ModuleID&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;int (Foreign Key to Modules table)&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;Comment&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;ntext&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;DisplayName&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;nvarchar(128)&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

    &nbsp;

<!--CRLF-->

        &lt;tr&gt;

<!--CRLF-->

          &lt;th valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;&lt;b&gt;DatePosted&lt;/b&gt;&lt;/p&gt;

<!--CRLF-->

          &lt;/th&gt;

<!--CRLF-->

          &lt;td valign="top"&gt;

<!--CRLF-->

            &lt;p&gt;datetime&lt;/p&gt;

<!--CRLF-->

          &lt;/td&gt;

<!--CRLF-->

        &lt;/tr&gt;

<!--CRLF-->

      &lt;/tbody&gt;

<!--CRLF-->

    &lt;/table&gt;

<!--CRLF-->
 

[/tb1]

 

[tb2]

 
### When Viewed in Browser
 
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

 

[/tb2]



---

