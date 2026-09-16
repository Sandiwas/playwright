import {test,expect,Locator} from "@playwright/test"

test("Scrolling to footer",async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    //Footer element - automatically scrolled before doing any action
     const footerText=await page.locator('.footer-disclaimer').textContent(); //Automatic scrolling
     console.log('Footer text captured:' , footerText);
     await page.waitForTimeout(3000);

})

test("Scrolling inside dropdown",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   
     await page.locator('input#comboBox').click(); 
      const option= page.locator('#dropdown div:nth-child(100)')
      console.log("options capture from dropdown : ",option.textContent());
     await option.click();
     await page.waitForTimeout(3000);

})


test.only('Scrolling inside the table', async ({ page }) => {
  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); //Automatic scrolling - vertical
  console.log("Last Name from 10th Row & 2nd Column :", name); //Kelly

  const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); //Automatic scrolling - Horizantal
  console.log("Email from 10th Row & 9th Column :", email); //c.kelly@datatables.net

});
