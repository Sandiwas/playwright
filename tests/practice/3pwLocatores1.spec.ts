import { test, expect, Locator } from "@playwright/test";

test("locator practice", async ({ page }) => {
  await page.goto("file:///C:/Ginger_Solution_New/app.html");

  // getByRole() Locators
  await page.getByRole("textbox", { name: "Username:" }).fill("sandiwas");
  const userNameInputText = await page.getByRole("textbox", { name: "Username:" }).inputValue();
  console.log("Username : ", userNameInputText);

  await expect(page.getByRole("link", { name: "Home" }).nth(0)).toBeVisible();
  await expect(page.getByRole("link",{name:"Products"}).nth(0)).toContainText("Produ");
  await expect(page.getByRole("link",{name:"Contact"}).nth(0)).toHaveText("Contact");

  const PrimaryBtn=await page.getByRole('button',{name:"Primary Action"}).innerText();
  console.log("Promary Button test ",PrimaryBtn);

  const ToggleBtn=await page.getByRole('button',{name:"Toggle Button"}).textContent();
  console.log("Toggle Button test ",ToggleBtn);

  await expect(page.getByRole('button',{name:"Toggle Button"})).toBeVisible();
  expect(ToggleBtn).toContain("Toggle");

  await page.getByRole('checkbox',{name:'Accept terms'}).check();

  await expect(page.getByRole('checkbox',{name:'Accept terms'})).toBeChecked();

  await page.waitForTimeout(2000);
  const heading1=await page.getByRole('heading',{name:'Form Elements'}).innerText();
  console.log("first heading : ",heading1);

  const heading2=await page.getByRole('heading',{name:'getByRole()'}).innerText();
  console.log("second heading : ",heading2);

  const alertMsg=await page.getByRole('alert').innerText();
  console.log("alert message : ",alertMsg);
  await expect(page.getByRole('alert')).toHaveText("This is an important alert message!")

  const buttonText=await page.getByRole('button',{name:'Div with button role'}).innerText();
  await expect(page.getByRole('button',{name:'Div with button role'})).toContainText('Div with');
  console.log("Button text is : ", buttonText );
  

  // getByText() Locators

  const paraText1=await page.getByText("their text content.").innerText();
  console.log("Para text : ",paraText1 );

  const paraText2=await page.getByText("some important text ").innerText();
  console.log("Para text : ",paraText2 );

  const item1=await page.getByText("List item 1").innerText();
  await expect( page.getByText("List item 1")).toHaveText('List item 1');
  console.log('Item 1 : ',item1);

  await expect(page.getByText("This paragraph contains some important")).toHaveText("This paragraph contains some important text that you might want to locate.")
  await expect(page.getByText("Locate elements by their text content.")).toContainText("their text content.")
  await expect( page.getByText("List item 1")).toBeVisible();

  const item2=await page.getByText("List item 2").innerText();
  await expect( page.getByText("List item 2")).toContainText('List item 2');
  console.log('Item 1 : ',item2);

 const linkText=await page.getByText("link").innerText();
 console.log("link text : ",linkText);
 
  const btnSubmit = await page.getByText("Submit Form").innerText();
  expect(btnSubmit).toContain("Submit");
  expect(btnSubmit).toEqual("Submit Form");
  expect(btnSubmit).toMatch("Submit");
  await page.waitForTimeout(2000);
 const testMsg=await page.getByText("Click the button above to submit your information.").textContent();
 await expect(page.getByText("Click the button above to submit your information.")).toBeVisible();
 console.log("text message : ",testMsg);

  //3. getByLabel() Locators

  await page.getByLabel('Email Address:').fill('sandiwas');
  await page.getByLabel('Password:').fill('sandiwas');
  await page.getByLabel('Your Age:').fill('20');
  await page.getByLabel('Express').check();
  await page.getByLabel('Standard').check();
  
  await page.waitForTimeout(3000);

   //4. getByPlaceholder() Locators

    await page.getByPlaceholder('Enter your full name').fill('keep try');
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9999999999');
    await page.getByPlaceholder("Type your message here...").fill("learn from mistakes\nlearn from mistakes");
    await page.getByPlaceholder('Search products...').pressSequentially("Laptop");
    await page.waitForTimeout(3000);

    await page.getByRole('button',{name:'Search'}).click();

      
  await page.waitForTimeout(3000);

    //5. getByAltText() Locators
    await expect(page.getByAltText("logo image")).toBeVisible();
    await page.getByAltText('logo image').isVisible();
  
    //6. getByTitle() Locators

    await expect(page.getByTitle('Home page link')).toBeVisible();
    await expect(page.getByTitle('HyperText Markup Language')).toContainText('HTML');
    await expect(page.getByTitle('Tooltip text')).toHaveText('This text has a tooltip');
    await expect(page.getByTitle('Click to save your changes')).toBeVisible();

    await page.waitForTimeout(3000);

    //7. getByTestId() Locators

    await expect(page.getByTestId('profile-name')).toBeVisible();
    await expect(page.getByTestId('profile-email')).toHaveText('john.doe@example.com');
    await expect(page.getByTestId('edit-profile-btn')).toContainText('Profile');
    await page.getByTestId("edit-profile-btn").click();

    await expect(page.getByTestId('product-name').nth(0)).toContainText('A')
    await expect(page.getByTestId('product-name').nth(1)).toContainText('B')
    await expect(page.getByTestId('product-name').nth(2)).toContainText('C')

           
     console.log(await page.getByTestId('product-name').nth(0).innerText());
     console.log(await page.getByTestId('product-name').nth(1).innerText());
     console.log(await page.getByTestId('product-name').nth(2).innerText());

     await expect(page.getByTestId('product-price').nth(0)).toContainText('99')
     await expect(page.getByTestId('product-price').nth(1)).toHaveText('$29.99')
     await expect(page.getByTestId('product-price').nth(2)).toBeVisible()

     console.log(await page.getByTestId('product-price').nth(0).innerText());
     console.log(await page.getByTestId('product-price').nth(1).innerText());
     console.log(await page.getByTestId('product-price').nth(2).innerText());
 
     await expect(page.getByTestId('nav-home')).toBeVisible();
     await expect(page.getByTestId('nav-products')).toContainText('Products');
     await expect(page.getByTestId('nav-contact')).toHaveText('Contact');


    const product:Locator[]=await page.getByTestId('product-name').all();
    console.log("Product count ",await page.getByTestId('product-name').count());
    
    const productPrice:Locator[]=await page.getByTestId('product-price').all();

    expect(product).toHaveLength(3);
    
    const productArray:string[]=await page.getByTestId('product-name').allInnerTexts();
    const productPriceArray:string[]=await page.getByTestId('product-price').allTextContents();
    console.log("Product Array : ",productArray);
    console.log("Price Array : ",productPriceArray);
    
    console.log(productArray)

    for(let product of productArray){
       expect(product).not.toBe('');
       expect(product).toContain('Product');
       console.log(product.toLowerCase())
    }

       for(let price of productPriceArray){
       expect(price).not.toBe('');
       expect(price).toContain('$');
       console.log(price)
    }

    // for(let item of product){
    //     await expect(item).toBeVisible();
    //     const productName=await item.innerText();
    //     console.log(productName)
    // }

    
    // for(let price of productPrice){
    //     await expect(price).toBeVisible();
    //     const productName=await price.innerText();
    //     console.log(productName)
    // }
    
    
            
            

});
