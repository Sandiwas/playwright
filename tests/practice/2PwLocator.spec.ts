import {faker} from "@faker-js/faker"
import { test, expect } from "@playwright/test";

test("verify locatores", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", { waitUntil: "load" });


  let text:boolean=await page.getByAltText("Tricentis Demo Web Shop", {exact : true}).isVisible();
  console.log("Logo is present : ",text)

  // 2. page.getByText() - Find an element by the text it contains. You can match by a substring, exact string, or a regular expression

  // Locate by visible text
  // Use this locator to find non interactive elements like div, span, p, etc.
  // For interactive elements like button, a, input, etc. use role locators.
  // <p>welcome</p>
  // <div>hellow</div>
  //const msg=await page.getByText("Welcome to our store").textContent();
  // console.log(msg?.trim());

  const msg = await page.getByText("Welcome to our store").innerText();
  console.log(msg);

  await expect(page.getByText(/Our Store/i)).toBeVisible();
  await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible();
  await expect(page.getByText("Welcome to our store")).toHaveText(
    "Welcome to our store",
  );
  await expect(page.getByText("Welcome to our store")).toContainText(
    "Welcome to",
  );
  console.log(msg);

  expect(msg).toContain("store");
  expect(msg).toBe("Welcome to our store");
  expect(msg).toEqual("Welcome to our store");
  expect(msg).toMatch("Welcome");

  let linkRegister = await page.getByText("Register").textContent();
  console.log("Registraion link text ", linkRegister);

  //await page.getByText("Register").click();
  await page.waitForLoadState();
  await page.getByRole("radio", { name: "Excellent" }).check();

  await page.waitForTimeout(2000);

  // 3. page.getByRole() - Locating by Role   ( role is not an attribute)
  /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
    */

  const headingStore = await page
    .getByRole("heading", { name: "Welcome to our store" })
    .innerText();
  console.log("heading : ", headingStore);
  const headingNewsletter = await page
    .locator(".block.block-newsletter .title strong")
    .innerText();
  console.log("heading : ", headingNewsletter);

  await page.getByRole("link", { name: "Register" }).click();

  const linkText = await page
    .getByRole("heading", { name: "Register" })
    .innerText();
  console.log("linkText", linkText);
  const btnRegistation = await page
    .getByRole("button", { name: "Register" })
    .innerText();
  console.log(btnRegistation);
  //await page.getByRole("button",{name : 'Register'}).click();

  const firstname = faker.person.firstName();
  const lastName=faker.person.lastName();
  const email=faker.internet.email();
  const password=faker.internet.password();
  console.log("email : ", email);
    console.log("password : ", password);
  
   
  await page.waitForTimeout(2000);
  await page.locator("#gender-male").check();
  await page.getByLabel("First name:").fill(firstname);
  await page.getByLabel("Last name:").fill(lastName);
  await page.waitForTimeout(2000);
  await page.getByLabel("Email:").fill(email);
  await page.locator("#Password").fill(password);
  await page.locator("#ConfirmPassword").fill(password);
  await page.getByRole("button", { name: "Register" }).click();
  console.log("Registration successfull");
  await page.waitForLoadState();

  await expect(page.getByRole("heading",{name :"Register"})).toBeVisible();
  await expect(page.getByText("Your registration completed")).toHaveText("Your registration completed");
  await page.getByRole("button",{name:'Continue'}).click();

  await page.getByRole("link",{name :"Log out"}).click();
  await page.waitForLoadState();
  await page.waitForTimeout(2000);
  await page.getByRole("link",{name :"Log in"}).click();

  await expect(page.getByRole("heading",{name:'Welcome, Please Sign In!'})).toBeVisible();
            
  await page.getByLabel("Email:").fill(email);
  await page.getByLabel("Password:").fill(password);
  await page.getByRole("button", { name: "Log in" }).click();

  const emailId=await page.locator(".header-links ul li").first().textContent();
  console.log(email);
     
});
