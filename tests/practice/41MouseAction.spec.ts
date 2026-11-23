import { expect, test } from "@playwright/test";

test.beforeEach("Launch Application for mouse action", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay");
  await expect(page).toHaveURL(/autoplay/);
});

test("1.Toggle button changes state when clicked", async ({ page }) => {
  const toggleButton = page.locator("#toggleBtn");
  const orignalText = await toggleButton.textContent();
  await toggleButton.click();
  const currentText = await toggleButton.textContent();
  expect(toggleButton).not.toBe(orignalText);
});

test("2.Right click/context click ", async ({ page }) => {
  const RightClickMeBtn = page.locator("button", { hasText: "Right Click Me" });
  await RightClickMeBtn.click({ button: "right" });

  const allOptions: string[] = await page.locator("#customContextMenu button").allInnerTexts();
  console.log(allOptions);
  expect(allOptions).toEqual(["Edit", "Cut", "Copy", "Paste", "Delete", "Quit"]);

  const quiteButton = page.locator("button", { hasText: "Quit" });
  await expect(quiteButton).toBeVisible();

  page.once("dialog", async (alert) => {
    expect(alert.message()).toContain("Quit");
    await alert.accept();
  });

  await quiteButton.click(); // Click action Triggers a Dialog
});

test("3.Mouse Hover interaction & tooltip", async ({ page }) => {
  const hoverButton = page.locator("span:has-text('Hover me')");
  await hoverButton.hover(); //Mouse hover
  await expect(hoverButton).toBeVisible();

  expect(await hoverButton.getAttribute("title")).toBe("This is a tooltip"); // Tool tip verification
  console.log(await hoverButton.getAttribute("title"));
});

test("Double-click button triggers the expected action", async ({ page }) => {
  const doubleClickBtn = page.locator('button:has-text("Double click")');

  page.once("dialog", async (alert) => {
    expect(alert.message()).toContain("Double clicked!");
    await alert.accept();
  });
  doubleClickBtn.dblclick();
});

//5. Copy text test -Double click
test("Copy Text button transfers value from field1 to field2", async ({ page }) => {
  const field1 = page.locator("#field1");
  const field2 = page.locator("#field2");
  const copyBtn = page.locator('button:has-text("Copy Text")');

  await field1.fill("Welcome");
  await copyBtn.dblclick();

  await expect(field2).toHaveValue("Welcome");
});

test("6. Drag and drop the draggable element into the drop zone", async ({ page }) => {
  const source = page.getByText("Drag me", { exact: true });
  const destination = page.getByText("Drop zone", { exact: true });

  page.on("dialog", async (alert) => {
    expect(alert.message()).toContain("Dropped!");
    await alert.accept();
  });

  await source.dragTo(destination); // Drag drop event triggers Dialog

  await page.waitForTimeout(3000);
});

//7. Slider
test("Range slider", async ({ page }) => {
  const slider = page.locator("#priceSlider");
  await slider.focus();
  await page.keyboard.press("Home");
  //await page.keyboard.press("End");

  // Move the slider till 50
  for (let i = 0; i < 50; i++) {
    await page.keyboard.press("ArrowRight");
  }

  const point = await page.locator("#sliderVal").innerText();
  console.log(point);
  await expect(page.locator("#sliderVal")).toHaveText("50");
});
