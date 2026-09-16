import { test, expect, Locator } from "@playwright/test";

test("Test Input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", {
    waitUntil: "domcontentloaded",
  });

  const nameTestBox: Locator = page.getByPlaceholder("Enter Name");

  await expect(nameTestBox).toBeVisible();
  await expect(nameTestBox).toBeEnabled();

  await nameTestBox.fill("automation");

  await page.waitForTimeout(3000);

  const maxLength: string | null = await nameTestBox.getAttribute("maxlength");
  expect(maxLength).toBe("15");

  await page.waitForTimeout(3000);

  const enterText: string = await nameTestBox.inputValue();
  console.log("Input string name text box value : ", enterText);
  expect(enterText).toBe("automation");

  await page.getByPlaceholder("Enter EMail").press("Enter");
  await page.waitForTimeout(2000);
});

test("Redio button actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const maleRedioButton: Locator = page.locator("#male");
  console.log("count of mail redio button :", await maleRedioButton.count());

  await expect(maleRedioButton).toBeVisible();
  await expect(maleRedioButton).toBeEnabled();

  expect(await maleRedioButton.isChecked()).toBe(false);
  await expect(maleRedioButton).not.toBeChecked();
  await maleRedioButton.check();
  await page.waitForTimeout(2000);
  expect(await maleRedioButton.isChecked()).toBe(true);
  await expect(maleRedioButton).toBeChecked();

  const femaleRedioButton: Locator = page.locator("#female");

  await expect(femaleRedioButton).toBeVisible();
  await expect(femaleRedioButton).toBeEnabled();

  await femaleRedioButton.check();
  expect(await femaleRedioButton.isChecked()).toBe(true);
  await page.waitForTimeout(2000);
  await expect(maleRedioButton).not.toBeChecked();
  await maleRedioButton.check();
  await expect(femaleRedioButton).not.toBeChecked();
  await expect(maleRedioButton).toBeChecked();
  await page.waitForTimeout(2000);
});

test.only("checkBox Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //Selelct specific checkbox (sunday) using getByLable and assert
  const sundayCheckBox: Locator = page.getByLabel("Sunday");
  await sundayCheckBox.check();
  await page.waitForTimeout(2000);
  await expect(sundayCheckBox).toBeChecked();
  expect(await sundayCheckBox.isChecked()).toBe(true);

  //2 Select all checkboxes and assert is checked
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  expect(checkboxes.length).toBe(7); // length ki value check kar raha hai.
  expect(checkboxes).toHaveLength(7); // Array mein total 7 elements hain ya nahi, ye check kar raha hai.
  console.log(checkboxes.length); //print lenght of locator array

  //3 selelct all checkboxes abd assert each is checked
  for (const checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  //4 uncheked last 3 checkboxes and assert

  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
  await page.waitForTimeout(2000);
  //5 selelct the checkboxes not slelect and uncheck the checkboxes which is checked
  for (const checkbox of checkboxes) {
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    } else {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  await page.waitForTimeout(2000);

  //4 uncheked last 3 checkboxes and assert

  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    await checkbox.waitFor();
  }

  //6 index using randome slelct checkboxes

  const indexes: number[] = [1, 5, 2];

  for (const i of indexes) {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
  }
  await page.waitForTimeout(2000);

  //7 . select checkbox based on label
  const weekday: string = "Sunday";

  for (const label of days) {
    if (label.toLowerCase() === weekday.toLowerCase()) {
      const checkbox: Locator = page.getByLabel(label);
      await checkbox.check();
    }
  }
  await page.waitForTimeout(2000);
});
