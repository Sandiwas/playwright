//alert(), confirm(), prompt() dialogs/JSalerts
//Reference:  https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
//2) However, you can register a dialog handler before the action that triggers the dialog to either
//dialog.accept() or dialog.dismiss() it.

import { test, expect, Locator } from "@playwright/test";

test("simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.getByText("Simple Alert").click()

  // Register a dialog handler
  page.on("dialog", (dialog) => {
    console.log("Dialog type is:", dialog.type()); // returns type of the dialog
    expect(dialog.type()).toContain("alert");
    console.log("Dialog Text:", dialog.message()); // returns message from dialog
    expect(dialog.message()).toContain("I am an alert box!");
    dialog.accept(); //click on ok button
  });

  await page.locator("#alertBtn").click(); // Opens dialog
  await page.waitForTimeout(3000);
});

test("promt Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register a dialog handler
  page.on("dialog", (dialog) => {
    console.log("Dialog type is :", dialog.type()); // returns type of the dialog
    expect(dialog.type()).toContain("confirm");
    console.log("Dialog massage is ", dialog.message()); // returns message from dialog
    expect(dialog.message()).toContain("Press a button!");
    // dialog.accept()  // close dialog by accepting
    dialog.dismiss(); // close dialog by dimissing
  });

  await page.locator("#confirmBtn").click(); // Opens conformation dialog
  //await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
  const text: Locator = page.getByText("You pressed Cancel!");
  expect(text).toHaveText("You pressed Cancel!");

  //await expect(page.locator("#demo")).toHaveText("You pressed OK!");
  //const text:Locator=page.getByText("You pressed OK!");
  // await expect(text).toHaveText("You pressed OK!");

  console.log("output text :", text);

  await page.waitForTimeout(5000);
});

test.only("Promt Dialog", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");
     // Register a dialog handler
  page.on("dialog", (dialog) => {
    console.log("dialog type : ", dialog.type()); // returns type of the dialog
    expect(dialog.type()).toContain("prompt");
    console.log("dialog message is : ", dialog.message());  // returns message from dialog
    expect(dialog.message()).toContain("Please enter your name:");
    console.log("default value is : ", dialog.defaultValue());
    expect(dialog.defaultValue()).toContain("Harry Potter"); // checks default value of the dialog
    dialog.accept("sandip"); // close dialog by accepting
  });
  await page.locator("#promptBtn").click();   // Opens Prompt dialog

     const text:string=await page.locator("#demo").innerText();
      console.log("Output text:",text);
   // await expect(page.locator("#demo")).toHaveText("Hello sandip! How are you today?");
  await expect(page.locator("#demo")).toContainText("sandip");
  await page.waitForTimeout(5000);
});
