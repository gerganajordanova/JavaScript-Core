## 1.Exercises: Data Types, Expressions, Statements

Problems for exercises and homework for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni Judge system at [https://judge.softuni.bg/Contests/308](https://judge.softuni.bg/Contests/308).

## 1.Hello, JavaScript!

Write a JS function that can receive a name as input and print a greeting to the console.

The **input** comes as a single string that is the name of the person.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |
| --- | --- |
| Pesho | Hello, Pesho, I am JavaScript! |
| Bill Gates | Hello, Bill Gates, I am JavaScript! |


## 2.Area and Perimeter

Write a JS function that calculates the area and perimeter of a rectangle by given two sides.

The **input** comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB)

The **output** should be printed to the console on two lines.

### Examples

| **Input** | **Output** |
| --- | --- |
| 2 2 | 48 |
| 1 3 | 38 |
| 2.5 3.14 | 7.8511.28 |

### Hints

The multiplication operator will automatically coerce the input variables to numbers, so we can directly find the area of the rectangle by multiplying the two input elements.

The remaining operations are straightforward arithmetic and finally printing the two results (area and perimeter) to the console.

## 3.Distance over Time

Two objects start from point **A** and travel in the same direction at constant speeds **V**

# 1
 and **V**
# 2
 for a period **T**. Write a JS function that calculates the distance between the two object at the end of the period.

The **input** comes as array of numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.

The **output** should be printed to the console. Calculate the distance in meters.

### Examples

| **Input** | **Output** |
| --- | --- |
| [0, 60, 3600] | 60000 |
| [11, 10, 120] | 33.33333333333337 |
| [5, -5, 40] | 111.11111111111111 |

### Hints

Speed, time and distance are related to each other with the following formula:

However, the incoming units need to be equalized first and after the calculation, a final conversion needs to be done to match the required output units. There are 3600 seconds in an hour and 1000 meters in a kilometer. We don&#39;t know which object covered a greater distance, so simply subtracting them from one another may result in a **negative number**. Distance however is absolute (always positive), so we need to get the absolute value of the operation, using the built-in **Math.abs(number)** functions:
 
## 4.Distance in 3D

Write a JS function that calculates the distance between the two points in 3D by given coordinates.

The **input** comes as an array of numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |
| --- | --- |
| [1, 1, 0, 5, 4, 0] | 5 |
| [3.5, 0, 1, 0, 2, -1] | 4.5 |

### Hints

You can find the horizontal and vertical offset between two points by calculating the difference between their respective coordinates. Use Pythagoras&#39; theorem to find the distance.

## 5.Grads to Degrees

Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain the results within the range 0°?x&lt;360°
, so if you arrive at a value like -15°, it needs to be converted to 345° and 420° becomes 60°.

The **input** comes as single number.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 90 |   | 400 | 0 | 850 | 45 | -50 | 315 |

### Hints

You can use the remainder (modulo) operator to get a value that is cyclic – it returns the same result for all input values with offset equal to the second parameter. For instance, **n % 10** will return 3 with values for **n** 3, 13, 23, 243, 1003 and so on.

## 6.Compound Interest

Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.

The **input** comes as an array of numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.

The **output** should be printed to the console, with two decimal places.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| [1500, 4.3, 3, 6] | 1938.84 |   | [100000, 5, 12, 25] | 338635.49 |

## 7.\*Rounding

Write a JS function that rounds numbers to specific precision.

The **input** comes as an array of two numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than **15** it should automatically be reduced to **15**.

The **output** should be printed to the console. Do not print insignificant decimals.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| [3.1415926535897932384626433832795, 2] | 3.14 |   | [10.5, 3] | 10.5 |

## 8.Imperial Units

Imperial units are confusing, but still in use in some backwards countries (Myanmar, Liberia and the United States are the only countries still using them). They are so confusing in fact, that native users struggle to convert between them. Write a JS function that converts from inches to feet and inches. There are 12 inches in a foot. See the example for formatting details.

The **input** comes as a single number.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 36 | 3&#39;-0&quot; | 55 | 4&#39;-7&quot; | 11 | 0&#39;-11&quot; |

## 9.Now Playing

Write a JS function that displays information about the currently playing musical track.

The **input** comes as an array of string elements. The first element is the name of the track, the second is the name of the artist performing and the third is the duration in minutes and seconds.

The **output** should be printed to the console in the following format:

Now Playing: {artist name} - {track name} [{duration}]

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;Number One&#39;, &#39;Nelly&#39;, &#39;4:09&#39;] | Now Playing: Nelly – Number One [4:09] |

## 10.Compose Tag

Write a JS function that composes an HTML image tag.

The **input** comes as an array of string elements. The first element is the location of the file and the second is the alternate text.

The **output** should be printed to the console in the following format:

&lt;img src=&quot;{file location}&quot; alt=&quot;{alternate text}&quot;&gt;

### Examples

| **Input** | **Output** |
| --- | --- |
| [&#39;smiley.gif&#39;, &#39;Smiley Face&#39;] | &lt;img src=&quot;smiley.gif&quot; alt=&quot;Smiley Face&quot;&gt; |

## 11.Binary to Decimal

Write a JS function that reads an 8-bit binary number and converts it to a decimal.

The **input** comes as one string element, representing a binary number.

The **output** should be printed to the console.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 00001001 | 9 |   | 11110000 | 240 |

## 12.Assign Properties

Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total of 6 elements). Assign each value to its respective property of an object and return the object as a result of the function.

The **input** comes as an array of string elements.

The **output** should be returned as a value.

### Examples

| **Input** |
| --- |
| [&#39;name&#39;, &#39;Pesho&#39;, &#39;age&#39;, &#39;23&#39;, &#39;gender&#39;, &#39;male&#39;] |
| **Output** |
| {  name: &#39;Pesho&#39;,  age: &#39;23&#39;,  gender: &#39;male&#39;} |

| **Input** |
| --- |
| [&#39;ssid&#39;, &#39;90127461&#39;, &#39;status&#39;, &#39;admin&#39;, &#39;expires&#39;, &#39;600&#39;] |
| **Output** |
| {  ssid: &#39;90127461&#39;,  status: &#39;admin&#39;,  expires: &#39;600&#39;} |

## 13.\*Last Month

Write a JS function that receives a date as array of strings containing **day, month** and **year** in that order. Your task is to print the last day of previous month (the month **BEFORE** the given date). Check the examples to better understand the problem.

The **input** comes as an array of numbers.

The **output** should be a single number representing the **last day** of the previous month.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| [17, 3, 2002] | 28 |   | [13, 12, 2004] | 30 |

## 2.Conditional Statements and Loops

In this homework, you are supposed to **write program logic** using expressions, conditions and loops in JavaScript. You will practice working with arithmetic operators, **expressions** and calculations, using **conditional statements** ( **if** , **if** - **else** , multiple **if** - **else** - **if** - **else** -… and **switch** - **case** ) and working with **loop statements** (like **for** , **while** , **do** - **while** and **for** - **of** ) and **nested loops** , combined with conditional statements and calculations.

## 14.Biggest of 3 Numbers

Write a JS function that finds the **biggest of 3 numbers**.

The **input** comes as array of 3 numbers.

The **output** is the biggest from the input numbers.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5-27 | 7 |   | 130599 | 130 | 4343.243.1 | 43.2 | 555 | 5 | -10-20-30 | -10 |

## 15.Point in Rectangle

Write a JS function that takes as input 6 numbers **x** , **y** , **xMin** , **xMax** , **yMin** , **yMax** and prints whether the point { **x** , **y** } is **inside** the rectangle or **outside** of it. If the point is at the rectangle **border** , it is considered **inside**.

The **input** comes as array of numbers. Its holds the representations of **x** , **y** , **xMin** , **xMax** , **yMin** , **yMax**. All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that **xMin** &lt; **xMax** and **yMin** &lt; **yMax**.

The **output** is a single line holding &quot; **inside**&quot; or &quot; **outside**&quot;.

### Examples

| **Input** | **Output** | **Figure** |   | **Input** | **Output** | **Figure** |
| --- | --- | --- | --- | --- | --- | --- |
| 8-1212-33 | inside |
 
 | 12.5-1212-33 | outside |

 
## 16.Odd Numbers 1 to N

Write a JS function that reads an integer **n** and prints all **odd numbers** from **1** to **n**.

The **input** comes as a single number **n**. The number **n** will be an integer in the range [1 … 100 000].

The **output** should hold the expected odd numbers, each at a separate line.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | 135 |   | 4 | 13 | 7 | 1357 |


## 17.Triangle of Dollars

Write a JS function that prints a triangle of **n** lines of &quot; **$**&quot; characters like shown in the examples.

The **input** comes as a single number **n** ( **0** &lt; **n** &lt; **100** ).

The **output** consists of **n** text lines like shown below.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | $$$$$$ |   | 2 | $$$ | 4 | $$$$$$$$$$ |

## 18.Movie Prices

Movie ticket **prices** in a big retro-cinema depend on the **movie title** and on the **day of week** as shown below:

| **Movie Title** | **Monday** | **Tuesday** | **Wednesday** | **Thursday** | **Friday** | **Saturday** | **Sunday** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **The Godfather** | 12 | 10 | 15 | 12.50 | 15 | 25 | 30 |
| **Schindler&#39;s List** | 8.50 | 8.50 | 8.50 | 8.50 | 8.50 | 15 | 15 |
| **Casablanca** | 8 | 8 | 8 | 8 | 8 | 10 | 10 |
| **The Wizard of Oz** | 10 | 10 | 10 | 10 | 10 | 15 | 15 |

Write a JS function that **calculate the ticket price** by movie title and day of week.

The **input** comes as array of 2 strings. The first string holds the **movie title**. The second string holds the **day of week**.

The **output** should hold the **ticket price** or &quot; **error**&quot; if the title or day of week is invalid.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| The GodfatherFriday | 15 | casablancasunday | 10 | Schindler&#39;s LISTmonday | 8.50 | SoftUniNineday | error |

### Hints

- Turn all input values to **lowercase** to avoid character casing mistakes.
- **Check the movie title** in **if** - **else** - **if** statement.
- For each movie title check the price in a **switch** - **case**.
- Beware of **invalid** movie titles and invalid days of week. Show &quot; **error**&quot; in such cases.


## 19.Quadratic Equation

Write a JS function to **solve a quadratic equation** by given in standard form as its coefficients: **a** , **b** , **c**. You may learn more about quadratic equations here: [https://www.mathsisfun.com/algebra/quadratic-equation.html](https://www.mathsisfun.com/algebra/quadratic-equation.html).

The **input** comes as 3 numbers **a** , **b** and **c**. The value of **a** will be non-zero.

The **output** depends on the equation:

- It holds two numbers **x**
 **# 1** and **x**
 **# 2** if the equation has two different solutions (roots): **x**
 **# 1** and **x**
 **# 2**.
  - First print the smaller root, then the greater.
- It holds a single number **x** if the equation has only one solution (root): **x**.
- It holds the text &quot; **No**&quot; if the equation has no solutions (no real roots).

### Examples

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| 611-35 | -3.51.66667  | The equation is: 6_x_
# 2
 + 11_x_ - 35 = 0 ?_a_ = 6; _b_ = 11; _c_ = -35The discriminant is: _d_ = _b_
# 2
 - 4\*_a_\*_c_ = 11\*11 - 4\*6\*(-35) = 121 + 840 = 961We have positive discriminant (_d_ &gt; 0), so the equation has two real roots:
- x
# 1
 = (-_b_ + v_d_) / (2\*_a_) = (-11 + 31) / 12 = 20/12 = 5/3 ? 1.66667
- x
# 2
 = (-_b_ - v_d_) / (2\*_a_) = (-11 - 31) / 12 = -42/12 = -7/2 = -3.5
The output consists of two lines:
- -3.5 (the smaller root at the first line)
- 66667 (the bigger root at the second line)
 |
| 1-1236 | 6 | The equation is: _x_
# 2
 - 12_x_ + 36 = 0 ?_a_ = 1; _b_ = -12; _c_ = 36The discriminant is: _d_ = _b_
# 2
 - 4\*_a_\*_c_ = -12\*-12 - 4\*1\*36 = 144 - 144 = 0We have zero discriminant (_d_ = 0), so the equation has only one real root:
- x = -_b_ / (2\*_a_) = 12 / 2 = 6
The output is only one line, holding the number 6. |
| 521 | No | The equation is: 5_x_
# 2
 - 2_x_ + 1 = 0 ?_a_ = 5; _b_ = -2; _c_ = 1The discriminant is: _d_ = _b_
# 2
 - 4\*_a_\*_c_ = -2\*-2 - 4\*5\*1 = 4 - 20 = -16We have negative discriminant (_d_ &lt; 0), so the equation has no real roots.The output is only one line, holding the text &quot;No&quot;. |

### Hints

- Search for &quot; **solving quadratic equation**&quot; in Internet.
- Use **if** -conditions and expressions to calculate the **discriminant** and the equation **roots** (if any).
## 20.Multiplication Table

Write a JS function to print a **math multiplication table** of size **n** , formatted as **HTML table**.

The **input** comes as a single number **n** ( **0** &lt; **n** &lt; **100** ).

The **output** consists of **n+3** text lines like shown below.

### Examples

| **Input** | 5 |
| --- | --- |
| **Output** | &lt;table border=&quot;1&quot;&gt;  &lt; **tr** &gt;&lt;th&gt; **x** &lt;/th&gt;&lt;th&gt; **1** &lt;/th&gt;&lt;th&gt; **2** &lt;/th&gt;&lt;th&gt; **3** &lt;/th&gt;&lt;th&gt; **4** &lt;/th&gt;&lt;th&gt; **5** &lt;/th&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **1** &lt;/th&gt;&lt;td&gt; **1** &lt;/td&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **2** &lt;/th&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **3** &lt;/th&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **9** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **4** &lt;/th&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **16** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;/ **tr** &gt;  &lt; **tr** &gt;&lt;th&gt; **5** &lt;/th&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;td&gt; **25** &lt;/td&gt;&lt;/ **tr** &gt;&lt;/table&gt; |
### Hints

- Create a function **multiplicationTable(n) { … }**. It will return a table of size **n**.
- First, print the &quot; **&lt;table**** border=&#39;1&#39;&gt;**&quot; opening tag.
- Using a simple loop, print the **heading row**.
  - It should hold **&lt;tr&gt;** + &quot; **x**&quot; + the numbers **1** … **n** (all surrounded in **&lt;td&gt;&lt;/td&gt;** ) + **&lt;/tr&gt;**.
- Print the **next**** n ****lines** using nested loops.
  - For each line start with **&lt;tr&gt;** , then append its elements in a loop (all surrounded in **&lt;td&gt;&lt;/td&gt;** ) and finally append **&lt;/tr&gt;**.
- After the loops, at the end, print the &quot; **&lt;/table&gt;**&quot; closing tag.
## 21.Figure of 4 Squares

Write a JS function to print a **figure of 4 squares** of size **n** like shown in the examples below.

The **input** is an integer number **n** in the range [2 … 200].

The **output** consists of **n** lines for **odd**  **n** and **n-1** lines for **even**** n **. Each line holds** 2\*n-1**characters (**+ **or** | **or** space**) as shown in the examples. The figure is fully symmetric (horizontally and vertically).

### Examples

| **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | +--+--++--+--++--+--+ | 5 | +---+---+|   |   |+---+---+|   |   |+---+---+ |   | 6 | +----+----+|    |    |+----+----+|    |    |+----+----+ | 7 | +-----+-----+|     |     ||     |     |+-----+-----+|     |     ||     |     |+-----+-----+ |

### Hints

- Use **nested loops** and **if** -statements. Try to figure out the **logic of construction** of the above figures.

## 22.\*\* Monthly Calendar

Note: this problem is for champions only!

Write a JS function **calendar([day,****month,****year])** that returns a **monthly calendar as HTML**** table**(like in the examples below) by given**day **,** month **and** year **. Weeks start by &quot;** Sun**&quot; (Sunday) and end by &quot;**Sat**&quot; (Saturday).

The **input** comes as array of 3 numbers:

- **day** (1 ? **day** ? 31)
- **month** (1 ? **month** ? 12)
- **year** (1900 ? **year** ? 2100)

The **output** should be an **HTML table** , holding the calendar rows and columns, like in the examples below. Display the **weeks** as table rows: **&lt;tr&gt;…&lt;/tr&gt;**. Display the **days** as table cells: **&lt;td&gt;…&lt;/td&gt;**. Display the days of the previous month with CSS class &quot; **prev-month**&quot;, the days of the next month with CSS class &quot; **next-month**&quot; and the current day with CSS class &quot; **today**&quot;. See the examples below.

### Examples

| **Input** | 24122012 |
| --- | --- |
| **Output** | &lt;table&gt;  &lt;tr&gt;&lt;th&gt; **Sun** &lt;/th&gt;&lt;th&gt; **Mon** &lt;/th&gt;&lt;th&gt; **Tue** &lt;/th&gt;&lt;th&gt; **Wed** &lt;/th&gt;&lt;th&gt; **Thu** &lt;/th&gt;&lt;th&gt; **Fri** &lt;/th&gt;&lt;th&gt; **Sat** &lt;/th&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **25** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **26** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **27** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **28** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **29** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **30** &lt;/td&gt;&lt;td&gt; **1** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;td&gt; **4** &lt;/td&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **7** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **9** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;td&gt; **11** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **13** &lt;/td&gt;&lt;td&gt; **14** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **16** &lt;/td&gt;&lt;td&gt; **17** &lt;/td&gt;&lt;td&gt; **18** &lt;/td&gt;&lt;td&gt; **19** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;td&gt; **21** &lt;/td&gt;&lt;td&gt; **22** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **23** &lt;/td&gt;&lt;td class=&quot; **today**&quot;&gt; **24** &lt;/td&gt;&lt;td&gt; **25** &lt;/td&gt;&lt;td&gt; **26** &lt;/td&gt;&lt;td&gt; **27** &lt;/td&gt;&lt;td&gt; **28** &lt;/td&gt;&lt;td&gt; **29** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **30** &lt;/td&gt;&lt;td&gt; **31** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt;1&lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **2** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **3** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **4** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **5** &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; |

 |

| **Input** | 492016 |
| --- | --- |
| **Output** | &lt;table&gt;  &lt;tr&gt;&lt;th&gt; **Sun** &lt;/th&gt;&lt;th&gt; **Mon** &lt;/th&gt;&lt;th&gt; **Tue** &lt;/th&gt;&lt;th&gt; **Wed** &lt;/th&gt;&lt;th&gt; **Thu** &lt;/th&gt;&lt;th&gt; **Fri** &lt;/th&gt;&lt;th&gt; **Sat** &lt;/th&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **28** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **29** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **30** &lt;/td&gt;&lt;td class=&quot; **prev-month**&quot;&gt; **31** &lt;/td&gt;&lt;td&gt; **1** &lt;/td&gt;&lt;td&gt; **2** &lt;/td&gt;&lt;td&gt; **3** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td class=&quot; **today**&quot;&gt; **4** &lt;/td&gt;&lt;td&gt; **5** &lt;/td&gt;&lt;td&gt; **6** &lt;/td&gt;&lt;td&gt; **7** &lt;/td&gt;&lt;td&gt; **8** &lt;/td&gt;&lt;td&gt; **9** &lt;/td&gt;&lt;td&gt; **10** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **11** &lt;/td&gt;&lt;td&gt; **12** &lt;/td&gt;&lt;td&gt; **13** &lt;/td&gt;&lt;td&gt; **14** &lt;/td&gt;&lt;td&gt; **15** &lt;/td&gt;&lt;td&gt; **16** &lt;/td&gt;&lt;td&gt; **17** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **18** &lt;/td&gt;&lt;td&gt; **19** &lt;/td&gt;&lt;td&gt; **20** &lt;/td&gt;&lt;td&gt; **21** &lt;/td&gt;&lt;td&gt; **22** &lt;/td&gt;&lt;td&gt; **23** &lt;/td&gt;&lt;td&gt; **24** &lt;/td&gt;&lt;/tr&gt;  &lt;tr&gt;&lt;td&gt; **25** &lt;/td&gt;&lt;td&gt; **26** &lt;/td&gt;&lt;td&gt; **27** &lt;/td&gt;&lt;td&gt; **28** &lt;/td&gt;&lt;td&gt; **29** &lt;/td&gt;&lt;td&gt; **30** &lt;/td&gt;&lt;td class=&quot; **next-month**&quot;&gt; **1** &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt; |

### HTML Skeleton

To simplify your work, use the below HTML code and write the missing code in the **calendar()** function:

| **calendar.html** |
| --- |
| &lt;!DOCTYPE html&gt;
&lt; **html** &gt;
&lt; **head** &gt;
    &lt; **title** &gt;Monthly Calendar&lt;/ **title** &gt;
    &lt; **style** &gt;
        . **prev-month** , . **next-month** { color: **#CCC** }
        . **today** { font-weight: **bold** ; background: **#DDD** ; }
        . **title** { background: **#AAAAFF** ; margin: 10 **px 0** ; padding:5 **px** }
         **table** { border: 1 **px solid**  **#CCC** ;}
         **td** { text-align: **center** ; }
         **#calendarCode** { width: 100%; }
    &lt;/ **style** &gt;
    &lt; **script** &gt;
         **function** _calendar_([day, month, year])
        {            _//_ **TODO: return the HTML text holding the calendar table**         }
    &lt;/ **script** &gt;
&lt;/ **head** &gt;

&lt; **body** &gt;
    Day: &lt; **input** id= **&quot;day&quot;** type= **&quot;number&quot;** value= **&quot;4&quot;** /&gt;
    Month: &lt; **input** id= **&quot;month&quot;** type= **&quot;number&quot;** value= **&quot;9&quot;** /&gt;
    Year: &lt; **input** id= **&quot;year&quot;** type= **&quot;number&quot;** value= **&quot;2016&quot;** /&gt;
    &lt; **input** type= **&quot;button&quot;** value=**&quot;Show&quot;
         **onclick=**&quot; ****let**  **calendarHTML** =
            _calendar_([ **document**.getElementById( **&#39;day&#39;** ). **value** ,
                 **document**.getElementById( **&#39;month&#39;** ). **value** ,
                 **document**.getElementById( **&#39;year&#39;** ). **value** ]);
             **document**.getElementById( **&#39;calendar&#39;** ). **innerHTML** = **calendarHTML** ;
             **document**.getElementById( **&#39;calendarCode&#39;** ). **innerText** = **calendarHTML****&quot;** /&gt;
    &lt; **div** class= **&quot;title&quot;** &gt;Calendar:&lt;/ **div** &gt;
    &lt; **div** id= **&quot;calendar&quot;** &gt;Calendar will be shown here&lt;/ **div** &gt;
    &lt; **div** class= **&quot;title&quot;** &gt;HTML:&lt;/ **div** &gt;
    &lt; **textarea** rows= **&quot;12&quot;** id= **&quot;calendarCode&quot;** &gt;&lt;/ **textarea** &gt;
&lt;/ **body** &gt;

&lt;/ **html** &gt; |

### Hints

- Printing a calendar in JS without using an external library is not as simple as the previous problems in this exercise! It may take a few hours or even more to implement it correctly.
- Play with the class [**Date**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) in JavaScript and make some calculations.
- You may also search in Google, e.g. try &quot; **JavaScript calendar code example**&quot;.
- Print the calendar table **headings** + days.
- Print the days from the **previous month** (if any).
  - Find the day of week for the first day of the input date.
  - If it is not Sunday, days from the previous month exist.
  - Go back a few days in the previous month to find the closest Sunday (first week day).
  - Start from it and print the days until the end of the previous month.
- Print the days from the **current month**.
  - Print the days, one after another.
  - Create a new table row after the last week day (Saturday).
- Print the days from the **next month** (if any).
  - Stop when you reach Saturday (the last week day).
