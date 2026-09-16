===============================================================================================================================================================

## Q. What is the difference between Hooks and Annotations in Playwright?

### Answer
Hooks are lifecycle methods that execute **before or after** test execution for setup and cleanup activities (e.g., login, logout).
Annotations are used to **control the behavior of a test**, such as skipping a test, running only one test, or marking a test as slow or expected to fail.
### Interview One-Line Answer
> Hooks manage the test lifecycle, whereas annotations control how a test is executed.
================================================

Hooks
↓↓↓

Setup
Login
Launch App
Cleanup
Logout

Real-time Mapping

Setup → Initialize test data, read config, prepare environment
Launch App → page.goto()
Login → Perform login steps
Test Execution → Business validation/assertions
Logout → Sign out of the application
Cleanup → Delete test data, clear cookies, close resources (if required)
----------------------------

Annotations
↓↓↓

Skip Test
Run Only
Expected Fail
Known Bug
Slow Test


====================================================================================================================
# Interview Question

## Q. What is the difference between Hooks in Playwright and Annotations in TestNG?

### Answer

Functionally, there is no major difference.

Both are lifecycle methods used to execute setup and cleanup code before or after test execution.

The main difference is the terminology and syntax.

- In **Playwright**, they are called **Hooks**.
- In **TestNG**, they are implemented using **Annotations**.

For example:

| Playwright Hook | TestNG Annotation | Purpose |
|-----------------|-------------------|---------|
| `beforeAll()` | `@BeforeSuite` / `@BeforeClass` | Runs once before execution |
| `beforeEach()` | `@BeforeMethod` | Runs before every test |
| `afterEach()` | `@AfterMethod` | Runs after every test |
| `afterAll()` | `@AfterSuite` / `@AfterClass` | Runs once after execution |

### Example

**Playwright**

```ts
test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
});
```

**TestNG**

```java
@BeforeMethod
public void setup() {
    driver.get("https://example.com");
}
```

### Key Difference

| Playwright | TestNG |
|------------|---------|
| Uses Hooks (`beforeEach()`, `afterAll()`) | Uses Java Annotations (`@BeforeMethod`, `@AfterSuite`) |
| JavaScript / TypeScript | Java |
| Fixture-based (`page`, `browser`, `context`) | WebDriver-based |
| Built-in parallel execution | Parallel execution configured through TestNG XML or annotations |

### Interview One-Line Answer

> Hooks in Playwright and Annotations in TestNG serve the same purpose of executing setup and cleanup code. The main difference is that Playwright uses lifecycle hook methods, while TestNG uses Java annotations.

================================================



# Hooks vs Annotations in Playwright

## Interview Question

### Q. What is the difference between Hooks and Annotations in Playwright?

### Answer

Hooks and Annotations serve different purposes in Playwright.

- **Hooks** are lifecycle methods that execute **before or after** test execution to perform setup and cleanup activities.
- **Annotations** are used to **control the behavior of a test**, such as skipping a test, running only one test, marking a test as slow, or marking it as an expected failure.

---

## Difference Table

## Difference Between Hooks and Annotations

| Feature            | Hooks                                                      | Annotations                                                                 |
|--------------------|------------------------------------------------------------|---------------------------------------------------------------- ------------|
| Purpose            | Perform setup and cleanup activities                       | Control test execution behavior                                             |
| Executes           | Before or after test execution                             | Before or during test execution                                             |
| Used For           | Setup, Login, Launch App, Logout, Cleanup                  | Skip, Only, Fail, Fixme, Slow                                               |
| Affects            | Test lifecycle                                             | Test execution                                                              |
| Common Methods     | `beforeAll()`, `beforeEach()`, `afterEach()`, `afterAll()` | `test.only()`, `test.skip()`, `test.fail()`, `test.fixme()`, `test.slow()`  |
=================================================================================================================================================================

---

## Hooks Example

```ts
test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com");
    // Login
});
```

### Purpose

- Setup
- Launch Application
- Login
- Create Test Data

---

## Annotation Example

### Skip a Test

```ts
test.skip("Login Test", async ({ page }) => {
    // Test will be skipped
});
```

### Run Only One Test

```ts
test.only("Login Test", async ({ page }) => {
    // Only this test will execute
});
```

### Expected Failure

```ts
test.fail("Known Bug", async ({ page }) => {
    // Expected to fail
});
```

### Slow Test

```ts
test.slow();
```

---

## Real-Time Usage

| Hooks | Annotations |
|--------|-------------|
| Launch Browser | Skip unstable test |
| Open Application | Run only one test |
| Login | Mark known bug |
| Create Test Data | Mark incomplete feature |
| Logout | Increase timeout for slow test |
| Cleanup Database | Expected failure |

---

## Interview Questions & Answers

### Q1. What are Hooks in Playwright?

**Answer:**

Hooks are lifecycle methods that execute before or after test execution to perform
common setup and cleanup activities such as launching the application, login, logout, and cleanup.

================================================

### Q2. What are Annotations in Playwright?

**Answer:**

Annotations are used to control the behavior of test execution,
such as skipping a test, running only one test, marking a test as slow, or marking it as an expected failure.

================================================

### Q3. Can Hooks skip a test?

**Answer:**

No. Hooks cannot control test execution. They only perform setup and cleanup activities.

================================================

### Q4. Can Annotations perform Login or Launch the Application?

**Answer:**

No. Annotations only control how a test executes. Login, Launch Application, and Cleanup should be implemented using Hooks.

================================================

### Q5. Which is used for Login?

**Answer:**

Hooks (`beforeEach()` or `beforeAll()`).

================================================

### Q6. Which is used to skip a test?

**Answer:**

Annotations (`test.skip()`).

================================================

### Q7. Which is used to run only one test?

**Answer:**

Annotations (`test.only()`).

================================================

### Q8. Which is used for Cleanup?

**Answer:**

Hooks (`afterEach()` or `afterAll()`).

================================================

## Interview One-Line Answer

> Hooks manage the test lifecycle by performing setup and cleanup activities, whereas Annotations control how a test should be executed.

================================================