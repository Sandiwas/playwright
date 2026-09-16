import {test,expect,Locator} from "@playwright/test"

test.beforeAll("beforeAll hooks",async()=>{
console.log("beforeall.... hook")
});

test.afterAll("afterAll hooks",async()=>{
console.log("afterAll.... hook")
});


test.beforeEach("beforeEach hooks",async()=>{
console.log("beforeEach....hook")
});

test.afterEach("afterEach hooks",async()=>{
console.log("afterEach.... hook")
});


test("Test1",async()=>{
    console.log("First Test1");
})

test("Test2",async()=>{ 
    console.log("Second Test2");
}) 

test("Test3",async()=>{
    console.log("Third Test3");
})      

test("Test4",async()=>{
    console.log("Third Test4");
})     

