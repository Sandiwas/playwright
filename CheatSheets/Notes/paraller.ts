=============================================================================================================
# Playwright Workers - Interview Notes

---

## Q. Why does Playwright show **Running 5 tests using 4 workers** even though I have 5 tests?

### Answer

Playwright creates **workers**, not one worker per test.

A worker is a separate process that executes tests. By default, Playwright uses the number of available CPU cores (or the configured `workers` value). If you have 5 tests and only 4 workers, the first 4 tests run in parallel,
 and when one worker finishes, it executes the 5th test.

---

## Example

Suppose you have 5 tests.

```ts
test("Test1", async () => {});

test("Test2", async () => {});

test("Test3", async () => {});

test("Test4", async () => {});

test("Test5", async () => {});
```

Playwright Output

```text
Running 5 tests using 4 workers
```

Execution Flow

```text
Worker 1  → Test1
Worker 2  → Test2
Worker 3  → Test3
Worker 4  → Test4

After any worker finishes...

Worker 2  → Test5
```

---

## Why only 4 workers?

Because your Playwright configuration is using:

```ts
workers: process.env.CI ? 1 : undefined
```

When `workers` is `undefined`, Playwright automatically chooses the number of workers based on your machine's available CPU cores.

---

## How to run with 5 workers?

### Command

```bash
npx playwright test --workers=5
```

### OR

```ts
export default defineConfig({
    workers: 5,
});
```

Now the output becomes:

```text
Running 5 tests using 5 workers
```

---

## Check available CPU processors

### Windows CMD

```cmd
echo %NUMBER_OF_PROCESSORS%
```

### PowerShell

```powershell
(Get-CimInstance Win32_ComputerSystem).NumberOfLogicalProcessors
```

---

## Interview Questions

### Q1. Does Playwright create one worker for every test?

**Answer**

No.

Playwright creates a pool of workers. A worker is a process that executes one test at a time. After finishing a test, the same worker picks up the next available test.

================================================

### Q2. What is a Worker in Playwright?

**Answer**

A worker is a separate Playwright process responsible for executing tests. Multiple workers allow tests to run in parallel.

================================================

### Q3. How does Playwright decide the number of workers?

**Answer**

By default, Playwright automatically uses the available CPU cores or the value configured in the `workers` option of `playwright.config.ts`.

================================================

### Q4. How can you increase or decrease the number of workers?

**Answer**

By using the `workers` option in the configuration file or the `--workers` command-line option.

Example:

```bash
npx playwright test --workers=5
```

================================================

## Interview One-Line Answer

> A worker is a Playwright execution process, not a test. Multiple tests can be executed sequentially by the same worker based on the configured number of workers.

================================================

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Playwright Worker vs Selenium TestNG Thread

## Interview Question

### Q. Is a Playwright Worker similar to a Thread in Selenium TestNG?

### Answer

Yes, the concept is similar because both are used to execute tests in parallel.

However, a **TestNG Thread** is a Java thread running inside the same JVM process,
 whereas a **Playwright Worker** is a completely separate process with its own browser instance and isolated environment.

This isolation makes Playwright parallel execution more stable and reduces conflicts between tests.

---

## Comparison Table

| Feature | Selenium TestNG | Playwright |
|---------|-----------------|------------|
| Parallel Unit | Thread | Worker (Process) |
| Runs Inside | Same JVM Process | Separate Node.js Process |
| Browser Instance | May be shared (depends on implementation) | Separate Browser/Context |
| Isolation | Less isolated | Fully isolated |
| Stability | Thread conflicts can occur | More stable due to process isolation |

---

## Example

### Selenium TestNG

```xml
<suite parallel="tests" thread-count="4">

    <test name="Chrome">
        ...
    </test>

    <test name="Firefox">
        ...
    </test>

</suite>
```

Here,

```text
4 Threads
```

execute tests in parallel.

---

### Playwright

```ts
export default defineConfig({
    workers: 4
});
```

or

```bash
npx playwright test --workers=4
```

Here,

```text
4 Workers
```

execute tests in parallel.

---

## Easy Understanding

```text
Selenium TestNG

Thread 1
Thread 2
Thread 3
Thread 4

          ↓

Runs inside the same Java process
```

```text
Playwright

Worker 1
Worker 2
Worker 3
Worker 4

          ↓

Each Worker is a separate process
```

---

## Interview One-Line Answer

> A Playwright Worker is conceptually similar to a TestNG Thread because both enable parallel execution,
 but a Worker is a separate process, while a TestNG Thread runs inside the same JVM process.

================================================

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

## Q. Who overrides whom?

### Answer

`test.describe.configure()` **overrides** the execution mode defined in `playwright.config.ts` **for that specific `describe` block**.

That means:

```ts
// playwright.config.ts

fullyParallel: true
```

says:

> "Run all tests in parallel."

But inside your test file:

```ts
test.describe.configure({
    mode: "serial"
});
```

says:

> "No! For this describe block only, run tests serially."

So,

```text
playwright.config.ts
        ↓
fullyParallel: true

        ↓
test.describe.configure({
    mode: "serial"
})

        ↓

Override

        ↓

This describe block runs in SERIAL
```

---

### Interview One-Line Answer

> `test.describe.configure()` overrides the execution mode from `playwright.config.ts` for that specific `describe` block only.

================================================
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test.describe.configure() overrides the execution mode defined in playwright.config.ts for that specific describe block.

Simple Hindi:

test.describe.configure(), playwright.config.ts ki execution setting ko override karta hai.

Or even simpler:

Local setting (test.describe.configure()) Global setting (playwright.config.ts) ko override karti hai.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# How to Check CPU Cores (Workers) on Your Machine

Playwright uses your machine's **logical CPU cores** to decide the default number of workers when `workers` is not explicitly configured.

---

## Method 1: Windows CMD (Recommended)

Open **Command Prompt** and run:

```cmd
echo %NUMBER_OF_PROCESSORS%
```

Example Output:

```text
8
```

This means your system has **8 logical processors**, so Playwright can use up to **8 workers** by default (unless limited in the config).

================================================

## Method 2: PowerShell

Run:

```powershell
(Get-CimInstance Win32_ComputerSystem).NumberOfLogicalProcessors
```

Example Output:

```text
8
```

================================================

## Method 3: Task Manager (GUI)

1. Press **Ctrl + Shift + Esc**
2. Go to **Performance** tab.
3. Click **CPU**.
4. Check:
   - **Cores**
   - **Logical processors**

Example:

```text
Cores               : 4
Logical processors  : 8
```

Playwright uses the **Logical processors** count.

================================================

## Method 4: System Information

Press:

```text
Windows + R
```

Type:

```text
msinfo32
```

Open **System Information** and check your processor details.

================================================

## Interview Question

### Q. How does Playwright decide the number of workers?

### Answer

If the `workers` option is not specified in `playwright.config.ts`, Playwright automatically uses the number of **logical CPU cores** available on the machine to determine the maximum number of workers for parallel execution.

================================================

## Interview One-Line Answer

> By default, Playwright creates workers based on the number of logical CPU cores available on the machine.

================================================



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

One important interview point:

CPU Cores = Physical cores (e.g., 4)
Logical Processors = Threads visible to the OS (e.g., 8 with Hyper-Threading)

👉 Playwright uses the Logical Processors count, not the Physical Cores count. This is a common interview question.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
The worker pool size by default is:

Number of Logical CPU Processors (unless overridden by the workers setting).

For your machine:

Physical Cores      : 4
Logical Processors  : 8

So the maximum default worker pool size is:

Worker Pool = 8 Workers

================================================

But why did you see only 4 workers?

Because the worker pool is the maximum limit, not the guaranteed number of workers created.

Playwright decides how many workers to actually start based on:

Number of tests
Test distribution
Projects
System resources
Internal scheduling

So:

Worker Pool (Maximum) = 8

Actually Created = 4 (in your execution)

Both are normal.

================================================

Interview Question

Q. What is the default worker pool size in Playwright?

Answer:

By default, Playwright sets the maximum worker pool size equal to the number of logical CPU processors available on the machine. It may create fewer workers depending on the test suite and execution strategy.

================================================

Easy Memory Trick
Logical Processors
        ↓
Maximum Worker Pool
        ↓
Playwright creates only the required workers

================================================

One small correction: Many people say "Playwright creates 8 workers by default." That's not completely accurate.

The correct statement is:

"Playwright allows up to the number of logical processors as workers by default, but it creates only as many workers as needed for the current test execution."