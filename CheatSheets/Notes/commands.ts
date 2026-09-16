=========================================================================================================

# Playwright Codegen Commands

| Command                                            | Description                   | Example                                            |
| -------------------------------------------------- | ----------------------------- | -------------------------------------------------- |
| `npx playwright codegen`                           | Opens Codegen tool            | `npx playwright codegen`                           |
| `npx playwright codegen https://google.com`        | Opens URL and generates code  | `npx playwright codegen https://google.com`        |
| `npx playwright codegen --browser=chromium`        | Open in Chromium              | `npx playwright codegen --browser=chromium`        |
| `npx playwright codegen --browser=firefox`         | Open in Firefox               | `npx playwright codegen --browser=firefox`         |
| `npx playwright codegen --browser=webkit`          | Open in WebKit                | `npx playwright codegen --browser=webkit`          |
| `npx playwright codegen --device="iPhone 13"`      | Mobile emulation              | `npx playwright codegen --device="iPhone 13"`      |
| `npx playwright codegen --viewport-size=1280,720`  | Custom viewport               | `npx playwright codegen --viewport-size=1280,720`  |
| `npx playwright codegen --color-scheme=dark`       | Open in dark mode             | `npx playwright codegen --color-scheme=dark`       |
| `npx playwright codegen --lang=en-US`              | Set browser language          | `npx playwright codegen --lang=en-US`              |
| `npx playwright codegen --timezone="Asia/Kolkata"` | Set timezone                  | `npx playwright codegen --timezone="Asia/Kolkata"` |
| `npx playwright codegen --save-storage=state.json` | Save login/session state      | `npx playwright codegen --save-storage=state.json` |
| `npx playwright codegen --load-storage=state.json` | Load saved session            | `npx playwright codegen --load-storage=state.json` |
| `npx playwright codegen --output=login.spec.ts`    | Save generated script         | `npx playwright codegen --output=login.spec.ts`    |
| `npx playwright codegen --target=playwright-test`  | Generate Playwright Test code | `npx playwright codegen --target=playwright-test`  |
| `npx playwright codegen --target=javascript`       | Generate JavaScript code      | `npx playwright codegen --target=javascript`       |
| `npx playwright codegen --target=java`             | Generate Java code            | `npx playwright codegen --target=java`             |
| `npx playwright codegen --target=python`           | Generate Python code          | `npx playwright codegen --target=python`           |

---

# Playwright Trace Commands

| Command                                         | Description                        | Example                                         |
| ----------------------------------------------- | ---------------------------------- | ----------------------------------------------- |
| `npx playwright show-trace trace.zip`           | Opens Trace Viewer                 | `npx playwright show-trace trace.zip`           |
| `npx playwright test --trace on`                | Generate trace for every test      | `npx playwright test --trace on`                |
| `npx playwright test --trace retain-on-failure` | Keep trace only for failed tests   | `npx playwright test --trace retain-on-failure` |
| `npx playwright test --trace on-first-retry`    | Generate trace only on first retry | `npx playwright test --trace on-first-retry`    |
| `npx playwright test --trace off`               | Disable trace                      | `npx playwright test --trace off`               |

---

# Screenshot Options

| Option               | Description                            | Most Used |
| -------------------- | -------------------------------------- | --------- |
| `'off'`              | No screenshots                         | ❌         |
| `'on'`               | Screenshot for every test              | ❌         |
| `'only-on-failure'`  | Screenshot only for failed tests       | ✅         |
| `'on-first-failure'` | Screenshot only on first retry failure | ⚠️        |

---

# Video Options

| Option                | Description                       | Most Used |
| --------------------- | --------------------------------- | --------- |
| `'off'`               | No video recording                | ❌         |
| `'on'`                | Record video for every test       | ❌         |
| `'retain-on-failure'` | Keep videos only for failed tests | ✅         |
| `'on-first-retry'`    | Record only on first retry        | ⚠️        |
| `'retry-with-video'`  | Record all retry executions       | ⚠️        |

---

# Trace Options

| Option                | Description                        | Most Used |
| --------------------- | ---------------------------------- | --------- |
| `'off'`               | No trace                           | ❌         |
| `'on'`                | Trace for every test               | ❌         |
| `'retain-on-failure'` | Keep trace only for failed tests   | ✅         |
| `'on-first-retry'`    | Generate trace only on first retry | ⚠️        |

---

# Browser Installation Commands

| Command                              | Description                        |
| ------------------------------------ | ---------------------------------- |
| `npx playwright install`             | Install all browsers               |
| `npx playwright install chromium`    | Install Chromium only              |
| `npx playwright install firefox`     | Install Firefox only               |
| `npx playwright install webkit`      | Install WebKit only                |
| `npx playwright install --with-deps` | Install browsers with dependencies |

---

# Viewport Commands

| Command                                              | Description                      |
| ---------------------------------------------------- | -------------------------------- |
| `viewport: null`                                     | Launch browser maximized         |
| `--viewport-size=1280,720`                           | Set custom viewport              |
| `--device="iPhone 13"`                               | Mobile viewport                  |
| `page.setViewportSize({ width: 1280, height: 720 })` | Change viewport programmatically |

---

# Most Common Real Project Configuration

```ts id="whvtms"
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'retain-on-failure',
  headless: false,
  viewport: null,
  launchOptions: {
    args: ['--start-maximized']
  }
}
```

---

# Interview Questions

| Question                                | Answer                                                   |
| --------------------------------------- | -------------------------------------------------------- |
| What is Codegen?                        | Tool that records actions and generates automation code. |
| What is Trace Viewer?                   | Tool to replay and debug test execution step by step.    |
| How to open Trace Viewer?               | `npx playwright show-trace trace.zip`                    |
| Which screenshot option is mostly used? | `only-on-failure`                                        |
| Which video option is mostly used?      | `retain-on-failure`                                      |
| Which trace option is mostly used?      | `retain-on-failure`                                      |
| How to emulate mobile in Codegen?       | `npx playwright codegen --device="iPhone 13"`            |
| How to save login state?                | `npx playwright codegen --save-storage=state.json`       |


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Test Execution Commands

| Command                                  | Description                                 | Example                                  |
| ---------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| `npx playwright test`                    | Run all tests in headless mode (default).   | `npx playwright test`                    |
| `npx playwright test login.spec.ts`      | Run a specific test file.                   | `npx playwright test login.spec.ts`      |
| `npx playwright test -g "Login Test"`    | Run a specific test by title.               | `npx playwright test -g "Login Test"`    |
| `npx playwright test --headed`           | Run tests in headed mode (browser visible). | `npx playwright test --headed`           |
| `npx playwright test --debug`            | Run tests in debug mode with Inspector.     | `npx playwright test --debug`            |
| `npx playwright test --ui`               | Open Playwright UI Mode.                    | `npx playwright test --ui`               |
| `npx playwright test --project=chromium` | Run tests only on Chromium.                 | `npx playwright test --project=chromium` |
| `npx playwright test --project=firefox`  | Run tests only on Firefox.                  | `npx playwright test --project=firefox`  |
| `npx playwright test --project=webkit`   | Run tests only on WebKit.                   | `npx playwright test --project=webkit`   |
| `npx playwright test --workers=1`        | Run tests sequentially (one worker).        | `npx playwright test --workers=1`        |
| `npx playwright test --retries=2`        | Retry failed tests twice.                   | `npx playwright test --retries=2`        |
| `npx playwright test --repeat-each=5`    | Execute each test 5 times.                  | `npx playwright test --repeat-each=5`    |
| `npx playwright test --grep @smoke`      | Run only smoke tests.                       | `npx playwright test --grep @smoke`      |
| `npx playwright test --grep @regression` | Run only regression tests.                  | `npx playwright test --grep @regression` |
| `npx playwright test --grep-invert @wip` | Exclude tests with @wip tag.                | `npx playwright test --grep-invert @wip` |
| `npx playwright test --trace on`         | Generate trace for every test.              | `npx playwright test --trace on`         |
| `npx playwright test --reporter=html`    | Generate HTML report.                       | `npx playwright test --reporter=html`    |
| `npx playwright test --list`             | List all tests without execution.           | `npx playwright test --list`             |
| `npx playwright test --shard=1/2`        | Run first half of tests.                    | `npx playwright test --shard=1/2`        |
| `npx playwright test --max-failures=5`   | Stop execution after 5 failures.            | `npx playwright test --max-failures=5`   |
| `npx playwright test --timeout=60000`    | Set test timeout to 60 seconds.             | `npx playwright test --timeout=60000`    |
| `npx playwright test --update-snapshots` | Update visual snapshots.                    | `npx playwright test --update-snapshots` |

---

# Most Common Commands Used in Projects

```bash id="zj5rta"
npx playwright test
npx playwright test --headed
npx playwright test --debug
npx playwright test --ui
npx playwright test --grep @smoke
npx playwright test --project=chromium
npx playwright test --workers=1
npx playwright test --retries=2
npx playwright show-report
npx playwright show-trace trace.zip
```

---

# Interview Questions

| Question                                    | Answer                                 |
| ------------------------------------------- | -------------------------------------- |
| How do you run all Playwright tests?        | `npx playwright test`                  |
| How do you run tests in headed mode?        | `npx playwright test --headed`         |
| How do you debug a Playwright test?         | `npx playwright test --debug`          |
| How do you open UI Mode?                    | `npx playwright test --ui`             |
| How do you run only smoke tests?            | `npx playwright test --grep @smoke`    |
| How do you retry failed tests twice?        | `npx playwright test --retries=2`      | 
| How do you run tests sequentially?          | `npx playwright test --workers=1`      |
| How do you run a specific file?             | `npx playwright test login.spec.ts`    |
| How do you stop execution after 5 failures? | `npx playwright test --max-failures=5` |
| How do you generate HTML reports?           | `npx playwright test --reporter=html`  |
