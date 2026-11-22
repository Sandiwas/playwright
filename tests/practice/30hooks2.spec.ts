import { test, Locator, Page, expect } from "@playwright/test";

//test.describe.configure({ mode: "parallel" });

let page: Page;
test.beforeAll("Launch Application", async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/", { waitUntil: "domcontentloaded" });
});

test.afterAll("log out application", async () => {
  await page.close();
});

test.beforeEach("Login to the application", async () => {
  await expect(page.locator("#login2")).toBeVisible();
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
});

test.afterEach("Logout from application", async () => {
  await page.locator("#logout2").click();
});

test.describe("myGroup", () => {
  test.describe.configure({ mode: "parallel" });

  test("Find  number of product and validate count", async () => {
    await expect(page.locator(".hrefch").first()).toBeVisible();
    const numberOfProduct = await page.locator(".hrefch").count();
    console.log("Number of product are : ", numberOfProduct);
    await expect(page.locator(".hrefch")).toHaveCount(9);
    expect(numberOfProduct).toBe(9);
  });

  test("Add product to cart", async () => {
    await expect(page.locator('text="Nokia lumia 1520"')).toBeVisible();
    await page.locator('text="Nokia lumia 1520"').click();

    page.once("dialog", async (alert) => {
      test.slow();
      expect(alert.type()).toContain("alret");
      console.log("Type of dialog", alert.type());
      expect(alert.message()).toContain("Product added");
      console.log("Message on alert", alert.message());
      await alert.accept();
    });
    await page.getByRole("link", { name: "Add to cart" }).click();
  });
});
