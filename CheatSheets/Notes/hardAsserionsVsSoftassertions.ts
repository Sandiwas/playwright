======================================================================================================================================
# Hard Assertions vs Soft Assertions in Playwright

| Feature                  | Hard Assertion                         | Soft Assertion                   |
| ------------------------ | -------------------------------------- | -------------------------------- |
| Syntax                   | `expect()`                             | `expect.soft()`                  |
| Failure Behavior         | Test stops immediately                 | Test continues execution         |
| Next Statements Execute? | ❌ No                                   | ✅ Yes                            |
| Failure Reporting        | Reports first failure only             | Reports all failures at the end  |
| Use Case                 | Critical validations                   | Multiple validations in one test |
| Real Project Usage       | Login, navigation, payment validations | Form validations, UI validations |

---

# 1. Hard Assertion

### Example

```ts id="wr8f1x"
await expect(page.locator("#msg"))
  .toHaveText("Success");

console.log("Executed");
```

### If Assertion Fails

```text id="df08oe"
Assertion Failed
       ↓
Test Stops
       ↓
console.log() NOT executed
```

---

# 2. Soft Assertion

### Example

```ts id="xv92kb"
await expect.soft(page.locator("#msg"))
  .toHaveText("Success");

console.log("Executed");
```

### If Assertion Fails

```text id="g7m0j4"
Assertion Failed
       ↓
Failure Stored
       ↓
console.log() executed
       ↓
Test fails at the end
```

---

# Example

```ts id="0kzjms"
await expect.soft(page).toHaveTitle("Home");
await expect.soft(page).toHaveURL("/dashboard");
await expect.soft(page.locator("#msg"))
  .toHaveText("Success");

console.log("All validations executed");
```

Even if the first assertion fails, the remaining assertions will still execute.

---

# Internal Working

## Hard Assertion

```text id="j53px0"
Assertion
     ↓
Pass ? ── Yes ──► Continue
     │
     No
     ↓
Test Stops Immediately
```

## Soft Assertion

```text id="p4fqiw"
Assertion
     ↓
Pass ? ── Yes ──► Continue
     │
     No
     ↓
Store Failure
     ↓
Continue Execution
     ↓
Report All Failures at End
```

---

# Interview Question

**Q: What is the difference between Hard Assertion and Soft Assertion in Playwright?**

**Answer:**

```text id="p7t44s"
Hard assertions stop the test execution immediately when the assertion fails.

Soft assertions do not stop the execution. They collect the failures and report them at the end of the test execution.
```

---

# One-Line Interview Answer

```text id="5mkgv0"
expect() = Stop immediately on failure.

expect.soft() = Continue execution and report failures at the end.
```

---

# When to Use?

| Scenario                             | Recommendation |
| ------------------------------------ | -------------- |
| Login failed, cannot proceed further | Hard Assertion |
| Validate multiple fields in a form   | Soft Assertion |
| Verify page navigation               | Hard Assertion |
| Verify all labels and messages on UI | Soft Assertion |

---

# Real-Time Example

```ts id="3u5vv0"
await expect.soft(name).toHaveText("Sandip");
await expect.soft(email).toHaveText("test@gmail.com");
await expect.soft(phone).toHaveText("1234567890");
```

All three validations will execute, and all failures will be shown together in the report.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Interview Question

**Q: Are all auto-retry assertions in Playwright hard assertions?**

**Answer:**

```text id="mwp6rt"
No.

All auto-retry assertions are NOT always hard assertions.

Auto-retry and hard/soft assertions are two different concepts.

1. Auto-retry means the assertion keeps checking the condition until it becomes true or the timeout is reached.
2. Hard/Soft determines whether the test stops or continues after the assertion fails.
```

## Example 1: Auto-Retry + Hard Assertion (Default)

```ts id="nhrmvl"
await expect(locator).toBeVisible();
```

* Auto Retry → ✅ Yes
* Hard Assertion → ✅ Yes

If it fails, the test stops immediately.

---

## Example 2: Auto-Retry + Soft Assertion

```ts id="rj4r79"
await expect.soft(locator).toBeVisible();
```

* Auto Retry → ✅ Yes
* Hard Assertion → ❌ No
* Soft Assertion → ✅ Yes

If it fails, the test continues.

---

# Easy Memory Trick

```text id="pmp74c"
expect(locator).toBeVisible()
        ↓
Auto Retry + Hard Assertion

expect.soft(locator).toBeVisible()
        ↓
Auto Retry + Soft Assertion
```

---

# One-Line Interview Answer

```text id="8v7umf"
Auto-retry and hard/soft assertions are independent concepts.
An auto-retry assertion can be either a hard assertion or a soft assertion.
```
=================================================================================================================================================
