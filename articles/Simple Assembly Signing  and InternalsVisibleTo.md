---
Title: Simple Assembly Signing  and InternalsVisibleTo
Created: 10/5/2010 1:06:14 AM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Simple Assembly Signing  and InternalsVisibleTo

---

## Simple Assembly Signing  and InternalsVisibleTo


Recently, I ran into the situation where I needed to have an assembly signed with a strong name key file. The assembly was a wizard that I needed in a Visual Studio template (to gather additional information for running the template). That task was pretty easy: just open the project’s properties, click on the Signing tab, and make a new strong name key file. Give the file a name and a password, and it’s done. The results are a clean .pfx (Personal Information Exchange) file that is password secured.

 

But, sensing the need for some unit tests to manage the wizards changes in the future (and I was pretty sure it would morph over time), I didn’t want to make my internal class public just to satisfy unit tests, especially since some of those internal classes played with file I/O. I wanted a fairly secure assembly with a minimal exposure to public access (since the wizard would wind up in other people’s GAC).

 

The answer, of course, was to apply the [InternalsVisibleTo()] attribute on my wizard. Since my wizard was signed, my unit test project needed to be signed as well.

 

When I looked into the MSDN documents to see how to do this, I was presented with the Strong Name command line tool (**sn**). [*Note: Funny and somewhat serendipitous, how putting***sn***in parenthesis just now in WLW, I get a nice snail icon: ![Snail](images/2010/WLW-fab59f3d0610_14F4C-wlEmoticon-snail_2.png)*] As I looked through the how/wherefore of using this tool, I didn’t see any mention of the .pfx file that gets generated when signing via the property page of the project in the IDE. A little more Googling, and I stumbled upon a comment in social.msdn about using the **–p** switch on **sn** to convert the .pfx to a .publickey. Then, I was able to use the sn tool to display the public key, and I’m ready to roll.

 

So, for the sake of those who need detailed steps (and for myself, when memory fails me in the coming months), here’s the steps for a simple demo pair of projects:

 



 

***TBA***

 



 

Bibliography:

 
- (MDSN) [How to: Create Signed Friend Assemblies](http://msdn.microsoft.com/en-us/library/bb385180.aspx)
- [Sn.exe (Strong Name Tool)](http://msdn.microsoft.com/en-us/library/k5b5tt23.aspx)
- [Assembly Signing Gotchas](http://geekswithblogs.net/dotnetrodent/archive/2006/10/05/93247.aspx) – Of note are the steps for using **ILMerge** to get around signing the unit test dependent assemblies (like NMock2 and perhaps others)
- [C# and Friend Assemblies Made Easy](http://www.davidarno.org/2008/01/15/c-and-friend-assemblies-made-easy/) by David Arno (with related post “[Friend Assemblies: accessing internal classes externally](http://www.davidarno.org/c-howtos/friend-assemblies-accessing-internal-classes-externally/)”)
- [Using Strong Name Signatures](http://msdn.microsoft.com/en-us/magazine/cc163583.aspx) (2006, but has a nice item on “Test Key Signing”)
- [Strong Names Explained](http://www.codeproject.com/KB/security/StrongNameExplained.aspx)
- [Uses of .pfx and .snk files](http://social.msdn.microsoft.com/forums/en-US/netfxbcl/thread/e9ef6858-e82c-4326-a962-53efbc010a01)
- [Extracting keyset from a password-protected pfx file](http://social.msdn.microsoft.com/forums/en-US/clr/thread/3c53c779-5f93-4c79-8f03-f39567d4f798)
- [Automating signtool.exe](http://consultingblogs.emc.com/stuartpreston/archive/2007/02/19/Automating-signtool.exe-_2800_or-how-to-make-a-PFX-file-from-a-PVK-and-SPC-file_21002900_.aspx)

 



---

