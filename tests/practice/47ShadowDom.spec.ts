import { expect, test } from "@playwright/test";

test("Shaadow DOM demo", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay");

  //const shadowHeading = await page.locator("text = Shadow DOM").textContent(); //correct
  // const shadowHeading = await page.locator("h3", { hasText: "Shadow DOM" }).textContent(); //correct
  const shadowHeading = page.getByRole("heading", { name: "Shadow DOM" }); //correct
  await shadowHeading.scrollIntoViewIfNeeded();

  const mainShasowHost = page.locator("#shadow_host");
  await expect(mainShasowHost).toBeVisible();

  const mobile = mainShasowHost.getByText("Mobiles");
  await expect(mobile).toHaveText("Mobiles");

  const laptop = page.locator("text= Laptops");
  await expect(laptop).toHaveText("Laptops");

  await mainShasowHost.getByRole("textbox").fill("hello dude");
  await expect(mainShasowHost.getByRole("textbox")).toHaveValue("hello dude");

  const checkbox = mainShasowHost.getByRole("checkbox");
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await page.waitForTimeout(3000);

  const fileInput = mainShasowHost.locator("input[type='file']");
  await expect(fileInput).toBeVisible();
  await fileInput.setInputFiles("testData/api.txt");

  const blogLink = mainShasowHost.getByRole("link", { name: "Blog" });
  await expect(blogLink).toBeVisible();
  await expect(blogLink).toHaveAttribute("href", "https://www.pavantestingtools.com/");

  const youtubeLink = page.getByRole("link", { name: "Youtube" });
  await expect(youtubeLink).toBeVisible({ timeout: 7000 });
  await expect(youtubeLink).toHaveAttribute("href", "https://www.youtube.com/@sdetpavan/videos");
  //same page pe open ho raha he es liye he nahi chalega
  // const [youtube] = await Promise.all([page.context().waitForEvent("page"), youtubeLink.click()]);
  
  
  await youtubeLink.click();
  await page.waitForURL("https://www.youtube.com/@sdetpavan/videos");

  console.log(page.url());

  await expect(page).toHaveURL(/videos/);
});
