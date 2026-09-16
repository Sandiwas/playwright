import {test,Locator,expect} from "@playwright/test"


test('Mouse hover',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
    
    const pointMe=page.locator('button:has-text("Point Me")');
    pointMe.hover();
    
    const mobile=page.locator('div.dropdown-content a:nth-child(2)');
    mobile.hover();
    
    await page.waitForTimeout(5000);

})

test('Right click',async({page})=>{
   await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    
    const rightclickMe=page.locator('span.context-menu-one');
    await rightclickMe.click({button:'right'}); // this will perform the right click action
    await page.waitForTimeout(5000);

})

test('Double click',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/'");
    
    const CopyTextBtn=page.locator('button[ondblclick="myFunction1()"]');
    await CopyTextBtn.dblclick();  // performs teh double click action

   const filed2=page.locator('#field2');
    await expect(filed2).toHaveValue('Hello World!');
    await page.waitForTimeout(5000);

})

test.only('Drag and drop',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");

      const source=page.locator("div#draggable");
      const destination=page.locator("div#droppable");

//Appraoch 1:  mouse hover and drag manually
   //   await source.hover();
   //   await page.mouse.down();
   //   await destination.hover();
   //   await page.mouse.up();    


//Appraoch 2:  mouse hover and drag manually
   await source.dragTo(destination); // this wil perform drag and drop action
   await page.waitForTimeout(5000);

})