import { test, expect, Locator } from "@playwright/test";
test("locator", async ({ page }) => {
  //absolute path
  await page.goto("https://demowebshop.tricentis.com/", { waitUntil: "load" });
  const logo: Locator = page.locator("xpath=html/body/div[4]/div[1]/div[1]/div[1]/a/img[1]",);
  await expect(logo).toBeVisible();

  //Relative Path
  const Relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']",);
  await expect(Relativelogo).toBeVisible();

  //contains
  const product: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  const productCount: number = await product.count();
  expect(productCount).toBeGreaterThan(0);
  console.log("Computer related product count is : ", productCount);

  //console.log(await product.textContent()); Error: locator.textContent: Error: strict mode violation:
  console.log("Locator Array : ", await product.all());
  console.log("first product : ", await product.first().textContent());
  console.log("second product : ", await product.nth(1).textContent());
  console.log("Third product : ", await product.nth(2).textContent());
  console.log("Fourth product : ", await product.last().textContent());

  const ProductNameArray: string[] = await product.allTextContents();
  console.log("String Array : ", ProductNameArray);

  for (let product of ProductNameArray) {
    expect(product.toLowerCase()).toContain("computer");
    console.log(product);
  }

  //starts-with()

  const bulidInProduct: Locator = page.locator(
    "//h2/a[starts-with(@href,'/build')]",
  );
  const countOfBulitInProduct: number = await bulidInProduct.count();
  expect(countOfBulitInProduct).toBeGreaterThan(0);
  console.log("Bulid in product count ", countOfBulitInProduct);

  const bulidProductName: string[] = await bulidInProduct.allInnerTexts();
  console.log("Produt name array : ", bulidProductName);

  console.log("First Product ", await bulidInProduct.first().innerText());
  console.log("Second product ", await bulidInProduct.nth(1).innerText());
  console.log("Third product ", await bulidInProduct.last().innerText());

  //text()
  const registration: Locator = page.locator("//a[text()='Register']");

  await expect(registration).toBeVisible();
  await expect(registration).toHaveText("Register");
  await expect(registration).toContainText("Reg");

  console.log("text Content : ", await registration.textContent());
  console.log("text Content : ", await registration.innerText());

  
/* Validation ke liye (button text, label text, link text) → innerText() zyada use hota hai.
Hidden text ya raw DOM content chahiye → textContent() use karte hain.

Isliye har baar innerText() use nahi kar sakte, requirement ke hisab se choose karna chahiye.
 */

//last() 


const lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastItem).toBeVisible();
console.log("Last name in list ",await lastItem.innerText());

const positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=1]");
await expect(positionItem).toBeVisible();
console.log("First name in list ",await positionItem.innerText());


const secondItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=2]");
await expect(secondItem).toBeVisible();

console.log("Second Item html Line ",await secondItem.innerHTML());
console.log("Second Item html Line ",await secondItem.innerText());
await page.locator("input[value='Search store']").fill("computer");
console.log("Textbox input value is : ", await page.locator("input[value='Search store']").inputValue());

await expect(page.locator("input[value='Search store']")).toHaveValue("computer");

});
