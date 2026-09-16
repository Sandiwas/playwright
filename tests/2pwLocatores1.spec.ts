import { test, Locator, expect } from "@playwright/test";

test("Inbuild playwright locator", async ({ page }) => {
  await page.goto("file:///C:/Ginger_Solution_New/app.html");

  // getByRole() Locators
  await page.getByRole("textbox", { name: "Username:" }).fill("sandiwas");
  await page.waitForTimeout(2000);

  await expect(page.getByRole("link", { name: "Home" }).nth(1)).toBeVisible();
  await expect(page.getByRole("link", { name: "Products" }).nth(1)).toHaveText("Products",);
  await expect(page.getByRole("link", { name: "Contact" }).nth(1),).toContainText("Contact");

  const btnPrimaryAction = await page.getByRole("button", { name: "Primary Action" }).textContent();
  expect(btnPrimaryAction).toBe("Primary Action");

  const btnToggleButton = await page .getByRole("button", { name: "Toggle Button" }).innerText();
  expect(btnToggleButton).toContain("Toggle Button");

  await page.getByRole("checkbox", { name: "Accept terms" }).check();
  await expect(page.getByRole("checkbox", { name: "Accept terms" }),).toBeChecked();

  await page.waitForTimeout(2000);

  const btn = await page.getByRole("button", { name: "Div with button role" }).innerText();
  expect(btn).toContain("Div with button role");

  // getByText() Locators

  const textparagraph = await page.getByText("This paragraph contains some");
  await expect(textparagraph).toHaveText("This paragraph contains some important text that you might want to locate.",);

  const heading = await page.getByText("Locate elements by their text content.").innerText();
  expect(heading).toContain("Locate elements");

  await expect(page.getByText("Locate elements by their text content."),).toContainText("Locate elements by");
  await expect(page.getByText("List item 1")).toHaveText("List item 1");
  await expect(page.getByText("Submit Form")).toBeVisible();

  const btnSubmit = await page.getByText("Submit Form").innerText();
  expect(btnSubmit).toContain("Submit");
  expect(btnSubmit).toEqual("Submit Form");

  //3. getByLabel() Locators

  await page.getByLabel("Email Address:").fill("abc@gamil.com");
  await page.getByLabel("Password:").fill("abc@123");
  await page.getByLabel("Your Age:").fill("24");
  await page.getByLabel("Standard").check();
  await page.getByLabel("Express").check();

  //4. getByPlaceholder() Locators

  await page.getByPlaceholder("Enter your full name").fill("keep try");
  await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("1234567898");
  await page.getByPlaceholder("Type your message here...").fill("learn from mistakes");
  await page.getByPlaceholder("Search products...").fill("Shofa");
  await page.getByRole("button", { name: "Search" }).click();
  await page.waitForTimeout(2000);
  
  //5. getByAltText() Locators
  await expect(page.getByAltText("logo image")).toBeVisible();

  //6. getByTitle() Locators
  await expect(page.getByTitle("Home page link")).toBeVisible();
  await expect(page.getByTitle("HyperText Markup Language")).toBeVisible();
  await expect(page.getByTitle("Tooltip text")).toBeVisible();
  await expect(page.getByTitle("Click to save your changes")).toBeVisible();

  //7. getByTestId() Locators
  await expect(page.getByTestId("profile-name")).toBeVisible();
  await expect(page.getByTestId("profile-email")).toBeVisible();
  await expect(page.getByTestId("edit-profile-btn")).toBeVisible();
  await page.getByTestId("edit-profile-btn").click();
  await expect(page.getByTestId("edit-profile-btn")).toBeVisible();

  await expect(page.getByTestId("nav-home")).toBeVisible();
  await expect(page.getByTestId("nav-products")).toBeVisible();
  await expect(page.getByTestId("nav-contact")).toBeVisible();

  const product= await page.getByTestId("product-name").all();
  const productPrice= await page.getByTestId("product-price").all();

  for (const item of productPrice) {
    await expect(item).toBeVisible();
    const productName=await item.innerText()
    console.log(await item.innerText())
  }

    for (const item of product) {
    await expect(item).toBeVisible();
    const productName=await item.innerText()
    console.log(await item.innerText())
  }
});
