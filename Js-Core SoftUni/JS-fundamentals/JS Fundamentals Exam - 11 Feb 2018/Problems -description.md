# 1.Problem 1 – Bitcoin &quot;Mining&quot;

_So you have heard that a lot of people are using Bitcoins as alternative currency and mining them can make you rich quickly, without doing_ _any__thing. Because of this you decided to become a miner at the local mine and start digging Bitcoins out of the ground. Well, after a few days you realized that there are no burried Bitcoins in the ground... But luckily, you started digging up gold and decided to invest it in Bitcoins, because they are cool and gold sucks. So you started exchanging gold for BGN and buying Bitcoins with the money, and keeping track of the whole process. How many Bitcoins did you buy and how much money were you left with it at the end?_

Write a JavaScript program that calculates the **total amount** of **bitcoins** you purchased with the gold you mined during your **shift** at the mine. Your shift consists of a certain number of days where you mine an amount of **gold** in **grams**. Your program will receive an **array with the amount of gold** you mined **each day** , where the **first day** of your **shift** is the **first index of the array**. Also, someone was stealing **every third day** from the start of your shift **30%** from the mined **gold** for **this day**. For the different exchanges use these **prices** :

| **1 Bitcoin** | 11949.16 lv. |
| --- | --- |
| **1 g of gold** | 67.51 lv. |

### Input

You will receive an array of **strings** that must be parsed as **numbers** , representing your **shift** at the mine.

### Output

Print on the **console**  **these lines in the following formats** :

- **First line** prints the **total**** amount **of bought** bitcoins**:

 &quot; **Bought bitcoins: {count}**&quot;

- **Second line** prints **witch day** you **bought** your **first bitcoin** :

 &quot; **Day of the first purchased bitcoin: {day}**&quot;

In case you **did not**** purchased any bitcoins,** do not print the second line.

- **Third line** prints the **amount** of **money** that&#39;s left after the bitcoin purchases **rounded by the second digit** after the decimal point:

 &quot; **Left money: {money} lv.**&quot;

### Constraints

- The **input** array may contain up to **1,000** elements
- The numbers in the array are in range **[0.01..5,000.00] inclusive**
- Allowed time/memory: 100ms/16MB

###  Examples

| **Input** | **Output** |
| --- | --- |
| 100, 200, 300 | Bought bitcoins: 2Day of the firstpurchased bitcoin: 2Left money: 10531.78 lv. |

Scroll down to see the explanation for the first example and more examples.

| **Explanation** |
| --- |
| **Day 1** – you dig up **100 g** of gold then exchange it for **6751.00 lv.**   **Day 2** – you dig up **200 g** of gold then exchange it for **13,502.00 lv.** and the total amount of money is **20,253.00 lv.** Then you buy **1 Bitcoin** whichleaves you with **8,303.84 lv.** Also this purchase is the **first day you bought bitcoin**.  **Day 3** – you dig up **300 g** of gold but then **30%** of it is stolen and your gold drops to **210 g** which you exchange for **14,177.10 lv.** making your total amount of money **22,480.94 lv.** Then you buy **1**  **Bitcoin** making the final amount of money that you are **left with**** 10,531.78 lv. **with** 2 bought Bitcoins.** |

| **Input** | **Output** |   | **Input** | **Output** |
| --- | --- | --- | --- | --- |


# Problem 2 – Air Pollution

_Because of recent events you have become very conscious of the air quality in Sofia. That&#39;s why you decided to keep track of the air pollution levels by making a map. Each block of the map displays a number that represents the current particle pollution in the air at this moment. There are different forces which affect the air quality in various ways. So how clean is the air in Sofia now?_

Write a JavaScript program that tracks the **pollution**** in the air **above Sofia. You will receive** two arguments **– the** first **is the** map of Sofia **represented by a** matrix of numbers **and the second is an** array of strings **representing the** forces ****affecting** the **air quality**. The **map** will **always** be with **5 rows** and **5 columns** in **total**** of ****25 elements - blocks**. Each block&#39;s particle pollution (PM) is **affected** by **3 forces** receivedin the following formats **:**

- **&quot;**** breeze {index} ****&quot;**  **–** index is **the row** where **all column&#39;s value drops** by **15** PM
- **&quot;**** gale {index} ****&quot;**  **–** index is **the column in all rows** where **value drops** by **20** PM
- **&quot;**** smog {value} ****&quot;**  **– all**** blocks **in the map** increase **equally by** the given value&#39;s** PM

The threshold in each block is **50** PM. If it is **below**** that number **, the block&#39;s air is considered** normal **but if it** reaches or goes over it, **that block&#39;s air is considered** polluted **. Also note, that the** polluted particles **in a block** cannot go below ****zero**.

Finally, your program needs to **find** if there are **any polluted blocks** and **print them** in the format given below.

### Input

You will receive **two**** arguments**:

- The **first** argument is an **array with five strings** – **rows** of the matrix with **columns separated by space** that must be parsed as **numbers** , representing the **map of Sofia**.
- The **second** argument is an **array of strings** – each **string** consists of one of the **words (breeze/gale/smog)** and a **number**** separated by space **, representing the** different forces**.

### Output

Print on the **console**  **a**  **single line** :

- If there are **polluted blocks** in the map, **use** their **coordinates** in the following format:

- **&quot;[{rowIndex}-{columnIndex}]&quot;**

Note that you must **start** from the **top left corner** of the map moving to the **bottom right corner**** horizontally **. Then** separate **each** formatted block&#39;s coordinates **with** comma and space** and print them in a single line in the following format:

- **&quot;Polluted areas: {block1}, {block2}, {block3}, …&quot;**

- If there are **no polluted blocks** in the map print:

- **&quot;No polluted areas&quot;**

### Constraints

- The **number** of **rows** and **columns** for the **matrix** will **always** be **5**
- The **number** in each block will be an **integer** in range **[0..1000] inclusive**
- The **number** of **elements** in the **second input argument** will be in range **[0..100] inclusive**
- Given **smog&#39;s**** value **will be an** integer **in range** [0..100] inclusive**
- Given **indexes** will **always** be **valid**

### Examples

| **Input** | **Output** |
| --- | --- |
| [  &quot;5 7 72 14 4&quot;,  &quot;41 35 37 27 33&quot;,  &quot;23 16 27 42 12&quot;,  &quot;2 20 28 39 14&quot;,  &quot;16 34 31 10 24&quot;,],[&quot;breeze 1&quot;, &quot;gale 2&quot;, &quot;smog 25&quot;] | Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1] |

### Explanation

Graphic diagram explaining the **first example&#39;s** program flow:



| **Input** | **Output** |
| --- | --- |
| [  &quot;5 7 3 28 32&quot;,  &quot;41 12 49 30 33&quot;,  &quot;3 16 20 42 12&quot;,  &quot;2 20 10 39 14&quot;,  &quot;7 34 4 27 24&quot;,],[  &quot;smog 11&quot;, &quot;gale 3&quot;,   &quot;breeze 1&quot;, &quot;smog 2&quot;] | No polluted areas |

| **Input** | **Output** |
| --- | --- |
| [  &quot;5 7 2 14 4&quot;,  &quot;21 14 2 5 3&quot;,  &quot;3 16 7 42 12&quot;,  &quot;2 20 8 39 14&quot;,  &quot;7 34 1 10 24&quot;,],[&quot;breeze 1&quot;, &quot;gale 2&quot;, &quot;smog 35&quot;] | Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4] |

# Problem 3 – Survey Parser

Write a JavaScript program that **parses** a given **document** that may contain the results of a **rating survey** and outputs a **summary** of the votes. You will receive a **string** that contains XML-formatted data. From this data, you must extract a **valid label** and **average rating** (sum of ratings, divided by their count). Input, containing valid survey data will follow these rules:

- The document may contain **any symbol**** before and after** the survey data
- The survey data **always** begins with **&lt;svg&gt;** and ends with **&lt;/svg&gt;** :

_ Any text_ &lt;svg&gt; _Survey data_ &lt;/svg&gt; _Any text _

- Each valid survey will contain **exactly two**** sections **beginning with** &lt;cat&gt; **and ending with** &lt;/cat&gt;**
- There may be **whitespace**** between** the sections

&lt;cat&gt; _Survey heading and label_ &lt;/cat&gt;&lt;cat&gt; _Ratings_ &lt;/cat&gt;

- The contents of the first **cat** section must begin with **&lt;text&gt;** and end with **&lt;/text&gt;** ; it may contain **any text** , but needs to have a **valid label** , inside brackets **[]**

&lt;text&gt; _Survey heading_ [_Survey_ _Label_]&lt;/text&gt;

- The second **cat** section contains all of the **ratings** with each vote beginning with **&lt;g&gt;** and ending with **&lt;/g&gt;**
- A **valid rating** contains a **value** and **count** , with the **value** surrounded by **&lt;val&gt;** and **&lt;/val&gt;** and the **count** right **after the value**
- There may be any number of **valid** and **invalid ratings** inside the second cat; you should **only**** process **the valid ones, and** ignore** the invalid ratings

&lt;g&gt;&lt;val&gt; _Rating value_ &lt;/val&gt; _Vote count_ &lt;/g&gt;

-
  - **Valid** rating:                                                                        **&lt;g&gt;&lt;val&gt;1&lt;/val&gt;0&lt;/g&gt;**
  - **Invalid** rating ( **ignore** and continue):        **&lt;g&gt;&lt;val&gt;Seafood&lt;/val&gt;1&lt;/g&gt;**
- The **value** must be a number between **1** and **10**
- The **count** must be a number **0** or larger

If the document **does not** contain survey data (no opening and closing **svg** tags), print on the console &quot; **No survey found**&quot;. If there is survey data, but the rest of the rules aren&#39;t followed, print on the console &quot; **Invalid format**&quot;.

At the **end** of the program, print on the **console** the **label** of the survey and the **average rating** , **rounded** to two decimal places.

### Input

You will receive a single **string** , containing a document to be parsed.

### Output

Depending on outcome, print on the **console**  **a single line** :

- **No survey found**
- **Invalid format**
- **{label}: {average rating}**

### Constraints

- There will never be more than one valid survey
- Rating **value** will be in range **[1…10]**
- Rating **count** will be in range **[1…1 000 000]**

### Examples

| **Input** |
| --- |
| &lt;p&gt;Some random text&lt;/p&gt;&lt;svg&gt;&lt;cat&gt;&lt;text&gt;How do you rate our food? [Food - General]&lt;/text&gt;&lt;/cat&gt;&lt;cat&gt;&lt;g&gt;&lt;val&gt;1&lt;/val&gt;0&lt;/g&gt;&lt;g&gt;&lt;val&gt;2&lt;/val&gt;1&lt;/g&gt;&lt;g&gt;&lt;val&gt;3&lt;/val&gt;3&lt;/g&gt;&lt;g&gt;&lt;val&gt;4&lt;/val&gt;10&lt;/g&gt;&lt;g&gt;&lt;val&gt;5&lt;/val&gt;7&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt;&lt;p&gt;Some more random text&lt;/p&gt; |
| **Output** |
| Food - General: 4.1 |
| **Explanation** |
| The survey data is surrounded by **&lt;svg&gt;** and **&lt;/svg&gt;** , the remaing data is discarded. The first cat contains our label, surrounded by brackets: Food – General.The second cat contains five ratings, all surrounded with **&lt;g&gt;** and **&lt;/g&gt;** , and when parsed we get the following:0 votes with value 1 = 01 votes with value 2 = 23 votes with value 3 = 910 votes with value 4 = 407 votes with value 5 = 35The sum of all ratings is 86, divided by their count 21 gives us the average rating **4.095…** , which we round to the second decimal – **4.1**. |

| **Input** |
| --- |
| &lt;svg&gt;&lt;cat&gt;&lt;text&gt;How do you rate the special menu? [Food - Special]&lt;/text&gt;&lt;/cat&gt; &lt;cat&gt;&lt;g&gt;&lt;val&gt;1&lt;/val&gt;5&lt;/g&gt;&lt;g&gt;&lt;val&gt;5&lt;/val&gt;13&lt;/g&gt;&lt;g&gt;&lt;val&gt;10&lt;/val&gt;22&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt; |
| **Output** |
| Food - Special: 7.25 |

| **Input** |
| --- |
| &lt;p&gt;How do you suggest we improve our service?&lt;/p&gt;&lt;p&gt;More tacos.&lt;/p&gt;&lt;p&gt;It&#39;s great, don&#39;t mess with it!&lt;/p&gt;&lt;p&gt;I&#39;d like to have the option for delivery&lt;/p&gt; |
| **Output** |
| No survey found |

| **Input** |
| --- |
| &lt;svg&gt;&lt;cat&gt;&lt;text&gt;Which is your favourite meal from our selection?&lt;/text&gt;&lt;/cat&gt;&lt;cat&gt;&lt;g&gt;&lt;val&gt;Fish&lt;/val&gt;15&lt;/g&gt;&lt;g&gt;&lt;val&gt;Prawns&lt;/val&gt;31&lt;/g&gt;&lt;g&gt;&lt;val&gt;Crab Langoon&lt;/val&gt;12&lt;/g&gt;&lt;g&gt;&lt;val&gt;Calamari&lt;/val&gt;17&lt;/g&gt;&lt;/cat&gt;&lt;/svg&gt; |
| **Output** |
| Invalid format |

# Problem 4 – Game of Epicness

_Welcome to the Game of Epicness where different kingdoms are fighting for the grant price of a bucket of Bitcoins… EPIC! In this amazing game there are many kingdoms with many generals and every general have their own army. To decide who is the winner for this totally amazing price they fight battles between them. But they are not so awesome at math, so they need you to help them record their battle results._

Write a JavaScript program that **determines** the **winner** from **all battles**. You will receive **two** arguments:

The **first** argument is an **array of kingdoms**  **with**  **generals**  **and their**  **army** in the form of an **object** with format:

{ kingdom: String, general: String, army: Number }

Every **general** has his own **army** that fights for a certain **kingdom**. Note that, every **kingdom&#39;s name** is **unique,** and every general&#39;s **name** is **unique** in **this kingdom**. If the **general** already **exists**** in **this** kingdom ****add** the **army** to his current one. After you go through all the kingdoms with their generals with armies and store the information about them, it&#39;s time to start the battles.

The **second** argument is **matrix of strings** showing which **kingdom&#39;s generals** are **fighting** in this format:

**[**

**        [&quot;{AttackingKingdom} &quot;, &quot;{AttackingGeneral}&quot;, &quot;{DefendingKingdom} &quot;, &quot;{DefendingGeneral}&quot;],**

**        …**

**]**

The **first two elements** are the **names** of the **attacking general from** certain **kingdom** and the **second two** are the **names** of the **defending general from** certain **kingdom**. **Compare** the two general&#39;s **armies to determine** who **wins** and who **losses** based on who have the **larger army wins.** The **winner&#39;s army increases** with **10%** and the **loser&#39;s army decreases** with **10%.** Keep in mind to **round** them **down** if there is any excess **army**** after the battle. **If there is a** draw **,** do not do anything **.** Keep track **of the** wins **and** losses** for every general&#39;s battle.

Note that, **generals** from the **same kingdom**** cannot ****attack**** each other**.

After you finish with all battles you need to **find** which **kingdom**** wins **the game. To decide that,** first ****order them** by all their **general&#39;s wins (descending)** then by their **losses (ascending),** and finally by the **kingdom&#39;s name** in **ascending alphabetical** order.

### Input

You will receive **two arguments –** an **array of objects** with properties and a **matrix of strings** as shown above.

### Output

Print on the **console** the winning kingdom and **sort** the generals by their **armies in**** descending **order,** formatted** as seen in the examples.

### Constraints

- The **number** of **elements** in the **first input argument** will be in range **[1..100] inclusive**
- The **number** of **elements** in the **second input argument** will be in range **[0..100] inclusive**
- General&#39;s **army** will be always an **integer** in range **[0..1,000,000] inclusive**
- There **will** be **no invalid**** input**
- There **will** be **no matching number** of **armies** in the **output**

### Examples

| **Input** |
| --- |
| [{ kingdom: &quot;Maiden Way&quot;, general: &quot;Merek&quot;, army: 5000 },  { kingdom: &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 4900 },  { kingdom: &quot;Stonegate&quot;, general: &quot;Doran&quot;, army: 70000 },  { kingdom: &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 0 },  { kingdom: &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 2000 },  { kingdom: &quot;Maiden Way&quot;, general: &quot;Berinon&quot;, army: 100000 }],[[&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;, &quot;Ulric&quot;],  [&quot;Stonegate&quot;, &quot;Ulric&quot;, &quot;Stonegate&quot;, &quot;Doran&quot;],  [&quot;Stonegate&quot;, &quot;Doran&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;],  [&quot;Stonegate&quot;, &quot;Ulric&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;],  [&quot;Maiden Way&quot;, &quot;Berinon&quot;, &quot;Stonegate&quot;, &quot;Ulric&quot;] ] |
| **Output** |
| Winner: Stonegate/\general: Doran---army: 77000---wins: 1---losses: 0/\general: Ulric---army: 5336---wins: 2---losses: 1 |
| **Explanation** |
| After you successfully store the kingdoms information, the first battle&#39;s result is victory for the defender Ulric and a loss for the attacker Quinn. Second battle is ignored because the generals are from the same kingdom. Third battle is a victory for Doran and a loss for Merek. Fourth battle is a win for Ulric and a loss for Merek. Fifth battle is a victory for Berinon and a defeat for Ulric. All winners increase their armies with 10% for each win and all losers decrease their armies with 10% for each loss.The result from the battles are – Stonegate: 3 wins and 1 loss; Maiden Way: 1 win and 2 losses; YorkenShire: 0 wins and 1 loss. Making Stonegate the winner of the games because they have the most wins from kingdoms. |

| **Input** |
| --- |
| [{ kingdom: &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 5000 },  { kingdom: &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 5000 },  { kingdom: &quot;Maiden Way&quot;, general: &quot;Berinon&quot;, army: 1000 }],[[&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;, &quot;Ulric&quot;],  [&quot;Maiden Way&quot;, &quot;Berinon&quot;, &quot;YorkenShire&quot;, &quot;Quinn&quot;] ] |
| **Output** |
| Winner: YorkenShire/\general: Quinn---army: 5500---wins: 1---losses: 0  |
| **Explanation** |
| The first battle between Quinn and Ulric is a draw because they have even armies because of that it is not recorded and their armies size does not change. The second battle is a win for Quinn and a loss for Berinon making YorkenShire the winner of the game with 1 win and 0 losses. |

| **Input** |
| --- |
| [{ kingdom: &quot;Maiden Way&quot;, general: &quot;Merek&quot;, army: 5000 },  { kingdom: &quot;Stonegate&quot;, general: &quot;Ulric&quot;, army: 4900 },  { kingdom: &quot;Stonegate&quot;, general: &quot;Doran&quot;, army: 70000 },  { kingdom: &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 0 },  { kingdom: &quot;YorkenShire&quot;, general: &quot;Quinn&quot;, army: 2000 }],[[&quot;YorkenShire&quot;, &quot;Quinn&quot;, &quot;Stonegate&quot;, &quot;Doran&quot;],  [&quot;Stonegate&quot;, &quot;Ulric&quot;, &quot;Maiden Way&quot;, &quot;Merek&quot;] ] |
| **Output** |
| Winner: Maiden Way/\general: Merek---army: 5500---wins: 1---losses: 0 |