import { test, Locator, expect } from "@playwright/test";

test("Verify chrome cpu load in dynamic table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  const table = page.locator("table>tbody#rows");
  const rows: Locator[] = await table.locator("tr").all();

  console.log("Rows in table ", rows.length);
  expect(rows).toHaveLength(4);

  //
  let cpuLoad: string = "";
  for (let row of rows) {
    const browserName: string = await row.locator("td").nth(0).innerText();
    if (browserName === "Chrome") {
      cpuLoad = await row.locator('td:has-text("%")').innerText(); // or  cpuLoad = await row.locator('td',{hasText:'%'}).innerText();

      console.log("CPU load of chrome : ", cpuLoad);
      break;
    }
  }
  //compair it with value in the yellow label
  const cpuLoadinYellow: string | null = await page.locator(".chrome-cpu").textContent();
  console.log("Chome CPU load from yellow box : ", cpuLoadinYellow);

  if (cpuLoadinYellow?.includes(cpuLoad)) {
    console.log("CPU load of chrome is equal");
  } else {
    console.log("CPU load of chome is not equal");
  }
});
