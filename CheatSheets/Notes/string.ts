=======================================================================================================================================
=========================================================
String Validation Methods in TypeScript
=========================================================

Assume:
const str = "Hello World";

-------------------------------------------------------------------------------------------------------------------
| Method             | Return Type         | Description                                  | Example                         | Output      |
-------------------------------------------------------------------------------------------------------------------
| includes()         | boolean             | Checks if text exists in the string          | str.includes("World")           | true        |
| startsWith()       | boolean             | Checks if string starts with given text      | str.startsWith("Hello")         | true        |
| endsWith()         | boolean             | Checks if string ends with given text        | str.endsWith("World")           | true        |
| indexOf()          | number              | Returns first index of text, -1 if not found | str.indexOf("World")            | 6           |
| lastIndexOf()      | number              | Returns last index of text                   | str.lastIndexOf("o")            | 7           |
| match()            | RegExpMatchArray    | Finds text matching regex                    | str.match(/World/)              | ["World"]   |
| search()           | number              | Returns index of regex match                 | str.search(/World/)             | 6           |
| localeCompare()    | number              | Compares two strings alphabetically          | "Apple".localeCompare("Banana") | -1          |
-------------------------------------------------------------------------------------------------------------------



=========================================================
String Assertion Methods in Playwright
=========================================================

Assume:
const text = "Hello World";

------------------------------------------------------------------------------------------------------------------------------
| Assertion Method      | Description                                  | Example                                      | Result |
------------------------------------------------------------------------------------------------------------------------------
| toBe()                | Checks exact string equality                 | expect(text).toBe("Hello World")             | Pass   |
| toEqual()             | Checks deep equality                         | expect(text).toEqual("Hello World")          | Pass   |
| toContain()           | Checks if string contains text               | expect(text).toContain("World")              | Pass   |
| toMatch()             | Checks using Regular Expression              | expect(text).toMatch(/World/)                | Pass   |
| not.toBe()            | Checks strings are not equal                 | expect(text).not.toBe("Hello")               | Pass   |
| not.toContain()       | Checks string does not contain text          | expect(text).not.toContain("Java")           | Pass   |
| not.toMatch()         | Checks regex does not match                  | expect(text).not.toMatch(/Java/)             | Pass   |
| toHaveText()          | Verifies exact element text                  | await expect(locator).toHaveText("Login")    | Pass   |
| toContainText()       | Verifies partial element text                | await expect(locator).toContainText("Login") | Pass   |
| toHaveTitle()         | Verifies exact page title                    | await expect(page).toHaveTitle("OrangeHRM")  | Pass   |
| toHaveURL()           | Verifies exact page URL                      | await expect(page).toHaveURL(url)            | Pass   |
| toHaveAttribute()     | Verifies attribute value                     | await expect(locator).toHaveAttribute(...)   | Pass   |
------------------------------------------------------------------------------------------------------------------------------


=========================================================
Detailed Examples
=========================================================

const str = "Hello World";

---------------------------------------------------------
1. includes()
---------------------------------------------------------

console.log(str.includes("World"));
// true

console.log(str.includes("Java"));
// false

Description:
Checks whether a substring exists in the string.

---------------------------------------------------------
2. startsWith()
---------------------------------------------------------

console.log(str.startsWith("Hello"));
// true

console.log(str.startsWith("World"));
// false

Description:
Checks whether the string starts with specific text.

---------------------------------------------------------
3. endsWith()
---------------------------------------------------------

console.log(str.endsWith("World"));
// true

console.log(str.endsWith("Hello"));
// false

Description:
Checks whether the string ends with specific text.

---------------------------------------------------------
4. indexOf()
---------------------------------------------------------

console.log(str.indexOf("World"));
// 6

console.log(str.indexOf("Java"));
// -1

Description:
Returns the first occurrence index.
Returns -1 if text is not found.

---------------------------------------------------------
5. lastIndexOf()
---------------------------------------------------------

console.log(str.lastIndexOf("o"));
// 7

Description:
Returns the last occurrence index.

---------------------------------------------------------
6. match()
---------------------------------------------------------

console.log(str.match(/World/));
// ['World']

Description:
Searches the string using a Regular Expression.

---------------------------------------------------------
7. search()
---------------------------------------------------------

console.log(str.search(/World/));
// 6

Description:
Returns the index of a regex match.

---------------------------------------------------------
8. localeCompare()
---------------------------------------------------------

console.log("Apple".localeCompare("Banana"));
// -1

console.log("Banana".localeCompare("Apple"));
// 1

console.log("Apple".localeCompare("Apple"));
// 0

Description:
Compares two strings alphabetically.

-1 → first string comes before second string
 0 → both strings are equal
 1 → first string comes after second string

=========================================================
Real-Time Playwright Examples
=========================================================

Verify Exact Text

await expect(locator)
  .toHaveText("Login");

---------------------------------------------------------

Verify Partial Text

await expect(locator)
  .toContainText("Welcome");

---------------------------------------------------------

Verify URL Contains Text

expect(page.url())
  .toContain("dashboard");

---------------------------------------------------------

Verify Page Title

await expect(page)
  .toHaveTitle("OrangeHRM");

---------------------------------------------------------

Verify Attribute Value

await expect(locator)
  .toHaveAttribute("type", "text");

=========================================================
Interview Questions & Answers
=========================================================

Q1. Which method is most commonly used to check if a string contains text?

Answer:
includes()

---------------------------------------------------------

Q2. What does indexOf() return when text is not found?

Answer:
-1

---------------------------------------------------------

Q3. What is the difference between includes() and indexOf()?

includes()
----------
Returns boolean.

indexOf()
---------
Returns index.

---------------------------------------------------------

Q4. Which method is used to check prefix?

Answer:
startsWith()

---------------------------------------------------------

Q5. Which method is used to check suffix?

Answer:
endsWith()

---------------------------------------------------------

Q6. Which methods are most used in automation testing?

1. includes()
2. startsWith()
3. endsWith()
4. indexOf()
5. match()

---------------------------------------------------------

Most Important Interview Answer:

For string validations, I mostly use includes(), startsWith(), endsWith(), and indexOf(). 
In Playwright, these validations are commonly used to verify page titles, URLs, messages, and element text.



=========================================================
String Assertion Methods in Playwright
=========================================================

Assume:
const text = "Hello World";

------------------------------------------------------------------------------------------------------------------------------
| Assertion Method      | Description                                  | Example                                      | Result |
------------------------------------------------------------------------------------------------------------------------------
| toBe()                | Checks exact string equality                 | expect(text).toBe("Hello World")             | Pass   |
| toEqual()             | Checks deep equality                         | expect(text).toEqual("Hello World")          | Pass   |
| toContain()           | Checks if string contains text               | expect(text).toContain("World")              | Pass   |
| toMatch()             | Checks using Regular Expression              | expect(text).toMatch(/World/)                | Pass   |
| not.toBe()            | Checks strings are not equal                 | expect(text).not.toBe("Hello")               | Pass   |
| not.toContain()       | Checks string does not contain text          | expect(text).not.toContain("Java")           | Pass   |
| not.toMatch()         | Checks regex does not match                  | expect(text).not.toMatch(/Java/)             | Pass   |
| toHaveText()          | Verifies exact element text                  | await expect(locator).toHaveText("Login")    | Pass   |
| toContainText()       | Verifies partial element text                | await expect(locator).toContainText("Login") | Pass   |
| toHaveTitle()         | Verifies exact page title                    | await expect(page).toHaveTitle("OrangeHRM")  | Pass   |
| toHaveURL()           | Verifies exact page URL                      | await expect(page).toHaveURL(url)            | Pass   |
| toHaveAttribute()     | Verifies attribute value                     | await expect(locator).toHaveAttribute(...)   | Pass   |
------------------------------------------------------------------------------------------------------------------------------

=========================================================
Examples
=========================================================

1. toBe()
---------------------------------------------------------

const text = "Hello World";

expect(text).toBe("Hello World");

Description:
Performs exact equality comparison.

---------------------------------------------------------
2. toEqual()
---------------------------------------------------------

expect(text).toEqual("Hello World");

Description:
Works similar to toBe() for primitive values.

---------------------------------------------------------
3. toContain()
---------------------------------------------------------

expect(text).toContain("World");

Description:
Checks whether the string contains a substring.

---------------------------------------------------------
4. toMatch()
---------------------------------------------------------

expect(text).toMatch(/World/);

Description:
Checks whether the string matches a Regular Expression.

---------------------------------------------------------
5. not.toBe()
---------------------------------------------------------

expect(text).not.toBe("Hello");

Description:
Verifies that strings are not equal.

---------------------------------------------------------
6. not.toContain()
---------------------------------------------------------

expect(text).not.toContain("Java");

Description:
Verifies that the substring does not exist.

---------------------------------------------------------
7. not.toMatch()
---------------------------------------------------------

expect(text).not.toMatch(/Java/);

Description:
Verifies that the regex does not match.

=========================================================
Real-Time Playwright Examples
=========================================================

Verify Page Title

await expect(page)
  .toHaveTitle("OrangeHRM");

---------------------------------------------------------

Verify Partial Title

expect(await page.title())
  .toContain("Orange");

---------------------------------------------------------

Verify URL

await expect(page)
  .toHaveURL("https://opensource-demo.orangehrmlive.com/");

---------------------------------------------------------

Verify URL Contains

expect(page.url())
  .toContain("orangehrm");

---------------------------------------------------------

Verify Element Text

await expect(locator)
  .toHaveText("Login");

---------------------------------------------------------

Verify Partial Element Text

await expect(locator)
  .toContainText("Welcome");

---------------------------------------------------------

Verify Attribute Value

await expect(locator)
  .toHaveAttribute("type", "text");

=========================================================
Most Asked in Playwright Interviews
=========================================================

toBe()
toContain()
toMatch()
toHaveText()
toContainText()
toHaveTitle()
toHaveURL()
toHaveAttribute()