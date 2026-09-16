========================================================================================================
PLAYWRIGHT ACTION METHODS
========================================================================================================

1. Click Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#login").click();
await page.getByRole("button", { name: "Login" }).click();
await page.locator("#btn").dblclick();
await page.locator("#btn").click({ button: "right" });
await page.locator("#btn").click({ modifiers: ["Shift"] });

========================================================================================================
2. Text Input Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#username").fill("Sandip");
await page.locator("#username").clear();
await page.locator("#username").press("Enter");
await page.locator("#username").pressSequentially("Hello");
await pagelocator("#username").inputValue


========================================================================================================
3. Keyboard Actions
--------------------------------------------------------------------------------------------------------
await page.keyboard.type("Hello");
await page.keyboard.press("Enter");
await page.keyboard.down("Control");
await page.keyboard.up("Control");
await page.keyboard.insertText("Playwright");

========================================================================================================
4. Checkbox & Radio Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#checkbox").check();
await page.locator("#checkbox").uncheck();
await page.locator("#checkbox").setChecked(true);
await page.locator("#radio").check();

========================================================================================================
5. Dropdown Actions

========================================================================================================
6. Mouse Actions--------------------------------------------------------------------------------------------------------
await page.locator("#country").selectOption("India");
await page.locator("#country").selectOption({ label: "India" });
await page.locator("#country").selectOption({ value: "in" });
await page.locator("#country").selectOption({ index: 1 });

--------------------------------------------------------------------------------------------------------
await page.mouse.move(100, 100);
await page.mouse.down();
await page.mouse.up();
await page.mouse.click(100, 200);
await page.mouse.dblclick(100, 200);
await page.mouse.wheel(0, 500);

========================================================================================================
7. Hover Action
--------------------------------------------------------------------------------------------------------
await page.locator("#menu").hover();

========================================================================================================
8. Drag and Drop
--------------------------------------------------------------------------------------------------------
await page.locator("#source").dragTo(page.locator("#target"));

========================================================================================================
9. File Upload
--------------------------------------------------------------------------------------------------------
await page.locator("#file").setInputFiles("test.pdf");
await page.locator("#file").setInputFiles([
  "test1.pdf",
  "test2.pdf"
]);
await page.locator("#file").setInputFiles([]);

========================================================================================================
10. Focus Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#username").focus();
await page.locator("#username").blur();

========================================================================================================
11. Scroll Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#element").scrollIntoViewIfNeeded();
await page.mouse.wheel(0, 1000);

========================================================================================================
12. Screenshot Actions
--------------------------------------------------------------------------------------------------------
await page.screenshot({ path: "page.png" });
await page.locator("#logo").screenshot({ path: "logo.png" });

========================================================================================================
13. Page Navigation
--------------------------------------------------------------------------------------------------------
await page.goto("https://google.com");
await page.goBack();
await page.goForward();
await page.reload();

========================================================================================================
14. Frame Actions
--------------------------------------------------------------------------------------------------------
const frame = page.frame({ name: "frame1" });
await frame?.locator("#btn").click();

await page.frameLocator("#frame")
          .locator("#btn")
          .click();

========================================================================================================
15. Window/Tab Actions
--------------------------------------------------------------------------------------------------------
const page1Promise = context.waitForEvent("page");
await page.locator("#newTab").click();
const newPage = await page1Promise;

========================================================================================================
16. Dialog Actions
--------------------------------------------------------------------------------------------------------
page.on("dialog", async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

page.on("dialog", async dialog => {
  await dialog.dismiss();
});

========================================================================================================
17. Locator Actions
--------------------------------------------------------------------------------------------------------
await page.locator("#btn").click();
await page.locator("#btn").fill("Hello");
await page.locator("#btn").hover();
await page.locator("#btn").focus();
await page.locator("#btn").check();

========================================================================================================
18. Wait Actions
--------------------------------------------------------------------------------------------------------
await page.waitForTimeout(2000);
await page.waitForURL("**/dashboard");
await page.waitForLoadState("networkidle");
await page.waitForSelector("#login");

========================================================================================================
19. Touchscreen Actions (Mobile)
--------------------------------------------------------------------------------------------------------
await page.touchscreen.tap(100, 200);

========================================================================================================
20. Evaluate JavaScript
--------------------------------------------------------------------------------------------------------
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

========================================================================================================
21. Browser Actions
--------------------------------------------------------------------------------------------------------
await browser.newPage();
await browser.newContext();
await browser.close();

========================================================================================================
22. Context Actions
--------------------------------------------------------------------------------------------------------
await context.newPage();
await context.clearCookies();
await context.close();

========================================================================================================
23. Element Actions
--------------------------------------------------------------------------------------------------------
await locator.click();
await locator.fill("Admin");
await locator.press("Enter");
await locator.hover();
await locator.dragTo(target);
await locator.selectOption("India");
await locator.check();
await locator.uncheck();
await locator.scrollIntoViewIfNeeded();

========================================================================================================

✅ Locators (getByRole, locator, getByText, CSS, XPath)
✅ Actions (click, fill, hover, dragTo, selectOption)
✅ Assertions (toHaveText, toContainText, toBeVisible)
✅ Auto-waiting and explicit waits
✅ Frames, Windows, and Dialogs
✅ Fixtures and Hooks (beforeEach, afterEach)
✅ Page Object Model (POM)
✅ API Testing in Playwright
✅ Playwright Configuration (playwright.config.ts)
✅ CI/CD with Jenkins and GitHub Actions


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


========================================================================================================
PLAYWRIGHT ELEMENT-WISE CHEAT SHEET (ACTION + GET + ASSERTIONS)
========================================================================================================

1. BUTTON (<button>, <input type="submit">)
--------------------------------------------------------------------------------------------------------
Actions:
click()
dblclick()
hover()
focus()

Get Methods:
isVisible()
isEnabled()
innerText()
textContent()

Assertions:
toBeVisible()
toBeEnabled()
toBeDisabled()
toHaveText()
toContainText()

Example:
await button.click();
await expect(button).toBeEnabled();

========================================================================================================
2. TEXTBOX (<input>, <textarea>)
--------------------------------------------------------------------------------------------------------
Actions:
fill()
clear()
press()
focus()
selectText()

Get Methods:
inputValue()
getAttribute()
isEditable()

Assertions:
toHaveValue()
toBeEditable()
toBeVisible()
toHaveAttribute()

Example:
await username.fill("Sandip");
await expect(username).toHaveValue("Sandip");

========================================================================================================
3. CHECKBOX
--------------------------------------------------------------------------------------------------------
Actions:
check()
uncheck()
setChecked()
click()

Get Methods:
isChecked()
isEnabled()

Assertions:
toBeChecked()
toBeEnabled()
toBeVisible()

Example:
await checkbox.check();
await expect(checkbox).toBeChecked();

========================================================================================================
4. RADIO BUTTON
--------------------------------------------------------------------------------------------------------
Actions:
check()
click()

Get Methods:
isChecked()

Assertions:
toBeChecked()
toBeEnabled()

Example:
await radio.check();
await expect(radio).toBeChecked();

========================================================================================================
5. DROPDOWN (<select>)
--------------------------------------------------------------------------------------------------------
Actions:
selectOption()

Get Methods:
inputValue()

Assertions:
toHaveValue()
toHaveValues()
toContainText()

Example:
await country.selectOption("India");
await expect(country).toHaveValue("India");

========================================================================================================
6. LINK (<a>)
--------------------------------------------------------------------------------------------------------
Actions:
click()
hover()

Get Methods:
getAttribute("href")
innerText()

Assertions:
toHaveAttribute()
toHaveText()
toContainText()

Example:
await expect(link).toHaveAttribute(
  "href",
  "https://google.com"
);

========================================================================================================
7. LABEL / TEXT / HEADING / SPAN / DIV
--------------------------------------------------------------------------------------------------------
Actions:
(No major actions)

Get Methods:
textContent()
innerText()
allInnerTexts()
allTextContents()

Assertions:
toHaveText()
toContainText()

Example:
await expect(title)
  .toHaveText("Welcome");

========================================================================================================
8. TABLE
--------------------------------------------------------------------------------------------------------
Actions:
(No direct actions)

Get Methods:
count()
allInnerTexts()
allTextContents()
innerText()

Assertions:
toHaveCount()
toHaveText()
toContainText()

Example:
await expect(rows)
  .toHaveCount(10);

========================================================================================================
9. FILE UPLOAD
--------------------------------------------------------------------------------------------------------
Actions:
setInputFiles()

Get Methods:
inputValue()

Assertions:
toHaveValue()

Example:
await upload.setInputFiles("test.pdf");
await expect(upload)
  .toHaveValue(/test.pdf/);

========================================================================================================
10. IMAGE
--------------------------------------------------------------------------------------------------------
Actions:
(No direct actions)

Get Methods:
getAttribute("src")
getAttribute("alt")

Assertions:
toHaveAttribute()
toBeVisible()

Example:
await expect(image)
  .toHaveAttribute("src", "/logo.png");

========================================================================================================
11. MULTIPLE ELEMENTS (LIST, ROWS, CARDS)
--------------------------------------------------------------------------------------------------------
Actions:
first()
last()
nth()

Get Methods:
count()
allTextContents()
allInnerTexts()

Assertions:
toHaveCount()
toContainText()

Example:
await expect(items)
  .toHaveCount(5);

========================================================================================================
12. HIDDEN ELEMENT
--------------------------------------------------------------------------------------------------------
Get Methods:
isHidden()

Assertions:
toBeHidden()
not.toBeVisible()

Example:
await expect(loader)
  .toBeHidden();

========================================================================================================
13. CSS / UI VALIDATION
--------------------------------------------------------------------------------------------------------
Get Methods:
evaluate()

Assertions:
toHaveCSS()
toHaveClass()

Example:
await expect(button)
  .toHaveClass("active");

========================================================================================================
14. ACCESSIBILITY
--------------------------------------------------------------------------------------------------------
Assertions:
toHaveAccessibleName()
toHaveAccessibleDescription()
toHaveAccessibleErrorMessage()

Example:
await expect(button)
  .toHaveAccessibleName("Login");

========================================================================================================
15. PAGE LEVEL
--------------------------------------------------------------------------------------------------------
Actions:
goto()
reload()
goBack()
goForward()

Assertions:
toHaveURL()
toHaveTitle()
toHaveScreenshot()

Example:
await expect(page)
  .toHaveURL(/dashboard/);

========================================================================================================
QUICK REVISION
========================================================================================================

Textbox   -> fill() + toHaveValue()
Button    -> click() + toBeEnabled()
Checkbox  -> check() + toBeChecked()
Radio     -> check() + toBeChecked()
Dropdown  -> selectOption() + toHaveValue()
Link      -> getAttribute() + toHaveAttribute()
Text      -> innerText() + toHaveText()
Table     -> count() + toHaveCount()
Upload    -> setInputFiles() + toHaveValue()
Image     -> getAttribute() + toHaveAttribute()
Page      -> goto() + toHaveURL()