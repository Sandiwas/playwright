import {test,expect,Locator,chromium} from '@playwright/test'


test('Single File uplocad',async()=>{

   const browser=await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();

   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator("#singleFileInput").setInputFiles('uploads/text.txt');
   await page.locator('button:has-text("Upload Single File")').click();
   const  msg=await page.locator('#singleFileStatus').textContent();
   expect(msg).toContain('text.txt');
   
       console.log('Single file upload is successful...');
    await page.waitForTimeout(5000);
   
})


test.only('Multiple File uplocad',async()=>{

   const browser=await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();

   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator("#multipleFilesInput").setInputFiles(['uploads/text.txt','uploads/BookAPI.json']);
    await page.locator('button:has-text("Upload Multiple Files")').click();
   const  msg=await page.locator('#multipleFilesStatus').textContent();
   expect(msg).toContain('text.txt');
   expect(msg).toContain('BookAPI.json');

    console.log('Multiple file upload is successful...');
    await page.waitForTimeout(5000);
   
})