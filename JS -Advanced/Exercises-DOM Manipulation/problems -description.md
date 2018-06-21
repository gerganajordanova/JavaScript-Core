# 1.Exercises: DOM Manipulation

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/641/](https://judge.softuni.bg/Contests/641/) .

## 1.Subtraction

A HTML page holds **two text fields**&quot; **firstNumber**&quot; and &quot; **secondNumber**&quot;. Write a JS function to **subtract** the values from these text fields and display the result in a **div** named &quot; **result**&quot;.

## 2.Fill Dropdown

Your task is to take values from **input** fields with **id**&#39;s **&quot;newItemText&quot;** and **&quot;newItemValue&quot;** and create and append an **&lt;option&gt;** to the &lt;select&gt; with **id****&quot;menu&quot;.**

### Hints

- Your function should take the values of **newItemText** and **newItemValue**. After that you should create a new **option** element and set it&#39;s **textContent** and it&#39;s **value** to the newly taken ones.
- Once you have done all of that you should **append** the newly created **option** as a **child** to the select item with id **&quot;menu&quot;.**
- Finally you should **clear** the value of the two **input** fields.

## 3.Accordion

An **html** file is given and your task is to show **more** /show **less** information by clicking a **button** (it is not an actual button, but a **span** that has an **onlick** event attached to it). When **More** link is clicked, it **reveals** the contents of a **hidden** div and change the text of the link to **Less**. When the same link is clicked **again** (now reading Less), **hide** the div and **change** the text of the link back. Link action should be **toggleable** (you should be able to click the button infinite amount of times).

### Hints

- To **change** the text content of a button you could use **getElementsByClassName**. Which however returns a **collection** and we need only **one** element from it so the correct way is to **use** it like this: **getElementsByClassName** (&#39;button&#39;)[0] and it will return the needed span element.
- After that we should change the **display style** of the div with id &quot; **extra**&quot;. If the display style is &quot; **none**&quot; we should **change** it to &quot; **block**&quot; and the **opposite**.
- Alongside all of this we should **change** the text content of the **button** to Less/More.

## 4.Sections

You will receive an array of strings. For each string, create a **div** with a **paragraph** with the **string** in it. Each paragraph is initially **hidden (display:none)**. Add a **click** event listener to **each div** that **displays** the hidden paragraph. Finally you should **append** all divs to the element with id &quot; **content**&quot;.

## 5.Notification

Write a JS function that receives a string **message** and **displays** it inside a div with id &quot; **notification**&quot; for 2 seconds. The div starts **hidden** and when the function is called, **reveal** it. After 2 seconds, **hide** the div. In the example document, a notification is shown when you click the button.


## 6.Time Converter

Create a JS app to convert between diferent time units. Your task is to add a **click** event listener to **all** buttons. When a button is **clicked** , read the **corresponding** input field and **convert** the value to the **three other** units of time and **display** it in the input fields.

## 7.\* Distance Converter

Your task is to convert from **one** distance unit to **another** by adding a **click** event listener to a button. When it is clicked, **read** the value in the input field, **get** the selected option from the input and output units drop downs and **calculate** and **display** the converted value in the disabled output field.

Multiply the incoming distance by the following conversion rates to convert to meters. Divide to convert from meters to the required output unit.

1 km = 1000 m

1 m = 1 m

1 cm = 0.01 m

1 mm = 0.001 m

1 mi = 1609.34 m

1 yrd = 0.9144 m

1 ft = 0.3048 m

1 in = 0.0254 m

