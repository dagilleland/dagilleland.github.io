---
Title: Virtual Hard Drives - .vhd and .v01
Created: 6/26/2009 8:42:25 AM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Virtual Hard Drives - .vhd and .v01

---

## Virtual Hard Drives - .vhd and .v01


I was doing a bit of research in the .v01 extension that showed up when I was making a bunch of virtual machines with differencing disks. It turns out that the .v01, .v02, etc. extensions are simply the points at which the virtual hard disk (.vhd) is split on non-NTFS file systems (such as FAT on a USB drive). I ran across [a good blog explaining this](http://www.wirwar.com/blog/2007/10/26/splitting-a-virtual-pc-vhd/). Here's what he wrote:


#### Splitting a Virtual PC VHD


Two weeks ago me and some colleagues attended the [U2U](http://www.u2u.be/) course[*Developing Microsoft SharePoint 2007 Solutions Part 2: Advanced*](http://www.u2u.be/CoursePage.aspx?CODE=USP7D), led by the legendary [Jan "SmartPart" Tielens](http://weblogs.asp.net/jan/). I can recommend this course to everyone interested in SharePoint development. It's filled with interesting topics and it was put together by the also legendary [Patrick Tisseghem](http://blog.u2u.info/DottextWeb/patrick/). During the course we had to practice the stuff we had learned by going through several hands-on labs. For this U2U provided us with a Virtual PC virtual hard disk image (VHD), that contained a complete SharePoint 2007 developer environment (Windows Server 2003, WSS 3.0, MOSS 2007, Visual Studio 2005, SQL Server 2005, Office 2007 etc.).



A couple of days ago, back at our office, me and my colleague Harmjan had some spare time and wanted to practice some of the hands-on labs from that course. Unfortunately the hard drive of my Harmjan's laptop didn't have enough free space to contain the U2U course VHD, which is about 11GB in size. He did however bring his brandnew [iPod](http://www.apple.com/ipodclassic/), which still had plenty of free disk space. So he asked me to copy the VHD to his iPod, so he could run it from there.



To my surprise the file copy operation failed! As it turned out Harmjan's iPod was formatted with the [FAT32](http://en.wikipedia.org/wiki/File_Allocation_Table#FAT32) file system. One of the main limitations of this file system is, that the maximum size of a file you can put on it is 4GB (well, it's 2<sup>32</sup>-1 actually…). That meant the U2U VHD would never fit. Ofcourse I could have reformatted the iPod to [NTFS](http://en.wikipedia.org/wiki/NTFS), but since an iPod's firmware doesn't support this file system it would mean the iPod couldn't be used as an iPod anymore.



So there had to be an alternative approach. I remembered I had once encountered a situation where a VHD was splitted into several smaller chunks. I searched for this behaviour in the Virtual PC help file and found this:



> In some situations, Virtual PC might automatically split a virtual hard disk file into smaller files because of file-size limitations imposed by the host operating system. For example, if the virtual hard disk is stored on a FAT32 volume of the host operating system, it is split into multiple 4GB files.



So this was it! We just had to find a way to split the U2U VHD into several smaller chunks (each less than 4GB). But how to do it? As far as I know Virtual PC has no option to split an existing VHD into smaller chunks. The Virtual Disk wizard only supports this process in the opposite direction, i.e. merging several VHD chunks into one big VHD. I searched the internet, but didn't find a solution. I did encounter several posts of people who had asked this question before. [One](http://blogs.msdn.com/virtual_pc_guy/archive/2007/04/04/unsplitting-a-split-virtual-hard-disk.aspx) of these posts was located on Ben Armstrong's [Virtual PC Guy](http://blogs.msdn.com/virtual_pc_guy/) blog. Unfortunately, from the comments on that post I concluded even he didn't seem to have an answer. I still sent him an e-mail, asking how to do it, though.



While waiting for a reply from Ben I got bold and downloaded a copy of the [official VHD specs](http://www.microsoft.com/technet/virtualserver/downloads/vhdspec.mspx) from Microsoft. Maybe I could hack together a little tool that would do the job. The only information I could find about splitted VHD's was this:



> Versions prior to Microsoft Virtual Server 2005 supported splitting of disk images, if the disk image grew larger than the maximum supported file size on the host file system.
> 
> 
> 
> Some file systems, such as the FAT32 file system, have a 4-GB limit on file size. If the hard disk image expands more than 4 GB, Microsoft Virtual PC 2004 and previous versions will split the hard disk image into another file. The split files do not have any headers or footers, just raw data. The last split file has the footer stored at the end of the file. The first file in the split disk image has an extension of .vhd. The following split files use the .v01, .v02, … filename extension. The split files will be in the same directory as the main hard disk image. The maximum number of split files that can be present is 64.The size of the split file cannot be altered.



There it was! As it turns out a split VHD is nothing more than a normal VHD, chopped up into smaller chunks. No extra headers or footers, just a raw file splitting operation. I couldn't believe it was this simple.



So I quickly downloaded a copy of the popular [HJSplit](http://www.freebyte.com/hjsplit/) file splitting utility and split the U2U VHD into several chunks, using a maximum chunk size of 3.5GB (I could have used a larger chunk size, but I wanted to be on the safe side). I then renamed the chunks, so they matched the pattern required by Virtual PC (i.e. U2U.vhd, U2U.v01, U2U.v02, U2U.v03, …). I copied the chunks to the iPod and created a new Virtual PC instance (.vmc), that used the newly, splitted, VHD. And guess what… It worked! I experimented with several other chunk sizes and it doesn't really seem to matter what chunk size you choose.



I immediately notified Ben Armstrong of my findings and in his reply he said he too was surprised this approach had worked. By now he has already spoken to his colleagues at the Microsoft virtualization team and they confirmed that splitting VHD's this way is safe and he said he planned to blog about this sometime in the near future.




---

