# JS Advanced: Exam 23 July 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/699/](https://judge.softuni.bg/Contests/699/).

## Problem 4. Contacts Builder (Object Interacting with DOM)

Write a JS **class** that generates a **contact** info box. You will receive a person&#39;s first name, last name, phone and email. Compose the markup for the contact box, attach all the needed events and when a **render** function is called, **append** the newly created element to the document.

A contact info box is **composed** of first name, last name, phone, email (all strings) and a property which indicates if the contact is online or not. Clicking a button on the box **toggles** the visibility of the person&#39;s contact information (phone and email). _See the examples for more details._

The **constructor** of your class needs to take **four** string arguments - first name, last name, phone, email. Additionally, the class should also contain the following functionality:

- Property **online** – Boolean value, initially set to **false**
- Function **render(id)**– takes one string argument, **generates the HTML element** and **appends** it to the element with ID equal to the argument

When the value of the **online** property is changed, the corresponding HTML should be updated – if it&#39;s set to **true** , add the class &quot; **online**&quot; to the div with class &quot; **title**&quot; (containing the name). If it&#39;s **false** , remove the class &quot; **online**&quot;.

A contact info box should have the following HTML structure:

| Contact |
| --- |
| &lt; **article** &gt;    &lt; **div**  **class=****&quot;title&quot; **&gt;{firstName lastName}&lt;** button **&gt;** &amp;#8505; **&lt;/** button **&gt;&lt;/** div **&gt;    &lt;** div **** class= ****&quot;info&quot;** &gt;        &lt; **span** &gt; **&amp;phone;** {phone}&lt;/ **span** &gt;        &lt; **span** &gt; **&amp;#9993;** {email}&lt;/ **span** &gt;    &lt;/ **div** &gt;&lt;/ **article** &gt; |

When the box is initialliy creted, the div with class &quot; **info**&quot; must be **hidden**. Clicking the button **toggles its visibility**.

You can use the following HTML skeleton to test your functionality:

| contacts.html |
| --- |
| &lt;!DOCTYPE **html** &gt;&lt; **html** &gt;&lt; **head** &gt;  &lt; **meta**  **charset=****&quot;UTF-8&quot; **&gt;  &lt;** title **&gt;Contacts Builder&lt;/** title **&gt;  &lt;** style **&gt;   ** article **{** background **:** #EEE **;** padding **: 1** px **;** width **: 250** px **;** margin **: 1** px **; }    .** title **{** background **:** #DDD **;** padding **: 5** px **;** font-weight **:** bold **; }    .** title button **{** float **:** right **}    .** info **{** margin **: 5** px **; }    .** info span **{** display **:** block **; }    .** online **{** background **:** #9E9 **; }  &lt;/** style **&gt;  &lt;** script **** src= ****&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot;** &gt;&lt;/ **script** &gt;&lt;/ **head** &gt;&lt; **body** &gt;&lt; **div**  **id=****&quot;main&quot; **&gt;&lt;/** div **&gt;&lt;/** body **&gt;&lt;/** html**&gt; |

