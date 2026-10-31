//dialog : alert , confirm , prompt (dialogs/JSalerts)
//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
//2) However, you can register a dialog handler before the action that triggers the dialog to either
//dialog.accept() or dialog.dismiss() it.

import { test, expect, Locator } from "@playwright/test";

test("simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#", { waitUntil: "domcontentloaded" });

  // Register a dialog handler
  page.on("dialog", (dialog) => {
    console.log("Dialog type is ", dialog.type()); // returns type of the dialog
    expect(dialog.type()).toEqual("alert");

    console.log("Dialog message is : ", dialog.message()); // returns message from dialog
    expect(dialog.message()).toContain("I am an alert box!");

    dialog.accept(); //click on ok button
  });

  await page.getByRole("button", { name: "Simple Alert" }).click(); // Opens dialog
  await page.waitForTimeout(5000);
});

test("confrom dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });

  page.on("dialog", (dialog) => {
    console.log("Dialog type is : ", dialog.type());
    expect(dialog.type()).toContain("confirm");
    console.log("Dialog message is ", dialog.message());
    expect(dialog.message()).toContain("Press a button!");
    //dialog.accept();
    dialog.dismiss();
  });

  await page.getByRole("button", { name: "Confirmation Alert" }).click(); // Opens dialog
  await page.waitForTimeout(5000);

  const text = await page.locator("#demo").innerText();
  console.log("confromation text ", text);

  //await expect(page.locator("#demo")).toHaveText("You pressed OK!");
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});

test.only("prompt dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });

  page.on("dialog", (dialog) => {
    console.log("dialog type : ", dialog.type());
    expect(dialog.type()).toContain("prompt");
    console.log("dialog message is : ", dialog.message());
    expect(dialog.message()).toContain("Please enter your name:");
    console.log("Default name is : ", dialog.defaultValue());
    expect(dialog.defaultValue()).toBe("Harry Potter");
    dialog.accept("Tom");
  });

  await page.getByRole("button", { name: "Prompt Alert" }).click(); // Opens dialog
  await page.waitForTimeout(5000);

  const text = await page.locator("#demo").innerText();
  console.log("Validation text is ", text);

  expect(text).toContain("Tom");
  await expect(page.locator("#demo")).toContainText("Tom");
  await expect(page.locator("#demo")).toHaveText("Hello Tom! How are you today?");
});
