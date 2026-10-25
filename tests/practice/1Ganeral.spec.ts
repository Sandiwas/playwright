import { test, expect } from "@playwright/test";

test("right click action", async ({ page }) => {
  await page.goto("https://rightclicklogo.com/");
  await page.getByAltText("Right Click Logo").click({ button: "right" });
  await page.waitForTimeout(3000);



  /*   const numbers1: number[] = [1, 2, 3];
  const result1: number[] = numbers1.map(function (num: number): number {
    return num * 2;
  });

  const numbers2: number[] = [1, 2, 3];
  const result2: number[] = numbers2.map((num: number): number => {
    return num * 2;
  });

  const numbers3: number[] = [1, 2, 3];
  const result3: number[] = numbers3.map((num) => num * 2);

  const numbers4: number[] = [1, 2, 3];
  numbers4.forEach(function (num: number): number {
    return num * 2;
  });

  const numbers5: number[] = [1, 2, 3];
  numbers5.forEach((num: number): number => {
    return num * 2;
  });

  const numbers6: number[] = [1, 2, 3];
  numbers6.forEach((num) => num * 2); */
});
