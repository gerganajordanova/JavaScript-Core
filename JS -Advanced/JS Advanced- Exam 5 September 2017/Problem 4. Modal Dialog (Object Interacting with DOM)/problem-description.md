# JS Advanced:Exam 5 September 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/756/](https://judge.softuni.bg/Contests/756/).

## Problem 4. Modal Dialog (Object Interacting with DOM)

Write a JS **class** that generates and controls a **modal dialog** box. It contains a text message, OK and Cancel buttons and optionally input fields and overlays the rest of the website content. When the user clicks OK, a callback is executed with the values of all input fields. _See the examples for more details._

The **constructor** of your class needs to take **two** arguments – text message (string) and callback (function). The callback is a function that must be executed when the user clicks OK. Additionally, the class should contain the following functionality:

- Function **addInput(label, name, type)** – takes three string arguments and adds an input field to the dialog, with name and type attributes as specified
- Function **render()**– **generates the HTML content** and **appends** it to the end of the **document&#39;s body**

The dialog has **two buttons** – OK and Cancel. When OK is clicked, the **callback** of the dialog is executed and the dialog is closed ( **removed** from the page). If the dialog had any input fields, their **values** are collected in an **object** with their **names as keys** , and the object is used as a **parameter to the callback**. If Cancel is clicked, the dialog is closed (removed from the page), without any side effect.

A dialog box should have the following HTML structure:

| Dialog |
| --- |
| &lt; **div**  **class=****&quot;overlay&quot;**&gt;
  &lt; **div**  **class=****&quot;dialog&quot; **&gt;    &lt;** p **&gt;Dialog, containing message text and input field.&lt;/** p**&gt;
    &lt; **label** &gt;Name&lt;/ **label** &gt;
    &lt; **input**  **name=****&quot;name&quot; **** type= ****&quot;text&quot;** &gt;
    &lt; **button** &gt;OK&lt;/ **button** &gt;
    &lt; **button** &gt;Cancel&lt;/ **button** &gt;
  &lt;/ **div** &gt;
&lt;/ **div** &gt;                        |

The paragraph contains the **message** , that is entered trough the constructor. The label and input field have been added using the **addInput()** function. If two dialogs are created, they should **not interfere** with each other&#39;s functionality – closing one does not affect the other.

You can use the following HTML skeleton to test your functionality:

| index.html |
| --- |
| &lt;!DOCTYPE **html** &gt;
&lt; **html**  **lang=****&quot;en&quot;**&gt;
&lt; **head** &gt;
  &lt; **meta**  **charset=****&quot;UTF-8&quot;**&gt;
  &lt; **title** &gt;Modal Overlay&lt;/ **title** &gt;
  &lt; **style** &gt;
    . **overlay** {
       **position** : **fixed** ;
       **left** : 0;
       **right** : 0;
       **top** : 0;
       **bottom** : 0;
       **background** : **rgba** (0, 0, 0, 0.5);
       **text-align** : **center** ;
    }

    . **dialog** {
       **border** : 1 **px solid black** ;
       **background** : **#eeeeee** ;
       **display** : **inline-block** ;
       **margin** : 40 **vh auto** ;
       **padding** : 1 **em** 3 **em** ;
    }
  &lt;/ **style** &gt;
  &lt; **script**  **src=****&quot;https://code.jquery.com/jquery-3.1.1.min.js&quot; **&gt;&lt;/** script**&gt;
&lt;/ **head** &gt;
&lt; **body** &gt;

&lt; **h1** &gt;Modal Dialog Overlay&lt;/ **h1** &gt;
&lt; **button**  **onclick=****&quot;**_spawnConfirm_()**&quot; **&gt;Create OK/Cancel&lt;/** button**&gt;
&lt; **button**  **onclick=****&quot;**_spawnInput_()**&quot; **&gt;Create Input&lt;/** button**&gt;
&lt; **textarea**  **style=****&quot; ****resize** : **none** ; **display** : **block** ; **width** : 300 **px** ; **height** : 200 **px&quot;**  **disabled id=****&quot;output&quot; **&gt;&lt;/** textarea**&gt;

&lt; **script**  **src=****&quot;solution.js&quot; **&gt;&lt;/** script**&gt;
&lt; **script** &gt;
   **function** _spawnConfirm_() {
    _log_( **&#39;Spawning Confirm dialog&#39;** );
    let _callback_ = (params) =&gt; {
      _log_( **&#39;Clicked OK&#39;** );
    };
    let dialog = **new** Dialog( **&quot;Test Dialog, containing OK and Cancel buttons.&quot;** , _callback_);
    dialog.render();
  }

   **function** _spawnInput_() {
    _log_( **&#39;Spawning Input dialog&#39;** );
    let _callback_ = (params) =&gt; {
      _log_( **`Params: {** ${Object.keys(params).map(k =&gt; k + **&#39;: &#39;** + params[k]).join( **&#39;, &#39;** )} **}`** );
    };
    let dialog = **new** Dialog( **&quot;Dialog, containing message text and input field.&quot;** , _callback_);
    dialog.addInput( **&#39;Name&#39;** , **&#39;name&#39;** , **&#39;text&#39;** );
    dialog.render();
  }

   **function** _log_(text) {
     **document**.getElementById( **&#39;output&#39;** ). **textContent** += text + **&#39;**** \n ****&#39;** ;
  }
&lt;/ **script** &gt;
&lt;/ **body** &gt;
&lt;/ **html** &gt; |

The sample page contains two buttons and a script, that will create two different dialogs that should look like the examples, if your code is correct.

### Examples

If we create a dialog and add two inputs to it, one with name &quot;name&quot; and type &quot;text&quot;, and another with name &quot;password&quot; and type &quot;password&quot;, when OK is clicked, the callback must be executed with the following object as parameter:

{

  name: &quot;pesho&quot;,

  password: &quot;123456&quot;

}

If there are not inputs, the callback must be executed with an empty object as parameter.
