import { test, expect, Locator } from "@playwright/test";

test("Xpath demo in playwright", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const absoluteLogo: Locator = page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img[1]",);
  await expect(absoluteLogo).toBeVisible();

  const realativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']",);
  await expect(realativeLogo).toBeVisible();

 //content() 
//---------------------------------------------------------------------------------------------------------
  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  const productCount: number = await products.count();
  expect(productCount).toBeGreaterThan(0);

  console.log("computer realted products count", productCount);

  //console.log(await product.textContent()); Error: locator.textContent: Error: strict mode violation:

  console.log("first product : ", await products.first().textContent());
  console.log("last product : ",  await products.last().textContent());
  console.log("nth 3 product : ", await products.nth(3).textContent()); //Index is starting form zero

  let productTitle: string[] = await products.allTextContents(); //

  console.log("products array ",productTitle);

  for (let ele of productTitle) {
    console.log(ele);
  }

//starts-with() 
//---------------------------------------------------------------------------------------------------------
const buildingPoducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
const counts:number=await buildingPoducts.count();
expect(counts).toBeGreaterThan(0);

let buildValue:string[]=await buildingPoducts.allTextContents();
console.log("build array ",buildValue);

console.log("build first ",await buildingPoducts.first().textContent());
console.log("build second ",await buildingPoducts.last().textContent());
console.log("build third ",await buildingPoducts.nth(1).textContent());

//starts-with() 
//---------------------------------------------------------------------------------------------------------
 const register:Locator=page.locator("//a[text()='Register']");
 await expect(register).toBeVisible();

 const resrRegister=await register.textContent();
 console.log("inner text ",resrRegister)

 const resrRegisterq:string=await register.innerText();
 console.log("inner text ",resrRegisterq)


/* Validation ke liye (button text, label text, link text) → innerText() zyada use hota hai.
Hidden text ya raw DOM content chahiye → textContent() use karte hain.

Isliye har baar innerText() use nahi kar sakte, requirement ke hisab se choose karna chahiye.
 */

//last() 
//---------------------------------------------------------------------------------------------------------

const lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
expect(lastItem).toBeVisible();
console.log("Tast elemnet test ",await lastItem.textContent());

//div[@class='column follow-us']//li[position()=1]
//[position()=2] 
//---------------------------------------------------------------------------------------------------------

const positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=2]");
expect(positionItem).toBeVisible();
console.log("Tast elemnet test ",await positionItem.textContent());
});

//----------------------------------------------------------------------------------------------------------------