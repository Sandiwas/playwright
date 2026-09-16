# Playwright Auto-Waiting Notes & Interview Questions

=========================================================

1. Auto-Waiting for Actions
   =========================================================

Playwright automatically waits before performing actions like:

* click()
* fill()
* check()
* uncheck()
* hover()
* dblclick()
* dragTo()
* selectOption()

It keeps checking the element until it becomes ready or the timeout is reached.

Default timeout: **30 seconds (30000 ms)**.

---

# Actionability Checks Before click()

| Check           | Meaning                                           |
| --------------- | ------------------------------------------------- |
| Visible         | Element should be visible on the page.            |
| Stable          | Element should not be moving or animating.        |
| Receives Events | Element should not be covered by another element. |
| Enabled         | Element should not be disabled.                   |

Example:

```ts
await page.locator("#login").click();
```

Internally:

```text
Is element visible?
       ↓
Is element stable?
       ↓
Can receive click events?
       ↓
Is enabled?
       ↓
Perform click
```

---

# Actionability Checks Before fill()

| Check    | Meaning                       |
| -------- | ----------------------------- |
| Visible  | Input should be visible.      |
| Enabled  | Input should not be disabled. |
| Editable | Input should accept typing.   |

Example:

```ts
await page.locator("#username").fill("Sandip");
```

---

# Actionability Checks Before check()/uncheck()

| Check   | Meaning                        |
| ------- | ------------------------------ |
| Visible | Checkbox should be visible.    |
| Enabled | Checkbox should be enabled.    |
| Stable  | Checkbox should not be moving. |

---

# Why Auto-Waiting is Useful?

* No need for Thread.sleep()
* No need for waitForTimeout()
* Makes tests stable and fast.
* Reduces flaky tests.

=========================================================
2. Auto-Waiting for Assertions
==============================

Assertions in Playwright are auto-retrying assertions.

Example:

```ts
await expect(locator).toBeVisible();
```

Playwright does not check once.

It keeps retrying until:

1. Assertion passes, OR
2. Timeout is reached.

Default assertion timeout:

```text
5000 ms (5 seconds)
```

---

# Internal Working

```text
Start timer
     ↓
Check condition
     ↓
Pass ?
     ↓
No → Retry
Yes → Pass
```

=========================================================
Difference Between Action Auto-Wait and Assertion Auto-Wait
===========================================================

| Feature         | Actions                    | Assertions                  |
| --------------- | -------------------------- | --------------------------- |
| Default Timeout | 30 sec                     | 5 sec                       |
| Retry Mechanism | Yes                        | Yes                         |
| Purpose         | Wait for element readiness | Wait for expected condition |
| Example         | click(), fill()            | toBeVisible(), toHaveText() |

=========================================================
Interview Questions & Answers
=============================

Q1. What is auto-waiting in Playwright?

Answer:
Playwright automatically waits for elements to become ready before performing actions or assertions.

---

Q2. What is the default timeout for actions?

Answer:
30 seconds (30000 ms).

---

Q3. What is the default timeout for assertions?

Answer:
5 seconds (5000 ms).

---

Q4. Does click() wait automatically?

Answer:
Yes. click() automatically waits for actionability checks to pass.

---

Q5. What actionability checks are performed before click()?

Answer:

1. Visible
2. Stable
3. Receives Events
4. Enabled

---

Q6. What actionability checks are performed before fill()?

Answer:

1. Visible
2. Enabled
3. Editable

---

Q7. Why don't we use waitForTimeout() in Playwright?

Answer:
Because Playwright already provides auto-waiting and explicit waits. waitForTimeout() makes tests slow and flaky.

---

Q8. How do assertions work internally?

Answer:
Assertions are auto-retrying assertions. They repeatedly check the condition until it becomes true or the timeout is reached.

---

Q9. Can we change the assertion timeout?

Answer:

```ts
await expect(locator).toBeVisible({
  timeout: 10000
});
```

---

Q10. Can we change the action timeout?

Answer:

```ts
page.setDefaultTimeout(60000);
```

or

```ts
await locator.click({
  timeout: 10000
});
```

---

Q11. Which is better: Thread.sleep() or Auto-Waiting?

Answer:
Auto-waiting is better because it waits only as long as needed and makes tests more reliable.

---

Q12. Why is Playwright considered less flaky than Selenium?

Answer:
Because Playwright has built-in auto-waiting and auto-retrying mechanisms for both actions and assertions.

=========================================================
Easy Memory Trick
=================

Actions
↓
Wait for Element Readiness
↓
Perform Action

Assertions
↓
Retry Condition
↓
Pass or Timeout

=======================================================================================================================================
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Interview Question:

How does auto-waiting work for Assertions in Playwright?

# Answer:

Playwright assertions are **auto-retrying assertions**.

When we write:

```ts
await expect(locator).toBeVisible();
```

Playwright does **not** check the condition only once.

Instead, it:

1. Starts an assertion timer (default 5 seconds).
2. Checks if the condition is true.
3. If the condition is false, it waits for a very short time.
4. Then it retries the assertion again.
5. This process continues until:

   * The condition becomes true, OR
   * The timeout is reached.

If the condition becomes true within the timeout, the test passes immediately. Otherwise, it fails with a Timeout Error.

---

# Internal Working

```text
await expect(locator).toBeVisible();

          │
          ▼
Start timer (5 sec)
          │
          ▼
Is element visible?
          │
     No ─────► Wait a little and retry
          │
         Yes
          │
          ▼
   Assertion Passed
```

---

# Real-Time Example

```ts
await page.locator("#login").click();

await expect(
  page.locator(".success")
).toHaveText("Login Successful");
```

Suppose the message appears after 3 seconds:

```text
0 sec → Text not found
1 sec → Text not found
2 sec → Text not found
3 sec → Text found
         │
         ▼
 Assertion Passed
```

You don't need:

```ts
await page.waitForTimeout(3000);
```

because Playwright automatically waits and retries.

---

# Why is it better than Selenium?

Selenium:

```java
Thread.sleep(3000);
assertEquals(...);
```

Playwright:

```ts
await expect(locator).toHaveText(...);
```

Playwright waits **only as long as needed**, making tests faster and more stable.

---

# Easy Memory Trick

```text
Assertion
     │
     ▼
Check Condition
     │
     ▼
Pass?
     │
 No ─────► Retry
     │
    Yes
     │
     ▼
   Pass
```

---

# One-Line Interview Answer

Playwright assertions are auto-retrying assertions that continuously check the condition until it becomes true or the timeout is reached.

---

# How Backend Works (Simplified)

```text
expect(locator).toBeVisible()
           │
           ▼
Start timeout (5 sec)
           │
           ▼
Loop:
    Is condition true?
           │
      No ─────► Retry
           │
      Yes
           │
           ▼
         Pass
```

This continuous **polling and retry mechanism** is the reason Playwright assertions are called **auto-waiting assertions**.


Interview Answer:
Playwright assertions are auto-retrying assertions. They keep checking the condition repeatedly until it becomes true or the timeout is reached (default 5 seconds).
Playwright does not check an assertion only once. It automatically retries the assertion until it passes or the timeout is reached.
The default assertion timeout in Playwright is 5 seconds. During these 5 seconds, Playwright continuously retries the condition. 
If the condition becomes true, the assertion passes; otherwise, it fails with a Timeout Error.

Assertion ka 5 seconds maximum timeout hota hai.

Is 5 seconds ke andar Playwright condition ko baar-baar check karta rehta hai.

✅ Agar condition 5 seconds ke andar true ho gayi
   → Assertion Pass.

❌ Agar 5 seconds tak condition true nahi hui
   → Timeout Error dega aur assertion fail ho jayegi.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test.setTimeout() current test ke liye
playwright.config.ts ke timeout ko override karta hai.

Yes, test.setTimeout() overrides the timeout defined in playwright.config.ts, but only for that particular test.


# Playwright Timeout Override - Interview Questions & Answers

### Q1. What is the default test timeout in Playwright?

**Answer:** The default test timeout in Playwright is **30 seconds (30000 ms)**.

---

### Q2. Where do we define the global test timeout?

**Answer:** We define it in `playwright.config.ts`.

```ts
export default defineConfig({
  timeout: 60000
});
```

---

### Q3. How do you set timeout for a specific test?

**Answer:** By using `test.setTimeout()`.

```ts
test.setTimeout(60000);
```

---

### Q4. If timeout is defined in both `playwright.config.ts` and `test.setTimeout()`, which one is considered?

**Answer:** `test.setTimeout()` overrides the timeout defined in `playwright.config.ts` for that particular test.

---

### Q5. Which timeout has higher priority: config timeout or test timeout?

**Answer:** `test.setTimeout()` has higher priority than `playwright.config.ts` timeout.

---

### Q6. What is the timeout precedence order in Playwright?

**Answer:**

```text
Most Specific → Highest Priority

Assertion Timeout
       ↓
test.setTimeout()
       ↓
playwright.config.ts timeout
```

---

### Q7. Suppose you have:

```ts
// playwright.config.ts
timeout: 30000;

// Test
test.setTimeout(60000);
```

What will be the final timeout?

**Answer:** Final timeout will be **60 seconds**, because `test.setTimeout()` overrides the config timeout.

---

### Q8. Suppose you have:

```ts
// playwright.config.ts
timeout: 60000;

// Test
test.setTimeout(30000);
```

What will be the final timeout?

**Answer:** Final timeout will be **30 seconds**, because `test.setTimeout()` overrides the config timeout.

---

### Q9. Does `test.setTimeout()` affect all tests?

**Answer:** No. It affects only the current test in which it is defined.

---

### Q10. What is the purpose of `playwright.config.ts` timeout?

**Answer:** It provides the default timeout for all tests in the project.

---

### Q11. What is the purpose of `test.setTimeout()`?

**Answer:** It overrides the default timeout for a specific test when that test needs more or less execution time.

---

### Q12. How do assertion timeouts work with test timeout?

**Answer:** Assertion timeout controls only the `expect()` statement, while test timeout controls the entire test execution.

Example:

```ts
test.setTimeout(60000);

await expect(locator).toBeVisible({
  timeout: 10000
});
```

* Assertion timeout = 10 sec
* Test timeout = 60 sec

---

# One-Line Interview Answer

```text
If timeout is defined in both playwright.config.ts and test.setTimeout(), then test.setTimeout() overrides the config timeout for that specific test.
```


**************************************************************************************
# Playwright Timeout Methods

---

## | Method / Property                           | Return Type       | What it Does (Easy Meaning)                                      | When to Use                            | Example |

| timeout (playwright.config.ts)             | number            | Sets default timeout for all tests.                              | Global timeout for project             | timeout: 30000 |
| expect.timeout (playwright.config.ts)      | number            | Sets default timeout for all assertions.                         | Global assertion timeout               | expect:{timeout:5000} |
| test.setTimeout()                          | void              | Changes timeout for current test.                                | One test needs more time               | test.setTimeout(60000) |
| test.slow()                                | void              | Triples the current test timeout automatically.                  | Slow-running tests                     | test.slow() |
| page.setDefaultTimeout()                   | void              | Sets default timeout for all page and locator actions.           | Increase action timeout                | page.setDefaultTimeout(60000) |
| page.setDefaultNavigationTimeout()         | void              | Sets default timeout only for navigation actions.                | Slow page loading                      | page.setDefaultNavigationTimeout(60000) |
| locator.click({ timeout })                | Promise<void>     | Sets timeout only for this click action.                         | Specific click needs more time         | locator.click({timeout:10000}) |
| locator.fill({ timeout })                 | Promise<void>     | Sets timeout only for this fill action.                          | Specific fill needs more time          | locator.fill("Admin",{timeout:10000}) |
| locator.waitFor({ timeout })              | Promise<void>     | Waits for locator state until timeout.                           | Explicit wait for element              | locator.waitFor({timeout:10000}) |
| page.waitForURL({ timeout })              | Promise<void>     | Waits for URL change until timeout.                              | Wait for navigation                    | page.waitForURL(url,{timeout:10000}) |
| page.waitForLoadState({ timeout })        | Promise<void>     | Waits for page load state until timeout.                         | Wait for page loading                  | page.waitForLoadState("load",{timeout:10000}) |
| page.waitForResponse({ timeout })         | Promise<Response> | Waits for network response until timeout.                        | API synchronization                    | page.waitForResponse(...,{timeout:10000}) |
| page.waitForRequest({ timeout })          | Promise<Request>  | Waits for network request until timeout.                         | API synchronization                    | page.waitForRequest(...,{timeout:10000}) |
| page.waitForEvent({ timeout })            | Promise<any>      | Waits for browser event until timeout.                           | Popup, download, dialog                | page.waitForEvent("popup",{timeout:10000}) |
| page.waitForFunction({ timeout })         | Promise<JSHandle> | Waits until JavaScript condition becomes true.                   | Custom waiting logic                   | page.waitForFunction(...,{timeout:10000}) |
| expect(locator).toBeVisible({timeout})    | Promise<void>     | Changes timeout only for this assertion.                         | One assertion needs more time          | expect(locator).toBeVisible({timeout:10000}) |
| expect(locator).toHaveText({timeout})     | Promise<void>     | Changes timeout only for this assertion.                         | Dynamic text validation                | expect(locator).toHaveText("Done",{timeout:10000}) |
| page.waitForTimeout()                     | Promise<void>     | Hard wait for fixed time.                                        | Debugging only (avoid in projects)     | page.waitForTimeout(5000) |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Timeout Priority Order

```text id="2w8jws"
Most Specific → Highest Priority

Assertion Timeout
       ↓
Action Timeout
       ↓
test.setTimeout()
       ↓
playwright.config.ts timeout
```

# Default Values

---

## | Timeout Type                    | Default Value |

| Test Timeout                    | 30 seconds     |
| Assertion Timeout               | 5 seconds      |
| Action Timeout                  | No limit        |
| Navigation Timeout              | No limit        |
-----------------------------------------------------

# Interview Question

Q: If timeout is defined in both playwright.config.ts and test.setTimeout(), which one is considered?

Answer:
test.setTimeout() overrides the timeout defined in playwright.config.ts for that particular test.

Q: Which timeout has the highest priority?

Answer:
The most specific timeout wins. Assertion timeout overrides test timeout, and test timeout overrides config timeout.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Common Playwright Method Options (Object Parameters)

---

## | Option                  | Type                      | Meaning (Easy)                                             | Example |

| { force: true }         | boolean                   | Performs action without actionability checks.              | locator.click({ force: true }) |
| { timeout: 10000 }      | number                    | Waits maximum 10 seconds for the action.                   | locator.click({ timeout: 10000 }) |
| { trial: true }         | boolean                   | Checks if action can be performed but doesn't execute it.  | locator.click({ trial: true }) |
| { noWaitAfter: true }   | boolean                   | Doesn't wait for navigation after action.                  | locator.click({ noWaitAfter: true }) |
| { button: 'left' }      | 'left'                    | Performs left mouse click.                                 | locator.click({ button: 'left' }) |
| { button: 'right' }     | 'right'                   | Performs right mouse click.                                | locator.click({ button: 'right' }) |
| { button: 'middle' }    | 'middle'                  | Performs middle mouse click.                               | locator.click({ button: 'middle' }) |
| { clickCount: 2 }       | number                    | Performs double click.                                     | locator.click({ clickCount: 2 }) |
| { delay: 1000 }         | number                    | Waits between mouse down and mouse up.                     | locator.click({ delay: 1000 }) |
| { position: {x,y} }     | object                    | Clicks at specific coordinates in the element.             | locator.click({ position:{x:10,y:20} }) |
| { modifiers:['Shift'] } | string[]                  | Holds keyboard key while clicking.                         | locator.click({ modifiers:['Shift'] }) |
| { strict: true }        | boolean                   | Ensures locator matches exactly one element.               | page.locator(".btn",{ strict:true }) |
| { state: 'visible' }    | string                    | Waits for locator state.                                   | locator.waitFor({ state:'visible' }) |
| { state: 'hidden' }     | string                    | Waits until element becomes hidden.                        | locator.waitFor({ state:'hidden' }) |
| { state: 'attached' }   | string                    | Waits until element is attached to DOM.                    | locator.waitFor({ state:'attached' }) |
| { state: 'detached' }   | string                    | Waits until element is removed from DOM.                   | locator.waitFor({ state:'detached' }) |
| { exact: true }         | boolean                   | Matches exact text.                                        | page.getByText("Login",{ exact:true }) |
| { checked: true }       | boolean                   | Finds checked checkbox/radio button.                       | page.getByRole('checkbox',{ checked:true }) |
| { disabled: true }      | boolean                   | Finds disabled element.                                    | page.getByRole('button',{ disabled:true }) |
| { selected: true }      | boolean                   | Finds selected option.                                     | page.getByRole('option',{ selected:true }) |
| { pressed: true }       | boolean                   | Finds pressed button.                                      | page.getByRole('button',{ pressed:true }) |
| { name: 'Login' }       | string                    | Finds element by accessible name.                          | page.getByRole('button',{ name:'Login' }) |
| { hasText: 'Admin' }    | string                    | Filters locator by text.                                   | page.locator('tr',{ hasText:'Admin' }) |
| { has: locator }        | Locator                   | Filters locator containing another locator.                | page.locator('tr',{ has: page.locator('td') }) |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Most Frequently Asked in Interviews

```ts id="f1"
locator.click({ force: true });
```

➡️ Bypasses actionability checks.

```ts id="f2"
locator.click({ timeout: 10000 });
```

➡️ Waits maximum 10 seconds.

```ts id="f3"
page.getByText("Login", { exact: true });
```

➡️ Performs exact text matching.

```ts id="f4"
locator.waitFor({ state: "visible" });
```

➡️ Waits until the element becomes visible.

```ts id="f5"
locator.click({ trial: true });
```

➡️ Verifies if click is possible without actually clicking.



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
If we pass { timeout: 10000 } in an action, Playwright uses 10 seconds for that action only and overrides the default 30-second timeout.


# Interview Question:

If we pass `{ timeout: 10000 }` to an action, will Playwright still wait for the default 30 seconds?

# Answer:

No. `{ timeout: 10000 }` overrides the default timeout for that specific action.

Example:

```ts id="9xjrxj"
await locator.click({ timeout: 10000 });
```

Playwright will wait for a maximum of **10 seconds** for this click action. If the element is not clickable within 10 seconds, it throws a `TimeoutError`.

The default **30-second timeout will not be used** for this action.

---

# One-Line Interview Answer

```text id="l50y4f"
The timeout passed inside an action is more specific and overrides the default timeout for that particular action.
```

---

# Easy Memory Trick

```text id="c3fxy4"
Specific Timeout > Default Timeout
```
