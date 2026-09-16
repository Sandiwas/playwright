

import {test,expect,Locator} from "@playwright/test"

test('check title of the home page',{tag:'@sanity'},async({page})=>{
    await page.goto("https://www.google.com/") ;
    await expect(page).toHaveTitle('Google');
})

test('check navigation of the store page',{tag:'@regression'},async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator('text="Store"').click();
   // await page.locator('a:has-text("Store")').click();
   //await page.locator('a:text-is("Store")').click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");
})

test('check top recommendations',{tag:['@sanity','@regression']},async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator('text="Store"').click();
    await expect(page.locator('text="Popular on the Google Store."')).toHaveText("Popular on the Google Store.");
})


/*
1. Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity" 


2. Run all regression tests:
    npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression

npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression (special case)
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
    


*/



















































































































































































/* 
# Playwright Tagging – Complete Interview Notes

---

# Question 1

## Q. What is Tagging in Playwright?

### Answer

Tagging is a technique used to categorize test cases using custom labels such as **@smoke**, **@regression**, or **@sanity**. It helps execute a specific group of tests instead of running the entire test suite.

### Interview One-Line Answer

> Tagging is used to group and execute specific test cases based on custom labels.

================================================

# Question 2

## Q. Why do we use Tags in Playwright?

### Answer

In real-time projects, thousands of test cases exist. Running all tests every time is time-consuming. Tags allow us to execute only the required set of tests, such as Smoke, Sanity, or Regression.

### Interview One-Line Answer

> Tags help execute only the required group of test cases, saving execution time.

================================================

# Question 3

## Q. How do you create a Tag in Playwright?

### Answer

We create tags by adding custom labels (starting with `@`) in the test title.

### Example

```ts
test("Login Test @smoke", async ({ page }) => {

});

test("Payment Test @regression", async ({ page }) => {

});

test("Profile Test @sanity", async ({ page }) => {

});
```

================================================

# Question 4

## Q. How do you execute Smoke tests only?

### Answer

Use the `--grep` option with the tag name.

```bash
npx playwright test --grep "@smoke"
```

### Interview One-Line Answer

> Use `--grep` to execute tests matching a specific tag.

================================================

# Question 5

## Q. How do you execute Regression tests?

### Answer

```bash
npx playwright test --grep "@regression"
```

================================================

# Question 6

## Q. How do you execute Sanity tests?

### Answer

```bash
npx playwright test --grep "@sanity"
```

================================================

# Question 7

## Q. How do you run multiple tags together?

### Answer

Use a Regular Expression (Regex).

```bash
npx playwright test --grep "@smoke|@sanity"
```

This executes both Smoke and Sanity tests.

================================================

# Question 8

## Q. How do you exclude a tag?

### Answer

Use `--grep-invert`.

```bash
npx playwright test --grep-invert "@smoke"
```

This executes all tests except Smoke tests.

================================================

# Question 9

## Q. Can one test have multiple tags?

### Answer

Yes.

A single test can have multiple tags.

### Example

```ts
test("Login Test @smoke @regression", async ({ page }) => {

});
```

================================================

# Question 10

## Q. What are the commonly used tags in real-time projects?

### Answer

| Tag | Purpose |
|------|---------|
| `@smoke` | Critical functionality |
| `@sanity` | Basic functionality validation |
| `@regression` | Full regression testing |
| `@api` | API tests |
| `@ui` | UI tests |
| `@e2e` | End-to-End tests |
| `@functional` | Functional testing |
| `@integration` | Integration testing |

================================================

# Question 11

## Q. Can we create custom tags?

### Answer

Yes.

Playwright does not restrict tag names.

We can create any custom tag.

Example:

```text
@payment
@login
@mobile
@chrome
@release
@critical
@production
```

================================================

# Question 12

## Q. What is the difference between Grouping and Tagging?

### Answer

| Grouping | Tagging |
|----------|---------|
| Organizes related tests using `test.describe()` | Categorizes tests using labels like `@smoke` |
| Improves code organization | Improves test execution flexibility |
| Used inside the code | Used during execution with `--grep` |

### Interview One-Line Answer

> Grouping organizes test cases, whereas Tagging filters and executes specific test cases.

================================================

# Common Execution Commands

| Command | Description |
|---------|-------------|
| `npx playwright test --grep "@smoke"` | Run Smoke tests |
| `npx playwright test --grep "@sanity"` | Run Sanity tests |
| `npx playwright test --grep "@regression"` | Run Regression tests |
| `npx playwright test --grep "@smoke|@sanity"` | Run Smoke and Sanity tests |
| `npx playwright test --grep-invert "@smoke"` | Exclude Smoke tests |
| `npx playwright test --grep "@api"` | Run API tests |
| `npx playwright test --grep "@ui"` | Run UI tests |

================================================

# Real-Time Example

```ts
test("Login Test @smoke @regression", async ({ page }) => {

});

test("Payment Test @regression", async ({ page }) => {

});

test("Profile Test @sanity", async ({ page }) => {

});

test("Order Test @e2e", async ({ page }) => {

});
```

================================================

# Easy Memory Trick

```text
@smoke       → Critical Tests

@sanity      → Basic Validation

@regression  → Full Regression

@api         → API Testing

@ui          → UI Testing

@e2e         → End-to-End Testing

@functional  → Functional Testing

@integration → Integration Testing
```

================================================

# Final Interview One-Line Answer

> Tagging is used to categorize test cases with custom labels and execute specific groups of tests efficiently using the `--grep` option.

## Interview One-Line Answer

> Grouping organizes related test cases using `test.describe()`, while Tagging categorizes test cases using labels like `@smoke` or `@regression` to execute specific tests.

================================================ */