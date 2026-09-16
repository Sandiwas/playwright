========================================================================================================
PLAYWRIGHT ACTIONS + EXPECTED CONDITIONS (INTERVIEW CHEAT SHEET)
========================================================================================================

1. Click Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#login").click();
await page.locator("#btn").dblclick();
await page.locator("#btn").click({ button: "right" });

Expected Conditions:its work for all element 
await expect(page.locator("#login")).toBeVisible();
await expect(page.locator("#login")).toBeEnabled();


========================================================================================================
2. Text Input Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#username").fill("Sandip");
await page.locator("#username").clear();
await page.locator("#username").press("Enter");

Expected Conditions:
await expect(page.locator("#username")).toHaveValue("Sandip");
await expect(page.locator("#username")).toBeEditable();
await expect(page.locator('#login')).

========================================================================================================
3. Checkbox & Radio Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#checkbox").check();
await page.locator("#checkbox").uncheck();
await page.locator("#radio").check();

Expected Conditions:
await expect(page.locator("#checkbox")).toBeChecked();
await expect(page.locator("#checkbox")).not.toBeChecked();

========================================================================================================
4. Dropdown Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#country").selectOption("India");
const countrydropdown: Locator = page.locator("#country");
Expected Conditions:
await expect(page.locator("#country")).toHaveValue("India");
await expect(page.locator("#country>option")).toHaveCount(10);
await expect(page.locator("#country")).toContainText("India");

await expect(countrydropdown).toHaveValue("India");
await expect(page.locator("#country>option")).toHaveCount(10);
await expect(countrydropdown).toContainText("India");

========================================================================================================
5. Hover Action
--------------------------------------------------------------------------------------------------------
await page.locator("#menu").hover();

Expected Conditions:
await expect(page.locator("#submenu")).toBeVisible();

========================================================================================================
6. Drag and Drop
--------------------------------------------------------------------------------------------------------
await page.locator("#source").dragTo(page.locator("#target"));

Expected Conditions:
await expect(page.locator("#target")).toContainText("Dropped");

========================================================================================================
7. File Upload
--------------------------------------------------------------------------------------------------------
await page.locator("#file").setInputFiles("test.pdf");

Expected Conditions:
await expect(page.locator("#file")).toHaveValue(/test.pdf/);

========================================================================================================
8. Focus Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#username").focus();

Expected Conditions:
await expect(page.locator("#username")).toBeFocused();

========================================================================================================
9. Scroll Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#element").scrollIntoViewIfNeeded();

Expected Conditions:
await expect(page.locator("#element")).toBeInViewport();

========================================================================================================
10. Screenshot Actions
--------------------------------------------------------------------------------------------------------
await page.screenshot({ path: "page.png" });

Expected Conditions:
(No direct assertion, generally verify file existence.)

========================================================================================================
11. Page Navigation
--------------------------------------------------------------------------------------------------------
await page.goto("https://google.com");
await page.goBack();
await page.goForward();
await page.reload();

Expected Conditions:
await expect(page).toHaveURL("https://google.com/");
await expect(page).toHaveTitle(/Google/);

========================================================================================================
12. Frame Actions
--------------------------------------------------------------------------------------------------------
await page.frameLocator("#frame").locator("#btn").click();

Expected Conditions:
await expect(
  page.frameLocator("#frame").locator("#btn")
).toBeVisible();

========================================================================================================
13. Window/Tab Actions
--------------------------------------------------------------------------------------------------------
const page1Promise = context.waitForEvent("page");
await page.locator("#newTab").click();
const newPage = await page1Promise;

Expected Conditions:
await expect(newPage).toHaveURL(/new-page/);

========================================================================================================
14. Dialog Actions
--------------------------------------------------------------------------------------------------------
page.on("dialog", async dialog => {
  await dialog.accept();
});

Expected Conditions:
Verify action after dialog acceptance.

========================================================================================================
15. Locator Actions
--------------------------------------------------------------------------------------------------------
await locator.click();
await locator.fill("Admin");
await locator.hover();

Expected Conditions:
await expect(locator).toBeVisible();
await expect(locator).toBeEnabled();
await expect(locator).toBeEditable();

========================================================================================================
16. Wait Actions
--------------------------------------------------------------------------------------------------------
await page.waitForURL("**/dashboard");
await page.waitForLoadState("networkidle");
await page.waitForSelector("#login");

Expected Conditions:
await expect(page).toHaveURL(/dashboard/);
await expect(page.locator("#login")).toBeVisible();

========================================================================================================
17. Keyboard Actions
--------------------------------------------------------------------------------------------------------
await page.keyboard.type("Hello");
await page.keyboard.press("Enter");

Expected Conditions:
await expect(page.locator("#textbox")).toHaveValue("Hello");

========================================================================================================
18. Mouse Actions
--------------------------------------------------------------------------------------------------------
await page.mouse.click(100, 200);
await page.mouse.dblclick(100, 200);

Expected Conditions:
await expect(page.locator("#result")).toBeVisible();

========================================================================================================
19. Assertions (Playwright's Expected Conditions)
--------------------------------------------------------------------------------------------------------
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
await expect(locator).toBeChecked();
await expect(locator).toBeFocused();
await expect(locator).toBeInViewport();
await expect(locator).toContainText("Admin");
await expect(locator).toHaveText("Admin");
await expect(locator).toHaveValue("Admin");
await expect(locator).toHaveAttribute("type", "text");
await expect(locator).toHaveClass("active");
await expect(locator).toHaveCount(5);
await expect(page).toHaveURL(/dashboard/);
await expect(page).toHaveTitle(/Dashboard/);

========================================================================================================
PLAYWRIGHT EXPECTED CONDITIONS ≈ SELENIUM ExpectedConditions
========================================================================================================

Selenium                              Playwright
--------------------------------------------------------------------------------
visibilityOf()                     -> toBeVisible()
invisibilityOf()                   -> toBeHidden()
elementToBeClickable()             -> toBeVisible() + toBeEnabled()
textToBePresentInElement()         -> toContainText()
textToBe()                         -> toHaveText()
titleContains()                    -> toHaveTitle()
urlContains()                      -> toHaveURL()
elementToBeSelected()              -> toBeChecked()
attributeContains()                -> toHaveAttribute()
presenceOfElementLocated()         -> locator() + expect().toBeVisible()

========================================================================================================


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
========================================================================================================
ALL PLAYWRIGHT EXPECTED CONDITIONS / ASSERTIONS (APPLICABLE ONES)
========================================================================================================

1. Visibility Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();

========================================================================================================
2. State Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
await expect(locator).toBeFocused();
await expect(locator).toBeChecked();
await expect(locator).toBeInViewport();

========================================================================================================
3. Text Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveText("Admin");
await expect(locator).toContainText("Admin");

await expect(locator).toHaveText([
  "Admin",
  "Manager",
  "User"
]);

await expect(locator).toContainText([
  "Admin",
  "Manager",
  "User"
]);

========================================================================================================
4. Input Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveValue("Admin");
await expect(locator).toHaveValues([
  "India",
  "USA"
]);

========================================================================================================
5. Attribute Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveAttribute("type", "text");
await expect(locator).toHaveAttribute("href", "/home");

========================================================================================================
6. Class Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveClass("active");
await expect(locator).toHaveClass([
  "active",
  "selected"
]);

========================================================================================================
7. Count Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveCount(5);

========================================================================================================
8. CSS Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveCSS(
  "background-color",
  "rgb(255, 0, 0)"
);

await expect(locator).toHaveCSS(
  "font-size",
  "16px"
);

========================================================================================================
9. JavaScript Property Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveJSProperty(
  "checked",
  true
);

await expect(locator).toHaveJSProperty(
  "value",
  "Admin"
);

========================================================================================================
10. ID Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveId("username");

========================================================================================================
11. Accessibility Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toHaveAccessibleName("Login");
await expect(locator).toHaveAccessibleDescription(
  "Login Button"
);
await expect(locator).toHaveAccessibleErrorMessage(
  "Username is required"
);

========================================================================================================
12. Page Assertions
--------------------------------------------------------------------------------------------------------
await expect(page).toHaveTitle("Dashboard");
await expect(page).toHaveTitle(/Dashboard/);

await expect(page).toHaveURL(
  "https://example.com/dashboard"
);

await expect(page).toHaveURL(/dashboard/);

========================================================================================================
13. Screenshot Assertions (Visual Testing)
--------------------------------------------------------------------------------------------------------
await expect(page).toHaveScreenshot();
await expect(locator).toHaveScreenshot();

========================================================================================================
14. ARIA Snapshot Assertions
--------------------------------------------------------------------------------------------------------
await expect(locator).toMatchAriaSnapshot(`
  - button "Submit"
`);

========================================================================================================
NEGATIVE ASSERTIONS
========================================================================================================

await expect(locator).not.toBeVisible();
await expect(locator).not.toBeChecked();
await expect(locator).not.toBeEnabled();
await expect(locator).not.toHaveText("Admin");
await expect(locator).not.toHaveValue("Admin");
await expect(page).not.toHaveURL(/login/);

========================================================================================================
MOST ASKED IN INTERVIEWS
========================================================================================================

toBeVisible()
toBeHidden()
toBeEnabled()
toBeDisabled()
toBeChecked()
toBeEditable()
toHaveText()
toContainText()
toHaveValue()
toHaveAttribute()
toHaveClass()
toHaveCount()
toHaveTitle()
toHaveURL()
toHaveCSS()
toHaveId()
toBeFocused()
toBeInViewport()




%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Understanding toBe() in Playwright
toBe() is not a Locator assertion. It is a generic assertion used to compare two values and check whether they are exactly the same.

| Scenario             | Example                                    | Meaning                                                           |
| -------------------- | ------------------------------------------ | ----------------------------------------------------------------- |
| Number Comparison    | `expect(5).toBe(5)`                        | Checks if both numbers are exactly equal.                         |
| String Comparison    | `expect(title).toBe("Dashboard")`          | Checks if the actual string matches the expected string.          |
| Boolean Comparison   | `expect(visible).toBe(true)`               | Checks if the value is `true` or `false`.                         |
| ❌ Locator Comparison | `expect(input).toBe(true)`                 | Invalid because `input` is a Locator object, not a boolean value. |
| ✅ Locator Assertion  | `await expect(input).toBeVisible()`        | Checks whether the input element is visible.                      |
| ✅ Locator Assertion  | `await expect(input).toBeEnabled()`        | Checks whether the input element is enabled.                      |
| ✅ Locator Assertion  | `await expect(input).toHaveValue("Admin")` | Checks the value inside the input box.                            |

**Easy Rule:**

```typescript
expect(variable).toBe(value);      // Values (number, string, boolean)
expect(locator).toBeVisible();     // Locators
expect(locator).toHaveValue();     // Locators