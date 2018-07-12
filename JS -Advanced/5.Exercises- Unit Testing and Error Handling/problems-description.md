# Exercises: Unit Testing and Error Handling

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/335/](https://judge.softuni.bg/Contests/335/).

## 1.Request Validator

Write a JS function that validates an HTTP request object. The object has the properties **method** , **uri** , **version** and **message**. Your function must receive the object as a parameter and verify that each property meets the following requirements:

- **method** – can be **GET** , **POST** , **DELETE** or **CONNECT**
- **uri** – must be a valid resource address or an asterisk ( **\*** ); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI **cannot** be an empty string
- **version** – can be **HTTP/0.9** , **HTTP/1.0** , **HTTP/1.1** or **HTTP/2.0** supplied as a string
- **message** – may contain **any number** of non-special characters; special characters are **&lt;** , **&gt;** , **\** , **&amp;** , **&#39;** , **&quot;**

If a request is valid, return it unchanged. If any part fails the check, throw an **Error** with message &quot; **Invalid request header: Invalid {Method/URI/Version/Message}**&quot;. Replace the part in curly braces with the relevant word. Note that some of the **properties may be missing** , in which case the request is invalid. Check the properties in the order in which they are listed here. If more than one property is invalid, throw an error for the first encountered.

### Input / Output

Your function will receive an object as a parameter. As output, **return** the same object or throw an **Error** as described above.

### Examples

| Sample Input | Output |
| --- | --- |
| validateRequest({  method: &#39;GET&#39;,  uri: &#39;svn.public.catalog&#39;,  version: &#39;HTTP/1.1&#39;,  message: &#39;&#39;}); | {  method: &#39;GET&#39;,  uri: &#39;svn.public.catalog&#39;,  version: &#39;HTTP/1.1&#39;,  message: &#39;&#39;} |
| Sample Input | Output |
| validateRequest({  method: &#39;OPTIONS&#39;,  uri: &#39;git.master&#39;,  version: &#39;HTTP/1.1&#39;,  message: &#39;-recursive&#39;}); | Invalid request header: Invalid Method |

| Sample Input | Output |
| --- | --- |
| validateRequest({  method: &#39;POST&#39;,  uri: &#39;home.bash&#39;,  message: &#39;rm -rf /\*&#39;}); | Invalid request header: Invalid Version |

### Hints

Since validating some of the fields may require the use of **RegExp** , you can check your expressions using the following samples:

| URI |
| --- |
| Valid | Invalid |
| svn.public.cataloggit.masterversion1.0for..of.babelrcc | %appdata%apt-get home$define apps&quot;documents&quot; |

- Note that the URI **cannot** be an empty string.

| Message |
| --- |
| Valid | Invalid |
| -recursiverm -rf /\*hello worldhttps://svn.myservice.com/downloads/%root% | &lt;script&gt;alert(&quot;xss vulnerable&quot;)&lt;/script&gt;\r\n&amp;copy;&quot;value&quot;&#39;; DROP TABLE |

- Note that the message **may** be an empty string, but the property must still be present.

## 2.Even or Odd

You need to write **unit**** tests **for a function** isOddOrEven **that checks whether a passed in** string **has** even **or** odd ****length**. The function has the following functionality:

- **isOddOrEven(string)** - A function that accepts a string and determines if the string has **even** or **odd**** length**.
  - If the passed parameter is **not a string** return **undefined**.
  - If the parameter is a **string** - return either **&quot;even&quot;** or **&quot;odd&quot;** based on the string&#39;s length.

### JS Code

To ease you in the process, you are provided with an implementation which meets all of the specification requirements for the **isOddOrEven** function:

| isOdd.js |
| --- |
| **function** _isOddOrEven_(string) {
     **if** ( **typeof** (string) !== **&#39;string&#39;** ) {
         **return**  **undefined** ;
    }
     **if** (string. **length** % 2 === 0) {
         **return**  **&quot;even&quot;** ;
    }

     **return**  **&quot;odd&quot;** ;
} |

Submit in the judge your code containing Mocha tests testing the above functionality.

Your tests will be supplied a function named &quot; **isOddOrEven**&quot; which contains the above mentioned logic, all test cases you write should reference this function. You can check the example at the beginning of this document to grasp the syntax.

### Hints

We can clearly see there are 3 outcomes of the function:

- Returning **undefined**.
- Returning **&quot;even&quot;**.
- Returning **&quot;odd&quot;**.

## 3.Char Lookup

You are tasked with writing **unit tests** for a simplistic function that **retrieves a character** (a string containing only 1 symbol in JS) at a given **index** from a passed in **string**.

You are supplied a function named **lookupChar** , which should have the following functionality:

- **lookupChar(string, index)**- A function that accepts a string - the **string** in which we&#39;ll search and a number - the **index** of the char we want to lookup:
  - If the first parameter is not a string or the second parameter is not an integer - return **undefined**.
  - If both parameters are of the correct type, but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return the text **&quot;Incorrect index&quot;**.
  - If both parameters have correct types and values - return the **character at the specified index** in the string.

### JS Code

To ease you in the process, you are provided with an implementation which meets all of the specification requirements for the **lookupChar** function:

| lookupChar.js |
| --- |
| **function** _lookupChar_(string, index) {
     **if** ( **typeof** (string) !== **&#39;string&#39;** || !Number.isInteger(index)) {
         **return**  **undefined** ;
    }
     **if** (string. **length** &lt;= index || index &lt; 0) {
         **return**  **&quot;Incorrect index&quot;** ;
    }

     **return** string.charAt(index);
} |

Your tests will be supplied a function named **&quot;**** lookupChar ****&quot;** which contains the above mentioned logic, all test cases you write should reference this function. Submit in the judge your code containing Mocha tests testing the above functionality.


## 4.Math Enforcer

Your task is to test a variable named **mathEnforcer** , which represents an object that should have the following functionality:

- **addFive(num)** - A function that accepts a single parameter:
  - If the parameter is not a number, the funtion should return **undefined**.
  - If the parameter is a number, **add 5** to it, and return the result.
- **subtractTen(num)** - A function that accepts a single parameter:
  - If the parameter is not a number, the function should return   **undefined**.
  - If the parameter is a number, **subtract 10** from it, and return the result.
- **sum(num1, num2)** - A function that should accepts two parameters:
  - If any of the 2 parameters is not a number, the function should return **undefined**.
  - If both parameters are numbers, the function should **return their**** sum**.

### JS Code

To ease you in the process, you are provided with an implementation which meets all of the specification requirements for the **mathEnforcer** object:

| mathEnforcer.js |
| --- |
| **let** mathEnforcer = {
    addFive: **function** (num) {
         **if** ( **typeof** (num) !== **&#39;number&#39;** ) {
             **return**  **undefined** ;
        }
         **return** num + 5;
    },
    subtractTen: **function** (num) {
         **if** ( **typeof** (num) !== **&#39;number&#39;** ) {
             **return**  **undefined** ;
        }
         **return** num - 10;
    },
    sum: **function** (num1, num2) {
         **if** ( **typeof** (num1) !== **&#39;number&#39;** || **typeof** (num2) !== **&#39;number&#39;** ) {
             **return**  **undefined** ;
        }
         **return** num1 + num2;
    }
}; |

The methods should function correctly for **positive** , **negative** and **floating point** numbers. In case of **floating point** numbers the result should be considered correct if it is **within 0.01** of the correct value. Submit in the judge your code containing Mocha tests testing the above functionality.


### Hints

- Test how the program behaves when passing in **negative** values.
- Test the program with floating point numbers (use Chai&#39;s **closeTo** method to compare floating point numbers).

## 5.Shared Object

You are tasked to test a **sharedObject** responsible for keeping a valid state between a JS object and two HTML textboxes. The two textboxes will always have **id** s **name** for the **name textbox** and **income** for the **income textbox** , and will always start with **empty strings** as values. The sharedObject should have the following functionality:

- **name** - a property holding a string, starts with value **null** by default.
- **income** - a property holding a number, starts with value **null** by default.
- **changeName(name)** - In case the passed in parameter is an **empty string** - **no changes should be made** , alternatively the sharedObject&#39;s **name** property andthe **name textbox&#39;s value** should be setto the passed in parameter.
- **changeIncome(income)** - In case the passed in parameter is **not a positive integer**  - **no changes should be made** , alternatively the sharedObject&#39;s **income** property andthe **income textbox&#39;s value** should be set to the passed in parameter.
- **updateName()** - In case the name textbox&#39;s value is an **empty string** - **no changes should be made** , alternatively the **name** property of the sharedObject should be set to the **value** of the **name textbox**.
- **updateIncome()** - In case the income textbox&#39;s value **cannot be parsed** to a **positive integer** - **no changes should be made** , alternatively the **income** property of the sharedObject should be set to the **value** of the **income textbox**.

### HTML and JS Code

To ease you in the process, you are provided with an HTML template for testing:

| shared-object.html |
| --- |
| &lt;!DOCTYPE **html** &gt;
&lt; **html**  **lang=****&quot;en&quot;**&gt;
&lt; **head** &gt;
    &lt; **meta**  **charset=****&quot;UTF-8&quot;**&gt;
    &lt; **title** &gt;Shared Object&lt;/ **title** &gt;
&lt;/ **head** &gt;
&lt; **body** &gt;
    &lt; **div**  **id=****&quot;wrapper&quot;**&gt;
        &lt; **input**  **type=****&quot;text&quot; **** id= ****&quot;name&quot;** &gt;
        &lt; **input**  **type=****&quot;text&quot; **** id= ****&quot;income&quot;** &gt;
    &lt;/ **div** &gt;
&lt;/ **body** &gt;
&lt;/ **html** &gt; |

And an implementation which meets all of the specification requirements for the **sharedObject** :

| shared-object.js |
| --- |
| **let**  **sharedObject** = {
     **name** : **null** ,
     **income** : **null** ,
    changeName: **function** (name) {
         **if** (name. **length** === 0) {
             **return** ;
        }
         **this**. **name** = name;
         **let** newName = **$** ( **&#39;#name&#39;** );
        newName.val( **this**. **name** );
    },
    changeIncome: **function** (income) {
         **if** (!Number.isInteger(income) || income &lt;= 0) {
             **return** ;
        }
         **this**. **income** = income;
         **let** newIncome = **$** ( **&#39;#income&#39;** );
        newIncome.val( **this**. **income** );
    },
    updateName: **function** () {
         **let** newName = **$** ( **&#39;#name&#39;** ).val();
         **if** (newName. **length** === 0) {
             **return** ;
        }
         **this**. **name** = newName;
    },
    updateIncome: **function** () {
         **let** newIncome = **$** ( **&#39;#income&#39;** ).val();
         **if** (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) &lt;= 0) {
             **return** ;
        }
         **this**. **income** = Number(newIncome);
    }
}; |

Your tests will be supplied a variable named **&quot;sharedObject&quot;** which contains the above mentioned logic, all test cases you write should reference this variable. Submit in the judge your code containing Mocha tests testing the above functionality.

### Hints

- Test that the initial state of the **sharedObject** meets the specification (i.e. **name** and **income** start as **null** ).
- Test the functions with preexisting values to ensure that the old values are kept.

## 6.ArmageDOM

Write Mocha tests to check the functionality of the following JS code:

| armagedom.js |
| --- |
| **function** _nuke_(selector1, selector2) {
     **if** (selector1 === selector2) **return** ;
    $(selector1).filter(selector2).remove();
} |

Your tests will be supplied a function named **&#39;nuke&#39;**. It needs to meet the following:

- Operates inside an HTML document
- Takes two **string** arguments, each argument is a jQuery selector
- Upon execution, deletes **all** nodes that match **both** selectors
- Does nothing if **either** selector is invalid or omitted
- Does nothing if the two selectors are the same

When testing, note that if the selector is an ID, jQuery will always return only the first element that is a match, as opposed to a collection of all elements with that ID. You may use the following HTML for testing:

| armagedom.html |
| --- |
| &lt;!DOCTYPE **html** &gt;
&lt; **html**  **lang=****&quot;en&quot;**&gt;
&lt; **head** &gt;
    &lt; **meta**  **charset=****&quot;UTF-8&quot;**&gt;
    &lt; **title** &gt;ArmageDOM&lt;/ **title** &gt;
&lt;/ **head** &gt;
&lt; **body** &gt;
&lt; **div**  **id=****&quot;target&quot;**&gt;
    &lt; **div**  **class=****&quot;nested target&quot;**&gt;
        &lt; **p** &gt;This is some text&lt;/ **p** &gt;
    &lt;/ **div** &gt;
    &lt; **div**  **class=****&quot;target&quot;**&gt;
        &lt; **p** &gt;Empty div&lt;/ **p** &gt;
    &lt;/ **div** &gt;
    &lt; **div**  **class=****&quot;inside&quot;**&gt;
        &lt; **span**  **class=****&quot;nested&quot; **&gt;Some more text&lt;/** span**&gt;
        &lt; **span**  **class=****&quot;target&quot; **&gt;Some more text&lt;/** span**&gt;
    &lt;/ **div** &gt;
&lt;/ **div** &gt;
&lt;/ **body** &gt;
&lt;/ **html** &gt; |

### Hints

You need to manually include the HTML you want to test with in a **beforeEach()** Mocha statement.