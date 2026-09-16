===================================================================================================================================
PLAYWRIGHT TRACE VIEWER – INTERVIEW QUESTIONS & ANSWERS

Q1. What is Playwright Trace Viewer?
Ans:
Playwright Trace Viewer is a debugging tool that records and replays test execution. It allows us to inspect each step of the test, including screenshots, DOM snapshots, network requests, console logs, and execution timings.

--------------------------------------------------------------------------------

Q2. Why do we use Trace Viewer?
Ans:
We use Trace Viewer to:
• Debug failed tests.
• Investigate flaky tests.
• Analyze network requests and console errors.
• Understand what happened during execution.
• Debug failures occurring in CI/CD pipelines.

--------------------------------------------------------------------------------

Q3. What information does a trace contain?
Ans:
A trace contains:
• Test actions (click, fill, hover, etc.)
• Screenshots
• DOM snapshots
• Network requests and responses
• Console logs
• Source code information
• Execution timings

--------------------------------------------------------------------------------

Q4. How do you enable Trace Viewer?
Ans:

In playwright.config.ts

use: {
  trace: 'on'
}

Or from command line:

npx playwright test --trace on

--------------------------------------------------------------------------------

Q5. What are the available trace options?

+----------------------------+--------------------------------------------------------------+
| Trace Option               | Description                                                  |
+----------------------------+--------------------------------------------------------------+
| trace: 'on'                | Captures traces for every test execution.                    |
+----------------------------+--------------------------------------------------------------+
| trace: 'off'               | Disables trace collection completely.                        |
+----------------------------+--------------------------------------------------------------+
| trace: 'on-first-retry'    | Captures a trace only on the first retry of a failed test.   |
+----------------------------+--------------------------------------------------------------+
| trace: 'on-all-retries'    | Captures traces for all retry attempts of a failed test.     |
+----------------------------+--------------------------------------------------------------+
| trace: 'retain-on-failure' | Keeps traces only for failed tests and deletes traces of     |
|                            | passed tests.                                                |
+----------------------------+--------------------------------------------------------------+
| trace: 'retain-on-first-   | Keeps traces only for the first failed attempt and does not  |
| failure'                   | retain traces for retries or passed tests.                  |
+----------------------------+--------------------------------------------------------------+
| trace: 'retry-with-trace'  | Deprecated alias of 'on-first-retry'; captures trace only    |
|                            | on the first retry of a failed test.                         |
+----------------------------+--------------------------------------------------------------+
use: {
  trace: 'on-first-retry'
}
+----------------------------+---------------------------------------------+
| Trace Option               | Short Description                           |
+----------------------------+---------------------------------------------+
| trace: 'on'                | Trace for every test.                       |
+----------------------------+---------------------------------------------+
| trace: 'off'               | No trace collection.                        |
+----------------------------+---------------------------------------------+
| trace: 'on-first-retry'    | Trace only on first retry.                  |
+----------------------------+---------------------------------------------+
| trace: 'on-all-retries'    | Trace on every retry.                       |
+----------------------------+---------------------------------------------+
| trace: 'retain-on-failure' | Keep traces only for failed tests.          |
+----------------------------+---------------------------------------------+
| trace: 'retain-on-first-   | Keep trace only for the first failed run.   |
| failure'                   |                                             |
+----------------------------+---------------------------------------------+
| trace: 'retry-with-trace'  | Deprecated; same as 'on-first-retry'.       |
+----------------------------+---------------------------------------------+

One-liner to remember:
on → Everything
off → Nothing
on-first-retry → First Retry Only
on-all-retries → All Retries
retain-on-failure → Failures Only
retain-on-first-failure → First Failure Only
retry-with-trace → Old name of on-first-retry


Interview Answer:

In my framework, I use trace: 'on-first-retry' because it saves storage and generates
 traces only for failed test retries, making debugging more efficient.
--------------------------------------------------------------------------------

Q6. Which trace option do you use in your framework and why?
Ans:
I generally use:

use: {
  trace: 'on-first-retry'
}

Because it saves storage space and generates traces only for failed tests, making debugging efficient.

--------------------------------------------------------------------------------

Q7. How do you open a trace file?
Ans:

npx playwright show-trace trace.zip

Or:

npx playwright show-report

and click on the Trace icon.

--------------------------------------------------------------------------------

Q8. Where is the trace file generated?
Ans:
The trace file is generated inside:

test-results/

with the name:

trace.zip

--------------------------------------------------------------------------------

Q9. What can you see in Trace Viewer?
Ans:
In Trace Viewer, we can see:
• Every Playwright action
• Screenshots for each step
• DOM snapshots
• Network requests and responses
• Console logs
• Source code
• Execution timeline

--------------------------------------------------------------------------------

Q10. Can we use Trace Viewer in CI/CD?
Ans:
Yes. We can upload the trace.zip file as an artifact in Jenkins, GitHub Actions, or Azure DevOps and download it later to investigate test failures.

--------------------------------------------------------------------------------

Q11. What is the difference between Screenshot, Video, and Trace?

+-------------+------------+---------+-------+
| Feature     | Screenshot | Video   | Trace |
+-------------+------------+---------+-------+
| Single Image| Yes        | No      | No    |
| Recording   | No         | Yes     | Yes   |
| DOM Snapshot| No         | No      | Yes   |
| Network Logs| No         | No      | Yes   |
| Console Logs| No         | No      | Yes   |
+-------------+------------+---------+-------+

--------------------------------------------------------------------------------

Q12. What is the difference between HAR and Trace?
Ans:

HAR File:
• Contains only network requests and responses.

Trace File:
• Contains screenshots, DOM snapshots, actions, console logs, and network details.

Trace is much more powerful for debugging.

--------------------------------------------------------------------------------

Q13. How does Trace Viewer help in debugging?
Ans:
Trace Viewer allows us to replay the entire test execution step by step, making it easy to identify exactly where and why the test failed.

--------------------------------------------------------------------------------

MOST IMPORTANT INTERVIEW ANSWER

Q14. Explain how you use Trace Viewer in your framework.

Ans:
In my framework, I use trace: 'on-first-retry'. Whenever a test fails and retries, Playwright generates a trace.zip file. I open it using:

npx playwright show-trace trace.zip

It helps me analyze each action, screenshots, DOM snapshots, network requests, and console logs. This significantly reduces debugging time, especially for failures occurring in CI/CD environments.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
### Interview Answer

The Timeline (Time Travel) feature in Playwright Trace Viewer allows us to replay test execution step by step, move between actions, 
inspect DOM snapshots, screenshots, and network calls, and identify exactly where and why a test failed.



The Timeline (Time Travel) feature in Playwright Trace Viewer allows us to replay test execution step by step,
 move between actions, inspect DOM snapshots, screenshots, network calls, and identify exactly where and why a test failed.


 Time Travel: Replay and debug test execution step by step.
+----------------------+--------------------------------------------------+
| Timeline Feature     | Description                                      |
+----------------------+--------------------------------------------------+
| Time Travel          | Move forward and backward through each test step.|
+----------------------+--------------------------------------------------+
| Step-by-Step Replay  | Replay the test execution one action at a time.  |
+----------------------+--------------------------------------------------+
| Timestamp            | Shows the exact time of each action.             |
+----------------------+--------------------------------------------------+
| Action Duration      | Displays how long each step took to execute.     |
+----------------------+--------------------------------------------------+
| Before/After State   | View page state before and after an action.      |
+----------------------+--------------------------------------------------+
| Failure Point        | Jump directly to the step where the test failed. |
+----------------------+--------------------------------------------------+


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Professional Interview Answer

Playwright Trace Viewer is a debugging tool that provides a complete recording of test execution. 
It allows us to replay the test step by step and inspect actions, screenshots, DOM snapshots, network requests,
 console logs, and the exact point of failure, making debugging easier and faster.

One-Line Interview Answer

Playwright Trace Viewer helps us replay, analyze, and debug test execution step by step. ✅

Short & Crisp Answer (Most Interviewers Like This)

Trace Viewer is a debugging tool that records test execution and helps identify where and why a test failed. ✅



Playwright Trace Viewer – Interview Answers

1. What is Trace Viewer?
Playwright Trace Viewer is a debugging tool that records and replays test execution step by step. It helps identify where and why a test failed.

2. Why do we use Trace Viewer?
We use Trace Viewer to debug failed or flaky tests and analyze test execution easily.
3. What can you see in Trace Viewer?
• Actions performed during the test
• Screenshots
• DOM snapshots
• Network requests and responses
• Console logs
• Source code
• Timeline (Time Travel)
• Error details and stack trace

4. What is the Time Travel feature?
Time Travel allows us to replay the test step by step and inspect exactly where the test failed.

5. How do you open a trace file?
npx playwright show-trace trace.zip

6. How do you enable trace collection?
use: {
  trace: 'on'
}

Trace Options
trace: 'off'
→ Disables trace collection completely.
trace: 'on'
→ Captures trace for every test execution.
trace: 'on-first-retry'
→ Captures trace only on the first retry of a failed test.
trace: 'on-all-retries'
→ Captures traces for all retry attempts.
trace: 'retain-on-failure'
→ Keeps traces only for failed tests and deletes traces of passed tests.
trace: 'retain-on-first-failure'
→ Keeps trace only for the first failed attempt.
trace: 'retry-with-trace'
→ Deprecated alias of 'on-first-retry'.

Most Asked Interview Question
Q: Which trace option do you use in your project and why?
A: We generally use 'on-first-retry' because it captures traces only when a test fails and goes for a retry. This helps debug flaky tests while avoiding unnecessary trace files and saving storage.

OR

A: We use 'retain-on-failure' because it keeps traces only for failed tests and saves disk space.
One-Line Summary
Playwright Trace Viewer is a debugging tool that allows us to replay test execution step by step and quickly identify where and why a test failed.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Most Common Interview Question

Q: Which trace option do you use in your project and why?

Answer:

We generally use trace: 'on-first-retry' because it captures traces only when a test fails and goes for a retry. This helps in debugging flaky tests while avoiding unnecessary trace files and saving storage.

Or

We use trace: 'retain-on-failure' because it keeps traces only for failed tests and saves disk space.

One-Line Summary for Interview

Playwright Trace Viewer is a debugging tool that allows us to replay test execution step by step and quickly identify where and why a test failed. ✅
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Interview Answer
Screenshot, Video, and Trace configurations are mainly used for reporting and debugging purposes.

They help us analyze failed test cases by providing screenshots, execution videos, and step-by-step traces, but they do not affect the actual test logic or functionality being tested.
----------------------------------------------------------
One Important Point
Although these features are mainly for reporting/debugging, Trace can indirectly help in debugging functional issues because it captures:

Actions performed
Screenshots
Network calls
Console logs
DOM snapshots

But still, its purpose is debugging/reporting, not implementing the test itself.

----------------------------------------------------------------------------------------
Easy Memory Trick
Screenshot → Failure Evidence
Video      → Replay Execution
Trace      → Deep Debugging

All three → Reporting & Debugging Features
Not Business Test Logic

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Where is `trace.zip` stored?

```ts
await context.tracing.stop({
  path: 'trace.zip'
});
```

Since you provided only the filename (`trace.zip`) and no folder path, Playwright will save the file in the **current working directory (project root)**.

Example:

```text
MyPlaywrightProject/
│
├── tests/
├── playwright.config.ts
├── package.json
├── trace.zip   ← Stored here
└── node_modules/
```

---

# Save Trace in a Specific Folder

```ts
await context.tracing.stop({
  path: 'traces/trace.zip'
});
```

Then the file will be stored here:

```text
MyPlaywrightProject/
│
├── traces/
│    └── trace.zip
├── tests/
└── playwright.config.ts
```

---

# How to Open the Trace?

```bash
npx playwright show-trace trace.zip
```

or

```bash
npx playwright show-trace traces/trace.zip
```

---

# Interview Question

**Q: Where is `trace.zip` stored when we use `context.tracing.stop({ path: 'trace.zip' })`?**

**Answer:**

```text
If only the filename is provided, Playwright stores trace.zip in the project's current working directory (project root). If we provide a folder path, it stores the trace file in that specific folder.
```
