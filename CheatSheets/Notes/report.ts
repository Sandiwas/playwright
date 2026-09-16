===========================================================================================================================================================================


# Playwright Reporters – Complete Interview Notes

## What is a Reporter?

A **Reporter** in Playwright is responsible for displaying or generating test execution results.

It tells Playwright **where** and **how** to save or display the execution report.

---

# Configure Reporter

```ts
reporter: "html"
```

or

```ts
reporter: [
  ["html"],
  ["line"]
]
```

---

# 1. HTML Reporter (Most Common)

```ts
reporter: [
  ["html"]
]
```

### Custom Configuration

```ts
reporter: [
  ["html", {
    open: "always",
    outputFolder: "html-report"
  }]
]
```

### Options

| Option               | Description                        |
| -------------------- | ---------------------------------- |
| `open: "always"`     | Opens report after every execution |
| `open: "never"`      | Never opens automatically          |
| `open: "on-failure"` | Opens only when tests fail         |
| `outputFolder`       | Custom folder for report           |

### Output

```text
html-report/
    index.html
```

### Interview Use

Most commonly used reporter in Playwright because it provides screenshots, videos, traces, execution summary, and error details.

---

# 2. Line Reporter

```ts
reporter: [
    ["line"]
]
```

### Output

```text
Running 5 tests...

✓ Login Test
✓ Search Test
✓ Checkout Test
```

### Best For

* Local execution
* CI/CD logs
* Clean console output

---

# 3. Dot Reporter

```ts
reporter: [
    ["dot"]
]
```

### Output

```text
.....
```

Failed test

```text
..F..
```

### Meaning

```
. = Passed
F = Failed
```

### Best For

Large test suites where you want minimal console output.

---

# 4. List Reporter (Default)

```ts
reporter: [
    ["list"]
]
```

### Output

```text
Running 3 tests

✓ Login Test
✓ Search Test
✓ Logout Test
```

### Best For

Local execution.

This is the **default Playwright reporter**.

---

# 5. JUnit Reporter

```ts
reporter: [
    ["junit", {
        outputFile: "junitReport/result.xml"
    }]
]
```

### Output

```text
junitReport/
      result.xml
```

### File Type

```
XML
```

### Used For

CI/CD tools like

* Jenkins
* Bamboo
* Azure DevOps
* TeamCity
* GitLab CI

---

# 6. JSON Reporter

```ts
reporter: [
    ["json", {
        outputFile: "jsonReport/result.json"
    }]
]
```

### Output

```text
jsonReport/
      result.json
```

### File Type

```
JSON
```

### Used For

* Custom dashboards
* Analytics
* API integrations
* Report parsing

---

# Multiple Reporters

Playwright supports multiple reporters simultaneously.

Example:

```ts
reporter: [
    ["html", {
        open: "always",
        outputFolder: "report-html"
    }],
    ["line"],
    ["dot"],
    ["list"],
    ["junit", {
        outputFile: "junitReport/result.xml"
    }],
    ["json", {
        outputFile: "jsonReport/result.json"
    }]
]
```

### Output Generated

```text
Console

↓

Line Reporter

↓

Dot Reporter

↓

List Reporter

↓

HTML Report

↓

JUnit XML

↓

JSON Report
```

---

# Correct Configuration

```ts
reporter: [
  ["html", {
    open: "always",
    outputFolder: "report-html"
  }],
  ["line"],
  ["dot"],
  ["list"],
  ["junit", {
    outputFile: "junitReport/result.xml"
  }],
  ["json", {
    outputFile: "jsonReport/result.json"
  }]
]
```

> **Note:** Use **`outputFile`**, not `outputFolder`, for **JUnit** and **JSON** reporters.

---

# Interview Questions

## Q1. What is a Reporter in Playwright?

**Answer:**

A Reporter generates and displays test execution results in different formats such as HTML, List, Line, Dot, JUnit XML, and JSON.

---

## Q2. Which is the default reporter?

**Answer:**

```
List Reporter
```

---

## Q3. Which reporter is most commonly used?

**Answer:**

```
HTML Reporter
```

---

## Q4. Which reporter is used in Jenkins?

**Answer:**

```
JUnit Reporter
```

because Jenkins understands XML reports.

---

## Q5. Which reporter generates a JSON file?

**Answer:**

```
JSON Reporter
```

---

## Q6. Which reporter produces the smallest console output?

**Answer:**

```
Dot Reporter
```

Example:

```text
.....F....
```

---

## Q7. Can Playwright use multiple reporters at the same time?

**Answer:**

Yes. Playwright supports multiple reporters in a single configuration.

Example:

```ts
reporter: [
    ["html"],
    ["line"],
    ["junit"],
    ["json"]
]
```

---

## Q8. What is the difference between HTML and JUnit reporters?

| HTML Reporter                        | JUnit Reporter                   |
| ------------------------------------ | -------------------------------- |
| Interactive report                   | XML report                       |
| Used by testers                      | Used by CI/CD tools              |
| Includes screenshots, videos, traces | Test results only                |
| Opens in browser                     | Consumed by Jenkins/Azure DevOps |

---

# Easy Memory Trick

```text
HTML
↓
Beautiful Interactive Report

LIST
↓
Default Console Output

LINE
↓
One Line Progress

DOT
↓
. . . . F . .

JUNIT
↓
XML for Jenkins

JSON
↓
JSON for APIs & Dashboards
```
======================================================================================================================================================


# Interview Answer – What is `reporter` in Playwright?

### Answer (Professional & Easy)

**`reporter` is a configuration property in the Playwright configuration file. It tells Playwright how to display or generate the test execution results.**

For example, we can generate reports in different formats like:

* HTML
* Line
* List
* Dot
* JUnit
* JSON

---

### Example

```ts
export default defineConfig({
    reporter: "html"
});
```

Here:

* `defineConfig()` → Configuration function
* `{ }` → Configuration object
* `reporter` → Configuration property
* `"html"` → Reporter type (value)

---

## Real-Life Explanation

Think of `reporter` as the **output format** of your test execution.

Just like a printer can print in different formats, Playwright can generate reports in different formats using the `reporter` property.

---

## Interview Question

**Q. What is `reporter` in Playwright?**

**Answer:**

> "`reporter` is a configuration property in the Playwright configuration file. It defines how Playwright should display or generate the test execution results. For example, we can generate reports in HTML, Line, List, Dot, JUnit, or JSON format."

---

## Easy Memory Trick

```text
Playwright Configuration
        │
        ├── reporter  → Test Report Format
        ├── use
        ├── projects
        ├── workers
        └── timeout
```

### One-Line Answer (Best for Interviews)

> **"`reporter` is a configuration property that defines how Playwright generates and displays test execution reports."**


====================================================================================================================================================================
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

When to use simple syntax

If you need only one reporter without any configuration, write:
reporter: "list"

Other examples:
reporter: "html"
reporter: "line"
reporter: "dot"
reporter: "json"
reporter: "junit"