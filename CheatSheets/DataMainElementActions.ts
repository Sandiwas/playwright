========================================================================================================
PLAYWRIGHT LOCATOR / ELEMENT METHODS CHEAT SHEET
(Methods Applicable on Locator/WebElement)
========================================================================================================

Create Locator
--------------------------------------------------------------------------------------------------------
const element = page.locator("#username");
const button = page.getByRole("button", { name: "Login" });

========================================================================================================
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

========================================================================================================
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


========================================================================================================
3. LOCATOR FILTER METHODS
========================================================================================================

element.first();
element.last();
element.nth(0);
element.filter({ hasText: "Admin" });
element.filter({ has: page.locator("button") });
element.and(otherLocator);
element.or(otherLocator);

| Method     | Example                                           | Return Type |
| ---------- | ------------------------------------------------- | ----------- |
| `first()`  | `element.first()`                                 | `Locator`   |
| `last()`   | `element.last()`                                  | `Locator`   |
| `nth()`    | `element.nth(0)`                                  | `Locator`   |
| `filter()` | `element.filter({ hasText: "Admin" })`            | `Locator`   |
| `filter()` | `element.filter({ has: page.locator("button") })` | `Locator`   |
| `and()`    | `element.and(otherLocator)`                       | `Locator`   |
| `or()`     | `element.or(otherLocator)`                        | `Locator`   |

========================================================================================================
4. WAIT METHODS
========================================================================================================

await element.waitFor();
await element.waitFor({ state: "visible" });
await element.waitFor({ state: "hidden" });
await element.waitFor({ state: "attached" });
await element.waitFor({ state: "detached" });

| Method                           | Example                                        | Return Type     |
| -------------------------------- | ---------------------------------------------- | --------------- |
| `waitFor()`                      | `await element.waitFor()`                      | `Promise<void>` |
| `waitFor({ state: "visible" })`  | `await element.waitFor({ state: "visible" })`  | `Promise<void>` |
| `waitFor({ state: "hidden" })`   | `await element.waitFor({ state: "hidden" })`   | `Promise<void>` |
| `waitFor({ state: "attached" })` | `await element.waitFor({ state: "attached" })` | `Promise<void>` |
| `waitFor({ state: "detached" })` | `await element.waitFor({ state: "detached" })` | `Promise<void>` |


========================================================================================================
5. EVALUATE METHODS
========================================================================================================

await element.evaluate(el => el.textContent);
await element.evaluateAll(elements => elements.length);

| Method          | Example                                                                   | Return Type  |
| --------------- | ------------------------------------------------------------------------- | ------------ |
| `evaluate()`    | `await element.evaluate(el => el.textContent)`                            | `Promise<R>` |
| `evaluate()`    | `await element.evaluate(el => el.id)`                                     | `Promise<R>` |
| `evaluate()`    | `await element.evaluate(el => el.className)`                              | `Promise<R>` |
| `evaluateAll()` | `await element.evaluateAll(elements => elements.length)`                  | `Promise<R>` |
| `evaluateAll()` | `await element.evaluateAll(elements => elements.map(e => e.textContent))` | `Promise<R>` |


========================================================================================================
6. SCREENSHOT METHOD
========================================================================================================

await element.screenshot({
  path: "logo.png"
});

| Method         | Example                                                       | Return Type       |
| -------------- | ------------------------------------------------------------- | ----------------- |
| `screenshot()` | `await element.screenshot()`                                  | `Promise<Buffer>` |
| `screenshot()` | `await element.screenshot({ path: "logo.png" })`              | `Promise<Buffer>` |
| `screenshot()` | `await element.screenshot({ path: "logo.png", type: "png" })` | `Promise<Buffer>` |

========================================================================================================
7. ASSERTION METHODS (Expected Conditions)
========================================================================================================

await expect(element).toBeVisible();
await expect(element).toBeHidden();
await expect(element).toBeEnabled();
await expect(element).toBeDisabled();
await expect(element).toBeEditable();
await expect(element).toBeEmpty();
await expect(element).toBeChecked();
await expect(element).toBeFocused();
await expect(element).toBeInViewport();

await expect(element).toHaveText("Admin");
await expect(element).toContainText("Admin");
await expect(element).toHaveValue("Admin");
await expect(element).toHaveValues(["India", "USA"]);
await expect(element).toHaveAttribute("type", "text");
await expect(element).toHaveClass("active");
await expect(element).toHaveCount(5);
await expect(element).toHaveCSS("color", "rgb(0, 0, 0)");
await expect(element).toHaveId("username");
await expect(element).toHaveJSProperty("checked", true);
await expect(element).toHaveAccessibleName("Login");


| Assertion                        | Example                                                                | Return Type     |
| -------------------------------- | ---------------------------------------------------------------------- | --------------- |
| `toBeVisible()`                  | `await expect(element).toBeVisible()`                                  | `Promise<void>` |
| `toBeHidden()`                   | `await expect(element).toBeHidden()`                                   | `Promise<void>` |
| `toBeEnabled()`                  | `await expect(element).toBeEnabled()`                                  | `Promise<void>` |
| `toBeDisabled()`                 | `await expect(element).toBeDisabled()`                                 | `Promise<void>` |
| `toBeEditable()`                 | `await expect(element).toBeEditable()`                                 | `Promise<void>` |
| `toBeEmpty()`                    | `await expect(element).toBeEmpty()`                                    | `Promise<void>` |
| `toBeChecked()`                  | `await expect(element).toBeChecked()`                                  | `Promise<void>` |
| `toBeFocused()`                  | `await expect(element).toBeFocused()`                                  | `Promise<void>` |
| `toBeInViewport()`               | `await expect(element).toBeInViewport()`                               | `Promise<void>` |
| `toHaveText()`                   | `await expect(element).toHaveText("Admin")`                            | `Promise<void>` |
| `toContainText()`                | `await expect(element).toContainText("Admin")`                         | `Promise<void>` |
| `toHaveValue()`                  | `await expect(element).toHaveValue("Admin")`                           | `Promise<void>` |
| `toHaveValues()`                 | `await expect(element).toHaveValues(["India","USA"])`                  | `Promise<void>` |
| `toHaveAttribute()`              | `await expect(element).toHaveAttribute("type", "text")`                | `Promise<void>` |
| `toHaveClass()`                  | `await expect(element).toHaveClass("active")`                          | `Promise<void>` |
| `toHaveCount()`                  | `await expect(element).toHaveCount(5)`                                 | `Promise<void>` |
| `toHaveCSS()`                    | `await expect(element).toHaveCSS("color", "rgb(0, 0, 0)")`             | `Promise<void>` |
| `toHaveId()`                     | `await expect(element).toHaveId("username")`                           | `Promise<void>` |
| `toHaveJSProperty()`             | `await expect(element).toHaveJSProperty("checked", true)`              | `Promise<void>` |
| `toHaveAccessibleName()`         | `await expect(element).toHaveAccessibleName("Login")`                  | `Promise<void>` |
| `toHaveAccessibleDescription()`  | `await expect(element).toHaveAccessibleDescription("Login button")`    | `Promise<void>` |
| `toHaveAccessibleErrorMessage()` | `await expect(element).toHaveAccessibleErrorMessage("Required field")` | `Promise<void>` |
| `toMatchAriaSnapshot()`          | `await expect(element).toMatchAriaSnapshot()`                          | `Promise<void>` |


| Assertion            | Example                                       | Return Type     |
| -------------------- | --------------------------------------------- | --------------- |
| `toHaveURL()`        | `await expect(page).toHaveURL(/dashboard/)`   | `Promise<void>` |
| `toHaveTitle()`      | `await expect(page).toHaveTitle("Dashboard")` | `Promise<void>` |
| `toHaveScreenshot()` | `await expect(page).toHaveScreenshot()`       | `Promise<void>` |


========================================================================================================
MOST IMPORTANT INTERVIEW METHODS
========================================================================================================

click()
fill()
check()
uncheck()
hover()
focus()
press()
dragTo()
selectOption()
setInputFiles()
textContent()
innerText()
inputValue()
getAttribute()
isVisible()
isEnabled()
isChecked()
count()
first()
last()
nth()
waitFor()

========================================================================================================
SELENIUM VS PLAYWRIGHT
========================================================================================================

Selenium                     Playwright
----------------------------------------------------------
getText()                -> innerText()
getAttribute()           -> getAttribute()
isDisplayed()            -> isVisible()
isEnabled()              -> isEnabled()
isSelected()             -> isChecked()
sendKeys()               -> fill() / press()
click()                  -> click()
clear()                  -> clear()
getCssValue()            -> evaluate() / toHaveCSS()
findElements().size()    -> count()


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

| Category   | Method                     | Example                                        | Return Type               |
| ---------- | -------------------------- | ---------------------------------------------- | ------------------------- |
| Action     | `click()`                  | `await locator.click()`                        | `Promise<void>`           |
| Action     | `dblclick()`               | `await locator.dblclick()`                     | `Promise<void>`           |
| Action     | `check()`                  | `await locator.check()`                        | `Promise<void>`           |
| Action     | `uncheck()`                | `await locator.uncheck()`                      | `Promise<void>`           |
| Action     | `setChecked()`             | `await locator.setChecked(true)`               | `Promise<void>`           |
| Action     | `fill()`                   | `await locator.fill("Admin")`                  | `Promise<void>`           |
| Action     | `clear()`                  | `await locator.clear()`                        | `Promise<void>`           |
| Action     | `press()`                  | `await locator.press("Enter")`                 | `Promise<void>`           |
| Action     | `pressSequentially()`      | `await locator.pressSequentially("Hello")`     | `Promise<void>`           |
| Action     | `hover()`                  | `await locator.hover()`                        | `Promise<void>`           |
| Action     | `focus()`                  | `await locator.focus()`                        | `Promise<void>`           |
| Action     | `blur()`                   | `await locator.blur()`                         | `Promise<void>`           |
| Action     | `dragTo()`                 | `await locator.dragTo(target)`                 | `Promise<void>`           |
| Action     | `selectOption()`           | `await locator.selectOption("India")`          | `Promise<string[]>`       |
| Action     | `selectText()`             | `await locator.selectText()`                   | `Promise<void>`           |
| Action     | `scrollIntoViewIfNeeded()` | `await locator.scrollIntoViewIfNeeded()`       | `Promise<void>`           |
| Action     | `setInputFiles()`          | `await locator.setInputFiles("test.pdf")`      | `Promise<void>`           |
| Action     | `tap()`                    | `await locator.tap()`                          | `Promise<void>`           |
| Get        | `textContent()`            | `await locator.textContent()`                  | `Promise<string \| null>` |
| Get        | `innerText()`              | `await locator.innerText()`                    | `Promise<string>`         |
| Get        | `innerHTML()`              | `await locator.innerHTML()`                    | `Promise<string>`         |
| Get        | `inputValue()`             | `await locator.inputValue()`                   | `Promise<string>`         |
| Get        | `getAttribute()`           | `await locator.getAttribute("href")`           | `Promise<string \| null>` |
| Get        | `isVisible()`              | `await locator.isVisible()`                    | `Promise<boolean>`        |
| Get        | `isHidden()`               | `await locator.isHidden()`                     | `Promise<boolean>`        |
| Get        | `isEnabled()`              | `await locator.isEnabled()`                    | `Promise<boolean>`        |
| Get        | `isDisabled()`             | `await locator.isDisabled()`                   | `Promise<boolean>`        |
| Get        | `isEditable()`             | `await locator.isEditable()`                   | `Promise<boolean>`        |
| Get        | `isChecked()`              | `await locator.isChecked()`                    | `Promise<boolean>`        |
| Get        | `isFocused()`              | `await locator.isFocused()`                    | `Promise<boolean>`        |
| Get        | `boundingBox()`            | `await locator.boundingBox()`                  | `Promise<Box \| null>`    |
| Get        | `count()`                  | `await locator.count()`                        | `Promise<number>`         |
| Get        | `allTextContents()`        | `await locator.allTextContents()`              | `Promise<string[]>`       |
| Get        | `allInnerTexts()`          | `await locator.allInnerTexts()`                | `Promise<string[]>`       |
| Filter     | `first()`                  | `locator.first()`                              | `Locator`                 |
| Filter     | `last()`                   | `locator.last()`                               | `Locator`                 |
| Filter     | `nth()`                    | `locator.nth(0)`                               | `Locator`                 |
| Filter     | `filter()`                 | `locator.filter({ hasText: "Admin" })`         | `Locator`                 |
| Filter     | `and()`                    | `locator.and(otherLocator)`                    | `Locator`                 |
| Filter     | `or()`                     | `locator.or(otherLocator)`                     | `Locator`                 |
| Wait       | `waitFor()`                | `await locator.waitFor()`                      | `Promise<void>`           |
| Evaluate   | `evaluate()`               | `await locator.evaluate(el => el.textContent)` | `Promise<R>`              |
| Evaluate   | `evaluateAll()`            | `await locator.evaluateAll(els => els.length)` | `Promise<R>`              |
| Screenshot | `screenshot()`             | `await locator.screenshot()`                   | `Promise<Buffer>`         |

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
| Assertion                | Example                                                   | Return Type     |
| ------------------------ | --------------------------------------------------------- | --------------- |
| `toBeVisible()`          | `await expect(locator).toBeVisible()`                     | `Promise<void>` |
| `toBeHidden()`           | `await expect(locator).toBeHidden()`                      | `Promise<void>` |
| `toBeEnabled()`          | `await expect(locator).toBeEnabled()`                     | `Promise<void>` |
| `toBeDisabled()`         | `await expect(locator).toBeDisabled()`                    | `Promise<void>` |
| `toBeEditable()`         | `await expect(locator).toBeEditable()`                    | `Promise<void>` |
| `toBeEmpty()`            | `await expect(locator).toBeEmpty()`                       | `Promise<void>` |
| `toBeChecked()`          | `await expect(locator).toBeChecked()`                     | `Promise<void>` |
| `toBeFocused()`          | `await expect(locator).toBeFocused()`                     | `Promise<void>` |
| `toBeInViewport()`       | `await expect(locator).toBeInViewport()`                  | `Promise<void>` |
| `toHaveText()`           | `await expect(locator).toHaveText("Admin")`               | `Promise<void>` |
| `toContainText()`        | `await expect(locator).toContainText("Admin")`            | `Promise<void>` |
| `toHaveValue()`          | `await expect(locator).toHaveValue("Admin")`              | `Promise<void>` |
| `toHaveValues()`         | `await expect(locator).toHaveValues(["India"])`           | `Promise<void>` |
| `toHaveAttribute()`      | `await expect(locator).toHaveAttribute("type","text")`    | `Promise<void>` |
| `toHaveClass()`          | `await expect(locator).toHaveClass("active")`             | `Promise<void>` |
| `toHaveCount()`          | `await expect(locator).toHaveCount(5)`                    | `Promise<void>` |
| `toHaveCSS()`            | `await expect(locator).toHaveCSS("color","red")`          | `Promise<void>` |
| `toHaveId()`             | `await expect(locator).toHaveId("username")`              | `Promise<void>` |
| `toHaveJSProperty()`     | `await expect(locator).toHaveJSProperty("checked", true)` | `Promise<void>` |
| `toHaveAccessibleName()` | `await expect(locator).toHaveAccessibleName("Login")`     | `Promise<void>` |
| `toHaveTitle()`          | `await expect(page).toHaveTitle("Dashboard")`             | `Promise<void>` |
| `toHaveURL()`            | `await expect(page).toHaveURL(/dashboard/)`               | `Promise<void>` |

