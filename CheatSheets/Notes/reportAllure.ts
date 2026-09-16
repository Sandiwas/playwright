
============================================================================================================================================================================
# Playwright Allure Report – Complete Interview Notes

---

# What is Allure Report?

**Allure Report is a third-party reporting tool that generates rich, interactive, and visually appealing test execution reports for Playwright.**
Unlike the default HTML report, Allure provides advanced features like trends, history, categories, environment details, attachments, and test analytics.

---

# Why do we use Allure Report?

We use Allure Report because it provides:

* Beautiful interactive UI
* Test execution history
* Trend analysis
* Screenshots
* Videos
* Trace attachments
* Categories of failures
* Environment details
* Test execution timeline
* Better debugging information

---

# Is Allure built into Playwright?

**No.**

Allure is **not a built-in reporter**.

It is a **third-party reporter** that integrates with Playwright.

---

# Installation

## Install Allure Playwright Reporter

```bash
npm install -D allure-playwright
```

## Install Allure Command Line

```bash
npm install -g allure-commandline
```

---

# Configure Allure Reporter

```ts
 
```

---

# Multiple Reporters

```ts
reporter: [
  ["html"],
  ["allure-playwright"]
]
```

You can generate both HTML and Allure reports in the same execution.

---

# Run Tests

```bash
npx playwright test
```

After execution, Playwright creates:

```text
allure-results/
```

This folder contains raw execution data.

---

# Generate Allure Report

```bash
allure generate allure-results --clean
```

Output:

```text
allure-report/
```

---

# Open Allure Report

```bash
allure open allure-report
```

OR

```bash
allure serve allure-results
```

This command:

* Generates the report
* Starts a local server
* Opens the report automatically

---

# Folder Structure

```text
Project
│
├── allure-results
│
├── allure-report
│
└── playwright.config.ts
```

---

# What is `allure-results`?

It stores the raw execution data generated after every test run.

Contents include:

* Test results
* Attachments
* Screenshots
* Videos
* Metadata

---

# What is `allure-report`?

It is the final HTML report generated from the `allure-results` folder.

---

# Features of Allure Report

✔ Dashboard
✔ Passed Tests
✔ Failed Tests
✔ Skipped Tests
✔ Broken Tests
✔ Test Duration
✔ Execution Timeline
✔ Test History
✔ Trend Graph
✔ Categories
✔ Environment Information
✔ Screenshots
✔ Videos
✔ Trace Files
✔ Attachments
✔ Stack Trace
✔ Error Messages
✔ Retry Information
---

# Allure Annotations

## Epic

```ts
await allure.epic("E-Commerce");
```

---

## Feature

```ts
await allure.feature("Login");
```

---

## Story

```ts
await allure.story("Valid Login");
```

---

## Severity

```ts
await allure.severity("critical");
```

---

## Owner

```ts
await allure.owner("Sandip");
```

---

## Tag

```ts
await allure.tag("Regression");
```

---

## Description

```ts
await allure.description("Verify successful login");
```

---

# Screenshot Attachment

```ts
await allure.attachment("Screenshot",await page.screenshot(),"image/png");
```

---

# Text Attachment

```ts
await allure.attachment(
  "Response",
  responseBody,
  "text/plain"
);
```

---

# Advantages of Allure

* Rich UI
* Easy debugging
* Supports screenshots
* Supports videos
* Supports traces
* Supports history
* Supports trends
* Supports categories
* Easy integration with CI/CD

---

# Disadvantages

* Third-party dependency
* Requires installation
* Requires report generation after execution

---

# HTML Report vs Allure Report

| HTML Report           | Allure Report  |
| --------------------- | -------------- |
| Built into Playwright | Third-party    |
| Basic dashboard       | Rich dashboard |
| Screenshots           | Screenshots    |
| Videos                | Videos         |
| Trace                 | Trace          |
| History               | ✅ Yes          |
| Trend Analysis        | ✅ Yes          |
| Categories            | ✅ Yes          |
| Timeline              | ✅ Yes          |
| Environment           | ✅ Yes          |

---

# Interview Questions

## Q1. What is Allure Report?

**Answer:**

Allure Report is a third-party reporting tool that generates rich and interactive test execution reports with screenshots, videos, trends, history, and attachments.

---

## Q2. Is Allure a built-in Playwright reporter?

**Answer:**

No. It is a third-party reporter that integrates with Playwright.

---

## Q3. How do you install Allure?

```bash
npm install -D allure-playwright
npm install -g allure-commandline
```

---

## Q4. How do you configure Allure?

```ts
reporter: [
  ["allure-playwright"]
]
```

---

## Q5. Which folder stores raw execution data?

**Answer:**

```text
allure-results
```

---

## Q6. Which folder stores the final report?

**Answer:**

```text
allure-report
```

---

## Q7. How do you generate the report?

```bash
allure generate allure-results --clean
```

---

## Q8. How do you open the report?

```bash
allure open allure-report
```

or

```bash
allure serve allure-results
```

---

## Q9. Can we use HTML and Allure together?

**Answer:**

Yes.

```ts
reporter: [
  ["html"],
  ["allure-playwright"]
]
```

---

## Q10. Why do companies prefer Allure?

**Answer:**

Because it provides advanced reporting features like:

* Test history
* Trend analysis
* Timeline
* Categories
* Environment details
* Rich dashboard
* Better debugging with screenshots, videos, and attachments

---

# Easy Memory Trick

```text
Playwright Test
        │
        ▼
allure-results
(Raw Test Data)
        │
        ▼
allure generate
        │
        ▼
allure-report
(Interactive HTML Report)
        │
        ▼
allure open / allure serve
(View Report in Browser)
```
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

==============================
Allure Report Commands
==============================

1. Install Allure Playwright Reporter

npm install -D allure-playwright

Purpose:
Installs the third-party Playwright reporter that generates the `allure-results` folder.

----------------------------------------

2. Install Allure Command Line

npm install -g allure-commandline

Purpose:
Installs the Allure CLI tool used to generate and view the report.

----------------------------------------

3. Run Playwright Tests

npx playwright test

Purpose:
Executes the Playwright tests and generates the `allure-results` folder.

----------------------------------------

4. Generate Allure Report

allure generate allure-results --clean

Purpose:
Generates the HTML report from the `allure-results` folder.

Note:
--clean removes the old report before generating a new one.

Output Folder:

allure-report/

----------------------------------------

5. Open Existing Allure Report

allure open allure-report

Purpose:
Opens the generated Allure report in your default browser.

----------------------------------------

6. Generate and Open Report (Most Common)

allure serve allure-results

Purpose:
• Generates the report
• Starts a local web server
• Automatically opens the report in the browser

----------------------------------------

Complete Allure Workflow
Step 1:
npm install -D allure-playwright
↓
Step 2:
 npm install -g allure-commandline
↓
Step 3:
npx playwright test
↓
Creates:
allure-results/
↓
Step 4:
allure generate allure-results --clean
↓
Creates:
allure-report/
↓
Step 5:
allure open ./allure-report
OR
allure serve allure-results
(Generate + Open in one command)
=========================================
Interview Questions
=========================================

Q. Which command generates the Allure Report?

Answer:
allure generate allure-results --clean

-----------------------------------------

Q. Which command opens an existing Allure Report?

Answer:
allure open allure-report

-----------------------------------------

Q. Which command generates and opens the report together?

Answer:
allure serve allure-results

=========================================
Easy Memory Trick
=========================================

Run Tests
     │
     ▼
npx playwright test
     │
     ▼
allure-results
     │
     ├── allure generate allure-results --clean
     │          │
     │          ▼
     │    allure-report
     │          │
     │          ▼
     │    allure open allure-report
     │
     └── OR

allure serve allure-results
(Generate + Open in one command)
