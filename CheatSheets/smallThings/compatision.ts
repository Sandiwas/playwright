========================================================================================================================================

## Alternatives to `expect(msg).toContain('text.txt')`

### 1. Using `toContain()` ✅ (Recommended for Strings)

```ts
const msg = await page.locator('#singleFileStatus').textContent();
expect(msg).toContain('text.txt');
```

---

### 2. Using `includes()`

```ts
const msg = await page.locator('#singleFileStatus').textContent();
expect(msg?.includes('text.txt')).toBeTruthy();
```

---

### 3. Using `toMatch()` (Regex)

```ts
const msg = await page.locator('#singleFileStatus').textContent();
expect(msg).toMatch(/text\.txt/);
```

---

### 4. Using `toEqual()` (Exact Match)

```ts
const msg = await page.locator('#singleFileStatus').textContent();
expect(msg).toEqual("Single file uploaded: text.txt");
```

---

### 5. Best Playwright Way (No `textContent()` Needed)

```ts
await expect(page.locator('#singleFileStatus')).toContainText('text.txt');
```

or

```ts
await expect(page.locator('#singleFileStatus')).toHaveText('Single file uploaded: text.txt');
```

---

## Interview Cheat Sheet

| Method | Use Case |
|---------|----------|
| `toContainText()` | Locator → Partial text verification |
| `toHaveText()` | Locator → Exact text verification |
| `toContain()` | String/Array → Contains value |
| `includes()` | JavaScript String → Contains substring |
| `toMatch()` | String → Regular Expression |
| `toEqual()` | String → Exact comparison |

### Easy Memory Trick

- **Locator** → `toContainText()` / `toHaveText()`
- **String (`textContent()`)** → `toContain()` / `includes()` / `toMatch()` / `toEqual()`


Interview Tip
toBe() → Exact value comparison (===)
toContain() → Partial string comparison
toHaveText() → Exact text comparison for a Locator
toContainText() → Partial text comparison for a Locato



| Regex           | Meaning                  |
| --------------- | ------------------------ |
| `/test/`        | Contains `test` anywhere |
| `/test\.txt/`   | Contains `test.txt`      |
| `/^test$/`      | Exactly `test`           |
| `/^test\.txt$/` | Exactly `test.txt`       |

/test/         → Contains "test"
/^test$/       → Exactly "test"
/test\.txt/    → Contains "test.txt"
/^test\.txt$/  → Exactly "test.txt"

Interview Tip:

/text/ → Partial match (contains)
/^text$/ → Exact match
\. → Represents a literal dot (.) in regex.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# `textContent()` vs `toContainText()` in Playwright

| Feature   | `textContent()`              | `toContainText()`                         |
| --------- | ---------------------------- | ----------------------------------------- |
| Type      | Locator Method               | Playwright Assertion                      |
| Returns   | `string \| null`             | No return value                           |
| Auto Wait | ❌ No                         | ✅ Yes                                     |
| Used For  | Get the text from an element | Verify the element contains expected text |
| Best Use  | Store or manipulate text     | Assertions/Validations                    |

---

# 1. `textContent()`

Used to retrieve the text of an element.

### Syntax

```ts
const text = await locator.textContent();
```

### Example

```ts
const message = await page.locator("#msg").textContent();

console.log(message);
```

Output

```text
Welcome Sandip
```

---

# 2. `toContainText()`

Used to verify that an element contains the expected text.

### Syntax

```ts
await expect(locator).toContainText("Welcome");
```

### Example

```ts
const message = page.locator("#msg");

await expect(message).toContainText("Welcome");
```

Playwright automatically waits until the expected text appears.

---

# Using `textContent()` + Assertion

```ts
const text = await page.locator("#msg").textContent();

expect(text).toContain("Welcome");
```

Here:

* `textContent()` gets the text.
* `toContain()` checks the returned string.

---

# Using `toContainText()` (Recommended)

```ts
await expect(page.locator("#msg")).toContainText("Welcome");
```

This is shorter and supports Playwright's auto-wait.

---

# Interview Difference

### `textContent()`

* Retrieves text from an element.
* Returns `string | null`.
* Does **not** auto-wait.
* Used when you need the text for further processing.

### `toContainText()`

* Verifies an element contains expected text.
* Auto-waits until the text appears.
* Used for validations/assertions.

---

# Easy Memory Trick

```text
textContent()
        ↓
GET the text

toContainText()
        ↓
VERIFY the text
```

---

# Interview Answer

**Q. What is the difference between `textContent()` and `toContainText()`?**

**Answer:**

* `textContent()` is used to retrieve the text of an element and returns a `string | null`.
* `toContainText()` is a Playwright assertion used to verify that an element contains specific text.
*  It automatically waits until the expected text appears, making it the preferred choice for validations.
* 
* 
* 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Parameterized Tests in Playwright

## What is a Parameterized Test?

A parameterized test is a single test template that executes multiple times using different sets of test data.

It helps reduce duplicate code and improves test maintainability.

---

# Recommended Folder Structure

```text
Test Data
      ↓
test.describe()
      ↓
for...of Loop
      ↓
test()
```

---

# Best Practice (Recommended)

Define the test data **outside** the `test.describe()` block.

Place the **for...of loop inside** the `test.describe()` block.

```ts
import { test, expect } from "@playwright/test";

const loginTestData = [
    ["admin@gmail.com", "admin123", "valid"],
    ["user@gmail.com", "wrong123", "invalid"],
    ["", "", "invalid"],
];

test.describe("Login Data Driven Tests", () => {

    for (const [email, password, status] of loginTestData) {

        test(`Login with ${email}`, async ({ page }) => {

            // Test Steps

        });

    }

});
```

---

# Why is this the Recommended Approach?

✅ Only one `describe()` block is created.

✅ All generated tests are grouped together.

✅ HTML Report is clean and organized.

✅ Easy to maintain.

---

# HTML Report

```text
Login Data Driven Tests
    ✓ Login with admin@gmail.com
    ✓ Login with user@gmail.com
    ✓ Login with empty credentials
```

---

# Can We Write the Loop Outside `describe()`?

Yes.

```ts
const loginTestData = [
    ...
];

for (const [email, password] of loginTestData) {

    test(`Login ${email}`, async ({ page }) => {

    });

}
```

This is valid.

However, there is **no grouping** in the report.

Example:

```text
✓ Login admin@gmail.com
✓ Login user@gmail.com
✓ Login empty credentials
```

---

# Can We Write `describe()` Inside the Loop?

Example:

```ts
for (const [email, password] of loginTestData) {

    test.describe("Login Tests", () => {

        test(`Login ${email}`, async ({ page }) => {

        });

    });

}
```

### Yes, it works.

But it is **not recommended**.

---

# Why is it Not Recommended?

Because every loop iteration creates a new `describe()` block.

Equivalent structure:

```text
describe("Login Tests")
    ✓ Login 1

describe("Login Tests")
    ✓ Login 2

describe("Login Tests")
    ✓ Login 3

describe("Login Tests")
    ✓ Login 4
```

Problems:

* Duplicate suite names
* HTML report becomes repetitive
* Harder to navigate
* Not the Playwright recommended style

---

# Comparison

## Recommended ✅

```ts
test.describe(() => {

    for (...) {

        test(...);

    }

});
```

Structure:

```text
One Describe
      ↓
Multiple Tests
```

---

## Not Recommended ❌

```ts
for (...) {

    test.describe(() => {

        test(...);

    });

}
```

Structure:

```text
Multiple Describe Blocks
      ↓
One Test Each
```

---

# Interview Question

### Q. Where should we place the `for...of` loop in parameterized tests?

**Answer:**

The recommended approach is to define the test data outside the `test.describe()` 
block and place the `for...of` loop inside the `describe()` block. This creates one test suite
 containing multiple parameterized tests, resulting in a cleaner and more maintainable test structure.

---

# Easy Memory Trick

```text
Test Data
      ↓
Outside describe()

describe()
      ↓
One Suite

for...of
      ↓
Multiple Tests
```

---

# Final Recommendation

✅ Test Data → Outside `describe()`

✅ `describe()` → One per feature/module

✅ `for...of` Loop → Inside `describe()`

✅ `test()` → Inside the loop

This is the Playwright best practice followed in real-world automation frameworks and is the preferred approach in interviews.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
