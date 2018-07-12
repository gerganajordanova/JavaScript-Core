# JS Advanced: Exam 26 April 2018

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/1004/](https://judge.softuni.bg/Contests/1004/).

## Problem 1. Bus Route (Simple DOM Interaction)

You are given the following **HTML code** :

| bus-route.html |
| --- |
| &lt;!DOCTYPE html&gt;&lt;html_lang_=&quot;en&quot;&gt;&lt;head&gt;  &lt;meta_charset_=&quot;UTF-8&quot;&gt;  &lt;title&gt;Bus route&lt;/title&gt;  &lt;style&gt;    body{padding:30px;display:flex;flex-direction:row}section{width:250px;margin:050px;background:#DEEAEE;padding:025px}h2,h3{text-align:center}h3{margin:0}ol,ul{padding:020px}button{margin:5pxauto}li{padding:2px5px}li_:__nth-child_(even){background:#EAF7FB}li_:__nth-child_(odd){background:#C6D1D4}_# __enter-stops_{padding:25px10px}_#__ enter-stops_&gt;\*{display:block;padding:10px35px}_# __selected-bus-stops_li_:__ first-child_{background:#b1cbbb}_# __selected-bus-stops_li_:__ last-child_{background:#eea29a}_#__enter-stops_h2{margin:0;text-align:left}span{color:#485788}  &lt;/style&gt;  &lt;script_src_=&quot;https://code.jquery.com/jquery-3.3.1.min.js&quot;&gt;&lt;/script&gt;&lt;/head&gt;&lt;body&gt;    &lt;section&gt;        &lt;h2&gt;Given bus route&lt;/h2&gt;        &lt;ol_id_=&quot;bus-stops&quot; _type_=&quot;1&quot;&gt;            _&lt;!-- Select bus stops from here --&gt;_        &lt;/ol&gt;    &lt;/section&gt;    &lt;div_class_=&quot;wrapper&quot;&gt;        &lt;section_id_=&quot;enter-stops&quot;&gt;            &lt;h2&gt;Enter bus stops:&lt;/h2&gt;            &lt;label&gt;First bus stop&#39;s number:                &lt;input_name_=&quot;first-stop&quot; _type_=&quot;number&quot;&gt;            &lt;/label&gt;            &lt;label&gt;Last bus stop&#39;s number:                &lt;input_name_=&quot;last-stop&quot; _type_=&quot;number&quot;&gt;            &lt;/label&gt;            &lt;button_onclick_=&quot;busRoute()&quot;&gt;Enter&lt;/button&gt;        &lt;/section&gt;    &lt;/div&gt;        &lt;section&gt;        &lt;h2&gt;Selected route&lt;/h2&gt;        &lt;h3_id_=&quot;selected-route&quot;&gt;Bus stops: &lt;span&gt;none&lt;/span&gt;&lt;/h3&gt;        &lt;ul_id_=&quot;selected-bus-stops&quot;&gt;            _&lt;!-- Display your selected bus stops here --&gt;_        &lt;/ul&gt;    &lt;/section&gt;    &lt;script&gt;        functionbusRoute(){            _// TODO: Write your code here_        }        $(()=&gt;{            let busStops = [                &quot;Gen. Gurko St.&quot;,                &quot;Sofia University&quot;,                &quot;Eagles&#39; Bridge Sq.&quot;,                &quot;Bulgarian News Agency&quot;,                &quot;Peyo Yavorov Blvd.&quot;,                &quot;Aleksandar Zhendov Bvld.&quot;,                _// You can add/remove bus stops from here_           ]            let listBusStops =$(&#39;#bus-stops&#39;)            _for_ (let i =0; i &lt; busStops.length; i++) {                const busStopLi =$(&#39;&lt;li&gt;&#39;).text(busStops[i]);                                listBusStops.append(busStopLi)            }        })    &lt;/script&gt;&lt;/body&gt;&lt;/html&gt; |

### Your Task

**Write the missing JavaScript function busRoute()** to make the **[Enter]** button work as expected – when clicked **selects** your **bus stops** from your **given route** of the bus from **top** to **bottom** and **displays them** in the **selected**** route **. The** [Enter]** button should:

- **Receives** the **text** from the **input boxes** and:

- **oo**** Replaces **the** text **&quot;none&quot; inside the** span **element** with **the** selected ****bus stops** in the following **format** : **&quot;{firstStop}–{lastStop}&quot;**
- **oo**** Selects **from the** given route **of the bus** with **the** received bus stops **and** displays it **to the** list **with** ID **of**&quot;selected-bus-stops&quot;.** _See the examples for more details._

- **Clears** the **input boxes** after the **bus stops** are **selected** correctly
- **Do nothing** if:

- **oo**** Either **of** text boxes **is** empty**
- **oo** There is **invalid data**

Note that, the **starting** (first) **bus**** stop ****must** always **come before** the **ending** (last) **one** and the **two**** stops ****must** always **be different**. Also, every **bus stop**** number ****corresponds** to its **given one** by the **list** with **ID** of **&quot;bus-stops&quot;.**

All **given**** numbers **to the** text boxes **for** selecting **the** bus stops ****will**** be ****integers**.

### Submission

Submit only your **busRoute** function.

