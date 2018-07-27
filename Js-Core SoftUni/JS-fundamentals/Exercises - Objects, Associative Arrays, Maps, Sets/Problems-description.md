## 1.Exercises: Objects, Associative Arrays, Maps, Sets

Problems for exercises and homework for the [&quot;JavaScript Fundamentals&quot; course @ SoftUni](https://softuni.bg/courses/javascript-fundamentals). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/316/](https://judge.softuni.bg/Contests/316/).

## 1. Heroic Inventory

In the era of heroes, every hero has his own items which make him unique. Create a function which creates a **register for the heroes** , with their **names** , **level** , and **items** , if they have such. The register should accept data in a specified format, and return it presented in a specified format.

The **input** comes as array of strings. Each element holds data for a hero, in the following format:

&quot; **{heroName} / {heroLevel} / {item1}, {item2}, {item3}...**&quot;

You must store the data about every hero. The **name** is a **string** , the **level** is a **number** and the items are all **strings.**

The **output** is a **JSON representation** of the data for all the heroes you&#39;ve stored. The data must be an **array of all the heroes**. Check the examples for more info.

### Examples

| **Input** | **Output** |
| --- | --- |
| Isacc / 25 / Apple, GravityGunDerek / 12 / BarrelVest, DestructionSwordHes / 1 / Desolator, Sentinel, Antara | [{&quot;name&quot;:&quot;Isacc&quot;,&quot;level&quot;:25,&quot;items&quot;:[&quot;Apple&quot;,&quot;GravityGun&quot;]},{&quot;name&quot;:&quot;Derek&quot;,&quot;level&quot;:12,&quot;items&quot;:[&quot;BarrelVest&quot;,&quot;DestructionSword&quot;]},{&quot;name&quot;:&quot;Hes&quot;,&quot;level&quot;:1,&quot;items&quot;:[&quot;Desolator&quot;,&quot;Sentinel&quot;,&quot;Antara&quot;]}] |
|   |   |
| **Input** | **Output** |
| Jake / 1000 / Gauss, HolidayGrenade | [{&quot;name&quot;:&quot;Jake&quot;,&quot;level&quot;:1000,&quot;items&quot;:[&quot;Gauss&quot;,&quot;HolidayGrenade&quot;]}] |


## 2.JSON&#39;s Table

JSON&#39;s Table is a magical table which turns JSON data into an HTML table. You will be given **JSON strings** holding data about employees, including their **name** , **position** and **salary**. You need to **parse that data** into **objects** , and create an **HTML table** which holds the data for each **employee on a different row** , as **columns**.

The **name** and **position** of the employee are **strings** , the **salary** is a **number**.

The **input** comes as array of strings. Each element is a JSON string which represents the data for a certain employee.

The **output** is the HTML code of a table which holds the data exactly as explained above. Check the examples for more info.

### Examples

| **Input** | **Output** |
| --- | --- |
| {&quot;name&quot;:&quot;Pesho&quot;,&quot;position&quot;:&quot;Promenliva&quot;,&quot;salary&quot;:100000}{&quot;name&quot;:&quot;Teo&quot;,&quot;position&quot;:&quot;Lecturer&quot;,&quot;salary&quot;:1000}{&quot;name&quot;:&quot;Georgi&quot;,&quot;position&quot;:&quot;Lecturer&quot;,&quot;salary&quot;:1000} | &lt;table&gt;        &lt;tr&gt;                &lt;td&gt;Pesho&lt;/td&gt;                &lt;td&gt;Promenliva&lt;/td&gt;                &lt;td&gt;100000&lt;/td&gt;        &lt;tr&gt;        &lt;tr&gt;                &lt;td&gt;Teo&lt;/td&gt;                &lt;td&gt;Lecturer&lt;/td&gt;                &lt;td&gt;1000&lt;/td&gt;        &lt;tr&gt;        &lt;tr&gt;                &lt;td&gt;Georgi&lt;/td&gt;                &lt;td&gt;Lecturer&lt;/td&gt;                &lt;td&gt;1000&lt;/td&gt;        &lt;tr&gt;&lt;/table&gt; |

### Hints

- You might want to **escape the HTML**. Otherwise you might find yourself victim to vicious JavaScript **code in the input** , which aims only to hack you.

## 3.Cappy Juice

You will be given different juices, as **strings**. You will also **receive quantity** as a **number**. If you receive a juice, you already have, **you must sum** the **current quantity** of that juice, with the **given one**. When a juice reaches **1000 quantity** , it produces a bottle. You must **store all produced bottles** and you must **print them** at the end.

**Note:**** 1000 quantity **of juice is** one bottle **. If you happen to have** more than 1000 **, you must make** as much bottles as you can **, and store** what ****is**** left** from the juice.

**Example:**** You have 2643 quantity **of Orange Juice – this is** 2 bottles **of Orange Juice and** 643 quantity left**.

The **input** comes as array of strings. Each element holds data about a juice and quantity in the following format:

&quot; **{juiceName} =&gt; {juiceQuantity}**&quot;

The **output** is the produced bottles. The bottles are to be printed in **order of obtaining the bottles**. Check the second example bellow - even though we receive the Kiwi juice first, we don&#39;t form a bottle of Kiwi juice until the 4

# th
 line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.
### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| Orange =&gt; 2000Peach =&gt; 1432Banana =&gt; 450Peach =&gt; 600Strawberry =&gt; 549 | Orange =&gt; 2Peach =&gt; 2 |   | Kiwi =&gt; 234Pear =&gt; 2345Watermelon =&gt; 3456Kiwi =&gt; 4567Pear =&gt; 5678Watermelon =&gt; 6789 | Pear =&gt; 8Watermelon =&gt; 10Kiwi =&gt; 4 |

## 4.Store Catalogue

You have to create a sorted catalogue of store products. You will be given the products&#39; names and prices. You need to order them by **alphabetical order**.

The **input** comes as array of strings. Each element holds info about a product in the following format:

&quot; **{productName} : {productPrice}**&quot;

The **product&#39;s name** will be a **string** , which will **always**** start with a capital letter **, and the** price **will be** a number **. You can safely assume there will be** NO duplicate product input **. The comparison for alphabetical order is** case-insensitive**.

As **output** you must print all the products in a specified format. They must be ordered **exactly as specified above**. The products must be **divided into groups** , by the **initial of their name**. The **group&#39;s initial should be printed** , and after that the products should be printed with **2 spaces before their names**. For more info check the examples.

### Examples

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |
| Appricot : 20.4Fridge : 1500TV : 1499Deodorant : 10Boiler : 300Apple : 1.25Anti-Bug Spray : 15T-Shirt : 10   | A  Anti-Bug Spray: 15  Apple: 1.25  Appricot: 20.4B  Boiler: 300D  Deodorant: 10F  Fridge: 1500T  T-Shirt: 10  TV: 1499 |   | Banana : 2Rubic&#39;s Cube : 5Raspberry P : 4999Rolex : 100000Rollon : 10Rali Car : 2000000Pesho : 0.000001Barrel : 10 | B  Banana: 2  Barrel: 10P  Pesho: 0.000001R  Rali Car: 2000000  Raspberry P: 4999  Rolex: 100000  Rollon: 10  Rubic&#39;s Cube: 5 |

## 5.Auto-Engineering Company

You are tasked to create a register for a company that produces cars. You need to store **how many cars** have been produced from a **specified model** of a **specified brand**.

The **input** comes as array of strings. Each element holds information in the following format:

&quot; **{carBrand} | {carModel} | {producedCars}**&quot;

The car **brands** and **models** are **strings** , the **produced cars** are **numbers**. If the **car brand** you&#39;ve received **already exists** , just add the **new**** car model **to it with the** produced cars ****as its value**. If even the car model exists, just **add** the **given value** to the **current one**.

As **output** you need to print – **for every car brand** , the **car models** , and **number of cars produced** from that model. The output format is:

&quot;{carBrand}

  ###{carModel} -&gt; {producedCars}

  ###{carModel2} -&gt; {producedCars}

  ...&quot;

The order of printing is the order in which the brands and models first appear in the input. The first brand in the input should be the first printed and so on. For each brand, the first model received from that brand, should be the first printed and so on.

### Examples

| **Input** | **Output** |
| --- | --- |
| Audi | Q7 | 1000Audi | Q6 | 100BMW | X5 | 1000BMW | X6 | 100Citroen | C4 | 123Volga | GAZ-24 | 1000000Lada | Niva | 1000000Lada | Jigula | 1000000Citroen | C4 | 22Citroen | C5 | 10 | Audi###Q7 -&gt; 1000###Q6 -&gt; 100BMW###X5 -&gt; 1000###X6 -&gt; 100Citroen###C4 -&gt; 145###C5 -&gt; 10Volga###GAZ-24 -&gt; 1000000Lada###Niva -&gt; 1000000###Jigula -&gt; 1000000 |

### Hints

- The **Map structure** should be perfect for this problem.

