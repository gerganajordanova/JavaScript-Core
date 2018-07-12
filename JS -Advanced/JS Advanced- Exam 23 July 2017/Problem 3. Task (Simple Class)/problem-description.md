# JS Advanced: Exam 23 July 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/699/](https://judge.softuni.bg/Contests/699/).

## Problem 3. Task (Simple Class)

Write a **JavaScript class**** Task **that has a** title **, a** deadline **and a** status**.

| **class** Task {
    _//_ **TODO: implement this class**
} |
| --- |

The class **constructor** should receive two parameters – **title** (string), and **deadline** (JS Date object) and initialize the instance with **status**&quot;Open&quot;. Implement the following features:

- Property **title**
- Property **deadline**
- Property **status** – will be either &quot;Open&quot;, &quot;In Progress&quot; or &quot;Complete&quot; (there is no need to check)
- Property **isOverdue** – holds **true** if the **deadline** has been exceeded (the value is in the **past** ) **and** the task is not completed
- **Static** function **comparator(a, b)** for **sorting** – see bellow for sorting instructions
- Function **toString()** – returns a string representation of a task in the following format:

[{status icon}] {title} {(deadline: {deadline})|(overdue)}

Print all **deadlines** in their **default format** (no additional formatting is required). If a task is **overdue** , print &quot;**(overdue)**&quot; instead of a deadline, and if a task is **complete** , do not print anything after the title. A task&#39;s **status**  **icon** depends on its **status and deadline** :

| **Status** | **Icon** | **UTF Code** |
| --- | --- | --- |
| &quot;Open&quot; | ? | &quot;_\u2731&quot;_ |
| &quot;In Progress&quot; | ? | &quot;_\u219D_ &quot; |
| &quot;Complete&quot; | ? | &quot;_\u2714_&quot; |
| Overdue tasks (except &quot;Complete&quot;) | ? | &quot;_\u26A0_&quot; |

See the examples for more formatting details.

Additionally, each instance must meet some **requirements**. A task should **not**** be created **, if its** deadline **is set to a** past date **– it should** throw an Error **. After creation, if the deadline is** changed **to a past date, an Error should be thrown. To determine whether a date is in the past, compare it with** Date.now()**.

When printing, sorting, or returning **isOverdue** , consider the task&#39;s **status** – &quot;Completed&quot; tasks are **not** overdue.

The **comparator** is function that **takes**** two **task instances as** parameters **and** returns a number **, depending on how they compare. If** a **should sort higher than** b **, return a** negative number **, if they are** equal **, return** zero **, and if** b **should sort higher than** a **, return a** positive number**. Overdue tasks are sorted highest (unless their**status**is &quot;Complete&quot;), &quot;In Progress&quot; tasks come second, &quot;Open&quot; tasks come third and &quot;Complete&quot; tasks sort lowest. If two tasks have the same status or are both overdue, sort them by**deadline** in ascending order (see the examples for details).

### Examples

This is an example how the **Task** class is **intended to be used** :

| Sample code usage |
| --- |
| **let**  **date1** = **new** Date();
**date1**.setDate( **date1**.getDate() + 7); _// Set date 7 days from now_
**let**  **task1** = **new** Task( **&#39;JS Homework&#39;** , **date1** );
**let**  **date2** = **new** Date();
**date2**.setFullYear( **date2**.getFullYear() + 1); _// Set date 1 year from now_
**let**  **task2** = **new** Task( **&#39;Start career&#39;** , **date2** );
**console**.log( **task1** + **&#39;**** \n ****&#39;** + **task2** );
**let**  **date3** = **new** Date();
**date3**.setDate( **date3**.getDate() + 3); _// Set date 3 days from now_
**let**  **task3** = **new** Task( **&#39;football&#39;** , **date3** );
_// Create two tasks with deadline set to current time_
**let**  **task4** = **new** Task( **&#39;Task 4&#39;** , **new** Date());
**let**  **task5** = **new** Task( **&#39;Task 5&#39;** , **new** Date());
**task1**. **status** = **&#39;In Progress&#39;** ;
**task3**. **status** = **&#39;In Progress&#39;** ;
**task5**. **status** = **&quot;Complete&quot;** ;
**let**  **tasks** = [**task1** , **task2** , **task3** , **task4** , **task5**];
_setTimeout_(() =&gt; {
   **tasks**.sort(Task._comparator_);
   **console**.log( **tasks**.join( **&#39;**** \n ****&#39;** ));
}, 1000); _// Sort and print one second later__// should throw an Error_ **let**  **overdueTask** = **new** Task( **&#39;Overdue Task&#39;** , **new** Date( **2005** , **&#39;4&#39;** , **&#39;20&#39;** ));_// should throw an Error_ **task1**. **deadline** = **new** Date( **2005** , **&#39;4&#39;** , **&#39;20&#39;** ); |
| Corresponding output |
| [?] JS Homework (deadline: Wed Jul 26 2017 11:52:23 GMT+0300 (FLE Daylight Time))[?] Start career (deadline: Thu Jul 19 2018 11:52:23 GMT+0300 (FLE Daylight Time))[?] Task 4 (overdue)[?] football (deadline: Sat Jul 22 2017 11:52:23 GMT+0300 (FLE Daylight Time))[?] JS Homework (deadline: Wed Jul 26 2017 11:52:23 GMT+0300 (FLE Daylight Time))[?] Start career (deadline: Thu Jul 19 2018 11:52:23 GMT+0300 (FLE Daylight Time))[?] Task 5 |

Task 5 is overdue, but it&#39;s status is &quot;Complete&quot;. Tasks &quot;football&quot; and &quot;JS Homework&quot; has the same status and are sorted by deadline. Note that date **formatting is not considered** in the Judge and may differ in your solution!

### Constraints

- Your class will be tested with both **valid and invalid deadlines** and should throw and Error for invalid values
- Your class will be tested with **only valid statuses** – &quot;Open&quot;, &quot;In Progress&quot; and &quot;Complete&quot;

### Submission

Submit **only** your class **Task**.