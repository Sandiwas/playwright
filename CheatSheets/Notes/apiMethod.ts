
=========================================================
Playwright APIs by Category
=========================================================

------------------------------------------------------------------------------------------------------------------------
| Category                    | APIs / Methods                                                                 |
------------------------------------------------------------------------------------------------------------------------
| Browser APIs                | browser.newContext(), browser.close()                                          |
------------------------------------------------------------------------------------------------------------------------
| BrowserContext APIs         | context.newPage(), context.pages(), context.cookies(),                         |
|                             | context.addCookies(), context.clearCookies(),                                  |
|                             | context.storageState(), context.close()                                        |
------------------------------------------------------------------------------------------------------------------------
| Page APIs                   | page.goto(), page.reload(), page.goBack(), page.goForward(),                   |
|                             | page.close(), page.title(), page.url(),                                        |
|                             | page.waitForURL(), page.waitForLoadState(),                                    |
|                             | page.waitForResponse(), page.screenshot(), page.pdf(),                         |
|                             | page.setViewportSize(), page.locator(),                                        |
|                             | page.frame(), page.frameLocator(), page.frames(), page.on()                    |
------------------------------------------------------------------------------------------------------------------------
| Locator APIs                | locator.click(), locator.fill(), locator.type(), locator.press(),              |
|                             | locator.check(), locator.uncheck(), locator.selectOption(),                    |
|                             | locator.hover(), locator.dragTo(), locator.focus(),                            |
|                             | locator.clear(), locator.inputValue(), locator.textContent(),                  |
|                             | locator.innerText(), locator.innerHTML(), locator.getAttribute(),              |
|                             | locator.isVisible(), locator.isHidden(), locator.isEnabled(),                  |
|                             | locator.isDisabled(), locator.isChecked(), locator.count(),                    |
|                             | locator.all(), locator.allInnerTexts(), locator.allTextContents(),             |
|                             | locator.first(), locator.last(), locator.nth(), locator.filter(),             |
|                             | locator.locator(), locator.scrollIntoViewIfNeeded()                            |
------------------------------------------------------------------------------------------------------------------------
| Frame APIs                  | page.frame(), page.frameLocator()                                              |
------------------------------------------------------------------------------------------------------------------------
| Frame Helper Methods        | page.frames(), frame.name(), frame.url(),                                      |
|                             | frame.parentFrame(), frame.childFrames(), frame.locator()                      |
------------------------------------------------------------------------------------------------------------------------
| Mouse APIs                  | page.mouse.move(), page.mouse.click(), page.mouse.dblclick(),                  |
|                             | page.mouse.down(), page.mouse.up(), page.mouse.wheel()                         |
------------------------------------------------------------------------------------------------------------------------
| Keyboard APIs               | page.keyboard.type(), page.keyboard.press(),                                   |
|                             | page.keyboard.down(), page.keyboard.up(),                                      |
|                             | page.keyboard.insertText()                                                     |
------------------------------------------------------------------------------------------------------------------------
| Dialog (Alert) APIs         | page.on("dialog"), dialog.accept(), dialog.dismiss(),                          |
|                             | dialog.message(), dialog.type(), dialog.defaultValue()                         |
------------------------------------------------------------------------------------------------------------------------
| File Upload APIs            | locator.setInputFiles()                                                        |
------------------------------------------------------------------------------------------------------------------------
| Download APIs               | page.waitForEvent("download"), download.path(),                                |
|                             | download.saveAs(), download.suggestedFilename(), download.delete()             |
------------------------------------------------------------------------------------------------------------------------
| Window/Tab APIs             | context.waitForEvent("page"), page.waitForEvent("popup"),                      |
|                             | context.pages()                                                                |
------------------------------------------------------------------------------------------------------------------------
| Assertion APIs              | expect().toBe(), expect().toEqual(), expect().toContain(),                     |
|                             | expect().toBeTruthy(), expect().toBeFalsy()                                    |
------------------------------------------------------------------------------------------------------------------------
| Locator Assertions          | toBeVisible(), toBeHidden(), toBeEnabled(), toBeDisabled(),                    |
|                             | toBeChecked(), toHaveText(), toContainText(),                                  |
|                             | toHaveValue(), toHaveAttribute(), toHaveCount()                                |
------------------------------------------------------------------------------------------------------------------------
| Page Assertions             | toHaveURL(), toHaveTitle()                                                     |
------------------------------------------------------------------------------------------------------------------------
| Wait APIs                   | locator.waitFor(), page.waitForURL(), page.waitForLoadState(),                 |
|                             | page.waitForResponse(), page.waitForRequest(),                                 |
|                             | page.waitForEvent(), page.waitForFunction(), page.waitForTimeout()             |
------------------------------------------------------------------------------------------------------------------------
| Request (API Testing) APIs  | request.get(), request.post(), request.put(),                                  |
|                             | request.patch(), request.delete(), request.fetch()                             |
------------------------------------------------------------------------------------------------------------------------
| Hooks                       | test.beforeAll(), test.afterAll(),                                             |
|                             | test.beforeEach(), test.afterEach()                                            |
------------------------------------------------------------------------------------------------------------------------
| Fixtures                    | test.use(), test.extend()                                                      |
------------------------------------------------------------------------------------------------------------------------
| Screenshot APIs             | page.screenshot(), locator.screenshot()                                        |
------------------------------------------------------------------------------------------------------------------------
| Video APIs                  | context.newPage(), context.close(), testInfo.attach()                          |
------------------------------------------------------------------------------------------------------------------------
| Reporting APIs              | test.step(), testInfo.attach()                                                 |
------------------------------------------------------------------------------------------------------------------------


⭐ Most Important APIs for Interviews

1. Locator APIs
2. Assertion APIs
3. Wait APIs
4. Frame APIs
5. Alert APIs
6. Window/Tab APIs
7. API Testing APIs
8. Hooks & Fixtures
9. POM Framework Concepts
10. Reporting APIs


For Playwright interview notes, you can group the APIs like this:

=========================================================
Playwright APIs by Category
=========================================================

1. Browser APIs
----------------
browser.newContext()
browser.close()

2. BrowserContext APIs
-----------------------
context.newPage()
context.pages()
context.cookies()
context.addCookies()
context.clearCookies()
context.storageState()
context.close()

3. Page APIs
------------
page.goto()
page.reload()
page.goBack()
page.goForward()
page.close()
page.title()
page.url()
page.waitForURL()
page.waitForLoadState()
page.waitForResponse()
page.screenshot()
page.pdf()
page.setViewportSize()
page.locator()
page.frame()
page.frameLocator()
page.frames()
page.on()

4. Locator APIs
---------------
locator.click()
locator.fill()
locator.type()
locator.press()
locator.check()
locator.uncheck()
locator.selectOption()
locator.hover()
locator.dragTo()
locator.focus()
locator.clear()
locator.inputValue()
locator.textContent()
locator.innerText()
locator.innerHTML()
locator.getAttribute()
locator.isVisible()
locator.isHidden()
locator.isEnabled()
locator.isDisabled()
locator.isChecked()
locator.count()
locator.all()
locator.allInnerTexts()
locator.allTextContents()
locator.first()
locator.last()
locator.nth()
locator.filter()
locator.locator()
locator.scrollIntoViewIfNeeded()

5. Frame APIs
-------------
page.frame()
page.frameLocator()

6. Frame Helper Methods
------------------------
page.frames()
frame.name()
frame.url()
frame.parentFrame()
frame.childFrames()
frame.locator()

7. Mouse APIs
-------------
page.mouse.move()
page.mouse.click()
page.mouse.dblclick()
page.mouse.down()
page.mouse.up()
page.mouse.wheel()

8. Keyboard APIs
----------------
page.keyboard.type()
page.keyboard.press()
page.keyboard.down()
page.keyboard.up()
page.keyboard.insertText()

9. Dialog (Alert) APIs
----------------------
page.on("dialog")
dialog.accept()
dialog.dismiss()
dialog.message()
dialog.type()
dialog.defaultValue()

10. File Upload APIs
--------------------
locator.setInputFiles()

11. Download APIs
-----------------
page.waitForEvent("download")
download.path()
download.saveAs()
download.suggestedFilename()
download.delete()

12. Window/Tab APIs
-------------------
context.waitForEvent("page")
page.waitForEvent("popup")
context.pages()

13. Assertion APIs
------------------
expect().toBe()
expect().toEqual()
expect().toContain()
expect().toBeTruthy()
expect().toBeFalsy()

Locator Assertions:
expect(locator).toBeVisible()
expect(locator).toBeHidden()
expect(locator).toBeEnabled()
expect(locator).toBeDisabled()
expect(locator).toBeChecked()
expect(locator).toHaveText()
expect(locator).toContainText()
expect(locator).toHaveValue()
expect(locator).toHaveAttribute()
expect(locator).toHaveCount()

Page Assertions:
expect(page).toHaveURL()
expect(page).toHaveTitle()

14. Wait APIs
-------------
locator.waitFor()
page.waitForURL()
page.waitForLoadState()
page.waitForResponse()
page.waitForRequest()
page.waitForEvent()
page.waitForFunction()
page.waitForTimeout()  // Avoid in real projects

15. Request (API Testing) APIs
------------------------------
request.get()
request.post()
request.put()
request.patch()
request.delete()
request.fetch()

16. Hooks
---------
test.beforeAll()
test.afterAll()
test.beforeEach()
test.afterEach()

17. Fixtures
------------
test.use()
test.extend()

18. Screenshot APIs
-------------------
page.screenshot()
locator.screenshot()

19. Video APIs
--------------
context.newPage()
context.close()
testInfo.attach()

20. Reporting APIs
------------------
test.step()
testInfo.attach()




%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Page class
      ↓
goto(), reload(), url()
      ↓
These are Page APIs.

Locator class
      ↓
click(), fill(), check()
      ↓
These are Locator APIs.

Interview Answer:

API methods are ready-made public methods provided by a library or framework for developers to use. For example, page.goto() and locator.fill() are 
Playwright API methods because Playwright has already implemented them and exposed them for us to call in our tests.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

=========================================================
Real-Time Playwright API Interview Questions
============================================

Q1. What is an API in Playwright?
Answer:
API stands for Application Programming Interface. It is a set of ready-made methods provided by Playwright to interact with browsers and web elements.

---

Q2. Why are page.goto() and locator.fill() called API methods?
Answer:
Because they are public methods already implemented and exposed by the Playwright framework for developers to use.

---

Q3. What is the difference between a Page API and a Locator API?
Answer:
Page APIs perform actions on the entire page (goto, reload, title, url), whereas Locator APIs perform actions on specific web elements (click, fill, check).

---

Q4. Is page an object or a class?
Answer:
Page is an object (instance) of the Page class.

---

Q5. Is locator an object or a class?
Answer:
locator is an object (instance) of the Locator class.

---

Q6. Why do we write page.goto() and not goto() directly?
Answer:
Because goto() belongs to the Page class and can only be accessed through a Page object.

---

Q7. How does locator.fill("Sandip") work internally?
Answer:
The value "Sandip" is passed as a parameter to the fill() method. Playwright sends the command to the browser, finds the element in the DOM, and sets its value.

---

Q8. Are Playwright methods abstract methods?
Answer:
No. Methods like goto(), click(), and fill() already have implementations inside Playwright, so they are concrete methods.

---

Q9. Why do we call these methods APIs?
Answer:
Because Playwright exposes these methods as an interface for developers to interact with the framework.

---

Q10. What is the difference between an API and a method?
Answer:
Every API is a method exposed by a library/framework, but not every method is necessarily an API.

---

Q11. How are Playwright APIs grouped?
Answer:
Playwright APIs are grouped based on the object they belong to:

Browser APIs   → browser.close()
Context APIs   → context.newPage()
Page APIs      → page.goto()
Locator APIs   → locator.fill()
Frame APIs     → page.frame()
Mouse APIs     → page.mouse.click()
Keyboard APIs  → page.keyboard.press()

---

Q12. What is the difference between page and locator?
Answer:
page represents the entire browser page, while locator represents a specific web element on that page.

---

Q13. How do you know whether to use a Page API or Locator API?
Answer:
If the action is on the whole page, use a Page API. If the action is on a specific element, use a Locator API.

---

Q14. Give some examples of Page APIs.
Answer:
page.goto()
page.reload()
page.title()
page.url()
page.screenshot()
page.frameLocator()

---

Q15. Give some examples of Locator APIs.
Answer:
locator.click()
locator.fill()
locator.check()
locator.hover()
locator.textContent()
locator.inputValue()

---

Q16. What are the most commonly used Playwright APIs in real projects?
Answer:
Page APIs, Locator APIs, Assertions APIs, Wait APIs, Frame APIs, and API Testing APIs.

---

Q17. Can we create our own APIs?
Answer:
Yes. Any public method that we expose in our framework can be considered our custom API.

Example:

class LoginPage {
login(username: string, password: string) {
// implementation
}
}

# login() becomes our framework API.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%