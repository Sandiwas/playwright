import { test, expect, Locator } from "@playwright/test";
import { parse } from "csv-parse";

test("static Web Table ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });

  const bookTable: Locator = page.locator("table[name='BookTable'] tbody");
  await expect(bookTable).toBeVisible();

  const tableRows: Locator[] = await page.locator("table[name='BookTable'] tr").all();

  for (let row of tableRows) {
    const rowData = await row.innerText();
    // console.log(rowData);
  }

  //1) count number of rows in a table
  const rows: Locator = bookTable.locator("tr");
  await expect(rows).toHaveCount(7);

  const rowCount = await rows.count();
  console.log(rowCount);
  expect(await rows.count()).toBe(7);
  expect(await rows.count()).toBeGreaterThan(1);
  expect(await rows.count()).toBeLessThan(8);

  console.log("Number of rows in book table ", rowCount);

  //2) count number of headers/columns
  //const  columns:Locator= page.locator("table[name='BookTable'] tbody tr th");
  const coloumn: Locator = rows.locator("th");

  await expect(coloumn).toHaveCount(4);
  const coloumnCount = await coloumn.count();

  expect(await coloumn.count()).toBe(4);
  expect(await coloumn.count()).toBeGreaterThan(1);
  expect(await coloumn.count()).toBeLessThan(5);
  console.log(coloumnCount);

  // 3) Read all data from 2nd row (index 2 means 3rd row including header)

  const rowLocator: Locator[] = await rows.all();
  const secondRow: Locator = rowLocator[2].locator("td");
  const secondRowData: string[] = await secondRow.allInnerTexts();

  await expect(secondRow).toHaveText(["Learn Java", "Mukesh", "Java", "500"]);
  console.log("Second row Data ", secondRowData.join(", "));

  const tableHeader: string[] = await rowLocator[0].locator("th").allInnerTexts();
  console.log("Table header  ", tableHeader.join(", "));

  for (let header of tableHeader) {
    console.log(header);
  }
  // 4) Read all data from the table (excluding header)

  for (let row of rowLocator) {
    const testData: string[] = await row.locator("td").allInnerTexts();
    console.log(testData.join("\t"));
  }

  // 5) Print book names where author is Mukesh

  const mukeshBookName: string[] = [];
  for (let row of rowLocator) {
    const testData: string[] = await row.locator("td").allInnerTexts();
    const bookname = testData[0];
    const autherName = testData[1];
    if (autherName === "Mukesh") {
      mukeshBookName.push(bookname);
      console.log(`${bookname} ${autherName}`);
    }
  }
  console.log(mukeshBookName);
  expect(mukeshBookName).toHaveLength(2);

  // 6) Calculate total price of all books

  let totalPrice: number = 0;
  //rowLocator.slice(1)) excluding heading here it start from 1 it just cerate copy of array start from 1 to end of index
  for (let row of rowLocator.slice(1)) {
    const rowData: string[] = await row.locator("td").allInnerTexts();
    const price = rowData[3];
    totalPrice = totalPrice + parseInt(price);
  }
  console.log("Total orice of books : ", totalPrice); //7100
  expect(totalPrice).toBe(7100);
});

//Sandip    25    Pune

// join("")     // Sandip25Pune
// join(" ")    // Sandip 25 Pune
// join("\t")   // Sandip    25    Pune
// join(", ")   // Sandip, 25, Pune

// Escape Character	Meaning	Example	Output
// \n	Moves to the next line	"Hello\nWorld"	Hello
//                                             World
// \t	Adds a tab space	"Hello\tWorld"	Hello    World
// \'	Prints a single quote	'It\'s good'	It's good
// \"	Prints a double quote	"He said \"Hi\""	He said "Hi"
// \\	Prints a backslash	"C:\\Users\\Admin"	C:\Users\Admin
