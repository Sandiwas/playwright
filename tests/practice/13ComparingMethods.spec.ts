import { test, expect, Locator } from "@playwright/test";

test("comparing method", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", { waitUntil: "domcontentloaded" });
  const title = await page.title();
  const url = page.url();
  console.log("page tiltle is : ", title);
  console.log("Page current url is ", url);

  await expect(page).toHaveTitle(/Demo Web/);
  await expect(page).toHaveURL(/demowebshop/);

  //1. innerText() vs textContent();
  //this way only traditional for loop poassible here
  //await products.nth(1).innerText();

  const products = page.locator(".product-title");
  await expect(products).toHaveCount(6);

  const allProductCount = await products.count();
  console.log("product count is ", allProductCount);

  expect(allProductCount).toBeGreaterThan(1);

  console.log(await products.first().innerText());
  console.log(await products.nth(2).innerText());
  console.log(await products.last().innerText());

  //1st way capture all the products name
  for (let i = 0; i < allProductCount; i++) {
    await expect(products.nth(i)).toBeVisible();
    const text = await products.nth(i).innerText();
    console.log(`Product ${i} :  ${text}`);
  }
  //2nd capture all the products name
  const allProducts: string[] = (await products.allTextContents()).map((productName) => productName.trim());
  for (let name of allProducts) {
    expect(name).not.toBe("");
    console.log(`Product name :  ${name}`);
  }

  //3rd way
  // const  productName:string=await products.nth(i).innerText(); //extract plain text . eliminate whitespaces and line breaks
  for (let i = 0; i < allProductCount; i++) {
    const product: string | null = await products.nth(i).textContent(); //extract text including hidden elements .Including extra whitesapce line breaks
    console.log(product?.trim()); //productName?.trim() safely removes extra spaces and prevents a runtime error when the variable is null or undefined.
  }

  //2) allInnerText() & allTextContent()

  const productNames: string[] = await products.allInnerTexts();
  console.log("Product name capture by allInnerTexts()", productNames);

  const productNames1: string[] = await products.allTextContents();
  console.log("Product name capture by allTextContents()", productNames);

  const nameofProduct: string[] = productNames1.map((name) => name.trim());
  console.log(nameofProduct);

  // 3 all --> converts locatores in to Locator[]
  //return array of locatores

  const productLocators: Locator[] = await products.all();
  console.log(productLocators);

  console.log(await productLocators[1].textContent());
  console.log(await productLocators[1].innerText());

  for (let proName of productLocators) {
    await expect(proName).toBeVisible();4
    console.log(await proName.innerText());
  }

  //for in loop
  for (let i in productLocators) {
    console.log(await productLocators[i].innerText());
  }
});
