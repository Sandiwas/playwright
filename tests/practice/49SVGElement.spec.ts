import { expect, test } from "@playwright/test";

const url = "https://sdetqa.vercel.app/autoplay";

test.describe("SVG Eelemnet handling", () => {
  test.beforeEach("launch application", async ({ page }) => {
    await page.goto(url, { waitUntil: "domcontentloaded" });
  });

  test.afterEach("closed application", async ({ page }) => {
    await page.close();
  });

  test("shape test", async ({ page }) => {
    const shape = page.locator(".shape");
    await shape.nth(0).scrollIntoViewIfNeeded();
    console.log("count of shape ", await shape.count());
    await expect(shape).toHaveCount(4);
    expect(await shape.count()).toBe(4);

    const circle = page.locator("svg circle.shape");
    await expect(circle).toBeVisible();
    const circle_color = await circle.getAttribute("fill");
    expect(circle_color).toBe("DeepSkyBlue");
    console.log("circle Color : ", circle_color);

    const rectShape = page.locator("#rect-shape");
    await expect(rectShape).toBeVisible();
    const rectColor = await rectShape.getAttribute("fill");
    expect(rectColor).toEqual("BlueViolet");
    console.log("rect Color : ", rectColor);

    const polygonShape = page.locator("svg polygon.shape");
    await expect(polygonShape).toBeVisible();
    const polygonColor = await polygonShape.getAttribute("fill");
    expect(polygonColor).toContain("DarkOrange");
    console.log("polygon Color : ", polygonColor);

    const ellipseShape = page.locator("svg ellipse.shape");
    await expect(ellipseShape).toBeVisible();
    const ellipseShapeColor = await ellipseShape.getAttribute("fill");
    expect(ellipseShapeColor).toBe("Tomato");
    console.log("ellipse Color : ", ellipseShapeColor);
  });

  test("handle SVG Bar chart", async ({ page }) => {
    //1. Click a Specific Bar
    await page.locator("svg rect").nth(1).click();

    //2. bars & labels counts validations
    const bars = page.locator("svg").nth(1).locator("rect");
    expect(await bars.count()).toBe(5);
    const bar_count = await bars.count();

    const labels = page.locator("svg").nth(1).locator("text");
    expect(await labels.count()).toBe(5);
    const labels_count = await labels.count();

    for (let i = 0; i < bar_count; i++) {
      const label = await labels.nth(i).textContent();
      const height = await bars.nth(i).getAttribute("height");
      console.log(`${label} : ${height}`);
    }

    //4. Verify Highest Bar - expe 70
    let maxHeight = 0;
    for (let i = 0; i < bar_count; i++) {
      const height = Number(await bars.nth(i).getAttribute("height"));

      if (height > maxHeight) {
        maxHeight = height;
      }
    }
    expect(maxHeight).toBe(70);
  });
});
