import {test,expect,Locator} from "@playwright/test"

test('Handle Dynamic Element',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil :'load'})
    //await page.locator("//button[contains(@name,'st')]").click();
     await page.locator("button[name*='st']").click();


    //const button: Locator = page.locator("//button[contains(@name,'st')]");
    //button.click();
    //await page.waitForTimeout(2000);

    //usign playwrite specific method
    // const btn: Locator = page.getByRole("button", { name: /START|STOP/ });
    // await btn.click();
    // await page.waitForTimeout(2000);

   // const btn=page.getByRole('button',{name:/START|STOP/}); //regex use here 
   //const btn=page.getByRole('button',{name:/START|STOP/i}); //smallcase kartabhe 
     const btn:Locator=page.locator('button:has-text("START"),button:has-text("STOP")')
    await btn.click();
    console.log(await btn.textContent())
})






// Playwright Extension	Example	One-line Explanation:has-text()	button:has-text("START")	Finds elements containing the specified text.
// :text()      	  button:text("START")	Finds elements matching the text.
// :text-is()      	button:text-is("START")	Finds elements whose text exactly equals the value.
// :text-matches()	button:text-matches("ST.*")	Finds elements whose text matches a regex.
// :has()	div:has(button)	Finds elements that contain another element.
// :visible	button:visible	Finds only visible elements.
// :nth-match()	:   nth-match(button, 2)	Selects the nth matching element.
// :right-of()	    input:right-of(:text("Name"))	Finds elements to the right of another element.
// :left-of()   	  button:left-of(:text("Submit"))	Finds elements to the left of another element.
// :above()	        input:above(:text("Password"))	Finds elements above another element.
// :below()	      input:below(:text("Username"))	Finds elements below another element.
// :near()	      button:near(:text("Login"))	Finds elements located near another element.
