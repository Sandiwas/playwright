import {test,expect,Locator, chromium} from "@playwright/test"

test('tab handle',async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();
const parentPage=await context.newPage();

await parentPage.goto("https://testautomationpractice.blogspot.com/");

await Promise.all([parentPage.waitForEvent('popup'),parentPage.locator('button:has-text("Popup Windows")').dblclick()]);

await parentPage.waitForTimeout(2000);
const allPages= context.pages();
console.log("total number of pages ",allPages.length)

console.log("Main page url ", allPages[0].url())
console.log("Main page title ",await allPages[0].title())

console.log("first tab page url ",allPages[1].url())
console.log("first tab title  ",await allPages[1].title())

console.log("second tab   url ",allPages[2].url())
console.log("second tab title ",await allPages[2].title())


for(const pg of allPages){

const firstTabTitle=await pg.title();

if(firstTabTitle.includes('Fast and reliable end-to-end testing for modern web apps | Playwright')){
await pg.locator('a:has-text("Get started")').click();
await pg.waitForTimeout(3000);
pg.close();
}
}


await parentPage.waitForTimeout(3000);

});
