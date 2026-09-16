/*
An iframe (short for “inline frame”) is an HTML element that allows you to 
embed another HTML document within the current document. 
Iframes are commonly used to embed external content such as videos,
 maps, or other web pages (as seen here) into a web page without affecting the parent document.
*/

// `page.frame()` may return a **Frame object** if the frame is found, or **null** if the frame does not exist.

// The `?.` (Optional Chaining Operator) checks whether `frame` is available before calling `locator()`. 
// If `frame` is `null`, it prevents a runtime error and safely skips the method call.


import { test, expect, Locator,Frame } from "@playwright/test";  //rerun type likha he es wajese ham Frame import kiaya he 

test("frames demo", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

//total number of frame present on frame
  const frames: Frame[] = page.frames();
  console.log("No of frames ", frames.length);

//  //---- Approach 1: using page.frame() ----
//    const frame:Frame|null=page.frame('SingleFrame');
//   // const frame=page.frame({name:'SingleFrame'});
//   //await frame?.locator("input[type='text']").fill("sandip");
//   if(frame){
//    await frame.locator("input[type='text']").fill("sandip");
//   }else {
//     console.log("frame is not available");
//   }
//   await page.waitForTimeout(3000);

     // --- Approach 2: Using frameLocator() ---

const inputBox=page.frameLocator("#singleframe").locator("input[type='text']");
await inputBox.fill("welcome");
});


test.only("inner or child frame demo", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html",{waitUntil:'domcontentloaded'});
  await page.getByRole('link', {name :'Iframe with in an Iframe'}).click();

  const frame=page.frame({url :"https://demo.automationtesting.in/MultipleFrames.html"});
  if(frame){
 //const textName=await frame.locator('div[class="iframe-container"] h5').textContent();
 const textName=await frame.getByText('Nested iFrames').textContent();
 console.log("frame name : ",textName )
  const childFrames=frame.childFrames();
  const numberoffarems=childFrames.length;    
  console.log("number of frames",numberoffarems);
  const childframeName=await childFrames[0].getByText("iFrame Demo").textContent();
  console.log("frame name : ",childframeName );
  await childFrames[0].locator("input[type='text']").fill("sandip");
  const parent=frame.parentFrame();
  if(parent){
const textName=await frame.getByText('Nested iFrames').textContent();
console.log("Parent frame name  : ",textName )
  }else{
console.log("Parent frame is not availabe");
  }

} 
  else{
  console.log("Frame is not availabe");
  }
});


