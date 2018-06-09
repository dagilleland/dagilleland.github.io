---
Title: Testing NETBibleTagger Skin Object
Created: 7/9/2010 1:04:56 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Testing NETBibleTagger Skin Object

---

## Testing NETBibleTagger Skin Object


Gen 1:1 – Where it all began.



This week, I put together a skin object that leverages the **NET Bible Tagger**. I'm doing a bit of testing before I release it. I intend on releasing it as a free & open source DotNetNuke<sup><font size="smaller">®</sup> extension. When it's ready, I'll make a formal announcement.



> [![Creative Commons License](http://i.creativecommons.org/l/by-nc/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/)NET Bible Tagger for DotNetNuke® by [Dan Gilleland](/Dynamic Generation Inc.) is licensed under a [Creative Commons Attribution-NonCommercial 3.0 Unported License](http://creativecommons.org/licenses/by-nc/3.0/).         
> Based on a work at [labs.bible.org](http://labs.bible.org/NETBibleTagger).



The NET Bible Tagger is a JavaScript library that parses a page to look for any Bible references that already exist on the page (like John 3:16). There is no need for the person who writes the reference to do anything in terms of manually making the link – NET Bible Tagger does it all automatically. Here's info from the installation package for this skin object.



> NETBibleTagger is a new and innovative way to quote and link to the Bible from your existing scripture references. Using a JavaScript library imported from [http://labs.bible.org](http://labs.bible.org) (see [here](http://labs.bible.org/api/NETBibleTagger/netbibletagger.js), plain references to Bible passages turn into hyperlinks which create a small in-line window (tooltip), when the user moves the mouse over them. This tooltip displays the text in the passages that were referenced. See the Release Notes for further details.



And, from the release notes:



> ## Usage
> 
> 
> To use this skin object, simply place it anywhere inside the page skin. The skin object has three parameters: VoidOnMouseOut - (boolean, default = False) True to have the pop-up disappear when the user moves the mouse away from the link, False to have the pop-up stay. ParseAnchors - (boolean, default = False) True to have the script work with your existing links, False to have the script ignore your links. FontSize - (enum with limited values, default = 'small') The font size for the Bible text in the pop-up. Acceptable values are small, xx\_small, x\_small, medium, large, x\_large, xx\_large. This skin object runs by importing a JavaScript file (see below).
> 
> 
> ## Background
> 
> 
> The NET Bible Tagger uses an external JavaScript from [http://labs.bible.org](http://labs.bible.org) (you can access the script [here](http://labs.bible.org/api/NETBibleTagger/netbibletagger.js)). Here is the summary from their site:
> 
> 
> 
> "NETBibleTagger is a new and innovative way to quote and link to the Bible from your existing scripture references. Plain references turn into hyperlinks which create a small in-line windows (tooltips), when the user mouses over them. This tooltip displays the text in the passage(s) that were referenced. A "Read more" link is provided allowing one to view in context the reference and to study it further in the free NET® Bible Study Environment! Now, you have access to the same great Bible quoting that Bible.org has been using for years to enhance its readers' experiences. The Translation used is the NET®. NETBibleTagger supports all of the Bible book names and their standard abbreviations. It will recognize and tag books with only one chapter (e.g., Matthew 1 or Matthew 2:9). It also handles multiple verses and chapters in a row with verses separated by commas and chapter:verse groups separated by semi-colons (e.g., Acts 3:16-18; 4:2-4), and recognizes many other common abbreviations and formats (e.g., Lk 2:1; 4:4; Gal 3:3; 3:8-10; Eph 3:1; 4:2). Whether you use a hyphen (-) or an en dash (–), NETBibleTagger will correctly recognize and tag your Bible references (e.g., Rom 5:1-10; Eph 2:8–9). To prevent certain verses from being linked, place the text you want NETBibleTagger to ignore inside of tags."





---

