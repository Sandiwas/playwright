=================================================================================================================================================================================

# Playwright Retry Commands

| Command                                              | Description                        | Example                                              |
| ---------------------------------------------------- | ---------------------------------- | ---------------------------------------------------- |
| `npx playwright test --retries=1`                    | Retry failed tests once.           | `npx playwright test --retries=1`                    |
| `npx playwright test --retries=2`                    | Retry failed tests twice.          | `npx playwright test --retries=2`                    |
| `npx playwright test login.spec.ts --retries=2`      | Retry a specific test file twice.  | `npx playwright test login.spec.ts --retries=2`      |
| `npx playwright test --headed --retries=2`           | Run in headed mode with 2 retries. | `npx playwright test --headed --retries=2`           |
| `npx playwright test --project=chromium --retries=2` | Retry tests only in Chromium.      | `npx playwright test --project=chromium --retries=2` |

---

# Retry Flow

```text
First Attempt
      │
      ▼
Test Passed
      │
      └──────────► Finished

OR

First Attempt
      │
      ▼
Test Failed
      │
      ▼
Retry #1
      │
      ▼
Passed → Finished

OR

Failed
      │
      ▼
Retry #2
      │
      ▼
Passed / Failed
```

---

# Configure Retries in `playwright.config.ts`

```ts
export default defineConfig({
  retries: 2,
});
```

or for CI only:

```ts
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
});
```

---

# Interview Question

**Q: How do you trigger retries in Playwright?**

**Answer:**

```text
Retries can be configured either in playwright.config.ts using the retries property or from the command line using the --retries option.

Example:
npx playwright test --retries=2
```
