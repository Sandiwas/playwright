import {test,Locator,expect} from "@playwright/test"

test("xpath axes",async({page})=>{
   // test.setTimeout(60000);
await page.goto("https://www.w3schools.com/html/html_tables.asp",{waitUntil : 'domcontentloaded',timeout :60000});

//1 self 

const germenyCell:Locator=page.locator("//td[text()='Germany']/self::td");
await expect(germenyCell).toHaveText('Germany');
await expect(germenyCell).toBeVisible();
await expect(germenyCell).toContainText("Ger");

console.log("Cell Text : ",await germenyCell.innerText());


//2 parent 
const paremtRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
await expect(paremtRow).toContainText("Alfreds Futterkiste");
console.log("Row full Text : ", await  paremtRow.innerText())

//3 Child
const secondRowCells:Locator=page.locator("//table[@id='customers']/tbody/tr[2]/child::td");

await expect(secondRowCells).toHaveCount(3);
console.log("count of Element ",await secondRowCells.count());

const countOfEle:Locator[]=await secondRowCells.all();
expect(countOfEle).toHaveLength(3);
const countOfEleName:string[]=await secondRowCells.allInnerTexts();
expect(countOfEleName).toHaveLength(3);
console.log(countOfEle);
console.log(countOfEleName);

for(let item of countOfEle){
   await expect(item).toBeVisible();
   console.log(await item.innerText());
}

for(let item of countOfEleName){
   expect(item).not.toBe("");
   console.log(item);  
}

  //4 ancestor
  const table:Locator=page.locator("//td[text()='Germany']/ancestor::table");
  await expect(table).toHaveAttribute('id','customers')
  

    //5 descendant

  const allTableCell:Locator=page.locator("//table[@id='customers']//descendant::td");
  const allTableCellArray:Locator[]= await page.locator("//table[@id='customers']//descendant::td").all();
  let count:number=await page.locator("//table[@id='customers']//descendant::td").count();
  console.log("Count of element : ",count);
  
  await expect(page.locator("//table[@id='customers']//descendant::td")).toHaveCount(18);
  expect(allTableCellArray).toHaveLength(count);
  expect(count).toBeGreaterThan(0);
  console.log("All table count Locator array ",allTableCellArray);
  console.log("All table count Locator array ",await allTableCell.allInnerTexts());

   for(let cellText of  allTableCellArray){
   await expect(cellText).toBeVisible();
   console.log(await cellText.innerText());
   }
  //6 following

  const companyName:Locator=page.locator("//td[text()='Germany']/following::td[1]");
  await expect(companyName).toBeVisible();
  await expect(companyName).toHaveText("Centro comercial Moctezuma");
  await expect(companyName).toContainText("Centro")

  const companyNameString:string =await companyName.innerText();
  console.log("company Name lenghth", companyNameString);
  console.log("company Name lenghth", companyNameString.length); 
  expect(companyNameString.length).toBeGreaterThan(0);
  console.log("company Name lenghth", companyNameString.replace(/\s/g,"")); 
  console.log("company Name lenghth", companyNameString.replace(/\s/g,"").length); 

  const companyNames:Locator=page.locator("//td[text()='Germany']/following::td");
  expect(await companyNames.all()).toHaveLength(35);
  expect(await companyNames.allInnerTexts()).toHaveLength(35);
  await expect(companyNames).toHaveCount(35);
  const tdNamesArrayLocator:Locator[]=await companyNames.all();
  const tdNamesArray:string[]=await companyName.allInnerTexts();

  for(let name of tdNamesArrayLocator){
  await expect(name).toBeVisible();
  expect(await name.innerText()).not.toBe("");
  const str:string=await name.innerText();
  console.log("string ", str)
  console.log("string is ",str.replace(/\s/g,"").length)
  }
  
  //7 following-sibling axis
  const rightSiblings:Locator=page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
  await expect(rightSiblings).toHaveCount(1);
  console.log("Following Sibling of Maria Anders is ",await rightSiblings.innerText());
  

   //8 preceding
    const tdPrecedingElements:Locator=page.locator("//td[normalize-space()='Germany']/preceding-sibling::td");
    await expect(tdPrecedingElements).toHaveCount(2);
    console.log("element array : ",await tdPrecedingElements.allInnerTexts());
  for(let item of await tdPrecedingElements.all()){
   await expect(item).toBeVisible();
   console.log(await item.innerText());
   
}
    console.log(await tdPrecedingElements.count());


  //9 preceding-sibling axis
  const leftPrecedingSiblings:Locator=page.locator("//td[normalize-space()='Germany']/preceding-sibling::td");

  await expect(leftPrecedingSiblings).toHaveCount(2);
    await expect(leftPrecedingSiblings.nth(0)).toHaveText("Alfreds Futterkiste");
  await expect(leftPrecedingSiblings.nth(1)).toHaveText("Maria Anders");

   await expect(leftPrecedingSiblings.nth(0)).toContainText("Alfreds");
   await expect(leftPrecedingSiblings.nth(1)).toContainText("Maria");
   console.log("Preceding siblings ", await leftPrecedingSiblings.count());
})


// const text = "Centro comercial Moctezuma";

// // Without g
// console.log(text.replace(/ /, "")); 
// // "Centrocomercial Moctezuma"

// // With g
// console.log(text.replace(/ /g, "")); 
// // "CentrocomercialMoctezuma"

//   / / → pehla space replace karega.
//    / /g → saare spaces replace karega.
//    /\s/g → saare whitespace characters (spaces, tabs, line breaks) replace karega.


//Load
// Resource	Kya kaam hai?
// HTML	Website ka structure
// CSS	Website ka design aur styling
// JavaScript	Website ka behaviour aur functionality
// Images	Website par photos aur logos
// Fonts	Text ka style
// Iframe resources	Website ke andar embedded doosre page ke resources

//domcontentloaded → Browser ne HTML parse karke DOM bana liya.
//load → HTML aur dependent resources load ho gaye.