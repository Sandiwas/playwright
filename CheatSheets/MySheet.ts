/* ======================================================================================================
textContent() → Reads DOM text.(DOM)
allTextContent() → Reads DOM text.(DOM) (get group of element in dropdown)
innerText()   → Reads visible text between tags. (ui/visible test on DOM in between tag o nly )
inputValue()  → Reads value inside input/textarea/select.(input string)


Haan bhai, innerText() bhi DOM se hi element find karta hai, lekin difference kya return karta hai usme

| Method          | Element kaha se milta hai? | Kya return karta hai?              |
| --------------- | -------------------------- | ---------------------------------- |
| `innerText()`   | DOM                        | Sirf **visible text**              |
| `textContent()` | DOM                        | Pura **DOM text**, hidden text bhi |
| `inputValue()`  | DOM                        | Input ke andar ki **value**        |



| Method          | Description                                                                             | Works On                             | Return Type               | Example                                         | Output        |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------- | ----------------------------------------------- | ------------- |
| `innerText()`   | Returns only the **visible text** shown to the user on the UI.                          | `div`, `span`, `h1`, `p`, `td`, etc. | `Promise<string>`         | `await page.locator("h1").innerText();`         | `"Welcome"`   |
| `textContent()` | Returns the **actual text present in the DOM**, including hidden text and extra spaces. | `div`, `span`, `h1`, `p`, `td`, etc. | `Promise<string \| null>` | `await page.locator("h1").textContent();`       | `" Welcome "` |
| `inputValue()`  | Returns the **value inside an input, textarea, or select element**.                     | `input`, `textarea`, `select`        | `Promise<string>`         | `await page.locator("#username").inputValue();` | `"Sandip"`    |

### Easy Way to Remember

| Method          | Think Like                              |
| --------------- | --------------------------------------- |
| `innerText()`   | What the **USER sees** on the screen    |
| `textContent()` | What exists in the **DOM**              |
| `inputValue()`  | What is written inside an **input box** |

### Selenium Equivalent

| Selenium                                    | Playwright      |
| ------------------------------------------- | --------------- |
| `getText()`                                 | `innerText()`   |
| `getAttribute("value")`                     | `inputValue()`  |
| `getAttribute("textContent")` (rarely used) | `textContent()` |



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Locator Creation Methods

| Method                    | Return Type | Description                                         | Example                           |
| ------------------------- | ----------- | --------------------------------------------------- | --------------------------------- |
| `page.locator()`          | `Locator`   | Creates a locator using CSS or XPath.               | `page.locator("//button")`        |
| `page.getByText()`        | `Locator`   | Finds an element by visible text.                   | `page.getByText("Login")`         |
| `page.getByRole()`        | `Locator`   | Finds an element by ARIA role.                      | `page.getByRole("button")`        |
| `page.getByLabel()`       | `Locator`   | Finds an element associated with a label.           | `page.getByLabel("Email")`        |
| `page.getByPlaceholder()` | `Locator`   | Finds an element by placeholder text.               | `page.getByPlaceholder("Search")` |
| `page.getByTestId()`      | `Locator`   | Finds an element using the `data-testid` attribute. | `page.getByTestId("submit")`      |

| Method                    | Real-Time Scenario                                                        | Example                                       |
| ------------------------- | ------------------------------------------------------------------------- | --------------------------------------------- |
| `page.locator()`          | Locate elements using CSS or XPath when other locators are not available. | `page.locator('//button[@type="submit"]')`    |
| `page.getByText()`        | Click buttons or links using visible text.                                | `page.getByText('Login')`                     |
| `page.getByRole()`        | Locate elements based on ARIA roles (recommended by Playwright).          | `page.getByRole('button', { name: 'Login' })` |
| `page.getByLabel()`       | Find input fields associated with labels.                                 | `page.getByLabel('Username')`                 |
| `page.getByPlaceholder()` | Find input fields using placeholder text.                                 | `page.getByPlaceholder('Search')`             |
| `page.getByTestId()`      | Find elements using `data-testid` attribute.                              | `page.getByTestId('login-button')`            |


1. page.locator()
Scenario: Click Login button using XPath.
test('locator example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
});


2. page.getByText()
Scenario: Click the Logout link.

await page.getByText('Logout').click();

Real-Time Use:
Buttons
Links
Menu options

3. page.getByRole()
Scenario: Click the Login button.await page.getByRole('button', {
  name: 'Login'
}).click();

Real-Time Use:
Buttons
Checkboxes
Links
Textboxes

This is the recommended locator strategy by Playwright.

| Role          | HTML Example                      | Playwright Example                                                              | Real-Time Usage                 |
| ------------- | --------------------------------- | ------------------------------------------------------------------------------- | ------------------------------- |
| `button`      | `<button>Login</button>`          | `await page.getByRole('button', { name: 'Login' }).click();`                    | Login, Save, Submit buttons     |
| `link`        | `<a>Forgot Password</a>`          | `await page.getByRole('link', { name: 'Forgot Password' }).click();`            | Hyperlinks                      |
| `textbox`     | `<input type="text">`             | `await page.getByRole('textbox', { name: 'Username' }).fill('Admin');`          | Username, Search box            |
| `searchbox`   | `<input type="search">`           | `await page.getByRole('searchbox').fill('iPhone');`                             | Product search                  |
| `checkbox`    | `<input type="checkbox">`         | `await page.getByRole('checkbox', { name: 'Remember Me' }).check();`            | Remember Me, Terms & Conditions |
| `radio`       | `<input type="radio">`            | `await page.getByRole('radio', { name: 'Male' }).check();`                      | Gender selection                |
| `combobox`    | `<select>`                        | `await page.getByRole('combobox').selectOption('India');`                       | Country dropdown                |
| `heading`     | `<h1>Dashboard</h1>`              | `await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();` | Page title validation           |
| `img`         | `<img alt="Logo">`                | `await expect(page.getByRole('img', { name: 'Logo' })).toBeVisible();`          | Logo verification               |
| `tab`         | `<div role="tab">Admin</div>`     | `await page.getByRole('tab', { name: 'Admin' }).click();`                       | Tab navigation                  |
| `menuitem`    | `<li role="menuitem">Logout</li>` | `await page.getByRole('menuitem', { name: 'Logout' }).click();`                 | Profile menus                   |
| `dialog`      | `<div role="dialog">`             | `await expect(page.getByRole('dialog')).toBeVisible();`                         | Popups, Modals                  |
| `list`        | `<ul>`                            | `await expect(page.getByRole('list')).toBeVisible();`                           | Menu lists                      |
| `listitem`    | `<li>`                            | `await expect(page.getByRole('listitem')).toHaveCount(5);`                      | Product lists                   |
| `table`       | `<table>`                         | `await expect(page.getByRole('table')).toBeVisible();`                          | Reports, Employee tables        |
| `row`         | `<tr>`                            | `await expect(page.getByRole('row')).toHaveCount(10);`                          | Table rows                      |
| `cell`        | `<td>`                            | `await expect(page.getByRole('cell')).toContainText('Admin');`                  | Table data                      |
| `option`      | `<option>India</option>`          | `await page.getByRole('option', { name: 'India' }).click();`                    | Dropdown options                |
| `alert`       | `<div role="alert">`              | `await expect(page.getByRole('alert')).toContainText('Success');`               | Error/Success messages          |
| `progressbar` | `<div role="progressbar">`        | `await expect(page.getByRole('progressbar')).toBeVisible();`                    | Loading indicator               |
| `switch`      | `<button role="switch">`          | `await page.getByRole('switch').click();`                                       | Enable/Disable settings         |
| `tooltip`     | `<div role="tooltip">`            | `await expect(page.getByRole('tooltip')).toBeVisible();`                        | Hover messages                  |

npx playwright test
npx playwright test 6PwActions.spec.ts
npx playwright test tests\6PwActions.spec.ts
npx playwright test --headed
npx playwright test --ui


Most Frequently Used Roles in Real-Time Projects
| Role       | Example                                               |
| ---------- | ----------------------------------------------------- |
| `button`   | `page.getByRole('button', { name: 'Login' })`         |
| `textbox`  | `page.getByRole('textbox', { name: 'Username' })`     |
| `link`     | `page.getByRole('link', { name: 'Forgot Password' })` |
| `checkbox` | `page.getByRole('checkbox', { name: 'Remember Me' })` |
| `combobox` | `page.getByRole('combobox')`                          |
| `heading`  | `page.getByRole('heading', { name: 'Dashboard' })`    |
| `menuitem` | `page.getByRole('menuitem', { name: 'Logout' })`      |
| `dialog`   | `page.getByRole('dialog')`                            |


===========================================================================================================================================================================

2. GET METHODS (Returns Value)
========================================================================================================

await element.textContent();
await element.innerText();
await element.innerHTML();
await element.inputValue();
await element.getAttribute("class");
await element.getAttribute("href");
await element.isVisible();
await element.isHidden();
await element.isEnabled();
await element.isDisabled();
await element.isEditable();
await element.isChecked();
await element.isFocused();
await element.boundingBox();
await element.count();
await element.allTextContents();
await element.allInnerTexts();

| Method              | Example                               | Return Type               |
| ------------------- | ------------------------------------- | ------------------------- |
| `textContent()`     | `await element.textContent()`         | `Promise<string \| null>` |
| `innerText()`       | `await element.innerText()`           | `Promise<string>`         |
| `innerHTML()`       | `await element.innerHTML()`           | `Promise<string>`         |
| `inputValue()`      | `await element.inputValue()`          | `Promise<string>`         |
| `getAttribute()`    | `await element.getAttribute("class")` | `Promise<string \| null>` |
| `getAttribute()`    | `await element.getAttribute("href")`  | `Promise<string \| null>` |
| `isVisible()`       | `await element.isVisible()`           | `Promise<boolean>`        |
| `isHidden()`        | `await element.isHidden()`            | `Promise<boolean>`        |
| `isEnabled()`       | `await element.isEnabled()`           | `Promise<boolean>`        |
| `isDisabled()`      | `await element.isDisabled()`          | `Promise<boolean>`        |
| `isEditable()`      | `await element.isEditable()`          | `Promise<boolean>`        |
| `isChecked()`       | `await element.isChecked()`           | `Promise<boolean>`        |
| `isFocused()`       | `await element.isFocused()`           | `Promise<boolean>`        |
| `boundingBox()`     | `await element.boundingBox()`         | `Promise<Box \| null>`    |
| `count()`           | `await element.count()`               | `Promise<number>`         |
| `allTextContents()` | `await element.allTextContents()`     | `Promise<string[]>`       |
| `allInnerTexts()`   | `await element.allInnerTexts()`       | `Promise<string[]>`       |

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1. ACTION METHODS
========================================================================================================

await element.click();
await element.dblclick();
await element.check();
await element.uncheck();
await element.setChecked(true);
await element.fill("Sandip");
await element.clear();
await element.press("Enter");
await element.pressSequentially("Hello");
await element.hover();
await element.focus();
await element.blur();
await element.dragTo(target);
await element.selectOption("India");
await element.selectText();
await element.scrollIntoViewIfNeeded();
await element.setInputFiles("test.pdf");
await element.tap();

| Method                     | Example                                    | Return Type         |
| -------------------------- | ------------------------------------------ | ------------------- |
| `click()`                  | `await element.click()`                    | `Promise<void>`     |
| `dblclick()`               | `await element.dblclick()`                 | `Promise<void>`     |
| `check()`                  | `await element.check()`                    | `Promise<void>`     |
| `uncheck()`                | `await element.uncheck()`                  | `Promise<void>`     |
| `setChecked()`             | `await element.setChecked(true)`           | `Promise<void>`     |
| `fill()`                   | `await element.fill("Sandip")`             | `Promise<void>`     |
| `clear()`                  | `await element.clear()`                    | `Promise<void>`     |
| `press()`                  | `await element.press("Enter")`             | `Promise<void>`     |
| `pressSequentially()`      | `await element.pressSequentially("Hello")` | `Promise<void>`     |
| `hover()`                  | `await element.hover()`                    | `Promise<void>`     |
| `focus()`                  | `await element.focus()`                    | `Promise<void>`     |
| `blur()`                   | `await element.blur()`                     | `Promise<void>`     |
| `dragTo()`                 | `await element.dragTo(target)`             | `Promise<void>`     |
| `selectOption()`           | `await element.selectOption("India")`      | `Promise<string[]>` |
| `selectText()`             | `await element.selectText()`               | `Promise<void>`     |
| `scrollIntoViewIfNeeded()` | `await element.scrollIntoViewIfNeeded()`   | `Promise<void>`     |
| `setInputFiles()`          | `await element.setInputFiles("test.pdf")`  | `Promise<void>`     |
| `tap()`                    | `await element.tap()`                      | `Promise<void>`     |
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

TypeScript Array Methods (Interview Notes)

const arr: number[] = [1, 2, 3, 4];

| Method          | Return Type           | Description                     | Example                            |
| --------------- | --------------------- | ------------------------------- | ---------------------------------- |
| `push()`        | `number`              | Adds element at end             | `arr.push(5)`                      |
| `pop()`         | `number \| undefined` | Removes last element            | `arr.pop()`                        |
| `unshift()`     | `number`              | Adds element at beginning       | `arr.unshift(0)`                   |
| `shift()`       | `number \| undefined` | Removes first element           | `arr.shift()`                      |
| `includes()`    | `boolean`             | Checks if value exists          | `arr.includes(2)`                  |
| `indexOf()`     | `number`              | Returns index of element        | `arr.indexOf(3)`                   |
| `lastIndexOf()` | `number`              | Returns last index of element   | `arr.lastIndexOf(2)`               |
| `concat()`      | `number[]`            | Combines arrays                 | `arr.concat([5,6])`                |
| `join()`        | `string`              | Converts array to string        | `arr.join('-')`                    |
| `slice()`       | `number[]`            | Returns a portion of array      | `arr.slice(1,3)`                   |
| `splice()`      | `number[]`            | Adds/removes elements           | `arr.splice(1,1)`                  |
| `reverse()`     | `number[]`            | Reverses array                  | `arr.reverse()`                    |
| `sort()`        | `number[]`            | Sorts array                     | `arr.sort((a,b)=>a-b)`             |
| `map()`         | `number[]`            | Creates new transformed array   | `arr.map(n => n*2)`                |
| `filter()`      | `number[]`            | Returns matching elements       | `arr.filter(n => n > 2)`           |
| `find()`        | `number \| undefined` | Returns first matching element  | `arr.find(n => n > 2)`             |
| `findIndex()`   | `number`              | Returns index of first match    | `arr.findIndex(n => n > 2)`        |
| `forEach()`     | `void`                | Loops through array             | `arr.forEach(n => console.log(n))` |
| `some()`        | `boolean`             | Checks if any element matches   | `arr.some(n => n > 3)`             |
| `every()`       | `boolean`             | Checks if all elements match    | `arr.every(n => n > 0)`            |
| `reduce()`      | `number`              | Reduces array to a single value | `arr.reduce((a,b)=>a+b,0)`         |
| `flat()`        | `number[]`            | Flattens nested arrays          | `[1,[2,3]].flat()`                 |
| `flatMap()`     | `number[]`            | Maps and flattens               | `arr.flatMap(n => [n,n*2])`        |
| `at()`          | `number \| undefined` | Gets element by index           | `arr.at(-1)`                       |
| `toString()`    | `string`              | Converts array to string        | `arr.toString()`                   |


Most Asked in Playwright Interviews

arr.map(n => n * 2);
arr.filter(n => n > 2);
arr.find(n => n === 3);
arr.some(n => n > 3);
arr.every(n => n > 0);
arr.reduce((a, b) => a + b, 0);


const fruits: string[] = ["Apple", "Banana", "Mango"];


| Method        | Return Type           | Description                  | Example                                 |
| ------------- | --------------------- | ---------------------------- | --------------------------------------- |

| `push()`      | `number`              | Adds element at end          | `fruits.push("Orange")`                 |
| `pop()`       | `string \| undefined` | Removes last element         | `fruits.pop()`                          |
| `unshift()`   | `number`              | Adds element at beginning    | `fruits.unshift("Grapes")`              |
| `shift()`     | `string \| undefined` | Removes first element        | `fruits.shift()`                        |
| `includes()`  | `boolean`             | Checks if string exists      | `fruits.includes("Apple")`              |
| `indexOf()`   | `number`              | Returns index of string      | `fruits.indexOf("Banana")`              |
| `concat()`    | `string[]`            | Combines arrays              | `fruits.concat(["Orange"])`             |
| `join()`      | `string`              | Converts array to string     | `fruits.join(", ")`                     |
| `slice()`     | `string[]`            | Returns a portion of array   | `fruits.slice(1, 3)`                    |
| `splice()`    | `string[]`            | Adds/removes elements        | `fruits.splice(1, 1)`                   |
| `reverse()`   | `string[]`            | Reverses array               | `fruits.reverse()`                      |
| `sort()`      | `string[]`            | Sorts alphabetically         | `fruits.sort()`                         |
| `map()`       | `string[]`            | Creates transformed array    | `fruits.map(f => f.toUpperCase())`      |
| `filter()`    | `string[]`            | Returns matching elements    | `fruits.filter(f => f.startsWith("A"))` |
| `find()`      | `string \| undefined` | Returns first match          | `fruits.find(f => f === "Mango")`       |
| `findIndex()` | `number`              | Returns index of first match | `fruits.findIndex(f => f === "Mango")`  |
| `forEach()`   | `void`                | Loops through array          | `fruits.forEach(f => console.log(f))`   |
| `some()`      | `boolean`             | Checks if any match          | `fruits.some(f => f === "Apple")`       |
| `every()`     | `boolean`             | Checks if all match          | `fruits.every(f => f.length > 0)`       |
| `at()`        | `string \| undefined` | Gets element by index        | `fruits.at(-1)`                         |
| `toString()`  | `string`              | Converts array to string     | `fruits.toString()`                     |

const fruits: string[] = ["Apple", "Banana", "Mango"];

==================================================================================================================================================================================

TypeScript Array-Specific Methods (Most Important for Interviews)

const fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

| Method        | Return Type           | Description                                      | Example                                     | Output                                |
| ------------- | --------------------- | ------------------------------------------------ | ------------------------------------------- | ------------------------------------- |
| `map()`       | `string[]`            | Creates a new array by transforming each element | `fruits.map(f => f.toUpperCase())`          | `["APPLE","BANANA","MANGO","ORANGE"]` |
| `filter()`    | `string[]`            | Returns elements that match a condition          | `fruits.filter(f => f.startsWith("M"))`     | `["Mango"]`                           |
| `find()`      | `string \| undefined` | Returns the first matching element               | `fruits.find(f => f === "Banana")`          | `"Banana"`                            |
| `findIndex()` | `number`              | Returns the index of the first match             | `fruits.findIndex(f => f === "Mango")`      | `2`                                   |
| `forEach()`   | `void`                | Loops through each element                       | `fruits.forEach(f => console.log(f))`       | Prints all fruits                     |
| `some()`      | `boolean`             | Checks if at least one element matches           | `fruits.some(f => f === "Apple")`           | `true`                                |
| `every()`     | `boolean`             | Checks if all elements match                     | `fruits.every(f => f.length > 3)`           | `true`                                |
| `reduce()`    | `string`              | Reduces array to a single value                  | `fruits.reduce((a,b) => a + ", " + b)`      | `"Apple, Banana, Mango, Orange"`      |
| `flatMap()`   | `string[]`            | Maps and flattens the array                      | `fruits.flatMap(f => [f, f.toUpperCase()])` | `["Apple","APPLE",...]`               |


map()
const upper = fruits.map(f => f.toUpperCase());
console.log(upper);
filter()
const result = fruits.filter(f => f.includes("a"));
console.log(result);
find()
const fruit = fruits.find(f => f === "Mango");
console.log(fruit);
forEach()
fruits.forEach(f => console.log(f));
some()
const isPresent = fruits.some(f => f === "Apple");
console.log(isPresent);
every()
const allLength = fruits.every(f => f.length > 2);
console.log(allLength);
reduce()
const allFruits = fruits.reduce((a, b) => a + ", " + b);
console.log(allFruits);
Most Asked in Playwright Interviews
map()
filter()
find()
forEach()
some()
every()
reduce()

| Method      | Example                                                    | Output                                   |
| ----------- | ---------------------------------------------------------- | ---------------------------------------- |
| `map()`     | `const upper = fruits.map(f => f.toUpperCase());`          | `["APPLE", "BANANA", "MANGO", "ORANGE"]` |
| `filter()`  | `const result = fruits.filter(f => f.includes("a"));`      | `["Banana", "Mango", "Orange"]`          |
| `find()`    | `const fruit = fruits.find(f => f === "Mango");`           | `"Mango"`                                |
| `forEach()` | `fruits.forEach(f => console.log(f));`                     | Prints each fruit one by one             |
| `some()`    | `const isPresent = fruits.some(f => f === "Apple");`       | `true`                                   |
| `every()`   | `const allLength = fruits.every(f => f.length > 2);`       | `true`                                   |
| `reduce()`  | `const allFruits = fruits.reduce((a, b) => a + ", " + b);` | `"Apple, Banana, Mango, Orange"`         |

Most Asked in Playwright Interviews

| Method      | Purpose                                       |
| ----------- | --------------------------------------------- |
| `map()`     | Transform each element and create a new array |
| `filter()`  | Get elements matching a condition             |
| `find()`    | Get the first matching element                |
| `forEach()` | Iterate through all elements                  |
| `some()`    | Check if at least one element matches         |
| `every()`   | Check if all elements match                   |
| `reduce()`  | Convert the array into a single value         |

=============================================================================================================================================================================

Playwright assertions for arrays using expect,

const fruits = ["Apple", "Banana", "Mango"];


| Assertion         | Example                                                       | Purpose                                     |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------- |
| `toContain()`     | `expect(fruits).toContain("Apple");`                          | Checks if array contains an element         |
| `not.toContain()` | `expect(fruits).not.toContain("Orange");`                     | Checks if array does not contain an element |
| `toEqual()`       | `expect(fruits).toEqual(["Apple", "Banana", "Mango"]);`       | Checks if two arrays are exactly equal      |
| `not.toEqual()`   | `expect(fruits).not.toEqual(["Apple"]);`                      | Checks arrays are not equal                 |
| `toHaveLength()`  | `expect(fruits).toHaveLength(3);`                             | Checks array length                         |
| `toStrictEqual()` | `expect(fruits).toStrictEqual(["Apple", "Banana", "Mango"]);` | Strict comparison of arrays                 |

Examples

expect(fruits).toContain("Mango");
expect(fruits).toHaveLength(3);
expect(fruits).toEqual(["Apple", "Banana", "Mango"]);
expect(fruits).not.toContain("Orange");

For Playwright interviews, focus especially on these assertions:

expect(arr).toContain("Apple");
expect(arr).toHaveLength(3);
expect(arr).toEqual(["Apple", "Banana", "Mango"]);
expect(arr).not.toContain("Orange");
expect(arr).toStrictEqual(["Apple", "Banana", "Mango"]);

And these array methods:
map()
filter()
find()
forEach()
some()
every()
reduce()

=================================================================================================================================================================================
You mean properties and methods that can be applied to an array, like length.

const fruits: string[] = ["Apple", "Banana", "Mango"];
| Property/Method | Return Type           | Example                     | Output                                |
| --------------- | --------------------- | --------------------------- | ------------------------------------- |
| `length`        | `number`              | `fruits.length`             | `3`                                   |
| `push()`        | `number`              | `fruits.push("Orange")`     | `4`                                   |
| `pop()`         | `string \| undefined` | `fruits.pop()`              | `"Mango"`                             |
| `shift()`       | `string \| undefined` | `fruits.shift()`            | `"Apple"`                             |
| `unshift()`     | `number`              | `fruits.unshift("Grapes")`  | `4`                                   |
| `includes()`    | `boolean`             | `fruits.includes("Apple")`  | `true`                                |
| `indexOf()`     | `number`              | `fruits.indexOf("Banana")`  | `1`                                   |
| `join()`        | `string`              | `fruits.join(", ")`         | `"Apple, Banana, Mango"`              |
| `concat()`      | `string[]`            | `fruits.concat(["Orange"])` | `["Apple","Banana","Mango","Orange"]` |
| `slice()`       | `string[]`            | `fruits.slice(1, 3)`        | `["Banana","Mango"]`                  |
| `splice()`      | `string[]`            | `fruits.splice(1, 1)`       | `["Banana"]`                          |
| `reverse()`     | `string[]`            | `fruits.reverse()`          | `["Mango","Banana","Apple"]`          |
| `sort()`        | `string[]`            | `fruits.sort()`             | `["Apple","Banana","Mango"]`          |
| `toString()`    | `string`              | `fruits.toString()`         | `"Apple,Banana,Mango"`                |
| `at()`          | `string \| undefined` | `fruits.at(-1)`             | `"Mango"`                             |


Most commonly used in interviews:
length
includes()
indexOf()
push()
pop()
slice()
splice()
join()
sort()
reverse()
=========================================================================================================================
TypeScript String Methods (Interview Notes)

| Method/Property | Example                               | Output                        |
| --------------- | ------------------------------------- | ----------------------------- |
| `length`        | `str.length`                          | `18`                          |
| `charAt()`      | `str.charAt(0)`                       | `"A"`                         |
| `at()`          | `str.at(-1)`                          | `"g"`                         |
| `toUpperCase()` | `str.toUpperCase()`                   | `"AUTOMATION TESTING"`        |
| `toLowerCase()` | `str.toLowerCase()`                   | `"automation testing"`        |
| `includes()`    | `str.includes("Test")`                | `true`                        |
| `startsWith()`  | `str.startsWith("Auto")`              | `true`                        |
| `endsWith()`    | `str.endsWith("ing")`                 | `true`                        |
| `indexOf()`     | `str.indexOf("T")`                    | `11`                          |
| `lastIndexOf()` | `str.lastIndexOf("t")`                | `15`                          |
| `substring()`   | `str.substring(0, 10)`                | `"Automation"`                |
| `slice()`       | `str.slice(0, 10)`                    | `"Automation"`                |
| `replace()`     | `str.replace("Testing", "Framework")` | `"Automation Framework"`      |
| `replaceAll()`  | `"a-a-a".replaceAll("a", "x")`        | `"x-x-x"`                     |
| `split()`       | `str.split(" ")`                      | `["Automation", "Testing"]`   |
| `trim()`        | `"  Hello  ".trim()`                  | `"Hello"`                     |
| `concat()`      | `str.concat(" Course")`               | `"Automation Testing Course"` |
| `repeat()`      | `"Hi ".repeat(3)`                     | `"Hi Hi Hi "`                 |

Most Asked in Interviews

str.length;
str.toUpperCase();
str.toLowerCase();
str.includes("Test");
str.startsWith("Auto");
str.endsWith("ing");
str.indexOf("T");
str.substring(0, 10);
str.slice(0, 10);
str.replace("Testing", "Framework");
str.split(" ");
str.trim();
---------------------------------------------------------------------------------------------------------------------
length is a property, not a method.

✅ Correct:

Property	Return Type	Example	Output
| Property | Return Type | Example         | Output |
| -------- | ----------- | --------------- | ------ |
| `length` | `number`    | `fruits.length` | `3`    |


Property → Accessed without ().

fruits.length
str.length

Method → Called with ().

fruits.push("Orange")
str.toUpperCase()
arr.map(n => n * 2)


Interview Answer
"length is a property because we access it without parentheses (). Methods always use parentheses, like push() or toUpperCase()."

====================================================================================================================================================================== */