# JS Advanced:  Exam 5 September 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/756/](https://judge.softuni.bg/Contests/756/).

## Problem 1. Sort Table (Simple DOM Interaction)

You are given the following **HTML code** :

| sort-table.html |
| --- |
| &lt;!DOCTYPE **html** &gt;
&lt; **html**  **lang=****&quot;en&quot;**&gt;
&lt; **head** &gt;
  &lt; **meta**  **charset=****&quot;UTF-8&quot;**&gt;
  &lt; **title** &gt;Sort Table&lt;/ **title** &gt;
  &lt; **style** &gt;
     **body** {
       **padding** : 30 **px** ;
    }
     **table** {
       **border** : 1 **px solid black** ;
       **border-collapse** : **collapse** ;
    }
     **th** , **td** {
       **padding** : 5 **px** 20 **px** ;
    }
     **th** {
       **background** : **#cccccc** ;
    }
     **tr** : **nth-child** ( **odd** ) {
       **background** : **#eeeeee** ;
    }
     **tr** : **nth-child** ( **even** ) {
       **background** : **#dddddd** ;
    }
     **a** {
       **color** : **black** ;
       **text-decoration** : **none** ;
    }
     **a** : **hover** {
       **color** : **white** ;
    }
    . **active** {
       **color** : **#99ff99** ;
    }
  &lt;/ **style** &gt;
  &lt; **script**  **src=****&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; **&gt;&lt;/** script**&gt;
&lt;/ **head** &gt;
&lt; **body** &gt;

&lt; **h1** &gt;Sort Table&lt;/ **h1** &gt;
&lt; **table**  **id=****&quot;products&quot;**&gt;
  &lt; **thead** &gt;
  &lt; **tr** &gt;
    &lt; **th** &gt;Name &lt; **a**  **href=****&quot;javascript: **_sort_** (0, false)&quot; **&gt;** &amp;#x25B2; **&lt;/** a **&gt; &lt;** a **** href= ****&quot;javascript:** _sort_**(0, true)&quot;**&gt; **&amp;#x25BC;** &lt;/ **a** &gt;&lt;/ **th** &gt;
    &lt; **th** &gt;Price &lt; **a**  **href=****&quot;javascript: **_sort_** (1, false)&quot; **&gt;** &amp;#x25B2; **&lt;/** a **&gt; &lt;** a **** href= ****&quot;javascript:** _sort_**(1, true)&quot;**&gt; **&amp;#x25BC;** &lt;/ **a** &gt;&lt;/ **th** &gt;
  &lt;/ **tr** &gt;
  &lt;/ **thead** &gt;
  &lt; **tbody** &gt;
  &lt; **tr** &gt;
    &lt; **td** &gt;Potatoes&lt;/ **td** &gt;
    &lt; **td** &gt;0.89&lt;/ **td** &gt;
  &lt;/ **tr** &gt;
  &lt; **tr** &gt;
    &lt; **td** &gt;Tomatoes&lt;/ **td** &gt;
    &lt; **td** &gt;2.30&lt;/ **td** &gt;
  &lt;/ **tr** &gt;
  &lt; **tr** &gt;
    &lt; **td** &gt;Bananas&lt;/ **td** &gt;
    &lt; **td** &gt;1.79&lt;/ **td** &gt;
  &lt;/ **tr** &gt;
  &lt;/ **tbody** &gt;
&lt;/ **table** &gt;

&lt; **script** &gt;
**function** _sort_(colIndex, descending) {
  _//_ **TODO:**
}&lt;/ **script** &gt;

&lt;/ **body** &gt;
&lt;/ **html** &gt; |

### Your Task

**Write the missing JavaScript function sort()**, that **sorts** the table depending on the passed in **arguments**. The table will always have **two** columns, first column is a string ( **name** of a product) and the second a number ( **price** of a product). The first parameter is the **column**** index**which is either 0 or 1 (name column or price column), the second parameter is a**Boolean **variable which** indicates **whether the sorting is** descending **or** ascending**.

- Depending on the pressed button the sorting is either ascending or descending.
- There are four buttons and each column has two.

You should **not** attach **event listeners** to the buttons, they have already been **configured** (see the **HTML skeleton** ).

### Submission

Submit only your **sort** function.
