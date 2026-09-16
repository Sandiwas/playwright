=====================================================================================================================================================================

Yes, arrays in JavaScript/TypeScript are mutable. That means methods
 like sort(), push(), pop(), splice(), etc., change the original array.


 Case 1: Same Reference (Impacted)

 const arr1 = [3, 1, 2];
const arr2 = arr1;

arr1.sort();

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]



Why?
arr2 = arr1 means both variables point to the same array in memory.
Case 2: Copy of Array (Not Impacted)
const arr1 = [3, 1, 2];
const arr2 = [...arr1];

arr1.sort();

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [3, 1, 2]



[...arr1] creates a new array.
Interview Answer

Yes, arrays in TypeScript are mutable. Methods like sort() modify the original array.
 If two variables reference the same array, both will be affected. To avoid this,
  create a copy using the spread operator (...) before applying mutating methods.


 const sorted = [...arr1].sort();
This keeps arr1 unchanged.



-------------------------------------------------------------------------------------------------------------------------------------------------------------
Arrays are Reference Types

Example 1: Same Reference

const arr1 = [3, 1, 2];
const arr2 = arr1;

Memory:

arr1 ───┐
        │
        ▼
      [3, 1, 2]
        ▲
        │
arr2 ───┘

arr1.sort();

Memory after sort:

arr1 ───┐
        │
        ▼
      [1, 2, 3]
        ▲
        │
arr2 ───┘

Output:
arr1 → [1, 2, 3]
arr2 → [1, 2, 3]

Reason:
arr1 and arr2 point to the SAME array in memory.


--------------------------------------------------


Example 2: Copy of Array

const arr1 = [3, 1, 2];
const arr2 = [...arr1];

Memory:

arr1 ───► [3, 1, 2]

arr2 ───► [3, 1, 2]

arr1.sort();

Memory after sort:

arr1 ───► [1, 2, 3]

arr2 ───► [3, 1, 2]

Output:
arr1 → [1, 2, 3]
arr2 → [3, 1, 2]

Reason:
arr1 and arr2 point to DIFFERENT arrays in memory.


Interview One-Liner:
Arrays are reference types. Doing
const arr2 = arr1;
copies the reference, not the actual array data.
Therefore, changes in one array affect the other.