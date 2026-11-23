import { test, expect } from "@playwright/test";

test("keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  const textArea1 = page.locator("textarea[name='text1']");
  const textArea2 = page.locator("textarea[name='text2']");

  await textArea1.focus();

  await page.keyboard.insertText("Automation");

  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");

  await page.keyboard.down("Control");
  await page.keyboard.press("C");
  await page.keyboard.up("Control");

  await page.keyboard.press("Tab");

  await page.keyboard.down("Control");
  await page.keyboard.press("V");
  await page.keyboard.up("Control");

  await expect(textArea2).toHaveValue("Automation");

  await page.waitForTimeout(3000);
});

test("keyboard actions2 ", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  const textArea1 = page.locator("textarea[name='text1']");
  const textArea2 = page.locator("textarea[name='text2']");

  await textArea1.focus();

  await page.keyboard.insertText("Automation");

  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Control+V");

  await expect(textArea2).toHaveValue("Automation");

  await page.waitForTimeout(3000);
});
