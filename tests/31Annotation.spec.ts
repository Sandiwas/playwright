import {test,expect,Locator} from "@playwright/test"

/* ## Interview One-Line Meanings

- **`test.only()`** → Run only this test.
- **`test.skip()`** → Skip this test.
- **`test.fail()`** → This test is expected to fail.
- **`test.fixme()`** → This test is broken or not ready yet.
- **`test.slow()`** → This test is slow, so Playwright increases its timeout.

================================================ */


test('Test1',async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

test('Test2',async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


test.skip('Test3',async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


test('Test7',async({page,browserName})=>{
    test.skip(browserName==='chromium');
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})



test.fail('Test4',async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})

test.fixme('Test5',async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


test('Test6',async({page})=>{
    test.slow();
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})





/* ### Q1. What are Hooks in Playwright?

**Answer:**

Hooks are lifecycle methods that execute before or after test execution to perform
common setup and cleanup activities such as launching the application, login, logout, and cleanup.

================================================

### Q2. What are Annotations in Playwright?

**Answer:**

Annotations are used to control the behavior of test execution,
such as skipping a test, running only one test, marking a test as slow, or marking it as an expected failure.

================================================ */
/* 
# Playwright Annotations

| Annotation | Meaning | When to Use | Example |
|------------|---------|-------------|---------|
| `test.only()` | Executes only the selected test and ignores all other tests. | Debugging or running a single test. | `test.only("Login Test", async () => {});` |
| `test.skip()` | Skips the test completely during execution. | Test is not required or feature is unavailable. | `test.skip("Payment Test", async () => {});` |
| `test.fail()` | Marks the test as **expected to fail**. If it fails, Playwright considers it a pass. If it unexpectedly passes, the test fails. | Known bug is not fixed yet. | `test.fail("Known Bug", async () => {});` |
| `test.fixme()` | Marks the test as **broken or not yet implemented** and skips its execution. | Feature is under development or test is incomplete. | `test.fixme("Profile Test", async () => {});` |
| `test.slow()` | Marks the test as slow and automatically increases the timeout (approximately 3× the default timeout). | Test legitimately takes longer to complete. | `test.slow();` |

---

## Interview One-Line Meanings

- **`test.only()`** → Run only this test.
- **`test.skip()`** → Skip this test.
- **`test.fail()`** → This test is expected to fail.
- **`test.fixme()`** → This test is broken or not ready yet.
- **`test.slow()`** → This test is slow, so Playwright increases its timeout.

================================================ */