========================================================================================================================================================================================
# Playwright Auto-Retry Assertions

---

## | Assertion Method                         | Return Type     | What it Checks (Easy Meaning)                            | When to Use                              | Example |

| expect(locator).toBeVisible()           | Promise<void>   | Checks element is visible on UI.                         | Verify element is displayed             | await expect(btn).toBeVisible(); |
| expect(locator).toBeHidden()            | Promise<void>   | Checks element is hidden.                                | Verify popup disappears                 | await expect(spinner).toBeHidden(); |
| expect(locator).toBeEnabled()           | Promise<void>   | Checks element is enabled.                               | Verify button is clickable              | await expect(btn).toBeEnabled(); |
| expect(locator).toBeDisabled()          | Promise<void>   | Checks element is disabled.                              | Verify button is disabled               | await expect(btn).toBeDisabled(); |
| expect(locator).toBeEditable()          | Promise<void>   | Checks input field is editable.                          | Verify input accepts typing             | await expect(input).toBeEditable(); |
| expect(locator).toBeEmpty()             | Promise<void>   | Checks element or input is empty.                        | Verify empty text box                   | await expect(input).toBeEmpty(); |
| expect(locator).toBeChecked()           | Promise<void>   | Checks checkbox/radio is checked.                        | Verify checkbox selection               | await expect(checkBox).toBeChecked(); |
| expect(locator).toHaveText()            | Promise<void>   | Checks exact text of element.                            | Exact text validation                   | await expect(msg).toHaveText("Success"); |
| expect(locator).toContainText()         | Promise<void>   | Checks partial text of element.                          | Partial text validation                 | await expect(msg).toContainText("Success"); |
| expect(locator).toHaveValue()           | Promise<void>   | Checks value of input field.                             | Validate input value                    | await expect(input).toHaveValue("Admin"); |
| expect(locator).toHaveAttribute()       | Promise<void>   | Checks element attribute value.                          | Verify href, class, id etc.             | await expect(link).toHaveAttribute("href","/home"); |
| expect(locator).toHaveClass()           | Promise<void>   | Checks CSS class of element.                             | Verify success/error class              | await expect(msg).toHaveClass("success"); |
| expect(locator).toHaveCount()           | Promise<void>   | Checks number of matching elements.                      | Validate list/table rows                | await expect(rows).toHaveCount(5); |
| expect(locator).toHaveCSS()             | Promise<void>   | Checks CSS property value.                               | Validate color, font etc.               | await expect(btn).toHaveCSS("color","rgb(0,0,0)"); |
| expect(locator).toHaveId()              | Promise<void>   | Checks element id.                                       | Verify unique id                        | await expect(input).toHaveId("username"); |
| expect(locator).toHaveJSProperty()      | Promise<void>   | Checks JavaScript property.                              | Validate DOM property                   | await expect(input).toHaveJSProperty("disabled",true); |
| expect(locator).toHaveRole()            | Promise<void>   | Checks ARIA role.                                        | Accessibility testing                   | await expect(btn).toHaveRole("button"); |
| expect(locator).toHaveAccessibleName()  | Promise<void>   | Checks accessible name.                                  | Accessibility validation                | await expect(btn).toHaveAccessibleName("Login"); |
| expect(locator).toHaveAccessibleDescription() | Promise<void> | Checks accessible description.                           | Accessibility validation                | await expect(input).toHaveAccessibleDescription("Enter username"); |
| expect(locator).toContainClass()        | Promise<void>   | Checks element contains a CSS class.                     | Partial class validation                | await expect(msg).toContainClass("success"); |
| expect(page).toHaveURL()                | Promise<void>   | Checks current page URL.                                 | Navigation validation                   | await expect(page).toHaveURL("/home"); |
| expect(page).toHaveTitle()              | Promise<void>   | Checks page title.                                       | Validate page title                     | await expect(page).toHaveTitle("Dashboard"); |
| expect(response).toBeOK()               | Promise<void>   | Checks API response status is successful (2xx).          | API testing                             | await expect(response).toBeOK(); |
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Most Commonly Used Auto-Retry Assertions in Real Projects

| Assertion Method                    | Return Type     | What it Checks (Easy Meaning)     | When to Use                    | Example                                               |
| ----------------------------------- | --------------- | --------------------------------- | ------------------------------ | ----------------------------------------------------- |
| `expect(locator).toBeVisible()`     | `Promise<void>` | Checks element is visible         | Verify element is displayed    | `await expect(btn).toBeVisible();`                    |
| `expect(locator).toBeHidden()`      | `Promise<void>` | Checks element is hidden          | Verify loader/popup disappears | `await expect(loader).toBeHidden();`                  |
| `expect(locator).toBeEnabled()`     | `Promise<void>` | Checks element is enabled         | Verify button is clickable     | `await expect(btn).toBeEnabled();`                    |
| `expect(locator).toBeDisabled()`    | `Promise<void>` | Checks element is disabled        | Verify button is disabled      | `await expect(btn).toBeDisabled();`                   |
| `expect(locator).toBeChecked()`     | `Promise<void>` | Checks checkbox/radio is selected | Verify checkbox selection      | `await expect(checkBox).toBeChecked();`               |
| `expect(locator).toHaveText()`      | `Promise<void>` | Checks exact text                 | Validate success/error message | `await expect(msg).toHaveText("Success");`            |
| `expect(locator).toContainText()`   | `Promise<void>` | Checks partial text               | Validate dynamic text          | `await expect(msg).toContainText("Success");`         |
| `expect(locator).toHaveValue()`     | `Promise<void>` | Checks input field value          | Validate entered data          | `await expect(input).toHaveValue("Admin");`           |
| `expect(locator).toHaveAttribute()` | `Promise<void>` | Checks attribute value            | Validate href, class, id       | `await expect(link).toHaveAttribute("href","/home");` |
| `expect(locator).toHaveCount()`     | `Promise<void>` | Checks number of elements         | Validate table rows/list items | `await expect(rows).toHaveCount(5);`                  |
| `expect(page).toHaveURL()`          | `Promise<void>` | Checks current URL                | Navigation validation          | `await expect(page).toHaveURL("/home");`              |
| `expect(page).toHaveTitle()`        | `Promise<void>` | Checks page title                 | Validate page title            | `await expect(page).toHaveTitle("Dashboard");`        |
| `expect(response).toBeOK()`         | `Promise<void>` | Checks API response status is 2xx | API testing                    | `await expect(response).toBeOK();`                    |

# Top 5 Most Asked in Interviews

```ts
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Success");
await expect(locator).toContainText("Success");
await expect(locator).toHaveValue("Admin");
await expect(page).toHaveURL("/home");
```

# Most Used in Real Projects

```text
1. toBeVisible()
2. toHaveText()
3. toContainText()
4. toHaveValue()
5. toHaveCount()
6. toBeEnabled()
7. toHaveURL()
8. toBeHidden()
```

# Interview Question

Q: Which Playwright assertions do you use most in automation projects?

Answer:

```text
In real projects, I mostly use toBeVisible(), toHaveText(),
toContainText(), toHaveValue(), toHaveCount(), and toHaveURL()
because these assertions cover most UI validations like element visibility,
text verification, input validation, and navigation checks.
```

=====================================================================================================================================================================================
# Default Assertion Timeout

```text id="o1c8t5"
Default Assertion Timeout = 5 seconds (5000 ms)
```

All the above assertions are **Auto-Retry Assertions**. Playwright continuously retries them until:

1. The condition becomes true.
2. The timeout is reached.

---

# Interview Question

Q: Are all Playwright assertions auto-retrying?

A: No. Locator assertions, page assertions, and API response assertions are auto-retrying. Generic assertions like `toBe()`, `toEqual()`, and `toContain()` are not auto-retrying.

---

# Easy Memory Trick

```text id="h0v8lz"
expect(locator) → Auto Retry ✅
expect(page)    → Auto Retry ✅
expect(response)→ Auto Retry ✅

expect(value)   → No Auto Retry ❌
```


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Playwright Non-Auto-Retry Assertions

---

## | Assertion Method              | Return Type   | What it Checks (Easy Meaning)                 | When to Use                     | Example |

| expect(value).toBe()          | void           | Checks exact primitive value.                 | Number, string, boolean check   | expect(count).toBe(5); |
| expect(value).toEqual()       | void           | Checks deep equality of objects/arrays.       | Object and array comparison     | expect(data).toEqual(expected); |
| expect(value).toStrictEqual() | void           | Checks exact deep equality and types.         | Strict object comparison        | expect(obj).toStrictEqual(exp); |
| expect(value).toContain()     | void           | Checks if value contains another value.       | Array/string contains value     | expect(names).toContain("Admin"); |
| expect(value).toBeTruthy()    | void           | Checks value is truthy.                       | Boolean validations             | expect(isLogin).toBeTruthy(); |
| expect(value).toBeFalsy()     | void           | Checks value is falsy.                        | Boolean validations             | expect(isError).toBeFalsy(); |
| expect(value).toBeNull()      | void           | Checks value is null.                         | Null validation                 | expect(data).toBeNull(); |
| expect(value).toBeUndefined() | void           | Checks value is undefined.                    | Undefined validation            | expect(value).toBeUndefined(); |
| expect(value).toBeDefined()   | void           | Checks value is not undefined.                | Variable existence check        | expect(value).toBeDefined(); |
| expect(value).toBeGreaterThan() | void         | Checks value is greater than expected.        | Number comparison               | expect(price).toBeGreaterThan(100); |
| expect(value).toBeLessThan()  | void           | Checks value is less than expected.           | Number comparison               | expect(age).toBeLessThan(60); |
| expect(value).toBeGreaterThanOrEqual() | void | Checks value is >= expected.                  | Number comparison               | expect(score).toBeGreaterThanOrEqual(80); |
| expect(value).toBeLessThanOrEqual() | void    | Checks value is <= expected.                  | Number comparison               | expect(score).toBeLessThanOrEqual(100); |
| expect(value).toMatch()       | void           | Checks string matches regex.                  | Pattern validation              | expect(email).toMatch(/@gmail.com/); |
| expect(value).toMatchObject() | void           | Checks object partially matches.              | Partial object validation       | expect(user).toMatchObject({name:"Sandip"}); |
| expect(value).toBeInstanceOf() | void          | Checks object type/class.                     | Class validation                | expect(error).toBeInstanceOf(Error); |
| expect(value).toHaveLength()  | void           | Checks array/string length.                   | Length validation               | expect(names).toHaveLength(5); |
| expect(value).toHaveProperty()| void           | Checks object property exists.                | Object validation               | expect(user).toHaveProperty("name"); |
| expect(value).toBeCloseTo()   | void           | Checks decimal values approximately equal.    | Floating-point validation       | expect(price).toBeCloseTo(10.5); |
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Most Commonly Used Non-Auto-Retry Assertions

| Assertion Method                  | Return Type | What it Checks (Easy Meaning)            | When to Use                        | Example                                |
| --------------------------------- | ----------- | ---------------------------------------- | ---------------------------------- | -------------------------------------- |
| `expect(value).toBe()`            | `void`      | Checks exact primitive value             | Number, string, boolean comparison | `expect(count).toBe(5);`               |
| `expect(value).toEqual()`         | `void`      | Checks deep equality of objects/arrays   | Compare arrays and objects         | `expect(data).toEqual(expected);`      |
| `expect(value).toContain()`       | `void`      | Checks if string or array contains value | Partial validation                 | `expect(names).toContain("Admin");`    |
| `expect(value).toBeTruthy()`      | `void`      | Checks value is truthy                   | Boolean validation                 | `expect(isLogin).toBeTruthy();`        |
| `expect(value).toBeFalsy()`       | `void`      | Checks value is falsy                    | Boolean validation                 | `expect(isError).toBeFalsy();`         |
| `expect(value).toBeNull()`        | `void`      | Checks value is null                     | Null validation                    | `expect(data).toBeNull();`             |
| `expect(value).toBeDefined()`     | `void`      | Checks value is not undefined            | Variable existence check           | `expect(user).toBeDefined();`          |
| `expect(value).toBeGreaterThan()` | `void`      | Checks value is greater than expected    | Number comparison                  | `expect(price).toBeGreaterThan(100);`  |
| `expect(value).toBeLessThan()`    | `void`      | Checks value is less than expected       | Number comparison                  | `expect(age).toBeLessThan(60);`        |
| `expect(value).toMatch()`         | `void`      | Checks string matches regex              | Email, URL, pattern validation     | `expect(email).toMatch(/@gmail.com/);` |
| `expect(value).toHaveLength()`    | `void`      | Checks array/string length               | Count validation                   | `expect(names).toHaveLength(5);`       |
| `expect(value).toHaveProperty()`  | `void`      | Checks object property exists            | API response validation            | `expect(user).toHaveProperty("name");` |

# Top 5 Most Asked in Interviews

```ts id="x1m9p3"
expect(value).toBe();
expect(value).toEqual();
expect(value).toContain();
expect(value).toBeTruthy();
expect(value).toHaveLength();
```

# Interview Question

Q: Which non-auto-retry assertions do you use most in real projects?

Answer:

```text id="e0d6j7"
The most commonly used assertions are:
toBe(), toEqual(), toContain(), toBeTruthy(), toHaveLength(), and toHaveProperty().
They are mainly used for validating API responses, arrays, objects, and primitive values.
```















=================================================================================================================================================================================

# Important

These assertions are **NOT Auto-Retry Assertions**.

```text id="wobw2g"
expect(value).toBe(...)
        │
        ▼
Checks only ONCE
        │
        ▼
Pass or Fail
```

There is no polling and no retry mechanism.

---

# Example

```ts id="o66ehw"
const count = await rows.count();
expect(count).toBe(5);
```

If `count` is `4`, Playwright immediately fails.

It will NOT retry for 5 seconds.

---

# Interview Question

Q: Which assertions are not auto-retrying in Playwright?

Answer:

Assertions that work on normal JavaScript values are not auto-retrying, such as:

* toBe()
* toEqual()
* toContain()
* toBeTruthy()
* toBeFalsy()
* toMatch()
* toHaveLength()

These assertions check the value only once and immediately pass or fail.

---

# Easy Memory Trick

text id="5fby9v"
expect(locator)  → Auto Retry ✅
expect(page)     → Auto Retry ✅
expect(response) → Auto Retry ✅

expect(value)    → No Auto Retry ❌

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Bhai, await aur assertion timeout dono alag cheezein hain. await timeout increase nahi karta.
await expect(locator).toBeVisible();

Iska matlab hai:
await expect(locator).toBeVisible();

Flow

await expect(locator).toBeVisible()
                │
                ▼
      Retry for maximum 5 sec
                │
      ┌─────────┴─────────┐
      │                   │
Condition true       Condition false
      │                   │
      ▼                   ▼
 Continue            Timeout Error

 Example
 await expect(page.locator("#msg")).toBeVisible();
console.log("Passed");

Agar #msg 3 sec me visible ho gaya → "Passed" print hoga.
Agar #msg 5 sec tak visible nahi hua → assertion fail ho jayegi aur console.log() execute nahi hoga.

Interview Answer
The await keyword only waits for the assertion to complete.
 The assertion itself retries for a maximum of 5 seconds by default. If the condition becomes true, execution continues; otherwise, a Timeout Error is thrown.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 # Assertion Auto-Waiting with await

```ts
await expect(locator).toBeVisible();
console.log("Login Successful");
```

## Case 1: Assertion Passed

```text
0 sec → Not visible
1 sec → Not visible
2 sec → Visible
         ↓
  Assertion Passed
         ↓
 await completed
         ↓
console.log() executed
```

---

## Case 2: Assertion Failed

```text
0 sec → Not visible
1 sec → Not visible
2 sec → Not visible
3 sec → Not visible
4 sec → Not visible
5 sec → Not visible
         ↓
     Timeout Error
         ↓
     await failed
         ↓
Next line is NOT executed
```

---

## Interview Answer

```text
The await keyword pauses the execution until the assertion completes.
If the assertion passes, execution moves to the next line.
If the assertion fails due to timeout, the test stops and the next line is not executed.
```%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


# TypeScript String Methods

| Method            | Return Type                | What it Does (Easy Meaning)                          | Example                           | Output          |
| ----------------- | -------------------------- | ---------------------------------------------------- | --------------------------------- | --------------- |
| `includes()`      | `boolean`                  | Checks if string contains another string             | `"Playwright".includes("wright")` | `true`          |
| `startsWith()`    | `boolean`                  | Checks if string starts with text                    | `"Playwright".startsWith("Play")` | `true`          |
| `endsWith()`      | `boolean`                  | Checks if string ends with text                      | `"Playwright".endsWith("right")`  | `true`          |
| `indexOf()`       | `number`                   | Returns first index of text, `-1` if not found       | `"Java".indexOf("a")`             | `1`             |
| `lastIndexOf()`   | `number`                   | Returns last index of text                           | `"banana".lastIndexOf("a")`       | `5`             |
| `charAt()`        | `string`                   | Returns character at given index                     | `"Java".charAt(1)`                | `"a"`           |
| `at()`            | `string \| undefined`      | Returns character at index (supports negative index) | `"Java".at(-1)`                   | `"a"`           |
| `slice()`         | `string`                   | Extracts part of string                              | `"Playwright".slice(0,4)`         | `"Play"`        |
| `substring()`     | `string`                   | Returns substring between indexes                    | `"Playwright".substring(0,4)`     | `"Play"`        |
| `replace()`       | `string`                   | Replaces first occurrence                            | `"Hello".replace("H","Y")`        | `"Yello"`       |
| `replaceAll()`    | `string`                   | Replaces all occurrences                             | `"aaab".replaceAll("a","x")`      | `"xxxb"`        |
| `toUpperCase()`   | `string`                   | Converts to uppercase                                | `"java".toUpperCase()`            | `"JAVA"`        |
| `toLowerCase()`   | `string`                   | Converts to lowercase                                | `"JAVA".toLowerCase()`            | `"java"`        |
| `trim()`          | `string`                   | Removes spaces from both ends                        | `" Java ".trim()`                 | `"Java"`        |
| `trimStart()`     | `string`                   | Removes spaces from beginning                        | `" Java".trimStart()`             | `"Java"`        |
| `trimEnd()`       | `string`                   | Removes spaces from end                              | `"Java ".trimEnd()`               | `"Java"`        |
| `split()`         | `string[]`                 | Splits string into array                             | `"a,b,c".split(",")`              | `["a","b","c"]` |
| `concat()`        | `string`                   | Joins strings                                        | `"Hello".concat(" World")`        | `"Hello World"` |
| `repeat()`        | `string`                   | Repeats string n times                               | `"Hi".repeat(3)`                  | `"HiHiHi"`      |
| `padStart()`      | `string`                   | Adds characters at start                             | `"5".padStart(3,"0")`             | `"005"`         |
| `padEnd()`        | `string`                   | Adds characters at end                               | `"5".padEnd(3,"0")`               | `"500"`         |
| `match()`         | `RegExpMatchArray \| null` | Finds matches using regex                            | `"abc123".match(/\d+/)`           | `["123"]`       |
| `search()`        | `number`                   | Returns index of regex match                         | `"abc123".search(/\d/)`           | `3`             |
| `localeCompare()` | `number`                   | Compares two strings alphabetically                  | `"a".localeCompare("b")`          | `-1`            |
| `valueOf()`       | `string`                   | Returns primitive string value                       | `"Java".valueOf()`                | `"Java"`        |

# Most Frequently Asked in Interviews

```ts
str.includes("Admin");
str.startsWith("Play");
str.endsWith(".com");
str.split(",");
str.trim();
str.toUpperCase();
str.toLowerCase();
str.replace("old","new");
str.slice(0,5);
```

# Interview Question

**Q: What is the difference between `includes()` and `indexOf()`?**

**Answer:**

```text
includes() returns true or false.
indexOf() returns the index of the value or -1 if not found.
```

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Playwright Locator Getter (Read) Methods

These methods are used to **read/get data** from elements. They do not perform any action like click or fill.

| Method                      | Return Type                    | Reads From           | What it Returns (Easy Meaning)                          | When to Use                       | Example                                         |
| --------------------------- | ------------------------------ | -------------------- | ------------------------------------------------------- | --------------------------------- | ----------------------------------------------- |
| `locator.textContent()`     | `Promise<string \| null>`      | DOM                  | Returns complete text from DOM (including hidden text). | Read text from an element.        | `await locator.textContent();`                  |
| `locator.allTextContents()` | `Promise<string[]>`            | DOM                  | Returns text from multiple elements as an array.        | Dropdown, table rows, list items. | `await page.locator("li").allTextContents();`   |
| `locator.innerText()`       | `Promise<string>`              | UI (Visible Text)    | Returns only visible text shown on UI.                  | Validate text visible to user.    | `await locator.innerText();`                    |
| `locator.inputValue()`      | `Promise<string>`              | Input Value Property | Returns value of input/textarea/select.                 | Read entered value.               | `await input.inputValue();`                     |
| `locator.innerHTML()`       | `Promise<string>`              | DOM                  | Returns HTML inside the element.                        | Verify HTML structure.            | `await locator.innerHTML();`                    |
| `locator.getAttribute()`    | `Promise<string \| null>`      | DOM Attribute        | Returns attribute value.                                | Verify href, class, id, src etc.  | `await link.getAttribute("href");`              |
| `locator.isVisible()`       | `Promise<boolean>`             | UI                   | Returns true if element is visible.                     | Visibility check.                 | `await locator.isVisible();`                    |
| `locator.isHidden()`        | `Promise<boolean>`             | UI                   | Returns true if element is hidden.                      | Hidden element validation.        | `await locator.isHidden();`                     |
| `locator.isEnabled()`       | `Promise<boolean>`             | UI                   | Returns true if element is enabled.                     | Button enabled check.             | `await locator.isEnabled();`                    |
| `locator.isDisabled()`      | `Promise<boolean>`             | UI                   | Returns true if element is disabled.                    | Disabled button validation.       | `await locator.isDisabled();`                   |
| `locator.isChecked()`       | `Promise<boolean>`             | UI                   | Returns true if checkbox/radio is checked.              | Checkbox validation.              | `await checkbox.isChecked();`                   |
| `locator.count()`           | `Promise<number>`              | DOM                  | Returns total matching elements count.                  | Table rows, dropdown count.       | `await rows.count();`                           |
| `locator.all()`             | `Promise<Locator[]>`           | DOM                  | Returns all matching locators.                          | Iterate over elements.            | `await rows.all();`                             |
| `locator.evaluate()`        | `Promise<any>`                 | Browser DOM          | Executes JavaScript on the element.                     | Advanced DOM operations.          | `await locator.evaluate(el => el.textContent);` |
| `locator.evaluateAll()`     | `Promise<any>`                 | Browser DOM          | Executes JavaScript on multiple elements.               | Read data from multiple elements. | `await locator.evaluateAll(...);`               |
| `locator.boundingBox()`     | `Promise<BoundingBox \| null>` | UI                   | Returns element coordinates and size.                   | Mouse actions, drag-drop.         | `await locator.boundingBox();`                  |

# Most Commonly Used in Real Projects

```ts id="yv5ny8"
await locator.textContent();
await locator.innerText();
await locator.inputValue();
await locator.getAttribute("href");
await locator.count();
await locator.isVisible();
await locator.isChecked();
await locator.allTextContents();
```

# Easy Memory Trick

```text id="nb6fji"
textContent()      → DOM Text
allTextContents()  → DOM Text (Multiple Elements)
innerText()        → Visible UI Text
inputValue()       → Input Field Value
getAttribute()     → Attribute Value
count()            → Number of Elements
isVisible()        → Visibility Status
isChecked()        → Checkbox Status
```

# Interview Question

Q: What is the difference between getter methods and action methods?

Answer:

```text id="m0t0vd"
Getter methods only read or retrieve data from the element.
Action methods perform operations like click, fill, check, and select.
```


------------------------------------------------------------------------------------------------------------------------------
Haan bhai, mostly correct, but thoda difference samajh lo.


# Getter (Read) Methods vs Auto-Retry Assertions

## Getter / Read Methods (❌ No Auto Retry)

These methods read the current value only once and immediately return the result.

| Method                      | Return Type                    | What it Returns                           | Auto Retry |
| --------------------------- | ------------------------------ | ----------------------------------------- | ---------- |
| `locator.textContent()`     | `Promise<string \| null>`      | Complete DOM text (including hidden text) | ❌ No       |
| `locator.allTextContents()` | `Promise<string[]>`            | Text from multiple elements               | ❌ No       |
| `locator.innerText()`       | `Promise<string>`              | Only visible UI text                      | ❌ No       |
| `locator.inputValue()`      | `Promise<string>`              | Value of input/textarea/select            | ❌ No       |
| `locator.innerHTML()`       | `Promise<string>`              | HTML inside element                       | ❌ No       |
| `locator.getAttribute()`    | `Promise<string \| null>`      | Attribute value                           | ❌ No       |
| `locator.isVisible()`       | `Promise<boolean>`             | Element visibility status                 | ❌ No       |
| `locator.isHidden()`        | `Promise<boolean>`             | Element hidden status                     | ❌ No       |
| `locator.isEnabled()`       | `Promise<boolean>`             | Element enabled status                    | ❌ No       |
| `locator.isDisabled()`      | `Promise<boolean>`             | Element disabled status                   | ❌ No       |
| `locator.isChecked()`       | `Promise<boolean>`             | Checkbox/radio status                     | ❌ No       |
| `locator.count()`           | `Promise<number>`              | Number of matching elements               | ❌ No       |
| `locator.all()`             | `Promise<Locator[]>`           | All matching locators                     | ❌ No       |
| `locator.boundingBox()`     | `Promise<BoundingBox \| null>` | Element coordinates and size              | ❌ No       |

---

## Auto-Retry Assertions (✅ Auto Retry)

These assertions keep checking the condition until it becomes true or the timeout is reached.

| Assertion                           | Return Type     | Auto Retry |
| ----------------------------------- | --------------- | ---------- |
| `expect(locator).toBeVisible()`     | `Promise<void>` | ✅ Yes      |
| `expect(locator).toBeHidden()`      | `Promise<void>` | ✅ Yes      |
| `expect(locator).toBeEnabled()`     | `Promise<void>` | ✅ Yes      |
| `expect(locator).toBeDisabled()`    | `Promise<void>` | ✅ Yes      |
| `expect(locator).toBeChecked()`     | `Promise<void>` | ✅ Yes      |
| `expect(locator).toHaveText()`      | `Promise<void>` | ✅ Yes      |
| `expect(locator).toContainText()`   | `Promise<void>` | ✅ Yes      |
| `expect(locator).toHaveValue()`     | `Promise<void>` | ✅ Yes      |
| `expect(locator).toHaveAttribute()` | `Promise<void>` | ✅ Yes      |
| `expect(locator).toHaveCount()`     | `Promise<void>` | ✅ Yes      |
| `expect(page).toHaveURL()`          | `Promise<void>` | ✅ Yes      |
| `expect(page).toHaveTitle()`        | `Promise<void>` | ✅ Yes      |
| `expect(response).toBeOK()`         | `Promise<void>` | ✅ Yes      |

---

# Internal Working

### Getter Method

```text
locator.innerText()
        ↓
Read current value once
        ↓
Return result
```

### Auto-Retry Assertion

```text
expect(locator).toHaveText("Success")
            ↓
Read current value
            ↓
Condition matched?
      ┌───────────────┐
      │               │
     No              Yes
      │               │
Retry again         Pass
      │
Timeout
```

---

# Interview Answer

```text
Getter methods like textContent(), innerText(), inputValue(), and count() are not auto-retrying methods. They read the current value only once and immediately return the result.

Assertions like toHaveText(), toBeVisible(), and toHaveValue() are auto-retrying assertions. They continuously check the condition until it becomes true or the timeout is reached.
```
