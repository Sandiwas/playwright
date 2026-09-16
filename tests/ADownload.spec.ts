import {test,expect,Locator,chromium} from "@playwright/test"
import fs from "fs";

test('Downlaod Text file and verify is exists',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
  // Navigate to the download page
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

//Text file    
await page.locator('#inputText').fill('Welcome for downlaod file'); // Filling text in the input box
await page.locator('#generateTxt').click() // Clicking on the 'Generate and Download text file' button

// Start waiting for the download before clicking
const [download]=await Promise.all([page.waitForEvent("download"),page.locator("#txtDownloadLink").click()])

// Save the file to a custom path
const downloadPath='downloads/firstFile.txt'
await download.saveAs(downloadPath);

// Check if file exists using Node's fs module
const existsFile=fs.existsSync(downloadPath);
expect(existsFile).toBeTruthy();

await page.waitForTimeout(5000);
// Clean up downloaded files
if(existsFile){
    fs.unlinkSync(downloadPath);
}
})


test.only('Download Pdf file and verify it exists',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
  // Navigate to the download page
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

//Text file    
await page.locator('#inputText').fill('Welcome for downlaod file'); // Filling text in the input box
await page.locator('#generatePdf').click() // Clicking on the 'Generate and Download text file' button

// Start waiting for the download before clicking
const [download]=await Promise.all([page.waitForEvent("download"),page.locator("#pdfDownloadLink").click()])

// Save the file to a custom path
const downloadPath='downloads/firstFile.pdf'
await download.saveAs(downloadPath);

// Check if file exists using Node's fs module
const existsFile=fs.existsSync(downloadPath);
expect(existsFile).toBeTruthy();

await page.waitForTimeout(5000);
// Clean up downloaded files
if(existsFile){
    fs.unlinkSync(downloadPath);
}
})