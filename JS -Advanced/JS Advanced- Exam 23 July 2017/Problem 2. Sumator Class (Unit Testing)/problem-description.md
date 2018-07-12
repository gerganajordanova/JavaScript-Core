# JS Advanced: Exam 23 July 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/699/](https://judge.softuni.bg/Contests/699/).

## Problem 2. Sumator Class (Unit Testing)

You are given the following **JavaScript class** :

| sumator.js |
| --- |
| **class** Sumator {
  constructor() {
     **this**. **data** = [];
  }
  add(item) {
     **this**. **data**.push(item);
  }
  sumNums() {
     **let** sum = 0;
     **for** ( **let** item **of this**. **data** )
       **if** ( **typeof** (item) === **&#39;number&#39;** )
        sum += item;
     **return** sum;
  }
  removeByFilter(filterFunc) {
     **this**. **data** = **this**. **data**.filter(x =&gt; !filterFunc(x));
  }
  toString() {
     **if** ( **this**. **data**. **length** &gt; 0)
       **return this**. **data**.join( **&quot;, &quot;** );
    **else
      return ****&#39;(empty)&#39;**;
  }
} |

### Functionality

The above code defines a **class** that holds items (of **any** type). An **instance** of the class should support the following operations:

- Contains a property **data** that is initialized to an **empty** array.
- Function**add(item)** – **adds** the passed in **item** (of **any** type) to the **data**.
- Function**sumNums()**– **sums** only the **numbers** from the data and **returns** the sum. If there are **no** numbers stored, the function should return **zero**.
- Function**removeByFilter(filterFunc)**– **filters** the data by a given **function**. All of the items that **match** the criteria should be **removed**.
- Function**toString()**– **returns** a string, containing a list of all items from the data, joined with a **comma** and a **space**. If there are **no** items stored, it should **return** the string **&quot;(empty)&quot;.**

### Examples

This is an example how this code is **intended to be used** :

| Sample code usage |   | Corresponding output |
| --- | --- | --- |
| **let** list = **new** Sumator();console.log(**`list = [**${list}**]`**);
list.add(1);
list.add(2);
list.add( **&quot;three&quot;** );
list.add(4);
console.log(**`list = [**${list}**]`**);
console.log( **&quot;sum = &quot;** + list.sumNums());
list.add( **&quot;5.5&quot;** ); _// not a number!_
list.add(7.7);
console.log(**`list = [**${list}**]`**);
console.log( **&quot;sum = &quot;** + list.sumNums());
list.removeByFilter(x =&gt; x % 2 === 0);
console.log(**`list = [**${list}**]`**);
console.log( **&quot;sum = &quot;** + list.sumNums()); | list = [(empty)]list = [1, 2, three, 4]sum = 7list = [1, 2, three, 4, 5.5, 7.7]sum = 14.7list = [1, three, 5.5, 7.7]sum = 8.7 |

### Your Task

Using **Mocha** and **Chai** write **JS unit tests** to test the entire functionality of the **Sumator** class. Make sure it is correctly defined as a class and instances of it have all the required functionality. You should have at least **7 test cases**. You may use the following code as a template:

| describe( **&quot;**** TODO **** …&quot; **,** function**() {
     **it** ( **&quot;**** TODO … ****&quot;** , **function** () {        _//_ **TODO:** …    });
    _//_ **TODO:** …}); |
| --- |

### Submission

Submit your tests inside a **describe()** statement.