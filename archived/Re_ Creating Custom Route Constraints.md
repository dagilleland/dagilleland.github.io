---
Title: Re: Creating Custom Route Constraints
Created: 6/27/2009 8:59:33 AM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Re: Creating Custom Route Constraints
Stephen Walther writes an article on creating custom route constraints for web apps. One particularly interesting constraint is to only allow a certain URL to run if it is run from the local machine (which can be great for an admin to check something that others shouldn't be able to). Here's an excerpt:    Creating a Local Constraint    You also can create a custom constraint that prevents a request from matching a URL unless the request is made from the local machine. This type of constraint can be useful for restricting access to website administrative pages.     ...    The LocalConstraint simply checks whether the current request is a local request by taking advantage of the Request.IsLocal property. This property returns the value True when the host is either equal to localhost or 127.0.0.1.    He goes further by offering suggestions on how to write unit tests for these constraints, illustrating how to fake the HttpContext (look in the download code for this one).
---

## Re: Creating Custom Route Constraints


Stephen Walther writes [an article on creating custom route constraints for web apps](http://weblogs.asp.net/stephenwalther/archive/2008/08/06/asp-net-mvc-tip-30-create-custom-route-constraints.aspx). One particularly interesting constraint is to only allow a certain URL to run if it is run from the local machine (which can be great for an admin to check something that others shouldn't be able to). Here's an excerpt:



> ###### Creating a Local Constraint



> You also can create a custom constraint that prevents a request from matching a URL unless the request is made from the local machine. This type of constraint can be useful for restricting access to website administrative pages.



> ...



> The LocalConstraint simply checks whether the current request is a local request by taking advantage of the Request.IsLocal property. This property returns the value True when the host is either equal to **localhost** or **127.0.0.1**.



He goes further by offering suggestions on how to write unit tests for these constraints, illustrating how to fake the HttpContext (look in the download code for this one).





---

