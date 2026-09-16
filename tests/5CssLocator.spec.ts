import {test,expect,Locator} from "@playwright/test"


test("css loactor",async({page})=>{
   
  
    await page.goto("https://demowebshop.tricentis.com/",{waitUntil : "domcontentloaded"});

    //Tag and id 
    // const searchBox:Locator=page.locator("input#small-searchterms");
    // await searchBox.fill("computer");

    await page.locator("input#small-searchterms").fill("computer");
    await page.waitForTimeout(2000);
    await expect(page.locator("input#small-searchterms")).toBeVisible();

    //Tag and class

    await page.locator("input.search-box-text").fill("T-Shirts");
    await page.waitForTimeout(2000);
    await expect(page.locator("input.search-box-text")).toBeVisible();


    //Tag with any other attribute 
    await page.locator("input[name='q']").fill("computer");
    await page.waitForTimeout(2000);
    await expect(page.locator("input[name='q']")).toBeVisible();

        //Tag with class and  attribute 
    await page.locator("input.search-box-text[name='q']").fill("$25 Virtual Gift Card");
    await page.waitForTimeout(2000);
    await expect(page.locator("input.search-box-text[name='q']")).toBeVisible();



})