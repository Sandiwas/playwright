=======================================================================================================================================================================
# Playwright Visual Testing Flow (`toMatchSnapshot()`)

## Example

```ts
expect(await page.screenshot()).toMatchSnapshot("Homepage.png");
```

---

# First Execution (`--update-snapshots`)

Command:

```bash
npx playwright test --update-snapshots
```

### Flow

```text
Current Page
      │
      ▼
page.screenshot()
      │
      ▼
Captures Current Screenshot
      │
      ▼
toMatchSnapshot()
      │
      ▼
Checks if Homepage.png exists
      │
      ├── No
      │
      ▼
Creates Snapshot Folder
      │
      ▼
Saves Homepage.png
(Baseline Screenshot)
```

### Explanation

* `page.screenshot()` captures the current webpage.
* `toMatchSnapshot()` checks whether the baseline image already exists.
* If it does **not** exist, Playwright creates the snapshot folder and saves the captured screenshot as the **Baseline Screenshot**.
* This baseline image will be used for future comparisons.

---

# Second Execution (Normal Run)

Command:

```bash
npx playwright test
```

### Flow

```text
Current Page
      │
      ▼
page.screenshot()
      │
      ▼
Captures New Screenshot
      │
      ▼
toMatchSnapshot()
      │
      ▼
Reads Homepage.png
(Project's Baseline Screenshot)
      │
      ▼
Compares Both Images
      │
      ├── Same → Test Passed ✅
      └── Different → Test Failed ❌
```

### Explanation

* `page.screenshot()` captures the latest screenshot of the page.
* `toMatchSnapshot()` reads the previously saved baseline screenshot from the project.
* It compares the current screenshot with the baseline image.
* If both screenshots are identical, the test passes.
* If any visual difference is found, the test fails.

---

# Important Interview Point

**`page.screenshot()`**

* Captures the current screenshot of the webpage.
* It does **not** perform any comparison.

**`toMatchSnapshot()`**

* Does **not** capture another screenshot.
* It compares the current screenshot with the previously saved **Baseline Screenshot**.

---

# What is a Baseline Screenshot?

A **Baseline Screenshot** is the screenshot that was saved during the first execution using:

```bash
npx playwright test --update-snapshots
```

It is stored inside:

```text
<test-file>-snapshots/
```

Example:

```text
visual.spec.ts-snapshots/
    Homepage-chromium-win32.png
```

---

# Interview Answer

> During the first execution, `page.screenshot()` captures the current page and Playwright saves it as the baseline screenshot inside the snapshot folder. During subsequent executions, `page.screenshot()` captures a new screenshot, and `toMatchSnapshot()` compares it with the previously saved baseline image. If both screenshots are identical, the test passes; otherwise, it fails.
================================================================================================================================================================================
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


# Playwright Visual Testing - Complete Interview Questions & Answers

# Q1. What is Visual Testing?

**Answer:**

Visual Testing is the process of comparing the application's current UI with a previously approved baseline screenshot to detect unexpected visual changes.

---

# Q2. Why do we use Visual Testing?

**Answer:**

We use Visual Testing to detect:

* Broken UI
* Layout changes
* Missing images
* Font changes
* Color changes
* Button alignment issues
* CSS issues
* Unexpected UI regressions

---

# Q3. How do you perform Visual Testing in Playwright?

**Answer:**

Playwright performs visual testing by:

1. Capturing the current screenshot.
2. Comparing it with the previously saved baseline screenshot.
3. Passing the test if both screenshots match.
4. Failing the test if any visual difference is found.

---

# Q4. What are the different ways to perform Visual Testing?

## Method 1 - Full Page Visual Testing

```ts
await expect(page).toHaveScreenshot();
```

Captures and compares the complete webpage.

---

## Method 2 - Custom Screenshot Comparison

```ts
expect(await page.screenshot()).toMatchSnapshot("Homepage.png");
```

Captures the current screenshot and compares it with Homepage.png.

---

## Method 3 - Element Level Visual Testing

```ts
const logo = page.locator("img");

expect(await logo.screenshot()).toMatchSnapshot("logo.png");
```

Captures only a specific element and compares it.

---

# Q5. Which method do you prefer?

**Answer**

* For complete webpage validation → `toHaveScreenshot()`
* For specific UI components → `toMatchSnapshot()`

---

# Q6. What is Baseline Screenshot?

**Answer**

A Baseline Screenshot is the approved screenshot saved during the first execution. It is used for comparison in future executions.

---

# Q7. When is Baseline Screenshot created?

**Answer**

During the first execution using:

```bash
npx playwright test --update-snapshots
```

---

# Q8. Where are snapshots stored?

Inside

```text
<test-file>-snapshots/
```

Example

```text
VisualTesting.spec.ts-snapshots/
```

---

# Q9. What does page.screenshot() do?

**Answer**

It captures the current webpage and returns the screenshot as an image buffer.

It does not perform any comparison.

---

# Q10. What does toMatchSnapshot() do?

**Answer**

It compares the current screenshot with the previously saved baseline screenshot.

It does not capture another screenshot.

---

# Q11. What does toHaveScreenshot() do?

**Answer**

It automatically captures the current page screenshot and compares it with the stored baseline image.

---

# Q12. Difference between toHaveScreenshot() and toMatchSnapshot()

| toHaveScreenshot()                | toMatchSnapshot()                          |
| --------------------------------- | ------------------------------------------ |
| High-level Playwright assertion   | Snapshot comparison assertion              |
| Automatically captures screenshot | Requires screenshot buffer                 |
| Mostly used for full page         | Mostly used for element/custom screenshots |
| Cleaner syntax                    | More flexible                              |

---

# Q13. What happens during first execution?

**Flow**

```text
Current Page
      │
      ▼
page.screenshot()
      │
      ▼
No Baseline Found
      │
      ▼
Create Snapshot Folder
      │
      ▼
Save Baseline Screenshot
```

---

# Q14. What happens during second execution?

**Flow**

```text
Current Page
      │
      ▼
page.screenshot()
      │
      ▼
Current Screenshot
      │
      ▼
Compare
      │
      ▼
Baseline Screenshot
      │
      ▼
Pass / Fail
```

---

# Q15. How do you update snapshots?

```bash
npx playwright test --update-snapshots
```

---

# Q16. How do you run Visual Testing?

```bash
npx playwright test
```

---

# Q17. Can Visual Testing validate only one element?

**Answer**

Yes.

Example

```ts
const logo = page.locator("img");

expect(await logo.screenshot()).toMatchSnapshot("logo.png");
```

---

# Q18. What kind of UI changes can Visual Testing detect?

* CSS changes
* Missing icons
* Missing images
* Layout shifts
* Wrong fonts
* Wrong colors
* Broken buttons
* Incorrect spacing

---

# Q19. What are the challenges in Visual Testing?

* Dynamic advertisements
* Current date/time
* Animations
* Random data
* Rotating banners

These should be stabilized before taking screenshots.

---

# Q20. Which command creates the snapshot?

```bash
npx playwright test --update-snapshots
```

---

# Q21. Which command compares snapshots?

```bash
npx playwright test
```

---

# Q22. Can we rename the snapshot?

Yes.

```ts
expect(await page.screenshot()).toMatchSnapshot("HomePage.png");
```

---

# Q23. Which API is recommended for full-page validation?

```ts
await expect(page).toHaveScreenshot();
```

---

# Q24. Which API is recommended for element validation?

```ts
expect(await logo.screenshot()).toMatchSnapshot("logo.png");
```

---

# Q25. Interview Answer (Professional)

> Playwright Visual Testing verifies the application's UI by comparing the current screenshot with a previously approved baseline screenshot. During the first execution, Playwright creates the baseline image using `--update-snapshots`. During subsequent executions, it captures a new screenshot and compares it with the stored baseline. If both images match, the test passes; otherwise, it fails. For full-page validation, I use `toHaveScreenshot()`, and for validating individual UI components, I use `toMatchSnapshot()`.
