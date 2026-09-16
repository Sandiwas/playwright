===========================================================================================================================
# Playwright Screenshot - Important Notes for Interview

## Screenshot APIs

| Method                 | Return Type       | Description                          | Example                                           |
| ---------------------- | ----------------- | ------------------------------------ | ------------------------------------------------- |
| `page.screenshot()`    | `Promise<Buffer>` | Captures the entire page or viewport | `await page.screenshot({ path: 'page.png' });`    |
| `locator.screenshot()` | `Promise<Buffer>` | Captures a specific element          | `await locator.screenshot({ path: 'logo.png' });` |

---

# Most Important Screenshot Options

| Option     | Type              | Description                            | Example           |
| ---------- | ----------------- | -------------------------------------- | ----------------- |
| `path`     | `string`          | Saves screenshot at specified location | `path:'page.png'` |
| `fullPage` | `boolean`         | Captures complete scrollable page      | `fullPage:true`   |
| `type`     | `'png' \| 'jpeg'` | Screenshot format                      | `type:'jpeg'`     |
| `quality`  | `number`          | JPEG quality (0-100)                   | `quality:80`      |
| `timeout`  | `number`          | Maximum wait time                      | `timeout:10000`   |

---

# Most Used Examples

## Normal Screenshot

```ts
await page.screenshot({path: 'page.png'});
```

---

## Full Page Screenshot

```ts
await page.screenshot({path: 'fullPage.png',fullPage: true});
```

---

## Element Screenshot

```ts
await page.locator("#logo").screenshot({path: 'logo.png'});
```

---

# Screenshot on Failure (Most Asked)

## playwright.config.ts

```ts
use: {screenshot: 'only-on-failure'}
```

Possible values:

```text
'off'
'on'
'only-on-failure'
'on-first-failure'
```

---==============================================================================================================================

# Playwright Screenshot Options

| Option               | Description                                         | When to Use                         | Example                          |
| -------------------- | --------------------------------------------------- | ----------------------------------- | -------------------------------- |
| `'off'`              | No screenshots are captured.                        | Disable screenshots completely.     | `screenshot: 'off'`              |
| `'on'`               | Capture screenshots for every test.                 | Debug all test executions.          | `screenshot: 'on'`               |
| `'only-on-failure'`  | Capture screenshots only when a test fails.         | Most commonly used in projects.     | `screenshot: 'only-on-failure'`  |
| `'on-first-failure'` | Capture screenshots only on the first failed retry. | Useful for flaky tests and retries. | `screenshot: 'on-first-failure'` |

---

# Example

```ts id="t0l1y7"
use: {
  screenshot: 'only-on-failure'
}
```

---

# Most Used in Real Projects

```ts id="e4q8ob"
use: {
  screenshot: 'only-on-failure'
}
```

because it saves storage and captures screenshots only when debugging is needed.

---

# Interview Question

**Q: What are the available screenshot options in Playwright?**

**Answer:**

```text id="a4s5nv"
The available screenshot options are:
'off'
'on'
'only-on-failure'
'on-first-failure'
```
============================================================================================================================

# Interview Questions & Answers

## Q1. What is the difference between page.screenshot() and locator.screenshot()?

**Answer:**

```text
page.screenshot() captures the entire page or viewport.
locator.screenshot() captures only a specific element.
```
---

## Q2. How do you capture a full-page screenshot?

**Answer:**

```ts
await page.screenshot({path: 'page.png',fullPage: true});
```

---

## Q3. How do you take screenshots only when the test fails?

**Answer:**

```ts
use: {screenshot: 'only-on-failure'}
```

---

## Q4. What is the return type of page.screenshot()?

**Answer:**

```text
Promise<Buffer>
```
---
## Q5. Why do we use screenshots in automation?

**Answer:**

```text
Screenshots are used for debugging failures, reporting, and keeping evidence of failed test cases.
```

---

# One-Line Interview Answer

```text
Playwright provides page.screenshot() and locator.screenshot() APIs to capture screenshots for debugging and reporting purposes.
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Video Options

| Option                | Description                         | When to Use                    |
| --------------------- | ----------------------------------- | ------------------------------ |
| `'off'`               | No video recording                  | Disable videos completely      |
| `'on'`                | Record video for every test         | Debug all test executions      |
| `'retain-on-failure'` | Keep videos only for failed tests   | Most commonly used in projects |
| `'on-first-retry'`    | Record video only on first retry    | Debug flaky tests              |
| `'retry-with-video'`  | Record video only for retried tests | Debug retry executions         |

---

# Examples

```ts id="5g1c9e"
use: {
  video: 'off'
}
```

```ts id="mb1nqi"
use: {
  video: 'on'
}
```

```ts id="9s9u0x"
use: {
  video: 'retain-on-failure'| 
}
```

```ts id="1y79bm"
use: {
  video: 'on-first-retry'
}
```

```ts id="k5jytr"
use: {
  video: 'retry-with-video'
}
```

---

# Interview Question

**Q: What are the available options for Playwright video recording?**

**Answer:**

```text id="qdn1ep"
The available video options are:
'off'
'on'
'retain-on-failure'
'on-first-retry'
'retry-with-video'
```

---

# Most Used in Real Projects

```ts id="q2nsvd"
use: {
  video: 'retain-on-failure'
}
```

because it keeps videos only for failed tests and saves disk space.

---

# One-Line Interview Answer

```text id="4nj8wc"
Playwright supports five video modes: off, on,
retain-on-failure, on-first-retry, and retry-with-video.
```
