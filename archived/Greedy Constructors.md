---
Title: Greedy Constructors
Created: 3/19/2012 10:22:10 AM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Greedy Constructors
I get asked by my students, "What's a **Greedy Constructor**?". They see mentions of it on the web (like on StackOverflow.com), but it's not "defined" anywhere. Read more about it here.
---

## Greedy Constructors
I get asked by my students, "What's a **Greedy Constructor**?". They see mentions of it on the web (like on StackOverflow.com), but it's not "defined" anywhere.  
   
 Basically, the idea of a "Greedy Constructor" is that it's a constructor that has a parameter for each and every property/field in the class/object. For example, if you have a class called Person that has two properties (one for the name and the other for the age), then a Greedy Constructor will have two parameters - one for the name and another for the age.  
   
 public class Person  
 {  
     public string Name { get; set; }  
     public int Age { get; set; }  
   
     public Person(string name, int age)  
     {  
         Name = name;  
         Age = age;  
     }  
 }  
   
 So, now that I've blogged briefly about "Greedy Constructors", hopefully it will appear in Google (the ultimate help file).

---

