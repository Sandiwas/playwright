===================================================================================================================

Map Specific Methods in TypeScript

Declaration:
const users: Map<number, string> = new Map([
  [1, "John"],
  [2, "Mike"]
]);

---------------------------------------------------------------------------------------------------------
| Method          | Return Type                 | Description                              | Example                 |
---------------------------------------------------------------------------------------------------------
| set()           | Map<K, V>                   | Adds or updates a key-value pair.        | users.set(3, "David")   |
| get()           | V \| undefined              | Returns the value for a key.             | users.get(1)            |
| has()           | boolean                     | Checks if a key exists.                  | users.has(1)            |
| delete()        | boolean                     | Removes a key-value pair.                | users.delete(2)         |
| clear()         | void                        | Removes all entries from the Map.        | users.clear()           |
| size            | number                      | Returns the number of entries.           | users.size              |
| keys()          | MapIterator<K>              | Returns an iterator of all keys.         | users.keys()            |
| values()        | MapIterator<V>              | Returns an iterator of all values.       | users.values()          |
| entries()       | MapIterator<[K, V]>         | Returns key-value pairs.                 | users.entries()         |
| forEach()       | void                        | Executes a function for each entry.      | users.forEach(...)      |
---------------------------------------------------------------------------------------------------------

=========================================================
1. set()
=========================================================

const users = new Map<number, string>();

users.set(1, "John");
users.set(2, "Mike");

console.log(users);
// Map(2) {1 => 'John', 2 => 'Mike'}

Description:
Adds a new key-value pair. If the key already exists, the value is updated.

=========================================================
2. get()
=========================================================

console.log(users.get(1));
// John

console.log(users.get(10));
// undefined

Description:
Returns the value associated with the specified key.

=========================================================
3. has()
=========================================================

console.log(users.has(1));
// true

console.log(users.has(10));
// false

Description:
Checks whether a key exists in the Map.

=========================================================
4. size
=========================================================

console.log(users.size);
// 2

Description:
Returns the total number of key-value pairs in the Map.

=========================================================
5. delete()
=========================================================

users.delete(2);

console.log(users);
// Map(1) {1 => 'John'}

Description:
Removes the specified key and its value from the Map.

=========================================================
6. clear()
=========================================================

users.clear();

console.log(users);
// Map(0) {}

Description:
Removes all entries from the Map.

=========================================================
7. forEach()
=========================================================

const users = new Map([
  [1, "John"],
  [2, "Mike"]
]);

users.forEach((value, key) => {
  console.log(key, value);
});

Output:
1 John
2 Mike

Description:
Executes a callback function once for each key-value pair.

=========================================================
8. keys()
=========================================================

for (const key of users.keys()) {
  console.log(key);
}

Output:
1
2

Description:
Returns an iterator containing all keys.

=========================================================
9. values()
=========================================================

for (const value of users.values()) {
  console.log(value);
}

Output:
John
Mike

Description:
Returns an iterator containing all values.

=========================================================
10. entries()
=========================================================

for (const entry of users.entries()) {
  console.log(entry);
}

Output:
[1, 'John']
[2, 'Mike']

Description:
Returns an iterator containing all key-value pairs.

=========================================================
Real-Time Example - Store Credentials
=========================================================

const credentials = new Map<string, string>();

credentials.set("admin", "admin123");
credentials.set("manager", "manager123");

console.log(credentials.get("admin"));

Output:
admin123

Description:
Map is commonly used to store username-password pairs.

=========================================================
Real-Time Example - Environment URLs
=========================================================

const urls = new Map<string, string>();

urls.set("QA", "https://qa.xyz.com");
urls.set("UAT", "https://uat.xyz.com");
urls.set("PROD", "https://prod.xyz.com");

await page.goto(urls.get("QA")!);

Description:
Map is useful when we need to retrieve data using a key.

=========================================================
Interview Question
=========================================================

Q: Why do we use Map?

A:
Map stores data in key-value pairs and provides fast lookup using keys. In automation testing, it is commonly used to store credentials, environment URLs, API headers, and expected values.

=========================================================
Interview Question
=========================================================

Q: What is the difference between Set and Map?

A:

Set:
Stores only unique values.

Map:
Stores unique keys and their corresponding values.

Example:

Set:
{"Apple", "Mango"}

Map:
{
  1 => "John",
  2 => "Mike"
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

========================================================
Map - Interview Questions & Answers (TypeScript)
=========================================================

Q1. What is a Map in TypeScript?

Answer:
A Map is a collection of key-value pairs where each key is unique.

Example:

const employees = new Map<number, string>();

employees.set(101, "John");
employees.set(102, "Mike");

console.log(employees);
// Map(2) {101 => 'John', 102 => 'Mike'}

---------------------------------------------------------

Q2. Why do we use Map?

Answer:
1. To store data as key-value pairs.
2. To perform fast lookups using keys.
3. Keys can be of any data type.
4. To maintain insertion order.

---------------------------------------------------------

Q3. What is the difference between Object and Map?

Answer:

Feature              Object               Map
---------------------------------------------------
Key Type             String/Symbol        Any Type
Iteration            Difficult            Easy
Size                 Manual               size property
Order                Not guaranteed       Insertion order
Methods              Limited              Rich API

---------------------------------------------------------

Q4. How do you add data to a Map?

Answer:
We use set().

const users = new Map<number, string>();

users.set(1, "John");
users.set(2, "Mike");

---------------------------------------------------------

Q5. How do you get a value from a Map?

Answer:
We use get().

console.log(users.get(1));
// John

---------------------------------------------------------

Q6. How do you check if a key exists?

Answer:
We use has().

console.log(users.has(1));
// true

console.log(users.has(10));
// false

---------------------------------------------------------

Q7. How do you remove an element from a Map?

Answer:
We use delete().

users.delete(1);

---------------------------------------------------------

Q8. How do you remove all elements from a Map?

Answer:
We use clear().

users.clear();

---------------------------------------------------------

Q9. How do you get the number of elements in a Map?

Answer:
We use the size property.

console.log(users.size);

---------------------------------------------------------

Q10. Is Map mutable?

Answer:
Yes.

Methods like:
- set()
- delete()
- clear()

modify the original Map.

Example:

const users = new Map();

users.set(1, "John");
users.set(2, "Mike");

---------------------------------------------------------

Q11. Can duplicate keys exist in a Map?

Answer:
No.

Keys must be unique.

Example:

const users = new Map();

users.set(1, "John");
users.set(1, "Mike");

console.log(users);
// Map(1) {1 => 'Mike'}

The second value overwrites the first value.

---------------------------------------------------------

Q12. Can duplicate values exist in a Map?

Answer:
Yes.

const users = new Map();

users.set(1, "John");
users.set(2, "John");

console.log(users);
// Map(2) {1 => 'John', 2 => 'John'}

---------------------------------------------------------

Q13. How do you iterate through a Map?

Answer:

for (const [key, value] of users) {
  console.log(key, value);
}

---------------------------------------------------------

Q14. What are the important Map methods?

Method        Description
---------------------------------------------------
set()         Adds/updates a key-value pair
get()         Gets a value using key
has()         Checks if key exists
delete()      Removes an entry
clear()       Removes all entries
size          Returns number of entries
keys()        Returns all keys
values()      Returns all values
entries()     Returns key-value pairs
forEach()     Iterates through Map

---------------------------------------------------------

Q15. Real-Time Example in Automation Testing

Store Test Data:

const credentials = new Map<string, string>();

credentials.set("admin", "admin123");
credentials.set("user", "user123");

console.log(credentials.get("admin"));

---------------------------------------------------------

Q16. Real-Time Example in Playwright

const users = new Map<string, string>();

users.set("Admin", "admin123");
users.set("Manager", "manager123");

await page.fill('#username', users.get("Admin")!);

---------------------------------------------------------

Q17. When would you use Map in automation testing?

Answer:
1. Store username-password pairs.
2. Store environment URLs.
3. Store test data.
4. Store API headers.
5. Store expected values for validation.

---------------------------------------------------------

Q18. Why would you choose Map instead of Array?

Answer:
Because finding data in a Map using a key is faster and cleaner than searching an array.

---------------------------------------------------------

Most Important Interview Answer:

Map is a collection of unique key-value pairs. It is mainly used when data needs to be stored and retrieved using a key. In automation testing, I use Map to store test data, credentials, environment URLs, and expected values because it provides fast lookup and cleaner code.

=========================================================
Map Specific Methods
=========================================================

Method         Return Type                     Description
----------------------------------------------------------------------
set()          Map<K, V>                       Adds or updates an entry
get()          V | undefined                  Returns value for a key
has()          boolean                        Checks if key exists
delete()       boolean                        Removes an entry
clear()        void                           Removes all entries
size           number                         Number of entries
keys()         MapIterator<K>                 Returns all keys
values()       MapIterator<V>                 Returns all values
entries()      MapIterator<[K, V]>            Returns key-value pairs
forEach()      void                           Executes callback for each entry