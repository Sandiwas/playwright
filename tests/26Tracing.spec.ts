/*
3 ways to create trace file(.zip)
------------------------------
1) using playwright.config.ts
2) using command
             npx playwright test mytest.spec.ts --trace on
3) code(programmitically)

     context.tracing.start({screenshots:true,snapshots:true});
     //statements
      context.tracing.stop({path:'trace.zip'});

To view trace file ( 3 ways)
---------------------------
1) from html file--> click on trace.zip
2) through command  - npx plawright show-trace trace.zip
3) utility  -- > https://trace.playwright.dev/    ( drag and drop/upload trace.zip file)

*/


import {test,expect,Locator} from "@playwright/test"
test.only("login  demo", async ({page,context})=>{

context.tracing.start({screenshots: true,snapshots: true});

  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
 context.tracing.stop({path:'./trace.zip'});
}); 


//not attached with the report  //https://trace.playwright.dev/ //npx playwright show-trace trace.zip