One of the hard parts of writing unit tests and acceptance tests is trying to understand what it is you are testing for. Part of what makes that difficult is that once we are writing actual code for the tests, we easily get our heads into the "code" and our sense of the reason for the test gets blurred in the technical details. Our tests can be too broad, to brittle, out of focus, etc.

It can be helpful to take a step back and think of the bigger-picture reason for the test. At the highest level, the test could exist to ensure either a **business requirement** or a **technical requirement**.

  - **Business Requirement** - code needs to meet a business requirement in order to meet the needs of the business
  - **Technical Requirement** - code needs to meet a technical requirement in order to function correctly (eg: objects of class X must be serializable)

