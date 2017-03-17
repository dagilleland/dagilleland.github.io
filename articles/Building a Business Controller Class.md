---
Title: Building a Business Controller Class
Created: 8/12/2013 3:33:40 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Building a Business Controller Class

---

## Building a Business Controller Class


TBA – registering as your controller class; ISearchable, IPortable, IUpgradable; pros/cons of being the sole BLL entry point (large vs. small modules)

 




# Building a Business Controller Class
 

DotNetNuke® modules typically follow a Client-Server architecture in their design. An important part of Client-Server is the separation of the user interface (UI) layer from the business logic layer (BLL). The **Controller** class of a DNN® module falls squarely in the BLL camp. In many simple modules, the Controller is the only class in the BLL. In more complex modules, there may be many Controller classes or the Controller class might sit behind or alongside a façade class.

 

Most of the sample DNN-based Controller classes found on the internet perform these two distinct services.

 
- **CRUD Services** – As the entry point for the back-end of a module, the Controller class exposes methods for accessing and managing the module’s data. Those methods are called by the UI when it needs to Create, Read, Update, or Delete (C.R.U.D.) module data.  - **DNN Integration Services** – The Controller class can also provide the entry point which allows the DotNetNuke framework to connect to your module’s data. By implementing various DNN interfaces – ISearchable, IPortable, IUpgradeable – your module can be accessed by the DotNetNuke framework

 



 



 



 

Implements ISearchable

 

ISearchable is an optional interface (from the DotNetNuke.Entities.Modules) which, when implemented, allows the DotNetNuke framework to perform a



---

