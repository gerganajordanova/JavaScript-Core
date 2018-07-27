# Exercises: jQuery, DOM and Events

## 1.Increment Counter

You are tasked with creating a piece of **HTML** dynamically using JavaScript and **appending** it to a given element using a passed in **selector**.

Your function will receive a **string** value representing a **selector** (for example &quot; **#wrapper**&quot; or &quot; **.root**&quot;), all elements created should be appended to the **selector**.

The HTML you create should contain 4 elements:

- **&lt;textarea&gt;** with **class=&quot;counter&quot;** , **value=&quot;0&quot;** and the **disabled** attribute.
- **&lt;button&gt;** with **class=&quot;btn&quot;** , **id=&quot;incrementBtn&quot;** and text &quot; **Increment**&quot;.
- **&lt;button&gt;** with **class=&quot;btn&quot;** , **id=&quot;addBtn&quot;** and text &quot; **Add**&quot;.
- Unordered list **&lt;ul&gt;** with **class=&quot;results&quot;**.

When the **[Increment]** is clicked the value of the **textarea** should go up by **one** (if it was 0 it should become 1 e.t.c.). When the **[Add]** is clicked a new list item ( **&lt;li&gt;** ) with text equal to the current value of the textarea should be added to the unordered list.

## 2.Timer

You will be given an **HTML** file, containing the markup of a **timer** with spans for **seconds** , **minutes** and **hours** and buttons to **[Start]** and **[Pause]** the timer. Your task is to create a JavaScript application that **starts** the timer whenever the **[Start]** button is pressed and **pauses** it when the **[Pause]** button is pressed.

### Constraints

- The initial value of the timer must always be **00:00:00**

## 3.Book Generator

Create a function that accepts a **selector** , a **title** , an **author** and an **ISBN** and **uses** them to **create** the **HTML code** for a **book** and **inserts it** into the **selector**.

Your function will receive **4 parameters** - a **string value** representing a **selector** (for example **&quot;**** #wrapper ****&quot;** or &quot; **.root**&quot;), a **string value** representing the **title** of the book, a **string value** representing the **author** of the book and a **number** representing the **ISBN** of the book. **After** the book is **created** it should be **attached** to the passed in **selector**.

The **number** in the **Id** of the containing **div** should be **incremented** by **one**** for each successive book created**(i.e. first book should have**id = &quot;book1&quot; **, second** id = &quot;book2&quot;**and so on…). The**title **,** author **and** ISBN **should be** paragraphs **with a** class **equal to their** respective role **-** class=&quot;title&quot; **for the** title paragraph **,** class=&quot;author&quot; **for the** author paragraph **and** class=&quot;isbn&quot; **for the** ISBN paragraph **. A book should also contain** 2 buttons **–** [Select] **and** [Deselect] **, when the** [Select] **button is pressed the border of the** div **element should be set to &quot;** 2px solid blue **&quot;. When the** [Deselect] **button is pressed it should be set to &quot;** none**&quot;.

## 4.Form Validation

You are given the task to write **validation** for the fields of a simple form.

The validations should be as follows:

- The **username** needs to be between **3** and **20** symbols **inclusively** and only **letters** and **numbers** are allowed.
- The **password** and **confirm-password** must be between **5** and **15**** inclusively **symbols and only** word characters**are allowed (**letters **,** numbers **and** \_**).
- The **inputs** of the **password** and **confirm-password** field **must match**.
- The **email** field must contain the &quot; **@**&quot; symbol and **at least one**&quot; **.**&quot;( **dot** ) after it.

If the &quot; **Is company?**&quot; checkbox is **checked** , the **CompanyInfo** fieldset should become **visible** and the **Company Number** field must also be **validated** , if it isn&#39;t checked the **Company** fieldset should have the style **&quot;display: none;&quot;** and the **value** of the **Company Number** field shouldn&#39;t matter.

- The **Company Number** field must be a number between **1000** and **9999**.

Every field with an **incorrect** value when the **[Submit]** button is **pressed** should have the following style applied **border-color: red;** , alternatively if it&#39;s correct it should have style **border: none;**. If there are **required fields** with an incorrect value when the **[Submit]** button is pressed, the **div** with **id=&quot;valid&quot;** should become **hidden** ( **&quot;**** display: none;&quot;**),**alternatively **if all fields are correct the** div **should become** visible**.

## 5.DOM Search

Write a JS function that **generates a form** for managing a list of items and inserts it in an HTML document by given **selector** (e.g. by **div id** ).

Your function will receive **two arguments** – the **first** is a **selector** to an HTML element, the **second** is a **Boolean value** , indicating whether the search function is **case-sensitive**. If set to **true** , searches are case sensitive, if set to **false** , or not set, searches ignore casing.

The user must be able to:

- Add a new item with specified string content.
- Delete an existing element.
- Search for all elements containing a given string.

Each of the controls must be in a separate **div**. Place the add controls inside a **div** with a class **add-controls** , and provide a **label** with the text &quot; **Enter text:**&quot;, an **empty input field** and an **anchor** with the class **button** applied to it. The **anchor** acts as an **add button** and when the user presses it, a **new item must be added to the list** , using the string in the **input field** as its **name**.

Place the search controls inside a **div** with a class **search-controls** , and provide a **label** with the text &quot; **Search:**&quot; and an empty input field. When the user starts typing, the list of items should display **only the items** that **contain** the given string. The search **is case-sensitive only if specified with an argument**. When nothing is entered, the list will contain all elements.

Place the result controls inside a **div** with a class **result-controls** and in a list of class **items-list**. Each element has the class **list-item**. When the list is filtered with a search, all elements that need to be left out must be applied a style of **display:none;**. Don&#39;t forget to **remove the style** after the search string is **removed**!

Every element is composed of an **anchor** with inner text &quot; **X**&quot; functioning as a **delete button** and its name wrapped in a **&lt;strong&gt;** tag. The anchor has the class **button**. When the button is clicked, the element is **deleted** from the list.


## 6.\*Calendar

Write a program that **generates** a monthly calendar by given date. It should be formatted as an **HTML table** with a **caption** for the month and year and headings for each column for the days of the week. The current date must be **highlighted** with a **different style** than the rest of the table cells.

Your script needs to insert the generated calendar in the **#content**** div**. The resulting table should have the following format:

| HTML |
| --- |
| &lt; **table** &gt;
    &lt; **caption** &gt;January 2017&lt;/ **caption** &gt; _&lt;!-- Table caption --&gt;
    _ &lt; **tbody** &gt;
    &lt; **tr** &gt;
        &lt; **th** &gt;Mon&lt;/ **th** &gt; _&lt;!-- Heading --&gt;
        _ …
    &lt;/ **tr** &gt;
    &lt; **tr** &gt;
        &lt; **td** &gt;&lt;/ **td** &gt; _&lt;!-- Empty element --&gt;
        _ …
        &lt; **td** &gt;1&lt;/ **td** &gt;
    &lt;/ **tr** &gt;
    &lt; **tr** &gt;
        …
        &lt; **td**  **class=****&quot;today&quot; **&gt;15&lt;/** td**&gt; _&lt;!-- Current date is highlighted --&gt;
    _ &lt;/ **tr** &gt;
    …
    &lt;/ **tbody** &gt;
&lt;/ **table** &gt; |

Your function will receive an array of three numbers representing a date as follows: **[day, month, year]**

### Requirements

- Current **month** and **year** are listed in a **&lt;caption&gt;** element with the month displayed as a **full capitalized name** and the **year** with **all digits** ;
- The **first row** contains **headings** for the **days**** of the week **,** shortened **to** 3 letters **:** Mon **,** Tue **,** Wed**, etc.;
- Each week is a complete row – **pad** the week with **empty cells** (empty string as cell content) if the month **doesn&#39;t start on a Monday** or **end on a Sunday** ;
- The table should contain **only as many rows as needed** – some months may need 6 weeks, others just 5.

### Hints

- JavaScript has a built-in **Date** object, which can be used to construct a date with arguments and then extract the current day of the week using the **getDay()** method. You can familiarize yourself with the object properties here: [http://www.w3schools.com/jsref/jsref\_obj\_date.asp](http://www.w3schools.com/jsref/jsref_obj_date.asp)
- Try setting the day of the **month** to **0** and see what the result will be.
- Notice that the passed in arguments in the example **[15, 1, 2017]** correspond to **15**
# th
 **January 2017**

## 7.\*\*Wiki Parser

You are tasked by Wikipedia to write a JS program that parses text according to their internal markup in the browser. Your program will receive a **selector** to a **paragraph** of text and has to scan it for special symbol combinations that denote specific style for the text that is enclosed in them. For instance, text surrounded by double single quotes (&#39;&#39; **text**&#39;&#39;) must be displayed in italics. Look bellow for a full list of features.

Your function will receive a selector to an HTML element.

### Markup

The following symbols must be recognized and parsed:

- **&#39;&#39;text&#39;&#39;** becomes **&lt;i&gt;text&lt;/i&gt;** (two single quotes)
- **&#39;&#39;&#39;text&#39;&#39;&#39;** becomes **&lt;b&gt;text&lt;/b&gt;** (three single quotes)
- **=text=** , **==text==** and **===text===** become **&lt;h1&gt;text&lt;/h1&gt;** , **&lt;h2&gt;text&lt;/h2&gt;** and **&lt;h3&gt;text&lt;/h3&gt;**
- **[[link]]** becomes an anchor to **/wiki/link** with the same text, **&lt;a href=&quot;/wiki/link&quot;&gt;link&lt;/a&gt;**
- **[[link|Text]]** becomes an anchor to **/wiki/link** with the argument after the pipe as text, **&lt;a href=&quot;/wiki/link&quot;&gt;Text&lt;/a&gt;**

Note all resulting hyperlinks are relative to **/wiki**

### Constraints

- There will be no overlapping markup, i.e. there won&#39;t be bold text inside a heading or a link
- All hyperlinks will only consist of valid characters