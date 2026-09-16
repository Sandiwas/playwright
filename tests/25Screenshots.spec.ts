import {test,expect, Locator} from "@playwright/test"

test("screenshots demo", async ({page})=>{

    await page.goto("https://www.demoblaze.com/");

    const timestamp=Date.now(); 
    await page.waitForTimeout(2000);
    console.log(timestamp); 
    //only capture screenshit only visible on brower 
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});
   
    //fullpage screenshot
    await page.screenshot({path:'screenshots/'+'fullpagescreenshot'+timestamp+'.png',fullPage:true})
   // const samsungIng:Locator=page.locator("img[alt='Second slide']");
 //await samsungIng.screenshot({path:'screenshots/'+'samgugimg'+timestamp+'.png'})
   await page.getByAltText('First slide').screenshot({path:'screenshots/'+'samsungMobileImg'+timestamp+'.png'})
   await page.locator('#tbodyid').screenshot({path:'screenshots/'+'featuresProducts'+timestamp+'.png'})

});


test.only("login  demo", async ({page})=>{
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@13');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
});
