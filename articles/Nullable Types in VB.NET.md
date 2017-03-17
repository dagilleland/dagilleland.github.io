---
Title: Nullable Types in VB.NET
Created: 6/26/2009 2:49:18 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Nullable Types in VB.NET

---

## Nullable Types in VB.NET
<script type="text/javascript" src="/DesktopModules/itcMetaPost/js/ca0c21fbdc85f6a1597417732d450607.ashx?hs=1"></script>
I ran accross [this article](http://bartdesmet.net/blogs/bart/archive/2007/08/30/visual-basic-9-0-feature-focus-nullable-types.aspx) about nullable types in VB 9.0. Basically, there is now integrated syntax to denote a nullable type. For example:
<font color="#0000ff">Dim<span class="Apple-converted-space">&#160;</span></font>age <font color="#0000ff">As Integer</font>?
You will then see that the variable **age** now has the property ***.HasValue*** that can be checked to see if the value is null or not. This has great potential for the whole issue about databases storing nulls and co-ordinating it with our OOP programming.



Here's another snippet from the article:


> The use of nullables goes even further by means of three-valued logic and **null propagation** when working with arithmetic operations on nullable value types. Take a look at the following fragment:
> 
> 
> 
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;</span></font>a <font color="#0000ff">As Integer</font>? = <font color="#0000ff">Nothing</font>  
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;</span></font>b <font color="#0000ff">As Integer</font>? = 123                 
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;</span></font>c <font color="#0000ff">As Integer</font>? = a + b
> 
> 
> 
> In here c will get the 'value' Nothing. Thus, whenever you apply arithmetic operations on one or more nullables of which one is null-valued (Nothing), the result will be the null value too.
> 
> 
> 
> Nullable types are especially useful when mapping database schemas to objects, as is done in LINQ to SQL for example. Tomorrow, we'll look at the Ternary Operator 'If' which makes working with these Nullable Types easier in some cases.

<script src="/DesktopModules/itcMetaPost/js/m.js" type="text/javascript"></script>


---

