---
Title: UserController.GetUsersByProfileProperty() - (DNN 3/4.3.4 +)
Created: 9/6/2009 3:13:54 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# UserController.GetUsersByProfileProperty() - (DNN 3/4.3.4 +)

---

## UserController.GetUsersByProfileProperty() - (DNN 3/4.3.4 +)


In DNN 4.3.4, a new mechanism of handling user profile information was introduced, and with it came some new methods of the UserController class.



One method, called GetUsersByProfileProperty, allows a programmer to search on any profile characteristic being tracked by the portal. A typical use for this method in a custom module is to narrow down to a subset of users in the portal, based on the desired profile property's value. But, in this usage, only three of the six or seven parameter items are of any real interest if you want to get all the matches:


- portalId
- propertyName
- propertyValue



Now, it would be nice if there was an overloaded version of this method that just took these three parameters, but there isn't. So what do you put in the other parameters? Here's what I've found:


- pageIndex - This needs to be set to -1, otherwie you may not get any results at all
- pageSize - Zero (will be set to zero for you if you set pageIndex to -1)
- totalRecords - Zero (will be set to zero for you if you set pageIndex to -1)



Well, this is just another tidbit in learning about DNN's inner workings. Bye!





---

