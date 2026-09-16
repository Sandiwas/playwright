import {test,expect,Locator} from "@playwright/test"

const loginTestData:string[][]=[
                                ["laura.taylor1234@example.com","test123","valid"],
                                ["invaliduser@example.com", "test321", "invalid"],
                                ["validuser@example.com", "testxyz", "invalid"],
                                ["", "", "invalid"],
                            ];

  test.describe('Login data driven test',()=>{
    for(const [email,password,validity] of loginTestData){
        test(`Login test for ${email} and ${password}`,async({page})=>{
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator('input[value="Log in"]').click();

            if(validity.toLowerCase() === 'valid'){
                // Assert logout link is visible - indicates successful login
                 const logoutlink=page.locator("a[href='/logout']")
                 await expect(logoutlink).toBeVisible({timeout:50000});

            }else{
                  // Assert error message is visible
              const  errorMsg=page.locator("div.validation-summary-errors span");
              await expect(errorMsg).toBeVisible({timeout:50000});
              // Assert user is still on the login page
              await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        })
    }
  })

