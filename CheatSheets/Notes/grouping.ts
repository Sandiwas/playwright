
======================================================================================================================================
# Playwright Test Grouping - Complete Notes

---

# 1. test()

## Purpose

Creates a single test case.

## Syntax

```ts
test('Login Test', async ({ page }) => {
  // Test Steps
});
```

## Interview Answer

**Q. What is `test()` in Playwright?**

**Answer:**
`test()` is used to define an individual test case. Each test executes independently with its own isolated browser context.
---

# 2. test.describe()

## Purpose
Groups multiple related test cases together.
## Syntax
```ts
test.describe('Login Module', () => {

    test('Valid Login', async ({ page }) => {

    });

    test('Invalid Login', async ({ page }) => {

    });

});
```
## Why Use?

* Better organization
* Common hooks
* Common configuration
* Better reporting

## Interview Answer

**Q. Why do we use test.describe()?**

**Answer:**

`test.describe()` groups related test cases into a single suite, making the code organized and allowing common hooks and configuration.

---

# 3. test.describe.only()

## Purpose

Runs only one describe block.

## Syntax

```ts
test.describe.only('Login Module', () => {

});
```

## Use Case

Debugging one test suite.

---

# 4. test.describe.skip()

## Purpose

Skips all tests inside the describe block.

## Syntax

```ts
test.describe.skip('Login Module', () => {

});
```

---

# 5. test.describe.configure()

## Purpose

Configure execution behavior for all tests inside a describe block.

## Syntax

```ts
test.describe.configure({
    mode: 'serial'
});
```

---

# Available Modes

| Mode     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| default  | Tests run independently.                                                |
| serial   | Tests run one after another. If one fails, remaining tests are skipped. |
| parallel | Tests inside the describe run simultaneously.                           |

---

# Example

```ts
test.describe.configure({
    mode: 'parallel'
});
```

---

# 6. test.only()

## Purpose

Runs only one test.

## Syntax

```ts
test.only('Login Test', async ({ page }) => {

});
```

---

# 7. test.skip()

## Purpose

Skip a test.

```ts
test.skip('Login Test', async ({ page }) => {

});
```

---

# 8. test.fixme()

## Purpose

Marks a known broken or incomplete test.

```ts
test.fixme('Payment Test');
```

---

# 9. test.fail()

## Purpose

Marks a test as expected to fail.

```ts
test.fail('Known Bug');
```

---

# 10. test.slow()

## Purpose

Triples the timeout for a slow-running test.

```ts
test.slow();
```

---

# 11. test.setTimeout()

## Purpose

Overrides timeout for a single test.

```ts
test.setTimeout(60000);
```

---

# 12. test.use()

## Purpose

Apply fixtures/options only for tests in a file or describe block.

```ts
test.use({
    viewport: {
        width: 1920,
        height:1080
    }
});
```

---

# 13. test.beforeAll()

Runs once before all tests.

```ts
test.beforeAll(async () => {

});
```

---

# 14. test.afterAll()

Runs once after all tests.

```ts
test.afterAll(async () => {

});
```

---

# 15. test.beforeEach()

Runs before every test.

```ts
test.beforeEach(async () => {

});
```

---

# 16. test.afterEach()

Runs after every test.

```ts
test.afterEach(async () => {

});
```

---

# Execution Order

```text
beforeAll()

    Test1
      beforeEach()
      Test
      afterEach()

    Test2
      beforeEach()
      Test
      afterEach()

afterAll()
```

---

# Grouping Execution Commands

| Command                                   | Description                 |
| ----------------------------------------- | --------------------------- |
| npx playwright test                       | Run all tests               |
| npx playwright test login.spec.ts         | Run one file                |
| npx playwright test tests/login.spec.ts   | Run specific file with path |
| npx playwright test --headed              | Run in headed mode          |
| npx playwright test --project=chromium    | Run Chromium only           |
| npx playwright test --workers=1           | Run sequentially            |
| npx playwright test --grep "Login"        | Run tests matching title    |
| npx playwright test --grep-invert "Login" | Exclude matching tests      |
| npx playwright test --list                | List all discovered tests   |
| npx playwright test --retries=2           | Retry failed tests twice    |
| npx playwright test --repeat-each=3       | Repeat each test 3 times    |
| npx playwright test --debug               | Debug mode                  |
| npx playwright test --ui                  | Open Playwright UI mode     |
| npx playwright show-report                | Open HTML report            |
| npx playwright show-trace trace.zip       | Open Trace Viewer           |

---

# Common Interview Questions

## Q1. Difference between test() and test.describe()?

**Answer:**

* `test()` creates a single test case.
* `test.describe()` groups multiple related test cases into a test suite.

---

## Q2. Why use test.describe()?

**Answer:**

To organize related tests, share hooks/configuration, and improve readability and reporting.

---

## Q3. Difference between serial and parallel mode?

**Answer:**

* **Serial:** Tests execute one after another. If one fails, the remaining tests in the group are skipped.
* **Parallel:** Tests execute simultaneously and are independent.

---

## Q4. What is test.only()?

**Answer:**

Runs only the selected test while ignoring all other tests.

---

## Q5. What is test.describe.only()?

**Answer:**

Runs only the selected test suite.

---

## Q6. What is test.skip()?

**Answer:**

Skips a test during execution.

---

## Q7. What is test.fixme()?

**Answer:**

Marks a test that is known to be broken or not yet implemented.

---

## Q8. What is test.fail()?

**Answer:**

Marks a test as expected to fail due to a known issue.

---

## Q9. What is test.slow()?

**Answer:**

Marks a test as slow and automatically increases its timeout.

---

## Q10. What is test.setTimeout()?

**Answer:**

Overrides the timeout for a specific test only.

---

# Easy Memory Trick

```text
test()                → Single Test

test.describe()       → Group Tests

test.only()           → Run One Test

test.describe.only()  → Run One Group

test.skip()           → Skip Test

test.fail()           → Expected Failure

test.fixme()          → Known Broken Test

test.slow()           → Increase Timeout

test.setTimeout()     → Custom Timeout

beforeAll()           → Once Before All Tests

beforeEach()          → Before Every Test

afterEach()           → After Every Test

afterAll()            → Once After All Tests
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Interview Question 1

Q. Difference between test() and test.describe()?
| `test()`                    | `test.describe()`                   |
| --------------------------- | ----------------------------------- |
| Creates a single test case. | Groups multiple related test cases. |
| Executes one test.          | Creates a test suite.               |
| Independent execution.      | Organizes multiple tests.           |
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Test Grouping – Interview Questions & Answers

---

# Question 1

## Q. What is Test Grouping in Playwright?

### Answer

Test Grouping is the process of organizing multiple related test cases into a single Test Suite using `test.describe()`.

It helps us to:

- Organize test cases
- Share common hooks
- Share common configuration
- Improve HTML reports
- Make the framework easier to maintain

### Interview One-Line Answer

> Test Grouping is used to organize multiple related test cases into a single Test Suite using `test.describe()`.

================================================

# Question 2

## Q. Why do we use `test.describe()`?

### Answer

In real-time projects, we may have hundreds or even thousands of test cases.

Without grouping, the test file becomes difficult to read and maintain.

Using `test.describe()`, we can group related test cases such as Login, Registration, Payment, Cart, etc., making the framework clean, organized, and easy to maintain.

### Interview One-Line Answer

> We use `test.describe()` to group related test cases, improve code organization, share common hooks/configuration, and generate better reports.

================================================

# Question 3

## Q. Is `test.describe()` mandatory?

### Answer

No.

`test.describe()` is completely optional.

Playwright can execute test cases even without using `test.describe()`.

Example:

```ts
test('Login', async () => {

});

test('Logout', async () => {

});
```

However, in real-time projects almost every company uses `test.describe()` because it improves readability and maintainability.

### Interview One-Line Answer

> No. `test.describe()` is optional, but it is widely used in real-time projects for better organization.

================================================

# Question 4

## Q. Can we execute tests without `test.describe()`?

### Answer

Yes.

Playwright executes individual `test()` blocks even if they are not inside a Describe Block.

Example:

```ts
test('Login', async () => {

});

test('Payment', async () => {

});
```

Grouping is only used for organizing related test cases.

### Interview One-Line Answer

> Yes. `test.describe()` is not required for execution; it is used only for grouping related tests.

================================================

# Question 5

## Q. Why do companies prefer using `test.describe()`?

### Answer

Real-time applications usually contain many modules such as:

- Login
- Registration
- Cart
- Wishlist
- Payment
- Orders
- Profile

If all test cases are written together, the file becomes difficult to understand.

So companies create separate Describe Blocks for each module.

Example:

```ts
test.describe("Login Module", () => {

});

test.describe("Payment Module", () => {

});

test.describe("Order Module", () => {

});
```

This improves:

- Readability
- Code maintenance
- Reporting
- Test organization

### Interview One-Line Answer

> Companies use `test.describe()` to organize module-wise test cases, making the framework easier to maintain and understand.

================================================

# Question 6

## Q. Can we have multiple `test.describe()` blocks in one file?

### Answer

Yes.

A single file can contain multiple Describe Blocks.

Example:

```ts
test.describe("Login", () => {

});

test.describe("Payment", () => {

});

test.describe("Orders", () => {

});
```

Each Describe Block represents a separate Test Suite.

### Interview One-Line Answer

> Yes. We can create multiple Describe Blocks in a single file to organize different modules.

================================================

# Question 7

## Q. Can `test.describe()` be nested?

### Answer

Yes.

Playwright supports nested Describe Blocks.

Example:

```ts
test.describe("E-Commerce", () => {

    test.describe("Login", () => {

    });

    test.describe("Payment", () => {

    });

});
```

Nested grouping is useful when working with large applications.

### Interview One-Line Answer

> Yes. Playwright supports nested Describe Blocks for organizing large applications.

================================================

# Question 8

## Q. Does `test.describe()` create a Browser?

### Answer

No.

`test.describe()` only groups test cases.

Browser creation is handled automatically by Playwright fixtures.

### Interview One-Line Answer

> No. `test.describe()` only groups tests; it does not create a Browser.

================================================

# Question 9

## Q. Does `test.describe()` create a Browser Context?

### Answer

No.

Browser Context is created automatically by Playwright during test execution.

`test.describe()` has no role in creating Browser Context.

### Interview One-Line Answer

> No. Browser Context is managed by Playwright, not by `test.describe()`.

================================================

# Question 10

## Q. What happens internally when Playwright reads `test.describe()`?

### Answer

Internally, Playwright performs the following steps:

1. Reads the Describe Block.
2. Creates a Test Suite.
3. Registers all the `test()` methods inside it.
4. Executes the hooks (`beforeAll`, `beforeEach`, etc.).
5. Executes all the test cases.
6. Generates the HTML report.

### Internal Flow

```text
Read test.describe()

        │
        ▼
Create Test Suite

        │
        ▼
Register Tests

        │
        ▼
Execute Hooks

        │
        ▼
Run Tests

        │
        ▼
Generate HTML Report
```

### Interview One-Line Answer

> Internally, Playwright creates a Test Suite, registers all tests, executes hooks, runs the tests, and finally generates the report.

================================================