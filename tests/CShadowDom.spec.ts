/*
All locators in Playwright by default work with elements in Shadow DOM. 
The exceptions are:
Locating by XPath does not pierce shadow roots.
*/
import {test,Locator,expect} from "@playwright/test"
test('shadodom demo2',async({page})=>{

    await page.goto('https://shop.polymer-project.org/');
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    
    await page.waitForTimeout(5000);

    const titles=await page.locator('div[class="title"]').all();
    
    console.log("Number of product found ",titles.length);
    
    //expect(titles.length).toBe(16);
     expect(titles).toHaveLength(16)

    await page.waitForTimeout(2000);
})

test.only('shadodom demo3',async({page})=>{

    await page.goto('https://shop.polymer-project.org/');
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    
    await page.waitForTimeout(5000);

    const titles=page.locator('div[class="title"]');
    await expect(titles).toHaveCount(16);
    console.log("Number of product found ",(await titles.all()).length);
    
    

    await page.waitForTimeout(2000);
})

/* Interview Answer
page.locator() returns a single Locator object that can represent multiple matching elements.
locator.all() returns an array of Locator objects (Locator[]).
Methods like count(), nth(), first(), last(), and toHaveCount() 
work on the single Locator because it represents the entire collection of matching elements. */

/* How does toHaveCount() work then?

Playwright knows that this single Locator represents all matching elements, so it internally counts them.

const titles = page.locator("div.title");

await expect(titles).toHaveCount(16); */