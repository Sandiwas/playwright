import { test, expect, Locator, Page } from "@playwright/test";

async function dataPicker(tergetDate: string,targetMonth: string,targetYear: string,page: Page,isFutureDate: boolean,
) {
  while (true) {
    const currentMonth = await page
      .locator("span.ui-datepicker-month")
      .textContent();
    const currentYear = await page
      .locator("span.ui-datepicker-year")
      .textContent();

    if (currentMonth === targetMonth && currentYear == targetYear) {
      break;
    }
    if(isFutureDate){
    await page.locator(".ui-datepicker-next").click();
    }else{
          await page.locator(".ui-datepicker-prev").click();
    }
  }

  // await page.waitForTimeout(2000);

  const allDate: Locator[] = await page
    .locator("table.ui-datepicker-calendar td")
    .all();

  for (const dt of allDate) {
    const dateText = await dt.innerText();

    if (tergetDate === dateText) {
      await dt.click();
      break;
    }
  }
}

test("jquery datepickr", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", {
    waitUntil: "domcontentloaded",
  });
  const datepicker: Locator = page.locator("input#datepicker");
  await expect(datepicker).toBeVisible();
  //await datepicker.fill("06/10/1994");  //mm//dd//yyyy

  await datepicker.click(); //OPEN datepicker

  //select target element
  const year = "2024";
  const month = "September";
  const date = "10";

  await dataPicker(date, month, year, page, false);

  const inputText: string = "09/10/2024";
  //await page.waitForTimeout(2000);
  const expetedText = await datepicker.inputValue();
  console.log("expected value in date picker text box",expetedText); 
  console.log("Input value in date picker text box",inputText); 
  
  expect(expetedText).toEqual(inputText);//assert1
  expect(expetedText).toBe(inputText); //assert2
});
