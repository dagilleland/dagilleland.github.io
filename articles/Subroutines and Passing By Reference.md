---
Title: Subroutines and Passing By Reference
Created: 6/18/2009 11:28:33 PM
Addendum: Republished from News Articles version
Approved: False
Draft: False
---
# Subroutines and Passing By Reference


Upon successful completion of this lesson the student should be able to:


- Describe the purpose of subroutines.
- Identify areas where subroutines can be used.
- Develop the logic for a subroutine.
- Implement a call to a subroutine from a calling program.
- Identify the difference between passing by value and passing by reference.
- Pass multiple values to a subroutine and have them changed.


---

## Subroutines and Passing By Reference

## Subroutines and Passing by Reference

### Introduction


The three principles for effective system development are:


- Validity.
- Maintainability.
- Efficiency.



The concept of employing the use of subroutines applies mainly to maintainability and efficiency. In general, subroutines are stand-alone, re-usable segments of program logic that reduce redundancy in a solution.







Upon successful completion of this lesson the student should be able to:


- Describe the purpose of subroutines.
- Identify areas where subroutines can be used.
- Develop the logic for a subroutine.
- Implement a call to a subroutine from a calling program.
- Identify the difference between passing by value and passing by reference.
- Pass multiple values to a subroutine and have them changed.


* * *

### Defining a Subroutine


Much like functions, subroutines are stand-alone, re-usable processes or logic whose functionality can be called upon from one or many places within a solution. Also like functions, subroutines have the capability of accepting one or more values as parameters.



There is a one key difference between subroutines and functions. Subroutines by default DO NOT evaluate to or return a single value as functions do. Even though they do not automatically return a value, subroutines do have both a purpose and a place in effective systems development.



As we have seen in the previous lesson with regards to built-in functions, people also have built-in subroutines whose functionality they call several times a day. An example of a subroutine that people are programmed with can be seen if we take into consideration doors.



Everyone knows how to open a door. Everyone opens doors several times each day. In an early lesson the example of a student going to school was used. Think about how many doors the student must open during this simple activity.


1. Open Bedroom Door.
2. Open Bathroom Door.
3. Open Shower Door.
4. Open Garage Door.
5. Open Car Door.
6. Open School Building Door.
7. Open Locker Door.
8. Open Classroom Door.



That's a lot of doors! Each of the doors that we encounter have some differences, such as the manner in which they are opened (sliding, twisting knob and pushing, pulling etc.), but they all share a common trait in that they are doors that must be opened. Typically if a student comes to a closed door they will try to open it. Some may argue that opening doors should be a function that returns a Boolean true or false as to whether the door was opened successfully or not. This is a valid point and can be explored, but for the purposes of this lesson we will limit the domain of possible doors to those that can be opened.


### Flowcharting a Subroutine


When a person is faced with a closed door, they usually do not have to analyze, learn and develop new ways to open it. They just call a subroutine they have stored in their minds that contains instructions on how to open a door. If we were to create a flowchart for a subroutine that would solve the problem of opening a door, it might look something like this:



[OpeningDoors.gif"]



Notice the format of the above flowchart. The beginning Terminal symbol does not contain the word Start or Begin, but rather it is labeled OpenDoor. As with variable naming conventions, the name of a subroutine should be such that it describes the process or processes that it executes. The ending Terminal symbol contains the word Return, which essentially means, "Return to the point from which the subroutine was called."


### Calling Subroutines


Now that we have explored the general principle of what a subroutine is and what a flowchart for a subroutine looks like, we can look at employing the use of a subroutine in a program.



Think about the student going to school example again and let's explore what the flowchart for that may look like without using a subroutine.






[GoingToSchool.gif]






As you can see, the above flowchart is in real danger of becoming very tedious. The above solution is not efficient in terms of time to develop and definitely is not very maintainable. Just ask yourself the question "What happens if I encounter a new type of door to open?" You would need to identify the process required to open that type of door and add that logical path to each of the above case structures. A daunting task to say the least!



This is where using subroutines can really save time and effort. The same flowchart as above follows except this version employs multiple calls to a subroutine called OpenDoor.






[GoingToSchoolWithSubs.gif]






Notice the format of the above flowchart. When calling OpenDoor we use the Rounded Rectangle with a line across the top. This symbol is used to illustrate that there will be logic executing, but within a different place (i.e. outside of the Calling Flowchart logic.)



Following the execution of the logic above, we begin, as always, with the Terminal symbol labeled Start. The execution of the logic proceeds in sequence until we reach the first Rounded Rectangle. The flow of logic then jumps out of the Calling Flowchart and into the beginning Terminal symbol of our subroutine labeled "OpenDoor". The logic in the subroutine now executes from top to bottom as in all of the flowcharting examples thus far until it reaches the subroutine's ending Terminal symbol labeled "Return". The logic then returns back to the main driver to the point from which it was called and the logic within the calling program continues.



As you can see, using subroutines can simplify your task, while at the same time making your logic more efficient and MUCH more maintainable. With the above version of the solution, if we did come across a new type of door to open, only the flowchart for the OpenDoor subroutine would need to change.






### Passing Values by Reference


Before we can explore the topic of passing a value by reference, it is important to have a thorough understanding of what happens when information is passed by value.


#### An In-Depth Look at Passing By Value


Recall that the previous lesson introduced the concept of sending information to a logical unit of work such as a function. The means by which the information was sent to the functions is known as **Passing by Value**.



When passing by value, a *COPY* of the actual value is sent to the function. That function, upon beginning its execution, which is also known as **Coming Into Scope**, creates new variables. The names of the new variables and their corresponding data types are listed in the Annotation symbol of the function's opening Terminal symbol.



Once the new variable has been created, the value passed from the Calling Flowchart is copied into the memory allocated for the new variable. At this point there really are two variables in memory that have the same value. The first is in the calling flowchart. A copy of the value is then sent into the second variable, which is the one created when the function began executing.



Once the value in the first variable is copied into the second variable, the link between the two variables is broken. They are now completely separate because they exist in different **scopes**. One is a variable that can only be used and manipulated within the context or scope of the Calling Flowchart; the other is a variable that can only be used and manipulated within the context or scope of the function or subroutine. A change to one variable will never affect the other.



For example, let's say that the Calling Flowchart passes the value contained in a variable called Count, which is equal to 5, to a variable called TheCount declared in the Annotation symbol of some given subroutine.



Here is a table of how this all works together:

 <center>   <table border="1" cellspacing="0" cellpadding="10" width="90%"><tbody>       <tr>         <th align="left"><u>Step #</u></th>          <th><u>Description</u></th>          <th><u>Calling Flowchart Variable</u></th>          <th><u>Subroutine Variable</u></th>       </tr>        <tr><!--Begin Step 1-->         <td align="center">1</td>          <td width="200">           <p>The logic in the Calling Flowchart is executing and is about to call the subroutine.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <p>SCOPE = NONE</p>         </td>       </tr>        <tr><!--Begin Step 2-->         <td align="center">2</td>          <td width="200">           <p>When the logic begins to execute for the subroutine, memory is set aside for the variable declared in the Annotation symbol of the subroutine. The subroutine variable contains no value at this point.</p>         </td>          <td align="center">           <p>&#160;</p>            <table width="70"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="70"><tbody>               <tr>                 <th valign="top" align="center">Name :</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">&#160;</td>               </tr>             </tbody></table>            <p>SCOPE = The subroutine</p>         </td>       </tr>        <tr><!--Begin Step 3-->         <td align="center">3</td>          <td width="200">           <p>In the next step, the value contained in the variable Count from the Calling Flowchart is copied into the subroutine variable TheCount.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="150"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center"><font color="#ff0000">5</font></td>               </tr>             </tbody></table>            <p>SCOPE = The subroutine</p>         </td>       </tr>        <tr><!--Begin Step 4-->         <td align="center">4</td>          <td width="200">           <p>Now that the value has been successfully copied into the new variable, the link between the variables is broken.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="150"><tbody>               <tr>                 <th align="center">Name</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = The subroutine</p>         </td>       </tr>        <tr><!--Begin Step 5-->         <td align="center">5</td>          <td width="200">           <p>Logic in the subroutine can execute, changing the value stored in the variable TheCount without affecting the value in the original variable Count. The value in the variable TheCount is tripled.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="150"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">TheCount :</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center"><font color="#ff0000">15</font></td>               </tr>             </tbody></table>            <p>SCOPE = The subroutine</p>         </td>       </tr>        <tr><!--Begin Step 6-->         <td align="center">6</td>          <td width="200">           <p>Finally, the logic in the subroutine stops executing, a value is returned to the Calling Flowchart, and the variables in the subroutine fall Out Of Scope.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <p>SCOPE = NONE</p>         </td>       </tr>     </tbody></table> </center>

As you can see in the above logic, no matter what happens to the variable TheCount in the subroutine, the value of the variable Count in the Calling Flowchart never changes.



**Note:** Notice that the variables in the Calling Flowchart and in the subroutine above have different names. This is NOT a requirement. They are only named differently to aid in the explanation. The two variables could, in fact, have the same name.














#### Passing by Reference


There is another method of passing a value to a logical unit of work that is available to programmers. It is known as **Passing by Reference**. When passing by reference you do not pass a copy of a variable to a function or subroutine, you in fact pass a reference to the **ORIGINAL** variable. When passing by reference, both the Calling Flowchart and the function/subroutine have access to the same variable. The implication of this is that the scope of the variable is now shared. Therefore a change in the value contained in a variable during the execution of a subroutine or function will change the value of that variable in the Calling Flowchart.



Here is a table that uses the same example as above except this one illustrates the effects of passing a variable by reference:

 <center>   <table border="1" cellspacing="0" cellpadding="10" width="90%"><tbody>       <tr>         <th align="left"><u>Step #</u></th>          <th><u>Description</u></th>          <th><u>Calling Flowchart Variable</u></th>          <th><u>Subroutine Variable</u></th>       </tr>        <tr><!--Begin Step 1-->         <td align="center">1</td>          <td width="200">           <p>The logic in the Calling Flowchart is executing and is about to call the subroutine.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <p>SCOPE = NONE</p>         </td>       </tr>        <tr><!--Begin Step 2-->         <td align="center">2</td>          <td width="200">           <p>When the logic of the subroutine begins to execute, memory is set aside to store the <em>address</em> of the original variable. The subroutine variable contains no value at this point.</p>         </td>          <td align="center">           <p>&#160;</p>            <table width="70"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="70"><tbody>               <tr>                 <th valign="top" align="center">Name :</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">&#160;</td>               </tr>             </tbody></table>            <p>SCOPE = BOTH</p>         </td>       </tr>        <tr><!--Begin Step 3-->         <td align="center">3</td>          <td width="200">           <p>The next step is that the value contained in the variable Count from the Calling Flowchart is <strong>directly accessed</strong> by the subroutine variable TheCount. The variables are effectively linked together.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">5</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <table width="150"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center"><font color="#ff0000">The address of Count</font></td>               </tr>                <tr>                 <th align="center">Reference Value :</th>                  <td align="center"><font color="#ff0000">5</font></td>               </tr>             </tbody></table>            <p>SCOPE = BOTH</p>         </td>       </tr>        <tr><!--Begin Step 4-->         <td align="center">4</td>          <td width="200">           <p>Any logic in the function that changes the value stored in the variable TheCount directly affects the value in the original variable Count. If the value in the variable TheCount is tripled, the value of the original variable Count is also tripled.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center"><font color="#ff0000">15</font></td>               </tr>             </tbody></table>            <p>SCOPE = BOTH</p>         </td>          <td align="center">           <table width="150"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">TheCount</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">The address of Count</td>               </tr>                <tr>                 <th align="center">Reference Value :</th>                  <td align="center"><font color="#ff0000">15</font></td>               </tr>             </tbody></table>            <p>SCOPE = BOTH</p>         </td>       </tr>        <tr><!--Begin Step 5-->         <td align="center">5</td>          <td width="200">           <p>Finally, the logic in the function stops executing, a value is returned to the Calling Flowchart, and the variables in the function fall Out Of Scope.</p>         </td>          <td align="center">           <table width="10"><tbody>               <tr>                 <th align="center">Name :</th>                  <td align="center">Count</td>               </tr>                <tr>                 <th align="center">Value :</th>                  <td align="center">15</td>               </tr>             </tbody></table>            <p>SCOPE = Calling Flowchart</p>         </td>          <td align="center">           <p>SCOPE = NONE</p>         </td>       </tr>     </tbody></table> </center>

With the ability to pass by reference it can sometimes be confusing when deciding when to use a subroutine and when to use a function. In reality, they can both be used interchangeably in most cases, dependant upon the requirements of the system. In practice, however, it has been noted that there does seem to be a "Guideline" that most developers follow when developing solutions that employ subroutines and/or functions.



There are three basic categories that logical units of work fall into, and based upon the category, the choice is made to go with a subroutine or a function.


1. If a logical unit of work is required to calculate and return ONE piece of information, typically this is accomplished through the use of a **function**. This, however, is (as always) subject to the requirements of the user and the system.
2. If a logical unit of work is simply required to execute without returning any values, developers will tend to use a **subroutine**.
3. If a logical unit of work is required to return multiple values, developers tend to use a **subroutine** and pass each of the values that need to be sent to the subroutine by reference.


#### Flowcharting Passing by Reference


Drawing a flowchart that uses passing by reference is very similar to drawing a flowchart that uses passing by value. In fact, the two are so similar that there are only two ways that the techniques can be told apart.






1. A subroutine that has a variable passed by reference looks exactly like a function that has a variable passed by value with the key difference being the closing Terminal symbol. If the closing Terminal symbol is annotated with a variable that has the EXACT same name and data type as a variable that was passed in, that particular variable was passed by reference.          An example of this is the following subroutine that has the same variable passed in as returned. In this case, the subroutine accepts a number and returns ten times that number.



> <center>[subroutine1.gif]</center>
2. The second way that a subroutine that has information passed by reference can be identified is if the logical unit of work is returning MORE than one value in its closing Terminal symbol. These are very easy to identify.          An example of this technique is illustrated below. This particular subroutine prompts the user for three pieces of information before returning all three back to the Calling Flowchart from which the subroutine was called.



> <center>[$subroutine2.gif]</center>






### Putting it All Together


Aside from being an excellent way to avoid the redundancy of certain portions of a flowcharted solution, subroutines and functions can also be used to modularize your solution. Modularization refers to the process of breaking up your flowchart into **Logical Units of Work**. Instead of having a monstrous flowchart that spans multiple pages where it is difficult to see where some structures begin and others end, the entire solution can be modularized into logical segments, with each respective segment performing some outlined functionality.



When trying to come up with a solution to a problem like this it is important to have a "Mental Road Map" that you can follow. The steps you can use to develop this map are essentially the same no matter what you are trying to solve.


1. Identify the problem you wish to solve.
2. Identify any independent, logical units of work that may exist within the solution.
3. For each logical unit of work, identify whether it should be functions or subroutines by:      
 - Identifying whether the logical unit of work needs information passed to it.
 - Identifying whether the logical unit of work will be returning a single piece of information.
 - Identifying whether the logical unit of work will be returning multiple pieces of information.
4. Create a Main Flowchart that will act as a framework for the solution.
5. Create the flowcharts for the subroutines and functions you outlined in Step #2 and 3.
6. When your solution has been completed, look over your flowcharts to see if they can be further modularized.
7. Test your solution.


## Conclusions


Subroutines are an efficient and maintainable way to flowchart repetitious logic. Passing values by reference allows you to change the value that a variable contains outside of the scope in which the variable was defined.

 <center>   <blockquote><strong>Remember:</strong>       <br>      <br>      <table border="1" cellspacing="0" cellpadding="5"><tbody>         <tr>           <th>When Passing by Value</th>            <td>A COPY of the value in the variable is passed.</td>         </tr>          <tr>           <th>When Passing by Reference</th>            <td>The address of the variable is passed which allows access to the ORIGINAL value.</td>         </tr>       </tbody></table>   </blockquote> </center>
<script src="/DesktopModules/itcMetaPost/js/mg.js" type="text/javascript"></script>


---

