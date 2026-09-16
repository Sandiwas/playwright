============================================================================================================================================================================
# Playwright Hooks - Part 1 (Fundamentals & Interview Notes)

# What are Hooks in Playwright?

## Answer
Hooks are special lifecycle methods provided by Playwright that automatically execute **before or after test execution**.
They are used to perform common **setup** and **cleanup** activities, so the same code does not need to be repeated in every test case.

For example:

- Launch the application
- Login to the application
- Generate API tokens
- Create test data
- Logout
- Delete test data
- Close database connections
- Clean up resources

Playwright provides four hooks:

- `beforeAll()` → Executes once before all test cases.
- `beforeEach()` → Executes before every test case.
- `afterEach()` → Executes after every test case.
- `afterAll()` → Executes once after all test cases.

Using hooks makes the automation framework cleaner, reusable, maintainable, and reduces duplicate code.

### Execution Flow

```text
beforeAll()

        ↓

beforeEach()

        ↓

Test Execution

        ↓

afterEach()

        ↓

beforeEach()

        ↓

Next Test Execution

        ↓

afterEach()

        ↓

afterAll()
```

### Interview One-Line Answer

> Hooks are special lifecycle methods that automatically execute before or after test execution to perform common setup and cleanup activities.
================================================
================================================

# Why do we use Hooks?

## Answer

Without Hooks, we have to write the same code in every test.

Example:

```ts
test("Test1", async ({ page }) => {

    await page.goto("https://demo.com");
    await login();

});

test("Test2", async ({ page }) => {

    await page.goto("https://demo.com");
    await login();

});
```

Here,

- goto() is repeated
- login() is repeated

Instead,

```ts
test.beforeEach(async ({ page }) => {

    await page.goto("https://demo.com");
    await login();

});
```

Now every test automatically starts after login.

### Benefits

- Less duplicate code
- Better maintenance
- Easy readability
- Faster development
- Centralized setup

### Interview One-Line Answer

> Hooks reduce code duplication by moving common setup and cleanup code into a single place.

================================================

# Playwright Hook Lifecycle

There are four hooks in Playwright.

| Hook | Runs |
|------|------|
| beforeAll() | Once before all tests |
| beforeEach() | Before every test |
| afterEach() | After every test |
| afterAll() | Once after all tests |

================================================

# Execution Order

```text
beforeAll()

        │

        ▼

beforeEach()

        │

        ▼

Test 1

        │

        ▼

afterEach()

        │

        ▼

beforeEach()

        │

        ▼

Test 2

        │

        ▼

afterEach()

        │

        ▼

beforeEach()

        │

        ▼

Test 3

        │

        ▼

afterEach()

        │

        ▼

afterAll()
```

### Interview One-Line Answer

> Playwright executes hooks in this order: beforeAll → beforeEach → Test → afterEach → afterAll.

================================================

# Hook 1 : beforeAll()

## Purpose

Runs only once before all test cases.

## Syntax

```ts
test.beforeAll(async () => {

});
```

## Real-Time Use Cases

- Database Connection
- API Token Generation
- Read Config File
- Create Common Test Data
- Launch Shared Resources

## Example

```ts
test.beforeAll(async () => {

    console.log("Executed Once");

});
```

### Interview One-Line Answer

> beforeAll() executes only once before all tests and is used for one-time setup activities.

================================================

# Hook 2 : beforeEach()

## Purpose

Runs before every test case.

## Syntax

```ts
test.beforeEach(async ({ page }) => {

});
```

## Real-Time Use Cases

- Open Application
- Login
- Navigate to Dashboard
- Create Fresh Browser State

## Example

```ts
test.beforeEach(async ({ page }) => {

    await page.goto("https://demo.com");

});
```

### Interview One-Line Answer

> beforeEach() runs before every test and is mainly used for application setup like login or navigation.

================================================

# Hook 3 : afterEach()

## Purpose

Runs after every test case.

## Syntax

```ts
test.afterEach(async () => {

});
```

## Real-Time Use Cases

- Logout
- Delete Test Data
- Close Popups
- Clear Cookies
- Take Custom Screenshot

## Example

```ts
test.afterEach(async () => {

    console.log("Cleanup");

});
```

### Interview One-Line Answer

> afterEach() runs after every test and is mainly used for cleanup activities.

================================================

# Hook 4 : afterAll()

## Purpose

Runs only once after all tests finish.

## Syntax

```ts
test.afterAll(async () => {

});
```

## Real-Time Use Cases

- Close Database
- Disconnect APIs
- Delete Temporary Files
- Generate Summary Report

## Example

```ts
test.afterAll(async () => {

    console.log("Execution Completed");

});
```

### Interview One-Line Answer

> afterAll() executes once after all tests and is mainly used to release resources.

================================================

# Real-Time Hook Example

```ts
import { test } from '@playwright/test';

test.beforeAll(async () => {

    console.log("Connect Database");

});

test.beforeEach(async ({ page }) => {

    await page.goto("https://demoblaze.com");

});

test("Login Test", async ({ page }) => {

    console.log("Login Executed");

});

test("Order Test", async ({ page }) => {

    console.log("Order Executed");

});

test.afterEach(async () => {

    console.log("Logout");

});

test.afterAll(async () => {

    console.log("Close Database");

});
```

Output

```text
Connect Database

Goto Application

Login Test

Logout

Goto Application

Order Test

Logout

Close Database
```

================================================

# Real-Time Interview Questions

## Question 1

### Q. What are Hooks in Playwright?

### Answer

Hooks are special methods that execute before or after test execution. They help perform common setup and cleanup activities, reducing duplicate code and improving maintainability.

### Interview One-Line Answer

> Hooks execute before or after tests to perform setup and cleanup activities.

================================================

## Question 2

### Q. Why do we use Hooks?

### Answer

Hooks eliminate duplicate code by moving common setup and cleanup logic into a single place. This makes the framework cleaner, easier to maintain, and reduces code repetition.

### Interview One-Line Answer

> Hooks reduce code duplication and improve maintainability.

================================================

## Question 3

### Q. How many Hooks are available in Playwright?

### Answer

Playwright provides four hooks:

- beforeAll()
- beforeEach()
- afterEach()
- afterAll()

### Interview One-Line Answer

> Playwright provides four hooks: beforeAll(), beforeEach(), afterEach(), and afterAll().

================================================

## Question 4

### Q. What is the difference between beforeAll() and beforeEach()?

### Answer

| beforeAll() | beforeEach() |
|-------------|--------------|
| Executes once | Executes before every test |
| Used for one-time setup | Used for repeated setup |
| Faster | Runs multiple times |

### Interview One-Line Answer

> beforeAll() runs once, whereas beforeEach() runs before every test.

================================================

## Question 5

### Q. What is the difference between afterEach() and afterAll()?

### Answer

| afterEach() | afterAll() |
|--------------|-------------|
| Executes after every test | Executes once after all tests |
| Used for cleanup after each test | Used for final cleanup |

### Interview One-Line Answer

> afterEach() runs after every test, while afterAll() runs once after all tests finish.

================================================

## Question 6

### Q. What is the execution order of Hooks?

### Answer

Execution order is:

```text
beforeAll()

↓

beforeEach()

↓

Test

↓

afterEach()

↓

afterAll()
```

### Interview One-Line Answer

> The execution order is beforeAll → beforeEach → Test → afterEach → afterAll.

================================================

## Question 7

### Q. Give some real-time examples where Hooks are used.

### Answer

Common real-time uses include:

- Login before every test
- Launch application
- Generate API token
- Create test data
- Delete test data
- Logout
- Close database connection
- Generate reports

### Interview One-Line Answer

> Hooks are commonly used for login, setup, cleanup, database connections, API tokens, and report generation.

================================================

# Easy Memory Trick

```text
beforeAll()

↓

Run Once

------------------

beforeEach()

↓

Before Every Test

------------------

Test Executes

------------------

afterEach()

↓

After Every Test

------------------

afterAll()

↓

Run Once at End
```

================================================


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

part 2 

# Playwright Hooks - Part 2 (Advanced Concepts & Real-Time Interview Questions)

---

# Hooks Inside `test.describe()`

## Answer

Hooks can be declared inside a `test.describe()` block.

When a hook is inside a Describe Block, it is executed **only for the test cases inside that group**.

This helps us apply setup and cleanup logic only where it is required.

### Example

```ts
test.describe("Login Module", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://demoblaze.com");

    });

    test("Valid Login", async ({ page }) => {

    });

    test("Invalid Login", async ({ page }) => {

    });

});
```

### Interview One-Line Answer

> Hooks inside `test.describe()` apply only to the tests within that Describe Block.

================================================

# Multiple Hooks

## Answer

Playwright allows multiple hooks of the same type.

They execute in the order they are declared.

### Example

```ts
test.beforeEach(async () => {

    console.log("Launch Browser");

});

test.beforeEach(async () => {

    console.log("Login");

});
```

Output

```text
Launch Browser

Login

Test Executes
```

### Interview One-Line Answer

> Multiple hooks are supported and execute sequentially in the order they are declared.

================================================

# Nested Hooks

## Answer

Hooks can also be used inside nested Describe Blocks.

The parent hook executes first, followed by the child hook.

### Example

```ts
test.describe("Application", () => {

    test.beforeEach(async () => {

        console.log("Parent Hook");

    });

    test.describe("Login", () => {

        test.beforeEach(async () => {

            console.log("Child Hook");

        });

        test("Login Test", async () => {

        });

    });

});
```

Output

```text
Parent Hook

Child Hook

Test Executes
```

### Interview One-Line Answer

> Parent hooks execute before child hooks in nested Describe Blocks.

================================================

# Hook Execution Order in Nested Describe

```text
Parent beforeAll()

        ↓

Child beforeAll()

        ↓

Parent beforeEach()

        ↓

Child beforeEach()

        ↓

Test

        ↓

Child afterEach()

        ↓

Parent afterEach()

        ↓

Child afterAll()

        ↓

Parent afterAll()
```

================================================

# Hooks with Fixtures

## Answer

Hooks can access Playwright fixtures like:

- page
- browser
- context
- request

### Example

```ts
test.beforeEach(async ({ page }) => {

    await page.goto("https://demoblaze.com");

});
```

### Interview One-Line Answer

> Hooks support Playwright fixtures and can directly use page, browser, context, request, etc.

================================================

# Hooks with test.use()

## Answer

We can combine Hooks with `test.use()`.

Example

```ts
test.describe("Login", () => {

    test.use({

        viewport: {

            width: 1920,
            height: 1080

        }

    });

});
```

Only the Login module uses this configuration.

### Interview One-Line Answer

> `test.use()` applies configuration, while hooks perform setup and cleanup.

================================================

# Hooks in Serial Execution

## Answer

When using

```ts
test.describe.configure({

    mode: "serial"

});
```

Tests execute one after another.

If one test fails,

Remaining tests inside the Describe Block are skipped.

Hooks still follow the normal execution order.

### Interview One-Line Answer

> In Serial mode, tests execute sequentially, and failure of one test skips the remaining tests.

================================================

# Hooks in Parallel Execution

## Answer

When using

```ts
test.describe.configure({

    mode: "parallel"

});
```

Each test executes independently.

Every test gets its own:

- Browser Context
- Fixtures
- beforeEach()
- afterEach()

### Interview One-Line Answer

> In Parallel mode, every test executes independently with its own hooks and fixtures.

================================================

# Can We Skip Hooks?

## Answer

No.

Hooks cannot be skipped directly.

However,

If the test itself is skipped,

Associated hooks may not execute for that skipped test depending on the hook type and execution stage.

### Interview One-Line Answer

> Hooks cannot be skipped directly, but skipped tests do not execute their test-level lifecycle.

================================================

# Common Mistakes in Hooks

❌ Logging in inside every test instead of beforeEach()

❌ Writing database code inside test()

❌ Closing browser inside afterEach()

❌ Using beforeAll() for test data that changes every test

❌ Keeping unnecessary long operations inside beforeEach()

================================================

# Best Practices

✅ Keep Hooks lightweight.

✅ Use beforeAll() only for one-time setup.

✅ Use beforeEach() for fresh test initialization.

✅ Use afterEach() for cleanup.

✅ Use afterAll() for releasing resources.

✅ Don't write assertions inside hooks unless absolutely required.

================================================

# Real-Time Interview Questions

## Question 1

### Q. Can we declare Hooks inside test.describe()?

### Answer

Yes.

Hooks declared inside a Describe Block are applicable only to the tests inside that Describe Block.

### Interview One-Line Answer

> Yes. Hooks inside Describe Blocks execute only for that particular test suite.

================================================

## Question 2

### Q. Can we have multiple beforeEach() Hooks?

### Answer

Yes.

Playwright supports multiple Hooks.

They execute sequentially in the order they are declared.

### Interview One-Line Answer

> Yes. Multiple Hooks are allowed and execute in declaration order.

================================================

## Question 3

### Q. Can Hooks be nested?

### Answer

Yes.

Parent hooks execute first.

Child hooks execute next.

After execution,

Child cleanup happens first,

then Parent cleanup.

### Interview One-Line Answer

> Yes. Parent hooks execute before child hooks, while child cleanup executes before parent cleanup.

================================================

## Question 4

### Q. Can Hooks use Fixtures?

### Answer

Yes.

Hooks support all Playwright fixtures like:

- page
- browser
- context
- request

### Interview One-Line Answer

> Yes. Hooks can directly access Playwright fixtures.

================================================

## Question 5

### Q. Which Hook is mostly used in real-time projects?

### Answer

The most commonly used Hook is

`beforeEach()`.

Because almost every UI test starts with:

- Opening application
- Login
- Navigation
- Test setup

### Interview One-Line Answer

> `beforeEach()` is the most commonly used Hook because every test usually requires fresh setup.

================================================

## Question 6

### Q. Which Hook is least used?

### Answer

Usually,

`beforeAll()` and `afterAll()` are used less frequently.

They are mainly used for:

- Database Connection
- API Token
- Common Test Data
- Resource Cleanup

### Interview One-Line Answer

> `beforeAll()` and `afterAll()` are mainly used for one-time setup and cleanup activities.

================================================

## Question 7

### Q. What are the advantages of using Hooks?

### Answer

Hooks provide:

- Code Reusability
- Better Maintenance
- Less Duplicate Code
- Better Readability
- Centralized Setup
- Centralized Cleanup

### Interview One-Line Answer

> Hooks improve code reusability, maintainability, and reduce duplication.

================================================

# Easy Memory Trick

```text
beforeAll()

↓

One-Time Setup

--------------------

beforeEach()

↓

Every Test Setup

--------------------

Test Executes

--------------------

afterEach()

↓

Every Test Cleanup

--------------------

afterAll()

↓

Final Cleanup
```

================================================

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


# Playwright Hooks - Part 3 (Real-Time Scenarios, Best Practices & Advanced Interview Questions)

---

# Real-Time Scenario 1

## Q. Where do you perform Login in a real-time project?

### Answer

It depends on the application.

If every test requires login, we perform it inside `beforeEach()`.

This ensures every test starts with a fresh session and remains independent.

### Example

```ts
test.beforeEach(async ({ page }) => {

    await page.goto("https://demo.com");

    await login(page);

});
```

### Interview One-Line Answer

> If every test requires login, we usually perform it in `beforeEach()`.

================================================

# Real-Time Scenario 2

## Q. When should we use beforeAll() instead of beforeEach()?

### Answer

Use `beforeAll()` for one-time setup activities.

Examples:

- Generate API Token
- Read Configuration
- Database Connection
- Create Common Test Data

Avoid putting login inside `beforeAll()` unless all tests intentionally share the same session.

### Interview One-Line Answer

> Use `beforeAll()` for one-time initialization activities.

================================================

# Real-Time Scenario 3

## Q. Why don't companies always use beforeAll() for Login?

### Answer

If login is performed in `beforeAll()`,

all tests share the same session.

If one test logs out or changes the session,

remaining tests may fail.

Using `beforeEach()` ensures every test gets a fresh login session.

### Interview One-Line Answer

> Companies prefer `beforeEach()` for login because every test should be independent.

================================================

# Real-Time Scenario 4

## Q. Where do you perform Logout?

### Answer

Logout is usually placed inside `afterEach()`.

This cleans up the application state before the next test starts.

Example

```ts
test.afterEach(async ({ page }) => {

    await logout(page);

});
```

### Interview One-Line Answer

> Logout is generally performed in `afterEach()` to clean up after each test.

================================================

# Real-Time Scenario 5

## Q. Where do you delete test data?

### Answer

If test data is created during execution,

it should be deleted inside `afterEach()`.

This keeps the environment clean.

### Interview One-Line Answer

> Test data cleanup is usually performed in `afterEach()`.

================================================

# Real-Time Scenario 6

## Q. Where do you establish a database connection?

### Answer

Database connections are expensive.

They should be opened once in `beforeAll()` and closed once in `afterAll()`.

Example

```ts
test.beforeAll(async () => {

    console.log("Database Connected");

});

test.afterAll(async () => {

    console.log("Database Closed");

});
```

### Interview One-Line Answer

> Database connections are usually opened in `beforeAll()` and closed in `afterAll()`.

================================================

# Real-Time Scenario 7

## Q. Where do you generate an API Token?

### Answer

API Tokens generally remain valid throughout execution.

So we generate them once inside `beforeAll()`.

### Interview One-Line Answer

> API Tokens are usually generated once in `beforeAll()`.

================================================

# Real-Time Scenario 8

## Q. Where do you launch the application?

### Answer

If every test starts from the Home Page,

launch the application inside `beforeEach()`.

```ts
test.beforeEach(async ({ page }) => {

    await page.goto("https://demo.com");

});
```

### Interview One-Line Answer

> Opening the application is commonly performed inside `beforeEach()`.

================================================

# Real-Time Scenario 9

## Q. What happens if beforeEach() fails?

### Answer

If `beforeEach()` fails,

the current test will not execute.

Playwright marks that test as failed.

Other tests continue to execute.

### Interview One-Line Answer

> If `beforeEach()` fails, the current test is skipped and marked as failed.

================================================

# Real-Time Scenario 10

## Q. What happens if beforeAll() fails?

### Answer

If `beforeAll()` fails,

the tests depending on that hook will not execute.

Playwright stops execution for that suite because the required setup failed.

### Interview One-Line Answer

> If `beforeAll()` fails, the test suite cannot proceed because the initial setup failed.

================================================

# Advanced Interview Questions

## Question 1

### Q. Which Hook is used most in UI Automation?

### Answer

The most commonly used Hook is

`beforeEach()`.

Almost every UI test needs

- Browser Navigation
- Login
- Test Setup

### Interview One-Line Answer

> `beforeEach()` is the most frequently used Hook in UI automation.

================================================

## Question 2

### Q. Which Hook is mostly used in API Automation?

### Answer

Generally,

`beforeAll()`.

Because

- API Token
- Authentication
- Common Headers

need to be created only once.

### Interview One-Line Answer

> API automation commonly uses `beforeAll()` for token generation and authentication.

================================================

## Question 3

### Q. Why shouldn't we put assertions inside Hooks?

### Answer

Hooks should perform setup and cleanup only.

Assertions belong inside the test case.

Otherwise,

a Hook failure may prevent multiple tests from executing.

### Interview One-Line Answer

> Hooks should contain setup and cleanup logic, not test validations.

================================================

## Question 4

### Q. Can Hooks access Playwright Fixtures?

### Answer

Yes.

Hooks can directly use

- page
- browser
- context
- request

just like normal tests.

### Interview One-Line Answer

> Yes. Hooks support all Playwright fixtures.

================================================

## Question 5

### Q. What is the biggest advantage of Hooks?

### Answer

Hooks eliminate duplicate code.

Instead of repeating login or setup in every test,

we write it once and reuse it automatically.

### Interview One-Line Answer

> Hooks improve reusability and reduce duplicate code.

================================================

## Question 6

### Q. What is the biggest disadvantage of Hooks?

### Answer

If Hooks contain unnecessary or heavy operations,

every test becomes slower.

Therefore,

Hooks should contain only common setup and cleanup logic.

### Interview One-Line Answer

> Heavy operations inside Hooks can slow down the entire test suite.

================================================

## Question 7

### Q. Which Hook would you use for Screenshot Cleanup or Temporary File Deletion?

### Answer

`afterAll()`

because cleanup is required only once after execution completes.

### Interview One-Line Answer

> Final cleanup activities are generally performed in `afterAll()`.

================================================

# Real-Time Best Practices

✅ Keep Hooks lightweight.

✅ Never write business validations inside Hooks.

✅ Use `beforeEach()` for Login.

✅ Use `beforeAll()` for expensive one-time setup.

✅ Use `afterEach()` for Logout and cleanup.

✅ Use `afterAll()` for closing shared resources.

✅ Avoid making one test dependent on another.

================================================

# Common Mistakes Asked in Interviews

❌ Login inside every test.

❌ Database connection inside every test.

❌ Closing browser inside `afterEach()`.

❌ Large business logic inside Hooks.

❌ Assertions inside Hooks.

❌ Sharing test data between tests.

================================================

# Easy Memory Trick

```text
beforeAll()

↓

Connect Once

(API Token)

(Database)

(Config)

-----------------------

beforeEach()

↓

Application Launch

↓

Login

↓

Navigation

-----------------------

Test Executes

-----------------------

afterEach()

↓

Logout

↓

Delete Test Data

↓

Cleanup

-----------------------

afterAll()

↓

Close Database

↓

Release Resources

↓

Final Cleanup
```


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



# Playwright Hooks - All Hook Methods

---

| Hook Method | Purpose | Executes | Real-Time Use Case | Example |
|-------------|---------|----------|--------------------|---------|
| `test.beforeAll()` | Executes once before all tests | One time before all test cases | Database connection, API token generation, Read configuration, Create common test data | `test.beforeAll(async () => { });` |
| `test.beforeEach()` | Executes before every test | Before each test case | Launch application, Login, Navigate to dashboard, Setup test data | `test.beforeEach(async ({ page }) => { });` |
| `test.afterEach()` | Executes after every test | After each test case | Logout, Delete test data, Clear cookies, Cleanup environment | `test.afterEach(async () => { });` |
| `test.afterAll()` | Executes once after all tests | One time after all test cases | Close database connection, Release resources, Delete temporary files, Generate final report | `test.afterAll(async () => { });` |

================================================

# Hook Execution Order

```text
beforeAll()
        ↓
beforeEach()
        ↓

Test 1
        ↓
afterEach()
        ↓

beforeEach()
        ↓
Test 2
        ↓
afterEach()
        ↓
beforeEach()
        ↓
Test 3
        ↓
afterEach()
        ↓

afterAll()
```
================================================

# Easy Memory Trick

```text
beforeAll()

↓

Run Once Before All Tests

------------------------

beforeEach()

↓

Run Before Every Test

------------------------

Test Executes

------------------------

afterEach()

↓

Run After Every Test

------------------------

afterAll()

↓

Run Once After All Tests
```

================================================

# Interview One-Line Answer

> Playwright provides four lifecycle hooks: `beforeAll()`, `beforeEach()`, `afterEach()`, and `afterAll()` to perform common setup and cleanup activities before and after test execution.

================================================





======================================================================================================================================================================


Interview Question

Q. Can we give names to Playwright Hooks?

Answer:
In recent versions of Playwright, hooks can optionally have a title for better reporting and debugging. However, many projects and older Playwright versions use hooks without titles. For maximum compatibility, it's common to write:

test.beforeEach(async () => {
    // setup
});


One question: Which Playwright version are you using? (npx playwright --version

================================================
Q. Why is beforeAll() executing multiple times?
Answer

When tests run in parallel, Playwright creates multiple worker processes. Each worker has its own isolated environment and executes its own beforeAll() and afterAll().
Therefore, if four workers are used, beforeAll() and afterAll() execute four times—once per worker.
If you want them to execute only once, run the tests with a single worker or use serial execution.

so solution is run test on one worker 
like with command //npx playwright test 28hokks.spect.ts --headed --workers=1
or make parallel realted changes in config file man : fullyParallel:false so it will create only one worker 
================================================
