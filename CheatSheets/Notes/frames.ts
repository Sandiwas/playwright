
=========================================================
Playwright Frame Methods (Easy to Understand)
=========================================================

----------------------------------------------------------------------------------------------------------------------------------
| Method                    | Return Type      | What it Returns (Easy Meaning) | When to Use                  | Example                       |
----------------------------------------------------------------------------------------------------------------------------------
| page.frame()              | Frame | null      | One frame or null             | Find frame by name or URL     | page.frame({name:"frame1"})   |
| page.frameLocator()       | FrameLocator     | A frame locator               | Work inside an iframe        | page.frameLocator("#frame")   |
| page.frames()             | Frame[]          | List of all frames            | Count or print all frames    | page.frames()                 |
| frameLocator().locator()  | Locator          | Element inside the frame      | Find elements in iframe      | frame.locator("#name")        |
| frame.name()              | string           | Frame name                    | Get frame name               | frame.name()                  |
| frame.url()               | string           | Frame URL                     | Get frame URL                | frame.url()                   |
| frame.parentFrame()       | Frame | null      | Parent frame                  | Go to parent frame           | frame.parentFrame()           |
| frame.childFrames()       | Frame[]          | List of child frames          | Get nested frames           | frame.childFrames()           |
----------------------------------------------------------------------------------------------------------------------------------
Frame           = One iframe object
Frame[]         = Multiple frames (array of frames)
FrameLocator    = Special locator to work inside an iframe
Locator         = Element locator
string          = Text value
null            = Nothing found

=========================================================

Q: What does page.frame() return?

A: It returns a Frame object if the frame is found; otherwise, it returns null.

Q: What does page.frames() return?

A: It returns an array of Frame objects (Frame[]).

Q: What does page.frameLocator() return?

A: It returns a FrameLocator, which is used to locate elements inside an iframe.


=======================================================================================================================================================
| Method                   | Sample HTML                          | Code Example                                     | Output/Result                  |
=======================================================================================================================================================
| page.frame()             | <iframe name="frame1">              | const frame = page.frame({name:"frame1"});        |  Returns Frame object           |
|                           |                                     | await frame?.locator("#user").fill("Sandip");    | Fills textbox inside frame     |
-------------------------------------------------------------------------------------------------------------------------
| page.frameLocator()      | <iframe id="frame1">                | const frame = page.frameLocator("#frame1");       | Returns FrameLocator           |
|                           |                                     | await frame.locator("#user").fill("Sandip");     | Fills textbox inside frame     |
-------------------------------------------------------------------------------------------------------------------------
| page.frames()            | 3 iframes on page                   | const frames = page.frames();                     | Returns Frame[]                |
|                           |                                     | console.log(frames.length);                      | 3                              |
-------------------------------------------------------------------------------------------------------------------------
| frameLocator().locator() | <iframe id="frame1">                | const textbox =                                   | Returns Locator               |
|                           |                                     | page.frameLocator("#frame1")                     | Locator of #user element       |
|                           |                                     |     .locator("#user");                           |                                |
-------------------------------------------------------------------------------------------------------------------------
| frame.name()             | <iframe name="frame1">              | console.log(frame.name());                       | "frame1"                       |
-------------------------------------------------------------------------------------------------------------------------
| frame.url()              | Frame URL =                         | console.log(frame.url());                        |  https://abc.com/frame1         |
|                           | https://abc.com/frame1              |                                                   |                                |
-------------------------------------------------------------------------------------------------------------------------
| frame.parentFrame()      | ParentFrame                         | const parent = child.parentFrame();               | Returns ParentFrame            |
|                           |   └── ChildFrame                    | console.log(parent?.name());                     | "ParentFrame"                  |
-------------------------------------------------------------------------------------------------------------------------
| frame.childFrames()      | ParentFrame                         | const children = parent.childFrames();             | Returns Frame[]                |
|                           | ├── Child1                          | console.log(children.length);                     | 2                              |
|                           | └── Child2                          |                                                   |                                |
=========================================================================================================================================================
Quick Revision


page.frame()           → Get ONE frame.
page.frames()          → Get ALL frames.
page.frameLocator()    → Work inside iframe (Most Used).
frame.name()           → Get frame name.
frame.url()            → Get frame URL.
frame.parentFrame()    → Get parent frame.
frame.childFrames()    → Get child frames.

For interviews, 95% of the time you'll only use:

page.frameLocator()
frameLocator().locator()
page.frames()



================================================================
1. page.frameLocator()
=========================================================

Description:
Recommended way to work with iframes in Playwright.

Example:

const frame = page.frameLocator("#frame1");

await frame.locator("#name").fill("Sandip");


=========================================================
2. page.frame()
=========================================================

Description:
Returns a Frame object by name or URL.

Example:

const frame = page.frame({ name: "frame-one796456169" });

await frame?.locator("#RESULT_TextField-1").fill("Sandip");


=========================================================
3. page.frames()
=========================================================

Description:
Returns all frames available on the page.

Example:

const frames = page.frames();

console.log(frames.length);


=========================================================
4. frame.name()
=========================================================

Description:
Returns the frame name.

Example:

for (const frame of page.frames()) {
  console.log(frame.name());
}


=========================================================
5. frame.url()
=========================================================

Description:
Returns the frame URL.

Example:

for (const frame of page.frames()) {
  console.log(frame.url());
}


=========================================================
6. frame.parentFrame()
=========================================================

Description:
Returns the parent frame.

Example:

const parent = frame.parentFrame();


=========================================================
7. frame.childFrames()
=========================================================

Description:
Returns all child frames.

Example:

const children = frame.childFrames();

console.log(children.length);


=========================================================
Real-Time Example 1
=========================================================

HTML:

<iframe id="frame1"></iframe>

Playwright:

const frame = page.frameLocator("#frame1");

await frame.locator("#name").fill("Sandip");


=========================================================
Real-Time Example 2
=========================================================

By Frame Name:

const frame = page.frame({
  name: "frame-one796456169"
});

await frame?.locator("#RESULT_TextField-1")
            .fill("Sandip");


=========================================================
Real-Time Example 3
=========================================================

Count Total Frames:

console.log(page.frames().length);


=========================================================
Real-Time Example 4
=========================================================

Print Frame Names:

for (const frame of page.frames()) {
  console.log(frame.name());
}


=========================================================
Nested Frames Example
=========================================================

const parentFrame =
  page.frameLocator("#frame1");

const childFrame =
  parentFrame.frameLocator("#frame2");

await childFrame.locator("#username")
                .fill("Sandip");


=========================================================
Interview Questions & Answers
=========================================================

Q1. What is an iframe?

Answer:
An iframe is an HTML document embedded inside another HTML document.

---------------------------------------------------------

Q2. Why can't we directly locate elements inside an iframe?

Answer:
Because iframe has its own DOM, so we must switch to the frame first.

---------------------------------------------------------

Q3. What are the ways to handle frames in Playwright?

Answer:
1. page.frameLocator()
2. page.frame()
3. page.frames()

---------------------------------------------------------

Q4. Which method is recommended?

Answer:
frameLocator() is recommended because it automatically waits for the frame and elements.

---------------------------------------------------------

Q5. How do you switch to a frame by name?

Answer:

const frame = page.frame({
  name: "frame1"
});

---------------------------------------------------------

Q6. How do you count total frames?

Answer:

console.log(page.frames().length);

---------------------------------------------------------

Q7. How do you handle nested frames?

Answer:

const child =
  page.frameLocator("#parent")
      .frameLocator("#child");

---------------------------------------------------------

Q8. Can we switch back to the main page in Playwright?

Answer:
No switching is required in Playwright.
You can directly use page.locator() again.

---------------------------------------------------------

Q9. What is the difference between Selenium and Playwright frame handling?

-----------------------------------------------------------------------------------------------------
| Selenium                           | Playwright                                      |
-----------------------------------------------------------------------------------------------------
| driver.switchTo().frame()          | page.frameLocator()                             |
| switchTo().defaultContent()        | Not required                                    |
| Manual switching required          | No manual switching                             |
-----------------------------------------------------------------------------------------------------

---------------------------------------------------------

Q10. Which frame method do you use in real projects?

Answer:
I mostly use frameLocator() because it is cleaner, auto-waits, and avoids manual frame switching.

---------------------------------------------------------

Most Important Interview Answer:

Playwright handles iframes using frameLocator(), frame(), and frames(). 
In real projects, I prefer frameLocator() because it automatically waits for the frame 
and its elements and does not require manual switching back to the main page.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
=========================================================
Difference Between page.frame() and page.frameLocator()
=========================================================

--------------------------------------------------------------------------------------------------------------------------------
| Feature                  | page.frame()                                   | page.frameLocator()                        |
--------------------------------------------------------------------------------------------------------------------------------
| Return Type              | Frame | null                                   | FrameLocator                              |
| Finds Frame By           | Name or URL                                    | Locator (id, css, xpath, etc.)            |
| Auto Wait                | ❌ No                                          | ✅ Yes                                     |
| Can Return null          | ✅ Yes                                          | ❌ No                                      |
| Element Interaction      | frame.locator("#id")                           | page.frameLocator().locator("#id")        |
| Recommended by Playwright| ❌ Less Preferred                              | ✅ Most Preferred                          |
| Real Project Usage       | Rare                                           | Very Common                               |
--------------------------------------------------------------------------------------------------------------------------------

page.frame() Example:
---------------------

const frame = page.frame({
  name: "frame1"
});

await frame?.locator("#username")
            .fill("Sandip");


page.frameLocator() Example:
----------------------------

await page
  .frameLocator("#frame1")
  .locator("#username")
  .fill("Sandip");


Interview Answer:
-----------------

page.frame() returns a Frame object and can return null if the frame is not found.

page.frameLocator() returns a FrameLocator, automatically waits for the frame and its elements, and is the recommended way to work with iframes in Playwright.


Easy Memory Trick:
------------------

page.frame()
      ↓
Get the Frame first
      ↓
Then locate elements.

page.frameLocator()
      ↓
Go directly inside the frame
      ↓
Locate elements immediately.



=========================================================
Interview Answer
=========================================================

page.frame()
-------------
Returns a Frame object by name or URL and can return null if the frame is not found.

page.frameLocator()
-------------------
Returns a FrameLocator and automatically waits for the frame and its elements. It is the recommended way to work with iframes in Playwright.

Real Project Answer
-------------------
In real projects, I mostly use page.frameLocator() because it provides auto-waiting, cleaner code, and directly allows interaction with elements inside the iframe.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

=========================================================
Ways to Handle Frames in Playwright
=========================================================

-----------------------------------------------------------------------------------------------------------
| Method               | Return Type      | Description                                     | Example                     |
-----------------------------------------------------------------------------------------------------------
| page.frame()         | Frame | null      | Gets a Frame object by name or URL.            | page.frame({name:"frame1"}) |
| page.frameLocator()  | FrameLocator      | Creates a locator to work inside an iframe.    | page.frameLocator("#frame") |
-----------------------------------------------------------------------------------------------------------


=========================================================
Interview Answer
=========================================================

There are mainly two ways to handle frames in Playwright:

1. page.frame()
   - Returns a Frame object.
   - Used when the frame name or URL is known.

2. page.frameLocator()
   - Returns a FrameLocator.
   - Provides auto-waiting and is the recommended approach.

In real projects, I mostly use page.frameLocator() because it is simpler, cleaner, and more reliable.


=========================================================
Easy Memory Trick
=========================================================

page.frame()
      ↓
Get the Frame first
      ↓
Then locate elements.

page.frameLocator()
      ↓
Go directly inside the Frame
      ↓
Locate elements immediately.



Yes, for working with iframes, these are the two main Frame APIs in Playwright:

1. page.frame()
2. page.frameLocator()

The other methods:
are helper methods/properties of the Frame object, not separate ways to handle frames.
page.frames()
frame.name()
frame.url()
frame.parentFrame()
frame.childFrames()


Interview Answer
Playwright provides two main APIs for handling iframes:

1. page.frame()
2. page.frameLocator()

The remaining methods like page.frames(), frame.name(), frame.url(), frame.parentFrame(), and frame.childFrames() are helper methods used after obtaining a Frame object.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Interview Question:
What is BrowserContext in Playwright?
Answer:
BrowserContext is an isolated browser session inside a browser. Each BrowserContext has its own cookies, cache, local storage, and session storage, 
which means one user's session does not affect another user's session.
In simple words, BrowserContext works like an Incognito window and is mainly used for multi-user testing and independent sessions.

Best : BrowserContext is an isolated browser session, similar to an Incognito window, that allows us to create multiple independent user sessions in the same browser instance.

=============================================================================================================
Interview Question:
What can we create with the help of BrowserContext?

Answer:
With the help of BrowserContext, we can create multiple independent user sessions in the same browser. Each session has its own cookies, cache, and local storage.

Example:
const context1 = await browser.newContext(); // User 1
const context2 = await browser.newContext(); // User 2

Real-Time Uses:
1. Multi-user testing (Admin and Customer)
2. Role-based testing
3. Parallel execution
4. Testing multiple logins simultaneously
5. Saving and reusing login sessions

With the help of BrowserContext, we can create multiple isolated browser sessions (like Incognito windows) 
and perform multi-user and parallel testing in the same browser instance.
===================================================================

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Interview Question

## Q. Why do we use `?.` in `frame?.locator()`?

### Answer

`page.frame()` may return a **Frame object** if the frame is found, or **null** if the frame does not exist.

The `?.` (Optional Chaining Operator) checks whether `frame` is available before calling `locator()`. 
If `frame` is `null`, it prevents a runtime error and safely skips the method call.

================================================

## Without `?.`

```ts
const frame = page.frame({ name: "SingleFrame" });

await frame.locator("input").fill("sandip");
```

If the frame is **not found**, you'll get:

```text
TypeError: Cannot read properties of null
```

================================================

## With `?.`

```ts
const frame = page.frame({ name: "SingleFrame" });

await frame?.locator("input").fill("sandip");
```

If the frame is **not found**, no error is thrown because the method call is skipped.

================================================

## Better Practice (Recommended)

Instead of using `?.`, check that the frame exists:

```ts
const frame = page.frame({ name: "SingleFrame" });

if (frame) {
    await frame.locator("input[type='text']").fill("sandip");
} else {
    console.log("Frame not found");
}
```

This is better because you know whether the frame was found instead of silently skipping the action.

================================================

## Interview One-Line Answer

> We use `?.` (Optional Chaining) because `page.frame()` can return `null`. It safely calls `locator()` only if the frame exists, preventing a runtime error.

================================================






# Interview Question

## Q. Does `frameLocator()` support auto-wait?

### Answer

Yes. `frameLocator()` automatically waits for the iframe to be attached and available before interacting with elements inside it.

However, `frameLocator()` itself does **not perform actionability checks**. Those checks are applied when actions like `click()`, `fill()`, or `check()` are performed on elements inside the frame.

================================================

## Example

```ts
await page
    .frameLocator("#frame1")
    .locator("input")
    .fill("Sandip");
```

What