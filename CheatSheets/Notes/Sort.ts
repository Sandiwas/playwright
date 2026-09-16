===================================================================================================================
Set Specific Methods in TypeScript

Declaration:
const fruits: Set<string> = new Set(["Apple", "Mango"]);

----------------------------------------------------------------------------------------------------
| Method          | Return Type          | Description                              | Example                |
----------------------------------------------------------------------------------------------------
| add()           | Set<T>               | Adds a new element to the Set.           | fruits.add("Banana")   |
| delete()        | boolean              | Removes an element from the Set.         | fruits.delete("Mango") |
| has()           | boolean              | Checks if an element exists in the Set.  | fruits.has("Apple")    |
| clear()         | void                 | Removes all elements from the Set.       | fruits.clear()         |
| size            | number               | Returns the number of elements.          | fruits.size            |
| values()        | SetIterator<T>       | Returns an iterator of all values.       | fruits.values()        |
| keys()          | SetIterator<T>       | Returns an iterator of all keys.         | fruits.keys()          |
| entries()       | SetIterator<[T, T]>  | Returns [value, value] pairs.            | fruits.entries()       |
| forEach()       | void                 | Executes a function for each element.    | fruits.forEach(...)    |
----------------------------------------------------------------------------------------------------

=========================================================
1. add()
=========================================================

const fruits = new Set<string>();
fruits.add("Apple");
fruits.add("Mango");

console.log(fruits);
// Set(2) { 'Apple', 'Mango' }

Description:
Adds a new value to the Set. Duplicate values are ignored.

=========================================================
2. delete()
=========================================================

fruits.delete("Mango");

console.log(fruits);
// Set(1) { 'Apple' }

Description:
Removes the specified element from the Set.

=========================================================
3. has()
=========================================================

console.log(fruits.has("Apple"));
// true

console.log(fruits.has("Banana"));
// false

Description:
Checks whether a value exists in the Set.

=========================================================
4. size
=========================================================

console.log(fruits.size);
// 1

Description:
Returns the total number of unique elements in the Set.

=========================================================
5. clear()
=========================================================

fruits.clear();

console.log(fruits);
// Set(0) {}

Description:
Removes all elements from the Set.

=========================================================
6. forEach()
=========================================================

const fruits = new Set(["Apple", "Mango"]);

fruits.forEach(fruit => console.log(fruit));

Output:
Apple
Mango

Description:
Executes a callback function once for each element in the Set.

=========================================================
7. values()
=========================================================

for (const fruit of fruits.values()) {
  console.log(fruit);
}

Output:
Apple
Mango

Description:
Returns an iterator containing all values in the Set.

=========================================================
8. keys()
=========================================================

for (const fruit of fruits.keys()) {
  console.log(fruit);
}

Output:
Apple
Mango

Description:
Returns an iterator of keys. In a Set, keys and values are the same.

=========================================================
9. entries()
=========================================================

for (const entry of fruits.entries()) {
  console.log(entry);
}

Output:
['Apple', 'Apple']
['Mango', 'Mango']

Description:
Returns an iterator of [value, value] pairs.

=========================================================
Real-Time Example - Remove Duplicates
=========================================================

const fruits = ["Apple", "Mango", "Apple", "Banana"];

const uniqueFruits = [...new Set(fruits)];

console.log(uniqueFruits);

Output:
['Apple', 'Mango', 'Banana']

Description:
A Set stores only unique values, so it is commonly used to remove duplicates from an array.

=========================================================
Interview Question
=========================================================

Q: Why do we use Set?

A:
Set stores only unique values. It is mainly used for removing duplicates and performing fast existence checks using has().

----------------------------------------------------------------------------------------------------------------------------------------

=========================================================
Set - Interview Questions & Answers
=========================================================

Q1. What is a Set in TypeScript?

Answer:
A Set is a collection of unique values. It does not allow duplicate elements.

Example:
const fruits = new Set(["Apple", "Mango", "Apple"]);

console.log(fruits);
// Set(2) { 'Apple', 'Mango' }

---------------------------------------------------------

Q2. Why do we use Set?

Answer:
1. To store unique values.
2. To remove duplicates from an array.
3. To perform fast existence checks using has().

Real-Time Example:
const users = ["John", "Mike", "John"];

const uniqueUsers = [...new Set(users)];

console.log(uniqueUsers);
// ['John', 'Mike']

---------------------------------------------------------

Q3. Does Set allow duplicate values?

Answer:
No. Set automatically ignores duplicate values.

Example:
const numbers = new Set<number>();

numbers.add(10);
numbers.add(10);

console.log(numbers);
// Set(1) {10}

---------------------------------------------------------

Q4. How do you add an element to a Set?

Answer:
We use add().

const fruits = new Set<string>();

fruits.add("Apple");
fruits.add("Mango");

---------------------------------------------------------

Q5. How do you remove an element from a Set?

Answer:
We use delete().

const fruits = new Set(["Apple", "Mango"]);

fruits.delete("Mango");

---------------------------------------------------------

Q6. How do you check if an element exists in a Set?

Answer:
We use has().

const fruits = new Set(["Apple", "Mango"]);

console.log(fruits.has("Apple"));
// true

---------------------------------------------------------

Q7. How do you remove all elements from a Set?

Answer:
We use clear().

const fruits = new Set(["Apple", "Mango"]);

fruits.clear();

---------------------------------------------------------

Q8. How do you get the number of elements in a Set?

Answer:
We use the size property.

const fruits = new Set(["Apple", "Mango"]);

console.log(fruits.size);
// 2

---------------------------------------------------------

Q9. How do you remove duplicates from an array?

Answer:

const arr = ["Apple", "Mango", "Apple"];

const unique = [...new Set(arr)];

console.log(unique);
// ['Apple', 'Mango']

---------------------------------------------------------

Q10. Is Set mutable?

Answer:
Yes.

Methods like:
- add()
- delete()
- clear()

modify the original Set.

Example:
const fruits = new Set(["Apple"]);

fruits.add("Mango");

console.log(fruits);
// Set(2) { 'Apple', 'Mango' }

---------------------------------------------------------

Q11. Can we access Set elements using index?

Answer:
No.

This is invalid:

const fruits = new Set(["Apple", "Mango"]);

console.log(fruits[0]); // undefined

To access elements:

for (const fruit of fruits) {
  console.log(fruit);
}

---------------------------------------------------------

Q12. What is the difference between Array and Set?

Answer:

Feature           Array                Set
---------------------------------------------------
Duplicates        Allowed              Not Allowed
Index Access      Yes                  No
Ordering          Yes                  Yes
Unique Values     Manual               Automatic
Length            length               size

---------------------------------------------------------

Q13. When would you use Set in automation testing?

Answer:
1. Verify dropdown has unique values.
2. Remove duplicate test data.
3. Compare unique values from UI and Database.
4. Check duplicate usernames or IDs.

---------------------------------------------------------

Q14. Real-Time Playwright Example

const options = await dropdown.allTextContents();

expect(options.length).toBe(new Set(options).size);

Explanation:
If both values are equal, no duplicates exist.
If lengths are different, duplicates are present.

---------------------------------------------------------

Q15. What is the time complexity of has() in Set?

Answer:
Approximately O(1).

Because Set internally uses a hash-based data structure.

---------------------------------------------------------

Most Important Interview Answer:

Set is a collection of unique values. It is mainly used to remove duplicates and perform fast existence checks.
In automation testing, I commonly use Set to validate that dropdown values or test data do not contain duplicates.