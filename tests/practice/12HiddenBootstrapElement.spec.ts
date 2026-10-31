import { test, expect } from "@playwright/test";

test("bootstrap hidden dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: "load" });

  //login
  await page.getByPlaceholder("Username").pressSequentially("Admin");
  await page.getByPlaceholder("Password").pressSequentially("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  //click on PIM
  await page.waitForLoadState();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  console.log("Login successful");

  //click on PIM
  expect(await page.getByText("PIM").isVisible()).toBe(true);
  await page.getByText("PIM").click();
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await expect(page.getByRole("heading", { name: "Employee Information" })).toBeVisible();

  await page.waitForTimeout(3000);

  //click on job title dropdown
  const dropdown = page.locator("form i");
  await dropdown.nth(2).click();

  //capture all the options from dropdown and count
  const options = page.locator(".oxd-select-option>span");
  const optionsCount = await page.locator(".oxd-select-option>span").count();
  console.log("Count of options under job dropdwon", optionsCount);

  //print all options
  const jobsArray: string[] = (await options.allInnerTexts()).map((job) => job.trim());
  for (const job of jobsArray) {
    expect(job).not.toBe("");
    //  console.log(job);
  }

  //capture all the options from dropdown and count
  for (let i = 0; i < optionsCount; i++) {
    await expect(options.nth(i)).toBeVisible();
    const option = await options.nth(i).innerText();
    console.log(option);
  }

  //Selelct or click on dropdown
  for (let i = 0; i < optionsCount; i++) {
    await expect(options.nth(i)).toBeVisible();
    const option = await options.nth(i).innerText();
    if (option.toLowerCase() === "QA Engineer".toLowerCase()) {
      await options.nth(i).click();
      break;
    }
  }
  const selectedOption = await page.locator(".oxd-select-text").nth(2).innerText();
  console.log("Selelcted Option : ", selectedOption);

  await page.waitForTimeout(8000);
});
