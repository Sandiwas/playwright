import { test, expect, Locator } from "@playwright/test";

test("bootstrap hidden dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    { waitUntil: "domcontentloaded" },
  );

  //login
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  //click on PIM
  await page.getByText("PIM").click();

  //click on job title dropdown
  const options: Locator = page.locator("form i");
  await page.waitForTimeout(2000);

  //clikc on job title dropdown
  await page.waitForTimeout(2000);
  await options.nth(2).click();
  await page.waitForTimeout(3000);

  //capture all the options from dropdown and count
  const listOptions: Locator = page.locator("div[role='listbox'] span");
  const count = await listOptions.count();
  console.log("count of dropdown : ", count);

  //print all options
  for (let i = 0; i < count; i++) {
    //const text = await listOptions.nth(i).innerText();
    const text = await listOptions.nth(i).textContent();
    console.log(text);
  }

  //Selelct or click on dropdown
  for (let i = 0; i < count; i++) {
    const text = await listOptions.nth(i).textContent();
    if (text === "NoteTest_20260702_115949") {
    }
    await listOptions.nth(i).click();
    console.log(text);
    break;
  }

  await page.waitForTimeout(2000);
});
