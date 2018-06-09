---
Title: Nullable Types in VB.NET
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Nullable Types in VB.NET

---
## Nullable Types in VB.NET

I ran accross [this article](http://bartdesmet.net/blogs/bart/archive/2007/08/30/visual-basic-9-0-feature-focus-nullable-types.aspx) about nullable types in VB 9.0. Basically, there is now integrated syntax to denote a nullable type. For example:
<font color="#0000ff">Dim<span class="Apple-converted-space">&#160;age <font color="#0000ff">As Integer?
You will then see that the variable **age** now has the property ***.HasValue*** that can be checked to see if the value is null or not. This has great potential for the whole issue about databases storing nulls and co-ordinating it with our OOP programming.



Here's another snippet from the article:


> The use of nullables goes even further by means of three-valued logic and **null propagation** when working with arithmetic operations on nullable value types. Take a look at the following fragment:
> 
> 
> 
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;a <font color="#0000ff">As Integer? = <font color="#0000ff">Nothing  
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;b <font color="#0000ff">As Integer? = 123                 
> > <font color="#0000ff">Dim<span class="Apple-converted-space">&#160;c <font color="#0000ff">As Integer? = a + b
> 
> 
> 
> In here c will get the 'value' Nothing. Thus, whenever you apply arithmetic operations on one or more nullables of which one is null-valued (Nothing), the result will be the null value too.
> 
> 
> 
> Nullable types are especially useful when mapping database schemas to objects, as is done in LINQ to SQL for example. Tomorrow, we'll look at the Ternary Operator 'If' which makes working with these Nullable Types easier in some cases.




---
