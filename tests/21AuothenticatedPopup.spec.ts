import {test,expect,Locator, chromium} from "@playwright/test"

test("authentictaed popup",async()=>{
  const browesr= await chromium.launch();
  const context=await browesr.newContext({httpCredentials:{username:'admin',password:'admin'}});
  const page=await context.newPage();
  
  
  // await page.goto('https://the-internet.herokuapp.com/basic_auth');
  // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
  // await page.waitForLoadState();
  // //const header=page.locator('text="Congratulations! You must have the proper credentials."');
  // const header=page.getByText('Congratulations! You must have the proper credentials.');
  // await expect(header).toBeVisible();

  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await page.waitForLoadState();
  await expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible();

})