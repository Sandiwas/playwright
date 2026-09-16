=========================================================
Array Specific Properties and Methods
=========================================================

-----------------------------------------------------------------------------------------------------------
| Method/Property | Return Type            | Description                               | Example                |
-----------------------------------------------------------------------------------------------------------
| length          | number                 | Returns the number of elements.           | arr.length             |
| push()          | number                 | Adds element(s) at the end.               | arr.push("Apple")      |
| pop()           | T \| undefined         | Removes the last element.                 | arr.pop()              |
| unshift()       | number                 | Adds element(s) at the beginning.         | arr.unshift("Apple")   |
| shift()         | T \| undefined         | Removes the first element.                | arr.shift()            |
| splice()        | T[]                    | Adds/removes elements at an index.        | arr.splice(1,1)        |
| slice()         | T[]                    | Returns a portion of the array.           | arr.slice(1,3)         |
| concat()        | T[]                    | Combines two or more arrays.              | arr1.concat(arr2)      |
| includes()      | boolean                | Checks if an element exists.              | arr.includes("A")      |
| indexOf()       | number                 | Returns the index of an element.          | arr.indexOf("A")       |
| join()          | string                 | Converts array into a string.             | arr.join(",")          |
| reverse()       | T[]                    | Reverses the original array.              | arr.reverse()          |
| sort()          | T[]                    | Sorts the original array.                 | arr.sort()             |
| map()           | U[]                    | Creates a new transformed array.          | arr.map(...)           |
| filter()        | T[]                    | Returns all matching elements.            | arr.filter(...)        |
| find()          | T \| undefined         | Returns the first matching element.       | arr.find(...)          |
| forEach()       | void                   | Executes a function for each element.     | arr.forEach(...)       |
| some()          | boolean                | Returns true if any element matches.      | arr.some(...)          |
| every()         | boolean                | Returns true if all elements match.       | arr.every(...)         |
| reduce()        | T                      | Reduces array to a single value.          | arr.reduce(...)        |
-----------------------------------------------------------------------------------------------------------

=========================================================
Array Specific Properties and Methods
=========================================================

Assume:
const arr = ["Apple", "Mango", "Banana"];

------------------------------------------------------------------------------------------------------------------------
| Method/Property | Return Type            | Description                               | Example                          | Output                    |
------------------------------------------------------------------------------------------------------------------------
| length          | number                 | Returns the number of elements.           | arr.length                       | 3                         |
| push()          | number                 | Adds element(s) at the end.               | arr.push("Orange")               | ["Apple","Mango","Banana","Orange"] |
| pop()           | T \| undefined         | Removes the last element.                 | arr.pop()                        | "Banana"                  |
| unshift()       | number                 | Adds element(s) at the beginning.         | arr.unshift("Orange")            | ["Orange","Apple","Mango","Banana"] |
| shift()         | T \| undefined         | Removes the first element.                | arr.shift()                      | "Apple"                   |
| splice()        | T[]                    | Adds/removes elements at an index.        | arr.splice(1,1)                  | Removes "Mango"           |
| slice()         | T[]                    | Returns a portion of the array.           | arr.slice(1,3)                   | ["Mango","Banana"]        |
| concat()        | T[]                    | Combines two or more arrays.              | arr.concat(["Orange"])           | ["Apple","Mango","Banana","Orange"] |
| includes()      | boolean                | Checks if an element exists.              | arr.includes("Apple")            | true                      |
| indexOf()       | number                 | Returns the index of an element.          | arr.indexOf("Mango")             | 1                         |
| join()          | string                 | Converts array into a string.             | arr.join(",")                    | "Apple,Mango,Banana"      |
| reverse()       | T[]                    | Reverses the original array.              | arr.reverse()                    | ["Banana","Mango","Apple"] |
| sort()          | T[]                    | Sorts the original array.                 | arr.sort()                       | ["Apple","Banana","Mango"] |
| map()           | U[]                    | Creates a new transformed array.          | arr.map(x => x.toUpperCase())    | ["APPLE","MANGO","BANANA"] |
| filter()        | T[]                    | Returns all matching elements.            | arr.filter(x => x.includes("a")) | ["Mango","Banana"]        |
| find()          | T \| undefined         | Returns the first matching element.       | arr.find(x => x==="Mango")       | "Mango"                   |
| forEach()       | void                   | Executes a function for each element.     | arr.forEach(x=>console.log(x))   | Apple Mango Banana        |
| some()          | boolean                | Returns true if any element matches.      | arr.some(x => x==="Apple")       | true                      |
| every()         | boolean                | Returns true if all elements match.       | arr.every(x => x.length > 3)     | true                      |
| reduce()        | T                      | Reduces array to a single value.          | arr.reduce((a,b)=>a+","+b)       | "Apple,Mango,Banana"      |
------------------------------------------------------------------------------------------------------------------------


Assume:
const arr = ["Apple", "Mango", "Banana"];

=========================================================
1. map()
=========================================================

Purpose:
Transforms every element and returns a NEW array.

Example:
const upper = arr.map(x => x.toUpperCase());

console.log(upper);

Output:
["APPLE", "MANGO", "BANANA"]

Diagram:

Original Array
["Apple", "Mango", "Banana"]

      map(toUpperCase)

New Array
["APPLE", "MANGO", "BANANA"]

Interview Point:
map() always returns a new array.
The original array is not modified.

---------------------------------------------------------

=========================================================
2. filter()
=========================================================

Purpose:
Returns all elements that satisfy a condition.

Example:
const result =
arr.filter(x => x.includes("a"));

console.log(result);

Output:
["Mango", "Banana"]

Diagram:

["Apple", "Mango", "Banana"]

Apple  ❌
Mango  ✅
Banana ✅

Result:
["Mango", "Banana"]

Interview Point:
filter() can return zero, one, or many elements.

---------------------------------------------------------

=========================================================
3. find()
=========================================================

Purpose:
Returns the FIRST element that satisfies a condition.

Example:
const fruit =
arr.find(x => x.includes("a"));

console.log(fruit);

Output:
"Mango"

Diagram:

["Apple", "Mango", "Banana"]

Apple  ❌
Mango  ✅ ← Stop Here
Banana (Not Checked)

Result:
"Mango"

Interview Point:
find() returns only the first matching element.

---------------------------------------------------------

=========================================================
4. forEach()
=========================================================

Purpose:
Executes a function for every element.

Example:
arr.forEach(x => console.log(x));

Output:
Apple
Mango
Banana

Diagram:

["Apple", "Mango", "Banana"]

↓
Print Apple
↓
Print Mango
↓
Print Banana

Interview Point:
forEach() does not return anything.

---------------------------------------------------------

=========================================================
5. some()
=========================================================

Purpose:
Returns true if at least ONE element satisfies a condition.

Example:
const result =
arr.some(x => x === "Apple");

console.log(result);

Output:
true

Diagram:

["Apple", "Mango", "Banana"]

Apple  ✅ ← Stop Here

Result:
true

Interview Point:
some() stops as soon as it finds one match.

---------------------------------------------------------

=========================================================
6. every()
=========================================================

Purpose:
Returns true only if ALL elements satisfy a condition.

Example:
const result =
arr.every(x => x.length > 3);

console.log(result);

Output:
true

Diagram:

["Apple", "Mango", "Banana"]

Apple  ✅
Mango  ✅
Banana ✅

Result:
true

Another Example:

arr.every(x => x.includes("a"));

Output:
false

Because:

Apple  ❌ ← Stop Here

Interview Point:
every() stops when the first false condition is found.

---------------------------------------------------------

=========================================================
7. reduce()
=========================================================

Purpose:
Reduces an array to a single value.

Example:
const result =
arr.reduce((a, b) => a + ", " + b);

console.log(result);

Output:
"Apple, Mango, Banana"

Step-by-Step:

Iteration 1:
a = "Apple"
b = "Mango"

Result:
"Apple, Mango"

Iteration 2:
a = "Apple, Mango"
b = "Banana"

Result:
"Apple, Mango, Banana"

Final Output:
"Apple, Mango, Banana"

---------------------------------------------------------

Another Example:

const nums = [1,2,3,4];

const sum =
nums.reduce((a,b) => a + b);

console.log(sum);

Output:
10

Steps:

1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

Interview Point:
reduce() converts multiple values into one single value.
Examples:
- Sum
- Average
- Count
- Grouping Data
- Building Objects

=========================================================
Arrays in TypeScript - Interview Notes
=========================================================

Q1. What is an Array in TypeScript?

Answer:
An array is a collection of elements of the same type stored in a single variable.

Example:

const fruits: string[] = ["Apple", "Mango", "Banana"];

---------------------------------------------------------

Q2. Why do we use Arrays?

Answer:
1. To store multiple values in a single variable.
2. Easy to iterate through data.
3. Provides many built-in methods for data manipulation.

Real-Time Example:

const users = ["John", "Mike", "David"];

---------------------------------------------------------

Q3. How do you declare an Array in TypeScript?

Method 1:

const numbers: number[] = [1, 2, 3];

Method 2:

const numbers: Array<number> = [1, 2, 3];

---------------------------------------------------------

Q4. Are Arrays mutable?

Answer:
Yes.

Methods like:
- push()
- pop()
- sort()
- splice()
modify the original array.

Example:

const arr = [3, 1, 2];

arr.sort();

console.log(arr);
// [1,2,3]

---------------------------------------------------------

Q5. Are Arrays reference types?

Answer:
Yes.

Example:

const arr1 = [1,2,3];
const arr2 = arr1;

arr1.push(4);

console.log(arr2);
// [1,2,3,4]

Both variables point to the same array in memory.

---------------------------------------------------------

Q6. How do you create a copy of an Array?

Answer:

const arr2 = [...arr1];

---------------------------------------------------------

Q7. How do you add an element to an Array?

Answer:

arr.push("Apple");

---------------------------------------------------------

Q8. How do you add an element at the beginning?

Answer:

arr.unshift("Apple");

---------------------------------------------------------

Q9. How do you remove the last element?

Answer:

arr.pop();

---------------------------------------------------------

Q10. How do you remove the first element?

Answer:

arr.shift();

---------------------------------------------------------

Q11. How do you add/remove elements at a specific index?

Answer:

arr.splice(index, deleteCount, value);

Example:

arr.splice(1, 0, "Orange");

---------------------------------------------------------

Q12. How do you check if an element exists?

Answer:

arr.includes("Apple");

---------------------------------------------------------

Q13. How do you find an element?

Answer:

arr.find(x => x === "Apple");

---------------------------------------------------------

Q14. How do you get the index of an element?

Answer:

arr.indexOf("Apple");

---------------------------------------------------------

Q15. How do you sort an Array?

Answer:

arr.sort();

---------------------------------------------------------

Q16. How do you reverse an Array?

Answer:

arr.reverse();

---------------------------------------------------------

Q17. How do you combine Arrays?

Answer:

const arr3 = arr1.concat(arr2);

OR

const arr3 = [...arr1, ...arr2];

---------------------------------------------------------

Q18. How do you convert an Array into a String?

Answer:

arr.join(",");

---------------------------------------------------------

Q19. How do you remove duplicates from an Array?

Answer:

const unique = [...new Set(arr)];

---------------------------------------------------------

Q20. How do you iterate through an Array?

Answer:

for (const item of arr) {
  console.log(item);
}

OR

arr.forEach(item => console.log(item));

---------------------------------------------------------

Q21. What is the difference between map() and forEach()?

Answer:

map()
------
Returns a new array.

forEach()
----------
Does not return anything.

---------------------------------------------------------

Q22. What is the difference between find() and filter()?

Answer:

find()
------
Returns first matching element.

filter()
---------
Returns all matching elements.

---------------------------------------------------------

Q23. What is the difference between some() and every()?

Answer:

some()
------
Returns true if at least one element matches.

every()
--------
Returns true if all elements match.

---------------------------------------------------------

Q24. What is the difference between slice() and splice()?

Answer:

slice()
-------
Does not modify original array.

splice()
--------
Modifies original array.

---------------------------------------------------------

Q25. What is the time complexity of indexOf()?

Answer:
O(n)

Because it searches element one by one.

---------------------------------------------------------

Q26. What is the time complexity of push()?

Answer:
O(1)

---------------------------------------------------------

Q27. What is the time complexity of unshift()?

Answer:
O(n)

Because all elements need to be shifted.

---------------------------------------------------------

Q28. Real-Time Example in Playwright

const options =
await dropdown.allTextContents();

expect(options).toContain("Red");

---------------------------------------------------------

Q29. Real-Time Example - Verify Dropdown is Sorted

const options =
await dropdown.allTextContents();

const sorted = [...options].sort();

expect(options).toEqual(sorted);

---------------------------------------------------------

Q30. Real-Time Example - Verify No Duplicates

const options =
await dropdown.allTextContents();

expect(options.length)
.toBe(new Set(options).size);

---------------------------------------------------------

Most Important Interview Answer:

Array is an ordered collection of elements stored in a single variable. Arrays in TypeScript are mutable and are reference types. They provide many built-in methods such as map(), filter(), find(), sort(), and reduce() to manipulate data efficiently.


-----------------------------------------------------------------------------------------------------------