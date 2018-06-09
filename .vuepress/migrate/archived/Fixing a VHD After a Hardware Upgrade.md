---
Title: Fixing a VHD After a Hardware Upgrade
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Fixing a VHD After a Hardware Upgrade

---
## Fixing a VHD After a Hardware Upgrade


So, recently I got so frustrated with the slow speed of my computer that I decided to finally upgrade my hardware. I was running an older motherboard whose limit was 4GB RAM, and I wanted to upgrade to about 16GB.

 

Being impetuous, I ran right ahead with installing my new hardware (motherboard, RAM & CPU) without prepping my system beforehand. Big mistake!

 

I run a bunch of **virtual machines** (VM) as "*boot to VHD*" (also called "*Native Boot*" VHD or "*Bare Metal*" VM) instances of Windows 7 Ultimate - one as my main development environment. I also had a "normal" installation of Win 7 on another partition, and I used this to create & manage my VHDs.

 

* * *

 

Things to mention:

 
- Fixing drivers for the VHDs
- Using various tools     
 - dism - to push drivers onto an OS
 - bcdedit - to manage the boot menu
 -

 



 





---
