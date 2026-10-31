import { test, expect, Locator } from "@playwright/test";

test("Read  data from all the table pages", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html", { waitUntil: "domcontentloaded" });

  // const table: Locator = page.locator("table#example>tbody");
  // const rows: Locator[] = await table.locator("tr").all();

  // for (let row of rows) {
  //   const rowData = await row.innerText();
  //   console.log(rowData);
  // }

  let homepage: boolean = true;
  while (homepage) {
    const rows: Locator[] = await page.locator("table#example>tbody tr").all();
    for (let row of rows) {
      const rowData = await row.innerText();
      console.log(rowData);
    }

    //button[aria-controls='example'][aria-label='Next']:has-text("›")
    //page.getByRole('link', { name: 'Next' })
    //page.getByLabel('Next')
    //await page.getByText('›')
    //button[aria-controjkls='example'][aria-label='Next']:has-text("›")
    //button[aria-controls='example']:nth-child("9")

    const nextButton: Locator = page.locator("button[aria-label='Next']");
    const isDisable: string | null = await nextButton.getAttribute("class");

    if (isDisable?.includes("disabled")) {
      homepage = false;
    } else {
      await nextButton.click();
    }
  }
});

test("filter the row and check the row count", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html", { waitUntil: "domcontentloaded" });
  const dropdown: Locator = page.locator("#dt-length-0");
  dropdown.selectOption({ label: "25" });
  await page.waitForTimeout(5000);

  const rows = page.locator("table#example>tbody tr");
  const rows1 = await page.locator("table#example>tbody tr").all();
  await expect(rows).toHaveCount(25);
  expect(rows1.length).toBe(25);
  expect(rows1).toHaveLength(25);
});

test.only("Search for specific data in a table", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html", { waitUntil: "domcontentloaded" });
  const textbox: Locator = page.getByLabel("Search:");
  await textbox.fill("Olivia Liang");
  await page.waitForTimeout(5000);
  const rows: Locator[] = await page.locator("table#example>tbody tr").all();

  if (rows.length >= 1) {
    let isRowPresent: boolean = false;
    for (let row of rows) {
      const text = await row.innerText();
      if (text.includes("Olivia")) {
        console.log("Recored fount with search text");
        isRowPresent = true;
        break;
      }
    }
    expect(isRowPresent).toBeTruthy();
  } else {
    console.log("Now row found with search text");
  }
});
