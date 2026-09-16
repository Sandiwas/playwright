import { test, expect, Locator } from "@playwright/test";

test("comparing methods ", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products: Locator = page.locator(".product-title");

  //1. innerText() vs textContent();
  //this way only traditional for loop poassible here

  //await products.nth(1).innerText();

  console.log(await products.nth(1).innerText());
  console.log(await products.nth(1).textContent());

  //capture all the products name

  const productCount = await products.count();
  console.log("Product count is ", productCount);

  await expect(products).toHaveCount(6);

  for (let i = 0; i < productCount; i++) {
    // const  productName:string=await products.nth(i).innerText(); //extract plain text . eliminate whitespaces and line breaks
    const productName: string | null = await products.nth(i).textContent(); //extract text including hidden elements .Including extra whitesapce line breaks
    console.log(productName?.trim()); //productName?.trim() safely removes extra spaces and prevents a runtime error when the variable is null or undefined.
  }

  //2) allInnerText() & allTextContent()

  const productNames: string[] = await products.allInnerTexts();
  console.log("Product name capture by allInnerTexts()", productNames);

  const productNames1: string[] = await products.allTextContents();
  console.log("Product name capture by allIneerText()", productNames1);

  const productnamesTrim: string[] = (await products.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log("Product name trim version", productnamesTrim);

  // 3 all --> converts locatores in to Locator[]
  //return array of locatores

  const productLocators: Locator[] = await products.all();
  console.log(productLocators);

  console.log("first inner text ", await productLocators[1].innerText());

  for (let productLocator1 of productLocators) {
    console.log(await productLocator1.innerText());
  }
  

  //for in loop

  for(let i in productLocators){

  console.log(await productLocators[i].innerText())

  }
console.log("for in loop finish ")

});
