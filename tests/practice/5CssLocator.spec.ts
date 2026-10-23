    import { test, expect, Locator } from "@playwright/test";

    test("CSS Locator", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/", {
        waitUntil: "domcontentloaded",
    });

    //Tag and id

    const serchTextBox: Locator = page.locator("input#small-searchterms");
    await serchTextBox.fill("computer");
    const inputTextBox: string = await serchTextBox.inputValue();

    await expect(serchTextBox).toBeVisible();
    console.log("input value : ", await serchTextBox.inputValue());

    expect(inputTextBox).toBe("computer");
    expect(inputTextBox).toContain("compu");
    expect(inputTextBox).toMatch("compu");
    expect(inputTextBox).toEqual("computer");

    const leanghOfString: number = (await serchTextBox.inputValue()).length;
    console.log("Input string length : ", leanghOfString);

    expect(inputTextBox.length).toBeGreaterThan(0);
    expect(inputTextBox.length).toBe(leanghOfString);
    await expect(serchTextBox).toHaveCount(1);

    //Tag and class

    const inputtext: Locator = await page.locator("input.search-box-text");
    await inputtext.fill("Card");
    await expect(inputtext).toHaveCount(1);
    await expect(inputtext).toBeVisible();


    //Tag with any other attribute 
    await page.locator("input[id='small-searchterms']").fill('computer');
    await page.waitForTimeout(2000);
    await expect(page.locator("input[id='small-searchterms']")).toBeVisible();

    //Tag with class and  attribute 
    await page.locator("input.search-box-text[name='q']").fill("$25 Virtual Gift Card");
    await page.waitForTimeout(2000);
    await expect(page.locator("input.search-box-text[name='q']")).toBeVisible();
    });
