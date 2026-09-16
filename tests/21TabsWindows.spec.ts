import {test,expect,Locator,} from "@playwright/test"

   
test("handle tabs",async({context})=>{
       const parentPage=await context.newPage();
       await parentPage.goto("https://testautomationpractice.blogspot.com/",{waitUntil:'domcontentloaded'});
       await parentPage.waitForTimeout(5000);

  // 2 statements should go parallely
       const [newpage]= await Promise.all([context.waitForEvent('page'),parentPage.locator('button:has-text("New Tab")').click()]);
       
       //Appraoch 1: switch between pages and get titles ( using context)
      const pages=context.pages();
       console.log("number of pages ",pages.length);
       await expect(pages[0]).toHaveURL("https://testautomationpractice.blogspot.com/");
       await expect(pages[1]).toHaveURL("https://www.pavantestingtools.com/");

       await expect(pages[0]).toHaveTitle("Automation Testing Practice");
       await expect(pages[1]).toHaveTitle("SDET-QA Blog");

       console.log("title of parent page",await pages[0].title());
       console.log("url of parent page",pages[0].url());
       console.log("title of newpage page",await pages[1].title());
       console.log("url of newpage page",pages[1].url());

     //Appraoch 2: alternate
       console.log("title of parent page",await parentPage.title());
       console.log("url of parent page",parentPage.url());
       console.log("title of newpage page",await newpage.title());
       console.log("url of newpage page",newpage.url());

})


















































































































































































/* 
# Interview Question
## Q. What does this statement mean in Playwright?
```ts
const [newPage] = await Promise.all([context.waitForEvent("page"),page.locator("#link").click()]);
### Answer
This statement is used to **handle a new tab or window** that opens after clicking an element.
`Promise.all()` starts both operations at the same time:
- `context.waitForEvent("page")` starts listening for a new page (tab/window).
- `page.locator("#link").click()` clicks the link that opens the new page.
When the click opens a new tab, `waitForEvent("page")` captures it and returns the new `Page` object, which is stored in `newPage`.
================================================
# Step-by-Step Execution
```text
1. Start listening for a new page.
            │
            ▼
context.waitForEvent("page")
            │
            ▼
Click the link.

page.locator("#link").click()
            │
            ▼
New tab/window opens.
            │
            ▼
Playwright captures the new Page.
            │
            ▼
Store it in newPage.
================================================
# Why do we use Promise.all()?
If we click first and then wait for the new page, Playwright may miss the event because the new tab can open immediately.
Using `Promise.all()` ensures that Playwright starts listening **before** performing the click, so the event is never missed.
================================================
# Interview One-Line Answer
> `Promise.all()` is used to simultaneously start listening for a new page and perform the click action,
 ensuring the newly opened tab or window is captured without missing the event.
================================================
# Easy Memory Trick

```text
Start Listening
       +
Perform Click
       ↓
New Tab Opens
       ↓
Capture New Page
================================================ */





// Best Interview Answer

// context.waitForEvent("page") waits for and captures the new page event, while click()
//  triggers the action that opens the new tab. Promise.all() executes both simultaneously so the event is not missed.

//  | Word                         | Example                                                  |
// | ---------------------------- | -------------------------------------------------------- |
// | **Listen for**               | Playwright listens for the `page` event.                 |
// | **Wait for** ⭐ (Most Common) | Playwright waits for the `page` event.                   |
// | **Capture**                  | Playwright captures the newly opened page.               |

// One-Line Answer

// context.waitForEvent("page") waits for and captures the new page event before the click action is performed.

// ================================================

// ⭐ For interviews, the best words are:

// Wait for ✅
// Capture ✅
// Register a listener ✅ (when explaining internally)

// These sound natural and professional.



// ================================================
// ## Q. What does `context.waitForEvent("page")` return?
// ## Interview One-Line Answer

// > `context.waitForEvent("page")` returns a `Promise<Page>`, which resolves to the newly opened Page object when the `page` event occurs.

// ================================================