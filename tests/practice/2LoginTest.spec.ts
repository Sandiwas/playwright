import { test, expect } from "@playwright/test";

test("Verify Login", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/login", {
    waitUntil: "load",
  });

  await page.getByLabel("Email:").isVisible();
  await page.getByLabel("Password:").isVisible();

  expect(await page.getByLabel("Email:").isVisible()).toBeTruthy();
  await expect(page.getByLabel("Email:")).toBeVisible();

  let title: string = await page.title();
  console.log("Page title is :", title);

  await expect(page).toHaveTitle("Demo Web Shop. Login");
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

  await page.getByLabel("Email:").fill("harrycode9@gmail.com");
  await page.getByLabel("Password:").fill("admin@123");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.waitForLoadState("load");

  let status: boolean = await page
    .getByAltText("Tricentis Demo Web Shop")
    .isVisible(); //retun true or false
  console.log(status);
  expect(
    await page.getByAltText("Tricentis Demo Web Shop").isVisible(),
  ).toBeTruthy();
  await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();

  await expect(
    page.getByRole("img", { name: "Tricentis Demo Web Shop" }),
  ).toBeVisible();
  console.log("Login successful");
});

// Accessible Name can come from: getByRole()
// 1. Visible Text
// 2. Label Text
// 3. aria-label
// 4. aria-labelledby
// 5. alt attribute (images)

// Button    -> getByRole("button", { name: "Login" })
// Link      -> getByRole("link", { name: "Home" })
// Textbox   -> getByRole("textbox", { name: "Email" })
// Checkbox  -> getByRole("checkbox", { name: "Accept Terms" })
// Radio     -> getByRole("radio", { name: "Male" })
// Image     -> getByRole("img", { name: "Company Logo" })

// getByRole() identifies an element using:
// Role + Accessible Name

// Accessible Name can come from:
// 1. Visible Text
// 2. Label Text
// 3. aria-label
// 4. aria-labelledby
// 5. alt attribute
// 6. Checkbox Label
// 7. Radio Label
// 8. Link Text
/* 


Accessible Name Sources for getByRole()

1. Visible Text
HTML:
<button>Login</button>

Playwright:
page.getByRole("button", { name: "Login" });


2. Label Text
HTML:
<label for="email">Email</label>
<input id="email" type="text">

Playwright:
page.getByRole("textbox", { name: "Email" });


3. aria-label
HTML:
<input type="text" aria-label="Search">

Playwright:
page.getByRole("textbox", { name: "Search" });


4. aria-labelledby
HTML:
<span id="userLabel">Username</span>
<input type="text" aria-labelledby="userLabel">

Playwright:
page.getByRole("textbox", { name: "Username" });


5. alt Attribute (Image)
HTML:
<img src="logo.png" alt="Company Logo">

Playwright:
page.getByRole("img", { name: "Company Logo" });
page.getByAltText("Company Logo");


6. Checkbox Label
HTML:
<input type="checkbox" id="terms">
<label for="terms">Accept Terms</label>

Playwright:
page.getByRole("checkbox", { name: "Accept Terms" });


7. Radio Button Label
HTML:
<input type="radio" id="male" name="gender">
<label for="male">Male</label>

Playwright:
page.getByRole("radio", { name: "Male" });


8. Link Text
HTML:
<a href="/home">Home</a>

Playwright:
page.getByRole("link", { name: "Home" });


 */




//getByTitle() tabhi use kar sakte ho jab DOM me title attribute present ho.

// Locator	DOM AttributegetByTitle()	title=" "
// getByAltText()	alt=" "
// getByLabel()	<label> / aria-label
// getByPlaceholder()	placeholder=" "
// getByRole()	Role + Accessible Name




/* Interview Answer:
toHaveText() → Used when you want to validate the complete exact text of an element.
toContainText() → Used when you want to validate that the element contains a specific text or partial text.
Easy way to remember:
toHaveText() = Exact Match
toContainText() = Partial Match
 */