import { test, expect, Locator, Page } from "@playwright/test";
/* 

*/
let page: Page;
test.beforeAll("launch application", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/");
});
test.afterAll("closed App", async () => {
  page.close();
});


test.beforeEach("Login to the application",async () => {
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("button[onclick='logIn()']").click();
});

test.afterEach("Logout from application", async () => {
  await page.locator("#logout2").click();
});



test.describe("myGroup",async()=>{
test("Find  number of product", async () => {
  const products: Locator = page.locator(".hrefch");
  const productCount = await products.count();
  console.log("the count of product ", productCount);
  await expect(products).toHaveCount(9);
});

test("Add product to cart", async () => {
    //await page.getByText('Nokia lumia 1520').click();
    await  page.locator("text='Nokia lumia 1520'").click();

    page.once('dialog',(obj) =>{
     const message:string=obj.message();
     expect(message).toContain('Product added');
     obj.accept();
    });
    
    //page.getByRole('link', { name: 'Add to cart' })
    await page.locator("text='Add to cart'").click();
});

})














































// Interview Answer

// The parameter inside the callback is just a variable name that represents the event
//  object provided by Playwright. We can name it anything, such as dialog, pop, d, or alertDialog. 
//  The name doesn't matter, but we must use the same variable name consistently inside the callback. 
//  Using dialog is simply a common convention because it makes the code more readable.

//  Easy way to remember:

// page.once('dialog', (anything) => {
//   anything.message();
//   anything.accept();
// });

// anything can be any valid variable name. It's the object received by the callback, not a fixed keyword.


//page.once() registers the event listener, waits for the event, executes the callback function when the event occurs, and then automatically removes the listener.
//The callback function contains the logic to handle the popup activity, such as reading the message, accepting, or dismissing the dialog.
//page.once() → Event ko register karta hai, wait karta hai, callback ko execute karta hai, aur ek baar execution ke baad listener ko remove kar deta hai.
//Callback function → Popup ko handle karta hai (e.g., message(), accept(), dismiss()).



/* 
1. Arrow Function

page.once('dialog', (dialog) => {
  console.log(dialog.message());
  dialog.accept();
});


once() is the function that colling  arrow function man 



2. Anonymous Function

page.once('dialog', function(dialog) {
  console.log(dialog.message());
  dialog.accept();
});

3. Named Function

function handleDialog(dialog) {
  console.log(dialog.message());
  dialog.accept();
}
page.once('dialog', handleDialog); */




/* 
Why is it called "Callback"?

Because you don't call it.

You give it to another function, and that function calls it back later when needed.

Interview Answer (Best)
A callback function is a function passed as an argument to another function. It is not executed immediately. 
Instead, it is executed later by that function when a specific event or task occurs.

In Playwright, we pass a callback function to page.on() or page.once(). When the specified event occurs, 
Playwright automatically invokes the callback function to handle the event.
Easy Formula to Remember
Function + Passed as an Argument + Executed Later = Callback Function

Example:

page.once('dialog', handleDialog);
page.once() → Registers the event listener.
handleDialog → Callback function.
dialog → Event object passed by Playwright.
Playwright → Invokes the callback automatically when the dialog event occurs.
 */

/* 
or interview purposes, you can say:

page.once() registers a one-time event listener. When the specified event occurs, page.once() invokes (executes)
the callback function and then automatically removes the listener.

For example:

function handleDialog(dialog) {
    console.log(dialog.message());
    dialog.accept();
}

page.once('dialog', handleDialog);
Flow
page.once('dialog', handleDialog)
        │
        ▼
Registers the event listener
        │
        ▼
Waits for the dialog event
        │
        ▼
Dialog appears
        │
        ▼
page.once() invokes (calls) handleDialog(dialog)
        │
        ▼
handleDialog() executes
        │
        ▼
Listener is removed automatically
One important clarification

When we say "page.once() calls the callback function", we're simplifying it.

More technically:

page.once() registers the listener.
When the event occurs, Playwright's event system invokes the registered callback.
Since the callback was registered through page.once(), it's perfectly acceptable in interviews to say "page.once() executes the callback when the event occurs."

So your understanding is correct.  */