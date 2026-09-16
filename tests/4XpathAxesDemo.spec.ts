import { test, Locator, expect } from "@playwright/test";

test("xpath axes", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp",{waitUntil: "domcontentloaded"});

// 1 self
  const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
  await expect(germanyCell).toHaveText("Germany");
  console.log("Cell text : ", await germanyCell.textContent());

  //2 parent
    const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Alfreds Futterkiste");
    console.log("Cell text : ", await parentRow.textContent());

  // 3 child
    const secondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(secondRowCells).toHaveCount(3);
    console.log("child locator count : ",await secondRowCells.count());

  //4 ancestor
  const table:Locator=page.locator("//td[text()='Germany']/ancestor::table");
  await expect(table).toHaveAttribute('id','customers');

  //5 descendant
  const tdElements:Locator=page.locator("//table[@id='customers']/descendant::td");
  await expect(tdElements).toHaveCount(18);
  console.log("Descendant count :" ,await tdElements.count());


  //6 following
  const tdFollowingElements:Locator=page.locator("//td[text()='Germany']/following::td[1]");
  //await expect(tdFollowingElements).toHaveCount(35);
  await expect(tdFollowingElements).toHaveText("Centro comercial Moctezuma");
  await expect(tdFollowingElements).toContainText("Centro comercial Moctezuma");
  console.log("Following count :" ,await tdFollowingElements.count());

/* Interview Answer:
toHaveText() → Used when you want to validate the complete exact text of an element.
toContainText() → Used when you want to validate that the element contains a specific text or partial text.
Easy way to remember:
toHaveText() = Exact Match
toContainText() = Partial Match
 */

  //7 following-sibling axis
  const rightSiblings:Locator=page.locator("//td[normalize-space()='Germany']/following-sibling::td");
  await expect(rightSiblings).toHaveCount(0);
  console.log("following siblings ",await rightSiblings.count());


    //8 preceding
  const tdPrecedingElements:Locator=page.locator("//td[normalize-space()='Germany']/preceding::td[1]");
  await expect(tdPrecedingElements).toHaveCount(1);
  await expect(tdPrecedingElements).toHaveText("Maria Anders");
  await expect(tdPrecedingElements).toContainText("Maria Anders");
  console.log("Following count :" ,await tdFollowingElements.count());


  
  //9 preceding-sibling axis
  const leftPrecedingSiblings:Locator=page.locator("//td[normalize-space()='Germany']/preceding-sibling::td");
  await expect(leftPrecedingSiblings).toHaveCount(2);
  await expect(leftPrecedingSiblings.nth(0)).toHaveText("Alfreds Futterkiste");
  await expect(leftPrecedingSiblings.nth(1)).toHaveText("Maria Anders");
  console.log("following siblings ", await leftPrecedingSiblings.count());

});
