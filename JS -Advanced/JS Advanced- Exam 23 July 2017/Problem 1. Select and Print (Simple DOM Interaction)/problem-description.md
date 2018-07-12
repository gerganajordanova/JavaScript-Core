# JS Advanced: Exam 23 July 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/699/](https://judge.softuni.bg/Contests/699/).

## Problem 1. Select and Print (Simple DOM Interaction)

You are given the following **HTML code** :

| select-print.html |
| --- |
| &lt;!DOCTYPE **html** &gt;
&lt; **html** &gt;
&lt; **head** &gt;
  &lt; **title** &gt;Select and Print&lt;/ **title** &gt;
  &lt; **style** &gt;
     **select** { **width** : 100 **px** }
    . **block** { **display** : **inline-block** ; **vertical-align** : **top** ; **text-align** : **center** }
     **button** { **width** : 60 **px** }
     **#btnRight** { **display** : **block** ; **margin-top** : 20 **px** }
     **#btnLeft** { **display** : **block** ; **margin-top** : 5 **px** }
     **#btnPrint** { **display** : **block** ; **margin-top** : 5 **px** }
  &lt;/ **style** &gt;
  &lt; **script**  **src=****&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; **&gt;&lt;/** script**&gt;
&lt;/ **head** &gt;
&lt; **body** &gt;
&lt; **div**  **class=****&quot;block&quot;**&gt;
  &lt; **div** &gt;Available towns&lt;/ **div** &gt;
  &lt; **select**  **id=****&quot;available-towns&quot; **** size= ****&quot;5&quot;** &gt;
    &lt; **option** &gt;Sofia&lt;/ **option** &gt;
    &lt; **option** &gt;Varna&lt;/ **option** &gt;
    &lt; **option** &gt;Pleven&lt;/ **option** &gt;
  &lt;/ **select** &gt;
&lt;/ **div** &gt;
&lt; **div**  **class=****&quot;block&quot;**&gt;
  &lt; **button**  **id=****&quot;btnRight&quot; **** onclick= ****&quot;** _move_( **&#39;right&#39;** ) **&quot;** &gt; **&amp;rightarrow;** &lt;/ **button** &gt;
  &lt; **button**  **id=****&quot;btnLeft&quot; **** onclick= ****&quot;** _move_( **&#39;left&#39;** ) **&quot;** &gt; **&amp;leftarrow;** &lt;/ **button** &gt;
  &lt; **button**  **id=****&quot;btnPrint&quot; **** onclick= ****&quot;** _move_( **&#39;print&#39;** ) **&quot;** &gt;Print&lt;/ **button** &gt;
&lt;/ **div** &gt;
&lt; **div**  **class=****&quot;block&quot;**&gt;
  &lt; **div** &gt;Selected towns&lt;/ **div** &gt;
  &lt; **select**  **id=****&quot;selected-towns&quot; **** size= ****&quot;5&quot;** &gt;
    &lt; **option** &gt;Plovdiv&lt;/ **option** &gt;
    &lt; **option** &gt;Ruse&lt;/ **option** &gt;
  &lt;/ **select** &gt;
&lt;/ **div** &gt;
&lt; **div**  **id=****&quot;output&quot; **&gt;&lt;/** div**&gt;
&lt; **script** &gt; **  function** _move_(command) {
    _//_ **TODO**   }&lt;/ **script** &gt;
&lt;/ **body** &gt;
&lt;/ **html** &gt; |

### Your Task

**Write the missing JavaScript function move()**. When a **button** is **clicked** , the function is called with a string **parameter** (a command):

- Parameter &quot; **right**&quot; is received when the button is **clicked** – move the selected **town** from **Available**** towns **to** Selected ****towns**
- Parameter &quot; **left**&quot; is received when the button is **clicked** – move the selected **town** from **Selected**** towns **to** Available ****towns**
- Parameter&quot; **print**&quot; – Replace the contents of the **div** element with **ID**&quot; **output**&quot; with a list of thetown names of all towns from **Selected towns** , joined with a **semicolon** and **space** ( **&quot;; &quot;** ).

You should **not** attach **event listeners** to the buttons, they have already been **configured** (see the **HTML skeleton** ).

### Submission

Submit only your **move** function.