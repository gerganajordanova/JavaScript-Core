# JS Advanced: Exam 26 April 2018

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/1004/](https://judge.softuni.bg/Contests/1004/).

## Problem 4. Public Transport (Object Interacting with DOM)

Write a JS **class** with the name **&quot;PublicTransportTable&quot;** that generates and controls a **public transport** table. It contains **two main columns** for transport data **(Type, Name)** and **one column** for **Actions - [Search]**, **[Clear]** and **[More/Less Info]** buttons **.  ** The **second row** of the table consists of **two**** input fields, [Search] **and** [Clear] **button. The** main table&#39;s **body consists of rows with** types **of** vehicles **with additional** inner tables **for more information. Every** vehicle **has a** main info row **and an** additional info row**._See the examples and templates for more details._

The **constructor** of your class needs to take **one** argument – **town** (string). The **town** should replace in the table&#39;s title (&lt;caption&gt;) the part in the curly brackets. _See the main table&#39;s HTML for more details below_.

 Additionally, the **class**** should ****contain** the following **functionality** :

- Function **addVehicle(obj)**– takes **one** (object) argument, **creates** the **vehicle&#39;s main info row** (see the template)and **appends** it to the **main table&#39;s body** with **ID** of **&quot;vehicles-info&quot;**. The **argument** is in the following format:

{ type: String, name: String, route: String, price: Number, driver: String }

With this object&#39;s data you should create a **table&#39;s row** following this **HTML structure:**

| Template Vehicle&#39;s Main Info Row |
| --- |
| &lt;tr&gt;   &lt;td&gt;_&lt;!-- Vehicle&#39;s type --&gt;_&lt;/td&gt;   &lt;td&gt;_&lt;!-- Vehicle&#39;s name --&gt;_&lt;/td&gt;   &lt;td&gt;&lt;button&gt;[More/Less] Info&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;                |

When a vehicle&#39;s **row** is created its **initial button&#39;s**** text **should be**&quot;More Info&quot;. **Also, when** clicked **a** [More Info] button **should have the following** functionality:**

- **Changes its text** to **&quot;Less Info&quot;**
- **Creates below** the table&#39;s **row where it is placed on** a new **row** with the **vehicle&#39;s additional info data**. You should use the following **HTML structure**** for **generating the** new row **with** inner table:**

| Template Vehicle&#39;s Additional Info Row |
| --- |
| &lt;tr_class_=&quot;more-info&quot;&gt;    &lt;td_colspan_=&quot;3&quot;&gt;        &lt;table&gt;            &lt;tr&gt;&lt;td&gt;Route: {vehicle&#39;s route}&lt;/td&gt;&lt;/tr&gt;            &lt;tr&gt;&lt;td&gt;Price: {vehicle&#39;s price}&lt;/td&gt;&lt;/tr&gt;            &lt;tr&gt;&lt;td&gt;Driver: {vehicle&#39;s driver}&lt;/td&gt;&lt;/tr&gt;        &lt;/table&gt;    &lt;/td&gt;&lt;/tr&gt;                |

An **additianal vehicle&#39;s row** consists of a **row** with a **single column** that have an **inner table** with **four rows** each having a **single column** with a vehicle data.

Furthermore, when a **[Less Info] button is clicked**, it should have the following **functionality:**

- **Changes its text** to **&quot;More Info&quot;**
- **Removes the row** (below the table&#39;s row where it is placed on)with the **extra**** vehicle&#39;s data**

Also, when **clicked** the **[Search]** and **[Clear] buttons** should have the following **functionality** :

**[Search] button:**

- **Filters** the **vehicles** by the **text** received from the **input boxes** ( **case-sensitive** ) **.** Every **input box** corresponds to the **vehicle&#39;s column** it is **placed on**. You should **show** a **row** (remove **&quot;display: none;&quot;** ) If its **columns include** the **text** from thetheir **corresponding text box** or **hide** it if they do not include(set **&quot;display: none;&quot;** )
- **Removes** any **additional**** vehicle ****rows,** that are **displaying** the **extra data** (route, price, driver), if the **main row** should be **removed** and **sets** its **button text** from **[Less Info]** to **[More Info]**
- ** Do nothing** if **both**** input boxes **are** empty**

**[Clear] button:**

- **Removes** all **filters** and **displays all main vehicle rows**
- **Does nothing** to **additional**** vehicle ****rows**
- **Clears** the **input boxes**

### Submission

Submit only your **PublicTransportTable** class.
