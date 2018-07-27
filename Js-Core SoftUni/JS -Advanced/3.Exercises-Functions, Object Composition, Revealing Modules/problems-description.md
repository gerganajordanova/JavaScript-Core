# Exercises: Functions, Object Composition, Revealing Modules

Problems for exercises and homework for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/299/](https://judge.softuni.bg/Contests/299/).

## 1.Sort Array

Write a function that **sorts an array** with **numeric** values in **ascending** or **descending** order, depending on an **argument** that&#39;s passed to it.

### Input

You will receive a **numeric array** and a **string** as arguments to the first function in your code. If the second argument is **asc** , the array should be sorted in **ascending order** (smallest values first). If it is **desc** , then the array is sorted in **descending order** (largest first).

### Output

The output should be the **return value** of your function and it is the **sorted array**.

### Examples

| Sample Input | Output |
| --- | --- |
| solve([14, 7, 17, 6, 8], &#39;asc&#39;); | [6, 7, 8, 14, 17] |
| solve([14, 7, 17, 6, 8], &#39;desc&#39;); | [17, 14, 8, 7, 6] |

## 2.Argument Info

Write a function that displays **information** about the **arguments** which are passed to it – **type** and **value** – and a **summary** about the number of each type.

### Input

You will receive a series of arguments **passed** to your function.

### Output

Log to the **console** the **type** and **value** of each argument passed in the following format:

{argument type}: {argument value}

Place **each** argument description on a **new line**. At the end print a **tally** with counts for each type in **descending order** , each on a **new line** in format **{type} = {count}** If two types have the **same count** , use **order of appearance**. Don&#39;t print anything for types that do not appear in the list of arguments.

### Examples

| Sample Input |
| --- |
| result(&#39;cat&#39;, 42, function () { console.log(&#39;Hello world!&#39;); }); |
| Output |
| string: catnumber: 42function: function () { console.log(&#39;Hello world!&#39;); }string = 1number = 1function = 1 |

## 3.Functional Sum

Write a function that **adds** a number passed to it to an **internal sum** and returns **itself** with its internal sum set to the **new value** , so it can be **chained** in a functional manner.

### Example

| Sample Input | Sample Output |
| --- | --- |
| console.log(add(1)); | 1 |
| console.log(add(1)(6)(-3)); | 4 |

### Input

Your function needs to take one **numeric**** argument**.

### Output

Your function needs to **return** itself with updated context.

## 4.Personal BMI

A wellness clinic has contacted you with an offer – they want you to write for them a program that composes **patient charts** and performs some preliminary evaluation of their condition. The data comes in the form of **several arguments** , describing a person – their **name** , **age** , **weight** in kilograms and **height** in centimeters. Your program must compose this information into an **object** and **return** it for further processing.

The patient chart object must contain the following properties:

- **name**
- **personalInfo** , which is an object holding their **age** , **weight** and **height** as properties
- **BMI** – body mass index. You can find information about how to calculate it here: [https://en.wikipedia.org/wiki/Body\_mass\_index](https://en.wikipedia.org/wiki/Body_mass_index)
- **status**

The status is one of the following:

- **underweight** , for BMI less than 18.5;
- **normal** , for BMI less than 25;
- **overweight** , for BMI less than 30;
- **obese** , for BMI 30 or more;

Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional property called recommendation and set it to &quot; **admission required**&quot;.

### Input

Your function needs to take four arguments – **name** , **age** , **weight** and **height**

### Output

Your function needs to **return** an **object with properties** as described earlier. All numeric values should be **rounded** to the nearest whole number. All fields should be named **exactly as described** , their order is not important. Look at the sample output for more information.

| Sample Input | Sample Output |
| --- | --- |
| &quot;Peter&quot;, 29, 75, 182 | { name: &#39;Peter&#39;,  personalInfo: {    age: 29,    weight: 75,    height: 182  }  BMI: 23  status: &#39;normal&#39; } |
| &quot;Honey Boo Boo&quot;, 9, 57, 137 | { name: &#39;Honey Boo Boo&#39;, personalInfo: { age: 9, weight: 57, height: 137 }, BMI: 30, status: &#39;obese&#39;, recommendation: &#39;admission required&#39; } |

## 5.Vector Math

Write several functions for preforming **calculations** with **vectors** in 2D space .
The math-savvy may notice that the given cross product formula results in a scalar, instead of a vector – we&#39;re actually only measuring the length of the resulting vector, since cross product is not possible in 2D, it will exist purely in the z-dimension. If you don&#39;t know what this all means, ignore this paragraph, it&#39;s irrelevant to the solution.

### Input

Each separate function in your namespace will be tested with individual values. It must expect **one or two**** arguments **, as described above, and** return **a value. Vectors will be 2D** arrays **with format** [x, y]**.

### Output

Your program needs to **return** an object, containing **all functions** described above. Each individual function must **return** a value, as required. Don&#39;t round any values.

| Sample Input | Output | Explanation |
| --- | --- | --- |
| solution.add([1, 1], [1, 0]); | [2, 1] | [1 + 1, 1 + 0] = [2, 1] |
| solution.multiply([3.5, -2], 2); | [7, -4] | [3.5 \* 2, (-2) \* 2] = [7, -4] |
| solution.length([3, -4]); | 5 | sqrt(3 \* 3 + (-4) \* (-4)) = 5 |
| solution.dot([1, 0], [0, -1]); | 0 | 1 \* 0 + 0 \* (-1) = 0 |
| solution.cross([3, 7], [1, 0]); | -7 | 3 \* 0 – 7 \* 1 = -7 |

## 6.Breakfast Robot

_It&#39;s finally the future! Robots take care of everything and man has been freed from the mundane tasks of living. There is still work to be done though, since those robots need to be programmed first – we may have robot chefs, but we don&#39;t yet have robot software developers._

Your task is to write the management software for a breakfast chef robot – it needs to **take orders** , keep track of available **ingredients** and output an error if something&#39;s wrong. Someone else has already installed the cooking instructions, so your module needs to **plug into** the system and only take care of orders and ingredients. And since this is the future and food is printed with nano-particle beams, all ingredients are microelements – **protein** , **carbohydrates** , **fat** and **flavours**. The library of recipes includes the following meals:

- **Apple** – made with **1 carb** and **2 flavour**
- **Coke** – made with **10 carb** and **20 flavour**
- **Burger** – made with **5 carb** , **7 fat** and **3 flavour**
- **Omelet** – made with **5 protein** , **1 fat** and **1 flavour**
- **Cheverme** – made with **10 protein** , **10 carb** , **10 fat** and **10 flavour**

The robot receives instructions either to restock the supply, cook a meal or report statistics. The input consists of one of the following commands:

- **restock &lt;microelement&gt; &lt;quantity&gt;** – increases the stored quantity of the given microelement
- **prepare &lt;recipe&gt; &lt;quantity&gt;** – use the available ingredients to prepare the given meal
- **report** – return information about the stored microelements, in the order described below, including zero elements

The robot is equipped with a quantum field storage, so it can hold an **unlimited quantity** of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an **error message** should be returned. Their availability is checked in the **order** in which they **appear** in the recipe, so the error should reflect the first requirement which wasn&#39;t met.

Submit a **closure** that returns the management function. The management function must take one parameter.

### Input

Instructions are passed as a **string argument** to your management function. It will be called **several times** per session, so internal state must be **preserved** throughout the entire session.

### Output

The **return** value of each operation is one of the following strings:

- **Success** – when restocking or completing cooking without errors
- **Error: not enough &lt;ingredient&gt; in stock** – when the robot couldn&#39;t muster enough microelements
- **protein={qty} carbohydrate={qty} fat={qty} flavour={qty}** – when a report is requested, in a single string

### Constraints

- Recipes and ingredients in commands will always have valid names.

### Examples

| Sample Execution |
| --- |
| let manager = solution();manager(&quot;restock flavour 50&quot;); _// Success_manager(&quot;prepare coke 4&quot;);     _// Error: not enough carbohydrate in stock_ |

| Sample Input | Sample Output |
| --- | --- |
| restock carbohydrate 10restock flavour 10prepare apple 1restock fat 10prepare burger 1report | SuccessSuccessSuccessSuccessSuccess **protein=0** carbohydrate **=4** fat **=3** flavour **=5** |

| Sample Input | Sample Output |
| --- | --- |
| prepare cheverme 1restock protein 10prepare cheverme 1restock carbohydrate 10prepare cheverme 1restock fat 10prepare cheverme 1restock flavour 10prepare cheverme 1report | Error: not enough protein in stockSuccessError: not enough carbohydrate in stockSuccessError: not enough fat in stockSuccessError: not enough flavour in stockSuccessSuccess **protein=0** carbohydrate **=0** fat **=0** flavour **=0** |

## 7.Monkey Patcher

Your employer placed you in charge of an old forum management project. The client requests new functionality, but the legacy code has high coupling, so you don&#39;t want to change anything, for fear of breaking everything else. You know which values need to be accessed and modified, so it&#39;s time to monkey patch!

Write a program to extend a forum post record with voting functionality. It needs to have the options to **upvote** , **downvote** and tally the **total**** score**(positive minus negative votes). Furthermore, to prevent abuse, if a post has more than 50**total ****votes** , the numbers must be obfuscated – the stored values remains the same, but the **reported** amounts of upvotes and downvotes have a number **added** to them. This number is 25% of the **greater number** of votes (positive or negative), rounded up. The actual numbers should **not be modified** , just the reported amounts.

Every post also has a **rating** , depending on its score. If **positive** votes are the overwhelming majority (&gt;66%), the rating is **hot**. If there is no majority, but the balance is non-negative and **either** votes are more than 100, its rating is **controversial**. If the balance is negative, the rating becomes **unpopular**. If the post has less than 10 **total** votes, or no other rating is met, it&#39;s rating is **new** regardless of balance. These calculations are performed on the actual numbers.

Your function will be invoked with **call(object, arguments)**, so treat it as though it is internal for the object. A forum post, to which the function will be attached, has the following structure:

| JavaScript |
| --- |
| {  id: &lt;id&gt;,  author: &lt;author name&gt;,  content: &lt;text&gt;,  upvotes: &lt;number&gt;,  downvotes: &lt;number&gt;} |

The arguments will be one of the following strings:

- **upvote** – increase the positive votes by one
- **downvote** – increase the negative votes by one
- **score** – report positive and negative votes, balance and rating, in an array; obfuscation rules apply

### Input

Input will be passed as arguments to your function through a **call()** invocation.

### Output

Output from the report command should be **returned** as a result of the function in the form of an **array** of three **numbers** and a **string** , as described above.

### Examples

| Sample execution |
| --- |
| let post = {    id: &#39;3&#39;,    author: &#39;emil&#39;,    content: &#39;wazaaaaa&#39;,    upvotes: 100,    downvotes: 100};solution.call(post, &#39;upvote&#39;);solution.call(post, &#39;downvote&#39;);let score = solution.call(post, &#39;score&#39;); _// [127, 127, 0, &#39;controversial&#39;]_solution.call(post, &#39;downvote&#39;); …        _//_ _(executed 50 times)_score = solution.call(post, &#39;score&#39;);     _// [139, 189, -50, &#39;unpopular&#39;]_ |
| Explanation |
| The post begins at 100/100, we add one upvote and one downvote, bringing it to 101/101. The reported score is inflated by 25% of the greater value, rounded up (26). The balance is 0, and at least one of the numbers is greater than 100, so we return an array with rating &#39;controversial&#39;.We downvote 50 times, bringing the score to 101/151, the reported values are inflated by 151\*0.25=38 (rounded up) and since the balance is negative with return an array with rating &#39;unpopular&#39;. |

## 8.\* Euclid&#39;s Algorithm

Write a program that receives **two numbers** as arguments and finds the **greatest common divisor** between them.

### Input

Input will be passed as two **numeric arguments** to your function.

### Output

**Return** the greatest common divisor as a result of the function.

### Examples

| Sample Input | Sample Output |
| --- | --- |
| 252, 105 | 21 |

## 9.\*\*\* Kepler&#39;s Problem

Write a function that, given the mean anomaly and orbital eccentricity of a celestial body, calculates its eccentric anomaly. The eccentric anomaly **E** is related to the mean anomaly **M** by Kepler&#39;s equation:

 ![](data:image/*;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAABmCAIAAABHk3+RAAAAAXNSR0IArs4c6QAAE1pJREFUeF7tncmrZrUWxa03tysdFSJSOlBULOyxAwX7wonYgQNBwQ4cKJYdzkTLmgiCHSg4UNSB6EDFBhTssEdRUbBBRBzZVPkPlOuR98Jm73NycnKS3Hz51h1V3Zv2l2SdnWQn2bR37959+EMCJEACJNA1gf90XTtWjgRIgARI4L8EqPXsByRAAiTQPwFqff9tzBqSAAmQALWefYAESIAE+idAre+/jVlDEiABEqDWsw+QAAmQQP8EqPX9tzFrSAIkQALUevYBEiABEuifALW+/zZmDUmABEiAWs8+QAIkQAL9E6DW99/GrCEJkAAJUOvZB0iABEigfwLU+v7bmDUkARIgAWo9+wAJkAAJ9E+AWt9/G7OGJEACJECtZx8gARIggf4JUOv7b2PWkARIgASo9ewDJEACJNA/AWp9/23MGpIACZAAtZ59gARIgAT6J0Ct77+NWUMSIAESoNazD5AACZBA/wSo9f23MWtIAiRAAtR69gESIAES6J8Atb7/NmYNSYAESIBazz5AAiRAAv0ToNb338asIQmQAAlQ69kHSIAESKB/AtT6/tuYNSQBEiCBGlr/559/bor4Wd4Y77//fjif559/fnkua5VCRLslBtm1a9dakWRl0eKqr1xwwQUdYEEtEsfAVLS8fGpo/XfffVenRa+55ppARueff/7JJ59cpyR95PLVV1+Vq8gxxxxTLnGmTALVCHzyySeF8jrhhBMyplxD688444w//vjjueeeO/DAAwNFh1W+pGKwGn766afBFE488UT86fXXX9+6deuSLNYt7nHHHYeGe/XVVw8//PDsdT/llFOyp8kESaA+gb/++uu9996DKZk969NPPz1jmjW0HsU96KCDrrzyymeeeSZj0WVSP//8886dO8cSf+GFF6jyaeTRcBdddNHTTz9to9999917I36+/PLLK664QkXH1xcppxWJsUigNQIwZ5999llry6KfRwyRvbBEH3zwQVupvPZQJa131YBqBBrp22+/TW5C6M7ff/89GP3GG2+k0CeDdRHRlW0Kxx57bEyymBxgmwSdXgY+6aSTYuIyDAmsCgHYLnaJOLKfQ6B27NgBEZOVxWQ6rz1UVevDzbZnz560dsXiDyz3sbjbt29P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)

Where **e** is the eccentricity. Note this equation is transcendental, which means it cannot be solved for **E** algebraically. Use numerical analysis to approximate a root with accuracy 1x10

. You can find information about Newton&#39;s Method here: [https://en.wikipedia.org/wiki/Newton&#39;s\_method](https://en.wikipedia.org/wiki/Newton&#39;s_method). Try to implement it recursively.

The **input** comes as two number parameters. The first parameter is the current mean anomaly in radians and the second is the orbital eccentricity of the body.

The **output** is an approximation of the eccentric anomaly and should be printed on the console. Display only the significant digits.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 1, 0 | 1 | 3.1415926535, 0.75 | 3.141592654 |

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| 0.25, 0.99 | 1.156077258 | 4.8, 0.2 | 4.601234265 |
