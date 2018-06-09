---
Title: DNN® Development Essentials – A Methodology and More
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# DNN® Development Essentials – A Methodology and More

---
## DNN® Development Essentials – A Methodology and More

# Developing DotNetNuke® Extensions – Towards a Solid Methodology
 

![Developing DotNetNuke Extensions - Towards a Solid Methodology](http://www.hot4dnn.com/Portals/0/images/dagilleland/News-Articles/2010/Jul/WLW-19f312112a56_FFB5-Businessman%20using%20gray%20laptop%20computer_3.jpg "Developing DotNetNuke Extensions - Towards a Solid Methodology")DotNetNuke module development can take on many forms. There is no "one right way" to do it; your preferred approach will depend on many factors.

 

But there are some common points that most well-executed module development projects tend to follow. These strategies can be expressed in many ways, but one popular way is known as the [**Unified Process**](http://en.wikipedia.org/wiki/Unified_Process). This process identifies distinct phases in the software development cycle, and these phases offer a solid framework for almost any level of DotNetNuke module development. Understanding the Unified Process can help programmers take a more decisive approach in their development.

 

This article will briefly describe:

 
- A way to apply the **Unified Process** to DotNetNuke module development.  - Things to consider for those "solo developers" of DotNetNuke extensions.  - Key benefits of Agile Programming.


# Developing DotNetNuke® Extensions – Towards a Solid Methodology
 

DotNetNuke module development can take on many forms. There is no "one right way" to do it; your preferred approach will depend on many factors.

 

But there are some common points that most well-executed module development projects tend to follow. These strategies can be expressed in many ways, but one popular way is known as the [**Unified Process**](http://en.wikipedia.org/wiki/Unified_Process). This process identifies distinct phases in the software development cycle, and these phases offer a solid framework for almost any level of DotNetNuke module development. Understanding the Unified Process can help programmers take a more decisive approach in their development.

 

Beyond the Unified Process, however, there are other considerations that vie for the developer's attention. One of the first is that there are several ways to physically construct a DotNetNuke module. DotNetNuke comes with many templates to choose from in the Starter Kit: Dynamic Module, Simple Module, and the Web Application Project, to name a few. Within each of these are many other choices. Should you use LINQ or the traditional DAL+ approach for data access? Is it worthwhile to attempt Dependency Injection (DI) and Inversion of Control (IoC)? Should you use data-bound controls or opt for writing event handlers in the form's code-behind? Is it better to use code generators, such as CodeSmith or MyGeneration, or should one hand-generate as much as possible? All of these questions and decisions can leave a new developer with a sense of uncertainty, for there is no "silver-bullet" approach. Each has their advantages and their trade-offs.

 

What developers can do to beyond addressing these mechanical considerations in their projects is to begin formulating a solid methodology for tackling their projects. Even the best tools and techniques, if not properly implemented, will eat up time, energy and resources both in the short term and for the long haul. A methodology addresses the process that the developer takes, not the tools and techniques of construction. With a solid and proven process, and the practiced execution of that process, programmers will find increased productivity and greater long-term viability in their development efforts.

 

The following section will briefly outline the four phases of the Unified Process and describe how they can be applied to building DotNetNuke extensions.

 
## Development Phases
 

The Unified Process consists of four phases: Inception, Elaboration, Construction, and Transition. When applied to designing a DotNetNuke module, these phases can take the following concrete forms.

 
- **Phase 1 – Inception**   
In this phase, the objective is to formulate the idea and express the need, purpose or goal of the software project.  
 - ***Express the idea*** – Put the idea for the project into words. Answer these questions: "What will [project name] do? How would I describe the idea behind the [project name]?"   - ***Identify the reasons*** – List the benefits of the project. Answer these questions: "Why is this project a good idea? What are the benefits of this project?"   - ***Sketch the idea*** – Make a visual of the main parts of the user interface (even if it's just a preliminary one). The visual doesn't have to be fancy; hand-drawn sketches are usually the best.

 - **Phase 2 – Elaboration**   
In this phase, the objective is to flesh out more of the details behind the idea and gather enough requirements to begin the Construction phase.  
 - ***Model the data*** – Write out the database tables and/or business objects that represent the data that the module will manage or present. Also list the stored procedures (if required) for accessing/managing the tables.   - ***Sketch View and Edit forms*** – Refine the sketches from the Inception phase. Aim for at least two primary forms: one for viewing the data, and one for editing the data. The form for viewing the data may have two versions: the form as it is viewed by ordinary users, and the form as it is viewed by someone with the rights to edit the data.   - ***Identify common settings*** – Sometimes there are background settings that will affect the presentation, structure or other aspect of the form and/or data. For example, there may be constants or other settings that are not the *main* content behind the project, but that will potentially affect that content in some way.   - ***Prioritize the work*** – Before moving to the Construction phase, identify what parts of the project are the most important to complete right away. Aim for the greatest functionality in the shortest period of time.

 - **Phase 3 – Construction**   
In this phase, the objective is to begin building the project.  
 - ***Set up the project*** – Begin by creating a DotNetNuke website using the starter kit for Visual Studio. Run the solution – [CTRL] + [F5] – and walk through the DotNetNuke Installation wizard.   - ***Create the database items*** – Create the tables and the stored procedures for the database. You may even want to enter some sample data, to simplify testing early on.   - ***Create and Register the module*** – Create the initial module for the project. The forms do not have to be functional at this point. The objective is to create a "shell" or starting point for your module so that it can be "registered" (added) in the Module Definitions of the DotNetNuke website.   - ***Develop the module*** – Focus on the form(s) that hold the most value for the current iteration of the Construction phase. Build the CBOs, DAL, and BLL that will support the form's functionality; then code the actual forms themselves.   - ***Test the module*** – Check that the form(s) work correctly in the DotNetNuke website.

 - **Phase 4 – Transition**   
In this phase, the objective is to create an installation package for the module and plan for the features to be developed in the next version.  
 - ***Finalize the Database Install/Uninstall scripts*** – Create the .SqlDataProvider script that will create the tables and stored procedures for a fresh installation of your module. Also create the script that will remove the tables and stored procedures whenever the module is uninstalled from a DotNetNuke website.   - ***Complete the module's description*** – Update the module definition in the website to complete the module's description (including the version, author, copyright, terms, and other details).   - ***Create and test the install package*** – Create the installation package, which will include the .dnn manifest, database scripts, forms, etc. Ensure that the installation package is complete and functional by installing it in a new DotNetNuke website.   - ***Plan for the next version*** – Create a list of known bugs and future enhancements for the module. These items become the seed for entering the Inception phase in the next version.

 
## The Perils of Solo Development
 

Remember [Han Solo](http://en.wikipedia.org/wiki/File:HanSolo.jpg), from the movie "Star Wars"? He was a guy who liked to depend on no-one but himself. But by getting involved with others and taking on tasks greater than himself, he was able to play a huge part in bringing about freedom from the "evil empire". The same is true for software developers. Many of the people who create DotNetNuke extensions are "Solo Developers", sometimes out of necessity and sometimes out of a desire for independence and personal achievement. But the truth of the matter is that most developers benefit from working together. In fact, Han Solo's story almost looks like the story of DotNetNuke. Because a community of people worked together and contributed to the development and refinement of the DotNetNuke framework, it has produced a thriving ecosystem full of opportunities.

 

Even so, many people still strive to do their work as solo-developers. And that's not necessarily a bad thing (I'm a solo developer in many of my projects, mostly out of necessity). But it's not usually the best thing, and when projects start getting bigger and bigger, it's definitely time to join forces with others. Until that time, you can mitigate the perils of solo development by practicing the Unified Process outlined above and learning from others. (BTW, always learn from others mistakes; you won't live long enough to make them all yourself.)

 

Here's a few tips to consider when trying to make it as a solo developer (tailored in part for the DotNetNuke developer). These are pretty general, but they will lead you into a wider range of resources than I could list all by myself.

 
- **Look to the DNN Community**The DotNetNuke community is huge (almost 800,000 at the time of this article), and many people are willing to help & share their knowledge. A good place to start is the [Forum pages](http://www.dotnetnuke.com/tabid/795/default.aspx), particularly the [Developer Forums](http://www.dotnetnuke.com/Community/Forums/tabid/795/GroupID/92/Default.aspx), where you can find others who have had the same questions. You can post your own questions as well, but often a simple search there will produce a quicker result than waiting for someone with the answer you're looking for to come along and reply to your post.  - **Read the****DNN Blogs**   
I actually have the [DNN Blog page](http://www.dotnetnuke.com/tabid/825/Default.aspx) as my main shortcut to the DotNetNuke site. These blogs are written by people close to the various development activities on the DotNetNuke platform, and their depth of knowledge and insight is amazing.  - **Make use of Google & DotNetNuke**There is a lot of solid information in the DotNetNuke forums, and there are many people willing to help. But it can also be daunting to find what you're looking for by just using the forum's search facility. I tend to use Google for most technical questions I have, and when I want Google's take on where my answer is in DotNetNuke, I just append the text "site:DotNetNuke.com" to my search (without the quotes). To make sure I get the latest information (and not some outdated advice), I often narrow the date range to the past month or year (see the options at the left of your Google search results). By the way: Bing is just (about) as good as Google. I'm just more used to Google.  - **Check out**[**MSDN**](http://msdn.microsoft.com)**,**[**ASP.NET**](http://www.asp.net)**, and**[**StackOverFlow**](http://stackoverflow.com/questions/tagged/dotnetnuke)   
Most of my questions on DNN development actually have little to do with the DNN framework itself. The bulk of the technical knowledge & skills I leverage have to do with learning the ins-and-outs of my programming language and the .NET Framework. A lot of the answers I seek are already well documented in these three places.  - **Read about Solo Development**   
StackOverFlow has a few good resources to check out. Browse the tag ["Solo-Developer"](http://stackoverflow.com/questions/tagged/solo-developer) and see what you can learn. Top of the list (at this point) is the question ["What tools/techniques can benefit a solo developer?"](http://stackoverflow.com/questions/59561/what-tools-techniques-can-benefit-a-solo-developer) where I found out about a cool little note-taker called [TiddlyWiki](http://www.tiddlywiki.com/).  - **Weigh the pros and cons of Solo Development**There are a few good articles and blogs on solo development vs. team development. John Cook [blogs about two trends](http://www.johndcook.com/blog/2009/07/16/solo-software-development/) he sees affecting the challenges and opportunities facing the solo developer. Other writers argue about ["Why the Solo Developer is Dead"](http://www.codesqueeze.com/software-teams-vs-superheroes-why-the-solo-developer-is-dead/).  - **Learn Version Control**There are countless [recommendations](http://www.cimgf.com/2009/11/07/why-version-control-is-important-for-solo-developers/) for solo developers to get into using version control for their projects. A good place to start learning is by trying it out on CodePlex. Create a simple project that you feel you can open-source, and learn the tools. [Subversion](http://subversion.apache.org/) (I use [TortoiseSVN](http://tortoisesvn.tigris.org/) as my main tool) has been a big tool over the years, but [Mercurial](http://mercurial.selenic.com/) (and [TortoiseHg](http://tortoisehg.bitbucket.org/)) is one that also deserves a good consideration. When you're feeling comfortable with version control, go the next step and explore Continuous Integration (CI). Jon Henning has a [three](http://www.dotnetnuke.com/Community/Blogs/tabid/825/EntryId/2158/Getting-Continuous-Integration-Working-With-CodePlex-Part-I.aspx) [part](http://www.dotnetnuke.com/Community/Blogs/tabid/825/EntryId/2159/Getting-Continuous-Integration-Working-With-CodePlex-Part-II.aspx) [article](http://www.dotnetnuke.com/Community/Blogs/tabid/825/EntryId/2175/Getting-Continuous-Integration-Working-With-CodePlex-Part-III.aspx) on using CI with CodePlex.  - **Look for chances to contribute**You will really benefit if you can help someone out with their project (such as volunteering for a [project at DotNetNuke](http://www.dotnetnuke.com/Community/Teams/tabid/1400/Default.aspx) or making connections around an open-source project on [CodePlex](http://www.codeplex.com/site/search/openings)). It will also give you the opportunity to test the waters of team development and collaboration. Not all opportunities are equal, however. Spend some time learning more about the project and the people involved. Then look for ways you can help out.  - **Learn to be agile**   
A lot of articles on Agile programming (also known as "Extreme Programming") address team strategies and management issues. Shelley Doll points out that [solo developers can leverage Agile techniques](http://www.builderau.com.au/strategy/projectmanagement/soa/Agile-programming-works-for-the-solo-developer/0,339028292,320267171,00.htm) as well. In fact, Shelley suggests that solo developers are probably already using agile programming concepts without realizing it. But the more you understand agile development, the more you can intentionally leverage it for your needs.  - **Read HOT4DNN**   
Yes, this is a shameless plug. But the whole dream of HOT4DNN is to create a place where current and high-quality articles on DotNetNuke development can be found in a single place. I know that's lofty, and that there's a lot of good stuff elsewhere (even my blog, where I wrote once about leveraging [Comments and Tasks in Visual Studio](http://kb.gilleland.info/Home/tabid/808/ctl/ArticleView/mid/1674/articleId/159/PageID/187/Comments-and-Tasks-in-Visual-Studio.aspx#axzz0tjNEGSMq)). I don't have all the answers, but at least HOT4DNN gives me a place to share what I have learned about DotNetNuke development over the years.  - **Read DNN Creative Magazine**   
I'm not affiliated with [DNN Creative Magazine](http://www.dnncreative.com/Default.aspx), but Lee Sykes has done a great job building a resource of information mostly for DotNetNuke administrators and super users. If you want to get the most out of just *using* DotNetNuke, then this is definitely worth the subscription. The more you learn about how DotNetNuke works, the better positioned you are to build well-integrated modules that will meet people's needs.

 
## Going Agile
 

[**Agile Programming**](http://en.wikipedia.org/wiki/Agile_software_development) (also called '"eXtreme Programming" or XP) is all about applying an adaptive approach that is resilient to change and speeds production. It focuses primarily on frequent iterations and releases in your project. The Unified Process supports Agile practices in several ways. In fact, there is an adaptation of this process specifically designed for Agile development. It is called the [**Agile Unified Process**](http://en.wikipedia.org/wiki/Agile_Unified_Process). The key characteristics of all Agile practices are: Smaller units of work, tracking progress, and having frequent iterations.

 
- **Smaller Units of Work**   
The Elaboration phase is all about gathering requirements, fleshing out design details, and breaking those items into small tasks that can be measured in hours. It's important not to dwell too long in this phase; you can come back to it at any point. Just get enough to enter the first iteration of construction and have the bigger picture of the next iteration sketched out.  - **Tracking Progress**Again, the Elaboration phase helps, because the gathered requirements and smaller units of work lend themselves to creating checklists to help track progress. As checklists with time estimations, the small units of work can be represented in a "**burn down chart**" that is refreshed every day to show the progress to each release. Burn down charts are part of a type of agile variation known as Scrum. (You can learn more about Scrum from [Scrum.org](http://www.scrum.org) and [ScrumAlliance.org](http://www.scrumalliance.org/).)  - **Frequent Iterations**Because tasks are measurable in hours, iterations can be measured in days and weeks rather than months. That shorter time frame toward actual working versions of the product allows for richer feedback from the client and better bug catching for developers.

 

Agile practices are much more than what I've outlined here, and there are many rich resources [on the web](http://www.google.ca/search?aq=f&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=Agile+programming) to learn about [Agile](http://agileprogramming.org/).

 
## Conclusion
 

Producing high quality modules and other extensions for DotNetNuke on a consistent basis is an ongoing challenge. Thinking carefully about the methodology you use behind your efforts is a good place to start improving them. Hopefully, the ideas expressed here can contribute to your development efforts and overall success.



---
