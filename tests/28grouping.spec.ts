
// npx playwright test 31Tagging --headed --grep  MyGroup  

import {test,expect,Locator} from "@playwright/test"

test.describe("group1",()=>{
test("Test1",async()=>{
    console.log("First Test1");
})
test("Test2",async()=>{ 
    console.log("Second Test2");
})
})

test.describe("group2",()=>{
test("Test3",async()=>{
    console.log("Third Test3");
})      

test("Test4",async()=>{
    console.log("Third Test4");
})     
})
