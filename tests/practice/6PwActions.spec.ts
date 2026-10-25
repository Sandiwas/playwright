import { test, expect, Locator } from "@playwright/test";

test("TextBox Action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });

  const nameTextbox = page.getByPlaceholder("Enter Name");

  await nameTextbox.fill("automation");
  await expect(nameTextbox).toBeVisible();
  await expect(nameTextbox).toBeEnabled();
  await expect(nameTextbox).toBeEditable();

  const maxlengthVlaue: string | null = await nameTextbox.getAttribute("maxlength");
  expect(maxlengthVlaue).toBe("15");

  const enterName: string = await nameTextbox.inputValue();
  console.log(enterName);

  expect(enterName).toBe("automation");
  expect(enterName).toEqual("automation");
  expect(enterName).toContain("auto");
  expect(enterName).toMatch("ation");

  const email: Locator = page.getByPlaceholder("Enter EMail");
  await email.press("Enter");
  await page.waitForTimeout(3000);
  await email.pressSequentially("harryCode@gmail.com");
  await page.waitForTimeout(3000);

  const udemyCourses: Locator = page.getByText("Udemy Courses");
  await udemyCourses.isVisible();

  await udemyCourses.click();

  await page.waitForLoadState();

  await page.goBack();
  await page.waitForLoadState();
  await page.goForward();
});

test("Redio button action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  const maleRadioButton = page.locator("#male");
  console.log("Count of male redio button : ", await maleRadioButton.count());

  await expect(maleRadioButton).toBeVisible();
  await expect(maleRadioButton).toBeEnabled();

  expect(await maleRadioButton.isVisible()).toBeTruthy();
  expect(await maleRadioButton.isChecked()).not.toBe(true);
  expect(await maleRadioButton.isChecked()).toBe(false);
  expect(await maleRadioButton.isVisible()).not.toBeFalsy();
  expect(await maleRadioButton.isEnabled()).toBeTruthy();

  const maleRadiostatus = await maleRadioButton.isChecked();
  console.log(maleRadiostatus);

  await maleRadioButton.check();
  await page.waitForTimeout(3000);

  expect(await maleRadioButton.isVisible()).toBeTruthy();
  expect(await maleRadioButton.isChecked()).toBe(true);
  expect(await maleRadioButton.isChecked()).not.toBe(false);
  expect(await maleRadioButton.isVisible()).not.toBeFalsy();
  expect(await maleRadioButton.isEnabled()).toBeTruthy();

  const femaleRadioButton = page.locator("#female");

  await expect(femaleRadioButton).toBeVisible();
  await expect(femaleRadioButton).toBeEnabled();

  expect(await femaleRadioButton.isVisible()).toBeTruthy();
  expect(await femaleRadioButton.isChecked()).not.toBeTruthy();
  expect(await femaleRadioButton.isChecked()).not.toBe(true);

  await femaleRadioButton.check();

  expect(await femaleRadioButton.isVisible()).toBeTruthy();
  expect(await femaleRadioButton.isChecked()).toBeTruthy();
  expect(await femaleRadioButton.isChecked()).toBe(true);
  expect(await maleRadioButton.isChecked()).not.toBe(true);

  await expect(femaleRadioButton).toBeChecked();

  await maleRadioButton.check();
  await expect(femaleRadioButton).not.toBeChecked();
  await expect(maleRadioButton).toBeChecked();
});

test.only("checkBox Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //Selelct specific checkbox (sunday) using getByLable and assert
  const sundayCheckbox = page.getByLabel("Sunday");
  await sundayCheckbox.check();
  await page.waitForTimeout(2000);

  await expect(sundayCheckbox).toBeChecked();
  expect(await sundayCheckbox.isChecked()).toBe(true);

  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const checkboxes: Locator[] = days.map((day) => {
    return page.getByLabel(day);
  });

  expect(checkboxes).toHaveLength(7);
  expect(checkboxes.length).toBe(7);
  console.log(checkboxes.length);

  //3 selelct all checkboxes abd assert each is checked

  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  await page.waitForTimeout(3000);
  //4 uncheked last 3 checkboxes and assert

  for (const checkbox of checkboxes.slice(-3)) {
    checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  await page.waitForTimeout(3000);

  //5 selelct the checkboxes not slelect and uncheck the checkboxes which is checked

  for (const checkbox of checkboxes) {
    if (await checkbox.isChecked()) {
      checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    } else {
      checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  await page.waitForTimeout(2000);

  //4 uncheked last 3 checkboxes and assert

  for (const checkbox of checkboxes.slice(-3)) {
    checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    await checkbox.waitFor();
  }

  await page.waitForTimeout(2000);

  //6 index using randome slelct checkboxes

  const arr: number[] = [1, 5, 2];
  for (let i of arr) {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
  }

  await page.waitForTimeout(2000);

  //7 . select checkbox based on label

  const weekday: string = "sunday";
  for (let label of days) {
    if (weekday.toLowerCase() === label.toLowerCase()) {
      const checkbox: Locator = page.getByLabel(label);
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }
});

// slice()
// Does NOT change the original array
// Returns a copy of selected elements

// splice()
// Changes the original array
// Can remove, add, or replace elements
// Returns the removed elements

// slice()  = Copy (original array same)
// splice() = Change (original array modified)

// const arr = [1, 2, 3, 4];

// arr.slice(1, 3); // [2, 3]
// console.log(arr); // [1, 2, 3, 4]

// arr.splice(1, 2); // [2, 3]
// console.log(arr); // [1, 4]

// const fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1, 1, "Orange");
// console.log(fruits); ["Apple", "Orange", "Mango"]

// const arr = [1, 2, 3, 4];
// arr.splice(1, 0, 100);
// console.log(arr);[1, 100, 2, 3, 4]

// start=1
// deleteCount=0  => kuch remove nahi karo
// 100 => index 1 pe insert karo
