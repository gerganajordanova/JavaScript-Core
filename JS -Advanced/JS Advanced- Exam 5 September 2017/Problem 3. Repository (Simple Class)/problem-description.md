# JS Advanced:Exam 5 September 2017

Problems for exam preparation for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions in the SoftUni judge system at [https://judge.softuni.bg/Contests/756/](https://judge.softuni.bg/Contests/756/).

## Problem 3. Repository (Simple Class)

Write a JavaScript class **Repository** that has **props** (object that will validate an entity) and **data** (a Map which stores entities). All entities inside the repository have the **same properties** (listed in the props) and a **unique ID** , that is assigned when they are added, **starting at zero**.

| **class** Repository {
    _//_ **TODO: implement this class**
} |
| --- |

The class **constructor** should receive one parameter – **props** (object), and initialize the **data** with a new **Map** instance **.** Implement the following features:

- Property **data** – **Map** that holds added entities
- Function **add(entity)** – adds an entity to the data; if successful, returns the resulting ID
- Function **get(id)** – returns the entity with given ID
- Function **update(id, newEntity)** – replaces the entity with the given id with the new entity
- Function **del(id)** – deletes an entity by given id
- Getter **count** – returns the number of stored entities

The **props** parameter is used to **validate** entities added to the repository and is an object with format:

{

  propName1: propType1,

  propName2: propType2,

  …

  propNameN: propTypeN

}

When an entity is **added** to the repository, it should be **validated** against the props object – it needs to have all of the properties that the props object has and their values must be of the specified type. For example, if **props** has a property **&quot;name&quot;** with value **&quot;string&quot;** , all entities added must have a **name** property with value of type **string**. If **any** property is **missing** , you should **throw** an **Error** with message: **&quot;**** Property {propName} is missing from the entity! ****&quot;**. If the property is present, but is of **incorrect** type, **throw** a **TypeError** with message **&quot;**** Property {propertName} is of incorrect type! ****&quot;****.** If validation is successful, add the entity to the repository with a new ID. Store entities in a Map where the key is the ID and the value is the entity.

To **update** an entity, we receive its **id** and the **new** entity object. If the id does **not** exist in the **data** throw an **Error** with message **&quot;**** Entity with id: {id} does not exist! ****&quot;**. Validate the **new** entity with the **same** validations and **replace** the old one with the new one.

To **delete** an entity, we receive only its **id**. If the id does **not** exist in the **data** throw an **Error** with message **&quot;**** Entity with id: {id} does not exist! ****&quot;**. After that **remove** the entity from the **map**.

### Examples

This is an example how the **Repository** class is **intended to be used**. Make sure to comment out the parts that throw an error!

| Sample code usage |
| --- |
| _// Initialize props object_
**let**  **properties** = {
     **name** : **&quot;string&quot;** ,
     **age** : **&quot;number&quot;** ,
     **birthday** : **&quot;object&quot;**
};
_//Initialize the repository_
**let**  **repository** = **new**  **Repository** ( **properties** );
_// Add two entities_
**let**  **entity** = {
     **name** : **&quot;Kiril&quot;** ,
     **age** : 19,
     **birthday** : **new** Date(1998, 0, 7)
};
**repository**.add( **entity** );_//_ _Returns_ _0_
**repository**.add( **entity** );_//_ _Returns_ _1_
**console**.log( **repository**.get(0));_// {&quot;name&quot;:&quot;Kiril&quot;,&quot;age&quot;:19,&quot;birthday&quot;:&quot;1998-01-06T22:00:00.000Z&quot;}_ **console**.log( **repository**.get(1));_// {&quot;name&quot;:&quot;Kiril&quot;,&quot;age&quot;:19,&quot;birthday&quot;:&quot;1998-01-06T22:00:00.000Z&quot;}
//Update an entity_ **entity** = {
     **name** : **&#39;Valio&#39;** ,
     **age** : 19,
     **birthday** : **new** Date(1998, 0, 7)
};
**repository**.update(1, **entity** );
**console**.log( **repository**.get(1));_// {&quot;name&quot;:&quot;Valio&quot;,&quot;age&quot;:19,&quot;birthday&quot;:&quot;1998-01-06T22:00:00.000Z&quot;}
// Delete an entity_ **repository**.del(0);
**console**.log( **repository**.count);_//_ _Returns_ _1_ **let**  **anotherEntity** = {
     **name1** : **&#39;Nakov&#39;** ,
     **age** : 26,
     **birthday** : **new** Date(1991, 0, 21)
};
**repository**.add( **anotherEntity** ); _// should throw an Error_
**anotherEntity** = {
     **name** : **&#39;Nakov&#39;** ,
     **age** : 26,
     **birthday** : 1991
};
**repository**.add( **anotherEntity** ); _// should throw a TypeError_
**repository**.del(-1); _// should throw Error for invalid id_ |

We add **two** entities which are exactly the same. After that the second one is **updated** with a **different** name and lastly, we **delete** the entity with id **zero**. The corresponding output is **without** the errors.

### Constraints

- The ID should change **only** when we **add** a new entity.
- The ID is unique per repository – if two repositories are instantiated, each has its own counter.

### Submission

Submit **only** your class **Repository**.

### Hints

Use **typeof** of determine the type of a property.