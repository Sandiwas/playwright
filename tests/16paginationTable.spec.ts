import { test, Locator, expect } from "@playwright/test";

test("Read data from all the table pages", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html",
    { waitUntil: "domcontentloaded" },
  );

  await page.waitForTimeout(3000);

  const rows: Locator[] = await page.locator("table#example tbody tr").all();
  for (const row of rows) {
    console.log(await row.innerText());
  }

  let hasmorepages: boolean = true;

  while (hasmorepages) {
    const rows: Locator[] = await page.locator("table#example tbody tr").all(); //get all rows
    for (const row of rows) {
      console.log(await row.innerText());
    }

    //button[aria-controls='example'][aria-label='Next']:has-text("›")
    //page.getByRole('link', { name: 'Next' })
    //page.getByLabel('Next')
    //await page.getByText('›')
    //button[aria-controjkls='example'][aria-label='Next']:has-text("›")
    //button[aria-controls='example']:nth-child("9") 

    const nextButton: Locator = page.locator("button[aria-label='Next']");

    const isDisabled = await nextButton.getAttribute("class"); //get class attribute value

    if (isDisabled?.includes("disabled")) {
      hasmorepages = false;
    } else {
      await nextButton.click();
    }
  }
});

test("filter the row and check the row count", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html",
    { waitUntil: "domcontentloaded" },
  );
  await page.waitForTimeout(3000);

  const dropdown = page.locator("#dt-length-0");
  await dropdown.selectOption({ label: "25" });

  const rows: Locator[] = await page.locator("table#example tbody tr").all();
  expect(rows.length).toBe(25); //assertion

  const allRow: Locator = page.locator("table#example tbody tr");
  await expect(allRow).toHaveCount(25); //assertion
});

test("Serch for specific data in a table", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html",
    { waitUntil: "domcontentloaded" },
  );
  await page.waitForTimeout(3000);
  const searchox: Locator = page.locator("input#dt-search-0");
  await searchox.fill("Paul Byrd");
  const rows: Locator[] = await page.locator("table#example tbody tr").all();

  if (rows.length >= 1) {

    let matchfound = false;
    for (const row of rows) {

      const text: string = await row.innerText();
      
      if (text.includes("Paul")) {
        console.log("recored exist - fount");
        matchfound = true;
        break;
      }
    }
  } else {
  console.log("Now row found with search text");
  }
});
