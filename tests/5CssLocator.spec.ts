import { test, expect, Locator } from "@playwright/test";

test("css loactor", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded",
  });

  //Tag and id
  // const searchBox:Locator=page.locator("input#small-searchterms");
  // await searchBox.fill("computer");

  await page.locator("input#small-searchterms").fill("computer");
  await page.waitForTimeout(2000);
  await expect(page.locator("input#small-searchterms")).toBeVisible();

  //Tag and class

  await page.locator("input.search-box-text").fill("T-Shirts");
  await page.waitForTimeout(2000);
  await expect(page.locator("input.search-box-text")).toBeVisible();

  //Tag with any other attribute
  await page.locator("input[name='q']").fill("computer");
  await page.waitForTimeout(2000);
  await expect(page.locator("input[name='q']")).toBeVisible();

  //Tag with class and  attribute
  await page
    .locator("input.search-box-text[name='q']")
    .fill("$25 Virtual Gift Card");
  await page.waitForTimeout(2000);
  await expect(page.locator("input.search-box-text[name='q']")).toBeVisible();
});

// await locator.inputValue();   // string
// await locator.innerText();    // string
// await locator.textContent();  // string | null
// await locator.count();        // number

// const value = await locator.inputValue();
// expect(value).toBe("Admin");
// expect(value).toContain("Adm");
// expect(value).toHaveLength(5);
// expect(value.length).toBe(5);

// const text = await locator.innerText();
// expect(text).toBe("Welcome");
// expect(text).toContain("Wel");
// expect(text).toHaveLength(7);
// expect(text.length).toBeGreaterThan(0);

/* 
await expect(locator).toHaveCount(5);
await expect(locator).toHaveText("Welcome");
await expect(locator).toContainText("Welcome");
await expect(locator).toBeChecked();
await expect(locator).toHaveValue("Admin");

await expect(locator).toBeEnabled();
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
await expect(locator).not.toBeChecked();
await expect(locator).toHaveAttribute("type", "text");
await expect(locator).toHaveClass("active");
await expect(locator).toHaveCSS("color", "rgb(255, 0, 0)");
await expect(locator).toHaveId("username");
await expect(locator).toBeFocused();
await expect(locator).toHaveJSProperty("disabled", false); */

// await expect(locator).toBeVisible();
// await expect(locator).toBeHidden();
// await expect(locator).toBeEnabled();
// await expect(locator).toBeDisabled();
// await expect(locator).toBeChecked();
// await expect(locator).toHaveText("Admin");
// await expect(locator).toContainText("Admin");
// await expect(locator).toHaveValue("Admin");
// await expect(locator).toHaveAttribute("type", "text");
// await expect(locator).toHaveCount(5);
