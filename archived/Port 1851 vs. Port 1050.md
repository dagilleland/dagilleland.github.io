---
Title: Port 1851 vs. Port 1050
Created: 9/6/2009 3:16:36 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Port 1851 vs. Port 1050

---

## Port 1851 vs. Port 1050


Well, Visual Studio 2005 crashed again while I was working on a project. To be more specific, it appeared that the compiler crashed while trying to keep the Intellisense up to speed with changes I was making to my code. The real kicker for this, though, was that when I re-started VS, I couldn't get my ASP.NET page to display at all!



When I ran it ([CTRL] + [F5]), I would get a "page cannot be displayed" error saying that the server couldn't process the page. Since I wasn't using IIS (my project was configured for file-system website), but VS's Cassini, I think it is an error in that server. What I notice changed in my web app from before the crash was the following:


- An App\_offline.htm file was created (on my behalf - hmmmmm), and
- The VS solution file (.sln) had changed the VWD port from 1050 to 1851



So, I'm manually changing it back to 1050, and hoping for the best. Perhaps it is just that port 1851 is locked down on my box.... More on this later...






* * *






Yep, the manual change back to port 1050 definitely fixed the problem. Now, back to my coding. At least I have it blogged here, on my site, to search for it again, when I forget the fix and have to Google for it ![](http://www.gilleland.info/Portals/_default/Smileys/suspect.gif).





---

