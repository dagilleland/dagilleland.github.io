---
Title: ModuleSettings vs. TabModuleSettings
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# ModuleSettings vs. TabModuleSettings

---
## ModuleSettings vs. TabModuleSettings


A frequent question among those new to DNN module development is how to distinguish the purpose and usage of ModuleSettings and TabModuleSettings. To understand this distinction, it's important to realize that any given module instance can be "shared" on different pages.

 



 



 



 

Alongside the above usages of the ModuleId and TabModuleId are the roles they play in module-specific settings. Module-specific settings are stored in a Hashtable as key-value pairs and are typically treated as distinct from the module's own custom business objects (CBOs). A helpful way to think of module-specific settings is to regard them as customizable constants or metadata that is used to affect the module's behaviour or presentation of the CBO data. These settings can then be used in the View and Edit user controls for the module.



---
