---
Title: Hand-Rolling DAL Code
meta:
  - name: addendum
    content: Republished from News Articles version
  - name: approved
    content: False
  - name: draft
    content: False
---
# Hand-Rolling DAL Code

---
## Hand-Rolling DAL Code


Every once in a while, I find myself needing to hand-code my own DAL (mostly because I play with different kinds of DAL and ORM approaches).



Today, I wanted to generate a lot of code that basically needs the names of the tables and the stored procedures that affect them. Fortunately, I had named all my stored procedures to start with the name of the table that they depend on. All I would need to do is run a query on the sysobjects table, pull the results into EditPlus and generate another set of queries, and then run those queries to get the text names that I'm looking for.



Here's the steps (in detail).


1. Run a query to get the names of the tables I want:      
 1. select name from sysobjects where xtype='U' and name like 'Exam%' order by name
 2. This returned the following result:            
ExamBank\_Choice             
ExamBank\_ExamProfile             
ExamBank\_MultipleChoiceProblem             
ExamBank\_ProblemSet             
ExamBank\_ProfileItemSet             
ExamWriter\_Choice             
ExamWriter\_Exam             
ExamWriter\_MultipleChoiceProblem             
ExamWriter\_ProblemSet
2. Copy this text into EditPlus and run the following search/replace:      
 1. Search:            
^(Exam.+)$
 2. Replace with:            
SELECT 'Table\1'             
SELECT name FROM sysobjects WHERE xtype='P' AND name like '\1%' ORDER BY name             
SELECT '--  --'
 3. This produces the following script.                  

SELECT 'TableExamBank\_Choice'         

        

        

        

SELECT name FROM sysobjects WHERE xtype='P' AND name like 'ExamBank\_Choice%' ORDER BY name         

        

        

SELECT '--  --'
3. Executing the generated sql, I get the following result (shortened), which I can paste into Visual Studio, comment out, and pull my stored procedure names as needed for my code.

 1. '--------------------             
    'TableExamBank\_Choice             
  
    'ExamBank\_Choice\_Add             
    'ExamBank\_Choice\_Delete             
    'ExamBank\_Choice\_Get             
    'ExamBank\_Choice\_GetByMultipleChoiceProblem             
    'ExamBank\_Choice\_List             
    'ExamBank\_Choice\_Update




And that's all. Now, I've got it blogged & I (or you) can refer to it again when needed. For more useful SQL scripts, check out some tips on this [StackOverflow](http://stackoverflow.com/questions/578454/useful-system-stored-procedures-in-sql-server) posting. That's also where I got [this list of short and handy SQL scripts](http://wiki.lessthandot.com/index.php/SQL_Server_Programming_Hacks_-_100%2B_List).





---
