import { test, expect, Locator } from "@playwright/test";

test("static web table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const bookTable: Locator = page.locator("table[name='BookTable'] tbody");
  await expect(bookTable).toBeVisible();

  //1) count number of rows in a table
  const rows: Locator = bookTable.locator("tr"); //returns all the rows including header
  await expect(rows).toHaveCount(7); //7  //approach 1
  const rowCount = await rows.count();
  expect(rowCount).toBe(7); // appraoch 2
  console.log("number of rows in table ", rowCount);

  //2) count number of headers/columns
  //const  columns:Locator= page.locator("table[name='BookTable'] tbody tr th");
  const coloumn: Locator = rows.locator("th");
  await expect(coloumn).toHaveCount(4); //4  appraoch 1

  const coloumnCount = await coloumn.count();
  expect(coloumnCount).toBe(4); // appraoch 2
  console.log("number of coloumn in table ", coloumnCount);

  // 3) Read all data from 2nd row (index 2 means 3rd row including header)
  const rowsLocator: Locator[] = await rows.all();
  const sencondRow: string[] = await rows.nth(2).locator("td").allTextContents();
  console.log(sencondRow.join("\t"));
  const headerRow: string[] = await rowsLocator[0].allInnerTexts();

  for (let text of headerRow) {
    console.log(`${text}\t`);
  }
  console.log(headerRow.join("\t"));

  // 4) Read all data from the table (excluding header)
  console.log("Printing all Table Data.......");

  for (const row of rowsLocator) {
    const testData: string[] = await row.locator("td").allInnerTexts();
    console.log(testData.join("\t"));
  }

  // 5) Print book names where author is Mukesh
  const mukeshBookcount: string[] = [];
  for (const row of rowsLocator) {
    const testData: string[] = await row.locator("td").allInnerTexts();
    const auther = testData[1]; // Capture Author name
    const book = testData[0]; // Capture Book name

    // You can use below 2 statements instead of using above 3 statements to get authorName & Book Name

    // const auther=await rows.locator("td").nth(1).innerText();
    // const book=await rows.locator("td").nth(0).innerText();

    if (auther === "Mukesh") {
      console.log(`${auther} ${book}`);
      mukeshBookcount.push(book);
    }
  }
  console.log(mukeshBookcount);
  expect(mukeshBookcount).toHaveLength(2);

  // 6) Calculate total price of all books
  let totalPrice: number = 0;

  for (const row of rowsLocator.slice(1)) {
    const cells: string[] = await row.locator("td").allInnerTexts(); // You can use single statement instead of using above 2 statements to get price
    console.log(cells[3]);
    const price = cells[3];
    totalPrice = totalPrice + parseInt(price);
  }
  console.log("Total price is ", totalPrice);
  expect(totalPrice).toBe(7100); //Assertion
});
