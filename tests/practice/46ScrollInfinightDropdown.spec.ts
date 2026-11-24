import { test } from "@playwright/test";
import { resolve } from "dns";

test("Select Item 50 from dropdown", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay.html", { waitUntil: "domcontentloaded" });

  const dropdown = page.locator("#scrollable");

  await dropdown.evaluate(async (select: HTMLSelectElement) => {
    while (true) {
      const itemFound = Array.from(select.options).some((option) => {
       return option.text === "Item 100";
      });
      if (itemFound) {
        break;
      }
      select.scrollTop = select.scrollHeight;

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  });

  await dropdown.selectOption({ label: "Item 100" });

  await page.waitForTimeout(5000);
  await page.close();
});
